const assert = require('node:assert/strict');

module.exports = async function ({call,check}) {
  await check('Project file search opens exact numeric and punctuation matches', async () => {
    const project = await call('newProject', {name:'SYNTHETIC_FILE_SEARCH'});
    await call('save', {project,path:'notes/measurements.txt',before:null,after:'Batch number\n4729 kg / #A.\n済み'});
    for (const [query,line] of [['4729',2],['/ #A.',2],['済み',3]]) {
      const hits = await call('fileSearch', {project,query});
      assert(hits.some(hit => hit.path==='notes/measurements.txt' && hit.line===line), query);
    }
  });
  await check('Five app choices and an approved live public GitHub read', async () => {
    const {connectors} = await call('toolbox');
    assert.deepEqual(connectors.map(item => item.key).sort(), ['github','gmail','google-calendar','google-drive','slack']);
    assert(connectors.every(item => !item.enabled && !item.installedId));
    const connected = await call('connectorConnect', {key:'github',mode:'public'});
    try {
      assert(connected.enabled && connected.installedId);
      const action = {tool:'plugin',plugin:connected.installedId,name:'search_repositories',arguments:JSON.stringify({query:'NOIRAI-Downloads user:DarlynM'})};
      const preview = await call('toolPrepare',{action});
      assert.match(preview.target,/GitHub/i);
      const result=await call('toolExecute',{id:preview.id});
      assert.match(JSON.stringify(result),/DarlynM.{1,3}NOIRAI-Downloads/i);
      await call('pluginEnable',{id:connected.installedId,enabled:false});
      await assert.rejects(()=>call('toolPrepare',{action}));
    } finally { await call('pluginRemove',{id:connected.installedId}); }
    const removed=(await call('toolbox')).connectors.find(item=>item.key==='github');
    assert.equal(removed.installedId,null);
  });
};
