.. _rv64gcb_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: c demo

        //测试用例示例 bitmanip.c
        unsigned long long foo1(unsigned long long rs1, unsigned long long rs2)
        {
            return rs1 & ~rs2;
        }

        unsigned long long foo2(unsigned long long rs1, unsigned long long rs2)
        {
            return rs1 | ~rs2;
        }

        unsigned long long foo3(unsigned long long rs1, unsigned long long rs2)
        {
        return rs1 ^ ~rs2;
        }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看汇编文件中是否使用Bitmanip扩展指令andn，orn,xnor
        build/bin/riscv64-unknown-linux-gnu-gcc -S bitmanip.c
        cat bitmanip.s