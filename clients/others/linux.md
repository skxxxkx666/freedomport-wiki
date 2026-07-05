---
description: 在 Linux 桌面发行版上使用 Clash Verge Rev 接入自由港机场。
---

# Linux · Clash Verge Rev

> **与 Windows / macOS 同源的图形客户端** | Ubuntu / Debian / Fedora / Arch 均可用

[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev) 提供 Linux 桌面版本，界面与 Windows / macOS 版完全一致。

## 下载安装

前往 [GitHub Releases](https://github.com/clash-verge-rev/clash-verge-rev/releases) 下载对应格式：

| 发行版 | 安装包 | 安装命令 |
| --- | --- | --- |
| Ubuntu / Debian | `.deb` | `sudo dpkg -i clash-verge_*.deb` |
| Fedora / openSUSE | `.rpm` | `sudo rpm -i clash-verge_*.rpm` |
| Arch / Manjaro | AUR | `yay -S clash-verge-rev-bin` |
| 通用 | `AppImage` | 赋予执行权限后直接运行 |

::: info
GitHub 访问缓慢时，可以在下载链接前加镜像前缀 `https://gh.xxooo.cf/`（与 Windows 教程中的镜像加速相同）。
:::

## 配置步骤

流程与桌面端一致：

1. 登录[会员中心](https://freedomport.cc/#/dashboard)复制订阅链接
2. 打开 Clash Verge Rev → **配置（Profiles）** → 粘贴 URL 导入
3. 切到 **代理（Proxies）** 选择节点
4. 在 **设置** 中开启 **系统代理**（或 TUN 模式）

详细截图参考 [Windows 版教程](../windows/clash-verge.md)（界面一致）。

## 常见问题

**Q: 开启系统代理后终端不走代理？**
A: 终端需要单独设置环境变量：`export https_proxy=http://127.0.0.1:7897 http_proxy=http://127.0.0.1:7897`（端口以客户端设置为准），或开启 TUN 模式全局接管。

**Q: TUN 模式无法启动？**
A: 需要授予权限：设置中点击"授权 TUN"，或以 `sudo` 安装服务模式。
