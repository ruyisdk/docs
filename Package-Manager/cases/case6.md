---
sidebar_position: 6
---

# 使用 QEMU 和 LLVM

本案例基于 [为 MilkV Duo 构建 Coremark](case2.md)

首先安装必要的依赖：
```bash input="1"
$ ruyi install llvm-upstream gnu-plct qemu-user-riscv-upstream
```

创建虚拟环境并激活：
```bash input="1-2"
$ ruyi venv -t llvm-upstream --sysroot-from gnu-plct -e qemu-user-riscv-upstream generic venv
$ . venv/bin/ruyi-activate
```

解包出 coremark 并编译：
```bash input="1-3,5-6"
«Ruyi milkv-venv» $ mkdir coremark
«Ruyi milkv-venv» $ cd coremark
«Ruyi milkv-venv» $ ruyi extract coremark

«Ruyi milkv-venv» $ sed -i 's/\bgcc\b/riscv64-unknown-linux-gnu-gcc/g' linux64/core_portme.mak
«Ruyi milkv-venv» $ make PORT_DIR=linux64 link
```

这时通过 qemu 运行 coremark：
```bash input="1"
$ ruyi-qemu coremark.exe
2K performance run parameters for coremark.
CoreMark Size    : 666
Total ticks      : 19567
Total time (secs): 19.567000
Iterations/Sec   : 10221.290949
Iterations       : 200000
Compiler version : GCCClang 17.0.5
Compiler flags   : -O2   -lrt
Memory location  : Please put data memory location here
                        (e.g. code in flash, data on heap etc)
seedcrc          : 0xe9f5
[0]crclist       : 0xe714
[0]crcmatrix     : 0x1fd7
[0]crcstate      : 0x8e3a
[0]crcfinal      : 0x4983
Correct operation validated. See readme.txt for run and reporting rules.
CoreMark 1.0 : 10221.290949 / GCCClang 17.0.5 -O2   -lrt / Heap
```
