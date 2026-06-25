param(
  [string]$Message = "גיבוי נתונים $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

$projectDir = $PSScriptRoot
$dataFile = Join-Path $projectDir "data" "data.json"

if (-not (Test-Path $dataFile)) {
  Write-Host "❌ לא נמצא קובץ נתונים ב: $dataFile" -ForegroundColor Red
  Write-Host ""
  Write-Host "👇 כדי לסנכרן נתונים:"
  Write-Host "  1. פתח את האפליקציה בדפדפן"
  Write-Host "  2. עבור להגדרות ← ייצא נתונים"
  Write-Host "  3. שמור את הקובץ בתור: data\data.json"
  Write-Host "  4. הפעל שוב: pwsh .\sync.ps1"
  exit 1
}

Write-Host "📤 מעלה נתונים לענן..." -ForegroundColor Cyan

git -C $projectDir add "data/data.json"
git -C $projectDir commit -m $Message
git -C $projectDir push

if ($LASTEXITCODE -eq 0) {
  Write-Host "✅ הנתונים עלו לענן בהצלחה!" -ForegroundColor Green
} else {
  Write-Host "⚠️  שגיאה בעת הסנכרון. בדוק את ההודעות למעלה." -ForegroundColor Yellow
}
