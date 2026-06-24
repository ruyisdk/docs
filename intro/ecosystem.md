# 生态与社区

RuyiSDK 不仅是一套开发工具，更是一个开放的 RISC-V 开发者生态与协作平台。我们坚信，RISC-V 的成功离不开一个健康、活跃且紧密协作的生态系统。因此，RuyiSDK 从创立之初就将生态建设置于与产品开发同等重要的位置。

本文档介绍 RuyiSDK 的生态合作思路、当前覆盖成果，以及开发者如何参与共建。

## 生态合作策略

RuyiSDK 的生态策略可以概括为：**开源协作，软硬协同，融入主流**。我们通过与芯片厂商、开发板制造商、操作系统社区及全球开发者的深度协作，将原本碎片化的 RISC-V 开发资源，逐步转化为开发者触手可及的基础设施。

### 硬件生态：广泛兼容，降低门槛

在硬件侧，RuyiSDK 致力于打破不同硬件平台之间的壁垒。我们的策略是：

1. **主动适配**：与芯片和开发板厂商紧密合作，在工具链、模拟器、系统镜像和调试工具层面进行主动适配，确保主流硬件在 RuyiSDK 中“开箱可用”。
2. **降低硬件适配门槛**：`ruyi` 屏蔽了不同 RISC-V 设备在资源获取、环境配置与系统烧录上的底层差异，为开发者提供清晰、可操作的引导路径。
3. **持续扩展**：动态跟踪市场上新出现的 RISC-V 硬件，并将“支持绝大多数市面可获取的主流 RISC-V 设备及芯片”作为长期目标。

### 软件生态：融入发行版官方体系

在软件侧，RuyiSDK 积极与各大 Linux 发行版社区开展协作，推动 RISC-V 开发工具的深度融合。我们的策略遵循明确的“两步走”路径：

1. **广泛可用**：首先确保 RuyiSDK 能在多种主流发行版上便捷安装。我们提供独立二进制包、`pip` 安装、系统扩展软件源等多种部署方式，确保不同生态的开发者都能无障碍接入。
2. **融入官方**：在“广泛可用”的基础上，持续推动 `ruyi` 进入各发行版的**官方软件源仓库**。这不仅是技术适配的完成，更是社区对 RuyiSDK 价值和稳定性的认可，能让开发者通过 `apt`、`dnf`、`pacman` 等原生包管理器无缝使用，从而成为系统级的基础设施。

### 社区协作：开放治理，共建共享

RuyiSDK 本身采用开源模式开发，项目代码、工具配置、文档资源均托管在 GitHub 等全球开源社区。我们通过以下方式实践开放协作：

- **透明开发**：通过每双周发布的进展报告和公开的 Issue 跟踪，让社区清晰了解项目的最新动态与决策过程。
- **鼓励贡献**：降低贡献门槛，欢迎任何形式的反馈、文档改进和代码提交。
- **生态激励**：积极将社区贡献的硬件适配、工具补丁合入主分支，形成“贡献-受益”的正向循环。

## 生态合作成果

在上述策略的指导下，RuyiSDK 在硬件、操作系统和运行时生态方面取得了以下具体成果。

### 硬件生态覆盖

RuyiSDK 已为以下芯片与开发板提供系统镜像烧录、工具链适配或调试支持。

#### 已支持的芯片（部分）

| 芯片                               | 厂商/项目                | 说明                               |
| :--------------------------------- | :----------------------- | :-------------------------------- |
| **香山** (Nanhu)             | 中国科学院计算技术研究所  | 开源高性能 RISC-V 处理器，支持南湖架构      |
| **TH1520**                   | 阿里平头哥               | 玄铁 C910 核心，LicheePi 4A 搭载            |
| **K230**                     | 嘉楠科技(Canaan)         | 高性能 AI 视觉 RISC-V 芯片，CanMV K230 搭载 |
| **K1 / M1**                  | 进迭时空(SpacemiT)       | 灵犀系列芯片，BananaPi BPI-F3 搭载          |
| **JH7110**                   | 赛昉科技                 | VisionFive 2 搭载                           |
| **D1**                       | 全志科技                 | 玄铁 C906 核心                              |
| **SG2000 / SG2002 / SG2042** | 算能                     | Milk-V 系列开发板搭载                       |

> 💡 **已支持的芯片可参考开发板支持情况。**

#### 已支持的开发板（部分）

| 开发板                            | 芯片                | 资源-系统镜像          | 功能-镜像烧录| 功能-调试支持 |
| :-------------------------- | :------------------ | :-------------------- | :---------------- | :------- |
| **LicheePi 4A**             | TH1520              | ✅ RevyOS / Debian    | ✅|          |
| **Milk-V Duo (64M/256M/S)** | SG2002 / CV1800B    | ✅ Buildroot / Debian | ✅|          |
| **Milk-V Mars**             | SG2042              | ✅ Debian / Fedora    | ✅|          |
| **VisionFive 2**            | JH7110              | ✅ Debian / openEuler | ✅|          |
| **BananaPi BPI-F3**         | SpacemiT K1         | ✅ Debian             | ✅|          |
| **BeagleV-Ahead**           | TH1520              | ✅ Debian             | ✅|          |
| **HiFive Unmatched**        | SiFive Freedom U740 | ✅ Fedora / Debian    | ✅|          |
| **Pioneer Box**             | SG2042              | ✅ Debian / openEuler | ✅|          |
| **CanMV K230**              | K230                | ✅ CanMV              | ✅|          |
| **香山南湖笔记本**           | 香山 (Nanhu)        | ✅ openEuler / Debian | |          |

> 💡 **开发板支持是多个层面的，每个层面支持程度不是齐头并进，而是分别推进的。因此具体的支持情况请参考以下方式自查：**：
> - 支持开发板的系统镜像：请访问 [RISC-V 开发板和操作系统支持矩阵](https://matrix.ruyisdk.org) 获取支持详情。
> - ruyi 支持烧录的开发板和镜像：通过 `ruyi device provision` 命令查询。
> - IDE 对开发板调试功能支持：功能完善中，支持情况待补充。

### 操作系统生态融入

RuyiSDK 在各发行版中的集成遵循“广泛可用 → 融入官方”的策略，为了方便描述和了解，目前定义了如下的几种支持状态，并对不同发行版的支持情况进行总结，方便大家了解。

**发行版集成状态定义**

| 级别 | 阶段名称 | 核心特征 | 对用户的价值 | 典型状态示例 |
| :---- | :---- | :------- | :---------- | :----------- |
| **L0** | **原生预装** | 软件包不仅是官方仓库的一部分，还被选为发行版**默认镜像（ISO）的预装组件**。用户安装系统后即可直接使用，无需任何安装步骤。 | 实现真正的“开箱即用”，**零配置**开始RISC-V开发，极大地降低了上手门槛。 | `ruyi` 被预装在 openRuyi 或某厂商的 RISC-V 定制发行版中。 |
| **L1** | **构建集成** | 在 L2 的基础上，软件包被纳入发行版的**核心构建系统**，随发行版主线版本**持续、自动地被构建和测试**。 | 用户在任何新版本的发行版中都能直接安装，确保持续可用性和版本一致性。 | `ruyi` 成为 Fedora 构建系统的一部分，每次版本发布都会包含。 |
| **L2** | **仓库接纳** | 软件包定义及源码已被纳入发行版的**官方软件包仓库**，具备了包名、版本、依赖等元数据。但尚未集成到核心构建系统。 | 用户可通过 `apt/dnf install` 等原生包管理器发现并安装。 | `ruyi` 进入 openEuler 软件源仓库。 |
| **L3** | **独立构建** | 软件包由RuyiSDK团队或第三方为特定发行版版本构建，通过**外部软件源**或**手动下载安装**提供，**未进入**发行版官方仓库或构建系统。 | 用户可手动安装，但无法通过系统原生包管理器直接获取，需要额外配置。 | 为 Ubuntu 24.04 构建 ruyi-0.43.0.deb 包，放在第三方源或GitHub Release中。 |

`ruyi` 与各发行版支持情况如下：

| 操作系统 | 支持状态 | 支持版本 | 备注 |
| :--- | :--- | :--- | :--- |
| **Arch Linux** | ✅ 构建集成 | ruyi-0.16.0 ~ 0.49.0 | [AUR](https://aur.archlinux.org/packages/ruyi) |
| **Gentoo** | ✅ 独立构建 || [ruyisdk-overlay](https://github.com/ruyisdk/ruyisdk-overlay) |
| **Fedora Rawhide** | ✅ 构建集成 || [Fedora](https://packages.fedoraproject.org/pkgs/ruyi/ruyi/) |
| **Debian** | ✅ 构建集成 || [Debian testing](https://packages.debian.org/testing/main/ruyi) |
| **OpenRuyi** | ✅ 构建集成 |||
| **openEuler** | ✅ 仓库接纳 |||
| **Ubuntu** | ✅ 独立构建 |||
| **RevyOS** | ✅ 独立构建 |||
| **bianbu 2.2/3.0** | ✅ 独立构建 | ruyi-0.41.0 | |
| **rockos 20250730** | ✅ 独立构建 | ruyi-0.41.0 ||

> 💡 目前，**Arch Linux、Gentoo、Fedora、Debian、OpenRuyi** 等社区已将 `ruyi` 纳入官方或社区软件源仓库，并纳入到构建系统（每次发版都包含这个包，构建完后ruyi在官方软件源中）这是开源协作从“项目适配”走向“生态接纳”的生动体现。我们将继续努力，争取让 RuyiSDK 进入更多发行版的官方生态。



### 运行时生态跟踪

RuyiSDK 对 RISC-V 平台上的高级语言运行时进行持续跟踪与优化，确保其稳定可用：

| 运行时                         | RISC-V 支持状态      | 分发方式                                      |
| :----------------------------- | :------------------- | :-------------------------------------------- |
| **V8 (JavaScript 引擎)** | ✅ 上游已支持 RISC-V | 由 Chrome / Node.js 内置，或从源码构建        |
| **Node.js**              | ✅ 上游已支持 RISC-V | 系统包管理器 (`apt` / `dnf` / `pacman`) |
| **OpenJDK**              | ✅ 上游已支持 RISC-V | 系统包管理器                                  |
| **Go**                   | ✅ 上游已支持 RISC-V | 系统包管理器                                  |
| **LuaJIT**               | ⚠️ 部分支持        | 系统包管理器                                  |
| **WAMR (WebAssembly)**   | ✅ 支持 RISC-V       | 从源码构建                                    |

> 📌 **说明**：Node.js、OpenJDK、Go 等运行时在主流 Linux 发行版中已有成熟的包管理方案，支持多版本并存与灵活切换。RuyiSDK 暂不重复分发，但持续关注这些组件在 RISC-V 平台上的表现，并将其纳入兼容性测试与优化范围。

## 社区与协作

RuyiSDK 是一个社区驱动的项目，我们欢迎每一位开发者的参与。

### 参与渠道

| 渠道                        | 用途                                    | 链接                                          |
| :-------------------------- | :-------------------------------------- | :-------------------------------------------- |
| **技术论坛**          | 技术讨论、问题答疑、经验分享            | [ruyisdk.cn](https://ruyisdk.cn/)                |
| **GitHub 组织**       | 开源协作、源码托管、Issue 跟踪、PR 提交 | [github.com/ruyisdk](https://github.com/ruyisdk) |
| **官网**              | 产品信息、下载入口、社群二维码          | [ruyisdk.org](https://ruyisdk.org)               |
| **双周 Office Hours** | 每双周四下午 15:00 在线答疑             | 详见官网或社群公告                            |

### 核心仓库

| 仓库                                                                               | 说明                               |
| :--------------------------------------------------------------------------------- | :--------------------------------- |
| [ruyisdk/ruyi](https://github.com/ruyisdk/ruyi)                                       | RuyiSDK 包管理器核心代码           |
| [ruyisdk/packages-index](https://github.com/ruyisdk/packages-index)                   | 软件包索引仓库，定义所有资源元数据 |
| [ruyisdk/ruyisdk-vscode-plugin](https://github.com/ruyisdk/ruyisdk-vscode-plugin)     | VS Code 插件源码                   |
| [ruyisdk/ruyisdk-eclipse-plugins](https://github.com/ruyisdk/ruyisdk-eclipse-plugins) | Eclipse 插件源码                   |
| [ruyisdk/support-matrix](https://github.com/ruyisdk/support-matrix)                   | 开发板与操作系统支持矩阵数据       |
| [ruyisdk/board-docs](https://github.com/ruyisdk/board-docs)                           | 设备应用示例库                     |

### 如何参与贡献

1. **反馈与建议**：在 GitHub 仓库提交 Issue，报告 Bug 或提出功能建议。
2. **文档与示例**：完善现有文档，或提交新的开发板应用示例。
3. **代码贡献**：Fork 感兴趣的仓库，提交 Pull Request。
4. **社区交流**：参与技术论坛讨论，分享您的使用经验，或参加双周 Office Hours 与团队直接交流。

## 相关链接

* [RuyiSDK 官网](https://ruyisdk.org)
* [RuyiSDK 技术论坛](https://ruyisdk.cn)
* [RuyiSDK 双周进展报告](https://github.com/ruyisdk/wechat-articles)
* [GitHub 组织页面](https://github.com/ruyisdk)
* [硬件与系统支持矩阵](https://matrix.ruyisdk.org)
* [设备应用示例库](https://board-docs-frontend.pages.dev)
