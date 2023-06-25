.. _rv64gcv0p7_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: c demo

        #include <riscv_vector.h>
        #include <string.h>

        // reference https://github.com/riscv/riscv-v-spec/blob/master/example/strcpy.s
        char *strcpy_vec(char *dst, const char *src) {
          char *save = dst;
          size_t vlmax = vsetvlmax_e8m8();
          long first_set_bit = -1;
          size_t vl;
          while (first_set_bit < 0) {
            src += vl;
            dst += vl;
          }
          return save;
        }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看汇编文件中是否使用V扩展指令vsetvli
        build/bin/riscv64-unknown-linux-gnu-gcc vector.c -S
        cat vector.s