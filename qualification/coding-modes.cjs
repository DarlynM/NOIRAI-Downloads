// Black-box public executable checks. This is test harness code, not app source.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
module.exports=async({call,check,until,root,project})=>{
 const file=name=>path.join(root,'workspaces','SYNTHETIC_RELEASE_CHECK',name);
 async function finish(chat) {
  const started=Date.now();let nextReport=started+45000;
  const terminal=new Set(['complete','review','approval','failed','limited','cancelled']);
  return until(async()=>{
   const state=await call('state');
   const task=state.tasks.find(item=>item.chat===chat);
   if(task&&!state.busy&&terminal.has(task.status))return state;
   if(Date.now()>=nextReport){
    nextReport=Date.now()+45000;
    const detail=task?await call('taskDetail',{id:task.id}):null;
    const events=detail?.events||detail?.activity||[];
    console.log('CPU coding check',JSON.stringify({seconds:Math.round((Date.now()-started)/1000),status:task?.status,busy:state.busy,changes:state.changes.filter(c=>task?.run&&c.run===task.run).length,events:events.length}));
   }
   return false;
  },900000);
 }
 async function send(mode,prompt,permissions={edits:false,commands:false}){const chat=await call('newChat',{project});await call('send',{chat,prompt,mode,permissions});const state=await finish(chat);return{chat,state,task:state.tasks.find(t=>t.chat===chat)};}
 await call('save',{project,path:'review_math.cjs',before:null,after:'module.exports = (a, b) => a - b;\n'});
 await check('Review finishes real findings and enforces read-only tools',async()=>{const r=await send('Review','Read review_math.cjs. This function should add numbers. Report its bug with the file and line. Do not edit or run commands.',{edits:true,commands:true});assert.equal(r.task.status,'complete',r.task.error);assert.ok((await call('messages',{chat:r.chat})).some(m=>m.role==='assistant'&&/subtract|minus|a\s*-\s*b|addition|add/i.test(m.content)));assert.match(fs.readFileSync(file('review_math.cjs'),'utf8'),/a - b/);assert.ok(!r.state.changes.some(c=>c.run===r.task.run));});
 await check('Review Edits patches only after revision-bound approval',async()=>{const r=await send('Review Edits','Read review_math.cjs and patch a - b to a + b. Leave this one edit proposed for review, then finish without running commands.');assert.equal(r.task.status,'review',r.task.error);const c=r.state.changes.find(c=>c.run===r.task.run&&c.path==='review_math.cjs'&&c.status==='pending');assert.ok(c);assert.match(fs.readFileSync(file('review_math.cjs'),'utf8'),/a - b/);const d=await call('reviewDetail',{change:c.id});await call('reviewDecision',{change:c.id,operation:'apply',revision:d.revision});assert.match(fs.readFileSync(file('review_math.cjs'),'utf8'),/a \+ b/);});
 await check('Agent applies an explicitly permitted edit and finishes',async()=>{const r=await send('Agent',"Create agent_mode.cjs containing exactly console.log('AGENT_MODE_PASS'); then finish without running commands.",{edits:true,commands:false});assert.equal(r.task.status,'complete',r.task.error);assert.match(fs.readFileSync(file('agent_mode.cjs'),'utf8'),/AGENT_MODE_PASS/);assert.ok(r.state.changes.some(c=>c.run===r.task.run&&c.status==='applied'));});
 await check('Agent command waits for approval and executes on the protected copy',async()=>{const r=await send('Agent','Run agent_mode.cjs with node. Use run with runtime node and argv ["agent_mode.cjs"]. Do not modify files. Report the actual output.');assert.equal(r.task.status,'approval');const a=r.state.approvals.find(a=>a.chat===r.chat);assert.ok(a);await call('approveCommand',{id:a.id,decision:'once'});const state=await finish(r.chat);assert.equal(state.tasks.find(t=>t.id===r.task.id).status,'complete');assert.match(JSON.stringify(await call('taskDetail',{id:r.task.id})),/AGENT_MODE_PASS/);});
 await check('Agent without edit permission leaves the file pending for review',async()=>{const r=await send('Agent','Create guarded_mode.txt containing SYNTHETIC_GUARDED, then finish without running commands.');assert.equal(r.task.status,'review',r.task.error);const c=r.state.changes.find(c=>c.run===r.task.run&&c.path==='guarded_mode.txt'&&c.status==='pending');assert.ok(c);assert.ok(!fs.existsSync(file('guarded_mode.txt')));await call('discard',{change:c.id});});
};
