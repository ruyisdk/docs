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
                { text: '介绍', link: '/doc/Introduction/index' },
              ],
            },
            {
            text: 'RuyiSDK',
            items:[
              {
                text:'ruyi 包管理器',
                items:[
                  {text:'功能介绍',link:'/doc/Package-Manager/index'},
                  {text:'安装',link:'/doc/Package-Manager/installation'},
                  {text:'环境',link:'/doc/Package-Manager/Enviroment'},
                  {text:'编译',link:'/doc/Package-Manager/Complie'},
                ],
              },
              {
                text:'IDE',
                items:[
                  {text:'TODO',link:'/doc/IDE/TODO'},
                ]
              },
              {
                text:'使用案例',
                items:[
                  {text:'使用编译环境进行 Coremark 构建',link:'/doc/RuyiSDK/case1'},
                  {text:'为 RISC-V 开发板安装操作系统',link:'/doc/RuyiSDK/case2'},
                  {text:'在 Licheepi 4A 上编译运行',link:'/doc/RuyiSDK/case3'},
                ]
              },
              {
                text:'社区',
                items:[
                  {text:'关于我们',link:'/doc/Community/About-us'},
                  {text:'社区守则',link:'/doc/Community/Rules'},
                ]
              },
            ],
          },
          {
            text:'其他说明',
            items:[
              {text:'RuyiSDK 编译工具',link:'/doc/Other/GNU-type'}
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
