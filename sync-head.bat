@echo off
setlocal

cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "tools\sync-shared-head.ps1"

if errorlevel 1 (
  echo.
  echo Failed to sync shared head metadata.
  pause
  exit /b 1
)

echo.
echo Done.
pause
