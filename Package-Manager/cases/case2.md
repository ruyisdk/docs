---
sidebar_position: 2
---
# 使用厂商发布的二进制工具链构建（以 MilkV Duo 为例）

本文使用 Milkv-Duo 编译环境，构建 coremark 。

首先进入编译环境：

```bash input="2,4,6"
# 安装编译工具链 gnu-milkv-milkv-duo-musl-bin
$ ruyi install gnu-milkv-milkv-duo-musl-bin
# 以 generic profile 创建虚拟环境 milkv-venv
$ ruyi venv -t gnu-milkv-milkv-duo-musl-bin generic milkv-venv
# 激活虚拟环境
$ . milkv-venv/bin/ruyi-activate
«Ruyi milkv-venv» $
```

coremark 源码可以直接从 Ruyi 软件仓库中下载：

```bash input="1-3"
«Ruyi milkv-venv» $ mkdir coremark
«Ruyi milkv-venv» $ cd coremark
«Ruyi milkv-venv» $ ruyi extract coremark
info: downloading https://mirror.iscas.ac.cn/ruyisdk/dist/coremark-1.01.tar.gz to /home/myon/.cache/ruyi/distfiles/coremark-1.01.tar.gz
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  391k  100  391k    0     0  1400k      0 --:--:-- --:--:-- --:--:-- 1404k
info: extracting coremark-1.01.tar.gz for package coremark-1.0.1
info: package coremark-1.0.1 extracted to current working directory
```

这个操作将从 Ruyi 软件源中下载 coremark 源码并解包到**当前目录**。

由于使用的工具链为 ``gnu-milkv-milkv-duo-bin``，查看 bin 文件夹，需要编辑构建脚本：

```bash input="1"
«Ruyi milkv-venv» $ sed -i 's/\bgcc\b/riscv64-unknown-linux-musl-gcc/g' linux64/core_portme.mak
```

构建 coremark：

```bash input="1,4"
«Ruyi milkv-venv» $ make PORT_DIR=linux64 LFLAGS_END=-march=rv64gcv0p7xthead link
riscv64-unknown-linux-musl-gcc -O2 -Ilinux64 -I. -DFLAGS_STR=\""-O2   -march=rv64gcv0p7xthead"\" -DITERATIONS=0  core_list_join.c core_main.c core_matrix.c core_state.c core_util.c linux64/core_portme.c -o ./coremark.exe -march=rv64gcv0p7xthead
Link performed along with compile
«Ruyi milkv-venv» $ file coremark.exe
coremark.exe: ELF 64-bit LSB executable, UCB RISC-V, RVC, double-float ABI, version 1 (SYSV), dynamically linked, interpreter /lib/ld-musl-riscv64v0p7_xthead.so.1, with debug_info, not stripped
```

可以看到成功构建 RISC-V 架构的二进制。注意这整个过程如果在 riscv64 环境则不是交叉编译。

退出虚拟环境

```bash input="1"
«Ruyi milkv-venv» $ ruyi-deactivate
$
```

## 在最新的 Milkv Duo 镜像上运行

传送 coremark 二进制的 Milkv Duo， Milkv Duo 的 IP 地址请按实际情况更改。

```bash input="1"
$ scp -O ./coremark.exe root@192.168.42.1:~
```

在 Milkv Duo 上运行

```bash input="1"
[root@milkv-duo]~# ./coremark.exe
2K performance run parameters for coremark.
CoreMark Size    : 666
Total ticks      : 14911
Total time (secs): 14.911000
Iterations/Sec   : 2011.937496
Iterations       : 30000
Compiler version : GCC13.1.0
Compiler flags   : -O2   -static
Memory location  : Please put data memory location here
                        (e.g. code in flash, data on heap etc)
seedcrc          : 0xe9f5
[0]crclist       : 0xe714
[0]crcmatrix     : 0x1fd7
[0]crcstate      : 0x8e3a
[0]crcfinal      : 0x5275
Correct operation validated. See readme.txt for run and reporting rules.
CoreMark 1.0 : 2011.937496 / GCC13.1.0 -O2   -static / Heap
```
