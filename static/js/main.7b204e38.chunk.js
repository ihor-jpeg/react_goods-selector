(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var c=s(3),n=s.n(c),a=s(7),l=s(4),o=s(5),r=s(9),i=s(8),d=s(1),p=s.n(d),j=(s(14),s(6)),u=s.n(j),b=s(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(l.a)(this,s);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:[]},e.addItem=function(t){var s=e.state.selectedGoods;s.includes(t)||e.setState({selectedGoods:[].concat(Object(a.a)(s),[t])})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,s=[t.slice(0,-1).join(", "),t.slice(-1)].join(t.length>1?" and ":"");return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"App__container",children:[Object(b.jsxs)("div",{className:"App__header",children:[Object(b.jsxs)("div",{className:"App__title",children:[Object(b.jsx)("h1",{children:t.length?"Selected:":"No goods selected"}),0!==t.length&&Object(b.jsx)("button",{className:"App__clear-button",type:"button",onClick:function(){e.setState({selectedGoods:[]})},children:"+"})]}),Object(b.jsx)("p",{className:"App__selected-items",children:s})]}),Object(b.jsx)("ul",{className:"App__items",children:h.map((function(s){return Object(b.jsxs)("li",{className:"App__item-wrapper",children:[Object(b.jsx)("button",{className:u()("App__button",{"App__button--pressed":t.includes(s)}),type:"button",onClick:function(){e.addItem(s)},children:"+"}),Object(b.jsx)("p",{className:"App__item",children:s})]},s)}))})]})})}}]),s}(p.a.Component);n.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7b204e38.chunk.js.map