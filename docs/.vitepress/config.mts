import { defineConfig } from 'vitepress'

const sidebarItems = [
  { text: '介绍', link: '/introduction/index' },
  {
    text: '工具',
    items: [
      { text: 'Ruyi 包管理器', link: '/ruyi-package/index' }
    ]
  },
  {
    text: 'RuyiSDK',
    items: [
      {
        text: 'GNU',
        collapsed: true,
        items: [
          {
            text: 'GNU',
            collapsed: true,
            items: [
              { text: 'GNU Upstream', link: '/sdk/gnu/index' },
            ]
          }
        ]
      },
      {
        text: 'LLVM',
        link: '/sdk/llvm/index',
        items: [
          { text: 'LLVM Upstream', link: '/sdk/llvm/index' },
        ]
      }
    ]
  },
  {
    text: '版本规划路线图',
    link: '/plan/index',
    items: [
    ]
  },
  {
    text: 'Benchmarks',
    items: [
      { text: 'Coremark', link: '/benchmark/coremark' }
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RuyiSDK documentation",
  description: "RuyiSDK documentation",
  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/zh/index' },
          { text: '文档', link: '/zh/introduction/index' }
        ],
        sidebar: {
          "/zh/": {
            base: "/zh/",
            items: sidebarItems
          }
        },
      }
    },
    en: {
      label: 'English',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/index' },
          { text: 'Doc', link: '/en/introduction/index' }
        ],
        sidebar: {
          "/en/": {
            base: "/en/",
            items: []
          }
        },
      },
    }
  },
  base: '/RuyiSDK-test/',
  themeConfig: {
    i18nRouting: true,
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ruyisdk/' }
    ]
  }
})
