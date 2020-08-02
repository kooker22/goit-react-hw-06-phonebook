(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={button:"ContactListItem_button__3aJbw",item:"ContactListItem_item__3RucJ"}},26:function(e,t,n){e.exports={input:"Filter_input__3FVYi"}},29:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=n(23),u=n(10),i=n(11),m=n(13),s=n(12),b=(n(34),n(8)),p=n(14),f=n(6),h=n(3),v=n(25),d=n.n(v),O=Object(h.b)("phonebook/add",(function(e){return{payload:{id:d()(),name:e.name,number:e.number}}})),E=Object(h.b)("phonebook/delete"),g=Object(h.b)("phonebook/changeFilter",(function(e){return{payload:e}})),j=n(7),y=n.n(j),_=(n(42),function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.handleSubmit=function(t){var n=e.props.contacts.some((function(t){return t.name===e.state.name}));if(t.preventDefault(),e.state.name&&""!==e.state.number){if(!n)return e.props.onSubmit(e.state),void e.resetForm();Object(p.b)("This contact already exist")}else Object(p.b)("enter name and number")},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:y.a.form},r.a.createElement("div",{className:y.a.inputWrapper},r.a.createElement("label",{className:y.a.label},"Name",r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange,className:y.a.input})),r.a.createElement("label",null,"Number",r.a.createElement("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,className:y.a.input}))),r.a.createElement("button",{type:"submit",className:y.a.buttonForm},"add contact")),r.a.createElement(p.a,null))}}]),n}(a.Component)),k=Object(f.b)((function(e){return{contacts:e.phonebook.contacts}}),(function(e){return{onSubmit:function(t){return e(O(t))}}}))(_),C=n(19),w=n.n(C);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var N,R=r.a.createElement("g",{id:"trash"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M29.98,6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1V3.001 c0-1.657-1.344-3-3-3H11c-1.657,0-3,1.343-3,3v0.001v1H5c-1.595,0-2.885,1.246-2.981,2.816H2v1.183v1c0,1.104,0.896,2,2,2l0,0v17 c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4v-17l0,0c1.104,0,2-0.896,2-2v-1V6.819H29.98z M10,3.002c0-0.553,0.447-1,1-1h10 c0.553,0,1,0.447,1,1v1H10V3.002z M26,28.002c0,1.102-0.898,2-2,2H8c-1.103,0-2-0.898-2-2v-17h20V28.002z M28,8.001v1H4v-1V7.002 c0-0.553,0.447-1,1-1h22c0.553,0,1,0.447,1,1V8.001z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M9,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1H9 c-0.553,0-1,0.447-1,1v13C8,27.559,8.447,28.006,9,28.006z M9,14.005h2v13H9V14.005z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M15,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2 c-0.553,0-1,0.447-1,1v13C14,27.559,14.447,28.006,15,28.006z M15,14.005h2v13h-2V14.005z"}),r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"#333333",d:"M21,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2 c-0.553,0-1,0.447-1,1v13C20,27.559,20.447,28.006,21,28.006z M21,14.005h2v13h-2V14.005z"})),z=function(e){var t=e.svgRef,n=e.title,a=x(e,["svgRef","title"]);return r.a.createElement("svg",F({id:"Layer_1",x:"0px",y:"0px",width:"13px",height:"13px",viewBox:"0 0 32 32",ref:t},a),n?r.a.createElement("title",null,n):null,R)},M=r.a.forwardRef((function(e,t){return r.a.createElement(z,F({svgRef:t},e))})),S=(n.p,function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}),V=Object(f.b)((function(e){var t=e.phonebook,n=t.contacts,a=t.filter;return{contacts:S(n,a)}}),(function(e){return{onDelete:function(t){return e(E(t))}}}))((function(e){var t=e.contacts,n=e.onDelete;return r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{className:w.a.item,key:t},a,": ",c,r.a.createElement("button",{type:"button",className:w.a.button,id:t,onClick:function(){return n(t)}},r.a.createElement(M,null)))})))})),H=function(){return r.a.createElement("ul",null,r.a.createElement(V,null))},L=n(26),I=n.n(L),J=Object(f.b)((function(e){return{value:e.phonebook.filter,contacts:e.phonebook.contacts}}),(function(e){return{onChange:function(t){return e(g(t.target.value))}}}))((function(e){var t=e.value,n=e.contacts,a=e.onChange;return n.length>2&&r.a.createElement("label",null,"Contact Filter",r.a.createElement("input",{className:I.a.input,type:"text",value:t,onChange:a}))})),P=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"contents"},"Phonebook"),r.a.createElement("div",{className:"wrapper"},r.a.createElement(k,null),r.a.createElement(J,null)),r.a.createElement(H,null)))}}]),n}(a.Component),D=n(5),W=n(27),A=n.n(W),B=n(28),T=n(1),q=Object(h.c)([],(N={},Object(b.a)(N,O.type,(function(e,t){var n=t.payload;return[].concat(Object(B.a)(e),[n])})),Object(b.a)(N,E.type,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),N)),Q=Object(h.c)("",Object(b.a)({},g.type,(function(e,t){return t.payload}))),X=Object(T.c)({contacts:q,filter:Q}),Y={key:"phonebook",storage:A.a,blacklist:["filter"]},G=Object(h.a)({reducer:{phonebook:Object(D.g)(Y,X)},devTools:!1,middleware:Object(h.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})}),K={store:G,persistor:Object(D.h)(G)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:K.store},r.a.createElement(l.a,{loading:null,persistor:K.persistor},r.a.createElement(P,null)))),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"Form_form__2Coqb",label:"Form_label__6sXks",inputWrapper:"Form_inputWrapper__2wo0v",buttonForm:"Form_buttonForm__o3LNt",input:"Form_input__3a4Q-"}}},[[29,1,2]]]);
//# sourceMappingURL=main.97ea4884.chunk.js.map