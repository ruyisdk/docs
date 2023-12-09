import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.76cb5871.js";const F=JSON.parse('{"title":"用户软件源搭建","description":"","frontmatter":{},"headers":[],"relativePath":"zh/mirror/index.md","filePath":"zh/mirror/index.md","lastUpdated":1702129622000}'),l={name:"zh/mirror/index.md"},p=o(`<h1 id="用户软件源搭建" tabindex="-1">用户软件源搭建 <a class="header-anchor" href="#用户软件源搭建" aria-label="Permalink to &quot;用户软件源搭建&quot;">​</a></h1><p>软件源搭建功能在 v0.2 尚未开发完全，仅有建立 manifest 的功能。</p><p>建立 manifest ：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ruyi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">admin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manifest</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./source/zlib-ng-2.1.5.tar.gz</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;zlib-ng-2.1.5.tar.gz&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2410601</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;checksums&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;sha512&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;9212d87c63a2da4e5355a7a1c75380aeba40fbd0ea3d71d3784cb3eac94237f9bea2a1b7993a08f39d4197725c4c133087d3a9d213d3944aa48a7559de2be920&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;sha256&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3f6576971397b379d4205ae5451ff5a68edf6c103b2f03c4188ed7075fbb5f04&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ruyi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">admin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manifest</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./source/zlib-ng-2.1.5.tar.gz</span></span>
<span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;zlib-ng-2.1.5.tar.gz&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;size&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2410601</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;checksums&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;sha512&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;9212d87c63a2da4e5355a7a1c75380aeba40fbd0ea3d71d3784cb3eac94237f9bea2a1b7993a08f39d4197725c4c133087d3a9d213d3944aa48a7559de2be920&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;sha256&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3f6576971397b379d4205ae5451ff5a68edf6c103b2f03c4188ed7075fbb5f04&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div>`,4),e=[p];function t(c,r,E,y,i,d){return a(),n("div",null,e)}const q=s(l,[["render",t]]);export{F as __pageData,q as default};
