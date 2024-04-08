---
# https://vitepress.dev/reference/default-theme-home-page 
layout: home

hero:
  name: "SecureClipX"
  text: "Secure System Clipboard Alternative"
  tagline: Protect your data a step ahead, no more worries about clipboard data leakage
  image:
    src: /images/android-chrome-512x512.png
    alt: SecureClipX
  actions:
    - theme: brand
      text: Join the Waitlist
      link: http://hey.diagramly.ai/form/D5Us7Ogl
    - theme: alt
      text: About to be open-sourced
      link: /
    - theme: alt
      text: Sponsor ❤️
      link: https://macaify.lemonsqueezy.com/buy/188835a0-ca78-444d-b1ca-399218cb1b6a?logo=0&discount=0

features:
  - title: Open Source and Free
    details: Guaranteed security and trustworthiness, open source project
    icon: 💎
  - title: System Clipboard V2
    details: SecureClipX is not an alternative to clipboard managers, but an alternative to the system clipboard
    icon: 💻
  - title: Traceless Copying
    details: Your copied content is no longer stored in the system clipboard, malicious software has nowhere to start
    icon: 🚫
  - title: Local Storage
    details: All data is saved locally, not uploaded to any server
    icon: 🗂️  
  - title: Three Security Modes
    details: Global mode, Manual mode, Whitelist mode
    icon: 🔐
  - title: Automatic Desensitization
    details: Automatically desensitize data that matches the whitelist, no more accidental sending of sensitive data
    icon: ✅
---

## FAQ
### How can data security be ensured?
After the user copies data, the app usually gets the clipboard data after 100 milliseconds. However, **SecureClipX** gets the data and protects it within the first 20 milliseconds.

<img src="/images/howto.webp" alt="How SecureClipX protect your data" width=800 height=800/>

### What are the three modes?
The three usage modes intercept data with different levels of intensity and methods.
Here is the translation preserving the formatting:

#### Interception Method
- Global Mode: Completely **takes over the system's copy and paste shortcut keys**, **any** copy record **will not** appear in the system clipboard.
- Manual Mode: Manually use **separate shortcut keys** for copying and pasting, **this part** of the copy record **will not** appear in the system clipboard, and is separated from the system clipboard.
- Whitelist Mode: Content that matches the whitelist is automatically removed from the system clipboard.

#### Interception Intensity
- Global Mode: Intercepts **all** data.
- Manual Mode: Intercepts **some** data. 
- Whitelist Mode: Intercepts **whitelisted** data.

### Which mode should I use?
<br/>
<img src="/images/howtochoose-en.webp" alt="how to choose which mode to use" width=800 height=800/>
Here is the translated content in American English, with the original markdown formatting preserved:

## When will it be open-sourced?

It will be open-sourced after the **Global Mode** development is completed. The **Manual Mode** and **Whitelist Mode** will be released successively after the open-source release.

Currently, all critical technologies have been **implemented**, and the **interaction design and integration** are **in progress**.

### If you have design 🌈 skills

UI is my weakness, welcome to discuss and contribute interaction design proposals.

### If you have development 🧑‍💻 skills

Feel free to submit PRs after the development repository is released.

### If you have substantial financial resources 💰

You can [❤️ sponsor the project](https://macaify.lemonsqueezy.com/buy/3e207e60-a329-48b9-86fc-e55e37d835d1?logo=0&discount=0) for future development.

### Share with more people 🔥

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

## Advertisement

I'm a full-time independent developer. I love coding and creating utility software. **SecureClipX** will be my first officially released open-source Mac software and the second free Mac software.

Currently, my income is entirely from the clipboard manager **CleanClip** below. I often post its updates on Reddit, and it has been well-received by many friends.

If you enjoy my work, you can support me by [💰 purchasing CleanClip](https://clip-purchase.macaify.com/) or [❤️ sponsoring](https://macaify.lemonsqueezy.com/buy/3e207e60-a329-48b9-86fc-e55e37d835d1?logo=0&discount=0) the SecureClipX open-source project.

| [CleanClip - Secure and Powerful Clipboard Manager](https://cleanclip.cc) (macOS app)<br/> |
| --- |
| <a href="https://cleanclip.cc/"><img src="/images/home.webp" width=600 height=600></a> |
| Possibly the cleanest clipboard manager on macOS! <br/><br/>🔵 Native macOS app, simple yet powerful <br/>🔵 True minimalist UI<br/> 🔵 Three modes for various use cases <br/>🔵 Main Window - Powerful content management <br/>🔵 Quick Menu - Keyboard-centric operations <br/>🔵 Paste Stack - Paste in sequence |

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
[share-telegram-link]: https%3A%2F%2Ft.me%2Fshare%2Furl%3Furl%3Dhttps%3A%2F%2Fsecureclipx.cleanclip.cc%26text%3DSecureClipX%20-%20An%20open%20source%20secure%20alternatives%20to%20the%20macOS%20system%20clipboard.%20Protect%20your%20data%20a%20step%20ahead%2C%20no%20more%20worries%20about%20clipboard%20data%20leakage.
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
