(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{103:function(e,t,n){},123:function(e,t,n){},125:function(e,t,n){},129:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(10),c=n.n(r),s=(n(103),n(20)),i=n.n(s),o=n(65),u=n(32),l=n(13),d=n(33),j=n.n(d),b=n(11),p=n(194),f=n(191),h=(n(123),n(3));function m(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"selection-bar",children:[Object(h.jsx)("button",{className:"button all-button",onClick:function(){return e.setStatus(null)},value:"all",children:"All"}),Object(h.jsx)("button",{className:"button done-button",onClick:function(){return e.setStatus(!0)},value:"done",children:"Done"}),Object(h.jsx)("button",{className:"button undone-button",onClick:function(){return e.setStatus(!1)},value:"undone",children:"Undone"})]})})}var O=n(189);n(125);function x(e){return Object(h.jsx)("div",{className:"input",children:Object(h.jsx)(O.a,{onChange:e.handlerInputText,onKeyPress:e.handlerInputText,type:"text",autoComplete:"off",className:"main-input",id:"outlined-basic",label:"I want to...",variant:"outlined"})})}var g=n(178),v=n(179),S=n(180),y=n(182),w=n(192),C=n(181),k=n(86),N=n.n(k);n(129);function E(e){return Object(h.jsx)("div",{className:"list",children:Object(h.jsx)(g.a,{width:"100%",children:e.todos.map((function(t){return Object(h.jsxs)(v.a,{children:[Object(h.jsx)(S.a,{children:Object(h.jsx)(w.a,{checked:t.done,onClick:function(n){return e.handlerCheckingCheckBox(n,t.id)},color:"primary"})}),Object(h.jsx)(y.a,{primary:t.name,onDoubleClick:function(){e.setIsEdit(t.id)}}),e.isEdit===t.id?Object(h.jsx)(O.a,{className:"edit-input",onKeyDown:function(n){return e.handlerEscapeEdition(n,t.id)},onChange:function(t){return e.handlerEditText(t)},onKeyPress:function(n){e.handlerEditText(n,t.id)}}):null,Object(h.jsx)("p",{className:"date",children:t.createdAt.split("T")[0]}),Object(h.jsx)(C.a,{onClick:function(n){return e.handlerDeleteItem(t.id)},edge:"end","aria-label":"comments",children:Object(h.jsx)(N.a,{})})]},t.id)}))})})}var T=n(183),D=n(58);n(134);function I(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"sort",children:[Object(h.jsx)("h3",{children:"Sort by D\u0430te"}),Object(h.jsxs)("div",{className:"arrows",children:[Object(h.jsx)(T.a,{onClick:function(){return e.setSortBy("asc")},variant:"contained",children:Object(h.jsx)(D.b,{className:"up-arrow",size:"1rem"})}),Object(h.jsx)(T.a,{onClick:function(){return e.setSortBy("desc")},variant:"contained",children:Object(h.jsx)(D.a,{className:"down-arrow",size:"1rem"})})]})]})})}n(135);var P=n(190);function W(e){var t=e.handlerPageChange,n=e.amountOfPages;return Object(h.jsx)(P.a,{onChange:t,count:n})}n(136);function A(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),d=Object(l.a)(s,2),O=d[0],g=d[1],v=Object(a.useState)([]),S=Object(l.a)(v,2),y=S[0],w=S[1],C=Object(a.useState)(null),k=Object(l.a)(C,2),N=k[0],T=k[1],D=Object(a.useState)(1),P=Object(l.a)(D,2),A=P[0],B=P[1],U=Object(a.useState)(1),q=Object(l.a)(U,2),L=q[0],H=q[1],K=Object(a.useState)("asc"),R=Object(l.a)(K,2),z=R[0],F=R[1],J=Object(a.useState)(""),V=Object(l.a)(J,2),G=V[0],M=V[1],Q=Object(a.useState)(!1),X=Object(l.a)(Q,2),Y=X[0],Z=X[1],$=Object(a.useState)(""),_=Object(l.a)($,2),ee=_[0],te=_[1],ne=Object(a.useState)(0),ae=Object(l.a)(ne,2),re=ae[0],ce=ae[1],se=Object(b.f)(),ie=j.a.create({baseURL:"http://localhost:3001",headers:{"auth-token":localStorage.getItem("token")}});function oe(e,t,n){return ue.apply(this,arguments)}function ue(){return(ue=Object(u.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({method:"GET",url:"/get",params:{order:t,filterBy:n,page:a}});case 2:r=e.sent,c=r.data,H(Math.ceil(c.count/5)),ce(c.count),w(Object(o.a)(c.rows));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return de.apply(this,arguments)}function de(){return(de=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({method:"PATCH",url:"/patch",params:{id:t.id},data:{name:t.name,done:t.done}});case 2:oe(z,N,A);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var je=function(e){function t(){return(t=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({method:"POST",url:"/post",data:{name:r,done:!1}});case 2:oe(z,N,A);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},be=function(e,t){var n=y.find((function(e){return e.id===t}));n.name=O,le(n),oe(z,N,A)};j.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(M(e.response.data.errors||e.response.data.error),Z(!0)),Promise.reject(e)}));return Object(a.useEffect)((function(){oe(z,N,A)}),[]),Object(a.useEffect)((function(){localStorage.getItem("token")||se.push("/login"),oe(z,N,A)}),[A,N,L,z]),Object(a.useEffect)((function(){"Invalid Token"===G&&se.push("/login")}),[G]),Object(h.jsxs)("section",{className:"main-section",children:[Object(h.jsx)("h1",{children:"ToDo List"}),Object(h.jsx)(x,{handlerInputText:function(e){if("Enter"===e.key)try{if(""===e.target.value.trim())throw e.target.value="",new Error("Write some task");e.preventDefault(),je(e),c(""),e.target.value=""}catch(t){M(t.message),Z(!0)}else c(e.target.value)},inputText:r}),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(m,{setStatus:T}),Object(h.jsx)(I,{setSortBy:F})]}),Object(h.jsx)(E,{setIsEdit:te,isEdit:ee,todos:y,handlerEscapeEdition:function(e,t){if("Escape"===e.key){var n=Object(o.a)(y);e.preventDefault(),g(r);var a=n.find((function(e){return e.id===t})),c=y.find((function(e){return e.id===t}));a.text=c.text,e.target.value="",e.target.blur(),te("")}},handlerCheckingCheckBox:function(e,t){var n=y.find((function(e){return e.id===t}));n.done=e.target.checked,le(n),oe(z,N,A)},handlerDeleteItem:function(e){var t=y.find((function(t){return t.id===e}));function n(){return(n=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({method:"DELETE",url:"/delete",params:{id:t.id}});case 2:oe(z,N,A);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},handlerEditText:function(e,t){if("Enter"===e.key)try{if(""===e.target.value.trim())throw e.target.value="",new Error("Write some task");e.preventDefault(),g(""),be(e,t),e.target.value="",e.target.focus(),te(""),oe(z,N,A)}catch(n){M(n.message),Z(!0)}else g(e.target.value)},handleChangeItemText:be}),re>5?Object(h.jsx)(W,{handlerPageChange:function(e,t){B(t)},amountOfPages:L}):null,Object(h.jsx)("button",{onClick:function(e){!function(e){e.preventDefault=!1,localStorage.removeItem("token"),se.push("/login")}(e)},className:"button sign-out-btn",children:"Sign out"}),Y?Object(h.jsx)(p.a,{open:Y,onClose:function(){return Z(!1)},autoHideDuration:2e3,children:Object(h.jsx)(f.a,{onClose:function(){return Z(!1)},severity:"error",children:G})}):null]})}var B=n(186),U=n(188),q=n(187),L=n(184),H=n(185),K=(n(139),Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})));function R(e){var t=K(),n=Object(b.f)(),r=j.a.create({baseURL:"http://localhost:3001"}),c=Object(a.useState)(""),s=Object(l.a)(c,2),o=s[0],d=s[1],m=Object(a.useState)(""),x=Object(l.a)(m,2),g=x[0],v=x[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),w=y[0],C=y[1],k=Object(a.useState)(""),N=Object(l.a)(k,2),E=N[0],D=N[1],I=Object(a.useState)(!1),P=Object(l.a)(I,2),W=P[0],A=P[1],L=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r({method:"POST",url:"/register",data:{name:o,email:g,password:w}});case 3:n.push("/login");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(D(e.response.data.errors||e.response.data.error),A(!0)),Promise.reject(e)})),Object(h.jsxs)("div",{className:"sign-up-wrapper",children:[Object(h.jsx)("h1",{className:"sign-in-title",children:"Sign Up"}),Object(h.jsxs)(H.a,{component:"main",maxWidth:"xs",children:[Object(h.jsx)(B.a,{}),Object(h.jsxs)("div",{className:t.paper,children:[Object(h.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(e){return L(e)},children:[Object(h.jsxs)(q.a,{container:!0,spacing:2,children:[Object(h.jsx)(q.a,{item:!0,xs:12,children:Object(h.jsx)(O.a,{autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"Name",autoFocus:!0,onChange:function(e){d(e.target.value)}})}),Object(h.jsx)(q.a,{item:!0,xs:12,children:Object(h.jsx)(O.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"off",onChange:function(e){v(e.target.value)}})}),Object(h.jsx)(q.a,{item:!0,xs:12,children:Object(h.jsx)(O.a,{required:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){C(e.target.value)}})})]}),Object(h.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(h.jsx)(q.a,{container:!0,justify:"flex-end",children:Object(h.jsx)(q.a,{item:!0,children:Object(h.jsx)(U.a,{href:"/react-todos#/login",variant:"body2",children:"Already have an account? Sign in"})})})]}),W?Object(h.jsx)(p.a,{open:W,onClose:function(){return A(!1)},autoHideDuration:2e3,children:Object(h.jsx)(f.a,{onClose:function(){return A(!1)},severity:"error",children:E})}):null]})]})]})}n(140);var z=Object(L.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function F(e){var t=j.a.create({baseURL:"http://localhost:3001"}),n=z(),r=Object(b.f)(),c=Object(a.useState)(""),s=Object(l.a)(c,2),o=s[0],d=s[1],m=Object(a.useState)(""),x=Object(l.a)(m,2),g=x[0],v=x[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),w=y[0],C=y[1],k=Object(a.useState)(!1),N=Object(l.a)(k,2),E=N[0],D=N[1],I=function(){var e=Object(u.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t({method:"POST",url:"/login",data:{email:o,password:g}});case 3:a=e.sent,localStorage.setItem("token",a.data.accessToken),r.push("/todos");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j.a.interceptors.response.use((function(e){return e}),(function(e){return e&&(C(e.response.data.errors||e.response.data.error),D(!0)),Promise.reject(e)})),Object(h.jsxs)("div",{className:"sign-in-wrapper",children:[Object(h.jsx)("h1",{className:"sign-in-title",children:"Sign In"}),Object(h.jsxs)(H.a,{component:"main",maxWidth:"xs",children:[Object(h.jsx)(B.a,{}),Object(h.jsxs)("div",{className:n.paper,children:[Object(h.jsxs)("form",{className:n.form,noValidate:!0,onSubmit:function(e){return I(e)},children:[Object(h.jsx)(O.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){d(e.target.value)}}),Object(h.jsx)(O.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"off",onChange:function(e){v(e.target.value)}}),Object(h.jsx)(T.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,children:"Sign In"}),Object(h.jsx)(q.a,{container:!0,children:Object(h.jsx)(q.a,{item:!0,children:Object(h.jsx)(U.a,{href:"react-todos#/register",variant:"body2",children:"Don't have an account? Sign Up"})})})]}),E?Object(h.jsx)(p.a,{open:E,onClose:function(){return D(!1)},autoHideDuration:2e3,children:Object(h.jsx)(f.a,{onClose:function(){return D(!1)},severity:"error",children:w})}):null]})]})]})}var J=n(36);function V(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(J.a,{basename:"/login",children:Object(h.jsx)(J.b,{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/todos",component:A}),Object(h.jsx)(b.a,{path:"/login",component:F}),Object(h.jsx)(b.a,{path:"/register",component:R})]})})})})}c.a.render(Object(h.jsx)(J.b,{children:Object(h.jsx)(V,{})}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.f65bd79d.chunk.js.map