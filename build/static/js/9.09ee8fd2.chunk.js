(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{233:function(e,a,t){"use strict";var n=t(26),r=t(522),o=t(523),l=t(230),c=t(524),u=t(231),i=t(1),s=t.n(i),m=t(80),g=t(642),p=t(647),h=t(61);function d(e){var a=e.isLogin,t=e.username,n=e.nickname,r=e.password,o=e.handleChange,l=e.handleSubmit,c=e.logErr;return s.a.createElement(g.a,{layout:"horizontal",className:"login-form",onSubmit:l},s.a.createElement(g.a.Item,null,s.a.createElement(p.a,{name:"loginUsername",prefix:s.a.createElement(h.a,{type:"user"}),placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7",value:t,onChange:o})),a?null:s.a.createElement(g.a.Item,null,s.a.createElement(p.a,{name:"regNickname",prefix:s.a.createElement(h.a,{type:"solution"}),placeholder:"\u8bf7\u8f93\u5165\u6635\u79f0",value:n,onChange:o})),s.a.createElement(g.a.Item,null,s.a.createElement(p.a,{name:"loginPassword",type:"password",prefix:s.a.createElement(h.a,{type:"lock"}),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",value:r,onChange:o})),c&&s.a.createElement("p",{className:"err-message"},c)," ",s.a.createElement(g.a.Item,null,s.a.createElement(p.a,{type:"submit",value:a?"\u767b\u5f55":"\u6ce8\u518c"})))}var E=t(527),b=t(33),f=function(e){return{username:b.c.getFormValue(e,"loginUsername"),nickname:b.c.getFormValue(e,"regNickname"),password:b.c.getFormValue(e,"loginPassword"),isLogged:b.c.getAuthIsLogged(e),logErr:b.c.getErrorMessage(e),logout:b.b.authLogout}},w={handleChange:b.b.formDataOnChange,handleSubmit:b.b.formLoginSubmit};a.a=function(e){var a,t=e.toLowerCase(),g="login"===e.toLowerCase();if("login"!==t&&"register"!==t)throw new Error('Auth type should only be "Login", "Logout" or "Register".');return Object(m.b)(f,w)(a=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.isLogged,a=Object(n.a)({},this.props,{isLogin:g});return s.a.createElement(s.a.Fragment,null,e?s.a.createElement(E.a,null,g?"\u767b\u5f55":"\u6ce8\u518c"):s.a.createElement(d,a))}}]),a}(i.Component))||a}},527:function(e,a,t){"use strict";var n=t(1),r=t.n(n);a.a=function(e){return r.a.createElement("div",{className:"auth-success"},r.a.createElement("p",null,e.children,"\u6210\u529f\uff0c\u8bf7\u7a0d\u540e\uff0c\u5373\u5c06\u8fd4\u56de\u4e0a\u4e00\u4e2a\u9875\u9762"),r.a.createElement("button",{className:"link-button",onClick:function(){return window.history.go(-1)}},"\u5982\u6ca1\u6709\u8fd4\u56de\u8bf7\u70b9\u51fb\u6b64\u5904"))}},634:function(e,a,t){"use strict";t.r(a);var n=t(233);a.default=Object(n.a)("LOGIN")}}]);
//# sourceMappingURL=9.09ee8fd2.chunk.js.map