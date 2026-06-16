import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '英语老师小站',
  description: '初中英语教学资源、教案、作业与学习资料分享',
  lang: 'zh-CN',

  // GitHub Pages 用户页部署配置
  // 仓库名为 xiaoxiaomei2011-bit.github.io，base 为 '/'
  base: '/',

  // 忽略本地开发链接检查
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
  ],

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5c8d89' }],
  ],

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '教案', link: '/lessons/' },
      { text: '作业', link: '/homework/' },
      { text: '学习资料', link: '/materials/' },
      { text: '关于我', link: '/about' },
      { text: '☕ 打赏支持', link: '/support' },
    ],

    // 侧边栏
    sidebar: {
      '/lessons/': [
        {
          text: '📚 教案中心',
          items: [
            { text: '教案首页', link: '/lessons/' },
            { text: '七年级 Unit 1 教案示例', link: '/lessons/grade7-unit1' },
          ],
        },
      ],
      '/homework/': [
        {
          text: '📝 作业布置',
          items: [
            { text: '作业首页', link: '/homework/' },
            { text: '2025-03-03 作业示例', link: '/homework/2025-03-03' },
          ],
        },
      ],
      '/materials/': [
        {
          text: '📖 学习资料',
          items: [
            { text: '资料首页', link: '/materials/' },
            { text: '初中英语语法总结', link: '/materials/grammar-summary' },
          ],
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaoxiaomei2011-bit' },
    ],

    // 搜索
    search: {
      provider: 'local',
    },

    // 大纲
    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    // 页脚
    footer: {
      message: '用 ❤️ 和 VitePress 为教育而构建',
      copyright: 'Copyright © 2026 英语老师小站',
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
  },

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
  },
})
