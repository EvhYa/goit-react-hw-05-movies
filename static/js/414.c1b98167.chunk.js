"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{368:function(e,n,t){t.d(n,{O:function(){return a}});var r=t(87),u=t(184);function a(e){var n=e.moviesData,t=e.location,a=e.link;return(0,u.jsx)("ul",{children:n.map((function(e){var n=e.id,i=e.original_title,o=e.original_name;return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"".concat(a+n),state:{from:t},children:null!==i&&void 0!==i?i:o})},n)}))})}},414:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(439),u=t(375),a=t(184);function i(e){var n=e.onMovieSearch;e.updateQueryString,e.query;return(0,a.jsxs)("form",{onSubmit:n,children:[(0,a.jsx)("input",{type:"text",name:"query"}),(0,a.jsx)("button",{children:"Search"})]})}var o=t(368),c=t(791),l=t(689),s=t(87);function f(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],f=n[1],v=(0,l.TH)(),h=(0,s.lr)(),d=(0,r.Z)(h,2),m=d[0],p=d[1];return(0,c.useEffect)((function(){var e,n=null!==(e=m.get("query"))&&void 0!==e?e:"";(0,u.z8)(n).then((function(e){return f(e.data.results)})).catch((function(e){return console.log(e.message)}))}),[m]),(0,a.jsxs)("div",{children:[(0,a.jsx)(i,{onMovieSearch:function(e){e.preventDefault();var n=e.currentTarget;p({query:n.elements.query.value}),n.reset()}}),(0,a.jsx)(o.O,{moviesData:t,location:v,link:""})]})}}}]);
//# sourceMappingURL=414.c1b98167.chunk.js.map