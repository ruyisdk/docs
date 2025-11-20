---
sidebar_position: 3
---

# dd 方式刷写开发板（以 MilkV Duo 为例）

目前 ruyi 包管理器提供了更为简便的操作系统安装方式，通过以下步骤以及相关引导即可完成安装。

## 环境

本文基于以下环境进行操作：
- 硬件：x86_64 PC
- 软件：Ubuntu 22.04

#### 其他说明

大部分 RISC-V 开发板都支持从 Micro SD 卡或 NVME SSD 启动，通常使用 ``dd`` 工具向磁盘直接写入镜像。 ``ruyi device provision`` 支持了这种写入方式。

尽管 Ruyi 包管理器被设计为不执行需要超级用户权限执行的操作， ``dd`` 写入磁盘往往是需要超级用户权限的。故在尝试使用普通用户调用 ``dd`` 命令刷写镜像失败时，Ruyi 包管理器将尝试调用 ``sudo`` 提权。此时可能需要用户键入密码，键入的密码是直接由 ``sudo`` 读取的，对 Ruyi 包管理器来说是透明的。

磁盘镜像在解包后往往会占用大量的磁盘空间，使用 Ruyi 包管理器刷写镜像前请务必留足磁盘空间；一些厂家提供的镜像在刷写后并不会自动扩展分区来充分利用整块磁盘，可能需要用户自行扩展磁盘分区大小。

## 安装操作系统

在确保已安装 ruyi 包管理器，并且测试 `ruyi -V` 正常输出版本相关信息后，请继续以下操作。

ruyi 包管理器提供了为 RISC-V 开发板安装操作系统的功能，为任一型号的 RISC-V 开发板安装镜像都只需要执行：

```bash input="1"
$ ruyi device provision
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
  3. Canaan Kendryte K230D
  4. Canaan Kendryte K510
  5. Milk-V Duo
  6. Milk-V Duo S
  7. Milk-V Mars
  8. Milk-V Mars CM
  9. Milk-V Meles
  10. Milk-V Pioneer Box
  11. Milk-V Vega
  12. Pine64 Star64
  13. SiFive HiFive Unmatched
  14. Sipeed Lichee Cluster 4A
  15. Sipeed Lichee Console 4A
  16. Sipeed LicheePi 4A
  17. Sipeed Lichee RV
  18. Sipeed LicheeRV Nano
  19. Sipeed Maix-I
  20. Sipeed Tang Mega 138K Pro
  21. StarFive VisionFive
  22. StarFive VisionFive2
  23. WCH CH32V103 EVB
  24. WCH CH32V203 EVB
  25. WCH CH32V208 EVB
  26. WCH CH32V303 EVB
  27. WCH CH32V305 EVB
  28. WCH CH32V307 EVB
  29. WCH CH582F EVB
  30. WCH CH592X EVB

Choice? (1-30) 
```

输出请以实际为准，在示例中 MilkV Duo 所在序号为 5。

```
Choice? (1-30) 5

The device has the following variants. Please choose the one corresponding to your hardware at hand:

  1. Milk-V Duo (64M RAM)
  2. Milk-V Duo (256M RAM)

Choice? (1-2)
```

注意 MilkV Duo 具有两个版本，分别使用了 CV1800B 和 SG2002 两种 SOC，其中 SG2002 的版本还被称为 Duo 256M。

这里作为示例选择 64M RAM 的版本，也就是 CV1800B SOC 的版本。

```
Choice? (1-2) 1

The following system configurations are supported by the device variant you have chosen. Please pick the one you want to put on the device:

  1. Milk-V Duo Official Arduino SDK (64M RAM, SD card)
  2. Milk-V Duo Official buildroot SDK (64M RAM, SD card)
  3. Milk-V Duo Official buildroot SDK (64M RAM, Lite, SD card)
```

此处根据需要选择，这里作为示例选择 ``2``。

```
Choice? (1-3) 2

We are about to download and install the following packages for your device:

 * board-image/buildroot-sdk-milkv-duo

Proceed? (y/N)
```

Ruyi 将提示具体会被下载的 board-image 分区下的 Ruyi 软件包，并且询问是否继续，填写 ``y`` 即可。

在下载和解包完成后会提示键入磁盘的路径：

```
For initializing this target device, you should plug into this host system the
device's storage (e.g. SD card or NVMe SSD), or a removable disk to be
reformatted as a live medium, and note down the corresponding device file
path(s), e.g. /dev/sdX, /dev/nvmeXnY for whole disks; /dev/sdXY, /dev/nvmeXnYpZ
for partitions. You may consult e.g. sudo blkid output for the
information you will need later.

Please give the path for the target's whole disk:
```

此时可以接入希望刷写的磁盘设备，输入设备的绝对路径，等待写入完成。

