(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(4),a=n.n(s),o=n(3),i=function(e){var t=e.username,n=e.name,c=e.email,s=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:t,src:"https://robohash.org/".concat(s,"?200x200")}),Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})},h=function(e){var t=e.robots;return t.length?Object(r.jsx)("div",{children:t.map((function(e){return Object(r.jsx)(i,{id:e.id,name:e.name,email:e.email,username:e.username},e.id)}))}):Object(r.jsx)("h1",{className:"pa5",children:"no robot found"})},l=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"5px solid #333",height:"800px"},children:e.children})},u=n(5),b=n(6),d=n(8),f=n(7),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{className:"pa5",children:"oops... there some problem."}):this.props.children}}]),n}(c.Component),m=(n(14),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),u=i[0],b=i[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return n.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"robofriends"}),Object(r.jsx)(l,{searchChange:function(e){b(e.target.value)}}),Object(r.jsx)(j,{children:Object(r.jsx)(O,{children:Object(r.jsx)(h,{robots:d})})})]}):Object(r.jsxs)("div",{className:"tc pa5",children:[" ",Object(r.jsx)("h1",{children:"loading..."})]})}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(15),n(16);a.a.render(Object(r.jsx)(m,{}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.0cda3f57.chunk.js.map