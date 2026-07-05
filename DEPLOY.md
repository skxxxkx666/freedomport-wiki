# 部署说明（GitHub Pages + 自定义域名）

本手册用 **VitePress** 构建，通过 **GitHub Actions** 自动部署到 **GitHub Pages**，绑定自定义域名 **wiki.freedomport.cc**。全程免费。

## 自动部署（已配置）

- 每次 `git push` 到 `main`，`.github/workflows/deploy.yml` 会自动构建并发布
- 构建产物是 `.vitepress/dist`，`public/CNAME` 保证自定义域名在每次部署后保留

## 一次性开启步骤

### 1. 启用 GitHub Pages（Actions 来源）

仓库 → Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。

### 2. Cloudflare 添加 DNS 记录

到 Cloudflare 的 `freedomport.cc` DNS 面板添加：

| 类型 | 名称 | 目标 | 代理状态 |
| --- | --- | --- | --- |
| CNAME | `wiki` | `skxxxkx666.github.io` | 橙云（推荐，改善大陆访问 + 免费 SSL） |

若橙云下证书握手异常，先切 DNS only（灰云）等 GitHub 侧签发证书后再开橙云。

### 3. GitHub 侧确认自定义域名

仓库 → Settings → Pages → Custom domain 填 `wiki.freedomport.cc` → Save，勾选 Enforce HTTPS。

## 本地开发

```bash
cd wiki
npm install
npm run dev      # 本地预览
npm run build    # 构建到 .vitepress/dist
```

## 日常维护

- 改文档：编辑对应 `.md` → commit → push，Actions 自动重新发布
- 加页面：新建 `.md` 后在 `.vitepress/config.mts` 的 `sidebar` 里登记
- 加图片：放在 `.md` 同目录，用相对路径 `./xxx.png` 引用

## 写作规范

- **标题和正文不使用 emoji**，保持专业克制的排版
- 推荐标记用文字（"推荐"）而不是符号
- 提示用 `::: info` / `::: warning` / `::: danger` 容器
