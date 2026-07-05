# v2rayN for Windows

> **Windows 平台稳定首选客户端** | 轻量、高兼容、支持主流协议

[v2rayN](https://github.com/2dust/v2rayN) 是 Windows 上非常成熟的代理客户端，支持 VMess、VLESS、Trojan、Shadowsocks 等协议，适合需要稳定订阅使用和快速排障的用户。

## 协议支持

| 协议类型 | 支持状态 | 稳定性 | 推荐度 |
|---------|---------|--------|--------|
| **Shadowsocks (SS)** | 完全支持 | | |
| **Trojan** | 完全支持 | | |
| **VMess** | 完全支持 | | |
| **VLESS** | 完全支持 | | |
| **SOCKS5** | 完全支持 | | |

## 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|----------|----------|
| **操作系统** | Windows 10/11 | Windows 11 |
| **处理器** | 双核 CPU | 四核及以上 |
| **内存** | 4GB | 8GB 及以上 |
| **存储空间** | 200MB | 1GB 及以上 |

## 下载与安装

### 官方下载

- Windows x64（直链）：https://github.com/2dust/v2rayN/releases/download/7.19.5/v2rayN-windows-64.zip
- Windows ARM64（直链）：https://github.com/2dust/v2rayN/releases/download/7.19.5/v2rayN-windows-arm64.zip
- Windows x64（ 镜像加速）：https://gh.xxooo.cf/https://github.com/2dust/v2rayN/releases/download/7.19.5/v2rayN-windows-64.zip
- Windows ARM64（ 镜像加速）：https://gh.xxooo.cf/https://github.com/2dust/v2rayN/releases/download/7.19.5/v2rayN-windows-arm64.zip
- 当前参考版本：`7.19.5`

### 安装说明

1. 在发布页下载 `v2rayN.zip`。
2. 解压到独立目录（建议 `D:\\Apps\\v2rayN`）。
3. 双击 `v2rayN.exe` 启动。

## 完整配置教程

### 步骤一：启动客户端

启动 `v2rayN.exe`，首次运行如果提示组件安装，按提示完成即可。

![启动界面](./v2rayN-for-windows-0.png)

### 步骤二：获取订阅链接

在 FreedomPort 用户中心复制你的订阅链接。

![复制订阅链接](./v2rayN-for-windows-1.png)

### 步骤三：导入订阅

打开订阅管理，新增订阅并粘贴链接，保存后返回主界面。

![导入订阅](./v2rayN-for-windows-2.png)

### 步骤四：更新节点

执行“更新订阅”，拉取最新节点与策略信息。

![更新订阅](./v2rayN-for-windows-3.png)

### 步骤五：启用系统代理

开启系统代理（或按需启用 PAC）。

![开启系统代理](./v2rayN-for-windows-4.png)

### 步骤六：选择节点连接

在节点列表中选择目标节点，优先选择延迟更低的节点。

![选择节点](./v2rayN-for-windows-5.png)

### 步骤七：结束使用

使用完毕后关闭系统代理，恢复直连网络。

![关闭代理](./v2rayN-for-windows-6.png)

## 核心功能

### 订阅管理

- 多订阅并存，适合多套餐或多环境。
- 支持手动刷新订阅，快速同步新节点。
- 可独立管理订阅组和节点组。

### 代理模式

- 系统代理模式（全局）。
- PAC 分流模式（规则）。
- 手动代理模式（本地端口）。

### 状态监控

- 节点延迟测试。
- 实时流量统计。
- 连接日志与错误日志。

## 常见问题

**Q: 订阅更新失败？**  
A: 先在浏览器打开订阅链接确认可访问，再检查本地网络、系统时间，最后重新导入订阅。

**Q: 已连接但无法上网？**  
A: 检查系统代理是否开启；切换节点测试；确认安全软件未拦截 v2rayN 网络访问。

**Q: 节点速度慢？**  
A: 优先同地区低延迟节点；避免高峰期拥堵节点；定期更新订阅。

## 技术支持

- 项目主页：https://github.com/2dust/v2rayN
- 问题反馈：https://github.com/2dust/v2rayN/issues

---

> 最后更新：2026年3月28日 | 适用版本：v2rayN 7.19.5


