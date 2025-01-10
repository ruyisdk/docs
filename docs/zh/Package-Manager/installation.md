# 安装

让我们从 RuyiSDK 包管理器的安装开始。

本文档使用 ``~`` 表示当前普通用户的家目录，必要时使用 ``/home/myhone`` 作为家目录绝对路径示例。

## 使用预编译的二进制安装

目前 RuyiSDK 包管理器工具为 **Linux** 系统预编译了  **amd64**、**arm64**、**riscv64** 三种架构的二进制，它不依赖系统 Python，适用范围较为广泛。

它们同时发布在 GitHub Release 和 ISCAS 镜像站上：

- [ruyi GitHub Releases](https://github.com/RuyiSDK/ruyi/releases/)
- [ISCAS 镜像源](https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/)

以 ISCAS 镜像源为例描述安装流程，首先运行 ``uname -m`` 检查系统架构并下载对应的二进制。

如果输出为 ``x86_64``：

```bash
$ wget https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.25.0/ruyi.amd64
```

如果输出为 ``aarch64``：

```bash
$ wget https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.25.0/ruyi.arm64
```

如果输出为 ``riscv64``：

```bash
$ wget https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.25.0/ruyi.riscv64
```

下面以 ``x86_64`` 架构为例，给下载的二进制添加执行权限：

```bash
$ chmod +x ./ruyi.amd64
```

安装二进制到 ``PATH`` 包含的目录中：

```bash
$ sudo cp -v ruyi.amd64 /usr/local/bin/ruyi
```

如果您的 ``PATH`` 中包含 ``~/.local/bin/`` 目录，将 ``ruyi`` 安装到 ``~/.local/bin/ruyi`` 可能会是一个更推荐的选择。这个目录下的安装和删除并不需要超级用户权限。

注意二进制文件名必须为 ``ruyi``。

## 使用系统包管理器安装

目前 Arch Linux 用户可以使用系统包管理器安装和卸载 Ruyi 包管理器，相对于使用预编译的二进制安装，维护更加便利；使用系统 Python 也可以获得更好的性能。

从 AUR 安装，以 ``yay`` 为例，注意应当使用普通用户：

```bash
$ yay -S ruyi
```

从 Arch Linux CN 软件源安装，以 ISCAS 开源镜像站为例添加配置：

```bash
[archlinuxcn]
Server = https://mirror.iscas.ac.cn/archlinuxcn/$arch
```

使用 ``pacman`` 安装：

```bash
$ sudo pacman -Sy
$ sudo pacman -S ruyi
```

## 验证你的安装

```bash
$ ruyi version
```

命令应当可以正常运行并打印版本和 Copyright 信息，如果失败请检查系统环境或重新尝试安装。

## 开始使用

至此 Ruyi 包管理器已经成功安装在您的系统中。可以从 Ruyi 本身帮助信息中了解使用方法，或继续阅读本文档。

列出帮助信息：

```bash
$ ruyi --help
```

