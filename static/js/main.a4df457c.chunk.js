(this["webpackJsonpreact-projects"]=this["webpackJsonpreact-projects"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),a=n(5),i=n.n(a),l=(n(11),n(12),n(2)),o=n(3),b=[{page:"products",links:[{label:"payment",icon:Object(c.jsx)(l.d,{}),url:"/products"},{label:"terminal",icon:Object(c.jsx)(l.d,{}),url:"/products"},{label:"connect",icon:Object(c.jsx)(l.d,{}),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:Object(c.jsx)(l.b,{}),url:"/products"},{label:"libraries",icon:Object(c.jsx)(l.b,{}),url:"/products"},{label:"help",icon:Object(c.jsx)(l.b,{}),url:"/products"},{label:"billing",icon:Object(c.jsx)(l.b,{}),url:"/products"}]},{page:"company",links:[{label:"about",icon:Object(c.jsx)(l.c,{}),url:"/products"},{label:"customers",icon:Object(c.jsx)(l.c,{}),url:"/products"}]}],j=r.a.createContext(),u=function(e){var t=e.children,n=Object(s.useState)(!1),r=Object(o.a)(n,2),a=r[0],i=r[1],l=Object(s.useState)(!1),u=Object(o.a)(l,2),d=u[0],O=u[1],p=Object(s.useState)({}),x=Object(o.a)(p,2),h=x[0],m=x[1],v=Object(s.useState)({page:"",links:[]}),f=Object(o.a)(v,2),g=f[0],N=f[1];return Object(c.jsx)(j.Provider,{value:{isSidebarOpen:a,setIsSidebarOpen:i,isSubmenuOpen:d,setIsSubmenuOpen:O,OpenFunction:function(e,t){var n=b.find((function(t){return t.page===e}));N(n),m(t),O(!0)},location:h,pages:g},children:t})},d=function(){return Object(s.useContext)(j)};var O=function(){var e=d(),t=e.setIsSidebarOpen,n=e.OpenFunction,s=function(e){var t=e.target.textContent,c=e.target.getBoundingClientRect(),s=(c.left+c.right)/2,r=c.bottom+10;console.log(c),n(t,{center:s,bottom:r})};return Object(c.jsxs)("nav",{children:[Object(c.jsx)("div",{className:"logo-container",children:Object(c.jsx)("img",{src:"https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg",alt:"strip logo"})}),Object(c.jsx)("div",{className:"links-container",children:Object(c.jsxs)("ul",{className:"nav-links",children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn",onMouseOver:s,children:"products"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn",onMouseOver:s,children:"developers"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn",onMouseOver:s,children:"company"})})]})}),Object(c.jsx)("button",{className:"btn sign-btn",children:"Sign In"}),Object(c.jsx)("button",{className:"btn sidebar-btn",onClick:function(){return t(!0)},children:Object(c.jsx)(l.a,{})})]})};var p=function(){var e=d(),t=e.isSidebarOpen,n=e.setIsSidebarOpen;return Object(c.jsx)("div",{className:"".concat(t?"sidebar-container sidebar-active":"sidebar-container"),children:Object(c.jsxs)("div",{className:"sidebar-content",children:[Object(c.jsx)("button",{className:"btn sidebar-btn",onClick:function(){return n(!1)},children:Object(c.jsx)(l.e,{})}),Object(c.jsx)("div",{className:"side-links"}),b.map((function(e,t){var n=e.page,s=e.links;return Object(c.jsxs)("article",{children:[Object(c.jsx)("h4",{children:n}),Object(c.jsx)("div",{className:"sidebar-sublinks",children:s.map((function(e,t){var n=e.label,s=e.icon,r=e.url;return Object(c.jsxs)("a",{href:r,children:[" ",s," ",n]},t)}))})]},t)}))]})})};var x=function(){var e=d(),t=e.isSubmenuOpen,n=e.location,r=e.pages,a=r.page,i=r.links,l=Object(s.useRef)(null),b=Object(s.useState)("col-2"),j=Object(o.a)(b,2),u=j[0],O=j[1];return Object(s.useEffect)((function(){O("col-2");var e=l.current,t=n.center,c=n.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(c,"px"),3===i.length&&O("col-3"),i.length>3&&O("col-4")}),[n,i]),Object(c.jsxs)("div",{className:"".concat(t?"sub-menu submenu-active":"sub-menu"),ref:l,children:[Object(c.jsx)("h4",{children:a}),Object(c.jsx)("div",{className:"submenu-links ".concat(u),children:i.map((function(e){var t=e.label,n=e.icon,s=e.url;return Object(c.jsxs)("a",{href:s,children:[" ",n,"  ",t]})}))})]})},h=n.p+"static/media/phone.94a7a4fe.svg";var m=function(){var e=d().setIsSubmenuOpen;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"hero-container",onMouseOver:function(){return e(!1)},children:Object(c.jsxs)("article",{className:"content-article",children:[Object(c.jsxs)("div",{className:"details-container",children:[Object(c.jsxs)("h1",{children:["Payments infrastructure ",Object(c.jsx)("br",{})," for the internet"]}),Object(c.jsx)("p",{children:"Millions of companies of all sizes\u2014from startups to Fortune 500s\u2014use Stripe\u2019s software and APIs to accept payments, send payouts, and manage their businesses online."}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"btn start-btn",children:" start now"})]}),Object(c.jsx)("div",{className:"img-container",children:Object(c.jsx)("img",{src:h,alt:"Logo"})})]})})})};n(13);var v=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{}),Object(c.jsx)(p,{}),Object(c.jsx)(m,{}),Object(c.jsx)(x,{})]})};var f=function(){return Object(c.jsx)("main",{children:Object(c.jsx)(v,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u,{children:Object(c.jsx)(f,{})})}),document.getElementById("root")),g()}],[[14,1,2]]]);
//# sourceMappingURL=main.a4df457c.chunk.js.map