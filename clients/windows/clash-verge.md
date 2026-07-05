# Clash Verge Rev for Windows

> **现代化 GUI 客户端** | 规则分流清晰、策略组管理强、上手直观

[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev) 是基于 Clash 内核的图形客户端，适合需要规则分流、策略组切换和可视化操作的用户。

## 平台支持

| 平台 | 状态 | 说明 |
|------|------|------|
| Windows | 完全支持 | 本文档适用平台 |
| macOS | 完全支持 | 另有 macOS 教程 |
| Linux | 完全支持 | 桌面发行版可用 |

## 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|----------|----------|
| **操作系统** | Windows 10 | Windows 11 |
| **架构** | x64 | x64 |
| **内存** | 4GB | 8GB+ |
| **存储空间** | 300MB | 1GB+ |

## 下载与安装

### 官方下载

- Windows x64（直链）：https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.7/Clash.Verge_2.4.7_x64-setup.exe
- Windows ARM64（直链）：https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.7/Clash.Verge_2.4.7_arm64-setup.exe
- Windows x64（ 镜像加速）：https://gh.xxooo.cf/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.7/Clash.Verge_2.4.7_x64-setup.exe
- Windows ARM64（ 镜像加速）：https://gh.xxooo.cf/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.7/Clash.Verge_2.4.7_arm64-setup.exe
- 当前参考版本：`v2.4.7`

### 安装说明

1. 下载 `x64-setup.exe` 安装包。
2. 正常安装后首次启动。
3. 如遇系统安全提示，选择继续运行。

## 完整配置教程

### 步骤一：导入配置

进入“配置 / Profiles”，选择 URL 导入。

![配置导入界面](./clash-verge-rev-01.png)

### 步骤二：填写订阅信息

粘贴 FreedomPort 订阅链接并保存。

![配置设置](./clash-verge-rev-02.png)

### 步骤三：确认配置

确认配置名称和链接无误后应用。

![配置确认](./clash-verge-rev-03.png)

### 步骤四：应用并启用

应用配置，切到代理页选择节点或策略组。

![应用配置](./clash-verge-rev-04.png)

### 步骤五：更新配置

手动点击更新，确保节点列表是最新状态。

![配置更新](./clash-verge-rev-05.png)

## 主要功能

### 策略分流

- 支持规则模式、全局模式、直连模式。
- 支持策略组自动/手动切换。

### 状态与日志

- 可查看连接情况和规则命中。
- 可快速定位连接失败原因。

### 可视化管理

- 图形界面直观操作配置。
- 适合非命令行用户日常维护。

## 常见问题

**Q: 导入成功但没有节点？**  
A: 先手动更新配置，若仍为空，检查订阅链接是否可访问，确认账号套餐有效。

**Q: 节点都超时？**  
A: 切换网络重试；更换低延迟节点；确认本地防火墙未拦截应用。

**Q: 连接后无法打开网页？**  
A: 检查模式是否为 Rule/Global，确认系统代理已启用，再测试。

**Q: 检测到DNS泄露?**
A: 请查看网站文档里面的关于讲解DNS泄露

## 技术支持

- 项目主页：https://github.com/clash-verge-rev/clash-verge-rev
- 问题反馈：https://github.com/clash-verge-rev/clash-verge-rev/issues

---

> 最后更新：2026年3月28日 | 适用版本：Clash Verge Rev v2.4.7


