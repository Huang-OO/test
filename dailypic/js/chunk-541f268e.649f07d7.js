(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-541f268e"],{"0bf1":function(e,r,t){},"0cb2":function(e,r,t){var n=t("7b0b"),i=Math.floor,a="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,c,u,l){var m=t+e.length,f=c.length,d=s;return void 0!==u&&(u=n(u),d=o),a.call(l,d,(function(n,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,t);case"'":return r.slice(m);case"<":o=u[a.slice(1,-1)];break;default:var s=+a;if(0===s)return n;if(s>f){var l=i(s/10);return 0===l?n:l<=f?void 0===c[l-1]?a.charAt(1):c[l-1]+a.charAt(1):n}o=c[s-1]}return void 0===o?"":o}))}},"25f0":function(e,r,t){"use strict";var n=t("6eeb"),i=t("825a"),a=t("d039"),o=t("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),m=u.name!=s;(l||m)&&n(RegExp.prototype,s,(function(){var e=i(this),r=String(e.source),t=e.flags,n=String(void 0===t&&e instanceof RegExp&&!("flags"in c)?o.call(e):t);return"/"+r+"/"+n}),{unsafe:!0})},5319:function(e,r,t){"use strict";var n=t("d784"),i=t("825a"),a=t("50c4"),o=t("a691"),s=t("1d80"),c=t("8aa5"),u=t("0cb2"),l=t("14c3"),m=Math.max,f=Math.min,d=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,r,t,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,h=p?"$":"$0";return[function(t,n){var i=s(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,n){if(!p&&g||"string"===typeof n&&-1===n.indexOf(h)){var s=t(r,e,this,n);if(s.done)return s.value}var b=i(e),v=String(this),x="function"===typeof n;x||(n=String(n));var _=b.global;if(_){var w=b.unicode;b.lastIndex=0}var F=[];while(1){var k=l(b,v);if(null===k)break;if(F.push(k),!_)break;var y=String(k[0]);""===y&&(b.lastIndex=c(v,a(b.lastIndex),w))}for(var $="",E=0,S=0;S<F.length;S++){k=F[S];for(var R=String(k[0]),j=m(f(o(k.index),v.length),0),O=[],C=1;C<k.length;C++)O.push(d(k[C]));var q=k.groups;if(x){var I=[R].concat(O,j,v);void 0!==q&&I.push(q);var U=String(n.apply(void 0,I))}else U=u(R,v,j,O,q,n);j>=E&&($+=v.slice(E,j)+U,E=j+R.length)}return $+v.slice(E)}]}))},"537a":function(e,r,t){"use strict";t("0bf1")},"92b3":function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"register"},[t("div",{staticClass:"title"},[t("div",{staticClass:"register-title"},[e._v("用户注册")]),e._m(0),t("div",{staticClass:"login iconfont icon-denglutijiao",on:{click:e.redirect}})]),t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-position":"left",rules:e.rules,model:e.ruleForm,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名:",prop:"username",error:e.name_error}},[t("el-input",{attrs:{type:"text",autocomplete:"off"},on:{blur:e.checkName},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),t("el-form-item",{attrs:{label:"密码:",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),t("el-form-item",{attrs:{label:"确认密码:",prop:"check_password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.check_password,callback:function(r){e.$set(e.ruleForm,"check_password",r)},expression:"ruleForm.check_password"}})],1),t("el-form-item",{attrs:{label:"手机号:",prop:"mobile",error:e.mobile_error}},[t("el-input",{attrs:{type:"text",autocomplete:"off"},on:{blur:e.checkPhone},model:{value:e.ruleForm.mobile,callback:function(r){e.$set(e.ruleForm,"mobile",r)},expression:"ruleForm.mobile"}})],1),t("el-form-item",{staticClass:"verification",attrs:{label:"图形验证码:",prop:"verification"}},[t("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.verification,callback:function(r){e.$set(e.ruleForm,"verification",r)},expression:"ruleForm.verification"}}),t("img",{attrs:{src:e.img_src,alt:"图形验证码"},on:{click:e.getUuid}})],1),t("el-form-item",{staticClass:"mobile",attrs:{label:"短信验证码:",prop:"mobile_code"}},[t("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.mobile_code,callback:function(r){e.$set(e.ruleForm,"mobile_code",r)},expression:"ruleForm.mobile_code"}}),t("el-button",{attrs:{type:"primary",disabled:e.is_disable},on:{click:e.getSMS}},[e._v(e._s(e.btn_msg))])],1),t("el-form-item",{staticStyle:{left:"1px"}},[t("el-checkbox",{model:{value:e.ruleForm.checked,callback:function(r){e.$set(e.ruleForm,"checked",r)},expression:"ruleForm.checked"}},[e._v("同意用户协议")]),t("br"),t("el-button",{staticClass:"register-btn",attrs:{type:"primary",loading:e.confirmBtnDis},on:{click:e.submitForm}},[e._v("注册")])],1)],1)],1)])},i=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-name"},[t("a",[e._v("登录")])])}],a=t("1da1"),o=(t("96cf"),t("ac1f"),t("5319"),t("d3b7"),t("25f0"),t("99af"),t("5724"));function s(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].request({url:"/username/".concat(r,"/count"),method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function u(e){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].request({url:"mobiles/".concat(r,"/count"),method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].request({url:"image_codes/".concat(r),method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].request({url:"sms_codes/".concat(r.mobile,"?image_code=").concat(r.image_code,"&image_code_id=").concat(r.image_code_id)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].request({url:"register",method:"post",data:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}var b=t("3fa5"),v={mounted:function(){this.getUuid()},data:function(){var e=this,r=function(r,t,n){if(""===t)n(new Error("请输入密码"));else{var i=/^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z]).*$/;i.test(t)||n(new Error("密码最少6位，包括至少字母，数字")),""!==e.ruleForm.check_password&&e.$refs.ruleForm.validateField("check_password"),n()}},t=function(r,t,n){""===t?n(new Error("请再次输入密码")):t!==e.ruleForm.password?n(new Error("两次输入密码不一致!")):n()},n=function(e,r,t){var n=/^1[3-9]\d{9}$/;""===r?t(new Error("手机号为必填字段")):n.test(r)?t():t(new Error("请输入11位手机号"))};return{img_uuid:"",name_error:"",mobile_error:"",img_src:"",btn_msg:"获取短信验证码",is_disable:!1,confirmBtnDis:!1,ruleForm:{username:"",password:"",check_password:"",mobile:"",verification:"",mobile_code:"",checked:!1},rules:{username:[{required:!0,message:"请输入注册的用户名",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],password:[{required:!0,validator:r,trigger:"blur"}],check_password:[{required:!0,validator:t,trigger:"blur"}],mobile:[{required:!0,validator:n,trigger:"change"}],verification:[{required:!0,message:"请输入验证码",trigger:"blur"}],mobile_code:[{required:!0,message:"请输入短信验证码",trigger:"blur"}]}}},methods:{getUuid:function(){var e=this;this.img_uuid="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var r=16*Math.random()|0,t="x"===e?r:3&r|8;return t.toString(16)})),m(this.img_uuid).then((function(r){e.img_src="data:image/jpg;base64,".concat(r.msg)}))},checkName:function(){var e=this;console.log("aaaa"),this.ruleForm.username.length>=3&&this.ruleForm.username.length<=20&&s(this.ruleForm.username).then((function(r){e.name_error=r.count>0?"用户已存在":""}))},checkPhone:function(){var e=this,r=/^1[3-9]\d{9}$/;r.test(this.ruleForm.mobile)&&u(this.ruleForm.mobile).then((function(r){r.count>0&&(e.mobile_error=r.errmsg)}))},submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(){var r=Object(a["a"])(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t){r.next=5;break}e.confirmBtnDis=!0,e.ruleForm.checked?g(e.ruleForm).then((function(r){2e3===r.code?(Object(b["megSuc"])("注册成功"),e.$router.push("/login")):e.confirmBtnDis=!1})):(Object(b["megWarn"])("请同意协议"),e.confirmBtnDis=!1),r.next=6;break;case 5:return r.abrupt("return",!1);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},redirect:function(){this.$router.replace("/login")},getSMS:function(){var e=this,r={mobile:this.ruleForm.mobile,image_code:this.ruleForm.verification,image_code_id:this.img_uuid};if(this.ruleForm.verification&&this.ruleForm.mobile){this.is_disable=!0,this.btn_msg=60;var t=setInterval((function(){e.btn_msg-=1}),1e3);setTimeout((function(){clearInterval(t),e.is_disable=!1,e.btn_msg="获取短信验证码"}),6e4),d(r).then((function(r){400===r.code?(e.is_disable=!1,e.btn_msg="获取短信验证码",clearInterval(t),"图形验证码失效"===r.errmsg&&(e.getUuid(),e.ruleForm.verification="")):Object(b["megSuc"])(r.msg)}))}else this.ruleForm.verification||this.ruleForm.mobile?this.ruleForm.verification?Object(b["megWarn"])("请填写手机号"):Object(b["megWarn"])("请填写图形验证码"):Object(b["megWarn"])("请填写图形验证码及手机号")}}},x=v,_=(t("537a"),t("2877")),w=Object(_["a"])(x,n,i,!1,null,null,null);r["default"]=w.exports}}]);
//# sourceMappingURL=chunk-541f268e.649f07d7.js.map