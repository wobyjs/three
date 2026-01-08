@echo off
cd /d "d:\Developments\tslib\@woby\three"
echo Running tests with locally installed Playwright to avoid version conflicts...
npx playwright test --reporter=list