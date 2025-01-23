# 总结

## 总体情况

针对 milkv duo，ruyisdk软件源和包管理器已经完成了“基于第三方资源”的支持和集成，能够支持：

* [ ] gnu-plct: [riscv-gnu-toolchain](https://github.com/ruyisdk/riscv-gnu-toolchain) (RUYISDK riscv-gnu-toolchain ) 是否支持 milkv duo

- [X] 厂商编译器：ruyisdk提供了编译工具链下载、安装、编译环境（虚拟环境）
- [X] 有demo资源，且ruyisdk提供了demo下载
- [X] 支持编译
- [X] 远程数据传输：支持 scp 拷贝，**但是Eclipse RSE插件不能浏览远程文件，不能拷贝，希望增加sftp-server支持**
- [X] 支持调试（**但还不是很完善，需要拷贝GDBserver**）：在手动在milkv duo镜像中增加gdbserver后，可以实现远程调试
- [ ] 模拟器：qemu模拟器暂未成功运行目标程序

总的来说，就ruyisdk集成 milkv duo开发板开说，基本上已经做到了“当前现状”下的良好程度。milkv duo 虽然已经能够使用 ruyi 包管理器安装和使用，也能够在 ide 中配置使用，但是 核心的 plct-gnu 和 milkvduo ruyisdk（这里特指 demo/template+头文件+库文件+运行环境sysroot等）并未形成一整套有一定标准的开发环境。

而且目前只针对 milkv duo helloworld 这种最简单的demo进行了验证，更多milkv duo demo 需要进一步验证和集成到ide中；

至少在ide中，demo/template + 头文件+库文件+sysroot等链接所需的环境都必须打包到 ruyisdk中。这样的sdk才能算是一整套的开发sdk；需要继续优化的事情有：

## TODO

### 其它ruyisdk外部输入（其它团队）需要改进的事情：

1. milkv 镜像：最好加上gdbserver、[sftp-server](https://github.com/milkv-duo/duo-buildroot-sdk/issues/167)功能
2. plct-gnu ：暂时不支持 musl 库，milkv duo 目前还需要使用硬件厂商提供的工具链版本。plct-gnu后续有支持 musl 计划。
3. qemu：qemu 目前无法运行 musl 工具链编译的目标程序。（可能需要适配运行环境？）
4. milkv duo 的 demo仓库：目前似乎在目录组织方便还有改进的空间。工具链、头文件、库文件都集合在这个文件夹中。ruyisdk如果想要在ide中按照统一模版集成不同开发板的demo，则需要建立统一的demo目录标准。

### 不受其它外部输入限制，可以做的事情：

- 建立和不断优化可支持多开发板的demo（如 [helloworld](https://github.com/xijing21/ruyisdkide-demos)）：demo仓库感觉需要更好的组织形式，但是暂时不清楚怎么做更好，这个等多运行一些demo后再行考虑。
