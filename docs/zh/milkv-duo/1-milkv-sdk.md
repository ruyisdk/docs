# Milk-V Duo

## 厂商SDK

参考链接：

- 产品介绍：https://milkv.io/zh/docs/duo/getting-started/duo
- 官方镜像和SDK：https://milkv.io/zh/docs/duo/getting-started/boot

![Document Pictures](https://milkv.io/docs/duo/duo-v1.2.png)

Milk-V Duo (即 milkv duo 64M) 是一款基于 CV1800B 芯片的超紧凑型嵌入式开发平台。 它可以运行 Linux 和 RTOS，为专业人士、工业 ODM、AIoT 爱好者、DIY 爱好者和创作者提供可靠、低成本、高性能的平台。

CV1800B 是一款高性能、低功耗芯片，适用于住宅消费监控 IP 摄像机、家庭智能等众多产品，集成 H.264/H.265 视频压缩编码器和 ISP；支持数字宽动态、3D降噪、去雾、镜头畸变校正等图像增强和校正算法，为客户提供专业级的视频图像质量。

该芯片集成了自主研发的智能参考解决方案（人体检测、区域检测、运动检测），内置 DDR 以及完整的外围设备和外围设备，为支持客户产品开发和量产提供了高度集成且简单的解决方案。

### SDK资源

#### 镜像

##### milkv duo 64M

- V1 版本镜像
  镜像地址: [https://github.com/milkv-duo/duo-buildroot-sdk/releases/](https://github.com/milkv-duo/duo-buildroot-sdk/releases/)
- Milk-V Duo 官方 buildroot SDK V1
  duo-buildroot-sdk: [https://github.com/milkv-duo/duo-buildroot-sdk](https://github.com/milkv-duo/duo-buildroot-sdk)

##### milkv duo Duo256M & DuoS

- V2 版本镜像
  V2 版本支持 Duo256M 和 DuoS 的 ARM 核的镜像。
  镜像地址：[https://github.com/milkv-duo/duo-buildroot-sdk-v2/releases/](https://github.com/milkv-duo/duo-buildroot-sdk-v2/releases/)
- Milk-V Duo 官方 buildroot SDK V2
  duo-buildroot-sdk-v2: [https://github.com/milkv-duo/duo-buildroot-sdk-v2](https://github.com/milkv-duo/duo-buildroot-sdk-v2)

#### 应用示例

- Milk-V Duo 官方 C/C++ 应用开发参考示例
  duo-examples: [https://github.com/milkv-duo/duo-examples](https://github.com/milkv-duo/duo-examples)
- Milk-V Duo 官方 TDL-SDK TPU AI 应用开发参考示例
  duo-tdl-examples: [https://github.com/milkv-duo/duo-tdl-examples](https://github.com/milkv-duo/duo-tdl-examples)

### RV设备端：烧录镜像

1. 格式化SD卡，准备烧录镜像

   ```bash
   #提前插入sd卡，先格式化并删除已有的分区
   #查看sd卡设备节点（我环境下一般是/dev/sdb）
   sudo df -h

   #umount：
   sudo umount /dev/sdb1
   sudo umount /dev/sdb2

   # 删除sd卡所有分区（/dev/sdb1 和 /dev/sdb2）
   sudo wipefs --all /dev/sdb

   #格式化：
   sudo mkfs.ext4 /dev/sdb


   ```
2. dd烧录系统到sd卡

   ```bash

   #烧录镜像(img按需置换成所需的文件)
   sudo dd if=~/Downloads/milkv-duo-sd-v1.1.4.img  of=/dev/sdb  bs=1M status=progress 

   # 烧录完成后，请将sd卡插入到 milkv duo sd卡卡槽中，将 milkv duo 设备通过 usb-typec 线通电，通电后将自动启动，启动成功后执行如下操作连接 milkv duo 设备进行远程操作
   #ssh-keygen -f "~/.ssh/known_hosts" -R "192.168.42.1"
   ssh root@192.168.42.1  
   root 密码: milkv
   ```

### PC开发侧(host)：

参考官方文档：https://github.com/milkv-duo/duo-examples/blob/main/README-zh.md

1. 开发环境准备

   * 开发环境说明：使用本地的 Ubuntu 系统，推荐 `Ubuntu 22.04 LTS` (也可以使用虚拟机中的 Ubuntu 系统、Windows 中 WSL 安装的 Ubuntu、基于 Docker 的 Ubuntu 系统)
   * 安装编译依赖的工具 ：

     ```
     sudo apt-get install wget git make
     ```
2. 下载实例代码并利用代码中的脚本执行开发环境检测

   * 获取 Examples

     ```
     git clone https://github.com/milkv-duo/duo-examples.git
     ```
   * 加载编译环境

     ```
     cd duo-examples
     source envsetup.sh
     ```

     第一次加载会自动下载所需的编译工具链，下载后的目录名为 `host-tools`，下次再加载编译环境时，会检测该目录，如果已存在则不会再次下载。
     加载编译环境时需要按提示输入所需编译目标：

     ```
     Select Product:
     1. Duo (CV1800B)
     2. Duo256M (SG2002) or DuoS (SG2000)
     ```

     如果目标板是 Duo 则选择 `1`，如果目标板是 Duo256M 或者 DuoS 则选择 `2`。

     由于 Duo256M 和 DuoS 支持 RISCV 和 ARM 两种架构，还需要按提示继续选择：

     ```
     Select Arch:
     1. ARM64
     2. RISCV64
     Which would you like:
     ```

     如果测试程序需要在 ARM 系统中运行，选择 `1`，如果是 RISCV 系统则选择 `2`。
     注意：

     - 建议查看 envsetup.sh 了解它做了什么：
       - 脚本检测host是否安装了合适的编译器，没有则会自动下载host-tools(其实就是[gcc](https://github.com/milkv-duo/host-tools/tree/master/gcc)) 到 duo-examples 目录下；
       - 脚本会通过Export设置环境变量 `$(TOOLCHAIN_PREFIX)`、`$(CFLAGS)`和 `$(LDFLAGS)` 等;当前会话窗口后续都能访问该环境变量，为了了解环境变量信息可以执行下面的脚本，或者直接在 envsetup.sh 最后加上下面的命令：

         ```bash
         echo "CHIP: "$CHIP
         echo "TOOLCHAIN_PREFIX: "$TOOLCHAIN_PREFIX
         echo "CC: "$CC
         echo "CFLAGS: "$CFLAGS
         echo "LDFLAGS: "$LDFLAGS
         ```

         输出的环境变量信息如下：

         ```bash
            CHIP: CV180X
            TOOLCHAIN_PREFIX: ~/milkv/duo/duo-examples/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-
            CC: ~/milkv/duo/duo-examples/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-gcc
            CFLAGS: -mcpu=c906fdv -march=rv64imafdcv0p7xthead -mcmodel=medany -mabi=lp64d -O3 -DNDEBUG -I~/milkv/duo/duo-examples/include/system
            LDFLAGS: -D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64 -L~/milkv/duo/duo-examples/libs/system/musl_riscv64
         ```
     - **请注意envsetup.sh需要用source执行，这样保证了脚本执行完毕后，设置的环境变量在当前 shell 中一直生效。因此同一个终端中，只需要加载一次编译环境即可。**
     - 当新建一个终端时，环境变量不再有效，需要注意 envsetup.sh 中设置的编译器等环境变量失效，需要再次执行，或者直接设置环境变量。
3. 编译测试
   以 `hello-world`为例，进入该例子目录直接执行 make 即可：

   ```bash
   #make构建
   cd hello-world
   make

   #查看编译后的文件
   file helloworld

   #执行，预期会失败，因为编译目标架构为riscv64，host本地是x86_64
   ./helloworld
   #bash: ./helloworld: cannot execute binary file: Exec format error

   ```
4. 目标程序传输到目标设备
   编译成功后将生成的 `helloworld` 可执行程序通过网口或者 USB-NCM 网络等方式传送到 Duo 设备中，比如[默认固件](https://github.com/milkv-duo/duo-buildroot-sdk/releases)支持的 USB-NCM 方式，Duo 的 IP 为 `192.168.42.1`，用户名是 `root`，密码是 `milkv`。

   ```
   $ scp helloworld root@192.168.42.1:/root/
   ```
5. 执行目标程序
   发送成功后，在 ssh 或者串口登陆的终端中运行 `./helloworld`，会打印 `Hello, World!`

   ```bash
   #sd卡插入milkv duo
   #milkv duo 通过 type-c+usb 连接线接 host设备（USB口接host）；

   #连接远程设备
   #ssh-keygen -f "~/.ssh/known_hosts" -R "192.168.42.1"
   ssh root@192.168.42.1

   [root@milkv]~# ./helloworld
   Hello, World!
   ```

  **至此，我们的编译开发环境就可以正常使用了**


其它参考：https://gitee.com/yunxiangluo/milkv-duo/blob/master/README.md
