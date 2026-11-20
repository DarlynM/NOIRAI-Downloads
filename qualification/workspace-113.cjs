const assert = require('node:assert/strict');

module.exports = async function ({call,check,evaluate,until}) {
  await check('Searchable tool catalog installs, runs and removes an offline Calculator in the public app', async () => {
    const toolbox=await call('toolbox');
    assert.deepEqual(toolbox.availablePlugins.map(item=>item.key).sort(),['calculator','text-tools','world-clock']);
    const plugin=await call('pluginInstallBuiltin',{key:'calculator'});
    try {
      const args={tool:'plugin',plugin:plugin.id,name:'calculate',arguments:JSON.stringify({expression:'(107 - 7) / 4'})};
      const preview=await call('toolPrepare',{action:args});
      assert.equal(preview.target,'Calculator');
      const result=await call('toolExecute',{id:preview.id});
      assert.match(JSON.stringify(result),/"25"/);
      await call('pluginEnable',{id:plugin.id,enabled:false});
      await assert.rejects(()=>call('toolPrepare',{action:args}));
    } finally { await call('pluginRemove',{id:plugin.id}); }
    await until(async()=>await evaluate("Array.from(document.querySelectorAll('button')).some(b=>/run log/i.test(b.getAttribute('aria-label')||''))"),15000);
  });
};
