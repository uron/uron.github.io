"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'},webpackJsonp([2],{416:function(s,t,a){function e(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function l(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=e(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var n="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(l(),window.HAS_CREATE_FONT_STYLE=!0)}},422:function(s,t,a){var e=a(423);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(418)("902f02d2",e,!0)},423:function(s,t,a){(t=s.exports=a(417)(void 0)).push([s.i,"._2I2s-gnkVYaO-1Vn{color:red}.amQ2qkM3IvghJhwM{font-weight:700}",""]),t.locals={red:"_2I2s-gnkVYaO-1Vn",bold:"amQ2qkM3IvghJhwM"}},462:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e={render:function(){var s=this.$createElement;return(this._self._c||s)("p",{class:this.$style.red},[this._v("\n    This should be red.\n")])},staticRenderFns:[]},l={},n={components:{Ce8ba96:a(1)(null,e,!1,function(s){l.$style=a(422),this.$style=l.$style},null,null).exports}},r={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("u-article",[a("h1",[s._v("模块化")]),a("h3",[s._v("完全模块化")]),a("p",[s._v("通常大型前端工程需要处理的资源文件有很多，常见的JS、CSS和图片，还有字体、视频、音频等其他静态资源，传统的Require.js、SASS/LESS、Icomoon等工具往往只是片面的处理了某一类资源，这些方案在前端模块化问题的处理上都是不完全的。")]),a("p",[s._v("而在Webpack看来：")]),a("blockquote",[a("p",[s._v("一切资源皆模块。")])]),a("p",[s._v("我们把这称为"),a("strong",[s._v("模块化的完备性")]),s._v("。")]),a("p",[s._v("Webpack这样处理了之后，有三大优势：")]),a("ul",[a("li",[s._v("依赖关系单一化：所有CSS和图片等资源的依赖关系统一走JS路线，无需额外处理CSS预处理器的依赖关系，也不需处理代码迁移时的图片合并、字体图片等路径问题；")]),a("li",[s._v("资源处理集成化：比如可以统一处理资源的hash、同步异步加载等问题，同时也可以将类似vue这样复杂的文件一起容纳到这个体系；")]),a("li",[s._v("通用组件标准化：传统一个社区通用组件的引入方式五花八门，现在可以按照Webpack的loaders来标准化。")])]),a("h3",[s._v("JS的模块化")]),a("p",[s._v("在当前的JavaScript发展趋势下，已经没有理由不选择ES6 Modules了。")]),a("h4",[s._v("Babel")]),a("p",[s._v("Vusion CLI已经集成了"),a("u-link",{attrs:{href:"https://github.com/babel/babel-loader"}},[s._v("babel-loader")]),s._v("，同时添加了默认配置"),a("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L98"}},[s._v("<code>")]),s._v("，但不会立即生效。")],1),a("p",[s._v("如果您对浏览器的兼容性没有要求，即只要最新的现代浏览器支持就行，比如Chrome、Firfox、Safari，或者通过Electron来驱动App，并且在代码中没有使用到ECMAScript的一些未来特性。那么不需要babel也可以运行。")]),a("p",[s._v("否则，您需要在项目根路径下添加一个"),a("code",{pre:!0},[s._v(".babelrc")]),s._v("文件，Vusion根据这个文件是否存在来判断启不启用"),a("code",{pre:!0},[s._v("babel-loader")]),s._v("。")]),a("p",[s._v("最简单的方式是：")]),a("pre",{pre:!0,attrs:{class:"hljs lang-shell"}},[a("code",{attrs:{"v-pre":""}},[s._v("npm install --save-dev babel-preset-env\n")])]),a("p",[s._v("然后在项目根路径下添加一个"),a("code",{pre:!0},[s._v(".babelrc")]),s._v("文件：")]),a("pre",{pre:!0,attrs:{class:"hljs lang-json"}},[a("code",{attrs:{"v-pre":""}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"presets"')]),s._v(": ["),a("span",{attrs:{class:"hljs-string"}},[s._v('"env"')]),s._v("]\n}\n")])]),a("p",[s._v("其他关于Babel的详细配置请参见"),a("u-link",{attrs:{href:"https://babeljs.io/"}},[s._v("babeljs.io")]),s._v("的官方文档。")],1),a("h4",[s._v("JS的压缩与混淆")]),a("p",[s._v("在Webpack生态中，通常使用"),a("u-link",{attrs:{href:"https://github.com/webpack-contrib/uglifyjs-webpack-plugin"}},[s._v("uglifyjs-webpack-plugin")]),s._v("来处理JS的压缩与混淆，这个插件也已经集成在Vusion CLI中。")],1),a("p",[s._v("只需在"),a("code",{pre:!0},[s._v("vusion.config.js")]),s._v("或"),a("code",{pre:!0},[s._v("package.json")]),s._v("的"),a("code",{pre:!0},[s._v("vusion")]),s._v("对象中添加配置：")]),a("pre",{pre:!0,attrs:{class:"hljs lang-json"}},[a("code",{attrs:{"v-pre":""}},[s._v("{\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v('"uglifyJS"')]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n}\n")])]),a("p",[s._v("也可以在运行CLI的构建命令时，添加"),a("code",{pre:!0},[s._v("--uglify-js")]),s._v("这个参数：")]),a("pre",{pre:!0,attrs:{class:"hljs lang-shell"}},[a("code",{attrs:{"v-pre":""}},[s._v("vusion build --uglify-js\n")])]),a("h3",[s._v("CSS的模块化")]),a("p",[s._v("虽然SASS、LESS、Stylus等预处理器实现了CSS的文件拆分，但没有解决CSS模块化的痛点：选择器的局域化问题（全局污染问题）。")]),a("p",[s._v("按道理，一个模块化的文件应该要隐藏内部作用域，只暴露少量接口给使用者。而按照目前预处理器的方式，引入一个CSS模块后，已存在的样式仍有被覆盖的风险。")]),a("p",[s._v("为了避免全局选择器的冲突，也为了避免复杂、繁琐、弱约束的命名规范，我们采用"),a("u-link",{attrs:{href:"https://github.com/css-modules/css-modules"}},[s._v("CSS Modules")]),s._v("来解决这个问题。")],1),a("h4",[s._v("CSS Modules")]),a("p",[s._v("在单文件Vue中，在"),a("code",{pre:!0},[s._v("<style>")]),s._v("上直接添加"),a("code",{pre:!0},[s._v("module")]),s._v("，同时在模板中动态绑定class：")]),a("div",{staticClass:"u-example"},[a("Ce8ba96")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.red"')]),s._v(">")]),s._v("\n    This should be red.\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".red")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": red;\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".bold")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": bold;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),a("p",[s._v("这些样式会转为")]),a("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-selector-class"}},[s._v("._21t-NHydruDPXRXUWJnMmm")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": red;\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v("._2VTt8mZxuYxYIcjuT-eGzP")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": bold;\n}\n")])]),a("p",[s._v("具体可以参见"),a("u-link",{attrs:{href:"https://vue-loader.vuejs.org/zh-cn/features/css-modules.html"}},[s._v("vue-loader的CSS Modules")])],1),a("p",[s._v("在多文件Vue中，在"),a("code",{pre:!0},[s._v(".vue")]),s._v("文件夹添加"),a("code",{pre:!0},[s._v("module.css")]),s._v("文件，书写方式与单文件Vue相同。")]),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[s._v("u-sample.vue/\n    index.html\n    index.js\n    module.css\n")])]),a("h4",[s._v("REA风格")]),a("p",[s._v("在CSS Modules的基础上，我们引入了"),a("u-link",{attrs:{href:"https://github.com/postcss/postcss"}},[s._v("PostCSS")]),s._v("和它的一些plugins"),a("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/blob/master/webpack/base.js#L13"}},[s._v("<code>")]),s._v("，用于简化样式的书写，最终形成一套特有的CSS书写风格——REA风格。")],1),a("p",[s._v("REA表示Root、Element、Attribute，其中借鉴了BEM（Block、Element、Modifier）的一些思想，但它不需要那些繁琐的构词形式。")]),a("p",[s._v("它有以下一些规则：")]),a("ul",[a("li",[s._v("class仅用于表示元素的在组件中的角色\n"),a("ul",[a("li",[s._v("根节点总是用"),a("code",{pre:!0},[s._v(".root")])]),a("li",[s._v("子节点用一个简单的单词来表示，如"),a("code",{pre:!0},[s._v("head")]),s._v("、"),a("code",{pre:!0},[s._v("item")]),s._v("、"),a("code",{pre:!0},[s._v("side")]),s._v("等")])])]),a("li",[s._v("attribute用于样式扩展，命名方式与常用的props保持一致\n"),a("ul",[a("li",[s._v("Boolean类型，如"),a("code",{pre:!0},[s._v("selected")]),s._v("、"),a("code",{pre:!0},[s._v("disabled")]),s._v("、"),a("code",{pre:!0},[s._v("active")]),s._v("、"),a("code",{pre:!0},[s._v("checked")]),s._v("等")]),a("li",[s._v("颜色，如"),a("code",{pre:!0},[s._v('color="primary"')]),s._v("、"),a("code",{pre:!0},[s._v('color="success"')]),s._v("、"),a("code",{pre:!0},[s._v('color="error"')]),s._v("等")]),a("li",[s._v("大小，一个单词表示宽高同时改变，两个单词前者表示高度、后者表示宽度，类似CSS的"),a("code",{pre:!0},[s._v("margin")]),s._v("或"),a("code",{pre:!0},[s._v("padding")]),s._v("属性。如"),a("code",{pre:!0},[s._v('size="normal"')]),s._v("、"),a("code",{pre:!0},[s._v('size="large"')]),s._v("、"),a("code",{pre:!0},[s._v('size="mini large"')]),s._v("等")])])]),a("li",[s._v("单词不要缩写，且用连字符而不是驼峰")]),a("li",[s._v("不允许样式块嵌套")]),a("li",[s._v("无需添加浏览器前缀，在PostCSS中已经引入了"),a("u-link",{attrs:{href:"https://github.com/postcss/autoprefixer"}},[s._v("autoprefixer")]),s._v("插件")],1)]),a("p",[s._v("最佳示例：")]),a("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.root"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.track"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.trail"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("240px")]),s._v(";\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".track")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20px")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#eee")]),s._v(";\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".trail")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30%")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": $brand-primary;\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),a("span",{attrs:{class:"hljs-selector-attr"}},[s._v('[color="success"]')]),s._v(" "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".trail")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": $brand-success;\n}\n\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),a("span",{attrs:{class:"hljs-selector-attr"}},[s._v("[active]")]),s._v(" "),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".trail")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("animation")]),s._v(": ...\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])]),a("h4",[s._v("优先级问题"),a("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/issues/21"}},[s._v("<issue>")])],1),a("p",[s._v("由于CSS的依赖关系统一走JS，再通过"),a("u-link",{attrs:{href:"https://github.com/webpack-contrib/style-loader"}},[s._v("style-loader")]),s._v("转换为标签插入到页面中，因此无法保证各组件之间的顺序。极少数情况下会有优先级问题，这里我们推荐一种可以提高优先级的写法：")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"$style.button"')]),s._v(">")]),s._v("Button"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("u-button")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("module")]),s._v(">")]),a("span",{attrs:{class:"css"}},[s._v("\n"),a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".button")]),a("span",{attrs:{class:"hljs-selector-attr"}},[s._v("[class]")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": red;\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v('\n\n#### CSS提取成独立文件\n\n在Webpack生态中，通常会使用[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)将CSS内容提取成独立的文件，这个插件也已经集成在Vusion CLI中。\n\n只需在`vusion.config.js`或`package.json`的`vusion`对象中添加配置：\n\n``` json\n{\n    "extractCSS": true\n}\n')])]),a("p",[s._v("也可以在运行CLI的构建命令时，添加--extract-css这个参数：")]),a("pre",{pre:!0,attrs:{class:"hljs lang-shell"}},[a("code",{attrs:{"v-pre":""}},[s._v("vusion build --extract-css\n")])]),a("p",[s._v("提取出来的CSS文件名与JS bundle的文件名是一致的，仅扩展名不同。")]),a("h3",[s._v("图片的模块化")]),a("p",[s._v("由于位图图片在Retina屏下需要设定@2x图，因此我们推荐优先使用svg图片。")]),a("p",[s._v("特别是单色图标可以将svg转成icon-font，多色图标可以将svg合并成svg-sprite，实在不行了再将png或jpg等位图格式合并成css-sprite。")]),a("h4",[s._v("icon-font")]),a("p",[s._v("icon-font可以使用CSS很方便地设置颜色与大小。")]),a("p",[s._v("在Vusion中，我们研发了一个"),a("u-link",{attrs:{href:"https://github.com/vusion/icon-font-loader/blob/master/README.zh-CN.md"}},[s._v("icon-font-loader")]),s._v("，它提供一个自定义属性"),a("code",{pre:!0},[s._v("icon-font")]),s._v("，使用时很方便：")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".select")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":after")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("icon-font")]),s._v(": "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'./icons/arrow-down.svg'")]),s._v(");\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#666")]),s._v(";\n}\n")])]),a("p",[s._v("它会转为")]),a("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".select")]),a("span",{attrs:{class:"hljs-selector-pseudo"}},[s._v(":after")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-family")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'vusion-icon-font'")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-style")]),s._v(": normal;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-weight")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("400")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-variant")]),s._v(": normal;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("text-decoration")]),s._v(": inherit;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("text-rendering")]),s._v(": optimizeLegibility;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("text-transform")]),s._v(": none;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("-moz-osx-font-smoothing")]),s._v(": grayscale;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("-webkit-font-smoothing")]),s._v(": antialiased;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("font-smoothing")]),s._v(": antialiased;\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'\\f106'")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("color")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("#666")]),s._v(";\n}\n")])]),a("p",[s._v("同时生成(eot,svg,ttf,woff)等字体和一个全局的@font-face文件。")]),a("blockquote",[a("p",[s._v("为什么不在HTML或JS中引入图标？类似：")])]),a("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"require(\'./inner.svg)"')]),s._v(">")]),s._v("\n")])]),a("ul",[a("li",[s._v("其实大部分图标还需设置CSS属性")]),a("li",[s._v("图片资源的引入本质是一种样式修改")]),a("li",[s._v("CSS具有复写的特性")])]),a("h4",[s._v("svg-sprite")]),a("p",[s._v("svg-sprite拥有css-sprite不具备的调整大小特性。")]),a("p",[s._v("在Vusion中，我们使用了一个"),a("u-link",{attrs:{href:"https://github.com/CXHtml/svg-sprite-loader"}},[s._v("svg-sprite-loader")]),s._v("。使用起来也很方便：")],1),a("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'./icons/refresh.svg?sprite'")]),s._v(");\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("120px")]),s._v(";\n}\n")])]),a("p",[s._v("它会转为")]),a("pre",{pre:!0,attrs:{class:"hljs lang-css"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-selector-class"}},[s._v(".root")]),s._v(" {\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("background")]),s._v(": "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("url")]),s._v("("),a("span",{attrs:{class:"hljs-string"}},[s._v("'/public/sprite.1c9f4bcca4a42798.svg#refresh'")]),s._v(");\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("200px")]),s._v(";\n    "),a("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("120px")]),s._v(";\n}\n")])]),a("h4",[s._v("css-sprite")]),a("p",[s._v("正在研究中。。。")]),a("p",[s._v("可以先使用CSS的background，会走"),a("u-link",{attrs:{href:"https://github.com/webpack-contrib/file-loader"}},[s._v("file-loader")]),s._v("。")],1),a("h4",[s._v("其他资源")]),a("p",[s._v("其他资源会统一走"),a("u-link",{attrs:{href:"https://github.com/webpack-contrib/file-loader"}},[s._v("file-loader")]),s._v("，目前已配置了"),a("code",{pre:!0},[s._v("png|jpg|gif|eot|ttf|woff|woff2")]),s._v("这些格式"),a("u-link",{attrs:{href:"https://github.com/vusion/vusion-cli/blob/develop/webpack/base.js#L88"}},[s._v("<code>")]),s._v("。")],1),a("h3"),a("p",[s._v("模块化解决了前端工程中各种资源的组织问题，那么在用户界面（UI）层面上，如何将一个复杂工程进行分解复用，并进行高效的管理，这就属于组件化方面的范畴了，下一节将会为您详细讲述。")])])},staticRenderFns:[]},v=a(1)(n,r,!1,null,null,null);t.default=v.exports}});