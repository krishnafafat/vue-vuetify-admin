(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c28efac"],{"0e8f":function(t,e,i){"use strict";i("20f6");var s=i("e8f2");e["a"]=Object(s["a"])("flex")},"2bfd":function(t,e,i){},"494e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-xl":"","container--fluid":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{lg6:""}},[i("app-widget",{attrs:{title:"Icon Chip"}},[i("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[i("div",{staticClass:"text-center"},[i("v-chip",{attrs:{color:"indigo","text-color":"white"}},[i("v-avatar",[i("v-icon",[t._v("mdi-account")])],1),t._v(" Ranee ")],1),i("v-chip",{attrs:{color:"orange","text-color":"white"}},[t._v(" Premium "),i("v-icon",{attrs:{right:""}},[t._v(" star ")])],1),i("v-chip",{attrs:{color:"primary","text-color":"white"}},[t._v(" 1 Year "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-cake-variant ")])],1),i("v-chip",{attrs:{color:"green","text-color":"white"}},[i("v-avatar",{staticClass:"green darken-4"},[t._v(" 1 ")]),t._v(" Years ")],1),i("v-chip",{attrs:{close:"",color:"teal","text-color":"white"},model:{value:t.chip1,callback:function(e){t.chip1=e},expression:"chip1"}},[i("v-avatar",[i("v-icon",[t._v("mdi-check-circle")])],1),t._v(" Confirmed ")],1)],1)])]),i("app-widget",{staticClass:"mt-3",attrs:{title:"Colored Chip"}},[i("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[i("div",{staticClass:"text-center"},[i("v-chip",{attrs:{color:"primary","text-color":"white"}},[t._v(" Primary ")]),i("v-chip",{attrs:{color:"secondary","text-color":"white"}},[t._v(" Secondary ")]),i("v-chip",{attrs:{color:"red","text-color":"white"}},[t._v(" Colored Chip ")]),i("v-chip",{attrs:{color:"green","text-color":"white"}},[t._v(" Colored Chip ")])],1)])]),i("app-widget",{staticClass:"mt-3",attrs:{title:"Outlined Chip"}},[i("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[i("div",{staticClass:"text-center"},[i("v-chip",{attrs:{color:"primary",outlined:""}},[t._v(" Primary ")]),i("v-chip",{attrs:{color:"secondary",outlined:""}},[t._v(" Secondary ")]),i("v-chip",{attrs:{color:"red",outlined:""}},[t._v(" Colored Chip ")]),i("v-chip",{attrs:{color:"green",outlined:""}},[t._v(" Colored Chip ")])],1)])]),i("app-widget",{staticClass:"mt-3",attrs:{title:"Lable Chip"}},[i("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[i("div",{staticClass:"text-center"},[i("v-chip",{attrs:{label:""}},[t._v(" Label ")]),i("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[i("v-icon",{attrs:{left:""}},[t._v(" mdi-label ")]),t._v("Tags ")],1),i("v-chip",{attrs:{label:"",outlined:"",color:"red"}},[t._v(" Outlined ")])],1)])])],1),i("v-flex",{attrs:{lg6:""}},[i("app-widget",{attrs:{title:"Basic Usage"}},[i("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[i("v-container",{staticClass:"pa-0",attrs:{"container--fluid":""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{md6:"",sm12:""}},[i("div",{staticClass:"text-center"},[i("v-chip",{attrs:{close:""},model:{value:t.chip2,callback:function(e){t.chip2=e},expression:"chip2"}},[t._v(" Example Chip ")])],1),i("div",{staticClass:"text-center"},[i("v-chip",[t._v("Example Chip")])],1)]),i("v-flex",{attrs:{md6:"",sm12:"",xs12:""}},[i("div",{staticClass:"text-center"},[i("v-chip",{attrs:{close:""}},[i("v-avatar",[i("img",{attrs:{src:"https://randomuser.me/api/portraits/men/35.jpg",alt:"trevor"}})]),t._v(" Trevor Hansen ")],1)],1),i("div",{staticClass:"text-center"},[i("v-chip",[i("v-avatar",{staticClass:"teal"},[t._v(" A ")]),t._v(" ANZ Bank ")],1)],1)])],1)],1)],1)]),i("app-widget",{staticClass:"mt-3",attrs:{title:"Complex usage"}},[i("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[i("v-combobox",{attrs:{multiple:"",label:"Your favorite hobbies",chips:"",tags:"",solo:"","prepend-icon":"mdi-filter","append-icon":"",clearable:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",{attrs:{close:"",selected:e.selected},on:{input:function(i){return t.remove(e.item)}}},[i("strong",[t._v(t._s(e.item))]),t._v(" "),i("span",[t._v("(interest)")])])]}}]),model:{value:t.chips,callback:function(e){t.chips=e},expression:"chips"}})],1)])],1)],1)],1)},a=[],n=(i("c975"),i("a434"),i("2909")),l=i("8341"),r={name:"Chip",components:{AppWidget:l["a"]},data:function(){return{chips:["Programming","Watching","Sleeping"],chip1:!0,chip2:!0}},methods:{remove:function(t){this.chips.splice(this.chips.indexOf(t),1),this.chips=Object(n["a"])(this.chips)}}},o=r,h=i("2877"),c=i("6544"),d=i.n(c),p=i("8212"),u=i("cc20"),m=(i("2bfd"),i("b974")),v=i("c6a6"),g=i("80d2"),f=v["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return m["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged(t){if(t&&this.multiple&&this.delimiters.length){const e=this.delimiters.find(e=>t.endsWith(e));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const t=v["a"].options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection(t,e){const i=m["a"].options.methods.genChipSelection.call(this,t,e);return this.multiple&&(i.componentOptions.listeners={...i.componentOptions.listeners,dblclick:()=>{this.editingIndex=e,this.internalSearch=this.getText(t),this.selectedIndex=-1}}),i},onChipInput(t){m["a"].options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown(t){t.preventDefault(),this.$nextTick(()=>{this.getMenuIndex()>-1||this.updateSelf()})},onFilteredItemsChanged(t,e){this.autoSelectFirst&&v["a"].options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown(t){const e=t.keyCode;m["a"].options.methods.onKeyDown.call(this,t),this.multiple&&e===g["v"].left&&0===this.$refs.input.selectionStart?this.updateSelf():e===g["v"].enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();v["a"].options.methods.onTabDown.call(this,t)},selectItem(t){this.editingIndex>-1?this.updateEditing():v["a"].options.methods.selectItem.call(this,t)},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(t){m["a"].options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing(){const t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox(){const t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const t=this.getMenuIndex();if(t<0&&!this.searchIsDirty)return;if(this.editingIndex>-1)return this.updateEditing();const e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){const t=this.internalValue.slice();t.splice(e,1),this.setValue(t)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null},onPaste(t){if(!this.multiple||this.searchIsDirty)return;const e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),m["a"].options.methods.selectItem.call(this,e))}}}),I=i("a523"),x=i("0e8f"),S=i("132d"),C=i("a722"),b=Object(h["a"])(o,s,a,!1,null,null,null);e["default"]=b.exports;d()(b,{VAvatar:p["a"],VChip:u["a"],VCombobox:f,VContainer:I["a"],VFlex:x["a"],VIcon:S["a"],VLayout:C["a"]})},8341:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[t.headerHide?t._e():i("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[i("v-toolbar-title",{staticClass:"headline"},[t._v(" "+t._s(t.title)+" ")]),i("v-spacer"),t._t("widget-header-action",[i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v(t._s(t.icon))])],1)])],2),t.headerHide?t._e():i("v-divider"),t.paddingHide?t._t("widget-content"):i("v-card-text",[t._t("widget-content")],2)],2)},a=[],n={name:"AppWidget",props:{title:{type:String,default:""},icon:{type:String,default:"mdi-dots-vertical"},headerHide:Boolean,paddingHide:Boolean},data:function(){return{}}},l=n,r=i("2877"),o=i("6544"),h=i.n(o),c=i("40dc"),d=i("8336"),p=i("b0af"),u=i("99d9"),m=i("ce7e"),v=i("132d"),g=i("2fa4"),f=i("2a7f"),I=Object(r["a"])(l,s,a,!1,null,null,null);e["a"]=I.exports;h()(I,{VAppBar:c["a"],VBtn:d["a"],VCard:p["a"],VCardText:u["b"],VDivider:m["a"],VIcon:v["a"],VSpacer:g["a"],VToolbarTitle:f["b"]})},a434:function(t,e,i){"use strict";var s=i("23e7"),a=i("23cb"),n=i("a691"),l=i("50c4"),r=i("7b0b"),o=i("65f0"),h=i("8418"),c=i("1dde"),d=Math.max,p=Math.min,u=9007199254740991,m="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!c("splice")},{splice:function(t,e){var i,s,c,v,g,f,I=r(this),x=l(I.length),S=a(t,x),C=arguments.length;if(0===C?i=s=0:1===C?(i=0,s=x-S):(i=C-2,s=p(d(n(e),0),x-S)),x+i-s>u)throw TypeError(m);for(c=o(I,s),v=0;v<s;v++)g=S+v,g in I&&h(c,v,I[g]);if(c.length=s,i<s){for(v=S;v<x-s;v++)g=v+s,f=v+i,g in I?I[f]=I[g]:delete I[f];for(v=x;v>x-s+i;v--)delete I[v-1]}else if(i>s)for(v=x-s;v>S;v--)g=v+s-1,f=v+i-1,g in I?I[f]=I[g]:delete I[f];for(v=0;v<i;v++)I[v+S]=arguments[v+2];return I.length=x-s+i,c}})},a722:function(t,e,i){"use strict";i("20f6");var s=i("e8f2");e["a"]=Object(s["a"])("layout")},c6a6:function(t,e,i){"use strict";i("2bfd");var s=i("b974"),a=i("8654"),n=i("80d2");const l={...s["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,i)=>{return i.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>this.filter(t,String(this.internalSearch),String(this.getText(t))))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=s["a"].options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...l,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>{return this.valueComparator(this.getValue(t),this.getValue(this.internalValue))})},listData(){const t=s["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===n["v"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===n["v"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==n["v"].backspace&&t!==n["v"].delete||this.deleteCurrentItem())},deleteCurrentItem(){if(this.readonly)return;const t=this.selectedItems.length-1;if(-1===this.selectedIndex)return void(this.selectedIndex=t);const e=this.selectedItems[this.selectedIndex];if(this.getDisabled(e))return;const i=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===i?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=i},clearableCallback(){this.internalSearch=void 0,s["a"].options.methods.clearableCallback.call(this)},genInput(){const t=a["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.attrs=t.data.attrs||{},t.data.attrs.autocomplete=t.data.attrs.autocomplete||"off",t.data.domProps=t.data.domProps||{},t.data.domProps.value=this.internalSearch,t},genInputSlot(){const t=s["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,i=e.value;e.value&&this.activateMenu(),this.internalSearch=i,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;s["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){s["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(){this.activateMenu()},selectItem(t){s["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){if(-1===this.selectedIndex)return;const e=this.selectedItems[this.selectedIndex],i=this.getText(e);t.clipboardData.setData("text/plain",i),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}})}}]);
//# sourceMappingURL=chunk-8c28efac.71d83b3b.js.map