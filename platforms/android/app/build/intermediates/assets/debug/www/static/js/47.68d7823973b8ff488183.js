webpackJsonp([47],{"8Te5":function(t,n,o){var e=o("RnRZ");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("rjj0")("0d3c0f72",e,!0,{})},Clhf:function(t,n,o){"use strict";function e(t){o("8Te5")}Object.defineProperty(n,"__esModule",{value:!0});var i=o("//Fk"),a=o.n(i),r=o("ABCa"),s=o("HCrG"),c=o("zz/f"),l=o("jijt"),d=o("162o"),u=0,p=(r.a,s.a,l.a,0),f={name:"",props:[""],data:function(){return{scrollbarObj:{fade:!0},pullDownRefreshObj:{threshold:70,stop:40},pullUpLoadObj:{threshold:0,txt:{more:"加载更多",noMore:"没有更多数据了"}},startY:0,scrollToX:0,scrollToY:0,scrollToTime:700,items:[],commentCount:99,contentList:[],page:1,totalNum:0,noData:!1}},components:{XHeader:r.a,VideoListWrap:s.a,InlineLoading:l.a},computed:{contentSty:function(){return{height:document.documentElement.clientHeight-55+"px"}}},beforeMount:function(){},mounted:function(){this.onPullingDown()},methods:{getVideoList:function(){var t=this;return new a.a(function(n){var o=[];Object(c.t)({type:9,page:t.page}).then(function(e){console.log(e),1===e.result&&(p=e.data.totalofnum,t.totalNum=e.data.totalofnum,t.noData=e.data.currentpage===e.data.totalpage,e.data.comment.length?(o=e.data.comment,n(e.data.comment)):t.$nextTick(function(){t.$refs.scroll.forceUpdate(!1)}))}).catch(function(t){console.log(t)})})},scrollTo:function(){this.$refs.scroll.scrollTo(this.scrollToX,this.scrollToY,this.scrollToTime)},onPullingDown:function(){var t=this;p=0,this.page=1,this.getVideoList().then(function(n){t.contentList=n,Object(d.setTimeout)(function(){t.$nextTick(function(){t.$refs.scroll.forceUpdate(!0)})},1e3)})},onPullingUp:function(){var t=this;this.page+=1,this.getVideoList().then(function(n){t.contentList=t.contentList.concat(n),t.contentList.length<p?t.$refs.scroll.forceUpdate(!0):t.$refs.scroll.forceUpdate(!1)})},releaseContent:function(){this.$router.push("/releasevideo??branch=9")},back:function(){this.$router.goBack()}},beforeDestroy:function(){},watch:{}},b=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"video-create-wrap"},[o("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{slot:"header","left-options":{showBack:!0,preventGoBack:!0},"right-options":{showMore:!1}},on:{"on-click-back":t.back,"on-click-more":function(n){t.showMenus=!0}},slot:"header"},[t._v("\n    视频创作\n    "),o("a",{attrs:{slot:"right"},on:{click:t.releaseContent},slot:"right"},[t._v("发布")])]),t._v(" "),o("div",{staticClass:"video-create-content",style:t.contentSty},[o("main",{staticClass:"position-box"},[o("vue-better-scroll",{ref:"scroll",staticClass:"wrapper",attrs:{scrollbar:t.scrollbarObj,pullDownRefresh:t.pullDownRefreshObj,pullUpLoad:t.pullUpLoadObj,startY:parseInt(t.startY)},on:{pullingDown:t.onPullingDown,pullingUp:t.onPullingUp}},[o("VideoListWrap",{attrs:{videoDataList:t.contentList}})],1)],1)])],1)},h=[],A={render:b,staticRenderFns:h},g=A,C=o("VU/8"),m=e,v=C(f,g,!1,m,"data-v-1a124beb",null);n.default=v.exports},RnRZ:function(t,n,o){n=t.exports=o("FZ+f")(!0),n.push([t.i,"\n.video-create-wrap[data-v-1a124beb] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fff;\n}\n.video-create-content[data-v-1a124beb] {\n  width: 100%;\n  overflow: hidden;\n  background: #fff;\n  box-sizing: border-box;\n  margin-top: 45px;\n  position: absolute;\n}\n.position-box[data-v-1a124beb] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: #fff;\n  padding-top: 6px;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  /* top: 340px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  padding: 15px;\n  box-sizing: border-box; */\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/pages/kachuoincome/VideoCreated.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;EACvB,QAAQ;EACR,OAAO;EACP;;;;;;4BAM0B;CAC3B",file:"VideoCreated.vue",sourcesContent:["\n.video-create-wrap[data-v-1a124beb] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #fff;\n}\n.video-create-content[data-v-1a124beb] {\n  width: 100%;\n  overflow: hidden;\n  background: #fff;\n  box-sizing: border-box;\n  margin-top: 45px;\n  position: absolute;\n}\n.position-box[data-v-1a124beb] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: #fff;\n  padding-top: 6px;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  /* top: 340px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  padding: 15px;\n  box-sizing: border-box; */\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=47.68d7823973b8ff488183.js.map