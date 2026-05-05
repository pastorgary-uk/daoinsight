# 🚀 daoinsight 部署完整指南
### GitHub + Netlify + 自訂網域（含 Google 域名 / Squarespace）

> 跟著做，從零到上線約 30–45 分鐘。完全不需要寫程式碼。

---

## 📋 開始前的準備

### ⚠️ 關於「Google 域名」的重要提醒

Google 在 2023 年 6 月把 **Google Domains** 賣給了 **Squarespace**。
**到 2024 年 7 月為止，所有 Google Domains 帳號都已經自動遷移到 Squarespace。**

所以你今天買 / 管理「Google 域名」的方式，其實是其中之一：

| 你的情況 | 實際是用 | 管理介面 |
|---|---|---|
| 我以前在 Google Domains 買過 | 已自動遷移到 Squarespace | https://account.squarespace.com/domains |
| 我從 Google Workspace 買過網域 | 仍是 Squarespace 為提供商 | Google Workspace 後台 |
| 我從 Google Cloud Domains 買 | 底層是 Squarespace，但介面在 GCP | Google Cloud Console |
| 我還沒有網域 | 直接到 Squarespace 或其他註冊商買 | 各家網站 |

**底下的說明**：第 4 步「綁定網域」我會用 Squarespace（最常見）為主，附 Google Cloud Console 備註。

### 你需要的帳號（全部免費，5 分鐘可開好）

| 帳號 | 用途 | 註冊網址 |
|---|---|---|
| **GitHub** | 儲存網站檔案、版本控制 | https://github.com/signup |
| **Netlify** | 自動部署網站、後台登入服務 | https://app.netlify.com/signup（建議用 GitHub 帳號登入） |
| **網域** | 例如 daoinsight.com | 已有可跳過 / 可在 Squarespace 買 |

---

## 步驟 1️⃣ 把專案下載到電腦

1. 在這個對話的右上角，點 **三個點 ⋮** → **下載專案 / Download as zip**
2. 解壓縮到桌面，得到一個資料夾，例如 `daoinsight/`
3. 打開資料夾確認裡面有：
   - `index.html`
   - `assets/`
   - `admin/`
   - `content/`
   - `netlify.toml`
   - `DEPLOY.md`（這份指南）

> 💡 如果你不想下載，可以請我幫你在專案右上角產生「打包下載」連結。

---

## 步驟 2️⃣ 把專案放上 GitHub

### 方法 A：用 GitHub 網頁上傳（最簡單，不用裝任何軟體）

1. 登入 GitHub → 右上角 **+** → **New repository**
2. 填寫：
   - Repository name：`daoinsight`
   - Description：`Pastor Gary's reading space for scripture and theology`
   - **Public 公開**（之後 Netlify 才能免費讀取；如果想要私人，要付 Netlify 費用）
   - ✅ 勾選 **Add a README file**
3. 點 **Create repository**
4. 進入新建的 repository → 點 **Add file** → **Upload files**
5. 把整個 `daoinsight/` 資料夾的內容**全部拖進去**（注意：是裡面的檔案，不是整個資料夾外殼）
6. 等上傳完成，捲到頁尾 → **Commit changes**

### 方法 B：用 GitHub Desktop（如果你以後會常更新）

1. 下載 [GitHub Desktop](https://desktop.github.com/)
2. 登入 → File → New Repository → 指向你的 daoinsight 資料夾
3. Publish to GitHub

---

## 步驟 3️⃣ 連到 Netlify 自動部署

1. 打開 [Netlify](https://app.netlify.com)，用 **GitHub 帳號登入**（最方便）
2. 進入 dashboard，點 **Add new site** → **Import an existing project**
3. 選擇 **Deploy with GitHub** → 授權
4. 找到剛才建立的 `daoinsight` repository，點選
5. 部署設定保持預設：
   - Branch to deploy：`main`
   - Build command：（留空）
   - Publish directory：（留空，或填 `.`）
6. 點 **Deploy daoinsight**
7. 等待 30–60 秒，你會看到 ✅ Published
8. Netlify 給你一個臨時網址，例如 `https://stately-pavlova-abc123.netlify.app`，**點進去你的網站已經上線了** 🎉

### 改個好看的 Netlify 子網域（選用）

1. Site → **Site configuration** → **General** → **Site information** → **Change site name**
2. 改成 `daoinsight` 或 `pastor-gary`
3. 之後網址變成 `https://daoinsight.netlify.app`

---

## 步驟 4️⃣ 綁定你自己的網域

> 這一步如果你還沒買網域，可以**先跳過**，直接用 Netlify 給你的免費網址。等之後想換再回來做。

### 4a. 在 Netlify 加入網域

1. Site → **Domain management** → **Add a domain**
2. 輸入你的網域（例如 `daoinsight.com`）
3. Netlify 會問「Is the domain X already registered?」→ 點 **Yes, add domain**
4. Netlify 會顯示需要設定的 DNS 紀錄，**先別關掉這個頁面**

### 4b. 在 Squarespace（前 Google 域名）改 DNS

1. 開另一個分頁登入 [Squarespace Domains 管理介面](https://account.squarespace.com/domains)
2. 點你的網域 → **DNS** 或 **DNS Settings**
3. 找到 **Custom records** 或 **DNS Records** 區塊
4. **刪除**任何指向舊地方的 A 記錄（host 為 `@`）
5. **新增** 以下兩筆記錄（Netlify 會給你正確的值，下面是範例）：

   | Type | Host | Value | TTL |
   |---|---|---|---|
   | A | @ | `75.2.60.5` | Auto |
   | CNAME | www | `[你的站名].netlify.app` | Auto |

6. 儲存
7. **DNS 生效需要 1–48 小時**，通常 30 分鐘內就好

### 4b-bis. 如果是 Google Cloud Domains

1. 登入 [Google Cloud Console](https://console.cloud.google.com)
2. 左側選單 → **Cloud Domains**
3. 點你的網域 → **DNS** → 改 DNS 紀錄（同上）
4. 或者最簡單：把 nameserver 改成 Netlify DNS（見下方進階）

### 4c. 等待 + 驗證

1. 回到 Netlify → Domain management
2. 等到網域旁邊出現 ✅ 綠色勾勾
3. 你的網站已經可以從 `daoinsight.com` 進入了！
4. Netlify 會**自動申請 Let's Encrypt SSL 憑證**（HTTPS），不用你做任何事

> 💡 想要更穩定？把網域 nameserver 換成 Netlify DNS（Domain management → Set up Netlify DNS），這樣 Netlify 全權管理，不會有同步問題。

---

## 步驟 5️⃣ 開啟後台寫文章功能（Netlify Identity）

> 這一步啟動 `/admin` 後台，讓你能像 WordPress 一樣寫文章。

### 5a. 啟用 Identity

1. Netlify Site → **Site configuration** → **Identity**
2. 點 **Enable Identity**
3. 進入 **Identity** 主頁面 → **Settings and usage** 標籤
4. 設定：
   - **Registration**：選 **Invite only**（只有受邀者可登入，安全）
   - **External providers**（選用）：可加 **Google** 讓你用 Google 帳號登入

### 5b. 啟用 Git Gateway（讓後台能寫進 GitHub）

1. 仍在 Identity → **Services** → **Git Gateway**
2. 點 **Enable Git Gateway**

### 5c. 邀請自己當管理員

1. Identity 主頁 → **Invite users**
2. 輸入你的 email → **Send**
3. 收信（檢查垃圾郵件夾），點連結 → 設定密碼

### 5d. 第一次登入後台

1. 打開 `https://你的網址.com/admin/`（**結尾的斜線很重要**）
2. 用 email + 密碼登入
3. 你會看到中文後台介面，左側有：
   - 📝 文章
   - 📖 每日經文
   - 📚 聖經導論
   - 💬 讀者見證
   - ⚙️ 全站設定

### 5e. 試寫第一篇文章

1. 點 **📝 文章** → 右上角 **New 文章**
2. 填欄位：標題、分類、封面、內文
3. 右上角點 **Save**（草稿）
4. 確認沒問題 → 點 **Publish** → **Publish now**
5. **約 1–2 分鐘後，你的文章會自動出現在網站上** ✨

---

## 步驟 6️⃣ 之後的日常工作流程

```
┌─────────────────┐
│ 你 (在 /admin)   │
└────────┬────────┘
         │ 1. 寫文章 → 發佈
         ▼
┌─────────────────┐
│  GitHub         │ ← Netlify 自動寫入新檔案
└────────┬────────┘
         │ 2. 偵測到變動
         ▼
┌─────────────────┐
│  Netlify        │ ← 自動重新部署
└────────┬────────┘
         │ 3. 推到 CDN
         ▼
┌─────────────────┐
│ daoinsight.com  │ ← 全球訪客 1 分鐘內看到
└─────────────────┘
```

每天的流程就是：**打開 `/admin` → 寫 → 發佈 → 完成**。

---

## 🛠 常見狀況與解法

### Q：我推上去了，但網站沒更新？
**檢查順序：**
1. 進 Netlify → **Deploys** 頁，看最新一次部署是不是 ✅ Published
2. 如果 ❌ Failed，點進去看錯誤訊息
3. 大部分情況是 yaml 格式錯誤（縮排、引號），把錯誤訊息貼給我我幫你看

### Q：我要怎麼上傳一張新圖片到文章？
- 在後台寫文章時，內文編輯器的工具列有 **🖼 圖片** 按鈕
- 點 → 選圖 → 自動上傳到 `assets/uploads/`

### Q：能不能用手機寫文章？
- 可以！後台是響應式設計，手機 / iPad 都能用
- 把 `daoinsight.com/admin` 加到主畫面當 App

### Q：我同工要怎麼加進來？
- Netlify → Identity → **Invite users** → 輸入他 email
- 他收信、設定密碼後就能登入後台

### Q：網站被罵了 / 內容寫錯，要怎麼回到舊版？
- Netlify → **Deploys** → 找到之前的版本 → 點 **Publish deploy**
- 30 秒回到舊版本

### Q：要不要付錢？什麼時候會收費？
- Netlify 免費額度：**100 GB 流量 / 月**，對個人事工網站綽綽有餘
- GitHub 免費額度：公開 repo 完全免費
- 網域：年費約 NT$300–500
- **總成本：每年只有網域費用（約 NT$400）**

---

## 🎁 進階建議（之後再做）

### 1. 接 Google Analytics
- 申請 GA4 → 拿到 `G-XXXXXXX`
- 在 `index.html` `<head>` 加追蹤碼
- 推到 GitHub → 自動部署

### 2. 接 Email 訂閱
- 用 [Buttondown](https://buttondown.email)（免費 100 人）或 [Mailchimp](https://mailchimp.com)
- 把表單嵌進首頁的 Newsletter 區塊

### 3. RSS 自動產生
- 之後把網站轉成 Astro 或 Eleventy（靜態網站產生器）
- 自動產生 RSS feed，讓讀者可以訂閱

### 4. 自訂 404 頁
- 在根目錄建立 `404.html`
- Netlify 會自動使用

---

## 📞 卡住了怎麼辦

優先順序：

1. **複製錯誤訊息丟給我**，我幫你看
2. Netlify 中文社群：https://answers.netlify.com（英文為主）
3. Decap CMS 文件：https://decapcms.org/docs/intro/
4. YouTube 搜尋「Netlify Decap CMS 中文教學」

---

**✝️ 願 daoinsight 成為許多人在城市生活裡，重新打開聖經的入口。**

— Pastor Gary
