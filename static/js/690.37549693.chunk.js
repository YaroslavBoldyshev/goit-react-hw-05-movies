"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[690],{690:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r,c,i=n(439),s=n(791),a=n(689),o=n(168),u=n(444),l=n(184),d=function(e){var t=e.cast;return(0,l.jsxs)(h,{children:[(0,l.jsx)("img",{width:"100",src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:""}),(0,l.jsx)("p",{children:t.name}),(0,l.jsx)("p",{children:t.character||"unknown"})]})},h=u.ZP.li(r||(r=(0,o.Z)(["\n  padding-left: 16px;\n  display: flex;\n  flex-direction: column;\n"]))),f=function(e){var t=e.review;return(0,l.jsxs)(p,{children:[(0,l.jsx)("h3",{children:t.author}),(0,l.jsx)("p",{children:t.content})]})},p=u.ZP.li(c||(c=(0,o.Z)(["\n  padding-left: 16px;\n"]))),x=function(){var e=(0,s.useState)({}),t=(0,i.Z)(e,2),n=t[0],r=t[1],c=(0,a.UO)(),o=c.detailsId,u=c.movieId;return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(u,"/").concat(o,"?api_key=a993acaefbe45c7033feacc337f4a924")).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[o,u]),"credits"===o&&n.cast?0===n.cast.length?(0,l.jsx)("h2",{children:"No casts was found"}):n.cast.map((function(e){return(0,l.jsx)(d,{cast:e},e.id)})):"reviews"===o&&n.results?0===n.results.length?(0,l.jsx)("h2",{children:"No reviews was found"}):n.results.map((function(e){return(0,l.jsx)(f,{review:e},e.id)})):void 0}}}]);
//# sourceMappingURL=690.37549693.chunk.js.map