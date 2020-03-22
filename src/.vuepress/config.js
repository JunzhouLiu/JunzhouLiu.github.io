//.vuepress/config.js

module.exports = {


  plugins: [
    ['@vuepress/google-analytics', {
      'ga': 'UA-130601883-1' // UA-00000000-0
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'chtml',//chtml,svg
        macros: {
          '*': '\\times',
        },
        showError: true,
        cache: false
      },
    ],

  ],




  // 网站 Title
  title: 'Junzhou Liu',

  // 网站描述
  description: 'Happy Coding',

  // 网站语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  // 使用的主题
  theme: 'meteorlxy',

  // 主题配置
  themeConfig: {
    // 主题语言，参考下方 [主题语言] 章节
    lang: 'zh-CN',

    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 昵称
      nickname: 'Junzhou',

      // 个人简介
      description: 'Happy Coding<br/>Happy Life<br/>Developer,Student',

      // 电子邮箱
      email: 'Junzhou2016@outlook.com',

      // 所在地
      location: 'XinYang City, China',

      // 组织
      // organization: 'Xi\'an Jiao Tong University',

      // 头像
      // 设置为外部链接
      //avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
      // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
      avatar: '/assets/img/avatar.png',

      // 社交平台帐号信息
      sns: {
        // Github 帐号和链接
        github: {
          account: 'JunzhouLiu',
          link: 'https://github.com/JunzhouLiu',
        },
      },
    },

    // 上方 header 的相关设置
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        url: '/assets/img/head1.4.png',
        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
        // useGeo: true,
      },

      // 是否在 header 显示标题
      showTitle: true,
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    footer: {
      poweredBy: false,
      poweredByTheme: false,
      custom: 'Copyright 2018-2020 | Junzhou Liu<br/><a href="http://www.beian.miit.gov.cn/" target="_blank">豫ICP备17043261号-1</a>',
    },

    // 顶部导航栏内容
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Post', link: '/posts/', exact: false },
      { text: 'Friends', link: '/friend/', exact: true },
      { text: 'AboutMe', link: '/about/', exact: true },
    ],

    // 评论配置，参考下方 [页面评论] 章节
    comments: {
      owner: 'JunzhouLiu',
      repo: 'hexo_comments',
      clientId: 'ae2b63c7fb3ad3707669',
      clientSecret: '37c7d8a87b442d91c674862dd7fc031e7c20ff63',
    },

    // 分页配置
    pagination: {
      perPage: 5,
    },

    // 默认页面（可选，默认全为 true）
    defaultPages: {
      // 是否允许主题自动添加 Home 页面 (url: /)
      home: true,
      // 是否允许主题自动添加 Posts 页面 (url: /posts/)
      posts: true,
    },
  },
}