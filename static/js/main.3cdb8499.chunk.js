(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{110:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),i=n.n(r),s=(n(90),n(21)),o=n.n(s),u=n(39),l=n(20),d=n(18),j=n(32),f=n.n(j),b=(n(110),n(4));function h(e){return Object(b.jsxs)("div",{className:"delete-section",children:[Object(b.jsx)("button",{className:"button selected-button",onClick:function(t){return e.handlerDeleteSelectedItems(t)},children:"Delete select"}),Object(b.jsx)("button",{className:"button all-server-button",onClick:function(){return e.handlerDeleteAllServerItems()},value:"del-all",children:"Delete all server items"}),Object(b.jsx)("button",{className:"button all-button",onClick:function(){return e.handlerDeleteAllItems()},value:"del-all",children:"Delete all"})]})}n(112);function O(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"selection-bar",children:[Object(b.jsx)("button",{className:"button all-button",onClick:function(){return e.setStatus("all")},value:"all",children:"All"}),Object(b.jsx)("button",{className:"button done-button",onClick:function(){return e.setStatus("done")},value:"done",children:"Done"}),Object(b.jsx)("button",{className:"button undone-button",onClick:function(){return e.setStatus("undone")},value:"undone",children:"Undone"})]})})}var p=n(168);n(113);function m(e){return Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(p.a,{onChange:e.handlerInputText,onKeyPress:e.handlerInputText,type:"text",autoComplete:"off",className:"main-input",id:"outlined-basic",label:"I want to...",variant:"outlined"})})}var x=n(163),v=n(164),g=n(165),k=n(174),C=n(171),E=n(166),D=n(77),S=n.n(D),w=n(76),y=n.n(w);n(117);function N(e){return Object(b.jsx)("div",{className:"list",children:Object(b.jsx)(x.a,{width:"100%",children:e.filteredTodos.map((function(t){return Object(b.jsxs)(v.a,{children:[Object(b.jsx)(g.a,{children:Object(b.jsx)(C.a,{checked:t.completed,onClick:function(n){return e.handlerCheckingCheckBox(n,t.id)},color:"primary"})}),Object(b.jsx)(k.a,{primary:t.text}),t.isEditing?Object(b.jsx)(p.a,{className:"edit-input",onKeyDown:function(n){return e.handlerEscapeEdition(n,t.id)},onChange:function(t){return e.handlerEditText(t)},onKeyPress:function(n){e.handlerEditText(n,t.id)}}):null,Object(b.jsx)("p",{className:"date",children:t.date.split("T")[0]}),Object(b.jsx)(E.a,{onClick:function(n){return e.handlerCheckIsEditing(n,t.id)},edge:"end","aria-label":"comments",children:Object(b.jsx)(y.a,{onClick:function(n){return e.handlerCheckIsEditing(n,t.id)}})}),Object(b.jsx)(E.a,{onClick:function(n){return e.handlerDeleteItem(n,t.id)},edge:"end","aria-label":"comments",children:Object(b.jsx)(S.a,{})})]},t.id)}))})})}var I=n(167),T=n(50);n(119);function P(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"sort",children:[Object(b.jsx)("h3",{children:"Sort by D\u0430te"}),Object(b.jsxs)("div",{className:"arrows",children:[Object(b.jsx)(I.a,{onClick:function(){return e.handlerSortDateToUp()},variant:"contained",children:Object(b.jsx)(T.b,{className:"up-arrow",size:"1rem"})}),Object(b.jsx)(I.a,{onClick:function(){return e.handlerSortDateToDown()},variant:"contained",children:Object(b.jsx)(T.a,{className:"down-arrow",size:"1rem"})})]})]})})}n(120);var A=n(169);function B(e){var t=e.handlerPageChange,n=e.amountOfPages;return Object(b.jsx)(A.a,{onChange:t,count:n})}var M=n(173),K=(n(121),n(170));function U(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),s=i[0],j=i[1],p=Object(c.useState)([]),x=Object(d.a)(p,2),v=x[0],g=x[1],k=Object(c.useState)(Object(l.a)(v)),C=Object(d.a)(k,2),E=C[0],D=C[1],S=Object(c.useState)("all"),w=Object(d.a)(S,2),y=w[0],I=w[1],T=Object(c.useState)(!1),A=Object(d.a)(T,2),U=A[0],z=A[1],J=Object(c.useState)(!0),W=Object(d.a)(J,2),H=W[0],V=W[1],q=Object(c.useState)(1),F=Object(d.a)(q,2),G=F[0],L=F[1],Q=Object(c.useState)(1),R=Object(d.a)(Q,2),X=R[0],Y=R[1],Z=Object(c.useState)("asc"),$=Object(d.a)(Z,2),_=$[0],ee=$[1],te=Object(c.useState)(""),ne=Object(d.a)(te,2),ce=ne[0],ae=ne[1],re=Object(c.useState)(!1),ie=Object(d.a)(re,2),se=ie[0],oe=ie[1],ue="https://obscure-gorge-35138.herokuapp.com",le="https://obscure-gorge-35138.herokuapp.com/tasks",de=function(e){function t(){return(t=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("posted"),t={name:n,done:!1,isEditing:!1},e.next=4,f.a.post(ue+"/task",t);case 4:e.sent,je();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()};function je(){return fe.apply(this,arguments)}function fe(){return(fe=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(le,{params:{order:_,filterBy:y}});case 2:t=e.sent,n=t.data,console.log(n),g(n.map((function(e,t){return{id:t,text:e.name,completed:e.done,date:e.createdAt,uuid:e.id,isEditing:e.isEditing}})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=function(e,t){var n=v.find((function(e){return e.id===t}));!function(e,t){he.apply(this,arguments)}(n,s),n.isEditing=!1,je()};function he(){return(he=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.patch(ue+"task/"+t.uuid,{name:n});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Oe=function e(t,n){var c=n-1;switch(t){case"all":D(Object(l.a)(v.slice(5*c,5*c+5))),I("all");break;case"done":D(Object(l.a)(v.filter((function(e){return!0===e.completed})).slice(5*c,5*c+5))),I("done"),e();break;case"undone":D(Object(l.a)(v.filter((function(e){return!1===e.completed})).slice(5*c,5*c+5))),I("undone"),e()}},pe=function(e){switch(e){case"all":Y(Math.ceil(v.length/5));break;case"done":Y(Math.ceil(v.filter((function(e){return!0===e.completed})).length/5));break;case"undone":Y(Math.ceil(v.filter((function(e){return!1===e.completed})).length/5))}};return f.a.interceptors.response.use((function(e){return e}),(function(e){return e.response&&(ae(e.response.data.message),oe(!0)),Promise.reject(e)})),Object(c.useEffect)((function(){Oe(y,G)}),[v,y]),Object(c.useEffect)((function(){0===v.length?V(!0):0!==v&&V(!1)}),[v]),Object(c.useEffect)((function(){}),[]),Object(c.useEffect)((function(){Oe(y,G)}),[G]),Object(c.useEffect)((function(){Oe(y,G),L(1)}),[y]),Object(c.useEffect)((function(){pe(y)}),[y,v]),Object(b.jsxs)("section",{className:"main-section",children:[Object(b.jsx)("h1",{children:"ToDo"}),Object(b.jsx)(m,{handlerInputText:function(e){"Enter"===e.key?""===e.target.value.trim()?alert("Write some task..."):(e.preventDefault(),de(e),a(""),e.target.value=""):a(e.target.value)},inputText:n}),H?null:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(O,{setStatus:I}),Object(b.jsx)(P,{handlerSortDateToUp:function(){ee("asc"),je()},handlerSortDateToDown:function(){ee("desc"),je()}})]}),Object(b.jsx)(N,{handlerEscapeEdition:function(e,t){if("Escape"===e.key){var c=Object(l.a)(v);e.preventDefault(),j(n);var a=c.find((function(e){return e.id===t})),r=v.find((function(e){return e.id===t}));a.text=r.text,a.isEditing=!1}},handlerCheckIsEditing:function(e,t){var n=Object(l.a)(v);n.find((function(e){return e.id===t})).isEditing=!0,g(Object(l.a)(n)),z(!0)},handlerCheckingCheckBox:function(e,t){var n=Object(l.a)(v);n.find((function(e){return e.id===t})).completed=e.target.checked,g(Object(l.a)(n))},handlerDeleteItem:function(e,t){var n=v.find((function(e){return e.id===t}));function c(){return a.apply(this,arguments)}function a(){return(a=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete(ue+"/task/"+n.uuid);case 2:e.sent,console.log(c.uuid),je();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c()},filteredTodos:E,inputVisible:U,handlerEditText:function(e,t){"Enter"===e.key?""===e.target.value.trim()?alert("Write some task..."):(e.preventDefault(),j(""),be(e,t),e.target.value=""):j(e.target.value)},handleChangeItemText:be}),H?null:Object(b.jsx)(B,{handlerPageCounter:pe,handlerPageChange:function(e,t){L(t)},amountOfPages:X}),H?null:Object(b.jsx)("div",{className:"delete-main-section",children:Object(b.jsx)(h,{handlerDeleteAllServerItems:function(){for(var e=function(e){var t=v.find((function(t){return t.id===e}));function n(){return(n=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete(ue+"/task/"+t.uuid);case 2:e.sent,je();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},t=0;t<v.length;t++)e(t)},handlerDeleteAllItems:function(){g([])},handlerDeleteSelectedItems:function(e){e.preventDefault();var t=Object(l.a)(v);t=t.filter((function(e){return!1===e.completed})),g(Object(l.a)(t))}})}),se?Object(b.jsx)(M.a,{open:se,onClose:function(){return oe(!1)},autoHideDuration:5e3,children:Object(b.jsx)(K.a,{onClose:function(){return oe(!1)},severity:"error",children:ce})}):null]})}function z(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(U,{})})}i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root"))},90:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.3cdb8499.chunk.js.map