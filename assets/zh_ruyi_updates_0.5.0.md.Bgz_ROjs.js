import{_ as t,c as e,o as s,a4 as i}from"./chunks/framework.DRfcu8ax.js";const g=JSON.parse('{"title":"v0.5.0 版本新增特性","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi/updates/0.5.0.md","filePath":"zh/ruyi/updates/0.5.0.md","lastUpdated":1709535888000}'),a={name:"zh/ruyi/updates/0.5.0.md"},n=i(`<h1 id="v0-5-0-版本新增特性" tabindex="-1">v0.5.0 版本新增特性 <a class="header-anchor" href="#v0-5-0-版本新增特性" aria-label="Permalink to &quot;v0.5.0 版本新增特性&quot;">​</a></h1><ul><li>板卡镜像刷写支持增加到 9 款</li><li>镜像源换源支持</li></ul><h2 id="安装-v0-4-0" tabindex="-1">安装 v0.4.0 <a class="header-anchor" href="#安装-v0-4-0" aria-label="Permalink to &quot;安装 v0.4.0&quot;">​</a></h2><p>v0.5.0 版本的稳定二进制为 0.5.0 。</p><p>在 amd64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.5.0/ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 riscv64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.5.0/ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>检查安装版本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Institute of Software, Chinese Academy of Sciences (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ISCAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rights</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reserved.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache-2.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.apache.org/licenses/LICENSE-2.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0&gt;</span></span></code></pre></div><h2 id="板卡镜像刷写" tabindex="-1">板卡镜像刷写 <a class="header-anchor" href="#板卡镜像刷写" aria-label="Permalink to &quot;板卡镜像刷写&quot;">​</a></h2><p>在 0.5.0 版本，板卡镜像刷写功能所支持的板卡增加到 9 款。从该版本开始， <code>ruyi update</code> 将可以更新支持的板卡列表。</p><p>板卡支持列表：</p><table><thead><tr><th style="text-align:center;">开发板</th><th style="text-align:center;">版本</th><th style="text-align:center;">镜像</th><th style="text-align:center;">刷写方式</th></tr></thead><tbody><tr><td style="text-align:center;">Allwinner Nezha D1</td><td style="text-align:center;">Allwinner Nezha D1 (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Canaan Kendryte K230</td><td style="text-align:center;">Canaan Kendryte K230 (generic variant)</td><td style="text-align:center;">Canaan Kendryte K230 Official CanMV Debian SDK</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Canaan Kendryte K230 Official CanMV Ubuntu SDK</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Duo</td><td style="text-align:center;">Milk-V Duo (64M RAM)</td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (64M RAM)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (64M RAM, with Python)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo (256M RAM)</td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (256M RAM)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (256M RAM, with Python)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Pioneer Box</td><td style="text-align:center;">Milk-V Pioneer Box (v1.3)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Milk-V Pioneer</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Pioneer Box (v1.2)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Pioneer Box (v1.1)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">OpenWrt for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed Lichee RV</td><td style="text-align:center;">Sipeed Lichee RV (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed LicheePi 4A</td><td style="text-align:center;">Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">openEuler RISC-V (headless) for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">openEuler RISC-V (headless) for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;">StarFive VisionFive</td><td style="text-align:center;">StarFive VisionFive (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for StarFive VisionFive</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for StarFive VisionFive</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">StarFive VisionFive2</td><td style="text-align:center;">StarFive VisionFive2 (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for StarFive VisionFive2</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for StarFive VisionFive2</td><td style="text-align:center;">dd</td></tr></tbody></table><p>刷写工具根据板卡的不同依赖 <code>dd</code> 和 <code>fastboot</code> 命令， RUYI 将自动调用 <code>sudo</code> 提权。</p><p>需要注意的是一些镜像的解包需要占用大量的磁盘空间，使用 RUYI 工具刷写镜像前请务必留足磁盘空间； 一些厂家提供的镜像在刷写后并不会自动扩展分区来充分利用整块磁盘，而需要用户自行扩展磁盘分区大小。</p><h2 id="镜像源换源支持" tabindex="-1">镜像源换源支持 <a class="header-anchor" href="#镜像源换源支持" aria-label="Permalink to &quot;镜像源换源支持&quot;">​</a></h2><p>从 0.5.0 版本开始，可以使用 <code>config.toml</code> 配置 RUYI 包管理器。该文件需要您自行在 <code>~/.config/ruyi</code> 或 <code>$XDG_CONFIG_HOME/ruyi</code> 目录建立。</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">packages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用 pre-release 软件包</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prereleases = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">repo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># RuyiSDK 本地元数据路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 未配置或配置为空时，默认使用 $XDG_CACHE_HOME/ruyi/packages-index</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># RuyiSDK 远端元数据仓库</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 未配置或配置为空时，该值将被使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remote = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://github.com/ruyisdk/packages-index.git&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 远端元数据仓库分支</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 未配置或配置为空时，该值将被使用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">branch = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main&quot;</span></span></code></pre></div><p>例如当希望使用其他镜像代替默认的镜像时，可以在配置文件中配置 <code>remote</code> 参数：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.config/ruyi</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.config/ruyi/config.toml</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[repo]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">remote = &quot;https://example.domain/path/repo.git&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre></div>`,21),l=[n];function d(r,p,h,c,k,o){return s(),e("div",null,l)}const F=t(a,[["render",d]]);export{g as __pageData,F as default};
