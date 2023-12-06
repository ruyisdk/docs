# 使用 LLVM 上游工具链配置 RISC-V 编译环境

注意在 v0.2 版本中，该部分只适用于在 x86-64 host 配置交叉编译环境。

LLVM 上游工具链软件包名为 llvm-upstream，v0.2 最新版本二进制为 llvm-upstream-20231121。
由于配置 LLVM 工具链环境依赖 gcc 环境，故同时需要安装 gcc 工具链。

```bash
ruyi install slug:llvm-upstream-20231121 slug:gnu-upstream-20231118
```
