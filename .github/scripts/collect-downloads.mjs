// Public distribution metrics only. No NOIR application code or client telemetry.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

export function makeSnapshot(releases, previous, observedAt = new Date().toISOString()) {
  if (!Array.isArray(releases)) throw new Error('Expected the complete release list');
  const assets = releases.filter(r => !r.draft && !r.prerelease).flatMap(r =>
    (r.assets || []).filter(a => /^NOIRAI-[\d.]+-Setup\.exe$/.test(a.name)).map(a => {
      if (!Number.isSafeInteger(a.id) || !Number.isSafeInteger(a.download_count) || a.download_count < 0) throw new Error('Invalid asset count');
      return {assetId:a.id, version:r.tag_name, name:a.name, downloads:a.download_count, bytes:a.size};
    })).sort((a,b) => a.assetId-b.assetId);
  if (!assets.length) throw new Error('No installer assets returned; refusing an empty snapshot');
  const prior = new Map((previous?.assets || []).map(a => [a.assetId,a]));
  const removedAssetIds = [...prior.keys()].filter(id => !assets.some(a => a.assetId === id));
  const counterRegressions = assets.filter(a => prior.has(a.assetId) && a.downloads < prior.get(a.assetId).downloads).map(a => a.assetId);
  const comparable = !!previous && removedAssetIds.length === 0 && counterRegressions.length === 0;
  return {schemaVersion:1, observedAt, repository:'DarlynM/NOIRAI-Downloads',
    definition:'GitHub installer asset download counts. Includes repeats, automated requests and internal QA; not unique people, completed installs, active users or attributable conversions.',
    totalInstallerDownloads:assets.reduce((s,a) => s+a.downloads,0),
    previousObservedAt:previous?.observedAt || null,
    downloadsSincePrevious:comparable ? assets.reduce((s,a) => s+a.downloads-(prior.get(a.assetId)?.downloads || 0),0) : null,
    removedAssetIds,counterRegressions,assets};
}

export async function fetchReleases(fetcher=fetch) {
  const all=[];
  for(let page=1;page<=100;page++) {
    const response=await fetcher(`https://api.github.com/repos/DarlynM/NOIRAI-Downloads/releases?per_page=100&page=${page}`,{
      headers:{Accept:'application/vnd.github+json','User-Agent':'NOIR-public-download-counter',...(process.env.GITHUB_TOKEN?{Authorization:`Bearer ${process.env.GITHUB_TOKEN}`}:{})},signal:AbortSignal.timeout(30000)});
    if(!response.ok) throw new Error(`GitHub release query failed: HTTP ${response.status}`);
    const rows=await response.json();if(!Array.isArray(rows))throw new Error('Unexpected release response');
    all.push(...rows);if(rows.length<100)return all;
  }
  throw new Error('Release pagination limit exceeded');
}

async function main() {
  const directory=path.resolve('metrics');await fs.mkdir(directory,{recursive:true});
  const latest=path.join(directory,'downloads.json');let previous=null;
  try{previous=JSON.parse(await fs.readFile(latest,'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;}
  const snapshot=makeSnapshot(await fetchReleases(),previous);
  const day=snapshot.observedAt.slice(0,10);await fs.mkdir(path.join(directory,'daily'),{recursive:true});
  // Keep the first verified daily observation immutable. Re-runs update only latest.
  try{await fs.writeFile(path.join(directory,'daily',day+'.json'),JSON.stringify(snapshot,null,2)+'\n',{flag:'wx'});}catch(e){if(e.code!=='EEXIST')throw e;}
  await fs.writeFile(latest+'.tmp',JSON.stringify(snapshot,null,2)+'\n');await fs.rename(latest+'.tmp',latest);
  console.log(JSON.stringify({observedAt:snapshot.observedAt,total:snapshot.totalInstallerDownloads,delta:snapshot.downloadsSincePrevious,assets:snapshot.assets.length}));
}
if(process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
