.. _rv64gcv_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: c demo

        // 测试用例示例 rvv_strcpy.c
        #include <riscv_vector.h>
        #include <string.h>

        // reference https://github.com/riscv/riscv-v-spec/blob/master/example/strcpy.s
        char *strcpy_vec(char *dst, const char *src) {
          char *save = dst;
          size_t vlmax = __riscv_vsetvlmax_e8m8();
          long first_set_bit = -1;
          size_t vl;
          while (first_set_bit < 0) {
            vint8m8_t vec_src = __riscv_vle8ff_v_i8m8(src, &vl, vlmax);

            vbool1_t string_terminate = __riscv_vmseq_vx_i8m8_b1(vec_src, 0, vl);
            vbool1_t mask = __riscv_vmsif_m_b1(string_terminate, vl);

            __riscv_vse8_v_i8m8_m(mask, dst, vec_src, vl);

            src += vl;
            dst += vl;

            first_set_bit = __riscv_vfirst_m_b1(string_terminate, vl);
          }
          return save;
        }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看汇编文件中是否使用V扩展指令vsetvli,vle8ff.v,vmseq.vi,vmsif.m,vse8.v,vfirst.m
        build/bin/riscv64-unknown-linux-gnu-gcc rvv_strcpy.c -O3 -S
        cat rvv_strcpy.s