webpackJsonp([31],{"7+tW":function(t,o,n){"use strict";function e(t){n("JoOw")}function s(t){n("sABK")}Object.defineProperty(o,"__esModule",{value:!0});var l=n("GgDs"),r=n("//Fk"),i=n.n(r),a=1,c={name:"app",components:{},data:function(){return{scrollbarObj:{fade:!0},pullDownRefreshObj:{threshold:70,stop:40},pullUpLoadObj:{threshold:0,txt:{more:"加载更多",noMore:"没有更多数据了"}},startY:0,scrollToX:0,scrollToY:0,scrollToTime:700,items:[]}},mounted:function(){this.onPullingDown()},methods:{scrollTo:function(){this.$refs.scroll.scrollTo(this.scrollToX,this.scrollToY,this.scrollToTime)},getData:function(){return new i.a(function(t){setTimeout(function(){for(var o=[],n=0;n<100;n++)o.push(a++);t(o)},1e3)})},onPullingDown:function(){var t=this;console.log("下拉刷新"),a=0,this.getData().then(function(o){t.items=o,t.$refs.scroll.forceUpdate(!0)})},onPullingUp:function(){var t=this;console.log("上拉加载"),this.getData().then(function(o){t.items=t.items.concat(o),a<30?t.$refs.scroll.forceUpdate(!0):t.$refs.scroll.forceUpdate(!1)})}}},u=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("main",{staticClass:"position-box"},[n("vue-better-scroll",{ref:"scroll",staticClass:"wrapper",attrs:{scrollbar:t.scrollbarObj,pullDownRefresh:t.pullDownRefreshObj,pullUpLoad:t.pullUpLoadObj,startY:parseInt(t.startY)},on:{pullingDown:t.onPullingDown,pullingUp:t.onPullingUp}},[n("ul",{staticClass:"list-content"},t._l(t.items,function(o){return n("li",{key:o,staticClass:"list-item"},[t._v(t._s(o))])}),0)])],1)},p=[],f={render:u,staticRenderFns:p},h=f,A=n("VU/8"),d=e,m=A(c,h,!1,d,null,null),b=m.exports,g=(l.a,{name:"",props:[""],data:function(){return{TitleObjData:{titleContent:"云相册",showLeftBack:!0,showRightMore:!1}}},components:{Header:l.a,BetterScroll:b},computed:{conHei:function(){return{height:document.documentElement.clientHeight-45+"px"}}},beforeMount:function(){},mounted:function(){},methods:{},watch:{}}),C=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"photo-album-wrap"},[n("Header",{attrs:{titleContent:t.TitleObjData.titleContent,showLeftBack:t.TitleObjData.showLeftBack,showRightMore:t.TitleObjData.showRightMore}}),t._v(" "),n("div",{staticClass:"photo-album-content",style:t.conHei},[n("BetterScroll")],1)],1)},w=[],v={render:C,staticRenderFns:w},B=v,x=n("VU/8"),D=s,E=x(g,B,!1,D,"data-v-3f801e4b",null);o.default=E.exports},I9zx:function(t,o,n){o=t.exports=n("FZ+f")(!0),o.push([t.i,"\n.position-box {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/common/BetterScroll.vue"],names:[],mappings:";AACA;EACE,gBAAgB;EAChB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,UAAU;CACX",file:"BetterScroll.vue",sourcesContent:["\n.position-box {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n"],sourceRoot:""}])},JoOw:function(t,o,n){var e=n("I9zx");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("ba4a9018",e,!0,{})},LrKt:function(t,o,n){o=t.exports=n("FZ+f")(!0),o.push([t.i,"\n.photo-album-wrap[data-v-3f801e4b]{\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.photo-album-content[data-v-3f801e4b]{\n  width: 100%;\n  background: #f9f9f9;\n  margin-top: 50px;\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/pages/kachuouser/PhotoAlbum.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,oBAAoB;EACpB,iBAAiB;CAClB",file:"PhotoAlbum.vue",sourcesContent:["\n.photo-album-wrap[data-v-3f801e4b]{\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.photo-album-content[data-v-3f801e4b]{\n  width: 100%;\n  background: #f9f9f9;\n  margin-top: 50px;\n}\n"],sourceRoot:""}])},sABK:function(t,o,n){var e=n("LrKt");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("d9401918",e,!0,{})}});
//# sourceMappingURL=31.afcf55a2d688f9333dc9.js.map