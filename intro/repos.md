# RuyiSDK 核心仓库

本文档列出了 RuyiSDK 各核心组件的代码仓库位置及维护信息，方便开发者查阅源码、提交 issue 或参与贡献。

## 自研工具集

| 组件 | 说明 | 仓库地址 | 维护方式 | Maintainer | 贡献指南 |
|------|------|---------|---------|-----------|---------|
| **ruyi（包管理器）** | RuyiSDK 核心包管理器，采用 Apache-2.0 许可证 | [github.com/ruyisdk/ruyi](https://github.com/ruyisdk/ruyi) | RuyiSDK 自研维护 | [xen0n](https://github.com/xen0n) | [CONTRIBUTING](https://github.com/ruyisdk/ruyi/blob/main/CONTRIBUTING.zh.md) |
| **VSCode 插件** | RuyiSDK VSCode 插件 | [github.com/ruyisdk/ruyisdk-vscode-extension](https://github.com/ruyisdk/ruyisdk-vscode-extension) | RuyiSDK 自研维护 | [U2FsdGVkX1](https://github.com/U2FsdGVkX1) | 暂无 |
| **Eclipse 插件** | RuyiSDK Eclipse 插件 | [github.com/ruyisdk/ruyisdk-eclipse-plugins](https://github.com/ruyisdk/ruyisdk-eclipse-plugins) | RuyiSDK 自研维护 | [pzhlkj6612](https://github.com/pzhlkj6612) | [CONTRIBUTING](https://github.com/ruyisdk/ruyisdk-eclipse-plugins/blob/main/docs/developer/CONTRIBUTING.md) |

## RuyiSDK 资源与内容

| 组件 | 说明 | 仓库地址 | 维护方式 | Maintainer | 贡献指南 |
|------|------|---------|---------|-----------|---------|
| **RuyiSDK 软件包索引** | 定义所有软件包的元信息 | [github.com/ruyisdk/packages-index](https://github.com/ruyisdk/packages-index) | RuyiSDK 自研维护 | [xen0n](https://github.com/xen0n)、[weilinfox](https://github.com/weilinfox) | [CONTRIBUTING](https://github.com/ruyisdk/packages-index/blob/main/CONTRIBUTING.zh.md) |
| **RuyiSDK 软件包索引（备用镜像）** | 国内加速站点，自动同步 | [mirror.iscas.ac.cn/git/ruyisdk/packages-index](https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git) | RuyiSDK 自研维护（镜像） | [xen0n](https://github.com/xen0n) | -- |
| **RuyiSDK 资源镜像站** | 资源分发，提供国内高速下载 | [mirror.iscas.ac.cn/ruyisdk/](https://mirror.iscas.ac.cn/ruyisdk/) | RuyiSDK 自研维护（镜像运维） | [xen0n](https://github.com/xen0n) | -- |
| **RuyiSDK 官网** | 官网（ruyisdk.org） | [github.com/ruyisdk/ruyisdk-website](https://github.com/ruyisdk/ruyisdk-website) | RuyiSDK 自研维护 | [weilinfox](https://github.com/weilinfox) | [CONTRIBUTING](https://github.com/ruyisdk/ruyisdk-website/blob/main/CONTRIBUTING.md) |
| **RuyiSDK 文档** | RuyiSDK 产品使用指南 | [github.com/ruyisdk/docs](https://github.com/ruyisdk/docs) | RuyiSDK 自研维护 | [xijing21](https://github.com/xijing21)、[weilinfox](https://github.com/weilinfox) | [CONTRIBUTING](https://github.com/ruyisdk/docs/blob/main/README.md) |
| **开发板操作系统支持矩阵** | RISC-V 开发板 × 操作系统兼容性矩阵 | [github.com/ruyisdk/support-matrix](https://github.com/ruyisdk/support-matrix) | RuyiSDK 社区维护 | [DuoQilai](https://github.com/DuoQilai)、[KevinMX](https://github.com/KevinMX) | [CONTRIBUTING](https://github.com/ruyisdk/support-matrix/blob/main/CONTRIBUTING_zh.md) |
| **开发板应用示例** | RISC-V 开发板应用示例文档 | [github.com/ruyisdk/board-docs](https://github.com/ruyisdk/board-docs) | RuyiSDK 社区维护 | [DuoQilai](https://github.com/DuoQilai) | [CONTRIBUTING](https://github.com/ruyisdk/board-docs/blob/main/README_zh.md) |

## 基础组件

### GNU 工具链

| 组件 | 说明 | 仓库地址 | 维护方式 | Maintainer | 贡献指南 |
|------|------|---------|---------|-----------|---------|
| **riscv-gnu-toolchain（上游）** | RISC-V GNU 工具链上游主线 | [github.com/riscv-collab/riscv-gnu-toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain) | 上游贡献 + 扩展支持 | 上游社区 | 见上游仓库说明 |
| **riscv-gnu-toolchain（ruyisdk）** | RuyiSDK 维护的 GNU 工具链（含厂商扩展）<br/> 支持 Profiles RV20/22/23、RVV 1.0、玄铁香山等厂商扩展 | [github.com/ruyisdk/riscv-gnu-toolchain](https://github.com/ruyisdk/riscv-gnu-toolchain) | RuyiSDK 团队维护 | [pz9115](https://github.com/pz9115) | 参考上游流程，ruyisdk 分支请先联系维护者 |
| **riscv-gnu-toolchain-rv64ilp32** | RV64ILP32 ABI 专用工具链（与玄铁合作） | [github.com/ruyisdk/riscv-gnu-toolchain-rv64ilp32](https://github.com/ruyisdk/riscv-gnu-toolchain-rv64ilp32) | RuyiSDK 团队维护（与玄铁合作） | [pz9115](https://github.com/pz9115) | 参考上游流程 |
| **GLIBC** | GNU C 库上游 | [sourceware.org/glibc](https://sourceware.org/glibc) | 上游贡献 + RVV 优化 | 上游社区 | 见上游仓库说明 |
| **newlib** | newlib C 库上游 | [sourceware.org/newlib](https://sourceware.org/newlib) | 上游贡献 + RVV 优化 | 上游社区 | 见上游仓库说明 |
| **GDB** | GNU 调试器上游 | [sourceware.org/gdb](https://sourceware.org/gdb) | 上游跟踪 + RISC-V 架构支持 | 上游社区 | 见上游仓库说明 |

> 备注：riscv-gnu-toolchain（ruyisdk） 分支中的特性基本上已经全部合入 riscv-gnu-toolchain（上游）；大致的，riscv-gnu-toolchain（ruyisdk） 源码在某些时刻一些新批准的扩展指令的支持可能早于上游一段时间（模糊估计约半年左右），当上游合并新特性支持后两个版本趋于一致。因此，如果是早期尝鲜和验证一些上游未合入的新扩展支持或者新特性可以使用riscv-gnu-toolchain（ruyisdk）版本；否则大部分情况下推荐使用上游版本。具体需要关注仓库进行更细致的了解。

### LLVM 工具链

| 组件 | 说明 | 仓库地址 | 维护方式 | Maintainer | 贡献指南 |
|------|------|---------|---------|-----------|---------|
| **llvm-project（上游）** | LLVM/Clang 上游主线 | [github.com/llvm/llvm-project](https://github.com/llvm/llvm-project) | 上游贡献 + 扩展支持 | 上游社区 | 见上游仓库说明 |
| **llvm-project（ruyisdk）** | RuyiSDK 维护的 LLVM/Clang 工具链（含厂商扩展） | [github.com/ruyisdk/llvm-project](https://github.com/ruyisdk/llvm-project) | RuyiSDK 团队维护 | [Kiva](https://github.com/imkiva) | 参考上游流程，ruyisdk 分支请先联系维护者 |


### 模拟器

| 组件 | 说明 | 仓库地址 | 维护方式 | Maintainer | 贡献指南 |
|------|------|---------|---------|-----------|---------|
| **QEMU（上游）** | QEMU 上游主线 | [gitlab.com/qemu-project/qemu](https://gitlab.com/qemu-project/qemu) | 上游贡献 + RISC-V 设备模型 | 上游社区 | 见上游仓库说明 |
| **QEMU（ruyisdk）** | RuyiSDK 维护的 QEMU（含 RISC-V 设备模型） | [github.com/ruyisdk/qemu](https://github.com/ruyisdk/qemu) | RuyiSDK 团队维护 | RuyiSDK 团队 | 参考上游流程，ruyisdk 分支请先联系维护者 |
| **Box64** | x86 二进制转译器（RISC-V 支持） | [github.com/ptitSeb/box64](https://github.com/ptitSeb/box64) | 集成适配 | 上游社区 | 见上游仓库说明 |

### 运行时

| 组件 | 说明 | 仓库地址 | 维护方式 | Maintainer | 贡献指南 |
|------|------|---------|---------|-----------|---------|
| **V8** | JavaScript 引擎 | [chromium.googlesource.com/v8/v8](https://chromium.googlesource.com/v8/v8) | 上游贡献（RISC-V 后端） | 上游社区 | 见上游仓库说明 |
| **Node.js** | JavaScript 运行时 | [github.com/nodejs/node](https://github.com/nodejs/node) | 上游贡献（依赖 V8） | 上游社区 | 见上游仓库说明 |
| **OpenJDK** | Java 运行时（RISC-V 移植） | [github.com/openjdk/jdk](https://github.com/openjdk/jdk) | 上游贡献（RISC-V 移植） | 上游社区 | 见上游仓库说明 |
| **Go** | Go 语言运行时与工具链 | [go.googlesource.com/go](https://go.googlesource.com/go) | 上游贡献（RISC-V 原生支持） | 上游社区 | 见上游仓库说明 |

> 说明:
> - 运行时相关组件全部基于上游社区进行贡献；
> - V8 和 Go 属于 Google 生态，源码修改须先在对应代码评审平台[chromium-review.googlesource.com](https://chromium-review.googlesource.com/) 、[go-review.googlesource.com](https://go-review.googlesource.com) 提交并通过审核后才会合入官方仓库。
