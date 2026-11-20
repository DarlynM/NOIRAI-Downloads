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
    await evaluate("Array.from(document.querySelectorAll('button')).find(b=>(b.title || b.textContent.trim())==='Tools')?.click()");
    await until(async()=>await evaluate("!!document.querySelector('input[aria-label=\"Search tools and plugins\"]')"),15000);
    assert.match(await evaluate("document.querySelector('[role=dialog]').innerText"), /World Clock/);
    await evaluate("document.querySelector('button[aria-label=\"Close tools\"]').click()");
  });
};
