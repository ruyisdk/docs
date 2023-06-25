.. _qemu_ruyibuild:

使用ruyibuild构建
============================

创建编译的ruyibuild虚拟环境
-----------------------------
如已配置，可跳过该步骤
更新pip(可选)

.. code-block:: bash

   pip3 install --upgrade pip

安装virtualenv和virtualenvwrapper

.. code-block:: bash

   pip3 install virtualenv
   pip3 install virtualenvwrapper

在.bashrc中添加配置

.. code-block:: bash

   # 虚拟环境存放目录，.virtualenvs目录可自拟
   export WORKON_HOME=~/.virtualenvs
   # 指定virtualenvwrapper执行的python版本
   # which python3 获取路径
   export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
   # 指定virtualenv的路径
   # find -name virtualenv 获取路径
   export VIRTUALENVWRAPPER_VIRTUALENV=~/.local/bin/virtualenv
   # virtualenvwrapper.sh所在目录
   # find -name virtualenvwrapper.sh
   source ~/.local/bin/virtualenvwrapper.sh

使能.bashrc配置从而可以使用python虚拟环境

.. code-block:: bash

   source ~/.bashrc
   # 以下是常用命令
   # 创建虚拟环境
   mkvirtualenv buildqemu
   # 切换到某个虚拟环境
   workon buildqemu
   # 退出当前虚拟环境
   deactivate
   # 删除某个虚拟环境
   rmvirtualenv buildqemu
   # 列出所有虚拟环境
   lsvirtualenv

创建虚拟环境用于编译，例如

.. code-block:: bash

   mkvirtualenv buildqemu

至此，python的虚拟环境配置完成，ruyibuild的安装和使用可在虚拟环境中进行，而不影响host机python环境

安装ruyibuild

.. code-block:: bash

   wget https://repo.tarsier-infra.com:8080/ruyisdk/misc/ruyibuild-0.0.2-py3-none-any.whl
   pip3 install ruyibuild-0.0.2-py3-none-any.whl


编译构建QEMU
-------------------
创建编译配置用于初始化，例如qemu_ubuntu2204.yaml
根据不同的构建目标和构建系统，创建不同的运行配置

.. tabs::

   .. code-tab:: bash Ubuntu 22.04

      config_file:
        repo_url: https://github.com/ruyisdk/ruyici.git
        branch: main
        path: qemu/qemu_config_ubuntu2204.yaml

   .. code-tab:: bash Ubuntu 22.04(static)

      config_file:
        repo_url: https://github.com/ruyisdk/ruyici.git
        branch: main
        path: qemu/qemu-user-static_config_ubuntu2204.yaml

   .. code-tab:: bash openEuler 22.03

      config_file:
        repo_url: https://github.com/ruyisdk/ruyici.git
        branch: main
        path: qemu/qemu_config_oe2203.yaml

   .. code-tab:: bash openEuler 22.03(static)

      config_file:
        repo_url: https://github.com/ruyisdk/ruyici.git
        branch: main
        path: qemu/qemu-user-static_config_oe2203.yaml

   .. code-tab:: bash openEuler 23.03

      config_file:
        repo_url: https://github.com/ruyisdk/ruyici.git
        branch: main
        path: qemu/qemu_config_oe2303.yaml

   .. code-tab:: bash openEuler 23.03(static)

      config_file:
        repo_url: https://github.com/ruyisdk/ruyici.git
        branch: main
        path: qemu/qemu-user-static_config_oe2303.yaml

初始化工作
执行以下命令创建工作目录, 后续自动下载的源码以及构建生成的软件包都会在此目录下

.. code-block:: bash

   ruyibuild init -d qemu-ubuntu2204 -f qemu_ubuntu2204.yaml


准备构建环境和代码

.. code-block:: bash

   ruyibuild update


执行构建

.. code-block:: bash

   ruyibuild generate <name>

生成目标qemu
