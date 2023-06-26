.. _rv64gzc_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: c demo

        // 测试用例示例 zc.s
        zcb_lbu:
	        # test to compress lbu
	        lbu x8,2(x10)
          # test c.lbu
	        c.lbu x9,1(x8)

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看反汇编文件中是否对lbu指令进行了压缩
        build/bin/riscv64-unknown-linux-gnu-as zc.s -march=rv64g_zca_zcb -c -o zc.elf
        build/bin/riscv64-unknown-linux-gnu-objdump -d -Mno-aliases zc.elf
