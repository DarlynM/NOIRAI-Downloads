const assert = require('node:assert/strict');

module.exports = async function ({call, check}) {
  await check('Manual command failures stay in the log without offering to resume a chat', async () => {
    const project = await call('newProject', {name:'SYNTHETIC_MANUAL_COMMAND'});
    const chat = await call('newChat', {project});
    const file = 'manual-check.cjs';
    await call('save', {project, path:file, before:null, after:'process.exitCode = 4;'});
    const result = await call('run', {project, chat, runtime:'node', argv:[file]});
    assert.equal(result.exitCode, 4);
    const log = await call('chatRuns', {chat});
    const receipt = log.find(item => item.status === 'failed');
    assert(receipt, 'Expected the failed manual receipt in this chat');
    const current = await call('state', {chat});
    assert.equal(current.conversationRun ?? null, null);
    await assert.rejects(() => call('runResume', {run:receipt.id}), /manual command again from Activity/);
  });
};
