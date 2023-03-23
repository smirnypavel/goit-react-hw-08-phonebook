"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{6961:function(c,a,s){s.r(a),s.d(a,{Phonebook:function(){return C},default:function(){return L}});var e=s(9439),n=s(9434),t=function(c){return c.contacts},o=function(c){return c.filter},i=s(2791),l=s(1686),r=s.n(l),h=s(4403),_=s(9467),x=s(184),d=function(){var c=(0,n.I0)(),a=(0,n.v9)(t).items,s=(0,i.useState)(""),o=(0,e.Z)(s,2),l=o[0],d=o[1],m=(0,i.useState)(""),j=(0,e.Z)(m,2),v=j[0],N=j[1],b=function(c){var a=c.target,s=a.name,e=a.value;"name"===s?d(e):N(e)};return(0,x.jsxs)("form",{onSubmit:function(s){if(s.preventDefault(),a.length>0&&a.find((function(c){return c.name.toLowerCase()===l.toLowerCase()||c.number===v})))return r().Notify.failure("".concat(l," ").concat(v," is already in contacts")),d(""),void N("");c((0,_.uK)({name:l,number:v})),d(""),N("")},className:h.Z.form,children:[(0,x.jsx)("label",{className:h.Z.label,children:(0,x.jsx)("input",{value:l,onChange:b,type:"text",name:"name",required:!0,className:h.Z.input,placeholder:"Enter name"})}),(0,x.jsx)("label",{className:h.Z.label,children:(0,x.jsx)("input",{value:v,onChange:b,type:"tel",name:"phone",required:!0,className:h.Z.input,placeholder:"Enter phone number"})}),(0,x.jsx)("button",{type:"submit",className:h.Z.button,children:"Add Contact"})]})},m=s(6895),j="ContactFilter_input__8mWOi",v=function(){var c=(0,n.v9)(o),a=(0,n.I0)();return(0,x.jsx)("input",{type:"text",name:"filter",value:c,onChange:function(c){var s,e=c.target;return s=e.value,void a((0,m.T)(s))},placeholder:"..to find",className:j})},N=s(861),b="ContactList_ul__ppW9Q",k="ContactList_li__dzNT+",u="ContactList_button__7kL4l",g={socket:"loader_socket__TAmZQ",hex_brick:"loader_hex_brick__VnqPK",fade00:"loader_fade00__zVGk4",h2:"loader_h2__wpPw6",h3:"loader_h3__fd08c",gel:"loader_gel__UUnkV",center_gel:"loader_center_gel__2RXfu",pulse00:"loader_pulse00__kV8hF",c1:"loader_c1__Ib+9i",c2:"loader_c2__maUd3",c3:"loader_c3__B72bO",c4:"loader_c4__t0chB",c5:"loader_c5__3CCmL",c6:"loader_c6__wHQV-",c7:"loader_c7__-OX3u",c8:"loader_c8__Xd3Pr",c9:"loader_c9__AWeRp",c10:"loader_c10__1P+LH",c11:"loader_c11__TVxt8",c12:"loader_c12__E9pqr",c13:"loader_c13__WFK2J",c14:"loader_c14__Z2Fdi",c15:"loader_c15__VN4+o",c16:"loader_c16__2NTXA",c17:"loader_c17__T4nqX",c18:"loader_c18__t3q6+",c19:"loader_c19__DOfD4",c20:"loader_c20__ihaWc",c21:"loader_c21__jcsYt",c22:"loader_c22__jLhMh",c23:"loader_c23__0s7W5",c24:"loader_c24__7RFzw",c25:"loader_c25__7JmR-",c26:"loader_c26__-U7N2",c27:"loader_c27__BtQgY",c28:"loader_c28__ZUOE3",c29:"loader_c29__4eA92",c30:"loader_c30__EQmlN",c31:"loader_c31__VMeFN",c32:"loader_c32__JGrnu",c33:"loader_c33__LJVWn",c34:"loader_c34__tPHT7",c35:"loader_c35__Dz2c2",c36:"loader_c36__lzuaq",c37:"loader_c37__Z6u4L",r1:"loader_r1__R6mIM",r2:"loader_r2__7KJ8A",r3:"loader_r3__mLj7R"},f=function(){return(0,x.jsxs)("div",{className:g.socket,children:[(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.center_gel),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c1," ").concat(g.r1),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c2," ").concat(g.r1),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c3," ").concat(g.r1),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c4," ").concat(g.r1),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c5," ").concat(g.r1),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c7," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c8," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c9," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c11," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c12," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c13," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c14," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c15," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c16," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c17," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c18," ").concat(g.r2),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c19," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c20," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c21," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c22," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c23," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c24," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c25," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c26," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c28," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c29," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c30," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c32," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c33," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c34," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c35," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]}),(0,x.jsxs)("div",{className:"".concat(g.gel," ").concat(g.c37," ").concat(g.r3),children:[(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h1)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h2)}),(0,x.jsx)("div",{className:"".concat(g.hex_brick," ").concat(g.h3)})]})]})},p=function(){var c=(0,n.v9)(t),a=c.loading,s=c.items,e=(0,n.v9)(o),i=(0,n.I0)(),l=s.filter((function(c){return c.name.toLowerCase().includes(e.toLowerCase())}));return(0,x.jsxs)("ul",{className:b,children:["loading"===a&&(0,x.jsx)(f,{}),s.length>0&&l.map((function(c){return(0,x.jsxs)("li",{className:k,children:[(0,x.jsxs)(x.Fragment,{children:[c.name,(0,x.jsx)("br",{}),c.number]}),(0,x.jsx)("button",{type:"button",onClick:function(){return a=c.id,void i((0,_.GK)(a));var a},className:u,children:(0,x.jsx)(N.EF5,{})})]},c.id)}))]})};function C(){var c=(0,n.I0)();return(0,i.useEffect)((function(){c((0,_.yF)())}),[c]),(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("h1",{children:"Phonebook"}),(0,x.jsx)(d,{}),(0,x.jsx)("h2",{children:"Contacts"}),(0,x.jsx)(v,{}),(0,x.jsx)(p,{})]})}var L=C},4403:function(c,a){a.Z={form:"ContactForm_form__dhl+T",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9"}}}]);
//# sourceMappingURL=961.8f7300a5.chunk.js.map