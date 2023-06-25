.. _rv64gck_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: c demo

        // 测试用例示例 crypto.c
        #include <stdint-gcc.h>

        int64_t foo1(int64_t rs1, int64_t rs2)
        {
            return __builtin_riscv_aes64ds(rs1,rs2);
        }

        int64_t foo2(int64_t rs1, int64_t rs2)
        {
            return __builtin_riscv_aes64ks1i(rs1,rs2);
        }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看汇编文件中是否使用K扩展指令aes64ds,aes64ks1i
        build/bin/riscv64-unknown-linux-gnu-gcc -S crypto.c
        cat crypto.s