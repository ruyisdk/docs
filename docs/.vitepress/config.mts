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
              { text: 'RuyiSDK 简介', link: '/zh/introduction/' },
              { text: '集成的RISC-V设备', link: '/zh/devices/' },
            ]
          },
          { text: '开始使用', link: '/zh/usedirection/',
            items: [
              { text: '开发环境',  
                items: [
                  { text: '准备RISC-V开发环境', link: '/zh/usedirection/developmentside/' },
                  { text: '编译器类型', link: '/zh/usedirection/developmentside/typeselection/' },
                  { text: '编译环境', link: '/zh/usedirection/developmentside/environments/' },
                  { text: '源码包构建', link: '/zh/usedirection/developmentside/sources/coremark/' },
                ]
              },
              { text: '运行环境',  
                items: [
                  { text: '准备RISC-V运行环境', link: '/zh/usedirection/operationside/' },
                ]
              },
              { text: '使用案例',  link: '/zh/usecase/' ,
                items: [
                  { text: 'amd上编译并模拟运行', link: '/zh/usecase/x86pc/' },
                  { text: '为RISC-V开发板安装系统镜像', link: '/zh/usecase/setupos/' },
                  { text: '在Licheepi4A上编译运行', link: '/zh/usecase/rvbook/' },
                ]
              },
            ]
          },
          { text: '工具',
            items: [
              {
                text: 'RUYI 包管理器', link: '/zh/ruyi/' , 
                items: [
                  { text: '开始', link: '/zh/ruyi/getstarted/' },
                  {
                    text: '版本更新',
                    collapsed: true,
                    items: [
                      { text: 'v0.3.0 版本新增特性', link: '/zh/ruyi/updates/0.3.0' },
                      { text: 'v0.4.0 版本新增特性', link: '/zh/ruyi/updates/0.4.0' },
                      { text: 'v0.5.0 版本新增特性', link: '/zh/ruyi/updates/0.5.0' },
                      { text: 'v0.6.0 版本新增特性', link: '/zh/ruyi/updates/0.6.0' }
                    ]
                  }
                ]
              }
            ]
          },
          { text: 'RuyiSDK',
            items: [
              {
                text: 'GNU', link: '/zh/sdk/gnu/',
              },
              {
                text: 'LLVM', link: '/zh/sdk/llvm/',
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
      { icon: 'github', link: 'https://github.com/RuyiSDK/' }
    ]
  }
})
