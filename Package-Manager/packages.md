---
sidebar_position: 3
---

# 管理 Ruyi 软件包

## 刷新本地软件包缓存

获取远程软件源的内容并刷新本地软件包缓存，默认使用托管在 GitHub 上的镜像：

```bash
$ ruyi update
```

软件包缓存将存放在用户目录中，通常为 ``~/.cache/ruyi/packages-index/`` ；在 ``XDG_CACHE_HOME`` 环境变量被设置时，目录为 ``$XDG_CACHE_HOME/ruyi/packages-index/`` 。

### ``ruyi update`` 拉取失败

由于目前软件包索引信息托管于 GitHub 仓库，若出现仓库访问不稳定的情况，可在配置文件中配置使用 [备用仓库](https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git)。

Ruyi 包管理器的配置文件默认存放在 ``~/.config/ruyi/config.toml``，在 ``XDG_CONFIG_HOME`` 被配置的时候为 ``$XDG_CONFIG_HOME/ruyi/config.toml``。文件不存在可以自行建立。

```
[repo]
local = ""
remote = "https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git"
branch = "main"
```

其中 ``local`` 为本地缓存目录， ``remote`` 为远程镜像源地址， ``branch`` 为镜像所在 git 分支。

保存配置后重新尝试刷新本地缓存：

```bash
$ ruyi update
```

## 阅读新闻

在上一节运行 ``ruyi update`` 刷新本地软件源时，您大概已经看到 Ruyi 包管理器列出了未读新闻（news item(s)）。从这里您可以及时了解到 ruyi 软件包的更新信息或发出的其他重要通知。

运行 ``ruyi news list`` 同样可以调出这个页面，不同的是它将显示所有新闻，而未读新闻在被支持的终端上会以绿色高亮显示。

您可以使用下面的命令来浏览、阅读新闻和标记已读：

```bash
$ ruyi news list -h
$ ruyi news list
$ ruyi news list --new        # 仅列出未读新闻

$ ruyi news read -h
$ ruyi news read 1            # 阅读序号（ID）为 1 的新闻
$ ruyi news read              # 阅读全部未读新闻
$ ruyi news read --quiet      # 不输出任何东西，只标记未读新闻为已读
```

Ruyi 通过在 ``~/.local/state/ruyi/news.read.txt`` 中存储新闻标题来标记已读新闻，在 ``XDG_STATE_HOME`` 被配置时文件路径为 ``$XDG_STATE_HOME/ruyi/news.read.txt``。

## 列出软件包

Ruyi 软件包大致分为几个分区：

- toolchain 工具链
- source 源码包
- emulator 模拟器
- board-image 系统镜像
- analyzer 分析工具
- extra 其他

软件包的版本号严格遵循 Semver 的规范，这使它们和上游版本可能有一些差别。

软件包分为正式发布的软件包和预发布的软件包（prerelease），预发布的软件包的释出会比上游正式发布该版本要早，但是修复了最新已发布版本的 bug。

一些发布时间较早的 Ruyi 软件包还引入了 slug 来标记版本，这是一个被废弃的特性，会在未来彻底删除。

使用 ``ruyi list`` 命令列出所有可用的软件包，注意即使某个软件包/版本并不支持当前架构的系统，它依然会被列出。

这是在 ``x86_64`` 机器上的一个示例，实际的列表会更长：

```bash
$ ruyi list --name-contains ''
List of available packages:

* source/milkv-duo-examples
  - 0.20240719.0+git.52ae647a (latest)
* source/ruyisdk-demo
  - 0.20231114.0 (latest)
* source/coremark
  - 1.0.2-pre.20230125 (prerelease, latest-prerelease)
  - 1.0.1 (latest)
* toolchain/llvm-plct
  - 17.0.6-ruyi.20240511 (latest)
* toolchain/llvm-upstream
  - 17.0.5-ruyi.20231121 (latest) slug: llvm-upstream-20231121
* toolchain/gnu-milkv-milkv-duo-elf-bin
  - 0.20240731.0+git.67688c7335e7 (latest)
* analyzer/dynamorio-riscv
  - 10.93.19979-ruyi.20240914 (latest, no binary for current host)
  - 10.0.19748-ruyi.20240128 (no binary for current host)
* board-image/uboot-revyos-sipeed-lc4a-8g
  - 0.20240127.0 (latest)
* board-image/uboot-oerv-sipeed-lpi4a-8g
  - 0.2309.1 (latest)
* board-image/canmv-linux-sdk-demo-canaan-k230d-rv64ilp32
  - 0.20240731.0 (latest)
  - 0.20240717.0 ()
* emulator/qemu-user-riscv-xthead
  - 6.1.0-ruyi.20231207+g03813c9fe8 (latest)
* emulator/box64-upstream
  - 0.3.1-pre.ruyi.20240901+git.9178effd (prerelease, latest-prerelease, no binary for current host)
  - 0.3.0-ruyi.20240718 (latest, no binary for current host)
  - 0.2.9-pre.ruyi.20240702+git.4b0b3fc9 (prerelease, no binary for current host)
  - 0.2.8-ruyi.20240702 (no binary for current host)
* emulator/qemu-user-riscv-upstream
  - 8.2.0-ruyi.20240128 (latest)
  - 8.1.2-ruyi.20231121 ()
* extra/wps-office
  - 12.1.0-r.17900 (latest)
  - 12.1.0-r.17885 ()
```

``list`` 命令还提供了 ``--verbose`` 或 ``-v`` 参数来输出更详细的信息，这将会打印软件源中几乎所有信息。由于全部输出将会很长，建议给 ``--name-contains`` 传入非空的查找字段，或添加其他限定参数，或将完整输出重定向到文件或 ``less`` 等工具。

类似于 ``toolchain/llvm-plct`` 的行表示了一个软件包名，这在使用 ``install`` 命令安装时需要指定该名称。大多数情况下仅仅指定 ``/`` 后的名称也是可以的，在该示例中就是 ``llvm-plct``。

在软件包名后跟随了一个版本号列表。版本号可以用于指定安装某个软件包的某个版本或符合给出表达式的版本。版本号后面括号中的内容则标记了该版本的一些信息。

### ``latest``

用于标记某个软件包的最新版本，这也是 ``install`` 命令默认安装的版本。

### ``prerelease``

预发布的版本。这意味着该软件包先于上游发布了这一版本，新版本往往修复了旧版本的 bug，特别当一个预发布版本被认为有必要时。

默认情况下 Ruyi 包管理器会忽略预发布版本。您可以配置 Ruyi 包管理器安装预发布版本，但是需要自行承担其中隐含的风险。

### ``latest-prerelease``

最新的预发布版本。在允许安装预发布版本，且该版本比 ``latest`` 版本更新时，这会是 ``install`` 命令默认安装的版本。

如果您确实需要安装一个预发布版本，可以在配置文件中添加配置：

```
[packages]
prereleases = true
```

### ``no binary for current host``

这表示该软件包版本没有提供用于本机架构的二进制包。

在某些场景下本身就应当安装非本机架构的软件包，如在 riscv64 机器上使用 box64 运行 WPS Office。

此时可以指定安装某个架构的二进制软件包：

```bash
$ ruyi install --host x86_64 wps-office
```

## 安装二进制软件包

通常下列分区的软件包会是二进制包

- toolchain 工具链
- emulator 模拟器
- board-image 系统镜像
- analyzer 分析工具
- extra 其他

这些软件包可以使用 ``install`` 命令安装，如安装 GNU 上游 gcc 工具链：

```bash
$ ruyi install gnu-upstream
$ ruyi install toolchain/gnu-upstream
```

上述通过指定软件包名安装的方式默认会安装标记为 latest 版本的 gnu-upstream 包，如果想安装某个历史版本的 gnu-upstream，则可以通过指定版本来安装：

```bash
$ ruyi install 'gnu-upstream(0.20231118.0)'
$ ruyi install 'gnu-upstream(>=0.20231118.0)'
```

表达式支持 ``<``、 ``>``、``==``、 ``<=``、 ``>=``、 ``!=`` 运算符。

如果希望安装多个包：

```bash
$ ruyi install gnu-plct gnu-upsteam llvm-plct llvm-upstream
```

在一些特殊情况下，如错误删除了已安装软件包的文件，则可以重新安装这个软件包来恢复：

```bash
$ ruyi install --reinstall gnu-upstream
```

包管理器下载的包存放在 ``~/.cache/ruyi/distfiles/`` 下，在 ``XDG_CACHE_HOME`` 被指定时为 ``$XDG_CACHE_HOME/ruyi/distfiles/``。这些包通常以已压缩的格式存在，需要调用系统工具解包。在系统中缺少对应的工具时将打印相应的警告。

``install`` 命令默认情况下只会安装和本机架构相同的二进制包，解包后的二进制包存放在 ``~/.local/share/ruyi/binaries/$(uname -m)/`` 目录下，在 ``XDG_DATA_HOME`` 被指定时为 ``$XDG_DATA_HOME/ruyi/binaries/$(uname -m)/``。

由于系统镜像也是二进制文件，也可以使用 ``install`` 命令执行下载和解包。不过通常情况下这些包配合 Ruyi 的镜像刷写功能使用。解包后的镜像文件存放在 ``~/.local/share/ruyi/blobs/`` 目录下，在 ``XDG_DATA_HOME`` 被指定时为 ``$XDG_DATA_HOME/ruyi/blobs/``。

## 安装源码包

下列分区的软件包显然是源码包

- source 源码包

源码包可以使用 ``extract`` 命令下载一个源码包并解包到当前目录：

```bash
$ ruyi extract ruyisdk-demo
$ ls
README.md  rvv-autovec
```

``extract`` 命令支持和 ``install`` 相同的版本表达方式。

## 卸载软件包

Ruyi 包管理器没有实现卸载指定 Ruyi 软件包的功能，但是您可以使用如下命令删除所有已经下载和安装的软件包：

```bash
$ ruyi self clean --distfiles --installed-pkgs
```

如果您执意要删除某个软件包，虽然不建议，但是您可以手动删除它们。如果错误删除了一些文件，但是 Ruyi 依然认为该软件包已经安装，可以尝试使用 ``install --reinstall`` 恢复。

注意，如果某个工具链软件包被删除，已经建立的依赖该包的虚拟环境将失效，且激活该编译环境时并不会有相关警告。

