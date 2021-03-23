(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),r=n.n(i),l=(n(71),n(14)),o=n(17),s=(n(72),n(4));function u(e){return Object(s.jsxs)("div",{className:"delete-section",children:[Object(s.jsx)("button",{className:"button selected-button",onClick:function(t){return e.handlerDeleteSelectedItems(t)},children:"Delete select"}),Object(s.jsx)("button",{className:"button all-button",onClick:function(){return e.handlerDeleteAllItems()},value:"del-all",children:"Delete all"})]})}n(74);function d(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"selection-bar",children:[Object(s.jsx)("button",{className:"button all-button",onClick:function(){return e.setStatus("all")},value:"all",children:"All"}),Object(s.jsx)("button",{className:"button done-button",onClick:function(){return e.setStatus("done")},value:"done",children:"Done"}),Object(s.jsx)("button",{className:"button undone-button",onClick:function(){return e.setStatus("undone")},value:"undone",children:"Undone"})]})})}var j=n(126);n(75);function b(e){return Object(s.jsx)("div",{className:"input",children:Object(s.jsx)(j.a,{onChange:e.handlerInputText,onKeyPress:e.handlerInputText,type:"text",autoComplete:"off",className:"main-input",id:"outlined-basic",label:"I want to...",variant:"outlined"})})}var f=n(121),O=n(122),h=n(123),x=n(129),m=n(128),v=n(124),g=n(57),p=n.n(g),k=n(56),C=n.n(k);n(79);function D(e){return Object(s.jsx)("div",{className:"list",children:Object(s.jsx)(f.a,{width:"100%",children:e.filteredTodos.map((function(t){return Object(s.jsxs)(O.a,{children:[Object(s.jsx)(h.a,{children:Object(s.jsx)(m.a,{checked:t.completed,onClick:function(n){return e.handlerCheckingCheckBox(n,t.id)},color:"primary"})}),Object(s.jsx)(x.a,{primary:t.text}),t.isEditing?Object(s.jsx)(j.a,{className:"edit-input",onKeyDown:function(n){return e.handlerEscapeEdition(n,t.id)},onChange:function(t){return e.handlerEditText(t)},onKeyPress:function(n){e.handlerEditText(n,t.id)}}):null,Object(s.jsx)("p",{className:"date",children:t.date.toLocaleString()}),Object(s.jsx)(v.a,{onClick:function(n){return e.handlerCheckIsEditing(n,t.id)},edge:"end","aria-label":"comments",children:Object(s.jsx)(C.a,{onClick:function(n){return e.handlerCheckIsEditing(n,t.id)}})}),Object(s.jsx)(v.a,{onClick:function(n){return e.handlerDeleteItem(n,t.id)},edge:"end","aria-label":"comments",children:Object(s.jsx)(p.a,{})})]},t.id)}))})})}var E=n(125),S=n(45);n(81);function N(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"sort",children:[Object(s.jsx)("h3",{children:"Sort by D\u0430te"}),Object(s.jsxs)("div",{className:"arrows",children:[Object(s.jsx)(E.a,{onClick:function(){return e.handlerSortDateToUp()},variant:"contained",children:Object(s.jsx)(S.b,{className:"up-arrow",size:"1rem"})}),Object(s.jsx)(E.a,{onClick:function(){return e.handlerSortDateToDown()},variant:"contained",children:Object(s.jsx)(S.a,{className:"down-arrow",size:"1rem"})})]})]})})}n(82);var w=n(127);function I(e){var t=e.handlerPageChange,n=(e.handlerPageCount,e.amountOfPages);return Object(s.jsx)(w.a,{onChange:t,count:n})}n(83);function T(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),j=r[0],f=r[1],O=Object(c.useState)([]),h=Object(o.a)(O,2),x=h[0],m=h[1],v=Object(c.useState)(0),g=Object(o.a)(v,2),p=g[0],k=g[1],C=Object(c.useState)(Object(l.a)(x)),E=Object(o.a)(C,2),S=E[0],w=E[1],T=Object(c.useState)("all"),y=Object(o.a)(T,2),P=y[0],A=y[1],M=Object(c.useState)(!1),B=Object(o.a)(M,2),K=B[0],U=B[1],z=Object(c.useState)(!0),J=Object(o.a)(z,2),W=J[0],L=J[1],V=Object(c.useState)(1),q=Object(o.a)(V,2),F=q[0],G=q[1],H=Object(c.useState)(1),Q=Object(o.a)(H,2),R=Q[0],X=Q[1],Y=function(e){e.preventDefault(),m([].concat(Object(l.a)(x),[{text:n,completed:!1,id:p,date:new Date,isEditing:!1}])),k(p+1),A("all")},Z=function(e,t){e.preventDefault();var n=Object(l.a)(x),c=n.find((function(e){return e.id===t}));c.text=j,c.isEditing=!1,m(Object(l.a)(n))},$=function e(t,n){var c=n-1;switch(t){case"all":w(Object(l.a)(x.slice(5*c,5*c+5))),A("all");break;case"done":w(Object(l.a)(x.filter((function(e){return!0===e.completed})).slice(5*c,5*c+5))),A("done"),e();break;case"undone":w(Object(l.a)(x.filter((function(e){return!1===e.completed})).slice(5*c,5*c+5))),A("undone"),e()}},_=function(e){switch(e){case"all":X(Math.ceil(x.length/5)),console.log(R);break;case"done":X(Math.ceil(x.filter((function(e){return!0===e.completed})).length/5));break;case"undone":X(Math.ceil(x.filter((function(e){return!1===e.completed})).length/5))}};return Object(c.useEffect)((function(){$(P,F)}),[x,P]),Object(c.useEffect)((function(){0===x.length?(L(!0),console.log(W)):0!==x&&(L(!1),console.log(W))}),[x]),Object(c.useEffect)((function(){$(P,F)}),[F]),Object(c.useEffect)((function(){$(P,F),G(1)}),[P]),Object(c.useEffect)((function(){_(P)}),[P,x]),Object(s.jsxs)("section",{className:"main-section",children:[Object(s.jsx)("h1",{children:"ToDo"}),Object(s.jsx)(b,{handlerInputText:function(e){"Enter"===e.key?""===e.target.value.trim()?alert("Write some task..."):(e.preventDefault(),Y(e),a(""),e.target.value=""):a(e.target.value)},inputText:n}),W?null:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(d,{setStatus:A}),Object(s.jsx)(N,{handlerSortDateToUp:function(){S.sort((function(e,t){return e.date-t.date}))},handlerSortDateToDown:function(){S.sort((function(e,t){var n=e.date;return t.date-n}))}})]}),Object(s.jsx)(D,{handlerEscapeEdition:function(e,t){if("Escape"===e.key){var c=Object(l.a)(x);e.preventDefault(),f(n);var a=c.find((function(e){return e.id===t})),i=x.find((function(e){return e.id===t}));a.text=i.text,a.isEditing=!1}},handlerCheckIsEditing:function(e,t){var n=Object(l.a)(x),c=n.find((function(e){return e.id===t}));console.log(K),c.isEditing=!0,console.log(c.isEditing),m(Object(l.a)(n)),U(!0),console.log(K)},handlerCheckingCheckBox:function(e,t){var n=Object(l.a)(x);n.find((function(e){return e.id===t})).completed=e.target.checked,m(Object(l.a)(n))},handlerDeleteItem:function(e,t){e.preventDefault();var n=Object(l.a)(x);n=n.filter((function(e){return e.id!==t})),m(Object(l.a)(n))},filteredTodos:S,inputVisible:K,handlerEditText:function(e,t){"Enter"===e.key?""===e.target.value.trim()?alert("Write some task..."):(e.preventDefault(),f(""),Z(e,t),e.target.value=""):f(e.target.value)},handleChangeItemText:Z}),W?null:Object(s.jsx)(I,{handlerPageCounter:_,handlerPageChange:function(e,t){G(t)},amountOfPages:R}),W?null:Object(s.jsx)("div",{className:"delete-main-section",children:Object(s.jsx)(u,{handlerDeleteAllItems:function(){m([])},handlerDeleteSelectedItems:function(e){e.preventDefault();var t=Object(l.a)(x);t=t.filter((function(e){return!1===e.completed})),m(Object(l.a)(t))}})})]})}function y(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(T,{})})}r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.524611ea.chunk.js.map