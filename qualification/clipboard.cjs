// Black-box clipboard checks on a disposable Windows runner.
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
module.exports = async function({cdp,evaluate,check,until}) {
  assert.equal(process.env.GITHUB_ACTIONS,'true');
  const selector='textarea[aria-label="Message NOIR"]';
  function putImage(){
    const script="$ErrorActionPreference='Stop'\nAdd-Type -AssemblyName System.Windows.Forms,System.Drawing\n$img=New-Object Drawing.Bitmap 96,48\n$g=[Drawing.Graphics]::FromImage($img)\n$g.Clear([Drawing.Color]::Orchid)\n[Windows.Forms.Clipboard]::SetImage($img)\n$g.Dispose()\n$img.Dispose()";
    execFileSync('powershell.exe',['-NoProfile','-NonInteractive','-STA','-EncodedCommand',Buffer.from(script,'utf16le').toString('base64')],{windowsHide:true,stdio:'pipe'});
  }
  async function focus(){await cdp('Page.bringToFront',{});await evaluate('document.querySelector('+JSON.stringify(selector)+').focus()');}
  async function clickAt(x,y,button){await cdp('Input.dispatchMouseEvent',{type:'mousePressed',x,y,button,clickCount:1});await cdp('Input.dispatchMouseEvent',{type:'mouseReleased',x,y,button,clickCount:1});}
  async function pasteMenu(){
    const pt=await evaluate('(()=>{const b=document.querySelector('+JSON.stringify(selector)+').getBoundingClientRect();return [b.x+16,b.y+12]})()');
    await clickAt(...pt,'right');
    const pos=await until(()=>evaluate('(()=>{const e=[...document.querySelectorAll(\\'[role="menuitem"]\\')].find(n=>n.textContent.trim()==="Paste");if(!e)return null;const b=e.getBoundingClientRect();return [b.x+b.width/2,b.y+b.height/2]})()'),10000);
    await clickAt(...pos,'left');
  }
  const chips=()=>evaluate('document.querySelectorAll(".noir-chip").length');
  async function remove(){await evaluate('document.querySelector(".noir-chip button").click()');await until(async()=>await chips()===0,5000);}
  await check('Ctrl+V pastes a real Windows clipboard bitmap into the composer',async()=>{
    putImage();await focus();
    await cdp('Input.dispatchKeyEvent',{type:'rawKeyDown',key:'Control',code:'ControlLeft',windowsVirtualKeyCode:17,modifiers:2});
    await cdp('Input.dispatchKeyEvent',{type:'rawKeyDown',key:'v',code:'KeyV',windowsVirtualKeyCode:86,modifiers:2});
    await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:'v',code:'KeyV',windowsVirtualKeyCode:86,modifiers:2});
    await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:'Control',code:'ControlLeft',windowsVirtualKeyCode:17});
    await until(async()=>await chips()===1,30000);await remove();
  });
  await check('Right-click Paste reads a real Windows clipboard bitmap',async()=>{
    putImage();await focus();await pasteMenu();await until(async()=>await chips()===1,30000);await remove();
  });
  await check('Right-click Paste inserts plain text at the cursor',async()=>{
    execFileSync('powershell.exe',['-NoProfile','-NonInteractive','-STA','-Command',"Add-Type -AssemblyName System.Windows.Forms; [Windows.Forms.Clipboard]::SetText('Garden inventory')"],{windowsHide:true});
    await focus();await pasteMenu();await until(()=>evaluate('document.querySelector('+JSON.stringify(selector)+').value==="Garden inventory"'),6000);
  });
};
