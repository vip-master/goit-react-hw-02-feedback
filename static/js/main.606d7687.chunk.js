(this.webpackJsonpfeedback=this.webpackJsonpfeedback||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);n(17),n(18);var i=n(7),o=n.n(i),c=n(3),r=n(8),s=n(9),a=n(16),u=n(15),l=n(0),j=n(28),d=n(1);var b=function(t){var e=t.title,n=void 0===e?"Title of Section":e,i=t.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h2",{children:n}),i]})};var h=function(t){return Object(d.jsx)("ul",{children:Object.keys(t).map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:e}),Object(d.jsxs)("span",{children:[t[e],"positivePercentage"===e&&"%"]})]},e)}))})};var O,f=function(){return Object(d.jsx)("h3",{children:"Unfortunatelly, nobody has voted yet. Maybe our services are unuseful so nobody don't use it and vote it. But one is definitely true that WE DON'T BUY VOTES!"})},p=n(10),v=n(11).a.ul(O||(O=Object(p.a)(["\n    display: flex;\n    justify-content: 'space-around',\n"])));var x=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(d.jsx)(v,{children:e.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)("button",{type:"button",onClick:n(t.id),children:t.title})},t.id)}))})},y=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this))._ADAM_STATE_={good:0,neutral:0,bad:0},t.state=Object(c.a)({},t._ADAM_STATE_),t.options=[],t.total=0,t.positivePercentage=0,t.handlerOfAll=function(e){if(void 0===(e=t.options.find((function(t){return t.id===e})).title))throw Error("Incorrect option ID");return function(){t.setState((function(n){return n[e]++,t.total=0,Object.values(n).forEach((function(e){t.total+=e})),0===n.good?t.positivePercentage=0:t.positivePercentage=100*n.good/t.total,n}))}},t.options=t.createOptions(),t}return Object(s.a)(n,[{key:"createOptions",value:function(){return Object.keys(this.state).map((function(t){return{title:t,id:Object(j.a)()}}))}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{title:"Buttons to vote (10$ per one, ask Mr. Burke)",children:Object(d.jsx)(x,{options:this.options,onLeaveFeedback:this.handlerOfAll})}),Object(d.jsx)(b,{title:"Incorruptible votes: ",children:0===this.total?Object(d.jsx)(f,{}):Object(d.jsx)(h,Object(c.a)(Object(c.a)({},this.state),{},{total:this.total,positivePercentage:this.positivePercentage}))})]})}}]),n}(l.Component);o.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.606d7687.chunk.js.map