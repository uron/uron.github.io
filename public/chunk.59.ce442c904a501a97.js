"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'},webpackJsonp([59],{416:function(t,i,e){function s(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function h(t){var i=document.createElement("style"),e=document.getElementsByTagName("head")[0];i.innerHTML=s(t),i.id=o,i.type="text/css",e?e.appendChild(i):window.addEventListener("load",function(){e.appendChild(i)})}var o="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(h(),window.HAS_CREATE_FONT_STYLE=!0)}},465:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("u-article",[i("h1",[this._v("命令行工具（CLI）")]),i("h3",[this._v("vusion help")]),i("p",[this._v("显示vusion所有命令")]),i("h3",[this._v("vusion -V, --version")]),i("p",[this._v("安装版本")]),i("h3",[this._v("vusion init <project-type> <project-name>")]),i("p",[this._v("创建 vusion 项目。"),i("code",{pre:!0},[this._v("project-type")]),this._v(" 可以选择这几种类型："),i("code",{pre:!0},[this._v("app")]),this._v("、"),i("code",{pre:!0},[this._v("app-pro")]),this._v("、"),i("code",{pre:!0},[this._v("library")]),this._v("、"),i("code",{pre:!0},[this._v("fullstack")]),this._v("。"),i("code",{pre:!0},[this._v("project-name")]),this._v(" 为新项目的名称。")]),i("h3",[this._v("vusion dev")]),i("p",[this._v("开发者模式启动项目")]),i("h4",[this._v("-c, --config-path <path>")]),i("p",[this._v("设置 Vusion 配置路径")]),i("h4",[this._v("-e, --entry-path <path>")]),i("p",[this._v("设置入口文件路径")]),i("h4",[this._v("-C, --no-clean")]),i("p",[this._v("不清除打包目录")]),i("h4",[this._v("-l, --library-path <path>")]),i("p",[this._v("设置库入口文件。"),i("code",{pre:!0},[this._v("project-type")]),this._v(" 为 "),i("code",{pre:!0},[this._v("library")]),this._v(" 时，默认入口文件为 "),i("code",{pre:!0},[this._v("./index.js")]),this._v("。")]),i("h4",[this._v("-d, --docs")]),i("p",[this._v("为库中的基础组件生成文档。"),i("code",{pre:!0},[this._v("project-type")]),this._v(" 为 "),i("code",{pre:!0},[this._v("library")]),this._v(" 时，默认开启该功能。")]),i("h4",[this._v("-p, --port <port>")]),i("p",[this._v("设置服务端口")]),i("h4",[this._v("-O, --no-open")]),i("p",[this._v("启动服务时，不在浏览器中打开页面。")]),i("h4",[this._v("-H, --no-hot")]),i("p",[this._v("关闭热更新")]),i("h4",[this._v("--resolve-priority")]),i("p",[this._v('解析 modules 和 loaders 使用包的优先级。"cwd"：当前目录，"cli"：cli目录。默认使用当前目录。')]),i("h3",[this._v("vusion build")]),i("p",[this._v("打包")]),i("h4",[this._v("-c, --config-path <path>")]),i("p",[this._v("设置 Vusion 配置路径")]),i("h4",[this._v("-e, --entry-path <path>")]),i("p",[this._v("设置入口文件路径")]),i("h4",[this._v("-C, --no-clean")]),i("p",[this._v("Disable to clean and copy")]),i("h4",[this._v("-l, --library-path <path>")]),i("p",[this._v("设置库入口文件。"),i("code",{pre:!0},[this._v("project-type")]),this._v(" 为 "),i("code",{pre:!0},[this._v("library")]),this._v(" 时，默认入口文件为 "),i("code",{pre:!0},[this._v("./index.js")]),this._v("。")]),i("h4",[this._v("-d, --docs")]),i("p",[this._v("为库中的基础组件生成文档。"),i("code",{pre:!0},[this._v("project-type")]),this._v(" 为 "),i("code",{pre:!0},[this._v("library")]),this._v(" 时，默认开启该功能。")]),i("h4",[this._v("-s, --source-map")]),i("p",[this._v("生成 source map")]),i("h4",[this._v("--extract-css")]),i("p",[this._v("使用 ExtractTextPlugin 处理 CSS 文件")]),i("h4",[this._v("--uglify-js")]),i("p",[this._v("使用 UglifyJSPlugin 处理JS文件")]),i("h4",[this._v("--minify-js")]),i("p",[this._v("设置为 "),i("code",{pre:!0},[this._v("true")]),this._v(" 或者 "),i("code",{pre:!0},[this._v("'babel-minify'")]),this._v(" 时，使用 BabelMinifyPlugin 压缩 JS 文件。\n设置为 "),i("code",{pre:!0},[this._v("'uglify-js'")]),this._v(" 时，使用 UglifyJSPlugin 压缩 JS 文件。效果同 "),i("code",{pre:!0},[this._v("--uglify")]),this._v("。")]),i("h4",[this._v("--experimental")]),i("p",[this._v("启用试用中的 loader 和 plugin。")]),i("h4",[this._v("--resolve-priority")]),i("p",[this._v('解析 modules 和 loaders 使用包的优先级。"cwd"：当前目录，"cli"：cli目录。默认使用当前目录。')]),i("h3",[this._v("vusion test")]),i("p",[this._v("跑 karma 测试")]),i("h4",[this._v("-c, --config-path <path>")]),i("p",[this._v("设置 Vusion 配置路径")]),i("h4",[this._v("-p, --port <port>")]),i("p",[this._v("设置服务端口")]),i("h4",[this._v("-w, --watch")]),i("p",[this._v("监听 Karma")]),i("h4",[this._v("--resolve-priority")]),i("p",[this._v('解析 modules 和 loaders 使用包的优先级。"cwd"：当前目录，"cli"：cli目录。默认使用当前目录。')]),i("h3",[this._v("vusion publish <version>")]),i("p",[this._v("发布版本")]),i("h3",[this._v("vusion ghpages")]),i("p",[this._v("发布到 gh-pages")]),i("h4",[this._v("-p, --path <path>")]),i("p",[this._v("设置服务端口")]),i("h4",[this._v("-c, --config-path <path>")]),i("p",[this._v("发布文件夹。 默认为 webpack 的 output 路径。")]),i("h3",[this._v("vusion dep")]),i("p",[this._v("显示 vusion-cli 的所有依赖")]),i("h3",[this._v("vusion transform <vue-path>")]),i("p",[this._v("切换 Vue 组件模式：单文件或者多文件模式。")])])},staticRenderFns:[]},h=e(1)(null,s,!1,null,null,null);i.default=h.exports}});