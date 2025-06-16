---
sidebar_position: 7
---

# 在 x86_64 上使用 Ruyi 编译环境并构建 Llama2.c（以 Licheepi 4A 为例）

编译运行一个 Llama 2 小模型，使用 ruyi 包管理器搭建 RISC-V 的编译、模拟环境，完成源码本地编译并在 Licheepi 4A 开发板上运行的过程。

## 环境说明

- 硬件环境：Licheepi 4A 开发板（th1520）
- 软件环境：Debian/openEuler for RISC-V

## 使用 ruyi 包管理器部署开发环境：

1. 查看软件仓软件包索引信息

```bash
ruyi list --name-contains gnu-plct --category-is toolchain
```

2. 安装 gnu 编译工具链：ruyi install `<package-name>`

```bash
#安装适用于 Licheepi 4A 的编译工具链 gnu-plct-xthead 
ruyi install gnu-plct-xthead 
```

3. 查看预置编译环境

```bash
ruyi list profiles
```

4. 由指定的工具链、模拟器配置建立 ruyi 虚拟环境 venv-sipeed。
   > 注意在虚拟环境创建时，需要指定正确的编译器版本和 sysroot 类型。
   > 在不指定版本号时默认使用的是软件源里的最新版本，而不是本地安装的版本。

```bash
ruyi venv -h

# 创建虚拟环境 venv-sipeed
ruyi venv -t gnu-plct-xthead sipeed-lpi4a venv-sipeed 

# 查看编译环境中的工具
ls venv-sipeed/bin/ 

# 激活虚拟环境（虚拟环境可以理解成一个容器，实现运行环境隔离的设计，激活后，在 venv-sipeed 这个环境中，使用的就是 gnu-plct-xthead 版本工具链。不创建虚拟环境也可以为 /home/sipeed/.local/share/ruyi/binaries/riscv64/gnu-plct-xthead-2.8.0-ruyi.20240222/bin 配置环境变量，直接使用环境变量指定的gcc编译）
. venv-sipeed/bin/ruyi-activate 

# 查看当前虚拟环境下的 gcc 是否可用
«Ruyi venv-sipeed» sipeed@lpi4a1590:~$ riscv64-plctxthead-linux-gnu-gcc --version 
```

5. 克隆该项目并进入到项目目录下

```bash
git clone https://github.com/karpathy/llama2.c.git && cd llama2.c
```
6. 下载训练好的参数模型（大小约 60MB)

```bash
wget https://huggingface.co/karpathy/tinyllamas/resolve/main/stories15M.bin
```

## 交叉编译 Llama2.c

7. 使用 Ruyi 下载的 GNU 编译工具链修改 Makefile

```bash
sed -i '3s/^CC = gcc$/CC = riscv64-plctxthead-linux-gnu-gcc/' Makefile
```

8. 执行交叉编译和构建，得到可执行程序 run

```bash
make run
ls -al    #新增可执行程序run
```

9. 查看 riscv64 可执行程序文件属性信息。

```bash
file run
# 命令回显信息显示了文件的架构相关信息
```

## 运行验证

10. 将 llama2.c 文件夹传入到 Licheepi 4A 中

```bash
scp -r llama2.c debian@192.168.1.x:~
cd llama2.c
./run stories15M.bin
```

11. 可以得到如下输出
```
<s>
 Once upon a time, there was a little girl named Lily. She loved to play with her dolls and teddy bea
rs. One day, she saw her friend Lucy playing with her favorite doll. 
Lily: "Lucy, can I play with you?"
Lucy: "Sure, but can you be careful with my doll?"
Lily: "Sure, I promise I won't break her."
Lucy: "That's very original. I really love it."
Lily smiled and showed her doll to her mom. Her mom said, "That's nice, Lily. Let's put your doll on 
the shelf and play with her some more."
From that day on, Lily and her doll played together every day. They were the best of friends and didn
't break anyone's possession.
<s>
 Once upon a time, there was a little boy named Timmy. Timmy loved to eat sandwiches. One day, Timmy'
s mom made him a sandwich for lunch. It was so yummy and tasty! But then, something unexpected happen
ed. Timmy's little sister spilled some juice on his sandwich. Tim
achieved tok/s: 30.955260
```