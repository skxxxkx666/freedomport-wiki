import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '自由港机场 · 使用手册',
  description: '自由港机场（FreedomPort）官方使用手册：客户端下载安装、订阅导入、常见问题排查与服务政策。',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#23545b' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '自由港机场 · 使用手册' }],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: '最后更新',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    nav: [
      { text: '快速开始', link: '/guide/getting-started' },
      { text: '客户端教程', link: '/clients/windows/clash-verge' },
      { text: '下载', link: '/download' },
      { text: '常见问题', link: '/guide/faq' },
      {
        text: '前往主站',
        items: [
          { text: '官网主站', link: 'https://freedomport.cc' },
          { text: '会员中心', link: 'https://freedomport.cc/#/dashboard' },
          { text: '购买套餐', link: 'https://freedomport.cc/#/purchasing' },
        ],
      },
    ],
    sidebar: [
      {
        text: '新手入门',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '获取订阅', link: '/guide/subscription' },
          { text: '客户端下载', link: '/download' },
        ],
      },
      {
        text: 'Windows',
        collapsed: false,
        link: '/clients/windows/README',
        items: [
          { text: 'Clash Verge Rev', link: '/clients/windows/clash-verge' },
          { text: 'v2rayN', link: '/clients/windows/v2rayn' },
        ],
      },
      {
        text: 'macOS',
        collapsed: false,
        link: '/clients/macos/README',
        items: [{ text: 'Clash Verge Rev', link: '/clients/macos/clash-verge' }],
      },
      {
        text: 'iOS / iPadOS',
        collapsed: false,
        link: '/clients/ios/README',
        items: [
          { text: 'Clash Mi（推荐）', link: '/clients/ios/clash-mi' },
          { text: 'Shadowrocket', link: '/clients/ios/shadowrocket' },
        ],
      },
      {
        text: 'Android',
        collapsed: false,
        link: '/clients/android/README',
        items: [
          { text: 'Clash Meta for Android', link: '/clients/android/clash-meta' },
          { text: 'v2rayNG', link: '/clients/android/v2rayng' },
        ],
      },
      {
        text: '更多平台',
        collapsed: true,
        link: '/clients/others/README',
        items: [
          { text: '路由器 · OpenClash', link: '/clients/others/router' },
          { text: 'Linux · Clash Verge Rev', link: '/clients/others/linux' },
          { text: 'Apple TV / 电视盒子', link: '/clients/others/apple-tv' },
        ],
      },
      {
        text: '帮助与政策',
        items: [
          { text: '常见问题 FAQ', link: '/guide/faq' },
          { text: '代理后的隐私保护', link: '/guide/privacy' },
          { text: '使用规范与退款政策', link: '/policy/terms' },
          { text: '联系支持', link: '/support' },
          { text: '相关链接', link: '/links' },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关内容',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
    footer: {
      message: '自由港机场 FreedomPort — 全球高速网络加速服务',
      copyright: `© ${new Date().getFullYear()} FreedomPort All Rights Reserved`,
    },
  },
})
