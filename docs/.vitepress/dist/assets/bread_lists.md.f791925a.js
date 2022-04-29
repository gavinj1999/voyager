import{_ as e,c as t,o as r,a}from"./app.ccd62082.js";var o="/voyager/bread-builder/list-order.png",i="/voyager/bread-builder/filters.png";const g='{"title":"Lists","description":"","frontmatter":{},"headers":[{"level":3,"title":"Ordering items","slug":"ordering-items"},{"level":3,"title":"Column","slug":"column"},{"level":3,"title":"Title","slug":"title"},{"level":3,"title":"Link to","slug":"link-to"},{"level":3,"title":"Options","slug":"options"},{"level":2,"title":"Filters","slug":"filters"}],"relativePath":"bread/lists.md"}',s={},d=a('<h1 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-hidden="true">#</a></h1><p>Lists are used for browsing a BREAD.</p><h3 id="ordering-items" tabindex="-1">Ordering items <a class="header-anchor" href="#ordering-items" aria-hidden="true">#</a></h3><p>Click and hold the up/down arrows on the left side of your formfield and move your mouse to the desired positions.</p><p><img src="'+o+'" alt=""></p><h3 id="column" tabindex="-1">Column <a class="header-anchor" href="#column" aria-hidden="true">#</a></h3><p>Here you select the column you want to be displayed.<br> This can be a regular column in your database, an accessor or even a column from a relationship.</p><h3 id="title" tabindex="-1">Title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h3><p>The title which is shown in the header of the table when browsing your BREAD. This field is translatable.</p><h3 id="link-to" tabindex="-1">Link to <a class="header-anchor" href="#link-to" aria-hidden="true">#</a></h3><p>When selected the content of this formfield will be linked to edit or read of this item.<br> This also works for relationships if a BREAD exists for the related item.</p><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3><p>Blub</p><h4 id="searchable" tabindex="-1">Searchable <a class="header-anchor" href="#searchable" aria-hidden="true">#</a></h4><p>Makes the field searchable.</p><h4 id="orderable" tabindex="-1">Orderable <a class="header-anchor" href="#orderable" aria-hidden="true">#</a></h4><p>Makes the formfield orderable.</p><h4 id="ordered-by-default" tabindex="-1">Ordered by default <a class="header-anchor" href="#ordered-by-default" aria-hidden="true">#</a></h4><p>When browsing your BREAD, it will be ordered by this formfield by default.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Searching and ordering does <strong>not</strong> work on accessors and ordering does not work on relationship properties because it would require to load <strong>all</strong> results and then searching/ordering through them.</p></div><h4 id="translatable" tabindex="-1">Translatable <a class="header-anchor" href="#translatable" aria-hidden="true">#</a></h4><p>Check this checkbox if you want this field to be translatable.<br> Read more about multilanguage <a href="./multilanguage.html">here</a>.</p><h4 id="options-1" tabindex="-1">Options <a class="header-anchor" href="#options-1" aria-hidden="true">#</a></h4><p>Opens a slide-in containing all options of the formfield.</p><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-hidden="true">#</a></h2><p>Filters are little but powerful buttons shown on top of the browse table. They allow the user to apply customized queries or scopes to their results.<br> By clicking the <code>+</code> icon you add filter which you then align to your needs.</p><p><img src="'+i+'" alt=""></p><p>Here are the options for a filter:</p><table><thead><tr><th><strong>Field</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>Name</td><td>The name displayed in the button. This field is translatable</td></tr><tr><td>Column</td><td>The column you want to filter by. Select <code>None</code> if you want to use a scope</td></tr><tr><td>Operator</td><td>The operator which will be used in the query</td></tr><tr><td>Value or scope-name</td><td>The value you want to test against or the name of the scope to use</td></tr><tr><td>Color</td><td>The color of the filter button</td></tr><tr><td>Icon</td><td>An icon that is shown on the left in the button. Can be none</td></tr></tbody></table>',29),l=[d];function n(h,c,u,p,b,f){return r(),t("div",null,l)}var _=e(s,[["render",n]]);export{g as __pageData,_ as default};