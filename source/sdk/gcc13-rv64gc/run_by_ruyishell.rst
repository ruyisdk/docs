.. _gcc13-rv64gc:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: 测试用例示例 ruyi.c
        #include "stdio.h"
        int main(){
            printf("Hello RUYISDK\n");
            return 0;
        }

    .. code-tab:: 使用构建的工具编译测试用例，查看汇编文件中是否使用RISC-V指令
        build/bin/riscv64-unknown-linux-gnu-gcc -S ruiyi.c
        cat ruyi.s

.. toctree::
   :maxdepth: 2

   _gcc13-rv64gc/run_by_ruyishell.rst