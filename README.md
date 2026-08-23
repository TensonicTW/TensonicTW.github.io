# Tensonic 新品發表與技術分享站

冠律有限公司（TENSONIC）產品發表與技術分享網站原始碼。以 Astro 建置靜態站台，透過 GitHub Actions 部署至 GitHub Pages，內容以 Markdown 管理，中英雙語。

- 中文：`/zh/`
- English：`/en/`

## 開發

```bash
npm install
npm run dev      # http://localhost:4321/zh/
npm run build    # 產出至 dist/
npm run preview
```

需求：Node.js 22 以上。

## 目錄

```
src/
├─ content/
│  ├─ products/{zh,en}/<slug>.md   產品頁（規格、特色、下載）
│  ├─ launches/{zh,en}/<slug>.md   新品發表
│  └─ posts/{zh,en}/<slug>.md      技術分享
├─ pages/[locale]/                 雙語路由，zh 與 en 共用同一份版型
├─ components/                     Header、Footer、Card、SpecTable
├─ layouts/BaseLayout.astro        HTML 骨架、SEO meta、RSS 宣告
├─ i18n/ui.ts                      介面字串（新增文案改這裡）
├─ site.config.ts                  公司聯絡資訊與 repo 連結
└─ content.config.ts               frontmatter schema
```

## 新增內容

1. 複製對應的 `_template.md`（`launches/` 或 `posts/`）到 `zh/` 與 `en/`，兩邊使用相同 slug。
2. 填寫 frontmatter，欄位定義見 `src/content.config.ts`。缺欄位或型別錯誤會讓 build 失敗。
3. 圖片放 `public/media/`，於 Markdown 以 `/media/檔名` 引用。
4. `draft: true` 的檔案不會產出頁面；`_` 開頭的檔案一律略過。
5. 開 Pull Request，CI 會執行 build 檢查；合併到 `main` 後自動部署。

產品頁的 `status` 可填 `shipping`、`preorder`、`coming`、`archived`，列表頁會依此顯示標籤。發表文的 `product` 欄位填產品 slug，即可產生相關產品連結。

## 推送到 GitHub

Windows：解壓縮後在資料夾內雙擊 `push.bat`（或在命令提示字元執行）。
macOS / Linux：`./push.sh`。

兩者都可帶一個參數指定 repo 名稱，預設為 `TensonicTW.github.io`。需先安裝 [Git for Windows](https://git-scm.com/download/win)，首次推送會跳出 GitHub 登入視窗。

## 部署設定

1. Repository → Settings → Pages → Source 選 **GitHub Actions**。
2. 推送到 `main` 即觸發 `.github/workflows/deploy.yml`。
3. 網址與 base path 由 workflow 從 Pages 設定自動帶入。本機開發預設為根目錄 `/`，對應使用者主站 repo `TensonicTW.github.io`。

### 若改用專案型 repo

若站台不放在 `TensonicTW.github.io` 而是一般 repo（例如 `TensonicTW/tensonic-site`），只需把 `astro.config.mjs` 的本機預設改成：

```js
const base = process.env.SITE_BASE ?? '/tensonic-site';
```

線上部署不受影響，workflow 會自動從 Pages 設定帶入正確的 base path。

### 綁自訂網域

在 `public/` 新增 `CNAME`（內容為 `new.tensonic.com.tw`），於 DNS 加上 CNAME 指向 `tensonictw.github.io`，並在 Settings → Pages 填入網域。主站 repo 的 base path 本來就是 `/`，不需另外調整。

## 授權

程式碼採 MIT 授權；`src/content/` 內的文案、規格與圖片為冠律有限公司版權所有。
