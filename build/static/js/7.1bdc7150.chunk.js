(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{232:function(e,t,n){"use strict";var a,o,r=n(1),c=n.n(r),i=(n(538),n(522)),l=n(523),s=n(230),m=n(524),u=n(231),d=n(80),p=n(639),h=n(33),v=n(642),g=n(647);function f(e){var t=e.title,n=e.comment,a=e.post,o=e.handleChange,r=e.handleSubmit,i=e.isComment,l=e.isActive,s=e.err,m=i?"commentContent":"postContent",u=i?n:a,d=i?"\u53d1\u8868\u8bc4\u8bba":"\u63d0\u4ea4";return c.a.createElement(v.a,{className:"editor",onSubmit:r},!i&&c.a.createElement(v.a.Item,null,c.a.createElement(g.a,{name:"postTitle",type:"text",value:t,onChange:o})),c.a.createElement(v.a.Item,null,c.a.createElement(g.a.TextArea,{name:m,value:u,onChange:o})),l&&s&&c.a.createElement("p",{className:"err-message"},s),c.a.createElement(v.a.Item,null,c.a.createElement(g.a,{type:"submit",value:d})))}f.defaultProps={title:"",post:"",comment:""};var b={handleChange:h.b.formDataOnChange,handleSubmit:h.b.formValuePublish,toggleIsPosting:h.b.formToggleIsPosting},E=function(e,t){return{target:{name:e,value:t}}},O=(a=Object(d.b)(function(e,t){return{title:h.c.getFormValue(e,"postTitle"),post:h.c.getFormValue(e,"postContent"),comment:h.c.getFormValue(e,"commentContent"),isPosting:h.c.getFormIsPosting(e),authorId:h.c.getAuthUserId(e),err:h.c.getErrorMessage(e),mode:t.mode,oldTitle:t.title,oldContent:t.content}},b),Object(p.a)(o=a(o=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).isComment=n.props.mode&&"comment"===n.props.mode.toLowerCase(),n.handleSubmit=function(e){e.preventDefault(),n.setState({isActive:!0});var t=e.target,a=t.postContent,o=t.postTitle,r=t.commentContent,c=n.props,i=c.location.pathname,l=c.mode,s=c.authorId,m=n.isComment,u=i.split("/")[2],d=o&&o.value,p={value:m?r&&r.value:a&&a.value,pathId:u,mode:l,authorId:s,isComment:m};p=Object.assign(p,d?{title:d}:{}),n.props.handleSubmit(p)},n.state={isActive:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.mode;if("amend"===(e&&e.toLowerCase())){var t=this.props,n=t.oldContent,a=t.oldTitle,o=t.handleChange;a&&o(E("postTitle",a)),n&&o(E("postContent",n))}}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.toggleIsPosting,n=e.isPosting;n&&t(n)}},{key:"render",value:function(){var e=this.props,t=e.post,n=e.title,a=e.comment,o=e.err,r=e.handleChange,i={isComment:this.isComment,isActive:this.state.isActive,handleSubmit:this.handleSubmit,handleChange:r,title:n,post:t,comment:a,err:o};return c.a.createElement(f,i)}}]),t}(r.Component))||o)||o);t.a=function(e){return c.a.createElement(O,{mode:e.mode,title:e.title,content:e.content})}},525:function(e,t,n){"use strict";var a=n(522),o=n(523),r=n(230),c=n(524),i=n(231),l=n(1),s=n.n(l),m=n(80),u=n(639),d=n(33),p=function(e){return{list:d.c.getList(e),post:d.c.getPost(e)}},h={getFetchData:d.b.getFetchData};t.a=function(e,t){var n,d;return n=Object(m.b)(p,h),Object(u.a)(d=n(d=function(n){function l(e){var t;return Object(a.a)(this,l),(t=Object(r.a)(this,Object(c.a)(l).call(this,e))).state={firstMount:!0},t}return Object(i.a)(l,n),Object(o.a)(l,[{key:"componentDidMount",value:function(){this.props.getFetchData({type:t,rule:this.props.match.params.id})}},{key:"render",value:function(){var n=this.props,a=n.list,o=n.post;return"post"===t?o&&"object"===typeof o?s.a.createElement(e,o):null:Array.isArray(a)?s.a.createElement(e,{list:a}):null}}]),l}(l.Component))||d)||d}},538:function(e,t,n){},630:function(e,t,n){},646:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=(n(630),n(522)),c=n(523),i=n(230),l=n(524),s=n(231),m=n(80),u=n(33),d=n(17),p=n.n(d);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n};function f(e){var t,n=e.prefixCls,o=void 0===n?"ant":n,r=e.type,c=void 0===r?"horizontal":r,i=e.orientation,l=void 0===i?"":i,s=e.className,m=e.children,u=e.dashed,d=g(e,["prefixCls","type","orientation","className","children","dashed"]),f=l.length>0?"-"+l:l,b=p()(s,"".concat(o,"-divider"),"".concat(o,"-divider-").concat(c),(v(t={},"".concat(o,"-divider-with-text").concat(f),m),v(t,"".concat(o,"-divider-dashed"),!!u),t));return a.createElement("div",h({className:b},d),m&&a.createElement("span",{className:"".concat(o,"-divider-inner-text")},m))}function b(e){var t=e.title,n=e.content,a=e.author,r=e.postDate;return o.a.createElement("div",{className:"post-value"},o.a.createElement(f,{orientation:"left"},o.a.createElement("h1",null,t)),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),o.a.createElement(f,{orientation:"right"},o.a.createElement("h3",null,a)),o.a.createElement("p",null,r))}b.defaultProps={title:"",content:"",postDate:"",author:""};var E=n(525),O=Object(E.a)(b,"post"),C=n(643);function j(e){var t=e.id,n=e.content,a=e.author,r=e.commentDate;return o.a.createElement(C.a.Item,{key:t,className:"comment-list-item"},o.a.createElement("div",null,o.a.createElement(f,{orientation:"left"},a),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),o.a.createElement(f,{className:"comment-date",orientation:"right"},r)))}j.defaultProps={id:"",commentDate:"",author:"",content:""};var y,I=Object(E.a)(function(e){return o.a.createElement("div",{id:"commentList"},o.a.createElement(f,null,"Comments"),o.a.createElement(C.a,{className:"comment-list",dataSource:e.list,bordered:!0,renderItem:function(e){return o.a.createElement(j,e)}}))},"comments"),P=n(232),w=n(181),S=Object(m.b)(function(e){return{isPosting:u.c.getFormIsPosting(e),isLogged:u.c.getAuthIsLogged(e),noMatch:u.c.getNoMatch(e),post:u.c.getPost(e),authUserId:u.c.getAuthUserId(e)}})(y=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,n,a,r=this.props,c=r.isLogged,i=r.authUserId,l=r.isPosting,s=r.post;return r.noMatch?o.a.createElement(w.b,null):(s&&(t=s.title)&&(n=s.content)&&(a=s.userId)&&(e=a===i),o.a.createElement(o.a.Fragment,null,c&&e?o.a.createElement(w.c,null,"\u7f16\u8f91\u5e16\u5b50"):null,o.a.createElement("div",{id:"post"},l?o.a.createElement(P.a,{mode:"amend",title:t,content:n}):o.a.createElement(O,null),o.a.createElement(I,null),o.a.createElement(P.a,{mode:"comment"}))))}}]),t}(a.Component))||y;t.default=function(){return o.a.createElement(S,null)}}}]);
//# sourceMappingURL=7.1bdc7150.chunk.js.map