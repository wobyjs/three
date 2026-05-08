@echo off
REM Claude Code wrapper with Telegram channel for @woby/three project
REM Usage: claude-telegram.bat [options]

setlocal enabledelayedexpansion

set INSTANCE_ID=%RANDOM%%RANDOM%
set PID_FILE=%TEMP%\glm_proxy_%INSTANCE_ID%.pid
set PORT_FILE=%TEMP%\glm_proxy_%INSTANCE_ID%.port
set SCRIPT_FILE=%TEMP%\glm_proxy_%INSTANCE_ID%.py
set LOG_FILE=%TEMP%\glm_proxy_%INSTANCE_ID%.log

if "%1"=="stop" (
    if exist "%PID_FILE%" (
        for /f %%p in (%PID_FILE%) do taskkill /PID %%p /F >nul 2>&1
        del "%PID_FILE%" "%PORT_FILE%" "%SCRIPT_FILE%" "%LOG_FILE%" 2>nul
        echo GLM proxy stopped
    )
    exit /b 0
)

REM Find available port
set PORT=8787
:find_port
netstat -an | findstr ":!PORT! " | findstr "LISTENING" >nul 2>&1
if !errorlevel!==0 (
    set /a PORT+=1
    if !PORT! geq 8807 (
        echo Error: Could not find available port
        exit /b 1
    )
    goto find_port
)

echo Starting GLM proxy on port !PORT!...

REM Create Python proxy script
echo import http.server> "%SCRIPT_FILE%"
echo import json>> "%SCRIPT_FILE%"
echo import urllib.request>> "%SCRIPT_FILE%"
echo import urllib.error>> "%SCRIPT_FILE%"
echo import sys>> "%SCRIPT_FILE%"
echo.>> "%SCRIPT_FILE%"
echo API_BASE = 'https://api.sfkey.cn'>> "%SCRIPT_FILE%"
echo API_KEY = 'sk-IrWDXkAei9umepOzCfo9dzwYUqADti4U53SFXjurVKFZzU0N'>> "%SCRIPT_FILE%"
echo.>> "%SCRIPT_FILE%"
echo class ProxyHandler(http.server.BaseHTTPRequestHandler):>> "%SCRIPT_FILE%"
echo     def log_message(self, format, *args):>> "%SCRIPT_FILE%"
echo         pass>> "%SCRIPT_FILE%"
echo     def do_GET(self):>> "%SCRIPT_FILE%"
echo         if self.path.startswith('/v1/models'):>> "%SCRIPT_FILE%"
echo             models = {"data": [{"id": "claude-sonnet-4-6", "object": "model", "created": 1626777600, "owned_by": "anthropic"}, {"id": "claude-3-5-sonnet-20241022", "object": "model", "created": 1626777600, "owned_by": "anthropic"}, {"id": "claude-3-5-sonnet", "object": "model", "created": 1626777600, "owned_by": "anthropic"}, {"id": "claude-haiku-4-5-20251001", "object": "model", "created": 1626777600, "owned_by": "anthropic"}], "object": "list"}>> "%SCRIPT_FILE%"
echo             body = json.dumps(models).encode()>> "%SCRIPT_FILE%"
echo             self.send_response(200)>> "%SCRIPT_FILE%"
echo             self.send_header('Content-Type', 'application/json')>> "%SCRIPT_FILE%"
echo             self.send_header('Content-Length', len(body))>> "%SCRIPT_FILE%"
echo             self.end_headers()>> "%SCRIPT_FILE%"
echo             self.wfile.write(body)>> "%SCRIPT_FILE%"
echo             return>> "%SCRIPT_FILE%"
echo         self.send_response(404)>> "%SCRIPT_FILE%"
echo         self.end_headers()>> "%SCRIPT_FILE%"
echo     def do_POST(self):>> "%SCRIPT_FILE%"
echo         cl = int(self.headers.get('Content-Length', 0))>> "%SCRIPT_FILE%"
echo         body = self.rfile.read(cl)>> "%SCRIPT_FILE%"
echo         try:>> "%SCRIPT_FILE%"
echo             data = json.loads(body)>> "%SCRIPT_FILE%"
echo             data['model'] = 'glm-5.1'>> "%SCRIPT_FILE%"
echo             body = json.dumps(data).encode()>> "%SCRIPT_FILE%"
echo         except:>> "%SCRIPT_FILE%"
echo             pass>> "%SCRIPT_FILE%"
echo         req = urllib.request.Request(API_BASE + self.path.split('?')[0], data=body, headers={'x-api-key': API_KEY, 'anthropic-version': self.headers.get('anthropic-version', '2023-06-01'), 'Content-Type': 'application/json'}, method='POST')>> "%SCRIPT_FILE%"
echo         try:>> "%SCRIPT_FILE%"
echo             resp = urllib.request.urlopen(req, timeout=120)>> "%SCRIPT_FILE%"
echo             rb = resp.read()>> "%SCRIPT_FILE%"
echo             self.send_response(resp.status)>> "%SCRIPT_FILE%"
echo             for k, v in resp.headers.items():>> "%SCRIPT_FILE%"
echo                 if k.lower() not in ('transfer-encoding', 'connection'):>> "%SCRIPT_FILE%"
echo                     self.send_header(k, v)>> "%SCRIPT_FILE%"
echo             self.end_headers()>> "%SCRIPT_FILE%"
echo             self.wfile.write(rb)>> "%SCRIPT_FILE%"
echo         except urllib.error.HTTPError as e:>> "%SCRIPT_FILE%"
echo             eb = e.read()>> "%SCRIPT_FILE%"
echo             self.send_response(e.code)>> "%SCRIPT_FILE%"
echo             self.send_header('Content-Type', 'application/json')>> "%SCRIPT_FILE%"
echo             self.end_headers()>> "%SCRIPT_FILE%"
echo             self.wfile.write(eb)>> "%SCRIPT_FILE%"
echo         except Exception as e:>> "%SCRIPT_FILE%"
echo             self.send_response(500)>> "%SCRIPT_FILE%"
echo             self.send_header('Content-Type', 'application/json')>> "%SCRIPT_FILE%"
echo             self.end_headers()>> "%SCRIPT_FILE%"
echo             self.wfile.write(json.dumps({'error': str(e)}).encode())>> "%SCRIPT_FILE%"
echo.>> "%SCRIPT_FILE%"
echo port = %PORT%>> "%SCRIPT_FILE%"
echo server = http.server.HTTPServer(('127.0.0.1', port), ProxyHandler)>> "%SCRIPT_FILE%"
echo print(f'Proxy running on port {port}', flush=True)>> "%SCRIPT_FILE%"
echo server.serve_forever()>> "%SCRIPT_FILE%"

REM Start proxy in background
start /b py "%SCRIPT_FILE%" > "%LOG_FILE%" 2>&1

REM Wait for proxy to start
set READY=0
for /l %%i in (1,1,15) do (
    timeout /t 1 /nobreak >nul 2>&1
    findstr "Proxy running" "%LOG_FILE%" >nul 2>&1
    if !errorlevel!==0 (
        set READY=1
        goto proxy_ready
    )
)

:proxy_ready
if !READY!==0 (
    echo Failed to start GLM proxy
    type "%LOG_FILE%"
    exit /b 1
)

REM Get PID of the proxy process
for /f "tokens=5" %%p in ('netstat -ano ^| findstr ":!PORT! " ^| findstr "LISTENING"') do (
    set PROXY_PID=%%p
)
if defined PROXY_PID echo !PROXY_PID! > "%PID_FILE%"
echo !PORT! > "%PORT_FILE%"

echo GLM proxy ready on port !PORT!

set ANTHROPIC_BASE_URL=http://localhost:!PORT!
set ANTHROPIC_AUTH_TOKEN=dummy
set ANTHROPIC_API_KEY=dummy
set CLAUDE_CONFIG_DIR=%USERPROFILE%\.claude
if not exist "%CLAUDE_CONFIG_DIR%" mkdir "%CLAUDE_CONFIG_DIR%"

REM Set Telegram state directory to project-local config
set TELEGRAM_STATE_DIR=D:\Developments\tslib\@woby\three\.claude\channels\telegram

echo Telegram config: %TELEGRAM_STATE_DIR%

REM Call the actual Claude CLI with Telegram channel enabled
if exist "%APPDATA%\npm\claude.cmd" (
    call "%APPDATA%\npm\claude.cmd" --channels plugin:telegram@claude-plugins-official %*
) else if exist "%APPDATA%\npm\claude" (
    bash "%APPDATA%\npm\claude" --channels plugin:telegram@claude-plugins-official %*
) else (
    echo Error: Cannot find Claude CLI
    echo Please ensure Claude is installed via npm
    exit /b 1
)

set EXIT_CODE=%ERRORLEVEL%

REM Stop proxy
if exist "%PID_FILE%" (
    for /f %%p in (%PID_FILE%) do taskkill /PID %%p /F >nul 2>&1
)
del "%PID_FILE%" "%PORT_FILE%" "%SCRIPT_FILE%" "%LOG_FILE%" 2>nul
echo GLM proxy stopped

exit /b %EXIT_CODE%
