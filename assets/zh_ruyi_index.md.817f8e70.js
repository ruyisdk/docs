import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.76cb5871.js";const F=JSON.parse('{"title":"RUYI 包管理器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi/index.md","filePath":"zh/ruyi/index.md","lastUpdated":1702438683000}'),p={name:"zh/ruyi/index.md"},e=l(`<h1 id="ruyi-包管理器" tabindex="-1">RUYI 包管理器 <a class="header-anchor" href="#ruyi-包管理器" aria-label="Permalink to &quot;RUYI 包管理器&quot;">​</a></h1><p>RUYI 包管理是 RuyiSDK 开发中的包管理器。用于管理工具链、模拟器、源码等各种二进制软件包和源码包。</p><h2 id="支持的发行版平台" tabindex="-1">支持的发行版平台 <a class="header-anchor" href="#支持的发行版平台" aria-label="Permalink to &quot;支持的发行版平台&quot;">​</a></h2><p>当前 RUYI 包管理器 v0.2 版本在以下平台进行了测试</p><ul><li>x86_64 Fedora 38</li><li>x86_64 Ubuntu 22.04 LTS</li><li>x86_64 openEuler 23.09</li><li>riscv64 RevyOS 20231026</li><li>riscv64 openEuler 23.09</li></ul><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p>RUYI 目前支持的命令如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#6A737D;"># 从本地软件包缓存中列出可用软件包</span></span>
<span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">profiles</span></span>
<span class="line"><span style="color:#6A737D;"># 列出已安装的配置</span></span>
<span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span>
<span class="line"><span style="color:#6A737D;"># 从配置的软件源更新本地软件包缓存</span></span>
<span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"><span style="color:#6A737D;"># 下载并安装指定的软件包</span></span>
<span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span></span>
<span class="line"><span style="color:#6A737D;"># 由指定的工具链和配置建立 RUYI 虚拟环境</span></span>
<span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">extract</span></span>
<span class="line"><span style="color:#6A737D;"># 下载并解包指定的源码包</span></span>
<span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span></span>
<span class="line"><span style="color:#6A737D;"># ruyi 镜像搭建工具（完善中）</span></span>
<span class="line"><span style="color:#B392F0;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">self</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">uninstall</span></span>
<span class="line"><span style="color:#6A737D;"># 卸载 RUYI 包管理器</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#6A737D;"># 从本地软件包缓存中列出可用软件包</span></span>
<span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span><span style="color:#24292E;"> </span><span style="color:#032F62;">profiles</span></span>
<span class="line"><span style="color:#6A737D;"># 列出已安装的配置</span></span>
<span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span>
<span class="line"><span style="color:#6A737D;"># 从配置的软件源更新本地软件包缓存</span></span>
<span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"><span style="color:#6A737D;"># 下载并安装指定的软件包</span></span>
<span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span></span>
<span class="line"><span style="color:#6A737D;"># 由指定的工具链和配置建立 RUYI 虚拟环境</span></span>
<span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">extract</span></span>
<span class="line"><span style="color:#6A737D;"># 下载并解包指定的源码包</span></span>
<span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span></span>
<span class="line"><span style="color:#6A737D;"># ruyi 镜像搭建工具（完善中）</span></span>
<span class="line"><span style="color:#6F42C1;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">self</span><span style="color:#24292E;"> </span><span style="color:#032F62;">uninstall</span></span>
<span class="line"><span style="color:#6A737D;"># 卸载 RUYI 包管理器</span></span></code></pre></div><h2 id="外部链接" tabindex="-1">外部链接 <a class="header-anchor" href="#外部链接" aria-label="Permalink to &quot;外部链接&quot;">​</a></h2><ul><li><a href="https://download.fedoraproject.org/pub/fedora/linux/releases/38/Workstation/x86_64/iso/" target="_blank" rel="noreferrer">Fedora38 Workstation</a></li><li><a href="https://mirror.iscas.ac.cn/revyos/extra/images/lpi4a/20231026/" target="_blank" rel="noreferrer">RevyOS 20231026</a></li><li><a href="https://www.releases.ubuntu.com/jammy/" target="_blank" rel="noreferrer">Ubuntu 22.04 LTS</a></li><li><a href="https://repo.openeuler.openatom.cn/openEuler-23.09/ISO/" target="_blank" rel="noreferrer">openEuler 23.09 Images</a></li></ul>`,10),o=[e];function r(t,c,i,y,u,E){return a(),n("div",null,o)}const h=s(p,[["render",r]]);export{F as __pageData,h as default};
