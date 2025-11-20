---
sidebar_position: 1
---

# 使用 Ruyi 编译环境构建（以 Licheepi 4A 为例）

以开源基准测试程序 coremark 为例，展示从 ruyi 包管理器安装到使用 ruyi 包管理器搭建 RISC-V 的编译、模拟环境，完成 coremark 源码本地编译并在 Licheepi 4A 开发板上运行的过程。

## 环境说明

- 硬件环境：Licheepi 4A 开发板（th1520）
- 软件环境：Debian/openEuler for RISC-V

## ruyi 包管理器的安装

1. 参考 [RuyiSDK 包管理器下载安装](https://ruyisdk.org/download#%E4%B8%8B%E8%BD%BD-ruyisdk-%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8) 文档，完成 ruyi 的安装。
   > 本文档中，硬件环境是 RISC-V 设备，下载安装的是 riscv64 架构的 ruyi 版本。

## 使用 ruyi 包管理器部署开发环境：

2. 查看软件仓软件包索引信息

```bash input="1"
$ ruyi list --name-contains gnu-plct --category-is toolchain
```

3. 安装 gnu：ruyi install `<package-name>`

```bash input="2"
# 安装适用于 Licheepi 4A 的编译工具链 gnu-plct-xthead 
$ ruyi install gnu-plct-xthead 
```

4. 查看预置编译环境

```bash input="1"
$ ruyi list profiles
```

5. 由指定的工具链、模拟器配置建立 ruyi 虚拟环境 venv-sipeed。
   > 注意在虚拟环境创建时，需要指定正确的编译器版本和 sysroot 类型。
   > 在不指定版本号时默认使用的是软件源里的最新版本，而不是本地安装的版本。

```bash input="2,5,8,11,14"
# 使用帮助命令了解使用
$ ruyi venv -h

# 创建虚拟环境 venv-sipeed
$ ruyi venv -t gnu-plct-xthead sipeed-lpi4a venv-sipeed 

# 查看编译环境中的工具
$ ls venv-sipeed/bin/ 

# 激活虚拟环境（虚拟环境可以理解成一个容器，实现运行环境隔离的设计，激活后，在 venv-sipeed 这个环境中，使用的就是 gnu-plct-xthead 版本工具链。不创建虚拟环境也可以为 /home/sipeed/.local/share/ruyi/binaries/riscv64/gnu-plct-xthead-2.8.0-ruyi.20240222/bin 配置环境变量，直接使用环境变量指定的gcc编译）
$ . venv-sipeed/bin/ruyi-activate 

# 查看当前虚拟环境下的 gcc 是否可用
«Ruyi venv-sipeed» sipeed@lpi4a1590:~$ riscv64-plctxthead-linux-gnu-gcc --version 
```

6. 下载解压 coremark 源码作为编译对象

```bash input="2,5,8"
# 创建目录，用于管理解压的源码
$ mkdir coremark && cd coremark

# 解压源码
$ ruyi extract coremark

# 查看源码
$ ls -al
```

## 交叉编译 coremark

7. 设置 coremark 源码中的编译配置信息(参考 coremark 仓库自述文档)

```bash input="2"
# 按照coremark项目build指导修改gcc
$ sed -i 's/\bgcc\b/riscv64-plctxthead-linux-gnu-gcc/g' linux64/core_portme.mak
```

8. 执行交叉编译和构建，得到可执行程序 coremark.exe

```bash input="2,4"
# 执行构建
$ make PORT_DIR=linux64 link

$ ls -al    
# 构建成功将新增可执行程序coremark.exe
```

9. 查看 riscv64 可执行程序文件属性信息。

```bash input="1"
$ file coremark.exe
# 命令回显信息显示了文件的架构相关信息
```

## 运行验证

10. 直接运行 riscv64 coremark 可执行程序

```bash input="1"
$ ./coremark.exe
```

