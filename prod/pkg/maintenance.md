---
title: 配置与维护
sidebar_position: 6
---

<!-- markdownlint-configure-file {"MD025": {"front_matter_title": ""}} -->

# 配置与维护

本页介绍安装后的软件源检查、遥测选择、本体更新与本地数据维护。完整参数说明见[Ruyi命令详解](./commands.md)。

## 首次使用前的配置检查

首次使用前，应确认软件源符合需要，并选择适合自己的遥测设置。

`ruyi version`、`ruyi --version` 不触发首次运行遥测流程。其他检查命令可能触发：首次运行时，标准输入和标准输出均连接终端、且发行方未禁用首次提示，才会出现交互提示。非交互调用不弹出提示，但通常仍会初始化状态。

**首次交互流程可能发送遥测报告**。如果希望在开始配置检查前禁用遥测收集和上传，请先执行：

```bash
RUYI_TELEMETRY_OPTOUT=1 ruyi telemetry optout
```

该命令为本次调用禁用遥测，同时将后续模式保存为 `off`。这是可选操作，同意遥测不是使用 Ruyi 的必要条件。

### 查看当前软件源

```bash
ruyi repo list
```

检查 `ruyisdk` 行的地址及启用状态；行首 `*` 表示已启用。内置默认地址是 GitHub 官方索引，但安装脚本或已有配置可能已选择 ISCAS 镜像。

当前地址符合需要且能够访问时，无需修改；需要切换时，按下一节操作。

### 检查并选择遥测模式

```bash
ruyi telemetry status
```

需要详细说明时：

```bash
ruyi telemetry status --verbose
```

根据自己的选择执行其中一项：

| 选择 | 命令 |
| --- | --- |
| 本地记录使用数据 | `ruyi telemetry local` |
| 关闭后续使用数据收集 | `ruyi telemetry optout` |
| 同意记录并上传 | `ruyi telemetry consent` |

如果已通过 `export` 启用 `RUYI_TELEMETRY_OPTOUT`，不要直接切换到 `local` 或 `on`，应先按“查询和修改”中的说明取消环境变量。

修改后再次查询状态。`local` 和 `off` 存在首次运行等边界，具体见“遥测模式与设置”。

### 刷新索引并开始使用

```bash
ruyi update
```

确认没有同步错误后，继续[管理软件包](./manage.md)。如果失败，先检查软件源启用状态、地址及网络。

## 软件源配置与管理

### 查看默认源与配置覆盖值

```bash
ruyi repo list
ruyi config get repo.remote
```

两者用途不同：

- `repo list` 显示已配置的软件源、有效地址、启用状态和优先级。

- `config get repo.remote` 查询默认源的远程地址覆盖值。没有覆盖值时可能没有输出并返回非零状态，**不表示没有软件源**。

`repo.remote` 只控制默认源 `ruyisdk`；附加源通过 `ruyi repo` 管理。

### 在 GitHub 与 ISCAS 之间切换

| 来源 | 软件包索引地址 |
| --- | --- |
| GitHub 官方仓库，内置默认值 | [`https://github.com/ruyisdk/packages-index.git`](https://github.com/ruyisdk/packages-index.git) |
| ISCAS 镜像 | [`https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git`](https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git) |

切换到 ISCAS：

```bash
ruyi config set repo.remote https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git
```

切换到 GitHub：

```bash
ruyi config set repo.remote https://github.com/ruyisdk/packages-index.git
```

以上二选一。修改后，检查地址并同步默认源：

```bash
ruyi repo list
ruyi update --repo ruyisdk
```

列表地址正确说明配置已生效；同步成功才说明本次能够从该地址更新索引。如果默认源已停用，先确认确实需要启用，再执行：

```bash
ruyi repo enable ruyisdk
```

这里只切换索引仓库，不保证所有软件包下载地址都会随之切换。

**自定义目录注意**：如果设置过 `repo.local`，修改远程地址后可能出现本地 Git 仓库地址不匹配的错误。应先核对错误中的目录、预期地址和实际地址，保留本地修改，再处理该仓库；不要为切换镜像直接删除自定义目录。

### 恢复配置

删除自己的远程地址覆盖值：

```bash
ruyi config unset repo.remote
ruyi repo list
```

删除后可能采用系统配置或内置默认值。如果目的是明确切回 GitHub，应使用上一节的 GitHub 设置命令，再刷新索引。

`config set` 和 `unset` 修改用户配置，不修改系统配置。一般 Linux 环境中，用户配置位于 `~/.config/ruyi/config.toml`；设置了 `XDG_CONFIG_HOME` 时，位于其下的 `ruyi/config.toml`。

### 管理多个软件源

仅在需要独立的软件包来源时添加附加源。GitHub 与 ISCAS 是同一官方索引的不同入口，通常修改默认源地址即可，无需同时添加两份。

例如，已有本地 Ruyi 索引目录时：

```bash
ruyi repo add local-index --local "$HOME/src/packages-index"
ruyi repo list
```

`--local` 要求绝对路径；这里的 $HOME 由 shell 展开。使用前应确认目录存在且包含有效索引；

随后可按需调整：

| 操作 | 命令 |
| --- | --- |
| 停用 | `ruyi repo disable local-index` |
| 重新启用 | `ruyi repo enable local-index` |
| 设置优先级 | `ruyi repo set-priority local-index 10` |
| 移除配置，保留目录 | `ruyi repo remove local-index` |

优先级越大越优先，可能改变同名软件包的来源。默认源及系统提供的源不能通过 `remove` 删除，可以停用。

`repo remove --purge` 不是普通配置清理。它不询问确认，并会递归删除该源对应的本地目录；使用 `--local` 指定的自定义目录也在删除范围内，即使目录位于 Ruyi 缓存之外。执行前必须核对路径并备份。只想取消软件源配置时，不加 `--purge`。

## 遥测模式与设置

### 三种模式

内置默认模式为 `local`，但系统配置、安装方式和环境变量可能改变结果，应以查询为准。

| 模式 | 使用数据收集与本地保存 | 上传行为 |
| --- | --- | --- |
| local | 记录并保存在本地 | 支持显式上传；0.53.0 另有下述首次运行和历史状态例外 |
| off | 后续以此模式启动时不记录使用事件；仍可保留首次运行标记和以前的数据 | 已完成首次初始化后的普通调用不上传，包括显式 upload；首次运行及切换当次另见下文 |
| on | 记录并保存在本地 | 运行 Ruyi 时按周期检查并上传，也支持显式上传 |

`on` 的常规上传以每周为周期；如果超过一周没有上传，后续运行也可能补传。

记录内容涉及 Ruyi 版本、系统与架构信息、命令调用类别等。更多说明见 [RuyiSDK 隐私政策](https://ruyisdk.org/docs/legal/privacyPolicy/)。

### 查询和修改

```bash
ruyi telemetry status
ruyi telemetry status --verbose
```

也可以查询配置项：

```bash
ruyi config get telemetry.mode
```

该配置项返回当前生效模式，包括默认值和环境变量覆盖；与 `repo.remote` 的覆盖值查询不同。

修改时优先使用专用命令：

| 目标 | 命令 |
| --- | --- |
| 本地收集 | `ruyi telemetry local` |
| 关闭收集 | `ruyi telemetry optout` |
| 同意上传 | `ruyi telemetry consent` |

`optout` 的别名为 `off`，`consent` 的别名为 `on`。选择后重新运行 `status` 确认。

`telemetry.mode` 可以通过 `config set` 修改，但专用命令还会处理上传同意记录，因此本页使用专用命令。

**环境变量限制**：`RUYI_TELEMETRY_OPTOUT=1` 生效时，不要直接执行 `consent` 或 `local`。0\.53\.0 可能在用户配置已改写后才报错；环境变量仍会使当前生效模式显示为 `off`，取消后则可能采用已经改写的配置。

以后主动恢复收集时，应先取消环境变量，再选择模式，最后检查状态。例如，恢复本地收集：

```bash
unset RUYI_TELEMETRY_OPTOUT
ruyi telemetry local
ruyi telemetry status
```

如果选择恢复上传，将其中的 `local` 换为 `consent`。若曾在 shell 启动配置中设置该环境变量，也应移除相应设置，避免新终端再次启用。

### 上传边界

使用Ruyi时，需要了解：

- 首次交互流程可能安排上传。在提示中选择 `local`，或从默认模式切换为 `off`，不保证当次运行不发送数据；也不能保证报告仅包含版本号。

- `local` 不是此版本中严格的禁止上传开关。除显式上传外，已有历史上传记录且至少一周未上传时，也可能在后续运行触发上传。

- 切换模式主要影响后续调用，刚执行的退出命令没有撤销当次已经发生的收集。

如果希望明确禁止当前终端后续 Ruyi 调用的遥测收集和上传，可设置：

```bash
export RUYI_TELEMETRY_OPTOUT=1
```

该环境变量优先于配置，并跳过首次遥测询问和上传。它只作用于当前终端及其子进程；若需长期使用，应在所用 shell 的启动配置中保留这项设置。环境变量本身不修改已保存的模式；恢复其他模式时，按上一节的顺序操作。

### 显式上传与删除本地记录

只有确认愿意发送数据时，才执行：

```bash
ruyi telemetry upload
```

在 `local` 和 `on` 下，该命令可请求立即上传，不等待常规周期；它不是状态检查。已经完成首次初始化、以 `off` 启动的普通调用不会上传，也不会因此改为 `on`。首次运行标记缺失时，仍须考虑前述首次交互例外。

需要删除本地遥测记录时：

```bash
ruyi self clean --telemetry
```

清理不关闭遥测配置，也不能撤回已上传数据。**`--telemetry` 和 `--all` 都会删除首次运行标记。仅保存 `telemetry.mode=off`，不能保证清理后不再触发首次上传**。

清理后，下一次满足交互条件的普通调用可能重新出现遥测提示。即使原模式为 `off`，当次也可能发送包含版本号和一次性报告标识等字段的最小报告；两个遥测问题都直接按回车，会将配置改为 `local`。非交互调用不弹出这些提示。

如果此前已成功通过 `optout` 将用户配置保存为 `off`，且之后未改写该配置，可连续执行以下命令，并确保中间没有其他 Ruyi 调用：

```bash
ruyi self clean --telemetry
RUYI_TELEMETRY_OPTOUT=1 ruyi telemetry status
```

第二条命令在禁用遥测的情况下重新建立首次运行标记，使后续普通调用继续采用原有的 `off` 配置。**这两条命令不会自动把其他模式保存为 `off`**；尚未退出的用户，应先执行首次配置检查中的安全退出命令。以后再次清理首次运行标记时，仍需保护清理后的下一次调用，或持续保留退出环境变量。

## Ruyi 本体更新与卸载

**`ruyi update` 更新的是软件包索引，不是 Ruyi 本体；0\.53\.0 没有 `ruyi self update`**。

先查看当前调用的位置和版本，避免维护另一份安装：

```bash
command -v ruyi
ruyi version
```

### 官方脚本或独立二进制

如果安装官方脚本时同时安装了 `ruyi-upgrade`，可使用：

```bash
ruyi-upgrade
```

它是独立辅助程序，更新其所在目录中的 `ruyi`。使用前确认它对应当前安装；不要把它当作 pip、pipx 或系统包管理器安装的更新方法。

没有该辅助程序时，按[安装 Ruyi](./install.md#binary-installation)的独立二进制方式获取新版本，替换原位置的二进制文件。更新后重新运行 `ruyi version`。

对允许当前用户删除、且未被外部包管理器管理的独立二进制，可执行：

```bash
ruyi self uninstall
```

默认询问确认并保留包数据和缓存。仅在确实需要连同已安装包、状态和缓存一起删除，并已确认有权删除本体时，才使用：

```bash
ruyi self uninstall --purge
```

`--purge`

1\.仍保留用户配置。卸载本体会使依赖它的开发环境无法正常使用。

2\.会先删除已安装包、状态和缓存，最后删除 Ruyi 二进制。如果最后一步因权限不足失败，可能出现数据已经删除、本体却没有卸载成功的结果，已删除的数据不会自动恢复。

官方脚本默认安装到 `/usr/local/bin`，普通用户可能无权删除其中的文件。卸载前应确认安装方式、实际路径和删除权限。需要清理个人数据时，由原用户按需清理；本体由相应安装方式或具有权限的管理员维护，不要通过提权运行 `ruyi self uninstall --purge` 代替。

通过脚本额外安装的 `ruyi-upgrade` 不会随本体自动删除，需要时单独处理。

### PyPI / pip

使用当初安装 Ruyi 的同一个 Python 环境：

| 操作 | 命令 |
| --- | --- |
| 更新 | `python -m pip install --upgrade ruyi` |
| 卸载 | `python -m pip uninstall ruyi` |

如果安装在 Python 虚拟环境中，先激活原环境，或使用该环境的 Python 绝对路径。不要将这里的 Python 环境与 Ruyi 创建的交叉编译环境混淆。

### pipx

| 操作 | 命令 |
| --- | --- |
| 查看 pipx 管理的安装 | `pipx list` |
| 更新 | `pipx upgrade ruyi` |
| 卸载 | `pipx uninstall ruyi` |

### 系统包管理器

通过系统包管理器安装时，继续使用对应工具，不手动覆盖或删除其管理的文件。

| 安装来源 | 更新方法 | 卸载命令 |
| --- | --- | --- |
| Arch Linux CN（archlinuxcn）源中的 ruyi | 随 sudo pacman -Syu 完整系统更新；该操作同时更新其他系统包 | `sudo pacman -R ruyi` |
| Arch AUR | 按原 AUR 工具的更新流程更新 ruyi | `sudo pacman -R ruyi` |
| Gentoo dev-util/ruyi | 同步对应 overlay 后执行 sudo emerge --ask --update dev-util/ruyi | `sudo emerge --ask --depclean dev-util/ruyi` |

Gentoo 使用文档中的 `ruyisdk` overlay 时，同步命令为：

```bash
sudo emaint sync -r ruyisdk
```

执行系统更新或卸载前，检查包管理器列出的操作范围和依赖提示。

卸载本体不应被当作清除个人 Ruyi 数据的方法。需要清理数据时，在本体卸载前按下一节选择范围。

## 本地数据与缓存维护

### 区分数据类别

以下为一般 Linux 环境中未自定义 XDG 路径时的位置；自定义索引目录可能位于这些路径之外。

| 类别 | 常见位置或范围 | 维护时注意 |
| --- | --- | --- |
| 用户配置 | `~/.config/ruyi/config.toml` | 保存软件源和遥测等偏好；修改前可备份 |
| 索引缓存 | ~/.cache/ruyi/repos/，兼容旧的 packages-index/ 布局 | 可重新同步；保留本地修改 |
| 下载缓存 | `~/.cache/ruyi/distfiles/` | 重新使用可能需要下载；部分资源仍引用这里的文件 |
| 程序展开缓存 | `~/.cache/ruyi/progcache/` | 用于独立程序运行，不是软件包下载缓存 |
| 已安装软件包 | ~/.local/share/ruyi/ 下的资源 | 开发环境可能依赖它们 |
| 状态数据 | `~/.local/state/ruyi/` | 包含安装记录、新闻已读状态等 |
| 遥测记录 | 状态目录下的 telemetry/ | 与遥测配置分开保存，也包含首次运行标记 |

设置了 `XDG_CONFIG_HOME`、`XDG_CACHE_HOME`、`XDG_DATA_HOME` 或 `XDG_STATE_HOME` 时，相应目录位于这些路径下的 `ruyi/`。

### 按目的选择清理范围

`self clean` 不询问确认。执行前停止相关任务，并确认需要删除什么。以下命令分别对应不同目的，不应依次全部执行。

| 目的 | 命令 | 影响 |
| --- | --- | --- |
| 重新获取默认源索引 | `ruyi self clean --repo` | 仅清理位于受管缓存内的默认源索引，不遍历全部附加源或删除外部索引 |
| 释放下载缓存 | `ruyi self clean --distfiles` | 后续可能重新下载；仍引用下载文件的资源可能受影响 |
| 清理程序展开缓存 | `ruyi self clean --progcache` | 不清理包下载缓存、已安装包或配置 |
| 重置新闻已读状态 | `ruyi self clean --news-read-status` | 新闻重新呈未读，不删除新闻内容 |
| 删除本地遥测记录 | `ruyi self clean --telemetry` | 不关闭遥测；删除首次运行标记，后续处理见“显式上传与删除本地记录” |

清理默认索引后，如果该源仍启用，可重新获取：

```bash
ruyi update --repo ruyisdk
```

只想删除某个软件包时，使用[管理软件包](./manage.md)中的卸载流程。

### 删除已安装数据或整体重置

以下操作影响范围较大，**不作为普通下载失败、同步失败的默认处理办法**：

| 操作 | 命令 | 影响 |
| --- | --- | --- |
| 删除全部已安装资源及安装记录 | `ruyi self clean --installed-pkgs` | 依赖这些资源的开发环境可能失效；保留下载缓存和索引 |
| 删除数据、状态及缓存 | `ruyi self clean --all` | 同时删除已安装资源及上述状态、缓存，包括首次运行标记；保留用户配置和 Ruyi 本体 |

`--all` 清理后的遥测处理与 `--telemetry` 相同，见“显式上传与删除本地记录”。

执行前应确认相关资源不再需要，并保留无法重新获取的数据。

## 相关任务与问题排查入口

| 需要解决的问题 | 参考页面 |
| --- | --- |
| 安装方式、命令找不到、安装位置 | [安装 Ruyi](./install.md) |
| 软件包选择、安装、更新和卸载 | [管理软件包](./manage.md) |
| 查询命令的完整参数 | [Ruyi命令详解](./commands.md) |
| 同步失败、权限错误及反馈问题 | 问题排查与求助（链接待补充） |
