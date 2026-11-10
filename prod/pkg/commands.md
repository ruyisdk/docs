---
title: Ruyi 命令详解
sidebar_position: 7
---

<!-- markdownlint-configure-file {"MD025": {"front_matter_title": ""}} -->

# Ruyi 命令详解

## 如何使用本页

本页按用途分组介绍命令、选项和实际写法。完整流程见[管理软件包](./manage.md)，[配置开发环境](./dev-env.md)，[为设备安装系统](./flash-os.md)和[配置与维护](./maintenance.md)。

### 帮助、版本与全局选项

| 用途 | 命令示例 | 说明 |
| --- | --- | --- |
| 查看全部入口 | `ruyi -h` | -h 可写为 --help |
| 查看具体命令帮助 | `ruyi install -h` | 所有命令和命令组均支持帮助选项 |
| 查看二级命令帮助 | `ruyi list profiles -h` | 在完整命令后添加帮助选项 |
| 查看 Ruyi 版本 | `ruyi --version` | 等价写法为 ruyi -V、ruyi version |
| 输出便于程序处理的结果 | `ruyi --porcelain list --name-contains gnu-upstream` | 全局选项放在子命令前；仅部分命令支持此输出格式 |

本页与实际安装版本存在差异时，通过该版本的帮助信息确认可用参数。

### 示例约定

- 基本语法中的 `<名称>` 需要替换，`[选项]` 表示可选部分，`...` 表示可继续提供同类参数；这些标记不原样输入。

- 示例是独立的用法参考，不是需要依次执行的清单。删除、清理、卸载和模式切换尤其应按需选用。

- 包名和版本需存在于当前启用软件源的本地索引中，并支持所用主机；目录需按实际情况准备或替换。

- 命令参数的等价长短写法在表格中合并列出，通常选用其中一种即可。

## 软件包与索引

### `ruyi update`

刷新本地索引，获取软件包和新闻信息；不会自动安装新版软件包或升级 Ruyi 本体。

```text
ruyi update [--repo <repo-id>]
```

| 用途 | 命令示例 |
| --- | --- |
| 同步全部已启用的软件源 | `ruyi update` |
| 仅同步指定源 | `ruyi update --repo ruyisdk` |

`--repo` 接受软件源 ID，不是仓库网址；指定源必须已启用。

### `ruyi news`

查看索引中的新闻并记录已读状态。

| 用途 | 命令示例 | 说明 |
| --- | --- | --- |
| 查看帮助和未读提示 | `ruyi news` | 不指定子命令 |
| 列出全部新闻 | `ruyi news list` | 默认显示全部 |
| 仅列出未读新闻 | `ruyi news list --new` | --new 无需值 |
| 按编号阅读 | `ruyi news read 1` | 新闻编号由完整新闻列表统一分配，--new只筛选未读新闻，不会重新编号。索引更新后编号可能变化，长期引用建议使用新闻 ID。 |
| 按 ID 阅读 | `ruyi news read 2026-02-10-ruyi-0.46` | ID 需存在于本地索引 |
| 阅读全部未读新闻 | `ruyi news read` | 省略目标 |
| 仅标记已读 | `ruyi news read --quiet 2026-02-10-ruyi-0.46` | --quiet/-q 在普通输出模式下不显示正文 |

`read` 可以接收多个编号或 ID，读取后会标记已读。`read --quiet` 不带目标时，会将全部未读新闻标记为已读。新闻内容随 `ruyi update` 更新，已读状态维护见[配置与维护](./maintenance.md)。

### `ruyi list`

查询本地索引中的软件包、版本和详情。

```text
ruyi list <filter-options> [--verbose]
```

#### 包筛选与详情选项

| 选项 | 用途及命令示例 |
| --- | --- |
| `--all` | 浏览全部包：`ruyi list --all` |
| `--category-is <category>` | 完全匹配类别：`ruyi list --category-is toolchain` |
| `--category-contains <substring>` | 匹配类别名称片段：`ruyi list --category-contains tool` |
| `--name-contains <substring>` | 匹配包名片段：`ruyi list --name-contains gnu-upstream` |
| `--is-installed <value>` | 按安装状态筛选：`ruyi list --name-contains gnu-upstream --is-installed y` |
| `--verbose / -v` | 显示各版本详情：`ruyi list --name-contains gnu-upstream --verbose` |

查询至少需要一个筛选条件，仅运行 `ruyi list` 会提示缺少条件。名称和类别匹配**区分大小写**；多个条件必须同时满足，`--all` 不会取消其他条件。

组合筛选：

```bash
ruyi list --category-is toolchain --name-contains gnu-upstream
```

`--is-installed` 接受 `y/true/1` 或 `n/false/0`，判断同一类别、同一包名下是否有任一版本已安装，不限定当前主机架构。

查找没有任何版本安装的工具链包：

```bash
ruyi list --category-is toolchain --is-installed n
```

已安装筛选结果仍可能包含该包尚未安装的其他版本，应查看具体版本的安装标记。能够查到某个版本，也不代表它支持当前主机。

#### `ruyi list profiles`

列出可用于创建开发环境的 profile：

```bash
ruyi list profiles
```

该命令无需添加 `--all` 或软件包筛选条件。profile 的选择见[配置开发环境](./dev-env.md)。

### `ruyi install`

安装工具链、模拟器等软件包，支持版本条件和多个软件包。别名为 `i`。

```text
ruyi install [options] <package-spec> [<package-spec> ...]
```

#### 包说明符与版本表达式

| 用途 | 命令示例 |
| --- | --- |
| 按包名安装 | `ruyi install gnu-upstream` |
| 使用命令别名 | `ruyi i gnu-upstream` |
| 明确类别 | `ruyi install toolchain/gnu-upstream` |
| 一次指定多个包 | `ruyi install gnu-upstream qemu-user-riscv-upstream` |
| 精确版本，省略比较符 | `ruyi install 'gnu-upstream(0.20260201.0)'` |
| 精确版本，使用 == | `ruyi install 'gnu-upstream(==0.20260201.0)'` |
| 排除指定版本 | `ruyi install 'gnu-upstream(!=0.20260201.0)'` |
| 高于指定版本 | `ruyi install 'gnu-upstream(>0.20250401.0)'` |
| 不低于指定版本 | `ruyi install 'gnu-upstream(>=0.20250401.0)'` |
| 低于指定版本 | `ruyi install 'gnu-upstream(<0.20260201.0)'` |
| 不高于指定版本 | `ruyi install 'gnu-upstream(<=0.20260201.0)'` |
| 同时满足上下限 | `ruyi install 'gnu-upstream(>=0.20250401.0,<0.20260201.0)'` |
| 显式使用 name: | `ruyi install name:toolchain/gnu-upstream` |
| 使用索引中声明的 slug | `ruyi install slug:gnu-upstream-20231212` |

不指定版本时，选择当前索引中符合配置的最高版本；范围或排除条件也只选择一个版本。逗号分隔的条件必须同时满足，多源环境下的选择还受软件源优先级影响。

默认排除预发布版本，显式版本条件和 slug 不会绕过此配置。slug 必须使用索引声明的值，不能自行拼接。

版本表达式用单引号包住，避免终端将括号、`<`、`>` 等解释为 shell 语法。

#### 安装选项与示例

| 选项 | 用途及命令示例 |
| --- | --- |
| `--fetch-only / -f` | 只获取下载文件：`ruyi install --fetch-only gnu-upstream` |
| `--host <host-arch>` | 指定分发文件的主机架构：`ruyi install --host x86_64 gnu-upstream` |
| `--reinstall` | 重装选定版本：`ruyi install --reinstall 'gnu-upstream(==0.20260201.0)'` |

默认下载并安装，跳过已安装版本，主机架构自动识别。

- `--fetch-only` 将文件保存到下载缓存，已安装版本可能被跳过。`-f` 不是强制安装。

- `--host` 指定工具链运行所在的主机架构，不改变编译目标，也不会让其他主机自动具备运行能力。

- **`--reinstall` 会移除原安装再重装，可能复用下载缓存**。执行前停止使用该版本的任务；失败可能影响依赖它的环境。

### `ruyi uninstall`

卸载指定的已安装版本，支持与 `install` 相同的包说明符。别名为 `remove` 和 `rm`。

```text
ruyi uninstall [options] <package-spec> [<package-spec> ...]
```

| 用途或选项 | 命令示例 | 说明 |
| --- | --- | --- |
| 按包名卸载 | `ruyi uninstall gnu-upstream` | 选择符合配置的最高已安装版本，不卸载所有版本 |
| 指定版本 | `ruyi uninstall 'gnu-upstream(==0.20250401.0)'` | 该版本必须已安装 |
| `--host <host-arch>` | `ruyi uninstall --host x86_64 'gnu-upstream(==0.20250401.0)'` | 对应主机版本必须已安装；默认使用当前主机架构 |
| `--yes / -y` | `ruyi uninstall -y 'gnu-upstream(==0.20250401.0)'` | 跳过确认；默认列出目标并询问 |
| 命令别名 | ruyi remove gnu-upstream 或 ruyi rm gnu-upstream | 与 uninstall 等价 |

版本选择默认排除预发布版本。**卸载预发布版本时，即使明确指定版本号或使用 `slug:`，也需要先允许选择预发布版本**。

卸载可能使依赖该版本的开发环境无法使用。执行前请停止相关任务，并核对待卸载列表。卸载不会清理下载缓存，也不会将开发环境迁移到其他版本。

### `ruyi extract`

获取软件包并提取到工作目录，无需先用 `install` 安装。

```text
ruyi extract [options] <package-spec> [<package-spec> ...]
```

| 用途或选项 | 命令示例 |
| --- | --- |
| 提取软件包 | `ruyi extract ruyisdk-demo` |
| 指定版本 | `ruyi extract 'ruyisdk-demo(==0.20231114.0)'` |
| `--dest-dir/-d <dest-dir>` | `ruyi extract -d "$HOME/src/ruyi-examples" 'ruyisdk-demo(==0.20231114.0)'` |
| `--extract-without-subdir` | `ruyi extract -d "$HOME/src/demo-work" --extract-without-subdir ruyisdk-demo` |
| `--fetch-only / -f` | `ruyi extract -f ruyisdk-demo` |
| `--host <host-arch>` | `ruyi extract --host x86_64 -d "$HOME/src/toolchain-files" 'gnu-upstream(==0.20260201.0)'` |

默认在当前目录下创建以包名和版本命名的子目录；例如指定版本的源码位于 `ruyisdk-demo-0.20231114.0`。`--extract-without-subdir` 则直接提取到目标目录。

`-f` 表示只下载，文件仍进入下载缓存，`-d` 不改变缓存位置。`--host` 默认使用当前主机架构。

目标位置必须可写；提取到已有目录可能覆盖或混入文件。

相关任务：本章的软件包选择、安装、更新和卸载流程见[管理软件包](./manage.md)；缓存及状态清理见[配置与维护](./maintenance.md)。

## 开发环境

### `ruyi venv`

使用已安装的工具链和可选模拟器创建开发环境。

```text
ruyi venv -t <toolchain-spec> [options] <profile> <venv-dir>
```

#### 基本参数、版本与多工具链

| 参数 | 作用与限制 |
| --- | --- |
| `profile` | 目标配置名称，通过 ruyi list profiles 查询 |
| 环境目录 | 应尚不存在，父目录需存在且可写 |
| `--toolchain/-t <toolchain-spec>` | 至少指定一个工具链，支持版本表达式，可重复 |

下面 GNU 示例需预先安装 `gnu-upstream` 的 `0.20260201.0` 版本；其他示例还需安装所用 LLVM、模拟器或附加命令包。各版本必须支持当前主机。

```bash
ruyi venv -t 'gnu-upstream(==0.20260201.0)' generic ./rv-env
```

#### sysroot 来源选项

| 选项 | 作用与限制 |
| --- | --- |
| `--with-sysroot` | 默认启用，通常使用工具链提供的 sysroot |
| `--without-sysroot` | 不由 Ruyi 准备 sysroot |
| `--copy-sysroot-from-pkg <package-spec>` | 使用另一已安装工具链提供的 sysroot 及 GCC 头文件、库；别名 --sysroot-from |
| `--copy-sysroot-from-dir <sysroot-dir>` | 复制已有、可读的 sysroot |
| `--symlink-sysroot-from-dir <sysroot-dir>` | 链接已有 sysroot，持续依赖原目录 |
| `--project-sysroot-from-rootfs <sysroot-dir>` | 从已有 rootfs 整理 sysroot，可能跳过不可读或不支持的文件 |

如果工具链没有提供 sysroot，且未指定其他来源，默认创建环境可能失败。此时应指定合适的 sysroot 来源；只有确认项目不需要时，才使用 `--without-sysroot`。

| 用途 | 完整命令示例 |
| --- | --- |
| 显式启用默认行为 | `ruyi venv -t 'gnu-upstream(==0.20260201.0)' --with-sysroot generic ./rv-env-with-sysroot` |
| 不准备 sysroot | `ruyi venv -t 'gnu-upstream(==0.20260201.0)' --without-sysroot generic ./rv-env-no-sysroot` |

使用 LLVM，由 GNU 提供 sysroot；两个指定版本均需预先安装：

```bash
ruyi venv \
  -t 'llvm-upstream(==21.1.1-ruyi.20250915)' \
  --copy-sysroot-from-pkg 'gnu-upstream(==0.20260201.0)' \
  generic ./llvm-env
```

其中来源选项可等价替换为 `--sysroot-from`。

以下为三种独立的目录来源写法，目录需预先存在且内容与目标环境匹配：

```bash
# 复制已有 sysroot
ruyi venv -t 'gnu-upstream(==0.20260201.0)' \
  --copy-sysroot-from-dir "$HOME/sysroots/rv64" generic ./rv-env-copy

# 链接已有 sysroot
ruyi venv -t 'gnu-upstream(==0.20260201.0)' \
  --symlink-sysroot-from-dir "$HOME/sysroots/rv64" generic ./rv-env-link

# 从已有 rootfs 整理
ruyi venv -t 'gnu-upstream(==0.20260201.0)' \
  --project-sysroot-from-rootfs "$HOME/rootfs/rv64" generic ./rv-env-rootfs
```

链接后修改或删除原目录会影响环境。从 rootfs 整理时，应留意跳过文件的提示。

#### 模拟器、环境名称与附加命令

| 选项 | 作用及实例 |
| --- | --- |
| `--emulator/-e <emulator-spec>` | 加入模拟器，默认不加入；完整示例见下 |
| `--name/-n <name>` | 设置显示名称，不改变目录：`ruyi venv -t 'gnu-upstream(==0.20260201.0)' --name rv-dev generic ./rv-env-named` |
| `--extra-commands-from <package-spec>` | 加入已安装包提供的命令，可重复：`ruyi venv -t 'gnu-upstream(==0.20260201.0)' --extra-commands-from wlink generic ./rv-env-wlink` |

加入用户态 RISC\-V 模拟器，需预先安装指定版本：

```bash
ruyi venv \
  -t 'gnu-upstream(==0.20260201.0)' \
  -e 'qemu-user-riscv-upstream(==11.0.0-ruyi.20260421)' \
  generic ./rv-env-qemu
```

`wlink` 示例要求所选版本已安装，且为当前主机提供相应命令。

注意事项：profile、工具链、模拟器和 sysroot 应与目标环境匹配；卸载或重装依赖包可能影响环境使用。

相关任务：选择依据、目录来源及完整配置流程见[配置开发环境](./dev-env.md)；包安装见[管理软件包](./manage.md)。

## 设备安装

### `ruyi device`

通过交互式引导为支持的设备准备并安装系统。

#### `ruyi device provision`

```bash
ruyi device provision
```

别名为 `ruyi device flash`。此命令没有预先指定设备、镜像或目标磁盘的公开选项，需按交互提示选择。

后续写入可能覆盖目标设备或存储介质上的数据。执行前备份必要内容，核对设备型号、系统镜像和写入目标，避免选中电脑自身磁盘。

相关任务：准备工作、设备连接和完整安装流程见[为设备安装系统](./flash-os.md)。

## 配置与软件源

### `ruyi config`

查询或修改配置。配置项采用 `段名.选项名`；以下子命令除帮助选项外没有其他开关。

| 子命令 | 用途与命令示例 |
| --- | --- |
| get &lt;key&gt; | 查询当前生效值：`ruyi config get packages.prereleases` |
| set &lt;key&gt; &lt;value&gt; | 允许选择预发布版本：`ruyi config set packages.prereleases true` |
| set &lt;key&gt; &lt;value&gt; | 禁止选择预发布版本：`ruyi config set packages.prereleases false` |
| unset &lt;key&gt; | 删除单项用户设置：`ruyi config unset packages.prereleases` |
| remove-section &lt;section&gt; | 删除整个用户配置段：`ruyi config remove-section packages` |

只需符合配置项要求的类型。修改仅作用于用户配置；删除后可能采用系统配置或默认值，因此 `unset` 不等于设为 `false`，可用 `get` 确认。

预发布设置影响后续版本选择，不会立即升级已安装包。

**`remove-section` 不询问确认，会删除整段设置**。执行前核对段名并保留需要的配置；只取消单项时使用 `unset`。

### `ruyi repo`

查看、添加或调整软件源。`ID` 是源标识，不是显示名称或仓库网址。

#### 添加软件源

```text
ruyi repo add <ID> [git-url] [options]
```

| 选项 | 作用与默认行为 |
| --- | --- |
| `--branch <branch>` | 指定跟踪分支；默认不单独覆盖分支设置 |
| `--priority <priority>` | 优先级默认 0，数值越大越优先 |
| `--local <path>` | 使用本地索引目录，可与远程 URL 并用 |
| `--name <name>` | 设置显示名称，不改变 ID |

ID 必须唯一，不能使用默认源 ID `ruyisdk`；URL 和 `--local` 至少提供一个。

指定远程 URL、分支、优先级和名称：

```bash
ruyi repo add extra https://github.com/ruyisdk/packages-index.git \
  --branch main --priority 10 --name "Ruyi extra index"
```

这里用官方索引演示语法，已使用默认源时无需重复添加。实际使用时填写所需的可信地址和已有分支，添加后用 `ruyi update` 同步。

添加已有本地索引：

```bash
ruyi repo add local-index --local "$HOME/src/packages-index"
```

该目录需预先包含可用的 Ruyi 软件包索引。

#### 查询和调整软件源

| 用途 | 命令示例 | 说明 |
| --- | --- | --- |
| 列出软件源 | `ruyi repo list` | 查看已配置源 |
| 移除用户配置 | `ruyi repo remove extra` | 默认保留本地缓存 |
| 移除配置并清理索引缓存 | `ruyi repo remove extra --purge` | 此例适用于未指定 --local 的受管附加源 |
| 启用 | `ruyi repo enable extra` | 要求源已配置 |
| 停用 | `ruyi repo disable extra` | 不卸载已安装包 |
| 调整优先级 | `ruyi repo set-priority extra 5` | 可能改变同名包的来源选择 |

`remove` 不询问确认，`--purge` 会尝试递归删除该软件源对应的本地目录。 如果使用 `--local` 指定了自定义目录，可能连同其中的 Git 仓库和未提交的修改一起删除。只想移除软件源配置时，不要添加 `--purge`。

默认源和系统提供的源不能 `remove`，可用 `disable`。移除源不会卸载已安装包，但如果卸载时无法从当前启用的软件源找到对应的软件包信息，`ruyi uninstall` 可能失败。需要重新启用或添加提供该软件包的源。

### `ruyi telemetry`

查询状态、设置遥测偏好或主动上传数据。

| 用途 | 命令示例 | 说明 |
| --- | --- | --- |
| 查看当前模式 | `ruyi telemetry status` | 默认输出模式名 |
| 查看详细说明 | `ruyi telemetry status --verbose` | --verbose 可简写为 -v |
| 同意上传 | `ruyi telemetry consent` | 别名为 ruyi telemetry on |
| 仅本地收集 | `ruyi telemetry local` | 不启用常规自动上传 |
| 退出收集 | `ruyi telemetry optout` | 别名为 ruyi telemetry off |
| 主动请求上传 | `ruyi telemetry upload` | 发送已收集数据，不是状态查询 |

**同意或主动上传前，应了解数据内容并确认愿意发送**。`local` 模式不会阻止显式上传请求；上传结果取决于可用数据、当前状态和网络。

切换模式不会清除已有记录，本地清理也不能撤回已上传数据。清理命令见下方 `self clean`。

相关任务：配置项、软件源策略和遥测机制的完整说明见[配置与维护](./maintenance.md)。

## Ruyi 自身与数据维护

### `ruyi self`

清理 Ruyi 管理的数据，或卸载独立安装的 Ruyi 本体。提供 `clean` 和 `uninstall`，没有 `self update`。

#### `ruyi self clean`

```text
ruyi self clean <cleanup-option> [<cleanup-option> ...] [--quiet]
```

必须指定至少一个清理范围，可以组合。**此命令不询问确认；下表每行均为独立参考，执行前停止相关任务、核对范围并保留必要数据**。

| 选项 | 清理对象与限制 | 完整命令示例 |
| --- | --- | --- |
| `--repo` | 受管缓存中的默认源索引；不遍历附加源或清理外部索引 | `ruyi self clean --repo` |
| `--distfiles` | 下载缓存；可能影响仍引用下载文件的已安装资源 | `ruyi self clean --distfiles` |
| `--progcache` | Ruyi 单文件程序展开缓存，不是包下载缓存 | `ruyi self clean --progcache` |
| `--installed-pkgs` | 已安装资源及安装记录；保留下载缓存和索引 | `ruyi self clean --installed-pkgs` |
| `--news-read-status` | 新闻已读记录，不删除新闻内容 | `ruyi self clean --news-read-status` |
| `--telemetry` | 本地遥测记录，不关闭遥测或撤回已上传数据 | `ruyi self clean --telemetry` |
| `--all` | 已安装数据、整个状态目录和缓存目录 | `ruyi self clean --all` |
| `--quiet / -q` | 减少提示，不改变范围，不能单独用于清理 | `ruyi self clean --telemetry --quiet` |

以上选项不删除用户配置或 Ruyi 本体；`--all` 不负责清理外部项目目录。**`--installed-pkgs` 和 `--all` 会影响依赖这些资源的环境，不应作为普通故障的默认处理办法**。

#### `ruyi self uninstall`

卸载符合条件的独立 Ruyi 二进制程序。

| 用途 | 命令示例 | 说明 |
| --- | --- | --- |
| 仅卸载本体 | `ruyi self uninstall` | 默认询问确认，保留包数据和缓存 |
| 同时清理数据 | `ruyi self uninstall --purge` | 删除已安装数据、状态和缓存，保留用户配置 |
| 跳过确认 | `ruyi self uninstall -y` | 没有 --yes 长写法 |

**卸载本体会影响依赖它的开发环境**。执行前确认卸载对象及需保留的数据。此命令仅适用于可自行卸载且文件可写的独立二进制安装；pip、pipx 或系统包管理器安装应由对应工具卸载。

### `ruyi version`

| 用途 | 命令示例 |
| --- | --- |
| 查看当前 Ruyi 本体版本 | `ruyi version` |
| 等价入口 | ruyi --version 或 ruyi -V |

无其他业务选项，不显示工具链版本，也不会检查或执行更新。

相关任务：数据目录、维护及不同安装方式的更新与卸载见[配置与维护](./maintenance.md)。

## 实验与管理入口说明

### `ruyi entity` 与关联筛选

这些入口仅在实验模式下提供，不属于默认命令入口。以下写法仅为当前命令启用实验模式：

| 用途 | 命令示例 |
| --- | --- |
| 查看帮助 | `RUYI_EXPERIMENTAL=1 ruyi entity -h` |
| 列出实体 | `RUYI_EXPERIMENTAL=1 ruyi entity list` |
| 按类型筛选 | `RUYI_EXPERIMENTAL=1 ruyi entity list -t pkg` |
| 查看实体及关联 | `RUYI_EXPERIMENTAL=1 ruyi entity describe pkg:toolchain/gnu-upstream` |
| 按关联筛选包 | `RUYI_EXPERIMENTAL=1 ruyi list --related-to-entity pkg:toolchain/gnu-upstream` |

`-t/--entity-type` 可重复，默认列出全部类型；指定实体需存在于当前索引。可用参数以当前安装版本的帮助为准。

### `ruyi admin`

面向软件源维护者和高级维护场景，提供检查、校验和计算、清单格式化、包构建、ABI 扫描及插件命令运行等能力。查看入口：

```bash
ruyi admin -h
```
