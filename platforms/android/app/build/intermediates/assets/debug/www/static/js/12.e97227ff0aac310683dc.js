webpackJsonp([12],{"+TL9":function(n,t,e){var i=e("IOc1");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("665f4cbe",i,!0,{})},"375U":function(n,t,e){"use strict";function i(n){e("ok6n")}Object.defineProperty(t,"__esModule",{value:!0});var o=e("//Fk"),a=e.n(o),s=e("gkbh"),r=e("qaHc"),c=e("wnvf"),l=e("b8xO"),A=e("zz/f"),d=0,p=(s.a,r.a,c.a,l.a,0),u={name:"",props:[""],data:function(){return{TitleObjData:{titleContent:"记住的",showLeftBack:!0,showRightMore:!1},scrollbarObj:{fade:!0},pullDownRefreshObj:{threshold:70,stop:40},pullUpLoadObj:{threshold:0,txt:{more:"加载更多",noMore:"没有更多数据了"}},startY:0,scrollToX:0,scrollToY:0,scrollToTime:700,items:[],page:1}},components:{Header:s.a,VideoList:r.a,Scroll:c.a,DividedArea:l.a},computed:{contentNoHeaderHeight:function(){return{height:document.documentElement.clientHeight-45+"px"}}},beforeMount:function(){},mounted:function(){this.onPullingDown()},methods:{scrollTo:function(){this.$refs.scroll.scrollTo(this.scrollToX,this.scrollToY,this.scrollToTime)},getData:function(){var n=this;return new a.a(function(t){var e=[];Object(A.p)({type:n.$route.query.branch,page:n.page}).then(function(i){console.log(i),1===i.result&&(p=i.data.totalofnum,setTimeout(function(){i.data.comment.length?(e=i.data.comment,t(i.data.comment)):n.$refs.scroll.forceUpdate(!1)},1e3))}).catch(function(n){console.log(n)})})},onPullingDown:function(){var n=this;p=0,this.page=1,this.getData().then(function(t){n.items=t,n.$refs.scroll.forceUpdate(!0)})},onPullingUp:function(){var n=this;this.page+=1,this.getData().then(function(t){n.items=n.items.concat(t),n.items.length<p?n.$refs.scroll.forceUpdate(!0):n.$refs.scroll.forceUpdate(!1)})}},watch:{}},f=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"scence-release-wrap"},[e("Header",{attrs:{titleContent:n.TitleObjData.titleContent,showLeftBack:n.TitleObjData.showLeftBack,showRightMore:n.TitleObjData.showRightMore}}),n._v(" "),e("main",{staticClass:"position-box",style:n.contentNoHeaderHeight},[e("vue-better-scroll",{ref:"scroll",staticClass:"wrapper",attrs:{scrollbar:n.scrollbarObj,pullDownRefresh:n.pullDownRefreshObj,pullUpLoad:n.pullUpLoadObj,startY:parseInt(n.startY)},on:{pullingDown:n.onPullingDown,pullingUp:n.onPullingUp}},[e("VideoList",{attrs:{dataList:n.items}})],1)],1)],1)},h=[],g={render:f,staticRenderFns:h},C=g,B=e("VU/8"),b=i,m=B(u,C,!1,b,"data-v-7e9f5250",null);t.default=m.exports},"7tsD":function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\n.scence-release-wrap[data-v-7e9f5250] {\n  width: 100%;\n  height: 100%;\n  background: #f9f9f9;\n}\n.scence-release-content[data-v-7e9f5250] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-top: 45px;\n}\n.position-box[data-v-7e9f5250] {\n  position: absolute;\n  top: 45px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/pages/kachuoplay/toolslist/Remember.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,UAAU;CACX",file:"Remember.vue",sourcesContent:["\n.scence-release-wrap[data-v-7e9f5250] {\n  width: 100%;\n  height: 100%;\n  background: #f9f9f9;\n}\n.scence-release-content[data-v-7e9f5250] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-top: 45px;\n}\n.position-box[data-v-7e9f5250] {\n  position: absolute;\n  top: 45px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n"],sourceRoot:""}])},IOc1:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\n.font-size-14[data-v-5d13ec24] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.font-size-12[data-v-5d13ec24] {\n  font-size: 12px;\n}\n.price-discount[data-v-5d13ec24] {\n  color: #666;\n  margin-left: 6px;\n}\n.tickets-discount-list-wrap[data-v-5d13ec24] {\n  background: #f9f9f9;\n  padding-top: 10px;\n  box-sizing: border-box;\n}\n.tickets-discount-list[data-v-5d13ec24] {\n  width: 100%;\n  height: 250px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n.img-wrap[data-v-5d13ec24] {\n  width: 100%;\n  height: 200px;\n  padding: 10px;\n  background: #fff;\n}\n.img-desc[data-v-5d13ec24] {\n  width: 100%;\n  height: 50px;\n  padding: 10px;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  background: #fff;\n}\n.scence-distance-wrap[data-v-5d13ec24] {\n  width: 50px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  display: inline-block;\n  background: #666;\n  border-radius: 10px;\n  position: relative;\n  top: -170px;\n  left: 10px;\n  color: #fff;\n  font-size: 12px;\n}\n.img-desc-img[data-v-5d13ec24] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-block;\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/layout/VideoList.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,kBAAkB;EAClB,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,cAAc;EACd,cAAc;EACd,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;EACvC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,sBAAsB;CACvB",file:"VideoList.vue",sourcesContent:["\n.font-size-14[data-v-5d13ec24] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.font-size-12[data-v-5d13ec24] {\n  font-size: 12px;\n}\n.price-discount[data-v-5d13ec24] {\n  color: #666;\n  margin-left: 6px;\n}\n.tickets-discount-list-wrap[data-v-5d13ec24] {\n  background: #f9f9f9;\n  padding-top: 10px;\n  box-sizing: border-box;\n}\n.tickets-discount-list[data-v-5d13ec24] {\n  width: 100%;\n  height: 250px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  border-radius: 4px;\n}\n.img-wrap[data-v-5d13ec24] {\n  width: 100%;\n  height: 200px;\n  padding: 10px;\n  background: #fff;\n}\n.img-desc[data-v-5d13ec24] {\n  width: 100%;\n  height: 50px;\n  padding: 10px;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  background: #fff;\n}\n.scence-distance-wrap[data-v-5d13ec24] {\n  width: 50px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  display: inline-block;\n  background: #666;\n  border-radius: 10px;\n  position: relative;\n  top: -170px;\n  left: 10px;\n  color: #fff;\n  font-size: 12px;\n}\n.img-desc-img[data-v-5d13ec24] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: inline-block;\n}\n"],sourceRoot:""}])},YfvM:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\n.overwrite-title-demo {\n  margin-top: 5px;\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/common/ReleaseHeader.vue"],names:[],mappings:";AACA;EACE,gBAAgB;CACjB",file:"ReleaseHeader.vue",sourcesContent:["\n.overwrite-title-demo {\n  margin-top: 5px;\n}\n"],sourceRoot:""}])},gkbh:function(n,t,e){"use strict";function i(n){e("vFH8")}var o=e("ABCa"),a=e("63CM"),s=(a.a,o.a,{props:["titleContent","showLeftBack","showRightMore"],directives:{TransferDom:a.a},components:{XHeader:o.a},data:function(){return{}},methods:{back:function(){this.$router.goBack()},releaseContent:function(){this.$router.push("/releasecontent")}}}),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{slot:"header","left-options":{showBack:n.showLeftBack,preventGoBack:!0},"right-options":{showMore:n.showRightMore}},on:{"on-click-back":n.back,"on-click-more":function(t){n.showMenus=!0}},slot:"header"},[n._v(n._s(n.titleContent)),e("a",{attrs:{slot:"right"},on:{click:n.releaseContent},slot:"right"},[n._v("发布")])])},c=[],l={render:r,staticRenderFns:c},A=l,d=e("VU/8"),p=i,u=d(s,A,!1,p,null,null);t.a=u.exports},ok6n:function(n,t,e){var i=e("7tsD");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("dd0b0e8a",i,!0,{})},qaHc:function(n,t,e){"use strict";function i(n){e("+TL9")}var o=e("2sLL"),a=e("jijt"),s=(o.a,a.a,{name:"",props:["dataList"],data:function(){return{backgroundImgSty:{width:"100%",height:"400px"}}},components:{XButton:o.a,InlineLoading:a.a},computed:{},beforeMount:function(){},mounted:function(){},methods:{getDetailsContent:function(n){var t=this.$route.query.type,e=this.$route.query.branch;this.$router.push("/scencestorydetail?id="+n+"&type="+t+"&branch="+e)}},watch:{}}),r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tickets-discount-list-wrap"},[n.dataList.length?n._e():e("p",{staticStyle:{"text-align":"center","margin-top":"20px"}},[e("inline-loading"),n._v(" "),e("span",{staticStyle:{"vertical-align":"middle",display:"inline-block","font-size":"14px"}},[n._v("加载中")])],1),n._v(" "),n._l(n.dataList,function(t,i){return e("div",{key:i,staticClass:"tickets-discount-list",on:{click:function(e){return n.getDetailsContent(t.id)}}},[e("div",{staticClass:"img-wrap"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.video_img,expression:"item.video_img"}]}),n._v(" "),e("span",{staticClass:"scence-distance-wrap"},[e("span",{staticClass:"scence-distance"},[n._v(n._s(t.distance))])])]),n._v(" "),e("div",{staticClass:"img-desc"},[e("p",{},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.video_img,expression:"item.video_img"}],staticClass:"img-desc-img"}),n._v(" "),e("span",[n._v(n._s(t.release_name))])]),n._v(" "),e("div",[e("span",{staticStyle:{"margin-right":"20px"}},[e("span",{staticClass:"iconfont iconxiaoxi",staticStyle:{"margin-right":"10px"}}),n._v("\n          "+n._s(t.comment_num)+"\n        ")]),n._v(" "),e("span",[e("span",{staticClass:"iconfont iconzan",staticStyle:{"margin-right":"10px"}}),n._v("\n          "+n._s(t.praise_num)+"\n        ")])])])])})],2)},c=[],l={render:r,staticRenderFns:c},A=l,d=e("VU/8"),p=i,u=d(s,A,!1,p,"data-v-5d13ec24",null);t.a=u.exports},vFH8:function(n,t,e){var i=e("YfvM");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("72bed7c9",i,!0,{})}});
//# sourceMappingURL=12.e97227ff0aac310683dc.js.map