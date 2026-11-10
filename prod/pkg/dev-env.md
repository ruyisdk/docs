---
title: 配置开发环境
sidebar_position: 4
---

<!-- markdownlint-configure-file {"MD025": {"front_matter_title": ""}} -->

# 配置开发环境

本页帮助你根据开发主机、目标平台和项目需求，选择工具链、profile、sysroot 和模拟器，再创建并使用 Ruyi 虚拟环境。

操作顺序是：

明确开发任务 → 选择资源 → 获取软件包 → 创建并激活环境 → 准备源码 → 构建 → 按场景运行。

## 开始前准备

开始前，请先完成：

- 按[安装 Ruyi](./install.md)安装并验证 Ruyi，完成软件源和遥测检查。

- 按[管理软件包](./manage.md)获取或刷新软件包索引，使后续能够查询可用资源和 profile。

- 准备可写的工作目录，并确认开发主机的操作系统和架构。

- 根据项目或案例准备 Make、CMake、Meson、Ninja、Git 等实际需要的工具。

此时不必先安装所有工具链。先完成下面的需求判断，再获取选定的资源。

本页主要使用 Linux 下的 Bash 命令。fish 的激活方式在“使用虚拟环境”中单独说明。

> Ruyi 虚拟环境在一个目录中组织开发工具入口和配置，并继续引用已安装的软件包。它与安装 Ruyi 本体时使用的 Python 虚拟环境用途不同。

## 明确开发主机、目标平台与任务

先回答三个问题：

| 问题 | 需要明确的内容 |
| --- | --- |
| Ruyi 和编译器运行在哪里？ | 开发主机的操作系统、CPU 架构，例如 x86_64 Linux 或开发板上的 riscv64 Linux |
| 生成的程序运行在哪里？ | 目标设备、目标系统、指令集及运行库，例如 Milk-V Duo 上的 musl Linux 环境 |
| 本次需要完成什么？ | 只构建、在 QEMU 用户态环境中运行、传到设备运行，或直接在目标设备上构建运行 |

工具链软件包首先要能在**开发主机**上执行，生成的程序还要与**目标平台**匹配。

例如：

- 在 x86\_64 主机上为 Milk\-V Duo 构建程序，需要 x86\_64 宿主工具链及符合目标系统要求的配置。

- 在 LicheePi 4A 上直接构建并运行程序，需要能在该板 riscv64 Linux 环境中执行的工具链。

- 在 x86\_64 主机上运行构建出的 RISC\-V 用户态程序，可以参考 LLVM＋GNU sysroot＋QEMU 案例。

下面的基本创建示例选择 GNU 上游工具链和 `generic` profile，用于建立通用 RV64GC、LP64D 的开发环境。具体设备仍需按对应案例检查系统和运行库要求。

## 确定开发环境需要的资源

### 工具链

工具链解决“用什么编译和链接目标程序”的问题，通常包含编译器、链接器及相关开发工具。

选择时检查：

- 软件包是否提供适合开发主机的版本。

- 工具链面向 Linux、裸机还是特定厂商平台。

- 目标指令集、ABI 和运行库是否符合项目要求。

- 所选 profile 要求的工具链特性是否满足。

需要 GNU 工具链、LLVM/Clang，或厂商专用工具链，应由项目和目标平台决定。

### profile

profile 是创建环境时选择的目标平台预置配置，无需使用 `ruyi install` 单独安装。

它可以提供：

- 目标相关的编译参数，例如指令集和 ABI。

- 对工具链特殊能力的要求。

- 与模拟器配合使用的配置。

查看当前索引中的 profile：

```bash
ruyi list profiles
```

输出中的 `arch` 表示目标架构；`needs quirks` 表示工具链需要具备的特性。

例如，当前索引中的：

- `generic` 使用 RV64GC、LP64D 配置。

- `sipeed-lpi4a` 面向相应平台，并要求工具链提供 `xthead` 特性。

- `milkv-duo` 同样有工具链特性要求。

选择 profile 时还要核对工具链、目标系统和项目依赖。创建环境时通过检查，并不代表所有程序都能在目标设备上运行。

如果没有对应板型的 profile，先判断现有配置是否满足任务要求，不要直接假定 `generic` 适用于所有设备。

### sysroot

为目标系统构建程序时，编译器通常需要目标系统的头文件、库文件和链接所需的其他文件。sysroot 将这些内容组织为一个目录，供构建过程使用。

例如，在 x86\_64 主机上为 RISC\-V Linux 编译程序，需要使用目标系统的开发文件，不能直接把主机的系统库当作目标库。

选择 sysroot 时，应同时考虑：

- 目标架构和 ABI。

- 目标系统使用的 C 库，例如 glibc 或 musl。

- 库版本及项目需要的开发文件。

- 与所选编译器、链接器的配合情况。

Ruyi支持以下来源：

| 来源 | 使用方式 |
| --- | --- |
| 所选工具链自带的 sysroot | 默认从工具链复制到环境 |
| 另一已安装工具链提供的 sysroot | 使用 --sysroot-from，也可使用同义选项 --copy-sysroot-from-pkg |
| 已有的完整 sysroot 目录 | 使用 --copy-sysroot-from-dir 复制，或 --symlink-sysroot-from-dir 引用 |
| 已准备好的目标 rootfs 目录 | 使用 --project-sysroot-from-rootfs 整理常见构建目录 |

并非所有工具链都自带 sysroot。例如，本页所核对的 `llvm-upstream` 需要另外准备来源。

rootfs 可能包含运行所需的文件，但未必包含头文件和开发库。Ruyi 的复制、链接和整理操作不会补齐这些缺项。

裸机开发或自行管理运行库的项目，应按对应工具链和项目要求判断是否需要 sysroot。

### 模拟器

只在构建结果需要通过模拟器执行时准备模拟器软件包。

本页现有案例中的 `qemu-user-riscv-upstream` 用于运行 RISC\-V **用户态程序**。不负责启动完整开发板系统，也不提供任意设备外设的模拟。

如果只是构建，或准备把产物放到真实目标设备上运行，可以不为这个环境配置模拟器。

模拟器包也需要匹配开发主机。当前核对的 `qemu-user-riscv-upstream` 版本只提供 x86\_64 宿主产物。

## 获取所需软件包

完成选择后，先列出需要获取的资源：

| 本次任务 | 需要准备 |
| --- | --- |
| 本页基本 GNU 环境 | gnu-upstream，版本 0.20260201.0；使用其自带 sysroot，不需要模拟器 |
| LLVM＋QEMU CoreMark 案例 | llvm-upstream、提供 sysroot 的 gnu-plct、qemu-user-riscv-upstream |
| 具体开发板或项目 | 对应案例指定的工具链，以及额外需要的源码、库和构建工具 |

按[管理软件包](./manage.md)确认包名、版本和适用宿主，并完成安装。完成后回到下一节创建环境。

创建环境时不会自动安装缺少的工具链或模拟器。安装与创建所指定的版本应保持一致。

尤其要注意：创建命令省略版本时，会按索引匹配版本；即使本地已经安装旧版，也不一定会使用该旧版。

## 创建 Ruyi 虚拟环境

### 基本创建流程

以下示例假定已经安装：

```text
gnu-upstream 0.20260201.0
```

该工具链自带 sysroot，本例不配置模拟器。

准备工作目录：

```bash
mkdir -p "$HOME/ruyi-work"
cd "$HOME/ruyi-work"
```

在尚不存在的 `generic-venv` 目录中创建环境：

```bash
ruyi venv -t 'gnu-upstream(==0.20260201.0)' generic ./generic-venv
```

其中：

- `-t` 选择已安装的工具链和版本。

- `generic` 是本次使用的 profile。

- `./generic-venv` 是新环境目录。

正常完成后，应看到环境创建成功的提示，并在该目录中得到工具入口、激活脚本、环境配置及 sysroot。

可以查看目录：

```bash
ls ./generic-venv
ls ./generic-venv/bin
```

环境创建完成后，还需要执行激活步骤。

### 按需指定 sysroot 等资源

以下是不同需求下的创建方式，分别使用新的环境目录，不需要依次执行。后文的基本流程继续使用 `generic-venv`；如果选择其他环境，应相应替换激活路径。

#### 已有完整 sysroot：复制到环境

将 `/path/to/sysroot` 替换为实际目录：

```bash
ruyi venv -t 'gnu-upstream(==0.20260201.0)' --copy-sysroot-from-dir /path/to/sysroot generic ./sysroot-copy-venv
```

目录应存在、可读，并且包含与目标系统匹配的开发文件。

复制后，原目录中普通文件的后续修改不会同步到环境副本。复制会保留符号链接，因此还需要确保链接目标有效。

#### 已有完整 sysroot：直接引用

```bash
ruyi venv -t 'gnu-upstream(==0.20260201.0)' --symlink-sysroot-from-dir /path/to/sysroot generic ./sysroot-link-venv
```

这种方式不复制内容。环境使用期间，应保留原目录及其路径；修改共享目录会影响引用它的环境。

#### 已有目标 rootfs 目录

```bash
ruyi venv -t 'gnu-upstream(==0.20260201.0)' --project-sysroot-from-rootfs /path/to/rootfs generic ./rootfs-venv
```

该选项接收已准备好的目录。Ruyi 会选取常见头文件、库和其他构建目录，并可能跳过不可读或不支持的文件。创建完成后仍需检查所需开发文件是否齐全。

#### LLVM 使用 GNU sysroot，并配置 QEMU

准备好对应工具链、GNU sysroot 来源和模拟器后，可按现有案例创建：

```bash
ruyi venv -t llvm-upstream --sysroot-from gnu-plct -e qemu-user-riscv-upstream generic ./llvm-qemu-venv
```

这里由 LLVM 编译，`gnu-plct` 提供 sysroot 及相关 GCC 开发文件，QEMU 用于后续用户态运行。包名未限定版本时，应先确认索引所选版本已经安装。

显式 sysroot 来源选项只能选择一种。`--without-sysroot` 仅适用于明确不需要 Ruyi 为环境准备 sysroot 的任务，不能与上述来源选项同时使用。

多工具链、额外命令和自定义显示名称等用法见[Ruyi 命令详解](./commands.md)的 `ruyi venv` 部分。

## 使用虚拟环境

### 激活环境

在 Bash 中，从前述工作目录执行：

```bash
source ./generic-venv/bin/ruyi-activate
```

fish 使用独立的脚本：

```bash
source ./generic-venv/bin/ruyi-activate.fish
```

应在当前 shell 中加载脚本，不要另开子进程执行它。

激活后：

- 环境的 `bin` 目录会放到 PATH 前面。

- `RUYI_VENV` 指向当前环境。

- 默认情况下，提示符会显示环境名称。

下面的示例继续使用 Bash。

### 检查工具链

确认环境位置和当前找到的编译器：

```bash
printf '%s\n' "$RUYI_VENV"
command -v riscv64-unknown-linux-gnu-gcc
riscv64-unknown-linux-gnu-gcc --version
riscv64-unknown-linux-gnu-gcc -print-sysroot
```

应确认：

- `RUYI_VENV` 指向刚创建的 `generic-venv`。

- 编译器入口位于该环境的 `bin` 目录。

- 版本与所选工具链相符。

- 基本示例的 sysroot 路径位于该环境中。

使用其他工具链时，请换成对应的编译器名称。例如 Milk\-V Duo musl 工具链使用 `riscv64-unknown-linux-musl-gcc`。

激活不会自动替项目选择正确的编译器。项目仍需通过编译器名称、构建参数或构建配置文件使用当前环境。

### 退出环境

完成当前环境中的操作后执行：

```bash
ruyi-deactivate
```

这会恢复激活脚本管理的 PATH、提示符等状态。源码目录、构建产物，以及自行设置的项目变量不会因此全部还原。

如需继续开发，重新加载该环境的激活脚本即可。

### 环境目录与依赖关系

主要文件和目录如下：

| 文件或目录 | 用途 |
| --- | --- |
| bin/ | 工具入口和激活脚本；配置相应 QEMU 后还包含 ruyi-qemu |
| ruyi-venv.toml | 环境配置及所选软件包的名称、来源和具体版本 |
| ruyi-cache.v2.toml | 环境使用的工具路径等生成信息 |
| sysroot、sysroot.&lt;目标三元组&gt;（如 sysroot.riscv64-unknown-linux-gnu） | 当前环境使用的 sysroot 目录或指向该目录的链接。具体名称取决于所选工具链和环境配置。 |
| toolchain.cmake | CMake 工具链配置入口 |
| meson-cross.ini | Meson 交叉编译配置入口 |
| binfmt.conf | 配置模拟器时生成的示例配置，生成文件本身不会自动启用系统级关联 |

环境绑定创建时选择的资源：

- 安装工具链新版本后，旧环境不会自动切换。

- 要使用新版，先安装所需版本，再在新目录创建环境，验证通过后再处理旧环境和旧包。

- 卸载环境仍引用的工具链或模拟器，会使相应命令无法正常工作。

- LLVM 使用另一 GNU 工具链提供 sysroot 时，仍可能依赖该 GNU 包中的其他开发文件，不应仅因 sysroot 已复制就卸载来源包。

- 使用外部 sysroot 链接时，应保留被引用的目录。

环境中包含实际路径和工具引用。需要改变存放位置时，优先在新位置重新创建；不要把整个环境目录视为可以独立搬走的工具链副本。

## 获取并准备项目源码

### 使用 Ruyi 获取源码

当索引提供所需源码资源时，按[管理软件包](./manage.md)的 `extract` 流程获取。

例如，CoreMark 案例使用 `coremark`，Milk\-V Duo 示例使用 `milkv-duo-examples`。

获取前先选择源码存放位置；提取完成后，按输出进入实际生成的目录。默认目录名包含包名和版本，`extract` 不会自动改变当前 shell 的工作目录。

确认源码目录中存在案例所需的构建文件后，再执行后续操作。不要仍停留在用于存放源码的上一级目录。

### 从项目获取源码

也可以从项目的 Git 仓库或项目发布的源码压缩包获取源码

现有 CMake／Meson 案例分别使用：

- zlib\-ng 的发布压缩包。

- Taisei 的 Git 仓库及子模块。

按具体案例获取并准备源码，确认版本、提交和所需子模块。进入项目源码根目录后再构建。

源码可以放在 Ruyi 环境目录之外；项目与环境的目录关系应保持明确，以便正确引用构建配置文件。

## 编译与构建

### 选择对应构建方式

开始构建前，确认当前终端已激活需要的环境，并已进入项目源码目录。

| 项目使用的构建方式 | 如何接入当前环境 |
| --- | --- |
| Make | 按项目要求指定编译器或工具链前缀；CoreMark 和 Milk-V Duo 示例见对应案例 |
| CMake | 按项目要求指定编译器，或使用环境生成的 toolchain.cmake |
| Meson | 按项目要求引用环境生成的 meson-cross.ini |

生成的 CMake、Meson 配置提供了使用示例。项目需要的头文件、库、构建工具和额外参数，仍应按项目说明或案例准备。

### 检查构建产物

构建完成后，先确认预期文件已经生成，再检查其类型和目标架构。

例如，CoreMark 案例生成 `coremark.exe`，可在产物所在目录检查：

```bash
file ./coremark.exe
```

应能识别为案例预期的 RISC\-V 程序。

对于本章案例中的 riscv64 Linux 程序，检查输出中是否包含以下信息：

- `ELF`：表示文件采用 ELF 格式。

- `64-bit`：表示这是 64 位程序。

- `RISC-V`：表示程序面向 RISC\-V 架构；部分版本的输出显示为 `UCB RISC-V`。

- `executable` 或 `pie executable`：表示文件为可执行程序。

`coremark.exe` 是该项目使用的产物名称，`.exe` 后缀不代表它是 Windows 程序，应以 `file` 检查到的实际格式为准。

> 如果目标是 RISC\-V，但输出显示为 `x86-64` 或其他架构，请检查构建时是否使用了预期的编译器和构建配置。

架构检查通过后，还要根据运行方式确认指令集、ABI、动态加载器和库是否匹配。

## 运行程序

### 在 QEMU 用户态模拟器中运行

需要在开发主机上运行 RISC\-V 用户态程序时，可以配置 QEMU 用户态模拟环境，并按照项目需求执行构建和运行流程。

创建包含 QEMU 的开发环境后，在对应环境中运行编译生成的程序：

```bash
ruyi-qemu coremark.exe
```

Ruyi 会使用环境中选择的 QEMU，并传入相应 profile 和 sysroot 配置。

程序正常完成并输出预期结果后，才算完成程序的运行验证。

### 将产物拷贝到目标设备运行

为 Milk\-V Duo 构建并运行 CoreMark（链接待补充）案例采用以下流程：

主机完成构建 → 检查产物 → 使用文件传输工具拷贝 → 登录设备 → 在接收目录运行。

需要另外确认设备网络、登录方式、目标路径，以及设备系统与构建配置是否匹配。

案例中的 `scp` 是独立的文件传输工具，这一步由用户完成。

### 在目标设备上直接构建并运行

在 LicheePi 4A 上构建并运行 CoreMark（链接待补充）案例直接在开发板的 riscv64 Linux 环境中完成操作。

在板上安装可运行的工具链、创建并激活环境、准备源码和构建后，可以在产物目录运行：

```bash
./coremark.exe
```

这种场景不需要经过另一台主机传输程序，也不要求额外加入 QEMU。仍需确认工具链、板上系统及项目运行要求相匹配。

## 更多开发版应用示例

我们列举了部分设备的应用构建案例，可参考案例理解适用 ruyi 进行开发的操作步骤。

更多开发板应用的构建与运行步骤，请参阅[开发板应用示例网站](https://board-docs-frontend.pages.dev/)。

| 案例 | 适合的需求 | 现有内容覆盖范围 |
| --- | --- | --- |
| 在 LicheePi 4A 上构建并运行 CoreMark（链接待补充） | 在目标开发板上准备环境并直接开发 | 环境配置、源码获取、构建、产物检查、板上运行 |
| 为 Milk-V Duo 构建并运行 CoreMark（链接待补充） | 在 x86_64 Linux 主机上构建，再到设备运行 | 环境配置、构建、产物检查、文件传输、设备运行 |

## 遇到问题时

| 遇到的问题 | 先检查什么 |
| --- | --- |
| 找不到合适的 profile | 索引是否已准备好，profile 的目标架构及所需特性是否符合任务 |
| 工具链与 sysroot 不匹配 | 目标架构、ABI、C 库和开发文件是否一致 |
| 创建环境失败 | 指定包版本是否已安装、目录是否已存在、sysroot 来源是否有效，以及选项是否冲突 |
| 激活后编译器不对 | 是否加载了正确脚本，命令路径是否位于预期环境，项目是否仍使用其他编译器 |
| 构建失败 | 当前源码目录、项目依赖、编译器选择和案例参数是否正确 |
| QEMU 运行失败 | 当前环境是否配置 QEMU，程序所需指令集、加载器和库是否满足 |
| 目标设备运行失败 | 产物是否传输到正确位置，设备系统、权限及运行库是否符合要求 |

完整诊断流程见问题排查与求助（链接待补充）。软件包查询、下载和安装问题回到[管理软件包](./manage.md)处理。

## 下一步

选择与开发任务对应的案例，完成具体构建和必要的运行验证。

需要查询 `ruyi venv` 的完整选项时，进入[Ruyi 命令详解](./commands.md)；需要维护环境依赖的软件包时，进入[管理软件包](./manage.md)。

如果下一步是为开发板安装系统，进入[为设备安装系统](./flash-os.md)，按对应设备和烧录方式准备操作环境。
