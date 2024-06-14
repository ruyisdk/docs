import{_ as t,c as e,o as i,a3 as s}from"./chunks/framework.Bfd8gzwW.js";const k=JSON.parse('{"title":"v0.4.0 版本新增特性","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi/updates/0.4.0.md","filePath":"zh/ruyi/updates/0.4.0.md","lastUpdated":1718357056000}'),n={name:"zh/ruyi/updates/0.4.0.md"},a=s(`<h1 id="v0-4-0-版本新增特性" tabindex="-1">v0.4.0 版本新增特性 <a class="header-anchor" href="#v0-4-0-版本新增特性" aria-label="Permalink to &quot;v0.4.0 版本新增特性&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 板卡镜像刷写</span></span></code></pre></div><h2 id="安装-v0-4-0" tabindex="-1">安装 v0.4.0 <a class="header-anchor" href="#安装-v0-4-0" aria-label="Permalink to &quot;安装 v0.4.0&quot;">​</a></h2><p>v0.4.0 版本的稳定二进制为 0.4.0 。</p><p>在 amd64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.4.0/ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 riscv64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.4.0/ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>检查安装版本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.4.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Institute of Software, Chinese Academy of Sciences (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ISCAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rights</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reserved.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache-2.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.apache.org/licenses/LICENSE-2.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0&gt;</span></span></code></pre></div><p>从 0.4.0 开始使用 GitHub 托管默认软件源。</p><h2 id="板卡镜像刷写" tabindex="-1">板卡镜像刷写 <a class="header-anchor" href="#板卡镜像刷写" aria-label="Permalink to &quot;板卡镜像刷写&quot;">​</a></h2><p>在 0.4.0 版本，板卡镜像刷写功能所支持的板卡增加到 7 款，同时优化了命令逻辑。</p><p>板卡支持列表：</p><table tabindex="0"><thead><tr><th style="text-align:center;">开发板</th><th style="text-align:center;">版本</th><th style="text-align:center;">镜像</th><th style="text-align:center;">刷写方式</th></tr></thead><tbody><tr><td style="text-align:center;">Allwinner Nezha D1</td><td style="text-align:center;">Allwinner Nezha D1 (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Duo</td><td style="text-align:center;">Milk-V Duo (64M RAM)</td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (64M RAM)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (64M RAM, with Python)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo (256M RAM)</td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (256M RAM)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (256M RAM, with Python)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Pioneer Box</td><td style="text-align:center;">Milk-V Pioneer Box (v1.3)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Milk-V Pioneer</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Pioneer Box (v1.2)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Pioneer Box (v1.1)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed Lichee RV</td><td style="text-align:center;">Sipeed Lichee RV (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed LicheePi 4A</td><td style="text-align:center;">Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">openEuler RISC-V (headless) for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">openEuler RISC-V (headless) for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;">StarFive VisionFive</td><td style="text-align:center;">StarFive VisionFive (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for StarFive VisionFive</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for StarFive VisionFive</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">StarFive VisionFive2</td><td style="text-align:center;">StarFive VisionFive2 (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for StarFive VisionFive2</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for StarFive VisionFive2</td><td style="text-align:center;">dd</td></tr></tbody></table><p>刷写工具根据板卡的不同依赖 <code>dd</code> 和 <code>fastboot</code> 命令， RUYI 将自动调用 <code>sudo</code> 提权。</p><p>需要注意的是一些镜像的解包需要占用大量的磁盘空间，使用 RUYI 工具刷写镜像前请务必留足磁盘空间； 一些厂家提供的镜像在刷写后并不会自动扩展分区来充分利用整块磁盘，而需要用户自行扩展磁盘分区大小。</p>`,17),l=[a];function d(r,h,c,p,o,y){return i(),e("div",null,l)}const F=t(n,[["render",d]]);export{k as __pageData,F as default};
