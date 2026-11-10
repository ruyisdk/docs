---
title: 安装 Ruyi
sidebar_position: 2
---

<!-- markdownlint-configure-file {"MD025": {"front_matter_title": ""}} -->

# 安装 Ruyi

本页帮助你安装 Ruyi 包管理器、确认命令可以使用，并完成进入软件包管理、开发环境配置或设备安装之前的检查。

## 使用前须知

### 平台、系统与架构支持

安装方式应根据**运行 Ruyi 的设备架构和操作系统**进行选择。

例如，在 Linux x86\_64 电脑上为 RISC\-V 开发板构建程序，应安装 x86\_64 版本的 Ruyi。

Ruyi 提供 Linux x86\_64、aarch64 和 riscv64 的预编译程序。具体发行版支持情况见 [RuyiSDK 平台支持说明](https://ruyisdk.org/docs/Other/platform-support/)。

Windows 用户按本页的 WSL2 路线准备 Linux 环境。macOS 保留独立入口，安装说明后续补充。

### 遥测与隐私说明

开始使用前，请阅读 [RuyiSDK 隐私声明](https://ruyisdk.org/docs/legal/privacyPolicy/)。

Ruyi 提供 `local`、`on`、`off` 三种遥测模式。上游默认使用 `local`，但发行版配置和环境变量可能改变实际模式。

后文“确认遥测设置”介绍查询和保存偏好的方法。完整数据范围、存储位置及清理说明见[配置与维护](./maintenance.md)。

## 选择安装方式

为了让不同环境和需求下的用户更加方便的使用 `ruyi`, 我们提供了多样化的安装方式，您可以按需任选一种。

| 安装方式 | 说明 | 优缺点 | 适用环境 |
| --- | --- | --- | --- |
| [脚本安装](./install.md#script-installation) | 通过一行命令调用sh脚本完成环境识别和安装 | 优点：简单方便，一行命令完成安装<br />缺点：遇到问题还需考虑脚本自身 | Linux |
| [手动安装预编译二进制](./install.md#binary-installation) | 用户需要明确设备架构和操作系统，自行下载并手动安装和配置 | 优点：过程透明，适合对技术有探究欲的用户；对外部依赖最小，容错性最高；<br />缺点：步骤稍多 | Linux |
| [通过 Python 包管理工具安装](./install.md#python-installation) | 使用 pipx 安装，需要系统本身已经具备 python 环境 | 优点：安装方便<br />缺点：要求系统已有 Python 3.11 或更高版本 | Linux |
| [通过系统包管理器安装](./install.md#system-package-installation) | 通过系统包管理器安装 ruyi 工具 | 优点：安装方便；<br />缺点：受限于 Linux 发行版对 ruyi 的支持情况； | Debian、Fedora、openRuyi、Arch Linux、Gentoo |
| [通过 WSL2 使用 Ruyi](./install.md#windows-wsl2) | Windows 平台下使用 Ruyi 的一种方式 | — | Windows |
| 通过虚拟机使用 Ruyi | 非 Linux 平台使用 Ruyi 的一种方式 | — | Windows / macOS |

## Linux 安装

以下命令在 Linux 终端中执行。使用 Python 安装时，应先准备符合要求的解释器；使用二进制时，应先确认机器架构。

### 脚本安装 {#script-installation}

> 适用环境：Linux

[官方下载页](https://ruyisdk.org/downloads)提供安装脚本，自动识别平台并下载稳定渠道中的预编译程序。

本节适用于 Linux x86\_64、aarch64、riscv64。下列调用需要 `curl`，安装过程需要能够访问发布信息和下载地址。

默认安装到 `/usr/local/bin/ruyi`：

```bash
curl --proto '=https' --tlsv1.2 -fsSL https://ruyisdk.org/install.sh | sh
```

如果希望安装到当前用户目录，改用：

```bash
curl --proto '=https' --tlsv1.2 -fsSL https://ruyisdk.org/install.sh | sh -s -- --install-dir "$HOME/.local/bin"
```

两条命令选择一条。按提示确认许可与隐私条款、安装位置，以及是否安装可选的升级辅助脚本。目标目录需要额外权限时，脚本会请求使用 `sudo`。

自定义目录必须是绝对路径。脚本不会自动修改 shell 的 PATH 配置。安装到用户目录后，如果找不到命令，可在当前终端执行：

```bash
export PATH="$HOME/.local/bin:$PATH"
```

需要长期生效时，将相应 PATH 设置加入所用 shell 的启动配置。

目标位置已有文件时，普通安装流程会询问是否覆盖。**重复运行安装命令不保证只安装更高版本**；不要用它覆盖由 pipx、Python 环境或系统包管理器维护的安装。

### 手动安装预编译二进制 {#binary-installation}

> 适用环境：Linux

先确认当前机器架构：

```bash
uname -m
```

打开 [Ruyi 发布页](https://github.com/ruyisdk/ruyi/releases/tag/0.53.0)，按结果下载对应文件：

| 机器架构 | 下载文件 |
| --- | --- |
| x86_64 | `ruyi-<version>.amd64` |
| aarch64／arm64 | `ruyi-<version>.arm64` |
| riscv64 | `ruyi-<version>.riscv64` |

`<version>`为占位符，实际操作时请替换为具体版本，建议您选择最新版本的可执行文件。

进入下载文件所在目录。以下以 x86\_64 文件为例；其他架构替换第一行中的文件名：

```bash
mv ruyi-<latest-version>.<arch> ruyi
# eg：mv ruyi-版本号.amd64 ruyi

chmod +x ./ruyi
mkdir -p "$HOME/.local/bin"
cp ./ruyi "$HOME/.local/bin/ruyi"
export PATH="$HOME/.local/bin:$PATH"
```

程序需要命名为 `ruyi`，并具有执行权限。如果目标位置已有 Ruyi，请先确认其安装来源，再决定是否替换。

验证刚安装的文件：

```bash
"$HOME/.local/bin/ruyi" --version
```

确认显示版本号后，将 PATH 设置加入所用 shell 的启动配置，使新终端也能直接使用 `ruyi`。

### 通过 Python 包管理工具安装 {#python-installation}

> 适用环境：Linux，已有 Python 3\.11 或更高版本

PyPI 包名为 [`ruyi`](https://pypi.org/project/ruyi/0.53.0/)。安装和运行需要 **Python 3\.11 或更高版本**。

先检查准备使用的解释器：

```bash
python3 --version
```

以下两种方式选择一种。RISC\-V 用户优先选择预编译二进制，避免在依赖缺少对应预编译包时额外准备编译环境。

#### 使用 pipx

适合希望直接使用 `ruyi` 命令，并让 pipx 单独管理其 Python 环境的用户。需要先按照 [pipx 安装说明](https://pipx.pypa.io/latest/how-to/install-pipx.html)准备好 pipx。

确认 `python3` 满足版本要求后执行：

```bash
pipx install --python python3 'ruyi==版本号'
```

pipx 默认按当前用户安装，命令通常位于 `~/.local/bin`。如果该目录尚未加入 PATH：

```bash
pipx ensurepath
```

重新打开终端，再执行：

```bash
ruyi --version
```

#### 在指定的 Python 虚拟环境中安装

适合已经使用 Python 虚拟环境，或希望明确控制 Ruyi 安装位置的用户。解释器需要提供可用的 `venv` 和 `pip`。

以下创建专用于 Ruyi 本体的 Python 环境：

```bash
python3 -m venv "$HOME/.venvs/ruyi"
"$HOME/.venvs/ruyi/bin/python" -m pip install 'ruyi==0.53.0'
"$HOME/.venvs/ruyi/bin/ruyi" --version
```

可以一直使用完整路径调用，也可以在 Bash／Zsh 中激活该环境：

```bash
source "$HOME/.venvs/ruyi/bin/activate"
ruyi --version
```

这里的 Python 虚拟环境用于安装 Ruyi 本体。后续组合工具链、sysroot 和模拟器时创建的 Ruyi 虚拟环境，见[配置开发环境](./dev-env.md)。

通过 pipx 安装的 Ruyi 由 pipx 更新和卸载；通过 pip 安装的 Ruyi，应在原 Python 环境中维护。具体操作见[配置与维护](./maintenance.md)。

### 通过系统包管理器安装 {#system-package-installation}

该方式受限于发行版对 ruyi 的支持情况，对于已经支持 Ruyi 的发行版可选择该方式。目前 Linux 系统对 Ruyi 支持情况如下表：

| 系统 | 支持情况 | 版本范围 | 如何安装使用 |
| --- | --- | --- | --- |
| Debian 13 (trixie) 稳定版 | 官方支持（需启用 backports） | 0.52.0 | sudo apt install -t trixie-backports ruyi |
| Debian testing (forky) / unstable (sid) | 官方支持 | 0.52.0 | sudo apt install ruyi |
| Debian 12 (bookworm) 及更早 | 不支持 | — | 参考本文其它3种安装方式 |
| Ubuntu 最新开发版 | 官方支持（universe） | 0.51.0 起 | sudo apt install ruyi |
| Ubuntu 各 LTS（如 26.04）及旧版 | 不支持 | — | 参考本文其它3种安装方式 |
| Fedora 42 及以上 | 官方支持 | 0.52.0 | sudo dnf install ruyi |
| openRuyi（如意 OS） | 官方支持 | 随发行版仓库发布 | sudo dnf install ruyi |
| Arch Linux | 社区仓库（AUR、archlinuxcn） | 0.50.0 | yay -S ruyi，或启用 archlinuxcn 源后 sudo pacman -S ruyi |
| Gentoo Linux | RuyiSDK 提供 overlay | 随 ruyisdk-overlay 更新 | 添加 ruyisdk-overlay 后 sudo emerge --ask dev-util/ruyi |

**注意：发行版渠道可能晚于上游发布新版本。安装前确认仓库提供的版本，安装后建议执行版本验证**。

#### Arch Linux

已经配置 AUR 辅助工具 `yay` 的用户，可使用普通用户执行：

```bash
yay -S ruyi
```

已经配置 [Arch Linux CN 仓库及签名密钥](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/)的用户，可执行：

```bash
sudo pacman -Syu ruyi
```

这条命令同时进行系统更新。不要只刷新软件包数据库后单独安装，造成部分升级状态。

AUR 和 Arch Linux CN 属于社区渠道。本次核对时均提供 0\.52\.0 系列包；可用架构应以渠道实际提供的包及依赖为准。

#### Gentoo Linux

RuyiSDK 项目提供 [ruyisdk\-overlay](https://github.com/ruyisdk/ruyisdk-overlay)。准备仓库管理工具并添加 overlay：

```bash
sudo emerge --ask app-eselect/eselect-repository dev-vcs/git
sudo eselect repository add ruyisdk git https://github.com/ruyisdk/ruyisdk-overlay.git
sudo emaint sync -r ruyisdk
sudo emerge --ask dev-util/ruyi
```

如果因测试关键字被阻止，可让 Portage 生成所需配置建议：

```bash
sudo emerge --ask --autounmask=y --autounmask-write dev-util/ruyi
sudo dispatch-conf
```

检查并接受与本次安装有关的改动，再重新执行安装命令。不要直接接受所有无关配置变更。

#### Debian

[Debian 包跟踪页](https://tracker.debian.org/pkg/ruyi)列出了 testing、unstable 和 stable\-backports 中的包。

已经使用 testing 或 unstable 仓库的用户，可执行：

```bash
sudo apt update
sudo apt install ruyi
```

稳定版用户应按对应 backports 仓库的说明选择软件包，不要仅为安装 Ruyi 把系统软件源切换到 testing。

上述系统软件包由相应渠道维护，更新和卸载继续使用原系统包管理器。

## Windows：通过 WSL2 使用 Ruyi {#windows-wsl2}

### 准备 WSL2 环境

本节通过 WSL2 中的 Linux 环境使用 Ruyi。

微软的简化安装流程要求 Windows 10 版本 2004、内部版本 19041 或更高版本，或 Windows 11。其他系统版本应先参考 [微软 WSL 安装说明](https://learn.microsoft.com/en-us/windows/wsl/install)。

以管理员身份打开 PowerShell，执行：

```powershell
wsl --install
```

按提示完成安装并重启。默认安装 Ubuntu；首次打开 Linux 发行版时，完成用户名和密码设置。

在 PowerShell 中检查：

```powershell
wsl --list --verbose
```

确认准备使用的发行版对应 `VERSION` 为 `2`。如果已有发行版仍使用 WSL1，可按实际发行版名称转换，例如：

```powershell
wsl --set-version Ubuntu 2
```

### 在 WSL2 中安装 Ruyi

打开已准备好的 Linux 发行版终端，后续 Linux 命令都在该终端中执行。

先确认 Linux 环境中的架构：

```bash
uname -m
```

然后复用本页的一种 Linux 安装方式：

- 需要明确安装 0\.53\.0：使用“手动安装预编译二进制”。

- 已有 Python 3\.11 或更高版本：使用“通过 Python 包管理工具安装”，指定 `ruyi==0.53.0`。

PATH 设置在 Linux 环境中完成。使用 Python 虚拟环境时，也在 Linux 终端中激活。

安装完成后，在同一个 Linux 终端执行：

```bash
ruyi --version
```

### WSL2 使用范围说明

本节建立的是 WSL2 Linux 环境中的 Ruyi 使用入口。

USB 访问、块设备写入、`dd`、`fastboot` 和设备烧录还受设备连接方式、权限及 WSL2 环境限制。设备相关要求见[为设备安装系统](./flash-os.md)。

## macOS

⏳ 后续补充：macOS 环境准备与 Ruyi 安装说明。

## 验证安装结果

在准备实际使用 Ruyi 的终端中执行：

```bash
ruyi --version
```

正常情况下，命令会显示 Ruyi 版本、运行宿主及版权信息。按照本页指定版本方式安装时，应能看到版本号。

如果显示其他版本，请先确认安装渠道和当前调用的程序。

检查当前 shell 找到的是哪个程序：

```bash
command -v ruyi
```

结果应与所选安装方式一致，例如用户目录、pipx 的命令目录或已经激活的 Python 环境。

随后可以查看帮助：

```bash
ruyi -h
```

应能看到命令用法和可用子命令。Ruyi 0\.53\.0 的版本查询不会触发首次遥测交互，但帮助查询可能进入首次运行流程；请先按“遥测与隐私说明”确认自己的选择。

如果无法执行，先检查：

- 安装目录是否位于当前终端的 PATH 中；

- 手动下载的文件是否具有执行权限，并已命名为 `ruyi`；

- 下载架构是否与运行机器一致；

- 是否打开了正确的 Linux／WSL2 终端，或激活了对应 Python 环境。

## 首次使用前配置 {#first-use-configuration}

安装完成后，请检查软件源和遥测设置，并按需启用命令补全。

### 检查并按需调整软件源 {#repository-settings}

Ruyi 使用软件包索引查找可用资源、版本及下载信息。默认的软件包索引仓库为 `https://github.com/ruyisdk/packages-index.git`；安装脚本或系统配置也可能指定其他来源，请以实际配置为准。

先查看当前使用的软件源：

```bash
ruyi repo list
```

输出中的 `(default)` 表示默认软件源，`*` 表示该软件源已启用，行末显示来源地址。

如果当前来源可以正常访问，无需修改，可直接更新索引。

如果访问 GitHub 不稳定，可以将默认软件源切换为 ISCAS 镜像：

```bash
ruyi config set repo.remote https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git
```

设置后，检查保存的地址：

```bash
ruyi config get repo.remote
```

输出的地址应为 `https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git`。也可以再次执行 `ruyi repo list`，确认默认软件源的来源地址已更新。

如需切回 GitHub，执行：

```bash
ruyi config set repo.remote https://github.com/ruyisdk/packages-index.git
```

同样使用 `ruyi config get repo.remote` 检查修改结果。

确认软件源后，下载或更新软件包索引：

```bash
ruyi update
```

**修改地址不会自动同步索引**。请等待 `ruyi update` 正常完成，再进入[管理软件包](./manage.md)查看新闻、查找和安装资源。如果更新过程中出现连接失败、下载中断或索引读取错误，请参见问题排查与求助（链接待补充）中的索引访问问题。

说明：

- `ruyi config get repo.remote` 查询显式配置的地址。尚未设置该项时，可能没有输出；此时请通过 `ruyi repo list` 查看实际来源。

- `repo.remote` 只调整默认软件源。多软件源管理请参见[配置与维护](./maintenance.md)。

- 索引来源与软件包文件的下载来源不同，切换索引镜像不代表所有软件包都从该镜像下载。

### 确认遥测设置 {#telemetry-settings}

先查看当前遥测模式：

```bash
ruyi telemetry status
```

根据需要选择一种模式。当前模式已经符合需求时，无需修改；需要修改时，只执行对应的一条命令。

| 模式 | 作用 | 设置命令 |
| --- | --- | --- |
| local | 在本地记录使用数据，可按需手动上传。 | `ruyi telemetry local` |
| on | 记录使用数据，并按周期上传。 | `ruyi telemetry consent` |
| off | 停止后续常规遥测记录和上传，但不会自动删除已有数据。 | `ruyi telemetry optout` |

设置完成后，再次检查：

```bash
ruyi telemetry status
```

输出应为所选的 `local`、`on` 或 `off`。如需查看更详细的状态说明，执行：

```bash
ruyi telemetry status --verbose
```

在 `local` 或 `on` 模式下，如果希望立即上传已收集的数据，可以主动执行：

```bash
ruyi telemetry upload
```

手动上传不会将 `local` 模式改为 `on` 模式。`on` 模式的常规上传按周期触发，并非每次执行命令都立即上传。

> 首次交互运行可能出现遥测选择提示，并涉及一次安装上报；
>
> 如果要求从首次运行起禁用遥测，应在首次执行 Ruyi 前设置环境变量 `RUYI_TELEMETRY_OPTOUT=1`。该变量生效期间，如需改用 `local` 或 `on`，应先移除对应环境变量设置。

首次运行上报、历史上传状态的影响、环境变量的配置方法及已有数据的清理方式，请参见[配置与维护](./maintenance.md)。

可通过 `ruyi telemetry status` 确认当前模式

### 启用命令补全（可选）

命令补全可以在输入 Ruyi 命令时，通过 Tab 键补全子命令、选项及支持补全的参数。请根据正在使用的 Shell 选择对应方式。

使用 Bash 时，在当前终端执行：

```bash
eval "$(ruyi --output-completion-script=bash)"
```

使用已初始化补全系统的 Zsh 时，在当前终端执行：

```bash
eval "$(ruyi --output-completion-script=zsh)"
```

如果 Zsh 尚未初始化补全系统，先执行：

```bash
autoload -Uz compinit
compinit
```

再加载 Ruyi 补全脚本。

配置后，在终端输入 `ruyi`，按 Tab 键检查是否出现补全；部分 Shell 需要连续按两次 Tab 才会列出候选项。

上述设置仅对当前终端会话生效。如果希望新终端也能使用，可将对应的加载命令加入 `~/.bashrc` 或 `~/.zshrc`。Zsh 的加载命令应放在补全系统初始化之后；若安装方式已经配置了补全，则无需重复添加。

## 安装或首次使用遇到问题时

| 遇到的问题 | 首先检查 |
| --- | --- |
| 安装命令无法执行 | 所需下载工具是否可用，网络是否能访问安装地址，目标目录是否可写 |
| 找不到 ruyi | 当前 PATH、安装位置，以及 Python 环境是否已激活 |
| Python 版本不满足要求 | 实际用于安装的解释器是否为 Python 3.11 或更高版本 |
| 下载的程序无法运行 | 文件架构、执行权限及文件名是否正确 |
| WSL2 中安装或调用失败 | 发行版是否使用 WSL2，是否在 Linux 终端执行 Linux 命令 |
| 索引来源访问失败 | ruyi repo list 显示的实际来源及网络连通性 |
| 首次运行出现遥测提示 | 当前遥测选择和环境变量设置 |

进一步处理见问题排查与求助（链接待补充）的对应症状入口。索引访问失败时，不要默认先清理缓存，应先区分网络、地址和本地状态问题。

## 下一步

完成安装验证和首次检查后，根据目标继续：

- [**管理软件包**](./manage.md)：查询、安装和卸载工具链、模拟器等资源，或获取源码包。

- [**配置开发环境**](./dev-env.md)：明确目标平台和资源需求，准备所需软件包，再创建并使用 Ruyi 虚拟环境。

- [**为设备安装系统**](./flash-os.md)：检查支持的设备、烧录方式及操作环境，进入对应流程。

创建 Ruyi 虚拟环境之前，需要先准备相应软件包。只获取源码或为设备安装系统时，无需完整执行开发环境配置流程。
