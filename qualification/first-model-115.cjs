const assert = require('node:assert/strict');

module.exports = async function ({call, check, evaluate, until, capture}) {
  await check('A single first-run click downloads the recommended model and opens a local chat while the worksheet remains usable', async () => {
    const info = await call('firstModelInfo');
    const model = info.recommendation;
    assert(model && !model.installed && model.remainingBytes === model.size, 'Expected a fresh recommendation and full download size');
    const click = label => evaluate(`(() => {
      const target = Array.from(document.querySelectorAll('button')).find(button => !button.disabled && (button.textContent.trim()===${JSON.stringify(label)} || button.getAttribute('aria-label')===${JSON.stringify(label)}));
      if (!target) throw new Error('Missing button ' + ${JSON.stringify(label)});
      target.click();
    })()`);
    await until(async () => evaluate(`Array.from(document.querySelectorAll('button')).some(button => !button.disabled && button.textContent.trim()==='Download and start chatting')`), 20000);
    assert(await evaluate(`document.body.innerText.includes(${JSON.stringify(model.name)})`), 'The recommendation is visible');
    if (capture) await capture('start');
    await click('Download and start chatting');
    await until(async () => evaluate("document.querySelector('progress[aria-label=\"Model download progress\"]')?.value > 0"), 180000);
    await click('Try Receiving desk');
    const dialog = () => evaluate("document.querySelector('[role=dialog]')?.innerText || ''");
    await until(async () => /3 missing\s*·\s*1 extra/.test(await dialog()), 10000);
    await click('Add one blue washer');
    await until(async () => /2 missing\s*·\s*1 extra/.test(await dialog()), 10000);
    const transfer = (await call('firstModelInfo')).transfer;
    assert(transfer && transfer.id === model.id && transfer.status === 'transferring' && transfer.bytes > 0 && transfer.bytes < transfer.total, 'Expected an actual in-flight transfer while the worksheet changed');
    if (capture) await capture('desk');
    await evaluate(`(() => {
      const field = document.querySelector('input[aria-label="Slip B for Blue washers"]');
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(field,'9');
      field.dispatchEvent(new Event('input',{bubbles:true}));
    })()`);
    await until(async () => /3 missing\s*·\s*1 extra/.test(await dialog()), 10000);
    await click('Close receiving desk');
    const ready = await until(async () => {
      const state = await call('state');
      if (state.firstModelSetup?.phase === 'error') throw new Error(state.firstModelSetup.detail);
      return state.modelStatus.phase==='ready' && state.modelStatus;
    }, 900000);
    const library = await call('models');
    const active = library.find(item=>item.id===ready.model);
    assert(active?.available, 'Recommended local model should be available and running');
    const pinned = (await call('modelCatalog')).items.find(item=>item.id===model.id);
    assert(pinned?.installed && active.sha256 === pinned.sha256, 'Loaded weights must match the recommended pinned digest');
    if (capture) await capture('ready');
    const chat = await call('newChat');
    await call('send', {chat,prompt:'What is 2 + 3? Give the answer only.',mode:'Chat',permissions:{edits:false,commands:false}});
    await until(async () => {
      const state=await call('state');
      return !state.busy && state.tasks.some(t=>t.chat===chat && ['complete','failed','cancelled'].includes(t.status));
    }, 300000);
    const reply=(await call('messages',{chat})).filter(m=>m.role==='assistant').at(-1)?.content?.trim();
    assert.match(reply||'', /\b5\b/, 'The automatically started model must answer the first chat');
    console.log('FIRST_MODEL '+JSON.stringify({id:model.id,name:model.name,size:model.size,mode:model.mode,bytesDuringWorksheet:transfer.bytes,sha256:active.sha256,phase:ready.phase,firstReply:reply}));
  });
};
