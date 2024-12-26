# ruyi 包管理器功能说明

ruyi 包管理器提供以下功能。

## 命令查询

| 命令                                                                                           | 含义                          | 注意事项                                |
| -------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------- |
| `ruyi update`                                                                                | 更新软件包缓存，使用默认镜像。             | 软件包缓存将存放在用户目录中，通常为 `~/.cache/ruyi`。 |
| `ruyi news list -h`                                                                          | 查看新闻命令的帮助信息。                |                                     |
| `ruyi news list`                                                                             | 列出所有新闻。                     |                                     |
| `ruyi news list --new`                                                                       | 仅列出未读新闻。                    |                                     |
| `ruyi news read -h`                                                                          | 查看新闻阅读命令的帮助信息。              |                                     |
| `ruyi news read 1`                                                                           | 读取特定序号的新闻。                  | 1 为要读取的新闻条目的序号或 ID。                 |
| `ruyi news read`                                                                             | 读取下一条新闻。                    |                                     |
| `ruyi news read --quiet`                                                                     | 标记新闻为已读，不输出任何信息。            | 不输出任何东西，只标记为已读。                     |
| `ruyi list`                                                                                  | 列出所有可用软件包。                  |                                     |
| `ruyi list -v`                                                                               | 列出所有软件包的详细信息。               |                                     |
| `ruyi list profiles`                                                                         | 查看预置的编译环境配置。                | 与 Python 虚拟环境类似。                    |
| `ruyi install gnu-upstream`                                                                  | 安装最新的 GNU 上游工具链。            | 默认安装最新版本的 gnu-upstream。             |
| `ruyi install 'gnu-upstream(0.20231118.0)'`                                                  | 安装指定版本的 GNU 上游工具链。          | 通过指定版本号安装历史版本。                      |
| `ruyi install 'gnu-upstream(==0.20231118.0)'`                                                | 安装特定版本的 GNU 上游工具链。          | 版本匹配格式应为 `<op><ver>`。               |
| `ruyi install --reinstall gnu-upstream`                                                      | 重新安装 GNU 上游工具链。             |                                     |
| `ruyi extract ruyisdk-demo`                                                                  | 下载并解包ruyisdk-demo 源码包。      | 解包到当前目录。                            |
| `ruyi venv --toolchain gnu-upstream --emulator qemu-user-riscv-upstream generic ./ruyi_venv` | 在指定目录建立包含工具链和模拟器的编译环境。      | 使用预置的 generic 配置。                   |
| `ruyi version`                                                                               | 查看 ruyi 包管理器的版本。              |                                     |
| `ruyi self uninstall`                                                                        | 卸载 ruyi 包管理器。               | 命令会询问确认操作。                          |
| `ruyi self uninstall -y`                                                                     | 无需确认直接卸载 ruyi 包管理器。         | 无需确认直接执行。                           |
| `ruyi self uninstall --purge`                                                                | 彻底卸载 ruyi 包管理器，包括缓存和安装的软件包。 | 包括缓存和已安装的软件包。                       |
| `ruyi self uninstall --purge -y`                                                             | 无需确认彻底卸载 ruyi 包管理器。         | 无需确认直接执行。                           |
| `ruyi device provision`                                                                      | 下载所需系统镜像，并为设备安装系统。          | 按照引导进行系统安装。                         |

----
> 以下内容为表格内容详细说明。
## 刷新软件包缓存

更新软件包缓存，使用默认镜像即可：

```bash
$ ruyi update
```

软件包缓存将存放在用户目录中，通常为 ``~/.cache/ruyi`` ；在 ``XDG_CACHE_HOME`` 环境变量被设置时，目录为 ``$XDG_CACHE_HOME/ruyi`` 。
在本文档中家目录为 ``/home/myon`` 。

## 阅读 ruyi 新闻

在 `ruyi update` 时会列出未读新闻（news item(s)），从这里可以及时了解到 ruyi 出现的更新或发出的重要通知。

`ruyi news list` 同样可以调出这个页面，但它将显示所有新闻，其中未阅读的新闻在支持的终端上会以绿色高亮显示。

可以指定阅读某条新闻 `ruyi news read 1`，或者直接 `ruyi news read` 将所有新闻标记为已读。此时 ruyi 会打印相应的新闻内容。

```bash
$ ruyi news list -h
$ ruyi news list
$ ruyi news list --new		  # 仅列出未读新闻

$ ruyi news read -h
$ ruyi news read 1 		      # 1为要读取的新闻条目的序号或ID
$ ruyi news read   		      # 读取下一条新闻
$ ruyi news read --quiet  	# 不输出任何东西，只标记为已读
```

## 查询可用软件包

Ruyi 软件包大致分为几个分区

- toolchain 工具链
- source 源码包
- emulator 模拟器
- board-image 系统镜像
- analyzer 分析工具
- extra 其他

软件包的版本号符合 Semver 的规范，这使它们和上游版本可能具有一些差别。
TODO: 版本号映射的标准依然在编写，可以从 Ruyi 版本号和上游版本号的比较中了解到部分映射关系。
软件包分为正式发布的软件包和预发布的软件包（prerelease），预发布的软件包释出会比上游正式发布该版本要早，但是修复了最新已发布版本的重要 bug。
一些较早发布的软件包还引入了 slug 来标记版本，这是一个已经废弃的特性，会在未来彻底删除。

查看可用的软件包，该命令将列出所有可用的软件包：

```bash
$ ruyi list
List of available packages:

* emulator/qemu-user-riscv-upstream
  - 8.2.0-ruyi.20240128 (latest)
  - 8.1.2-ruyi.20231121 ()
* emulator/box64-upstream
  - 0.3.1-pre.ruyi.20240901+git.9178effd (prerelease, latest-prerelease, no binary for current host)
  - 0.3.0-ruyi.20240718 (latest, no binary for current host)
  - 0.2.9-pre.ruyi.20240702+git.4b0b3fc9 (prerelease, no binary for current host)
  - 0.2.8-ruyi.20240702 (no binary for current host)
* emulator/qemu-user-riscv-xthead
  - 6.1.0-ruyi.20231207+g03813c9fe8 (latest)
* emulator/qemu-system-riscv-upstream
  - 8.2.0-ruyi.20240128 (latest)
* extra/wps-office
  - 12.1.0-r.17900 (latest)
  - 12.1.0-r.17885 ()
* analyzer/dynamorio-riscv
  - 10.93.19979-ruyi.20240914 (latest, no binary for current host)
  - 10.0.19748-ruyi.20240128 (no binary for current host)
* source/coremark
  - 1.0.2-pre.20230125 (prerelease, latest-prerelease)
  - 1.0.1 (latest)
* source/milkv-duo-examples
  - 0.20240719.0+git.52ae647a (latest)
* source/ruyisdk-demo
  - 0.20231114.0 (latest)
* toolchain/gnu-upstream
  - 0.20231212.0 (latest) slug: gnu-upstream-20231212
  - 0.20231118.0 () slug: gnu-upstream-20231118
* toolchain/gnu-milkv-milkv-duo-bin
  - 0.20240731.0+git.67688c7335e7 (latest)
* toolchain/gnu-plct-xthead
  - 2.8.0-ruyi.20240222 (latest)
  - 0.20231212.0 () slug: gnu-plct-xthead-20231212
  - 0.20231118.0 () slug: gnu-plct-xthead-20231118
* toolchain/gnu-milkv-milkv-duo-elf-bin
  - 0.20240731.0+git.67688c7335e7 (latest)
* toolchain/gnu-plct
  - 0.20240324.0 (latest)
  - 0.20231212.0 () slug: gnu-plct-20231212
  - 0.20231118.0 () slug: gnu-plct-20231118
* toolchain/gnu-milkv-milkv-duo-musl-bin
  - 0.20240731.0+git.67688c7335e7 (latest)
* toolchain/llvm-plct
  - 17.0.6-ruyi.20240511 (latest)
* toolchain/gnu-plct-rv64ilp32-elf
  - 0.20240906.0-ruyi.20240906+git.df9313313b45 (latest)
* toolchain/llvm-upstream
  - 17.0.5-ruyi.20231121 (latest) slug: llvm-upstream-20231121
```


若某个软件包版本没有提供当前架构，则会显示 no binary for current host 但是同样可以使用 --host 安装其他架构的包
`ruyi install --host x86_64 wps-office`
如果希望 list 命令输出更详细信息，则可以使用 `--verbose`

列出所有软件包的详细信息：

```bash
$ ruyi list -v
```

## 查询可用编译环境

与 Python 的虚拟环境类似，ruyi 包管理器工具使用 ``venv`` 命令应用配置到指定的工具链以建立编译环境。

ruyi 包管理预置的配置可以使用 ``ruyi list profiles`` 命令查看：

```bash
$ ruyi list profiles
generic
baremetal-rv64ilp32 (needs flavor(s): {'rv64ilp32'})
sipeed-lpi4a (needs flavor(s): {'xthead'})
milkv-duo
```

## 安装软件包

通常下列分区的软件包会是二进制包

- toolchain 工具链
- emulator 模拟器
- board-image 系统镜像
- analyzer 分析工具
- extra 其他

使用 ``install`` 命令安装软件包，如 GNU 上游工具链：

```bash
$ ruyi install gnu-upstream
```

上述通过指定软件包名安装的方式默认会安装 latest 的 gnu-upstream，如果想安装某个历史版本的 gnu-upstream，则可以通过指定版本来安装：

```bash
$ ruyi install 'gnu-upstream(0.20231118.0)'
$ ruyi install 'gnu-upstream(>=0.20231118.0)'

# match_expr parameter should be in format `<op><ver>`, where `<op>` is one of ['<', '>', '==', '<=', '>=', '!='].
```

若希望重装一个软件包，则可以加上 ``--reinstall`` 参数：

```bash
$ ruyi install --reinstall gnu-upstream
```

由于系统镜像也是二进制文件，也可以使用 install 命令执行下载和解包。这些包通常配合 ruyi 的镜像刷写功能使用。

## 安装源码包

ruyi 包管理器同时管理一些源码包，使用 ``extract`` 命令下载一个源码包并解包到当前目录：

extract 支持和 install 一样的版本号指定。

```bash
$ ruyi extract ruyisdk-demo
$ ls
README.md  rvv-autovec
```

## 安装预发布的软件包

pre-release 可以在 config.toml 中配置。

## 搭建编译环境

已经安装的工具链与模拟器需要在 ruyi 编译环境中使用，这和 Python 的虚拟环境十分类似。
这是由 ``venv`` 命令实现的：

```bash
$ ruyi venv --toolchain gnu-upstream --emulator qemu-user-riscv-upstream generic ./ruyi_venv
```

这个命令使用预置的 generic 配置，在 ``./ruyi_venv`` 目录建立包含 gnu-upstream 工具链和
 qemu-user-riscv-upstream 模拟器的编译环境。

具体使用参见“编译环境”与“具有 QEMU 支持的编译环境”章节。

## 卸载软件包

注意 ruyi 包管理器没有实现卸载 ruyi 软件包的功能。若您强制中断 ruyi 软件包安装进程或做了其他非预期操作
而会导致软件包功能异常时，请使用 ``install --reinstall`` 以尝试重试安装该软件包。

## 卸载 ruyi 包管理器

使用下面的命令卸载 ruyi 包管理器：

```bash
$ ruyi self uninstall
```

这个命令将会询问您以二次确认该操作，如果希望 ruyi 包管理不询问而直接执行：

```bash
$ ruyi self uninstall -y
```

上面的命令只是删除 ruyi 本身，并不会删除软件包缓存和安装的 ruyi 软件包。

如果希望删除所有缓存和安装了的软件包以实现干净的卸载：

```bash
$ ruyi self uninstall --purge
```

同样的这个命令将会询问您以二次确认该操作，如果希望 ruyi 包管理不询问而直接执行：

```bash
$ ruyi self uninstall --purge -y
```

实现 ruyi 包管理自身的升级可能会需要 `sudo`，而 ruyi 包管理被设计为避免进行需要超级用户权限的操作。
故在需要升级 ruyi 包管理时您需要手动进行该操作，即首先卸载 ruyi 包管理器，再执行安装 ruyi 包管理器的过程，
这个过程中您可以自主选择是否保留旧的软件包缓存和 ruyi 软件包。

## 镜像信息的维护与下载、开发板系统的安装引导

系统镜像通常需要配合镜像刷写功能来完成，即 device provision 功能。
该功能会提供一个镜像刷写的文字向导。
该向导当前支持使用 dd 和 fastboot 对 RISC-V 设备进行系统镜像刷写，同时也为单片机等不能常规刷写的设备提供了指导文档。

```bash
$ ruyi device provision
```

## 手动从安装目录调用

并不被推荐。二进制包均被安装在 ~/.local/share/ruyi/ 下，用起来和把工具链解包到 /opt 下是一样的。
系统镜像同样可以手动 dd 或使用 fastboot 刷写。