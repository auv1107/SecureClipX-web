import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh',
  title: "Copi - macOS 系统剪贴板的安全替代品",
  description: "macOS 系统剪贴板的安全替代品",
  themeConfig: {
    nav: [
      { text: '我的 App',
        items: [
          { text: 'CleanClip', link: 'https://cleanclip.cc' },
          { text: 'Macaify', link: 'https://macaify.com' },
          { text: 'Copi', link: '/zh/' },
        ]
      },
      { text: '赞助项目 ❤️', link: 'https://macaify.lemonsqueezy.com/buy/3e207e60-a329-48b9-86fc-e55e37d835d1?logo=0&discount=0' },
      { text: 'Discord', link: 'https://discord.gg/KUJeZ35B' }
    ]
  }
})