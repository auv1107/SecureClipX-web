import { defineConfig } from "vitepress";

export const en = defineConfig({
  lang: 'en-US',
  title: "Copi - Secure System Clipboard Alternative",
  description: "Secure alternatives to the macOS system clipboard, Protect your data a step ahead, no more worries about clipboard data leakage",
  themeConfig: {
    nav: [
      {
        text: "My Apps",
        items: [
          { text: "CleanClip", link: "https://cleanclip.cc" },
          { text: "Macaify", link: "https://macaify.com" },
          { text: 'Copi', link: '/' }
        ],
      },
      { text: "Sponsor ❤️", link: "https://macaify.lemonsqueezy.com/buy/3e207e60-a329-48b9-86fc-e55e37d835d1?logo=0&discount=0" },
      { text: "Discord", link: "https://discord.gg/KUJeZ35B" },
    ],
  },
});
