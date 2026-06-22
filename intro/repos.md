# RuyiSDK 核心仓库

本文档列出了 RuyiSDK 各核心组件的代码仓库位置及维护信息，方便开发者查阅源码、提交 issue 或参与贡献。

## 自研工具集

| 组件                         | 仓库地址                                                                                                | 说明                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **ruyi（包管理器）**   | [github.com/ruyisdk/ruyi](https://github.com/ruyisdk/ruyi)                                                 | RuyiSDK 核心包管理器，采用 Apache-2.0 许可证        |
| **RuyiSDK 软件包索引** | [github.com/ruyisdk/packages-index](https://github.com/ruyisdk/packages-index)                             | RuyiSDK 软件包索引仓库，定义所有软件包的元信息      |
|                              | [mirror.iscas.ac.cn/git/ruyisdk/packages-index](https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git) | RuyiSDK 软件包索引仓库-备用仓/国内加速站点/自动同步 |
| **RuyiSDK 资源镜像站** | [mirror.iscas.ac.cn/ruyisdk/](https://mirror.iscas.ac.cn/ruyisdk/)                                         | 资源分发，提供国内高速下载                          |
| **VSCode 插件**        | [github.com/ruyisdk/ruyisdk-vscode-extension](https://github.com/ruyisdk/ruyisdk-vscode-extension)         | RuyiSDK VSCode 插件                                 |
| **Eclipse 插件**       | [github.com/ruyisdk/ruyisdk-eclipse-plugins](https://github.com/ruyisdk/ruyisdk-eclipse-plugins)           | RuyiSDK Eclipse 插件                                |
| **支持矩阵**           | [github.com/ruyisdk/support-matrix](https://github.com/ruyisdk/support-matrix)                             | RISC-V 开发板 × 操作系统兼容性矩阵                 |
| **开发板应用示例**     | [github.com/ruyisdk/board-docs](https://github.com/ruyisdk/board-docs)                                     | RISC-V 开发板应用示例文档                           |

## 基础组件

### GNU 工具链

| 组件                                    | 仓库地址                                                                                                  | 说明                                                                                           |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **riscv-gnu-toolchain（上游）**   | [github.com/riscv-collab/riscv-gnu-toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain)           | RISC-V GNU 工具链上游主线                                                                      |
| **gnu-plct（PLCT 分支）**         | [github.com/ruyisdk/riscv-gnu-toolchain](https://github.com/ruyisdk/riscv-gnu-toolchain)                     | RuyiSDK 维护的 GNU 工具链（含厂商扩展），支持 Profiles RV20/22/23、RVV 1.0、玄铁香山等厂商扩展 |
| **riscv-gnu-toolchain-rv64ilp32** | [github.com/ruyisdk/riscv-gnu-toolchain-rv64ilp32](https://github.com/ruyisdk/riscv-gnu-toolchain-rv64ilp32) | RV64ILP32 ABI 专用工具链（与玄铁合作）                                                         |
| **GLIBC**                         | [sourceware.org/glibc](https://sourceware.org/glibc)                                                         | GNU C 库上游                                                                                   |
| **newlib**                        | [sourceware.org/newlib](https://sourceware.org/newlib)                                                       | newlib C 库上游                                                                                |
| **GDB**                           | [sourceware.org/gdb](https://sourceware.org/gdb)                                                             | GNU 调试器上游                                                                                 |

> 备注：gnu-plct 中的特性基本上已经全部合入 riscv-gnu-toolchain（上游）；大致的，gnu-plct 源码在某些时刻一些新批准的扩展指令的支持可能早于上游一段时间（模糊估计约半年左右），当上游合并新特性支持后两个版本趋于一致。因此，如果是早期尝鲜和验证一些上游未合入的新扩展支持或者新特性可以使用gnu-plct版本；否则大部分情况下推荐使用上游版本。具体需要关注仓库进行更细致的了解。

### LLVM 工具链

| 组件                             | 仓库地址                                                                | 说明                                           |
| -------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------- |
| **llvm-project（上游）**   | [github.com/llvm/llvm-project](https://github.com/llvm/llvm-project)       | LLVM/Clang 上游主线                            |
| **llvm-plct（PLCT 分支）** | [github.com/ruyisdk/llvm-project](https://github.com/ruyisdk/llvm-project) | RuyiSDK 维护的 LLVM/Clang 工具链（含厂商扩展） |

### 模拟器

| 组件                             | 仓库地址                                                          | 说明                                      |
| -------------------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| **QEMU（上游）**           | [gitlab.com/qemu-project/qemu](https://gitlab.com/qemu-project/qemu) | QEMU 上游主线                             |
| **qemu-plct（PLCT 分支）** | [github.com/ruyisdk/qemu](https://github.com/ruyisdk/qemu)           | RuyiSDK 维护的 QEMU（含 RISC-V 设备模型） |
| **Box64**                  | [github.com/ptitSeb/box64](https://github.com/ptitSeb/box64)         | x86 二进制转译器（RISC-V 支持）           |

### 运行时

| 组件              | 仓库地址                                                                | 说明                                          | google生态代码评审平台                                                     |
| ----------------- | ----------------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------- |
| **V8**      | [chromium.googlesource.com/v8/v8](https://chromium.googlesource.com/v8/v8) | JavaScript 引擎（RISC-V 后端由 RuyiSDK 贡献） | [chromium-review.googlesource.com](https://chromium-review.googlesource.com/) |
| **Node.js** | [github.com/nodejs/node](https://github.com/nodejs/node)                   | JavaScript 运行时                             |                                                                            |
| **OpenJDK** | [github.com/openjdk/jdk](https://github.com/openjdk/jdk)                   | Java 运行时（RISC-V 移植）                    |                                                                            |
| **Go**      | [go.googlesource.com/go](https://go.googlesource.com/go)                   | Go 语言运行时与工具链                         | [go-review.googlesource.com](https://go-review.googlesource.com)              |

> 说明:
>
> - 运行时相关组件全部基于上游社区进行贡献。
> - V8 和 Go 属于 Google 生态软件，相关软件的源码的修改都要先在代码评审平台提交、通过审核后才会合入官方仓库。
