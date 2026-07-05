---
description: Apple TV / 电视盒子通过路由器共享方式接入自由港机场。
---

# 📺 Apple TV / 电视盒子

Apple TV（tvOS）与大多数电视盒子不方便直接安装代理客户端，**推荐通过路由器共享**的方式接入：

## 方案一：软路由共享（推荐）

在路由器上完成一次配置，Apple TV 与全屋设备即可透明接入，无需任何额外设置：

1. 按[路由器教程](router.md)在 OpenWrt 上配置 OpenClash
2. Apple TV 连接该路由器的 Wi-Fi 即可直接访问外网流媒体

{% hint style="success" %}
这是观看 Netflix / Disney+ / YouTube 等 TV 端流媒体最稳定的方式，也不受 tvOS 应用限制。
{% endhint %}

## 方案二：旁路由 / 网关指向

已有主路由不方便刷机时，可以用一台小主机 / 树莓派做旁路由：

1. 在旁路由设备上运行 Clash（如 ShellClash）
2. Apple TV 的网络设置中，把 **路由器 / 网关和 DNS** 手动指向旁路由 IP
3. 其他设备不受影响，只有手动指向的设备走代理

## ⚠️ 注意事项

* 流媒体解锁与所选节点有关，建议选择标注支持流媒体的地区节点
* TV 端播放 4K 内容对带宽要求高，建议选择低负载的香港 / 日本节点
* 配置过程中遇到问题，[提交工单](https://freedomport.cc/#/ticket)时请说明路由器型号和固件版本
