.. _rv64gzc_compile_and_use:

支持ZC扩展构建和使用
################################################################

安装构建依赖(如有后续构建提示缺失，可根据错误信息全依赖)

.. tabs::

   .. code-tab:: bash Ubuntu环境

      apt-get install -y make diffutils autoconf automake autotools-dev curl python3 python3-pip libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev ninja-build git cmake libglib2.0-dev

   .. code-tab:: bash OpenEuler/RevyOS环境

      dnf install -y make diffutils autoconf automake python3 libmpc-devel mpfr-devel gmp-devel gawk  bison flex texinfo patchutils gcc gcc-c++ zlib-devel expat-devel

   .. code-tab:: bash Fedora/CentOS环境

      sudo yum install -y make diffutils autoconf automake python3 libmpc-devel mpfr-devel gmp-devel gawk  bison flex texinfo patchutils gcc gcc-c++ zlib-devel expat-devel

下载riscv-gnu-toolchain:

.. code-block:: bash

   git clone https://github.com/ruyisdk/riscv-gnu-toolchain

构建准备——进入riscv-gnu-toolchain目录，建立build文件夹，用于存放构建生成的工具链：

.. code-block:: bash

   cd riscv-gnu-toolchain && mkdir build

配置构建参数，以启用不同扩展

.. code-block:: bash

   #支持ZC扩展的构建（rv64gzc）
   ./configure --prefix=$PWD/build --with-arch=rv64g_zca_zcb

配置完成后进行构建（如果出现报错，请记录错误信息并进行反馈）

.. code-block:: bash

   make linux -j $(nproc)

构建完成后，检查是否构建成功(这里以标准64位工具链为例，32位工具链注意替换工具链名称)

.. code-block:: bash

   build/bin/riscv64-unknown-linux-gnu-gcc -v

RuyiSDK 是