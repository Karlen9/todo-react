(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{103:function(e,t,n){},123:function(e,t,n){},125:function(e,t,n){},129:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(11),c=n.n(r),s=(n(103),n(20)),i=n.n(s),o=n(65),u=n(33),l=n(13),d=n(21),j=n.n(d),b=(n(123),n(3));function p(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"selection-bar",children:[Object(b.jsx)("button",{className:"button all-button",onClick:function(){return e.setStatus(null)},value:"all",children:"All"}),Object(b.jsx)("button",{className:"button done-button",onClick:function(){return e.setStatus(!0)},value:"done",children:"Done"}),Object(b.jsx)("button",{className:"button undone-button",onClick:function(){return e.setStatus(!1)},value:"undone",children:"Undone"})]})})}var f=n(189);n(125);function h(e){return Object(b.jsx)("div",{className:"input",children:Object(b.jsx)(f.a,{onChange:e.handlerInputText,onKeyPress:e.handlerInputText,type:"text",autoComplete:"off",className:"main-input",id:"outlined-basic",label:"I want to...",variant:"outlined"})})}var m=n(178),O=n(179),x=n(180),g=n(182),v=n(192),k=n(181),S=n(86),y=n.n(S);n(129);function w(e){return Object(b.jsx)("div",{className:"list",children:Object(b.jsx)(m.a,{width:"100%",children:e.todos.map((function(t){return Object(b.jsxs)(O.a,{children:[Object(b.jsx)(x.a,{children:Object(b.jsx)(v.a,{checked:t.done,onClick:function(n){return e.handlerCheckingCheckBox(n,t.id)},color:"primary"})}),Object(b.jsx)(g.a,{primary:t.name,onDoubleClick:function(){e.setIsEdit(t.id)}}),e.isEdit===t.id?Object(b.jsx)(f.a,{className:"edit-input",onKeyDown:function(n){return e.handlerEscapeEdition(n,t.id)},onChange:function(t){return e.handlerEditText(t)},onKeyPress:function(n){e.handlerEditText(n,t.id)}}):null,Object(b.jsx)("p",{className:"date",children:t.createdAt.split("T")[0]}),Object(b.jsx)(k.a,{onClick:function(n){return e.handlerDeleteItem(t.id)},edge:"end","aria-label":"comments",children:Object(b.jsx)(y.a,{})})]},t.id)}))})})}var C=n(183),N=n(58);n(134);function E(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"sort",children:[Object(b.jsx)("h3",{children:"Sort by D\u0430te"}),Object(b.jsxs)("div",{className:"arrows",children:[Object(b.jsx)(C.a,{onClick:function(){return e.setSortBy("asc")},variant:"contained",children:Object(b.jsx)(N.b,{className:"up-arrow",size:"1rem"})}),Object(b.jsx)(C.a,{onClick:function(){return e.setSortBy("desc")},variant:"contained",children:Object(b.jsx)(N.a,{className:"down-arrow",size:"1rem"})})]})]})})}n(135);var T=n(190);function I(e){var t=e.handlerPageChange,n=e.amountOfPages;return Object(b.jsx)(T.a,{onChange:t,count:n})}var D=n(194),P=n(191),W=n(10);n(136);function A(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),d=Object(l.a)(s,2),f=d[0],m=d[1],O=Object(a.useState)([]),x=Object(l.a)(O,2),g=x[0],v=x[1],k=Object(a.useState)(null),S=Object(l.a)(k,2),y=S[0],C=S[1],N=Object(a.useState)(1),T=Object(l.a)(N,2),A=T[0],B=T[1],U=Object(a.useState)(1),q=Object(l.a)(U,2),L=q[0],H=q[1],K=Object(a.useState)("asc"),R=Object(l.a)(K,2),z=R[0],F=R[1],J=Object(a.useState)(""),V=Object(l.a)(J,2),G=V[0],M=V[1],Q=Object(a.useState)(!1),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],$=Object(a.useState)(""),_=Object(l.a)($,2),ee=_[0],te=_[1],ne=Object(a.useState)(0),ae=Object(l.a)(ne,2),re=ae[0],ce=ae[1];function se(e,t,n){return ie.apply(this,arguments)}function ie(){return(ie=Object(u.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"/tasks/get",params:{order:t,filterBy:n,page:a},headers:{"auth-token":localStorage.getItem("token")}});case 2:r=e.sent,c=r.data,H(Math.ceil(c.count/5)),ce(c.count),v(Object(o.a)(c.rows));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"PATCH",url:"/task/patch",params:{id:t.id},data:{name:t.name,done:t.done},headers:{"auth-token":localStorage.getItem("token")}});case 2:se(z,y,A);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j.a.defaults.baseURL="https://backend-serv-app.herokuapp.com/";var le=function(e){function t(){return(t=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"POST",url:"/task/post",data:{name:r,done:!1},headers:{"auth-token":localStorage.getItem("token")}});case 2:se(z,y,A),console.log("posted");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},de=function(e,t){var n=g.find((function(e){return e.id===t}));n.name=f,oe(n),se(z,y,A)};j.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(M(e.response.data.errors||e.response.data.error),Z(!0)),Promise.reject(e)}));return Object(a.useEffect)((function(){se(z,y,A)}),[]),Object(a.useEffect)((function(){if(!localStorage.getItem("token"))return Object(b.jsx)(W.a,{to:"react-todo/#/login"});se(z,y,A)}),[A,y,L,z]),Object(a.useEffect)((function(){!function(){if("Token is invalid, please log in"===G||"Invalid Token"===G)W.a}()}),[G]),Object(b.jsxs)("section",{className:"main-section",children:[Object(b.jsx)("h1",{children:"ToDo List"}),Object(b.jsx)(h,{handlerInputText:function(e){if("Enter"===e.key)try{if(""===e.target.value.trim())throw e.target.value="",new Error("Write some task");e.preventDefault(),le(e),c(""),e.target.value=""}catch(t){M(t.message),Z(!0)}else c(e.target.value)},inputText:r}),re>=1?Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(p,{setStatus:C}),Object(b.jsx)(E,{setSortBy:F})]}):null,Object(b.jsx)(w,{setIsEdit:te,isEdit:ee,todos:g,handlerEscapeEdition:function(e,t){if("Escape"===e.key){var n=Object(o.a)(g);e.preventDefault(),m(r);var a=n.find((function(e){return e.id===t})),c=g.find((function(e){return e.id===t}));a.text=c.text,e.target.value="",e.target.blur(),te("")}},handlerCheckingCheckBox:function(e,t){var n=g.find((function(e){return e.id===t}));n.done=e.target.checked,oe(n),se(z,y,A)},handlerDeleteItem:function(e){var t=g.find((function(t){return t.id===e}));function n(){return(n=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"DELETE",url:"/task/delete",params:{id:t.id},headers:{"auth-token":localStorage.getItem("token")}});case 2:se(z,y,A);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},handlerEditText:function(e,t){if("Enter"===e.key)try{if(""===e.target.value.trim())throw e.target.value="",new Error("Write some task");e.preventDefault(),m(""),de(e,t),e.target.value="",e.target.focus(),te(""),se(z,y,A)}catch(n){M(n.message),Z(!0)}else m(e.target.value)},handleChangeItemText:de}),re>5?Object(b.jsx)(I,{handlerPageChange:function(e,t){B(t)},amountOfPages:L}):null,Object(b.jsx)("button",{onClick:function(e){!function(e){e.preventDefault=!1,localStorage.removeItem("token"),W.a}(e)},className:"button sign-out-btn",children:"Sign out"}),Y?Object(b.jsx)(D.a,{open:Y,onClose:function(){return Z(!1)},autoHideDuration:2e3,children:Object(b.jsx)(P.a,{onClose:function(){return Z(!1)},severity:"error",children:G})}):null]})}var B=n(186),U=n(188),q=n(187),L=n(184),H=n(185),K=(n(139),Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})));function R(e){var t=K(),n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),p=d[0],h=d[1],m=Object(a.useState)(""),O=Object(l.a)(m,2),x=O[0],g=O[1],v=Object(a.useState)(""),k=Object(l.a)(v,2),S=k[0],y=k[1],w=Object(a.useState)(!1),N=Object(l.a)(w,2),E=N[0],T=N[1];j.a.defaults.baseURL="https://backend-serv-app.herokuapp.com/";var I=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j()({method:"POST",url:"/user/register",data:{name:c,email:p,password:x}});case 3:return e.abrupt("return",Object(b.jsx)(W.a,{to:"react-todo/#/login"}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(y(e.response.data.errors||e.response.data.error),T(!0)),Promise.reject(e)})),Object(b.jsxs)("div",{className:"sign-up-wrapper",children:[Object(b.jsx)("h1",{className:"sign-in-title",children:"Sign Up"}),Object(b.jsxs)(H.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(B.a,{}),Object(b.jsxs)("div",{className:t.paper,children:[Object(b.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(e){return I(e)},children:[Object(b.jsxs)(q.a,{container:!0,spacing:2,children:[Object(b.jsx)(q.a,{item:!0,xs:12,children:Object(b.jsx)(f.a,{autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"Name",autoFocus:!0,onChange:function(e){s(e.target.value)}})}),Object(b.jsx)(q.a,{item:!0,xs:12,children:Object(b.jsx)(f.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",onChange:function(e){h(e.target.value)}})}),Object(b.jsx)(q.a,{item:!0,xs:12,children:Object(b.jsx)(f.a,{required:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){g(e.target.value)}})})]}),Object(b.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(b.jsx)(q.a,{container:!0,justify:"flex-end",children:Object(b.jsx)(q.a,{item:!0,children:Object(b.jsx)(U.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]}),E?Object(b.jsx)(D.a,{open:E,onClose:function(){return T(!1)},autoHideDuration:2e3,children:Object(b.jsx)(P.a,{onClose:function(){return T(!1)},severity:"error",children:S})}):null]})]})]})}n(140);var z=Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function F(e){var t=z();j.a.defaults.baseURL="https://backend-serv-app.herokuapp.com/";var n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),d=Object(l.a)(o,2),p=d[0],h=d[1],m=Object(a.useState)(""),O=Object(l.a)(m,2),x=O[0],g=O[1],v=Object(a.useState)(!1),k=Object(l.a)(v,2),S=k[0],y=k[1],w=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j()({method:"POST",url:"/user/login",data:{email:c,password:p}});case 3:return n=e.sent,localStorage.setItem("token",n.data.accessToken),e.abrupt("return",Object(b.jsx)(W.a,{to:"react-todo/#/todos"}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(g(e.response.data.errors||e.response.data.error),y(!0)),Promise.reject(e)})),Object(b.jsxs)("div",{className:"sign-in-wrapper",children:[Object(b.jsx)("h1",{className:"sign-in-title",children:"Sign In"}),Object(b.jsxs)(H.a,{component:"main",maxWidth:"xs",children:[Object(b.jsx)(B.a,{}),Object(b.jsxs)("div",{className:t.paper,children:[Object(b.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(e){return w(e)},children:[Object(b.jsx)(f.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){s(e.target.value)}}),Object(b.jsx)(f.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",onChange:function(e){h(e.target.value)}}),Object(b.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(b.jsx)(q.a,{container:!0,children:Object(b.jsx)(q.a,{item:!0,children:Object(b.jsx)(U.a,{href:"/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]}),S?Object(b.jsx)(D.a,{open:S,onClose:function(){return y(!1)},autoHideDuration:2e3,children:Object(b.jsx)(P.a,{onClose:function(){return y(!1)},severity:"error",children:x})}):null]})]})]})}var J=n(50);function V(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(J.a,{basename:"/login",children:Object(b.jsx)(J.a,{children:Object(b.jsxs)(W.d,{children:[Object(b.jsx)(W.b,{path:"/todos",children:Object(b.jsx)(A,{})}),Object(b.jsx)(W.b,{path:"/login",children:Object(b.jsx)(F,{})}),Object(b.jsx)(W.b,{path:"/register",children:Object(b.jsx)(R,{})})]})})})})}c.a.render(Object(b.jsx)(J.a,{children:Object(b.jsx)(V,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.5e863762.chunk.js.map