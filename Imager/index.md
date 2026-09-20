---
sidebar_position: 1
title: Ruyi Imager
description: 使用 Ruyi Imager 为 RISC-V 开发板安装操作系统。
---

Ruyi Imager 是面向 RISC-V 开发板的图形化镜像刷写工具。

## 安装

根据当前操作系统和处理器架构，从 [GitHub Releases](https://github.com/Glavo/ruyi-imager/releases/latest) 下载对应的安装包。

| 操作系统 | 处理器架构               | 安装包              |
|----------|--------------------------|---------------------|
| Windows  | x86_64                   | `.exe` 安装程序     |
| Linux    | x86_64、aarch64、riscv64 | `.deb` 或 `.tar.gz` |
| macOS    | aarch64、x86_64          | `.tar.gz`           |

Windows 用户可运行 `.exe` 安装程序；Debian、Ubuntu 用户可安装 `.deb` 包。

## 刷写镜像

1. 选择开发板和操作系统，或打开本地镜像文件。
2. 连接存储卡或开发板，选择目标设备。连接方式请参考开发板文档。
3. 确认所选镜像和设备，开始刷写。完成后，按开发板文档启动系统。

:::warning
刷写会覆盖目标设备中的数据。请提前备份并确认目标设备，刷写完成前不要断开连接。
:::

## 相关资源

- [项目源码与问题反馈](https://github.com/Glavo/ruyi-imager)
- [下载页](https://github.com/Glavo/ruyi-imager/releases/latest)
