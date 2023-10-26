.. _rv64gcbpv_xthead_zfh_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: c demo

        struct bar
      {
        long a:9;
        long b:26;
        long c:22;
      };

      long
      foo (struct bar *s)
      {
        return s->b;
      }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看汇编文件中是否启用全部扩展
        build/bin/riscv64-unknown-linux-gnu-gcc all.c -S
        cat all.s