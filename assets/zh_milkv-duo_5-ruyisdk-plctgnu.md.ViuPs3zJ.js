import{_ as n,c as a,ag as p,o as l}from"./chunks/framework.Bie0PW65.js";const i="/docs/assets/1736822816333.dcy88Uvm.png",e="/docs/assets/1736822773688.Dl_DMl9y.png",h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/milkv-duo/5-ruyisdk-plctgnu.md","filePath":"zh/milkv-duo/5-ruyisdk-plctgnu.md","lastUpdated":1737614626000}'),t={name:"zh/milkv-duo/5-ruyisdk-plctgnu.md"};function c(o,s,u,d,r,g){return l(),a("div",null,s[0]||(s[0]=[p(`<h2 id="使用-gnu-plct-为-milkv-duo-编译-验证" tabindex="-1">使用 gnu-plct 为 milkv duo 编译（验证） <a class="header-anchor" href="#使用-gnu-plct-为-milkv-duo-编译-验证" aria-label="Permalink to &quot;使用 gnu-plct 为 milkv duo 编译（验证）&quot;">​</a></h2><h3 id="调研-gnu-plct-是否能够支持-milkv-duo" tabindex="-1">调研 gnu-plct 是否能够支持 milkv duo <a class="header-anchor" href="#调研-gnu-plct-是否能够支持-milkv-duo" aria-label="Permalink to &quot;调研 gnu-plct 是否能够支持 milkv duo&quot;">​</a></h3><ul><li>milkv duo ：硬件扩展支持情况</li><li>milkv duo ：官方推荐的工具链情况</li><li>了解 gnu-plct （ 仓库地址：<a href="https://github.com/ruyisdk/riscv-gnu-toolchain" target="_blank" rel="noreferrer">https://github.com/ruyisdk/riscv-gnu-toolchain</a> ）当前指令集支持情况： <ul><li>gnu-plct指令集支持情况历史文档：<a href="https://github.com/ruyisdk/docs/blob/f7871dfaf735d84fa61552c10c700afd1b278391/docs/zh/sdk/gnu/index.md" target="_blank" rel="noreferrer">https://github.com/ruyisdk/docs/blob/f7871dfaf735d84fa61552c10c700afd1b278391/docs/zh/sdk/gnu/index.md</a></li></ul></li></ul><h3 id="安装编译器-编译" tabindex="-1">安装编译器，编译 <a class="header-anchor" href="#安装编译器-编译" aria-label="Permalink to &quot;安装编译器，编译&quot;">​</a></h3><ol start="2"><li><p>安装 gnu-plct 编译器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#查看软件源的资源</span></span>
<span class="line"><span>#ruyi list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#安装指定的工具链</span></span>
<span class="line"><span>ruyi install gnu-plct</span></span>
<span class="line"><span>#从返回信息中可以查看安装的路径，如 ~/.local/share/ruyi/binaries/x86_64/gnu-plct-0.20240324.0</span></span></code></pre></div></li><li><p>创建和使用Duo编译环境</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#查看ruyi预配置环境</span></span>
<span class="line"><span>#ruyi list profiles</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#创建一个虚拟环境（自定义命名milkv-venv）：工具链为gnu-plct</span></span>
<span class="line"><span>ruyi venv -t gnu-plct milkv-duo ./venv-plct-milkvduo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#激活虚拟环境</span></span>
<span class="line"><span>source venv-plct-milkvduo/bin/ruyi-activate</span></span></code></pre></div></li><li><p>编译源码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd sumdemo</span></span>
<span class="line"><span>ls -al</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#创建虚拟环境</span></span>
<span class="line"><span>source venv-plct-milkvduo/bin/ruyi-activate </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看虚拟环境下的gcc版本</span></span>
<span class="line"><span>riscv64-plct-linux-gnu-gcc --version</span></span>
<span class="line"><span>riscv64-plct-linux-gnu-gcc (RuyiSDK 20240324 PLCT-Sources) 13.1.0</span></span>
<span class="line"><span>Copyright (C) 2023 Free Software Foundation, Inc.</span></span>
<span class="line"><span>This is free software; see the source for copying conditions.  There is NO</span></span>
<span class="line"><span>warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#执行编译</span></span>
<span class="line"><span>riscv64-plct-linux-gnu-gcc -g -o sumdemo sumdemo.c  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#查看</span></span>
<span class="line"><span>ls -al</span></span>
<span class="line"><span>file sumdemo</span></span>
<span class="line"><span>sumdemo: ELF 64-bit LSB executable, UCB RISC-V, RVC, double-float ABI, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-riscv64-lp64d.so.1, BuildID[sha1]=28dc33d8b3397e5d1c9092a348b21963bfaebc89, for GNU/Linux 4.15.0, with debug_info, not stripped</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#退出虚拟环境</span></span>
<span class="line"><span>ruyi-deactivate </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#拷贝目标程序到目标设备上</span></span>
<span class="line"><span>scp sumdemo root@192.168.42.1:/root/target/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#在目标设备上运行</span></span>
<span class="line"><span>[root@milkv-duo]~/target# ./sumdemo </span></span>
<span class="line"><span>-sh: ./sumdemo: not found</span></span>
<span class="line"><span>[root@milkv-duo]~/target# file sumdemo </span></span>
<span class="line"><span>sumdemo: ELF 64-bit LSB executable, UCB RISC-V, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-riscv64-lp64d.so.1, BuildID[sha1]=28dc33d8b3397e5d1c9092a348b21963bfaebc89, for GNU/Linux 4.15.0, with debug_info, not stripped</span></span></code></pre></div><p><img src="`+i+'" alt="1736822816333"></p><p><img src="'+e+'" alt="1736822773688"></p><p>使用 plct-gnu：未能成功运行。</p><p><strong>结论：与plct gnu小队沟通，目前gnu-plct暂时未支持musl库。</strong></p></li></ol>',5)]))}const v=n(t,[["render",c]]);export{h as __pageData,v as default};
