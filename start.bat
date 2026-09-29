@echo off
title Divakarprasanth S.R Portfolio - Local Dev Server
echo ===================================================
echo   DIVAKARPRASANTH S.R PORTFOLIO WEBSITE
echo   Role: Developer ^& Video Editor
echo   College: Karpagam College of Engineering
echo   Theme: CODE x MOTION x CREATIVITY
echo ===================================================
echo.
echo Launching Vite Local Server on http://localhost:5173/ ...
echo.

set PATH=C:\Users\divak\AppData\Local\OpenAI\Codex\runtimes\cua_node\df473e5367fa2b42\bin;%PATH%
"C:\Users\divak\AppData\Local\OpenAI\Codex\runtimes\cua_node\df473e5367fa2b42\bin\node.exe" "C:\Users\divak\AppData\Local\OpenAI\Codex\runtimes\cua_node\df473e5367fa2b42\bin\node_modules\corepack\dist\corepack.js" pnpm dev --port 5173
pause
