import{_ as a,c as i,a2 as n,o as e}from"./chunks/framework.DxHMuem5.js";const u=JSON.parse('{"title":"RUYI 包管理器","description":"","frontmatter":{},"headers":[],"relativePath":"old/ruyi/index.md","filePath":"old/ruyi/index.md","lastUpdated":1735203552000}'),l={name:"old/ruyi/index.md"};function r(t,s,p,h,k,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="ruyi-包管理器" tabindex="-1">RUYI 包管理器 <a class="header-anchor" href="#ruyi-包管理器" aria-label="Permalink to &quot;RUYI 包管理器&quot;">​</a></h1><p>RUYI 包管理是 RuyiSDK中负责管理RuyiSDK各种软件源的工具，用于管理工具链、模拟器、源码等各种二进制软件包和源码包。</p><ul><li>官方仓库：<a href="https://github.com/RuyiSDK/ruyi" target="_blank" rel="noreferrer">https://github.com/RuyiSDK/ruyi</a></li><li>下载地址：可在 <a href="https://github.com/RuyiSDK/ruyi/releases/" target="_blank" rel="noreferrer">GitHub Releases</a> 或 <a href="https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases" target="_blank" rel="noreferrer">ISCAS 镜像源</a>下载最新版本体验</li><li>需求与问题：ruyi 包管理器的问题和需求可以通过<a href="https://github.com/RuyiSDK/ruyi/issues" target="_blank" rel="noreferrer">仓库issue</a>反馈</li></ul><h2 id="支持的发行版平台" tabindex="-1">支持的发行版平台 <a class="header-anchor" href="#支持的发行版平台" aria-label="Permalink to &quot;支持的发行版平台&quot;">​</a></h2><p>当前 RUYI 包管理器具有良好的平台兼容性以及多发行版兼容性，目前经过测试可用的环境有（仅限验证过的）：</p><ul><li>x86_64 Fedora 38</li><li>x86_64 Ubuntu 22.04 LTS</li><li>x86_64 openEuler 23.09</li><li>riscv64 RevyOS 20231210</li><li>riscv64 openEuler 23.09</li></ul><p>上述操作系统链接参考本文文末的“附:外部链接”章节。</p><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><p>RUYI 目前支持的命令如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从配置的软件源更新本地软件包缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从本地软件包缓存中列出可用软件包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载并安装指定的软件包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出已安装的配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> profiles</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 由指定的工具链和配置建立 RUYI 虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载并解包指定的源码包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取并查看更新信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> news</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 镜像信息的维护与下载、开发板系统的安装引导</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ruyi 镜像搭建工具（完善中）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载 RUYI 包管理器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> self</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span></span></code></pre></div><p>功能持续更新中，可以通过 <code>ruyi -h</code> 查看 ruyi 支持的命令。</p><h2 id="附-外部链接" tabindex="-1">附:外部链接 <a class="header-anchor" href="#附-外部链接" aria-label="Permalink to &quot;附:外部链接&quot;">​</a></h2><ul><li><a href="https://download.fedoraproject.org/pub/fedora/linux/releases/38/Workstation/x86_64/iso/" target="_blank" rel="noreferrer">Fedora38 Workstation</a></li><li><a href="https://mirror.iscas.ac.cn/revyos/extra/images/lpi4a/20231210/" target="_blank" rel="noreferrer">RevyOS 20231210</a></li><li><a href="https://www.releases.ubuntu.com/jammy/" target="_blank" rel="noreferrer">Ubuntu 22.04 LTS</a></li><li><a href="https://repo.openeuler.openatom.cn/openEuler-23.09/ISO/" target="_blank" rel="noreferrer">openEuler 23.09 Images</a></li></ul>`,13)]))}const c=a(l,[["render",r]]);export{u as __pageData,c as default};
