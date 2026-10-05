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

REM Use a completely different port (8080) that's less likely to be in use
echo Starting portfolio on port 8080...
npx next dev -p 8080

pause 