@echo off
REM Test Telegram configuration for this project

echo Testing Telegram configuration...
echo.

REM Check if config files exist
if not exist ".claude\channels\telegram\.env" (
    echo ERROR: Bot token file not found
    echo Create .claude\channels\telegram\.env with your bot token
    exit /b 1
)

if not exist ".claude\channels\telegram\access.json" (
    echo ERROR: Access config not found
    echo Create .claude\channels\telegram\access.json
    exit /b 1
)

echo Config files found:
echo   - .claude\channels\telegram\.env
echo   - .claude\channels\telegram\access.json
echo.

REM Show token (masked)
for /f "tokens=1,2 delims==" %%a in (.claude\channels\telegram\.env) do (
    set TOKEN=%%b
)
echo Bot token: %TOKEN:~0,10%...
echo.

REM Show allowed users
echo Allowed users:
type .claude\channels\telegram\access.json | findstr "allowFrom"
echo.

echo Configuration looks good!
echo.
echo To start Claude with Telegram:
echo   .\claude-telegram.bat
echo.
echo Or test the bot manually:
echo   curl -s "https://api.telegram.org/bot%TOKEN%/getMe"
