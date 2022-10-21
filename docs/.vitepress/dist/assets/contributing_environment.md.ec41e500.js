import{_ as e,c as o,o as a,a as n}from"./app.e6a18615.js";const g='{"title":"Setting up your environment","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create and clone your fork","slug":"create-and-clone-your-fork"},{"level":2,"title":"Update your composer.json","slug":"update-your-composer-json"},{"level":2,"title":"Create a new branch","slug":"create-a-new-branch"},{"level":2,"title":"Enable hot reloading","slug":"enable-hot-reloading"}],"relativePath":"contributing/environment.md"}',t={},r=n(`<h1 id="setting-up-your-environment" tabindex="-1">Setting up your environment <a class="header-anchor" href="#setting-up-your-environment" aria-hidden="true">#</a></h1><p>This chapter shows you how to setup an environment that allows for easy modifications without the need to worry about asset compilation, etc.</p><h2 id="create-and-clone-your-fork" tabindex="-1">Create and clone your fork <a class="header-anchor" href="#create-and-clone-your-fork" aria-hidden="true">#</a></h2><p>Go to <a href="https://github.com/voyager-admin/voyager" target="_blank" rel="noopener noreferrer">Voyagers Github page</a> and click the <code>Fork</code> button. You now have your own copy of Voyager with which you can work.</p><p>The next step is to clone your fork to your local machine. You can do this by running the following command:</p><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/your-name/voyager.git
</code></pre></div><p>Where <code>your-name</code> is your Github username or the organization where you forked to repository to.</p><h2 id="update-your-composer-json" tabindex="-1">Update your composer.json <a class="header-anchor" href="#update-your-composer-json" aria-hidden="true">#</a></h2><p>In your Laravel application open the <code>composer.json</code> file and add the following to the top level:</p><div class="language-json"><pre><code><span class="token property">&quot;minimum-stability&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;voyager-admin/voyager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;repositories&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path/to/voyager&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>Where <code>path/to/voyager</code> is the relative or absolute path to your local Voyager clone.</p><p>Now run <code>composer update</code> and Composer will symlink your local fork as the Voyager package.</p><h2 id="create-a-new-branch" tabindex="-1">Create a new branch <a class="header-anchor" href="#create-a-new-branch" aria-hidden="true">#</a></h2><p>Before you start working on your changes, you should create a new branch. This will allow you to easily switch between branches and keep your main branch clean.</p><div class="language-bash"><pre><code><span class="token function">git</span> checkout -b your-branch-name
</code></pre></div><p>Where <code>your-branch-name</code> is the name of the branch you want to create.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You should create a new branch for every feature you want to add or bug you want to fix.</p></div><h2 id="enable-hot-reloading" tabindex="-1">Enable hot reloading <a class="header-anchor" href="#enable-hot-reloading" aria-hidden="true">#</a></h2><p>Everytime you want to change Javascript or CSS you should activate development mode.<br> This allows you to make changes in code and immediately see the results in your browser.</p><p>Go into the Settings, click the <code>Admin</code> group and enable the <code>Dev Server</code> option.</p><p>Now, in your fork, run <code>npm install</code> and <code>npm run watch</code> to start the development server.</p>`,21),s=[r];function p(c,i,u,l,d,h){return a(),o("div",null,s)}var m=e(t,[["render",p]]);export{g as __pageData,m as default};