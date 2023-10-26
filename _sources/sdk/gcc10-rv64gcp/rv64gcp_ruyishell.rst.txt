.. _rv64gcp_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: c demo

        #include <riscv-dsp.h>

        int64_t test_kmada32(int64_t t, uint64_t a, uint64_t b) {
            return __rv__kmada32 (t, a, b);
        }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看汇编文件中是否使用P扩展指令kmada32
        build/bin/riscv64-unknown-linux-gnu-gcc dsp.c -S
        cat dsp.s