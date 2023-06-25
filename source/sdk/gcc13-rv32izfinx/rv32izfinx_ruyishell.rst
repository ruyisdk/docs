.. _rv32izfinx_ruyishell:

使用ruyishell下载测试
============================


.. tabs:: 编写测试用例

    .. code-tab:: c demo

        // 测试用例示例 fadd.c
        float foo(float a, float b){
          return a+b;
        }

        int main(){
          foo(1.0,2.0);
          return 0;
        }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看反汇编文件中是否将浮点运算指令fadd.s后使用的浮点寄存器（fa*）替换为整型寄存器(a*)
        build/bin/riscv64-unknown-linux-gnu-gcc -S foo.c
