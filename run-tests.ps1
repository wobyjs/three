Set-Location "d:\Developments\tslib\@woby\three"
Write-Host "Running tests with locally installed Playwright to avoid version conflicts..."
npx playwright test --reporter=list