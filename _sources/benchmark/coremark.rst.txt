.. _coremark:

运行Coremark
################################

这里我们从零开始，安装ruyisdk并编译运行Coremark。ruyisdk包含ruyibuild和ruyishell两个工具，ruyibuild可用于下>载工具链源码，从源码构建工具链。如果我们想要开箱即用，那么可以选择ruyishell。这里我们也是介绍使用ruyishell交叉编译Coremark的步骤。

安装ruyishell
============================

ruyishell是一个辅助开发工具，不需要手动搭建复杂的环境和下载代码，只需要几条命名，就可以直接获取所需要的构建>好的软件包。

假设我们的shell是bash（大多数情况可能是这样），那么需要先安装zsh。

1. 安装zsh

.. code-block:: bash

    sudo apt install zsh


2. 下载ruyishell仓库

.. code-block:: bash

    git clone https://github.com/ruyisdk/ruyishell.git

3. 运行install.sh安装ruyishell

安装成功显示如下：

.. image:: ./images/ruyishell_install.png

（如果在安装依赖时脚本就退出了，没有成功安装的话，可以先执行一下sudo apt update命令）

下载工具链
============================

Ruyi提供多种编译环境，可以在repo.xml中查看支持的SDK环境，以及对应的SDKid。这里我们选择"基于sg2042的 riscv64gc gcc 开发环境"，它的sdkid是1。我们执行下面的命令来安装：

.. code-block:: bash

    source ~/.zshrc
    ruyi on
    ruyi update
    ruyi install --id=1
    ruyi switch --id=1
    source ~/.zshrc

这样我们就通过ruyi安装好了riscv64gc的SDK环境。测试一下是否成功：

.. code-block:: bash

   riscv64-ruyi-linux-gnu-gcc -v


交叉编译Coremark
============================

1. 下载Coremark

.. code-block:: bash

    git clone https://github.com/eembc/coremark.git

2. 交叉编译Coremark

.. code-block:: bash

    cd coremark
    mkdir rv64 && cp simple/* rv64/
    sed -i 's/ee_u32         ee_ptr_int/unsigned long long         ee_ptr_int/g' rv64/core_portme.h
    make compile PORT_DIR=rv64 CC=$riscv64-ruyi-linux-gnu-gcc LD=$riscv64-ruyi-linux-gnu-gcc XCFLAGS="-march=$rv64gc"

编译成功会看到coremark目录下生成了coremark.exe，将coremark.exe拷贝到我们的riscv开发板或者Qemu上就可以运行了。
