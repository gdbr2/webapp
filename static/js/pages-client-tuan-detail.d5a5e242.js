(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-tuan-detail"],{"0968":function(i,t,e){"use strict";var n=e("9cf5"),s=e.n(n);s.a},"813b":function(i,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return n}));var n={uImage:e("a411").default,uniPopup:e("9f83").default,uniPopupDialog:e("7ad0").default},s=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-swiper",{staticClass:"swiper",style:"width: "+i.windowWidth+"px; height: "+i.windowHeight+"px; ",attrs:{circular:!0,current:i.current,vertical:!0,duration:"300"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.swiperChange.apply(void 0,arguments)}}},i._l(i.displaySwiperList,(function(t,s){return n("v-uni-swiper-item",{key:s,staticStyle:{position:"relative"}},[n("v-uni-view",{staticStyle:{"z-index":"10"}},[n("v-uni-video",{style:"width: "+i.windowWidth+"px; height: "+i.windowHeight+"px;",attrs:{id:t._id,controls:i.controls,autoplay:!1,loop:!0,isplay:!1,"show-center-play-btn":!0,"enable-progress-gesture":!0,"enable-play-gesture":!0,format:"m3u8","play-strategy":2,src:t.video_url,poster:t.img},on:{ended:function(t){arguments[0]=t=i.$handleEvent(t),i.ended.apply(void 0,arguments)},controlstoggle:function(t){arguments[0]=t=i.$handleEvent(t),i.controlstoggle.apply(void 0,arguments)},click:function(t){arguments[0]=t=i.$handleEvent(t),i.tapVideoHover()},play:function(t){arguments[0]=t=i.$handleEvent(t),i.play.apply(void 0,arguments)},pause:function(t){arguments[0]=t=i.$handleEvent(t),i.pause.apply(void 0,arguments)},fullscreenchange:function(t){arguments[0]=t=i.$handleEvent(t),i.fullscreenchange.apply(void 0,arguments)},timeupdate:function(t){arguments[0]=t=i.$handleEvent(t),i.videoTimeUpdateEvent.apply(void 0,arguments)}}})],1),i.isqp?n("v-uni-view",{staticClass:"userInfo"},[n("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.video_set.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"35px",height:"35px",position:"absolute",right:"5px"},attrs:{src:e("13fc")}}),n("v-uni-text",{staticClass:"text-shadow",staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[i._v("设置")])],1),n("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=i.$handleEvent(e),i.cLike(t.like,t.id,t.mid)}}},[1*t.like==1?n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"6px"},attrs:{src:e("dca0")}}):i._e(),1*t.like==2?n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"6px"},attrs:{src:e("9f77")}}):i._e(),n("v-uni-text",{class:{likeNumActive:t.like},staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[i._v(i._s(t.like_n))])],1),n("v-uni-view",{staticStyle:{opacity:"0.9","margin-top":"17px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=i.$handleEvent(t),i.share.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"40px",height:"40px",position:"absolute",right:"5px"},attrs:{src:e("f7f5")}}),n("v-uni-text",{staticStyle:{color:"#FFFFFF","margin-top":"40px","font-size":"14px","text-align":"center","font-weight":"bold"}},[i._v("分享")])],1)],1):i._e(),i.isqp?n("v-uni-view",{staticClass:"contentcd"},[n("v-uni-text",{staticClass:"userName",style:"width: "+(i.windowWidth-90)+"px;"},[i._v(i._s(t.title))]),n("v-uni-text",{staticClass:"wordss",style:"width: "+(i.windowWidth-90)+"px;"},[i._v(i._s(t.msg))])],1):i._e()],1)})),1),n("v-uni-cover-view",{staticClass:"left_back",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.go("back")}}}),n("v-uni-cover-view",{staticClass:"right_bar",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.show_right_list=1}}},[n("v-uni-cover-view",{staticClass:"flex-row item-center"},[n("v-uni-cover-image",{staticClass:"ml5",staticStyle:{width:"61px",height:"20px"},attrs:{src:"/static/list.png"}})],1)],1),1==i.show_right_list?n("v-uni-cover-view",{staticClass:"right_list",style:{height:i.right_list_height+"px"}},[n("v-uni-cover-view",{staticClass:"close_btn ",staticStyle:{"z-index":"99",position:"relative"},style:{top:i.right_close_top+"px"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.show_right_list=0}}},[n("v-uni-cover-image",{staticClass:"pic-12 close_img",staticStyle:{width:"12px",height:"12px","z-index":"99"},attrs:{src:"/static/sanjiao.png"}})],1),n("v-uni-cover-view",{staticClass:"right_list_main",staticStyle:{width:"100px","margin-left":"10px"},style:{height:i.right_list_height+"px"}},[n("v-uni-scroll-view",{staticStyle:{position:"absolute",height:"100%"},style:{height:i.right_list_height+"px"},attrs:{"scroll-y":"true"}},[n("v-uni-cover-view",{staticClass:"mb10"}),i._l(i.originList,(function(t,e){return n("v-uni-cover-view",{key:e,staticClass:" pb10 mb10 ml10  pad5",class:i.now_video_id==t.id?"bg_pink":"",staticStyle:{position:"relative",width:"80px",overflow:"hidden"},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tap_right(e)}}},[n("u-image",{staticClass:"radius-5",staticStyle:{height:"43px"},attrs:{src:i.himg2(t.img),mode:"aspectFill","border-radius":"5px"}}),n("v-uni-text",{staticClass:"times_box",staticStyle:{top:"30px",left:"10px !important","font-size":"9px",width:"30px",height:"14px","line-height":"14px"}},[i._v(i._s(i.video_time(t.video_seconds)))]),n("v-uni-text",{staticClass:"fs12  text-center  h40px mt10  over-hide",staticStyle:{color:"#ffffff",position:"relative",overflow:"hidden"}},[i._v(i._s(t.name))])],1)}))],2)],1)],1):i._e(),n("uni-popup",{ref:"set_box"},[n("uni-popup-dialog",{on:{close:function(t){arguments[0]=t=i.$handleEvent(t),i.$refs.set_box.close()},confirm:function(t){arguments[0]=t=i.$handleEvent(t),i.$refs.set_box.close()}}},[n("v-uni-view",{staticClass:"flex-row fs14 speed_box"},[n("v-uni-text",{staticStyle:{color:"#fff"}},[i._v("倍速：")]),i._l(i.speedList,(function(t,e){return n("v-uni-text",{key:e,staticClass:"flex-row speed_one",class:i.speedIndex==e?"active":"",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.speedHandle(e)}}},[i._v(i._s(t)+" 倍")])}))],2)],1)],1)],1)},o=[]},"9cf5":function(i,t,e){var n=e("ead5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var s=e("4f06").default;s("64be39d0",n,!0,{sourceMap:!1,shadowMode:!1})},"9e5e":function(i,t,e){"use strict";e.r(t);var n=e("daa0"),s=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(i){e.d(t,i,(function(){return n[i]}))}(o);t["default"]=s.a},daa0:function(i,t,e){"use strict";e("7a82");var n=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(e("f07e")),o=n(e("c964"));e("ac1f"),e("466d"),e("5319"),e("e9c4"),e("14d9"),e("caad6"),e("2532"),e("99af"),e("e25e"),e("a9e3");var a=n(e("c4b8")),r=uni.createInnerAudioContext(),d={data:function(){return{sharedata:{type:2,strShareUrl:"",strShareTitle:"分享标题",strShareSummary:"分享总结",strShareImageUrl:""},fenji:1,controls:!0,originList:[],displaySwiperList:[],displayIndex:0,originIndex:0,windowWidth:0,windowHeight:0,current:0,oid:0,is_vip:0,isplay:!0,playCount:2,nodate:!0,duration:500,issp:"",isqp:!0,page:1,urls:a.default.webUrl,baymid:0,scrollTop:0,vid:0,mid:0,isbuylx:0,safeArea:0,uid:0,show_right_list:0,right_list_width:0,right_list_height:0,right_close_top:0,now_video_id:0,freed_time:30,speedList:[.8,1,1.25,1.5,2],speedIndex:1,isPageVisible:!1}},onLoad:function(i){var t=this;console.log("eeeeeee-----",i),i.fxpid&&i.fxpid>0&&uni.setStorage({key:"fxpid",data:i.fxpid}),uni.getStorageSync("userinfo")&&(this.uid=uni.getStorageSync("userinfo").id),uni.getSystemInfo({success:function(i){t.safeArea=i.safeAreaInsets.bottom}}),uni.setStorage({key:"isbuy",data:1}),i.vid&&(this.vid=i.vid),i.mid&&(this.mid=i.mid),this.windowWidth=uni.getSystemInfoSync().windowWidth,this.windowHeight=uni.getSystemInfoSync().windowHeight-this.safeArea,this.right_list_height=this.windowHeight,this.right_close_top=this.windowHeight/2},onShow:function(){uni.getStorageSync("userinfo")&&(this.uid=uni.getStorageSync("userinfo").id,this.is_vip=2==uni.getStorageSync("userinfo").group_id?1:0,console.log(uni.getStorageSync("userinfo"),"vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")),this.gxdd();try{var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);i.play()}catch(t){console.log(t.message)}this.isPageVisible=!0},onHide:function(){var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);i.pause(),this.videolog(),this.isPageVisible=!1},onUnload:function(){this.videolog(),this.isPageVisible=!1},methods:{himg2:function(i){i+="";return"null"!=i.match(/\/cover/)?i.replace(".jpg","_h_small.jpg"):i},videolog:function(){return(0,o.default)((0,s.default)().mark((function i(){var t,e;return(0,s.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(t=uni.getStorageSync("videolog"),t){i.next=3;break}return i.abrupt("return");case 3:return e={ids:t},i.next=6,uni.$api.video.videolog(e);case 6:i.sent,uni.setStorageSync("videolog",[]);case 8:case"end":return i.stop()}}),i)})))()},fullscreenchange:function(i){i.detail.fullScreen||plus.screen.lockOrientation("portrait-primary")},play:function(){if(this.show_pause_btn=0,!this.isPageVisible){console.log("play 事件暂停播放");var i=uni.createVideoContext(this.originList[this.originIndex]._id,this);i.pause()}},pause:function(){this.show_pause_btn=1},show_right_list22:function(){alert(222),this.show_right_list=1},gxdd:function(){uni.getStorageSync("isbuy");console.log("更新列表"),this.page=1,this.Recommend()},buyAct:function(i){1==i&&(i=this.originList[this.baymid].mid);var t=this.originList[this.baymid];if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;this.isbuylx=i,uni.setStorage({key:"buydata",data:t}),uni.setStorage({key:"isbuy",data:1}),this.downbuy(),uni.navigateTo({url:"/pages/client/tuan/buy?id="+this.id+"&mid="+i})},govip:function(){if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;this.downbuy(),uni.navigateTo({url:"/pages/client/vipcard/index"})},timeupdate:function(i){i.detail.currentTime>0&&1==this.originList[this.originIndex].pays&&(uni.createVideoContext(this.originList[this.originIndex]._id,this).seek(0),uni.createVideoContext(this.originList[this.originIndex]._id,this).pause(),this.fenji=2,this.baymid=this.originIndex)},selectThisVideo:function(i,t){var e=this;this.down(),1==t?(this.baymid=i,this.fenji=2):(this.duration=20,this.originIndex=i,this.initSwiperData(i),setTimeout((function(){e.duration=500}),500))},down:function(){this.$refs.select.close()},downbuy:function(){this.$refs.select.close()},tapVideoHover:function(i,t){this.right_list_width=0,this.show_right_list=0,this.isqp=!this.isqp},tapVides:function(){this.isqp=!this.isqp},Recommend:function(){var i=this;return(0,o.default)((0,s.default)().mark((function t(){var e,n,o,a,r,d,l,c;return(0,s.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=0,uni.getStorageSync("userinfo")&&(e=uni.getStorageSync("userinfo").id),n={},null!=uni.$systemInfo&&(n={__appVersion:"undefined"!=uni.$systemInfo.appVersion?uni.$systemInfo.appVersion:"",__from:uni.$platform,__model:"undefined"!=uni.$systemInfo.model?uni.$systemInfo.model:"",__osName:"undefined"!=uni.$systemInfo.osName?uni.$systemInfo.osName:""}),o={page:i.page,uid:e,vid:i.vid,mid:i.mid,device:JSON.stringify(n),_v:20240523},t.next=7,uni.$api.video.info(o);case 7:if(a=t.sent,console.log("ssssssssssssssssssssssssssssssssssssssss",a),1==a.isempty){if(r=a.data,d=a.midlog,1==i.page){for(i.originList=a.data,l=0;l<r.length;l++)i.mid>0?r[l].mid==i.mid&&(i.originIndex=l):r[l].mid==d&&(i.originIndex=l);i.initSwiperData(i.originIndex)}else for(c=0;c<r.length;c++)i.originList.push(r[c]);i.page=i.page+1}else i.nodate=!1;case 10:case"end":return t.stop()}}),t)})))()},ended:function(){this.isplay&&(this.displayIndex<2?this.current=this.displayIndex+1:this.current=0,this.isqp=!0,console.log("显示swiper Index:",this.displayIndex))},initSwiperData:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.originIndex,t=this;this.isqp=!1,console.log("--------当前数据 Index:",i);var e=this.originList.length,n=[];n[this.displayIndex]=this.originList[i],n[this.displayIndex-1==-1?2:this.displayIndex-1]=this.originList[i-1==-1?e-1:i-1],n[this.displayIndex+1==3?0:this.displayIndex+1]=this.originList[i+1==e?0:i+1],this.displaySwiperList=n,r.pause(),this.oid>=this.originList.length&&(this.oid=0),this.oid<0&&(this.oid=this.originList.length-1),this.now_video_id=this.originList[i].id,console.log(this.now_video_id,"nowwwwwwwwwwwwwwwwwwwwwwwwww");var s=uni.getStorageSync("videolog");s||(s=[]),s.includes(this.now_video_id)||(s.push(this.now_video_id),uni.setStorageSync("videolog",s)),console.log("bofangqian1111:"),uni.createVideoContext(this.originList[this.oid]._id,this).pause(),console.log("bofangqian2222:"),setTimeout((function(){console.log("qqqqqq:",t.originList[i]._id),uni.createVideoContext(t.originList[i]._id,t).play()}),500);var o=this.originList.length-this.playCount;i==o&&this.nodate&&this.Recommend()},swiperChange:function(i){var t=i.detail.current,e=this.originList.length;this.displayIndex-t==2||this.displayIndex-t==-1?(this.originIndex=this.originIndex+1==e?0:this.originIndex+1,this.displayIndex=this.displayIndex+1==3?0:this.displayIndex+1,this.oid=this.originIndex-1,this.initSwiperData(this.originIndex)):this.displayIndex-t!=-2&&this.displayIndex-t!=1||(this.originIndex=this.originIndex-1==-1?e-1:this.originIndex-1,this.displayIndex=this.displayIndex-1==-1?2:this.displayIndex-1,this.oid=this.originIndex+1,this.initSwiperData(this.originIndex))},tap_right:function(i){this.originIndex=i,this.initSwiperData(this.originIndex);var t=uni.createVideoContext(this.originList[this.originIndex]._id,this);setTimeout((function(){t.play()}),500)},detail:function(i,t){var e=1;uni.getStorageSync("userinfo")&&(e=uni.getStorageSync("userinfo").id),uni.navigateTo({url:"/pages/client/tuan/detail?vid="+i+"&mid="+t+"&fxpid="+e})},toComment:function(i,t,e){if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;this.displaySwiperList[this.displayIndex];this.displaySwiperList[this.displayIndex].iszj=1==i?2:1;var n={vid:t,mid:e};n.token=uni.getStorageSync("userinfo").token,n.uid=uni.getStorageSync("userinfo").id,uni.request({url:this.urls+"/api/user/videorecord",data:n,success:function(i){},fail:function(i,t){}})},bfjl:function(i){if(uni.getStorageSync("userinfo")){var t={vid:this.vid,mid:i};t.uid=uni.getStorageSync("userinfo").id,uni.request({url:this.urls+"/api/video/bfjl",data:t,success:function(i){},fail:function(i,t){}})}},controlstoggle:function(i){console.log(i.detail.show),this.issp=i.detail.show},cLike:function(i,t,e){if(!uni.getStorageSync("userinfo"))return this.denglu(),!1;var n=this.displaySwiperList[this.displayIndex];1==i?(this.displaySwiperList[this.displayIndex].like=2,n.like_n+=1):(this.displaySwiperList[this.displayIndex].like=1,n.like_n-=1),console.log(t);var s={vid:t,mid:e};s.token=uni.getStorageSync("userinfo").token,s.uid=uni.getStorageSync("userinfo").id,uni.request({url:this.urls+"/api/user/tapLove",data:s,success:function(i){},fail:function(i,t){}})},denglu:function(){uni.showModal({title:"温馨提示",content:"请先登录",showCancel:!0,confirmText:"登录",success:function(i){i.confirm?uni.navigateTo({url:"/pages/login/login"}):i.cancel}})},share:function(){var i=this;return(0,o.default)((0,s.default)().mark((function t(){var e,n,o,a,r;return(0,s.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.$api.index.shareDomain();case 2:e=t.sent,n=e.list[0].url,o=n+"?pid="+i.uid+"&vid="+i.now_video_id,a=i.originList[i.originIndex].name,r=i.originList[i.originIndex].img,uni.setClipboardData({data:o,complete:function(){uni.showToast({title:"APP链接已复制"})}}),setTimeout((function(){i.shareSystem(a,o,r)}),1e3);case 9:case"end":return t.stop()}}),t)})))()},shareSystem:function(i,t,e){var n={type:"text",title:i,summary:"",href:t,imageUrl:e};n.href=a.default.webUrl+"index/share/index?vid="+this.now_video_id,console.log(n),uni.shareWithSystem({type:n.type,summary:n.title,href:n.href,imageUrl:n.imageUrl,success:function(){uni.showToast({title:"分享成功",icon:"success"})},fail:function(i){}})},shareToTwitter:function(){var i=encodeURIComponent("这是我想要分享的内容"),t=encodeURIComponent("https://www.example.com"),e=encodeURIComponent("example,uniapp"),n="https://twitter.com/intent/tweet?text=".concat(i,"&url=").concat(t,"&hashtags=").concat(e,"&via=").concat("yourTwitterHandle");uni.navigateTo({url:"/pages/webview/webview?url=".concat(encodeURIComponent(n))})},video_set:function(){this.$refs.set_box.open()},video_time:function(i){var t=parseInt(i/60),e=i-60*t;return e<10&&(e="0"+e),t<10&&(t="0"+t),t+":"+e},videoTimeUpdateEvent:function(i){console.log(i),i.target.id!=this.originList[this.originIndex]._id&&uni.createVideoContext(i.target.id,this).pause();var t=Number(i.detail.currentTime);if(console.log("播放进度条改变",t),t>=this.freed_time&&0==this.is_vip){console.log("试看结束sssssssssssssss",t),uni.createVideoContext(this.originList[this.originIndex]._id,this).pause();var e=uni.createVideoContext(this.originList[this.originIndex]._id,this);e.exitFullScreen(),e.pause(),e.seek(0),uni.showModal({title:"溫馨提示",content:"试看已经结束，是否前往充值vip？",showCancel:!0,confirmText:"確定",success:function(i){i.confirm?uni.navigateTo({url:"/pages/client/vipcard/index"}):i.cancel}})}},speedHandle:function(i){this.speedIndex=i;var t=uni.createVideoContext(this.originList[this.originIndex]._id,this);t.playbackRate(Number(this.speedList[i])),t.play()}},created:function(){}};t.default=d},e697:function(i,t,e){"use strict";e.r(t);var n=e("813b"),s=e("9e5e");for(var o in s)["default"].indexOf(o)<0&&function(i){e.d(t,i,(function(){return s[i]}))}(o);e("0968");var a=e("f0c5"),r=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"5b4afa76",null,!1,n["a"],void 0);t["default"]=r.exports},ead5:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,"\nuni-page-body[data-v-5b4afa76]{background:#000}body.?%PAGE?%[data-v-5b4afa76]{background:#000}\n.title[data-v-5b4afa76]{width:100%;display:flex;justify-content:center;align-items:center;height:%?60?%}.wrap_content[data-v-5b4afa76]{border-radius:%?20?%;display:flex;justify-content:center;align-items:center;background:grey;color:#0ff;height:100%;font-size:80px;margin:%?0?% %?40?%}.container[data-v-5b4afa76]{background-color:#000}.item[data-v-5b4afa76]{\r\n\t\t/* width : 750rpx; */background-color:#000;position:relative}.videoHover[data-v-5b4afa76]{position:absolute;top:0;left:0;flex:1;background-color:rgba(0,0,0,.1);justify-content:center;align-items:center\r\n\t\t\r\n\t\t/* border-style: dashed;\r\n\t\tborder-color: #DD524D;\r\n\t\tborder-width: 1px; */}.playState[data-v-5b4afa76]{width:%?160?%;height:%?160?%;opacity:.2}.userInfo[data-v-5b4afa76]{position:absolute;z-index:99;right:10px;width:%?100?%;text-align:center;flex-direction:column}\n.userInfo[data-v-5b4afa76]{bottom:40%}\n.userAvatar[data-v-5b4afa76]{border-radius:500%;margin-bottom:15px;border-style:solid;border-width:2px;border-color:#fff}.userAvatar[data-v-5b4afa76]{width:%?100?%;height:%?100?%}.likeIco[data-v-5b4afa76],.shareIco[data-v-5b4afa76],.commentIco[data-v-5b4afa76]{width:%?60?%;height:%?60?%;margin-top:15px}.likeNum[data-v-5b4afa76],.commentNum[data-v-5b4afa76],.shareTex[data-v-5b4afa76]{color:#fff;font-size:%?30?%;text-align:center;margin:5px}.likeNumActive[data-v-5b4afa76]{color:red}.contentcd[data-v-5b4afa76]{width:%?720?%;z-index:99;position:absolute;bottom:%?70?%;\r\n\t  /* justify-content: center; */padding:%?15?%;flex-direction:column;justify-content:flex-start;color:#fff}.userName[data-v-5b4afa76]{font-size:%?30?%;color:#fff;margin-top:%?80?%;margin-left:%?-12?%}.words[data-v-5b4afa76]{margin-top:%?16?%;font-size:%?30?%;color:#fff;margin-bottom:%?20?%}.wordss[data-v-5b4afa76]{margin-top:%?10?%;font-size:%?26?%;color:#fff}.root[data-v-5b4afa76]{background-color:#000}.gdfgjh[data-v-5b4afa76]{font-size:%?30?%;font-weight:600;line-height:%?90?%;background:#fff;border-radius:%?18?%;padding:0 %?20?%;text-align:center;margin-bottom:%?20?%}.right_bar[data-v-5b4afa76]{position:fixed;top:85px;right:10px;color:#fff;z-index:5}.right_list[data-v-5b4afa76]{position:fixed;top:0;right:0;color:#fff;width:100px;height:700px;z-index:10}.right_list_main[data-v-5b4afa76]{background:#222}.close_btn[data-v-5b4afa76]{background:#333;width:10px;height:40px;position:absolute!important;top:50vh;margin-top:-20px;left:2px;z-index:99;border-top-left-radius:4px;border-bottom-left-radius:4px}.close_img[data-v-5b4afa76]{margin-top:13px;margin-right:2px}.speed_one[data-v-5b4afa76]{margin-right:5px;border:1px solid #eee;padding:2px 4px;font-size:12px;color:#fff}.active[data-v-5b4afa76]{background:#ff1493!important}",""]),i.exports=t}}]);