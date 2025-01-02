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
            {
              text: '欢迎',
              items: [
                { text: '介绍', link: '/zh/introduction/' },
              ],
            },
            {
            text: 'RuyiSDK',
            items:[
              {
                text:'ruyi 包管理器',
                items:[
                  {text:'功能介绍',link:'/zh/Package-Manager/index'},
                  {text:'安装',link:'/zh/Package-Manager/installation'},
                  {text:'环境',link:'/zh/Package-Manager/Environment'},
                  {text:'编译',link:'/zh/Package-Manager/Compile'},
                ],
              },
              {
                text:'IDE',
                items:[
                  {text:'TODO',link:'/zh/IDE/TODO'},
                ]
              },
              {
                text:'使用案例',
                items:[
                  {text:'使用编译环境进行 Coremark 构建',link:'/zh/RuyiSDK/case1'},
                  {text:'为 Licheepi 4A 刷写操作系统',link:'/zh/RuyiSDK/case2'},
                  {text:'在 Licheepi 4A 上编译运行',link:'/zh/RuyiSDK/case3'},
                  {text:'使用 meson/cmake 集成',link:'/zh/RuyiSDK/case4'},
                  {text:'使用 qemu 和 llvm',link:'/zh/RuyiSDK/case5'},
                ]
              },
              {
                text:'社区',
                items:[
                  {text:'关于我们',link:'/zh/Community/About-us'},
                  {text:'社区守则',link:'/zh/Community/Rules'},
                ]
              },
            ],
          },
          {
            text:'其他说明',
            items:[
              {text:'RuyiSDK 编译工具',link:'/zh/Other/GNU-type'},
              {text:'RuyiSDK 遥测',link:'/zh/Other/Telemetry'},
            ]
          },
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
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/RuyiSDK/' }
    ]
  }
})
