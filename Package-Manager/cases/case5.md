---
sidebar_position: 5
---

# 使用 CMake 和 Meson 集成

## cmake

首先确保你有安装 cmake 和 ninja，如果没有安装，可以使用以下命令安装：

```bash input="2,4"
# Ubuntu/Debian
$ sudo apt-get install cmake ninja-build
# Fedora
$ sudo dnf install cmake ninja-build
```

下载 zlib：

```bash input="1-3
$ wget https://github.com/zlib-ng/zlib-ng/archive/refs/tags/2.2.2.tar.gz
$ mkdir zlib-ng
$ cd zlib-ng
```

安装并激活 gnu-plct 工具链编译：

```bash input="1-3"
$ ruyi install gnu-plct
$ ruyi venv -t gnu-plct generic venv
$ . venv/bin/ruyi-activate
```

解压 zlib：

```bash input="1-2"
$ tar -xf ./zlib-ng-2.2.2.tar.gz
$ cd zlib-ng-2.2.2
```

使用 cmake 构建 zlib：
为什么要用这样的参数可以参考 venv 里的 toolchain.riscv64-plct-linux-gnu.cmake 文件

```bash input="1-2"
$ cmake . -G Ninja -DCMAKE_C_COMPILER=riscv64-plct-linux-gnu-gcc -DZLIB_COMPAT=ON -DWITH_GTEST=OFF
$ ninja
```

检查编译出的文件：
```bash inpupt="1"
$ file libz.so.1.3.1.zlib-ng 
libz.so.1.3.1.zlib-ng: ELF 64-bit LSB shared object, UCB RISC-V, RVC, double-float ABI, version 1 (SYSV), dynamically linked, BuildID[sha1]=bb6bdf59fa0fd746b3a6d3586ff1cfabcbe4a6e9, with debug_info, not stripped
```

## meson

安装 meson：

```bash input="2,4"
# Ubuntu/Debian
$ sudo apt-get install meson
# Fedora
$ sudo dnf install meson
```

和上文一样，首先安装并激活 gnu-plct 工具链编译：

```bash input="1-3"
$ ruyi install gnu-plct
$ ruyi venv -t gnu-plct generic venv
$ . venv/bin/ruyi-activate
```

下载 taisei：

```bash input="1-2"
$ git clone --recurse-submodules --depth=1 https://github.com/taisei-project/taisei
$ cd taisei
```

根据 venv/meson-cross.ini，meson 的交叉编译配置及编译如下：

```bash input="1-2"
$ meson setup --cross-file /home/cyan/zlib-ng/venv/meson-cross.ini build/
$ meson compile -C build/
```

检查编译出的文件：

```bash input="1"
$ file build/src/taisei
taisei: ELF 64-bit LSB executable, UCB RISC-V, RVC, double-float ABI, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-riscv64-lp64d.so.1, BuildID[sha1]=8fb80413e4a41ffeb75450b80a4b068c504b152e, for GNU/Linux 4.15.0, with debug_info, not stripped
```
