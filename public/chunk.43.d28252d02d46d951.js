"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'},webpackJsonp([43],{416:function(t,s,e){function n(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function i(t){var s=document.createElement("style"),e=document.getElementsByTagName("head")[0];s.innerHTML=n(t),s.id=o,s.type="text/css",e?e.appendChild(s):window.addEventListener("load",function(){e.appendChild(s)})}var o="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},453:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("u-article",[s("h1",[this._v("测试")]),s("p",[this._v("注意：测试功能需要全局安装"),s("code",{pre:!0},[this._v("mocha")]),this._v("和"),s("code",{pre:!0},[this._v("chai")]),this._v("，否则可能无法运行：")]),s("pre",{pre:!0,attrs:{class:"hljs lang-bash"}},[s("code",{attrs:{"v-pre":""}},[this._v("npm install -g mocha chai\n")])]),s("h3",[this._v("单元测试")]),s("p",[this._v("Vusion 中的单元测试可以写在多个地方。")]),s("p",[this._v("单文件 Vue 中，可以直接添加"),s("code",{pre:!0},[this._v("<test>")]),this._v("标签：")]),s("pre",{pre:!0,attrs:{class:"hljs lang-xhtml"}},[s("code",{attrs:{"v-pre":""}},[s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),s("span",{attrs:{class:"javascript"}},[this._v("\n"),s("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n    "),s("span",{attrs:{class:"hljs-attr"}},[this._v("name")]),this._v(": "),s("span",{attrs:{class:"hljs-string"}},[this._v("'u-select'")]),this._v(",\n};\n")]),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("<"),s("span",{attrs:{class:"hljs-name"}},[this._v("test")]),this._v(">")]),this._v("\ndescribe('Select', () => {\n    it('should render correctly', () => {\n        expect('foo').to.be.a('string');\n    });\n});\n"),s("span",{attrs:{class:"hljs-tag"}},[this._v("</"),s("span",{attrs:{class:"hljs-name"}},[this._v("test")]),this._v(">")]),this._v("\n")])]),s("p",[this._v("多文件 Vue 中，可以添加一个"),s("code",{pre:!0},[this._v("test.spec.js")]),this._v("文件。")]),s("pre",{pre:!0,attrs:{class:"hljs lang-js"}},[s("code",{attrs:{"v-pre":""}},[this._v("describe("),s("span",{attrs:{class:"hljs-string"}},[this._v("'Select'")]),this._v(", () => {\n    it("),s("span",{attrs:{class:"hljs-string"}},[this._v("'should render correctly'")]),this._v(", () => {\n        expect("),s("span",{attrs:{class:"hljs-string"}},[this._v("'foo'")]),this._v(").to.be.a("),s("span",{attrs:{class:"hljs-string"}},[this._v("'string'")]),this._v(");\n    });\n});\n")])]),s("p",[this._v("可以在"),s("code",{pre:!0},[this._v("test/unit")]),this._v("目录下，添加一个以"),s("code",{pre:!0},[this._v(".spec.js")]),this._v("为后缀的文件。")]),s("h3",[this._v("运行测试")]),s("p",[this._v("运行"),s("code",{pre:!0},[this._v("vusion test")]),this._v("，Karma 会检索上面提到的所有单元测试文件，默认启动 Chrome 浏览器并运行用例。")]),s("ul",[s("li",[this._v("可以使用"),s("code",{pre:!0},[this._v("-p")]),this._v("选项指定端口；")]),s("li",[this._v("可以使用"),s("code",{pre:!0},[this._v("-w, --watch")]),this._v("监听文件变更。")])]),s("h3",[this._v("下一步")]),s("p",[this._v("下一节将会讲如何"),s("u-link",{attrs:{href:"/guides/deployment"}},[this._v("打包和部署")]),this._v("。")],1)])},staticRenderFns:[]},i=e(1)(null,n,!1,null,null,null);s.default=i.exports}});