# 路由器配置指南

> 本文档提供了各种路由器系统的代理配置方案，帮助您在路由器层面实现网络代理功能。

## 支持的路由器系统

### OpenWrt 系统

- **OpenClash** - 基于 Clash 的 OpenWrt 插件
 - [官方文档](https://github.com/vernesong/OpenClash/wiki)
 - 功能强大，支持规则分流
 - 适合高级用户

### Koolshare 固件

- **KoolClash** - Koolshare 专用 Clash 插件
 - [官方文档](https://koolclash.js.org)
 - 界面友好，配置简单
 - 适合 Koolshare OpenWrt/LEDE 用户

### 梅林固件

- **Clash-Merlin** - 华硕梅林固件专用
 - [项目地址](https://github.com/KOP-XIAO/Clash-Merlin/wiki)
 - 稳定可靠
 - 专为华硕路由器优化

### Shell 脚本方案

- **ShellClash** - 通用 Shell 脚本
 - [项目地址](https://github.com/juewuy/ShellClash)
 - 兼容性强，支持多种系统
 - 轻量级解决方案

### Surge 方案

- **Surge Router** - 企业级解决方案
 - [配置教程](https://qust.me/post/MacSurgeRouter/)
 - 专业级功能
 - 适合高端用户

---

## 选择建议

| 路由器类型 | 推荐方案 | 难度等级 | 特点 |
|-----------|----------|----------|------|
| OpenWrt | OpenClash | | 功能最全 |
| Koolshare | KoolClash | | 易于配置 |
| 华硕梅林 | Clash-Merlin | | 稳定可靠 |
| 其他系统 | ShellClash | | 通用性强 |
| 企业环境 | Surge | | 专业级别 |

---

> 最后更新：2025年7月10日

