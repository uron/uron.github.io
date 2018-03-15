"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'},webpackJsonp([6],{416:function(t,a,e){function s(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function n(t){var a=document.createElement("style"),e=document.getElementsByTagName("head")[0];a.innerHTML=s(t),a.id=v,a.type="text/css",e?e.appendChild(a):window.addEventListener("load",function(){e.appendChild(a)})}var v="ICON-FONT-FILE-STYLE";t.exports=function(){window.HAS_CREATE_FONT_STYLE||(n(),window.HAS_CREATE_FONT_STYLE=!0)}},484:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("u-article",[e("h1",[t._v("多行输入 Textarea")]),e("h2",[t._v("示例")]),e("h3",[t._v("基本形式")]),e("p",[t._v("大部分属性与"),e("code",{pre:!0},[t._v("<textarea>")]),t._v("元素一致。")]),e("div",{staticClass:"u-example"},[e("u-textarea",{attrs:{placeholder:"Details",autofocus:""}})],1),e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-textarea")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"Details"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("autofocus")]),t._v(">")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-textarea")]),t._v(">")]),t._v("\n")])]),e("h3",[t._v("只读与禁用")]),e("div",{staticClass:"u-example"},[e("u-linear-layout",[e("u-textarea",{attrs:{value:"只读",readonly:""}}),e("u-textarea",{attrs:{value:"禁用",disabled:""}})],1)],1),e("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[e("code",{attrs:{"v-pre":""}},[e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-textarea")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"只读"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("readonly")]),t._v(">")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-textarea")]),t._v(">")]),t._v("\n    "),e("span",{attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-textarea")]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("value")]),t._v("="),e("span",{attrs:{class:"hljs-string"}},[t._v('"禁用"')]),t._v(" "),e("span",{attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v(">")]),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-textarea")]),t._v(">")]),t._v("\n"),e("span",{attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{attrs:{class:"hljs-name"}},[t._v("u-linear-layout")]),t._v(">")]),t._v("\n")])]),e("h2",[t._v("API")]),e("h3",[t._v("Props/Attrs")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop/Attr")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("value")]),e("td",[t._v("String")]),e("td"),e("td",[t._v("输入框的值")])]),e("tr",[e("td",[t._v("placeholder")]),e("td",[t._v("String")]),e("td"),e("td",[t._v("原生属性")])]),e("tr",[e("td",[t._v("minlength")]),e("td",[t._v("Number")]),e("td"),e("td",[t._v("原生属性")])]),e("tr",[e("td",[t._v("maxlength")]),e("td",[t._v("Number")]),e("td"),e("td",[t._v("原生属性")])]),e("tr",[e("td",[t._v("autofocus")]),e("td",[t._v("Boolean")]),e("td"),e("td",[t._v("原生属性")])]),e("tr",[e("td",[t._v("readonly")]),e("td",[t._v("Boolean")]),e("td"),e("td",[t._v("原生属性")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("Boolean")]),e("td"),e("td",[t._v("原生属性")])])])]),e("h3",[t._v("Events")]),e("h4",[t._v("@input")]),e("p",[t._v("输入时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event")]),e("td",[t._v("String")]),e("td",[t._v("输入框的值")])])])]),e("h4",[t._v("@change")]),e("p",[t._v("值变化时触发（与原生事件不同）")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event.value")]),e("td",[t._v("String")]),e("td",[t._v("改变后的值")])]),e("tr",[e("td",[t._v("$event.oldValue")]),e("td",[t._v("String")]),e("td",[t._v("旧的值")])])])]),e("h4",[t._v("@focus")]),e("p",[t._v("获得焦点时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event")]),e("td",[t._v("String")]),e("td",[t._v("原生事件对象")])])])]),e("h4",[t._v("@blur")]),e("p",[t._v("失去焦点时触发")]),e("table",[e("thead",[e("tr",[e("th",[t._v("Param")]),e("th",[t._v("Type")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("$event")]),e("td",[t._v("String")]),e("td",[t._v("原生事件对象")])])])])])},staticRenderFns:[]},n=e(1)(null,s,!1,null,null,null);a.default=n.exports}});