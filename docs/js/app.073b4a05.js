(function(t){function e(e){for(var o,s,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},a={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-quick-notes/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0adf":function(t,e,n){"use strict";var o=n("e59c"),a=n.n(o);a.a},"2bf0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o,a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{key:t.$route.path})],1)},s=[],i=(n("5c0b"),n("2877")),l={},c=Object(i["a"])(l,r,s,!1,null,null,null),u=c.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("summary-bar",{attrs:{total:t.summary.notesTotal,"not-completed":t.summary.notesNotCompleted,completed:t.summary.notesCompleted,fresh:t.summary.notesNew}}),n("data-table",{attrs:{columns:t.dataTable.columns,items:t.dataTable.items,selected:t.dataTable.selected,selectable:"id"},on:{"update:selected":function(e){return t.$set(t.dataTable,"selected",e)}},scopedSlots:t._u([{key:"status",fn:function(e){var o=e.row;return[t.dataTable.selected.includes(o.id)?n("td",{staticClass:"data-table__row"},[n("select",{staticClass:"form-input",domProps:{value:o.status},on:{input:function(e){return t.onStatusUpdate(Object.assign({},o,{status:e.target.value}))}}},t._l(t.dataTable.statuses,(function(e){return n("option",{key:e},[t._v(t._s(e))])})),0)]):n("td",{staticClass:"data-table__row"},[t._v(t._s(o.status))])]}}])}),n("div",{staticClass:"data-table-actions"},[n("button",{staticClass:"button data-table-actions__add",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.onAddNote(e)}}},[t._v("\n      Add\n    ")])]),n("delete-prompt",{on:{delete:function(e){return t.onDeleteNote(t.dataTable.selected)},cancel:t.onCancelDeleteNote},model:{value:t.actions.isDeletePromptVisible,callback:function(e){t.$set(t.actions,"isDeletePromptVisible",e)},expression:"actions.isDeletePromptVisible"}}),n("router-view",{attrs:{name:"AddNote"},on:{submit:t.onAddNoteSubmit}})],1)},f=[],p=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),b=(n("20d6"),n("6762"),n("2fdb"),n("bd86")),v=n("2f62"),_="LOAD_NOTES",y="ADD_NOTE",h="DELETE_NOTES",g="UPDATE_NOTE",S=function(){var t=JSON.parse(localStorage.getItem("notes")),e=t?Promise.resolve(t):Promise.resolve([{id:1,title:"Quick tip: How to turn off Google’s facial recognition",content:"If you use Android’s “Trusted Face” feature to unlock your device, this has probably been obvious to you. However, the Face Grouping feature of Google Photos and the new Face Match included in Google’s brand new Nest Hub Max also make use of similar face matching technology.",status:"New"},{id:2,title:"Cyber threat landscape for the finance sector",content:"Criminals have been robbing banks for over 200 years. It’s a rotten tradition that continues to this day. In fact, F-Secure’s Cyber threat landscape for the finance sector indicates that it might be getting worse worse, with the cyber attack capabilities of nation-states spreading to more common cyber criminals.",status:"Completed"},{id:3,title:"Artificial intelligence is both wonderful and terrifying",content:"On the one hand, artificial intelligence (AI) is the key to advancing technology far beyond our current capabilities. Its ability to analyze large amounts of data, autonomously evolve to meet dynamic challenges, and surpass the limitations of the human mind, present tremendous possibilities for the future.",status:"Not completed"}]);return e},O=function(t){return localStorage.setItem("notes",JSON.stringify(t))&&S()};function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}a["a"].use(v["a"]);var N=new v["a"].Store({state:{statuses:["New","Completed","Not completed"],notes:[]},getters:{notesNew:function(t){return t.notes.filter((function(t){return"New"===t.status}))},notesCompleted:function(t){return t.notes.filter((function(t){return"Completed"===t.status}))},notesNotCompleted:function(t){return t.notes.filter((function(t){return"Not completed"===t.status}))}},mutations:(o={},Object(b["a"])(o,_,(function(t,e){t.notes=e})),Object(b["a"])(o,y,(function(t,e){var n=t.notes.length?t.notes.reduce((function(t,e){return t.id>e.id?t.id:e.id}),{id:0}):0;return t.notes.push(w({id:n+1,status:"New"},e)),O(t.notes)})),Object(b["a"])(o,h,(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.notes=t.notes.filter((function(t){return!e.includes(t.id)})),O(t.notes)})),Object(b["a"])(o,g,(function(t,e){var n=t.notes.findIndex((function(t){return t.id===e.id}));if(n>-1)return t.notes.splice(n,1,e),O(t.notes)})),o),actions:{loadNotes:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.abrupt("return",S().then((function(t){return n(_,t)})));case 5:return t.prev=5,t.t0=t["catch"](1),console.error(t.t0),t.abrupt("return");case 9:case"end":return t.stop()}}),t,null,[[1,5]])})));function e(e){return t.apply(this,arguments)}return e}()}});function k(){return N}function j(){return ft}var A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"summary"},[n("li",{staticClass:"summary__item"},[n("span",{staticClass:"summary__item-description"},[t._v("Total")]),t._v(" "+t._s(t.total)+"\n  ")]),n("li",{staticClass:"summary__item"},[n("span",{staticClass:"summary__item-description"},[t._v("Completed")]),t._v(" "+t._s(t.completed)+"\n  ")]),n("li",{staticClass:"summary__item"},[n("span",{staticClass:"summary__item-description"},[t._v("Not Completed")]),t._v("\n    "+t._s(t.notCompleted)+"\n  ")])])},D=[],x=(n("c5f6"),{name:"SummaryBar",props:{total:{type:Number,required:!0},notCompleted:{type:Number,required:!0},completed:{type:Number,required:!0},fresh:{type:Number,required:!0}}}),P=x,T=(n("0adf"),Object(i["a"])(P,A,D,!1,null,"206de9d6",null)),M=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-table-wrapper"},[n("table",{staticClass:"data-table"},[n("thead",[n("tr",[t.selectable?n("th",{staticClass:"data-table__header data-table__header-selectable"},[n("input",{staticClass:"data-table__action-checkbox data-table__action-checkbox--select-all",attrs:{type:"checkbox"},domProps:{checked:t.selectingState.isSelectAll},on:{click:t.onActionSelectAll}})]):t._e(),t._l(t.columns,(function(e,o){return t._t("header-"+e.key,[n("th",{key:e.key+o,class:["data-table__header","data-table__header--"+e.key],on:{click:function(n){return t.onSort(e.key)}}},[n("div",{staticClass:"data-table__title"},[t._v(t._s(e.text))]),n("div",{class:["data-table__sort-wrapper",{"data-table__sort-wrapper--active":t.sortingState.sort===e.key}]},[n("span",{class:[{"data-table__sort--asc":t.sortingState.sortDirection,"data-table__sort--desc":!t.sortingState.sortDirection}]},[t._v("‣")])])])],{column:e})}))],2)]),n("tbody",t._l(t.sortingState.itemsSorted,(function(e,o){return n("tr",{key:o,staticClass:"data-table__row-wrapper"},[t.selectable?n("td",{staticClass:"data-table__row data-table__row-selectable"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectingState.selectionModel,expression:"selectingState.selectionModel"}],staticClass:"data-table__action-checkbox",attrs:{type:"checkbox"},domProps:{value:e[t.selectable],checked:Array.isArray(t.selectingState.selectionModel)?t._i(t.selectingState.selectionModel,e[t.selectable])>-1:t.selectingState.selectionModel},on:{change:function(n){var o=t.selectingState.selectionModel,a=n.target,r=!!a.checked;if(Array.isArray(o)){var s=e[t.selectable],i=t._i(o,s);a.checked?i<0&&t.$set(t.selectingState,"selectionModel",o.concat([s])):i>-1&&t.$set(t.selectingState,"selectionModel",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.selectingState,"selectionModel",r)}}})]):t._e(),t._l(t.columns,(function(a){return[t._t(a.key,[n("td",{key:a.key+o+o,class:["data-table__row","data-table__row--"+a.key]},[t._v("\n              "+t._s(e[a.key])+"\n            ")])],{row:e,column:a})]}))],2)})),0)])])},$=[],I=n("750b"),q=n("75fc"),H=(n("55dd"),n("93c6")),U=n.n(H);function V(t){var e=t.props,n=t.emit,o=Object(I["c"])({itemsSorted:Object(I["a"])((function(){return U()(e.items,o.sort,o.sortDirection?"asc":"desc")})),sort:"id",sortDirection:!0}),a=function(t){o.sort===t?o.sortDirection=!o.sortDirection:o.sortDirection=!0,o.sort=t,n("sort",t)};return{sortingState:o,onSort:a}}function F(t){var e=t.sortingState,n=t.props,o=t.emit,a=Object(I["c"])({selectionModel:[],isSelectAll:Object(I["a"])((function(){return e.itemsSorted.length>0&&a.selectionModel.length===e.itemsSorted.length}))});Object(I["d"])((function(){return a.selectionModel}),(function(t){o("update:selected",Object(q["a"])(t))}));var r=function(){a.isSelectAll?a.selectionModel=[]:a.selectionModel=e.itemsSorted.map((function(t){return t[n.selectable]}))},s=function(){a.selectionModel=[]};return{selectingState:a,onActionSelectAll:r,onActionDeselectAll:s}}var G={name:"DataTable",props:{columns:{type:Array,required:!0},items:{type:Array,required:!0},selectable:{type:String,default:""}},setup:function(t,e){var n=e.emit,o=V({props:t,emit:n}),a=o.sortingState,r=o.onSort,s=F({sortingState:a,props:t,emit:n}),i=s.selectingState,l=s.onActionSelectAll,c=s.onActionDeselectAll;return Object(I["d"])((function(){return t.items}),(function(){return c()})),{sortingState:a,onSort:r,selectingState:i,onActionSelectAll:l}}},J=G,B=(n("f72a"),Object(i["a"])(J,E,$,!1,null,"457fc38c",null)),L=B.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"delete-prompt__wrapper"},[t.value?n("div",{staticClass:"delete-prompt"},[t._m(0),n("div",[n("button",{staticClass:"button button--text delete-prompt__button--cancel",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("cancel")}}},[t._v("\n        No\n      ")]),n("button",{staticClass:"button delete-prompt__button--delete",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("delete")}}},[t._v("\n        Yes\n      ")])])]):t._e()])},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"delete-prompt__title"},[n("span",{staticClass:"delete-prompt__title-icon"},[t._v("⚠")]),t._v(" Do you want to\n      delete this news?\n    ")])}],Q={name:"DeletePrompt",props:{value:{type:Boolean,required:!0}}},Y=Q,K=(n("7d04"),Object(i["a"])(Y,R,z,!1,null,"365a64e7",null)),W=K.exports;function X(){var t=k(),e=t.getters,n=t.state,o=Object(I["c"])({notesTotal:Object(I["a"])((function(){return n.notes.length})),notesNew:Object(I["a"])((function(){return e.notesNew.length})),notesCompleted:Object(I["a"])((function(){return e.notesCompleted.length})),notesNotCompleted:Object(I["a"])((function(){return e.notesNotCompleted.length}))});return{summary:o}}function Z(){var t=k(),e=t.state,n=Object(I["c"])({columns:[{key:"id",text:"ID"},{key:"title",text:"Title"},{key:"content",text:"Content"},{key:"status",text:"Status"}],items:Object(I["a"])((function(){return e.notes})),statuses:Object(I["a"])((function(){return e.statuses})),selected:[]});return{dataTable:n}}function tt(t){var e=j(),n=k(),o=n.commit,a=Object(I["c"])({isDeletePromptVisible:!1});Object(I["d"])((function(){return t.selected}),(function(){return a.isDeletePromptVisible=!!t.selected.length}));var r=function(){e.push({name:"AddNote"})},s=function(t){o("ADD_NOTE",t)},i=function(t){o("UPDATE_NOTE",t)},l=function(t){o("DELETE_NOTES",t)},c=function(){a.isDeletePromptVisible=!1};return{actions:a,onAddNote:r,onAddNoteSubmit:s,onStatusUpdate:i,onDeleteNote:l,onCancelDeleteNote:c}}var et={name:"Home",components:{SummaryBar:M,DataTable:L,DeletePrompt:W},setup:function(){var t=k(),e=t.dispatch;e("loadNotes");var n=X(),o=n.summary,a=Z(),r=a.dataTable,s=tt(r),i=s.actions,l=s.onAddNote,c=s.onAddNoteSubmit,u=s.onStatusUpdate,d=s.onDeleteNote,m=s.onCancelDeleteNote;return{summary:o,dataTable:r,actions:i,onAddNote:l,onAddNoteSubmit:c,onStatusUpdate:u,onDeleteNote:d,onCancelDeleteNote:m}}},nt=et,ot=(n("d1f7"),Object(i["a"])(nt,m,f,!1,null,"758b5979",null)),at=ot.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-backdrop"},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onModalClose,expression:"onModalClose"}],staticClass:"modal"},[n("h3",{staticClass:"modal__header"},[t._v("News")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.model.title,expression:"form.model.title"}],staticClass:"modal-form__title form-input",attrs:{type:"text",placeholder:"Add Title"},domProps:{value:t.form.model.title},on:{input:function(e){e.target.composing||t.$set(t.form.model,"title",e.target.value)}}})]),n("p",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.model.content,expression:"form.model.content"}],staticClass:"modal-form__content form-input",attrs:{rows:"4",placeholder:"Add Note"},domProps:{value:t.form.model.content},on:{input:function(e){e.target.composing||t.$set(t.form.model,"content",e.target.value)}}})]),t.form.formError?n("p",{staticClass:"modal__form-error"},[t._v("\n      "+t._s(t.form.formError)+"\n    ")]):t._e(),n("button",{staticClass:"button button modal-button__close",attrs:{type:"button"},on:{click:t.onModalSave}},[t._v("\n      Save\n    ")]),n("button",{staticClass:"button button--text modal-button__close",attrs:{type:"button"},on:{click:t.onModalClose}},[t._v("\n      Cancel\n    ")])])])},st=[],it=(n("8615"),function(){var t=Object(I["c"])({model:{title:"",content:""},formError:null});return{form:t}});function lt(t){var e=t.form,n=t.emit,o=j(),a=function(){o.push({name:"Home"})},r=function(){var t=Object.values(e.model).every((function(t){return!!t}));t?(e.formError=null,n("submit",e.model),a()):e.formError="Fields shouldn't be empty"};return{onModalClose:a,onModalSave:r}}var ct={name:"AddNote",setup:function(t,e){var n=e.emit,o=it(),a=o.form,r=lt({form:a,emit:n}),s=r.onModalClose,i=r.onModalSave;return{form:a,onModalClose:s,onModalSave:i}}},ut=ct,dt=(n("fa3c"),Object(i["a"])(ut,rt,st,!1,null,"bc1ba7f6",null)),mt=dt.exports;a["a"].use(d["a"]);var ft=new d["a"]({routes:[{path:"/",name:"Home",component:at,children:[{path:"add",name:"AddNote",components:{AddNote:mt},props:!0}]}]}),pt=n("2103"),bt=n.n(pt);n("fb98");a["a"].use(I["b"]),a["a"].use(bt.a),a["a"].config.productionTip=!1,new a["a"]({router:ft,store:N,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("e332"),a=n.n(o);a.a},"7d04":function(t,e,n){"use strict";var o=n("2bf0"),a=n.n(o);a.a},d1f7:function(t,e,n){"use strict";var o=n("f080"),a=n.n(o);a.a},d696:function(t,e,n){},e332:function(t,e,n){},e59c:function(t,e,n){},e648:function(t,e,n){},f080:function(t,e,n){},f72a:function(t,e,n){"use strict";var o=n("e648"),a=n.n(o);a.a},fa3c:function(t,e,n){"use strict";var o=n("d696"),a=n.n(o);a.a},fb98:function(t,e,n){}});
//# sourceMappingURL=app.073b4a05.js.map