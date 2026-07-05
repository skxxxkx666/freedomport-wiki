# Clash Verge Rev for macOS

> **macOS 推荐客户端** | 图形化清晰，规则分流完善，适合长期使用

[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev) 为 macOS 提供现代化代理体验，支持 Apple Silicon 与 Intel 双架构。

## 产品特色

### 核心优势

- 开源免费，持续更新。
- 界面现代，策略组操作清晰。
- 基于 Clash 内核，规则能力完整。
- 与 Windows 版本配置习惯一致，便于跨设备使用。

### 系统要求

- 最低版本：macOS 11+
- 推荐版本：macOS 13+
- 处理器：Intel x64 / Apple Silicon
- 内存：4GB（推荐 8GB+）

## 下载与安装

### 官方下载

- Apple Silicon（直链）：https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.7/Clash.Verge_2.4.7_aarch64.dmg
- Intel x64（直链）：https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.7/Clash.Verge_2.4.7_x64.dmg
- Apple Silicon（ 镜像加速）：https://gh.xxooo.cf/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.7/Clash.Verge_2.4.7_aarch64.dmg
- Intel x64（ 镜像加速）：https://gh.xxooo.cf/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.4.7/Clash.Verge_2.4.7_x64.dmg
- 当前参考版本：`v2.4.7`

### 架构选择

- Apple Silicon（M 系列）：选择 `arm64` 包。
- Intel Mac：选择 `x64` 包。

## macOS 安全设置

首次运行可能提示“无法验证开发者”：

1. 打开「系统设置 -> 隐私与安全性」。
2. 在安全提示处允许该应用运行。
3. 重新打开应用。

![安全警告](./Clash-Verge-01.png)
![系统设置](./Clash-Verge-02.png)
![确认打开](./Clash-Verge-03.png)

## 配置教程

### 步骤一：启动客户端

![应用主界面](./Clash-Verge-04.png)

### 步骤二：进入配置页

![配置管理](./Clash-Verge-05.png)

### 步骤三：新增订阅

![添加订阅](./Clash-Verge-06.png)

### 步骤四：粘贴订阅信息并保存

![输入订阅信息](./Clash-Verge-07.png)

### 步骤五：更新并启用

导入后更新配置，进入代理页选择节点，开启系统代理。

![更新配置](./Clash-Verge-08.png)

## 进阶功能

### 流量监控

- 查看实时上/下行速率。
- 查看连接和规则命中情况。

### 策略组

- 自动选择、手动切换、负载均衡。
- 网络波动时可快速切换组策略。

## 常见问题

**Q: 导入后节点为空？**  
A: 先手动更新配置；确认订阅链接可访问；确认套餐有效。

**Q: 已连接但不能访问？**  
A: 检查系统代理开关；切换节点；确认本机时间正确。

**Q: 启动被系统拦截？**  
A: 在“隐私与安全性”中允许应用，再重新打开。

## 相关资源

- 项目主页：https://github.com/clash-verge-rev/clash-verge-rev
- 问题反馈：https://github.com/clash-verge-rev/clash-verge-rev/issues

---

> 最后更新：2026年3月28日 | 适用版本：Clash Verge Rev v2.4.7


