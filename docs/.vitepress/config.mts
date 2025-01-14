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
                    collapsed: true,
                    items:[
                      {text:'使用 Ruyi 编译环境构建（以 Licheepi 4A 为例）',link:'/zh/Package-Manager/cases/case1'},
                      {text:'使用厂商发布的二进制工具链构建（以 MilkV Duo 为例）',link:'/zh/Package-Manager/cases/case2'},
                      {text:'dd 方式刷写开发板（以 MilkV Duo 为例）',link:'/zh/Package-Manager/cases/case3'},
                      {text:'fastboot 方式刷写开发板（以 Licheepi 4A 为例）',link:'/zh/Package-Manager/cases/case4'},
                      {text:'使用 CMake 和 Meson 集成',link:'/zh/Package-Manager/cases/case5'},
                      {text:'使用 QEMU 和 LLVM 构建',link:'/zh/Package-Manager/cases/case6'},
                    ]
                  },
                  {text:'更多信息',link:'/zh/Package-Manager/misc'},
                ],
              },
              {
                text:'RuyiSDK IDE',
                items:[
                  {text:'RuyiSDK 下载使用',link:'/zh/IDE/index'},
                  {
                    text:'使用案例',
                    collapsed: true,
                    items:[
                      {text:'Milkv Duo ：使用 riscv64-unknown-linux-musl-bin 工具链编译、运行、调试',link:'/zh/IDE/milkv-duo-ide'},
                    ]
                  },
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
