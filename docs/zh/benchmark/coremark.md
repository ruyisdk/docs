# 运行 Coremark

这里我们从零开始，安装 ruyisdk 并编译运行 Coremark。这里我们介绍使用 ruyi 交叉编译 Coremark 的步骤。

## 安装 ruyi

## 下载工具链

## 交叉编译 Coremark

1. 下载 Coremark

    ``` bash
    git clone https://github.com/eembc/coremark.git
    ```

2. 交叉编译 Coremark

    ``` bash
    cd coremark
    mkdir rv64 && cp simple/* rv64/
    sed -i 's/ee_u32         ee_ptr_int/unsigned long long         ee_ptr_int/g' rv64/core_portme.h
    make compile PORT_DIR=rv64 CC=$riscv64-ruyi-linux-gnu-gcc LD=$riscv64-ruyi-linux-gnu-gcc XCFLAGS="-march=$rv64gc"
    ```

    编译成功会看到 coremark 目录下生成了 coremark.exe，将 coremark.exe 拷贝到我们的 riscv 开发板或者 Qemu 上就可以运行了。
