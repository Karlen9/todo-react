(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{110:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),i=n.n(r),s=(n(90),n(20)),o=n.n(s),u=n(39),l=n(26),d=n(18),j=n(32),f=n.n(j),b=(n(110),n(4));function h(e){return Object(b.jsxs)("div",{className:"delete-section",children:[Object(b.jsx)("button",{className:"button selected-button",onClick:function(t){return e.handlerDeleteSelectedItems(t)},children:"Delete select"}),Object(b.jsx)("button",{className:"button all-server-button",onClick:function(){return e.handlerDeleteAllServerItems()},value:"del-all",children:"Delete all server items"}),Object(b.jsx)("button",{className:"button all-button",onClick:function(){return e.handlerDeleteAllItems()},value:"del-all",children:"Delete all"})]})}n(112);function O(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"selection-bar",children:[Object(b.jsx)("button",{className:"button all-button",onClick:function(){return e.setStatus("all")},value:"all",children:"All"}),Object(b.jsx)("button",{className:"button done-button",onClick:function(){return e.setStatus("done")},value:"done",children:"Done"}),Object(b.jsx)("button",{className:"button undone-button",onClick:function(){return e.setStatus("undone")},value:"undone",children:"Undone"})]})})}var p=n(167);n(113);function x(e){return Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(p.a,{onChange:e.handlerInputText,onKeyPress:e.handlerInputText,type:"text",autoComplete:"off",className:"main-input",id:"outlined-basic",label:"I want to...",variant:"outlined"})})}var m=n(162),v=n(163),k=n(164),g=n(173),C=n(170),D=n(165),S=n(77),w=n.n(S),E=n(76),y=n.n(E);n(117);function N(e){return Object(b.jsx)("div",{className:"list",children:Object(b.jsx)(m.a,{width:"100%",children:e.filteredTodos.map((function(t){return Object(b.jsxs)(v.a,{children:[Object(b.jsx)(k.a,{children:Object(b.jsx)(C.a,{checked:t.completed,onClick:function(n){return e.handlerCheckingCheckBox(n,t.id)},color:"primary"})}),Object(b.jsx)(g.a,{primary:t.text}),t.isEditing?Object(b.jsx)(p.a,{className:"edit-input",onKeyDown:function(n){return e.handlerEscapeEdition(n,t.id)},onChange:function(t){return e.handlerEditText(t)},onKeyPress:function(n){e.handlerEditText(n,t.id)}}):null,Object(b.jsx)("p",{className:"date",children:t.date.split("T")[0]}),Object(b.jsx)(D.a,{onClick:function(n){return e.handlerCheckIsEditing(n,t.id)},edge:"end","aria-label":"comments",children:Object(b.jsx)(y.a,{onClick:function(n){return e.handlerCheckIsEditing(n,t.id)}})}),Object(b.jsx)(D.a,{onClick:function(n){return e.handlerDeleteItem(n,t.id)},edge:"end","aria-label":"comments",children:Object(b.jsx)(w.a,{})})]},t.id)}))})})}var I=n(166),T=n(50);n(119);function P(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"sort",children:[Object(b.jsx)("h3",{children:"Sort by D\u0430te"}),Object(b.jsxs)("div",{className:"arrows",children:[Object(b.jsx)(I.a,{onClick:function(){return e.handlerSortDateToUp()},variant:"contained",children:Object(b.jsx)(T.b,{className:"up-arrow",size:"1rem"})}),Object(b.jsx)(I.a,{onClick:function(){return e.handlerSortDateToDown()},variant:"contained",children:Object(b.jsx)(T.a,{className:"down-arrow",size:"1rem"})})]})]})})}n(120);var A=n(168);function B(e){var t=e.handlerPageChange,n=e.amountOfPages;return Object(b.jsx)(A.a,{onChange:t,count:n})}var M=n(172),K=(n(121),n(169));function U(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),s=i[0],j=i[1],p=Object(c.useState)([]),m=Object(d.a)(p,2),v=m[0],k=m[1],g=Object(c.useState)(Object(l.a)(v)),C=Object(d.a)(g,2),D=C[0],S=(C[1],Object(c.useState)("all")),w=Object(d.a)(S,2),E=w[0],y=w[1],I=Object(c.useState)(!1),T=Object(d.a)(I,2),A=T[0],U=T[1],z=Object(c.useState)(!0),J=Object(d.a)(z,2),W=J[0],H=J[1],V=Object(c.useState)(1),q=Object(d.a)(V,2),F=q[0],G=q[1],L=Object(c.useState)(1),Q=Object(d.a)(L,2),R=Q[0],X=Q[1],Y=Object(c.useState)("asc"),Z=Object(d.a)(Y,2),$=Z[0],_=Z[1],ee=Object(c.useState)(""),te=Object(d.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(!1),re=Object(d.a)(ae,2),ie=re[0],se=re[1],oe="https://backend-serv.herokuapp.com",ue="https://backend-serv.herokuapp.com/tasks",le=function(e){function t(){return(t=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("posted"),t={name:n,done:!1},e.next=4,f.a.post(oe+"/task",t);case 4:de();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()};function de(e,t,n){return je.apply(this,arguments)}function je(){return(je=Object(u.a)(o.a.mark((function e(t,n,c){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(ue,{params:{order:t,filterBy:n,page:c}});case 2:a=e.sent,r=a.data,k(r.rows);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var fe=function(e,t){var n=v.find((function(e){return e.id===t}));!function(e,t){be.apply(this,arguments)}(n,s),n.isEditing=!1,de()};function be(){return(be=Object(u.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.patch(oe+"/task/"+t.id,{name:n});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he=function(e,t){switch(e){case"all":de($,null,F);break;case"done":de($,!0,F);break;case"undone":de($,!1,F)}},Oe=function(e){switch(e){case"all":X(Math.ceil(v.length/5));break;case"done":X(Math.ceil(v.filter((function(e){return!0===e.completed})).length/5));break;case"undone":X(Math.ceil(v.filter((function(e){return!1===e.completed})).length/5))}};return f.a.interceptors.response.use((function(e){return e}),(function(e){return e.response&&(ce(e.message),console.log(e.message),se(!0)),Promise.reject(e)})),Object(c.useEffect)((function(){he(E)}),[v,E]),Object(c.useEffect)((function(){0===v.length?H(!0):0!==v&&H(!1),Oe(E)}),[v]),Object(c.useEffect)((function(){de()}),[]),Object(c.useEffect)((function(){he(E)}),[F]),Object(c.useEffect)((function(){he(E),G(1)}),[E]),Object(c.useEffect)((function(){})),Object(c.useEffect)((function(){Oe(E)}),[E,v]),Object(b.jsxs)("section",{className:"main-section",children:[Object(b.jsx)("h1",{children:"ToDo"}),Object(b.jsx)(x,{handlerInputText:function(e){"Enter"===e.key?""===e.target.value.trim()?alert("Write some task..."):(e.preventDefault(),le(e),a(""),e.target.value=""):a(e.target.value)},inputText:n}),W?null:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(O,{setStatus:y}),Object(b.jsx)(P,{handlerSortDateToUp:function(){_("asc"),de()},handlerSortDateToDown:function(){_("desc"),de()}})]}),Object(b.jsx)(N,{handlerEscapeEdition:function(e,t){if("Escape"===e.key){var c=Object(l.a)(v);e.preventDefault(),j(n);var a=c.find((function(e){return e.id===t})),r=v.find((function(e){return e.id===t}));a.text=r.text,a.isEditing=!1}},handlerCheckIsEditing:function(e,t){var n=Object(l.a)(v);n.find((function(e){return e.id===t})).isEditing=!0,k(Object(l.a)(n)),U(!0)},handlerCheckingCheckBox:function(e,t){var n=Object(l.a)(v);n.find((function(e){return e.id===t})).completed=e.target.checked,k(Object(l.a)(n))},handlerDeleteItem:function(e,t){var n=v.find((function(e){return e.id===t}));function c(){return(c=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete(oe+"/task/"+n.id);case 2:de();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()},filteredTodos:D,inputVisible:A,handlerEditText:function(e,t){"Enter"===e.key?""===e.target.value.trim()?alert("Write some task..."):(e.preventDefault(),j(""),fe(e,t),e.target.value=""):j(e.target.value)},handleChangeItemText:fe}),W?null:Object(b.jsx)(B,{handlerPageCounter:Oe,handlerPageChange:function(e,t){G(t)},amountOfPages:R}),W?null:Object(b.jsx)("div",{className:"delete-main-section",children:Object(b.jsx)(h,{handlerDeleteAllServerItems:function(){for(var e=function(e){var t=v.find((function(t){return t.id===e}));function n(){return(n=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete(oe+"/task/"+t.id);case 2:de();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},t=0;t<v.length;t++)e(t)},handlerDeleteAllItems:function(){k([])},handlerDeleteSelectedItems:function(e){e.preventDefault();var t=Object(l.a)(v);t=t.filter((function(e){return!1===e.completed})),k(Object(l.a)(t))}})}),ie?Object(b.jsx)(M.a,{open:ie,onClose:function(){return se(!1)},autoHideDuration:5e3,children:Object(b.jsx)(K.a,{onClose:function(){return se(!1)},severity:"error",children:ne})}):null]})}function z(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(U,{})})}i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root"))},90:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.b17fb921.chunk.js.map