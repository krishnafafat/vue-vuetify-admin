(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f3d5c1d"],{"0e8f":function(t,e,a){"use strict";a("20f6");var i=a("e8f2");e["a"]=Object(i["a"])("flex")},"197f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"","container--fluid":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:"",sm12:""}},[a("app-widget",{attrs:{title:"Basic Usage"}},[a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("div",{staticClass:"text-center"},[a("v-badge",{attrs:{left:""}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("6")]),a("v-icon",{attrs:{large:"",color:"grey lighten-1"}},[t._v(" mdi-cart ")])],1),a("v-badge",{attrs:{color:"red"}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("!")]),a("v-icon",{attrs:{large:"",color:"grey"}},[t._v(" mdi-email ")])],1),a("v-label",[t._v("Label")])],1)])])],1),a("v-flex",{attrs:{lg4:"",sm12:""}},[a("app-widget",{attrs:{title:"Inline Badge"}},[a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("div",{staticClass:"text-center"},[a("v-badge",{attrs:{left:""}},[a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("2")]),a("span",[t._v("Examples")])]),a("v-badge",{attrs:{color:"green"}},[a("v-icon",{attrs:{slot:"badge",dark:"",small:""},slot:"badge"},[t._v(" mdi-format-list-bulleted ")]),a("span",[t._v("Lists")])],1)],1)])])],1),a("v-flex",{attrs:{lg4:"",sm12:""}},[a("app-widget",{attrs:{title:"Icon Badge"}},[a("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[a("div",{staticClass:"text-center"},[a("v-badge",{attrs:{left:"",color:"purple"}},[a("v-icon",{attrs:{slot:"badge",dark:"",small:""},slot:"badge"},[t._v(" mdi-layers ")]),a("span",[t._v(" MDI icon ")])],1)],1)])])],1)],1)],1)},s=[],r=a("8341"),o={name:"Badge",components:{AppWidget:r["a"]},data:function(){return{}}},n=o,l=a("2877"),d=a("6544"),c=a.n(d),g=a("4ca6"),u=a("a523"),f=a("0e8f"),h=a("132d"),p=a("24c9"),v=a("a722"),b=Object(l["a"])(n,i,s,!1,null,null,null);e["default"]=b.exports;c()(b,{VBadge:g["a"],VContainer:u["a"],VFlex:f["a"],VIcon:h["a"],VLabel:p["a"],VLayout:v["a"]})},"4ca6":function(t,e,a){"use strict";a("ff44");var i=a("132d"),s=a("a9ad"),r=a("7560"),o=a("f2e7"),n=a("f40d"),l=a("fe6c"),d=a("58df"),c=a("80d2");e["a"]=Object(d["a"])(s["a"],Object(l["b"])(["left","bottom"]),r["a"],o["a"],n["a"]).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${Object(c["g"])(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),a=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",a,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent(){if(this.dot)return;const t=Object(c["q"])(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(i["a"],this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],a=[Object(c["q"])(this)],{"aria-atomic":i,"aria-label":s,"aria-live":r,role:o,title:n,...l}=this.$attrs;return this.inline&&this.left?a.unshift(e):a.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},a)}})},8341:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[t.headerHide?t._e():a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-toolbar-title",{staticClass:"headline"},[t._v(" "+t._s(t.title)+" ")]),a("v-spacer"),t._t("widget-header-action",[a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v(t._s(t.icon))])],1)])],2),t.headerHide?t._e():a("v-divider"),t.paddingHide?t._t("widget-content"):a("v-card-text",[t._t("widget-content")],2)],2)},s=[],r={name:"AppWidget",props:{title:{type:String,default:""},icon:{type:String,default:"mdi-dots-vertical"},headerHide:Boolean,paddingHide:Boolean},data:function(){return{}}},o=r,n=a("2877"),l=a("6544"),d=a.n(l),c=a("40dc"),g=a("8336"),u=a("b0af"),f=a("99d9"),h=a("ce7e"),p=a("132d"),v=a("2fa4"),b=a("2a7f"),m=Object(n["a"])(o,i,s,!1,null,null,null);e["a"]=m.exports;d()(m,{VAppBar:c["a"],VBtn:g["a"],VCard:u["a"],VCardText:f["b"],VDivider:h["a"],VIcon:p["a"],VSpacer:v["a"],VToolbarTitle:b["b"]})},a722:function(t,e,a){"use strict";a("20f6");var i=a("e8f2");e["a"]=Object(i["a"])("layout")},f40d:function(t,e,a){"use strict";var i=a("2b0e");e["a"]=i["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},ff44:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6f3d5c1d.990f8fec.js.map