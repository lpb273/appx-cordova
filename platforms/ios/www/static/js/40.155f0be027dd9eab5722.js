webpackJsonp([40],{"7R6P":function(e,n,t){"use strict";function i(e){t("7tW8")}Object.defineProperty(n,"__esModule",{value:!0});var o=t("GgDs"),A=t("zz/f"),a=(o.a,{name:"",props:[""],data:function(){return{TitleObjData:{titleContent:"确认订单",showLeftBack:!0,showRightMore:!1},addressDetails:{},goodsDetails:{}}},components:{Header:o.a},computed:{scenceGiftsContent:function(){return{height:document.documentElement.clientHeight-45+"px"}}},beforeMount:function(){},mounted:function(){this.getGoodsDetailsInfo(),this.getAddressDefault()},methods:{selAddress:function(){this.$router.push("/address")},getGoodsDetailsInfo:function(){var e=this;Object(A.C)({goods_id:this.$route.query.id}).then(function(n){console.log(n),1===n.result&&(e.goodsDetails=n.data)}).catch(function(e){console.log(e)})},getAddressDefault:function(){var e=this;Object(A.A)({}).then(function(n){1===n.result?e.addressDetails=n.data[0]:e.$vux.confirm.show({title:"提示",content:"请先添加收货地址",showCancelButton:!1,onConfirm:function(){e.selAddress()}})}).catch(function(e){console.log(e)})}},watch:{}}),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"confirm-order-wrap"},[t("Header",{attrs:{titleContent:e.TitleObjData.titleContent,showLeftBack:e.TitleObjData.showLeftBack,showRightMore:e.TitleObjData.showRightMore}}),e._v(" "),t("div",{staticClass:"confirm-order-content",style:e.scenceGiftsContent},[t("div",{staticClass:"address-wrap",on:{click:e.selAddress}},[e._m(0),e._v(" "),t("div",{staticClass:"address-mid"},[t("p",[t("span",[e._v(e._s(e.addressDetails.realname))]),e._v(" "),t("span",[e._v(e._s(e.addressDetails.tel))])]),e._v(" "),t("p",[e._v(e._s(e.addressDetails.province)+","+e._s(e.addressDetails.city)+","+e._s(e.addressDetails.area))]),e._v(" "),t("p",[e._v(e._s(e.addressDetails.address))])]),e._v(" "),e._m(1)]),e._v(" "),t("div",{staticClass:"goods-details-wrap"},[t("div",{staticClass:"goods-details-left"},[t("img",{staticClass:"goods-details-img",attrs:{src:e.goodsDetails.thumb_url,alt:e.goodsDetails.title}})]),e._v(" "),t("div",{staticClass:"goods-details-mid"},[t("p",[e._v(e._s(e.goodsDetails.title))]),e._v(" "),t("p",{staticStyle:{color:"#999999"}},[e._v("已选")]),e._v(" "),t("p",{staticStyle:{color:"#B7090A"}},[e._v("¥"+e._s(e.goodsDetails.marketprice))])]),e._v(" "),e._m(2)]),e._v(" "),t("div",{staticClass:"goods-details-desc"},[t("p",[t("span",{staticStyle:{"font-size":"17px",color:"#000"}},[e._v("商品总额：")]),e._v(" "),t("span",[e._v("¥"+e._s(e.goodsDetails.marketprice))])]),e._v(" "),e._m(3),e._v(" "),e._m(4)])]),e._v(" "),t("div",{staticClass:"confirm-order-btn-wrap"},[t("p",{staticClass:"confirm-order-desc"},[e._v("应付：¥"+e._s(e.goodsDetails.marketprice))]),e._v(" "),t("p",{staticClass:"confirm-order-btn"},[e._v("立即下单")])])],1)},d=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"address-left"},[t("span",{staticClass:"iconfont icondingwei"})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"address-right"},[t("span",{staticClass:"iconfont iconyoujiantou"})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"goods-details-right"},[t("p",[e._v("数量：1")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("span",[e._v("优惠")]),e._v(" "),t("span",[e._v("-¥0.00")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticStyle:{border:"none"}},[t("span",[e._v("运费")]),e._v(" "),t("span",[e._v("¥0.00")])])}],r={render:s,staticRenderFns:d},l=r,f=t("VU/8"),c=i,B=f(a,l,!1,c,"data-v-76f74fce",null);n.default=B.exports},"7tW8":function(e,n,t){var i=t("d1Mo");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("7e5bc22d",i,!0,{})},d1Mo:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.confirm-order-wrap[data-v-76f74fce] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #f9f9f9;\n}\n.confirm-order-content[data-v-76f74fce] {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-top: 50px;\n}\n.address-wrap[data-v-76f74fce] {\n  width: 100%;\n  min-height: 50px;\n  background: #fff;\n  height: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 15px;\n  box-sizing: border-box;\n  margin-top: 5px;\n}\n.address-left[data-v-76f74fce] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.address-mid[data-v-76f74fce] {\n  -webkit-box-flex: 8;\n  -webkit-flex: 8;\n          flex: 8;\n}\n.address-right[data-v-76f74fce] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.goods-details-wrap[data-v-76f74fce] {\n  width: 100%;\n  height: 100px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  overflow: hidden;\n  padding: 15px;\n  box-sizing: border-box;\n  margin-top: 10px;\n  background: #fff;\n}\n.goods-details-img[data-v-76f74fce] {\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n}\n.goods-details-left[data-v-76f74fce] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.goods-details-mid[data-v-76f74fce] {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n          flex: 2;\n}\n.goods-details-right[data-v-76f74fce] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.goods-details-desc[data-v-76f74fce] {\n  width: 100%;\n  height: 150px;\n  padding-left: 15px;\n  box-sizing: border-box;\n  background: #fff;\n  margin-top: 10px;\n}\n.goods-details-desc p[data-v-76f74fce]{\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  border-bottom: 1px solid #eee;\n  padding-right: 15px;\n  box-sizing: border-box;\n  color: #666666;\n}\n.confirm-order-btn-wrap[data-v-76f74fce]{\n  width: 100%;\n  height: 50px;\n  border-top: 1px solid #eee;\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.confirm-order-desc[data-v-76f74fce]{\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n          flex: 2;\n  padding-left: 15px;\n  box-sizing: border-box;\n  font-weight: bold;\n  font-size: 17px;\n}\n.confirm-order-btn[data-v-76f74fce]{\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  height: 50px;\n  background: #222;\n  line-height: 50px;\n  text-align: center;\n  color: #fff;\n}\n","",{version:3,sources:["/Users/lpb/Desktop/kachuoweb_svn/kachuoAPPX/src/components/pages/kachuomall/goods/ConfirmOrder.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;EACvC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,cAAc;EACd,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;EACvC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,iBAAiB;EACjB,cAAc;EACd,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;CACvB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;CACjB;AACD;EACE,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,0BAA0B;EAC1B,uCAAuC;UAC/B,+BAA+B;EACvC,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,8BAA8B;EAC9B,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;CAChB;AACD;EACE,YAAY;EACZ,aAAa;EACb,2BAA2B;EAC3B,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,+BAA+B;EAC/B,8BAA8B;EAC9B,4BAA4B;UACpB,oBAAoB;EAC5B,0BAA0B;EAC1B,4BAA4B;UACpB,oBAAoB;EAC5B,mBAAmB;EACnB,UAAU;EACV,QAAQ;CACT;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;CACb",file:"ConfirmOrder.vue",sourcesContent:["\n.confirm-order-wrap[data-v-76f74fce] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #f9f9f9;\n}\n.confirm-order-content[data-v-76f74fce] {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: scroll;\n  margin-top: 50px;\n}\n.address-wrap[data-v-76f74fce] {\n  width: 100%;\n  min-height: 50px;\n  background: #fff;\n  height: auto;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  padding: 15px;\n  box-sizing: border-box;\n  margin-top: 5px;\n}\n.address-left[data-v-76f74fce] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.address-mid[data-v-76f74fce] {\n  -webkit-box-flex: 8;\n  -webkit-flex: 8;\n          flex: 8;\n}\n.address-right[data-v-76f74fce] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  text-align: right;\n}\n.goods-details-wrap[data-v-76f74fce] {\n  width: 100%;\n  height: 100px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  overflow: hidden;\n  padding: 15px;\n  box-sizing: border-box;\n  margin-top: 10px;\n  background: #fff;\n}\n.goods-details-img[data-v-76f74fce] {\n  width: 60px;\n  height: 60px;\n  display: inline-block;\n}\n.goods-details-left[data-v-76f74fce] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.goods-details-mid[data-v-76f74fce] {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n          flex: 2;\n}\n.goods-details-right[data-v-76f74fce] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n}\n.goods-details-desc[data-v-76f74fce] {\n  width: 100%;\n  height: 150px;\n  padding-left: 15px;\n  box-sizing: border-box;\n  background: #fff;\n  margin-top: 10px;\n}\n.goods-details-desc p[data-v-76f74fce]{\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  border-bottom: 1px solid #eee;\n  padding-right: 15px;\n  box-sizing: border-box;\n  color: #666666;\n}\n.confirm-order-btn-wrap[data-v-76f74fce]{\n  width: 100%;\n  height: 50px;\n  border-top: 1px solid #eee;\n  background: #fff;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.confirm-order-desc[data-v-76f74fce]{\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n          flex: 2;\n  padding-left: 15px;\n  box-sizing: border-box;\n  font-weight: bold;\n  font-size: 17px;\n}\n.confirm-order-btn[data-v-76f74fce]{\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  height: 50px;\n  background: #222;\n  line-height: 50px;\n  text-align: center;\n  color: #fff;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=40.155f0be027dd9eab5722.js.map