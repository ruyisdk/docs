---
sidebar_position: 1
---

# 功能概览

ruyi 包管理器主要提供以下功能。

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
| `ruyi list --name-contains`                                                                  | 列出可用软件包。                  |                                     |
| `ruyi list --verbose --name-contains`                                                        | 列出可用软件包的详细信息。               |                                     |
| `ruyi list profiles`                                                                         | 查看预置的虚拟环境配置。                |                     |
| `ruyi install gnu-upstream`                                                                  | 安装最新的 GNU 上游工具链。            | 默认安装最新版本的 gnu-upstream。             |
| `ruyi install 'gnu-upstream(0.20231118.0)'`                                                  | 安装指定版本的 GNU 上游工具链。          | 通过指定版本号安装历史版本。                      |
| `ruyi install 'gnu-upstream(==0.20231118.0)'`                                                | 安装特定版本的 GNU 上游工具链。          | 版本匹配格式应为 `<op><ver>`。               |
| `ruyi install --reinstall gnu-upstream`                                                      | 重新安装 GNU 上游工具链。             |                                     |
| `ruyi uninstall gnu-upstream`                                                                | 卸载已安装的软件包。                   | 也可使用 `ruyi remove` 或 `ruyi rm`。     |
| `ruyi extract ruyisdk-demo`                                                                  | 下载并解包ruyisdk-demo 源码包。      | 默认解包到以软件包名、版本命名的独立目录下。                            |
| `ruyi venv --toolchain gnu-upstream --emulator qemu-user-riscv-upstream generic ./ruyi_venv` | 在指定目录建立包含工具链和模拟器的虚拟环境。      | 使用预置的 generic 配置。                   |
| `ruyi version`                                                                               | 查看 ruyi 包管理器的版本。              |                                     |
| `ruyi self uninstall`                                                                        | 卸载 ruyi 包管理器。               | 命令会询问确认操作。                          |
| `ruyi self uninstall -y`                                                                     | 无需确认直接卸载 ruyi 包管理器。         | 无需确认直接执行。                           |
| `ruyi self uninstall --purge`                                                                | 彻底卸载 ruyi 包管理器，包括缓存和安装的软件包。 | 包括缓存和已安装的软件包。                       |
| `ruyi self uninstall --purge -y`                                                             | 无需确认彻底卸载 ruyi 包管理器。         | 无需确认直接执行。                           |
| `ruyi self clean`                                                                            | 清除数据目录。                           | 可以通过参数指定清除哪些目录               |
| `ruyi device provision`                                                                      | 下载所需系统镜像，并为设备安装系统。          | 按照引导进行系统安装。                         |

## 数据目录

+ ruyi 本体 ``/usr/local/bin/ruyi`` 或其他 ``PATH`` 包含的目录下
+ 用户配置文件 ``~/.config/ruyi/config.toml``
+ 用户缓存 ``~/.cache/ruyi``
+ 用户基本数据，包括下载和解包的 ruyi 软件包 ``~/.local/share/ruyi``
+ 用户状态数据 ``~/.local/state/ruyi``

Ruyi 支持使用 XDG 环境变量配置这些目录。

## 更多

可以查阅 ruyi 包管理器[仓库文档](https://github.com/ruyisdk/ruyi)（目前仅支持英文）。

