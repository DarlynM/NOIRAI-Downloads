// Black-box tests against NOIR's packaged IPC; synthetic inputs only.
const http=require('node:http'),assert=require('node:assert/strict');
module.exports=async({call,check,until})=>{
 await check('Optional tools start disabled and cannot inspect an unselected window',async()=>{const s=await call('toolbox');assert.equal(s.imageAgent,false);assert.equal(s.plugins.length,0);assert.equal(s.computer.target,null);await assert.rejects(()=>call('computerInspect'),/Select a window/);});
 let calls=0;
 const server=http.createServer(async(req,res)=>{let body='';for await(const part of req)body+=part;const m=JSON.parse(body);let result;
  if(m.method==='tools/list')result={tools:[{name:'add',description:'Add two integers for a synthetic qualification test',inputSchema:{type:'object',properties:{a:{type:'integer'},b:{type:'integer'}},required:['a','b'],additionalProperties:false}}]};
  else if(m.method==='tools/call'){calls++;result={content:[{type:'text',text:String(m.params.arguments.a+m.params.arguments.b)}]};}
  else{res.writeHead(400);res.end();return;}
  res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({jsonrpc:'2.0',id:m.id,result}));
 });
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));let plugin;
 try{
  await check('Real MCP discovery, one-time approval and execution work in the public package',async()=>{plugin=await call('pluginConnect',{name:'Synthetic calculator',endpoint:'http://127.0.0.1:'+server.address().port+'/mcp',protocol:'2026-07-28',token:''});assert.equal(plugin.enabled,false);assert.equal(calls,0);await call('pluginEnable',{id:plugin.id,enabled:true});const p=await call('toolPrepare',{action:{tool:'plugin',plugin:plugin.id,name:'add',arguments:'{"a":12,"b":30}'}});assert.equal(calls,0);assert.equal((await call('toolExecute',{id:p.id})).content[0].text,'42');assert.equal(calls,1);await assert.rejects(()=>call('toolExecute',{id:p.id}));});
  await check('A real local model requests an MCP call and waits for user approval',async()=>{
   const before=calls,project=await call('newProject',{name:'SYNTHETIC_PLUGIN_AGENT'}),chat=await call('newChat',{project});
   await call('send',{chat,prompt:'Use the connected Synthetic calculator plugin to add 19 and 23. Discover its tools if necessary. Call its add tool with a=19 and b=23. Do not write or run code. After the plugin result, report the answer and finish.',mode:'Agent',permissions:{edits:false,commands:false}});
   let nextTrace=0;
   function savedTrace(){
    const path=require('node:path'),root=process.env.NOIR_RELEASE_TEST_ROOT;
    if(process.env.GITHUB_ACTIONS!=='true'||!root||!path.resolve(root).startsWith(path.resolve(process.env.RUNNER_TEMP)+path.sep))return {};
    const {DatabaseSync}=require('node:sqlite');
    const db=new DatabaseSync(path.join(root,'data','NoirgenlocalAI.sqlite'),{readOnly:true});
    try{
     const row=db.prepare('SELECT data FROM run_state WHERE run=(SELECT run FROM tasks WHERE chat=? ORDER BY rowid DESC LIMIT 1)').get(chat);
     const memo=row?JSON.parse(row.data):{};
     return {iteration:memo.iteration,limit:memo.limit,question:memo.question?.question,steps:(memo.steps||[]).slice(-10).map(s=>({kind:s.kind,tool:s.action?.tool,summary:s.summary?.slice(0,160),phase:s.phase,time:s.time}))};
    }finally{db.close();}
   }
   const approval=await until(async()=>{
    const state=await call('state',{chat});
    const pending=state.approvals.find(a=>a.chat===chat&&a.status==='pending');
    const task=state.tasks.find(t=>t.chat===chat);
    if(Date.now()>=nextTrace||pending||task?.status==='question'){
     console.log('SYNTHETIC_MCP_PHASE '+JSON.stringify({busy:state.busy,activeChat:state.activeChat===chat,task:task?.status,approval:!!pending,run:state.conversationRun?.status,trace:savedTrace()}));
     nextTrace=Date.now()+30000;
    }
    if(task?.status==='question'||(!pending&&!state.busy&&['failed','limited','complete','cancelled','interrupted'].includes(task?.status))){
     const reply=(await call('messages',{chat})).filter(m=>m.role==='assistant').at(-1)?.content;
     throw Error('Synthetic calculator stopped without requesting approval. Task '+task.status+'. Reply: '+String(reply||task.error||'No reply').slice(0,600)+' Trace: '+JSON.stringify(savedTrace()));
    }
    return pending;
   },600000);
   assert.equal(calls,before);await call('approveCommand',{id:approval.id,decision:'once'});
   await until(async()=>{const s=await call('state'),task=s.tasks.find(t=>t.chat===chat);if(s.approvals.some(a=>a.chat===chat&&a.status==='pending'))throw Error('Model requested another approval after the plugin result');if(!s.busy&&task&&['failed','limited','cancelled'].includes(task.status))throw Error('Plugin continuation ended '+task.status+': '+task.error);return !s.busy&&task?.status==='complete';},300000);
   assert.equal(calls,before+1);assert.ok((await call('messages',{chat})).some(m=>m.role==='assistant'&&/42/.test(m.content)));
  });
 }finally{if(plugin)await call('pluginRemove',{id:plugin.id}).catch(()=>{});server.closeAllConnections();server.close();}
 let imageId;
 if(process.env.NOIR_TEST_IMAGES==='true'){
  await check('Image runtime and starter model download into an empty image library',async()=>{const s=await call('toolbox');assert.equal(s.images.models.length,0);assert.equal(s.images.runtimes.cpu,false);await call('imageInstall',{device:'cpu',withModel:true});const ready=await call('toolbox');assert.equal(ready.images.runtimes.cpu,true);assert.ok(ready.images.models.some(m=>m.id==='sd15'&&m.available&&m.sha256==='6ce0161689b3853acaa03779ec93eafe75a02f4ced659bee03f50797806fa2fa'));});
  await check('Fresh public image setup produces a real decoded PNG on CPU',async()=>{const img=await call('imageGenerate',{model:'sd15',prompt:'A small red cabin beside a blue lake, watercolor painting',negative:'text, watermark',width:512,height:512,steps:8,seed:3818,guidance:7,device:'cpu'});imageId=img.id;const preview=await call('imagePreview',{id:img.id});assert.ok(preview.startsWith('data:image/png;base64,'));const png=Buffer.from(preview.split(',')[1],'base64');assert.equal(png.toString('hex',0,8),'89504e470d0a1a0a');assert.equal(png.readUInt32BE(16),512);assert.equal(png.readUInt32BE(20),512);assert.ok(png.length>30000);});
 }
 return imageId;
};
