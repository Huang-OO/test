(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd75b76","chunk-090e46b1"],{"3a63":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.detailData.user_name,visible:t.show},on:{"update:visible":function(e){t.show=e}}},[n("div",[n("el-avatar",{attrs:{size:50,src:t.detailData.avatar}},[n("img",{attrs:{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"}})]),n("el-image",{attrs:{src:t.detailData.url}}),n("p",[t._v("简介: ")]),t.edit?t._e():n("p",[t._v(t._s(t.detailData.describe))]),t.edit?n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.detailData.describe,callback:function(e){t.$set(t.detailData,"describe",e)},expression:"detailData.describe"}}):t._e()],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.showBtn&&3!==t.collection,expression:"!showBtn && collection !== 3"}],on:{click:function(e){return t.collectionWork(t.collection?t.detailData.work_id:t.detailData.id,t.showBtn)}}},[t._v("收 藏")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showBtn&&3!==t.collection,expression:"showBtn && collection !== 3"}],on:{click:function(e){return t.collectionWork(t.collection?t.detailData.work_id:t.detailData.id,t.showBtn)}}},[t._v("取消收藏")]),t.edit?n("el-button",{on:{click:function(e){t.edit=!1}}},[t._v("取 消")]):t._e(),t.edit?t._e():n("el-button",{directives:[{name:"show",rawName:"v-show",value:3===t.collection,expression:"collection === 3"}],on:{click:function(e){t.edit=!0}}},[t._v("编辑")]),t.edit?t._e():n("el-button",{attrs:{type:"primary"},on:{click:t.hideDialog}},[t._v("确 定")]),t.edit?n("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保 存")]):t._e()],1)])],1)},a=[],r=n("3fa5"),o=n("f9aa"),c={name:"DetailInfo",props:["dialogTableVisible","detailData","detailList","collection"],created:function(){console.log(this.detailData)},watch:{show:function(){this.hideDialog()}},data:function(){return{show:this.dialogTableVisible,src:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",showBtn:this.detailData.collection,userId:this.$store.getters.consumerInfo.id,secondCategory:this.$route.params.id,edit:!1}},methods:{hideDialog:function(){this.$emit("update:dialogTableVisible",!1)},collectionWork:function(t,e){var n=this,i={user_id:this.userId,work_id:t};2===this.collection?Object(o["h"])(i).then((function(t){2e3===t.code&&(Object(r["megSuc"])("取消收藏成功"),n.showBtn=!n.showBtn,Object(o["b"])(n.secondCategory,n.userId).then((function(t){2e3===t.code&&(n.$emit("update:detailList",t.collection_list),n.$emit("update:dialogTableVisible",!1))})))})):1===this.collection&&(e?Object(o["h"])(i).then((function(t){2e3===t.code&&(Object(r["megSuc"])("取消收藏成功"),n.showBtn=!n.showBtn,Object(o["d"])(n.secondCategory,n.userId).then((function(t){2e3===t.code&&n.$emit("update:detailList",t.detail_list)})))})):Object(o["g"])(i).then((function(t){2e3===t.code&&(Object(r["megSuc"])("收藏成功"),n.showBtn=!n.showBtn,Object(o["d"])(n.secondCategory,n.userId).then((function(t){2e3===t.code&&n.$emit("update:detailList",t.detail_list)})))})))},save:function(){Object(o["f"])(this.detailData).then((function(t){2e3===t&&Object(r["megSuc"])("修改成功")}))}}},s=c,l=n("2877"),u=Object(l["a"])(s,i,a,!1,null,"6f5d72c7",null);e["default"]=u.exports},"4efc":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={pageSize:10,pageSizes:[10,20,30,40,50],category:{1:"海滩",2:"鲜花",3:"上海",4:"深圳",5:"武汉",6:"山水",7:"户外休闲",8:"生活方式",9:"生活色彩",10:"欢聚时刻",11:"小情绪",12:"老年生活"}}},"649b":function(t,e,n){},"6ab7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("detail-header",[n("my-nav",{attrs:{scroll:!0}})],1),n("div",{staticClass:"info-img"},[n("el-image",{attrs:{src:"https://s1.tuchong.com/content-image/202104/fe7dcd931b140180ce3b612df4b131b8.jpg"}}),n("div",{staticClass:"detail-info"},[n("h1",{staticClass:"page-topic__info-title"},[t._v(t._s(t.category[""+t.secondCategory]))]),n("p",{staticClass:"page-topic__info-total"},[t._v("共77个")]),n("span",{staticClass:"page-topic__info-keywords"},[t._v("立夏")]),n("span",[t._v("夏至")])])],1),n("div",{staticClass:"detail-all-img"},t._l(t.showData,(function(e){return n("el-col",{key:e.id,attrs:{span:5,offset:1}},[n("div",{staticClass:"thumbnail",on:{click:function(n){return t.changeDialog(e.id)}}},[n("el-image",{attrs:{src:e.url,fit:"cover"}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[t._v(" 加载中"),n("span",{staticClass:"dot"},[t._v("...")])])]),e.collection?t._e():n("span",{staticClass:"search-result__opt-item"},[t._v("收藏")]),e.collection?n("span",{staticClass:"search-result__opt-item",staticStyle:{width:"50px"}},[t._v("取消收藏")]):t._e(),n("i",{class:{"el-icon-star-off":!e.collection,"el-icon-star-on":e.collection},on:{click:function(n){return n.stopPropagation(),t.collectionWork(e.id,e.collection)}}})],1)])})),1),t.dialogTableVisible?n("detail-info",{attrs:{"dialog-table-visible":t.dialogTableVisible,"detail-data":t.detailInfo,"detail-list":t.detailList,collection:1},on:{"update:dialogTableVisible":function(e){t.dialogTableVisible=e},"update:dialog-table-visible":function(e){t.dialogTableVisible=e},"update:detailData":function(e){t.detailInfo=e},"update:detail-data":function(e){t.detailInfo=e},"update:detailList":function(e){t.detailList=e},"update:detail-list":function(e){t.detailList=e}}}):t._e()],1)},a=[],r=(n("7db0"),n("b1e4")),o=n("3a63"),c=n("4efc"),s=n("f9aa"),l=n("a70e"),u=n("3fa5"),d={name:"Detail",created:function(){var t=this;Object(s["d"])(this.secondCategory,this.userId).then((function(e){2e3===e.code&&(t.detailList=e.detail_list)}))},data:function(){return{dialogTableVisible:!1,category:c["a"].category,secondCategory:this.$route.params.id,userId:this.$store.getters.consumerInfo.id||0,detailList:[],detailInfo:{}}},components:{DetailHeader:r["default"],DetailInfo:o["default"],MyNav:l["default"]},computed:{showData:{get:function(){return this.detailList},set:function(t){this.detailList=t}}},methods:{changeDialog:function(t){this.dialogTableVisible=!0,this.detailInfo=this.detailList.find((function(e){return e.id===t}))},collectionWork:function(t,e){var n=this,i={user_id:this.userId,work_id:t};console.log(e),e?Object(s["h"])(i).then((function(t){2e3===t.code&&(Object(u["megSuc"])("取消收藏成功"),Object(s["d"])(n.secondCategory,n.userId).then((function(t){2e3===t.code&&(n.detailList=t.detail_list,console.log(n.showData[0],n.detailList[0]))})))})):Object(s["g"])(i).then((function(t){2e3===t.code&&(Object(u["megSuc"])("收藏成功"),Object(s["d"])(n.secondCategory,n.userId).then((function(t){2e3===t.code&&(n.detailList=t.detail_list)})))}))}}},f=d,p=(n("b1dd"),n("2877")),h=Object(p["a"])(f,i,a,!1,null,null,null);e["default"]=h.exports},"7db0":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").find,r=n("44d2"),o="find",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),i({target:"Array",proto:!0,forced:c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(o)},b1dd:function(t,e,n){"use strict";n("649b")},f9aa:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"f",(function(){return b})),n.d(e,"c",(function(){return m})),n.d(e,"a",(function(){return v}));var i=n("1da1"),a=(n("99af"),n("96cf"),n("5724"));function r(t){return o.apply(this,arguments)}function o(){return o=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].request({url:"/work/info?category=".concat(e),method:"get"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function c(t,e){return s.apply(this,arguments)}function s(){return s=Object(i["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].request({url:"/work/detail/".concat(e,"?user_id=").concat(n),method:"get"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function l(t){return u.apply(this,arguments)}function u(){return u=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].request({url:"/work/collection",method:"post",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return f=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].request({url:"/work/collection",method:"delete",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return h=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].request({url:"/work/collection?user_id=".concat(e),method:"get"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function b(t){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].request({url:"/work?work_id=".concat(e.id),method:"put",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function m(){return w.apply(this,arguments)}function w(){return w=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].request({url:"/topic",method:"get"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function v(t){return _.apply(this,arguments)}function _(){return _=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].request({url:"/topic",method:"post",data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}}}]);
//# sourceMappingURL=chunk-4dd75b76.c24e0107.js.map