(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),s=n.n(o),c=n(3),i=n.n(c),a=n(4),d=n(2),u=n(11),b=n(12),h=(n(27),n(13)),l=n(14),j=n(16),g=n(15),p=function(e){var t=e.name,n=e.email,o=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{style:{maxWidth:"220px"},alt:"robot",src:"https://robohash.org/".concat(10*o,"?150x150")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},O=function(e){var t=e.Robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(p,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){e.searchfield;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b-green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},v=(n(28),function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})}),x="CHANGE_SEARCH_FIELD",m="REQUEST_ROBOTS_PENDING",R="REQUEST_ROBOTS_SUCCESS",y="REQUEST_ROBOTS_FAILED",C=function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.Robots,s=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?Object(r.jsx)("h1",{children:"Loading ..."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"robofriends"}),Object(r.jsx)(f,{searchChange:n}),Object(r.jsx)(v,{children:Object(r.jsx)(O,{Robots:c})})]})}}]),n}(o.Component),S=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,Robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:x,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:m}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:R,payload:t})})).catch((function(t){return e({type:y,payload:t})}))}))}}}))(C),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),s(e),c(e)}))},F=(n(29),{searchField:""}),w={isPending:!1,robots:[],error:""},P=Object(u.createLogger)(),L=Object(d.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{isPending:!0});case R:return Object.assign({},e,{robots:t.payload,isPending:!1});case y:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(d.d)(L,Object(d.a)(b.a,P));i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(a.a,{store:N,children:Object(r.jsx)(S,{})})}),document.getElementById("root")),E()}},[[30,1,2]]]);
//# sourceMappingURL=main.23d9cbf6.chunk.js.map