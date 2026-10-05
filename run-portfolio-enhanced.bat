@echo off
echo Cleaning up ports...

REM Kill processes on common Next.js ports
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    echo Killing process on port 3000 (PID: %%a)
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3001') do (
    echo Killing process on port 3001 (PID: %%a)
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3002') do (
    echo Killing process on port 3002 (PID: %%a)
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3003') do (
    echo Killing process on port 3003 (PID: %%a)
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3004') do (
    echo Killing process on port 3004 (PID: %%a)
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3005') do (
    echo Killing process on port 3005 (PID: %%a)
    taskkill /f /pid %%a >nul 2>&1
)

REM Also kill processes on our custom ports
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :8080') do (
    echo Killing process on port 8080 (PID: %%a)
    taskkill /f /pid %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :9000') do (
    echo Killing process on port 9000 (PID: %%a)
    taskkill /f /pid %%a >nul 2>&1
)

REM Try port 7000 which is even less likely to be in use
echo Starting portfolio on port 7000...
npx next dev -p 7000

pause 