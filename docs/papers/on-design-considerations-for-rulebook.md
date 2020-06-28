/\* Asciidoctor default stylesheet | MIT License |
https://asciidoctor.org \*/ /\* Uncomment @import statement to use as
custom stylesheet \*/ /\*@import
"https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400,700";\*/
article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}
audio,video{display:inline-block}
audio:not(\[controls\]){display:none;height:0}
html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}
a{background:none} a:focus{outline:thin dotted}
a:active,a:hover{outline:0} h1{font-size:2em;margin:.67em 0}
abbr\[title\]{border-bottom:1px dotted} b,strong{font-weight:bold}
dfn{font-style:italic}
hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}
mark{background:\#ff0;color:\#000}
code,kbd,pre,samp{font-family:monospace;font-size:1em}
pre{white-space:pre-wrap} q{quotes:"\\201C" "\\201D" "\\2018" "\\2019"}
small{font-size:80%}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sup{top:-.5em} sub{bottom:-.25em} img{border:0}
svg:not(:root){overflow:hidden} figure{margin:0} fieldset{border:1px
solid silver;margin:0 2px;padding:.35em .625em .75em}
legend{border:0;padding:0}
button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}
button,input{line-height:normal} button,select{text-transform:none}
button,html
input\[type="button"\],input\[type="reset"\],input\[type="submit"\]{-webkit-appearance:button;cursor:pointer}
button\[disabled\],html input\[disabled\]{cursor:default}
input\[type="checkbox"\],input\[type="radio"\]{box-sizing:border-box;padding:0}
button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}
textarea{overflow:auto;vertical-align:top}
table{border-collapse:collapse;border-spacing:0}
\*,\*::before,\*::after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}
html,body{font-size:100%}
body{background:\#fff;color:rgba(0,0,0,.8);padding:0;margin:0;font-family:"Noto
Serif","DejaVu
Serif",serif;font-weight:400;font-style:normal;line-height:1;position:relative;cursor:auto;tab-size:4;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}
a:hover{cursor:pointer} img,object,embed{max-width:100%;height:auto}
object,embed{height:100%} img{-ms-interpolation-mode:bicubic}
.left{float:left\!important} .right{float:right\!important}
.text-left{text-align:left\!important}
.text-right{text-align:right\!important}
.text-center{text-align:center\!important}
.text-justify{text-align:justify\!important} .hide{display:none}
img,object,svg{display:inline-block;vertical-align:middle}
textarea{height:auto;min-height:50px} select{width:100%}
.center{margin-left:auto;margin-right:auto} .stretch{width:100%}
.subheader,.admonitionblock
td.content\>.title,.audioblock\>.title,.exampleblock\>.title,.imageblock\>.title,.listingblock\>.title,.literalblock\>.title,.stemblock\>.title,.openblock\>.title,.paragraph\>.title,.quoteblock\>.title,table.tableblock\>.title,.verseblock\>.title,.videoblock\>.title,.dlist\>.title,.olist\>.title,.ulist\>.title,.qlist\>.title,.hdlist\>.title{line-height:1.45;color:\#7a2518;font-weight:400;margin-top:0;margin-bottom:.25em}
div,dl,dt,dd,ul,ol,li,h1,h2,h3,\#toctitle,.sidebarblock\>.content\>.title,h4,h5,h6,pre,form,p,blockquote,th,td{margin:0;padding:0;direction:ltr}
a{color:\#2156a5;text-decoration:underline;line-height:inherit}
a:hover,a:focus{color:\#1d4b8f} a img{border:0}
p{font-family:inherit;font-weight:400;font-size:1em;line-height:1.6;margin-bottom:1.25em;text-rendering:optimizeLegibility}
p aside{font-size:.875em;line-height:1.35;font-style:italic}
h1,h2,h3,\#toctitle,.sidebarblock\>.content\>.title,h4,h5,h6{font-family:"Open
Sans","DejaVu
Sans",sans-serif;font-weight:300;font-style:normal;color:\#ba3925;text-rendering:optimizeLegibility;margin-top:1em;margin-bottom:.5em;line-height:1.0125em}
h1 small,h2 small,h3 small,\#toctitle
small,.sidebarblock\>.content\>.title small,h4 small,h5 small,h6
small{font-size:60%;color:\#e99b8f;line-height:0} h1{font-size:2.125em}
h2{font-size:1.6875em}
h3,\#toctitle,.sidebarblock\>.content\>.title{font-size:1.375em}
h4,h5{font-size:1.125em} h6{font-size:1em} hr{border:solid
\#dddddf;border-width:1px 0 0;clear:both;margin:1.25em 0
1.1875em;height:0} em,i{font-style:italic;line-height:inherit}
strong,b{font-weight:bold;line-height:inherit}
small{font-size:60%;line-height:inherit} code{font-family:"Droid Sans
Mono","DejaVu Sans Mono",monospace;font-weight:400;color:rgba(0,0,0,.9)}
ul,ol,dl{font-size:1em;line-height:1.6;margin-bottom:1.25em;list-style-position:outside;font-family:inherit}
ul,ol{margin-left:1.5em} ul li ul,ul li
ol{margin-left:1.25em;margin-bottom:0;font-size:1em} ul.square li
ul,ul.circle li ul,ul.disc li ul{list-style:inherit}
ul.square{list-style-type:square} ul.circle{list-style-type:circle}
ul.disc{list-style-type:disc} ol li ul,ol li
ol{margin-left:1.25em;margin-bottom:0} dl
dt{margin-bottom:.3125em;font-weight:bold} dl dd{margin-bottom:1.25em}
abbr,acronym{text-transform:uppercase;font-size:90%;color:rgba(0,0,0,.8);border-bottom:1px
dotted \#ddd;cursor:help} abbr{text-transform:none} blockquote{margin:0
0 1.25em;padding:.5625em 1.25em 0 1.1875em;border-left:1px solid \#ddd}
blockquote cite{display:block;font-size:.9375em;color:rgba(0,0,0,.6)}
blockquote cite::before{content:"\\2014 \\0020"} blockquote cite
a,blockquote cite a:visited{color:rgba(0,0,0,.6)} blockquote,blockquote
p{line-height:1.6;color:rgba(0,0,0,.85)} @media screen and
(min-width:768px){h1,h2,h3,\#toctitle,.sidebarblock\>.content\>.title,h4,h5,h6{line-height:1.2}
h1{font-size:2.75em} h2{font-size:2.3125em}
h3,\#toctitle,.sidebarblock\>.content\>.title{font-size:1.6875em}
h4{font-size:1.4375em}}
table{background:\#fff;margin-bottom:1.25em;border:solid 1px \#dedede}
table thead,table tfoot{background:\#f7f8f7} table thead tr th,table
thead tr td,table tfoot tr th,table tfoot tr td{padding:.5em .625em
.625em;font-size:inherit;color:rgba(0,0,0,.8);text-align:left} table tr
th,table tr td{padding:.5625em
.625em;font-size:inherit;color:rgba(0,0,0,.8)} table tr.even,table
tr.alt{background:\#f8f8f7} table thead tr th,table tfoot tr th,table
tbody tr td,table tr td,table tfoot tr
td{display:table-cell;line-height:1.6}
h1,h2,h3,\#toctitle,.sidebarblock\>.content\>.title,h4,h5,h6{line-height:1.2;word-spacing:-.05em}
h1 strong,h2 strong,h3 strong,\#toctitle
strong,.sidebarblock\>.content\>.title strong,h4 strong,h5 strong,h6
strong{font-weight:400}
.clearfix::before,.clearfix::after,.float-group::before,.float-group::after{content:"
";display:table} .clearfix::after,.float-group::after{clear:both}
:not(pre):not(\[class^=L\])\>code{font-size:.9375em;font-style:normal\!important;letter-spacing:0;padding:.1em
.5ex;word-spacing:-.15em;background:\#f7f7f8;-webkit-border-radius:4px;border-radius:4px;line-height:1.45;text-rendering:optimizeSpeed;word-wrap:break-word}
:not(pre)\>code.nobreak{word-wrap:normal}
:not(pre)\>code.nowrap{white-space:nowrap}
pre{color:rgba(0,0,0,.9);font-family:"Droid Sans Mono","DejaVu Sans
Mono",monospace;line-height:1.45;text-rendering:optimizeSpeed} pre
code,pre pre{color:inherit;font-size:inherit;line-height:inherit}
pre\>code{display:block} pre.nowrap,pre.nowrap
pre{white-space:pre;word-wrap:normal} em em{font-style:normal} strong
strong{font-weight:400} .keyseq{color:rgba(51,51,51,.8)}
kbd{font-family:"Droid Sans Mono","DejaVu Sans
Mono",monospace;display:inline-block;color:rgba(0,0,0,.8);font-size:.65em;line-height:1.45;background:\#f7f7f7;border:1px
solid
\#ccc;-webkit-border-radius:3px;border-radius:3px;-webkit-box-shadow:0
1px 0 rgba(0,0,0,.2),0 0 0 .1em white inset;box-shadow:0 1px 0
rgba(0,0,0,.2),0 0 0 .1em \#fff inset;margin:0 .15em;padding:.2em
.5em;vertical-align:middle;position:relative;top:-.1em;white-space:nowrap}
.keyseq kbd:first-child{margin-left:0} .keyseq
kbd:last-child{margin-right:0} .menuseq,.menuref{color:\#000} .menuseq
b:not(.caret),.menuref{font-weight:inherit}
.menuseq{word-spacing:-.02em} .menuseq
b.caret{font-size:1.25em;line-height:.8} .menuseq
i.caret{font-weight:bold;text-align:center;width:.45em}
b.button::before,b.button::after{position:relative;top:-1px;font-weight:400}
b.button::before{content:"\[";padding:0 3px 0 2px}
b.button::after{content:"\]";padding:0 2px 0 3px} p
a\>code:hover{color:rgba(0,0,0,.9)}
\#header,\#content,\#footnotes,\#footer{width:100%;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;max-width:62.5em;\*zoom:1;position:relative;padding-left:.9375em;padding-right:.9375em}
\#header::before,\#header::after,\#content::before,\#content::after,\#footnotes::before,\#footnotes::after,\#footer::before,\#footer::after{content:"
";display:table}
\#header::after,\#content::after,\#footnotes::after,\#footer::after{clear:both}
\#content{margin-top:1.25em} \#content::before{content:none}
\#header\>h1:first-child{color:rgba(0,0,0,.85);margin-top:2.25rem;margin-bottom:0}
\#header\>h1:first-child+\#toc{margin-top:8px;border-top:1px solid
\#dddddf} \#header\>h1:only-child,body.toc2
\#header\>h1:nth-last-child(2){border-bottom:1px solid
\#dddddf;padding-bottom:8px} \#header .details{border-bottom:1px solid
\#dddddf;line-height:1.45;padding-top:.25em;padding-bottom:.25em;padding-left:.25em;color:rgba(0,0,0,.6);display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-flow:row
wrap;-webkit-flex-flow:row wrap;flex-flow:row wrap} \#header .details
span:first-child{margin-left:-.125em} \#header .details span.email
a{color:rgba(0,0,0,.85)} \#header .details br{display:none} \#header
.details br+span::before{content:"\\00a0\\2013\\00a0"} \#header .details
br+span.author::before{content:"\\00a0\\22c5\\00a0";color:rgba(0,0,0,.85)}
\#header .details br+span\#revremark::before{content:"\\00a0|\\00a0"}
\#header \#revnumber{text-transform:capitalize} \#header
\#revnumber::after{content:"\\00a0"}
\#content\>h1:first-child:not(\[class\]){color:rgba(0,0,0,.85);border-bottom:1px
solid
\#dddddf;padding-bottom:8px;margin-top:0;padding-top:1rem;margin-bottom:1.25rem}
\#toc{border-bottom:1px solid \#e7e7e9;padding-bottom:.5em}
\#toc\>ul{margin-left:.125em} \#toc
ul.sectlevel0\>li\>a{font-style:italic} \#toc ul.sectlevel0
ul.sectlevel1{margin:.5em 0} \#toc ul{font-family:"Open Sans","DejaVu
Sans",sans-serif;list-style-type:none} \#toc
li{line-height:1.3334;margin-top:.3334em} \#toc a{text-decoration:none}
\#toc a:active{text-decoration:underline}
\#toctitle{color:\#7a2518;font-size:1.2em} @media screen and
(min-width:768px){\#toctitle{font-size:1.375em}
body.toc2{padding-left:15em;padding-right:0}
\#toc.toc2{margin-top:0\!important;background:\#f8f8f7;position:fixed;width:15em;left:0;top:0;border-right:1px
solid
\#e7e7e9;border-top-width:0\!important;border-bottom-width:0\!important;z-index:1000;padding:1.25em
1em;height:100%;overflow:auto} \#toc.toc2
\#toctitle{margin-top:0;margin-bottom:.8rem;font-size:1.2em}
\#toc.toc2\>ul{font-size:.9em;margin-bottom:0} \#toc.toc2 ul
ul{margin-left:0;padding-left:1em} \#toc.toc2 ul.sectlevel0
ul.sectlevel1{padding-left:0;margin-top:.5em;margin-bottom:.5em}
body.toc2.toc-right{padding-left:0;padding-right:15em}
body.toc2.toc-right \#toc.toc2{border-right-width:0;border-left:1px
solid \#e7e7e9;left:auto;right:0}} @media screen and
(min-width:1280px){body.toc2{padding-left:20em;padding-right:0}
\#toc.toc2{width:20em} \#toc.toc2 \#toctitle{font-size:1.375em}
\#toc.toc2\>ul{font-size:.95em} \#toc.toc2 ul ul{padding-left:1.25em}
body.toc2.toc-right{padding-left:0;padding-right:20em}} \#content
\#toc{border-style:solid;border-width:1px;border-color:\#e0e0dc;margin-bottom:1.25em;padding:1.25em;background:\#f8f8f7;-webkit-border-radius:4px;border-radius:4px}
\#content \#toc\>:first-child{margin-top:0} \#content
\#toc\>:last-child{margin-bottom:0}
\#footer{max-width:100%;background:rgba(0,0,0,.8);padding:1.25em}
\#footer-text{color:rgba(255,255,255,.8);line-height:1.44}
\#content{margin-bottom:.625em} .sect1{padding-bottom:.625em} @media
screen and (min-width:768px){\#content{margin-bottom:1.25em}
.sect1{padding-bottom:1.25em}} .sect1:last-child{padding-bottom:0}
.sect1+.sect1{border-top:1px solid \#e7e7e9} \#content
h1\>a.anchor,h2\>a.anchor,h3\>a.anchor,\#toctitle\>a.anchor,.sidebarblock\>.content\>.title\>a.anchor,h4\>a.anchor,h5\>a.anchor,h6\>a.anchor{position:absolute;z-index:1001;width:1.5ex;margin-left:-1.5ex;display:block;text-decoration:none\!important;visibility:hidden;text-align:center;font-weight:400}
\#content
h1\>a.anchor::before,h2\>a.anchor::before,h3\>a.anchor::before,\#toctitle\>a.anchor::before,.sidebarblock\>.content\>.title\>a.anchor::before,h4\>a.anchor::before,h5\>a.anchor::before,h6\>a.anchor::before{content:"\\00A7";font-size:.85em;display:block;padding-top:.1em}
\#content h1:hover\>a.anchor,\#content
h1\>a.anchor:hover,h2:hover\>a.anchor,h2\>a.anchor:hover,h3:hover\>a.anchor,\#toctitle:hover\>a.anchor,.sidebarblock\>.content\>.title:hover\>a.anchor,h3\>a.anchor:hover,\#toctitle\>a.anchor:hover,.sidebarblock\>.content\>.title\>a.anchor:hover,h4:hover\>a.anchor,h4\>a.anchor:hover,h5:hover\>a.anchor,h5\>a.anchor:hover,h6:hover\>a.anchor,h6\>a.anchor:hover{visibility:visible}
\#content
h1\>a.link,h2\>a.link,h3\>a.link,\#toctitle\>a.link,.sidebarblock\>.content\>.title\>a.link,h4\>a.link,h5\>a.link,h6\>a.link{color:\#ba3925;text-decoration:none}
\#content
h1\>a.link:hover,h2\>a.link:hover,h3\>a.link:hover,\#toctitle\>a.link:hover,.sidebarblock\>.content\>.title\>a.link:hover,h4\>a.link:hover,h5\>a.link:hover,h6\>a.link:hover{color:\#a53221}
details,.audioblock,.imageblock,.literalblock,.listingblock,.stemblock,.videoblock{margin-bottom:1.25em}
details\>summary:first-of-type{cursor:pointer;display:list-item;outline:none;margin-bottom:.75em}
.admonitionblock
td.content\>.title,.audioblock\>.title,.exampleblock\>.title,.imageblock\>.title,.listingblock\>.title,.literalblock\>.title,.stemblock\>.title,.openblock\>.title,.paragraph\>.title,.quoteblock\>.title,table.tableblock\>.title,.verseblock\>.title,.videoblock\>.title,.dlist\>.title,.olist\>.title,.ulist\>.title,.qlist\>.title,.hdlist\>.title{text-rendering:optimizeLegibility;text-align:left;font-family:"Noto
Serif","DejaVu Serif",serif;font-size:1rem;font-style:italic}
table.tableblock.fit-content\>caption.title{white-space:nowrap;width:0}
.paragraph.lead\>p,\#preamble\>.sectionbody\>\[class="paragraph"\]:first-of-type
p{font-size:1.21875em;line-height:1.6;color:rgba(0,0,0,.85)}
table.tableblock
\#preamble\>.sectionbody\>\[class="paragraph"\]:first-of-type
p{font-size:inherit}
.admonitionblock\>table{border-collapse:separate;border:0;background:none;width:100%}
.admonitionblock\>table td.icon{text-align:center;width:80px}
.admonitionblock\>table td.icon img{max-width:none}
.admonitionblock\>table td.icon
.title{font-weight:bold;font-family:"Open Sans","DejaVu
Sans",sans-serif;text-transform:uppercase} .admonitionblock\>table
td.content{padding-left:1.125em;padding-right:1.25em;border-left:1px
solid \#dddddf;color:rgba(0,0,0,.6)} .admonitionblock\>table
td.content\>:last-child\>:last-child{margin-bottom:0}
.exampleblock\>.content{border-style:solid;border-width:1px;border-color:\#e6e6e6;margin-bottom:1.25em;padding:1.25em;background:\#fff;-webkit-border-radius:4px;border-radius:4px}
.exampleblock\>.content\>:first-child{margin-top:0}
.exampleblock\>.content\>:last-child{margin-bottom:0}
.sidebarblock{border-style:solid;border-width:1px;border-color:\#dbdbd6;margin-bottom:1.25em;padding:1.25em;background:\#f3f3f2;-webkit-border-radius:4px;border-radius:4px}
.sidebarblock\>:first-child{margin-top:0}
.sidebarblock\>:last-child{margin-bottom:0}
.sidebarblock\>.content\>.title{color:\#7a2518;margin-top:0;text-align:center}
.exampleblock\>.content\>:last-child\>:last-child,.exampleblock\>.content
.olist\>ol\>li:last-child\>:last-child,.exampleblock\>.content
.ulist\>ul\>li:last-child\>:last-child,.exampleblock\>.content
.qlist\>ol\>li:last-child\>:last-child,.sidebarblock\>.content\>:last-child\>:last-child,.sidebarblock\>.content
.olist\>ol\>li:last-child\>:last-child,.sidebarblock\>.content
.ulist\>ul\>li:last-child\>:last-child,.sidebarblock\>.content
.qlist\>ol\>li:last-child\>:last-child{margin-bottom:0} .literalblock
pre,.listingblock\>.content\>pre{-webkit-border-radius:4px;border-radius:4px;word-wrap:break-word;overflow-x:auto;padding:1em;font-size:.8125em}
@media screen and (min-width:768px){.literalblock
pre,.listingblock\>.content\>pre{font-size:.90625em}} @media screen and
(min-width:1280px){.literalblock
pre,.listingblock\>.content\>pre{font-size:1em}} .literalblock
pre,.listingblock\>.content\>pre:not(.highlight),.listingblock\>.content\>pre\[class="highlight"\],.listingblock\>.content\>pre\[class^="highlight
"\]{background:\#f7f7f8} .literalblock.output
pre{color:\#f7f7f8;background:rgba(0,0,0,.9)}
.listingblock\>.content{position:relative} .listingblock
code\[data-lang\]::before{display:none;content:attr(data-lang);position:absolute;font-size:.75em;top:.425rem;right:.5rem;line-height:1;text-transform:uppercase;color:inherit;opacity:.5}
.listingblock:hover code\[data-lang\]::before{display:block}
.listingblock.terminal pre
.command::before{content:attr(data-prompt);padding-right:.5em;color:inherit;opacity:.5}
.listingblock.terminal pre
.command:not(\[data-prompt\])::before{content:"$"} .listingblock
pre.highlightjs{padding:0} .listingblock
pre.highlightjs\>code{padding:1em;-webkit-border-radius:4px;border-radius:4px}
.listingblock pre.prettyprint{border-width:0}
.prettyprint{background:\#f7f7f8} pre.prettyprint
.linenums{line-height:1.45;margin-left:2em} pre.prettyprint
li{background:none;list-style-type:inherit;padding-left:0}
pre.prettyprint li code\[data-lang\]::before{opacity:1} pre.prettyprint
li:not(:first-child) code\[data-lang\]::before{display:none}
table.linenotable{border-collapse:separate;border:0;margin-bottom:0;background:none}
table.linenotable
td\[class\]{color:inherit;vertical-align:top;padding:0;line-height:inherit;white-space:normal}
table.linenotable td.code{padding-left:.75em} table.linenotable
td.linenos{border-right:1px solid
currentColor;opacity:.35;padding-right:.5em} pre.pygments
.lineno{border-right:1px solid
currentColor;opacity:.35;display:inline-block;margin-right:.75em}
pre.pygments .lineno::before{content:"";margin-right:-.125em}
.quoteblock{margin:0 1em 1.25em 1.5em;display:table}
.quoteblock:not(.excerpt)\>.title{margin-left:-1.5em;margin-bottom:.75em}
.quoteblock blockquote,.quoteblock
p{color:rgba(0,0,0,.85);font-size:1.15rem;line-height:1.75;word-spacing:.1em;letter-spacing:0;font-style:italic;text-align:justify}
.quoteblock blockquote{margin:0;padding:0;border:0} .quoteblock
blockquote::before{content:"\\201c";float:left;font-size:2.75em;font-weight:bold;line-height:.6em;margin-left:-.6em;color:\#7a2518;text-shadow:0
1px 2px rgba(0,0,0,.1)} .quoteblock blockquote\>.paragraph:last-child
p{margin-bottom:0} .quoteblock
.attribution{margin-top:.75em;margin-right:.5ex;text-align:right}
.verseblock{margin:0 1em 1.25em} .verseblock pre{font-family:"Open
Sans","DejaVu
Sans",sans;font-size:1.15rem;color:rgba(0,0,0,.85);font-weight:300;text-rendering:optimizeLegibility}
.verseblock pre strong{font-weight:400} .verseblock
.attribution{margin-top:1.25rem;margin-left:.5ex} .quoteblock
.attribution,.verseblock
.attribution{font-size:.9375em;line-height:1.45;font-style:italic}
.quoteblock .attribution br,.verseblock .attribution br{display:none}
.quoteblock .attribution cite,.verseblock .attribution
cite{display:block;letter-spacing:-.025em;color:rgba(0,0,0,.6)}
.quoteblock.abstract blockquote::before,.quoteblock.excerpt
blockquote::before,.quoteblock .quoteblock
blockquote::before{display:none} .quoteblock.abstract
blockquote,.quoteblock.abstract p,.quoteblock.excerpt
blockquote,.quoteblock.excerpt p,.quoteblock .quoteblock
blockquote,.quoteblock .quoteblock p{line-height:1.6;word-spacing:0}
.quoteblock.abstract{margin:0 1em 1.25em;display:block}
.quoteblock.abstract\>.title{margin:0 0
.375em;font-size:1.15em;text-align:center}
.quoteblock.excerpt\>blockquote,.quoteblock .quoteblock{padding:0 0
.25em 1em;border-left:.25em solid \#dddddf}
.quoteblock.excerpt,.quoteblock .quoteblock{margin-left:0}
.quoteblock.excerpt blockquote,.quoteblock.excerpt p,.quoteblock
.quoteblock blockquote,.quoteblock .quoteblock
p{color:inherit;font-size:1.0625rem} .quoteblock.excerpt
.attribution,.quoteblock .quoteblock
.attribution{color:inherit;text-align:left;margin-right:0}
table.tableblock{max-width:100%;border-collapse:separate}
p.tableblock:last-child{margin-bottom:0}
td.tableblock\>.content\>:last-child{margin-bottom:-1.25em}
td.tableblock\>.content\>:last-child.sidebarblock{margin-bottom:0}
table.tableblock,th.tableblock,td.tableblock{border:0 solid \#dedede}
table.grid-all\>thead\>tr\>.tableblock,table.grid-all\>tbody\>tr\>.tableblock{border-width:0
1px 1px 0} table.grid-all\>tfoot\>tr\>.tableblock{border-width:1px 1px 0
0} table.grid-cols\>\*\>tr\>.tableblock{border-width:0 1px 0 0}
table.grid-rows\>thead\>tr\>.tableblock,table.grid-rows\>tbody\>tr\>.tableblock{border-width:0
0 1px} table.grid-rows\>tfoot\>tr\>.tableblock{border-width:1px 0 0}
table.grid-all\>\*\>tr\>.tableblock:last-child,table.grid-cols\>\*\>tr\>.tableblock:last-child{border-right-width:0}
table.grid-all\>tbody\>tr:last-child\>.tableblock,table.grid-all\>thead:last-child\>tr\>.tableblock,table.grid-rows\>tbody\>tr:last-child\>.tableblock,table.grid-rows\>thead:last-child\>tr\>.tableblock{border-bottom-width:0}
table.frame-all{border-width:1px} table.frame-sides{border-width:0 1px}
table.frame-topbot,table.frame-ends{border-width:1px 0}
table.stripes-all tr,table.stripes-odd
tr:nth-of-type(odd),table.stripes-even
tr:nth-of-type(even),table.stripes-hover tr:hover{background:\#f8f8f7}
th.halign-left,td.halign-left{text-align:left}
th.halign-right,td.halign-right{text-align:right}
th.halign-center,td.halign-center{text-align:center}
th.valign-top,td.valign-top{vertical-align:top}
th.valign-bottom,td.valign-bottom{vertical-align:bottom}
th.valign-middle,td.valign-middle{vertical-align:middle} table thead
th,table tfoot th{font-weight:bold} tbody tr
th{display:table-cell;line-height:1.6;background:\#f7f8f7} tbody tr
th,tbody tr th p,tfoot tr th,tfoot tr th
p{color:rgba(0,0,0,.8);font-weight:bold}
p.tableblock\>code:only-child{background:none;padding:0}
p.tableblock{font-size:1em} ol{margin-left:1.75em} ul li
ol{margin-left:1.5em} dl dd{margin-left:1.125em} dl dd:last-child,dl
dd:last-child\>:last-child{margin-bottom:0} ol\>li p,ul\>li p,ul dd,ol
dd,.olist .olist,.ulist .ulist,.ulist .olist,.olist
.ulist{margin-bottom:.625em}
ul.checklist,ul.none,ol.none,ul.no-bullet,ol.no-bullet,ol.unnumbered,ul.unstyled,ol.unstyled{list-style-type:none}
ul.no-bullet,ol.no-bullet,ol.unnumbered{margin-left:.625em}
ul.unstyled,ol.unstyled{margin-left:0} ul.checklist{margin-left:.625em}
ul.checklist li\>p:first-child\>.fa-square-o:first-child,ul.checklist
li\>p:first-child\>.fa-check-square-o:first-child{width:1.25em;font-size:.8em;position:relative;bottom:.125em}
ul.checklist
li\>p:first-child\>input\[type="checkbox"\]:first-child{margin-right:.25em}
ul.inline{display:-ms-flexbox;display:-webkit-box;display:flex;-ms-flex-flow:row
wrap;-webkit-flex-flow:row wrap;flex-flow:row
wrap;list-style:none;margin:0 0 .625em -1.25em}
ul.inline\>li{margin-left:1.25em} .unstyled dl
dt{font-weight:400;font-style:normal} ol.arabic{list-style-type:decimal}
ol.decimal{list-style-type:decimal-leading-zero}
ol.loweralpha{list-style-type:lower-alpha}
ol.upperalpha{list-style-type:upper-alpha}
ol.lowerroman{list-style-type:lower-roman}
ol.upperroman{list-style-type:upper-roman}
ol.lowergreek{list-style-type:lower-greek}
.hdlist\>table,.colist\>table{border:0;background:none}
.hdlist\>table\>tbody\>tr,.colist\>table\>tbody\>tr{background:none}
td.hdlist1,td.hdlist2{vertical-align:top;padding:0 .625em}
td.hdlist1{font-weight:bold;padding-bottom:1.25em}
.literalblock+.colist,.listingblock+.colist{margin-top:-.5em} .colist
td:not(\[class\]):first-child{padding:.4em .75em
0;line-height:1;vertical-align:top} .colist
td:not(\[class\]):first-child img{max-width:none} .colist
td:not(\[class\]):last-child{padding:.25em 0}
.thumb,.th{line-height:0;display:inline-block;border:solid 4px
\#fff;-webkit-box-shadow:0 0 0 1px \#ddd;box-shadow:0 0 0 1px \#ddd}
.imageblock.left{margin:.25em .625em 1.25em 0}
.imageblock.right{margin:.25em 0 1.25em .625em}
.imageblock\>.title{margin-bottom:0}
.imageblock.thumb,.imageblock.th{border-width:6px}
.imageblock.thumb\>.title,.imageblock.th\>.title{padding:0 .125em}
.image.left,.image.right{margin-top:.25em;margin-bottom:.25em;display:inline-block;line-height:0}
.image.left{margin-right:.625em} .image.right{margin-left:.625em}
a.image{text-decoration:none;display:inline-block} a.image
object{pointer-events:none}
sup.footnote,sup.footnoteref{font-size:.875em;position:static;vertical-align:super}
sup.footnote a,sup.footnoteref a{text-decoration:none} sup.footnote
a:active,sup.footnoteref a:active{text-decoration:underline}
\#footnotes{padding-top:.75em;padding-bottom:.75em;margin-bottom:.625em}
\#footnotes hr{width:20%;min-width:6.25em;margin:-.25em 0
.75em;border-width:1px 0 0} \#footnotes .footnote{padding:0 .375em 0
.225em;line-height:1.3334;font-size:.875em;margin-left:1.2em;margin-bottom:.2em}
\#footnotes .footnote
a:first-of-type{font-weight:bold;text-decoration:none;margin-left:-1.05em}
\#footnotes .footnote:last-of-type{margin-bottom:0} \#content
\#footnotes{margin-top:-.625em;margin-bottom:0;padding:.75em 0} .gist
.file-data\>table{border:0;background:\#fff;width:100%;margin-bottom:0}
.gist .file-data\>table td.line-data{width:99%}
div.unbreakable{page-break-inside:avoid} .big{font-size:larger}
.small{font-size:smaller} .underline{text-decoration:underline}
.overline{text-decoration:overline}
.line-through{text-decoration:line-through} .aqua{color:\#00bfbf}
.aqua-background{background:\#00fafa} .black{color:\#000}
.black-background{background:\#000} .blue{color:\#0000bf}
.blue-background{background:\#0000fa} .fuchsia{color:\#bf00bf}
.fuchsia-background{background:\#fa00fa} .gray{color:\#606060}
.gray-background{background:\#7d7d7d} .green{color:\#006000}
.green-background{background:\#007d00} .lime{color:\#00bf00}
.lime-background{background:\#00fa00} .maroon{color:\#600000}
.maroon-background{background:\#7d0000} .navy{color:\#000060}
.navy-background{background:\#00007d} .olive{color:\#606000}
.olive-background{background:\#7d7d00} .purple{color:\#600060}
.purple-background{background:\#7d007d} .red{color:\#bf0000}
.red-background{background:\#fa0000} .silver{color:\#909090}
.silver-background{background:\#bcbcbc} .teal{color:\#006060}
.teal-background{background:\#007d7d} .white{color:\#bfbfbf}
.white-background{background:\#fafafa} .yellow{color:\#bfbf00}
.yellow-background{background:\#fafa00} span.icon\>.fa{cursor:default} a
span.icon\>.fa{cursor:inherit} .admonitionblock td.icon \[class^="fa
icon-"\]{font-size:2.5em;text-shadow:1px 1px 2px
rgba(0,0,0,.5);cursor:default} .admonitionblock td.icon
.icon-note::before{content:"\\f05a";color:\#19407c} .admonitionblock
td.icon .icon-tip::before{content:"\\f0eb";text-shadow:1px 1px 2px
rgba(155,155,0,.8);color:\#111} .admonitionblock td.icon
.icon-warning::before{content:"\\f071";color:\#bf6900} .admonitionblock
td.icon .icon-caution::before{content:"\\f06d";color:\#bf3400}
.admonitionblock td.icon
.icon-important::before{content:"\\f06a";color:\#bf0000}
.conum\[data-value\]{display:inline-block;color:\#fff\!important;background:rgba(0,0,0,.8);-webkit-border-radius:100px;border-radius:100px;text-align:center;font-size:.75em;width:1.67em;height:1.67em;line-height:1.67em;font-family:"Open
Sans","DejaVu Sans",sans-serif;font-style:normal;font-weight:bold}
.conum\[data-value\] \*{color:\#fff\!important}
.conum\[data-value\]+b{display:none}
.conum\[data-value\]::after{content:attr(data-value)} pre
.conum\[data-value\]{position:relative;top:-.125em} b.conum
\*{color:inherit\!important}
.conum:not(\[data-value\]):empty{display:none}
dt,th.tableblock,td.content,div.footnote{text-rendering:optimizeLegibility}
h1,h2,p,td.content,span.alt{letter-spacing:-.01em} p strong,td.content
strong,div.footnote strong{letter-spacing:-.005em}
p,blockquote,dt,td.content,span.alt{font-size:1.0625rem}
p{margin-bottom:1.25rem} .sidebarblock p,.sidebarblock dt,.sidebarblock
td.content,p.tableblock{font-size:1em}
.exampleblock\>.content{background:\#fffef7;border-color:\#e0e0dc;-webkit-box-shadow:0
1px 4px \#e0e0dc;box-shadow:0 1px 4px \#e0e0dc}
.print-only{display:none\!important} @page{margin:1.25cm .75cm} @media
print{\*{-webkit-box-shadow:none\!important;box-shadow:none\!important;text-shadow:none\!important}
html{font-size:80%}
a{color:inherit\!important;text-decoration:underline\!important}
a.bare,a\[href^="\#"\],a\[href^="mailto:"\]{text-decoration:none\!important}
a\[href^="http:"\]:not(.bare)::after,a\[href^="https:"\]:not(.bare)::after{content:"("
attr(href) ")";display:inline-block;font-size:.875em;padding-left:.25em}
abbr\[title\]::after{content:" (" attr(title) ")"}
pre,blockquote,tr,img,object,svg{page-break-inside:avoid}
thead{display:table-header-group} svg{max-width:100%}
p,blockquote,dt,td.content{font-size:1em;orphans:3;widows:3}
h2,h3,\#toctitle,.sidebarblock\>.content\>.title{page-break-after:avoid}
\#toc,.sidebarblock,.exampleblock\>.content{background:none\!important}
\#toc{border-bottom:1px solid
\#dddddf\!important;padding-bottom:0\!important} body.book
\#header{text-align:center} body.book
\#header\>h1:first-child{border:0\!important;margin:2.5em 0 1em}
body.book \#header
.details{border:0\!important;display:block;padding:0\!important}
body.book \#header .details span:first-child{margin-left:0\!important}
body.book \#header .details br{display:block} body.book \#header
.details br+span::before{content:none\!important} body.book
\#toc{border:0\!important;text-align:left\!important;padding:0\!important;margin:0\!important}
body.book \#toc,body.book \#preamble,body.book h1.sect0,body.book
.sect1\>h2{page-break-before:always} .listingblock
code\[data-lang\]::before{display:block} \#footer{padding:0 .9375em}
.hide-on-print{display:none\!important}
.print-only{display:block\!important}
.hide-for-print{display:none\!important}
.show-for-print{display:inherit\!important}} @media
print,amzn-kf8{\#header\>h1:first-child{margin-top:1.25rem}
.sect1{padding:0\!important} .sect1+.sect1{border:0}
\#footer{background:none}
\#footer-text{color:rgba(0,0,0,.6);font-size:.9em}} @media
amzn-kf8{\#header,\#content,\#footnotes,\#footer{padding:0}}

Instutionally offered Lex

MainIssës

Posession Holdership Singularity Uniqueness

UNCITRAL, 17(3)

Control Exclusive Control

Rotterdam

Source: Miriam Goldby \*Legal recognition of electronic alternatives to
documents of title, 2011 \*

Two Modes of Lex Operandi

American and English

English

Inclusion of Novation and Attornment

\#

To a lawyer, a legal contract has a distinct meaning:

A contract is an agreement giving rise to obligations which are enforced
or recognised by law. The factor which distinguishes contractual from
other legal obligations is that they are based on the agreement of the
contracting parties7. For a contract to be valid, legal systems will
impose certain requirements. Under English law, there are four key
elements that must (usually) be satisfied: (i) one of the contracting
parties must make an offer to contract and the other(s) must accept that
offer; (ii) there must be ‘consideration’ for the offer, this being some
form of value that must be exchanged; (iii) the parties must have an
intention to form legal relations; and (iv) there must be certainty as
to terms of the contract. Other systems of law may have other
requirements – for example, under New York law, many legal contracts
must be in writing and signed to become binding. - ISDA, "Smart
Contracts and Distributed Ledger – A Legal Perspective"

Other systems of law may have other requirements — for example, under
New York law, many legal contracts must be

in writing and signed to become binding.

Two Modes: National and International

| Contract Function              |
| ------------------------------ |
| Master Covenant                |
| RuleBook Agreement             |
| Master Participation Agreement |
| Network Operator Agreement     |
| Transactional Clauses          |
| Amendment Clauses              |
| Business Terms and Conditions  |
| Intergration Clause            |

National excludes lex mercatoria

Clause \<\#\> – Choice of law: lex mercatoria and Unidroit Principles
This contract is governed by general principles of law generally
recognized in international trade (lex mercatoria) together with the
Unidroit Principles of International Commercial Contracts (except for
Articles 2.20, 3.2.7 and 6.2.1).

Clause \<\#\> – Network Model Clause ?ref This contract shall be
governed by the law of \[State X\] interpreted and supplemented by the
Freight Trust Rule Book version \<\#\>

Clause 6.1 “Any questions relating to this Agreement which are not
expressly or implicitly settled by the provisions contained in this
Agreement shall be governed, in the following order: 1) by the
principles of law generally recognized in international trade as
applicable to international \[type of contract: e.g., distributorship,
licence\] contracts, 2) by the relevant trade usages, and 3) by the
Unidroit Principles of International Commercial Contracts, with the
exclusion of national laws.” This clause, which is the most frequently
used clause within the ICC model contracts, states that the contract
shall be governed by the lex mercatoria and the Unidroit Principles and
provides at the same time the following hierarchical order: 1. Contract
provisions, 2. general principles of law applicable to the particular
type of contract in question, 3. trade usages, 4. Unidroit Principles.

Four Principles in creating IoL

Four principles appear to be desirable and should insofar as it is
possible be pursued together:

the promotion of certainty and predictability;

the promotion of uni&#2;formity of application;

the protection of democratic ideals andensuring of jurisprudential
deliberation,

the retention of efficiency.

Systems based approach

Often when two companies deal with each other in the course of business,
they will use standard form contracts. Often these standard forms
contain terms which conflict (e.g. both parties include a liability
waiver in their form). The 'battle of the forms' refers to the resulting
legal dispute arising where both parties accept that a legally binding
contract exists, but disagree about whose standard terms apply. Such
disputes may be resolved by reference to the 'last document rule', i.e.
whichever business sent the last document, or 'fired the last shot'
(often the seller’s delivery note) is held to have issued the final
offer and the buyer’s organisation is held to have accepted the offer by
signing the delivery note or simply accepting and using the delivered
goods.

\~\~RuleBook Changes \~\~

RuleBook Clause Design Specifications

The following criteria constitute the basis of the RuleBook program that
identifies clauses hat do not

serve the purpose of maininting a neutral legal framework.

Rules…​

that address problems that have not been defined

that address problems that no longer exist

that address more than one problem

that lack a stated, measurable problemsolving goal, or purpose

Laws that fail to achieve their goal

Laws that lack a citation of references

whose burdens are greater than their problemsolving benefit

whose problemsolving benefit and burdens are equal

whose results cannot be measured

that interfere with other laws

that duplicate other laws

that have not undergone QA analysis within a specified time frame or
approval process

RuleBook

\#\#

Authorized Representative

(a) Each Network Participant shall designate one or more Authorized
Representatives to sign all instruments, correct errors, perform such
other duties as may be required under the Rules and transact all
business in connection with the operations of FreightTrust. Each Network
Participant must provide FreightTrust with current contact and other
requested information for each of its Authorized Representatives.

(b) To designate an Authorized Representative, a Network Participant
must provide the information requested and conform to the procedures and
requirements established by Freight Trust. By agreeing to become an
Authorized Representative, an individual agrees to be bound by the
duties and responsibilities of an Authorized Representative and to be
subject to, and comply with, the Rules and Obligations to the extent
applicable.

(c) Freight Trust will promptly notify a Network Participant of the
approval of nominated Authorized Representatives and will maintain a
list of all approved Authorized Representatives for each Network
Participant. Freight Trust shall promptly notif the parties involved if
Freight Trust (i) declines to approve the designation, (ii) revokes the
designation, or (iii) suspends the designation of an Authorized
Representative or/and Network Participant.

(d) An Authorized Representative who is suspended remains subject to the
Rules and jurisdiction throughout the period of suspension.

(e) To request the termination of the designation of an Authorized
Representative, the Network Participant or the Authorized Representative
must notify Freight Trust providing the information and complying with
the procedures and requirements established by Freight Trust.

(f) An Authorized Representative remains subject to the Rules and the
jurisdiction of Freight Trust for acts done and omissions made while
registered as such, and a proceeding relating to an individual whose
designation as an Authorized Representative or Network Participant and
has been terminated or suspended shall occur as if the Authorized
Representative were still registered as such.

Dispute Resolution

All Network Participants shall be required to arbitrate all disputes
between or among themselves that relate to or arise out of any
transaction submitted for

instrumentailization

in accordance with this Rule Book. For these purposes, each Network
Participant shall be deemed a “Participant” for purposes of the rules
set forth. Disputes involving Customers may be arbitrated in accordance
to policy setforth in this Rule Book.

Freight Specifics

FCMSA Clauses

Broker/Freight Forwader

Property broker surety bond or trust fund. (a) Security. A broker must
have a surety bond or trust fund in effect for $75,000. The FMCSA will
not issue a broker license until a surety bond or trust fund for the
full limits of liability prescribed herein is in effect. The broker
license shall remain valid or effective only as long as a surety bond or
trust fund remains in effect and shall ensure the financial
responsibility of the broker. (b) Evidence of security. Evidence of a
surety bond must be filed using the FMCSA's prescribed Form BMC 84.
Evidence of a trust fund with a financial institution must be filed
using the FMCSA's prescribed Form BMC 85. The surety bond or the trust
fund shall ensure the financial responsibility of the broker by
providing for payments to shippers or motor carriers if the broker fails
to carry out its contracts, agreements, or arrangements for the
supplying of transportation by authorized motor carriers. (c) Financial
institution—when used in this section and in forms prescribed under this
section, where not otherwise distinctly expressed or manifestly
incompatible with the intent thereof, shall mean—Each agent, agency,
branch or office within the United States of any person, as defined by
the ICC Termination Act, doing business in one or more of the capacities
listed below:

(1) An insured bank (as defined in section 3(h) of the Federal Deposit
Insurance Act (12 U.S.C. 1813(h)); (2) A commercial bank or trust
company; (3) An agency or branch of a foreign bank in the United States;
(4) An insured institution (as defined in section 401(a) of the National
Housing Act (12 U.S.C. 1724(a)); (5) A thrift institution (savings bank,
building and loan association, credit union, industrial bank or other);
(6) An insurance company; (7) A loan or finance company; or (8) A person
subject to supervision by any State or Federal bank supervisory
authority. (d) Forms and Procedures--(1) Forms for broker surety bonds
and trust agreements. Form BMC-84 broker surety bond will be filed with
the FMCSA for the full security limits under paragraph (a) of this
section; or Form BMC-85 broker trust fund agreement will be filed with
the FMCSA for the full security limits under paragraph (a) of this
section.

(2) Broker surety bonds and trust fund agreements in effect
continuously. Surety bonds and trust fund agreements shall specify that
coverage thereunder will remain in effect continuously until terminated
as herein provided. (i) Cancellation notice. The surety bond and the
trust fund agreement may be cancelled as only upon 30 days' written
notice to the FMCSA, on prescribed Form BMC 36, by the principal or
surety for the surety bond, and on prescribed Form BMC 85, by the
trustor/broker or trustee for the trust fund agreement. The notice
period commences upon the actual receipt of the notice at the FMCSA's
Washington, DC office. (ii) Termination by replacement. Broker surety
bonds or trust fund agreements which have been accepted by the FMCSA
under these rules may be replaced by other surety bonds or trust fund
agreements, and the liability of the retiring surety or trustee under
such surety bond or trust fund agreements shall be considered as having
terminated as of the effective date of the replacement surety bond or
trust fund agreement. However, such termination shall not affect the
liability of the surety or the trustee hereunder for the payment of any
damages arising as the result of contracts, agreements or arrangements
made by the broker for the supplying of transportation prior to the date
such termination becomes effective. (3) Filing and copies. Broker surety
bonds and trust fund agreements must be filed with the FMCSA in
duplicate.

\[53 FR 10396, Mar. 31, 1988, as amended at 75 FR 72998, Nov. 29, 2010;
78 FR 58482, Sept. 24, 2013; 78 FR 60233, Oct. 1, 2013\]

Last updated 2020-06-23 21:25:23 -0700