webpackJsonp([42],{LUoq:function(e,t,n){"use strict";function a(e){n("Opi+")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("GgDs"),s=n("wHMM"),i=n("wnvf"),r=n("6qln"),l=n("b8xO"),c=n("jcoB"),u=(o.a,s.a,i.a,l.a,r.a,c.a,{name:"",props:[""],data:function(){return{TitleObjData:{titleContent:"",showLeftBack:!0,showRightMore:!1},page:0,list:[],refreshText:"下拉刷新",noDataText:"没有更多数据"}},components:{Header:o.a,TabItemMallAdvertise:s.a,Scroll:i.a,DividedArea:l.a,GoodsList:r.a,Divider:c.a},computed:{scrollContentHeight:function(){return{height:document.documentElement.clientHeight-45+"px"}},scrollWrapHeight:function(){return{height:document.documentElement.clientHeight-200+"px"}}},beforeMount:function(){},mounted:function(){this.setTitle()},methods:{setTitle:function(){var e=this.$route.query.title;this.TitleObjData.titleContent=e,"艺品回购"===e?this.getBannerImgFn("8"):"艺品租赁"===e?this.getBannerImgFn("9"):this.getBannerImgFn("10")},refresh:function(e){console.log("refresh"),setTimeout(function(){e()},2e3)},pullup:function(e){console.log("pullup"),setTimeout(function(){e()},2e3)}},watch:{$route:function(e,t){this.setTitle()}}}),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"back-lease-sale-wrap"},[n("Header",{attrs:{titleContent:e.TitleObjData.titleContent,showLeftBack:e.TitleObjData.showLeftBack,showRightMore:e.TitleObjData.showRightMore}}),e._v(" "),n("div",{staticClass:"back-lease-sale-content-wrap",style:e.scrollContentHeight},[n("TabItemMallAdvertise"),e._v(" "),n("DividedArea"),e._v(" "),n("Divider",{attrs:{content:e.TitleObjData.titleContent}}),e._v(" "),n("div",{staticClass:"scroll-wrap-con",style:e.scrollWrapHeight},[n("scroller",{staticClass:"scence-release-content",attrs:{"on-infinite":e.pullup,"on-refresh":e.refresh,refreshText:e.refreshText,noDataText:e.noDataText}},[n("GoodsList")],1)],1)],1)],1)},h=[],d={render:p,staticRenderFns:h},f=d,g=n("VU/8"),v=a,m=g(u,f,!1,v,"data-v-557b7398",null);t.default=m.exports},"Opi+":function(e,t,n){var a=n("g4Ro");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("3c0bdf12",a,!0,{})},g4Ro:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.back-lease-sale-content-wrap[data-v-557b7398] {\n  width: 100%;\n  margin-top: 50px;\n}\n.scence-release-content[data-v-557b7398] {\n  margin-top: 300px;\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/pages/kachuocash/BackLeaseSale.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB",file:"BackLeaseSale.vue",sourcesContent:["\n.back-lease-sale-content-wrap[data-v-557b7398] {\n  width: 100%;\n  margin-top: 50px;\n}\n.scence-release-content[data-v-557b7398] {\n  margin-top: 300px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=42.57280fe711db15d196ba.js.map