(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{541:function(t,e,a){"use strict";var n=a(538),r=a(539),c=a(173),o=a(540),i=a(174),s=a(1),u=a.n(s),l=a(80),p=a(640),b=a(33),d=function(t){return{list:b.c.getList(t),post:b.c.getPost(t)}},f={getFetchData:b.b.getFetchData};e.a=function(t,e){var a,b;return a=Object(l.b)(d,f),Object(p.a)(b=a(b=function(a){function s(t){var e;return Object(n.a)(this,s),(e=Object(c.a)(this,Object(o.a)(s).call(this,t))).state={firstMount:!0},e}return Object(i.a)(s,a),Object(r.a)(s,[{key:"componentDidMount",value:function(){this.props.getFetchData({type:e,rule:this.props.match.params.id})}},{key:"render",value:function(){var a=this.props,n=a.list,r=a.post;return"post"===e?r&&"object"===typeof r?u.a.createElement(t,r):null:Array.isArray(n)?u.a.createElement(t,{list:n}):null}}]),s}(s.Component))||b)||b}},553:function(t,e,a){},653:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=(a(553),a(541)),o=a(645),i=a(639);var s=Object(c.a)(function(t){return r.a.createElement("div",{id:"board"},r.a.createElement("div",null,t.list.map(function(t){var e=t.id.split("_")[1];return r.a.createElement(o.a,{key:t.id,className:"board-card",title:t.boardName,hoverable:!0,extra:r.a.createElement(i.a,{to:"/board/".concat(e)},"More")},r.a.createElement("h4",null,t.boardDesc))})))},"boards");e.default=function(){return r.a.createElement(s,null)}}}]);
//# sourceMappingURL=5.5b8c14d5.chunk.js.map