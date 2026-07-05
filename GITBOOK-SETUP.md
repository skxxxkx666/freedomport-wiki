# GitBook 开通与发布指南（wiki.freedomport.cc）

> 本文件是给管理员看的操作说明，不会出现在手册目录里（SUMMARY.md 未收录）。

本目录已经是**标准 GitBook 仓库格式**（`.gitbook.yaml` + `SUMMARY.md` + Markdown + 本地图片），通过 Git Sync 即可发布，之后每次 push 自动更新文档站。

## 一、推送到 GitHub

本目录已完成 git init 和首次提交，还差推送（需要你的 GitHub 登录）：

```bash
# 在 GitHub 上新建一个仓库，例如 skxxxkx666/freedomport-wiki（建议 Private）
cd F:\工程项目\FreedomPort\wiki
git remote add origin https://github.com/skxxxkx666/freedomport-wiki.git
git push -u origin main
```

## 二、创建 GitBook 站点并绑定 Git Sync

1. 登录 [gitbook.com](https://www.gitbook.com)（可直接用 GitHub 账号登录）
2. 新建 **Docs site**（组织 → New docs site），名称填 `自由港机场使用手册`
3. 站点创建后进入 **Configure → Git Sync**：
   - 选择 GitHub，授权后选中 `freedomport-wiki` 仓库、`main` 分支
   - 同步方向选 **GitHub → GitBook**（以仓库为准）
   - 首次同步完成后即可在 GitBook 预览完整手册（目录结构来自 SUMMARY.md）
4. **Publish**：站点设置里把 Visibility 改为 **Public**

## 三、绑定自定义域名 wiki.freedomport.cc

1. GitBook 站点 → **Settings → Custom domain**，填 `wiki.freedomport.cc`
2. GitBook 会给出一个 CNAME 目标（形如 `xxx.gitbook.io` 的指向说明）
3. 到 Cloudflare 的 freedomport.cc DNS 里添加：
   - 类型 `CNAME`，名称 `wiki`，目标填 GitBook 给出的地址
   - **代理状态先选 DNS only（灰云）**，等 GitBook 侧证书签发生效后再考虑开启橙云
4. 等待验证通过（通常几分钟），访问 https://wiki.freedomport.cc 确认

## 四、日常维护

- 改文档：直接改本目录的 Markdown → commit → push，GitBook 自动同步发布
- 加页面：新建 md 文件后**记得在 `SUMMARY.md` 里登记**，否则不会出现在目录
- 图片：放在 md 同目录，用相对路径 `./xxx.png` 引用（GitBook 会自动托管）

## 注意事项

- GitBook 免费版即可满足当前需求（公开站点 + 自定义域名）
- GitBook 的 CDN 在大陆未翻墙时可能访问不稳定——这是选择 GitBook 托管的已知取舍；主站会员中心内的文档中心（/#/document）可作为墙内兜底入口，重要教程可同步一份到后台文档
