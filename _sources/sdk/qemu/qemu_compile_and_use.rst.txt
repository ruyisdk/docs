.. _qemu_compile_and_use:

QEMU的构建和使用
============================

编译构建QEMU
-----------------------------

安装依赖工具和库:

.. tabs::

   .. code-tab:: bash Ubuntu 22.04

      apt update
      apt install -y gcc git make ninja-build python3 python3-pip libglib2.0-dev libpixman-1-dev libslirp-dev

   .. code-tab:: bash Ubuntu 22.04(static)

      apt update
      apt install -y gcc git make ninja-build python3 python3-pip libglib2.0-dev libpixman-1-dev

   .. code-tab:: bash OpenEuler 22.03/23.03

      yum install -y gcc git make glib2-devel.x86_64 ninja-build libcap-ng-devel.x86_64 libattr-devel.x86_64 libslirp-devel.x86_64

   .. code-tab:: bash OpenEuler 22.03/23.03(static)

      yum install -y gcc git make glib2-devel.x86_64 ninja-build libcap-ng-devel.x86_64 libattr-devel.x86_64 glib2-static.x86_64

下载RUYI QEMU源码:

.. code-block:: bash

   git clone -v --branch=ruyi_qemu --progress --depth=1 https://github.com/plctlab/plct-qemu.git <SRC_DIR>
   cd <SRC_DIR>
   git submodule update --init --recursive

编译构建:

.. tabs::

   .. code-tab:: bash 普通编译

      mkdir build
      cd build
      ../configure --target-list=riscv64-softmmu,riscv64-linux-user,riscv32-softmmu,riscv32-linux-user --prefix=<TARGET_DIR> --disable-werror --enable-virtfs --enable-slirp
      make -j $(nproc)
      make install

   .. code-tab:: bash 静态编译

      mkdir build-static
      cd build-static
      ../configure --target-list=riscv64-linux-user,riscv32-linux-user --prefix=<TARGET_DIR> --disable-werror --static
      make -j $(nproc)
      make install

常见用法
-----------------------------

对于直接下载的QEMU二进制程序(非静态链接),我们在运行之前需要在系统中安装部分依赖库:

.. tabs::

   .. code-tab:: bash Ubuntu 22.04

      apt update
      apt install -y libglib2.0-dev libpixman-1-dev libslirp-dev


   .. code-tab:: bash OpenEuler 22.03/23.03

      yum install -y pixman.x86_64 libepoxy.x86_64 libslirp-devel.x86_64

QEMU提供了两种模式:用户模式和系统模式, 这两种模式均可以通过-cpu选项来指定模拟的CPU,如 -cpu rv64,x-zcb-true,RUYISDK目前常见的一些cpu选项如下:

+------------+-----------+-----------------+
| Extensions | CPU Type  | extra options   |
+============+===========+=================+
| Zca/Zcd    | rv32/64   |                 |
+------------+-----------+-----------------+
| Zcb        | rv32/64   | x-zcb=true      |
+------------+-----------+-----------------+
| Zcf        | rv32      |                 |
+------------+-----------+-----------------+
| Zcmp       | rv32/64   | d=false,x-zcmp= |
|            |           | true            |
+------------+-----------+-----------------+
| Zcmt       | rv32/64   | d=false,x-zcmt= |
|            |           | true            |
+------------+-----------+-----------------+
| rvv 0.7.1  | rv32/64   | v=true,vext_spec|
|            |           | ="v0.7.1"       |
+------------+-----------+-----------------+
| xthead*    | c910      |                 |
+------------+-----------+-----------------+
| xthead* +  | c910v     |                 |
| rvv 0.7.1  |           |                 |
+------------+-----------+-----------------+
| rvv 1.0    | rv32/64   | v=true          |
+------------+-----------+-----------------+
| xthead* +  | c908v     |                 |
| rvv 1.0    |           |                 |
+------------+-----------+-----------------+
| rvp 0.9.4  | rv32/64   | x-p=true        |
+------------+-----------+-----------------+

除了CPU选项,QEMU的系统模式还提供-machine选项用于制定模拟的开发板平台,RUYISDK目前提供的常见平台及它们对应的默认CPU类型如下:

+------------+-------------+
| Machines   | Default CPU |
+============+=============+
| virt       | rv32/64     |
+------------+-------------+
| licheepirv | c906fdv     |
+------------+-------------+
| licheepi4a | c910v       |
+------------+-------------+

QEMU命令举例:

.. tabs::

   .. code-tab:: bash 系统模式命令

      qemu-system-riscv64 \
      -nographic -machine virt -cpu rv64,x=true \
      -smp "<vcpu-num>" -m "<memory-size>" \
      -bios <fw-path> \
      -drive file="<image-path>",format=qcow2,id=hd0 \
      -object rng-random,filename=/dev/urandom,id=rng0 \
      -device virtio-vga \
      -device virtio-rng-device,rng=rng0 \
      -device virtio-blk-device,drive=hd0 \
      -device virtio-net-device,netdev=usernet \
      -netdev user,id=usernet,hostfwd=tcp::"<ssh_port>"-:22 \
      -device qemu-xhci -usb -device usb-kbd -device usb-tablet

   .. code-tab:: bash 用户模式命令

      qemu-riscv64 -cpu rv64,v=true (-L <sysroot>) <program>


基于qemu-user的native环境
-----------------------------

安装相关工具(Ubuntu):

.. code-block:: bash

   apt install binfmt-support qemu-user-static systemd-container

解压下载后的sysroot文件系统(如 `openEuler sysroot <https://repo.tarsier-infra.com:8080/ruyisdk/sdk/3/openeuler-23.03-sysroot.tar.gz>`_)到<target_fs>目录下

通过systemd-nspawn进入sysroot环境:

.. code-block:: bash

   systemd-nspawn -D <path-to-target_fs>

在切换入sysroot环境时也可以指定qemu的-cpu选项,如:

.. code-block:: bash

   systemd-nspawn -D <path-to-target_fs>  -a -U -E QEMU_CPU="c910v"

在这之后,就可以在该模拟的native环境下进行相应的开发

根据需要可以将默认安装的qemu-riscv64/32-static程序替换成自身下载或者静态编译的static qemu-riscv64/32程序,然后先禁用再使能binfmt中的qemu-riscv64/32选项,来让替换后的新程序生效,例如:

.. code-block:: bash

   update-binfmts --disable qemu-riscv64
   update-binfmts --enable qemu-riscv64

