# ruyi 包管理器安装

让我们从 RuyiSDK 包管理器的安装开始：

## 获取 ruyi 包管理器

目前 RuyiSDK 包管理器工具目前能在  **amd64**、**arm64**、**riscv64** 三种架构在 **Linux** 系统下运行，可以从如下链接中下载：

- [ruyi GitHub Releases](https://github.com/RuyiSDK/ruyi/releases/)
- [ISCAS 镜像源](https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/)

你可以首先使用 `ruyi update` 从配置的软件源中获得本地软件包缓存的更新，再使用 `ruyi list` 查看目前所支持的包。

> 若还有其余相关问题可以访问 ruyi 包管理器[仓库文档](https://github.com/RuyiSDK/ruyi)（目前仅支持英文）参阅。

## ruyi 安装

> 请按照架构信息下载不同的 ruyi 二进制，下面以 amd64 架构为例说明具体的步骤。其他架构除了 ruyi 二进制文件不同，其他步骤是一样的。此外，RuyiSDK 目前一直在不断更新，下面例子中的 ruyi 版本也请更换为最新版本。

```bash
$ wget https://mirror.iscas.ac.cn/ruyisdk/ruyi/testing/ruyi.amd64.20231211
$ chmod +x ./ruyi.amd64.20231211
$ sudo cp ruyi.amd64.20231211 /usr/local/bin/ruyi
$ ruyi version
Ruyi 0.2.0-beta.20231211
Copyright (C) 2023 Institute of Software, Chinese Academy of Sciences (ISCAS).
All rights reserved.
License: Apache-2.0 <https://www.apache.org/licenses/LICENSE-2.0>
```

> ``ruyi version`` 应当可以正常打印版本信息。**注意二进制的文件名必须为** ruyi。

列出帮助信息：

```bash
$ ruyi --help

RuyiSDK Package Manager 0.2.0-beta.20231211

options:
  -h, --help            show this help message and exit
  -V, --version         Print version information

subcommands:
  {extract,install,i,list,update,venv,admin,self,version}
    extract             Fetch package(s) then extract to current directory
    install (i)         Install package from configured repository
    list                List available packages in configured repository
    update              Update RuyiSDK repo and packages
    venv                Generate a virtual environment adapted to the chosen toolchain and profile
    admin               (NOT FOR REGULAR USERS) Subcommands for managing Ruyi Repos
    self                Manage this Ruyi installation
    version             Print version information


```

### 常见问题

#### `ruyi update` 执行报错

由于目前软件包索引信息托管于 GitHub 仓库，国内访问可能会产生不稳定等问题，若出现 `ruyi update` 执行时连续报错，可参考 ruyi [仓库文档](https://github.com/RuyiSDK/ruyi)，将仓库更换成 [备用仓库](https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git)。

操作简述：

1. 在 ruyi 包管理工具默认的配置目录（默认为 `~/.config/ruyi`）下修改 `config.toml` 文件配置。
不同 Linux 发行版可能不同，当 config.toml 不存在时，可以自行创建。config.toml 配置文档内容默认为：

```bash
[packages]
# Consider pre-release versions when matching packages in repositories.
prereleases = false

[repo]
# Path to the local RuyiSDK metadata repository. Must be absolute or the setting
# will be ignored.
# If unset or empty, $XDG_CACHE_HOME/ruyi/packages-index is used.
local = ""

# Remote location of RuyiSDK metadata repository.
# If unset or empty, this default value is used.
remote = "https://github.com/ruyisdk/packages-index.git"
# If the GitHub network is unstable, you can use the backup RuyiSDK metadata repository.
# remote = "https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git"

# Name of the branch to use.
# If unset or empty, this default value is used.
branch = "main"
```

2. 将 remote 的值修改为： `https://mirror.iscas.ac.cn/git/ruyisdk/packages-index.git` 再重新执行 `ruyi update` 即可。

## 总结

以上场景介绍了 ruyi 包管理器和工具的基本使用，包括：

- 安装 `ruyi`
- 使用 `ruyi list` / `ruyi update` / `ruyi install` 功能
- 若出现网络不稳定的备用方案

ruyi 包管理器相关的更多命令以及命令具体使用方法请参阅[功能介绍](../Package-Manager/index.md)。

### 使用案例

目前有一些简单的使用案例提供参考，请参阅使用案例栏目。
