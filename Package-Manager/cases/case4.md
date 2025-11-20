---
sidebar_position: 4
---

# 以 fastboot 方式刷写开发板（以 LicheePi 4A 为例）

目前 ruyi 包管理器提供了更为简便的操作系统安装方式，通过以下步骤以及相关引导即可完成安装。

## 环境

本文基于以下环境进行操作：

- 硬件：x86_64 PC
- 软件：Ubuntu 22.04

## 将设备连接到上位机

LicheePi 4A 支持从板载 eMMC 或 SD 卡启动，因而有两种不同的刷写方式：

1. 将开发板以 USB 连接线接入上位机 PC，以 `fastboot` 方式刷写
2. 将 SD 卡通过读卡器接入上位机 PC，以 `dd` 方式刷写，尔后装入开发板

本例使用第一种方式，即 `fastboot`。该刷写方式同样适用于向 MilkV Meles 等设备的板载 eMMC 刷写镜像。

:::info 关于 `fastboot` 的系统级别配置

`ruyi` 只会在命令执行失败后再询问用户是否尝试调用 `sudo` 提权。但 `fastboot flash`
在看不到设备的情况下，会一直等待，而不会退出。因此，`ruyi` 在准备使用 `fastboot` 刷写设备之前，会请用户自行确认在
`fastboot devices` 能够看到设备：

```text
Some flashing steps require the use of fastboot, in which case you should
ensure the target device is showing up in fastboot devices output.
Please confirm it yourself before the flashing begins.

Is the device identified by fastboot now? (y/N)
```

您需要在看到此提示时，停下来，在另一个终端窗口进行 `fastboot devices` 的检查，通过之后再在此处回答
`y`，否则在实际执行刷写动作时便会卡住。

由于不同用户所用的发行版、具体系统配置多种多样，且 `fastboot` 所需的系统配置（udev 规则）是相当底层的细节，`ruyi` 无法替用户做这些配置，您需要自行操作。出于安全性考虑，我们也不推荐以 `root` 用户身份运行 `ruyi`。

以下的配置仅供参考；如该配置需要微调后才能用于您的发行版，就请您这么做。请查阅您发行版的文档以了解相关细节。
:::

将 LicheePi 4A 使用 USB 线与 PC 连接，以便后续通过 `fastboot` 刷写。如果只希望使用普通用户完成刷写过程，可能需要配置 udev 规则。这里针对 Debian 及其衍生发行版如 Ubuntu 等，提供示例规则，仅供参考：

```udev
SUBSYSTEM=="usb", ATTR{idVendor}="2345", ATTR{idProduct}=="7654", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}="1234", ATTR{idProduct}=="8888", MODE="0666", GROUP="plugdev"
```

在配置之后，请检查 `fastboot` 是否能正常看到设备了：执行 `fastboot devices`，检查是否输出了形如
`0123456789abcdef fastboot` 的行，如有，则配置成功。

## 进行刷写

在确保已安装 ruyi 包管理器，并且测试 `ruyi -V` 正常输出版本相关信息后，请继续以下操作。

ruyi 包管理器提供了为 RISC-V 开发板安装操作系统的功能，为任一型号的 RISC-V 开发板安装镜像都只需要执行：

```bash input="1"
$ ruyi device provision
```

该命令将会返回工具目前所支持的 RISC-V 开发板，选择开发板后将返回所有支持指定开发板的操作系统：

```text
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


```text
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

