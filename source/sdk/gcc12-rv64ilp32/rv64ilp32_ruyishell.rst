.. _rv64ilp32_ruyishell:

使用ruyishell下载测试
============================

.. tabs:: 编写测试用例

    .. code-tab:: c demo

        int main(){
          return 0;
        }

    .. code-tab:: bash build

        # 使用构建的工具编译测试用例，查看elf文件属性是否为64位ILP32ABI
        build/bin/riscv64-unknown-linux-gnu-gcc main.c -o main.elf
        build/bin/riscv64-unknown-linux-gnu-readelf -h main.elf