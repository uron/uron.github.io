"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'},webpackJsonp([50],{416:function(n,e,t){function o(n){return(n||window.ICON_FONT_STYLE).styleContent||""}function i(n){var e=document.createElement("style"),t=document.getElementsByTagName("head")[0];e.innerHTML=o(n),e.id=f,e.type="text/css",t?t.appendChild(e):window.addEventListener("load",function(){t.appendChild(e)})}var f="ICON-FONT-FILE-STYLE";n.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},454:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var n=this.$createElement,e=this._self._c||n;return e("u-article",[e("h1",[this._v("打包与部署")]),e("p",[this._v("Vusion 打包只需要一条命令："),e("code",{pre:!0},[this._v("vusion build")]),this._v("。")]),e("p",[this._v("因此只要在部署环境中全局安装 Vusion CLI，配置好上述命令即可。")]),e("ul",[e("li",[this._v("可以使用"),e("code",{pre:!0},[this._v("--extract-css")]),this._v("将 CSS 从 JS 中提出；")]),e("li",[this._v("可以使用"),e("code",{pre:!0},[this._v("--source-map")]),this._v("开启 Source Map，方便在部署环境调试。")])]),e("h3",[this._v("下一步")]),e("p",[this._v("下一节将会列出更多的"),e("u-link",{attrs:{href:"guides/commands"}},[this._v("常见命令")]),this._v("。")],1)])},staticRenderFns:[]},i=t(1)(null,o,!1,null,null,null);e.default=i.exports}});