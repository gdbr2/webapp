(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"0018":function(t,n,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("f3f3")),l=e("26cb"),s={data:function(){return{version:"",staticUrl:this.$config.staticUrl}},onLoad:function(){this.version=uni.$systemInfo.appVersion},methods:(0,a.default)((0,a.default)({},(0,l.mapMutations)(["logout"])),{},{navTo:function(t){uni.navigateTo({url:t})},toLogout:function(){uni.showModal({content:"確定要登出登入麼",success:function(t){t.confirm&&(uni.removeStorageSync("userinfo"),setTimeout((function(){uni.navigateBack()}),200))}})},switchChange:function(t){var n=t.detail.value?"打開":"關閉";this.$api.msg("".concat(n,"訊息推播"))},go_download:function(){this.go("/pages/client/webview?url="+encodeURI("https://github.com/xdaji/download"))}})};n.default=s},"2bf0":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"list-cell b-b mt10",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navTo("/pages/set/gywm/gywm")}}},[e("v-uni-text",{staticClass:"cell-tit"},[t._v("關於我們")]),e("v-uni-image",{staticStyle:{width:"30upx",height:"30upx"},attrs:{mode:"aspectFit",src:t.staticUrl+"fh2.png"}})],1),e("v-uni-view",{staticClass:"list-cell b-b mt10",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_download()}}},[e("v-uni-text",{staticClass:"cell-tit"},[t._v("下载地址")]),e("v-uni-image",{staticStyle:{width:"30upx",height:"30upx"},attrs:{mode:"aspectFit",src:t.staticUrl+"fh2.png"}})],1),e("v-uni-view",{staticClass:"list-cell mt10"},[e("v-uni-text",{staticClass:"cell-tit"},[t._v("版本")]),e("v-uni-text",{staticClass:"cell-tip"},[t._v("目前版本"+t._s(t.version))])],1),e("v-uni-view",{staticClass:"list-cell log-out-btn lr10",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toLogout.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cell-tit"},[t._v("退出账号")])],1)],1)},a=[]},4970:function(t,n,e){"use strict";var i=e("cc4e"),a=e.n(i);a.a},7079:function(t,n,e){"use strict";e.r(n);var i=e("2bf0"),a=e("9471");for(var l in a)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(l);e("4970");var s=e("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5e15bd12",null,!1,i["a"],void 0);n["default"]=r.exports},9471:function(t,n,e){"use strict";e.r(n);var i=e("0018"),a=e.n(i);for(var l in i)["default"].indexOf(l)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(l);n["default"]=a.a},c96f:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */uni-page-body[data-v-5e15bd12]{background:#111}body.?%PAGE?%[data-v-5e15bd12]{background:#111}.list-cell[data-v-5e15bd12]{display:flex;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#222;justify-content:center}.list-cell.log-out-btn[data-v-5e15bd12]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-5e15bd12]{color:#fb603d;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-5e15bd12]{background:#111}.list-cell.b-b[data-v-5e15bd12]:after{left:%?30?%}.list-cell.m-t[data-v-5e15bd12]{margin-top:%?16?%}.list-cell .cell-more[data-v-5e15bd12]{align-self:baseline;font-size:%?32?%;color:#fff;margin-left:%?10?%}.list-cell .cell-tit[data-v-5e15bd12]{flex:1;font-size:%?30?%;color:#fff;margin-right:%?10?%}.list-cell .cell-tip[data-v-5e15bd12]{font-size:%?28?%;color:#fff}.list-cell uni-switch[data-v-5e15bd12]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}',""]),t.exports=n},cc4e:function(t,n,e){var i=e("c96f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("3b1fc152",i,!0,{sourceMap:!1,shadowMode:!1})}}]);