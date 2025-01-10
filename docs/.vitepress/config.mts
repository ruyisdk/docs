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
                text:'Ruyi 包管理器',
                items:[
                  {text:'功能概览',link:'/zh/Package-Manager/index'},
                  {text:'安装',link:'/zh/Package-Manager/installation'},
                  {text:'管理 Ruyi 软件包',link:'/zh/Package-Manager/packages'},
                  {text:'使用集成功能',link:'/zh/Package-Manager/intergration'},
                  {
                    text:'使用案例',
                    items:[
                      {text:'使用编译环境进行 Coremark 构建',link:'/zh/Package-Manager/cases/case1'},
                      {text:'为 Licheepi 4A 刷写操作系统',link:'/zh/Package-Manager/cases/case2'},
                      {text:'在 Licheepi 4A 上编译运行',link:'/zh/Package-Manager/cases/case3'},
                      {text:'使用 meson/cmake 集成',link:'/zh/Package-Manager/cases/case4'},
                      {text:'使用 qemu 和 llvm',link:'/zh/Package-Manager/cases/case5'},
                    ]
                  },
                  {text:'更多信息',link:'/zh/Package-Manager/misc'},
                ],
              },
              {
                text:'Ruyi IDE',
                items:[
                  {text:'IDE 尝鲜',link:'/zh/IDE/index'},
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
              {text:'RuyiSDK 的平台支持情况',link:'/zh/Other/platform-support'},
            ]
          },
          {
            text:'K230D',
            items:[
              {text:'Canaan K230D 使用说明',link:'/zh/k230d/intro'},
            ]
          },
          {
            text:'法律信息',
            items:[
              {text:'隐私政策',link:'/zh/legal/privacyPolicy'},
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
