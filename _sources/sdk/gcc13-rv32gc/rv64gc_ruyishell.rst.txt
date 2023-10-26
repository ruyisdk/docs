.. _rv64gc_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: C demo

        //测试用例示例 ruyi.c
        #include "stdio.h"
        int main(){
            printf("Hello RUYISDK\n");
            return 0;
        }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看汇编文件中是否使用RISC-V指令
        build/bin/riscv64-unknown-linux-gnu-gcc -S ruiyi.c
        cat ruyi.s