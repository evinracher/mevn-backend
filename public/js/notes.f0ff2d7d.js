(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["notes"],{"0841":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.message.color},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.message.text)+" ")]),t.editing?n("form",{on:{submit:function(e){return e.preventDefault(),t.updateNote(e)}}},[n("h4",[t._v("Edit note")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.name,expression:"note.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.note.name},on:{input:function(e){e.target.composing||t.$set(t.note,"name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.description,expression:"note.description"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.note.description},on:{input:function(e){e.target.composing||t.$set(t.note,"description",e.target.value)}}}),n("b-button",{staticClass:"mx-2",on:{click:function(e){return e.preventDefault(),t.deactiveEditForm(e)}}},[t._v("Cancelar")]),n("b-button",{staticClass:"btn-info",attrs:{type:"submit"}},[t._v("Save")])],1):n("form",{on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[n("h4",[t._v("New note")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.name,expression:"note.name"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.note.name},on:{input:function(e){e.target.composing||t.$set(t.note,"name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.note.description,expression:"note.description"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.note.description},on:{input:function(e){e.target.composing||t.$set(t.note,"description",e.target.value)}}}),n("b-button",{staticClass:"btn-success my-2 btn-block",attrs:{type:"submit"}},[t._v("Add")])],1),n("table",{staticClass:"table mt-5"},[t._m(0),n("tbody",t._l(t.notes,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e._id))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.description))]),n("td",[n("b-button",{staticClass:"btn-sm btn-danger",on:{click:function(n){return t.deleteNote(e._id)}}},[t._v(" Delete ")]),n("b-button",{staticClass:"btn-sm btn-warning mx-2",on:{click:function(n){return t.activeEditForm(e._id)}}},[t._v(" Edit ")])],1)])})),0)]),n("Paginator")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col"}},[t._v("Description")]),n("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],i=n("5530"),a=n("2f62"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.total>1?n("nav",{attrs:{"aria-label":"Page navigation"}},[n("ul",{staticClass:"pagination d-flex justify-content-center"},[n("li",{staticClass:"page-item",class:{disabled:1===t.page}},[n("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.page-1}}}},[t._v(" Previous ")])],1),t._l(t.pagesCount,(function(e){return n("li",{key:e,staticClass:"page-item",class:{active:t.page==e}},[n("router-link",{staticClass:"page-link",attrs:{to:{query:{page:e}}}},[t._v(t._s(e))])],1)})),n("li",{staticClass:"page-item",class:{disabled:t.page===t.pagesCount}},[n("router-link",{staticClass:"page-link",attrs:{to:{query:{page:t.page+1}}}},[t._v(" Next ")])],1)],2)]):t._e()},c=[],l={computed:Object(i["a"])(Object(i["a"])({},Object(a["d"])(["total","page","limit"])),{},{pagesCount:function(){return Math.ceil(this.total/this.limit)}}),watch:{"$route.query.page":{immediate:!0,handler:function(t,e){this.setNotes(t)}}},methods:Object(i["a"])({},Object(a["b"])(["setNotes"]))},u=l,d=n("2877"),m=Object(d["a"])(u,r,c,!1,null,null,null),p=m.exports,v={components:{Paginator:p},data:function(){return{note:{name:"",description:""},dismissSecs:5,dismissCountDown:0,editing:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(a["d"])(["token","notes","message"])),Object(a["c"])(["config"])),methods:Object(i["a"])(Object(i["a"])({},Object(a["b"])(["addNoteAction","deleteNoteAction","updateNoteAction"])),{},{addNote:function(){this.showAlert(),this.addNoteAction(this.note),"error"!==this.message.type&&(this.note={name:"",description:""})},deleteNote:function(t){this.deleteNoteAction(t),this.showAlert(),this.note={name:"",description:""},this.editing=!1},activeEditForm:function(t){var e=this;this.editing=!0,this.axios.get("/notes/"+t,this.config).then((function(t){e.note=t.data})).catch((function(t){var e=t.response;return console.error(e)}))},deactiveEditForm:function(){this.editing=!1,this.note={name:"",description:""}},updateNote:function(){this.updateNoteAction(this.note),"error"!==this.message.type&&(this.note={name:"",description:""},this.editing=!1)},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}})},h=v,g=Object(d["a"])(h,s,o,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=notes.f0ff2d7d.js.map