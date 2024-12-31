# 为 lizhipai 4A 刷写操作系统

目前 ruyi 包管理器提供了更为简便的操作系统安装方式，通过以下步骤以及相关引导即可完成安装。

## 环境

本文基于以下环境进行操作：
- 硬件：x86_64 PC
- 软件：Ubuntu 22.04

#### 其他说明

- 在任意 Linux 系统下皆可完成下文操作

连接方式，以下任选：
1. RISC-V 开发板以 USB 连接线接入 PC（若可以连接，推荐该方式）
2. 将 RISC-V 开发板 SD 卡通过读卡器接入 PC

## 安装操作系统

在确保已安装 ruyi 包管理器，并且测试 `ruyi -V` 正常输出版本相关信息后，请继续以下操作。

ruyi 包管理器提供了为 RISC-V 开发板安装操作系统的功能，为任一型号的 RISC-V 开发板安装镜像都只需要执行：

```bash
ruyi device provision
```

该命令将会返回工具目前所支持的 RISC-V 开发板，选择开发板后将返回所有支持指定开发板的操作系统：

```
RuyiSDK Device Provisioning Wizard

This is a wizard intended to help you install a system on your device for your
development pleasure, all with ease.

You will be asked some questions that help RuyiSDK understand your device and
your intended configuration, then packages will be downloaded and flashed onto
the device's storage, that you should somehow make available on this host
system beforehand.

Note that, as Ruyi does not run as root, but raw disk access is most likely
required to flash images, you should arrange to allow your user account sudo
access to necessary commands such as dd. Flashing will fail if the sudo
configuration does not allow so.

Continue? (y/N) y

The following devices are currently supported by the wizard. Please pick your device:

1. Allwinner Nezha D1
2. Canaan Kendryte K230
3. Milk-V Duo
4. Milk-V Pioneer Box
5. SiFive HiFive Unmatched
6. Sipeed Lichee RV
7. Sipeed LicheePi 4A
8. StarFive VisionFive
9. StarFive VisionFive2

Choice? (1-9)

```

以上，以 Sipeed LicheePi 4A 为例，需要为其安装镜像，只需要输入对应的序号：`7`


```
Choice? (1-9) 7

The device has the following variants. Please choose the one corresponding to your hardware at hand:

  1. Sipeed LicheePi 4A (8G RAM)
  2. Sipeed LicheePi 4A (16G RAM)

Choice? (1-2) 2

The following system configurations are supported by the device variant you have chosen. Please pick the one you want 
to put on the device:

  1. openEuler RISC-V (headless) for Sipeed LicheePi 4A (16G RAM)
  2. openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (16G RAM)
  3. RevyOS for Sipeed LicheePi 4A (16G RAM)

Choice? (1-3) 3

We are about to download and install the following packages for your device:

 * board-image/revyos-sipeed-lpi4a
 * board-image/uboot-revyos-sipeed-lpi4a-16g

Proceed? (y/N) 

```

您只需要按照引导提示一步步执行即可。

## 其他说明

刷写工具根据板卡的不同依赖 ``dd`` 和 ``fastboot`` 命令。

在使用普通用户调用 ``dd`` 命令刷写镜像失败时，ruyi 将尝试调用 ``sudo`` 提权。

在使用 ``fastboot`` 工具刷写镜像时， ruyi 则只会使用当前普通用户，故需要用户自行配置 udev 规则。这里提供示例规则仅供参考：

```
SUBSYSTEM=="usb", ATTR{idVendor}="2345", ATTR{idProduct}=="7654", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}="1234", ATTR{idProduct}=="8888", MODE="0666", GROUP="plugdev"
```

需要注意的是一些镜像的解包需要占用大量的磁盘空间，使用 ruyi 工具刷写镜像前请务必留足磁盘空间；
一些厂家提供的镜像在刷写后并不会自动扩展分区来充分利用整块磁盘，而需要用户自行扩展磁盘分区大小。

相关的系统刷写问题可以访问对应开发板官网以获取针对性的帮助。
