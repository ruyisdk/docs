import { defineConfig } from 'vitepress'

const sidebarItems = [
  { text: '介绍', link: '/introduction/index' },
  {
    text: '版本规划路线图',
    link: '/plan/index',
    items: [
    ]
  },
  {
    text: '工具',
    items: [
      { text: 'RUYI 包管理器',
        items: [
          { text: '介绍', link: '/ruyi/index' },
          { text: '开始', link: '/ruyi/getstarted/index' },
          {
            text: '编译环境',
            link: '/ruyi/environments/index',
            collapsed: true,
            items: [
              { text: '使用 GNU 上游工具链配置 RISC-V 编译环境', link: '/ruyi/environments/gnu-generic/index' },
              { text: '使用 LLVM 上游工具链配置 RISC-V 编译环境', link: '/ruyi/environments/llvm-generic/index' },
              { text: '使用 PLCT 工具链配置 Milkv-Duo 编译环境', link: '/ruyi/environments/plct-milkv-duo/index' },
              { text: '使用平头哥工具链配置荔枝派 4A 编译环境', link: '/ruyi/environments/xthead-sipeed-lpi4a/index' },
            ]
          },
          {
            text: '具有 QEMU 支持的编译环境',
            collapsed: true,
            items: [
              { text: '使用上游 QEMU 模拟器运行交叉编译的 RISC-V 二进制', link: '/ruyi/virtual_machines/qemu-upstream/index' },
              { text: '使用平头哥 QEMU 模拟器运行交叉编译的 RISC-V 二进制', link: '/ruyi/virtual_machines/qemu-xthead/index' },
            ]
          },
          { text: '源码包构建', link: '/ruyi/sources/coremark/index' },
          { text: '用户软件源搭建', link: '/ruyi/mirrors/index' },
        ]
      }
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
  base: '/docs/',
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
