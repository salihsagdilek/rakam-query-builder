webpackJsonp([2],{EMXe:function(e,t,i){"use strict";var n={name:"ElButton",inject:{elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size}},methods:{handleClick:function(e){this.$emit("click",e)},handleInnerClick:function(e){this.disabled&&e.stopPropagation()}}},s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"el-button",class:[e.type?"el-button--"+e.type:"",e.buttonSize?"el-button--"+e.buttonSize:"",{"is-disabled":e.disabled,"is-loading":e.loading,"is-plain":e.plain,"is-round":e.round}],attrs:{disabled:e.disabled,autofocus:e.autofocus,type:e.nativeType},on:{click:e.handleClick}},[e.loading?i("i",{staticClass:"el-icon-loading",on:{click:e.handleInnerClick}}):e._e(),e._v(" "),e.icon&&!e.loading?i("i",{class:e.icon,on:{click:e.handleInnerClick}}):e._e(),e._v(" "),e.$slots.default?i("span",{on:{click:e.handleInnerClick}},[e._t("default")],2):e._e()])},staticRenderFns:[]},r=i("VU/8")(n,s,!1,null,null,null);t.a=r.exports},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("j1ja");var n=i("7+uW"),s=i("Dd8w"),r=i.n(s),l=i("NYxO"),o={name:"App",created:function(){this.getQueryData()},methods:r()({},Object(l.b)({getQueryData:"queryBuilder/get"}))},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")(o,u,!1,function(e){i("aPcg")},null,null).exports,d=i("/ocq");n.default.use(d.a);var c=new d.a({mode:"history",routes:[{path:"/",name:"homepage",component:function(){return i.e(0).then(i.bind(null,"bYRQ"))}}]}),h={selectedColumn:null,selectedAction:null,value:null},m={data:{tables:[],columns:[],actions:[]},selectedTables:[],newQueryData:r()({},h),queries:[]},f=i("Xxa5"),p=i.n(f),g=i("exGp"),b=i.n(g),v={namespaced:!0,state:m,mutations:{setData:function(e,t){e.data=t},setSelectedTables:function(e,t){e.selectedTables=t},setSelectedColumn:function(e,t){e.newQueryData.selectedColumn=t},setSelectedAction:function(e,t){e.newQueryData.selectedAction=t},setSelectedValue:function(e,t){e.newQueryData.value=t},addQuery:function(e,t){e.queries.push(t)},removeQuery:function(e,t){e.queries.splice(e.queries.indexOf(t),1)},updateQuery:function(e,t){e.queries[e.queries.indexOf(t.oldValue)]=t.newValue},resetQueryData:function(e){e.newQueryData=r()({},h)}},actions:{get:function(e){var t=this,i=e.commit;return b()(p.a.mark(function e(){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/static/dummy/sql-data.json");case 3:return n=e.sent,e.t0=i,e.next=7,n.json();case 7:e.t1=e.sent,(0,e.t0)("setData",e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),console.log(e.t2);case 14:case"end":return e.stop()}},e,t,[[0,11]])}))()}},getters:{tables:function(e){return e.data.tables},filteredColumns:function(e){var t=e.selectedTables.map(function(e){return e.id});return e.data.columns.filter(function(e){return t.every(function(t){return e.available_tables.includes(t)})})},filteredActions:function(e){if(e.newQueryData.selectedColumn){var t=e.newQueryData.selectedColumn.id;return e.data.actions.filter(function(e){return e.available_columns.includes(t)})}}}};n.default.use(l.a);var y=new l.a.Store({state:{},modules:{queryBuilder:v}}),E=i("zL8q"),w=i("wUZ8"),k=i.n(w),x=i("urW8"),T=i.n(x),I=i("rdhm"),C=i("ufP2"),A=i("IHkg"),D=i("UUUu"),S=i("T4iT"),_=i("3Q1+"),B={name:"ElDropdown",componentName:"ElDropdown",mixins:[C.a,A.a],directives:{Clickoutside:I.a},components:{ElButton:D.a,ElButtonGroup:S.a},provide:function(){return{dropdown:this}},props:{trigger:{type:String,default:"hover"},type:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},placement:{type:String,default:"bottom-end"},visibleArrow:{default:!0},showTimeout:{type:Number,default:250},hideTimeout:{type:Number,default:150}},data:function(){return{timeout:null,visible:!1,triggerElm:null,menuItems:null,menuItemsArray:null,dropdownElm:null,focusing:!1}},computed:{dropdownSize:function(){return this.size||(this.$ELEMENT||{}).size},listId:function(){return"dropdown-menu-"+Object(_.a)()}},mounted:function(){this.$on("menu-item-click",this.handleMenuItemClick),this.initEvent(),this.initAria()},watch:{visible:function(e){this.broadcast("ElDropdownMenu","visible",e),this.$emit("visible-change",e)},focusing:function(e){var t=this.$el.querySelector(".el-dropdown-selfdefine");t&&(e?t.className+=" focusing":t.className=t.className.replace("focusing",""))}},methods:{getMigratingConfig:function(){return{props:{"menu-align":"menu-align is renamed to placement."}}},show:function(){var e=this;this.triggerElm.disabled||(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.visible=!0},"click"===this.trigger?0:this.showTimeout))},hide:function(){var e=this;this.triggerElm.disabled||(this.removeTabindex(),this.resetTabindex(this.triggerElm),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.visible=!1},"click"===this.trigger?0:this.hideTimeout))},handleClick:function(){this.triggerElm.disabled||(this.visible?this.hide():this.show())},handleTriggerKeyDown:function(e){var t=e.keyCode;[38,40].indexOf(t)>-1?(this.removeTabindex(),this.resetTabindex(this.menuItems[0]),this.menuItems[0].focus(),e.preventDefault(),e.stopPropagation()):13===t?this.handleClick():[9,27].indexOf(t)>-1&&this.hide()},handleItemKeyDown:function(e){var t=e.keyCode,i=e.target,n=this.menuItemsArray.indexOf(i),s=this.menuItemsArray.length-1,r=void 0;[38,40].indexOf(t)>-1?(r=38===t?0!==n?n-1:0:n<s?n+1:s,this.removeTabindex(),this.resetTabindex(this.menuItems[r]),this.menuItems[r].focus(),e.preventDefault(),e.stopPropagation()):13===t?(this.triggerElm.focus(),i.click(),this.hideOnClick||(this.visible=!1)):[9,27].indexOf(t)>-1&&(this.hide(),this.triggerElm.focus())},resetTabindex:function(e){this.removeTabindex(),e.setAttribute("tabindex","0")},removeTabindex:function(){this.triggerElm.setAttribute("tabindex","-1"),this.menuItemsArray.forEach(function(e){e.setAttribute("tabindex","-1")})},initAria:function(){this.dropdownElm.setAttribute("id",this.listId),this.triggerElm.setAttribute("aria-haspopup","list"),this.triggerElm.setAttribute("aria-controls",this.listId),this.menuItems=this.dropdownElm.querySelectorAll("[tabindex='-1']"),this.menuItemsArray=Array.prototype.slice.call(this.menuItems),this.splitButton||(this.triggerElm.setAttribute("role","button"),this.triggerElm.setAttribute("tabindex","0"),this.triggerElm.setAttribute("class",(this.triggerElm.getAttribute("class")||"")+" el-dropdown-selfdefine"))},initEvent:function(){var e=this,t=this.trigger,i=this.show,n=this.hide,s=this.handleClick,r=this.splitButton,l=this.handleTriggerKeyDown,o=this.handleItemKeyDown;this.triggerElm=r?this.$refs.trigger.$el:this.$slots.default[0].elm;var u=this.dropdownElm=this.$slots.dropdown[0].elm;this.triggerElm.addEventListener("keydown",l),u.addEventListener("keydown",o,!0),r||(this.triggerElm.addEventListener("focus",function(){e.focusing=!0}),this.triggerElm.addEventListener("blur",function(){e.focusing=!1}),this.triggerElm.addEventListener("click",function(){e.focusing=!1})),"hover"===t?(this.triggerElm.addEventListener("mouseenter",i),this.triggerElm.addEventListener("mouseleave",n),u.addEventListener("mouseenter",i),u.addEventListener("mouseleave",n)):"click"===t&&this.triggerElm.addEventListener("click",s)},handleMenuItemClick:function(e,t){this.hideOnClick&&(this.visible=!1),this.$emit("command",e,t)}},render:function(e){var t=this,i=this.hide,n=this.splitButton,s=this.type,r=this.dropdownSize,l=n?e("el-button-group",null,[e("el-button",{attrs:{type:s,size:r},nativeOn:{click:function(e){t.$emit("click",e),i()}}},[this.$slots.default]),e("el-button",{ref:"trigger",attrs:{type:s,size:r},class:"el-dropdown__caret-button"},[e("i",{class:"el-dropdown__icon el-icon-arrow-down"})])]):this.$slots.default;return e("div",{class:"el-dropdown",directives:[{name:"clickoutside",value:i}]},[l,this.$slots.dropdown])}},$={extends:i("VU/8")(B,null,!1,null,null,null).exports,name:"custom-drop-down",methods:{handleTriggerKeyDown:function(e){},handleItemKeyDown:function(e){}}},z=i("VU/8")($,null,!1,null,null,null).exports;n.default.config.productionTip=!1,T.a.use(k.a),n.default.use(E.Button),n.default.use(E.ButtonGroup),n.default.use(E.Select),n.default.use(E.Option),n.default.use(E.DropdownMenu),n.default.use(E.Tag),n.default.use(E.Input),n.default.use(E.Row),n.default.use(E.Col),n.default.component(z.name,z),new n.default({el:"#app",router:c,store:y,components:{App:a},template:"<App/>"})},RvCN:function(e,t,i){"use strict";var n={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"el-button-group"},[this._t("default")],2)},staticRenderFns:[]},s=i("VU/8")({name:"ElButtonGroup"},n,!1,null,null,null);t.a=s.exports},aPcg:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e39ae966edb9dee923e8.js.map