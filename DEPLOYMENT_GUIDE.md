# Deployment Guide for Tensonic Site

## 現在狀態 (Current Status)

✅ **GitHub Repository Created**
- Repository: `TensonicTW/TensonicTW.github.io`
- URL: https://github.com/TensonicTW/TensonicTW.github.io
- Visibility: Public

✅ **GitHub Pages Configured**
- Source: GitHub Actions
- Site URL: https://tensonictw.github.io/
- HTTPS: Enabled

✅ **Local Project Prepared**
- Git repository initialized
- All files staged and committed
- Remote `origin` configured

---

## 下一步 (Next Steps)

### Option 1: Push from Your Computer (推薦 / Recommended)

#### Windows (使用 Command Prompt)
```batch
cd path\to\tensonic-site
git push -u origin main
```

#### macOS / Linux (使用 Terminal)
```bash
cd /path/to/tensonic-site
git push -u origin main
```

當要求輸入認證時，使用以下之一：
- Personal Access Token (推薦)
- GitHub CLI (`gh` command)
- SSH keys

### Option 2: Push using GitHub CLI
如果已安裝 GitHub CLI (`gh`)，直接執行：

```bash
gh repo clone TensonicTW/TensonicTW.github.io
cd TensonicTW.github.io
git push -u origin main
```

---

## Authentication (認證)

### Personal Access Token (推薦做法)
1. 到 GitHub Settings → Developer settings → Personal access tokens
2. 建立新 token，勾選 `repo` 權限
3. 複製 token
4. 執行 `git push`，系統會要求：
   - Username: 輸入你的 GitHub username
   - Password: 貼上 Personal Access Token

### SSH Key
如果已設定 SSH key，可使用：
```bash
git remote set-url origin git@github.com:TensonicTW/TensonicTW.github.io.git
git push -u origin main
```

---

## 部署後 (After Pushing)

推送完成後，GitHub Actions 會自動：
1. ✅ Trigger 「pages build and deployment」workflow
2. ✅ 執行 `npm install` 安裝依賴
3. ✅ 執行 `npm run build` 建置 Astro 網站
4. ✅ 自動部署到 GitHub Pages

### 檢查部署狀態
1. 到 Repository → Actions 標籤
2. 查看 「pages build and deployment」workflow
3. 等待它完成 (通常 1-3 分鐘)

### 驗證網站
- 訪問: https://tensonictw.github.io/
- 應該能看到首頁和產品、發表文、技術分享等內容

---

## 常見問題 (Troubleshooting)

### Q: 如何修改網站內容？

A: 有三個主要區域：

#### 1. 新增產品 (Products)
```
src/content/products/
├── en/
│   └── your-product.md
└── zh/
    └── your-product.md
```

**格式:**
```markdown
---
title: "Product Name / 產品名稱"
slug: "product-slug"
specs:
  - label: "Specification"
    value: "Value"
---

Product description...
```

#### 2. 新增發表文 (Launches)
```
src/content/launches/
├── en/
│   └── launch-name.md
└── zh/
    └── launch-name.md
```

#### 3. 新增技術分享 (Technical Posts)
```
src/content/posts/
├── en/
│   └── technical-post.md
└── zh/
    └── technical-post.md
```

### Q: 修改後如何自動部署？

A: 簡單三步：
```bash
git add .
git commit -m "Add new product: XYZ"
git push
```

GitHub Actions 會自動部署，幾分鐘後就會看到網站更新。

### Q: 如何預覽本地修改？

A: 在本地開發：
```bash
npm install      # 第一次執行
npm run dev      # 啟動本地開發伺服器
```

訪問 http://localhost:4321 預覽網站。

---

## 項目結構 (Project Structure)

```
tensonic-site/
├── .github/workflows/
│   ├── deploy.yml         ← GitHub Actions 部署配置
│   └── ci.yml             ← CI 工作流程
├── src/
│   ├── content/           ← 產品、發表文、文章內容
│   ├── pages/             ← 網站頁面 (自動路由)
│   ├── i18n/              ← 國際化配置 (中英雙語)
│   └── components/        ← Astro 元件
├── public/                ← 靜態資源 (圖片、媒體)
├── astro.config.mjs       ← Astro 配置
└── package.json           ← 專案依賴
```

---

## 關鍵配置 (Key Configuration)

### 網站配置 (`src/site.config.ts`)
```typescript
export const SITE_CONFIG = {
  name: "Tensonic",
  company: "冠律有限公司",
  description: "Product launches and engineering notes",
  url: "https://tensonictw.github.io",
  // ... 更多配置
};
```

### GitHub Actions 工作流程 (`.github/workflows/deploy.yml`)
自動化執行：
- 代碼檢查
- 安裝依賴
- 建置靜態網站
- 部署到 GitHub Pages

---

## 技術堆棧 (Tech Stack)

- **Astro 5**: 靜態網站生成器
- **TypeScript**: 類型安全
- **Content Collections**: 內容管理
- **Bilingual Routing**: 中英雙語支援
- **GitHub Pages**: 免費主機
- **GitHub Actions**: 自動部署

---

## 聯繫支援 (Support)

有任何問題，請到 Repository Issues 提報：
https://github.com/TensonicTW/TensonicTW.github.io/issues

