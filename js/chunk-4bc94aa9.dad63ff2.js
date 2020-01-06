(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bc94aa9"],{3860:function(t,e,a){"use strict";var s=a("604c");e["a"]=s["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return s["a"].options.computed.classes.call(this)}},methods:{genData:s["a"].options.methods.genData}})},"4bd4":function(t,e,a){"use strict";var s=a("58df"),o=a("7e2b"),i=a("3206");e["a"]=Object(s["a"])(o["a"],Object(i["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"512e":function(t,e,a){"use strict";var s=a("9fad"),o=a.n(s);o.a},"7e58":function(t,e,a){},8431:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"primary",attrs:{id:"login"}},[a("v-content",[a("v-container",{staticClass:"container--fluid fill-height"},[a("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4",lg:"4"}},[a("v-card",{staticClass:"elevation-5 pa-3"},[a("v-card-text",[a("div",{staticClass:"layout column align-center"},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/v-alt.svg",alt:"Vue Vuetify Admin Logo",width:"120",height:"120"}}),a("h1",{staticClass:"text-center my-4 primary--text"},[t._v(" Vue Vuetify Admin Template ")])]),a("v-form",[a("v-text-field",{attrs:{"append-icon":"mdi-account",name:"login",label:t.$t("login.email"),type:"email",required:""},model:{value:t.model.email,callback:function(e){t.$set(t.model,"email",e)},expression:"model.email"}}),a("v-text-field",{attrs:{id:"password","append-icon":"mdi-lock",name:"password",label:t.$t("login.password"),type:"password",required:""},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}})],1)],1),a("v-card-text",[a("v-row",{staticClass:"text-center",attrs:{dense:"","no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-btn-toggle",[a("v-btn",{attrs:{text:"",color:"warning"},on:{click:function(e){return t.setUserToLogin(0)}}},[a("span",[t._v("editor")])]),a("v-btn",{attrs:{text:"",color:"warning"},on:{click:function(e){return t.setUserToLogin(1)}}},[a("span",[t._v("admin")])])],1)],1)],1)],1),a("v-card-actions",[a("localization"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"blue"}},[t._v(" mdi-facebook ")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"red"}},[t._v(" mdi-google ")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"light-blue"}},[t._v(" mdi-twitter ")])],1),a("v-spacer"),a("v-btn",{attrs:{color:"primary",outlined:"",to:"/singup"}},[t._v(" "+t._s(t.$t("login.singUp"))+" ")]),a("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.login}},[t._v(" "+t._s(t.$t("login.singIn"))+" ")])],1)],1)],1)],1)],1)],1)],1)},o=[],i=a("e87f"),n=a("c8c2"),r={name:"SingIn",components:{Localization:i["a"]},data:function(){return{loading:!1,model:{email:n["h"].email,password:n["h"].password}}},methods:{login:function(){var t=this;this.$store.dispatch("LoginByEmail",{email:this.model.email,password:this.model.password}).then((function(e){console.info("LoginByEmail",e),t.$router.push("/dashboard")})).catch((function(t){console.error("LoginByEmail",t)}))},setUserToLogin:function(t){t?(this.model.email=n["h"].email,this.model.password=n["h"].password):(this.model.email=n["i"].email,this.model.password=n["i"].password)}}},l=r,d=(a("512e"),a("2877")),c=a("6544"),u=a.n(c),h=a("7496"),g=a("8336"),m=a("a609"),p=a("b0af"),v=a("99d9"),f=a("62ad"),b=a("a523"),w=a("a75b"),V=a("4bd4"),_=a("132d"),B=a("0fd9"),y=a("2fa4"),x=a("8654"),C=Object(d["a"])(l,s,o,!1,null,"24d29547",null);e["default"]=C.exports;u()(C,{VApp:h["a"],VBtn:g["a"],VBtnToggle:m["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["b"],VCol:f["a"],VContainer:b["a"],VContent:w["a"],VForm:V["a"],VIcon:_["a"],VRow:B["a"],VSpacer:y["a"],VTextField:x["a"]})},"9fad":function(t,e,a){},a609:function(t,e,a){"use strict";a("7e58");var s=a("3860"),o=a("a9ad"),i=a("58df");e["a"]=Object(i["a"])(s["a"],o["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const t=this.setTextColor(this.color,{...s["a"].options.methods.genData.call(this)});return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})}}]);
//# sourceMappingURL=chunk-4bc94aa9.dad63ff2.js.map