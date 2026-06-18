$indexPath = Join-Path $PSScriptRoot "..\out\index.html"

if (-not (Test-Path $indexPath)) {
  Write-Error "Static export not found. Run 'npm run build' first."
  exit 1
}

Start-Process (Resolve-Path $indexPath)
