import test from 'node:test';import assert from 'node:assert/strict';
import {makeSnapshot,fetchReleases} from './collect-downloads.mjs';
const release=(id,count,extra={})=>({tag_name:'v1.5.0',assets:[{id,name:'NOIRAI-1.5.0-Setup.exe',download_count:count,size:20}],...extra});
test('counts installers only; excludes drafts and prereleases',()=>{const r=release(1,4);r.assets.push({id:2,name:'LICENSE.txt',download_count:100});const s=makeSnapshot([r,release(3,5,{draft:true}),release(4,7,{prerelease:true})]);assert.equal(s.totalInstallerDownloads,4);assert.equal(s.downloadsSincePrevious,null);});
test('compares asset IDs across releases, including new assets',()=>{const p=makeSnapshot([release(1,4)]);const s=makeSnapshot([release(1,6),release(2,2)],p);assert.equal(s.downloadsSincePrevious,4);});
test('does not turn removed/replaced assets or counter reset into growth',()=>{const p=makeSnapshot([release(1,4)]);assert.equal(makeSnapshot([release(2,5)],p).downloadsSincePrevious,null);assert.equal(makeSnapshot([release(1,2)],p).downloadsSincePrevious,null);});
test('refuses empty, malformed and negative data',()=>{assert.throws(()=>makeSnapshot([]));assert.throws(()=>makeSnapshot([release(1,-1)]));assert.throws(()=>makeSnapshot([release(1,null)]));});
test('follows all release pages',async()=>{let calls=0;const data=await fetchReleases(async()=>({ok:true,json:async()=>++calls===1?Array.from({length:100},(_,i)=>release(i+1,1)):[release(101,2)]}));assert.equal(calls,2);assert.equal(data.length,101);});
test('network errors never become a zero measurement',async()=>{await assert.rejects(()=>fetchReleases(async()=>({ok:false,status:503})),/503/);});
