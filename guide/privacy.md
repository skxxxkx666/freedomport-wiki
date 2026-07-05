---
description: DNS 泄露、WebRTC、浏览器指纹——代理连接之后仍需要注意的隐私事项。
icon: shield-halved
---

# 代理后的隐私保护

连接代理只是第一步。以下几个环节处理不当，你的真实网络信息仍可能暴露。

## DNS 泄露

**是什么**：流量走了代理，但域名解析请求仍发给了本地运营商 DNS——对方就能看到你访问了哪些网站。

**怎么检测**：连接代理后访问 [browserleaks.com/dns](https://browserleaks.com/dns)，如果结果里出现你所在地运营商的 DNS 服务器，说明存在泄露。

**怎么解决**：

* Clash 系客户端（Clash Verge Rev / Clash Meta / Clash Mi）开启 **TUN 模式**，或在 DNS 设置中开启 **DNS 劫持**
* 确保客户端模式为规则 / 全局，而不是仅设置了浏览器代理

## WebRTC 泄露

**是什么**：浏览器的 WebRTC 功能（视频通话等使用）可能绕过代理直接暴露本机 IP。

**怎么检测**：访问 [browserleaks.com/webrtc](https://browserleaks.com/webrtc)，查看是否显示了你的真实公网 IP。

**怎么解决**：

* 客户端开启 **TUN 模式**（全局接管后 WebRTC 也走代理）
* 或在浏览器安装 WebRTC 限制插件 / 在 `about:config` 类设置中禁用 WebRTC

## 浏览器指纹与账号关联

* 长期登录的账号（Google 等）本身就标识了你，代理只改变网络位置
* 对隐私敏感的操作建议使用**独立浏览器配置文件**或隐私模式
* 时区 / 语言与节点地区差异过大可能触发某些网站的风控，属正常现象

## 使用习惯建议

* **不要公开订阅链接**——它等同于你的账号使用权（详见[订阅说明](subscription.md)）
* 敏感账号开启两步验证，与代理无关但同样重要
* 客户端保持更新，旧版本可能存在已修复的安全问题

{% hint style="info" %}
本站全中转节点 + 隧道加密，不记录用户访问内容。隐私政策全文见主站[隐私政策](https://freedomport.cc/#/privacy-policy)。
{% endhint %}
