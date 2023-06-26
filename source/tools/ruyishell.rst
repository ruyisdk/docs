.. _ruyishell:

ruyishell的背景介绍
################################

ruyishell功能介绍
============================

ruyishell是一个辅助开发工具，不需要手动搭建复杂的环境和下载代码，只需要几条命令，就可以直接获取所需要的构建好的软件包。

ruyishell命令
============================
ruyishell目前支持的命令如下：

.. code-block:: bash

    ruyi on/off
    # 打开/关闭 RuyiSDK 开发环境
    ruyi update
    # 获取 ruyisdk 最新更新
    ruyi install [sdkid]
    # 安装指定的sdk
    ruyi list
    # 罗列本地支持SDK环境,附带默认环境
    ruyi info
    # 罗列本地支持SDK环境
    ruyi open/switch/close [sdkid]
    # 使能/切换指定sdk环境
    ruyi run
    # 运行指定qemu环境