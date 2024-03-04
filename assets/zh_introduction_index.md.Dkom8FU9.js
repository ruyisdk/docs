import{_ as r,c as a,o as e,a4 as i}from"./chunks/framework.DRfcu8ax.js";const t="/docs/assets/ruyisdk.Dr-WO5Ky.png",k=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"zh/introduction/index.md","filePath":"zh/introduction/index.md","lastUpdated":1709535888000}'),l={name:"zh/introduction/index.md"},s=i('<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>RUYISDK 是一个旨在提供给一个一体化集成开发环境的产品计划。从 2023 年开始筹备，计划用三年时间为 RISC-V 开发者提供一个完整的、全家桶式的全功能开发环境。</p><h2 id="ruyisdk-的目标" tabindex="-1">RUYISDK 的目标 <a class="header-anchor" href="#ruyisdk-的目标" aria-label="Permalink to &quot;RUYISDK 的目标&quot;">​</a></h2><ol><li>开发者购买了 (几乎) 任何一款 RISC-V 开发板或模组，都可以通过 RUYISDK 系统获得硬件资料说明、固件 / 软件更新、调试支持等。</li><li>开发者可以指定任何常用的 RISC-V 扩展指令集架构组合，都可以通过 RUYISDK 系统生成客户所需的操作系统、工具链、语言执行环境 (运行时或虚拟机)、计算库、应用框架等。尤其强调 RUYISDK 将完全支持 Vector 0.7.1 和 RVP 0.5.2 等已经大规模硅化的草案 标准 (or 厂商定制扩展)。</li><li>培育运营一个活跃全面的开发者交流社区。</li></ol><h2 id="ruyisdk-架构示意图" tabindex="-1">RUYISDK 架构示意图 <a class="header-anchor" href="#ruyisdk-架构示意图" aria-label="Permalink to &quot;RUYISDK 架构示意图&quot;">​</a></h2><p><img src="'+t+'" alt="image"></p><h2 id="ruyisdk-的组成" tabindex="-1">RuyiSDK 的组成 <a class="header-anchor" href="#ruyisdk-的组成" aria-label="Permalink to &quot;RuyiSDK 的组成&quot;">​</a></h2><p>RuyiSDK 主要包含了一个组件管理器（也称为如意包管理器）、一个集成开发环境（如意IDE）、一个开发者交流社区；</p><ul><li><p>如意组件管理器包含一个在线软件源 （Ruyi repo） 和 一个包管理工具（ruyi）。在线软件源即如意Repo集中存储了RISC-V集成开发环境所需的编译工具链、调试工具、模拟器、运行环境、文档、代码、工具、target系统镜像等内容；包管理器工具则是用于与在线软件源交互的工具，它提供了一套命令行接口（ruyi）或图形用户界面（GUI未来可能提供），使开发者能够搜索、安装、更新和管理软件包。包管理工具负责从在线软件源中获取软件包的信息，解析软件包的依赖关系，并自动处理依赖关系的下载和安装。</p></li><li><p>如意集成开发环境（Ruyi IDE）则是一个专门用来开发能够运行在RISC-V架构设备上的软件和应用的工具箱。可以帮助开发者编写和测试自己的程序。</p><p>想象一下，你要做一款能够运行在RISC-V设备上的应用程序，比如用C或者C++语言开发一个图像识别的程序，Ruyi IDE 就像是一个你的工作室，里面有各种各样的工具可以帮助你完成这个任务。首先创建项目，从RuyiSDK包管理器中下载和安装所需的编译工具链、调试工具、模拟器等工具，然后在文本编辑器中完成对代码的编辑，接着对项目进行编译构建获得RISC-V架构的可执行程序，最后在模拟器或者RISC-V开发板上进行运行和测试。如果代码需要调试，也可通过调试工具进行代码调试。这一过程和x86下的开发、编译构建、调试、运行的流程是一致的，只是适用于当前开发语言及目标运行设备的RISC-V的编译工具链、模拟器等软件和工具都可以从如意包管理器中获取，在安装和IDE初始设置时都已经被集成到如意集成开发环境之中，用户无需为环境搭建耗费精力。</p></li><li><p>如意开发者交流社区则提供文档和教程、论坛和技术讨论区、博客和文档等等功能，目的是为RISC-V开发者提供一个开放的交流平台，提供互助式技术支持和资源共享，聚集RISC-V开发者并推动RISC-V生态系统的发展。</p></li></ul><h2 id="ruyisdk-成果" tabindex="-1">RuyiSDK 成果 <a class="header-anchor" href="#ruyisdk-成果" aria-label="Permalink to &quot;RuyiSDK 成果&quot;">​</a></h2><h3 id="ruyi-包管理器" tabindex="-1">RUYI 包管理器 <a class="header-anchor" href="#ruyi-包管理器" aria-label="Permalink to &quot;RUYI 包管理器&quot;">​</a></h3><ul><li><p><a href="https://mirror.iscas.ac.cn/ruyisdk/" target="_blank" rel="noreferrer">在线软件源 RUYI REPO</a> ：<a href="https://mirror.iscas.ac.cn/ruyisdk" target="_blank" rel="noreferrer">https://mirror.iscas.ac.cn/ruyisdk</a></p></li><li><p>包管理器工具</p><ul><li><a href="https://github.com/ruyisdk/ruyi" target="_blank" rel="noreferrer">GitHub 项目</a>：<a href="https://github.com/ruyisdk/ruyi" target="_blank" rel="noreferrer">https://github.com/ruyisdk/ruyi</a></li><li>download（latest release）： <ul><li>GitHub Releases: <a href="https://github.com/ruyisdk/ruyi/releases/tag/0.2.0" target="_blank" rel="noreferrer">https://github.com/ruyisdk/ruyi/releases/tag/0.2.0</a></li><li>ISCAS Ruyi Repo: <a href="https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.2.0/" target="_blank" rel="noreferrer">https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.2.0/</a></li></ul></li></ul></li></ul><h3 id="ruyi-ide" tabindex="-1">RUYI IDE <a class="header-anchor" href="#ruyi-ide" aria-label="Permalink to &quot;RUYI IDE&quot;">​</a></h3><h3 id="开发者社区" tabindex="-1">开发者社区 <a class="header-anchor" href="#开发者社区" aria-label="Permalink to &quot;开发者社区&quot;">​</a></h3><ul><li><a href="./../ruyi/">文档和教程</a></li></ul>',15),o=[s];function u(n,h,d,c,p,y){return e(),a("div",null,o)}const I=r(l,[["render",u]]);export{k as __pageData,I as default};
