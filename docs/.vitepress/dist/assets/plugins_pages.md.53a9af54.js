import{_ as n,c as s,o as a,a as t}from"./app.5d92c05f.js";const m='{"title":"Custom pages","description":"","frontmatter":{},"relativePath":"plugins/pages.md","lastUpdated":1640692859382}',p={},e=t(`<h1 id="custom-pages" tabindex="-1">Custom pages <a class="header-anchor" href="#custom-pages" aria-hidden="true">#</a></h1><p>This page shows how to add a custom page with a component only to logged-in users.<br> You need to define and register a <a href="/plugins/components.html">component</a> and add a <a href="/plugins/menu-items.html">menu-item</a> to Voyager if you want.</p><div class="language-php"><pre><code><span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Inertia<span class="token punctuation">\\</span>Inertia</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Voyager<span class="token punctuation">\\</span>Admin<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>Plugins<span class="token punctuation">\\</span>Features<span class="token punctuation">\\</span>Provider<span class="token punctuation">\\</span>ProtectedRoutes</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyPlugin</span> <span class="token keyword">implements</span> <span class="token class-name">ProtectedRoutes</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">provideProtectedRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;my-page&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Trigger Voyager to inject some necessary dynamic data</span>
            <span class="token class-name static-context">Inertia</span><span class="token operator">::</span><span class="token function">setRootView</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;voyager::app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">return</span> <span class="token class-name static-context">Inertia</span><span class="token operator">::</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;my-component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
                <span class="token string single-quoted-string">&#39;data&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">withViewData</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;My page&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),o=[e];function c(u,i,l,k,r,d){return a(),s("div",null,o)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};