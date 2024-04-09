---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SecureClipX"
  text: "系统剪贴板安全替代品"
  tagline: 提前一步保护数据，让你的剪贴板数据没有泄漏之忧
  image:
    src: /images/android-chrome-512x512.png
    alt: SecureClipX
  actions:
    - theme: brand
      text: 加入等待名单
      link: http://hey.diagramly.ai/form/D5Us7Ogl
    - theme: alt
      text: 即将开源
      link: /zh/#%E4%BD%95%E6%97%B6%E5%BC%80%E6%BA%90
    - theme: alt
      text: 赞助 ❤️
      link: https://macaify.lemonsqueezy.com/buy/3e207e60-a329-48b9-86fc-e55e37d835d1?logo=0&discount=0

features:
  - title: 开源且免费
    details: 保证安全且可信，项目开源
    icon: 💎
  - title: 系统剪贴板 V2
    details: SecureClipX 不是剪贴板管理器的替代品，而是系统剪贴板的替代品
    icon: 💻
  - title: 无痕复制
    details: 你的复制内容不再存储在系统剪贴板内，恶意软件无从下手
    icon: 🚫
  - title: 三种安全模式
    details: 全局模式、手动模式、白名单模式
    icon: 🔐
  - title: 本地存储
    details: 所有数据保存到本地，不会上传服务器
    icon: 🗂️
  - title: 自动脱敏
    details: 对白名单匹配的数据进行自动脱敏，不再误发送敏感数据
    icon: ✅
---

## FAQ

### 如何确保数据安全?

用户复制数据后，一般的 App 通常会在 100 毫秒后拿到剪贴板数据。而 **SecureClipX** 会在**前 20 毫秒**就获取到数据，并将其**从系统剪贴板中移除或脱敏**以保护数据。

<img src="/images/howto.webp" alt="How SecureClipX protect your data" width=800 height=800/>

### 三种模式都是什么?

三种使用模式对数据的拦截力度和方式不同。

#### 拦截方式

- 全局模式：完全**接管系统的复制粘贴快捷键**，**任何**复制记录**不会**再出现在系统剪贴板里。
- 手动模式：手动使用**单独的快捷键**进行复制和粘贴，**这部分**复制记录**不会**出现在系统剪贴板内，和系统剪贴板分离。
- 白名单模式：匹配到白名单的内容自动从系统剪贴板内移除。

#### 拦截力度

- 全局模式：拦截**所有**数据。
- 手动模式：拦截**部分**数据。
- 白名单模式：拦截**白名单**数据。

### 我该使用哪种模式？

<br/>

<img src="/images/howtochoose.webp" alt="how to choose which mode to use" width=800 height=800/>

## 何时开源？

**2024.4.12 前，如果等待列表人数超过 500 人，那么一周内加班开发完毕，立即开源。**

目前所有关键技术都**已经实现**，**正在进行**交互设计和整合。

第一个开源版本，只保证**全局模式**开发完毕。**手动模式**和**白名单模式**会在开源后陆续发布。

### 分享给更多人 🔥

<div class="share">

[![][share-x-shield]][share-x-link]&nbsp;
[![][share-facebook-shield]][share-facebook-link]&nbsp;
[![][share-telegram-shield]][share-telegram-link]&nbsp;
[![][share-whatsapp-shield]][share-whatsapp-link]&nbsp;
[![][share-reddit-shield]][share-reddit-link]&nbsp;
[![][share-linkedin-shield]][share-linkedin-link]

<!-- [![][share-weibo-shield]][share-weibo-link]<br/> -->
<!-- [![][share-mastodon-shield]][share-mastodon-link]<br/> -->
</div>

### 如果你有设计🌈能力

UI 是我的弱项，欢迎交流、投稿交互设计方案。

### 如果你有开发🧑‍💻能力

等开发仓库放出后，欢迎提 PR。

### 如果你财力💰雄厚

可以[❤️ 赞助项目](https://macaify.lemonsqueezy.com/buy/3e207e60-a329-48b9-86fc-e55e37d835d1?logo=0&discount=0)进行后续开发。

## 打个广告

我是个全职独立开发者，我喜欢写代码，喜欢做一些工具软件。**SecureClipX** 将是我正式发布的第一款开源的 Mac 软件、第二款免费的 Mac 软件。

目前我的收入完全来自下面这款剪贴板管理软件 **CleanClip**。我经常在 Reddit 上发布它的更新，并且受到了很多朋友的喜欢。

如果你喜欢我的工作，可以通过 [💰 购买软件](https://clip-purchase.macaify.com/) 或 [❤️ 赞助 SecureClipX 开源项目](https://macaify.lemonsqueezy.com/buy/3e207e60-a329-48b9-86fc-e55e37d835d1?logo=0&discount=0) 来支持我。

| [CleanClip - 安全、强大的剪贴板管理器](https://cleanclip.cc) (macOS app)<br/> |
| --- |
| <a href="https://cleanclip.cc/zh/"><img src="/images/home.webp" width=600 height=600></a> |
| 可能是 macOS 上最干净的剪贴板管理工具! <br/><br/>🔵 本地 macOS 应用, 简约而强大 <br/>🔵 真正的极简 UI<br/> 🔵 三大模式满足多种使用场景 <br/>🔵 管理窗口 - 强大的内容管理 <br/>🔵 快捷窗口 - 键盘快捷操作 <br/>🔵 粘贴队列 - 按顺序粘贴 |

[share-x-link]: https://twitter.com/intent/tweet?url=https%3A%2F%2Fsecureclipx.cleanclip.cc&text=SecureClipX%20-%20An%20open%20source%20secure%20alternatives%20to%20the%20macOS%20system%20clipboard.%20Protect%20your%20data%20a%20step%20ahead%2C%20no%20more%20worries%20about%20clipboard%20data%20leakage
[share-x-shield]: https://img.shields.io/badge/-share%20on%20x-black?labelColor=black&logo=x&logoColor=white
[share-facebook-link]: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsecureclipx.cleanclip.cc%20Protect%20your%20data%20a%20step%20ahead%2C%20no%20more%20worries%20about%20clipboard%20data%20leakage.
[share-facebook-shield]: https://img.shields.io/badge/-share%20on%20facebook-black?labelColor=black&logo=facebook&logoColor=white
[share-linkedin-link]: http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsecureclipx.cleanclip.cc&title=SecureClipX%20-%20An%20open%20source%20secure%20alternatives%20to%20the%20macOS%20system%20clipboard.%20Protect%20your%20data%20a%20step%20ahead%2C%20no%20more%20worries%20about%20clipboard%20data%20leakage
[share-linkedin-shield]: https://img.shields.io/badge/-share%20on%20linkedin-black?labelColor=black&logo=linkedin&logoColor=white

<!-- [share-mastodon-link]:
[share-mastodon-shield]: https://img.shields.io/badge/-share%20on%20mastodon-black?labelColor=black&logo=mastodon&logoColor=white&style=flat-square -->

[share-reddit-link]: http://www.reddit.com/submit?url=https%3A%2F%2Fsecureclipx.cleanclip.cc&title=SecureClipX%20-%20An%20open%20source%20secure%20alternatives%20to%20the%20macOS%20system%20clipboard.%20Protect%20your%20data%20a%20step%20ahead%2C%20no%20more%20worries%20about%20clipboard%20data%20leakage
[share-reddit-shield]: https://img.shields.io/badge/-share%20on%20reddit-black?labelColor=black&logo=reddit&logoColor=white
[share-telegram-link]: https://t.me/share/url?url=https://secureclipx.cleanclip.cc&text=SecureClipX%20-%20An%20open%20source%20secure%20alternatives%20to%20the%20macOS%20system%20clipboard.%20Protect%20your%20data%20a%20step%20ahead%2C%20no%20more%20worries%20about%20clipboard%20data%20leakage.
[share-telegram-shield]: https://img.shields.io/badge/-share%20on%20telegram-black?labelColor=black&logo=telegram&logoColor=white

<!-- [share-weibo-link]:
[share-weibo-shield]: https://img.shields.io/badge/-share%20on%20weibo-black?labelColor=black&logo=sinaweibo&logoColor=white&style=flat-square -->

[share-whatsapp-link]: https://api.whatsapp.com/send?text=https://secureclipx.cleanclip.cc
[share-whatsapp-shield]: https://img.shields.io/badge/-share%20on%20whatsapp-black?labelColor=black&logo=whatsapp&logoColor=white

<style>
  .share {
    img {
      display: inline;
    }
  }
</style>
