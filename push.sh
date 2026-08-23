#!/usr/bin/env bash
# 將本目錄推送到 GitHub。用法：
#   ./push.sh                          推到 TensonicTW/TensonicTW.github.io
#   ./push.sh tensonic-site            推到 TensonicTW/tensonic-site
set -euo pipefail

OWNER="TensonicTW"
REPO="${1:-TensonicTW.github.io}"
BRANCH="main"

git init -q
git add -A
git -c user.name="${GIT_AUTHOR_NAME:-Tensonic}" \
    -c user.email="${GIT_AUTHOR_EMAIL:-quann.liuh@msa.hinet.net}" \
    commit -q -m "Initial commit: Astro site for launches and engineering notes"
git branch -M "$BRANCH"
git remote add origin "https://github.com/${OWNER}/${REPO}.git" 2>/dev/null \
  || git remote set-url origin "https://github.com/${OWNER}/${REPO}.git"
git push -u origin "$BRANCH"

cat <<MSG

推送完成。接著到 GitHub 完成一次性設定：
  https://github.com/${OWNER}/${REPO}/settings/pages
  Source 選 "GitHub Actions"，儲存後 Actions 會自動建置並部署。

部署完成後的網址：
  https://tensonictw.github.io/$([ "$REPO" = "TensonicTW.github.io" ] || echo "${REPO}/")
MSG
