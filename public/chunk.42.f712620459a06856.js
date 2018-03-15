"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/public/vusion-icon-font.ttf?3d02953e747bbfe9edc13761bb7ff1de") format("truetype"),\n\turl("/public/vusion-icon-font.eot?3d02953e747bbfe9edc13761bb7ff1de#iefix") format("embedded-opentype"),\n\turl("/public/vusion-icon-font.woff?3d02953e747bbfe9edc13761bb7ff1de") format("woff"),\n\turl("/public/vusion-icon-font.svg?3d02953e747bbfe9edc13761bb7ff1de#vusion-icon-font") format("svg");\n}'},webpackJsonp([42],{416:function(e,t,n){function i(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function o(e){var t=document.createElement("style"),n=document.getElementsByTagName("head")[0];t.innerHTML=i(e),t.id=d,t.type="text/css",n?n.appendChild(t):window.addEventListener("load",function(){n.appendChild(t)})}var d="ICON-FONT-FILE-STYLE";e.exports=function(){window.HAS_CREATE_FONT_STYLE||(o(),window.HAS_CREATE_FONT_STYLE=!0)}},448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("u-article",[t("h1",[this._v("页面与路由")]),t("p",[this._v("我们将可以用路由进行引导的这一类组件称为页面。")]),t("p",[this._v("页面组件只需要在路由配置中引用，不需要在 Vue 中全局注册"),t("code",{pre:!0},[this._v("name")]),this._v("，或者被别的组件引用。父页面一般会包含"),t("code",{pre:!0},[this._v("<router-view>")]),this._v("，用于设置子页面的位置。")]),t("h3",[this._v("目录结构")]),t("p",[this._v("所有页面都在"),t("code",{pre:!0},[this._v("src/views")]),this._v("中，目录结构与"),t("strong",[this._v("路由的路径")]),this._v("保持一致，一层层递归下去：")]),t("ul",[t("li",[this._v("一个"),t("code",{pre:!0},[this._v("index.vue")]),this._v("，表示当前目录名所对应的页面；")]),t("li",[this._v("一个其它名称的"),t("code",{pre:!0},[this._v(".vue")]),this._v("，表示当前目录的一个子页面。")])]),t("p",[this._v("如果这个页面为入口页面（需要后端路由的页面），直接在目录下添加后端模板，因为某些情况下可以前后端路由可能要互换，这样就不用改变目录结构。")]),t("p",[this._v("下面为一个示例：")]),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[this._v("views/\n├─ dashboard/\n│   ├─ index.html                   # 直接添加模板\n│   ├─ index.vue                    # 入口页面。对应路由'/dashboard'\n│   ├─ task/\n│   │   ├─ index.vue                # 任务页。对应路由'/dashboard/task'\n│   │   ├─ create.vue               # 任务创建页。对应路由'/dashboard/task/create'\n│   │   ├─ edit.vue                 # 任务编辑页。对应路由'/dashboard/task/edit'\n│   │   ├─ detail/                  #\n│   │   │   ├─ index.vue            # 任务详情页。对应路由'/dashboard/task/detail'\n│   │   │   ├─ summary.vue          # 任务摘要页。对应路由'/dashboard/task/detail/summary'\n│   │   │   ├─ subtask.vue          # 子任务页。对应路由'/dashboard/task/detail/subtask'\n│   │   │   └─ ...\n│   │   └─ ...\n│   └─ ...\n└─ ...\n")])]),t("p",[this._v("部分页面如上面的“子任务页”，它的视图结构可能不在"),t("code",{pre:!0},[this._v("detail")]),this._v("的"),t("code",{pre:!0},[this._v("<router-view>")]),this._v("下，但我们仍然要按路由结构把它放在"),t("code",{pre:!0},[this._v("detail")]),this._v("目录下。可以通过灵活的路由配置将它的视图结构提出来。")]),t("h3",[this._v("下一步")]),t("p",[this._v("下一节"),t("u-link",{attrs:{href:"/guides/library"}},[this._v("组件库")]),this._v("。")],1)])},staticRenderFns:[]},o=n(1)(null,i,!1,null,null,null);t.default=o.exports}});