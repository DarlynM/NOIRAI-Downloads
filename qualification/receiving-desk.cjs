const assert = require('node:assert/strict');

module.exports = async function ({ evaluate, until, check }) {
  const click = label => evaluate(`(() => {
    const button = Array.from(document.querySelectorAll('button')).find(node =>
      node.getAttribute('aria-label') === ${JSON.stringify(label)} || node.textContent.trim() === ${JSON.stringify(label)});
    if (!button) throw Error('Missing button: ' + ${JSON.stringify(label)});
    button.click();
  })()`);
  const dialogText = () => evaluate("document.querySelector('[role=dialog]')?.innerText || ''");

  await check('Receiving desk records another delivery and recalculates an edited row', async () => {
    await click('Receiving desk');
    await until(async () => /3 missing\s*·\s*1 extra/.test(await dialogText()), 15000);
    await click('Add one blue washer');
    await until(async () => /2 missing\s*·\s*1 extra/.test(await dialogText()), 10000);
    await evaluate(`(() => {
      const input = document.querySelector('input[aria-label="Slip B for Green tape"]');
      if (!input) throw Error('Missing editable delivery quantity');
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, '12');
      input.dispatchEvent(new Event('input', {bubbles:true}));
    })()`);
    await until(async () => /2 missing\s*·\s*8 extra/.test(await dialogText()), 10000);
    assert.match(await dialogText(), /Green tape/i);
    await click('Close receiving desk');
  });
};
