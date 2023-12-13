import { defineConfig } from 'vitepress'

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
          { text: 'Home', link: '/zh/' },
          { text: '文档', link: '/zh/introduction/' }
        ],
        sidebar: [
          { text: '介绍', 
            items: [
              { text: 'RUYISDK 简介', link: '/zh/introduction/' },
              { text: '版本规划路线图', link: '/zh/plan/' },
            ]
          },
          { text: '工具',
            items: [
              {
                text: 'RUYI 包管理器',
                items: [
                  { text: '介绍', link: '/zh/ruyi/' },
                  { text: '开始', link: '/zh/ruyi/getstarted/' },
                  {
                    text: '编译环境',
                    link: '/zh/ruyi/environments/',
                    collapsed: true,
                    items: [
                      { text: '使用 GNU 上游工具链配置 RISC-V 编译环境', link: '/zh/ruyi/environments/gnu-generic/' },
                      { text: '使用 LLVM 上游工具链配置 RISC-V 编译环境', link: '/zh/ruyi/environments/llvm-generic/' },
                      { text: '使用 PLCT 工具链配置 Milkv-Duo 编译环境', link: '/zh/ruyi/environments/plct-milkv-duo/' },
                      { text: '使用平头哥工具链配置荔枝派 4A 编译环境', link: '/zh/ruyi/environments/xthead-sipeed-lpi4a/' },
                    ]
                  },
                  {
                    text: '具有 QEMU 支持的编译环境',
                    collapsed: true,
                    items: [
                      { text: '使用上游 QEMU 模拟器运行交叉编译的 RISC-V 二进制', link: '/zh/ruyi/virtual_machines/qemu-upstream/' },
                      { text: '使用平头哥 QEMU 模拟器运行交叉编译的 RISC-V 二进制', link: '/zh/ruyi/virtual_machines/qemu-xthead/' },
                    ]
                  },
                  { text: '源码包构建', link: '/zh/ruyi/sources/coremark/' },
                  { text: '用户软件源搭建', link: '/zh/ruyi/mirrors/' },
                ]
              }
            ]
          },
          { text: 'RuyiSDK',
            items: [
              {
                text: 'GNU',
                link: '/zh/sdk/gnu/',
                items: [
                  { text: 'GNU Upstream', link: '/zh/sdk/gnu/' },
                ]
              },
              {
                text: 'LLVM',
                link: '/zh/sdk/llvm/',
                items: [
                  { text: 'LLVM Upstream', link: '/zh/sdk/llvm/' },
                ]
              }
            ]
          }
        ],
      }
    },
    en: {
      label: 'English',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Doc', link: '/en/introduction/' }
        ],
        sidebar: [],
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
