## 整体说明

RUYISDK工具链是基于`riscv-gnu-toolchain`进行开发的多版本支持RISC-V工具链，支持RISC-V Profiles等最新RISC-V特性，包含gcc/llvm编译器、binutils二进制处理工具集，支持newlib/glibc/musl等多种C语言库。包含多个gcc版本支持，支持RVV（向量扩展）、XThead系列自定义扩展、P扩展（SIMD操作）等丰富的指令集。提供rv64ilp32特性支持，通过松弛扩展寻址技术实现32位软件在64位硬件上的高效运行。Newlib生成的elf工具链适用于嵌入式环境，Glibc生成的linux工具链适用于操作系统等复杂依赖场景。

**_下载方式_** (参考RUYI-DOCS README)

工具链支持 ​rv32/64 两种基础指令集架构，包含RISC-V多个扩展指令集支持,全部支持的指令可以通过`-march=help`选项列出:

https://godbolt.org/z/en41ncGde

### riscv-gcc使用说明

riscv-gcc是工具链的默认编译器，支持c,c++,fortan,ada等多种编程语言，最新发布版本为gcc15.1.0。工具链中包含32/64位gcc工具，这里以`riscv64-unknown-linux-gnu-gcc`为例简单介绍riscv-gcc的使用方法及常见选项参数。

1. 直接使用gcc命令构建生成可执行文件

```
riscv64-unknown-linux-gnu-gcc add.c -o add.elf
```

这里`-o`用于指定生成的文件名称

2. 使用特定RISC-V扩展指令构建二进制文件, 在`-march`选项中添加指定扩展,用下划线进行分割

```
riscv64-unknown-linux-gnu-gcc  add.c -march=rv64gc_zba_zbb -O1 -o add.elf
```

这里`-O1`为使用的gcc优化级别，根据开启的优化选项分为`-O1 -O2 -O3`三级，`-O1`会开启内联优化，将内联函数转化生成对应的指令，保证zba,zbb中的位操作指令可正确生成，达到优化程序的效果，参考：https://godbolt.org/z/aWzxah9Mb

可使用Profiles作为`-march`输入,Profiles需要小写，可以后接其他扩展：https://godbolt.org/z/jcra5vc8G

```
riscv64-unknown-linux-gnu-gcc  add.c -march=rva22u64
```

3. 仅编译，生成`.s`汇编文件,使用`-S`作为编译参数

```
riscv64-unknown-linux-gnu-gcc add.c -S
```

执行命令后会生成add.s作为add.c的RISC-V指令汇编文件

4. 开启自动向量化，使用`-march=rv64gcv -O3`作为编译参数

```
riscv64-unknown-linux-gnu-gcc mul.c -S -march=rv64gcv -O3
```

https://godbolt.org/z/vWsK73K8d

riscv-gcc可以使用`-mrvv-max-lmul`选项指定允许的lmul的最大值，防止寄存器压力过大导致性能下降 https://godbolt.org/z/nj4KfYjqT

riscv-gcc还可以使用`-mrvv-vector-bits`选项开启或关闭RVV的可变向量长度特性（默认启用） https://godbolt.org/z/WKGh6bT3h

5. 可以通过`-mabi`选项指定启用的ABI，通常使用的ABI包括`-mabi=lp64d/lp64/ilp32d/ilp32/ilp32e`,其主要区别在控制启用的寄存器组，ilp32e使用0\~15号整形寄存器，常用于嵌入式环境设备，lp64/ilp32使用0\~31号整形寄存器，用于简单计算场合，lp64d/ilp32d除0\~31号整形寄存器外还使用了0\~31号浮点寄存器，可用于高精度科学计算，当ABI不包含浮点寄存器时，编译器会使用软浮点运算通过整形寄存器进行模拟(有可能的精度损失风险)https://godbolt.org/z/nGE3rKzMn

### riscv-binuitls使用说明

riscv-binuitls包含RISC-V汇编器，链接器，调试器工具集合，下面分别介绍其使用方法

#### riscv-as使用说明

汇编器可以识别riscv汇编指令，并将其转化为对应的二进制机器码，这里以`riscv64-unknown-linux-gnu-as`为例

```
riscv64-unknown-linux-gnu-as add.s -o add.elf
```

通常汇编器需要搭配反汇编器`riscv64-unknown-linux-gnu-objdump`工具，来分析检查对应的指令是否正确生成

```
riscv64-unknown-linux-gnu-objdump add.elf -d > add.asm
```

对于二进制文件也可以使用`riscv64-unknown-linux-gnu-readelf`工具查看其信息

```
riscv64-unknown-linux-gnu-readelf -h  -A add.elf
```

#### riscv-gdb使用说明

调试器通常用于处理程序异常，帮助开发者分析程序执行情况，这里以`riscv64-unknown-linux-gnu-gdb`在qemu-riscv64模拟器上进行远程调试为例

首先在qemu模拟器上启动需要调试的程序，注意构建程序时使用`-g`选项开启调试, qemu `-g`后接调试启用的端口(通常使用1234)

```
qemu-riscv64 -g 1234 add.elf
```

启用`riscv64-unknown-linux-gnu-gdb`连接到qemu中运行的程序

```
riscv64-unknown-linux-gnu-gdb add.elf
(gdb) target remote:1234
(gdb) file add.elf 
```

对程序设置断点进行调试操作，观察输出，常见调试命令如下

| 命令 | 功能说明 | 示例 |
|----|------|----|
| file | 加载调试文件 | file add.elf |
| break | 设置断点 | break main (b main) |
| stepi | 单步执行 | stepi (s) |
| info registers | 查看寄存器状态 | info registers v5 (i r v5) |
| backtrace | 查看调用栈 | backtrace full (bt full) |
| exit | 退出调试 | exit (q) |

#### 模拟器

工具链包含qemu,spike两种模拟器，支持运行32/64位riscv程序,可使用--isa=指定模拟器使能的扩展

```
qemu-riscv64 add.elf

spike --isa=rv64gc pk add.elf
```
