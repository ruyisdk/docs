import{_ as n,c as a,ag as e,o as p}from"./chunks/framework.Bie0PW65.js";const l="/docs/assets/1737596010634.DkfmbjLQ.png",v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/milkv-duo/4-qemu.md","filePath":"zh/milkv-duo/4-qemu.md","lastUpdated":1737610063000}'),i={name:"zh/milkv-duo/4-qemu.md"};function u(m,s,r,t,o,c){return p(),a("div",null,s[0]||(s[0]=[e(`<h3 id="qemu模拟器" tabindex="-1">QEMU模拟器 <a class="header-anchor" href="#qemu模拟器" aria-label="Permalink to &quot;QEMU模拟器&quot;">​</a></h3><p>针对 gnu-milkv-milkv-duo-musl-bin ，暂无配套的qemu模拟器。</p><ol><li><p>下载安装qemu</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#查询并安装qemu</span></span>
<span class="line"><span>ruyi list | grep &quot;qemu&quot;</span></span>
<span class="line"><span>ruyi install qemu-user-riscv-upstream</span></span>
<span class="line"><span>#ruyi install qemu-system-riscv-upstream</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#创建带qemu的虚拟环境</span></span>
<span class="line"><span>ruyi venv -t gnu-milkv-milkv-duo-musl-bin -e qemu-user-riscv-upstream  milkv-duo  venv-milkvduo-qemuuser</span></span>
<span class="line"><span>source ~/venv-milkvduo-qemuuser/bin/ruyi-activate </span></span>
<span class="line"><span></span></span>
<span class="line"><span>ruyi-qemu ~/milkv-duo-examples/hello-world/helloworld</span></span>
<span class="line"><span>ruyi-qemu ~/ews-milkvduo-t01/sumdemo/sumdemo</span></span>
<span class="line"><span>qemu-riscv64: warning: disabling zfa extension because privilege spec version does not match</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ruyi-deactivate </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#尝试2：虚拟环境：milkv-duo-musl-bin编译器，换profile generic</span></span>
<span class="line"><span>ruyi venv -t gnu-milkv-milkv-duo-musl-bin -e qemu-user-riscv-upstream  generic  venv-milkvduo-generic-qemuuser</span></span>
<span class="line"><span>ruyi-qemu ~/milkv-duo-examples/hello-world/helloworld</span></span>
<span class="line"><span>ruyi-qemu ~/ews-milkvduo-t01/sumdemo/sumdemo</span></span>
<span class="line"><span>#没有任何输出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#尝试3：虚拟环境：milkv-duo-musl-bin编译器，换qemu版本</span></span>
<span class="line"><span>ruyi venv -t gnu-milkv-milkv-duo-musl-bin -e qemu-user-riscv-xthead  milkv-duo  venv-milkvduo-x</span></span>
<span class="line"><span>qemu-riscv64: unable to find CPU model &#39;thead-c906&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---------换编译器</span></span>
<span class="line"><span>ruyi venv -t gnu-upstream -e qemu-user-riscv-upstream  generic  venv-generic</span></span>
<span class="line"><span>#（忘记及时记录，印象是正常输出）</span></span></code></pre></div></li></ol><p><img src="`+l+'" alt="1737596010634"></p>',4)]))}const k=n(i,[["render",u]]);export{v as __pageData,k as default};
