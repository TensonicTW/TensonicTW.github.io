@echo off
chcp 65001 >nul
setlocal
rem 將本資料夾推送到 GitHub。用法：
rem   push.bat                 推到 TensonicTW/TensonicTW.github.io
rem   push.bat tensonic-site   推到 TensonicTW/tensonic-site

set OWNER=TensonicTW
set REPO=%1
if "%REPO%"=="" set REPO=TensonicTW.github.io

where git >nul 2>nul
if errorlevel 1 (
  echo [錯誤] 找不到 git，請先安裝：https://git-scm.com/download/win
  pause
  exit /b 1
)

git init
git add -A
git -c user.name="Tensonic" -c user.email="quann.liuh@msa.hinet.net" commit -m "Initial commit: Astro site for launches and engineering notes"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/%OWNER%/%REPO%.git
git push -u origin main
if errorlevel 1 (
  echo.
  echo [失敗] 推送未完成。常見原因：repo 名稱不符、尚未登入 GitHub、或 repo 內已有檔案。
  pause
  exit /b 1
)

echo.
echo 推送完成。接著開啟以下網址，Source 選 "GitHub Actions" 並儲存：
echo   https://github.com/%OWNER%/%REPO%/settings/pages
echo.
pause
