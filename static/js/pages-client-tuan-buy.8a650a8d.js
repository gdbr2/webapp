(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-tuan-buy"],{"01220":function(t,i,a){"use strict";var n=a("94f2"),e=a.n(n);e.a},"34cb":function(t,i,a){"use strict";a.r(i);var n=a("3cb1"),e=a("58ce");for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);a("01220");var c=a("f0c5"),o=Object(c["a"])(e["default"],n["b"],n["c"],!1,null,"1aed6a9a",null,!1,n["a"],void 0);i["default"]=o.exports},"35cc":function(t,i,a){"use strict";a("7a82");var n=a("ee27").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(a("f07e")),s=n(a("c964"));a("ac1f"),a("466d"),a("e9c4"),a("c975");var c={data:function(){return{payType:"weixin",num:1,coupon_id:0,buydata:[],buytype:"微信",dataList:[],money:0,mid:0,openid:"",pricebuy:0,wxlx:"wxh5",coupons:[{coupon_id:1,num:20},{coupon_id:2,num:30},{coupon_id:3,num:40}]}},onLoad:function(t){t.mid&&(this.mid=t.mid),this.buydata=uni.getStorageSync("buydata"),this.mid>0&&2==this.buydata.isvip?this.pricebuy=this.buydata.vippriced:this.mid>0&&1==this.buydata.isvip?this.pricebuy=this.buydata.priced:0==this.mid&&2==this.buydata.isvip?this.pricebuy=this.buydata.vippriceq:0==this.mid&&1==this.buydata.isvip&&(this.pricebuy=this.buydata.priceq);var i=window.navigator.userAgent.toLowerCase();"micromessenger"==i.match(/MicroMessenger/i)&&(this.wxlx="wxgzh")},onShow:function(){uni.getStorageSync("userinfo").token?(this.ongrzlTap(),this.money=uni.getStorageSync("userinfo").money):uni.showModal({title:"温馨提示",content:"请先登录",showCancel:!0,confirmText:"登录",success:function(t){t.confirm?uni.navigateTo({url:"/pages/login/login"}):t.cancel&&uni.navigateBack()}})},computed:{getCouponMoney:function(){if(this.coupons.length>0)for(var t in this.coupons)if(this.coupons[t].coupon_id==this.coupon_id)return this.coupons[t].num;return 0}},methods:{okTap:function(){var t=this,i=this;this.dataList=this.buydata,this.dataList.sum=1,this.dataList.buytype=this.buytype;var a=this.dataList;a.pricebuy=i.pricebuy,a.token=uni.getStorageSync("userinfo").token,a.uid=uni.getStorageSync("userinfo").id,this.mid>0?(a.lx=2,a.smid=this.mid,a.namet=a.name+"【单集购买】【ID："+this.mid+" 】"):(a.lx=1,a.smid=0,a.namet=a.name),a.wxlx=this.wxlx,a.openid=this.openid,a.info=[],console.log(a),uni.request({url:this.configs.webUrl+"/api/pay/videopay",data:a,success:function(a){"微信"==i.dataList.buytype?"wxxcx"==t.wxlx&&1==a.data.code?t.wxxcx(a.data.data):window.open(a.data.data,"_self"):"余额"==i.dataList.buytype&&(1==a.data.code?uni.showModal({title:"提示",content:a.data.msg,showCancel:!1,success:function(t){uni.setStorage({key:"isbuy",data:2}),uni.navigateBack()}}):"余额不足"==a.data.msg?uni.showModal({title:"提示",content:a.data.msg,showCancel:!0,confirmText:"充值",success:function(t){if(t.confirm){var a=i.pricebuy;uni.navigateTo({url:"/pages/client/vipcard/recharge?price="+1*a})}else t.cancel}}):uni.showModal({title:"提示",content:a.data.msg,showCancel:!1,success:function(t){uni.navigateBack()}}))},fail:function(t,i){console.log("fail"+JSON.stringify(t))}})},wxxcx:function(t){uni.requestPayment({provider:"wxpay",appId:t.appId,timeStamp:t.timeStamp+"",nonceStr:t.nonceStr,package:t.package,signType:"MD5",paySign:t.sign,success:function(t){uni.showModal({title:"温馨提示",content:"支付成功",showCancel:!1,confirmText:"确定",success:function(t){t.confirm?(uni.setStorage({key:"isbuy",data:2}),uni.navigateBack()):t.cancel}}),console.log("success:"+JSON.stringify(t))},fail:function(t){uni.showModal({title:"支付失败",content:JSON.stringify(t),showCancel:!1,confirmText:"确定",success:function(t){t.confirm||t.cancel}}),console.log("fail:"+JSON.stringify(t))}})},ongrzlTap:function(){var t=this;return(0,s.default)((0,e.default)().mark((function i(){var a;return(0,e.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:a={},a.token=uni.getStorageSync("userinfo").token,a.uid=uni.getStorageSync("userinfo").id,uni.request({url:t.configs.webUrl+"/api/user/index",data:a,success:function(i){if(1==i.data.code){var a=i.data.data;if(a.isLogin=!0,t.userinfo=a,uni.setStorage({key:"userinfo",data:i.data.data}),i.data.data.avatar){var n=i.data.data.avatar;-1!=n.indexOf("data:image")?t.avatar="":-1!=n.indexOf("http")?t.avatar=i.data.data.avatar:t.avatar=t.configs.imgUrl+i.data.data.avatar}else t.avatar=""}else uni.showToast({title:i.data.msg,icon:"none"})},fail:function(t,i){}});case 4:case"end":return i.stop()}}),i)})))()},jianAct:function(){1!=this.num&&(this.num=this.num-1)},jiaAct:function(){this.num>99||(this.num=this.num+1)},changeType:function(t){this.payType=t.detail.value,"money"==t.detail.value&&(this.buytype="余额"),"weixin"==t.detail.value&&(this.buytype="微信")},wxlogin:function(){var t=this,i=this;uni.login({timeout:1e4,provider:"weixin",success:function(a){console.log(a),uni.request({url:t.configs.webUrl+"/api/user/getOpenid",method:"GET",data:{token:uni.getStorageSync("userinfo").token,code:a.code},success:function(t){console.log(t.data.code),1==t.data.code?i.openid=t.data.data.openid:uni.showModal({title:"温馨提示",content:JSON.stringify(t.data),showCancel:!0,confirmText:"确定",success:function(t){t.confirm?uni.navigateBack():t.cancel}})},fail:function(t){console.log(t)}})},fail:function(t){console.log(t)}})}}};i.default=c},"3cb1":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return e})),a.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"pd16_15"},[a("v-uni-view",{staticClass:"box pd16_15 flex"},[a("v-uni-image",{staticClass:"tuan-buy-l",attrs:{src:t.buydata.img,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"tuan-buy-r pl15"},[t.mid>0?a("v-uni-view",{staticClass:"ft14 ftw600 cl-main"},[t._v(t._s(t.buydata.name)+"【单集购买】【ID："+t._s(t.mid)+" 】")]):a("v-uni-view",{staticClass:"ft14 ftw600 cl-main"},[t._v(t._s(t.buydata.title))]),t.mid>0?a("v-uni-view",{staticClass:"mt12 alcenter"},[a("v-uni-view",[a("v-uni-text",{staticClass:"ft14 cl-orange"},[t._v("单集会员价：")]),a("v-uni-text",{staticClass:"ft16 cl-orange ftw600"},[t._v("¥"+t._s(t.buydata.vippriced))])],1),a("v-uni-view",[a("v-uni-text",{staticClass:"ft14 cl-notice"},[t._v("单集普通价：")]),a("v-uni-text",{staticClass:"ft14 cl-notice text-line"},[t._v("¥"+t._s(t.buydata.priced))])],1)],1):a("v-uni-view",{staticClass:"mt12 alcenter"},[a("v-uni-view",[a("v-uni-text",{staticClass:"ft14 cl-orange"},[t._v("全集会员价：")]),a("v-uni-text",{staticClass:"ft16 cl-orange ftw600"},[t._v("¥"+t._s(t.buydata.vippriceq))])],1),a("v-uni-view",[a("v-uni-text",{staticClass:"ft14 cl-notice"},[t._v("全集普通价：")]),a("v-uni-text",{staticClass:"ft14 cl-notice text-line"},[t._v("¥"+t._s(t.buydata.priceq))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"box mt16 pd16_15"},[a("v-uni-view",{staticClass:"flex alcenter space"},[a("v-uni-text",{staticClass:"ft14 cl-info2"},[t._v("需支付")]),a("v-uni-text",{staticClass:"ft16 cl-main ftw600 cl-orange"},[t._v("¥"+t._s(t.pricebuy))])],1)],1),a("v-uni-view",{staticClass:"box mt16 pd16_15"},[a("v-uni-view",{staticClass:"ft16 pb16 ftw600 cl-main"},[t._v("支付方式")]),a("v-uni-view",{staticClass:"bd-line mt16"}),a("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.changeType.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pt16 pb16 flex alcenter space"},[a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-text",{staticClass:"iconfont iconicon_pay_balance ft32 cl-green"}),a("v-uni-text",{staticClass:"ml15 ft14 ftw500 cl-main"},[t._v("微信支付")])],1),a("v-uni-view",[a("v-uni-radio",{attrs:{value:"weixin",checked:"weixin"==t.payType,color:t.tempColor}})],1)],1),a("v-uni-view",{staticClass:"bd-line"}),a("v-uni-view",{staticClass:"pt16 flex alcenter space"},[a("v-uni-view",{staticClass:"flex alcenter"},[a("v-uni-text",{staticClass:"iconfont iconicon_pay_balance ft32",staticStyle:{color:"#FFBD1E"}}),a("v-uni-text",{staticClass:"ml15 ft14 ftw500 cl-main"},[t._v("余额支付")])],1),a("v-uni-view",[a("v-uni-radio",{attrs:{value:"money",checked:"money"==t.payType,disabled:!1,color:t.tempColor}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"form-footer-h"},[a("v-uni-view",{staticClass:"form-footer form-footer-h"},[a("v-uni-view",{staticClass:"form-footer-main pd10_15"},[(t.mid,a("v-uni-button",{staticClass:"btn-big",style:t.getBtnStyle,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.okTap.apply(void 0,arguments)}}},[t._v("支付 ¥"+t._s(t.pricebuy))]))],1)],1)],1)],1)},e=[]},"58ce":function(t,i,a){"use strict";a.r(i);var n=a("35cc"),e=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);i["default"]=e.a},"94f2":function(t,i,a){var n=a("a89d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("9d790074",n,!0,{sourceMap:!1,shadowMode:!1})},a89d:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,".tuan-buy-l[data-v-1aed6a9a]{width:%?200?%;height:%?150?%;background:#f2f2f2}.tuan-buy-r[data-v-1aed6a9a]{width:calc(100% - %?200?%)}",""]),t.exports=i}}]);