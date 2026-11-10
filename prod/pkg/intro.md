---
title: Ruyi 包管理器简介
sidebar_position: 1
---

<!-- markdownlint-configure-file {"MD025": {"front_matter_title": ""}} -->

# Ruyi 包管理器简介

Ruyi 包管理器（Ruyi Package Manager）是 RuyiSDK 中用于获取和管理软件包、配置 RISC\-V 开发环境的命令行工具，通过 ruyi 命令使用。

## 可以完成什么任务

根据你希望完成的工作，选择对应的任务入口。

| **用户目标**<br /> | **Ruyi提供的能力** | **阅读入口**<br /> |
| --- | --- | --- |
| 管理软件包 | 查找工具链、模拟器等软件包，安装所需版本，并按需获取源码或卸载软件包 <br /> | [管理软件包](./manage.md) |
| 配置开发环境 | 根据目标平台选择工具链和预置配置（profile），按需准备 sysroot、模拟器等资源，创建并使用 Ruyi 虚拟环境 <br /> | [配置开发环境](./dev-env.md) |
| 为设备安装系统 | 根据支持的设备和镜像完成系统安装<br /> | [为设备安装系统](./flash-os.md) |

设备和镜像的适用范围请查看对应任务说明，并以当前版本实际提供的选项为准

## 从哪里开始

您可以参考以下顺序安装和使用：

1. 安装 Ruyi 包管理器：阅读[安装 Ruyi](./install.md) 章节，根据所用操作系统和硬件架构选择合适的安装方式，完成 Ruyi 包管理器的安装。

   请注意：**初次使用时，请务必检查并按需修改软件源和遥测模式**。

   1. 了解遥测数据隐私策略与默认配置，并根据需要进行检查和调整（参考[遥测模式设置](./install.md#telemetry-settings)）。

   2. 根据您的网络情况看是否需要切换到ISCAS软件源，以确保获取软件包资源索引成功（参考  [ruyi 软件源配置](./install.md#repository-settings)）。

2. 管理软件包：阅读[管理软件包](./manage.md)章节，了解如何刷新本地软件包缓存、查找和安装所需软件包，以及升级和卸载软件包。

3. 搭建开发环境：阅读[配置开发环境](./dev-env.md)章节，选择匹配的工具链和预置配置，创建并激活 Ruyi 虚拟环境，在该环境中进行编译构建，实现编译环境的隔离。**创建虚拟环境前，需要先安装对应的软件包**。

此外，您还可以使用 Ruyi 包管理器开展如下操作：

- 为 RISC\-V 设备安装系统：如需为设备安装系统，请参考[使用 ruyi 为设备安装镜像](./flash-os.md)，了解相应的准备工作和操作步骤。

- 更多 Ruyi 配置与维护：阅读[配置与维护](./maintenance.md)章节，了解其他配置选项和日常维护方法。

## 命令查询

安装 Ruyi 后，可通过以下方式查询当前已安装版本支持的命令和参数用法：

- ruyi \-h：查看 Ruyi 顶层帮助，查看 ruyi 子命令。

- ruyi \<subcommand\> \-h：查看具体子命令帮助，请将 \<subcommand\> 替换为ruyi 实际子命令名称。

命令和参数可能随版本更新，请以当前已安装版本的帮助输出为准。

```text
$ ruyi -h
用法: ruyi [-h] [-V] [--porcelain]
            {admin,device,venv,extract,install,i,uninstall,remove,rm,list,news,repo,update,telemetry,self,config,version}
            ...

RuyiSDK 包管理器

选项
  -h, --help            显示该帮助信息并退出
  -V, --version         打印版本信息
  --porcelain           在适用的情况下，以机器友好格式输出

子命令:
  {admin,device,venv,extract,install,i,uninstall,remove,rm,list,news,repo,update,telemetry,self,config,version}
    admin               （非面向普通用户）用来管理 Ruyi 软件源仓库的子命令
    device              管理设备
    venv                生成适应所选工具链和配置文件的虚拟环境
    extract             获取软件包然后解压缩到当前目录
    install (i)         从已配置的仓库安装软件包
    uninstall (remove, rm)
                        卸载已安装的软件包
    list                列出已配置仓库中的可用软件包
    news                列出并阅读已配置仓库中的新闻条目
    repo                管理已配置的软件包仓库
    update              更新 RuyiSDK 仓库和软件包
    telemetry           管理您的遥测偏好设置
    self                管理当前的 Ruyi 安装
    config              管理 Ruyi 的配置选项
    version             打印版本信息
```

以 list 子命令为例：

```text
$ ruyi list -h
用法: ruyi list [-h] [--verbose] [--all] [--is-installed STR] [--category-contains STR] [--category-is STR] [--name-contains STR] {profiles} ...

选项:
  -h, --help            显示该帮助信息并退出
  --verbose, -v         也显示每个软件包的详细信息
  --all                 匹配、显示所有软件包
  --is-installed STR    匹配已安装 (y/true/1) 或未安装 (n/false/0) 的软件包
  --category-contains STR
                        匹配属于特定类别的软件包，其中类别的名称包含给定字符串
  --category-is STR     匹配来自给定类别的软件包
  --name-contains STR   匹配名称包含给定字符串的软件包

子命令:
  {profiles}
    profiles            列出所有可用配置文件
```

### 常用命令速查

| 操作 | 命令 |
| --- | --- |
| 更新软件包索引 | `ruyi update` |
| 阅读未读新闻 | `ruyi news read` |
| 按名称查找软件包 | `ruyi list --name-contains <package-name-substring>`<br />如：`ruyi list --name-contains gnu-upstream` |
| 安装工具链 | `ruyi install  <toolchain-package-name>`<br />如：`ruyi install gnu-upstream` |
| 查看可用的预置配置 | `ruyi list profiles` |
| 创建开发环境 | ruyi venv 命令<br />如：`ruyi venv -t gnu-upstream generic ./ruyi-venv` |
| 激活开发环境（Bash/Zsh） | `ruyi-activate`<br />如：`source ./ruyi-venv/bin/ruyi-activate` |
| 完成开发后退出环境 | `ruyi-deactivate` |

- [Ruyi 命令详解](./commands.md)：提供了每个命令的使用示例，希望能够帮助你更好的理解和使用。

- [**配置与维护**](./maintenance.md)：查询用户配置、环境变量、数据目录、遥测说明，以及 Ruyi 本体的更新、卸载和数据清理。

- **问题排查与求助**（链接待补充）：按操作阶段或错误症状定位问题，并查找进一步求助的渠道。

## 文件与数据目录

Ruyi 本体位于 /usr/local/bin/ruyi 或其他 PATH 包含的目录下，具体取决于安装方式。用户配置和数据通常位于以下位置，\~ 表示当前用户的家目录。

| 内容 | 默认位置 |
| --- | --- |
| 用户配置文件 | \~/\.config/ruyi/config\.toml |
| 用户缓存 | \~/\.cache/ruyi |
| 用户基本数据，包括下载和解包的 Ruyi 软件包 | \~/\.local/share/ruyi |
| 用户状态数据 | \~/\.local/state/ruyi |

Ruyi 支持使用 XDG 环境变量配置这些用户目录。

更多信息可查阅 [Ruyi 包管理器仓库文档](https://github.com/ruyisdk/ruyi)。
