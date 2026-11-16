param([Parameter(Mandatory=$true)][ValidatePattern('^\d+\.\d+\.\d+$')][string]$Version,[Parameter(Mandatory=$true)][ValidatePattern('^[a-f0-9]{64}$')][string]$Sha256)
$ErrorActionPreference='Stop'
if($env:GITHUB_ACTIONS -ne 'true' -or $env:GITHUB_REPOSITORY -ne 'DarlynM/NOIRAI-Downloads'){throw 'This qualification harness requires the isolated public GitHub runner.'}
$testRoot=Join-Path $env:RUNNER_TEMP ('noir-'+[guid]::NewGuid().ToString('N'))
New-Item -ItemType Directory -Path $testRoot | Out-Null
$installer=Join-Path $testRoot ('NOIRAI-'+$Version+'-Setup.exe')
$appRoot=Join-Path $testRoot 'app'
Invoke-WebRequest -Uri ('https://github.com/DarlynM/NOIRAI-Downloads/releases/download/v'+$Version+'/NOIRAI-'+$Version+'-Setup.exe') -OutFile $installer
if((Get-FileHash -LiteralPath $installer -Algorithm SHA256).Hash.ToLowerInvariant() -ne $Sha256){throw 'Public installer checksum mismatch'}
$installed=Start-Process -FilePath $installer -ArgumentList ('--verify-package "'+$appRoot+'"') -WindowStyle Hidden -Wait -PassThru -RedirectStandardOutput (Join-Path $testRoot 'setup.stdout.txt') -RedirectStandardError (Join-Path $testRoot 'setup.stderr.txt')
if($installed.ExitCode -ne 0){Get-Content -LiteralPath (Join-Path $testRoot 'setup.stderr.txt');throw 'Fresh public installation failed'}
$manifest=Get-Content -LiteralPath (Join-Path $appRoot 'installed-files.json') -Raw | ConvertFrom-Json -AsHashtable
$archives=@(Get-ChildItem -LiteralPath (Join-Path $appRoot 'cache/installer') -Filter '*.zip')
if($archives.Count -ne 5){throw 'Expected five fresh public runtime downloads'}
foreach($item in $manifest.GetEnumerator()){
 $file=Join-Path $appRoot $item.Key
 if((Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash.ToLowerInvariant() -ne $item.Value){throw ('Installed bytes did not verify: '+$item.Key)}
}
Write-Output ('PASS anonymous public install; '+$manifest.Count+' files verified; 5 new runtime archives; no preloaded model or application cache')
$env:NOIR_RELEASE_TEST_ROOT=$appRoot
$env:NOIR_RELEASE_TEST_VERSION=$Version
node (Join-Path $PSScriptRoot 'packaged-app.cjs')
if($LASTEXITCODE -ne 0){throw 'Packaged application qualification failed'}
$summary=Get-Content -LiteralPath (Join-Path $appRoot 'qualification.json') -Raw
Add-Content -LiteralPath $env:GITHUB_STEP_SUMMARY -Value ('## NOIR '+$Version+' fresh installation')
Add-Content -LiteralPath $env:GITHUB_STEP_SUMMARY -Value ('Anonymous installer SHA-256: `'+$Sha256+'`. Five runtime archives downloaded into an empty root. All '+$manifest.Count+' installed files verified. CPU inference on a fresh hosted Windows VM; not a consumer GPU certification.')
Add-Content -LiteralPath $env:GITHUB_STEP_SUMMARY -Value ('```json'+"`n"+$summary+"`n"+'```')
