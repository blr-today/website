var n,l$1,u$1,i$1,t,r$1,o,f$1,e$1,c$1={},s=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(n,l){for(var u in l)n[u]=l[u];return n}function v$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y(l,u,i){var t,r,o,f={};for(o in u)"key"==o?t=u[o]:"ref"==o?r=u[o]:f[o]=u[o];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===f[o]&&(f[o]=l.defaultProps[o]);return p(l,f,t,r,null)}function p(n,i,t,r,o){var f={type:n,props:i,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++u$1:o};return null==o&&null!=l$1.vnode&&l$1.vnode(f),f}function d(){return {current:null}}function _(n){return n.children}function k$1(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||g$2(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||g$2(n,r,l[r],u[r],i);}function b$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function g$2(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||b$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||b$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?w$2:m$1,r):n.removeEventListener(l,r?w$2:m$1,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u));}}function m$1(n){t=!0;try{return this.l[n.type+!1](l$1.event?l$1.event(n):n)}finally{t=!1;}}function w$2(n){t=!0;try{return this.l[n.type+!0](l$1.event?l$1.event(n):n)}finally{t=!1;}}function x$1(n,l){this.props=n,this.context=l;}function A(n,l){if(null==l)return n.__?A(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?A(n):null}function P$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return P$1(n)}}function C$1(n){t?setTimeout(n):f$1(n);}function T$1(n){(!n.__d&&(n.__d=!0)&&r$1.push(n)&&!$$1.__r++||o!==l$1.debounceRendering)&&((o=l$1.debounceRendering)||C$1)($$1);}function $$1(){var n,l,u,i,t,o,f,e;for(r$1.sort(function(n,l){return n.__v.__b-l.__v.__b});n=r$1.shift();)n.__d&&(l=r$1.length,i=void 0,t=void 0,f=(o=(u=n).__v).__e,(e=u.__P)&&(i=[],(t=h({},o)).__v=o.__v+1,M(e,o,t,u.__n,void 0!==e.ownerSVGElement,null!=o.__h?[f]:null,i,null==f?A(o):f,o.__h),N(i,o),o.__e!=f&&P$1(o)),r$1.length>l&&r$1.sort(function(n,l){return n.__v.__b-l.__v.__b}));$$1.__r=0;}function H$1(n,l,u,i,t,r,o,f,e,a){var h,v,y,d,k,b,g,m=i&&i.__k||s,w=m.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(d=u.__k[h]=null==(d=l[h])||"boolean"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?p(null,d,null,null,d):Array.isArray(d)?p(_,{children:d},null,null,null):d.__b>0?p(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)){if(d.__=u,d.__b=u.__b+1,null===(y=m[h])||y&&d.key==y.key&&d.type===y.type)m[h]=void 0;else for(v=0;v<w;v++){if((y=m[v])&&d.key==y.key&&d.type===y.type){m[v]=void 0;break}y=null;}M(n,d,y=y||c$1,t,r,o,f,e,a),k=d.__e,(v=d.ref)&&y.ref!=v&&(g||(g=[]),y.ref&&g.push(y.ref,null,d),g.push(v,d.__c||k,d)),null!=k?(null==b&&(b=k),"function"==typeof d.type&&d.__k===y.__k?d.__d=e=I$1(d,e,n):e=z$1(n,d,y,m,k,e),"function"==typeof u.type&&(u.__d=e)):e&&y.__e==e&&e.parentNode!=n&&(e=A(y));}for(u.__e=b,h=w;h--;)null!=m[h]&&("function"==typeof u.type&&null!=m[h].__e&&m[h].__e==u.__d&&(u.__d=L$1(i).nextSibling),q(m[h],m[h]));if(g)for(h=0;h<g.length;h++)S(g[h],g[++h],g[++h]);}function I$1(n,l,u){for(var i,t=n.__k,r=0;t&&r<t.length;r++)(i=t[r])&&(i.__=n,l="function"==typeof i.type?I$1(i,l,u):z$1(u,i,i,t,i.__e,l));return l}function j$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){j$2(n,l);}):l.push(n)),l}function z$1(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function L$1(n){var l,u,i;if(null==n.type||"string"==typeof n.type)return n.__e;if(n.__k)for(l=n.__k.length-1;l>=0;l--)if((u=n.__k[l])&&(i=L$1(u)))return i;return null}function M(n,u,i,t,r,o,f,e,c){var s,a,v,y,p,d,k,b,g,m,w,A,P,C,T,$=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof $){if(b=u.props,g=(s=$.contextType)&&t[s.__c],m=s?g?g.props.value:s.__:t,i.__c?k=(a=u.__c=i.__c).__=a.__E:("prototype"in $&&$.prototype.render?u.__c=a=new $(b,m):(u.__c=a=new x$1(b,m),a.constructor=$,a.render=B$1),g&&g.sub(a),a.props=b,a.state||(a.state={}),a.context=m,a.__n=t,v=a.__d=!0,a.__h=[],a._sb=[]),null==a.__s&&(a.__s=a.state),null!=$.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=h({},a.__s)),h(a.__s,$.getDerivedStateFromProps(b,a.__s))),y=a.props,p=a.state,a.__v=u,v)null==$.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else {if(null==$.getDerivedStateFromProps&&b!==y&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,m),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,m)||u.__v===i.__v){for(u.__v!==i.__v&&(a.props=b,a.state=a.__s,a.__d=!1),u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),w=0;w<a._sb.length;w++)a.__h.push(a._sb[w]);a._sb=[],a.__h.length&&f.push(a);break n}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,m),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(y,p,d);});}if(a.context=m,a.props=b,a.__P=n,A=l$1.__r,P=0,"prototype"in $&&$.prototype.render){for(a.state=a.__s,a.__d=!1,A&&A(u),s=a.render(a.props,a.state,a.context),C=0;C<a._sb.length;C++)a.__h.push(a._sb[C]);a._sb=[];}else do{a.__d=!1,A&&A(u),s=a.render(a.props,a.state,a.context),a.state=a.__s;}while(a.__d&&++P<25);a.state=a.__s,null!=a.getChildContext&&(t=h(h({},t),a.getChildContext())),v||null==a.getSnapshotBeforeUpdate||(d=a.getSnapshotBeforeUpdate(y,p)),T=null!=s&&s.type===_&&null==s.key?s.props.children:s,H$1(n,Array.isArray(T)?T:[T],u,i,t,r,o,f,e,c),a.base=u.__e,u.__h=null,a.__h.length&&f.push(a),k&&(a.__E=a.__=null),a.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=O(i.__e,u,i,t,r,o,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=o)&&(u.__e=e,u.__h=!!c,o[o.indexOf(e)]=null),l$1.__e(n,u,i);}}function N(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function O(l,u,i,t,r,o,f,e){var s,a,h,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(r=!0),null!=o)for(;_<o.length;_++)if((s=o[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,o[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),o=null,e=!1;}if(null===d)y===p||e&&l.data===p||(l.data=p);else {if(o=o&&n.call(l.childNodes),a=(y=i.props||c$1).dangerouslySetInnerHTML,h=p.dangerouslySetInnerHTML,!e){if(null!=o)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(h||a)&&(h&&(a&&h.__html==a.__html||h.__html===l.innerHTML)||(l.innerHTML=h&&h.__html||""));}if(k$1(l,p,y,r,e),h)u.__k=[];else if(_=u.props.children,H$1(l,Array.isArray(_)?_:[_],u,i,t,r&&"foreignObject"!==d,o,f,o?o[0]:i.__k&&A(i,0),e),null!=o)for(_=o.length;_--;)null!=o[_]&&v$1(o[_]);e||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&g$2(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&g$2(l,"checked",_,y.checked,!1));}return l}function S(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function q(n,u,i){var t,r;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||S(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(r=0;r<t.length;r++)t[r]&&q(t[r],u,i||"function"!=typeof n.type);i||null==n.__e||v$1(n.__e),n.__=n.__e=n.__d=void 0;}function B$1(n,l,u){return this.constructor(n,u)}function D$1(u,i,t){var r,o,f;l$1.__&&l$1.__(u,i),o=(r="function"==typeof t)?null:i.__k,f=[],M(i,u=(!r&&t||i).__k=y(_,null,[u]),o||c$1,c$1,void 0!==i.ownerSVGElement,!r&&t?[t]:o?null:i.firstChild?n.call(i.childNodes):null,f,!r&&t?t:o?o.__e:i.firstChild,r),N(f,u);}function G$1(n,l){var u={__c:l="__cC"+e$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,T$1(n);});},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=s.slice,l$1={__e:function(n,l,u,i){for(var t,r,o;l=l.__;)if((t=l.__c)&&!t.__)try{if((r=t.constructor)&&null!=r.getDerivedStateFromError&&(t.setState(r.getDerivedStateFromError(n)),o=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),o=t.__d),o)return t.__E=t}catch(l){n=l;}throw n}},u$1=0,i$1=function(n){return null!=n&&void 0===n.constructor},t=!1,x$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof n&&(n=n(h({},u),this.props)),n&&h(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),T$1(this));},x$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),T$1(this));},x$1.prototype.render=_,r$1=[],f$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$$1.__r=0,e$1=0;

var r,u,i,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n);var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w$1),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j$1)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w$1(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j$1(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w$1(n){var t=r;n.__c=n.__(),r=t;}

function g(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function w(n){this.props=n;}(w.prototype=new x$1).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var x=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),x&&x(n);};var T=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r);};var I=l$1.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e)})),n}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n}function D(){this.__u=0,this.t=null,this.__b=null;}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function V(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n);},(D.prototype=new x$1).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},D.prototype.componentWillUnmount=function(){this.t=[];},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&y(_,null,n.fallback);return i&&(i.__h=null),[y(_,null,e.__a?null:n.children),i]};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function P(n){return this.getChildContext=function(){return n.context},n.children}function $(n){var e=this,r=n.i;e.componentWillUnmount=function(){D$1(null,e.l),e.l=null,e.i=null;},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n);},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n);}}),D$1(y(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount();}function j(n,e){var r=y($,{__v:n,i:e});return r.containerInfo=e,r}(V.prototype=new x$1).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u();};e?e(o):o();}},V.prototype.render=function(n){this.u=null,this.o=new Map;var t=j$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t);});};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H="undefined"!=typeof document,Z=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};x$1.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(x$1.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var G=l$1.event;function J(){}function K(){return this.cancelBubble}function Q(){return this.defaultPrevented}l$1.event=function(n){return G&&(n=G(n)),n.persist=J,n.isPropagationStopped=K,n.isDefaultPrevented=Q,n.nativeEvent=n};var nn={configurable:!0,get:function(){return this.class}},tn=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,u=e;if("string"==typeof t){var o=-1===t.indexOf("-");for(var i in u={},e){var l=e[i];H&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in e&&null==l||("defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!Z(e.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&B.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===l&&(l=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),u[i]&&(i="oninputCapture")),u[i]=l);}"select"==t&&u.multiple&&Array.isArray(u.value)&&(u.value=j$2(e.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==t&&null!=u.defaultValue&&(u.value=j$2(e.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),n.props=u,e.class!=e.className&&(nn.enumerable="className"in e,null!=e.className&&(u.class=e.className),Object.defineProperty(u,"className",nn));}n.$$typeof=z,tn&&tn(n);};var en=l$1.__r;l$1.__r=function(n){en&&en(n),n.__c;};

const styleTexts = [];
const styleEls = new Map();
function injectStyles(styleText) {
    styleTexts.push(styleText);
    styleEls.forEach((styleEl) => {
        appendStylesTo(styleEl, styleText);
    });
}
function ensureElHasStyles(el) {
    if (el.isConnected && // sometimes true if SSR system simulates DOM
        el.getRootNode // sometimes undefined if SSR system simulates DOM
    ) {
        registerStylesRoot(el.getRootNode());
    }
}
function registerStylesRoot(rootNode) {
    let styleEl = styleEls.get(rootNode);
    if (!styleEl || !styleEl.isConnected) {
        styleEl = rootNode.querySelector('style[data-fullcalendar]');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.setAttribute('data-fullcalendar', '');
            const nonce = getNonceValue();
            if (nonce) {
                styleEl.nonce = nonce;
            }
            const parentEl = rootNode === document ? document.head : rootNode;
            const insertBefore = rootNode === document
                ? parentEl.querySelector('script,link[rel=stylesheet],link[as=style],style')
                : parentEl.firstChild;
            parentEl.insertBefore(styleEl, insertBefore);
        }
        styleEls.set(rootNode, styleEl);
        hydrateStylesRoot(styleEl);
    }
}
function hydrateStylesRoot(styleEl) {
    for (const styleText of styleTexts) {
        appendStylesTo(styleEl, styleText);
    }
}
function appendStylesTo(styleEl, styleText) {
    const { sheet } = styleEl;
    const ruleCnt = sheet.cssRules.length;
    styleText.split('}').forEach((styleStr, i) => {
        styleStr = styleStr.trim();
        if (styleStr) {
            sheet.insertRule(styleStr + '}', ruleCnt + i);
        }
    });
}
// nonce
// -------------------------------------------------------------------------------------------------
let queriedNonceValue;
function getNonceValue() {
    if (queriedNonceValue === undefined) {
        queriedNonceValue = queryNonceValue();
    }
    return queriedNonceValue;
}
/*
TODO: discourage meta tag and instead put nonce attribute on placeholder <style> tag
*/
function queryNonceValue() {
    const metaWithNonce = document.querySelector('meta[name="csp-nonce"]');
    if (metaWithNonce && metaWithNonce.hasAttribute('content')) {
        return metaWithNonce.getAttribute('content');
    }
    const elWithNonce = document.querySelector('script[nonce]');
    if (elWithNonce) {
        return elWithNonce.nonce || '';
    }
    return '';
}
// main
// -------------------------------------------------------------------------------------------------
if (typeof document !== 'undefined') {
    registerStylesRoot(document);
}

var css_248z$3 = ":root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:\"\\e900\"}.fc-icon-chevron-right:before{content:\"\\e901\"}.fc-icon-chevrons-left:before{content:\"\\e902\"}.fc-icon-chevrons-right:before{content:\"\\e903\"}.fc-icon-minus-square:before{content:\"\\e904\"}.fc-icon-plus-square:before{content:\"\\e905\"}.fc-icon-x:before{content:\"\\e906\"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:\"\";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:\"\";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}";
injectStyles(css_248z$3);

class DelayedRunner {
    constructor(drainedOption) {
        this.drainedOption = drainedOption;
        this.isRunning = false;
        this.isDirty = false;
        this.pauseDepths = {};
        this.timeoutId = 0;
    }
    request(delay) {
        this.isDirty = true;
        if (!this.isPaused()) {
            this.clearTimeout();
            if (delay == null) {
                this.tryDrain();
            }
            else {
                this.timeoutId = setTimeout(// NOT OPTIMAL! TODO: look at debounce
                this.tryDrain.bind(this), delay);
            }
        }
    }
    pause(scope = '') {
        let { pauseDepths } = this;
        pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
        this.clearTimeout();
    }
    resume(scope = '', force) {
        let { pauseDepths } = this;
        if (scope in pauseDepths) {
            if (force) {
                delete pauseDepths[scope];
            }
            else {
                pauseDepths[scope] -= 1;
                let depth = pauseDepths[scope];
                if (depth <= 0) {
                    delete pauseDepths[scope];
                }
            }
            this.tryDrain();
        }
    }
    isPaused() {
        return Object.keys(this.pauseDepths).length;
    }
    tryDrain() {
        if (!this.isRunning && !this.isPaused()) {
            this.isRunning = true;
            while (this.isDirty) {
                this.isDirty = false;
                this.drained(); // might set isDirty to true again
            }
            this.isRunning = false;
        }
    }
    clear() {
        this.clearTimeout();
        this.isDirty = false;
        this.pauseDepths = {};
    }
    clearTimeout() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = 0;
        }
    }
    drained() {
        if (this.drainedOption) {
            this.drainedOption();
        }
    }
}

function removeElement(el) {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}
// Querying
// ----------------------------------------------------------------------------------------------------------------
function elementClosest(el, selector) {
    if (el.closest) {
        return el.closest(selector);
        // really bad fallback for IE
        // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    }
    if (!document.documentElement.contains(el)) {
        return null;
    }
    do {
        if (elementMatches(el, selector)) {
            return el;
        }
        el = (el.parentElement || el.parentNode);
    } while (el !== null && el.nodeType === 1);
    return null;
}
function elementMatches(el, selector) {
    let method = el.matches || el.matchesSelector || el.msMatchesSelector;
    return method.call(el, selector);
}
// accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document
function findElements(container, selector) {
    let containers = container instanceof HTMLElement ? [container] : container;
    let allMatches = [];
    for (let i = 0; i < containers.length; i += 1) {
        let matches = containers[i].querySelectorAll(selector);
        for (let j = 0; j < matches.length; j += 1) {
            allMatches.push(matches[j]);
        }
    }
    return allMatches;
}
// Style
// ----------------------------------------------------------------------------------------------------------------
const PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
    for (let propName in props) {
        applyStyleProp(el, propName, props[propName]);
    }
}
function applyStyleProp(el, name, val) {
    if (val == null) {
        el.style[name] = '';
    }
    else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
        el.style[name] = `${val}px`;
    }
    else {
        el.style[name] = val;
    }
}
// Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.
function getEventTargetViaRoot(ev) {
    var _a, _b;
    return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
}
// Unique ID for DOM attribute
let guid$1 = 0;
function getUniqueDomId() {
    guid$1 += 1;
    return 'fc-dom-' + guid$1;
}
// Event Delegation
// ----------------------------------------------------------------------------------------------------------------
function buildDelegationHandler(selector, handler) {
    return (ev) => {
        let matchedChild = elementClosest(ev.target, selector);
        if (matchedChild) {
            handler.call(matchedChild, ev, matchedChild);
        }
    };
}
function listenBySelector(container, eventType, selector, handler) {
    let attachedHandler = buildDelegationHandler(selector, handler);
    container.addEventListener(eventType, attachedHandler);
    return () => {
        container.removeEventListener(eventType, attachedHandler);
    };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
    let currentMatchedChild;
    return listenBySelector(container, 'mouseover', selector, (mouseOverEv, matchedChild) => {
        if (matchedChild !== currentMatchedChild) {
            currentMatchedChild = matchedChild;
            onMouseEnter(mouseOverEv, matchedChild);
            let realOnMouseLeave = (mouseLeaveEv) => {
                currentMatchedChild = null;
                onMouseLeave(mouseLeaveEv, matchedChild);
                matchedChild.removeEventListener('mouseleave', realOnMouseLeave);
            };
            // listen to the next mouseleave, and then unattach
            matchedChild.addEventListener('mouseleave', realOnMouseLeave);
        }
    });
}
// ARIA workarounds
// ----------------------------------------------------------------------------------------------------------------
function createAriaClickAttrs(handler) {
    return Object.assign({ onClick: handler }, createAriaKeyboardAttrs(handler));
}
function createAriaKeyboardAttrs(handler) {
    return {
        tabIndex: 0,
        onKeyDown(ev) {
            if (ev.key === 'Enter' || ev.key === ' ') {
                handler(ev);
                ev.preventDefault(); // if space, don't scroll down page
            }
        },
    };
}

let guidNumber = 0;
function guid() {
    guidNumber += 1;
    return String(guidNumber);
}
function parseFieldSpecs(input) {
    let specs = [];
    let tokens = [];
    let i;
    let token;
    if (typeof input === 'string') {
        tokens = input.split(/\s*,\s*/);
    }
    else if (typeof input === 'function') {
        tokens = [input];
    }
    else if (Array.isArray(input)) {
        tokens = input;
    }
    for (i = 0; i < tokens.length; i += 1) {
        token = tokens[i];
        if (typeof token === 'string') {
            specs.push(token.charAt(0) === '-' ?
                { field: token.substring(1), order: -1 } :
                { field: token, order: 1 });
        }
        else if (typeof token === 'function') {
            specs.push({ func: token });
        }
    }
    return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
    let i;
    let cmp;
    for (i = 0; i < fieldSpecs.length; i += 1) {
        cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
        if (cmp) {
            return cmp;
        }
    }
    return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
    if (fieldSpec.func) {
        return fieldSpec.func(obj0, obj1);
    }
    return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
        * (fieldSpec.order || 1);
}
function flexibleCompare(a, b) {
    if (!a && !b) {
        return 0;
    }
    if (b == null) {
        return -1;
    }
    if (a == null) {
        return 1;
    }
    if (typeof a === 'string' || typeof b === 'string') {
        return String(a).localeCompare(String(b));
    }
    return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/
function padStart(val, len) {
    let s = String(val);
    return '000'.substr(0, len - s.length) + s;
}
function formatWithOrdinals(formatter, args, fallbackText) {
    if (typeof formatter === 'function') {
        return formatter(...args);
    }
    if (typeof formatter === 'string') { // non-blank string
        return args.reduce((str, arg, index) => (str.replace('$' + index, arg || '')), formatter);
    }
    return fallbackText;
}
function isInt(n) {
    return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/
function computeSmallestCellWidth(cellEl) {
    let allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
    let contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');
    if (!allWidthEl) {
        throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
    }
    if (!contentWidthEl) {
        throw new Error('needs fc-scrollgrid-shrink-cushion className');
    }
    return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
        contentWidthEl.getBoundingClientRect().width;
}

const INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
const PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
// Parsing and Creation
function createDuration(input, unit) {
    if (typeof input === 'string') {
        return parseString(input);
    }
    if (typeof input === 'object' && input) { // non-null object
        return parseObject(input);
    }
    if (typeof input === 'number') {
        return parseObject({ [unit || 'milliseconds']: input });
    }
    return null;
}
function parseString(s) {
    let m = PARSE_RE.exec(s);
    if (m) {
        let sign = m[1] ? -1 : 1;
        return {
            years: 0,
            months: 0,
            days: sign * (m[2] ? parseInt(m[2], 10) : 0),
            milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                (m[6] ? parseInt(m[6], 10) : 0) // ms
            ),
        };
    }
    return null;
}
function parseObject(obj) {
    let duration = {
        years: obj.years || obj.year || 0,
        months: obj.months || obj.month || 0,
        days: obj.days || obj.day || 0,
        milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
            (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
            (obj.seconds || obj.second || 0) * 1000 + // seconds
            (obj.milliseconds || obj.millisecond || obj.ms || 0), // ms
    };
    let weeks = obj.weeks || obj.week;
    if (weeks) {
        duration.days += weeks * 7;
        duration.specifiedWeeks = true;
    }
    return duration;
}
// Equality
function durationsEqual(d0, d1) {
    return d0.years === d1.years &&
        d0.months === d1.months &&
        d0.days === d1.days &&
        d0.milliseconds === d1.milliseconds;
}
// Simple Math
function addDurations(d0, d1) {
    return {
        years: d0.years + d1.years,
        months: d0.months + d1.months,
        days: d0.days + d1.days,
        milliseconds: d0.milliseconds + d1.milliseconds,
    };
}
function subtractDurations(d1, d0) {
    return {
        years: d1.years - d0.years,
        months: d1.months - d0.months,
        days: d1.days - d0.days,
        milliseconds: d1.milliseconds - d0.milliseconds,
    };
}
function multiplyDuration(d, n) {
    return {
        years: d.years * n,
        months: d.months * n,
        days: d.days * n,
        milliseconds: d.milliseconds * n,
    };
}
// Conversions
// "Rough" because they are based on average-case Gregorian months/years
function asRoughYears(dur) {
    return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
    return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
    return asRoughMs(dur) / 864e5;
}
function asRoughMs(dur) {
    return dur.years * (365 * 864e5) +
        dur.months * (30 * 864e5) +
        dur.days * 864e5 +
        dur.milliseconds;
}
// Advanced Math
function wholeDivideDurations(numerator, denominator) {
    let res = null;
    for (let i = 0; i < INTERNAL_UNITS.length; i += 1) {
        let unit = INTERNAL_UNITS[i];
        if (denominator[unit]) {
            let localRes = numerator[unit] / denominator[unit];
            if (!isInt(localRes) || (res !== null && res !== localRes)) {
                return null;
            }
            res = localRes;
        }
        else if (numerator[unit]) {
            // needs to divide by something but can't!
            return null;
        }
    }
    return res;
}
function greatestDurationDenominator(dur) {
    let ms = dur.milliseconds;
    if (ms) {
        if (ms % 1000 !== 0) {
            return { unit: 'millisecond', value: ms };
        }
        if (ms % (1000 * 60) !== 0) {
            return { unit: 'second', value: ms / 1000 };
        }
        if (ms % (1000 * 60 * 60) !== 0) {
            return { unit: 'minute', value: ms / (1000 * 60) };
        }
        if (ms) {
            return { unit: 'hour', value: ms / (1000 * 60 * 60) };
        }
    }
    if (dur.days) {
        if (dur.specifiedWeeks && dur.days % 7 === 0) {
            return { unit: 'week', value: dur.days / 7 };
        }
        return { unit: 'day', value: dur.days };
    }
    if (dur.months) {
        return { unit: 'month', value: dur.months };
    }
    if (dur.years) {
        return { unit: 'year', value: dur.years };
    }
    return { unit: 'millisecond', value: 0 };
}
function isArraysEqual(a0, a1, equalityFunc) {
    if (a0 === a1) {
        return true;
    }
    let len = a0.length;
    let i;
    if (len !== a1.length) { // not array? or not same length?
        return false;
    }
    for (i = 0; i < len; i += 1) {
        if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
            return false;
        }
    }
    return true;
}

const DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// Adding
function addWeeks(m, n) {
    let a = dateToUtcArray(m);
    a[2] += n * 7;
    return arrayToUtcDate(a);
}
function addDays(m, n) {
    let a = dateToUtcArray(m);
    a[2] += n;
    return arrayToUtcDate(a);
}
function addMs(m, n) {
    let a = dateToUtcArray(m);
    a[6] += n;
    return arrayToUtcDate(a);
}
// Diffing (all return floats)
// TODO: why not use ranges?
function diffWeeks(m0, m1) {
    return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}
function diffMinutes(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}
function diffSeconds(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / 1000;
}
function diffDayAndTime(m0, m1) {
    let m0day = startOfDay(m0);
    let m1day = startOfDay(m1);
    return {
        years: 0,
        months: 0,
        days: Math.round(diffDays(m0day, m1day)),
        milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf()),
    };
}
// Diffing Whole Units
function diffWholeWeeks(m0, m1) {
    let d = diffWholeDays(m0, m1);
    if (d !== null && d % 7 === 0) {
        return d / 7;
    }
    return null;
}
function diffWholeDays(m0, m1) {
    if (timeAsMs(m0) === timeAsMs(m1)) {
        return Math.round(diffDays(m0, m1));
    }
    return null;
}
// Start-Of
function startOfDay(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
    ]);
}
function startOfHour(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
    ]);
}
function startOfMinute(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes(),
    ]);
}
function startOfSecond(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes(),
        m.getUTCSeconds(),
    ]);
}
// Week Computation
function weekOfYear(marker, dow, doy) {
    let y = marker.getUTCFullYear();
    let w = weekOfGivenYear(marker, y, dow, doy);
    if (w < 1) {
        return weekOfGivenYear(marker, y - 1, dow, doy);
    }
    let nextW = weekOfGivenYear(marker, y + 1, dow, doy);
    if (nextW >= 1) {
        return Math.min(w, nextW);
    }
    return w;
}
function weekOfGivenYear(marker, year, dow, doy) {
    let firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
    let dayStart = startOfDay(marker);
    let days = Math.round(diffDays(firstWeekStart, dayStart));
    return Math.floor(days / 7) + 1; // zero-indexed
}
// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    let fwd = 7 + dow - doy;
    // first-week day local weekday -- which local weekday is fwd
    let fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
}
// Array Conversion
function dateToLocalArray(date) {
    return [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
    ];
}
function arrayToLocalDate(a) {
    return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
    a[3] || 0, a[4] || 0, a[5] || 0);
}
function dateToUtcArray(date) {
    return [
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds(),
    ];
}
function arrayToUtcDate(a) {
    // according to web standards (and Safari), a month index is required.
    // massage if only given a year.
    if (a.length === 1) {
        a = a.concat([0]);
    }
    return new Date(Date.UTC(...a));
}
// Other Utils
function isValidDate(m) {
    return !isNaN(m.valueOf());
}
function timeAsMs(m) {
    return m.getUTCHours() * 1000 * 60 * 60 +
        m.getUTCMinutes() * 1000 * 60 +
        m.getUTCSeconds() * 1000 +
        m.getUTCMilliseconds();
}

// timeZoneOffset is in minutes
function buildIsoString(marker, timeZoneOffset, stripZeroTime = false) {
    let s = marker.toISOString();
    s = s.replace('.000', '');
    if (stripZeroTime) {
        s = s.replace('T00:00:00Z', '');
    }
    if (s.length > 10) { // time part wasn't stripped, can add timezone info
        if (timeZoneOffset == null) {
            s = s.replace('Z', '');
        }
        else if (timeZoneOffset !== 0) {
            s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
        }
        // otherwise, its UTC-0 and we want to keep the Z
    }
    return s;
}
// formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"
function formatDayString(marker) {
    return marker.toISOString().replace(/T.*$/, '');
}
function formatIsoMonthStr(marker) {
    return marker.toISOString().match(/^\d{4}-\d{2}/)[0];
}
// TODO: use Date::toISOString and use everything after the T?
function formatIsoTimeString(marker) {
    return padStart(marker.getUTCHours(), 2) + ':' +
        padStart(marker.getUTCMinutes(), 2) + ':' +
        padStart(marker.getUTCSeconds(), 2);
}
function formatTimeZoneOffset(minutes, doIso = false) {
    let sign = minutes < 0 ? '-' : '+';
    let abs = Math.abs(minutes);
    let hours = Math.floor(abs / 60);
    let mins = Math.round(abs % 60);
    if (doIso) {
        return `${sign + padStart(hours, 2)}:${padStart(mins, 2)}`;
    }
    return `GMT${sign}${hours}${mins ? `:${padStart(mins, 2)}` : ''}`;
}

function memoize(workerFunc, resEquality, teardownFunc) {
    let currentArgs;
    let currentRes;
    return function (...newArgs) {
        if (!currentArgs) {
            currentRes = workerFunc.apply(this, newArgs);
        }
        else if (!isArraysEqual(currentArgs, newArgs)) {
            let res = workerFunc.apply(this, newArgs);
            if (!resEquality || !resEquality(res, currentRes)) {
                currentRes = res;
            }
        }
        currentArgs = newArgs;
        return currentRes;
    };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
    let currentArg;
    let currentRes;
    return (newArg) => {
        if (!currentArg) {
            currentRes = workerFunc.call(this, newArg);
        }
        else if (!isPropsEqual(currentArg, newArg)) {
            let res = workerFunc.call(this, newArg);
            {
                currentRes = res;
            }
        }
        currentArg = newArg;
        return currentRes;
    };
}

const EXTENDED_SETTINGS_AND_SEVERITIES = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0,
};
const STANDARD_DATE_PROP_SEVERITIES = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1,
};
const MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
const COMMA_RE = /,/g; // we need re for globalness
const MULTI_SPACE_RE = /\s+/g;
const LTR_RE = /\u200e/g; // control character
const UTC_RE = /UTC|GMT/;
class NativeFormatter {
    constructor(formatSettings) {
        let standardDateProps = {};
        let extendedSettings = {};
        let severity = 0;
        for (let name in formatSettings) {
            if (name in EXTENDED_SETTINGS_AND_SEVERITIES) {
                extendedSettings[name] = formatSettings[name];
                severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name], severity);
            }
            else {
                standardDateProps[name] = formatSettings[name];
                if (name in STANDARD_DATE_PROP_SEVERITIES) { // TODO: what about hour12? no severity
                    severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name], severity);
                }
            }
        }
        this.standardDateProps = standardDateProps;
        this.extendedSettings = extendedSettings;
        this.severity = severity;
        this.buildFormattingFunc = memoize(buildFormattingFunc);
    }
    format(date, context) {
        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
    }
    formatRange(start, end, context, betterDefaultSeparator) {
        let { standardDateProps, extendedSettings } = this;
        let diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
        if (!diffSeverity) {
            return this.format(start, context);
        }
        let biggestUnitForPartial = diffSeverity;
        if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
            (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
            (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
            (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
            biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
        }
        let full0 = this.format(start, context);
        let full1 = this.format(end, context);
        if (full0 === full1) {
            return full0;
        }
        let partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
        let partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
        let partial0 = partialFormattingFunc(start);
        let partial1 = partialFormattingFunc(end);
        let insertion = findCommonInsertion(full0, partial0, full1, partial1);
        let separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';
        if (insertion) {
            return insertion.before + partial0 + separator + partial1 + insertion.after;
        }
        return full0 + separator + full1;
    }
    getLargestUnit() {
        switch (this.severity) {
            case 7:
            case 6:
            case 5:
                return 'year';
            case 4:
                return 'month';
            case 3:
                return 'week';
            case 2:
                return 'day';
            default:
                return 'time'; // really?
        }
    }
}
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
    let standardDatePropCnt = Object.keys(standardDateProps).length;
    if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
        return (date) => (formatTimeZoneOffset(date.timeZoneOffset));
    }
    if (standardDatePropCnt === 0 && extendedSettings.week) {
        return (date) => (formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week));
    }
    return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
    standardDateProps = Object.assign({}, standardDateProps); // copy
    extendedSettings = Object.assign({}, extendedSettings); // copy
    sanitizeSettings(standardDateProps, extendedSettings);
    standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
    let normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
    let zeroFormat; // needed?
    if (extendedSettings.omitZeroMinute) {
        let zeroProps = Object.assign({}, standardDateProps);
        delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
        zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
    }
    return (date) => {
        let { marker } = date;
        let format;
        if (zeroFormat && !marker.getUTCMinutes()) {
            format = zeroFormat;
        }
        else {
            format = normalFormat;
        }
        let s = format.format(marker);
        return postProcess(s, date, standardDateProps, extendedSettings, context);
    };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
    // deal with a browser inconsistency where formatting the timezone
    // requires that the hour/minute be present.
    if (standardDateProps.timeZoneName) {
        if (!standardDateProps.hour) {
            standardDateProps.hour = '2-digit';
        }
        if (!standardDateProps.minute) {
            standardDateProps.minute = '2-digit';
        }
    }
    // only support short timezone names
    if (standardDateProps.timeZoneName === 'long') {
        standardDateProps.timeZoneName = 'short';
    }
    // if requesting to display seconds, MUST display minutes
    if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
        delete extendedSettings.omitZeroMinute;
    }
}
function postProcess(s, date, standardDateProps, extendedSettings, context) {
    s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
    if (standardDateProps.timeZoneName === 'short') {
        s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
            'UTC' : // important to normalize for IE, which does "GMT"
            formatTimeZoneOffset(date.timeZoneOffset));
    }
    if (extendedSettings.omitCommas) {
        s = s.replace(COMMA_RE, '').trim();
    }
    if (extendedSettings.omitZeroMinute) {
        s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
    }
    // ^ do anything that might create adjacent spaces before this point,
    // because MERIDIEM_RE likes to eat up loading spaces
    if (extendedSettings.meridiem === false) {
        s = s.replace(MERIDIEM_RE, '').trim();
    }
    else if (extendedSettings.meridiem === 'narrow') { // a/p
        s = s.replace(MERIDIEM_RE, (m0, m1) => m1.toLocaleLowerCase());
    }
    else if (extendedSettings.meridiem === 'short') { // am/pm
        s = s.replace(MERIDIEM_RE, (m0, m1) => `${m1.toLocaleLowerCase()}m`);
    }
    else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
        s = s.replace(MERIDIEM_RE, (m0) => m0.toLocaleLowerCase());
    }
    s = s.replace(MULTI_SPACE_RE, ' ');
    s = s.trim();
    return s;
}
function injectTzoStr(s, tzoStr) {
    let replaced = false;
    s = s.replace(UTC_RE, () => {
        replaced = true;
        return tzoStr;
    });
    // IE11 doesn't include UTC/GMT in the original string, so append to end
    if (!replaced) {
        s += ` ${tzoStr}`;
    }
    return s;
}
function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
    let parts = [];
    if (display === 'long') {
        parts.push(weekTextLong);
    }
    else if (display === 'short' || display === 'narrow') {
        parts.push(weekText);
    }
    if (display === 'long' || display === 'short') {
        parts.push(' ');
    }
    parts.push(locale.simpleNumberFormat.format(num));
    if (locale.options.direction === 'rtl') { // TODO: use control characters instead?
        parts.reverse();
    }
    return parts.join('');
}
// Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger
function computeMarkerDiffSeverity(d0, d1, ca) {
    if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
        return 5;
    }
    if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
        return 4;
    }
    if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
        return 2;
    }
    if (timeAsMs(d0) !== timeAsMs(d1)) {
        return 1;
    }
    return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
    let partialOptions = {};
    for (let name in options) {
        if (!(name in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
            STANDARD_DATE_PROP_SEVERITIES[name] <= biggestUnit) {
            partialOptions[name] = options[name];
        }
    }
    return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
    let i0 = 0;
    while (i0 < full0.length) {
        let found0 = full0.indexOf(partial0, i0);
        if (found0 === -1) {
            break;
        }
        let before0 = full0.substr(0, found0);
        i0 = found0 + partial0.length;
        let after0 = full0.substr(i0);
        let i1 = 0;
        while (i1 < full1.length) {
            let found1 = full1.indexOf(partial1, i1);
            if (found1 === -1) {
                break;
            }
            let before1 = full1.substr(0, found1);
            i1 = found1 + partial1.length;
            let after1 = full1.substr(i1);
            if (before0 === before1 && after0 === after1) {
                return {
                    before: before0,
                    after: after0,
                };
            }
        }
    }
    return null;
}

function expandZonedMarker(dateInfo, calendarSystem) {
    let a = calendarSystem.markerToArray(dateInfo.marker);
    return {
        marker: dateInfo.marker,
        timeZoneOffset: dateInfo.timeZoneOffset,
        array: a,
        year: a[0],
        month: a[1],
        day: a[2],
        hour: a[3],
        minute: a[4],
        second: a[5],
        millisecond: a[6],
    };
}

function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
    let startInfo = expandZonedMarker(start, context.calendarSystem);
    let endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
    return {
        date: startInfo,
        start: startInfo,
        end: endInfo,
        timeZone: context.timeZone,
        localeCodes: context.locale.codes,
        defaultSeparator: betterDefaultSeparator || context.defaultSeparator,
    };
}

/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/
/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/
class CmdFormatter {
    constructor(cmdStr) {
        this.cmdStr = cmdStr;
    }
    format(date, context, betterDefaultSeparator) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    }
    formatRange(start, end, context, betterDefaultSeparator) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    }
}

class FuncFormatter {
    constructor(func) {
        this.func = func;
    }
    format(date, context, betterDefaultSeparator) {
        return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    }
    formatRange(start, end, context, betterDefaultSeparator) {
        return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    }
}

function createFormatter(input) {
    if (typeof input === 'object' && input) { // non-null object
        return new NativeFormatter(input);
    }
    if (typeof input === 'string') {
        return new CmdFormatter(input);
    }
    if (typeof input === 'function') {
        return new FuncFormatter(input);
    }
    return null;
}

// base options
// ------------
const BASE_OPTION_REFINERS = {
    navLinkDayClick: identity,
    navLinkWeekClick: identity,
    duration: createDuration,
    bootstrapFontAwesome: identity,
    buttonIcons: identity,
    customButtons: identity,
    defaultAllDayEventDuration: createDuration,
    defaultTimedEventDuration: createDuration,
    nextDayThreshold: createDuration,
    scrollTime: createDuration,
    scrollTimeReset: Boolean,
    slotMinTime: createDuration,
    slotMaxTime: createDuration,
    dayPopoverFormat: createFormatter,
    slotDuration: createDuration,
    snapDuration: createDuration,
    headerToolbar: identity,
    footerToolbar: identity,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: createFormatter,
    dayHeaderClassNames: identity,
    dayHeaderContent: identity,
    dayHeaderDidMount: identity,
    dayHeaderWillUnmount: identity,
    dayCellClassNames: identity,
    dayCellContent: identity,
    dayCellDidMount: identity,
    dayCellWillUnmount: identity,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: identity,
    weekNumbers: Boolean,
    weekNumberClassNames: identity,
    weekNumberContent: identity,
    weekNumberDidMount: identity,
    weekNumberWillUnmount: identity,
    editable: Boolean,
    viewClassNames: identity,
    viewDidMount: identity,
    viewWillUnmount: identity,
    nowIndicator: Boolean,
    nowIndicatorClassNames: identity,
    nowIndicatorContent: identity,
    nowIndicatorDidMount: identity,
    nowIndicatorWillUnmount: identity,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: identity,
    locale: identity,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: identity,
    eventOrder: parseFieldSpecs,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: identity,
    contentHeight: identity,
    direction: String,
    weekNumberFormat: createFormatter,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: identity,
    initialDate: identity,
    now: identity,
    eventDataTransform: identity,
    stickyHeaderDates: identity,
    stickyFooterScrollbar: identity,
    viewHeight: identity,
    defaultAllDay: Boolean,
    eventSourceFailure: identity,
    eventSourceSuccess: identity,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: identity,
    eventConstraint: identity,
    eventAllow: identity,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: identity,
    eventContent: identity,
    eventDidMount: identity,
    eventWillUnmount: identity,
    selectConstraint: identity,
    selectOverlap: identity,
    selectAllow: identity,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: identity,
    slotLaneClassNames: identity,
    slotLaneContent: identity,
    slotLaneDidMount: identity,
    slotLaneWillUnmount: identity,
    slotLabelClassNames: identity,
    slotLabelContent: identity,
    slotLabelDidMount: identity,
    slotLabelWillUnmount: identity,
    dayMaxEvents: identity,
    dayMaxEventRows: identity,
    dayMinWidth: Number,
    slotLabelInterval: createDuration,
    allDayText: String,
    allDayClassNames: identity,
    allDayContent: identity,
    allDayDidMount: identity,
    allDayWillUnmount: identity,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: createFormatter,
    rerenderDelay: Number,
    moreLinkText: identity,
    moreLinkHint: identity,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: identity,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: createDuration,
    hiddenDays: identity,
    fixedWeekCount: Boolean,
    validRange: identity,
    visibleRange: identity,
    titleFormat: identity,
    eventInteractive: Boolean,
    // only used by list-view, but languages define the value, so we need it in base options
    noEventsText: String,
    viewHint: identity,
    navLinkHint: identity,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: identity,
    moreLinkClassNames: identity,
    moreLinkContent: identity,
    moreLinkDidMount: identity,
    moreLinkWillUnmount: identity,
    monthStartFormat: createFormatter,
    // for connectors
    // (can't be part of plugin system b/c must be provided at runtime)
    handleCustomRendering: identity,
    customRenderingMetaMap: identity,
    customRenderingReplaces: Boolean,
};
// do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.
const BASE_OPTION_DEFAULTS = {
    eventDisplay: 'auto',
    defaultRangeSeparator: ' - ',
    titleRangeSeparator: ' \u2013 ',
    defaultTimedEventDuration: '01:00:00',
    defaultAllDayEventDuration: { day: 1 },
    forceEventDuration: false,
    nextDayThreshold: '00:00:00',
    dayHeaders: true,
    initialView: '',
    aspectRatio: 1.35,
    headerToolbar: {
        start: 'title',
        center: '',
        end: 'today prev,next',
    },
    weekends: true,
    weekNumbers: false,
    weekNumberCalculation: 'local',
    editable: false,
    nowIndicator: false,
    scrollTime: '06:00:00',
    scrollTimeReset: true,
    slotMinTime: '00:00:00',
    slotMaxTime: '24:00:00',
    showNonCurrentDates: true,
    lazyFetching: true,
    startParam: 'start',
    endParam: 'end',
    timeZoneParam: 'timeZone',
    timeZone: 'local',
    locales: [],
    locale: '',
    themeSystem: 'standard',
    dragRevertDuration: 500,
    dragScroll: true,
    allDayMaintainDuration: false,
    unselectAuto: true,
    dropAccept: '*',
    eventOrder: 'start,-duration,allDay,title',
    dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1000,
    eventDragMinDistance: 5,
    expandRows: false,
    navLinks: false,
    selectable: false,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30,
    monthStartFormat: { month: 'long', day: 'numeric' },
};
// calendar listeners
// ------------------
const CALENDAR_LISTENER_REFINERS = {
    datesSet: identity,
    eventsSet: identity,
    eventAdd: identity,
    eventChange: identity,
    eventRemove: identity,
    windowResize: identity,
    eventClick: identity,
    eventMouseEnter: identity,
    eventMouseLeave: identity,
    select: identity,
    unselect: identity,
    loading: identity,
    // internal
    _unmount: identity,
    _beforeprint: identity,
    _afterprint: identity,
    _noEventDrop: identity,
    _noEventResize: identity,
    _resize: identity,
    _scrollRequest: identity,
};
// calendar-specific options
// -------------------------
const CALENDAR_OPTION_REFINERS = {
    buttonText: identity,
    buttonHints: identity,
    views: identity,
    plugins: identity,
    initialEvents: identity,
    events: identity,
    eventSources: identity,
};
const COMPLEX_OPTION_COMPARATORS = {
    headerToolbar: isMaybeObjectsEqual,
    footerToolbar: isMaybeObjectsEqual,
    buttonText: isMaybeObjectsEqual,
    buttonHints: isMaybeObjectsEqual,
    buttonIcons: isMaybeObjectsEqual,
    dateIncrement: isMaybeObjectsEqual,
    plugins: isMaybeArraysEqual,
    events: isMaybeArraysEqual,
    eventSources: isMaybeArraysEqual,
    ['resources']: isMaybeArraysEqual,
};
function isMaybeObjectsEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object' && a && b) { // both non-null objects
        return isPropsEqual(a, b);
    }
    return a === b;
}
function isMaybeArraysEqual(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        return isArraysEqual(a, b);
    }
    return a === b;
}
// view-specific options
// ---------------------
const VIEW_OPTION_REFINERS = {
    type: String,
    component: identity,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: identity,
    usesMinMaxTime: Boolean,
    classNames: identity,
    content: identity,
    didMount: identity,
    willUnmount: identity,
};
// util funcs
// ----------------------------------------------------------------------------------------------------
function mergeRawOptions(optionSets) {
    return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}
function refineProps(input, refiners) {
    let refined = {};
    let extra = {};
    for (let propName in refiners) {
        if (propName in input) {
            refined[propName] = refiners[propName](input[propName]);
        }
    }
    for (let propName in input) {
        if (!(propName in refiners)) {
            extra[propName] = input[propName];
        }
    }
    return { refined, extra };
}
function identity(raw) {
    return raw;
}

const { hasOwnProperty } = Object.prototype;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexPropsMap) {
    let dest = {};
    if (complexPropsMap) {
        for (let name in complexPropsMap) {
            if (complexPropsMap[name] === isMaybeObjectsEqual) { // implies that it's object-mergeable
                let complexObjs = [];
                // collect the trailing object values, stopping when a non-object is discovered
                for (let i = propObjs.length - 1; i >= 0; i -= 1) {
                    let val = propObjs[i][name];
                    if (typeof val === 'object' && val) { // non-null object
                        complexObjs.unshift(val);
                    }
                    else if (val !== undefined) {
                        dest[name] = val; // if there were no objects, this value will be used
                        break;
                    }
                }
                // if the trailing values were objects, use the merged value
                if (complexObjs.length) {
                    dest[name] = mergeProps(complexObjs);
                }
            }
        }
    }
    // copy values into the destination, going from last to first
    for (let i = propObjs.length - 1; i >= 0; i -= 1) {
        let props = propObjs[i];
        for (let name in props) {
            if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
                dest[name] = props[name];
            }
        }
    }
    return dest;
}
function filterHash(hash, func) {
    let filtered = {};
    for (let key in hash) {
        if (func(hash[key], key)) {
            filtered[key] = hash[key];
        }
    }
    return filtered;
}
function mapHash(hash, func) {
    let newHash = {};
    for (let key in hash) {
        newHash[key] = func(hash[key], key);
    }
    return newHash;
}
function arrayToHash(a) {
    let hash = {};
    for (let item of a) {
        hash[item] = true;
    }
    return hash;
}
// TODO: reassess browser support
// https://caniuse.com/?search=object.values
function hashValuesToArray(obj) {
    let a = [];
    for (let key in obj) {
        a.push(obj[key]);
    }
    return a;
}
function isPropsEqual(obj0, obj1) {
    if (obj0 === obj1) {
        return true;
    }
    for (let key in obj0) {
        if (hasOwnProperty.call(obj0, key)) {
            if (!(key in obj1)) {
                return false;
            }
        }
    }
    for (let key in obj1) {
        if (hasOwnProperty.call(obj1, key)) {
            if (obj0[key] !== obj1[key]) {
                return false;
            }
        }
    }
    return true;
}
const HANDLER_RE = /^on[A-Z]/;
function isNonHandlerPropsEqual(obj0, obj1) {
    const keys = getUnequalProps(obj0, obj1);
    for (let key of keys) {
        if (!HANDLER_RE.test(key)) {
            return false;
        }
    }
    return true;
}
function getUnequalProps(obj0, obj1) {
    let keys = [];
    for (let key in obj0) {
        if (hasOwnProperty.call(obj0, key)) {
            if (!(key in obj1)) {
                keys.push(key);
            }
        }
    }
    for (let key in obj1) {
        if (hasOwnProperty.call(obj1, key)) {
            if (obj0[key] !== obj1[key]) {
                keys.push(key);
            }
        }
    }
    return keys;
}
function compareObjs(oldProps, newProps, equalityFuncs = {}) {
    if (oldProps === newProps) {
        return true;
    }
    for (let key in newProps) {
        if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;
        else {
            return false;
        }
    }
    // check for props that were omitted in the new
    for (let key in oldProps) {
        if (!(key in newProps)) {
            return false;
        }
    }
    return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/
function isObjValsEqual(val0, val1, comparator) {
    if (val0 === val1 || comparator === true) {
        return true;
    }
    if (comparator) {
        return comparator(val0, val1);
    }
    return false;
}
function collectFromHash(hash, startIndex = 0, endIndex, step = 1) {
    let res = [];
    if (endIndex == null) {
        endIndex = Object.keys(hash).length;
    }
    for (let i = startIndex; i < endIndex; i += step) {
        let val = hash[i];
        if (val !== undefined) { // will disregard undefined for sparse arrays
            res.push(val);
        }
    }
    return res;
}

let calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
    calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
    return new calendarSystemClassMap[name]();
}
class GregorianCalendarSystem {
    getMarkerYear(d) {
        return d.getUTCFullYear();
    }
    getMarkerMonth(d) {
        return d.getUTCMonth();
    }
    getMarkerDay(d) {
        return d.getUTCDate();
    }
    arrayToMarker(arr) {
        return arrayToUtcDate(arr);
    }
    markerToArray(marker) {
        return dateToUtcArray(marker);
    }
}
registerCalendarSystem('gregory', GregorianCalendarSystem);

const ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
    let m = ISO_RE.exec(str);
    if (m) {
        let marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number(`0.${m[12]}`) * 1000 : 0));
        if (isValidDate(marker)) {
            let timeZoneOffset = null;
            if (m[13]) {
                timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                    Number(m[18] || 0));
            }
            return {
                marker,
                isTimeUnspecified: !m[6],
                timeZoneOffset,
            };
        }
    }
    return null;
}

class DateEnv {
    constructor(settings) {
        let timeZone = this.timeZone = settings.timeZone;
        let isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
        if (settings.namedTimeZoneImpl && isNamedTimeZone) {
            this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
        }
        this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
        this.calendarSystem = createCalendarSystem(settings.calendarSystem);
        this.locale = settings.locale;
        this.weekDow = settings.locale.week.dow;
        this.weekDoy = settings.locale.week.doy;
        if (settings.weekNumberCalculation === 'ISO') {
            this.weekDow = 1;
            this.weekDoy = 4;
        }
        if (typeof settings.firstDay === 'number') {
            this.weekDow = settings.firstDay;
        }
        if (typeof settings.weekNumberCalculation === 'function') {
            this.weekNumberFunc = settings.weekNumberCalculation;
        }
        this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
        this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
        this.cmdFormatter = settings.cmdFormatter;
        this.defaultSeparator = settings.defaultSeparator;
    }
    // Creating / Parsing
    createMarker(input) {
        let meta = this.createMarkerMeta(input);
        if (meta === null) {
            return null;
        }
        return meta.marker;
    }
    createNowMarker() {
        if (this.canComputeOffset) {
            return this.timestampToMarker(new Date().valueOf());
        }
        // if we can't compute the current date val for a timezone,
        // better to give the current local date vals than UTC
        return arrayToUtcDate(dateToLocalArray(new Date()));
    }
    createMarkerMeta(input) {
        if (typeof input === 'string') {
            return this.parse(input);
        }
        let marker = null;
        if (typeof input === 'number') {
            marker = this.timestampToMarker(input);
        }
        else if (input instanceof Date) {
            input = input.valueOf();
            if (!isNaN(input)) {
                marker = this.timestampToMarker(input);
            }
        }
        else if (Array.isArray(input)) {
            marker = arrayToUtcDate(input);
        }
        if (marker === null || !isValidDate(marker)) {
            return null;
        }
        return { marker, isTimeUnspecified: false, forcedTzo: null };
    }
    parse(s) {
        let parts = parse(s);
        if (parts === null) {
            return null;
        }
        let { marker } = parts;
        let forcedTzo = null;
        if (parts.timeZoneOffset !== null) {
            if (this.canComputeOffset) {
                marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
            }
            else {
                forcedTzo = parts.timeZoneOffset;
            }
        }
        return { marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo };
    }
    // Accessors
    getYear(marker) {
        return this.calendarSystem.getMarkerYear(marker);
    }
    getMonth(marker) {
        return this.calendarSystem.getMarkerMonth(marker);
    }
    getDay(marker) {
        return this.calendarSystem.getMarkerDay(marker);
    }
    // Adding / Subtracting
    add(marker, dur) {
        let a = this.calendarSystem.markerToArray(marker);
        a[0] += dur.years;
        a[1] += dur.months;
        a[2] += dur.days;
        a[6] += dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    }
    subtract(marker, dur) {
        let a = this.calendarSystem.markerToArray(marker);
        a[0] -= dur.years;
        a[1] -= dur.months;
        a[2] -= dur.days;
        a[6] -= dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    }
    addYears(marker, n) {
        let a = this.calendarSystem.markerToArray(marker);
        a[0] += n;
        return this.calendarSystem.arrayToMarker(a);
    }
    addMonths(marker, n) {
        let a = this.calendarSystem.markerToArray(marker);
        a[1] += n;
        return this.calendarSystem.arrayToMarker(a);
    }
    // Diffing Whole Units
    diffWholeYears(m0, m1) {
        let { calendarSystem } = this;
        if (timeAsMs(m0) === timeAsMs(m1) &&
            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
            calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
            return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
        }
        return null;
    }
    diffWholeMonths(m0, m1) {
        let { calendarSystem } = this;
        if (timeAsMs(m0) === timeAsMs(m1) &&
            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
            return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
        }
        return null;
    }
    // Range / Duration
    greatestWholeUnit(m0, m1) {
        let n = this.diffWholeYears(m0, m1);
        if (n !== null) {
            return { unit: 'year', value: n };
        }
        n = this.diffWholeMonths(m0, m1);
        if (n !== null) {
            return { unit: 'month', value: n };
        }
        n = diffWholeWeeks(m0, m1);
        if (n !== null) {
            return { unit: 'week', value: n };
        }
        n = diffWholeDays(m0, m1);
        if (n !== null) {
            return { unit: 'day', value: n };
        }
        n = diffHours(m0, m1);
        if (isInt(n)) {
            return { unit: 'hour', value: n };
        }
        n = diffMinutes(m0, m1);
        if (isInt(n)) {
            return { unit: 'minute', value: n };
        }
        n = diffSeconds(m0, m1);
        if (isInt(n)) {
            return { unit: 'second', value: n };
        }
        return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
    }
    countDurationsBetween(m0, m1, d) {
        // TODO: can use greatestWholeUnit
        let diff;
        if (d.years) {
            diff = this.diffWholeYears(m0, m1);
            if (diff !== null) {
                return diff / asRoughYears(d);
            }
        }
        if (d.months) {
            diff = this.diffWholeMonths(m0, m1);
            if (diff !== null) {
                return diff / asRoughMonths(d);
            }
        }
        if (d.days) {
            diff = diffWholeDays(m0, m1);
            if (diff !== null) {
                return diff / asRoughDays(d);
            }
        }
        return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
    }
    // Start-Of
    // these DON'T return zoned-dates. only UTC start-of dates
    startOf(m, unit) {
        if (unit === 'year') {
            return this.startOfYear(m);
        }
        if (unit === 'month') {
            return this.startOfMonth(m);
        }
        if (unit === 'week') {
            return this.startOfWeek(m);
        }
        if (unit === 'day') {
            return startOfDay(m);
        }
        if (unit === 'hour') {
            return startOfHour(m);
        }
        if (unit === 'minute') {
            return startOfMinute(m);
        }
        if (unit === 'second') {
            return startOfSecond(m);
        }
        return null;
    }
    startOfYear(m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
        ]);
    }
    startOfMonth(m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m),
        ]);
    }
    startOfWeek(m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m),
            m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7),
        ]);
    }
    // Week Number
    computeWeekNumber(marker) {
        if (this.weekNumberFunc) {
            return this.weekNumberFunc(this.toDate(marker));
        }
        return weekOfYear(marker, this.weekDow, this.weekDoy);
    }
    // TODO: choke on timeZoneName: long
    format(marker, formatter, dateOptions = {}) {
        return formatter.format({
            marker,
            timeZoneOffset: dateOptions.forcedTzo != null ?
                dateOptions.forcedTzo :
                this.offsetForMarker(marker),
        }, this);
    }
    formatRange(start, end, formatter, dateOptions = {}) {
        if (dateOptions.isEndExclusive) {
            end = addMs(end, -1);
        }
        return formatter.formatRange({
            marker: start,
            timeZoneOffset: dateOptions.forcedStartTzo != null ?
                dateOptions.forcedStartTzo :
                this.offsetForMarker(start),
        }, {
            marker: end,
            timeZoneOffset: dateOptions.forcedEndTzo != null ?
                dateOptions.forcedEndTzo :
                this.offsetForMarker(end),
        }, this, dateOptions.defaultSeparator);
    }
    /*
    DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
    might as well use buildIsoString or some other util directly
    */
    formatIso(marker, extraOptions = {}) {
        let timeZoneOffset = null;
        if (!extraOptions.omitTimeZoneOffset) {
            if (extraOptions.forcedTzo != null) {
                timeZoneOffset = extraOptions.forcedTzo;
            }
            else {
                timeZoneOffset = this.offsetForMarker(marker);
            }
        }
        return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
    }
    // TimeZone
    timestampToMarker(ms) {
        if (this.timeZone === 'local') {
            return arrayToUtcDate(dateToLocalArray(new Date(ms)));
        }
        if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
            return new Date(ms);
        }
        return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
    }
    offsetForMarker(m) {
        if (this.timeZone === 'local') {
            return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
        }
        if (this.timeZone === 'UTC') {
            return 0;
        }
        if (this.namedTimeZoneImpl) {
            return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
        }
        return null;
    }
    // Conversion
    toDate(m, forcedTzo) {
        if (this.timeZone === 'local') {
            return arrayToLocalDate(dateToUtcArray(m));
        }
        if (this.timeZone === 'UTC') {
            return new Date(m.valueOf()); // make sure it's a copy
        }
        if (!this.namedTimeZoneImpl) {
            return new Date(m.valueOf() - (forcedTzo || 0));
        }
        return new Date(m.valueOf() -
            this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
    }
}

class Theme {
    constructor(calendarOptions) {
        if (this.iconOverrideOption) {
            this.setIconOverride(calendarOptions[this.iconOverrideOption]);
        }
    }
    setIconOverride(iconOverrideHash) {
        let iconClassesCopy;
        let buttonName;
        if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
            iconClassesCopy = Object.assign({}, this.iconClasses);
            for (buttonName in iconOverrideHash) {
                iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
            }
            this.iconClasses = iconClassesCopy;
        }
        else if (iconOverrideHash === false) {
            this.iconClasses = {};
        }
    }
    applyIconOverridePrefix(className) {
        let prefix = this.iconOverridePrefix;
        if (prefix && className.indexOf(prefix) !== 0) { // if not already present
            className = prefix + className;
        }
        return className;
    }
    getClass(key) {
        return this.classes[key] || '';
    }
    getIconClass(buttonName, isRtl) {
        let className;
        if (isRtl && this.rtlIconClasses) {
            className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
        }
        else {
            className = this.iconClasses[buttonName];
        }
        if (className) {
            return `${this.baseIconClass} ${className}`;
        }
        return '';
    }
    getCustomButtonIconClass(customButtonProps) {
        let className;
        if (this.iconOverrideCustomButtonOption) {
            className = customButtonProps[this.iconOverrideCustomButtonOption];
            if (className) {
                return `${this.baseIconClass} ${this.applyIconOverridePrefix(className)}`;
            }
        }
        return '';
    }
}
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

/*
NOTE: this can be a public API, especially createElement for hooks.
See examples/typescript-scheduler/src/index.ts
*/
function flushSync(runBeforeFlush) {
    runBeforeFlush();
    let oldDebounceRendering = l$1.debounceRendering; // orig
    let callbackQ = [];
    function execCallbackSync(callback) {
        callbackQ.push(callback);
    }
    l$1.debounceRendering = execCallbackSync;
    D$1(y(FakeComponent, {}), document.createElement('div'));
    while (callbackQ.length) {
        callbackQ.shift()();
    }
    l$1.debounceRendering = oldDebounceRendering;
}
class FakeComponent extends x$1 {
    render() { return y('div', {}); }
    componentDidMount() { this.setState({}); }
}
// TODO: use preact/compat instead?
function createContext(defaultValue) {
    let ContextType = G$1(defaultValue);
    let origProvider = ContextType.Provider;
    ContextType.Provider = function () {
        let isNew = !this.getChildContext;
        let children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params
        if (isNew) {
            let subs = [];
            this.shouldComponentUpdate = (_props) => {
                if (this.props.value !== _props.value) {
                    subs.forEach((c) => {
                        c.context = _props.value;
                        c.forceUpdate();
                    });
                }
            };
            this.sub = (c) => {
                subs.push(c);
                let old = c.componentWillUnmount;
                c.componentWillUnmount = () => {
                    subs.splice(subs.indexOf(c), 1);
                    old && old.call(c);
                };
            };
        }
        return children;
    };
    return ContextType;
}

class ScrollResponder {
    constructor(execFunc, emitter, scrollTime, scrollTimeReset) {
        this.execFunc = execFunc;
        this.emitter = emitter;
        this.scrollTime = scrollTime;
        this.scrollTimeReset = scrollTimeReset;
        this.handleScrollRequest = (request) => {
            this.queuedRequest = Object.assign({}, this.queuedRequest || {}, request);
            this.drain();
        };
        emitter.on('_scrollRequest', this.handleScrollRequest);
        this.fireInitialScroll();
    }
    detach() {
        this.emitter.off('_scrollRequest', this.handleScrollRequest);
    }
    update(isDatesNew) {
        if (isDatesNew && this.scrollTimeReset) {
            this.fireInitialScroll(); // will drain
        }
        else {
            this.drain();
        }
    }
    fireInitialScroll() {
        this.handleScrollRequest({
            time: this.scrollTime,
        });
    }
    drain() {
        if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
            this.queuedRequest = null;
        }
    }
}

const ViewContextType = createContext({}); // for Components
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
    return {
        dateEnv,
        options: viewOptions,
        pluginHooks,
        emitter,
        dispatch,
        getCurrentData,
        calendarApi,
        viewSpec,
        viewApi,
        dateProfileGenerator,
        theme,
        isRtl: viewOptions.direction === 'rtl',
        addResizeHandler(handler) {
            emitter.on('_resize', handler);
        },
        removeResizeHandler(handler) {
            emitter.off('_resize', handler);
        },
        createScrollResponder(execFunc) {
            return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
        },
        registerInteractiveComponent,
        unregisterInteractiveComponent,
    };
}

/* eslint max-classes-per-file: off */
class PureComponent extends x$1 {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.debug) {
            // eslint-disable-next-line no-console
            console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
        }
        return !compareObjs(this.props, nextProps, this.propEquality) ||
            !compareObjs(this.state, nextState, this.stateEquality);
    }
    // HACK for freakin' React StrictMode
    safeSetState(newState) {
        if (!compareObjs(this.state, Object.assign(Object.assign({}, this.state), newState), this.stateEquality)) {
            this.setState(newState);
        }
    }
}
PureComponent.addPropsEquality = addPropsEquality;
PureComponent.addStateEquality = addStateEquality;
PureComponent.contextType = ViewContextType;
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};
class BaseComponent extends PureComponent {
}
BaseComponent.contextType = ViewContextType;
function addPropsEquality(propEquality) {
    let hash = Object.create(this.prototype.propEquality);
    Object.assign(hash, propEquality);
    this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
    let hash = Object.create(this.prototype.stateEquality);
    Object.assign(hash, stateEquality);
    this.prototype.stateEquality = hash;
}
// use other one
function setRef(ref, current) {
    if (typeof ref === 'function') {
        ref(current);
    }
    else if (ref) {
        // see https://github.com/facebook/react/issues/13029
        ref.current = current;
    }
}

class ContentInjector extends BaseComponent {
    constructor() {
        super(...arguments);
        this.id = guid();
        this.queuedDomNodes = [];
        this.currentDomNodes = [];
        this.handleEl = (el) => {
            const { options } = this.context;
            const { generatorName } = this.props;
            if (!options.customRenderingReplaces || !hasCustomRenderingHandler(generatorName, options)) {
                this.updateElRef(el);
            }
        };
        this.updateElRef = (el) => {
            if (this.props.elRef) {
                setRef(this.props.elRef, el);
            }
        };
    }
    render() {
        const { props, context } = this;
        const { options } = context;
        const { customGenerator, defaultGenerator, renderProps } = props;
        const attrs = buildElAttrs(props, [], this.handleEl);
        let useDefault = false;
        let innerContent;
        let queuedDomNodes = [];
        let currentGeneratorMeta;
        if (customGenerator != null) {
            const customGeneratorRes = typeof customGenerator === 'function' ?
                customGenerator(renderProps, y) :
                customGenerator;
            if (customGeneratorRes === true) {
                useDefault = true;
            }
            else {
                const isObject = customGeneratorRes && typeof customGeneratorRes === 'object'; // non-null
                if (isObject && ('html' in customGeneratorRes)) {
                    attrs.dangerouslySetInnerHTML = { __html: customGeneratorRes.html };
                }
                else if (isObject && ('domNodes' in customGeneratorRes)) {
                    queuedDomNodes = Array.prototype.slice.call(customGeneratorRes.domNodes);
                }
                else if (isObject
                    ? i$1(customGeneratorRes) // vdom node
                    : typeof customGeneratorRes !== 'function' // primitive value (like string or number)
                ) {
                    // use in vdom
                    innerContent = customGeneratorRes;
                }
                else {
                    // an exotic object for handleCustomRendering
                    currentGeneratorMeta = customGeneratorRes;
                }
            }
        }
        else {
            useDefault = !hasCustomRenderingHandler(props.generatorName, options);
        }
        if (useDefault && defaultGenerator) {
            innerContent = defaultGenerator(renderProps);
        }
        this.queuedDomNodes = queuedDomNodes;
        this.currentGeneratorMeta = currentGeneratorMeta;
        return y(props.elTag, attrs, innerContent);
    }
    componentDidMount() {
        this.applyQueueudDomNodes();
        this.triggerCustomRendering(true);
    }
    componentDidUpdate() {
        this.applyQueueudDomNodes();
        this.triggerCustomRendering(true);
    }
    componentWillUnmount() {
        this.triggerCustomRendering(false); // TODO: different API for removal?
    }
    triggerCustomRendering(isActive) {
        var _a;
        const { props, context } = this;
        const { handleCustomRendering, customRenderingMetaMap } = context.options;
        if (handleCustomRendering) {
            const generatorMeta = (_a = this.currentGeneratorMeta) !== null && _a !== void 0 ? _a : customRenderingMetaMap === null || customRenderingMetaMap === void 0 ? void 0 : customRenderingMetaMap[props.generatorName];
            if (generatorMeta) {
                handleCustomRendering(Object.assign(Object.assign({ id: this.id, isActive, containerEl: this.base, reportNewContainerEl: this.updateElRef, // front-end framework tells us about new container els
                    generatorMeta }, props), { elClasses: (props.elClasses || []).filter(isTruthy) }));
            }
        }
    }
    applyQueueudDomNodes() {
        const { queuedDomNodes, currentDomNodes } = this;
        const el = this.base;
        if (!isArraysEqual(queuedDomNodes, currentDomNodes)) {
            currentDomNodes.forEach(removeElement);
            for (let newNode of queuedDomNodes) {
                el.appendChild(newNode);
            }
            this.currentDomNodes = queuedDomNodes;
        }
    }
}
ContentInjector.addPropsEquality({
    elClasses: isArraysEqual,
    elStyle: isPropsEqual,
    elAttrs: isNonHandlerPropsEqual,
    renderProps: isPropsEqual,
});
// Util
/*
Does UI-framework provide custom way of rendering that does not use Preact VDOM
AND does the calendar's options define custom rendering?
AKA. Should we NOT render the default content?
*/
function hasCustomRenderingHandler(generatorName, options) {
    var _a;
    return Boolean(options.handleCustomRendering &&
        generatorName &&
        ((_a = options.customRenderingMetaMap) === null || _a === void 0 ? void 0 : _a[generatorName]));
}
function buildElAttrs(props, extraClassNames, elRef) {
    const attrs = Object.assign(Object.assign({}, props.elAttrs), { ref: elRef });
    if (props.elClasses || extraClassNames) {
        attrs.className = (props.elClasses || [])
            .concat(extraClassNames || [])
            .concat(attrs.className || [])
            .filter(Boolean)
            .join(' ');
    }
    if (props.elStyle) {
        attrs.style = props.elStyle;
    }
    return attrs;
}
function isTruthy(val) {
    return Boolean(val);
}

const RenderId = createContext(0);

class ContentContainer extends x$1 {
    constructor() {
        super(...arguments);
        this.InnerContent = InnerContentInjector.bind(undefined, this);
        this.handleEl = (el) => {
            this.el = el;
            if (this.props.elRef) {
                setRef(this.props.elRef, el);
                if (el && this.didMountMisfire) {
                    this.componentDidMount();
                }
            }
        };
    }
    render() {
        const { props } = this;
        const generatedClassNames = generateClassNames(props.classNameGenerator, props.renderProps);
        if (props.children) {
            const elAttrs = buildElAttrs(props, generatedClassNames, this.handleEl);
            const children = props.children(this.InnerContent, props.renderProps, elAttrs);
            if (props.elTag) {
                return y(props.elTag, elAttrs, children);
            }
            else {
                return children;
            }
        }
        else {
            return y((ContentInjector), Object.assign(Object.assign({}, props), { elRef: this.handleEl, elTag: props.elTag || 'div', elClasses: (props.elClasses || []).concat(generatedClassNames), renderId: this.context }));
        }
    }
    componentDidMount() {
        var _a, _b;
        if (this.el) {
            (_b = (_a = this.props).didMount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
        }
        else {
            this.didMountMisfire = true;
        }
    }
    componentWillUnmount() {
        var _a, _b;
        (_b = (_a = this.props).willUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
    }
}
ContentContainer.contextType = RenderId;
function InnerContentInjector(containerComponent, props) {
    const parentProps = containerComponent.props;
    return y((ContentInjector), Object.assign({ renderProps: parentProps.renderProps, generatorName: parentProps.generatorName, customGenerator: parentProps.customGenerator, defaultGenerator: parentProps.defaultGenerator, renderId: containerComponent.context }, props));
}
// Utils
function generateClassNames(classNameGenerator, renderProps) {
    const classNames = typeof classNameGenerator === 'function' ?
        classNameGenerator(renderProps) :
        classNameGenerator || [];
    return typeof classNames === 'string' ? [classNames] : classNames;
}

class ViewContainer extends BaseComponent {
    render() {
        let { props, context } = this;
        let { options } = context;
        let renderProps = { view: context.viewApi };
        return (y(ContentContainer, Object.assign({}, props, { elTag: props.elTag || 'div', elClasses: [
                ...buildViewClassNames(props.viewSpec),
                ...(props.elClasses || []),
            ], renderProps: renderProps, classNameGenerator: options.viewClassNames, generatorName: undefined, didMount: options.viewDidMount, willUnmount: options.viewWillUnmount }), () => props.children));
    }
}
function buildViewClassNames(viewSpec) {
    return [
        `fc-${viewSpec.type}-view`,
        'fc-view',
    ];
}

function parseRange(input, dateEnv) {
    let start = null;
    let end = null;
    if (input.start) {
        start = dateEnv.createMarker(input.start);
    }
    if (input.end) {
        end = dateEnv.createMarker(input.end);
    }
    if (!start && !end) {
        return null;
    }
    if (start && end && end < start) {
        return null;
    }
    return { start, end };
}
// SIDE-EFFECT: will mutate ranges.
// Will return a new array result.
function invertRanges(ranges, constraintRange) {
    let invertedRanges = [];
    let { start } = constraintRange; // the end of the previous range. the start of the new range
    let i;
    let dateRange;
    // ranges need to be in order. required for our date-walking algorithm
    ranges.sort(compareRanges);
    for (i = 0; i < ranges.length; i += 1) {
        dateRange = ranges[i];
        // add the span of time before the event (if there is any)
        if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
            invertedRanges.push({ start, end: dateRange.start });
        }
        if (dateRange.end > start) {
            start = dateRange.end;
        }
    }
    // add the span of time after the last event (if there is any)
    if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
        invertedRanges.push({ start, end: constraintRange.end });
    }
    return invertedRanges;
}
function compareRanges(range0, range1) {
    return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}
function intersectRanges(range0, range1) {
    let { start, end } = range0;
    let newRange = null;
    if (range1.start !== null) {
        if (start === null) {
            start = range1.start;
        }
        else {
            start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
        }
    }
    if (range1.end != null) {
        if (end === null) {
            end = range1.end;
        }
        else {
            end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
        }
    }
    if (start === null || end === null || start < end) {
        newRange = { start, end };
    }
    return newRange;
}
function rangesIntersect(range0, range1) {
    return (range0.end === null || range1.start === null || range0.end > range1.start) &&
        (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsMarker(range, date) {
    return (range.start === null || date >= range.start) &&
        (range.end === null || date < range.end);
}
// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
function constrainMarkerToRange(date, range) {
    if (range.start != null && date < range.start) {
        return range.start;
    }
    if (range.end != null && date >= range.end) {
        return new Date(range.end.valueOf() - 1);
    }
    return date;
}

/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.
function computeAlignedDayRange(timedRange) {
    let dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
    let start = startOfDay(timedRange.start);
    let end = addDays(start, dayCnt);
    return { start, end };
}
// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg
function computeVisibleDayRange(timedRange, nextDayThreshold = createDuration(0)) {
    let startDay = null;
    let endDay = null;
    if (timedRange.end) {
        endDay = startOfDay(timedRange.end);
        let endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
        // If the end time is actually inclusively part of the next day and is equal to or
        // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
        // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
        if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
            endDay = addDays(endDay, 1);
        }
    }
    if (timedRange.start) {
        startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
        // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
        if (endDay && endDay <= startDay) {
            endDay = addDays(startDay, 1);
        }
    }
    return { start: startDay, end: endDay };
}
// spans from one day into another?
function isMultiDayRange(range) {
    let visibleRange = computeVisibleDayRange(range);
    return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
    if (largeUnit === 'year') {
        return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
    }
    if (largeUnit === 'month') {
        return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
    }
    return diffDayAndTime(date0, date1); // returns a duration
}

function reduceCurrentDate(currentDate, action) {
    switch (action.type) {
        case 'CHANGE_DATE':
            return action.dateMarker;
        default:
            return currentDate;
    }
}
function getInitialDate(options, dateEnv) {
    let initialDateInput = options.initialDate;
    // compute the initial ambig-timezone date
    if (initialDateInput != null) {
        return dateEnv.createMarker(initialDateInput);
    }
    return getNow(options.now, dateEnv); // getNow already returns unzoned
}
function getNow(nowInput, dateEnv) {
    if (typeof nowInput === 'function') {
        nowInput = nowInput();
    }
    if (nowInput == null) {
        return dateEnv.createNowMarker();
    }
    return dateEnv.createMarker(nowInput);
}

class DateProfileGenerator {
    constructor(props) {
        this.props = props;
        this.nowDate = getNow(props.nowInput, props.dateEnv);
        this.initHiddenDays();
    }
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    buildPrev(currentDateProfile, currentDate, forceToValid) {
        let { dateEnv } = this.props;
        let prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
        currentDateProfile.dateIncrement);
        return this.build(prevDate, -1, forceToValid);
    }
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    buildNext(currentDateProfile, currentDate, forceToValid) {
        let { dateEnv } = this.props;
        let nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
        currentDateProfile.dateIncrement);
        return this.build(nextDate, 1, forceToValid);
    }
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    build(currentDate, direction, forceToValid = true) {
        let { props } = this;
        let validRange;
        let currentInfo;
        let isRangeAllDay;
        let renderRange;
        let activeRange;
        let isValid;
        validRange = this.buildValidRange();
        validRange = this.trimHiddenDays(validRange);
        if (forceToValid) {
            currentDate = constrainMarkerToRange(currentDate, validRange);
        }
        currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
        renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
        renderRange = this.trimHiddenDays(renderRange);
        activeRange = renderRange;
        if (!props.showNonCurrentDates) {
            activeRange = intersectRanges(activeRange, currentInfo.range);
        }
        activeRange = this.adjustActiveRange(activeRange);
        activeRange = intersectRanges(activeRange, validRange); // might return null
        // it's invalid if the originally requested date is not contained,
        // or if the range is completely outside of the valid range.
        isValid = rangesIntersect(currentInfo.range, validRange);
        // HACK: constrain to render-range so `currentDate` is more useful to view rendering
        if (!rangeContainsMarker(renderRange, currentDate)) {
            currentDate = renderRange.start;
        }
        return {
            currentDate,
            // constraint for where prev/next operations can go and where events can be dragged/resized to.
            // an object with optional start and end properties.
            validRange,
            // range the view is formally responsible for.
            // for example, a month view might have 1st-31st, excluding padded dates
            currentRange: currentInfo.range,
            // name of largest unit being displayed, like "month" or "week"
            currentRangeUnit: currentInfo.unit,
            isRangeAllDay,
            // dates that display events and accept drag-n-drop
            // will be `null` if no dates accept events
            activeRange,
            // date range with a rendered skeleton
            // includes not-active days that need some sort of DOM
            renderRange,
            // Duration object that denotes the first visible time of any given day
            slotMinTime: props.slotMinTime,
            // Duration object that denotes the exclusive visible end time of any given day
            slotMaxTime: props.slotMaxTime,
            isValid,
            // how far the current date will move for a prev/next operation
            dateIncrement: this.buildDateIncrement(currentInfo.duration),
            // pass a fallback (might be null) ^
        };
    }
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    buildValidRange() {
        let input = this.props.validRangeInput;
        let simpleInput = typeof input === 'function'
            ? input.call(this.props.calendarApi, this.nowDate)
            : input;
        return this.refineRange(simpleInput) ||
            { start: null, end: null }; // completely open-ended
    }
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    buildCurrentRangeInfo(date, direction) {
        let { props } = this;
        let duration = null;
        let unit = null;
        let range = null;
        let dayCount;
        if (props.duration) {
            duration = props.duration;
            unit = props.durationUnit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        else if ((dayCount = this.props.dayCount)) {
            unit = 'day';
            range = this.buildRangeFromDayCount(date, direction, dayCount);
        }
        else if ((range = this.buildCustomVisibleRange(date))) {
            unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
        }
        else {
            duration = this.getFallbackDuration();
            unit = greatestDurationDenominator(duration).unit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        return { duration, unit, range };
    }
    getFallbackDuration() {
        return createDuration({ day: 1 });
    }
    // Returns a new activeRange to have time values (un-ambiguate)
    // slotMinTime or slotMaxTime causes the range to expand.
    adjustActiveRange(range) {
        let { dateEnv, usesMinMaxTime, slotMinTime, slotMaxTime } = this.props;
        let { start, end } = range;
        if (usesMinMaxTime) {
            // expand active range if slotMinTime is negative (why not when positive?)
            if (asRoughDays(slotMinTime) < 0) {
                start = startOfDay(start); // necessary?
                start = dateEnv.add(start, slotMinTime);
            }
            // expand active range if slotMaxTime is beyond one day (why not when negative?)
            if (asRoughDays(slotMaxTime) > 1) {
                end = startOfDay(end); // necessary?
                end = addDays(end, -1);
                end = dateEnv.add(end, slotMaxTime);
            }
        }
        return { start, end };
    }
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed greatestDurationDenominator unit of duration.
    buildRangeFromDuration(date, direction, duration, unit) {
        let { dateEnv, dateAlignment } = this.props;
        let start;
        let end;
        let res;
        // compute what the alignment should be
        if (!dateAlignment) {
            let { dateIncrement } = this.props;
            if (dateIncrement) {
                // use the smaller of the two units
                if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
                    dateAlignment = greatestDurationDenominator(dateIncrement).unit;
                }
                else {
                    dateAlignment = unit;
                }
            }
            else {
                dateAlignment = unit;
            }
        }
        // if the view displays a single day or smaller
        if (asRoughDays(duration) <= 1) {
            if (this.isHiddenDay(start)) {
                start = this.skipHiddenDays(start, direction);
                start = startOfDay(start);
            }
        }
        function computeRes() {
            start = dateEnv.startOf(date, dateAlignment);
            end = dateEnv.add(start, duration);
            res = { start, end };
        }
        computeRes();
        // if range is completely enveloped by hidden days, go past the hidden days
        if (!this.trimHiddenDays(res)) {
            date = this.skipHiddenDays(date, direction);
            computeRes();
        }
        return res;
    }
    // Builds the "current" range when a dayCount is specified.
    buildRangeFromDayCount(date, direction, dayCount) {
        let { dateEnv, dateAlignment } = this.props;
        let runningCount = 0;
        let start = date;
        let end;
        if (dateAlignment) {
            start = dateEnv.startOf(start, dateAlignment);
        }
        start = startOfDay(start);
        start = this.skipHiddenDays(start, direction);
        end = start;
        do {
            end = addDays(end, 1);
            if (!this.isHiddenDay(end)) {
                runningCount += 1;
            }
        } while (runningCount < dayCount);
        return { start, end };
    }
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentRange and activeRange at the same time.
    buildCustomVisibleRange(date) {
        let { props } = this;
        let input = props.visibleRangeInput;
        let simpleInput = typeof input === 'function'
            ? input.call(props.calendarApi, props.dateEnv.toDate(date))
            : input;
        let range = this.refineRange(simpleInput);
        if (range && (range.start == null || range.end == null)) {
            return null;
        }
        return range;
    }
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
        return currentRange;
    }
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    buildDateIncrement(fallback) {
        let { dateIncrement } = this.props;
        let customAlignment;
        if (dateIncrement) {
            return dateIncrement;
        }
        if ((customAlignment = this.props.dateAlignment)) {
            return createDuration(1, customAlignment);
        }
        if (fallback) {
            return fallback;
        }
        return createDuration({ days: 1 });
    }
    refineRange(rangeInput) {
        if (rangeInput) {
            let range = parseRange(rangeInput, this.props.dateEnv);
            if (range) {
                range = computeVisibleDayRange(range);
            }
            return range;
        }
        return null;
    }
    /* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/
    // Initializes internal variables related to calculating hidden days-of-week
    initHiddenDays() {
        let hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden
        let isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
        let dayCnt = 0;
        let i;
        if (this.props.weekends === false) {
            hiddenDays.push(0, 6); // 0=sunday, 6=saturday
        }
        for (i = 0; i < 7; i += 1) {
            if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                dayCnt += 1;
            }
        }
        if (!dayCnt) {
            throw new Error('invalid hiddenDays'); // all days were hidden? bad.
        }
        this.isHiddenDayHash = isHiddenDayHash;
    }
    // Remove days from the beginning and end of the range that are computed as hidden.
    // If the whole range is trimmed off, returns null
    trimHiddenDays(range) {
        let { start, end } = range;
        if (start) {
            start = this.skipHiddenDays(start);
        }
        if (end) {
            end = this.skipHiddenDays(end, -1, true);
        }
        if (start == null || end == null || start < end) {
            return { start, end };
        }
        return null;
    }
    // Is the current day hidden?
    // `day` is a day-of-week index (0-6), or a Date (used for UTC)
    isHiddenDay(day) {
        if (day instanceof Date) {
            day = day.getUTCDay();
        }
        return this.isHiddenDayHash[day];
    }
    // Incrementing the current day until it is no longer a hidden day, returning a copy.
    // DOES NOT CONSIDER validRange!
    // If the initial value of `date` is not a hidden day, don't do anything.
    // Pass `isExclusive` as `true` if you are dealing with an end date.
    // `inc` defaults to `1` (increment one day forward each time)
    skipHiddenDays(date, inc = 1, isExclusive = false) {
        while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
            date = addDays(date, inc);
        }
        return date;
    }
}

function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
    return {
        instanceId: guid(),
        defId,
        range,
        forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
        forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo,
    };
}

function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
    for (let i = 0; i < recurringTypes.length; i += 1) {
        let parsed = recurringTypes[i].parse(refined, dateEnv);
        if (parsed) {
            let { allDay } = refined;
            if (allDay == null) {
                allDay = defaultAllDay;
                if (allDay == null) {
                    allDay = parsed.allDayGuess;
                    if (allDay == null) {
                        allDay = false;
                    }
                }
            }
            return {
                allDay,
                duration: parsed.duration,
                typeData: parsed.typeData,
                typeId: i,
            };
        }
    }
    return null;
}
function expandRecurring(eventStore, framingRange, context) {
    let { dateEnv, pluginHooks, options } = context;
    let { defs, instances } = eventStore;
    // remove existing recurring instances
    // TODO: bad. always expand events as a second step
    instances = filterHash(instances, (instance) => !defs[instance.defId].recurringDef);
    for (let defId in defs) {
        let def = defs[defId];
        if (def.recurringDef) {
            let { duration } = def.recurringDef;
            if (!duration) {
                duration = def.allDay ?
                    options.defaultAllDayEventDuration :
                    options.defaultTimedEventDuration;
            }
            let starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
            for (let start of starts) {
                let instance = createEventInstance(defId, {
                    start,
                    end: dateEnv.add(start, duration),
                });
                instances[instance.instanceId] = instance;
            }
        }
    }
    return { defs, instances };
}
/*
Event MUST have a recurringDef
*/
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
    let typeDef = recurringTypes[eventDef.recurringDef.typeId];
    let markers = typeDef.expand(eventDef.recurringDef.typeData, {
        start: dateEnv.subtract(framingRange.start, duration),
        end: framingRange.end,
    }, dateEnv);
    // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
    if (eventDef.allDay) {
        markers = markers.map(startOfDay);
    }
    return markers;
}

const EVENT_NON_DATE_REFINERS = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean,
};
const EVENT_DATE_REFINERS = {
    start: identity,
    end: identity,
    date: identity,
    allDay: Boolean,
};
const EVENT_REFINERS = Object.assign(Object.assign(Object.assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
function parseEvent(raw, eventSource, context, allowOpenRange, refiners = buildEventRefiners(context), defIdMap, instanceIdMap) {
    let { refined, extra } = refineEventDef(raw, context, refiners);
    let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
    let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
    if (recurringRes) {
        let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context, defIdMap);
        def.recurringDef = {
            typeId: recurringRes.typeId,
            typeData: recurringRes.typeData,
            duration: recurringRes.duration,
        };
        return { def, instance: null };
    }
    let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
    if (singleRes) {
        let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context, defIdMap);
        let instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
        if (instanceIdMap && def.publicId && instanceIdMap[def.publicId]) {
            instance.instanceId = instanceIdMap[def.publicId];
        }
        return { def, instance };
    }
    return null;
}
function refineEventDef(raw, context, refiners = buildEventRefiners(context)) {
    return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
    return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/
function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context, defIdMap) {
    let def = {
        title: refined.title || '',
        groupId: refined.groupId || '',
        publicId: refined.id || '',
        url: refined.url || '',
        recurringDef: null,
        defId: ((defIdMap && refined.id) ? defIdMap[refined.id] : '') || guid(),
        sourceId,
        allDay,
        hasEnd,
        interactive: refined.interactive,
        ui: createEventUi(refined, context),
        extendedProps: Object.assign(Object.assign({}, (refined.extendedProps || {})), extra),
    };
    for (let memberAdder of context.pluginHooks.eventDefMemberAdders) {
        Object.assign(def, memberAdder(refined));
    }
    // help out EventImpl from having user modify props
    Object.freeze(def.ui.classNames);
    Object.freeze(def.extendedProps);
    return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
    let { allDay } = refined;
    let startMeta;
    let startMarker = null;
    let hasEnd = false;
    let endMeta;
    let endMarker = null;
    let startInput = refined.start != null ? refined.start : refined.date;
    startMeta = context.dateEnv.createMarkerMeta(startInput);
    if (startMeta) {
        startMarker = startMeta.marker;
    }
    else if (!allowOpenRange) {
        return null;
    }
    if (refined.end != null) {
        endMeta = context.dateEnv.createMarkerMeta(refined.end);
    }
    if (allDay == null) {
        if (defaultAllDay != null) {
            allDay = defaultAllDay;
        }
        else {
            // fall back to the date props LAST
            allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                (!endMeta || endMeta.isTimeUnspecified);
        }
    }
    if (allDay && startMarker) {
        startMarker = startOfDay(startMarker);
    }
    if (endMeta) {
        endMarker = endMeta.marker;
        if (allDay) {
            endMarker = startOfDay(endMarker);
        }
        if (startMarker && endMarker <= startMarker) {
            endMarker = null;
        }
    }
    if (endMarker) {
        hasEnd = true;
    }
    else if (!allowOpenRange) {
        hasEnd = context.options.forceEventDuration || false;
        endMarker = context.dateEnv.add(startMarker, allDay ?
            context.options.defaultAllDayEventDuration :
            context.options.defaultTimedEventDuration);
    }
    return {
        allDay,
        hasEnd,
        range: { start: startMarker, end: endMarker },
        forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
        forcedEndTzo: endMeta ? endMeta.forcedTzo : null,
    };
}
function computeIsDefaultAllDay(eventSource, context) {
    let res = null;
    if (eventSource) {
        res = eventSource.defaultAllDay;
    }
    if (res == null) {
        res = context.options.defaultAllDay;
    }
    return res;
}

function parseEvents(rawEvents, eventSource, context, allowOpenRange, defIdMap, instanceIdMap) {
    let eventStore = createEmptyEventStore();
    let eventRefiners = buildEventRefiners(context);
    for (let rawEvent of rawEvents) {
        let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners, defIdMap, instanceIdMap);
        if (tuple) {
            eventTupleToStore(tuple, eventStore);
        }
    }
    return eventStore;
}
function eventTupleToStore(tuple, eventStore = createEmptyEventStore()) {
    eventStore.defs[tuple.def.defId] = tuple.def;
    if (tuple.instance) {
        eventStore.instances[tuple.instance.instanceId] = tuple.instance;
    }
    return eventStore;
}
// retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?
function getRelevantEvents(eventStore, instanceId) {
    let instance = eventStore.instances[instanceId];
    if (instance) {
        let def = eventStore.defs[instance.defId];
        // get events/instances with same group
        let newStore = filterEventStoreDefs(eventStore, (lookDef) => isEventDefsGrouped(def, lookDef));
        // add the original
        // TODO: wish we could use eventTupleToStore or something like it
        newStore.defs[def.defId] = def;
        newStore.instances[instance.instanceId] = instance;
        return newStore;
    }
    return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
    return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
    return { defs: {}, instances: {} };
}
function mergeEventStores(store0, store1) {
    return {
        defs: Object.assign(Object.assign({}, store0.defs), store1.defs),
        instances: Object.assign(Object.assign({}, store0.instances), store1.instances),
    };
}
function filterEventStoreDefs(eventStore, filterFunc) {
    let defs = filterHash(eventStore.defs, filterFunc);
    let instances = filterHash(eventStore.instances, (instance) => (defs[instance.defId] // still exists?
    ));
    return { defs, instances };
}
function excludeSubEventStore(master, sub) {
    let { defs, instances } = master;
    let filteredDefs = {};
    let filteredInstances = {};
    for (let defId in defs) {
        if (!sub.defs[defId]) { // not explicitly excluded
            filteredDefs[defId] = defs[defId];
        }
    }
    for (let instanceId in instances) {
        if (!sub.instances[instanceId] && // not explicitly excluded
            filteredDefs[instances[instanceId].defId] // def wasn't filtered away
        ) {
            filteredInstances[instanceId] = instances[instanceId];
        }
    }
    return {
        defs: filteredDefs,
        instances: filteredInstances,
    };
}

function normalizeConstraint(input, context) {
    if (Array.isArray(input)) {
        return parseEvents(input, null, context, true); // allowOpenRange=true
    }
    if (typeof input === 'object' && input) { // non-null object
        return parseEvents([input], null, context, true); // allowOpenRange=true
    }
    if (input != null) {
        return String(input);
    }
    return null;
}

function parseClassNames(raw) {
    if (Array.isArray(raw)) {
        return raw;
    }
    if (typeof raw === 'string') {
        return raw.split(/\s+/);
    }
    return [];
}

// TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props
const EVENT_UI_REFINERS = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: identity,
    overlap: identity,
    allow: identity,
    className: parseClassNames,
    classNames: parseClassNames,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String,
};
const EMPTY_EVENT_UI = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: '',
    borderColor: '',
    textColor: '',
    classNames: [],
};
function createEventUi(refined, context) {
    let constraint = normalizeConstraint(refined.constraint, context);
    return {
        display: refined.display || null,
        startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
        durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
        constraints: constraint != null ? [constraint] : [],
        overlap: refined.overlap != null ? refined.overlap : null,
        allows: refined.allow != null ? [refined.allow] : [],
        backgroundColor: refined.backgroundColor || refined.color || '',
        borderColor: refined.borderColor || refined.color || '',
        textColor: refined.textColor || '',
        classNames: (refined.className || []).concat(refined.classNames || []), // join singular and plural
    };
}
// TODO: prevent against problems with <2 args!
function combineEventUis(uis) {
    return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
    return {
        display: item1.display != null ? item1.display : item0.display,
        startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
        durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
        constraints: item0.constraints.concat(item1.constraints),
        overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
        allows: item0.allows.concat(item1.allows),
        backgroundColor: item1.backgroundColor || item0.backgroundColor,
        borderColor: item1.borderColor || item0.borderColor,
        textColor: item1.textColor || item0.textColor,
        classNames: item0.classNames.concat(item1.classNames),
    };
}

const EVENT_SOURCE_REFINERS = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: identity,
    eventDataTransform: identity,
    // for any network-related sources
    success: identity,
    failure: identity,
};
function parseEventSource(raw, context, refiners = buildEventSourceRefiners(context)) {
    let rawObj;
    if (typeof raw === 'string') {
        rawObj = { url: raw };
    }
    else if (typeof raw === 'function' || Array.isArray(raw)) {
        rawObj = { events: raw };
    }
    else if (typeof raw === 'object' && raw) { // not null
        rawObj = raw;
    }
    if (rawObj) {
        let { refined, extra } = refineProps(rawObj, refiners);
        let metaRes = buildEventSourceMeta(refined, context);
        if (metaRes) {
            return {
                _raw: raw,
                isFetching: false,
                latestFetchId: '',
                fetchRange: null,
                defaultAllDay: refined.defaultAllDay,
                eventDataTransform: refined.eventDataTransform,
                success: refined.success,
                failure: refined.failure,
                publicId: refined.id || '',
                sourceId: guid(),
                sourceDefId: metaRes.sourceDefId,
                meta: metaRes.meta,
                ui: createEventUi(refined, context),
                extendedProps: extra,
            };
        }
    }
    return null;
}
function buildEventSourceRefiners(context) {
    return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}
function buildEventSourceMeta(raw, context) {
    let defs = context.pluginHooks.eventSourceDefs;
    for (let i = defs.length - 1; i >= 0; i -= 1) { // later-added plugins take precedence
        let def = defs[i];
        let meta = def.parseMeta(raw);
        if (meta) {
            return { sourceDefId: i, meta };
        }
    }
    return null;
}

function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
    switch (action.type) {
        case 'RECEIVE_EVENTS': // raw
            return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
        case 'RESET_RAW_EVENTS':
            return resetRawEvents(eventStore, eventSources[action.sourceId], action.rawEvents, dateProfile.activeRange, context);
        case 'ADD_EVENTS': // already parsed, but not expanded
            return addEvent(eventStore, action.eventStore, // new ones
            dateProfile ? dateProfile.activeRange : null, context);
        case 'RESET_EVENTS':
            return action.eventStore;
        case 'MERGE_EVENTS': // already parsed and expanded
            return mergeEventStores(eventStore, action.eventStore);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'CHANGE_DATE':
        case 'CHANGE_VIEW_TYPE':
            if (dateProfile) {
                return expandRecurring(eventStore, dateProfile.activeRange, context);
            }
            return eventStore;
        case 'REMOVE_EVENTS':
            return excludeSubEventStore(eventStore, action.eventStore);
        case 'REMOVE_EVENT_SOURCE':
            return excludeEventsBySourceId(eventStore, action.sourceId);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return filterEventStoreDefs(eventStore, (eventDef) => (!eventDef.sourceId // only keep events with no source id
            ));
        case 'REMOVE_ALL_EVENTS':
            return createEmptyEventStore();
        default:
            return eventStore;
    }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
    if (eventSource && // not already removed
        fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
    ) {
        let subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
        if (fetchRange) {
            subset = expandRecurring(subset, fetchRange, context);
        }
        return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
    }
    return eventStore;
}
function resetRawEvents(existingEventStore, eventSource, rawEvents, activeRange, context) {
    const { defIdMap, instanceIdMap } = buildPublicIdMaps(existingEventStore);
    let newEventStore = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context, false, defIdMap, instanceIdMap);
    return expandRecurring(newEventStore, activeRange, context);
}
function transformRawEvents(rawEvents, eventSource, context) {
    let calEachTransform = context.options.eventDataTransform;
    let sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
    if (sourceEachTransform) {
        rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
    }
    if (calEachTransform) {
        rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
    }
    return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
    let refinedEvents;
    if (!func) {
        refinedEvents = rawEvents;
    }
    else {
        refinedEvents = [];
        for (let rawEvent of rawEvents) {
            let refinedEvent = func(rawEvent);
            if (refinedEvent) {
                refinedEvents.push(refinedEvent);
            }
            else if (refinedEvent == null) {
                refinedEvents.push(rawEvent);
            } // if a different falsy value, do nothing
        }
    }
    return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
    if (expandRange) {
        subset = expandRecurring(subset, expandRange, context);
    }
    return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
    let { defs } = eventStore;
    let instances = mapHash(eventStore.instances, (instance) => {
        let def = defs[instance.defId];
        if (def.allDay) {
            return instance; // isn't dependent on timezone
        }
        return Object.assign(Object.assign({}, instance), { range: {
                start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo)),
            }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
    });
    return { defs, instances };
}
function excludeEventsBySourceId(eventStore, sourceId) {
    return filterEventStoreDefs(eventStore, (eventDef) => eventDef.sourceId !== sourceId);
}
function buildPublicIdMaps(eventStore) {
    const { defs, instances } = eventStore;
    const defIdMap = {};
    const instanceIdMap = {};
    for (let defId in defs) {
        const def = defs[defId];
        const { publicId } = def;
        if (publicId) {
            defIdMap[publicId] = defId;
        }
    }
    for (let instanceId in instances) {
        const instance = instances[instanceId];
        const def = defs[instance.defId];
        const { publicId } = def;
        if (publicId) {
            instanceIdMap[publicId] = instanceId;
        }
    }
    return { defIdMap, instanceIdMap };
}

class Emitter {
    constructor() {
        this.handlers = {};
        this.thisContext = null;
    }
    setThisContext(thisContext) {
        this.thisContext = thisContext;
    }
    setOptions(options) {
        this.options = options;
    }
    on(type, handler) {
        addToHash(this.handlers, type, handler);
    }
    off(type, handler) {
        removeFromHash(this.handlers, type, handler);
    }
    trigger(type, ...args) {
        let attachedHandlers = this.handlers[type] || [];
        let optionHandler = this.options && this.options[type];
        let handlers = [].concat(optionHandler || [], attachedHandlers);
        for (let handler of handlers) {
            handler.apply(this.thisContext, args);
        }
    }
    hasHandlers(type) {
        return Boolean((this.handlers[type] && this.handlers[type].length) ||
            (this.options && this.options[type]));
    }
}
function addToHash(hash, type, handler) {
    (hash[type] || (hash[type] = []))
        .push(handler);
}
function removeFromHash(hash, type, handler) {
    if (handler) {
        if (hash[type]) {
            hash[type] = hash[type].filter((func) => func !== handler);
        }
    }
    else {
        delete hash[type]; // remove all handler funcs for this type
    }
}

const DEF_DEFAULTS = {
    startTime: '09:00',
    endTime: '17:00',
    daysOfWeek: [1, 2, 3, 4, 5],
    display: 'inverse-background',
    classNames: 'fc-non-business',
    groupId: '_businessHours', // so multiple defs get grouped
};
/*
TODO: pass around as EventDefHash!!!
*/
function parseBusinessHours(input, context) {
    return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
    let rawDefs;
    if (input === true) {
        rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
    }
    else if (Array.isArray(input)) {
        // if specifying an array, every sub-definition NEEDS a day-of-week
        rawDefs = input.filter((rawDef) => rawDef.daysOfWeek);
    }
    else if (typeof input === 'object' && input) { // non-null object
        rawDefs = [input];
    }
    else { // is probably false
        rawDefs = [];
    }
    rawDefs = rawDefs.map((rawDef) => (Object.assign(Object.assign({}, DEF_DEFAULTS), rawDef)));
    return rawDefs;
}

function triggerDateSelect(selection, pev, context) {
    context.emitter.trigger('select', Object.assign(Object.assign({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: null, view: context.viewApi || context.calendarApi.view }));
}
function triggerDateUnselect(pev, context) {
    context.emitter.trigger('unselect', {
        jsEvent: pev ? pev.origEvent : null,
        view: context.viewApi || context.calendarApi.view,
    });
}
function buildDateSpanApiWithContext(dateSpan, context) {
    let props = {};
    for (let transform of context.pluginHooks.dateSpanTransforms) {
        Object.assign(props, transform(dateSpan, context));
    }
    Object.assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
    return props;
}
// Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd
function getDefaultEventEnd(allDay, marker, context) {
    let { dateEnv, options } = context;
    let end = marker;
    if (allDay) {
        end = startOfDay(end);
        end = dateEnv.add(end, options.defaultAllDayEventDuration);
    }
    else {
        end = dateEnv.add(end, options.defaultTimedEventDuration);
    }
    return end;
}

// applies the mutation to ALL defs/instances within the event store
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
    let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
    let dest = createEmptyEventStore();
    for (let defId in eventStore.defs) {
        let def = eventStore.defs[defId];
        dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
    }
    for (let instanceId in eventStore.instances) {
        let instance = eventStore.instances[instanceId];
        let def = dest.defs[instance.defId]; // important to grab the newly modified def
        dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
    }
    return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
    let standardProps = mutation.standardProps || {};
    // if hasEnd has not been specified, guess a good value based on deltas.
    // if duration will change, there's no way the default duration will persist,
    // and thus, we need to mark the event as having a real end
    if (standardProps.hasEnd == null &&
        eventConfig.durationEditable &&
        (mutation.startDelta || mutation.endDelta)) {
        standardProps.hasEnd = true; // TODO: is this mutation okay?
    }
    let copy = Object.assign(Object.assign(Object.assign({}, eventDef), standardProps), { ui: Object.assign(Object.assign({}, eventDef.ui), standardProps.ui) });
    if (mutation.extendedProps) {
        copy.extendedProps = Object.assign(Object.assign({}, copy.extendedProps), mutation.extendedProps);
    }
    for (let applier of context.pluginHooks.eventDefMutationAppliers) {
        applier(copy, mutation, context);
    }
    if (!copy.hasEnd && context.options.forceEventDuration) {
        copy.hasEnd = true;
    }
    return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
eventConfig, mutation, context) {
    let { dateEnv } = context;
    let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
    let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
    let copy = Object.assign({}, eventInstance);
    if (forceAllDay) {
        copy.range = computeAlignedDayRange(copy.range);
    }
    if (mutation.datesDelta && eventConfig.startEditable) {
        copy.range = {
            start: dateEnv.add(copy.range.start, mutation.datesDelta),
            end: dateEnv.add(copy.range.end, mutation.datesDelta),
        };
    }
    if (mutation.startDelta && eventConfig.durationEditable) {
        copy.range = {
            start: dateEnv.add(copy.range.start, mutation.startDelta),
            end: copy.range.end,
        };
    }
    if (mutation.endDelta && eventConfig.durationEditable) {
        copy.range = {
            start: copy.range.start,
            end: dateEnv.add(copy.range.end, mutation.endDelta),
        };
    }
    if (clearEnd) {
        copy.range = {
            start: copy.range.start,
            end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context),
        };
    }
    // in case event was all-day but the supplied deltas were not
    // better util for this?
    if (eventDef.allDay) {
        copy.range = {
            start: startOfDay(copy.range.start),
            end: startOfDay(copy.range.end),
        };
    }
    // handle invalid durations
    if (copy.range.end < copy.range.start) {
        copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
    }
    return copy;
}

class EventSourceImpl {
    constructor(context, internalEventSource) {
        this.context = context;
        this.internalEventSource = internalEventSource;
    }
    remove() {
        this.context.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: this.internalEventSource.sourceId,
        });
    }
    refetch() {
        this.context.dispatch({
            type: 'FETCH_EVENT_SOURCES',
            sourceIds: [this.internalEventSource.sourceId],
            isRefetch: true,
        });
    }
    get id() {
        return this.internalEventSource.publicId;
    }
    get url() {
        return this.internalEventSource.meta.url;
    }
    get format() {
        return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
    }
}

class EventImpl {
    // instance will be null if expressing a recurring event that has no current instances,
    // OR if trying to validate an incoming external event that has no dates assigned
    constructor(context, def, instance) {
        this._context = context;
        this._def = def;
        this._instance = instance || null;
    }
    /*
    TODO: make event struct more responsible for this
    */
    setProp(name, val) {
        if (name in EVENT_DATE_REFINERS) {
            console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');
            // TODO: make proper aliasing system?
        }
        else if (name === 'id') {
            val = EVENT_NON_DATE_REFINERS[name](val);
            this.mutate({
                standardProps: { publicId: val }, // hardcoded internal name
            });
        }
        else if (name in EVENT_NON_DATE_REFINERS) {
            val = EVENT_NON_DATE_REFINERS[name](val);
            this.mutate({
                standardProps: { [name]: val },
            });
        }
        else if (name in EVENT_UI_REFINERS) {
            let ui = EVENT_UI_REFINERS[name](val);
            if (name === 'color') {
                ui = { backgroundColor: val, borderColor: val };
            }
            else if (name === 'editable') {
                ui = { startEditable: val, durationEditable: val };
            }
            else {
                ui = { [name]: val };
            }
            this.mutate({
                standardProps: { ui },
            });
        }
        else {
            console.warn(`Could not set prop '${name}'. Use setExtendedProp instead.`);
        }
    }
    setExtendedProp(name, val) {
        this.mutate({
            extendedProps: { [name]: val },
        });
    }
    setStart(startInput, options = {}) {
        let { dateEnv } = this._context;
        let start = dateEnv.createMarker(startInput);
        if (start && this._instance) { // TODO: warning if parsed bad
            let instanceRange = this._instance.range;
            let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
            if (options.maintainDuration) {
                this.mutate({ datesDelta: startDelta });
            }
            else {
                this.mutate({ startDelta });
            }
        }
    }
    setEnd(endInput, options = {}) {
        let { dateEnv } = this._context;
        let end;
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) {
                return; // TODO: warning if parsed bad
            }
        }
        if (this._instance) {
            if (end) {
                let endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                this.mutate({ endDelta });
            }
            else {
                this.mutate({ standardProps: { hasEnd: false } });
            }
        }
    }
    setDates(startInput, endInput, options = {}) {
        let { dateEnv } = this._context;
        let standardProps = { allDay: options.allDay };
        let start = dateEnv.createMarker(startInput);
        let end;
        if (!start) {
            return; // TODO: warning if parsed bad
        }
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) { // TODO: warning if parsed bad
                return;
            }
        }
        if (this._instance) {
            let instanceRange = this._instance.range;
            // when computing the diff for an event being converted to all-day,
            // compute diff off of the all-day values the way event-mutation does.
            if (options.allDay === true) {
                instanceRange = computeAlignedDayRange(instanceRange);
            }
            let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
            if (end) {
                let endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                if (durationsEqual(startDelta, endDelta)) {
                    this.mutate({ datesDelta: startDelta, standardProps });
                }
                else {
                    this.mutate({ startDelta, endDelta, standardProps });
                }
            }
            else { // means "clear the end"
                standardProps.hasEnd = false;
                this.mutate({ datesDelta: startDelta, standardProps });
            }
        }
    }
    moveStart(deltaInput) {
        let delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ startDelta: delta });
        }
    }
    moveEnd(deltaInput) {
        let delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ endDelta: delta });
        }
    }
    moveDates(deltaInput) {
        let delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ datesDelta: delta });
        }
    }
    setAllDay(allDay, options = {}) {
        let standardProps = { allDay };
        let { maintainDuration } = options;
        if (maintainDuration == null) {
            maintainDuration = this._context.options.allDayMaintainDuration;
        }
        if (this._def.allDay !== allDay) {
            standardProps.hasEnd = maintainDuration;
        }
        this.mutate({ standardProps });
    }
    formatRange(formatInput) {
        let { dateEnv } = this._context;
        let instance = this._instance;
        let formatter = createFormatter(formatInput);
        if (this._def.hasEnd) {
            return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                forcedStartTzo: instance.forcedStartTzo,
                forcedEndTzo: instance.forcedEndTzo,
            });
        }
        return dateEnv.format(instance.range.start, formatter, {
            forcedTzo: instance.forcedStartTzo,
        });
    }
    mutate(mutation) {
        let instance = this._instance;
        if (instance) {
            let def = this._def;
            let context = this._context;
            let { eventStore } = context.getCurrentData();
            let relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
            let eventConfigBase = {
                '': {
                    display: '',
                    startEditable: true,
                    durationEditable: true,
                    constraints: [],
                    overlap: null,
                    allows: [],
                    backgroundColor: '',
                    borderColor: '',
                    textColor: '',
                    classNames: [],
                },
            };
            relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
            let oldEvent = new EventImpl(context, def, instance); // snapshot
            this._def = relevantEvents.defs[def.defId];
            this._instance = relevantEvents.instances[instance.instanceId];
            context.dispatch({
                type: 'MERGE_EVENTS',
                eventStore: relevantEvents,
            });
            context.emitter.trigger('eventChange', {
                oldEvent,
                event: this,
                relatedEvents: buildEventApis(relevantEvents, context, instance),
                revert() {
                    context.dispatch({
                        type: 'RESET_EVENTS',
                        eventStore, // the ORIGINAL store
                    });
                },
            });
        }
    }
    remove() {
        let context = this._context;
        let asStore = eventApiToStore(this);
        context.dispatch({
            type: 'REMOVE_EVENTS',
            eventStore: asStore,
        });
        context.emitter.trigger('eventRemove', {
            event: this,
            relatedEvents: [],
            revert() {
                context.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: asStore,
                });
            },
        });
    }
    get source() {
        let { sourceId } = this._def;
        if (sourceId) {
            return new EventSourceImpl(this._context, this._context.getCurrentData().eventSources[sourceId]);
        }
        return null;
    }
    get start() {
        return this._instance ?
            this._context.dateEnv.toDate(this._instance.range.start) :
            null;
    }
    get end() {
        return (this._instance && this._def.hasEnd) ?
            this._context.dateEnv.toDate(this._instance.range.end) :
            null;
    }
    get startStr() {
        let instance = this._instance;
        if (instance) {
            return this._context.dateEnv.formatIso(instance.range.start, {
                omitTime: this._def.allDay,
                forcedTzo: instance.forcedStartTzo,
            });
        }
        return '';
    }
    get endStr() {
        let instance = this._instance;
        if (instance && this._def.hasEnd) {
            return this._context.dateEnv.formatIso(instance.range.end, {
                omitTime: this._def.allDay,
                forcedTzo: instance.forcedEndTzo,
            });
        }
        return '';
    }
    // computable props that all access the def
    // TODO: find a TypeScript-compatible way to do this at scale
    get id() { return this._def.publicId; }
    get groupId() { return this._def.groupId; }
    get allDay() { return this._def.allDay; }
    get title() { return this._def.title; }
    get url() { return this._def.url; }
    get display() { return this._def.ui.display || 'auto'; } // bad. just normalize the type earlier
    get startEditable() { return this._def.ui.startEditable; }
    get durationEditable() { return this._def.ui.durationEditable; }
    get constraint() { return this._def.ui.constraints[0] || null; }
    get overlap() { return this._def.ui.overlap; }
    get allow() { return this._def.ui.allows[0] || null; }
    get backgroundColor() { return this._def.ui.backgroundColor; }
    get borderColor() { return this._def.ui.borderColor; }
    get textColor() { return this._def.ui.textColor; }
    // NOTE: user can't modify these because Object.freeze was called in event-def parsing
    get classNames() { return this._def.ui.classNames; }
    get extendedProps() { return this._def.extendedProps; }
    toPlainObject(settings = {}) {
        let def = this._def;
        let { ui } = def;
        let { startStr, endStr } = this;
        let res = {
            allDay: def.allDay,
        };
        if (def.title) {
            res.title = def.title;
        }
        if (startStr) {
            res.start = startStr;
        }
        if (endStr) {
            res.end = endStr;
        }
        if (def.publicId) {
            res.id = def.publicId;
        }
        if (def.groupId) {
            res.groupId = def.groupId;
        }
        if (def.url) {
            res.url = def.url;
        }
        if (ui.display && ui.display !== 'auto') {
            res.display = ui.display;
        }
        // TODO: what about recurring-event properties???
        // TODO: include startEditable/durationEditable/constraint/overlap/allow
        if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
            res.color = ui.backgroundColor;
        }
        else {
            if (ui.backgroundColor) {
                res.backgroundColor = ui.backgroundColor;
            }
            if (ui.borderColor) {
                res.borderColor = ui.borderColor;
            }
        }
        if (ui.textColor) {
            res.textColor = ui.textColor;
        }
        if (ui.classNames.length) {
            res.classNames = ui.classNames;
        }
        if (Object.keys(def.extendedProps).length) {
            if (settings.collapseExtendedProps) {
                Object.assign(res, def.extendedProps);
            }
            else {
                res.extendedProps = def.extendedProps;
            }
        }
        return res;
    }
    toJSON() {
        return this.toPlainObject();
    }
}
function eventApiToStore(eventApi) {
    let def = eventApi._def;
    let instance = eventApi._instance;
    return {
        defs: { [def.defId]: def },
        instances: instance
            ? { [instance.instanceId]: instance }
            : {},
    };
}
function buildEventApis(eventStore, context, excludeInstance) {
    let { defs, instances } = eventStore;
    let eventApis = [];
    let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';
    for (let id in instances) {
        let instance = instances[id];
        let def = defs[instance.defId];
        if (instance.instanceId !== excludeInstanceId) {
            eventApis.push(new EventImpl(context, def, instance));
        }
    }
    return eventApis;
}

/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
    let inverseBgByGroupId = {};
    let inverseBgByDefId = {};
    let defByGroupId = {};
    let bgRanges = [];
    let fgRanges = [];
    let eventUis = compileEventUis(eventStore.defs, eventUiBases);
    for (let defId in eventStore.defs) {
        let def = eventStore.defs[defId];
        let ui = eventUis[def.defId];
        if (ui.display === 'inverse-background') {
            if (def.groupId) {
                inverseBgByGroupId[def.groupId] = [];
                if (!defByGroupId[def.groupId]) {
                    defByGroupId[def.groupId] = def;
                }
            }
            else {
                inverseBgByDefId[defId] = [];
            }
        }
    }
    for (let instanceId in eventStore.instances) {
        let instance = eventStore.instances[instanceId];
        let def = eventStore.defs[instance.defId];
        let ui = eventUis[def.defId];
        let origRange = instance.range;
        let normalRange = (!def.allDay && nextDayThreshold) ?
            computeVisibleDayRange(origRange, nextDayThreshold) :
            origRange;
        let slicedRange = intersectRanges(normalRange, framingRange);
        if (slicedRange) {
            if (ui.display === 'inverse-background') {
                if (def.groupId) {
                    inverseBgByGroupId[def.groupId].push(slicedRange);
                }
                else {
                    inverseBgByDefId[instance.defId].push(slicedRange);
                }
            }
            else if (ui.display !== 'none') {
                (ui.display === 'background' ? bgRanges : fgRanges).push({
                    def,
                    ui,
                    instance,
                    range: slicedRange,
                    isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                    isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf(),
                });
            }
        }
    }
    for (let groupId in inverseBgByGroupId) { // BY GROUP
        let ranges = inverseBgByGroupId[groupId];
        let invertedRanges = invertRanges(ranges, framingRange);
        for (let invertedRange of invertedRanges) {
            let def = defByGroupId[groupId];
            let ui = eventUis[def.defId];
            bgRanges.push({
                def,
                ui,
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false,
            });
        }
    }
    for (let defId in inverseBgByDefId) {
        let ranges = inverseBgByDefId[defId];
        let invertedRanges = invertRanges(ranges, framingRange);
        for (let invertedRange of invertedRanges) {
            bgRanges.push({
                def: eventStore.defs[defId],
                ui: eventUis[defId],
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false,
            });
        }
    }
    return { bg: bgRanges, fg: fgRanges };
}
function hasBgRendering(def) {
    return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}
function setElSeg(el, seg) {
    el.fcSeg = seg;
}
function getElSeg(el) {
    return el.fcSeg ||
        el.parentNode.fcSeg || // for the harness
        null;
}
// event ui computation
function compileEventUis(eventDefs, eventUiBases) {
    return mapHash(eventDefs, (eventDef) => compileEventUi(eventDef, eventUiBases));
}
function compileEventUi(eventDef, eventUiBases) {
    let uis = [];
    if (eventUiBases['']) {
        uis.push(eventUiBases['']);
    }
    if (eventUiBases[eventDef.defId]) {
        uis.push(eventUiBases[eventDef.defId]);
    }
    uis.push(eventDef.ui);
    return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
    let objs = segs.map(buildSegCompareObj);
    objs.sort((obj0, obj1) => compareByFieldSpecs(obj0, obj1, eventOrderSpecs));
    return objs.map((c) => c._seg);
}
// returns a object with all primitive props that can be compared
function buildSegCompareObj(seg) {
    let { eventRange } = seg;
    let eventDef = eventRange.def;
    let range = eventRange.instance ? eventRange.instance.range : eventRange.range;
    let start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
    let end = range.end ? range.end.valueOf() : 0; // "
    return Object.assign(Object.assign(Object.assign({}, eventDef.extendedProps), eventDef), { id: eventDef.publicId, start,
        end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg });
}
function computeSegDraggable(seg, context) {
    let { pluginHooks } = context;
    let transformers = pluginHooks.isDraggableTransformers;
    let { def, ui } = seg.eventRange;
    let val = ui.startEditable;
    for (let transformer of transformers) {
        val = transformer(val, def, ui, context);
    }
    return val;
}
function computeSegStartResizable(seg, context) {
    return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}
function computeSegEndResizable(seg, context) {
    return seg.isEnd && seg.eventRange.ui.durationEditable;
}
function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, // defaults to true
defaultDisplayEventEnd, // defaults to true
startOverride, endOverride) {
    let { dateEnv, options } = context;
    let { displayEventTime, displayEventEnd } = options;
    let eventDef = seg.eventRange.def;
    let eventInstance = seg.eventRange.instance;
    if (displayEventTime == null) {
        displayEventTime = defaultDisplayEventTime !== false;
    }
    if (displayEventEnd == null) {
        displayEventEnd = defaultDisplayEventEnd !== false;
    }
    let wholeEventStart = eventInstance.range.start;
    let wholeEventEnd = eventInstance.range.end;
    let segStart = startOverride || seg.start || seg.eventRange.range.start;
    let segEnd = endOverride || seg.end || seg.eventRange.range.end;
    let isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
    let isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
    if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
        segStart = isStartDay ? wholeEventStart : segStart;
        segEnd = isEndDay ? wholeEventEnd : segEnd;
        if (displayEventEnd && eventDef.hasEnd) {
            return dateEnv.formatRange(segStart, segEnd, timeFormat, {
                forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
                forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo,
            });
        }
        return dateEnv.format(segStart, timeFormat, {
            forcedTzo: startOverride ? null : eventInstance.forcedStartTzo, // nooooo, same
        });
    }
    return '';
}
function getSegMeta(seg, todayRange, nowDate) {
    let segRange = seg.eventRange.range;
    return {
        isPast: segRange.end <= (nowDate || todayRange.start),
        isFuture: segRange.start >= (nowDate || todayRange.end),
        isToday: todayRange && rangeContainsMarker(todayRange, segRange.start),
    };
}
function getEventClassNames(props) {
    let classNames = ['fc-event'];
    if (props.isMirror) {
        classNames.push('fc-event-mirror');
    }
    if (props.isDraggable) {
        classNames.push('fc-event-draggable');
    }
    if (props.isStartResizable || props.isEndResizable) {
        classNames.push('fc-event-resizable');
    }
    if (props.isDragging) {
        classNames.push('fc-event-dragging');
    }
    if (props.isResizing) {
        classNames.push('fc-event-resizing');
    }
    if (props.isSelected) {
        classNames.push('fc-event-selected');
    }
    if (props.isStart) {
        classNames.push('fc-event-start');
    }
    if (props.isEnd) {
        classNames.push('fc-event-end');
    }
    if (props.isPast) {
        classNames.push('fc-event-past');
    }
    if (props.isToday) {
        classNames.push('fc-event-today');
    }
    if (props.isFuture) {
        classNames.push('fc-event-future');
    }
    return classNames;
}
function buildEventRangeKey(eventRange) {
    return eventRange.instance
        ? eventRange.instance.instanceId
        : `${eventRange.def.defId}:${eventRange.range.start.toISOString()}`;
    // inverse-background events don't have specific instances. TODO: better solution
}
function getSegAnchorAttrs(seg, context) {
    let { def, instance } = seg.eventRange;
    let { url } = def;
    if (url) {
        return { href: url };
    }
    let { emitter, options } = context;
    let { eventInteractive } = options;
    if (eventInteractive == null) {
        eventInteractive = def.interactive;
        if (eventInteractive == null) {
            eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
        }
    }
    // mock what happens in EventClicking
    if (eventInteractive) {
        // only attach keyboard-related handlers because click handler is already done in EventClicking
        return createAriaKeyboardAttrs((ev) => {
            emitter.trigger('eventClick', {
                el: ev.target,
                event: new EventImpl(context, def, instance),
                jsEvent: ev,
                view: context.viewApi,
            });
        });
    }
    return {};
}

const STANDARD_PROPS = {
    start: identity,
    end: identity,
    allDay: Boolean,
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
    let span = parseOpenDateSpan(raw, dateEnv);
    let { range } = span;
    if (!range.start) {
        return null;
    }
    if (!range.end) {
        if (defaultDuration == null) {
            return null;
        }
        range.end = dateEnv.add(range.start, defaultDuration);
    }
    return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/
function parseOpenDateSpan(raw, dateEnv) {
    let { refined: standardProps, extra } = refineProps(raw, STANDARD_PROPS);
    let startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
    let endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
    let { allDay } = standardProps;
    if (allDay == null) {
        allDay = (startMeta && startMeta.isTimeUnspecified) &&
            (!endMeta || endMeta.isTimeUnspecified);
    }
    return Object.assign({ range: {
            start: startMeta ? startMeta.marker : null,
            end: endMeta ? endMeta.marker : null,
        }, allDay }, extra);
}
function buildDateSpanApi(span, dateEnv) {
    return Object.assign(Object.assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
    return Object.assign(Object.assign({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
}
function buildRangeApi(range, dateEnv, omitTime) {
    return {
        start: dateEnv.toDate(range.start),
        end: dateEnv.toDate(range.end),
        startStr: dateEnv.formatIso(range.start, { omitTime }),
        endStr: dateEnv.formatIso(range.end, { omitTime }),
    };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
    let res = refineEventDef({ editable: false }, context);
    let def = parseEventDef(res.refined, res.extra, '', // sourceId
    dateSpan.allDay, true, // hasEnd
    context);
    return {
        def,
        ui: compileEventUi(def, eventUiBases),
        instance: createEventInstance(def.defId, dateSpan.range),
        range: dateSpan.range,
        isStart: true,
        isEnd: true,
    };
}

/*
given a function that resolves a result asynchronously.
the function can either call passed-in success and failure callbacks,
or it can return a promise.
if you need to pass additional params to func, bind them first.
*/
function unpromisify(func, normalizedSuccessCallback, normalizedFailureCallback) {
    // guard against success/failure callbacks being called more than once
    // and guard against a promise AND callback being used together.
    let isResolved = false;
    let wrappedSuccess = function (res) {
        if (!isResolved) {
            isResolved = true;
            normalizedSuccessCallback(res);
        }
    };
    let wrappedFailure = function (error) {
        if (!isResolved) {
            isResolved = true;
            normalizedFailureCallback(error);
        }
    };
    let res = func(wrappedSuccess, wrappedFailure);
    if (res && typeof res.then === 'function') {
        res.then(wrappedSuccess, wrappedFailure);
    }
}

class JsonRequestError extends Error {
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}
function requestJson(method, url, params) {
    method = method.toUpperCase();
    const fetchOptions = {
        method,
    };
    if (method === 'GET') {
        url += (url.indexOf('?') === -1 ? '?' : '&') +
            new URLSearchParams(params);
    }
    else {
        fetchOptions.body = new URLSearchParams(params);
        fetchOptions.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
    }
    return fetch(url, fetchOptions).then((fetchRes) => {
        if (fetchRes.ok) {
            return fetchRes.json().then((parsedResponse) => {
                return [parsedResponse, fetchRes];
            }, () => {
                throw new JsonRequestError('Failure parsing JSON', fetchRes);
            });
        }
        else {
            throw new JsonRequestError('Request failed', fetchRes);
        }
    });
}

let canVGrowWithinCell;
function getCanVGrowWithinCell() {
    if (canVGrowWithinCell == null) {
        canVGrowWithinCell = computeCanVGrowWithinCell();
    }
    return canVGrowWithinCell;
}
function computeCanVGrowWithinCell() {
    // for SSR, because this function is call immediately at top-level
    // TODO: just make this logic execute top-level, immediately, instead of doing lazily
    if (typeof document === 'undefined') {
        return true;
    }
    let el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.top = '0px';
    el.style.left = '0px';
    el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
    el.querySelector('table').style.height = '100px';
    el.querySelector('div').style.height = '100%';
    document.body.appendChild(el);
    let div = el.querySelector('div');
    let possible = div.offsetHeight > 0;
    document.body.removeChild(el);
    return possible;
}

class CalendarRoot extends BaseComponent {
    constructor() {
        super(...arguments);
        this.state = {
            forPrint: false,
        };
        this.handleBeforePrint = () => {
            flushSync(() => {
                this.setState({ forPrint: true });
            });
        };
        this.handleAfterPrint = () => {
            flushSync(() => {
                this.setState({ forPrint: false });
            });
        };
    }
    render() {
        let { props } = this;
        let { options } = props;
        let { forPrint } = this.state;
        let isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
        let height = (!isHeightAuto && options.height != null) ? options.height : '';
        let classNames = [
            'fc',
            forPrint ? 'fc-media-print' : 'fc-media-screen',
            `fc-direction-${options.direction}`,
            props.theme.getClass('root'),
        ];
        if (!getCanVGrowWithinCell()) {
            classNames.push('fc-liquid-hack');
        }
        return props.children(classNames, height, isHeightAuto, forPrint);
    }
    componentDidMount() {
        let { emitter } = this.props;
        emitter.on('_beforeprint', this.handleBeforePrint);
        emitter.on('_afterprint', this.handleAfterPrint);
    }
    componentWillUnmount() {
        let { emitter } = this.props;
        emitter.off('_beforeprint', this.handleBeforePrint);
        emitter.off('_afterprint', this.handleAfterPrint);
    }
}

class Interaction {
    constructor(settings) {
        this.component = settings.component;
        this.isHitComboAllowed = settings.isHitComboAllowed || null;
    }
    destroy() {
    }
}
function parseInteractionSettings(component, input) {
    return {
        component,
        el: input.el,
        useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
        isHitComboAllowed: input.isHitComboAllowed || null,
    };
}
// global state
const interactionSettingsStore = {};

class CalendarImpl {
    getCurrentData() {
        return this.currentDataManager.getCurrentData();
    }
    dispatch(action) {
        this.currentDataManager.dispatch(action);
    }
    get view() { return this.getCurrentData().viewApi; }
    batchRendering(callback) {
        callback();
    }
    updateSize() {
        this.trigger('_resize', true);
    }
    // Options
    // -----------------------------------------------------------------------------------------------------------------
    setOption(name, val) {
        this.dispatch({
            type: 'SET_OPTION',
            optionName: name,
            rawOptionValue: val,
        });
    }
    getOption(name) {
        return this.currentDataManager.currentCalendarOptionsInput[name];
    }
    getAvailableLocaleCodes() {
        return Object.keys(this.getCurrentData().availableRawLocales);
    }
    // Trigger
    // -----------------------------------------------------------------------------------------------------------------
    on(handlerName, handler) {
        let { currentDataManager } = this;
        if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
            currentDataManager.emitter.on(handlerName, handler);
        }
        else {
            console.warn(`Unknown listener name '${handlerName}'`);
        }
    }
    off(handlerName, handler) {
        this.currentDataManager.emitter.off(handlerName, handler);
    }
    // not meant for public use
    trigger(handlerName, ...args) {
        this.currentDataManager.emitter.trigger(handlerName, ...args);
    }
    // View
    // -----------------------------------------------------------------------------------------------------------------
    changeView(viewType, dateOrRange) {
        this.batchRendering(() => {
            this.unselect();
            if (dateOrRange) {
                if (dateOrRange.start && dateOrRange.end) { // a range
                    this.dispatch({
                        type: 'CHANGE_VIEW_TYPE',
                        viewType,
                    });
                    this.dispatch({
                        type: 'SET_OPTION',
                        optionName: 'visibleRange',
                        rawOptionValue: dateOrRange,
                    });
                }
                else {
                    let { dateEnv } = this.getCurrentData();
                    this.dispatch({
                        type: 'CHANGE_VIEW_TYPE',
                        viewType,
                        dateMarker: dateEnv.createMarker(dateOrRange),
                    });
                }
            }
            else {
                this.dispatch({
                    type: 'CHANGE_VIEW_TYPE',
                    viewType,
                });
            }
        });
    }
    // Forces navigation to a view for the given date.
    // `viewType` can be a specific view name or a generic one like "week" or "day".
    // needs to change
    zoomTo(dateMarker, viewType) {
        let state = this.getCurrentData();
        let spec;
        viewType = viewType || 'day'; // day is default zoom
        spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
        this.unselect();
        if (spec) {
            this.dispatch({
                type: 'CHANGE_VIEW_TYPE',
                viewType: spec.type,
                dateMarker,
            });
        }
        else {
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker,
            });
        }
    }
    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
    // Preference is given to views that have corresponding buttons.
    getUnitViewSpec(unit) {
        let { viewSpecs, toolbarConfig } = this.getCurrentData();
        let viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
        let i;
        let spec;
        for (let viewType in viewSpecs) {
            viewTypes.push(viewType);
        }
        for (i = 0; i < viewTypes.length; i += 1) {
            spec = viewSpecs[viewTypes[i]];
            if (spec) {
                if (spec.singleUnit === unit) {
                    return spec;
                }
            }
        }
        return null;
    }
    // Current Date
    // -----------------------------------------------------------------------------------------------------------------
    prev() {
        this.unselect();
        this.dispatch({ type: 'PREV' });
    }
    next() {
        this.unselect();
        this.dispatch({ type: 'NEXT' });
    }
    prevYear() {
        let state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.addYears(state.currentDate, -1),
        });
    }
    nextYear() {
        let state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.addYears(state.currentDate, 1),
        });
    }
    today() {
        let state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: getNow(state.calendarOptions.now, state.dateEnv),
        });
    }
    gotoDate(zonedDateInput) {
        let state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.createMarker(zonedDateInput),
        });
    }
    incrementDate(deltaInput) {
        let state = this.getCurrentData();
        let delta = createDuration(deltaInput);
        if (delta) { // else, warn about invalid input?
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.add(state.currentDate, delta),
            });
        }
    }
    getDate() {
        let state = this.getCurrentData();
        return state.dateEnv.toDate(state.currentDate);
    }
    // Date Formatting Utils
    // -----------------------------------------------------------------------------------------------------------------
    formatDate(d, formatter) {
        let { dateEnv } = this.getCurrentData();
        return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
    }
    // `settings` is for formatter AND isEndExclusive
    formatRange(d0, d1, settings) {
        let { dateEnv } = this.getCurrentData();
        return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
    }
    formatIso(d, omitTime) {
        let { dateEnv } = this.getCurrentData();
        return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime });
    }
    // Date Selection / Event Selection / DayClick
    // -----------------------------------------------------------------------------------------------------------------
    select(dateOrObj, endDate) {
        let selectionInput;
        if (endDate == null) {
            if (dateOrObj.start != null) {
                selectionInput = dateOrObj;
            }
            else {
                selectionInput = {
                    start: dateOrObj,
                    end: null,
                };
            }
        }
        else {
            selectionInput = {
                start: dateOrObj,
                end: endDate,
            };
        }
        let state = this.getCurrentData();
        let selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
        if (selection) { // throw parse error otherwise?
            this.dispatch({ type: 'SELECT_DATES', selection });
            triggerDateSelect(selection, null, state);
        }
    }
    unselect(pev) {
        let state = this.getCurrentData();
        if (state.dateSelection) {
            this.dispatch({ type: 'UNSELECT_DATES' });
            triggerDateUnselect(pev, state);
        }
    }
    // Public Events API
    // -----------------------------------------------------------------------------------------------------------------
    addEvent(eventInput, sourceInput) {
        if (eventInput instanceof EventImpl) {
            let def = eventInput._def;
            let instance = eventInput._instance;
            let currentData = this.getCurrentData();
            // not already present? don't want to add an old snapshot
            if (!currentData.eventStore.defs[def.defId]) {
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore({ def, instance }), // TODO: better util for two args?
                });
                this.triggerEventAdd(eventInput);
            }
            return eventInput;
        }
        let state = this.getCurrentData();
        let eventSource;
        if (sourceInput instanceof EventSourceImpl) {
            eventSource = sourceInput.internalEventSource;
        }
        else if (typeof sourceInput === 'boolean') {
            if (sourceInput) { // true. part of the first event source
                [eventSource] = hashValuesToArray(state.eventSources);
            }
        }
        else if (sourceInput != null) { // an ID. accepts a number too
            let sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
            if (!sourceApi) {
                console.warn(`Could not find an event source with ID "${sourceInput}"`); // TODO: test
                return null;
            }
            eventSource = sourceApi.internalEventSource;
        }
        let tuple = parseEvent(eventInput, eventSource, state, false);
        if (tuple) {
            let newEventApi = new EventImpl(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
            this.dispatch({
                type: 'ADD_EVENTS',
                eventStore: eventTupleToStore(tuple),
            });
            this.triggerEventAdd(newEventApi);
            return newEventApi;
        }
        return null;
    }
    triggerEventAdd(eventApi) {
        let { emitter } = this.getCurrentData();
        emitter.trigger('eventAdd', {
            event: eventApi,
            relatedEvents: [],
            revert: () => {
                this.dispatch({
                    type: 'REMOVE_EVENTS',
                    eventStore: eventApiToStore(eventApi),
                });
            },
        });
    }
    // TODO: optimize
    getEventById(id) {
        let state = this.getCurrentData();
        let { defs, instances } = state.eventStore;
        id = String(id);
        for (let defId in defs) {
            let def = defs[defId];
            if (def.publicId === id) {
                if (def.recurringDef) {
                    return new EventImpl(state, def, null);
                }
                for (let instanceId in instances) {
                    let instance = instances[instanceId];
                    if (instance.defId === def.defId) {
                        return new EventImpl(state, def, instance);
                    }
                }
            }
        }
        return null;
    }
    getEvents() {
        let currentData = this.getCurrentData();
        return buildEventApis(currentData.eventStore, currentData);
    }
    removeAllEvents() {
        this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
    }
    // Public Event Sources API
    // -----------------------------------------------------------------------------------------------------------------
    getEventSources() {
        let state = this.getCurrentData();
        let sourceHash = state.eventSources;
        let sourceApis = [];
        for (let internalId in sourceHash) {
            sourceApis.push(new EventSourceImpl(state, sourceHash[internalId]));
        }
        return sourceApis;
    }
    getEventSourceById(id) {
        let state = this.getCurrentData();
        let sourceHash = state.eventSources;
        id = String(id);
        for (let sourceId in sourceHash) {
            if (sourceHash[sourceId].publicId === id) {
                return new EventSourceImpl(state, sourceHash[sourceId]);
            }
        }
        return null;
    }
    addEventSource(sourceInput) {
        let state = this.getCurrentData();
        if (sourceInput instanceof EventSourceImpl) {
            // not already present? don't want to add an old snapshot
            if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
                this.dispatch({
                    type: 'ADD_EVENT_SOURCES',
                    sources: [sourceInput.internalEventSource],
                });
            }
            return sourceInput;
        }
        let eventSource = parseEventSource(sourceInput, state);
        if (eventSource) { // TODO: error otherwise?
            this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
            return new EventSourceImpl(state, eventSource);
        }
        return null;
    }
    removeAllEventSources() {
        this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
    }
    refetchEvents() {
        this.dispatch({ type: 'FETCH_EVENT_SOURCES', isRefetch: true });
    }
    // Scroll
    // -----------------------------------------------------------------------------------------------------------------
    scrollToTime(timeInput) {
        let time = createDuration(timeInput);
        if (time) {
            this.trigger('_scrollRequest', { time });
        }
    }
}
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
    let res = {
        left: Math.max(rect1.left, rect2.left),
        right: Math.min(rect1.right, rect2.right),
        top: Math.max(rect1.top, rect2.top),
        bottom: Math.min(rect1.bottom, rect2.bottom),
    };
    if (res.left < res.right && res.top < res.bottom) {
        return res;
    }
    return false;
}

const EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
class Splitter {
    constructor() {
        this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
        this.splitDateSelection = memoize(this._splitDateSpan);
        this.splitEventStore = memoize(this._splitEventStore);
        this.splitIndividualUi = memoize(this._splitIndividualUi);
        this.splitEventDrag = memoize(this._splitInteraction);
        this.splitEventResize = memoize(this._splitInteraction);
        this.eventUiBuilders = {}; // TODO: typescript protection
    }
    splitProps(props) {
        let keyInfos = this.getKeyInfo(props);
        let defKeys = this.getKeysForEventDefs(props.eventStore);
        let dateSelections = this.splitDateSelection(props.dateSelection);
        let individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
        let eventStores = this.splitEventStore(props.eventStore, defKeys);
        let eventDrags = this.splitEventDrag(props.eventDrag);
        let eventResizes = this.splitEventResize(props.eventResize);
        let splitProps = {};
        this.eventUiBuilders = mapHash(keyInfos, (info, key) => this.eventUiBuilders[key] || memoize(buildEventUiForKey));
        for (let key in keyInfos) {
            let keyInfo = keyInfos[key];
            let eventStore = eventStores[key] || EMPTY_EVENT_STORE;
            let buildEventUi = this.eventUiBuilders[key];
            splitProps[key] = {
                businessHours: keyInfo.businessHours || props.businessHours,
                dateSelection: dateSelections[key] || null,
                eventStore,
                eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                eventDrag: eventDrags[key] || null,
                eventResize: eventResizes[key] || null,
            };
        }
        return splitProps;
    }
    _splitDateSpan(dateSpan) {
        let dateSpans = {};
        if (dateSpan) {
            let keys = this.getKeysForDateSpan(dateSpan);
            for (let key of keys) {
                dateSpans[key] = dateSpan;
            }
        }
        return dateSpans;
    }
    _getKeysForEventDefs(eventStore) {
        return mapHash(eventStore.defs, (eventDef) => this.getKeysForEventDef(eventDef));
    }
    _splitEventStore(eventStore, defKeys) {
        let { defs, instances } = eventStore;
        let splitStores = {};
        for (let defId in defs) {
            for (let key of defKeys[defId]) {
                if (!splitStores[key]) {
                    splitStores[key] = createEmptyEventStore();
                }
                splitStores[key].defs[defId] = defs[defId];
            }
        }
        for (let instanceId in instances) {
            let instance = instances[instanceId];
            for (let key of defKeys[instance.defId]) {
                if (splitStores[key]) { // must have already been created
                    splitStores[key].instances[instanceId] = instance;
                }
            }
        }
        return splitStores;
    }
    _splitIndividualUi(eventUiBases, defKeys) {
        let splitHashes = {};
        for (let defId in eventUiBases) {
            if (defId) { // not the '' key
                for (let key of defKeys[defId]) {
                    if (!splitHashes[key]) {
                        splitHashes[key] = {};
                    }
                    splitHashes[key][defId] = eventUiBases[defId];
                }
            }
        }
        return splitHashes;
    }
    _splitInteraction(interaction) {
        let splitStates = {};
        if (interaction) {
            let affectedStores = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
            // can't rely on defKeys because event data is mutated
            let mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
            let mutatedStores = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
            let populate = (key) => {
                if (!splitStates[key]) {
                    splitStates[key] = {
                        affectedEvents: affectedStores[key] || EMPTY_EVENT_STORE,
                        mutatedEvents: mutatedStores[key] || EMPTY_EVENT_STORE,
                        isEvent: interaction.isEvent,
                    };
                }
            };
            for (let key in affectedStores) {
                populate(key);
            }
            for (let key in mutatedStores) {
                populate(key);
            }
        }
        return splitStates;
    }
}
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
    let baseParts = [];
    if (allUi) {
        baseParts.push(allUi);
    }
    if (eventUiForKey) {
        baseParts.push(eventUiForKey);
    }
    let stuff = {
        '': combineEventUis(baseParts),
    };
    if (individualUi) {
        Object.assign(stuff, individualUi);
    }
    return stuff;
}

function getDateMeta(date, todayRange, nowDate, dateProfile) {
    return {
        dow: date.getUTCDay(),
        isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
        isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
        isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
        isPast: Boolean(nowDate ? (date < nowDate) : todayRange ? (date < todayRange.start) : false),
        isFuture: Boolean(nowDate ? (date > nowDate) : todayRange ? (date >= todayRange.end) : false),
    };
}
function getDayClassNames(meta, theme) {
    let classNames = [
        'fc-day',
        `fc-day-${DAY_IDS[meta.dow]}`,
    ];
    if (meta.isDisabled) {
        classNames.push('fc-day-disabled');
    }
    else {
        if (meta.isToday) {
            classNames.push('fc-day-today');
            classNames.push(theme.getClass('today'));
        }
        if (meta.isPast) {
            classNames.push('fc-day-past');
        }
        if (meta.isFuture) {
            classNames.push('fc-day-future');
        }
        if (meta.isOther) {
            classNames.push('fc-day-other');
        }
    }
    return classNames;
}

const DAY_FORMAT = createFormatter({ year: 'numeric', month: 'long', day: 'numeric' });
const WEEK_FORMAT = createFormatter({ week: 'long' });
function buildNavLinkAttrs(context, dateMarker, viewType = 'day', isTabbable = true) {
    const { dateEnv, options, calendarApi } = context;
    let dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);
    if (options.navLinks) {
        let zonedDate = dateEnv.toDate(dateMarker);
        const handleInteraction = (ev) => {
            let customAction = viewType === 'day' ? options.navLinkDayClick :
                viewType === 'week' ? options.navLinkWeekClick : null;
            if (typeof customAction === 'function') {
                customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
            }
            else {
                if (typeof customAction === 'string') {
                    viewType = customAction;
                }
                calendarApi.zoomTo(dateMarker, viewType);
            }
        };
        return Object.assign({ title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr), 'data-navlink': '' }, (isTabbable
            ? createAriaClickAttrs(handleInteraction)
            : { onClick: handleInteraction }));
    }
    return { 'aria-label': dateStr };
}

let _scrollbarWidths;
function getScrollbarWidths() {
    if (!_scrollbarWidths) {
        _scrollbarWidths = computeScrollbarWidths();
    }
    return _scrollbarWidths;
}
function computeScrollbarWidths() {
    let el = document.createElement('div');
    el.style.overflow = 'scroll';
    el.style.position = 'absolute';
    el.style.top = '-9999px';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    let res = computeScrollbarWidthsForEl(el);
    document.body.removeChild(el);
    return res;
}
// WARNING: will include border
function computeScrollbarWidthsForEl(el) {
    return {
        x: el.offsetHeight - el.clientHeight,
        y: el.offsetWidth - el.clientWidth,
    };
}
function computeClippedClientRect(el) {
    let clippingParents = getClippingParents(el);
    let rect = el.getBoundingClientRect();
    for (let clippingParent of clippingParents) {
        let intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
        if (intersection) {
            rect = intersection;
        }
        else {
            return null;
        }
    }
    return rect;
}
// does not return window
function getClippingParents(el) {
    let parents = [];
    while (el instanceof HTMLElement) { // will stop when gets to document or null
        let computedStyle = window.getComputedStyle(el);
        if (computedStyle.position === 'fixed') {
            break;
        }
        if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
            parents.push(el);
        }
        el = el.parentNode;
    }
    return parents;
}

/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/
class PositionCache {
    constructor(originEl, els, isHorizontal, isVertical) {
        this.els = els;
        let originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left
        if (isHorizontal) {
            this.buildElHorizontals(originClientRect.left);
        }
        if (isVertical) {
            this.buildElVerticals(originClientRect.top);
        }
    }
    // Populates the left/right internal coordinate arrays
    buildElHorizontals(originClientLeft) {
        let lefts = [];
        let rights = [];
        for (let el of this.els) {
            let rect = el.getBoundingClientRect();
            lefts.push(rect.left - originClientLeft);
            rights.push(rect.right - originClientLeft);
        }
        this.lefts = lefts;
        this.rights = rights;
    }
    // Populates the top/bottom internal coordinate arrays
    buildElVerticals(originClientTop) {
        let tops = [];
        let bottoms = [];
        for (let el of this.els) {
            let rect = el.getBoundingClientRect();
            tops.push(rect.top - originClientTop);
            bottoms.push(rect.bottom - originClientTop);
        }
        this.tops = tops;
        this.bottoms = bottoms;
    }
    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
    // If no intersection is made, returns undefined.
    leftToIndex(leftPosition) {
        let { lefts, rights } = this;
        let len = lefts.length;
        let i;
        for (i = 0; i < len; i += 1) {
            if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                return i;
            }
        }
        return undefined; // TODO: better
    }
    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
    // If no intersection is made, returns undefined.
    topToIndex(topPosition) {
        let { tops, bottoms } = this;
        let len = tops.length;
        let i;
        for (i = 0; i < len; i += 1) {
            if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                return i;
            }
        }
        return undefined; // TODO: better
    }
    // Gets the width of the element at the given index
    getWidth(leftIndex) {
        return this.rights[leftIndex] - this.lefts[leftIndex];
    }
    // Gets the height of the element at the given index
    getHeight(topIndex) {
        return this.bottoms[topIndex] - this.tops[topIndex];
    }
    similarTo(otherCache) {
        return similarNumArrays(this.tops || [], otherCache.tops || []) &&
            similarNumArrays(this.bottoms || [], otherCache.bottoms || []) &&
            similarNumArrays(this.lefts || [], otherCache.lefts || []) &&
            similarNumArrays(this.rights || [], otherCache.rights || []);
    }
}
function similarNumArrays(a, b) {
    const len = a.length;
    if (len !== b.length) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        if (Math.round(a[i]) !== Math.round(b[i])) {
            return false;
        }
    }
    return true;
}

/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/
class DateComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.uid = guid();
    }
    // Hit System
    // -----------------------------------------------------------------------------------------------------------------
    prepareHits() {
    }
    queryHit(positionLeft, positionTop, elWidth, elHeight) {
        return null; // this should be abstract
    }
    // Pointer Interaction Utils
    // -----------------------------------------------------------------------------------------------------------------
    isValidSegDownEl(el) {
        return !this.props.eventDrag && // HACK
            !this.props.eventResize && // HACK
            !elementClosest(el, '.fc-event-mirror');
    }
    isValidDateDownEl(el) {
        return !elementClosest(el, '.fc-event:not(.fc-bg-event)') &&
            !elementClosest(el, '.fc-more-link') && // a "more.." link
            !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
            !elementClosest(el, '.fc-popover'); // hack
    }
}

class SegHierarchy {
    constructor(getEntryThickness = (entry) => {
        // if no thickness known, assume 1 (if 0, so small it always fits)
        return entry.thickness || 1;
    }) {
        this.getEntryThickness = getEntryThickness;
        // settings
        this.strictOrder = false;
        this.allowReslicing = false;
        this.maxCoord = -1; // -1 means no max
        this.maxStackCnt = -1; // -1 means no max
        this.levelCoords = []; // ordered
        this.entriesByLevel = []; // parallel with levelCoords
        this.stackCnts = {}; // TODO: use better technique!?
    }
    addSegs(inputs) {
        let hiddenEntries = [];
        for (let input of inputs) {
            this.insertEntry(input, hiddenEntries);
        }
        return hiddenEntries;
    }
    insertEntry(entry, hiddenEntries) {
        let insertion = this.findInsertion(entry);
        if (this.isInsertionValid(insertion, entry)) {
            this.insertEntryAt(entry, insertion);
        }
        else {
            this.handleInvalidInsertion(insertion, entry, hiddenEntries);
        }
    }
    isInsertionValid(insertion, entry) {
        return (this.maxCoord === -1 || insertion.levelCoord + this.getEntryThickness(entry) <= this.maxCoord) &&
            (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
    }
    handleInvalidInsertion(insertion, entry, hiddenEntries) {
        if (this.allowReslicing && insertion.touchingEntry) {
            const hiddenEntry = Object.assign(Object.assign({}, entry), { span: intersectSpans(entry.span, insertion.touchingEntry.span) });
            hiddenEntries.push(hiddenEntry);
            this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
        }
        else {
            hiddenEntries.push(entry);
        }
    }
    /*
    Does NOT add what hit the `barrier` into hiddenEntries. Should already be done.
    */
    splitEntry(entry, barrier, hiddenEntries) {
        let entrySpan = entry.span;
        let barrierSpan = barrier.span;
        if (entrySpan.start < barrierSpan.start) {
            this.insertEntry({
                index: entry.index,
                thickness: entry.thickness,
                span: { start: entrySpan.start, end: barrierSpan.start },
            }, hiddenEntries);
        }
        if (entrySpan.end > barrierSpan.end) {
            this.insertEntry({
                index: entry.index,
                thickness: entry.thickness,
                span: { start: barrierSpan.end, end: entrySpan.end },
            }, hiddenEntries);
        }
    }
    insertEntryAt(entry, insertion) {
        let { entriesByLevel, levelCoords } = this;
        if (insertion.lateral === -1) {
            // create a new level
            insertAt(levelCoords, insertion.level, insertion.levelCoord);
            insertAt(entriesByLevel, insertion.level, [entry]);
        }
        else {
            // insert into existing level
            insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
        }
        this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
    }
    /*
    does not care about limits
    */
    findInsertion(newEntry) {
        let { levelCoords, entriesByLevel, strictOrder, stackCnts } = this;
        let levelCnt = levelCoords.length;
        let candidateCoord = 0;
        let touchingLevel = -1;
        let touchingLateral = -1;
        let touchingEntry = null;
        let stackCnt = 0;
        for (let trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
            const trackingCoord = levelCoords[trackingLevel];
            // if the current level is past the placed entry, we have found a good empty space and can stop.
            // if strictOrder, keep finding more lateral intersections.
            if (!strictOrder && trackingCoord >= candidateCoord + this.getEntryThickness(newEntry)) {
                break;
            }
            let trackingEntries = entriesByLevel[trackingLevel];
            let trackingEntry;
            let searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end
            let lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one
            while ( // loop through entries that horizontally intersect
            (trackingEntry = trackingEntries[lateralIndex]) && // but not past the whole entry list
                trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
            ) {
                let trackingEntryBottom = trackingCoord + this.getEntryThickness(trackingEntry);
                // intersects into the top of the candidate?
                if (trackingEntryBottom > candidateCoord) {
                    candidateCoord = trackingEntryBottom;
                    touchingEntry = trackingEntry;
                    touchingLevel = trackingLevel;
                    touchingLateral = lateralIndex;
                }
                // butts up against top of candidate? (will happen if just intersected as well)
                if (trackingEntryBottom === candidateCoord) {
                    // accumulate the highest possible stackCnt of the trackingEntries that butt up
                    stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
                }
                lateralIndex += 1;
            }
        }
        // the destination level will be after touchingEntry's level. find it
        let destLevel = 0;
        if (touchingEntry) {
            destLevel = touchingLevel + 1;
            while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
                destLevel += 1;
            }
        }
        // if adding to an existing level, find where to insert
        let destLateral = -1;
        if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
            destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
        }
        return {
            touchingLevel,
            touchingLateral,
            touchingEntry,
            stackCnt,
            levelCoord: candidateCoord,
            level: destLevel,
            lateral: destLateral,
        };
    }
    // sorted by levelCoord (lowest to highest)
    toRects() {
        let { entriesByLevel, levelCoords } = this;
        let levelCnt = entriesByLevel.length;
        let rects = [];
        for (let level = 0; level < levelCnt; level += 1) {
            let entries = entriesByLevel[level];
            let levelCoord = levelCoords[level];
            for (let entry of entries) {
                rects.push(Object.assign(Object.assign({}, entry), { thickness: this.getEntryThickness(entry), levelCoord }));
            }
        }
        return rects;
    }
}
function getEntrySpanEnd(entry) {
    return entry.span.end;
}
function buildEntryKey(entry) {
    return entry.index + ':' + entry.span.start;
}
// returns groups with entries sorted by input order
function groupIntersectingEntries(entries) {
    let merges = [];
    for (let entry of entries) {
        let filteredMerges = [];
        let hungryMerge = {
            span: entry.span,
            entries: [entry],
        };
        for (let merge of merges) {
            if (intersectSpans(merge.span, hungryMerge.span)) {
                hungryMerge = {
                    entries: merge.entries.concat(hungryMerge.entries),
                    span: joinSpans(merge.span, hungryMerge.span),
                };
            }
            else {
                filteredMerges.push(merge);
            }
        }
        filteredMerges.push(hungryMerge);
        merges = filteredMerges;
    }
    return merges;
}
function joinSpans(span0, span1) {
    return {
        start: Math.min(span0.start, span1.start),
        end: Math.max(span0.end, span1.end),
    };
}
function intersectSpans(span0, span1) {
    let start = Math.max(span0.start, span1.start);
    let end = Math.min(span0.end, span1.end);
    if (start < end) {
        return { start, end };
    }
    return null;
}
// general util
// ---------------------------------------------------------------------------------------------------------------------
function insertAt(arr, index, item) {
    arr.splice(index, 0, item);
}
function binarySearch(a, searchVal, getItemVal) {
    let startIndex = 0;
    let endIndex = a.length; // exclusive
    if (!endIndex || searchVal < getItemVal(a[startIndex])) { // no items OR before first item
        return [0, 0];
    }
    if (searchVal > getItemVal(a[endIndex - 1])) { // after last item
        return [endIndex, 0];
    }
    while (startIndex < endIndex) {
        let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
        let middleVal = getItemVal(a[middleIndex]);
        if (searchVal < middleVal) {
            endIndex = middleIndex;
        }
        else if (searchVal > middleVal) {
            startIndex = middleIndex + 1;
        }
        else { // equal!
            return [middleIndex, 1];
        }
    }
    return [startIndex, 0];
}

// Computes a default column header formatting string if `colFormat` is not explicitly defined
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
    // if more than one week row, or if there are a lot of columns with not much space,
    // put just the day numbers will be in each cell
    if (!datesRepDistinctDays || dayCnt > 10) {
        return createFormatter({ weekday: 'short' }); // "Sat"
    }
    if (dayCnt > 1) {
        return createFormatter({ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }); // "Sat 11/12"
    }
    return createFormatter({ weekday: 'long' }); // "Saturday"
}

const CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no
function renderInner$1(renderProps) {
    return renderProps.text;
}

// BAD name for this class now. used in the Header
class TableDateCell extends BaseComponent {
    render() {
        let { dateEnv, options, theme, viewApi } = this.context;
        let { props } = this;
        let { date, dateProfile } = props;
        let dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
        let classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
        let text = dateEnv.format(date, props.dayHeaderFormat);
        // if colCnt is 1, we are already in a day-view and don't need a navlink
        let navLinkAttrs = (!dayMeta.isDisabled && props.colCnt > 1)
            ? buildNavLinkAttrs(this.context, date)
            : {};
        let renderProps = Object.assign(Object.assign(Object.assign({ date: dateEnv.toDate(date), view: viewApi }, props.extraRenderProps), { text }), dayMeta);
        return (y(ContentContainer, { elTag: "th", elClasses: classNames, elAttrs: Object.assign({ role: 'columnheader', colSpan: props.colSpan, 'data-date': !dayMeta.isDisabled ? formatDayString(date) : undefined }, props.extraDataAttrs), renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInner$1, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContainer) => (y("div", { className: "fc-scrollgrid-sync-inner" }, !dayMeta.isDisabled && (y(InnerContainer, { elTag: "a", elAttrs: navLinkAttrs, elClasses: [
                'fc-col-header-cell-cushion',
                props.isSticky && 'fc-sticky',
            ] }))))));
    }
}

const WEEKDAY_FORMAT = createFormatter({ weekday: 'long' });
class TableDowCell extends BaseComponent {
    render() {
        let { props } = this;
        let { dateEnv, theme, viewApi, options } = this.context;
        let date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
        let dateMeta = {
            dow: props.dow,
            isDisabled: false,
            isFuture: false,
            isPast: false,
            isToday: false,
            isOther: false,
        };
        let text = dateEnv.format(date, props.dayHeaderFormat);
        let renderProps = Object.assign(Object.assign(Object.assign(Object.assign({ // TODO: make this public?
            date }, dateMeta), { view: viewApi }), props.extraRenderProps), { text });
        return (y(ContentContainer, { elTag: "th", elClasses: [
                CLASS_NAME,
                ...getDayClassNames(dateMeta, theme),
                ...(props.extraClassNames || []),
            ], elAttrs: Object.assign({ role: 'columnheader', colSpan: props.colSpan }, props.extraDataAttrs), renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInner$1, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => (y("div", { className: "fc-scrollgrid-sync-inner" },
            y(InnerContent, { elTag: "a", elClasses: [
                    'fc-col-header-cell-cushion',
                    props.isSticky && 'fc-sticky',
                ], elAttrs: {
                    'aria-label': dateEnv.format(date, WEEKDAY_FORMAT),
                } })))));
    }
}

class NowTimer extends x$1 {
    constructor(props, context) {
        super(props, context);
        this.initialNowDate = getNow(context.options.now, context.dateEnv);
        this.initialNowQueriedMs = new Date().valueOf();
        this.state = this.computeTiming().currentState;
    }
    render() {
        let { props, state } = this;
        return props.children(state.nowDate, state.todayRange);
    }
    componentDidMount() {
        this.setTimeout();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.unit !== this.props.unit) {
            this.clearTimeout();
            this.setTimeout();
        }
    }
    componentWillUnmount() {
        this.clearTimeout();
    }
    computeTiming() {
        let { props, context } = this;
        let unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
        let currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
        let nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
        let waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
        // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
        // ensure no longer than a day
        waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
        return {
            currentState: { nowDate: currentUnitStart, todayRange: buildDayRange(currentUnitStart) },
            nextState: { nowDate: nextUnitStart, todayRange: buildDayRange(nextUnitStart) },
            waitMs,
        };
    }
    setTimeout() {
        let { nextState, waitMs } = this.computeTiming();
        this.timeoutId = setTimeout(() => {
            this.setState(nextState, () => {
                this.setTimeout();
            });
        }, waitMs);
    }
    clearTimeout() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
}
NowTimer.contextType = ViewContextType;
function buildDayRange(date) {
    let start = startOfDay(date);
    let end = addDays(start, 1);
    return { start, end };
}

class DayHeader extends BaseComponent {
    constructor() {
        super(...arguments);
        this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
    }
    render() {
        let { context } = this;
        let { dates, dateProfile, datesRepDistinctDays, renderIntro } = this.props;
        let dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
        return (y(NowTimer, { unit: "day" }, (nowDate, todayRange) => (y("tr", { role: "row" },
            renderIntro && renderIntro('day'),
            dates.map((date) => (datesRepDistinctDays ? (y(TableDateCell, { key: date.toISOString(), date: date, dateProfile: dateProfile, todayRange: todayRange, colCnt: dates.length, dayHeaderFormat: dayHeaderFormat })) : (y(TableDowCell, { key: date.getUTCDay(), dow: date.getUTCDay(), dayHeaderFormat: dayHeaderFormat }))))))));
    }
}
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
    return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}

class DaySeriesModel {
    constructor(range, dateProfileGenerator) {
        let date = range.start;
        let { end } = range;
        let indices = [];
        let dates = [];
        let dayIndex = -1;
        while (date < end) { // loop each day from start to end
            if (dateProfileGenerator.isHiddenDay(date)) {
                indices.push(dayIndex + 0.5); // mark that it's between indices
            }
            else {
                dayIndex += 1;
                indices.push(dayIndex);
                dates.push(date);
            }
            date = addDays(date, 1);
        }
        this.dates = dates;
        this.indices = indices;
        this.cnt = dates.length;
    }
    sliceRange(range) {
        let firstIndex = this.getDateDayIndex(range.start); // inclusive first index
        let lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
        let clippedFirstIndex = Math.max(0, firstIndex);
        let clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
        // deal with in-between indices
        clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
        clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
        if (clippedFirstIndex <= clippedLastIndex) {
            return {
                firstIndex: clippedFirstIndex,
                lastIndex: clippedLastIndex,
                isStart: firstIndex === clippedFirstIndex,
                isEnd: lastIndex === clippedLastIndex,
            };
        }
        return null;
    }
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    getDateDayIndex(date) {
        let { indices } = this;
        let dayOffset = Math.floor(diffDays(this.dates[0], date));
        if (dayOffset < 0) {
            return indices[0] - 1;
        }
        if (dayOffset >= indices.length) {
            return indices[indices.length - 1] + 1;
        }
        return indices[dayOffset];
    }
}

class DayTableModel {
    constructor(daySeries, breakOnWeeks) {
        let { dates } = daySeries;
        let daysPerRow;
        let firstDay;
        let rowCnt;
        if (breakOnWeeks) {
            // count columns until the day-of-week repeats
            firstDay = dates[0].getUTCDay();
            for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
                if (dates[daysPerRow].getUTCDay() === firstDay) {
                    break;
                }
            }
            rowCnt = Math.ceil(dates.length / daysPerRow);
        }
        else {
            rowCnt = 1;
            daysPerRow = dates.length;
        }
        this.rowCnt = rowCnt;
        this.colCnt = daysPerRow;
        this.daySeries = daySeries;
        this.cells = this.buildCells();
        this.headerDates = this.buildHeaderDates();
    }
    buildCells() {
        let rows = [];
        for (let row = 0; row < this.rowCnt; row += 1) {
            let cells = [];
            for (let col = 0; col < this.colCnt; col += 1) {
                cells.push(this.buildCell(row, col));
            }
            rows.push(cells);
        }
        return rows;
    }
    buildCell(row, col) {
        let date = this.daySeries.dates[row * this.colCnt + col];
        return {
            key: date.toISOString(),
            date,
        };
    }
    buildHeaderDates() {
        let dates = [];
        for (let col = 0; col < this.colCnt; col += 1) {
            dates.push(this.cells[0][col].date);
        }
        return dates;
    }
    sliceRange(range) {
        let { colCnt } = this;
        let seriesSeg = this.daySeries.sliceRange(range);
        let segs = [];
        if (seriesSeg) {
            let { firstIndex, lastIndex } = seriesSeg;
            let index = firstIndex;
            while (index <= lastIndex) {
                let row = Math.floor(index / colCnt);
                let nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                segs.push({
                    row,
                    firstCol: index % colCnt,
                    lastCol: (nextIndex - 1) % colCnt,
                    isStart: seriesSeg.isStart && index === firstIndex,
                    isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex,
                });
                index = nextIndex;
            }
        }
        return segs;
    }
}

class Slicer {
    constructor() {
        this.sliceBusinessHours = memoize(this._sliceBusinessHours);
        this.sliceDateSelection = memoize(this._sliceDateSpan);
        this.sliceEventStore = memoize(this._sliceEventStore);
        this.sliceEventDrag = memoize(this._sliceInteraction);
        this.sliceEventResize = memoize(this._sliceInteraction);
        this.forceDayIfListItem = false; // hack
    }
    sliceProps(props, dateProfile, nextDayThreshold, context, ...extraArgs) {
        let { eventUiBases } = props;
        let eventSegs = this.sliceEventStore(props.eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs);
        return {
            dateSelectionSegs: this.sliceDateSelection(props.dateSelection, dateProfile, nextDayThreshold, eventUiBases, context, ...extraArgs),
            businessHourSegs: this.sliceBusinessHours(props.businessHours, dateProfile, nextDayThreshold, context, ...extraArgs),
            fgEventSegs: eventSegs.fg,
            bgEventSegs: eventSegs.bg,
            eventDrag: this.sliceEventDrag(props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
            eventResize: this.sliceEventResize(props.eventResize, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
            eventSelection: props.eventSelection,
        }; // TODO: give interactionSegs?
    }
    sliceNowDate(// does not memoize
    date, dateProfile, nextDayThreshold, context, ...extraArgs) {
        return this._sliceDateSpan({ range: { start: date, end: addMs(date, 1) }, allDay: false }, // add 1 ms, protect against null range
        dateProfile, nextDayThreshold, {}, context, ...extraArgs);
    }
    _sliceBusinessHours(businessHours, dateProfile, nextDayThreshold, context, ...extraArgs) {
        if (!businessHours) {
            return [];
        }
        return this._sliceEventStore(expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold, ...extraArgs).bg;
    }
    _sliceEventStore(eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
        if (eventStore) {
            let rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
                fg: this.sliceEventRanges(rangeRes.fg, extraArgs),
            };
        }
        return { bg: [], fg: [] };
    }
    _sliceInteraction(interaction, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
        if (!interaction) {
            return null;
        }
        let rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
        return {
            segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
            affectedInstances: interaction.affectedEvents.instances,
            isEvent: interaction.isEvent,
        };
    }
    _sliceDateSpan(dateSpan, dateProfile, nextDayThreshold, eventUiBases, context, ...extraArgs) {
        if (!dateSpan) {
            return [];
        }
        let activeRange = computeActiveRange(dateProfile, Boolean(nextDayThreshold));
        let activeDateSpanRange = intersectRanges(dateSpan.range, activeRange);
        if (activeDateSpanRange) {
            dateSpan = Object.assign(Object.assign({}, dateSpan), { range: activeDateSpanRange });
            let eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
            let segs = this.sliceRange(dateSpan.range, ...extraArgs);
            for (let seg of segs) {
                seg.eventRange = eventRange;
            }
            return segs;
        }
        return [];
    }
    /*
    "complete" seg means it has component and eventRange
    */
    sliceEventRanges(eventRanges, extraArgs) {
        let segs = [];
        for (let eventRange of eventRanges) {
            segs.push(...this.sliceEventRange(eventRange, extraArgs));
        }
        return segs;
    }
    /*
    "complete" seg means it has component and eventRange
    */
    sliceEventRange(eventRange, extraArgs) {
        let dateRange = eventRange.range;
        // hack to make multi-day events that are being force-displayed as list-items to take up only one day
        if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
            dateRange = {
                start: dateRange.start,
                end: addDays(dateRange.start, 1),
            };
        }
        let segs = this.sliceRange(dateRange, ...extraArgs);
        for (let seg of segs) {
            seg.eventRange = eventRange;
            seg.isStart = eventRange.isStart && seg.isStart;
            seg.isEnd = eventRange.isEnd && seg.isEnd;
        }
        return segs;
    }
}
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/
function computeActiveRange(dateProfile, isComponentAllDay) {
    let range = dateProfile.activeRange;
    if (isComponentAllDay) {
        return range;
    }
    return {
        start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
        end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5), // 864e5 = ms in a day
    };
}

const VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
class Scroller extends BaseComponent {
    constructor() {
        super(...arguments);
        this.handleEl = (el) => {
            this.el = el;
            setRef(this.props.elRef, el);
        };
    }
    render() {
        let { props } = this;
        let { liquid, liquidIsAbsolute } = props;
        let isAbsolute = liquid && liquidIsAbsolute;
        let className = ['fc-scroller'];
        if (liquid) {
            if (liquidIsAbsolute) {
                className.push('fc-scroller-liquid-absolute');
            }
            else {
                className.push('fc-scroller-liquid');
            }
        }
        return (y("div", { ref: this.handleEl, className: className.join(' '), style: {
                overflowX: props.overflowX,
                overflowY: props.overflowY,
                left: (isAbsolute && -(props.overcomeLeft || 0)) || '',
                right: (isAbsolute && -(props.overcomeRight || 0)) || '',
                bottom: (isAbsolute && -(props.overcomeBottom || 0)) || '',
                marginLeft: (!isAbsolute && -(props.overcomeLeft || 0)) || '',
                marginRight: (!isAbsolute && -(props.overcomeRight || 0)) || '',
                marginBottom: (!isAbsolute && -(props.overcomeBottom || 0)) || '',
                maxHeight: props.maxHeight || '',
            } }, props.children));
    }
    needsXScrolling() {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
            return false;
        }
        // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
        // much more reliable to see if children are taller than the scroller, even tho doesn't account for
        // inner-child margins and absolute positioning
        let { el } = this;
        let realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
        let { children } = el;
        for (let i = 0; i < children.length; i += 1) {
            let childEl = children[i];
            if (childEl.getBoundingClientRect().width > realClientWidth) {
                return true;
            }
        }
        return false;
    }
    needsYScrolling() {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
            return false;
        }
        // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
        // much more reliable to see if children are taller than the scroller, even tho doesn't account for
        // inner-child margins and absolute positioning
        let { el } = this;
        let realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
        let { children } = el;
        for (let i = 0; i < children.length; i += 1) {
            let childEl = children[i];
            if (childEl.getBoundingClientRect().height > realClientHeight) {
                return true;
            }
        }
        return false;
    }
    getXScrollbarWidth() {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
            return 0;
        }
        return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
    }
    getYScrollbarWidth() {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
            return 0;
        }
        return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
    }
}

/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/
class RefMap {
    constructor(masterCallback) {
        this.masterCallback = masterCallback;
        this.currentMap = {};
        this.depths = {};
        this.callbackMap = {};
        this.handleValue = (val, key) => {
            let { depths, currentMap } = this;
            let removed = false;
            let added = false;
            if (val !== null) {
                // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
                removed = (key in currentMap);
                currentMap[key] = val;
                depths[key] = (depths[key] || 0) + 1;
                added = true;
            }
            else {
                depths[key] -= 1;
                if (!depths[key]) {
                    delete currentMap[key];
                    delete this.callbackMap[key];
                    removed = true;
                }
            }
            if (this.masterCallback) {
                if (removed) {
                    this.masterCallback(null, String(key));
                }
                if (added) {
                    this.masterCallback(val, String(key));
                }
            }
        };
    }
    createRef(key) {
        let refCallback = this.callbackMap[key];
        if (!refCallback) {
            refCallback = this.callbackMap[key] = (val) => {
                this.handleValue(val, String(key));
            };
        }
        return refCallback;
    }
    // TODO: check callers that don't care about order. should use getAll instead
    // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
    // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
    collect(startIndex, endIndex, step) {
        return collectFromHash(this.currentMap, startIndex, endIndex, step);
    }
    getAll() {
        return hashValuesToArray(this.currentMap);
    }
}

function computeShrinkWidth(chunkEls) {
    let shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
    let largestWidth = 0;
    for (let shrinkCell of shrinkCells) {
        largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
    }
    return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}
function getSectionHasLiquidHeight(props, sectionConfig) {
    return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}
function getAllowYScrolling(props, sectionConfig) {
    return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
        getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
}
// TODO: ONLY use `arg`. force out internal function to use same API
function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
    let { expandRows } = arg;
    let content = typeof chunkConfig.content === 'function' ?
        chunkConfig.content(arg) :
        y('table', {
            role: 'presentation',
            className: [
                chunkConfig.tableClassName,
                sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : '',
            ].join(' '),
            style: {
                minWidth: arg.tableMinWidth,
                width: arg.clientWidth,
                height: expandRows ? arg.clientHeight : '', // css `height` on a <table> serves as a min-height
            },
        }, arg.tableColGroupNode, y(isHeader ? 'thead' : 'tbody', {
            role: 'presentation',
        }, typeof chunkConfig.rowContent === 'function'
            ? chunkConfig.rowContent(arg)
            : chunkConfig.rowContent));
    return content;
}
function isColPropsEqual(cols0, cols1) {
    return isArraysEqual(cols0, cols1, isPropsEqual);
}
function renderMicroColGroup(cols, shrinkWidth) {
    let colNodes = [];
    /*
    for ColProps with spans, it would have been great to make a single <col span="">
    HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
    SOLUTION: making individual <col> elements makes Chrome behave.
    */
    for (let colProps of cols) {
        let span = colProps.span || 1;
        for (let i = 0; i < span; i += 1) {
            colNodes.push(y("col", { style: {
                    width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : (colProps.width || ''),
                    minWidth: colProps.minWidth || '',
                } }));
        }
    }
    return y('colgroup', {}, ...colNodes);
}
function sanitizeShrinkWidth(shrinkWidth) {
    /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
    4 accounts for 2 2-pixel borders. TODO: better solution? */
    return shrinkWidth == null ? 4 : shrinkWidth;
}
function hasShrinkWidth(cols) {
    for (let col of cols) {
        if (col.width === 'shrink') {
            return true;
        }
    }
    return false;
}
function getScrollGridClassNames(liquid, context) {
    let classNames = [
        'fc-scrollgrid',
        context.theme.getClass('table'),
    ];
    if (liquid) {
        classNames.push('fc-scrollgrid-liquid');
    }
    return classNames;
}
function getSectionClassNames(sectionConfig, wholeTableVGrow) {
    let classNames = [
        'fc-scrollgrid-section',
        `fc-scrollgrid-section-${sectionConfig.type}`,
        sectionConfig.className, // used?
    ];
    if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
        classNames.push('fc-scrollgrid-section-liquid');
    }
    if (sectionConfig.isSticky) {
        classNames.push('fc-scrollgrid-section-sticky');
    }
    return classNames;
}
function renderScrollShim(arg) {
    return (y("div", { className: "fc-scrollgrid-sticky-shim", style: {
            width: arg.clientWidth,
            minWidth: arg.tableMinWidth,
        } }));
}
function getStickyHeaderDates(options) {
    let { stickyHeaderDates } = options;
    if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
        stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
    }
    return stickyHeaderDates;
}
function getStickyFooterScrollbar(options) {
    let { stickyFooterScrollbar } = options;
    if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
        stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
    }
    return stickyFooterScrollbar;
}

class SimpleScrollGrid extends BaseComponent {
    constructor() {
        super(...arguments);
        this.processCols = memoize((a) => a, isColPropsEqual); // so we get same `cols` props every time
        // yucky to memoize VNodes, but much more efficient for consumers
        this.renderMicroColGroup = memoize(renderMicroColGroup);
        this.scrollerRefs = new RefMap();
        this.scrollerElRefs = new RefMap(this._handleScrollerEl.bind(this));
        this.state = {
            shrinkWidth: null,
            forceYScrollbars: false,
            scrollerClientWidths: {},
            scrollerClientHeights: {},
        };
        // TODO: can do a really simple print-view. dont need to join rows
        this.handleSizing = () => {
            this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
        };
    }
    render() {
        let { props, state, context } = this;
        let sectionConfigs = props.sections || [];
        let cols = this.processCols(props.cols);
        let microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
        let classNames = getScrollGridClassNames(props.liquid, context);
        if (props.collapsibleWidth) {
            classNames.push('fc-scrollgrid-collapsible');
        }
        // TODO: make DRY
        let configCnt = sectionConfigs.length;
        let configI = 0;
        let currentConfig;
        let headSectionNodes = [];
        let bodySectionNodes = [];
        let footSectionNodes = [];
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
            headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
            configI += 1;
        }
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
            bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
            configI += 1;
        }
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
            footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
            configI += 1;
        }
        // firefox bug: when setting height on table and there is a thead or tfoot,
        // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
        // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
        // if so, use a simpler dom structure, jam everything into a lone tbody.
        let isBuggy = !getCanVGrowWithinCell();
        const roleAttrs = { role: 'rowgroup' };
        return y('table', {
            role: 'grid',
            className: classNames.join(' '),
            style: { height: props.height },
        }, Boolean(!isBuggy && headSectionNodes.length) && y('thead', roleAttrs, ...headSectionNodes), Boolean(!isBuggy && bodySectionNodes.length) && y('tbody', roleAttrs, ...bodySectionNodes), Boolean(!isBuggy && footSectionNodes.length) && y('tfoot', roleAttrs, ...footSectionNodes), isBuggy && y('tbody', roleAttrs, ...headSectionNodes, ...bodySectionNodes, ...footSectionNodes));
    }
    renderSection(sectionConfig, microColGroupNode, isHeader) {
        if ('outerContent' in sectionConfig) {
            return (y(_, { key: sectionConfig.key }, sectionConfig.outerContent));
        }
        return (y("tr", { key: sectionConfig.key, role: "presentation", className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ') }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader)));
    }
    renderChunkTd(sectionConfig, microColGroupNode, chunkConfig, isHeader) {
        if ('outerContent' in chunkConfig) {
            return chunkConfig.outerContent;
        }
        let { props } = this;
        let { forceYScrollbars, scrollerClientWidths, scrollerClientHeights } = this.state;
        let needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?
        let isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
        // for `!props.liquid` - is WHOLE scrollgrid natural height?
        // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars
        let overflowY = !props.liquid ? 'visible' :
            forceYScrollbars ? 'scroll' :
                !needsYScrolling ? 'hidden' :
                    'auto';
        let sectionKey = sectionConfig.key;
        let content = renderChunkContent(sectionConfig, chunkConfig, {
            tableColGroupNode: microColGroupNode,
            tableMinWidth: '',
            clientWidth: (!props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined) ? scrollerClientWidths[sectionKey] : null,
            clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
            expandRows: sectionConfig.expandRows,
            syncRowHeights: false,
            rowSyncHeights: [],
            reportRowHeightChange: () => { },
        }, isHeader);
        return y(isHeader ? 'th' : 'td', {
            ref: chunkConfig.elRef,
            role: 'presentation',
        }, y("div", { className: `fc-scroller-harness${isLiquid ? ' fc-scroller-harness-liquid' : ''}` },
            y(Scroller, { ref: this.scrollerRefs.createRef(sectionKey), elRef: this.scrollerElRefs.createRef(sectionKey), overflowY: overflowY, overflowX: !props.liquid ? 'visible' : 'hidden' /* natural height? */, maxHeight: sectionConfig.maxHeight, liquid: isLiquid, liquidIsAbsolute // because its within a harness
                : true }, content)));
    }
    _handleScrollerEl(scrollerEl, key) {
        let section = getSectionByKey(this.props.sections, key);
        if (section) {
            setRef(section.chunk.scrollerElRef, scrollerEl);
        }
    }
    componentDidMount() {
        this.handleSizing();
        this.context.addResizeHandler(this.handleSizing);
    }
    componentDidUpdate() {
        // TODO: need better solution when state contains non-sizing things
        this.handleSizing();
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleSizing);
    }
    computeShrinkWidth() {
        return hasShrinkWidth(this.props.cols)
            ? computeShrinkWidth(this.scrollerElRefs.getAll())
            : 0;
    }
    computeScrollerDims() {
        let scrollbarWidth = getScrollbarWidths();
        let { scrollerRefs, scrollerElRefs } = this;
        let forceYScrollbars = false;
        let scrollerClientWidths = {};
        let scrollerClientHeights = {};
        for (let sectionKey in scrollerRefs.currentMap) {
            let scroller = scrollerRefs.currentMap[sectionKey];
            if (scroller && scroller.needsYScrolling()) {
                forceYScrollbars = true;
                break;
            }
        }
        for (let section of this.props.sections) {
            let sectionKey = section.key;
            let scrollerEl = scrollerElRefs.currentMap[sectionKey];
            if (scrollerEl) {
                let harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders
                scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars
                    ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
                    : 0));
                scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
            }
        }
        return { forceYScrollbars, scrollerClientWidths, scrollerClientHeights };
    }
}
SimpleScrollGrid.addStateEquality({
    scrollerClientWidths: isPropsEqual,
    scrollerClientHeights: isPropsEqual,
});
function getSectionByKey(sections, key) {
    for (let section of sections) {
        if (section.key === key) {
            return section;
        }
    }
    return null;
}

class EventContainer extends BaseComponent {
    constructor() {
        super(...arguments);
        this.handleEl = (el) => {
            this.el = el;
            if (el) {
                setElSeg(el, this.props.seg);
            }
        };
    }
    render() {
        const { props, context } = this;
        const { options } = context;
        const { seg } = props;
        const { eventRange } = seg;
        const { ui } = eventRange;
        const renderProps = {
            event: new EventImpl(context, eventRange.def, eventRange.instance),
            view: context.viewApi,
            timeText: props.timeText,
            textColor: ui.textColor,
            backgroundColor: ui.backgroundColor,
            borderColor: ui.borderColor,
            isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
            isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
            isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
            isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
            isStart: Boolean(seg.isStart),
            isEnd: Boolean(seg.isEnd),
            isPast: Boolean(props.isPast),
            isFuture: Boolean(props.isFuture),
            isToday: Boolean(props.isToday),
            isSelected: Boolean(props.isSelected),
            isDragging: Boolean(props.isDragging),
            isResizing: Boolean(props.isResizing),
        };
        return (y(ContentContainer, Object.assign({}, props /* contains children */, { elRef: this.handleEl, elClasses: [
                ...getEventClassNames(renderProps),
                ...seg.eventRange.ui.classNames,
                ...(props.elClasses || []),
            ], renderProps: renderProps, generatorName: "eventContent", customGenerator: options.eventContent, defaultGenerator: props.defaultGenerator, classNameGenerator: options.eventClassNames, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount })));
    }
    componentDidUpdate(prevProps) {
        if (this.el && this.props.seg !== prevProps.seg) {
            setElSeg(this.el, this.props.seg);
        }
    }
}

// should not be a purecomponent
class StandardEvent extends BaseComponent {
    render() {
        let { props, context } = this;
        let { options } = context;
        let { seg } = props;
        let { ui } = seg.eventRange;
        let timeFormat = options.eventTimeFormat || props.defaultTimeFormat;
        let timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
        return (y(EventContainer, Object.assign({}, props /* includes elRef */, { elTag: "a", elStyle: {
                borderColor: ui.borderColor,
                backgroundColor: ui.backgroundColor,
            }, elAttrs: getSegAnchorAttrs(seg, context), defaultGenerator: renderInnerContent$1$1, timeText: timeText }), (InnerContent, eventContentArg) => (y(_, null,
            y(InnerContent, { elTag: "div", elClasses: ['fc-event-main'], elStyle: { color: eventContentArg.textColor } }),
            Boolean(eventContentArg.isStartResizable) && (y("div", { className: "fc-event-resizer fc-event-resizer-start" })),
            Boolean(eventContentArg.isEndResizable) && (y("div", { className: "fc-event-resizer fc-event-resizer-end" }))))));
    }
}
function renderInnerContent$1$1(innerProps) {
    return (y("div", { className: "fc-event-main-frame" },
        innerProps.timeText && (y("div", { className: "fc-event-time" }, innerProps.timeText)),
        y("div", { className: "fc-event-title-container" },
            y("div", { className: "fc-event-title fc-sticky" }, innerProps.event.title || y(_, null, "\u00A0")))));
}

const NowIndicatorContainer = (props) => (y(ViewContextType.Consumer, null, (context) => {
    let { options } = context;
    let renderProps = {
        isAxis: props.isAxis,
        date: context.dateEnv.toDate(props.date),
        view: context.viewApi,
    };
    return (y(ContentContainer, Object.assign({}, props /* includes children */, { elTag: props.elTag || 'div', renderProps: renderProps, generatorName: "nowIndicatorContent", customGenerator: options.nowIndicatorContent, classNameGenerator: options.nowIndicatorClassNames, didMount: options.nowIndicatorDidMount, willUnmount: options.nowIndicatorWillUnmount })));
}));

const DAY_NUM_FORMAT = createFormatter({ day: 'numeric' });
class DayCellContainer extends BaseComponent {
    constructor() {
        super(...arguments);
        this.refineRenderProps = memoizeObjArg(refineRenderProps);
    }
    render() {
        let { props, context } = this;
        let { options } = context;
        let renderProps = this.refineRenderProps({
            date: props.date,
            dateProfile: props.dateProfile,
            todayRange: props.todayRange,
            isMonthStart: props.isMonthStart || false,
            showDayNumber: props.showDayNumber,
            extraRenderProps: props.extraRenderProps,
            viewApi: context.viewApi,
            dateEnv: context.dateEnv,
            monthStartFormat: options.monthStartFormat,
        });
        return (y(ContentContainer, Object.assign({}, props /* includes children */, { elClasses: [
                ...getDayClassNames(renderProps, context.theme),
                ...(props.elClasses || []),
            ], elAttrs: Object.assign(Object.assign({}, props.elAttrs), (renderProps.isDisabled ? {} : { 'data-date': formatDayString(props.date) })), renderProps: renderProps, generatorName: "dayCellContent", customGenerator: options.dayCellContent, defaultGenerator: props.defaultGenerator, classNameGenerator: 
            // don't use custom classNames if disabled
            renderProps.isDisabled ? undefined : options.dayCellClassNames, didMount: options.dayCellDidMount, willUnmount: options.dayCellWillUnmount })));
    }
}
function hasCustomDayCellContent(options) {
    return Boolean(options.dayCellContent || hasCustomRenderingHandler('dayCellContent', options));
}
function refineRenderProps(raw) {
    let { date, dateEnv, dateProfile, isMonthStart } = raw;
    let dayMeta = getDateMeta(date, raw.todayRange, null, dateProfile);
    let dayNumberText = raw.showDayNumber ? (dateEnv.format(date, isMonthStart ? raw.monthStartFormat : DAY_NUM_FORMAT)) : '';
    return Object.assign(Object.assign(Object.assign({ date: dateEnv.toDate(date), view: raw.viewApi }, dayMeta), { isMonthStart,
        dayNumberText }), raw.extraRenderProps);
}

class BgEvent extends BaseComponent {
    render() {
        let { props } = this;
        let { seg } = props;
        return (y(EventContainer, { elTag: "div", elClasses: ['fc-bg-event'], elStyle: { backgroundColor: seg.eventRange.ui.backgroundColor }, defaultGenerator: renderInnerContent$3, seg: seg, timeText: "", isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, disableDragging: true, disableResizing: true }));
    }
}
function renderInnerContent$3(props) {
    let { title } = props.event;
    return title && (y("div", { className: "fc-event-title" }, props.event.title));
}
function renderFill(fillType) {
    return (y("div", { className: `fc-${fillType}` }));
}

const WeekNumberContainer = (props) => (y(ViewContextType.Consumer, null, (context) => {
    let { dateEnv, options } = context;
    let { date } = props;
    let format = options.weekNumberFormat || props.defaultFormat;
    let num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?
    let text = dateEnv.format(date, format);
    let renderProps = { num, text, date };
    return (y(ContentContainer // why isn't WeekNumberContentArg being auto-detected?
    , Object.assign({}, props /* includes children */, { renderProps: renderProps, generatorName: "weekNumberContent", customGenerator: options.weekNumberContent, defaultGenerator: renderInner, classNameGenerator: options.weekNumberClassNames, didMount: options.weekNumberDidMount, willUnmount: options.weekNumberWillUnmount })));
}));
function renderInner(innerProps) {
    return innerProps.text;
}

const PADDING_FROM_VIEWPORT = 10;
class Popover extends BaseComponent {
    constructor() {
        super(...arguments);
        this.state = {
            titleId: getUniqueDomId(),
        };
        this.handleRootEl = (el) => {
            this.rootEl = el;
            if (this.props.elRef) {
                setRef(this.props.elRef, el);
            }
        };
        // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
        this.handleDocumentMouseDown = (ev) => {
            // only hide the popover if the click happened outside the popover
            const target = getEventTargetViaRoot(ev);
            if (!this.rootEl.contains(target)) {
                this.handleCloseClick();
            }
        };
        this.handleDocumentKeyDown = (ev) => {
            if (ev.key === 'Escape') {
                this.handleCloseClick();
            }
        };
        this.handleCloseClick = () => {
            let { onClose } = this.props;
            if (onClose) {
                onClose();
            }
        };
    }
    render() {
        let { theme, options } = this.context;
        let { props, state } = this;
        let classNames = [
            'fc-popover',
            theme.getClass('popover'),
        ].concat(props.extraClassNames || []);
        return j(y("div", Object.assign({}, props.extraAttrs, { id: props.id, className: classNames.join(' '), "aria-labelledby": state.titleId, ref: this.handleRootEl }),
            y("div", { className: 'fc-popover-header ' + theme.getClass('popoverHeader') },
                y("span", { className: "fc-popover-title", id: state.titleId }, props.title),
                y("span", { className: 'fc-popover-close ' + theme.getIconClass('close'), title: options.closeHint, onClick: this.handleCloseClick })),
            y("div", { className: 'fc-popover-body ' + theme.getClass('popoverContent') }, props.children)), props.parentEl);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleDocumentMouseDown);
        document.addEventListener('keydown', this.handleDocumentKeyDown);
        this.updateSize();
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleDocumentMouseDown);
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    updateSize() {
        let { isRtl } = this.context;
        let { alignmentEl, alignGridTop } = this.props;
        let { rootEl } = this;
        let alignmentRect = computeClippedClientRect(alignmentEl);
        if (alignmentRect) {
            let popoverDims = rootEl.getBoundingClientRect();
            // position relative to viewport
            let popoverTop = alignGridTop
                ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top
                : alignmentRect.top;
            let popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
            // constrain
            popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
            popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
            popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
            let origin = rootEl.offsetParent.getBoundingClientRect();
            applyStyle(rootEl, {
                top: popoverTop - origin.top,
                left: popoverLeft - origin.left,
            });
        }
    }
}

class MorePopover extends DateComponent {
    constructor() {
        super(...arguments);
        this.handleRootEl = (rootEl) => {
            this.rootEl = rootEl;
            if (rootEl) {
                this.context.registerInteractiveComponent(this, {
                    el: rootEl,
                    useEventCenter: false,
                });
            }
            else {
                this.context.unregisterInteractiveComponent(this);
            }
        };
    }
    render() {
        let { options, dateEnv } = this.context;
        let { props } = this;
        let { startDate, todayRange, dateProfile } = props;
        let title = dateEnv.format(startDate, options.dayPopoverFormat);
        return (y(DayCellContainer, { elRef: this.handleRootEl, date: startDate, dateProfile: dateProfile, todayRange: todayRange }, (InnerContent, renderProps, elAttrs) => (y(Popover, { elRef: elAttrs.ref, id: props.id, title: title, extraClassNames: ['fc-more-popover'].concat(elAttrs.className || []), extraAttrs: elAttrs /* TODO: make these time-based when not whole-day? */, parentEl: props.parentEl, alignmentEl: props.alignmentEl, alignGridTop: props.alignGridTop, onClose: props.onClose },
            hasCustomDayCellContent(options) && (y(InnerContent, { elTag: "div", elClasses: ['fc-more-popover-misc'] })),
            props.children))));
    }
    queryHit(positionLeft, positionTop, elWidth, elHeight) {
        let { rootEl, props } = this;
        if (positionLeft >= 0 && positionLeft < elWidth &&
            positionTop >= 0 && positionTop < elHeight) {
            return {
                dateProfile: props.dateProfile,
                dateSpan: Object.assign({ allDay: !props.forceTimed, range: {
                        start: props.startDate,
                        end: props.endDate,
                    } }, props.extraDateSpan),
                dayEl: rootEl,
                rect: {
                    left: 0,
                    top: 0,
                    right: elWidth,
                    bottom: elHeight,
                },
                layer: 1, // important when comparing with hits from other components
            };
        }
        return null;
    }
}

class MoreLinkContainer extends BaseComponent {
    constructor() {
        super(...arguments);
        this.state = {
            isPopoverOpen: false,
            popoverId: getUniqueDomId(),
        };
        this.handleLinkEl = (linkEl) => {
            this.linkEl = linkEl;
            if (this.props.elRef) {
                setRef(this.props.elRef, linkEl);
            }
        };
        this.handleClick = (ev) => {
            let { props, context } = this;
            let { moreLinkClick } = context.options;
            let date = computeRange(props).start;
            function buildPublicSeg(seg) {
                let { def, instance, range } = seg.eventRange;
                return {
                    event: new EventImpl(context, def, instance),
                    start: context.dateEnv.toDate(range.start),
                    end: context.dateEnv.toDate(range.end),
                    isStart: seg.isStart,
                    isEnd: seg.isEnd,
                };
            }
            if (typeof moreLinkClick === 'function') {
                moreLinkClick = moreLinkClick({
                    date,
                    allDay: Boolean(props.allDayDate),
                    allSegs: props.allSegs.map(buildPublicSeg),
                    hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
                    jsEvent: ev,
                    view: context.viewApi,
                });
            }
            if (!moreLinkClick || moreLinkClick === 'popover') {
                this.setState({ isPopoverOpen: true });
            }
            else if (typeof moreLinkClick === 'string') { // a view name
                context.calendarApi.zoomTo(date, moreLinkClick);
            }
        };
        this.handlePopoverClose = () => {
            this.setState({ isPopoverOpen: false });
        };
    }
    render() {
        let { props, state } = this;
        return (y(ViewContextType.Consumer, null, (context) => {
            let { viewApi, options, calendarApi } = context;
            let { moreLinkText } = options;
            let { moreCnt } = props;
            let range = computeRange(props);
            let text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
                ? moreLinkText.call(calendarApi, moreCnt)
                : `+${moreCnt} ${moreLinkText}`;
            let hint = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
            let renderProps = {
                num: moreCnt,
                shortText: `+${moreCnt}`,
                text,
                view: viewApi,
            };
            return (y(_, null,
                Boolean(props.moreCnt) && (y(ContentContainer, { elTag: props.elTag || 'a', elRef: this.handleLinkEl, elClasses: [
                        ...(props.elClasses || []),
                        'fc-more-link',
                    ], elStyle: props.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, props.elAttrs), createAriaClickAttrs(this.handleClick)), { title: hint, 'aria-expanded': state.isPopoverOpen, 'aria-controls': state.isPopoverOpen ? state.popoverId : '' }), renderProps: renderProps, generatorName: "moreLinkContent", customGenerator: options.moreLinkContent, defaultGenerator: props.defaultGenerator || renderMoreLinkInner$1, classNameGenerator: options.moreLinkClassNames, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }, props.children)),
                state.isPopoverOpen && (y(MorePopover, { id: state.popoverId, startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: props.extraDateSpan, parentEl: this.parentEl, alignmentEl: props.alignmentElRef ?
                        props.alignmentElRef.current :
                        this.linkEl, alignGridTop: props.alignGridTop, forceTimed: props.forceTimed, onClose: this.handlePopoverClose }, props.popoverContent()))));
        }));
    }
    componentDidMount() {
        this.updateParentEl();
    }
    componentDidUpdate() {
        this.updateParentEl();
    }
    updateParentEl() {
        if (this.linkEl) {
            this.parentEl = elementClosest(this.linkEl, '.fc-view-harness');
        }
    }
}
function renderMoreLinkInner$1(props) {
    return props.text;
}
function computeRange(props) {
    if (props.allDayDate) {
        return {
            start: props.allDayDate,
            end: addDays(props.allDayDate, 1),
        };
    }
    let { hiddenSegs } = props;
    return {
        start: computeEarliestSegStart(hiddenSegs),
        end: computeLatestSegEnd(hiddenSegs),
    };
}
function computeEarliestSegStart(segs) {
    return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function pickEarliestStart(seg0, seg1) {
    return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}
function computeLatestSegEnd(segs) {
    return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickLatestEnd(seg0, seg1) {
    return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
}

const globalLocales = [];

const MINIMAL_RAW_EN_LOCALE = {
    code: 'en',
    week: {
        dow: 0,
        doy: 4, // 4 days need to be within the year to be considered the first week
    },
    direction: 'ltr',
    buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: 'year',
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day',
        list: 'list',
    },
    weekText: 'W',
    weekTextLong: 'Week',
    closeHint: 'Close',
    timeHint: 'Time',
    eventHint: 'Event',
    allDayText: 'all-day',
    moreLinkText: 'more',
    noEventsText: 'No events to display',
};
const RAW_EN_LOCALE = Object.assign(Object.assign({}, MINIMAL_RAW_EN_LOCALE), { 
    // Includes things we don't want other locales to inherit,
    // things that derive from other translatable strings.
    buttonHints: {
        prev: 'Previous $0',
        next: 'Next $0',
        today(buttonText, unit) {
            return (unit === 'day')
                ? 'Today'
                : `This ${buttonText}`;
        },
    }, viewHint: '$0 view', navLinkHint: 'Go to $0', moreLinkHint(eventCnt) {
        return `Show ${eventCnt} more event${eventCnt === 1 ? '' : 's'}`;
    } });
function organizeRawLocales(explicitRawLocales) {
    let defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
    let allRawLocales = globalLocales.concat(explicitRawLocales);
    let rawLocaleMap = {
        en: RAW_EN_LOCALE,
    };
    for (let rawLocale of allRawLocales) {
        rawLocaleMap[rawLocale.code] = rawLocale;
    }
    return {
        map: rawLocaleMap,
        defaultCode,
    };
}
function buildLocale(inputSingular, available) {
    if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
        return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
    }
    return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
    let codes = [].concat(codeArg || []); // will convert to array
    let raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
    return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
    for (let i = 0; i < codes.length; i += 1) {
        let parts = codes[i].toLocaleLowerCase().split('-');
        for (let j = parts.length; j > 0; j -= 1) {
            let simpleId = parts.slice(0, j).join('-');
            if (available[simpleId]) {
                return available[simpleId];
            }
        }
    }
    return null;
}
function parseLocale(codeArg, codes, raw) {
    let merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ['buttonText']);
    delete merged.code; // don't want this part of the options
    let { week } = merged;
    delete merged.week;
    return {
        codeArg,
        codes,
        week,
        simpleNumberFormat: new Intl.NumberFormat(codeArg),
        options: merged,
    };
}

// TODO: easier way to add new hooks? need to update a million things
function createPlugin(input) {
    return {
        id: guid(),
        name: input.name,
        premiumReleaseDate: input.premiumReleaseDate ? new Date(input.premiumReleaseDate) : undefined,
        deps: input.deps || [],
        reducers: input.reducers || [],
        isLoadingFuncs: input.isLoadingFuncs || [],
        contextInit: [].concat(input.contextInit || []),
        eventRefiners: input.eventRefiners || {},
        eventDefMemberAdders: input.eventDefMemberAdders || [],
        eventSourceRefiners: input.eventSourceRefiners || {},
        isDraggableTransformers: input.isDraggableTransformers || [],
        eventDragMutationMassagers: input.eventDragMutationMassagers || [],
        eventDefMutationAppliers: input.eventDefMutationAppliers || [],
        dateSelectionTransformers: input.dateSelectionTransformers || [],
        datePointTransforms: input.datePointTransforms || [],
        dateSpanTransforms: input.dateSpanTransforms || [],
        views: input.views || {},
        viewPropsTransformers: input.viewPropsTransformers || [],
        isPropsValid: input.isPropsValid || null,
        externalDefTransforms: input.externalDefTransforms || [],
        viewContainerAppends: input.viewContainerAppends || [],
        eventDropTransformers: input.eventDropTransformers || [],
        componentInteractions: input.componentInteractions || [],
        calendarInteractions: input.calendarInteractions || [],
        themeClasses: input.themeClasses || {},
        eventSourceDefs: input.eventSourceDefs || [],
        cmdFormatter: input.cmdFormatter,
        recurringTypes: input.recurringTypes || [],
        namedTimeZonedImpl: input.namedTimeZonedImpl,
        initialView: input.initialView || '',
        elementDraggingImpl: input.elementDraggingImpl,
        optionChangeHandlers: input.optionChangeHandlers || {},
        scrollGridImpl: input.scrollGridImpl || null,
        listenerRefiners: input.listenerRefiners || {},
        optionRefiners: input.optionRefiners || {},
        propSetHandlers: input.propSetHandlers || {},
    };
}
function buildPluginHooks(pluginDefs, globalDefs) {
    let currentPluginIds = {};
    let hooks = {
        premiumReleaseDate: undefined,
        reducers: [],
        isLoadingFuncs: [],
        contextInit: [],
        eventRefiners: {},
        eventDefMemberAdders: [],
        eventSourceRefiners: {},
        isDraggableTransformers: [],
        eventDragMutationMassagers: [],
        eventDefMutationAppliers: [],
        dateSelectionTransformers: [],
        datePointTransforms: [],
        dateSpanTransforms: [],
        views: {},
        viewPropsTransformers: [],
        isPropsValid: null,
        externalDefTransforms: [],
        viewContainerAppends: [],
        eventDropTransformers: [],
        componentInteractions: [],
        calendarInteractions: [],
        themeClasses: {},
        eventSourceDefs: [],
        cmdFormatter: null,
        recurringTypes: [],
        namedTimeZonedImpl: null,
        initialView: '',
        elementDraggingImpl: null,
        optionChangeHandlers: {},
        scrollGridImpl: null,
        listenerRefiners: {},
        optionRefiners: {},
        propSetHandlers: {},
    };
    function addDefs(defs) {
        for (let def of defs) {
            const pluginName = def.name;
            const currentId = currentPluginIds[pluginName];
            if (currentId === undefined) {
                currentPluginIds[pluginName] = def.id;
                addDefs(def.deps);
                hooks = combineHooks(hooks, def);
            }
            else if (currentId !== def.id) {
                // different ID than the one already added
                console.warn(`Duplicate plugin '${pluginName}'`);
            }
        }
    }
    if (pluginDefs) {
        addDefs(pluginDefs);
    }
    addDefs(globalDefs);
    return hooks;
}
function buildBuildPluginHooks() {
    let currentOverrideDefs = [];
    let currentGlobalDefs = [];
    let currentHooks;
    return (overrideDefs, globalDefs) => {
        if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
            currentHooks = buildPluginHooks(overrideDefs, globalDefs);
        }
        currentOverrideDefs = overrideDefs;
        currentGlobalDefs = globalDefs;
        return currentHooks;
    };
}
function combineHooks(hooks0, hooks1) {
    return {
        premiumReleaseDate: compareOptionalDates(hooks0.premiumReleaseDate, hooks1.premiumReleaseDate),
        reducers: hooks0.reducers.concat(hooks1.reducers),
        isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
        contextInit: hooks0.contextInit.concat(hooks1.contextInit),
        eventRefiners: Object.assign(Object.assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
        eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
        eventSourceRefiners: Object.assign(Object.assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
        isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
        eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
        eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
        dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
        datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
        dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
        views: Object.assign(Object.assign({}, hooks0.views), hooks1.views),
        viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
        isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
        externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
        viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
        eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
        calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
        componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
        themeClasses: Object.assign(Object.assign({}, hooks0.themeClasses), hooks1.themeClasses),
        eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
        cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
        recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
        namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
        initialView: hooks0.initialView || hooks1.initialView,
        elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
        optionChangeHandlers: Object.assign(Object.assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
        scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
        listenerRefiners: Object.assign(Object.assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
        optionRefiners: Object.assign(Object.assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
        propSetHandlers: Object.assign(Object.assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers),
    };
}
function compareOptionalDates(date0, date1) {
    if (date0 === undefined) {
        return date1;
    }
    if (date1 === undefined) {
        return date0;
    }
    return new Date(Math.max(date0.valueOf(), date1.valueOf()));
}

class StandardTheme extends Theme {
}
StandardTheme.prototype.classes = {
    root: 'fc-theme-standard',
    tableCellShaded: 'fc-cell-shaded',
    buttonGroup: 'fc-button-group',
    button: 'fc-button fc-button-primary',
    buttonActive: 'fc-button-active',
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
    close: 'fc-icon-x',
    prev: 'fc-icon-chevron-left',
    next: 'fc-icon-chevron-right',
    prevYear: 'fc-icon-chevrons-left',
    nextYear: 'fc-icon-chevrons-right',
};
StandardTheme.prototype.rtlIconClasses = {
    prev: 'fc-icon-chevron-right',
    next: 'fc-icon-chevron-left',
    prevYear: 'fc-icon-chevrons-right',
    nextYear: 'fc-icon-chevrons-left',
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

function compileViewDefs(defaultConfigs, overrideConfigs) {
    let hash = {};
    let viewType;
    for (viewType in defaultConfigs) {
        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    }
    for (viewType in overrideConfigs) {
        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    }
    return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    if (hash[viewType]) {
        return hash[viewType];
    }
    let viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    if (viewDef) {
        hash[viewType] = viewDef;
    }
    return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    let defaultConfig = defaultConfigs[viewType];
    let overrideConfig = overrideConfigs[viewType];
    let queryProp = (name) => ((defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
        ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null));
    let theComponent = queryProp('component');
    let superType = queryProp('superType');
    let superDef = null;
    if (superType) {
        if (superType === viewType) {
            throw new Error('Can\'t have a custom view type that references itself');
        }
        superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
    }
    if (!theComponent && superDef) {
        theComponent = superDef.component;
    }
    if (!theComponent) {
        return null; // don't throw a warning, might be settings for a single-unit view
    }
    return {
        type: viewType,
        component: theComponent,
        defaults: Object.assign(Object.assign({}, (superDef ? superDef.defaults : {})), (defaultConfig ? defaultConfig.rawOptions : {})),
        overrides: Object.assign(Object.assign({}, (superDef ? superDef.overrides : {})), (overrideConfig ? overrideConfig.rawOptions : {})),
    };
}

function parseViewConfigs(inputs) {
    return mapHash(inputs, parseViewConfig);
}
function parseViewConfig(input) {
    let rawOptions = typeof input === 'function' ?
        { component: input } :
        input;
    let { component } = rawOptions;
    if (rawOptions.content) {
        // TODO: remove content/classNames/didMount/etc from options?
        component = createViewHookComponent(rawOptions);
    }
    else if (component && !(component.prototype instanceof BaseComponent)) {
        // WHY?: people were using `component` property for `content`
        // TODO: converge on one setting name
        component = createViewHookComponent(Object.assign(Object.assign({}, rawOptions), { content: component }));
    }
    return {
        superType: rawOptions.type,
        component: component,
        rawOptions, // includes type and component too :(
    };
}
function createViewHookComponent(options) {
    return (viewProps) => (y(ViewContextType.Consumer, null, (context) => (y(ContentContainer, { elTag: "div", elClasses: buildViewClassNames(context.viewSpec), renderProps: Object.assign(Object.assign({}, viewProps), { nextDayThreshold: context.options.nextDayThreshold }), generatorName: undefined, customGenerator: options.content, classNameGenerator: options.classNames, didMount: options.didMount, willUnmount: options.willUnmount }))));
}

function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
    let defaultConfigs = parseViewConfigs(defaultInputs);
    let overrideConfigs = parseViewConfigs(optionOverrides.views);
    let viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
    return mapHash(viewDefs, (viewDef) => buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults));
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
    let durationInput = viewDef.overrides.duration ||
        viewDef.defaults.duration ||
        dynamicOptionOverrides.duration ||
        optionOverrides.duration;
    let duration = null;
    let durationUnit = '';
    let singleUnit = '';
    let singleUnitOverrides = {};
    if (durationInput) {
        duration = createDurationCached(durationInput);
        if (duration) { // valid?
            let denom = greatestDurationDenominator(duration);
            durationUnit = denom.unit;
            if (denom.value === 1) {
                singleUnit = durationUnit;
                singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
            }
        }
    }
    let queryButtonText = (optionsSubset) => {
        let buttonTextMap = optionsSubset.buttonText || {};
        let buttonTextKey = viewDef.defaults.buttonTextKey;
        if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
            return buttonTextMap[buttonTextKey];
        }
        if (buttonTextMap[viewDef.type] != null) {
            return buttonTextMap[viewDef.type];
        }
        if (buttonTextMap[singleUnit] != null) {
            return buttonTextMap[singleUnit];
        }
        return null;
    };
    let queryButtonTitle = (optionsSubset) => {
        let buttonHints = optionsSubset.buttonHints || {};
        let buttonKey = viewDef.defaults.buttonTextKey; // use same key as text
        if (buttonKey != null && buttonHints[buttonKey] != null) {
            return buttonHints[buttonKey];
        }
        if (buttonHints[viewDef.type] != null) {
            return buttonHints[viewDef.type];
        }
        if (buttonHints[singleUnit] != null) {
            return buttonHints[singleUnit];
        }
        return null;
    };
    return {
        type: viewDef.type,
        component: viewDef.component,
        duration,
        durationUnit,
        singleUnit,
        optionDefaults: viewDef.defaults,
        optionOverrides: Object.assign(Object.assign({}, singleUnitOverrides), viewDef.overrides),
        buttonTextOverride: queryButtonText(dynamicOptionOverrides) ||
            queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
            viewDef.overrides.buttonText,
        buttonTextDefault: queryButtonText(localeDefaults) ||
            viewDef.defaults.buttonText ||
            queryButtonText(BASE_OPTION_DEFAULTS) ||
            viewDef.type,
        // not DRY
        buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) ||
            queryButtonTitle(optionOverrides) ||
            viewDef.overrides.buttonHint,
        buttonTitleDefault: queryButtonTitle(localeDefaults) ||
            viewDef.defaults.buttonHint ||
            queryButtonTitle(BASE_OPTION_DEFAULTS),
        // will eventually fall back to buttonText
    };
}
// hack to get memoization working
let durationInputMap = {};
function createDurationCached(durationInput) {
    let json = JSON.stringify(durationInput);
    let res = durationInputMap[json];
    if (res === undefined) {
        res = createDuration(durationInput);
        durationInputMap[json] = res;
    }
    return res;
}

function reduceViewType(viewType, action) {
    switch (action.type) {
        case 'CHANGE_VIEW_TYPE':
            viewType = action.viewType;
    }
    return viewType;
}

function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
    switch (action.type) {
        case 'SET_OPTION':
            return Object.assign(Object.assign({}, dynamicOptionOverrides), { [action.optionName]: action.rawOptionValue });
        default:
            return dynamicOptionOverrides;
    }
}

function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
    let dp;
    switch (action.type) {
        case 'CHANGE_VIEW_TYPE':
            return dateProfileGenerator.build(action.dateMarker || currentDate);
        case 'CHANGE_DATE':
            return dateProfileGenerator.build(action.dateMarker);
        case 'PREV':
            dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
            if (dp.isValid) {
                return dp;
            }
            break;
        case 'NEXT':
            dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
            if (dp.isValid) {
                return dp;
            }
            break;
    }
    return currentDateProfile;
}

function initEventSources(calendarOptions, dateProfile, context) {
    let activeRange = dateProfile ? dateProfile.activeRange : null;
    return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
    let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
    switch (action.type) {
        case 'ADD_EVENT_SOURCES': // already parsed
            return addSources(eventSources, action.sources, activeRange, context);
        case 'REMOVE_EVENT_SOURCE':
            return removeSource(eventSources, action.sourceId);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'CHANGE_DATE':
        case 'CHANGE_VIEW_TYPE':
            if (dateProfile) {
                return fetchDirtySources(eventSources, activeRange, context);
            }
            return eventSources;
        case 'FETCH_EVENT_SOURCES':
            return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
                arrayToHash(action.sourceIds) :
                excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
        case 'RECEIVE_EVENTS':
        case 'RECEIVE_EVENT_ERROR':
            return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return {};
        default:
            return eventSources;
    }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
    let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
    return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
    for (let sourceId in eventSources) {
        if (eventSources[sourceId].isFetching) {
            return true;
        }
    }
    return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
    let hash = {};
    for (let source of sources) {
        hash[source.sourceId] = source;
    }
    if (fetchRange) {
        hash = fetchDirtySources(hash, fetchRange, context);
    }
    return Object.assign(Object.assign({}, eventSourceHash), hash);
}
function removeSource(eventSourceHash, sourceId) {
    return filterHash(eventSourceHash, (eventSource) => eventSource.sourceId !== sourceId);
}
function fetchDirtySources(sourceHash, fetchRange, context) {
    return fetchSourcesByIds(sourceHash, filterHash(sourceHash, (eventSource) => isSourceDirty(eventSource, fetchRange, context)), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
    if (!doesSourceNeedRange(eventSource, context)) {
        return !eventSource.latestFetchId;
    }
    return !context.options.lazyFetching ||
        !eventSource.fetchRange ||
        eventSource.isFetching || // always cancel outdated in-progress fetches
        fetchRange.start < eventSource.fetchRange.start ||
        fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
    let nextSources = {};
    for (let sourceId in prevSources) {
        let source = prevSources[sourceId];
        if (sourceIdHash[sourceId]) {
            nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
        }
        else {
            nextSources[sourceId] = source;
        }
    }
    return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
    let { options, calendarApi } = context;
    let sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
    let fetchId = guid();
    sourceDef.fetch({
        eventSource,
        range: fetchRange,
        isRefetch,
        context,
    }, (res) => {
        let { rawEvents } = res;
        if (options.eventSourceSuccess) {
            rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.response) || rawEvents;
        }
        if (eventSource.success) {
            rawEvents = eventSource.success.call(calendarApi, rawEvents, res.response) || rawEvents;
        }
        context.dispatch({
            type: 'RECEIVE_EVENTS',
            sourceId: eventSource.sourceId,
            fetchId,
            fetchRange,
            rawEvents,
        });
    }, (error) => {
        let errorHandled = false;
        if (options.eventSourceFailure) {
            options.eventSourceFailure.call(calendarApi, error);
            errorHandled = true;
        }
        if (eventSource.failure) {
            eventSource.failure(error);
            errorHandled = true;
        }
        if (!errorHandled) {
            console.warn(error.message, error);
        }
        context.dispatch({
            type: 'RECEIVE_EVENT_ERROR',
            sourceId: eventSource.sourceId,
            fetchId,
            fetchRange,
            error,
        });
    });
    return Object.assign(Object.assign({}, eventSource), { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
    let eventSource = sourceHash[sourceId];
    if (eventSource && // not already removed
        fetchId === eventSource.latestFetchId) {
        return Object.assign(Object.assign({}, sourceHash), { [sourceId]: Object.assign(Object.assign({}, eventSource), { isFetching: false, fetchRange }) });
    }
    return sourceHash;
}
function excludeStaticSources(eventSources, context) {
    return filterHash(eventSources, (eventSource) => doesSourceNeedRange(eventSource, context));
}
function parseInitialSources(rawOptions, context) {
    let refiners = buildEventSourceRefiners(context);
    let rawSources = [].concat(rawOptions.eventSources || []);
    let sources = []; // parsed
    if (rawOptions.initialEvents) {
        rawSources.unshift(rawOptions.initialEvents);
    }
    if (rawOptions.events) {
        rawSources.unshift(rawOptions.events);
    }
    for (let rawSource of rawSources) {
        let source = parseEventSource(rawSource, context, refiners);
        if (source) {
            sources.push(source);
        }
    }
    return sources;
}
function doesSourceNeedRange(eventSource, context) {
    let defs = context.pluginHooks.eventSourceDefs;
    return !defs[eventSource.sourceDefId].ignoreRange;
}

function reduceDateSelection(currentSelection, action) {
    switch (action.type) {
        case 'UNSELECT_DATES':
            return null;
        case 'SELECT_DATES':
            return action.selection;
        default:
            return currentSelection;
    }
}

function reduceSelectedEvent(currentInstanceId, action) {
    switch (action.type) {
        case 'UNSELECT_EVENT':
            return '';
        case 'SELECT_EVENT':
            return action.eventInstanceId;
        default:
            return currentInstanceId;
    }
}

function reduceEventDrag(currentDrag, action) {
    let newDrag;
    switch (action.type) {
        case 'UNSET_EVENT_DRAG':
            return null;
        case 'SET_EVENT_DRAG':
            newDrag = action.state;
            return {
                affectedEvents: newDrag.affectedEvents,
                mutatedEvents: newDrag.mutatedEvents,
                isEvent: newDrag.isEvent,
            };
        default:
            return currentDrag;
    }
}

function reduceEventResize(currentResize, action) {
    let newResize;
    switch (action.type) {
        case 'UNSET_EVENT_RESIZE':
            return null;
        case 'SET_EVENT_RESIZE':
            newResize = action.state;
            return {
                affectedEvents: newResize.affectedEvents,
                mutatedEvents: newResize.mutatedEvents,
                isEvent: newResize.isEvent,
            };
        default:
            return currentResize;
    }
}

function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
    let header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
    let footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
    return { header, footer };
}
function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
    let sectionWidgets = {};
    let viewsWithButtons = [];
    let hasTitle = false;
    for (let sectionName in sectionStrHash) {
        let sectionStr = sectionStrHash[sectionName];
        let sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
        sectionWidgets[sectionName] = sectionRes.widgets;
        viewsWithButtons.push(...sectionRes.viewsWithButtons);
        hasTitle = hasTitle || sectionRes.hasTitle;
    }
    return { sectionWidgets, viewsWithButtons, hasTitle };
}
/*
BAD: querying icons and text here. should be done at render time
*/
function parseSection(sectionStr, calendarOptions, // defaults+overrides, then refined
calendarOptionOverrides, // overrides only!, unrefined :(
theme, viewSpecs, calendarApi) {
    let isRtl = calendarOptions.direction === 'rtl';
    let calendarCustomButtons = calendarOptions.customButtons || {};
    let calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
    let calendarButtonText = calendarOptions.buttonText || {};
    let calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
    let calendarButtonHints = calendarOptions.buttonHints || {};
    let sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
    let viewsWithButtons = [];
    let hasTitle = false;
    let widgets = sectionSubstrs.map((buttonGroupStr) => (buttonGroupStr.split(',').map((buttonName) => {
        if (buttonName === 'title') {
            hasTitle = true;
            return { buttonName };
        }
        let customButtonProps;
        let viewSpec;
        let buttonClick;
        let buttonIcon; // only one of these will be set
        let buttonText; // "
        let buttonHint;
        // ^ for the title="" attribute, for accessibility
        if ((customButtonProps = calendarCustomButtons[buttonName])) {
            buttonClick = (ev) => {
                if (customButtonProps.click) {
                    customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
                }
            };
            (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                (buttonText = customButtonProps.text);
            buttonHint = customButtonProps.hint || customButtonProps.text;
        }
        else if ((viewSpec = viewSpecs[buttonName])) {
            viewsWithButtons.push(buttonName);
            buttonClick = () => {
                calendarApi.changeView(buttonName);
            };
            (buttonText = viewSpec.buttonTextOverride) ||
                (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                (buttonText = viewSpec.buttonTextDefault);
            let textFallback = viewSpec.buttonTextOverride ||
                viewSpec.buttonTextDefault;
            buttonHint = formatWithOrdinals(viewSpec.buttonTitleOverride ||
                viewSpec.buttonTitleDefault ||
                calendarOptions.viewHint, [textFallback, buttonName], // view-name = buttonName
            textFallback);
        }
        else if (calendarApi[buttonName]) { // a calendarApi method
            buttonClick = () => {
                calendarApi[buttonName]();
            };
            (buttonText = calendarButtonTextOverrides[buttonName]) ||
                (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                (buttonText = calendarButtonText[buttonName]); // everything else is considered default
            if (buttonName === 'prevYear' || buttonName === 'nextYear') {
                let prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
                buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] ||
                    calendarButtonHints[prevOrNext], [
                    calendarButtonText.year || 'year',
                    'year',
                ], calendarButtonText[buttonName]);
            }
            else {
                buttonHint = (navUnit) => formatWithOrdinals(calendarButtonHintOverrides[buttonName] ||
                    calendarButtonHints[buttonName], [
                    calendarButtonText[navUnit] || navUnit,
                    navUnit,
                ], calendarButtonText[buttonName]);
            }
        }
        return { buttonName, buttonClick, buttonIcon, buttonText, buttonHint };
    })));
    return { widgets, viewsWithButtons, hasTitle };
}

// always represents the current view. otherwise, it'd need to change value every time date changes
class ViewImpl {
    constructor(type, getCurrentData, dateEnv) {
        this.type = type;
        this.getCurrentData = getCurrentData;
        this.dateEnv = dateEnv;
    }
    get calendar() {
        return this.getCurrentData().calendarApi;
    }
    get title() {
        return this.getCurrentData().viewTitle;
    }
    get activeStart() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    }
    get activeEnd() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    }
    get currentStart() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    }
    get currentEnd() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    }
    getOption(name) {
        return this.getCurrentData().options[name]; // are the view-specific options
    }
}

let eventSourceDef$2 = {
    ignoreRange: true,
    parseMeta(refined) {
        if (Array.isArray(refined.events)) {
            return refined.events;
        }
        return null;
    },
    fetch(arg, successCallback) {
        successCallback({
            rawEvents: arg.eventSource.meta,
        });
    },
};
const arrayEventSourcePlugin = createPlugin({
    name: 'array-event-source',
    eventSourceDefs: [eventSourceDef$2],
});

let eventSourceDef$1 = {
    parseMeta(refined) {
        if (typeof refined.events === 'function') {
            return refined.events;
        }
        return null;
    },
    fetch(arg, successCallback, errorCallback) {
        const { dateEnv } = arg.context;
        const func = arg.eventSource.meta;
        unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), (rawEvents) => successCallback({ rawEvents }), errorCallback);
    },
};
const funcEventSourcePlugin = createPlugin({
    name: 'func-event-source',
    eventSourceDefs: [eventSourceDef$1],
});

const JSON_FEED_EVENT_SOURCE_REFINERS = {
    method: String,
    extraParams: identity,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
};

let eventSourceDef$3 = {
    parseMeta(refined) {
        if (refined.url && (refined.format === 'json' || !refined.format)) {
            return {
                url: refined.url,
                format: 'json',
                method: (refined.method || 'GET').toUpperCase(),
                extraParams: refined.extraParams,
                startParam: refined.startParam,
                endParam: refined.endParam,
                timeZoneParam: refined.timeZoneParam,
            };
        }
        return null;
    },
    fetch(arg, successCallback, errorCallback) {
        const { meta } = arg.eventSource;
        const requestParams = buildRequestParams(meta, arg.range, arg.context);
        requestJson(meta.method, meta.url, requestParams).then(([rawEvents, response]) => {
            successCallback({ rawEvents, response });
        }, errorCallback);
    },
};
const jsonFeedEventSourcePlugin = createPlugin({
    name: 'json-event-source',
    eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
    eventSourceDefs: [eventSourceDef$3],
});
function buildRequestParams(meta, range, context) {
    let { dateEnv, options } = context;
    let startParam;
    let endParam;
    let timeZoneParam;
    let customRequestParams;
    let params = {};
    startParam = meta.startParam;
    if (startParam == null) {
        startParam = options.startParam;
    }
    endParam = meta.endParam;
    if (endParam == null) {
        endParam = options.endParam;
    }
    timeZoneParam = meta.timeZoneParam;
    if (timeZoneParam == null) {
        timeZoneParam = options.timeZoneParam;
    }
    // retrieve any outbound GET/POST data from the options
    if (typeof meta.extraParams === 'function') {
        // supplied as a function that returns a key/value object
        customRequestParams = meta.extraParams();
    }
    else {
        // probably supplied as a straight key/value object
        customRequestParams = meta.extraParams || {};
    }
    Object.assign(params, customRequestParams);
    params[startParam] = dateEnv.formatIso(range.start);
    params[endParam] = dateEnv.formatIso(range.end);
    if (dateEnv.timeZone !== 'local') {
        params[timeZoneParam] = dateEnv.timeZone;
    }
    return params;
}

const SIMPLE_RECURRING_REFINERS = {
    daysOfWeek: identity,
    startTime: createDuration,
    endTime: createDuration,
    duration: createDuration,
    startRecur: identity,
    endRecur: identity,
};

let recurring = {
    parse(refined, dateEnv) {
        if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
            let recurringData = {
                daysOfWeek: refined.daysOfWeek || null,
                startTime: refined.startTime || null,
                endTime: refined.endTime || null,
                startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
                endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null,
            };
            let duration;
            if (refined.duration) {
                duration = refined.duration;
            }
            if (!duration && refined.startTime && refined.endTime) {
                duration = subtractDurations(refined.endTime, refined.startTime);
            }
            return {
                allDayGuess: Boolean(!refined.startTime && !refined.endTime),
                duration,
                typeData: recurringData, // doesn't need endTime anymore but oh well
            };
        }
        return null;
    },
    expand(typeData, framingRange, dateEnv) {
        let clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
        if (clippedFramingRange) {
            return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
        }
        return [];
    },
};
const simpleRecurringEventsPlugin = createPlugin({
    name: 'simple-recurring-event',
    recurringTypes: [recurring],
    eventRefiners: SIMPLE_RECURRING_REFINERS,
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
    let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
    let dayMarker = startOfDay(framingRange.start);
    let endMarker = framingRange.end;
    let instanceStarts = [];
    while (dayMarker < endMarker) {
        let instanceStart;
        // if everyday, or this particular day-of-week
        if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
            if (startTime) {
                instanceStart = dateEnv.add(dayMarker, startTime);
            }
            else {
                instanceStart = dayMarker;
            }
            instanceStarts.push(instanceStart);
        }
        dayMarker = addDays(dayMarker, 1);
    }
    return instanceStarts;
}

const changeHandlerPlugin = createPlugin({
    name: 'change-handler',
    optionChangeHandlers: {
        events(events, context) {
            handleEventSources([events], context);
        },
        eventSources: handleEventSources,
    },
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/
function handleEventSources(inputs, context) {
    let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
    if (unfoundSources.length === 1 &&
        inputs.length === 1 &&
        Array.isArray(unfoundSources[0]._raw) &&
        Array.isArray(inputs[0])) {
        context.dispatch({
            type: 'RESET_RAW_EVENTS',
            sourceId: unfoundSources[0].sourceId,
            rawEvents: inputs[0],
        });
        return;
    }
    let newInputs = [];
    for (let input of inputs) {
        let inputFound = false;
        for (let i = 0; i < unfoundSources.length; i += 1) {
            if (unfoundSources[i]._raw === input) {
                unfoundSources.splice(i, 1); // delete
                inputFound = true;
                break;
            }
        }
        if (!inputFound) {
            newInputs.push(input);
        }
    }
    for (let unfoundSource of unfoundSources) {
        context.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: unfoundSource.sourceId,
        });
    }
    for (let newInput of newInputs) {
        context.calendarApi.addEventSource(newInput);
    }
}

function handleDateProfile(dateProfile, context) {
    context.emitter.trigger('datesSet', Object.assign(Object.assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
}

function handleEventStore(eventStore, context) {
    let { emitter } = context;
    if (emitter.hasHandlers('eventsSet')) {
        emitter.trigger('eventsSet', buildEventApis(eventStore, context));
    }
}

/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/
const globalPlugins = [
    arrayEventSourcePlugin,
    funcEventSourcePlugin,
    jsonFeedEventSourcePlugin,
    simpleRecurringEventsPlugin,
    changeHandlerPlugin,
    createPlugin({
        name: 'misc',
        isLoadingFuncs: [
            (state) => computeEventSourcesLoading(state.eventSources),
        ],
        propSetHandlers: {
            dateProfile: handleDateProfile,
            eventStore: handleEventStore,
        },
    }),
];

class TaskRunner {
    constructor(runTaskOption, drainedOption) {
        this.runTaskOption = runTaskOption;
        this.drainedOption = drainedOption;
        this.queue = [];
        this.delayedRunner = new DelayedRunner(this.drain.bind(this));
    }
    request(task, delay) {
        this.queue.push(task);
        this.delayedRunner.request(delay);
    }
    pause(scope) {
        this.delayedRunner.pause(scope);
    }
    resume(scope, force) {
        this.delayedRunner.resume(scope, force);
    }
    drain() {
        let { queue } = this;
        while (queue.length) {
            let completedTasks = [];
            let task;
            while ((task = queue.shift())) {
                this.runTask(task);
                completedTasks.push(task);
            }
            this.drained(completedTasks);
        } // keep going, in case new tasks were added in the drained handler
    }
    runTask(task) {
        if (this.runTaskOption) {
            this.runTaskOption(task);
        }
    }
    drained(completedTasks) {
        if (this.drainedOption) {
            this.drainedOption(completedTasks);
        }
    }
}

// Computes what the title at the top of the calendarApi should be for this view
function buildTitle(dateProfile, viewOptions, dateEnv) {
    let range;
    // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
    if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
        range = dateProfile.currentRange;
    }
    else { // for day units or smaller, use the actual day range
        range = dateProfile.activeRange;
    }
    return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
        isEndExclusive: dateProfile.isRangeAllDay,
        defaultSeparator: viewOptions.titleRangeSeparator,
    });
}
// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
function buildTitleFormat(dateProfile) {
    let { currentRangeUnit } = dateProfile;
    if (currentRangeUnit === 'year') {
        return { year: 'numeric' };
    }
    if (currentRangeUnit === 'month') {
        return { year: 'numeric', month: 'long' }; // like "September 2014"
    }
    let days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
    if (days !== null && days > 1) {
        // multi-day range. shorter, like "Sep 9 - 10 2014"
        return { year: 'numeric', month: 'short', day: 'numeric' };
    }
    // one day. longer, like "September 9 2014"
    return { year: 'numeric', month: 'long', day: 'numeric' };
}

// in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too
class CalendarDataManager {
    constructor(props) {
        this.computeCurrentViewData = memoize(this._computeCurrentViewData);
        this.organizeRawLocales = memoize(organizeRawLocales);
        this.buildLocale = memoize(buildLocale);
        this.buildPluginHooks = buildBuildPluginHooks();
        this.buildDateEnv = memoize(buildDateEnv$1);
        this.buildTheme = memoize(buildTheme);
        this.parseToolbars = memoize(parseToolbars);
        this.buildViewSpecs = memoize(buildViewSpecs);
        this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
        this.buildViewApi = memoize(buildViewApi);
        this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
        this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
        this.buildEventUiBases = memoize(buildEventUiBases);
        this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
        this.buildTitle = memoize(buildTitle);
        this.emitter = new Emitter();
        this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
        this.currentCalendarOptionsInput = {};
        this.currentCalendarOptionsRefined = {};
        this.currentViewOptionsInput = {};
        this.currentViewOptionsRefined = {};
        this.currentCalendarOptionsRefiners = {};
        this.optionsForRefining = [];
        this.optionsForHandling = [];
        this.getCurrentData = () => this.data;
        this.dispatch = (action) => {
            this.actionRunner.request(action); // protects against recursive calls to _handleAction
        };
        this.props = props;
        this.actionRunner.pause();
        let dynamicOptionOverrides = {};
        let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
        let currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
        let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
        // wire things up
        // TODO: not DRY
        props.calendarApi.currentDataManager = this;
        this.emitter.setThisContext(props.calendarApi);
        this.emitter.setOptions(currentViewData.options);
        let currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
        let dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
        if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
            currentDate = dateProfile.currentRange.start;
        }
        let calendarContext = {
            dateEnv: optionsData.dateEnv,
            options: optionsData.calendarOptions,
            pluginHooks: optionsData.pluginHooks,
            calendarApi: props.calendarApi,
            dispatch: this.dispatch,
            emitter: this.emitter,
            getCurrentData: this.getCurrentData,
        };
        // needs to be after setThisContext
        for (let callback of optionsData.pluginHooks.contextInit) {
            callback(calendarContext);
        }
        // NOT DRY
        let eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
        let initialState = {
            dynamicOptionOverrides,
            currentViewType,
            currentDate,
            dateProfile,
            businessHours: this.parseContextBusinessHours(calendarContext),
            eventSources,
            eventUiBases: {},
            eventStore: createEmptyEventStore(),
            renderableEventStore: createEmptyEventStore(),
            dateSelection: null,
            eventSelection: '',
            eventDrag: null,
            eventResize: null,
            selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig,
        };
        let contextAndState = Object.assign(Object.assign({}, calendarContext), initialState);
        for (let reducer of optionsData.pluginHooks.reducers) {
            Object.assign(initialState, reducer(null, null, contextAndState));
        }
        if (computeIsLoading(initialState, calendarContext)) {
            this.emitter.trigger('loading', true); // NOT DRY
        }
        this.state = initialState;
        this.updateData();
        this.actionRunner.resume();
    }
    resetOptions(optionOverrides, changedOptionNames) {
        let { props } = this;
        if (changedOptionNames === undefined) {
            props.optionOverrides = optionOverrides;
        }
        else {
            props.optionOverrides = Object.assign(Object.assign({}, (props.optionOverrides || {})), optionOverrides);
            this.optionsForRefining.push(...changedOptionNames);
        }
        if (changedOptionNames === undefined || changedOptionNames.length) {
            this.actionRunner.request({
                type: 'NOTHING',
            });
        }
    }
    _handleAction(action) {
        let { props, state, emitter } = this;
        let dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
        let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
        let currentViewType = reduceViewType(state.currentViewType, action);
        let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
        // wire things up
        // TODO: not DRY
        props.calendarApi.currentDataManager = this;
        emitter.setThisContext(props.calendarApi);
        emitter.setOptions(currentViewData.options);
        let calendarContext = {
            dateEnv: optionsData.dateEnv,
            options: optionsData.calendarOptions,
            pluginHooks: optionsData.pluginHooks,
            calendarApi: props.calendarApi,
            dispatch: this.dispatch,
            emitter,
            getCurrentData: this.getCurrentData,
        };
        let { currentDate, dateProfile } = state;
        if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) { // hack
            dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
        }
        currentDate = reduceCurrentDate(currentDate, action);
        dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
        if (action.type === 'PREV' || // TODO: move this logic into DateProfileGenerator
            action.type === 'NEXT' || // "
            !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
            currentDate = dateProfile.currentRange.start;
        }
        let eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
        let eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
        let isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading
        let renderableEventStore = (isEventsLoading && !currentViewData.options.progressiveEventRendering) ?
            (state.renderableEventStore || eventStore) : // try from previous state
            eventStore;
        let { eventUiSingleBase, selectionConfig } = this.buildViewUiProps(calendarContext); // will memoize obj
        let eventUiBySource = this.buildEventUiBySource(eventSources);
        let eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
        let newState = {
            dynamicOptionOverrides,
            currentViewType,
            currentDate,
            dateProfile,
            eventSources,
            eventStore,
            renderableEventStore,
            selectionConfig,
            eventUiBases,
            businessHours: this.parseContextBusinessHours(calendarContext),
            dateSelection: reduceDateSelection(state.dateSelection, action),
            eventSelection: reduceSelectedEvent(state.eventSelection, action),
            eventDrag: reduceEventDrag(state.eventDrag, action),
            eventResize: reduceEventResize(state.eventResize, action),
        };
        let contextAndState = Object.assign(Object.assign({}, calendarContext), newState);
        for (let reducer of optionsData.pluginHooks.reducers) {
            Object.assign(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value
        }
        let wasLoading = computeIsLoading(state, calendarContext);
        let isLoading = computeIsLoading(newState, calendarContext);
        // TODO: use propSetHandlers in plugin system
        if (!wasLoading && isLoading) {
            emitter.trigger('loading', true);
        }
        else if (wasLoading && !isLoading) {
            emitter.trigger('loading', false);
        }
        this.state = newState;
        if (props.onAction) {
            props.onAction(action);
        }
    }
    updateData() {
        let { props, state } = this;
        let oldData = this.data;
        let optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
        let currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
        let data = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv), calendarApi: props.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, optionsData), currentViewData), state);
        let changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
        let oldCalendarOptions = oldData && oldData.calendarOptions;
        let newCalendarOptions = optionsData.calendarOptions;
        if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
            if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
                // hack
                state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
                state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
                state.renderableEventStore = data.renderableEventStore = rezoneEventStoreDates(data.renderableEventStore, oldData.dateEnv, data.dateEnv);
            }
            for (let optionName in changeHandlers) {
                if (this.optionsForHandling.indexOf(optionName) !== -1 ||
                    oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
                    changeHandlers[optionName](newCalendarOptions[optionName], data);
                }
            }
        }
        this.optionsForHandling = [];
        if (props.onData) {
            props.onData(data);
        }
    }
    computeOptionsData(optionOverrides, dynamicOptionOverrides, calendarApi) {
        // TODO: blacklist options that are handled by optionChangeHandlers
        if (!this.optionsForRefining.length &&
            optionOverrides === this.stableOptionOverrides &&
            dynamicOptionOverrides === this.stableDynamicOptionOverrides) {
            return this.stableCalendarOptionsData;
        }
        let { refinedOptions, pluginHooks, localeDefaults, availableLocaleData, extra, } = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides);
        warnUnknownOptions(extra);
        let dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
        let viewSpecs = this.buildViewSpecs(pluginHooks.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, localeDefaults);
        let theme = this.buildTheme(refinedOptions, pluginHooks);
        let toolbarConfig = this.parseToolbars(refinedOptions, this.stableOptionOverrides, theme, viewSpecs, calendarApi);
        return this.stableCalendarOptionsData = {
            calendarOptions: refinedOptions,
            pluginHooks,
            dateEnv,
            viewSpecs,
            theme,
            toolbarConfig,
            localeDefaults,
            availableRawLocales: availableLocaleData.map,
        };
    }
    // always called from behind a memoizer
    processRawCalendarOptions(optionOverrides, dynamicOptionOverrides) {
        let { locales, locale } = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            optionOverrides,
            dynamicOptionOverrides,
        ]);
        let availableLocaleData = this.organizeRawLocales(locales);
        let availableRawLocales = availableLocaleData.map;
        let localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
        let pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
        let refiners = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
        let extra = {};
        let raw = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            localeDefaults,
            optionOverrides,
            dynamicOptionOverrides,
        ]);
        let refined = {};
        let currentRaw = this.currentCalendarOptionsInput;
        let currentRefined = this.currentCalendarOptionsRefined;
        let anyChanges = false;
        for (let optionName in raw) {
            if (this.optionsForRefining.indexOf(optionName) === -1 && (raw[optionName] === currentRaw[optionName] || (COMPLEX_OPTION_COMPARATORS[optionName] &&
                (optionName in currentRaw) &&
                COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])))) {
                refined[optionName] = currentRefined[optionName];
            }
            else if (refiners[optionName]) {
                refined[optionName] = refiners[optionName](raw[optionName]);
                anyChanges = true;
            }
            else {
                extra[optionName] = currentRaw[optionName];
            }
        }
        if (anyChanges) {
            this.currentCalendarOptionsInput = raw;
            this.currentCalendarOptionsRefined = refined;
            this.stableOptionOverrides = optionOverrides;
            this.stableDynamicOptionOverrides = dynamicOptionOverrides;
        }
        this.optionsForHandling.push(...this.optionsForRefining);
        this.optionsForRefining = [];
        return {
            rawOptions: this.currentCalendarOptionsInput,
            refinedOptions: this.currentCalendarOptionsRefined,
            pluginHooks,
            availableLocaleData,
            localeDefaults,
            extra,
        };
    }
    _computeCurrentViewData(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
        let viewSpec = optionsData.viewSpecs[viewType];
        if (!viewSpec) {
            throw new Error(`viewType "${viewType}" is not available. Please make sure you've loaded all neccessary plugins`);
        }
        let { refinedOptions, extra } = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides);
        warnUnknownOptions(extra);
        let dateProfileGenerator = this.buildDateProfileGenerator({
            dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
            duration: viewSpec.duration,
            durationUnit: viewSpec.durationUnit,
            usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
            dateEnv: optionsData.dateEnv,
            calendarApi: this.props.calendarApi,
            slotMinTime: refinedOptions.slotMinTime,
            slotMaxTime: refinedOptions.slotMaxTime,
            showNonCurrentDates: refinedOptions.showNonCurrentDates,
            dayCount: refinedOptions.dayCount,
            dateAlignment: refinedOptions.dateAlignment,
            dateIncrement: refinedOptions.dateIncrement,
            hiddenDays: refinedOptions.hiddenDays,
            weekends: refinedOptions.weekends,
            nowInput: refinedOptions.now,
            validRangeInput: refinedOptions.validRange,
            visibleRangeInput: refinedOptions.visibleRange,
            fixedWeekCount: refinedOptions.fixedWeekCount,
        });
        let viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
        return { viewSpec, options: refinedOptions, dateProfileGenerator, viewApi };
    }
    processRawViewOptions(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
        let raw = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            viewSpec.optionDefaults,
            localeDefaults,
            optionOverrides,
            viewSpec.optionOverrides,
            dynamicOptionOverrides,
        ]);
        let refiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
        let refined = {};
        let currentRaw = this.currentViewOptionsInput;
        let currentRefined = this.currentViewOptionsRefined;
        let anyChanges = false;
        let extra = {};
        for (let optionName in raw) {
            if (raw[optionName] === currentRaw[optionName] ||
                (COMPLEX_OPTION_COMPARATORS[optionName] &&
                    COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], currentRaw[optionName]))) {
                refined[optionName] = currentRefined[optionName];
            }
            else {
                if (raw[optionName] === this.currentCalendarOptionsInput[optionName] ||
                    (COMPLEX_OPTION_COMPARATORS[optionName] &&
                        COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName]))) {
                    if (optionName in this.currentCalendarOptionsRefined) { // might be an "extra" prop
                        refined[optionName] = this.currentCalendarOptionsRefined[optionName];
                    }
                }
                else if (refiners[optionName]) {
                    refined[optionName] = refiners[optionName](raw[optionName]);
                }
                else {
                    extra[optionName] = raw[optionName];
                }
                anyChanges = true;
            }
        }
        if (anyChanges) {
            this.currentViewOptionsInput = raw;
            this.currentViewOptionsRefined = refined;
        }
        return {
            rawOptions: this.currentViewOptionsInput,
            refinedOptions: this.currentViewOptionsRefined,
            extra,
        };
    }
}
function buildDateEnv$1(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
    let locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
    return new DateEnv({
        calendarSystem: 'gregory',
        timeZone,
        namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
        locale,
        weekNumberCalculation,
        firstDay,
        weekText,
        cmdFormatter: pluginHooks.cmdFormatter,
        defaultSeparator,
    });
}
function buildTheme(options, pluginHooks) {
    let ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
    return new ThemeClass(options);
}
function buildDateProfileGenerator(props) {
    let DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
    return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
    return new ViewImpl(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
    return mapHash(eventSources, (eventSource) => eventSource.ui);
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
    let eventUiBases = { '': eventUiSingleBase };
    for (let defId in eventDefs) {
        let def = eventDefs[defId];
        if (def.sourceId && eventUiBySource[def.sourceId]) {
            eventUiBases[defId] = eventUiBySource[def.sourceId];
        }
    }
    return eventUiBases;
}
function buildViewUiProps(calendarContext) {
    let { options } = calendarContext;
    return {
        eventUiSingleBase: createEventUi({
            display: options.eventDisplay,
            editable: options.editable,
            startEditable: options.eventStartEditable,
            durationEditable: options.eventDurationEditable,
            constraint: options.eventConstraint,
            overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
            allow: options.eventAllow,
            backgroundColor: options.eventBackgroundColor,
            borderColor: options.eventBorderColor,
            textColor: options.eventTextColor,
            color: options.eventColor,
            // classNames: options.eventClassNames // render hook will handle this
        }, calendarContext),
        selectionConfig: createEventUi({
            constraint: options.selectConstraint,
            overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
            allow: options.selectAllow,
        }, calendarContext),
    };
}
function computeIsLoading(state, context) {
    for (let isLoadingFunc of context.pluginHooks.isLoadingFuncs) {
        if (isLoadingFunc(state)) {
            return true;
        }
    }
    return false;
}
function parseContextBusinessHours(calendarContext) {
    return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}
function warnUnknownOptions(options, viewName) {
    for (let optionName in options) {
        console.warn(`Unknown option '${optionName}'` +
            (''));
    }
}

class ToolbarSection extends BaseComponent {
    render() {
        let children = this.props.widgetGroups.map((widgetGroup) => this.renderWidgetGroup(widgetGroup));
        return y('div', { className: 'fc-toolbar-chunk' }, ...children);
    }
    renderWidgetGroup(widgetGroup) {
        let { props } = this;
        let { theme } = this.context;
        let children = [];
        let isOnlyButtons = true;
        for (let widget of widgetGroup) {
            let { buttonName, buttonClick, buttonText, buttonIcon, buttonHint } = widget;
            if (buttonName === 'title') {
                isOnlyButtons = false;
                children.push(y("h2", { className: "fc-toolbar-title", id: props.titleId }, props.title));
            }
            else {
                let isPressed = buttonName === props.activeButton;
                let isDisabled = (!props.isTodayEnabled && buttonName === 'today') ||
                    (!props.isPrevEnabled && buttonName === 'prev') ||
                    (!props.isNextEnabled && buttonName === 'next');
                let buttonClasses = [`fc-${buttonName}-button`, theme.getClass('button')];
                if (isPressed) {
                    buttonClasses.push(theme.getClass('buttonActive'));
                }
                children.push(y("button", { type: "button", title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint, disabled: isDisabled, "aria-pressed": isPressed, className: buttonClasses.join(' '), onClick: buttonClick }, buttonText || (buttonIcon ? y("span", { className: buttonIcon, role: "img" }) : '')));
            }
        }
        if (children.length > 1) {
            let groupClassName = (isOnlyButtons && theme.getClass('buttonGroup')) || '';
            return y('div', { className: groupClassName }, ...children);
        }
        return children[0];
    }
}

class Toolbar extends BaseComponent {
    render() {
        let { model, extraClassName } = this.props;
        let forceLtr = false;
        let startContent;
        let endContent;
        let sectionWidgets = model.sectionWidgets;
        let centerContent = sectionWidgets.center;
        if (sectionWidgets.left) {
            forceLtr = true;
            startContent = sectionWidgets.left;
        }
        else {
            startContent = sectionWidgets.start;
        }
        if (sectionWidgets.right) {
            forceLtr = true;
            endContent = sectionWidgets.right;
        }
        else {
            endContent = sectionWidgets.end;
        }
        let classNames = [
            extraClassName || '',
            'fc-toolbar',
            forceLtr ? 'fc-toolbar-ltr' : '',
        ];
        return (y("div", { className: classNames.join(' ') },
            this.renderSection('start', startContent || []),
            this.renderSection('center', centerContent || []),
            this.renderSection('end', endContent || [])));
    }
    renderSection(key, widgetGroups) {
        let { props } = this;
        return (y(ToolbarSection, { key: key, widgetGroups: widgetGroups, title: props.title, navUnit: props.navUnit, activeButton: props.activeButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled, titleId: props.titleId }));
    }
}

class ViewHarness extends BaseComponent {
    constructor() {
        super(...arguments);
        this.state = {
            availableWidth: null,
        };
        this.handleEl = (el) => {
            this.el = el;
            setRef(this.props.elRef, el);
            this.updateAvailableWidth();
        };
        this.handleResize = () => {
            this.updateAvailableWidth();
        };
    }
    render() {
        let { props, state } = this;
        let { aspectRatio } = props;
        let classNames = [
            'fc-view-harness',
            (aspectRatio || props.liquid || props.height)
                ? 'fc-view-harness-active' // harness controls the height
                : 'fc-view-harness-passive', // let the view do the height
        ];
        let height = '';
        let paddingBottom = '';
        if (aspectRatio) {
            if (state.availableWidth !== null) {
                height = state.availableWidth / aspectRatio;
            }
            else {
                // while waiting to know availableWidth, we can't set height to *zero*
                // because will cause lots of unnecessary scrollbars within scrollgrid.
                // BETTER: don't start rendering ANYTHING yet until we know container width
                // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
                paddingBottom = `${(1 / aspectRatio) * 100}%`;
            }
        }
        else {
            height = props.height || '';
        }
        return (y("div", { "aria-labelledby": props.labeledById, ref: this.handleEl, className: classNames.join(' '), style: { height, paddingBottom } }, props.children));
    }
    componentDidMount() {
        this.context.addResizeHandler(this.handleResize);
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize);
    }
    updateAvailableWidth() {
        if (this.el && // needed. but why?
            this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
        ) {
            this.setState({ availableWidth: this.el.offsetWidth });
        }
    }
}

/*
Detects when the user clicks on an event within a DateComponent
*/
class EventClicking extends Interaction {
    constructor(settings) {
        super(settings);
        this.handleSegClick = (ev, segEl) => {
            let { component } = this;
            let { context } = component;
            let seg = getElSeg(segEl);
            if (seg && // might be the <div> surrounding the more link
                component.isValidSegDownEl(ev.target)) {
                // our way to simulate a link click for elements that can't be <a> tags
                // grab before trigger fired in case trigger trashes DOM thru rerendering
                let hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
                let url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                context.emitter.trigger('eventClick', {
                    el: segEl,
                    event: new EventImpl(component.context, seg.eventRange.def, seg.eventRange.instance),
                    jsEvent: ev,
                    view: context.viewApi,
                });
                if (url && !ev.defaultPrevented) {
                    window.location.href = url;
                }
            }
        };
        this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
        this.handleSegClick);
    }
}

/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/
class EventHovering extends Interaction {
    constructor(settings) {
        super(settings);
        // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
        this.handleEventElRemove = (el) => {
            if (el === this.currentSegEl) {
                this.handleSegLeave(null, this.currentSegEl);
            }
        };
        this.handleSegEnter = (ev, segEl) => {
            if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                this.currentSegEl = segEl;
                this.triggerEvent('eventMouseEnter', ev, segEl);
            }
        };
        this.handleSegLeave = (ev, segEl) => {
            if (this.currentSegEl) {
                this.currentSegEl = null;
                this.triggerEvent('eventMouseLeave', ev, segEl);
            }
        };
        this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
        this.handleSegEnter, this.handleSegLeave);
    }
    destroy() {
        this.removeHoverListeners();
    }
    triggerEvent(publicEvName, ev, segEl) {
        let { component } = this;
        let { context } = component;
        let seg = getElSeg(segEl);
        if (!ev || component.isValidSegDownEl(ev.target)) {
            context.emitter.trigger(publicEvName, {
                el: segEl,
                event: new EventImpl(context, seg.eventRange.def, seg.eventRange.instance),
                jsEvent: ev,
                view: context.viewApi,
            });
        }
    }
}

class CalendarContent extends PureComponent {
    constructor() {
        super(...arguments);
        this.buildViewContext = memoize(buildViewContext);
        this.buildViewPropTransformers = memoize(buildViewPropTransformers);
        this.buildToolbarProps = memoize(buildToolbarProps);
        this.headerRef = d();
        this.footerRef = d();
        this.interactionsStore = {};
        // eslint-disable-next-line
        this.state = {
            viewLabelId: getUniqueDomId(),
        };
        // Component Registration
        // -----------------------------------------------------------------------------------------------------------------
        this.registerInteractiveComponent = (component, settingsInput) => {
            let settings = parseInteractionSettings(component, settingsInput);
            let DEFAULT_INTERACTIONS = [
                EventClicking,
                EventHovering,
            ];
            let interactionClasses = DEFAULT_INTERACTIONS.concat(this.props.pluginHooks.componentInteractions);
            let interactions = interactionClasses.map((TheInteractionClass) => new TheInteractionClass(settings));
            this.interactionsStore[component.uid] = interactions;
            interactionSettingsStore[component.uid] = settings;
        };
        this.unregisterInteractiveComponent = (component) => {
            let listeners = this.interactionsStore[component.uid];
            if (listeners) {
                for (let listener of listeners) {
                    listener.destroy();
                }
                delete this.interactionsStore[component.uid];
            }
            delete interactionSettingsStore[component.uid];
        };
        // Resizing
        // -----------------------------------------------------------------------------------------------------------------
        this.resizeRunner = new DelayedRunner(() => {
            this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?
            this.props.emitter.trigger('windowResize', { view: this.props.viewApi });
        });
        this.handleWindowResize = (ev) => {
            let { options } = this.props;
            if (options.handleWindowResize &&
                ev.target === window // avoid jqui events
            ) {
                this.resizeRunner.request(options.windowResizeDelay);
            }
        };
    }
    /*
    renders INSIDE of an outer div
    */
    render() {
        let { props } = this;
        let { toolbarConfig, options } = props;
        let toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
        props.viewTitle);
        let viewVGrow = false;
        let viewHeight = '';
        let viewAspectRatio;
        if (props.isHeightAuto || props.forPrint) {
            viewHeight = '';
        }
        else if (options.height != null) {
            viewVGrow = true;
        }
        else if (options.contentHeight != null) {
            viewHeight = options.contentHeight;
        }
        else {
            viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
        }
        let viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
        let viewLabelId = (toolbarConfig.header && toolbarConfig.header.hasTitle)
            ? this.state.viewLabelId
            : undefined;
        return (y(ViewContextType.Provider, { value: viewContext },
            toolbarConfig.header && (y(Toolbar, Object.assign({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: toolbarConfig.header, titleId: viewLabelId }, toolbarProps))),
            y(ViewHarness, { liquid: viewVGrow, height: viewHeight, aspectRatio: viewAspectRatio, labeledById: viewLabelId },
                this.renderView(props),
                this.buildAppendContent()),
            toolbarConfig.footer && (y(Toolbar, Object.assign({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: toolbarConfig.footer, titleId: "" }, toolbarProps)))));
    }
    componentDidMount() {
        let { props } = this;
        this.calendarInteractions = props.pluginHooks.calendarInteractions
            .map((CalendarInteractionClass) => new CalendarInteractionClass(props));
        window.addEventListener('resize', this.handleWindowResize);
        let { propSetHandlers } = props.pluginHooks;
        for (let propName in propSetHandlers) {
            propSetHandlers[propName](props[propName], props);
        }
    }
    componentDidUpdate(prevProps) {
        let { props } = this;
        let { propSetHandlers } = props.pluginHooks;
        for (let propName in propSetHandlers) {
            if (props[propName] !== prevProps[propName]) {
                propSetHandlers[propName](props[propName], props);
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        this.resizeRunner.clear();
        for (let interaction of this.calendarInteractions) {
            interaction.destroy();
        }
        this.props.emitter.trigger('_unmount');
    }
    buildAppendContent() {
        let { props } = this;
        let children = props.pluginHooks.viewContainerAppends.map((buildAppendContent) => buildAppendContent(props));
        return y(_, {}, ...children);
    }
    renderView(props) {
        let { pluginHooks } = props;
        let { viewSpec } = props;
        let viewProps = {
            dateProfile: props.dateProfile,
            businessHours: props.businessHours,
            eventStore: props.renderableEventStore,
            eventUiBases: props.eventUiBases,
            dateSelection: props.dateSelection,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize,
            isHeightAuto: props.isHeightAuto,
            forPrint: props.forPrint,
        };
        let transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
        for (let transformer of transformers) {
            Object.assign(viewProps, transformer.transform(viewProps, props));
        }
        let ViewComponent = viewSpec.component;
        return (y(ViewComponent, Object.assign({}, viewProps)));
    }
}
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
    // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
    let todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason
    let prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
    let nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
    return {
        title,
        activeButton: viewSpec.type,
        navUnit: viewSpec.singleUnit,
        isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
        isPrevEnabled: prevInfo.isValid,
        isNextEnabled: nextInfo.isValid,
    };
}
// Plugin
// -----------------------------------------------------------------------------------------------------------------
function buildViewPropTransformers(theClasses) {
    return theClasses.map((TheClass) => new TheClass());
}

class Calendar extends CalendarImpl {
    constructor(el, optionOverrides = {}) {
        super();
        this.isRendering = false;
        this.isRendered = false;
        this.currentClassNames = [];
        this.customContentRenderId = 0;
        this.handleAction = (action) => {
            // actions we know we want to render immediately
            switch (action.type) {
                case 'SET_EVENT_DRAG':
                case 'SET_EVENT_RESIZE':
                    this.renderRunner.tryDrain();
            }
        };
        this.handleData = (data) => {
            this.currentData = data;
            this.renderRunner.request(data.calendarOptions.rerenderDelay);
        };
        this.handleRenderRequest = () => {
            if (this.isRendering) {
                this.isRendered = true;
                let { currentData } = this;
                flushSync(() => {
                    D$1(y(CalendarRoot, { options: currentData.calendarOptions, theme: currentData.theme, emitter: currentData.emitter }, (classNames, height, isHeightAuto, forPrint) => {
                        this.setClassNames(classNames);
                        this.setHeight(height);
                        return (y(RenderId.Provider, { value: this.customContentRenderId },
                            y(CalendarContent, Object.assign({ isHeightAuto: isHeightAuto, forPrint: forPrint }, currentData))));
                    }), this.el);
                });
            }
            else if (this.isRendered) {
                this.isRendered = false;
                D$1(null, this.el);
                this.setClassNames([]);
                this.setHeight('');
            }
        };
        ensureElHasStyles(el);
        this.el = el;
        this.renderRunner = new DelayedRunner(this.handleRenderRequest);
        new CalendarDataManager({
            optionOverrides,
            calendarApi: this,
            onAction: this.handleAction,
            onData: this.handleData,
        });
    }
    render() {
        let wasRendering = this.isRendering;
        if (!wasRendering) {
            this.isRendering = true;
        }
        else {
            this.customContentRenderId += 1;
        }
        this.renderRunner.request();
        if (wasRendering) {
            this.updateSize();
        }
    }
    destroy() {
        if (this.isRendering) {
            this.isRendering = false;
            this.renderRunner.request();
        }
    }
    updateSize() {
        flushSync(() => {
            super.updateSize();
        });
    }
    batchRendering(func) {
        this.renderRunner.pause('batchRendering');
        func();
        this.renderRunner.resume('batchRendering');
    }
    pauseRendering() {
        this.renderRunner.pause('pauseRendering');
    }
    resumeRendering() {
        this.renderRunner.resume('pauseRendering', true);
    }
    resetOptions(optionOverrides, changedOptionNames) {
        this.currentDataManager.resetOptions(optionOverrides, changedOptionNames);
    }
    setClassNames(classNames) {
        if (!isArraysEqual(classNames, this.currentClassNames)) {
            let { classList } = this.el;
            for (let className of this.currentClassNames) {
                classList.remove(className);
            }
            for (let className of classNames) {
                classList.add(className);
            }
            this.currentClassNames = classNames;
        }
    }
    setHeight(height) {
        applyStyleProp(this.el, 'height', height);
    }
}

var ical = {exports: {}};

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Portions Copyright (C) Philipp Kewisch, 2021 */

(function (module) {
	/* jshint ignore:start */
	var ICAL;
	(function() {
	  /* istanbul ignore next */
	  {
	    // CommonJS, where exports may be different each time.
	    ICAL = module.exports;
	  }
	})();
	/* jshint ignore:end */
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */

	/**
	 * The number of characters before iCalendar line folding should occur
	 * @type {Number}
	 * @default 75
	 */
	ICAL.foldLength = 75;


	/**
	 * The character(s) to be used for a newline. The default value is provided by
	 * rfc5545.
	 * @type {String}
	 * @default "\r\n"
	 */
	ICAL.newLineChar = '\r\n';


	/**
	 * Helper functions used in various places within ical.js
	 * @namespace
	 */
	ICAL.helpers = {
	  /**
	   * Compiles a list of all referenced TZIDs in all subcomponents and
	   * removes any extra VTIMEZONE subcomponents. In addition, if any TZIDs
	   * are referenced by a component, but a VTIMEZONE does not exist,
	   * an attempt will be made to generate a VTIMEZONE using ICAL.TimezoneService.
	   *
	   * @param {ICAL.Component} vcal     The top-level VCALENDAR component.
	   * @return {ICAL.Component}         The ICAL.Component that was passed in.
	   */
	  updateTimezones: function(vcal) {
	    var allsubs, properties, vtimezones, reqTzid, i, tzid;

	    if (!vcal || vcal.name !== "vcalendar") {
	      //not a top-level vcalendar component
	      return vcal;
	    }

	    //Store vtimezone subcomponents in an object reference by tzid.
	    //Store properties from everything else in another array
	    allsubs = vcal.getAllSubcomponents();
	    properties = [];
	    vtimezones = {};
	    for (i = 0; i < allsubs.length; i++) {
	      if (allsubs[i].name === "vtimezone") {
	        tzid = allsubs[i].getFirstProperty("tzid").getFirstValue();
	        vtimezones[tzid] = allsubs[i];
	      } else {
	        properties = properties.concat(allsubs[i].getAllProperties());
	      }
	    }

	    //create an object with one entry for each required tz
	    reqTzid = {};
	    for (i = 0; i < properties.length; i++) {
	      if ((tzid = properties[i].getParameter("tzid"))) {
	        reqTzid[tzid] = true;
	      }
	    }

	    //delete any vtimezones that are not on the reqTzid list.
	    for (i in vtimezones) {
	      if (vtimezones.hasOwnProperty(i) && !reqTzid[i]) {
	        vcal.removeSubcomponent(vtimezones[i]);
	      }
	    }

	    //create any missing, but registered timezones
	    for (i in reqTzid) {
	      if (
	        reqTzid.hasOwnProperty(i) &&
	        !vtimezones[i] &&
	        ICAL.TimezoneService.has(i)
	      ) {
	        vcal.addSubcomponent(ICAL.TimezoneService.get(i).component);
	      }
	    }

	    return vcal;
	  },

	  /**
	   * Checks if the given type is of the number type and also NaN.
	   *
	   * @param {Number} number     The number to check
	   * @return {Boolean}          True, if the number is strictly NaN
	   */
	  isStrictlyNaN: function(number) {
	    return typeof(number) === 'number' && isNaN(number);
	  },

	  /**
	   * Parses a string value that is expected to be an integer, when the valid is
	   * not an integer throws a decoration error.
	   *
	   * @param {String} string     Raw string input
	   * @return {Number}           Parsed integer
	   */
	  strictParseInt: function(string) {
	    var result = parseInt(string, 10);

	    if (ICAL.helpers.isStrictlyNaN(result)) {
	      throw new Error(
	        'Could not extract integer from "' + string + '"'
	      );
	    }

	    return result;
	  },

	  /**
	   * Creates or returns a class instance of a given type with the initialization
	   * data if the data is not already an instance of the given type.
	   *
	   * @example
	   * var time = new ICAL.Time(...);
	   * var result = ICAL.helpers.formatClassType(time, ICAL.Time);
	   *
	   * (result instanceof ICAL.Time)
	   * // => true
	   *
	   * result = ICAL.helpers.formatClassType({}, ICAL.Time);
	   * (result isntanceof ICAL.Time)
	   * // => true
	   *
	   *
	   * @param {Object} data       object initialization data
	   * @param {Object} type       object type (like ICAL.Time)
	   * @return {?}                An instance of the found type.
	   */
	  formatClassType: function formatClassType(data, type) {
	    if (typeof(data) === 'undefined') {
	      return undefined;
	    }

	    if (data instanceof type) {
	      return data;
	    }
	    return new type(data);
	  },

	  /**
	   * Identical to indexOf but will only match values when they are not preceded
	   * by a backslash character.
	   *
	   * @param {String} buffer         String to search
	   * @param {String} search         Value to look for
	   * @param {Number} pos            Start position
	   * @return {Number}               The position, or -1 if not found
	   */
	  unescapedIndexOf: function(buffer, search, pos) {
	    while ((pos = buffer.indexOf(search, pos)) !== -1) {
	      if (pos > 0 && buffer[pos - 1] === '\\') {
	        pos += 1;
	      } else {
	        return pos;
	      }
	    }
	    return -1;
	  },

	  /**
	   * Find the index for insertion using binary search.
	   *
	   * @param {Array} list            The list to search
	   * @param {?} seekVal             The value to insert
	   * @param {function(?,?)} cmpfunc The comparison func, that can
	   *                                  compare two seekVals
	   * @return {Number}               The insert position
	   */
	  binsearchInsert: function(list, seekVal, cmpfunc) {
	    if (!list.length)
	      return 0;

	    var low = 0, high = list.length - 1,
	        mid, cmpval;

	    while (low <= high) {
	      mid = low + Math.floor((high - low) / 2);
	      cmpval = cmpfunc(seekVal, list[mid]);

	      if (cmpval < 0)
	        high = mid - 1;
	      else if (cmpval > 0)
	        low = mid + 1;
	      else
	        break;
	    }

	    if (cmpval < 0)
	      return mid; // insertion is displacing, so use mid outright.
	    else if (cmpval > 0)
	      return mid + 1;
	    else
	      return mid;
	  },

	  /**
	   * Convenience function for debug output
	   * @private
	   */
	  dumpn: /* istanbul ignore next */ function() {
	    if (!ICAL.debug) {
	      return;
	    }

	    if (typeof (console) !== 'undefined' && 'log' in console) {
	      ICAL.helpers.dumpn = function consoleDumpn(input) {
	        console.log(input);
	      };
	    } else {
	      ICAL.helpers.dumpn = function geckoDumpn(input) {
	        dump(input + '\n');
	      };
	    }

	    ICAL.helpers.dumpn(arguments[0]);
	  },

	  /**
	   * Clone the passed object or primitive. By default a shallow clone will be
	   * executed.
	   *
	   * @param {*} aSrc            The thing to clone
	   * @param {Boolean=} aDeep    If true, a deep clone will be performed
	   * @return {*}                The copy of the thing
	   */
	  clone: function(aSrc, aDeep) {
	    if (!aSrc || typeof aSrc != "object") {
	      return aSrc;
	    } else if (aSrc instanceof Date) {
	      return new Date(aSrc.getTime());
	    } else if ("clone" in aSrc) {
	      return aSrc.clone();
	    } else if (Array.isArray(aSrc)) {
	      var arr = [];
	      for (var i = 0; i < aSrc.length; i++) {
	        arr.push(aDeep ? ICAL.helpers.clone(aSrc[i], true) : aSrc[i]);
	      }
	      return arr;
	    } else {
	      var obj = {};
	      for (var name in aSrc) {
	        // uses prototype method to allow use of Object.create(null);
	        /* istanbul ignore else */
	        if (Object.prototype.hasOwnProperty.call(aSrc, name)) {
	          if (aDeep) {
	            obj[name] = ICAL.helpers.clone(aSrc[name], true);
	          } else {
	            obj[name] = aSrc[name];
	          }
	        }
	      }
	      return obj;
	    }
	  },

	  /**
	   * Performs iCalendar line folding. A line ending character is inserted and
	   * the next line begins with a whitespace.
	   *
	   * @example
	   * SUMMARY:This line will be fold
	   *  ed right in the middle of a word.
	   *
	   * @param {String} aLine      The line to fold
	   * @return {String}           The folded line
	   */
	  foldline: function foldline(aLine) {
	    var result = "";
	    var line = aLine || "", pos = 0, line_length = 0;
	    //pos counts position in line for the UTF-16 presentation
	    //line_length counts the bytes for the UTF-8 presentation
	    while (line.length) {
	      var cp = line.codePointAt(pos);
	      if (cp < 128) ++line_length;
	      else if (cp < 2048) line_length += 2;//needs 2 UTF-8 bytes
	      else if (cp < 65536) line_length += 3;
	      else line_length += 4; //cp is less than 1114112
	      if (line_length < ICAL.foldLength + 1)
	        pos += cp > 65535 ? 2 : 1;
	      else {
	        result += ICAL.newLineChar + " " + line.substring(0, pos);
	        line = line.substring(pos);
	        pos = line_length = 0;
	      }
	    }
	    return result.substr(ICAL.newLineChar.length + 1);
	  },

	  /**
	   * Pads the given string or number with zeros so it will have at least two
	   * characters.
	   *
	   * @param {String|Number} data    The string or number to pad
	   * @return {String}               The number padded as a string
	   */
	  pad2: function pad(data) {
	    if (typeof(data) !== 'string') {
	      // handle fractions.
	      if (typeof(data) === 'number') {
	        data = parseInt(data);
	      }
	      data = String(data);
	    }

	    var len = data.length;

	    switch (len) {
	      case 0:
	        return '00';
	      case 1:
	        return '0' + data;
	      default:
	        return data;
	    }
	  },

	  /**
	   * Truncates the given number, correctly handling negative numbers.
	   *
	   * @param {Number} number     The number to truncate
	   * @return {Number}           The truncated number
	   */
	  trunc: function trunc(number) {
	    return (number < 0 ? Math.ceil(number) : Math.floor(number));
	  },

	  /**
	   * Poor-man's cross-browser inheritance for JavaScript. Doesn't support all
	   * the features, but enough for our usage.
	   *
	   * @param {Function} base     The base class constructor function.
	   * @param {Function} child    The child class constructor function.
	   * @param {Object} extra      Extends the prototype with extra properties
	   *                              and methods
	   */
	  inherits: function(base, child, extra) {
	    function F() {}
	    F.prototype = base.prototype;
	    child.prototype = new F();

	    if (extra) {
	      ICAL.helpers.extend(extra, child.prototype);
	    }
	  },

	  /**
	   * Poor-man's cross-browser object extension. Doesn't support all the
	   * features, but enough for our usage. Note that the target's properties are
	   * not overwritten with the source properties.
	   *
	   * @example
	   * var child = ICAL.helpers.extend(parent, {
	   *   "bar": 123
	   * });
	   *
	   * @param {Object} source     The object to extend
	   * @param {Object} target     The object to extend with
	   * @return {Object}           Returns the target.
	   */
	  extend: function(source, target) {
	    for (var key in source) {
	      var descr = Object.getOwnPropertyDescriptor(source, key);
	      if (descr && !Object.getOwnPropertyDescriptor(target, key)) {
	        Object.defineProperty(target, key, descr);
	      }
	    }
	    return target;
	  }
	};
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */

	/** @namespace ICAL */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.design = (function() {

	  var FROM_ICAL_NEWLINE = /\\\\|\\;|\\,|\\[Nn]/g;
	  var TO_ICAL_NEWLINE = /\\|;|,|\n/g;
	  var FROM_VCARD_NEWLINE = /\\\\|\\,|\\[Nn]/g;
	  var TO_VCARD_NEWLINE = /\\|,|\n/g;

	  function createTextType(fromNewline, toNewline) {
	    var result = {
	      matches: /.*/,

	      fromICAL: function(aValue, structuredEscape) {
	        return replaceNewline(aValue, fromNewline, structuredEscape);
	      },

	      toICAL: function(aValue, structuredEscape) {
	        var regEx = toNewline;
	        if (structuredEscape)
	          regEx = new RegExp(regEx.source + '|' + structuredEscape);
	        return aValue.replace(regEx, function(str) {
	          switch (str) {
	          case "\\":
	            return "\\\\";
	          case ";":
	            return "\\;";
	          case ",":
	            return "\\,";
	          case "\n":
	            return "\\n";
	          /* istanbul ignore next */
	          default:
	            return str;
	          }
	        });
	      }
	    };
	    return result;
	  }

	  // default types used multiple times
	  var DEFAULT_TYPE_TEXT = { defaultType: "text" };
	  var DEFAULT_TYPE_TEXT_MULTI = { defaultType: "text", multiValue: "," };
	  var DEFAULT_TYPE_TEXT_STRUCTURED = { defaultType: "text", structuredValue: ";" };
	  var DEFAULT_TYPE_INTEGER = { defaultType: "integer" };
	  var DEFAULT_TYPE_DATETIME_DATE = { defaultType: "date-time", allowedTypes: ["date-time", "date"] };
	  var DEFAULT_TYPE_DATETIME = { defaultType: "date-time" };
	  var DEFAULT_TYPE_URI = { defaultType: "uri" };
	  var DEFAULT_TYPE_UTCOFFSET = { defaultType: "utc-offset" };
	  var DEFAULT_TYPE_RECUR = { defaultType: "recur" };
	  var DEFAULT_TYPE_DATE_ANDOR_TIME = { defaultType: "date-and-or-time", allowedTypes: ["date-time", "date", "text"] };

	  function replaceNewlineReplace(string) {
	    switch (string) {
	      case "\\\\":
	        return "\\";
	      case "\\;":
	        return ";";
	      case "\\,":
	        return ",";
	      case "\\n":
	      case "\\N":
	        return "\n";
	      /* istanbul ignore next */
	      default:
	        return string;
	    }
	  }

	  function replaceNewline(value, newline, structuredEscape) {
	    // avoid regex when possible.
	    if (value.indexOf('\\') === -1) {
	      return value;
	    }
	    if (structuredEscape)
	      newline = new RegExp(newline.source + '|\\\\' + structuredEscape);
	    return value.replace(newline, replaceNewlineReplace);
	  }

	  var commonProperties = {
	    "categories": DEFAULT_TYPE_TEXT_MULTI,
	    "url": DEFAULT_TYPE_URI,
	    "version": DEFAULT_TYPE_TEXT,
	    "uid": DEFAULT_TYPE_TEXT
	  };

	  var commonValues = {
	    "boolean": {
	      values: ["TRUE", "FALSE"],

	      fromICAL: function(aValue) {
	        switch (aValue) {
	          case 'TRUE':
	            return true;
	          case 'FALSE':
	            return false;
	          default:
	            //TODO: parser warning
	            return false;
	        }
	      },

	      toICAL: function(aValue) {
	        if (aValue) {
	          return 'TRUE';
	        }
	        return 'FALSE';
	      }

	    },
	    float: {
	      matches: /^[+-]?\d+\.\d+$/,

	      fromICAL: function(aValue) {
	        var parsed = parseFloat(aValue);
	        if (ICAL.helpers.isStrictlyNaN(parsed)) {
	          // TODO: parser warning
	          return 0.0;
	        }
	        return parsed;
	      },

	      toICAL: function(aValue) {
	        return String(aValue);
	      }
	    },
	    integer: {
	      fromICAL: function(aValue) {
	        var parsed = parseInt(aValue);
	        if (ICAL.helpers.isStrictlyNaN(parsed)) {
	          return 0;
	        }
	        return parsed;
	      },

	      toICAL: function(aValue) {
	        return String(aValue);
	      }
	    },
	    "utc-offset": {
	      toICAL: function(aValue) {
	        if (aValue.length < 7) {
	          // no seconds
	          // -0500
	          return aValue.substr(0, 3) +
	                 aValue.substr(4, 2);
	        } else {
	          // seconds
	          // -050000
	          return aValue.substr(0, 3) +
	                 aValue.substr(4, 2) +
	                 aValue.substr(7, 2);
	        }
	      },

	      fromICAL: function(aValue) {
	        if (aValue.length < 6) {
	          // no seconds
	          // -05:00
	          return aValue.substr(0, 3) + ':' +
	                 aValue.substr(3, 2);
	        } else {
	          // seconds
	          // -05:00:00
	          return aValue.substr(0, 3) + ':' +
	                 aValue.substr(3, 2) + ':' +
	                 aValue.substr(5, 2);
	        }
	      },

	      decorate: function(aValue) {
	        return ICAL.UtcOffset.fromString(aValue);
	      },

	      undecorate: function(aValue) {
	        return aValue.toString();
	      }
	    }
	  };

	  var icalParams = {
	    // Although the syntax is DQUOTE uri DQUOTE, I don't think we should
	    // enfoce anything aside from it being a valid content line.
	    //
	    // At least some params require - if multi values are used - DQUOTEs
	    // for each of its values - e.g. delegated-from="uri1","uri2"
	    // To indicate this, I introduced the new k/v pair
	    // multiValueSeparateDQuote: true
	    //
	    // "ALTREP": { ... },

	    // CN just wants a param-value
	    // "CN": { ... }

	    "cutype": {
	      values: ["INDIVIDUAL", "GROUP", "RESOURCE", "ROOM", "UNKNOWN"],
	      allowXName: true,
	      allowIanaToken: true
	    },

	    "delegated-from": {
	      valueType: "cal-address",
	      multiValue: ",",
	      multiValueSeparateDQuote: true
	    },
	    "delegated-to": {
	      valueType: "cal-address",
	      multiValue: ",",
	      multiValueSeparateDQuote: true
	    },
	    // "DIR": { ... }, // See ALTREP
	    "encoding": {
	      values: ["8BIT", "BASE64"]
	    },
	    // "FMTTYPE": { ... }, // See ALTREP
	    "fbtype": {
	      values: ["FREE", "BUSY", "BUSY-UNAVAILABLE", "BUSY-TENTATIVE"],
	      allowXName: true,
	      allowIanaToken: true
	    },
	    // "LANGUAGE": { ... }, // See ALTREP
	    "member": {
	      valueType: "cal-address",
	      multiValue: ",",
	      multiValueSeparateDQuote: true
	    },
	    "partstat": {
	      // TODO These values are actually different per-component
	      values: ["NEEDS-ACTION", "ACCEPTED", "DECLINED", "TENTATIVE",
	               "DELEGATED", "COMPLETED", "IN-PROCESS"],
	      allowXName: true,
	      allowIanaToken: true
	    },
	    "range": {
	      values: ["THISANDFUTURE"]
	    },
	    "related": {
	      values: ["START", "END"]
	    },
	    "reltype": {
	      values: ["PARENT", "CHILD", "SIBLING"],
	      allowXName: true,
	      allowIanaToken: true
	    },
	    "role": {
	      values: ["REQ-PARTICIPANT", "CHAIR",
	               "OPT-PARTICIPANT", "NON-PARTICIPANT"],
	      allowXName: true,
	      allowIanaToken: true
	    },
	    "rsvp": {
	      values: ["TRUE", "FALSE"]
	    },
	    "sent-by": {
	      valueType: "cal-address"
	    },
	    "tzid": {
	      matches: /^\//
	    },
	    "value": {
	      // since the value here is a 'type' lowercase is used.
	      values: ["binary", "boolean", "cal-address", "date", "date-time",
	               "duration", "float", "integer", "period", "recur", "text",
	               "time", "uri", "utc-offset"],
	      allowXName: true,
	      allowIanaToken: true
	    }
	  };

	  // When adding a value here, be sure to add it to the parameter types!
	  var icalValues = ICAL.helpers.extend(commonValues, {
	    text: createTextType(FROM_ICAL_NEWLINE, TO_ICAL_NEWLINE),

	    uri: {
	      // TODO
	      /* ... */
	    },

	    "binary": {
	      decorate: function(aString) {
	        return ICAL.Binary.fromString(aString);
	      },

	      undecorate: function(aBinary) {
	        return aBinary.toString();
	      }
	    },
	    "cal-address": {
	      // needs to be an uri
	    },
	    "date": {
	      decorate: function(aValue, aProp) {
	        if (design.strict) {
	          return ICAL.Time.fromDateString(aValue, aProp);
	        } else {
	          return ICAL.Time.fromString(aValue, aProp);
	        }
	      },

	      /**
	       * undecorates a time object.
	       */
	      undecorate: function(aValue) {
	        return aValue.toString();
	      },

	      fromICAL: function(aValue) {
	        // from: 20120901
	        // to: 2012-09-01
	        if (!design.strict && aValue.length >= 15) {
	          // This is probably a date-time, e.g. 20120901T130000Z
	          return icalValues["date-time"].fromICAL(aValue);
	        } else {
	          return aValue.substr(0, 4) + '-' +
	                 aValue.substr(4, 2) + '-' +
	                 aValue.substr(6, 2);
	        }
	      },

	      toICAL: function(aValue) {
	        // from: 2012-09-01
	        // to: 20120901
	        var len = aValue.length;

	        if (len == 10) {
	          return aValue.substr(0, 4) +
	                 aValue.substr(5, 2) +
	                 aValue.substr(8, 2);
	        } else if (len >= 19) {
	          return icalValues["date-time"].toICAL(aValue);
	        } else {
	          //TODO: serialize warning?
	          return aValue;
	        }

	      }
	    },
	    "date-time": {
	      fromICAL: function(aValue) {
	        // from: 20120901T130000
	        // to: 2012-09-01T13:00:00
	        if (!design.strict && aValue.length == 8) {
	          // This is probably a date, e.g. 20120901
	          return icalValues.date.fromICAL(aValue);
	        } else {
	          var result = aValue.substr(0, 4) + '-' +
	                       aValue.substr(4, 2) + '-' +
	                       aValue.substr(6, 2) + 'T' +
	                       aValue.substr(9, 2) + ':' +
	                       aValue.substr(11, 2) + ':' +
	                       aValue.substr(13, 2);

	          if (aValue[15] && aValue[15] === 'Z') {
	            result += 'Z';
	          }

	          return result;
	        }
	      },

	      toICAL: function(aValue) {
	        // from: 2012-09-01T13:00:00
	        // to: 20120901T130000
	        var len = aValue.length;

	        if (len == 10 && !design.strict) {
	          return icalValues.date.toICAL(aValue);
	        } else if (len >= 19) {
	          var result = aValue.substr(0, 4) +
	                       aValue.substr(5, 2) +
	                       // grab the (DDTHH) segment
	                       aValue.substr(8, 5) +
	                       // MM
	                       aValue.substr(14, 2) +
	                       // SS
	                       aValue.substr(17, 2);

	          if (aValue[19] && aValue[19] === 'Z') {
	            result += 'Z';
	          }
	          return result;
	        } else {
	          // TODO: error
	          return aValue;
	        }
	      },

	      decorate: function(aValue, aProp) {
	        if (design.strict) {
	          return ICAL.Time.fromDateTimeString(aValue, aProp);
	        } else {
	          return ICAL.Time.fromString(aValue, aProp);
	        }
	      },

	      undecorate: function(aValue) {
	        return aValue.toString();
	      }
	    },
	    duration: {
	      decorate: function(aValue) {
	        return ICAL.Duration.fromString(aValue);
	      },
	      undecorate: function(aValue) {
	        return aValue.toString();
	      }
	    },
	    period: {

	      fromICAL: function(string) {
	        var parts = string.split('/');
	        parts[0] = icalValues['date-time'].fromICAL(parts[0]);

	        if (!ICAL.Duration.isValueString(parts[1])) {
	          parts[1] = icalValues['date-time'].fromICAL(parts[1]);
	        }

	        return parts;
	      },

	      toICAL: function(parts) {
	        if (!design.strict && parts[0].length == 10) {
	          parts[0] = icalValues.date.toICAL(parts[0]);
	        } else {
	          parts[0] = icalValues['date-time'].toICAL(parts[0]);
	        }

	        if (!ICAL.Duration.isValueString(parts[1])) {
	          if (!design.strict && parts[1].length == 10) {
	            parts[1] = icalValues.date.toICAL(parts[1]);
	          } else {
	            parts[1] = icalValues['date-time'].toICAL(parts[1]);
	          }
	        }

	        return parts.join("/");
	      },

	      decorate: function(aValue, aProp) {
	        return ICAL.Period.fromJSON(aValue, aProp, !design.strict);
	      },

	      undecorate: function(aValue) {
	        return aValue.toJSON();
	      }
	    },
	    recur: {
	      fromICAL: function(string) {
	        return ICAL.Recur._stringToData(string, true);
	      },

	      toICAL: function(data) {
	        var str = "";
	        for (var k in data) {
	          /* istanbul ignore if */
	          if (!Object.prototype.hasOwnProperty.call(data, k)) {
	            continue;
	          }
	          var val = data[k];
	          if (k == "until") {
	            if (val.length > 10) {
	              val = icalValues['date-time'].toICAL(val);
	            } else {
	              val = icalValues.date.toICAL(val);
	            }
	          } else if (k == "wkst") {
	            if (typeof val === 'number') {
	              val = ICAL.Recur.numericDayToIcalDay(val);
	            }
	          } else if (Array.isArray(val)) {
	            val = val.join(",");
	          }
	          str += k.toUpperCase() + "=" + val + ";";
	        }
	        return str.substr(0, str.length - 1);
	      },

	      decorate: function decorate(aValue) {
	        return ICAL.Recur.fromData(aValue);
	      },

	      undecorate: function(aRecur) {
	        return aRecur.toJSON();
	      }
	    },

	    time: {
	      fromICAL: function(aValue) {
	        // from: MMHHSS(Z)?
	        // to: HH:MM:SS(Z)?
	        if (aValue.length < 6) {
	          // TODO: parser exception?
	          return aValue;
	        }

	        // HH::MM::SSZ?
	        var result = aValue.substr(0, 2) + ':' +
	                     aValue.substr(2, 2) + ':' +
	                     aValue.substr(4, 2);

	        if (aValue[6] === 'Z') {
	          result += 'Z';
	        }

	        return result;
	      },

	      toICAL: function(aValue) {
	        // from: HH:MM:SS(Z)?
	        // to: MMHHSS(Z)?
	        if (aValue.length < 8) {
	          //TODO: error
	          return aValue;
	        }

	        var result = aValue.substr(0, 2) +
	                     aValue.substr(3, 2) +
	                     aValue.substr(6, 2);

	        if (aValue[8] === 'Z') {
	          result += 'Z';
	        }

	        return result;
	      }
	    }
	  });

	  var icalProperties = ICAL.helpers.extend(commonProperties, {

	    "action": DEFAULT_TYPE_TEXT,
	    "attach": { defaultType: "uri" },
	    "attendee": { defaultType: "cal-address" },
	    "calscale": DEFAULT_TYPE_TEXT,
	    "class": DEFAULT_TYPE_TEXT,
	    "comment": DEFAULT_TYPE_TEXT,
	    "completed": DEFAULT_TYPE_DATETIME,
	    "contact": DEFAULT_TYPE_TEXT,
	    "created": DEFAULT_TYPE_DATETIME,
	    "description": DEFAULT_TYPE_TEXT,
	    "dtend": DEFAULT_TYPE_DATETIME_DATE,
	    "dtstamp": DEFAULT_TYPE_DATETIME,
	    "dtstart": DEFAULT_TYPE_DATETIME_DATE,
	    "due": DEFAULT_TYPE_DATETIME_DATE,
	    "duration": { defaultType: "duration" },
	    "exdate": {
	      defaultType: "date-time",
	      allowedTypes: ["date-time", "date"],
	      multiValue: ','
	    },
	    "exrule": DEFAULT_TYPE_RECUR,
	    "freebusy": { defaultType: "period", multiValue: "," },
	    "geo": { defaultType: "float", structuredValue: ";" },
	    "last-modified": DEFAULT_TYPE_DATETIME,
	    "location": DEFAULT_TYPE_TEXT,
	    "method": DEFAULT_TYPE_TEXT,
	    "organizer": { defaultType: "cal-address" },
	    "percent-complete": DEFAULT_TYPE_INTEGER,
	    "priority": DEFAULT_TYPE_INTEGER,
	    "prodid": DEFAULT_TYPE_TEXT,
	    "related-to": DEFAULT_TYPE_TEXT,
	    "repeat": DEFAULT_TYPE_INTEGER,
	    "rdate": {
	      defaultType: "date-time",
	      allowedTypes: ["date-time", "date", "period"],
	      multiValue: ',',
	      detectType: function(string) {
	        if (string.indexOf('/') !== -1) {
	          return 'period';
	        }
	        return (string.indexOf('T') === -1) ? 'date' : 'date-time';
	      }
	    },
	    "recurrence-id": DEFAULT_TYPE_DATETIME_DATE,
	    "resources": DEFAULT_TYPE_TEXT_MULTI,
	    "request-status": DEFAULT_TYPE_TEXT_STRUCTURED,
	    "rrule": DEFAULT_TYPE_RECUR,
	    "sequence": DEFAULT_TYPE_INTEGER,
	    "status": DEFAULT_TYPE_TEXT,
	    "summary": DEFAULT_TYPE_TEXT,
	    "transp": DEFAULT_TYPE_TEXT,
	    "trigger": { defaultType: "duration", allowedTypes: ["duration", "date-time"] },
	    "tzoffsetfrom": DEFAULT_TYPE_UTCOFFSET,
	    "tzoffsetto": DEFAULT_TYPE_UTCOFFSET,
	    "tzurl": DEFAULT_TYPE_URI,
	    "tzid": DEFAULT_TYPE_TEXT,
	    "tzname": DEFAULT_TYPE_TEXT
	  });

	  // When adding a value here, be sure to add it to the parameter types!
	  var vcardValues = ICAL.helpers.extend(commonValues, {
	    text: createTextType(FROM_VCARD_NEWLINE, TO_VCARD_NEWLINE),
	    uri: createTextType(FROM_VCARD_NEWLINE, TO_VCARD_NEWLINE),

	    date: {
	      decorate: function(aValue) {
	        return ICAL.VCardTime.fromDateAndOrTimeString(aValue, "date");
	      },
	      undecorate: function(aValue) {
	        return aValue.toString();
	      },
	      fromICAL: function(aValue) {
	        if (aValue.length == 8) {
	          return icalValues.date.fromICAL(aValue);
	        } else if (aValue[0] == '-' && aValue.length == 6) {
	          return aValue.substr(0, 4) + '-' + aValue.substr(4);
	        } else {
	          return aValue;
	        }
	      },
	      toICAL: function(aValue) {
	        if (aValue.length == 10) {
	          return icalValues.date.toICAL(aValue);
	        } else if (aValue[0] == '-' && aValue.length == 7) {
	          return aValue.substr(0, 4) + aValue.substr(5);
	        } else {
	          return aValue;
	        }
	      }
	    },

	    time: {
	      decorate: function(aValue) {
	        return ICAL.VCardTime.fromDateAndOrTimeString("T" + aValue, "time");
	      },
	      undecorate: function(aValue) {
	        return aValue.toString();
	      },
	      fromICAL: function(aValue) {
	        var splitzone = vcardValues.time._splitZone(aValue, true);
	        var zone = splitzone[0], value = splitzone[1];

	        //console.log("SPLIT: ",splitzone);

	        if (value.length == 6) {
	          value = value.substr(0, 2) + ':' +
	                  value.substr(2, 2) + ':' +
	                  value.substr(4, 2);
	        } else if (value.length == 4 && value[0] != '-') {
	          value = value.substr(0, 2) + ':' + value.substr(2, 2);
	        } else if (value.length == 5) {
	          value = value.substr(0, 3) + ':' + value.substr(3, 2);
	        }

	        if (zone.length == 5 && (zone[0] == '-' || zone[0] == '+')) {
	          zone = zone.substr(0, 3) + ':' + zone.substr(3);
	        }

	        return value + zone;
	      },

	      toICAL: function(aValue) {
	        var splitzone = vcardValues.time._splitZone(aValue);
	        var zone = splitzone[0], value = splitzone[1];

	        if (value.length == 8) {
	          value = value.substr(0, 2) +
	                  value.substr(3, 2) +
	                  value.substr(6, 2);
	        } else if (value.length == 5 && value[0] != '-') {
	          value = value.substr(0, 2) + value.substr(3, 2);
	        } else if (value.length == 6) {
	          value = value.substr(0, 3) + value.substr(4, 2);
	        }

	        if (zone.length == 6 && (zone[0] == '-' || zone[0] == '+')) {
	          zone = zone.substr(0, 3) + zone.substr(4);
	        }

	        return value + zone;
	      },

	      _splitZone: function(aValue, isFromIcal) {
	        var lastChar = aValue.length - 1;
	        var signChar = aValue.length - (isFromIcal ? 5 : 6);
	        var sign = aValue[signChar];
	        var zone, value;

	        if (aValue[lastChar] == 'Z') {
	          zone = aValue[lastChar];
	          value = aValue.substr(0, lastChar);
	        } else if (aValue.length > 6 && (sign == '-' || sign == '+')) {
	          zone = aValue.substr(signChar);
	          value = aValue.substr(0, signChar);
	        } else {
	          zone = "";
	          value = aValue;
	        }

	        return [zone, value];
	      }
	    },

	    "date-time": {
	      decorate: function(aValue) {
	        return ICAL.VCardTime.fromDateAndOrTimeString(aValue, "date-time");
	      },

	      undecorate: function(aValue) {
	        return aValue.toString();
	      },

	      fromICAL: function(aValue) {
	        return vcardValues['date-and-or-time'].fromICAL(aValue);
	      },

	      toICAL: function(aValue) {
	        return vcardValues['date-and-or-time'].toICAL(aValue);
	      }
	    },

	    "date-and-or-time": {
	      decorate: function(aValue) {
	        return ICAL.VCardTime.fromDateAndOrTimeString(aValue, "date-and-or-time");
	      },

	      undecorate: function(aValue) {
	        return aValue.toString();
	      },

	      fromICAL: function(aValue) {
	        var parts = aValue.split('T');
	        return (parts[0] ? vcardValues.date.fromICAL(parts[0]) : '') +
	               (parts[1] ? 'T' + vcardValues.time.fromICAL(parts[1]) : '');
	      },

	      toICAL: function(aValue) {
	        var parts = aValue.split('T');
	        return vcardValues.date.toICAL(parts[0]) +
	               (parts[1] ? 'T' + vcardValues.time.toICAL(parts[1]) : '');

	      }
	    },
	    timestamp: icalValues['date-time'],
	    "language-tag": {
	      matches: /^[a-zA-Z0-9-]+$/ // Could go with a more strict regex here
	    }
	  });

	  var vcardParams = {
	    "type": {
	      valueType: "text",
	      multiValue: ","
	    },
	    "value": {
	      // since the value here is a 'type' lowercase is used.
	      values: ["text", "uri", "date", "time", "date-time", "date-and-or-time",
	               "timestamp", "boolean", "integer", "float", "utc-offset",
	               "language-tag"],
	      allowXName: true,
	      allowIanaToken: true
	    }
	  };

	  var vcardProperties = ICAL.helpers.extend(commonProperties, {
	    "adr": { defaultType: "text", structuredValue: ";", multiValue: "," },
	    "anniversary": DEFAULT_TYPE_DATE_ANDOR_TIME,
	    "bday": DEFAULT_TYPE_DATE_ANDOR_TIME,
	    "caladruri": DEFAULT_TYPE_URI,
	    "caluri": DEFAULT_TYPE_URI,
	    "clientpidmap": DEFAULT_TYPE_TEXT_STRUCTURED,
	    "email": DEFAULT_TYPE_TEXT,
	    "fburl": DEFAULT_TYPE_URI,
	    "fn": DEFAULT_TYPE_TEXT,
	    "gender": DEFAULT_TYPE_TEXT_STRUCTURED,
	    "geo": DEFAULT_TYPE_URI,
	    "impp": DEFAULT_TYPE_URI,
	    "key": DEFAULT_TYPE_URI,
	    "kind": DEFAULT_TYPE_TEXT,
	    "lang": { defaultType: "language-tag" },
	    "logo": DEFAULT_TYPE_URI,
	    "member": DEFAULT_TYPE_URI,
	    "n": { defaultType: "text", structuredValue: ";", multiValue: "," },
	    "nickname": DEFAULT_TYPE_TEXT_MULTI,
	    "note": DEFAULT_TYPE_TEXT,
	    "org": { defaultType: "text", structuredValue: ";" },
	    "photo": DEFAULT_TYPE_URI,
	    "related": DEFAULT_TYPE_URI,
	    "rev": { defaultType: "timestamp" },
	    "role": DEFAULT_TYPE_TEXT,
	    "sound": DEFAULT_TYPE_URI,
	    "source": DEFAULT_TYPE_URI,
	    "tel": { defaultType: "uri", allowedTypes: ["uri", "text"] },
	    "title": DEFAULT_TYPE_TEXT,
	    "tz": { defaultType: "text", allowedTypes: ["text", "utc-offset", "uri"] },
	    "xml": DEFAULT_TYPE_TEXT
	  });

	  var vcard3Values = ICAL.helpers.extend(commonValues, {
	    binary: icalValues.binary,
	    date: vcardValues.date,
	    "date-time": vcardValues["date-time"],
	    "phone-number": {
	      // TODO
	      /* ... */
	    },
	    uri: icalValues.uri,
	    text: icalValues.text,
	    time: icalValues.time,
	    vcard: icalValues.text,
	    "utc-offset": {
	      toICAL: function(aValue) {
	        return aValue.substr(0, 7);
	      },

	      fromICAL: function(aValue) {
	        return aValue.substr(0, 7);
	      },

	      decorate: function(aValue) {
	        return ICAL.UtcOffset.fromString(aValue);
	      },

	      undecorate: function(aValue) {
	        return aValue.toString();
	      }
	    }
	  });

	  var vcard3Params = {
	    "type": {
	      valueType: "text",
	      multiValue: ","
	    },
	    "value": {
	      // since the value here is a 'type' lowercase is used.
	      values: ["text", "uri", "date", "date-time", "phone-number", "time",
	               "boolean", "integer", "float", "utc-offset", "vcard", "binary"],
	      allowXName: true,
	      allowIanaToken: true
	    }
	  };

	  var vcard3Properties = ICAL.helpers.extend(commonProperties, {
	    fn: DEFAULT_TYPE_TEXT,
	    n: { defaultType: "text", structuredValue: ";", multiValue: "," },
	    nickname: DEFAULT_TYPE_TEXT_MULTI,
	    photo: { defaultType: "binary", allowedTypes: ["binary", "uri"] },
	    bday: {
	      defaultType: "date-time",
	      allowedTypes: ["date-time", "date"],
	      detectType: function(string) {
	        return (string.indexOf('T') === -1) ? 'date' : 'date-time';
	      }
	    },

	    adr: { defaultType: "text", structuredValue: ";", multiValue: "," },
	    label: DEFAULT_TYPE_TEXT,

	    tel: { defaultType: "phone-number" },
	    email: DEFAULT_TYPE_TEXT,
	    mailer: DEFAULT_TYPE_TEXT,

	    tz: { defaultType: "utc-offset", allowedTypes: ["utc-offset", "text"] },
	    geo: { defaultType: "float", structuredValue: ";" },

	    title: DEFAULT_TYPE_TEXT,
	    role: DEFAULT_TYPE_TEXT,
	    logo: { defaultType: "binary", allowedTypes: ["binary", "uri"] },
	    agent: { defaultType: "vcard", allowedTypes: ["vcard", "text", "uri"] },
	    org: DEFAULT_TYPE_TEXT_STRUCTURED,

	    note: DEFAULT_TYPE_TEXT_MULTI,
	    prodid: DEFAULT_TYPE_TEXT,
	    rev: {
	      defaultType: "date-time",
	      allowedTypes: ["date-time", "date"],
	      detectType: function(string) {
	        return (string.indexOf('T') === -1) ? 'date' : 'date-time';
	      }
	    },
	    "sort-string": DEFAULT_TYPE_TEXT,
	    sound: { defaultType: "binary", allowedTypes: ["binary", "uri"] },

	    class: DEFAULT_TYPE_TEXT,
	    key: { defaultType: "binary", allowedTypes: ["binary", "text"] }
	  });

	  /**
	   * iCalendar design set
	   * @type {ICAL.design.designSet}
	   */
	  var icalSet = {
	    value: icalValues,
	    param: icalParams,
	    property: icalProperties
	  };

	  /**
	   * vCard 4.0 design set
	   * @type {ICAL.design.designSet}
	   */
	  var vcardSet = {
	    value: vcardValues,
	    param: vcardParams,
	    property: vcardProperties
	  };

	  /**
	   * vCard 3.0 design set
	   * @type {ICAL.design.designSet}
	   */
	  var vcard3Set = {
	    value: vcard3Values,
	    param: vcard3Params,
	    property: vcard3Properties
	  };

	  /**
	   * The design data, used by the parser to determine types for properties and
	   * other metadata needed to produce correct jCard/jCal data.
	   *
	   * @alias ICAL.design
	   * @namespace
	   */
	  var design = {
	    /**
	     * A designSet describes value, parameter and property data. It is used by
	     * ther parser and stringifier in components and properties to determine they
	     * should be represented.
	     *
	     * @typedef {Object} designSet
	     * @memberOf ICAL.design
	     * @property {Object} value       Definitions for value types, keys are type names
	     * @property {Object} param       Definitions for params, keys are param names
	     * @property {Object} property    Defintions for properties, keys are property names
	     */

	    /**
	     * Can be set to false to make the parser more lenient.
	     */
	    strict: true,

	    /**
	     * The default set for new properties and components if none is specified.
	     * @type {ICAL.design.designSet}
	     */
	    defaultSet: icalSet,

	    /**
	     * The default type for unknown properties
	     * @type {String}
	     */
	    defaultType: 'unknown',

	    /**
	     * Holds the design set for known top-level components
	     *
	     * @type {Object}
	     * @property {ICAL.design.designSet} vcard       vCard VCARD
	     * @property {ICAL.design.designSet} vevent      iCalendar VEVENT
	     * @property {ICAL.design.designSet} vtodo       iCalendar VTODO
	     * @property {ICAL.design.designSet} vjournal    iCalendar VJOURNAL
	     * @property {ICAL.design.designSet} valarm      iCalendar VALARM
	     * @property {ICAL.design.designSet} vtimezone   iCalendar VTIMEZONE
	     * @property {ICAL.design.designSet} daylight    iCalendar DAYLIGHT
	     * @property {ICAL.design.designSet} standard    iCalendar STANDARD
	     *
	     * @example
	     * var propertyName = 'fn';
	     * var componentDesign = ICAL.design.components.vcard;
	     * var propertyDetails = componentDesign.property[propertyName];
	     * if (propertyDetails.defaultType == 'text') {
	     *   // Yep, sure is...
	     * }
	     */
	    components: {
	      vcard: vcardSet,
	      vcard3: vcard3Set,
	      vevent: icalSet,
	      vtodo: icalSet,
	      vjournal: icalSet,
	      valarm: icalSet,
	      vtimezone: icalSet,
	      daylight: icalSet,
	      standard: icalSet
	    },


	    /**
	     * The design set for iCalendar (rfc5545/rfc7265) components.
	     * @type {ICAL.design.designSet}
	     */
	    icalendar: icalSet,

	    /**
	     * The design set for vCard (rfc6350/rfc7095) components.
	     * @type {ICAL.design.designSet}
	     */
	    vcard: vcardSet,

	    /**
	     * The design set for vCard (rfc2425/rfc2426/rfc7095) components.
	     * @type {ICAL.design.designSet}
	     */
	    vcard3: vcard3Set,

	    /**
	     * Gets the design set for the given component name.
	     *
	     * @param {String} componentName        The name of the component
	     * @return {ICAL.design.designSet}      The design set for the component
	     */
	    getDesignSet: function(componentName) {
	      var isInDesign = componentName && componentName in design.components;
	      return isInDesign ? design.components[componentName] : design.defaultSet;
	    }
	  };

	  return design;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * Contains various functions to convert jCal and jCard data back into
	 * iCalendar and vCard.
	 * @namespace
	 */
	ICAL.stringify = (function() {

	  var LINE_ENDING = '\r\n';
	  var DEFAULT_VALUE_TYPE = 'unknown';

	  var design = ICAL.design;
	  var helpers = ICAL.helpers;

	  /**
	   * Convert a full jCal/jCard array into a iCalendar/vCard string.
	   *
	   * @function ICAL.stringify
	   * @variation function
	   * @param {Array} jCal    The jCal/jCard document
	   * @return {String}       The stringified iCalendar/vCard document
	   */
	  function stringify(jCal) {
	    if (typeof jCal[0] == "string") {
	      // This is a single component
	      jCal = [jCal];
	    }

	    var i = 0;
	    var len = jCal.length;
	    var result = '';

	    for (; i < len; i++) {
	      result += stringify.component(jCal[i]) + LINE_ENDING;
	    }

	    return result;
	  }

	  /**
	   * Converts an jCal component array into a ICAL string.
	   * Recursive will resolve sub-components.
	   *
	   * Exact component/property order is not saved all
	   * properties will come before subcomponents.
	   *
	   * @function ICAL.stringify.component
	   * @param {Array} component
	   *        jCal/jCard fragment of a component
	   * @param {ICAL.design.designSet} designSet
	   *        The design data to use for this component
	   * @return {String}       The iCalendar/vCard string
	   */
	  stringify.component = function(component, designSet) {
	    var name = component[0].toUpperCase();
	    var result = 'BEGIN:' + name + LINE_ENDING;

	    var props = component[1];
	    var propIdx = 0;
	    var propLen = props.length;

	    var designSetName = component[0];
	    // rfc6350 requires that in vCard 4.0 the first component is the VERSION
	    // component with as value 4.0, note that 3.0 does not have this requirement.
	    if (designSetName === 'vcard' && component[1].length > 0 &&
	            !(component[1][0][0] === "version" && component[1][0][3] === "4.0")) {
	      designSetName = "vcard3";
	    }
	    designSet = designSet || design.getDesignSet(designSetName);

	    for (; propIdx < propLen; propIdx++) {
	      result += stringify.property(props[propIdx], designSet) + LINE_ENDING;
	    }

	    // Ignore subcomponents if none exist, e.g. in vCard.
	    var comps = component[2] || [];
	    var compIdx = 0;
	    var compLen = comps.length;

	    for (; compIdx < compLen; compIdx++) {
	      result += stringify.component(comps[compIdx], designSet) + LINE_ENDING;
	    }

	    result += 'END:' + name;
	    return result;
	  };

	  /**
	   * Converts a single jCal/jCard property to a iCalendar/vCard string.
	   *
	   * @function ICAL.stringify.property
	   * @param {Array} property
	   *        jCal/jCard property array
	   * @param {ICAL.design.designSet} designSet
	   *        The design data to use for this property
	   * @param {Boolean} noFold
	   *        If true, the line is not folded
	   * @return {String}       The iCalendar/vCard string
	   */
	  stringify.property = function(property, designSet, noFold) {
	    var name = property[0].toUpperCase();
	    var jsName = property[0];
	    var params = property[1];

	    var line = name;

	    var paramName;
	    for (paramName in params) {
	      var value = params[paramName];

	      /* istanbul ignore else */
	      if (params.hasOwnProperty(paramName)) {
	        var multiValue = (paramName in designSet.param) && designSet.param[paramName].multiValue;
	        if (multiValue && Array.isArray(value)) {
	          if (designSet.param[paramName].multiValueSeparateDQuote) {
	            multiValue = '"' + multiValue + '"';
	          }
	          value = value.map(stringify._rfc6868Unescape);
	          value = stringify.multiValue(value, multiValue, "unknown", null, designSet);
	        } else {
	          value = stringify._rfc6868Unescape(value);
	        }


	        line += ';' + paramName.toUpperCase();
	        line += '=' + stringify.propertyValue(value);
	      }
	    }

	    if (property.length === 3) {
	      // If there are no values, we must assume a blank value
	      return line + ':';
	    }

	    var valueType = property[2];

	    if (!designSet) {
	      designSet = design.defaultSet;
	    }

	    var propDetails;
	    var multiValue = false;
	    var structuredValue = false;
	    var isDefault = false;

	    if (jsName in designSet.property) {
	      propDetails = designSet.property[jsName];

	      if ('multiValue' in propDetails) {
	        multiValue = propDetails.multiValue;
	      }

	      if (('structuredValue' in propDetails) && Array.isArray(property[3])) {
	        structuredValue = propDetails.structuredValue;
	      }

	      if ('defaultType' in propDetails) {
	        if (valueType === propDetails.defaultType) {
	          isDefault = true;
	        }
	      } else {
	        if (valueType === DEFAULT_VALUE_TYPE) {
	          isDefault = true;
	        }
	      }
	    } else {
	      if (valueType === DEFAULT_VALUE_TYPE) {
	        isDefault = true;
	      }
	    }

	    // push the VALUE property if type is not the default
	    // for the current property.
	    if (!isDefault) {
	      // value will never contain ;/:/, so we don't escape it here.
	      line += ';VALUE=' + valueType.toUpperCase();
	    }

	    line += ':';

	    if (multiValue && structuredValue) {
	      line += stringify.multiValue(
	        property[3], structuredValue, valueType, multiValue, designSet, structuredValue
	      );
	    } else if (multiValue) {
	      line += stringify.multiValue(
	        property.slice(3), multiValue, valueType, null, designSet, false
	      );
	    } else if (structuredValue) {
	      line += stringify.multiValue(
	        property[3], structuredValue, valueType, null, designSet, structuredValue
	      );
	    } else {
	      line += stringify.value(property[3], valueType, designSet, false);
	    }

	    return noFold ? line : ICAL.helpers.foldline(line);
	  };

	  /**
	   * Handles escaping of property values that may contain:
	   *
	   *    COLON (:), SEMICOLON (;), or COMMA (,)
	   *
	   * If any of the above are present the result is wrapped
	   * in double quotes.
	   *
	   * @function ICAL.stringify.propertyValue
	   * @param {String} value      Raw property value
	   * @return {String}           Given or escaped value when needed
	   */
	  stringify.propertyValue = function(value) {

	    if ((helpers.unescapedIndexOf(value, ',') === -1) &&
	        (helpers.unescapedIndexOf(value, ':') === -1) &&
	        (helpers.unescapedIndexOf(value, ';') === -1)) {

	      return value;
	    }

	    return '"' + value + '"';
	  };

	  /**
	   * Converts an array of ical values into a single
	   * string based on a type and a delimiter value (like ",").
	   *
	   * @function ICAL.stringify.multiValue
	   * @param {Array} values      List of values to convert
	   * @param {String} delim      Used to join the values (",", ";", ":")
	   * @param {String} type       Lowecase ical value type
	   *        (like boolean, date-time, etc..)
	   * @param {?String} innerMulti If set, each value will again be processed
	   *        Used for structured values
	   * @param {ICAL.design.designSet} designSet
	   *        The design data to use for this property
	   *
	   * @return {String}           iCalendar/vCard string for value
	   */
	  stringify.multiValue = function(values, delim, type, innerMulti, designSet, structuredValue) {
	    var result = '';
	    var len = values.length;
	    var i = 0;

	    for (; i < len; i++) {
	      if (innerMulti && Array.isArray(values[i])) {
	        result += stringify.multiValue(values[i], innerMulti, type, null, designSet, structuredValue);
	      } else {
	        result += stringify.value(values[i], type, designSet, structuredValue);
	      }

	      if (i !== (len - 1)) {
	        result += delim;
	      }
	    }

	    return result;
	  };

	  /**
	   * Processes a single ical value runs the associated "toICAL" method from the
	   * design value type if available to convert the value.
	   *
	   * @function ICAL.stringify.value
	   * @param {String|Number} value       A formatted value
	   * @param {String} type               Lowercase iCalendar/vCard value type
	   *  (like boolean, date-time, etc..)
	   * @return {String}                   iCalendar/vCard value for single value
	   */
	  stringify.value = function(value, type, designSet, structuredValue) {
	    if (type in designSet.value && 'toICAL' in designSet.value[type]) {
	      return designSet.value[type].toICAL(value, structuredValue);
	    }
	    return value;
	  };

	  /**
	   * Internal helper for rfc6868. Exposing this on ICAL.stringify so that
	   * hackers can disable the rfc6868 parsing if the really need to.
	   *
	   * @param {String} val        The value to unescape
	   * @return {String}           The escaped value
	   */
	  stringify._rfc6868Unescape = function(val) {
	    return val.replace(/[\n^"]/g, function(x) {
	      return RFC6868_REPLACE_MAP[x];
	    });
	  };
	  var RFC6868_REPLACE_MAP = { '"': "^'", "\n": "^n", "^": "^^" };

	  return stringify;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * Contains various functions to parse iCalendar and vCard data.
	 * @namespace
	 */
	ICAL.parse = (function() {

	  var CHAR = /[^ \t]/;
	  var VALUE_DELIMITER = ':';
	  var PARAM_DELIMITER = ';';
	  var PARAM_NAME_DELIMITER = '=';
	  var DEFAULT_VALUE_TYPE = 'unknown';
	  var DEFAULT_PARAM_TYPE = 'text';

	  var design = ICAL.design;
	  var helpers = ICAL.helpers;

	  /**
	   * An error that occurred during parsing.
	   *
	   * @param {String} message        The error message
	   * @memberof ICAL.parse
	   * @extends {Error}
	   * @class
	   */
	  function ParserError(message) {
	    this.message = message;
	    this.name = 'ParserError';

	    try {
	      throw new Error();
	    } catch (e) {
	      if (e.stack) {
	        var split = e.stack.split('\n');
	        split.shift();
	        this.stack = split.join('\n');
	      }
	    }
	  }

	  ParserError.prototype = Error.prototype;

	  /**
	   * Parses iCalendar or vCard data into a raw jCal object. Consult
	   * documentation on the {@tutorial layers|layers of parsing} for more
	   * details.
	   *
	   * @function ICAL.parse
	   * @variation function
	   * @todo Fix the API to be more clear on the return type
	   * @param {String} input      The string data to parse
	   * @return {Object|Object[]}  A single jCal object, or an array thereof
	   */
	  function parser(input) {
	    var state = {};
	    var root = state.component = [];

	    state.stack = [root];

	    parser._eachLine(input, function(err, line) {
	      parser._handleContentLine(line, state);
	    });


	    // when there are still items on the stack
	    // throw a fatal error, a component was not closed
	    // correctly in that case.
	    if (state.stack.length > 1) {
	      throw new ParserError(
	        'invalid ical body. component began but did not end'
	      );
	    }

	    state = null;

	    return (root.length == 1 ? root[0] : root);
	  }

	  /**
	   * Parse an iCalendar property value into the jCal for a single property
	   *
	   * @function ICAL.parse.property
	   * @param {String} str
	   *   The iCalendar property string to parse
	   * @param {ICAL.design.designSet=} designSet
	   *   The design data to use for this property
	   * @return {Object}
	   *   The jCal Object containing the property
	   */
	  parser.property = function(str, designSet) {
	    var state = {
	      component: [[], []],
	      designSet: designSet || design.defaultSet
	    };
	    parser._handleContentLine(str, state);
	    return state.component[1][0];
	  };

	  /**
	   * Convenience method to parse a component. You can use ICAL.parse() directly
	   * instead.
	   *
	   * @function ICAL.parse.component
	   * @see ICAL.parse(function)
	   * @param {String} str    The iCalendar component string to parse
	   * @return {Object}       The jCal Object containing the component
	   */
	  parser.component = function(str) {
	    return parser(str);
	  };

	  // classes & constants
	  parser.ParserError = ParserError;

	  /**
	   * The state for parsing content lines from an iCalendar/vCard string.
	   *
	   * @private
	   * @memberof ICAL.parse
	   * @typedef {Object} parserState
	   * @property {ICAL.design.designSet} designSet    The design set to use for parsing
	   * @property {ICAL.Component[]} stack             The stack of components being processed
	   * @property {ICAL.Component} component           The currently active component
	   */


	  /**
	   * Handles a single line of iCalendar/vCard, updating the state.
	   *
	   * @private
	   * @function ICAL.parse._handleContentLine
	   * @param {String} line               The content line to process
	   * @param {ICAL.parse.parserState}    The current state of the line parsing
	   */
	  parser._handleContentLine = function(line, state) {
	    // break up the parts of the line
	    var valuePos = line.indexOf(VALUE_DELIMITER);
	    var paramPos = line.indexOf(PARAM_DELIMITER);

	    var lastParamIndex;
	    var lastValuePos;

	    // name of property or begin/end
	    var name;
	    var value;
	    // params is only overridden if paramPos !== -1.
	    // we can't do params = params || {} later on
	    // because it sacrifices ops.
	    var params = {};

	    /**
	     * Different property cases
	     *
	     *
	     * 1. RRULE:FREQ=foo
	     *    // FREQ= is not a param but the value
	     *
	     * 2. ATTENDEE;ROLE=REQ-PARTICIPANT;
	     *    // ROLE= is a param because : has not happened yet
	     */
	      // when the parameter delimiter is after the
	      // value delimiter then it is not a parameter.

	    if ((paramPos !== -1 && valuePos !== -1)) {
	      // when the parameter delimiter is after the
	      // value delimiter then it is not a parameter.
	      if (paramPos > valuePos) {
	        paramPos = -1;
	      }
	    }

	    var parsedParams;
	    if (paramPos !== -1) {
	      name = line.substring(0, paramPos).toLowerCase();
	      parsedParams = parser._parseParameters(line.substring(paramPos), 0, state.designSet);
	      if (parsedParams[2] == -1) {
	        throw new ParserError("Invalid parameters in '" + line + "'");
	      }
	      params = parsedParams[0];
	      lastParamIndex = parsedParams[1].length + parsedParams[2] + paramPos;
	      if ((lastValuePos =
	        line.substring(lastParamIndex).indexOf(VALUE_DELIMITER)) !== -1) {
	        value = line.substring(lastParamIndex + lastValuePos + 1);
	      } else {
	        throw new ParserError("Missing parameter value in '" + line + "'");
	      }
	    } else if (valuePos !== -1) {
	      // without parmeters (BEGIN:VCAENDAR, CLASS:PUBLIC)
	      name = line.substring(0, valuePos).toLowerCase();
	      value = line.substring(valuePos + 1);

	      if (name === 'begin') {
	        var newComponent = [value.toLowerCase(), [], []];
	        if (state.stack.length === 1) {
	          state.component.push(newComponent);
	        } else {
	          state.component[2].push(newComponent);
	        }
	        state.stack.push(state.component);
	        state.component = newComponent;
	        if (!state.designSet) {
	          state.designSet = design.getDesignSet(state.component[0]);
	        }
	        return;
	      } else if (name === 'end') {
	        state.component = state.stack.pop();
	        return;
	      }
	      // If it is not begin/end, then this is a property with an empty value,
	      // which should be considered valid.
	    } else {
	      /**
	       * Invalid line.
	       * The rational to throw an error is we will
	       * never be certain that the rest of the file
	       * is sane and it is unlikely that we can serialize
	       * the result correctly either.
	       */
	      throw new ParserError(
	        'invalid line (no token ";" or ":") "' + line + '"'
	      );
	    }

	    var valueType;
	    var multiValue = false;
	    var structuredValue = false;
	    var propertyDetails;

	    if (name in state.designSet.property) {
	      propertyDetails = state.designSet.property[name];

	      if ('multiValue' in propertyDetails) {
	        multiValue = propertyDetails.multiValue;
	      }

	      if ('structuredValue' in propertyDetails) {
	        structuredValue = propertyDetails.structuredValue;
	      }

	      if (value && 'detectType' in propertyDetails) {
	        valueType = propertyDetails.detectType(value);
	      }
	    }

	    // attempt to determine value
	    if (!valueType) {
	      if (!('value' in params)) {
	        if (propertyDetails) {
	          valueType = propertyDetails.defaultType;
	        } else {
	          valueType = DEFAULT_VALUE_TYPE;
	        }
	      } else {
	        // possible to avoid this?
	        valueType = params.value.toLowerCase();
	      }
	    }

	    delete params.value;

	    /**
	     * Note on `var result` juggling:
	     *
	     * I observed that building the array in pieces has adverse
	     * effects on performance, so where possible we inline the creation.
	     * It is a little ugly but resulted in ~2000 additional ops/sec.
	     */

	    var result;
	    if (multiValue && structuredValue) {
	      value = parser._parseMultiValue(value, structuredValue, valueType, [], multiValue, state.designSet, structuredValue);
	      result = [name, params, valueType, value];
	    } else if (multiValue) {
	      result = [name, params, valueType];
	      parser._parseMultiValue(value, multiValue, valueType, result, null, state.designSet, false);
	    } else if (structuredValue) {
	      value = parser._parseMultiValue(value, structuredValue, valueType, [], null, state.designSet, structuredValue);
	      result = [name, params, valueType, value];
	    } else {
	      value = parser._parseValue(value, valueType, state.designSet, false);
	      result = [name, params, valueType, value];
	    }
	    // rfc6350 requires that in vCard 4.0 the first component is the VERSION
	    // component with as value 4.0, note that 3.0 does not have this requirement.
	    if (state.component[0] === 'vcard' && state.component[1].length === 0 &&
	            !(name === 'version' && value === '4.0')) {
	      state.designSet = design.getDesignSet("vcard3");
	    }
	    state.component[1].push(result);
	  };

	  /**
	   * Parse a value from the raw value into the jCard/jCal value.
	   *
	   * @private
	   * @function ICAL.parse._parseValue
	   * @param {String} value          Original value
	   * @param {String} type           Type of value
	   * @param {Object} designSet      The design data to use for this value
	   * @return {Object} varies on type
	   */
	  parser._parseValue = function(value, type, designSet, structuredValue) {
	    if (type in designSet.value && 'fromICAL' in designSet.value[type]) {
	      return designSet.value[type].fromICAL(value, structuredValue);
	    }
	    return value;
	  };

	  /**
	   * Parse parameters from a string to object.
	   *
	   * @function ICAL.parse._parseParameters
	   * @private
	   * @param {String} line           A single unfolded line
	   * @param {Numeric} start         Position to start looking for properties
	   * @param {Object} designSet      The design data to use for this property
	   * @return {Object} key/value pairs
	   */
	  parser._parseParameters = function(line, start, designSet) {
	    var lastParam = start;
	    var pos = 0;
	    var delim = PARAM_NAME_DELIMITER;
	    var result = {};
	    var name, lcname;
	    var value, valuePos = -1;
	    var type, multiValue, mvdelim;

	    // find the next '=' sign
	    // use lastParam and pos to find name
	    // check if " is used if so get value from "->"
	    // then increment pos to find next ;

	    while ((pos !== false) &&
	           (pos = helpers.unescapedIndexOf(line, delim, pos + 1)) !== -1) {

	      name = line.substr(lastParam + 1, pos - lastParam - 1);
	      if (name.length == 0) {
	        throw new ParserError("Empty parameter name in '" + line + "'");
	      }
	      lcname = name.toLowerCase();
	      mvdelim = false;
	      multiValue = false;

	      if (lcname in designSet.param && designSet.param[lcname].valueType) {
	        type = designSet.param[lcname].valueType;
	      } else {
	        type = DEFAULT_PARAM_TYPE;
	      }

	      if (lcname in designSet.param) {
	        multiValue = designSet.param[lcname].multiValue;
	        if (designSet.param[lcname].multiValueSeparateDQuote) {
	          mvdelim = parser._rfc6868Escape('"' + multiValue + '"');
	        }
	      }

	      var nextChar = line[pos + 1];
	      if (nextChar === '"') {
	        valuePos = pos + 2;
	        pos = helpers.unescapedIndexOf(line, '"', valuePos);
	        if (multiValue && pos != -1) {
	            var extendedValue = true;
	            while (extendedValue) {
	              if (line[pos + 1] == multiValue && line[pos + 2] == '"') {
	                pos = helpers.unescapedIndexOf(line, '"', pos + 3);
	              } else {
	                extendedValue = false;
	              }
	            }
	          }
	        if (pos === -1) {
	          throw new ParserError(
	            'invalid line (no matching double quote) "' + line + '"'
	          );
	        }
	        value = line.substr(valuePos, pos - valuePos);
	        lastParam = helpers.unescapedIndexOf(line, PARAM_DELIMITER, pos);
	        if (lastParam === -1) {
	          pos = false;
	        }
	      } else {
	        valuePos = pos + 1;

	        // move to next ";"
	        var nextPos = helpers.unescapedIndexOf(line, PARAM_DELIMITER, valuePos);
	        var propValuePos = helpers.unescapedIndexOf(line, VALUE_DELIMITER, valuePos);
	        if (propValuePos !== -1 && nextPos > propValuePos) {
	          // this is a delimiter in the property value, let's stop here
	          nextPos = propValuePos;
	          pos = false;
	        } else if (nextPos === -1) {
	          // no ";"
	          if (propValuePos === -1) {
	            nextPos = line.length;
	          } else {
	            nextPos = propValuePos;
	          }
	          pos = false;
	        } else {
	          lastParam = nextPos;
	          pos = nextPos;
	        }

	        value = line.substr(valuePos, nextPos - valuePos);
	      }

	      value = parser._rfc6868Escape(value);
	      if (multiValue) {
	        var delimiter = mvdelim || multiValue;
	        value = parser._parseMultiValue(value, delimiter, type, [], null, designSet);
	      } else {
	        value = parser._parseValue(value, type, designSet);
	      }

	      if (multiValue && (lcname in result)) {
	        if (Array.isArray(result[lcname])) {
	          result[lcname].push(value);
	        } else {
	          result[lcname] = [
	            result[lcname],
	            value
	          ];
	        }
	      } else {
	        result[lcname] = value;
	      }
	    }
	    return [result, value, valuePos];
	  };

	  /**
	   * Internal helper for rfc6868. Exposing this on ICAL.parse so that
	   * hackers can disable the rfc6868 parsing if the really need to.
	   *
	   * @function ICAL.parse._rfc6868Escape
	   * @param {String} val        The value to escape
	   * @return {String}           The escaped value
	   */
	  parser._rfc6868Escape = function(val) {
	    return val.replace(/\^['n^]/g, function(x) {
	      return RFC6868_REPLACE_MAP[x];
	    });
	  };
	  var RFC6868_REPLACE_MAP = { "^'": '"', "^n": "\n", "^^": "^" };

	  /**
	   * Parse a multi value string. This function is used either for parsing
	   * actual multi-value property's values, or for handling parameter values. It
	   * can be used for both multi-value properties and structured value properties.
	   *
	   * @private
	   * @function ICAL.parse._parseMultiValue
	   * @param {String} buffer     The buffer containing the full value
	   * @param {String} delim      The multi-value delimiter
	   * @param {String} type       The value type to be parsed
	   * @param {Array.<?>} result        The array to append results to, varies on value type
	   * @param {String} innerMulti The inner delimiter to split each value with
	   * @param {ICAL.design.designSet} designSet   The design data for this value
	   * @return {?|Array.<?>}            Either an array of results, or the first result
	   */
	  parser._parseMultiValue = function(buffer, delim, type, result, innerMulti, designSet, structuredValue) {
	    var pos = 0;
	    var lastPos = 0;
	    var value;
	    if (delim.length === 0) {
	      return buffer;
	    }

	    // split each piece
	    while ((pos = helpers.unescapedIndexOf(buffer, delim, lastPos)) !== -1) {
	      value = buffer.substr(lastPos, pos - lastPos);
	      if (innerMulti) {
	        value = parser._parseMultiValue(value, innerMulti, type, [], null, designSet, structuredValue);
	      } else {
	        value = parser._parseValue(value, type, designSet, structuredValue);
	      }
	      result.push(value);
	      lastPos = pos + delim.length;
	    }

	    // on the last piece take the rest of string
	    value = buffer.substr(lastPos);
	    if (innerMulti) {
	      value = parser._parseMultiValue(value, innerMulti, type, [], null, designSet, structuredValue);
	    } else {
	      value = parser._parseValue(value, type, designSet, structuredValue);
	    }
	    result.push(value);

	    return result.length == 1 ? result[0] : result;
	  };

	  /**
	   * Process a complete buffer of iCalendar/vCard data line by line, correctly
	   * unfolding content. Each line will be processed with the given callback
	   *
	   * @private
	   * @function ICAL.parse._eachLine
	   * @param {String} buffer                         The buffer to process
	   * @param {function(?String, String)} callback    The callback for each line
	   */
	  parser._eachLine = function(buffer, callback) {
	    var len = buffer.length;
	    var lastPos = buffer.search(CHAR);
	    var pos = lastPos;
	    var line;
	    var firstChar;

	    var newlineOffset;

	    do {
	      pos = buffer.indexOf('\n', lastPos) + 1;

	      if (pos > 1 && buffer[pos - 2] === '\r') {
	        newlineOffset = 2;
	      } else {
	        newlineOffset = 1;
	      }

	      if (pos === 0) {
	        pos = len;
	        newlineOffset = 0;
	      }

	      firstChar = buffer[lastPos];

	      if (firstChar === ' ' || firstChar === '\t') {
	        // add to line
	        line += buffer.substr(
	          lastPos + 1,
	          pos - lastPos - (newlineOffset + 1)
	        );
	      } else {
	        if (line)
	          callback(null, line);
	        // push line
	        line = buffer.substr(
	          lastPos,
	          pos - lastPos - newlineOffset
	        );
	      }

	      lastPos = pos;
	    } while (pos !== len);

	    // extra ending line
	    line = line.trim();

	    if (line.length)
	      callback(null, line);
	  };

	  return parser;

	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.Component = (function() {

	  var PROPERTY_INDEX = 1;
	  var COMPONENT_INDEX = 2;
	  var NAME_INDEX = 0;

	  /**
	   * @classdesc
	   * Wraps a jCal component, adding convenience methods to add, remove and
	   * update subcomponents and properties.
	   *
	   * @class
	   * @alias ICAL.Component
	   * @param {Array|String} jCal         Raw jCal component data OR name of new
	   *                                      component
	   * @param {ICAL.Component} parent     Parent component to associate
	   */
	  function Component(jCal, parent) {
	    if (typeof(jCal) === 'string') {
	      // jCal spec (name, properties, components)
	      jCal = [jCal, [], []];
	    }

	    // mostly for legacy reasons.
	    this.jCal = jCal;

	    this.parent = parent || null;
	  }

	  Component.prototype = {
	    /**
	     * Hydrated properties are inserted into the _properties array at the same
	     * position as in the jCal array, so it is possible that the array contains
	     * undefined values for unhydrdated properties. To avoid iterating the
	     * array when checking if all properties have been hydrated, we save the
	     * count here.
	     *
	     * @type {Number}
	     * @private
	     */
	    _hydratedPropertyCount: 0,

	    /**
	     * The same count as for _hydratedPropertyCount, but for subcomponents
	     *
	     * @type {Number}
	     * @private
	     */
	    _hydratedComponentCount: 0,

	    /**
	     * The name of this component
	     * @readonly
	     */
	    get name() {
	      return this.jCal[NAME_INDEX];
	    },

	    /**
	     * The design set for this component, e.g. icalendar vs vcard
	     *
	     * @type {ICAL.design.designSet}
	     * @private
	     */
	    get _designSet() {
	      var parentDesign = this.parent && this.parent._designSet;
	      return parentDesign || ICAL.design.getDesignSet(this.name);
	    },

	    _hydrateComponent: function(index) {
	      if (!this._components) {
	        this._components = [];
	        this._hydratedComponentCount = 0;
	      }

	      if (this._components[index]) {
	        return this._components[index];
	      }

	      var comp = new Component(
	        this.jCal[COMPONENT_INDEX][index],
	        this
	      );

	      this._hydratedComponentCount++;
	      return (this._components[index] = comp);
	    },

	    _hydrateProperty: function(index) {
	      if (!this._properties) {
	        this._properties = [];
	        this._hydratedPropertyCount = 0;
	      }

	      if (this._properties[index]) {
	        return this._properties[index];
	      }

	      var prop = new ICAL.Property(
	        this.jCal[PROPERTY_INDEX][index],
	        this
	      );

	      this._hydratedPropertyCount++;
	      return (this._properties[index] = prop);
	    },

	    /**
	     * Finds first sub component, optionally filtered by name.
	     *
	     * @param {String=} name        Optional name to filter by
	     * @return {?ICAL.Component}     The found subcomponent
	     */
	    getFirstSubcomponent: function(name) {
	      if (name) {
	        var i = 0;
	        var comps = this.jCal[COMPONENT_INDEX];
	        var len = comps.length;

	        for (; i < len; i++) {
	          if (comps[i][NAME_INDEX] === name) {
	            var result = this._hydrateComponent(i);
	            return result;
	          }
	        }
	      } else {
	        if (this.jCal[COMPONENT_INDEX].length) {
	          return this._hydrateComponent(0);
	        }
	      }

	      // ensure we return a value (strict mode)
	      return null;
	    },

	    /**
	     * Finds all sub components, optionally filtering by name.
	     *
	     * @param {String=} name            Optional name to filter by
	     * @return {ICAL.Component[]}       The found sub components
	     */
	    getAllSubcomponents: function(name) {
	      var jCalLen = this.jCal[COMPONENT_INDEX].length;
	      var i = 0;

	      if (name) {
	        var comps = this.jCal[COMPONENT_INDEX];
	        var result = [];

	        for (; i < jCalLen; i++) {
	          if (name === comps[i][NAME_INDEX]) {
	            result.push(
	              this._hydrateComponent(i)
	            );
	          }
	        }
	        return result;
	      } else {
	        if (!this._components ||
	            (this._hydratedComponentCount !== jCalLen)) {
	          for (; i < jCalLen; i++) {
	            this._hydrateComponent(i);
	          }
	        }

	        return this._components || [];
	      }
	    },

	    /**
	     * Returns true when a named property exists.
	     *
	     * @param {String} name     The property name
	     * @return {Boolean}        True, when property is found
	     */
	    hasProperty: function(name) {
	      var props = this.jCal[PROPERTY_INDEX];
	      var len = props.length;

	      var i = 0;
	      for (; i < len; i++) {
	        // 0 is property name
	        if (props[i][NAME_INDEX] === name) {
	          return true;
	        }
	      }

	      return false;
	    },

	    /**
	     * Finds the first property, optionally with the given name.
	     *
	     * @param {String=} name        Lowercase property name
	     * @return {?ICAL.Property}     The found property
	     */
	    getFirstProperty: function(name) {
	      if (name) {
	        var i = 0;
	        var props = this.jCal[PROPERTY_INDEX];
	        var len = props.length;

	        for (; i < len; i++) {
	          if (props[i][NAME_INDEX] === name) {
	            var result = this._hydrateProperty(i);
	            return result;
	          }
	        }
	      } else {
	        if (this.jCal[PROPERTY_INDEX].length) {
	          return this._hydrateProperty(0);
	        }
	      }

	      return null;
	    },

	    /**
	     * Returns first property's value, if available.
	     *
	     * @param {String=} name    Lowercase property name
	     * @return {?String}        The found property value.
	     */
	    getFirstPropertyValue: function(name) {
	      var prop = this.getFirstProperty(name);
	      if (prop) {
	        return prop.getFirstValue();
	      }

	      return null;
	    },

	    /**
	     * Get all properties in the component, optionally filtered by name.
	     *
	     * @param {String=} name        Lowercase property name
	     * @return {ICAL.Property[]}    List of properties
	     */
	    getAllProperties: function(name) {
	      var jCalLen = this.jCal[PROPERTY_INDEX].length;
	      var i = 0;

	      if (name) {
	        var props = this.jCal[PROPERTY_INDEX];
	        var result = [];

	        for (; i < jCalLen; i++) {
	          if (name === props[i][NAME_INDEX]) {
	            result.push(
	              this._hydrateProperty(i)
	            );
	          }
	        }
	        return result;
	      } else {
	        if (!this._properties ||
	            (this._hydratedPropertyCount !== jCalLen)) {
	          for (; i < jCalLen; i++) {
	            this._hydrateProperty(i);
	          }
	        }

	        return this._properties || [];
	      }
	    },

	    _removeObjectByIndex: function(jCalIndex, cache, index) {
	      cache = cache || [];
	      // remove cached version
	      if (cache[index]) {
	        var obj = cache[index];
	        if ("parent" in obj) {
	            obj.parent = null;
	        }
	      }

	      cache.splice(index, 1);

	      // remove it from the jCal
	      this.jCal[jCalIndex].splice(index, 1);
	    },

	    _removeObject: function(jCalIndex, cache, nameOrObject) {
	      var i = 0;
	      var objects = this.jCal[jCalIndex];
	      var len = objects.length;
	      var cached = this[cache];

	      if (typeof(nameOrObject) === 'string') {
	        for (; i < len; i++) {
	          if (objects[i][NAME_INDEX] === nameOrObject) {
	            this._removeObjectByIndex(jCalIndex, cached, i);
	            return true;
	          }
	        }
	      } else if (cached) {
	        for (; i < len; i++) {
	          if (cached[i] && cached[i] === nameOrObject) {
	            this._removeObjectByIndex(jCalIndex, cached, i);
	            return true;
	          }
	        }
	      }

	      return false;
	    },

	    _removeAllObjects: function(jCalIndex, cache, name) {
	      var cached = this[cache];

	      // Unfortunately we have to run through all children to reset their
	      // parent property.
	      var objects = this.jCal[jCalIndex];
	      var i = objects.length - 1;

	      // descending search required because splice
	      // is used and will effect the indices.
	      for (; i >= 0; i--) {
	        if (!name || objects[i][NAME_INDEX] === name) {
	          this._removeObjectByIndex(jCalIndex, cached, i);
	        }
	      }
	    },

	    /**
	     * Adds a single sub component.
	     *
	     * @param {ICAL.Component} component        The component to add
	     * @return {ICAL.Component}                 The passed in component
	     */
	    addSubcomponent: function(component) {
	      if (!this._components) {
	        this._components = [];
	        this._hydratedComponentCount = 0;
	      }

	      if (component.parent) {
	        component.parent.removeSubcomponent(component);
	      }

	      var idx = this.jCal[COMPONENT_INDEX].push(component.jCal);
	      this._components[idx - 1] = component;
	      this._hydratedComponentCount++;
	      component.parent = this;
	      return component;
	    },

	    /**
	     * Removes a single component by name or the instance of a specific
	     * component.
	     *
	     * @param {ICAL.Component|String} nameOrComp    Name of component, or component
	     * @return {Boolean}                            True when comp is removed
	     */
	    removeSubcomponent: function(nameOrComp) {
	      var removed = this._removeObject(COMPONENT_INDEX, '_components', nameOrComp);
	      if (removed) {
	        this._hydratedComponentCount--;
	      }
	      return removed;
	    },

	    /**
	     * Removes all components or (if given) all components by a particular
	     * name.
	     *
	     * @param {String=} name            Lowercase component name
	     */
	    removeAllSubcomponents: function(name) {
	      var removed = this._removeAllObjects(COMPONENT_INDEX, '_components', name);
	      this._hydratedComponentCount = 0;
	      return removed;
	    },

	    /**
	     * Adds an {@link ICAL.Property} to the component.
	     *
	     * @param {ICAL.Property} property      The property to add
	     * @return {ICAL.Property}              The passed in property
	     */
	    addProperty: function(property) {
	      if (!(property instanceof ICAL.Property)) {
	        throw new TypeError('must instance of ICAL.Property');
	      }

	      if (!this._properties) {
	        this._properties = [];
	        this._hydratedPropertyCount = 0;
	      }

	      if (property.parent) {
	        property.parent.removeProperty(property);
	      }

	      var idx = this.jCal[PROPERTY_INDEX].push(property.jCal);
	      this._properties[idx - 1] = property;
	      this._hydratedPropertyCount++;
	      property.parent = this;
	      return property;
	    },

	    /**
	     * Helper method to add a property with a value to the component.
	     *
	     * @param {String}               name         Property name to add
	     * @param {String|Number|Object} value        Property value
	     * @return {ICAL.Property}                    The created property
	     */
	    addPropertyWithValue: function(name, value) {
	      var prop = new ICAL.Property(name);
	      prop.setValue(value);

	      this.addProperty(prop);

	      return prop;
	    },

	    /**
	     * Helper method that will update or create a property of the given name
	     * and sets its value. If multiple properties with the given name exist,
	     * only the first is updated.
	     *
	     * @param {String}               name         Property name to update
	     * @param {String|Number|Object} value        Property value
	     * @return {ICAL.Property}                    The created property
	     */
	    updatePropertyWithValue: function(name, value) {
	      var prop = this.getFirstProperty(name);

	      if (prop) {
	        prop.setValue(value);
	      } else {
	        prop = this.addPropertyWithValue(name, value);
	      }

	      return prop;
	    },

	    /**
	     * Removes a single property by name or the instance of the specific
	     * property.
	     *
	     * @param {String|ICAL.Property} nameOrProp     Property name or instance to remove
	     * @return {Boolean}                            True, when deleted
	     */
	    removeProperty: function(nameOrProp) {
	      var removed = this._removeObject(PROPERTY_INDEX, '_properties', nameOrProp);
	      if (removed) {
	        this._hydratedPropertyCount--;
	      }
	      return removed;
	    },

	    /**
	     * Removes all properties associated with this component, optionally
	     * filtered by name.
	     *
	     * @param {String=} name        Lowercase property name
	     * @return {Boolean}            True, when deleted
	     */
	    removeAllProperties: function(name) {
	      var removed = this._removeAllObjects(PROPERTY_INDEX, '_properties', name);
	      this._hydratedPropertyCount = 0;
	      return removed;
	    },

	    /**
	     * Returns the Object representation of this component. The returned object
	     * is a live jCal object and should be cloned if modified.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return this.jCal;
	    },

	    /**
	     * The string representation of this component.
	     * @return {String}
	     */
	    toString: function() {
	      return ICAL.stringify.component(
	        this.jCal, this._designSet
	      );
	    }
	  };

	  /**
	   * Create an {@link ICAL.Component} by parsing the passed iCalendar string.
	   *
	   * @param {String} str        The iCalendar string to parse
	   */
	  Component.fromString = function(str) {
	    return new Component(ICAL.parse.component(str));
	  };

	  return Component;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.Property = (function() {

	  var NAME_INDEX = 0;
	  var PROP_INDEX = 1;
	  var TYPE_INDEX = 2;
	  var VALUE_INDEX = 3;

	  var design = ICAL.design;

	  /**
	   * @classdesc
	   * Provides a layer on top of the raw jCal object for manipulating a single
	   * property, with its parameters and value.
	   *
	   * @description
	   * It is important to note that mutations done in the wrapper
	   * directly mutate the jCal object used to initialize.
	   *
	   * Can also be used to create new properties by passing
	   * the name of the property (as a String).
	   *
	   * @class
	   * @alias ICAL.Property
	   * @param {Array|String} jCal         Raw jCal representation OR
	   *  the new name of the property
	   *
	   * @param {ICAL.Component=} parent    Parent component
	   */
	  function Property(jCal, parent) {
	    this._parent = parent || null;

	    if (typeof(jCal) === 'string') {
	      // We are creating the property by name and need to detect the type
	      this.jCal = [jCal, {}, design.defaultType];
	      this.jCal[TYPE_INDEX] = this.getDefaultType();
	    } else {
	      this.jCal = jCal;
	    }
	    this._updateType();
	  }

	  Property.prototype = {

	    /**
	     * The value type for this property
	     * @readonly
	     * @type {String}
	     */
	    get type() {
	      return this.jCal[TYPE_INDEX];
	    },

	    /**
	     * The name of this property, in lowercase.
	     * @readonly
	     * @type {String}
	     */
	    get name() {
	      return this.jCal[NAME_INDEX];
	    },

	    /**
	     * The parent component for this property.
	     * @type {ICAL.Component}
	     */
	    get parent() {
	      return this._parent;
	    },

	    set parent(p) {
	      // Before setting the parent, check if the design set has changed. If it
	      // has, we later need to update the type if it was unknown before.
	      var designSetChanged = !this._parent || (p && p._designSet != this._parent._designSet);

	      this._parent = p;

	      if (this.type == design.defaultType && designSetChanged) {
	        this.jCal[TYPE_INDEX] = this.getDefaultType();
	        this._updateType();
	      }

	      return p;
	    },

	    /**
	     * The design set for this property, e.g. icalendar vs vcard
	     *
	     * @type {ICAL.design.designSet}
	     * @private
	     */
	    get _designSet() {
	      return this.parent ? this.parent._designSet : design.defaultSet;
	    },

	    /**
	     * Updates the type metadata from the current jCal type and design set.
	     *
	     * @private
	     */
	    _updateType: function() {
	      var designSet = this._designSet;

	      if (this.type in designSet.value) {
	        designSet.value[this.type];

	        if ('decorate' in designSet.value[this.type]) {
	          this.isDecorated = true;
	        } else {
	          this.isDecorated = false;
	        }

	        if (this.name in designSet.property) {
	          this.isMultiValue = ('multiValue' in designSet.property[this.name]);
	          this.isStructuredValue = ('structuredValue' in designSet.property[this.name]);
	        }
	      }
	    },

	    /**
	     * Hydrate a single value. The act of hydrating means turning the raw jCal
	     * value into a potentially wrapped object, for example {@link ICAL.Time}.
	     *
	     * @private
	     * @param {Number} index        The index of the value to hydrate
	     * @return {Object}             The decorated value.
	     */
	    _hydrateValue: function(index) {
	      if (this._values && this._values[index]) {
	        return this._values[index];
	      }

	      // for the case where there is no value.
	      if (this.jCal.length <= (VALUE_INDEX + index)) {
	        return null;
	      }

	      if (this.isDecorated) {
	        if (!this._values) {
	          this._values = [];
	        }
	        return (this._values[index] = this._decorate(
	          this.jCal[VALUE_INDEX + index]
	        ));
	      } else {
	        return this.jCal[VALUE_INDEX + index];
	      }
	    },

	    /**
	     * Decorate a single value, returning its wrapped object. This is used by
	     * the hydrate function to actually wrap the value.
	     *
	     * @private
	     * @param {?} value         The value to decorate
	     * @return {Object}         The decorated value
	     */
	    _decorate: function(value) {
	      return this._designSet.value[this.type].decorate(value, this);
	    },

	    /**
	     * Undecorate a single value, returning its raw jCal data.
	     *
	     * @private
	     * @param {Object} value         The value to undecorate
	     * @return {?}                   The undecorated value
	     */
	    _undecorate: function(value) {
	      return this._designSet.value[this.type].undecorate(value, this);
	    },

	    /**
	     * Sets the value at the given index while also hydrating it. The passed
	     * value can either be a decorated or undecorated value.
	     *
	     * @private
	     * @param {?} value             The value to set
	     * @param {Number} index        The index to set it at
	     */
	    _setDecoratedValue: function(value, index) {
	      if (!this._values) {
	        this._values = [];
	      }

	      if (typeof(value) === 'object' && 'icaltype' in value) {
	        // decorated value
	        this.jCal[VALUE_INDEX + index] = this._undecorate(value);
	        this._values[index] = value;
	      } else {
	        // undecorated value
	        this.jCal[VALUE_INDEX + index] = value;
	        this._values[index] = this._decorate(value);
	      }
	    },

	    /**
	     * Gets a parameter on the property.
	     *
	     * @param {String}        name   Parameter name (lowercase)
	     * @return {Array|String}        Parameter value
	     */
	    getParameter: function(name) {
	      if (name in this.jCal[PROP_INDEX]) {
	        return this.jCal[PROP_INDEX][name];
	      } else {
	        return undefined;
	      }
	    },

	    /**
	     * Gets first parameter on the property.
	     *
	     * @param {String}        name   Parameter name (lowercase)
	     * @return {String}        Parameter value
	     */
	    getFirstParameter: function(name) {
	      var parameters = this.getParameter(name);

	      if (Array.isArray(parameters)) {
	        return parameters[0];
	      }

	      return parameters;
	    },

	    /**
	     * Sets a parameter on the property.
	     *
	     * @param {String}       name     The parameter name
	     * @param {Array|String} value    The parameter value
	     */
	    setParameter: function(name, value) {
	      var lcname = name.toLowerCase();
	      if (typeof value === "string" &&
	          lcname in this._designSet.param &&
	          'multiValue' in this._designSet.param[lcname]) {
	          value = [value];
	      }
	      this.jCal[PROP_INDEX][name] = value;
	    },

	    /**
	     * Removes a parameter
	     *
	     * @param {String} name     The parameter name
	     */
	    removeParameter: function(name) {
	      delete this.jCal[PROP_INDEX][name];
	    },

	    /**
	     * Get the default type based on this property's name.
	     *
	     * @return {String}     The default type for this property
	     */
	    getDefaultType: function() {
	      var name = this.jCal[NAME_INDEX];
	      var designSet = this._designSet;

	      if (name in designSet.property) {
	        var details = designSet.property[name];
	        if ('defaultType' in details) {
	          return details.defaultType;
	        }
	      }
	      return design.defaultType;
	    },

	    /**
	     * Sets type of property and clears out any existing values of the current
	     * type.
	     *
	     * @param {String} type     New iCAL type (see design.*.values)
	     */
	    resetType: function(type) {
	      this.removeAllValues();
	      this.jCal[TYPE_INDEX] = type;
	      this._updateType();
	    },

	    /**
	     * Finds the first property value.
	     *
	     * @return {String}         First property value
	     */
	    getFirstValue: function() {
	      return this._hydrateValue(0);
	    },

	    /**
	     * Gets all values on the property.
	     *
	     * NOTE: this creates an array during each call.
	     *
	     * @return {Array}          List of values
	     */
	    getValues: function() {
	      var len = this.jCal.length - VALUE_INDEX;

	      if (len < 1) {
	        // it is possible for a property to have no value.
	        return [];
	      }

	      var i = 0;
	      var result = [];

	      for (; i < len; i++) {
	        result[i] = this._hydrateValue(i);
	      }

	      return result;
	    },

	    /**
	     * Removes all values from this property
	     */
	    removeAllValues: function() {
	      if (this._values) {
	        this._values.length = 0;
	      }
	      this.jCal.length = 3;
	    },

	    /**
	     * Sets the values of the property.  Will overwrite the existing values.
	     * This can only be used for multi-value properties.
	     *
	     * @param {Array} values    An array of values
	     */
	    setValues: function(values) {
	      if (!this.isMultiValue) {
	        throw new Error(
	          this.name + ': does not not support mulitValue.\n' +
	          'override isMultiValue'
	        );
	      }

	      var len = values.length;
	      var i = 0;
	      this.removeAllValues();

	      if (len > 0 &&
	          typeof(values[0]) === 'object' &&
	          'icaltype' in values[0]) {
	        this.resetType(values[0].icaltype);
	      }

	      if (this.isDecorated) {
	        for (; i < len; i++) {
	          this._setDecoratedValue(values[i], i);
	        }
	      } else {
	        for (; i < len; i++) {
	          this.jCal[VALUE_INDEX + i] = values[i];
	        }
	      }
	    },

	    /**
	     * Sets the current value of the property. If this is a multi-value
	     * property, all other values will be removed.
	     *
	     * @param {String|Object} value     New property value.
	     */
	    setValue: function(value) {
	      this.removeAllValues();
	      if (typeof(value) === 'object' && 'icaltype' in value) {
	        this.resetType(value.icaltype);
	      }

	      if (this.isDecorated) {
	        this._setDecoratedValue(value, 0);
	      } else {
	        this.jCal[VALUE_INDEX] = value;
	      }
	    },

	    /**
	     * Returns the Object representation of this component. The returned object
	     * is a live jCal object and should be cloned if modified.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return this.jCal;
	    },

	    /**
	     * The string representation of this component.
	     * @return {String}
	     */
	    toICALString: function() {
	      return ICAL.stringify.property(
	        this.jCal, this._designSet, true
	      );
	    }
	  };

	  /**
	   * Create an {@link ICAL.Property} by parsing the passed iCalendar string.
	   *
	   * @param {String} str                        The iCalendar string to parse
	   * @param {ICAL.design.designSet=} designSet  The design data to use for this property
	   * @return {ICAL.Property}                    The created iCalendar property
	   */
	  Property.fromString = function(str, designSet) {
	    return new Property(ICAL.parse.property(str, designSet));
	  };

	  return Property;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.UtcOffset = (function() {

	  /**
	   * @classdesc
	   * This class represents the "duration" value type, with various calculation
	   * and manipulation methods.
	   *
	   * @class
	   * @alias ICAL.UtcOffset
	   * @param {Object} aData          An object with members of the utc offset
	   * @param {Number=} aData.hours   The hours for the utc offset
	   * @param {Number=} aData.minutes The minutes in the utc offset
	   * @param {Number=} aData.factor  The factor for the utc-offset, either -1 or 1
	   */
	  function UtcOffset(aData) {
	    this.fromData(aData);
	  }

	  UtcOffset.prototype = {

	    /**
	     * The hours in the utc-offset
	     * @type {Number}
	     */
	    hours: 0,

	    /**
	     * The minutes in the utc-offset
	     * @type {Number}
	     */
	    minutes: 0,

	    /**
	     * The sign of the utc offset, 1 for positive offset, -1 for negative
	     * offsets.
	     * @type {Number}
	     */
	    factor: 1,

	    /**
	     * The type name, to be used in the jCal object.
	     * @constant
	     * @type {String}
	     * @default "utc-offset"
	     */
	    icaltype: "utc-offset",

	    /**
	     * Returns a clone of the utc offset object.
	     *
	     * @return {ICAL.UtcOffset}     The cloned object
	     */
	    clone: function() {
	      return ICAL.UtcOffset.fromSeconds(this.toSeconds());
	    },

	    /**
	     * Sets up the current instance using members from the passed data object.
	     *
	     * @param {Object} aData          An object with members of the utc offset
	     * @param {Number=} aData.hours   The hours for the utc offset
	     * @param {Number=} aData.minutes The minutes in the utc offset
	     * @param {Number=} aData.factor  The factor for the utc-offset, either -1 or 1
	     */
	    fromData: function(aData) {
	      if (aData) {
	        for (var key in aData) {
	          /* istanbul ignore else */
	          if (aData.hasOwnProperty(key)) {
	            this[key] = aData[key];
	          }
	        }
	      }
	      this._normalize();
	    },

	    /**
	     * Sets up the current instance from the given seconds value. The seconds
	     * value is truncated to the minute. Offsets are wrapped when the world
	     * ends, the hour after UTC+14:00 is UTC-12:00.
	     *
	     * @param {Number} aSeconds         The seconds to convert into an offset
	     */
	    fromSeconds: function(aSeconds) {
	      var secs = Math.abs(aSeconds);

	      this.factor = aSeconds < 0 ? -1 : 1;
	      this.hours = ICAL.helpers.trunc(secs / 3600);

	      secs -= (this.hours * 3600);
	      this.minutes = ICAL.helpers.trunc(secs / 60);
	      return this;
	    },

	    /**
	     * Convert the current offset to a value in seconds
	     *
	     * @return {Number}                 The offset in seconds
	     */
	    toSeconds: function() {
	      return this.factor * (60 * this.minutes + 3600 * this.hours);
	    },

	    /**
	     * Compare this utc offset with another one.
	     *
	     * @param {ICAL.UtcOffset} other        The other offset to compare with
	     * @return {Number}                     -1, 0 or 1 for less/equal/greater
	     */
	    compare: function icaltime_compare(other) {
	      var a = this.toSeconds();
	      var b = other.toSeconds();
	      return (a > b) - (b > a);
	    },

	    _normalize: function() {
	      // Range: 97200 seconds (with 1 hour inbetween)
	      var secs = this.toSeconds();
	      var factor = this.factor;
	      while (secs < -43200) { // = UTC-12:00
	        secs += 97200;
	      }
	      while (secs > 50400) { // = UTC+14:00
	        secs -= 97200;
	      }

	      this.fromSeconds(secs);

	      // Avoid changing the factor when on zero seconds
	      if (secs == 0) {
	        this.factor = factor;
	      }
	    },

	    /**
	     * The iCalendar string representation of this utc-offset.
	     * @return {String}
	     */
	    toICALString: function() {
	      return ICAL.design.icalendar.value['utc-offset'].toICAL(this.toString());
	    },

	    /**
	     * The string representation of this utc-offset.
	     * @return {String}
	     */
	    toString: function toString() {
	      return (this.factor == 1 ? "+" : "-") +
	              ICAL.helpers.pad2(this.hours) + ':' +
	              ICAL.helpers.pad2(this.minutes);
	    }
	  };

	  /**
	   * Creates a new {@link ICAL.UtcOffset} instance from the passed string.
	   *
	   * @param {String} aString    The string to parse
	   * @return {ICAL.Duration}    The created utc-offset instance
	   */
	  UtcOffset.fromString = function(aString) {
	    // -05:00
	    var options = {};
	    //TODO: support seconds per rfc5545 ?
	    options.factor = (aString[0] === '+') ? 1 : -1;
	    options.hours = ICAL.helpers.strictParseInt(aString.substr(1, 2));
	    options.minutes = ICAL.helpers.strictParseInt(aString.substr(4, 2));

	    return new ICAL.UtcOffset(options);
	  };

	  /**
	   * Creates a new {@link ICAL.UtcOffset} instance from the passed seconds
	   * value.
	   *
	   * @param {Number} aSeconds       The number of seconds to convert
	   */
	  UtcOffset.fromSeconds = function(aSeconds) {
	    var instance = new UtcOffset();
	    instance.fromSeconds(aSeconds);
	    return instance;
	  };

	  return UtcOffset;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.Binary = (function() {

	  /**
	   * @classdesc
	   * Represents the BINARY value type, which contains extra methods for
	   * encoding and decoding.
	   *
	   * @class
	   * @alias ICAL.Binary
	   * @param {String} aValue     The binary data for this value
	   */
	  function Binary(aValue) {
	    this.value = aValue;
	  }

	  Binary.prototype = {
	    /**
	     * The type name, to be used in the jCal object.
	     * @default "binary"
	     * @constant
	     */
	    icaltype: "binary",

	    /**
	     * Base64 decode the current value
	     *
	     * @return {String}         The base64-decoded value
	     */
	    decodeValue: function decodeValue() {
	      return this._b64_decode(this.value);
	    },

	    /**
	     * Encodes the passed parameter with base64 and sets the internal
	     * value to the result.
	     *
	     * @param {String} aValue      The raw binary value to encode
	     */
	    setEncodedValue: function setEncodedValue(aValue) {
	      this.value = this._b64_encode(aValue);
	    },

	    _b64_encode: function base64_encode(data) {
	      // http://kevin.vanzonneveld.net
	      // +   original by: Tyler Akins (http://rumkin.com)
	      // +   improved by: Bayron Guevara
	      // +   improved by: Thunder.m
	      // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	      // +   bugfixed by: Pellentesque Malesuada
	      // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	      // +   improved by: Rafał Kukawski (http://kukawski.pl)
	      // *     example 1: base64_encode('Kevin van Zonneveld');
	      // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
	      // mozilla has this native
	      // - but breaks in 2.0.0.12!
	      //if (typeof this.window['atob'] == 'function') {
	      //    return atob(data);
	      //}
	      var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
	                "abcdefghijklmnopqrstuvwxyz0123456789+/=";
	      var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
	        ac = 0,
	        enc = "",
	        tmp_arr = [];

	      if (!data) {
	        return data;
	      }

	      do { // pack three octets into four hexets
	        o1 = data.charCodeAt(i++);
	        o2 = data.charCodeAt(i++);
	        o3 = data.charCodeAt(i++);

	        bits = o1 << 16 | o2 << 8 | o3;

	        h1 = bits >> 18 & 0x3f;
	        h2 = bits >> 12 & 0x3f;
	        h3 = bits >> 6 & 0x3f;
	        h4 = bits & 0x3f;

	        // use hexets to index into b64, and append result to encoded string
	        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	      } while (i < data.length);

	      enc = tmp_arr.join('');

	      var r = data.length % 3;

	      return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

	    },

	    _b64_decode: function base64_decode(data) {
	      // http://kevin.vanzonneveld.net
	      // +   original by: Tyler Akins (http://rumkin.com)
	      // +   improved by: Thunder.m
	      // +      input by: Aman Gupta
	      // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	      // +   bugfixed by: Onno Marsman
	      // +   bugfixed by: Pellentesque Malesuada
	      // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	      // +      input by: Brett Zamir (http://brett-zamir.me)
	      // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	      // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
	      // *     returns 1: 'Kevin van Zonneveld'
	      // mozilla has this native
	      // - but breaks in 2.0.0.12!
	      //if (typeof this.window['btoa'] == 'function') {
	      //    return btoa(data);
	      //}
	      var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
	                "abcdefghijklmnopqrstuvwxyz0123456789+/=";
	      var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
	        ac = 0,
	        dec = "",
	        tmp_arr = [];

	      if (!data) {
	        return data;
	      }

	      data += '';

	      do { // unpack four hexets into three octets using index points in b64
	        h1 = b64.indexOf(data.charAt(i++));
	        h2 = b64.indexOf(data.charAt(i++));
	        h3 = b64.indexOf(data.charAt(i++));
	        h4 = b64.indexOf(data.charAt(i++));

	        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

	        o1 = bits >> 16 & 0xff;
	        o2 = bits >> 8 & 0xff;
	        o3 = bits & 0xff;

	        if (h3 == 64) {
	          tmp_arr[ac++] = String.fromCharCode(o1);
	        } else if (h4 == 64) {
	          tmp_arr[ac++] = String.fromCharCode(o1, o2);
	        } else {
	          tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
	        }
	      } while (i < data.length);

	      dec = tmp_arr.join('');

	      return dec;
	    },

	    /**
	     * The string representation of this value
	     * @return {String}
	     */
	    toString: function() {
	      return this.value;
	    }
	  };

	  /**
	   * Creates a binary value from the given string.
	   *
	   * @param {String} aString        The binary value string
	   * @return {ICAL.Binary}          The binary value instance
	   */
	  Binary.fromString = function(aString) {
	    return new Binary(aString);
	  };

	  return Binary;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */



	(function() {
	  /**
	   * @classdesc
	   * This class represents the "period" value type, with various calculation
	   * and manipulation methods.
	   *
	   * @description
	   * The passed data object cannot contain both and end date and a duration.
	   *
	   * @class
	   * @param {Object} aData                  An object with members of the period
	   * @param {ICAL.Time=} aData.start        The start of the period
	   * @param {ICAL.Time=} aData.end          The end of the period
	   * @param {ICAL.Duration=} aData.duration The duration of the period
	   */
	  ICAL.Period = function icalperiod(aData) {
	    this.wrappedJSObject = this;

	    if (aData && 'start' in aData) {
	      if (aData.start && !(aData.start instanceof ICAL.Time)) {
	        throw new TypeError('.start must be an instance of ICAL.Time');
	      }
	      this.start = aData.start;
	    }

	    if (aData && aData.end && aData.duration) {
	      throw new Error('cannot accept both end and duration');
	    }

	    if (aData && 'end' in aData) {
	      if (aData.end && !(aData.end instanceof ICAL.Time)) {
	        throw new TypeError('.end must be an instance of ICAL.Time');
	      }
	      this.end = aData.end;
	    }

	    if (aData && 'duration' in aData) {
	      if (aData.duration && !(aData.duration instanceof ICAL.Duration)) {
	        throw new TypeError('.duration must be an instance of ICAL.Duration');
	      }
	      this.duration = aData.duration;
	    }
	  };

	  ICAL.Period.prototype = {

	    /**
	     * The start of the period
	     * @type {ICAL.Time}
	     */
	    start: null,

	    /**
	     * The end of the period
	     * @type {ICAL.Time}
	     */
	    end: null,

	    /**
	     * The duration of the period
	     * @type {ICAL.Duration}
	     */
	    duration: null,

	    /**
	     * The class identifier.
	     * @constant
	     * @type {String}
	     * @default "icalperiod"
	     */
	    icalclass: "icalperiod",

	    /**
	     * The type name, to be used in the jCal object.
	     * @constant
	     * @type {String}
	     * @default "period"
	     */
	    icaltype: "period",

	    /**
	     * Returns a clone of the duration object.
	     *
	     * @return {ICAL.Period}      The cloned object
	     */
	    clone: function() {
	      return ICAL.Period.fromData({
	        start: this.start ? this.start.clone() : null,
	        end: this.end ? this.end.clone() : null,
	        duration: this.duration ? this.duration.clone() : null
	      });
	    },

	    /**
	     * Calculates the duration of the period, either directly or by subtracting
	     * start from end date.
	     *
	     * @return {ICAL.Duration}      The calculated duration
	     */
	    getDuration: function duration() {
	      if (this.duration) {
	        return this.duration;
	      } else {
	        return this.end.subtractDate(this.start);
	      }
	    },

	    /**
	     * Calculates the end date of the period, either directly or by adding
	     * duration to start date.
	     *
	     * @return {ICAL.Time}          The calculated end date
	     */
	    getEnd: function() {
	      if (this.end) {
	        return this.end;
	      } else {
	        var end = this.start.clone();
	        end.addDuration(this.duration);
	        return end;
	      }
	    },

	    /**
	     * The string representation of this period.
	     * @return {String}
	     */
	    toString: function toString() {
	      return this.start + "/" + (this.end || this.duration);
	    },

	    /**
	     * The jCal representation of this period type.
	     * @return {Object}
	     */
	    toJSON: function() {
	      return [this.start.toString(), (this.end || this.duration).toString()];
	    },

	    /**
	     * The iCalendar string representation of this period.
	     * @return {String}
	     */
	    toICALString: function() {
	      return this.start.toICALString() + "/" +
	             (this.end || this.duration).toICALString();
	    }
	  };

	  /**
	   * Creates a new {@link ICAL.Period} instance from the passed string.
	   *
	   * @param {String} str            The string to parse
	   * @param {ICAL.Property} prop    The property this period will be on
	   * @return {ICAL.Period}          The created period instance
	   */
	  ICAL.Period.fromString = function fromString(str, prop) {
	    var parts = str.split('/');

	    if (parts.length !== 2) {
	      throw new Error(
	        'Invalid string value: "' + str + '" must contain a "/" char.'
	      );
	    }

	    var options = {
	      start: ICAL.Time.fromDateTimeString(parts[0], prop)
	    };

	    var end = parts[1];

	    if (ICAL.Duration.isValueString(end)) {
	      options.duration = ICAL.Duration.fromString(end);
	    } else {
	      options.end = ICAL.Time.fromDateTimeString(end, prop);
	    }

	    return new ICAL.Period(options);
	  };

	  /**
	   * Creates a new {@link ICAL.Period} instance from the given data object.
	   * The passed data object cannot contain both and end date and a duration.
	   *
	   * @param {Object} aData                  An object with members of the period
	   * @param {ICAL.Time=} aData.start        The start of the period
	   * @param {ICAL.Time=} aData.end          The end of the period
	   * @param {ICAL.Duration=} aData.duration The duration of the period
	   * @return {ICAL.Period}                  The period instance
	   */
	  ICAL.Period.fromData = function fromData(aData) {
	    return new ICAL.Period(aData);
	  };

	  /**
	   * Returns a new period instance from the given jCal data array. The first
	   * member is always the start date string, the second member is either a
	   * duration or end date string.
	   *
	   * @param {Array<String,String>} aData    The jCal data array
	   * @param {ICAL.Property} aProp           The property this jCal data is on
	   * @param {Boolean} aLenient              If true, data value can be both date and date-time
	   * @return {ICAL.Period}                  The period instance
	   */
	  ICAL.Period.fromJSON = function(aData, aProp, aLenient) {
	    function fromDateOrDateTimeString(aValue, aProp) {
	      if (aLenient) {
	        return ICAL.Time.fromString(aValue, aProp);
	      } else {
	        return ICAL.Time.fromDateTimeString(aValue, aProp);
	      }
	    }

	    if (ICAL.Duration.isValueString(aData[1])) {
	      return ICAL.Period.fromData({
	        start: fromDateOrDateTimeString(aData[0], aProp),
	        duration: ICAL.Duration.fromString(aData[1])
	      });
	    } else {
	      return ICAL.Period.fromData({
	        start: fromDateOrDateTimeString(aData[0], aProp),
	        end: fromDateOrDateTimeString(aData[1], aProp)
	      });
	    }
	  };
	})();
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */



	(function() {
	  var DURATION_LETTERS = /([PDWHMTS]{1,1})/;

	  /**
	   * @classdesc
	   * This class represents the "duration" value type, with various calculation
	   * and manipulation methods.
	   *
	   * @class
	   * @alias ICAL.Duration
	   * @param {Object} data               An object with members of the duration
	   * @param {Number} data.weeks         Duration in weeks
	   * @param {Number} data.days          Duration in days
	   * @param {Number} data.hours         Duration in hours
	   * @param {Number} data.minutes       Duration in minutes
	   * @param {Number} data.seconds       Duration in seconds
	   * @param {Boolean} data.isNegative   If true, the duration is negative
	   */
	  ICAL.Duration = function icalduration(data) {
	    this.wrappedJSObject = this;
	    this.fromData(data);
	  };

	  ICAL.Duration.prototype = {
	    /**
	     * The weeks in this duration
	     * @type {Number}
	     * @default 0
	     */
	    weeks: 0,

	    /**
	     * The days in this duration
	     * @type {Number}
	     * @default 0
	     */
	    days: 0,

	    /**
	     * The days in this duration
	     * @type {Number}
	     * @default 0
	     */
	    hours: 0,

	    /**
	     * The minutes in this duration
	     * @type {Number}
	     * @default 0
	     */
	    minutes: 0,

	    /**
	     * The seconds in this duration
	     * @type {Number}
	     * @default 0
	     */
	    seconds: 0,

	    /**
	     * The seconds in this duration
	     * @type {Boolean}
	     * @default false
	     */
	    isNegative: false,

	    /**
	     * The class identifier.
	     * @constant
	     * @type {String}
	     * @default "icalduration"
	     */
	    icalclass: "icalduration",

	    /**
	     * The type name, to be used in the jCal object.
	     * @constant
	     * @type {String}
	     * @default "duration"
	     */
	    icaltype: "duration",

	    /**
	     * Returns a clone of the duration object.
	     *
	     * @return {ICAL.Duration}      The cloned object
	     */
	    clone: function clone() {
	      return ICAL.Duration.fromData(this);
	    },

	    /**
	     * The duration value expressed as a number of seconds.
	     *
	     * @return {Number}             The duration value in seconds
	     */
	    toSeconds: function toSeconds() {
	      var seconds = this.seconds + 60 * this.minutes + 3600 * this.hours +
	                    86400 * this.days + 7 * 86400 * this.weeks;
	      return (this.isNegative ? -seconds : seconds);
	    },

	    /**
	     * Reads the passed seconds value into this duration object. Afterwards,
	     * members like {@link ICAL.Duration#days days} and {@link ICAL.Duration#weeks weeks} will be set up
	     * accordingly.
	     *
	     * @param {Number} aSeconds     The duration value in seconds
	     * @return {ICAL.Duration}      Returns this instance
	     */
	    fromSeconds: function fromSeconds(aSeconds) {
	      var secs = Math.abs(aSeconds);

	      this.isNegative = (aSeconds < 0);
	      this.days = ICAL.helpers.trunc(secs / 86400);

	      // If we have a flat number of weeks, use them.
	      if (this.days % 7 == 0) {
	        this.weeks = this.days / 7;
	        this.days = 0;
	      } else {
	        this.weeks = 0;
	      }

	      secs -= (this.days + 7 * this.weeks) * 86400;

	      this.hours = ICAL.helpers.trunc(secs / 3600);
	      secs -= this.hours * 3600;

	      this.minutes = ICAL.helpers.trunc(secs / 60);
	      secs -= this.minutes * 60;

	      this.seconds = secs;
	      return this;
	    },

	    /**
	     * Sets up the current instance using members from the passed data object.
	     *
	     * @param {Object} aData               An object with members of the duration
	     * @param {Number} aData.weeks         Duration in weeks
	     * @param {Number} aData.days          Duration in days
	     * @param {Number} aData.hours         Duration in hours
	     * @param {Number} aData.minutes       Duration in minutes
	     * @param {Number} aData.seconds       Duration in seconds
	     * @param {Boolean} aData.isNegative   If true, the duration is negative
	     */
	    fromData: function fromData(aData) {
	      var propsToCopy = ["weeks", "days", "hours",
	                         "minutes", "seconds", "isNegative"];
	      for (var key in propsToCopy) {
	        /* istanbul ignore if */
	        if (!propsToCopy.hasOwnProperty(key)) {
	          continue;
	        }
	        var prop = propsToCopy[key];
	        if (aData && prop in aData) {
	          this[prop] = aData[prop];
	        } else {
	          this[prop] = 0;
	        }
	      }
	    },

	    /**
	     * Resets the duration instance to the default values, i.e. PT0S
	     */
	    reset: function reset() {
	      this.isNegative = false;
	      this.weeks = 0;
	      this.days = 0;
	      this.hours = 0;
	      this.minutes = 0;
	      this.seconds = 0;
	    },

	    /**
	     * Compares the duration instance with another one.
	     *
	     * @param {ICAL.Duration} aOther        The instance to compare with
	     * @return {Number}                     -1, 0 or 1 for less/equal/greater
	     */
	    compare: function compare(aOther) {
	      var thisSeconds = this.toSeconds();
	      var otherSeconds = aOther.toSeconds();
	      return (thisSeconds > otherSeconds) - (thisSeconds < otherSeconds);
	    },

	    /**
	     * Normalizes the duration instance. For example, a duration with a value
	     * of 61 seconds will be normalized to 1 minute and 1 second.
	     */
	    normalize: function normalize() {
	      this.fromSeconds(this.toSeconds());
	    },

	    /**
	     * The string representation of this duration.
	     * @return {String}
	     */
	    toString: function toString() {
	      if (this.toSeconds() == 0) {
	        return "PT0S";
	      } else {
	        var str = "";
	        if (this.isNegative) str += "-";
	        str += "P";
	        if (this.weeks) str += this.weeks + "W";
	        if (this.days) str += this.days + "D";

	        if (this.hours || this.minutes || this.seconds) {
	          str += "T";
	          if (this.hours) str += this.hours + "H";
	          if (this.minutes) str += this.minutes + "M";
	          if (this.seconds) str += this.seconds + "S";
	        }
	        return str;
	      }
	    },

	    /**
	     * The iCalendar string representation of this duration.
	     * @return {String}
	     */
	    toICALString: function() {
	      return this.toString();
	    }
	  };

	  /**
	   * Returns a new ICAL.Duration instance from the passed seconds value.
	   *
	   * @param {Number} aSeconds       The seconds to create the instance from
	   * @return {ICAL.Duration}        The newly created duration instance
	   */
	  ICAL.Duration.fromSeconds = function icalduration_from_seconds(aSeconds) {
	    return (new ICAL.Duration()).fromSeconds(aSeconds);
	  };

	  /**
	   * Internal helper function to handle a chunk of a duration.
	   *
	   * @param {String} letter type of duration chunk
	   * @param {String} number numeric value or -/+
	   * @param {Object} dict target to assign values to
	   */
	  function parseDurationChunk(letter, number, object) {
	    var type;
	    switch (letter) {
	      case 'P':
	        if (number && number === '-') {
	          object.isNegative = true;
	        } else {
	          object.isNegative = false;
	        }
	        // period
	        break;
	      case 'D':
	        type = 'days';
	        break;
	      case 'W':
	        type = 'weeks';
	        break;
	      case 'H':
	        type = 'hours';
	        break;
	      case 'M':
	        type = 'minutes';
	        break;
	      case 'S':
	        type = 'seconds';
	        break;
	      default:
	        // Not a valid chunk
	        return 0;
	    }

	    if (type) {
	      if (!number && number !== 0) {
	        throw new Error(
	          'invalid duration value: Missing number before "' + letter + '"'
	        );
	      }
	      var num = parseInt(number, 10);
	      if (ICAL.helpers.isStrictlyNaN(num)) {
	        throw new Error(
	          'invalid duration value: Invalid number "' + number + '" before "' + letter + '"'
	        );
	      }
	      object[type] = num;
	    }

	    return 1;
	  }

	  /**
	   * Checks if the given string is an iCalendar duration value.
	   *
	   * @param {String} value      The raw ical value
	   * @return {Boolean}          True, if the given value is of the
	   *                              duration ical type
	   */
	  ICAL.Duration.isValueString = function(string) {
	    return (string[0] === 'P' || string[1] === 'P');
	  };

	  /**
	   * Creates a new {@link ICAL.Duration} instance from the passed string.
	   *
	   * @param {String} aStr       The string to parse
	   * @return {ICAL.Duration}    The created duration instance
	   */
	  ICAL.Duration.fromString = function icalduration_from_string(aStr) {
	    var pos = 0;
	    var dict = Object.create(null);
	    var chunks = 0;

	    while ((pos = aStr.search(DURATION_LETTERS)) !== -1) {
	      var type = aStr[pos];
	      var numeric = aStr.substr(0, pos);
	      aStr = aStr.substr(pos + 1);

	      chunks += parseDurationChunk(type, numeric, dict);
	    }

	    if (chunks < 2) {
	      // There must be at least a chunk with "P" and some unit chunk
	      throw new Error(
	        'invalid duration value: Not enough duration components in "' + aStr + '"'
	      );
	    }

	    return new ICAL.Duration(dict);
	  };

	  /**
	   * Creates a new ICAL.Duration instance from the given data object.
	   *
	   * @param {Object} aData               An object with members of the duration
	   * @param {Number} aData.weeks         Duration in weeks
	   * @param {Number} aData.days          Duration in days
	   * @param {Number} aData.hours         Duration in hours
	   * @param {Number} aData.minutes       Duration in minutes
	   * @param {Number} aData.seconds       Duration in seconds
	   * @param {Boolean} aData.isNegative   If true, the duration is negative
	   * @return {ICAL.Duration}             The createad duration instance
	   */
	  ICAL.Duration.fromData = function icalduration_from_data(aData) {
	    return new ICAL.Duration(aData);
	  };
	})();
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2012 */



	(function() {
	  var OPTIONS = ["tzid", "location", "tznames",
	                 "latitude", "longitude"];

	  /**
	   * @classdesc
	   * Timezone representation, created by passing in a tzid and component.
	   *
	   * @example
	   * var vcalendar;
	   * var timezoneComp = vcalendar.getFirstSubcomponent('vtimezone');
	   * var tzid = timezoneComp.getFirstPropertyValue('tzid');
	   *
	   * var timezone = new ICAL.Timezone({
	   *   component: timezoneComp,
	   *   tzid
	   * });
	   *
	   * @class
	   * @param {ICAL.Component|Object} data options for class
	   * @param {String|ICAL.Component} data.component
	   *        If data is a simple object, then this member can be set to either a
	   *        string containing the component data, or an already parsed
	   *        ICAL.Component
	   * @param {String} data.tzid      The timezone identifier
	   * @param {String} data.location  The timezone locationw
	   * @param {String} data.tznames   An alternative string representation of the
	   *                                  timezone
	   * @param {Number} data.latitude  The latitude of the timezone
	   * @param {Number} data.longitude The longitude of the timezone
	   */
	  ICAL.Timezone = function icaltimezone(data) {
	    this.wrappedJSObject = this;
	    this.fromData(data);
	  };

	  ICAL.Timezone.prototype = {

	    /**
	     * Timezone identifier
	     * @type {String}
	     */
	    tzid: "",

	    /**
	     * Timezone location
	     * @type {String}
	     */
	    location: "",

	    /**
	     * Alternative timezone name, for the string representation
	     * @type {String}
	     */
	    tznames: "",

	    /**
	     * The primary latitude for the timezone.
	     * @type {Number}
	     */
	    latitude: 0.0,

	    /**
	     * The primary longitude for the timezone.
	     * @type {Number}
	     */
	    longitude: 0.0,

	    /**
	     * The vtimezone component for this timezone.
	     * @type {ICAL.Component}
	     */
	    component: null,

	    /**
	     * The year this timezone has been expanded to. All timezone transition
	     * dates until this year are known and can be used for calculation
	     *
	     * @private
	     * @type {Number}
	     */
	    expandedUntilYear: 0,

	    /**
	     * The class identifier.
	     * @constant
	     * @type {String}
	     * @default "icaltimezone"
	     */
	    icalclass: "icaltimezone",

	    /**
	     * Sets up the current instance using members from the passed data object.
	     *
	     * @param {ICAL.Component|Object} aData options for class
	     * @param {String|ICAL.Component} aData.component
	     *        If aData is a simple object, then this member can be set to either a
	     *        string containing the component data, or an already parsed
	     *        ICAL.Component
	     * @param {String} aData.tzid      The timezone identifier
	     * @param {String} aData.location  The timezone locationw
	     * @param {String} aData.tznames   An alternative string representation of the
	     *                                  timezone
	     * @param {Number} aData.latitude  The latitude of the timezone
	     * @param {Number} aData.longitude The longitude of the timezone
	     */
	    fromData: function fromData(aData) {
	      this.expandedUntilYear = 0;
	      this.changes = [];

	      if (aData instanceof ICAL.Component) {
	        // Either a component is passed directly
	        this.component = aData;
	      } else {
	        // Otherwise the component may be in the data object
	        if (aData && "component" in aData) {
	          if (typeof aData.component == "string") {
	            // If a string was passed, parse it as a component
	            var jCal = ICAL.parse(aData.component);
	            this.component = new ICAL.Component(jCal);
	          } else if (aData.component instanceof ICAL.Component) {
	            // If it was a component already, then just set it
	            this.component = aData.component;
	          } else {
	            // Otherwise just null out the component
	            this.component = null;
	          }
	        }

	        // Copy remaining passed properties
	        for (var key in OPTIONS) {
	          /* istanbul ignore else */
	          if (OPTIONS.hasOwnProperty(key)) {
	            var prop = OPTIONS[key];
	            if (aData && prop in aData) {
	              this[prop] = aData[prop];
	            }
	          }
	        }
	      }

	      // If we have a component but no TZID, attempt to get it from the
	      // component's properties.
	      if (this.component instanceof ICAL.Component && !this.tzid) {
	        this.tzid = this.component.getFirstPropertyValue('tzid');
	      }

	      return this;
	    },

	    /**
	     * Finds the utcOffset the given time would occur in this timezone.
	     *
	     * @param {ICAL.Time} tt        The time to check for
	     * @return {Number} utc offset in seconds
	     */
	    utcOffset: function utcOffset(tt) {
	      if (this == ICAL.Timezone.utcTimezone || this == ICAL.Timezone.localTimezone) {
	        return 0;
	      }

	      this._ensureCoverage(tt.year);

	      if (!this.changes.length) {
	        return 0;
	      }

	      var tt_change = {
	        year: tt.year,
	        month: tt.month,
	        day: tt.day,
	        hour: tt.hour,
	        minute: tt.minute,
	        second: tt.second
	      };

	      var change_num = this._findNearbyChange(tt_change);
	      var change_num_to_use = -1;
	      var step = 1;

	      // TODO: replace with bin search?
	      for (;;) {
	        var change = ICAL.helpers.clone(this.changes[change_num], true);
	        if (change.utcOffset < change.prevUtcOffset) {
	          ICAL.Timezone.adjust_change(change, 0, 0, 0, change.utcOffset);
	        } else {
	          ICAL.Timezone.adjust_change(change, 0, 0, 0,
	                                          change.prevUtcOffset);
	        }

	        var cmp = ICAL.Timezone._compare_change_fn(tt_change, change);

	        if (cmp >= 0) {
	          change_num_to_use = change_num;
	        } else {
	          step = -1;
	        }

	        if (step == -1 && change_num_to_use != -1) {
	          break;
	        }

	        change_num += step;

	        if (change_num < 0) {
	          return 0;
	        }

	        if (change_num >= this.changes.length) {
	          break;
	        }
	      }

	      var zone_change = this.changes[change_num_to_use];
	      var utcOffset_change = zone_change.utcOffset - zone_change.prevUtcOffset;

	      if (utcOffset_change < 0 && change_num_to_use > 0) {
	        var tmp_change = ICAL.helpers.clone(zone_change, true);
	        ICAL.Timezone.adjust_change(tmp_change, 0, 0, 0,
	                                        tmp_change.prevUtcOffset);

	        if (ICAL.Timezone._compare_change_fn(tt_change, tmp_change) < 0) {
	          var prev_zone_change = this.changes[change_num_to_use - 1];

	          var want_daylight = false; // TODO

	          if (zone_change.is_daylight != want_daylight &&
	              prev_zone_change.is_daylight == want_daylight) {
	            zone_change = prev_zone_change;
	          }
	        }
	      }

	      // TODO return is_daylight?
	      return zone_change.utcOffset;
	    },

	    _findNearbyChange: function icaltimezone_find_nearby_change(change) {
	      // find the closest match
	      var idx = ICAL.helpers.binsearchInsert(
	        this.changes,
	        change,
	        ICAL.Timezone._compare_change_fn
	      );

	      if (idx >= this.changes.length) {
	        return this.changes.length - 1;
	      }

	      return idx;
	    },

	    _ensureCoverage: function(aYear) {
	      if (ICAL.Timezone._minimumExpansionYear == -1) {
	        var today = ICAL.Time.now();
	        ICAL.Timezone._minimumExpansionYear = today.year;
	      }

	      var changesEndYear = aYear;
	      if (changesEndYear < ICAL.Timezone._minimumExpansionYear) {
	        changesEndYear = ICAL.Timezone._minimumExpansionYear;
	      }

	      changesEndYear += ICAL.Timezone.EXTRA_COVERAGE;

	      if (changesEndYear > ICAL.Timezone.MAX_YEAR) {
	        changesEndYear = ICAL.Timezone.MAX_YEAR;
	      }

	      if (!this.changes.length || this.expandedUntilYear < aYear) {
	        var subcomps = this.component.getAllSubcomponents();
	        var compLen = subcomps.length;
	        var compIdx = 0;

	        for (; compIdx < compLen; compIdx++) {
	          this._expandComponent(
	            subcomps[compIdx], changesEndYear, this.changes
	          );
	        }

	        this.changes.sort(ICAL.Timezone._compare_change_fn);
	        this.expandedUntilYear = changesEndYear;
	      }
	    },

	    _expandComponent: function(aComponent, aYear, changes) {
	      if (!aComponent.hasProperty("dtstart") ||
	          !aComponent.hasProperty("tzoffsetto") ||
	          !aComponent.hasProperty("tzoffsetfrom")) {
	        return null;
	      }

	      var dtstart = aComponent.getFirstProperty("dtstart").getFirstValue();
	      var change;

	      function convert_tzoffset(offset) {
	        return offset.factor * (offset.hours * 3600 + offset.minutes * 60);
	      }

	      function init_changes() {
	        var changebase = {};
	        changebase.is_daylight = (aComponent.name == "daylight");
	        changebase.utcOffset = convert_tzoffset(
	          aComponent.getFirstProperty("tzoffsetto").getFirstValue()
	        );

	        changebase.prevUtcOffset = convert_tzoffset(
	          aComponent.getFirstProperty("tzoffsetfrom").getFirstValue()
	        );

	        return changebase;
	      }

	      if (!aComponent.hasProperty("rrule") && !aComponent.hasProperty("rdate")) {
	        change = init_changes();
	        change.year = dtstart.year;
	        change.month = dtstart.month;
	        change.day = dtstart.day;
	        change.hour = dtstart.hour;
	        change.minute = dtstart.minute;
	        change.second = dtstart.second;

	        ICAL.Timezone.adjust_change(change, 0, 0, 0,
	                                        -change.prevUtcOffset);
	        changes.push(change);
	      } else {
	        var props = aComponent.getAllProperties("rdate");
	        for (var rdatekey in props) {
	          /* istanbul ignore if */
	          if (!props.hasOwnProperty(rdatekey)) {
	            continue;
	          }
	          var rdate = props[rdatekey];
	          var time = rdate.getFirstValue();
	          change = init_changes();

	          change.year = time.year;
	          change.month = time.month;
	          change.day = time.day;

	          if (time.isDate) {
	            change.hour = dtstart.hour;
	            change.minute = dtstart.minute;
	            change.second = dtstart.second;

	            if (dtstart.zone != ICAL.Timezone.utcTimezone) {
	              ICAL.Timezone.adjust_change(change, 0, 0, 0,
	                                              -change.prevUtcOffset);
	            }
	          } else {
	            change.hour = time.hour;
	            change.minute = time.minute;
	            change.second = time.second;

	            if (time.zone != ICAL.Timezone.utcTimezone) {
	              ICAL.Timezone.adjust_change(change, 0, 0, 0,
	                                              -change.prevUtcOffset);
	            }
	          }

	          changes.push(change);
	        }

	        var rrule = aComponent.getFirstProperty("rrule");

	        if (rrule) {
	          rrule = rrule.getFirstValue();
	          change = init_changes();

	          if (rrule.until && rrule.until.zone == ICAL.Timezone.utcTimezone) {
	            rrule.until.adjust(0, 0, 0, change.prevUtcOffset);
	            rrule.until.zone = ICAL.Timezone.localTimezone;
	          }

	          var iterator = rrule.iterator(dtstart);

	          var occ;
	          while ((occ = iterator.next())) {
	            change = init_changes();
	            if (occ.year > aYear || !occ) {
	              break;
	            }

	            change.year = occ.year;
	            change.month = occ.month;
	            change.day = occ.day;
	            change.hour = occ.hour;
	            change.minute = occ.minute;
	            change.second = occ.second;
	            change.isDate = occ.isDate;

	            ICAL.Timezone.adjust_change(change, 0, 0, 0,
	                                            -change.prevUtcOffset);
	            changes.push(change);
	          }
	        }
	      }

	      return changes;
	    },

	    /**
	     * The string representation of this timezone.
	     * @return {String}
	     */
	    toString: function toString() {
	      return (this.tznames ? this.tznames : this.tzid);
	    }
	  };

	  ICAL.Timezone._compare_change_fn = function icaltimezone_compare_change_fn(a, b) {
	    if (a.year < b.year) return -1;
	    else if (a.year > b.year) return 1;

	    if (a.month < b.month) return -1;
	    else if (a.month > b.month) return 1;

	    if (a.day < b.day) return -1;
	    else if (a.day > b.day) return 1;

	    if (a.hour < b.hour) return -1;
	    else if (a.hour > b.hour) return 1;

	    if (a.minute < b.minute) return -1;
	    else if (a.minute > b.minute) return 1;

	    if (a.second < b.second) return -1;
	    else if (a.second > b.second) return 1;

	    return 0;
	  };

	  /**
	   * Convert the date/time from one zone to the next.
	   *
	   * @param {ICAL.Time} tt                  The time to convert
	   * @param {ICAL.Timezone} from_zone       The source zone to convert from
	   * @param {ICAL.Timezone} to_zone         The target zone to convert to
	   * @return {ICAL.Time}                    The converted date/time object
	   */
	  ICAL.Timezone.convert_time = function icaltimezone_convert_time(tt, from_zone, to_zone) {
	    if (tt.isDate ||
	        from_zone.tzid == to_zone.tzid ||
	        from_zone == ICAL.Timezone.localTimezone ||
	        to_zone == ICAL.Timezone.localTimezone) {
	      tt.zone = to_zone;
	      return tt;
	    }

	    var utcOffset = from_zone.utcOffset(tt);
	    tt.adjust(0, 0, 0, - utcOffset);

	    utcOffset = to_zone.utcOffset(tt);
	    tt.adjust(0, 0, 0, utcOffset);

	    return null;
	  };

	  /**
	   * Creates a new ICAL.Timezone instance from the passed data object.
	   *
	   * @param {ICAL.Component|Object} aData options for class
	   * @param {String|ICAL.Component} aData.component
	   *        If aData is a simple object, then this member can be set to either a
	   *        string containing the component data, or an already parsed
	   *        ICAL.Component
	   * @param {String} aData.tzid      The timezone identifier
	   * @param {String} aData.location  The timezone locationw
	   * @param {String} aData.tznames   An alternative string representation of the
	   *                                  timezone
	   * @param {Number} aData.latitude  The latitude of the timezone
	   * @param {Number} aData.longitude The longitude of the timezone
	   */
	  ICAL.Timezone.fromData = function icaltimezone_fromData(aData) {
	    var tt = new ICAL.Timezone();
	    return tt.fromData(aData);
	  };

	  /**
	   * The instance describing the UTC timezone
	   * @type {ICAL.Timezone}
	   * @constant
	   * @instance
	   */
	  ICAL.Timezone.utcTimezone = ICAL.Timezone.fromData({
	    tzid: "UTC"
	  });

	  /**
	   * The instance describing the local timezone
	   * @type {ICAL.Timezone}
	   * @constant
	   * @instance
	   */
	  ICAL.Timezone.localTimezone = ICAL.Timezone.fromData({
	    tzid: "floating"
	  });

	  /**
	   * Adjust a timezone change object.
	   * @private
	   * @param {Object} change     The timezone change object
	   * @param {Number} days       The extra amount of days
	   * @param {Number} hours      The extra amount of hours
	   * @param {Number} minutes    The extra amount of minutes
	   * @param {Number} seconds    The extra amount of seconds
	   */
	  ICAL.Timezone.adjust_change = function icaltimezone_adjust_change(change, days, hours, minutes, seconds) {
	    return ICAL.Time.prototype.adjust.call(
	      change,
	      days,
	      hours,
	      minutes,
	      seconds,
	      change
	    );
	  };

	  ICAL.Timezone._minimumExpansionYear = -1;
	  ICAL.Timezone.MAX_YEAR = 2035; // TODO this is because of time_t, which we don't need. Still usefull?
	  ICAL.Timezone.EXTRA_COVERAGE = 5;
	})();
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.TimezoneService = (function() {
	  var zones;

	  /**
	   * @classdesc
	   * Singleton class to contain timezones.  Right now it is all manual registry in
	   * the future we may use this class to download timezone information or handle
	   * loading pre-expanded timezones.
	   *
	   * @namespace
	   * @alias ICAL.TimezoneService
	   */
	  var TimezoneService = {
	    get count() {
	      return Object.keys(zones).length;
	    },

	    reset: function() {
	      zones = Object.create(null);
	      var utc = ICAL.Timezone.utcTimezone;

	      zones.Z = utc;
	      zones.UTC = utc;
	      zones.GMT = utc;
	    },

	    /**
	     * Checks if timezone id has been registered.
	     *
	     * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
	     * @return {Boolean}        False, when not present
	     */
	    has: function(tzid) {
	      return !!zones[tzid];
	    },

	    /**
	     * Returns a timezone by its tzid if present.
	     *
	     * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
	     * @return {?ICAL.Timezone} The timezone, or null if not found
	     */
	    get: function(tzid) {
	      return zones[tzid];
	    },

	    /**
	     * Registers a timezone object or component.
	     *
	     * @param {String=} name
	     *        The name of the timezone. Defaults to the component's TZID if not
	     *        passed.
	     * @param {ICAL.Component|ICAL.Timezone} zone
	     *        The initialized zone or vtimezone.
	     */
	    register: function(name, timezone) {
	      if (name instanceof ICAL.Component) {
	        if (name.name === 'vtimezone') {
	          timezone = new ICAL.Timezone(name);
	          name = timezone.tzid;
	        }
	      }

	      if (timezone instanceof ICAL.Timezone) {
	        zones[name] = timezone;
	      } else {
	        throw new TypeError('timezone must be ICAL.Timezone or ICAL.Component');
	      }
	    },

	    /**
	     * Removes a timezone by its tzid from the list.
	     *
	     * @param {String} tzid     Timezone identifier (e.g. America/Los_Angeles)
	     * @return {?ICAL.Timezone} The removed timezone, or null if not registered
	     */
	    remove: function(tzid) {
	      return (delete zones[tzid]);
	    }
	  };

	  // initialize defaults
	  TimezoneService.reset();

	  return TimezoneService;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */



	(function() {

	  /**
	   * @classdesc
	   * iCalendar Time representation (similar to JS Date object).  Fully
	   * independent of system (OS) timezone / time.  Unlike JS Date, the month
	   * January is 1, not zero.
	   *
	   * @example
	   * var time = new ICAL.Time({
	   *   year: 2012,
	   *   month: 10,
	   *   day: 11
	   *   minute: 0,
	   *   second: 0,
	   *   isDate: false
	   * });
	   *
	   *
	   * @alias ICAL.Time
	   * @class
	   * @param {Object} data           Time initialization
	   * @param {Number=} data.year     The year for this date
	   * @param {Number=} data.month    The month for this date
	   * @param {Number=} data.day      The day for this date
	   * @param {Number=} data.hour     The hour for this date
	   * @param {Number=} data.minute   The minute for this date
	   * @param {Number=} data.second   The second for this date
	   * @param {Boolean=} data.isDate  If true, the instance represents a date (as
	   *                                  opposed to a date-time)
	   * @param {ICAL.Timezone} zone timezone this position occurs in
	   */
	  ICAL.Time = function icaltime(data, zone) {
	    this.wrappedJSObject = this;
	    var time = this._time = Object.create(null);

	    /* time defaults */
	    time.year = 0;
	    time.month = 1;
	    time.day = 1;
	    time.hour = 0;
	    time.minute = 0;
	    time.second = 0;
	    time.isDate = false;

	    this.fromData(data, zone);
	  };

	  ICAL.Time._dowCache = {};
	  ICAL.Time._wnCache = {};

	  ICAL.Time.prototype = {

	    /**
	     * The class identifier.
	     * @constant
	     * @type {String}
	     * @default "icaltime"
	     */
	    icalclass: "icaltime",
	    _cachedUnixTime: null,

	    /**
	     * The type name, to be used in the jCal object. This value may change and
	     * is strictly defined by the {@link ICAL.Time#isDate isDate} member.
	     * @readonly
	     * @type {String}
	     * @default "date-time"
	     */
	    get icaltype() {
	      return this.isDate ? 'date' : 'date-time';
	    },

	    /**
	     * The timezone for this time.
	     * @type {ICAL.Timezone}
	     */
	    zone: null,

	    /**
	     * Internal uses to indicate that a change has been made and the next read
	     * operation must attempt to normalize the value (for example changing the
	     * day to 33).
	     *
	     * @type {Boolean}
	     * @private
	     */
	    _pendingNormalization: false,

	    /**
	     * Returns a clone of the time object.
	     *
	     * @return {ICAL.Time}              The cloned object
	     */
	    clone: function() {
	      return new ICAL.Time(this._time, this.zone);
	    },

	    /**
	     * Reset the time instance to epoch time
	     */
	    reset: function icaltime_reset() {
	      this.fromData(ICAL.Time.epochTime);
	      this.zone = ICAL.Timezone.utcTimezone;
	    },

	    /**
	     * Reset the time instance to the given date/time values.
	     *
	     * @param {Number} year             The year to set
	     * @param {Number} month            The month to set
	     * @param {Number} day              The day to set
	     * @param {Number} hour             The hour to set
	     * @param {Number} minute           The minute to set
	     * @param {Number} second           The second to set
	     * @param {ICAL.Timezone} timezone  The timezone to set
	     */
	    resetTo: function icaltime_resetTo(year, month, day,
	                                       hour, minute, second, timezone) {
	      this.fromData({
	        year: year,
	        month: month,
	        day: day,
	        hour: hour,
	        minute: minute,
	        second: second,
	        zone: timezone
	      });
	    },

	    /**
	     * Set up the current instance from the Javascript date value.
	     *
	     * @param {?Date} aDate     The Javascript Date to read, or null to reset
	     * @param {Boolean} useUTC  If true, the UTC values of the date will be used
	     */
	    fromJSDate: function icaltime_fromJSDate(aDate, useUTC) {
	      if (!aDate) {
	        this.reset();
	      } else {
	        if (useUTC) {
	          this.zone = ICAL.Timezone.utcTimezone;
	          this.year = aDate.getUTCFullYear();
	          this.month = aDate.getUTCMonth() + 1;
	          this.day = aDate.getUTCDate();
	          this.hour = aDate.getUTCHours();
	          this.minute = aDate.getUTCMinutes();
	          this.second = aDate.getUTCSeconds();
	        } else {
	          this.zone = ICAL.Timezone.localTimezone;
	          this.year = aDate.getFullYear();
	          this.month = aDate.getMonth() + 1;
	          this.day = aDate.getDate();
	          this.hour = aDate.getHours();
	          this.minute = aDate.getMinutes();
	          this.second = aDate.getSeconds();
	        }
	      }
	      this._cachedUnixTime = null;
	      return this;
	    },

	    /**
	     * Sets up the current instance using members from the passed data object.
	     *
	     * @param {Object} aData            Time initialization
	     * @param {Number=} aData.year      The year for this date
	     * @param {Number=} aData.month     The month for this date
	     * @param {Number=} aData.day       The day for this date
	     * @param {Number=} aData.hour      The hour for this date
	     * @param {Number=} aData.minute    The minute for this date
	     * @param {Number=} aData.second    The second for this date
	     * @param {Boolean=} aData.isDate   If true, the instance represents a date
	     *                                    (as opposed to a date-time)
	     * @param {ICAL.Timezone=} aZone    Timezone this position occurs in
	     */
	    fromData: function fromData(aData, aZone) {
	      if (aData) {
	        for (var key in aData) {
	          /* istanbul ignore else */
	          if (Object.prototype.hasOwnProperty.call(aData, key)) {
	            // ical type cannot be set
	            if (key === 'icaltype') continue;
	            this[key] = aData[key];
	          }
	        }
	      }

	      if (aZone) {
	        this.zone = aZone;
	      }

	      if (aData && !("isDate" in aData)) {
	        this.isDate = !("hour" in aData);
	      } else if (aData && ("isDate" in aData)) {
	        this.isDate = aData.isDate;
	      }

	      if (aData && "timezone" in aData) {
	        var zone = ICAL.TimezoneService.get(
	          aData.timezone
	        );

	        this.zone = zone || ICAL.Timezone.localTimezone;
	      }

	      if (aData && "zone" in aData) {
	        this.zone = aData.zone;
	      }

	      if (!this.zone) {
	        this.zone = ICAL.Timezone.localTimezone;
	      }

	      this._cachedUnixTime = null;
	      return this;
	    },

	    /**
	     * Calculate the day of week.
	     * @param {ICAL.Time.weekDay=} aWeekStart
	     *        The week start weekday, defaults to SUNDAY
	     * @return {ICAL.Time.weekDay}
	     */
	    dayOfWeek: function icaltime_dayOfWeek(aWeekStart) {
	      var firstDow = aWeekStart || ICAL.Time.SUNDAY;
	      var dowCacheKey = (this.year << 12) + (this.month << 8) + (this.day << 3) + firstDow;
	      if (dowCacheKey in ICAL.Time._dowCache) {
	        return ICAL.Time._dowCache[dowCacheKey];
	      }

	      // Using Zeller's algorithm
	      var q = this.day;
	      var m = this.month + (this.month < 3 ? 12 : 0);
	      var Y = this.year - (this.month < 3 ? 1 : 0);

	      var h = (q + Y + ICAL.helpers.trunc(((m + 1) * 26) / 10) + ICAL.helpers.trunc(Y / 4));
	      /* istanbul ignore else */
	      {
	        h += ICAL.helpers.trunc(Y / 100) * 6 + ICAL.helpers.trunc(Y / 400);
	      }

	      // Normalize to 1 = wkst
	      h = ((h + 7 - firstDow) % 7) + 1;
	      ICAL.Time._dowCache[dowCacheKey] = h;
	      return h;
	    },

	    /**
	     * Calculate the day of year.
	     * @return {Number}
	     */
	    dayOfYear: function dayOfYear() {
	      var is_leap = (ICAL.Time.isLeapYear(this.year) ? 1 : 0);
	      var diypm = ICAL.Time.daysInYearPassedMonth;
	      return diypm[is_leap][this.month - 1] + this.day;
	    },

	    /**
	     * Returns a copy of the current date/time, rewound to the start of the
	     * week. The resulting ICAL.Time instance is of icaltype date, even if this
	     * is a date-time.
	     *
	     * @param {ICAL.Time.weekDay=} aWeekStart
	     *        The week start weekday, defaults to SUNDAY
	     * @return {ICAL.Time}      The start of the week (cloned)
	     */
	    startOfWeek: function startOfWeek(aWeekStart) {
	      var firstDow = aWeekStart || ICAL.Time.SUNDAY;
	      var result = this.clone();
	      result.day -= ((this.dayOfWeek() + 7 - firstDow) % 7);
	      result.isDate = true;
	      result.hour = 0;
	      result.minute = 0;
	      result.second = 0;
	      return result;
	    },

	    /**
	     * Returns a copy of the current date/time, shifted to the end of the week.
	     * The resulting ICAL.Time instance is of icaltype date, even if this is a
	     * date-time.
	     *
	     * @param {ICAL.Time.weekDay=} aWeekStart
	     *        The week start weekday, defaults to SUNDAY
	     * @return {ICAL.Time}      The end of the week (cloned)
	     */
	    endOfWeek: function endOfWeek(aWeekStart) {
	      var firstDow = aWeekStart || ICAL.Time.SUNDAY;
	      var result = this.clone();
	      result.day += (7 - this.dayOfWeek() + firstDow - ICAL.Time.SUNDAY) % 7;
	      result.isDate = true;
	      result.hour = 0;
	      result.minute = 0;
	      result.second = 0;
	      return result;
	    },

	    /**
	     * Returns a copy of the current date/time, rewound to the start of the
	     * month. The resulting ICAL.Time instance is of icaltype date, even if
	     * this is a date-time.
	     *
	     * @return {ICAL.Time}      The start of the month (cloned)
	     */
	    startOfMonth: function startOfMonth() {
	      var result = this.clone();
	      result.day = 1;
	      result.isDate = true;
	      result.hour = 0;
	      result.minute = 0;
	      result.second = 0;
	      return result;
	    },

	    /**
	     * Returns a copy of the current date/time, shifted to the end of the
	     * month.  The resulting ICAL.Time instance is of icaltype date, even if
	     * this is a date-time.
	     *
	     * @return {ICAL.Time}      The end of the month (cloned)
	     */
	    endOfMonth: function endOfMonth() {
	      var result = this.clone();
	      result.day = ICAL.Time.daysInMonth(result.month, result.year);
	      result.isDate = true;
	      result.hour = 0;
	      result.minute = 0;
	      result.second = 0;
	      return result;
	    },

	    /**
	     * Returns a copy of the current date/time, rewound to the start of the
	     * year. The resulting ICAL.Time instance is of icaltype date, even if
	     * this is a date-time.
	     *
	     * @return {ICAL.Time}      The start of the year (cloned)
	     */
	    startOfYear: function startOfYear() {
	      var result = this.clone();
	      result.day = 1;
	      result.month = 1;
	      result.isDate = true;
	      result.hour = 0;
	      result.minute = 0;
	      result.second = 0;
	      return result;
	    },

	    /**
	     * Returns a copy of the current date/time, shifted to the end of the
	     * year.  The resulting ICAL.Time instance is of icaltype date, even if
	     * this is a date-time.
	     *
	     * @return {ICAL.Time}      The end of the year (cloned)
	     */
	    endOfYear: function endOfYear() {
	      var result = this.clone();
	      result.day = 31;
	      result.month = 12;
	      result.isDate = true;
	      result.hour = 0;
	      result.minute = 0;
	      result.second = 0;
	      return result;
	    },

	    /**
	     * First calculates the start of the week, then returns the day of year for
	     * this date. If the day falls into the previous year, the day is zero or negative.
	     *
	     * @param {ICAL.Time.weekDay=} aFirstDayOfWeek
	     *        The week start weekday, defaults to SUNDAY
	     * @return {Number}     The calculated day of year
	     */
	    startDoyWeek: function startDoyWeek(aFirstDayOfWeek) {
	      var firstDow = aFirstDayOfWeek || ICAL.Time.SUNDAY;
	      var delta = this.dayOfWeek() - firstDow;
	      if (delta < 0) delta += 7;
	      return this.dayOfYear() - delta;
	    },

	    /**
	     * Get the dominical letter for the current year. Letters range from A - G
	     * for common years, and AG to GF for leap years.
	     *
	     * @param {Number} yr           The year to retrieve the letter for
	     * @return {String}             The dominical letter.
	     */
	    getDominicalLetter: function() {
	      return ICAL.Time.getDominicalLetter(this.year);
	    },

	    /**
	     * Finds the nthWeekDay relative to the current month (not day).  The
	     * returned value is a day relative the month that this month belongs to so
	     * 1 would indicate the first of the month and 40 would indicate a day in
	     * the following month.
	     *
	     * @param {Number} aDayOfWeek   Day of the week see the day name constants
	     * @param {Number} aPos         Nth occurrence of a given week day values
	     *        of 1 and 0 both indicate the first weekday of that type. aPos may
	     *        be either positive or negative
	     *
	     * @return {Number} numeric value indicating a day relative
	     *                   to the current month of this time object
	     */
	    nthWeekDay: function icaltime_nthWeekDay(aDayOfWeek, aPos) {
	      var daysInMonth = ICAL.Time.daysInMonth(this.month, this.year);
	      var weekday;
	      var pos = aPos;

	      var start = 0;

	      var otherDay = this.clone();

	      if (pos >= 0) {
	        otherDay.day = 1;

	        // because 0 means no position has been given
	        // 1 and 0 indicate the same day.
	        if (pos != 0) {
	          // remove the extra numeric value
	          pos--;
	        }

	        // set current start offset to current day.
	        start = otherDay.day;

	        // find the current day of week
	        var startDow = otherDay.dayOfWeek();

	        // calculate the difference between current
	        // day of the week and desired day of the week
	        var offset = aDayOfWeek - startDow;


	        // if the offset goes into the past
	        // week we add 7 so it goes into the next
	        // week. We only want to go forward in time here.
	        if (offset < 0)
	          // this is really important otherwise we would
	          // end up with dates from in the past.
	          offset += 7;

	        // add offset to start so start is the same
	        // day of the week as the desired day of week.
	        start += offset;

	        // because we are going to add (and multiply)
	        // the numeric value of the day we subtract it
	        // from the start position so not to add it twice.
	        start -= aDayOfWeek;

	        // set week day
	        weekday = aDayOfWeek;
	      } else {

	        // then we set it to the last day in the current month
	        otherDay.day = daysInMonth;

	        // find the ends weekday
	        var endDow = otherDay.dayOfWeek();

	        pos++;

	        weekday = (endDow - aDayOfWeek);

	        if (weekday < 0) {
	          weekday += 7;
	        }

	        weekday = daysInMonth - weekday;
	      }

	      weekday += pos * 7;

	      return start + weekday;
	    },

	    /**
	     * Checks if current time is the nth weekday, relative to the current
	     * month.  Will always return false when rule resolves outside of current
	     * month.
	     *
	     * @param {ICAL.Time.weekDay} aDayOfWeek       Day of week to check
	     * @param {Number} aPos                        Relative position
	     * @return {Boolean}                           True, if it is the nth weekday
	     */
	    isNthWeekDay: function(aDayOfWeek, aPos) {
	      var dow = this.dayOfWeek();

	      if (aPos === 0 && dow === aDayOfWeek) {
	        return true;
	      }

	      // get pos
	      var day = this.nthWeekDay(aDayOfWeek, aPos);

	      if (day === this.day) {
	        return true;
	      }

	      return false;
	    },

	    /**
	     * Calculates the ISO 8601 week number. The first week of a year is the
	     * week that contains the first Thursday. The year can have 53 weeks, if
	     * January 1st is a Friday.
	     *
	     * Note there are regions where the first week of the year is the one that
	     * starts on January 1st, which may offset the week number. Also, if a
	     * different week start is specified, this will also affect the week
	     * number.
	     *
	     * @see ICAL.Time.weekOneStarts
	     * @param {ICAL.Time.weekDay} aWeekStart        The weekday the week starts with
	     * @return {Number}                             The ISO week number
	     */
	    weekNumber: function weekNumber(aWeekStart) {
	      var wnCacheKey = (this.year << 12) + (this.month << 8) + (this.day << 3) + aWeekStart;
	      if (wnCacheKey in ICAL.Time._wnCache) {
	        return ICAL.Time._wnCache[wnCacheKey];
	      }
	      // This function courtesty of Julian Bucknall, published under the MIT license
	      // http://www.boyet.com/articles/publishedarticles/calculatingtheisoweeknumb.html
	      // plus some fixes to be able to use different week starts.
	      var week1;

	      var dt = this.clone();
	      dt.isDate = true;
	      var isoyear = this.year;

	      if (dt.month == 12 && dt.day > 25) {
	        week1 = ICAL.Time.weekOneStarts(isoyear + 1, aWeekStart);
	        if (dt.compare(week1) < 0) {
	          week1 = ICAL.Time.weekOneStarts(isoyear, aWeekStart);
	        } else {
	          isoyear++;
	        }
	      } else {
	        week1 = ICAL.Time.weekOneStarts(isoyear, aWeekStart);
	        if (dt.compare(week1) < 0) {
	          week1 = ICAL.Time.weekOneStarts(--isoyear, aWeekStart);
	        }
	      }

	      var daysBetween = (dt.subtractDate(week1).toSeconds() / 86400);
	      var answer = ICAL.helpers.trunc(daysBetween / 7) + 1;
	      ICAL.Time._wnCache[wnCacheKey] = answer;
	      return answer;
	    },

	    /**
	     * Adds the duration to the current time. The instance is modified in
	     * place.
	     *
	     * @param {ICAL.Duration} aDuration         The duration to add
	     */
	    addDuration: function icaltime_add(aDuration) {
	      var mult = (aDuration.isNegative ? -1 : 1);

	      // because of the duration optimizations it is much
	      // more efficient to grab all the values up front
	      // then set them directly (which will avoid a normalization call).
	      // So we don't actually normalize until we need it.
	      var second = this.second;
	      var minute = this.minute;
	      var hour = this.hour;
	      var day = this.day;

	      second += mult * aDuration.seconds;
	      minute += mult * aDuration.minutes;
	      hour += mult * aDuration.hours;
	      day += mult * aDuration.days;
	      day += mult * 7 * aDuration.weeks;

	      this.second = second;
	      this.minute = minute;
	      this.hour = hour;
	      this.day = day;

	      this._cachedUnixTime = null;
	    },

	    /**
	     * Subtract the date details (_excluding_ timezone).  Useful for finding
	     * the relative difference between two time objects excluding their
	     * timezone differences.
	     *
	     * @param {ICAL.Time} aDate     The date to substract
	     * @return {ICAL.Duration}      The difference as a duration
	     */
	    subtractDate: function icaltime_subtract(aDate) {
	      var unixTime = this.toUnixTime() + this.utcOffset();
	      var other = aDate.toUnixTime() + aDate.utcOffset();
	      return ICAL.Duration.fromSeconds(unixTime - other);
	    },

	    /**
	     * Subtract the date details, taking timezones into account.
	     *
	     * @param {ICAL.Time} aDate  The date to subtract
	     * @return {ICAL.Duration}  The difference in duration
	     */
	    subtractDateTz: function icaltime_subtract_abs(aDate) {
	      var unixTime = this.toUnixTime();
	      var other = aDate.toUnixTime();
	      return ICAL.Duration.fromSeconds(unixTime - other);
	    },

	    /**
	     * Compares the ICAL.Time instance with another one.
	     *
	     * @param {ICAL.Duration} aOther        The instance to compare with
	     * @return {Number}                     -1, 0 or 1 for less/equal/greater
	     */
	    compare: function icaltime_compare(other) {
	      var a = this.toUnixTime();
	      var b = other.toUnixTime();

	      if (a > b) return 1;
	      if (b > a) return -1;
	      return 0;
	    },

	    /**
	     * Compares only the date part of this instance with another one.
	     *
	     * @param {ICAL.Duration} other         The instance to compare with
	     * @param {ICAL.Timezone} tz            The timezone to compare in
	     * @return {Number}                     -1, 0 or 1 for less/equal/greater
	     */
	    compareDateOnlyTz: function icaltime_compareDateOnlyTz(other, tz) {
	      function cmp(attr) {
	        return ICAL.Time._cmp_attr(a, b, attr);
	      }
	      var a = this.convertToZone(tz);
	      var b = other.convertToZone(tz);
	      var rc = 0;

	      if ((rc = cmp("year")) != 0) return rc;
	      if ((rc = cmp("month")) != 0) return rc;
	      if ((rc = cmp("day")) != 0) return rc;

	      return rc;
	    },

	    /**
	     * Convert the instance into another timezone. The returned ICAL.Time
	     * instance is always a copy.
	     *
	     * @param {ICAL.Timezone} zone      The zone to convert to
	     * @return {ICAL.Time}              The copy, converted to the zone
	     */
	    convertToZone: function convertToZone(zone) {
	      var copy = this.clone();
	      var zone_equals = (this.zone.tzid == zone.tzid);

	      if (!this.isDate && !zone_equals) {
	        ICAL.Timezone.convert_time(copy, this.zone, zone);
	      }

	      copy.zone = zone;
	      return copy;
	    },

	    /**
	     * Calculates the UTC offset of the current date/time in the timezone it is
	     * in.
	     *
	     * @return {Number}     UTC offset in seconds
	     */
	    utcOffset: function utc_offset() {
	      if (this.zone == ICAL.Timezone.localTimezone ||
	          this.zone == ICAL.Timezone.utcTimezone) {
	        return 0;
	      } else {
	        return this.zone.utcOffset(this);
	      }
	    },

	    /**
	     * Returns an RFC 5545 compliant ical representation of this object.
	     *
	     * @return {String} ical date/date-time
	     */
	    toICALString: function() {
	      var string = this.toString();

	      if (string.length > 10) {
	        return ICAL.design.icalendar.value['date-time'].toICAL(string);
	      } else {
	        return ICAL.design.icalendar.value.date.toICAL(string);
	      }
	    },

	    /**
	     * The string representation of this date/time, in jCal form
	     * (including : and - separators).
	     * @return {String}
	     */
	    toString: function toString() {
	      var result = this.year + '-' +
	                   ICAL.helpers.pad2(this.month) + '-' +
	                   ICAL.helpers.pad2(this.day);

	      if (!this.isDate) {
	          result += 'T' + ICAL.helpers.pad2(this.hour) + ':' +
	                    ICAL.helpers.pad2(this.minute) + ':' +
	                    ICAL.helpers.pad2(this.second);

	        if (this.zone === ICAL.Timezone.utcTimezone) {
	          result += 'Z';
	        }
	      }

	      return result;
	    },

	    /**
	     * Converts the current instance to a Javascript date
	     * @return {Date}
	     */
	    toJSDate: function toJSDate() {
	      if (this.zone == ICAL.Timezone.localTimezone) {
	        if (this.isDate) {
	          return new Date(this.year, this.month - 1, this.day);
	        } else {
	          return new Date(this.year, this.month - 1, this.day,
	                          this.hour, this.minute, this.second, 0);
	        }
	      } else {
	        return new Date(this.toUnixTime() * 1000);
	      }
	    },

	    _normalize: function icaltime_normalize() {
	      this._time.isDate;
	      if (this._time.isDate) {
	        this._time.hour = 0;
	        this._time.minute = 0;
	        this._time.second = 0;
	      }
	      this.adjust(0, 0, 0, 0);

	      return this;
	    },

	    /**
	     * Adjust the date/time by the given offset
	     *
	     * @param {Number} aExtraDays       The extra amount of days
	     * @param {Number} aExtraHours      The extra amount of hours
	     * @param {Number} aExtraMinutes    The extra amount of minutes
	     * @param {Number} aExtraSeconds    The extra amount of seconds
	     * @param {Number=} aTime           The time to adjust, defaults to the
	     *                                    current instance.
	     */
	    adjust: function icaltime_adjust(aExtraDays, aExtraHours,
	                                     aExtraMinutes, aExtraSeconds, aTime) {

	      var minutesOverflow, hoursOverflow,
	          daysOverflow = 0, yearsOverflow = 0;

	      var second, minute, hour, day;
	      var daysInMonth;

	      var time = aTime || this._time;

	      if (!time.isDate) {
	        second = time.second + aExtraSeconds;
	        time.second = second % 60;
	        minutesOverflow = ICAL.helpers.trunc(second / 60);
	        if (time.second < 0) {
	          time.second += 60;
	          minutesOverflow--;
	        }

	        minute = time.minute + aExtraMinutes + minutesOverflow;
	        time.minute = minute % 60;
	        hoursOverflow = ICAL.helpers.trunc(minute / 60);
	        if (time.minute < 0) {
	          time.minute += 60;
	          hoursOverflow--;
	        }

	        hour = time.hour + aExtraHours + hoursOverflow;

	        time.hour = hour % 24;
	        daysOverflow = ICAL.helpers.trunc(hour / 24);
	        if (time.hour < 0) {
	          time.hour += 24;
	          daysOverflow--;
	        }
	      }


	      // Adjust month and year first, because we need to know what month the day
	      // is in before adjusting it.
	      if (time.month > 12) {
	        yearsOverflow = ICAL.helpers.trunc((time.month - 1) / 12);
	      } else if (time.month < 1) {
	        yearsOverflow = ICAL.helpers.trunc(time.month / 12) - 1;
	      }

	      time.year += yearsOverflow;
	      time.month -= 12 * yearsOverflow;

	      // Now take care of the days (and adjust month if needed)
	      day = time.day + aExtraDays + daysOverflow;

	      if (day > 0) {
	        for (;;) {
	          daysInMonth = ICAL.Time.daysInMonth(time.month, time.year);
	          if (day <= daysInMonth) {
	            break;
	          }

	          time.month++;
	          if (time.month > 12) {
	            time.year++;
	            time.month = 1;
	          }

	          day -= daysInMonth;
	        }
	      } else {
	        while (day <= 0) {
	          if (time.month == 1) {
	            time.year--;
	            time.month = 12;
	          } else {
	            time.month--;
	          }

	          day += ICAL.Time.daysInMonth(time.month, time.year);
	        }
	      }

	      time.day = day;

	      this._cachedUnixTime = null;
	      return this;
	    },

	    /**
	     * Sets up the current instance from unix time, the number of seconds since
	     * January 1st, 1970.
	     *
	     * @param {Number} seconds      The seconds to set up with
	     */
	    fromUnixTime: function fromUnixTime(seconds) {
	      this.zone = ICAL.Timezone.utcTimezone;
	      var epoch = ICAL.Time.epochTime.clone();
	      epoch.adjust(0, 0, 0, seconds);

	      this.year = epoch.year;
	      this.month = epoch.month;
	      this.day = epoch.day;
	      this.hour = epoch.hour;
	      this.minute = epoch.minute;
	      this.second = Math.floor(epoch.second);

	      this._cachedUnixTime = null;
	    },

	    /**
	     * Converts the current instance to seconds since January 1st 1970.
	     *
	     * @return {Number}         Seconds since 1970
	     */
	    toUnixTime: function toUnixTime() {
	      if (this._cachedUnixTime !== null) {
	        return this._cachedUnixTime;
	      }
	      var offset = this.utcOffset();

	      // we use the offset trick to ensure
	      // that we are getting the actual UTC time
	      var ms = Date.UTC(
	        this.year,
	        this.month - 1,
	        this.day,
	        this.hour,
	        this.minute,
	        this.second - offset
	      );

	      // seconds
	      this._cachedUnixTime = ms / 1000;
	      return this._cachedUnixTime;
	    },

	    /**
	     * Converts time to into Object which can be serialized then re-created
	     * using the constructor.
	     *
	     * @example
	     * // toJSON will automatically be called
	     * var json = JSON.stringify(mytime);
	     *
	     * var deserialized = JSON.parse(json);
	     *
	     * var time = new ICAL.Time(deserialized);
	     *
	     * @return {Object}
	     */
	    toJSON: function() {
	      var copy = [
	        'year',
	        'month',
	        'day',
	        'hour',
	        'minute',
	        'second',
	        'isDate'
	      ];

	      var result = Object.create(null);

	      var i = 0;
	      var len = copy.length;
	      var prop;

	      for (; i < len; i++) {
	        prop = copy[i];
	        result[prop] = this[prop];
	      }

	      if (this.zone) {
	        result.timezone = this.zone.tzid;
	      }

	      return result;
	    }

	  };

	  (function setupNormalizeAttributes() {
	    // This needs to run before any instances are created!
	    function defineAttr(attr) {
	      Object.defineProperty(ICAL.Time.prototype, attr, {
	        get: function getTimeAttr() {
	          if (this._pendingNormalization) {
	            this._normalize();
	            this._pendingNormalization = false;
	          }

	          return this._time[attr];
	        },
	        set: function setTimeAttr(val) {
	          // Check if isDate will be set and if was not set to normalize date.
	          // This avoids losing days when seconds, minutes and hours are zeroed
	          // what normalize will do when time is a date.
	          if (attr === "isDate" && val && !this._time.isDate) {
	            this.adjust(0, 0, 0, 0);
	          }
	          this._cachedUnixTime = null;
	          this._pendingNormalization = true;
	          this._time[attr] = val;

	          return val;
	        }
	      });

	    }

	    /* istanbul ignore else */
	    if ("defineProperty" in Object) {
	      defineAttr("year");
	      defineAttr("month");
	      defineAttr("day");
	      defineAttr("hour");
	      defineAttr("minute");
	      defineAttr("second");
	      defineAttr("isDate");
	    }
	  })();

	  /**
	   * Returns the days in the given month
	   *
	   * @param {Number} month      The month to check
	   * @param {Number} year       The year to check
	   * @return {Number}           The number of days in the month
	   */
	  ICAL.Time.daysInMonth = function icaltime_daysInMonth(month, year) {
	    var _daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	    var days = 30;

	    if (month < 1 || month > 12) return days;

	    days = _daysInMonth[month];

	    if (month == 2) {
	      days += ICAL.Time.isLeapYear(year);
	    }

	    return days;
	  };

	  /**
	   * Checks if the year is a leap year
	   *
	   * @param {Number} year       The year to check
	   * @return {Boolean}          True, if the year is a leap year
	   */
	  ICAL.Time.isLeapYear = function isLeapYear(year) {
	    if (year <= 1752) {
	      return ((year % 4) == 0);
	    } else {
	      return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0));
	    }
	  };

	  /**
	   * Create a new ICAL.Time from the day of year and year. The date is returned
	   * in floating timezone.
	   *
	   * @param {Number} aDayOfYear     The day of year
	   * @param {Number} aYear          The year to create the instance in
	   * @return {ICAL.Time}            The created instance with the calculated date
	   */
	  ICAL.Time.fromDayOfYear = function icaltime_fromDayOfYear(aDayOfYear, aYear) {
	    var year = aYear;
	    var doy = aDayOfYear;
	    var tt = new ICAL.Time();
	    tt.auto_normalize = false;
	    var is_leap = (ICAL.Time.isLeapYear(year) ? 1 : 0);

	    if (doy < 1) {
	      year--;
	      is_leap = (ICAL.Time.isLeapYear(year) ? 1 : 0);
	      doy += ICAL.Time.daysInYearPassedMonth[is_leap][12];
	      return ICAL.Time.fromDayOfYear(doy, year);
	    } else if (doy > ICAL.Time.daysInYearPassedMonth[is_leap][12]) {
	      is_leap = (ICAL.Time.isLeapYear(year) ? 1 : 0);
	      doy -= ICAL.Time.daysInYearPassedMonth[is_leap][12];
	      year++;
	      return ICAL.Time.fromDayOfYear(doy, year);
	    }

	    tt.year = year;
	    tt.isDate = true;

	    for (var month = 11; month >= 0; month--) {
	      if (doy > ICAL.Time.daysInYearPassedMonth[is_leap][month]) {
	        tt.month = month + 1;
	        tt.day = doy - ICAL.Time.daysInYearPassedMonth[is_leap][month];
	        break;
	      }
	    }

	    tt.auto_normalize = true;
	    return tt;
	  };

	  /**
	   * Returns a new ICAL.Time instance from a date string, e.g 2015-01-02.
	   *
	   * @deprecated                Use {@link ICAL.Time.fromDateString} instead
	   * @param {String} str        The string to create from
	   * @return {ICAL.Time}        The date/time instance
	   */
	  ICAL.Time.fromStringv2 = function fromString(str) {
	    return new ICAL.Time({
	      year: parseInt(str.substr(0, 4), 10),
	      month: parseInt(str.substr(5, 2), 10),
	      day: parseInt(str.substr(8, 2), 10),
	      isDate: true
	    });
	  };

	  /**
	   * Returns a new ICAL.Time instance from a date string, e.g 2015-01-02.
	   *
	   * @param {String} aValue     The string to create from
	   * @return {ICAL.Time}        The date/time instance
	   */
	  ICAL.Time.fromDateString = function(aValue) {
	    // Dates should have no timezone.
	    // Google likes to sometimes specify Z on dates
	    // we specifically ignore that to avoid issues.

	    // YYYY-MM-DD
	    // 2012-10-10
	    return new ICAL.Time({
	      year: ICAL.helpers.strictParseInt(aValue.substr(0, 4)),
	      month: ICAL.helpers.strictParseInt(aValue.substr(5, 2)),
	      day: ICAL.helpers.strictParseInt(aValue.substr(8, 2)),
	      isDate: true
	    });
	  };

	  /**
	   * Returns a new ICAL.Time instance from a date-time string, e.g
	   * 2015-01-02T03:04:05. If a property is specified, the timezone is set up
	   * from the property's TZID parameter.
	   *
	   * @param {String} aValue         The string to create from
	   * @param {ICAL.Property=} prop   The property the date belongs to
	   * @return {ICAL.Time}            The date/time instance
	   */
	  ICAL.Time.fromDateTimeString = function(aValue, prop) {
	    if (aValue.length < 19) {
	      throw new Error(
	        'invalid date-time value: "' + aValue + '"'
	      );
	    }

	    var zone;

	    if (aValue[19] && aValue[19] === 'Z') {
	      zone = 'Z';
	    } else if (prop) {
	      zone = prop.getParameter('tzid');
	    }

	    // 2012-10-10T10:10:10(Z)?
	    var time = new ICAL.Time({
	      year: ICAL.helpers.strictParseInt(aValue.substr(0, 4)),
	      month: ICAL.helpers.strictParseInt(aValue.substr(5, 2)),
	      day: ICAL.helpers.strictParseInt(aValue.substr(8, 2)),
	      hour: ICAL.helpers.strictParseInt(aValue.substr(11, 2)),
	      minute: ICAL.helpers.strictParseInt(aValue.substr(14, 2)),
	      second: ICAL.helpers.strictParseInt(aValue.substr(17, 2)),
	      timezone: zone
	    });

	    return time;
	  };

	  /**
	   * Returns a new ICAL.Time instance from a date or date-time string,
	   *
	   * @param {String} aValue         The string to create from
	   * @param {ICAL.Property=} prop   The property the date belongs to
	   * @return {ICAL.Time}            The date/time instance
	   */
	  ICAL.Time.fromString = function fromString(aValue, aProperty) {
	    if (aValue.length > 10) {
	      return ICAL.Time.fromDateTimeString(aValue, aProperty);
	    } else {
	      return ICAL.Time.fromDateString(aValue);
	    }
	  };

	  /**
	   * Creates a new ICAL.Time instance from the given Javascript Date.
	   *
	   * @param {?Date} aDate     The Javascript Date to read, or null to reset
	   * @param {Boolean} useUTC  If true, the UTC values of the date will be used
	   */
	  ICAL.Time.fromJSDate = function fromJSDate(aDate, useUTC) {
	    var tt = new ICAL.Time();
	    return tt.fromJSDate(aDate, useUTC);
	  };

	  /**
	   * Creates a new ICAL.Time instance from the the passed data object.
	   *
	   * @param {Object} aData            Time initialization
	   * @param {Number=} aData.year      The year for this date
	   * @param {Number=} aData.month     The month for this date
	   * @param {Number=} aData.day       The day for this date
	   * @param {Number=} aData.hour      The hour for this date
	   * @param {Number=} aData.minute    The minute for this date
	   * @param {Number=} aData.second    The second for this date
	   * @param {Boolean=} aData.isDate   If true, the instance represents a date
	   *                                    (as opposed to a date-time)
	   * @param {ICAL.Timezone=} aZone    Timezone this position occurs in
	   */
	  ICAL.Time.fromData = function fromData(aData, aZone) {
	    var t = new ICAL.Time();
	    return t.fromData(aData, aZone);
	  };

	  /**
	   * Creates a new ICAL.Time instance from the current moment.
	   * The instance is “floating” - has no timezone relation.
	   * To create an instance considering the time zone, call
	   * ICAL.Time.fromJSDate(new Date(), true)
	   * @return {ICAL.Time}
	   */
	  ICAL.Time.now = function icaltime_now() {
	    return ICAL.Time.fromJSDate(new Date(), false);
	  };

	  /**
	   * Returns the date on which ISO week number 1 starts.
	   *
	   * @see ICAL.Time#weekNumber
	   * @param {Number} aYear                  The year to search in
	   * @param {ICAL.Time.weekDay=} aWeekStart The week start weekday, used for calculation.
	   * @return {ICAL.Time}                    The date on which week number 1 starts
	   */
	  ICAL.Time.weekOneStarts = function weekOneStarts(aYear, aWeekStart) {
	    var t = ICAL.Time.fromData({
	      year: aYear,
	      month: 1,
	      day: 1,
	      isDate: true
	    });

	    var dow = t.dayOfWeek();
	    var wkst = aWeekStart || ICAL.Time.DEFAULT_WEEK_START;
	    if (dow > ICAL.Time.THURSDAY) {
	      t.day += 7;
	    }
	    if (wkst > ICAL.Time.THURSDAY) {
	      t.day -= 7;
	    }

	    t.day -= dow - wkst;

	    return t;
	  };

	  /**
	   * Get the dominical letter for the given year. Letters range from A - G for
	   * common years, and AG to GF for leap years.
	   *
	   * @param {Number} yr           The year to retrieve the letter for
	   * @return {String}             The dominical letter.
	   */
	  ICAL.Time.getDominicalLetter = function(yr) {
	    var LTRS = "GFEDCBA";
	    var dom = (yr + (yr / 4 | 0) + (yr / 400 | 0) - (yr / 100 | 0) - 1) % 7;
	    var isLeap = ICAL.Time.isLeapYear(yr);
	    if (isLeap) {
	      return LTRS[(dom + 6) % 7] + LTRS[dom];
	    } else {
	      return LTRS[dom];
	    }
	  };

	  /**
	   * January 1st, 1970 as an ICAL.Time.
	   * @type {ICAL.Time}
	   * @constant
	   * @instance
	   */
	  ICAL.Time.epochTime = ICAL.Time.fromData({
	    year: 1970,
	    month: 1,
	    day: 1,
	    hour: 0,
	    minute: 0,
	    second: 0,
	    isDate: false,
	    timezone: "Z"
	  });

	  ICAL.Time._cmp_attr = function _cmp_attr(a, b, attr) {
	    if (a[attr] > b[attr]) return 1;
	    if (a[attr] < b[attr]) return -1;
	    return 0;
	  };

	  /**
	   * The days that have passed in the year after a given month. The array has
	   * two members, one being an array of passed days for non-leap years, the
	   * other analog for leap years.
	   * @example
	   * var isLeapYear = ICAL.Time.isLeapYear(year);
	   * var passedDays = ICAL.Time.daysInYearPassedMonth[isLeapYear][month];
	   * @type {Array.<Array.<Number>>}
	   */
	  ICAL.Time.daysInYearPassedMonth = [
	    [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
	    [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
	  ];

	  /**
	   * The weekday, 1 = SUNDAY, 7 = SATURDAY. Access via
	   * ICAL.Time.MONDAY, ICAL.Time.TUESDAY, ...
	   *
	   * @typedef {Number} weekDay
	   * @memberof ICAL.Time
	   */

	  ICAL.Time.SUNDAY = 1;
	  ICAL.Time.MONDAY = 2;
	  ICAL.Time.TUESDAY = 3;
	  ICAL.Time.WEDNESDAY = 4;
	  ICAL.Time.THURSDAY = 5;
	  ICAL.Time.FRIDAY = 6;
	  ICAL.Time.SATURDAY = 7;

	  /**
	   * The default weekday for the WKST part.
	   * @constant
	   * @default ICAL.Time.MONDAY
	   */
	  ICAL.Time.DEFAULT_WEEK_START = ICAL.Time.MONDAY;
	})();
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2015 */



	(function() {

	  /**
	   * Describes a vCard time, which has slight differences to the ICAL.Time.
	   * Properties can be null if not specified, for example for dates with
	   * reduced accuracy or truncation.
	   *
	   * Note that currently not all methods are correctly re-implemented for
	   * VCardTime. For example, comparison will have undefined results when some
	   * members are null.
	   *
	   * Also, normalization is not yet implemented for this class!
	   *
	   * @alias ICAL.VCardTime
	   * @class
	   * @extends {ICAL.Time}
	   * @param {Object} data                           The data for the time instance
	   * @param {Number=} data.year                     The year for this date
	   * @param {Number=} data.month                    The month for this date
	   * @param {Number=} data.day                      The day for this date
	   * @param {Number=} data.hour                     The hour for this date
	   * @param {Number=} data.minute                   The minute for this date
	   * @param {Number=} data.second                   The second for this date
	   * @param {ICAL.Timezone|ICAL.UtcOffset} zone     The timezone to use
	   * @param {String} icaltype                       The type for this date/time object
	   */
	  ICAL.VCardTime = function(data, zone, icaltype) {
	    this.wrappedJSObject = this;
	    var time = this._time = Object.create(null);

	    time.year = null;
	    time.month = null;
	    time.day = null;
	    time.hour = null;
	    time.minute = null;
	    time.second = null;

	    this.icaltype = icaltype || "date-and-or-time";

	    this.fromData(data, zone);
	  };
	  ICAL.helpers.inherits(ICAL.Time, ICAL.VCardTime, /** @lends ICAL.VCardTime */ {

	    /**
	     * The class identifier.
	     * @constant
	     * @type {String}
	     * @default "vcardtime"
	     */
	    icalclass: "vcardtime",

	    /**
	     * The type name, to be used in the jCal object.
	     * @type {String}
	     * @default "date-and-or-time"
	     */
	    icaltype: "date-and-or-time",

	    /**
	     * The timezone. This can either be floating, UTC, or an instance of
	     * ICAL.UtcOffset.
	     * @type {ICAL.Timezone|ICAL.UtcOFfset}
	     */
	    zone: null,

	    /**
	     * Returns a clone of the vcard date/time object.
	     *
	     * @return {ICAL.VCardTime}     The cloned object
	     */
	    clone: function() {
	      return new ICAL.VCardTime(this._time, this.zone, this.icaltype);
	    },

	    _normalize: function() {
	      return this;
	    },

	    /**
	     * @inheritdoc
	     */
	    utcOffset: function() {
	      if (this.zone instanceof ICAL.UtcOffset) {
	        return this.zone.toSeconds();
	      } else {
	        return ICAL.Time.prototype.utcOffset.apply(this, arguments);
	      }
	    },

	    /**
	     * Returns an RFC 6350 compliant representation of this object.
	     *
	     * @return {String}         vcard date/time string
	     */
	    toICALString: function() {
	      return ICAL.design.vcard.value[this.icaltype].toICAL(this.toString());
	    },

	    /**
	     * The string representation of this date/time, in jCard form
	     * (including : and - separators).
	     * @return {String}
	     */
	    toString: function toString() {
	      var p2 = ICAL.helpers.pad2;
	      var y = this.year, m = this.month, d = this.day;
	      var h = this.hour, mm = this.minute, s = this.second;

	      var hasYear = y !== null, hasMonth = m !== null, hasDay = d !== null;
	      var hasHour = h !== null, hasMinute = mm !== null, hasSecond = s !== null;

	      var datepart = (hasYear ? p2(y) + (hasMonth || hasDay ? '-' : '') : (hasMonth || hasDay ? '--' : '')) +
	                     (hasMonth ? p2(m) : '') +
	                     (hasDay ? '-' + p2(d) : '');
	      var timepart = (hasHour ? p2(h) : '-') + (hasHour && hasMinute ? ':' : '') +
	                     (hasMinute ? p2(mm) : '') + (!hasHour && !hasMinute ? '-' : '') +
	                     (hasMinute && hasSecond ? ':' : '') +
	                     (hasSecond ? p2(s) : '');

	      var zone;
	      if (this.zone === ICAL.Timezone.utcTimezone) {
	        zone = 'Z';
	      } else if (this.zone instanceof ICAL.UtcOffset) {
	        zone = this.zone.toString();
	      } else if (this.zone === ICAL.Timezone.localTimezone) {
	        zone = '';
	      } else if (this.zone instanceof ICAL.Timezone) {
	        var offset = ICAL.UtcOffset.fromSeconds(this.zone.utcOffset(this));
	        zone = offset.toString();
	      } else {
	        zone = '';
	      }

	      switch (this.icaltype) {
	        case "time":
	          return timepart + zone;
	        case "date-and-or-time":
	        case "date-time":
	          return datepart + (timepart == '--' ? '' : 'T' + timepart + zone);
	        case "date":
	          return datepart;
	      }
	      return null;
	    }
	  });

	  /**
	   * Returns a new ICAL.VCardTime instance from a date and/or time string.
	   *
	   * @param {String} aValue     The string to create from
	   * @param {String} aIcalType  The type for this instance, e.g. date-and-or-time
	   * @return {ICAL.VCardTime}   The date/time instance
	   */
	  ICAL.VCardTime.fromDateAndOrTimeString = function(aValue, aIcalType) {
	    function part(v, s, e) {
	      return v ? ICAL.helpers.strictParseInt(v.substr(s, e)) : null;
	    }
	    var parts = aValue.split('T');
	    var dt = parts[0], tmz = parts[1];
	    var splitzone = tmz ? ICAL.design.vcard.value.time._splitZone(tmz) : [];
	    var zone = splitzone[0], tm = splitzone[1];

	    ICAL.helpers.strictParseInt;
	    var dtlen = dt ? dt.length : 0;
	    var tmlen = tm ? tm.length : 0;

	    var hasDashDate = dt && dt[0] == '-' && dt[1] == '-';
	    var hasDashTime = tm && tm[0] == '-';

	    var o = {
	      year: hasDashDate ? null : part(dt, 0, 4),
	      month: hasDashDate && (dtlen == 4 || dtlen == 7) ? part(dt, 2, 2) : dtlen == 7 ? part(dt, 5, 2) : dtlen == 10 ? part(dt, 5, 2) : null,
	      day: dtlen == 5 ? part(dt, 3, 2) : dtlen == 7 && hasDashDate ? part(dt, 5, 2) : dtlen == 10 ? part(dt, 8, 2) : null,

	      hour: hasDashTime ? null : part(tm, 0, 2),
	      minute: hasDashTime && tmlen == 3 ? part(tm, 1, 2) : tmlen > 4 ? hasDashTime ? part(tm, 1, 2) : part(tm, 3, 2) : null,
	      second: tmlen == 4 ? part(tm, 2, 2) : tmlen == 6 ? part(tm, 4, 2) : tmlen == 8 ? part(tm, 6, 2) : null
	    };

	    if (zone == 'Z') {
	      zone = ICAL.Timezone.utcTimezone;
	    } else if (zone && zone[3] == ':') {
	      zone = ICAL.UtcOffset.fromString(zone);
	    } else {
	      zone = null;
	    }

	    return new ICAL.VCardTime(o, zone, aIcalType);
	  };
	})();
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */



	(function() {
	  var DOW_MAP = {
	    SU: ICAL.Time.SUNDAY,
	    MO: ICAL.Time.MONDAY,
	    TU: ICAL.Time.TUESDAY,
	    WE: ICAL.Time.WEDNESDAY,
	    TH: ICAL.Time.THURSDAY,
	    FR: ICAL.Time.FRIDAY,
	    SA: ICAL.Time.SATURDAY
	  };

	  var REVERSE_DOW_MAP = {};
	  for (var key in DOW_MAP) {
	    /* istanbul ignore else */
	    if (DOW_MAP.hasOwnProperty(key)) {
	      REVERSE_DOW_MAP[DOW_MAP[key]] = key;
	    }
	  }

	  /**
	   * @classdesc
	   * This class represents the "recur" value type, with various calculation
	   * and manipulation methods.
	   *
	   * @class
	   * @alias ICAL.Recur
	   * @param {Object} data                               An object with members of the recurrence
	   * @param {ICAL.Recur.frequencyValues=} data.freq     The frequency value
	   * @param {Number=} data.interval                     The INTERVAL value
	   * @param {ICAL.Time.weekDay=} data.wkst              The week start value
	   * @param {ICAL.Time=} data.until                     The end of the recurrence set
	   * @param {Number=} data.count                        The number of occurrences
	   * @param {Array.<Number>=} data.bysecond             The seconds for the BYSECOND part
	   * @param {Array.<Number>=} data.byminute             The minutes for the BYMINUTE part
	   * @param {Array.<Number>=} data.byhour               The hours for the BYHOUR part
	   * @param {Array.<String>=} data.byday                The BYDAY values
	   * @param {Array.<Number>=} data.bymonthday           The days for the BYMONTHDAY part
	   * @param {Array.<Number>=} data.byyearday            The days for the BYYEARDAY part
	   * @param {Array.<Number>=} data.byweekno             The weeks for the BYWEEKNO part
	   * @param {Array.<Number>=} data.bymonth              The month for the BYMONTH part
	   * @param {Array.<Number>=} data.bysetpos             The positionals for the BYSETPOS part
	   */
	  ICAL.Recur = function icalrecur(data) {
	    this.wrappedJSObject = this;
	    this.parts = {};

	    if (data && typeof(data) === 'object') {
	      this.fromData(data);
	    }
	  };

	  ICAL.Recur.prototype = {
	    /**
	     * An object holding the BY-parts of the recurrence rule
	     * @type {Object}
	     */
	    parts: null,

	    /**
	     * The interval value for the recurrence rule.
	     * @type {Number}
	     */
	    interval: 1,

	    /**
	     * The week start day
	     *
	     * @type {ICAL.Time.weekDay}
	     * @default ICAL.Time.MONDAY
	     */
	    wkst: ICAL.Time.MONDAY,

	    /**
	     * The end of the recurrence
	     * @type {?ICAL.Time}
	     */
	    until: null,

	    /**
	     * The maximum number of occurrences
	     * @type {?Number}
	     */
	    count: null,

	    /**
	     * The frequency value.
	     * @type {ICAL.Recur.frequencyValues}
	     */
	    freq: null,

	    /**
	     * The class identifier.
	     * @constant
	     * @type {String}
	     * @default "icalrecur"
	     */
	    icalclass: "icalrecur",

	    /**
	     * The type name, to be used in the jCal object.
	     * @constant
	     * @type {String}
	     * @default "recur"
	     */
	    icaltype: "recur",

	    /**
	     * Create a new iterator for this recurrence rule. The passed start date
	     * must be the start date of the event, not the start of the range to
	     * search in.
	     *
	     * @example
	     * var recur = comp.getFirstPropertyValue('rrule');
	     * var dtstart = comp.getFirstPropertyValue('dtstart');
	     * var iter = recur.iterator(dtstart);
	     * for (var next = iter.next(); next; next = iter.next()) {
	     *   if (next.compare(rangeStart) < 0) {
	     *     continue;
	     *   }
	     *   console.log(next.toString());
	     * }
	     *
	     * @param {ICAL.Time} aStart        The item's start date
	     * @return {ICAL.RecurIterator}     The recurrence iterator
	     */
	    iterator: function(aStart) {
	      return new ICAL.RecurIterator({
	        rule: this,
	        dtstart: aStart
	      });
	    },

	    /**
	     * Returns a clone of the recurrence object.
	     *
	     * @return {ICAL.Recur}      The cloned object
	     */
	    clone: function clone() {
	      return new ICAL.Recur(this.toJSON());
	    },

	    /**
	     * Checks if the current rule is finite, i.e. has a count or until part.
	     *
	     * @return {Boolean}        True, if the rule is finite
	     */
	    isFinite: function isfinite() {
	      return !!(this.count || this.until);
	    },

	    /**
	     * Checks if the current rule has a count part, and not limited by an until
	     * part.
	     *
	     * @return {Boolean}        True, if the rule is by count
	     */
	    isByCount: function isbycount() {
	      return !!(this.count && !this.until);
	    },

	    /**
	     * Adds a component (part) to the recurrence rule. This is not a component
	     * in the sense of {@link ICAL.Component}, but a part of the recurrence
	     * rule, i.e. BYMONTH.
	     *
	     * @param {String} aType            The name of the component part
	     * @param {Array|String} aValue     The component value
	     */
	    addComponent: function addPart(aType, aValue) {
	      var ucname = aType.toUpperCase();
	      if (ucname in this.parts) {
	        this.parts[ucname].push(aValue);
	      } else {
	        this.parts[ucname] = [aValue];
	      }
	    },

	    /**
	     * Sets the component value for the given by-part.
	     *
	     * @param {String} aType        The component part name
	     * @param {Array} aValues       The component values
	     */
	    setComponent: function setComponent(aType, aValues) {
	      this.parts[aType.toUpperCase()] = aValues.slice();
	    },

	    /**
	     * Gets (a copy) of the requested component value.
	     *
	     * @param {String} aType        The component part name
	     * @return {Array}              The component part value
	     */
	    getComponent: function getComponent(aType) {
	      var ucname = aType.toUpperCase();
	      return (ucname in this.parts ? this.parts[ucname].slice() : []);
	    },

	    /**
	     * Retrieves the next occurrence after the given recurrence id. See the
	     * guide on {@tutorial terminology} for more details.
	     *
	     * NOTE: Currently, this method iterates all occurrences from the start
	     * date. It should not be called in a loop for performance reasons. If you
	     * would like to get more than one occurrence, you can iterate the
	     * occurrences manually, see the example on the
	     * {@link ICAL.Recur#iterator iterator} method.
	     *
	     * @param {ICAL.Time} aStartTime        The start of the event series
	     * @param {ICAL.Time} aRecurrenceId     The date of the last occurrence
	     * @return {ICAL.Time}                  The next occurrence after
	     */
	    getNextOccurrence: function getNextOccurrence(aStartTime, aRecurrenceId) {
	      var iter = this.iterator(aStartTime);
	      var next;

	      do {
	        next = iter.next();
	      } while (next && next.compare(aRecurrenceId) <= 0);

	      if (next && aRecurrenceId.zone) {
	        next.zone = aRecurrenceId.zone;
	      }

	      return next;
	    },

	    /**
	     * Sets up the current instance using members from the passed data object.
	     *
	     * @param {Object} data                               An object with members of the recurrence
	     * @param {ICAL.Recur.frequencyValues=} data.freq     The frequency value
	     * @param {Number=} data.interval                     The INTERVAL value
	     * @param {ICAL.Time.weekDay=} data.wkst              The week start value
	     * @param {ICAL.Time=} data.until                     The end of the recurrence set
	     * @param {Number=} data.count                        The number of occurrences
	     * @param {Array.<Number>=} data.bysecond             The seconds for the BYSECOND part
	     * @param {Array.<Number>=} data.byminute             The minutes for the BYMINUTE part
	     * @param {Array.<Number>=} data.byhour               The hours for the BYHOUR part
	     * @param {Array.<String>=} data.byday                The BYDAY values
	     * @param {Array.<Number>=} data.bymonthday           The days for the BYMONTHDAY part
	     * @param {Array.<Number>=} data.byyearday            The days for the BYYEARDAY part
	     * @param {Array.<Number>=} data.byweekno             The weeks for the BYWEEKNO part
	     * @param {Array.<Number>=} data.bymonth              The month for the BYMONTH part
	     * @param {Array.<Number>=} data.bysetpos             The positionals for the BYSETPOS part
	     */
	    fromData: function(data) {
	      for (var key in data) {
	        var uckey = key.toUpperCase();

	        if (uckey in partDesign) {
	          if (Array.isArray(data[key])) {
	            this.parts[uckey] = data[key];
	          } else {
	            this.parts[uckey] = [data[key]];
	          }
	        } else {
	          this[key] = data[key];
	        }
	      }

	      if (this.interval && typeof this.interval != "number") {
	        optionDesign.INTERVAL(this.interval, this);
	      }

	      if (this.wkst && typeof this.wkst != "number") {
	        this.wkst = ICAL.Recur.icalDayToNumericDay(this.wkst);
	      }

	      if (this.until && !(this.until instanceof ICAL.Time)) {
	        this.until = ICAL.Time.fromString(this.until);
	      }
	    },

	    /**
	     * The jCal representation of this recurrence type.
	     * @return {Object}
	     */
	    toJSON: function() {
	      var res = Object.create(null);
	      res.freq = this.freq;

	      if (this.count) {
	        res.count = this.count;
	      }

	      if (this.interval > 1) {
	        res.interval = this.interval;
	      }

	      for (var k in this.parts) {
	        /* istanbul ignore if */
	        if (!this.parts.hasOwnProperty(k)) {
	          continue;
	        }
	        var kparts = this.parts[k];
	        if (Array.isArray(kparts) && kparts.length == 1) {
	          res[k.toLowerCase()] = kparts[0];
	        } else {
	          res[k.toLowerCase()] = ICAL.helpers.clone(this.parts[k]);
	        }
	      }

	      if (this.until) {
	        res.until = this.until.toString();
	      }
	      if ('wkst' in this && this.wkst !== ICAL.Time.DEFAULT_WEEK_START) {
	        res.wkst = ICAL.Recur.numericDayToIcalDay(this.wkst);
	      }
	      return res;
	    },

	    /**
	     * The string representation of this recurrence rule.
	     * @return {String}
	     */
	    toString: function icalrecur_toString() {
	      // TODO retain order
	      var str = "FREQ=" + this.freq;
	      if (this.count) {
	        str += ";COUNT=" + this.count;
	      }
	      if (this.interval > 1) {
	        str += ";INTERVAL=" + this.interval;
	      }
	      for (var k in this.parts) {
	        /* istanbul ignore else */
	        if (this.parts.hasOwnProperty(k)) {
	          str += ";" + k + "=" + this.parts[k];
	        }
	      }
	      if (this.until) {
	        str += ';UNTIL=' + this.until.toICALString();
	      }
	      if ('wkst' in this && this.wkst !== ICAL.Time.DEFAULT_WEEK_START) {
	        str += ';WKST=' + ICAL.Recur.numericDayToIcalDay(this.wkst);
	      }
	      return str;
	    }
	  };

	  function parseNumericValue(type, min, max, value) {
	    var result = value;

	    if (value[0] === '+') {
	      result = value.substr(1);
	    }

	    result = ICAL.helpers.strictParseInt(result);

	    if (min !== undefined && value < min) {
	      throw new Error(
	        type + ': invalid value "' + value + '" must be > ' + min
	      );
	    }

	    if (max !== undefined && value > max) {
	      throw new Error(
	        type + ': invalid value "' + value + '" must be < ' + min
	      );
	    }

	    return result;
	  }

	  /**
	   * Convert an ical representation of a day (SU, MO, etc..)
	   * into a numeric value of that day.
	   *
	   * @param {String} string     The iCalendar day name
	   * @param {ICAL.Time.weekDay=} aWeekStart
	   *        The week start weekday, defaults to SUNDAY
	   * @return {Number}           Numeric value of given day
	   */
	  ICAL.Recur.icalDayToNumericDay = function toNumericDay(string, aWeekStart) {
	    //XXX: this is here so we can deal
	    //     with possibly invalid string values.
	    var firstDow = aWeekStart || ICAL.Time.SUNDAY;
	    return ((DOW_MAP[string] - firstDow + 7) % 7) + 1;
	  };

	  /**
	   * Convert a numeric day value into its ical representation (SU, MO, etc..)
	   *
	   * @param {Number} num        Numeric value of given day
	   * @param {ICAL.Time.weekDay=} aWeekStart
	   *        The week start weekday, defaults to SUNDAY
	   * @return {String}           The ICAL day value, e.g SU,MO,...
	   */
	  ICAL.Recur.numericDayToIcalDay = function toIcalDay(num, aWeekStart) {
	    //XXX: this is here so we can deal with possibly invalid number values.
	    //     Also, this allows consistent mapping between day numbers and day
	    //     names for external users.
	    var firstDow = aWeekStart || ICAL.Time.SUNDAY;
	    var dow = (num + firstDow - ICAL.Time.SUNDAY);
	    if (dow > 7) {
	      dow -= 7;
	    }
	    return REVERSE_DOW_MAP[dow];
	  };

	  var VALID_DAY_NAMES = /^(SU|MO|TU|WE|TH|FR|SA)$/;
	  var VALID_BYDAY_PART = /^([+-])?(5[0-3]|[1-4][0-9]|[1-9])?(SU|MO|TU|WE|TH|FR|SA)$/;

	  /**
	   * Possible frequency values for the FREQ part
	   * (YEARLY, MONTHLY, WEEKLY, DAILY, HOURLY, MINUTELY, SECONDLY)
	   *
	   * @typedef {String} frequencyValues
	   * @memberof ICAL.Recur
	   */

	  var ALLOWED_FREQ = ['SECONDLY', 'MINUTELY', 'HOURLY',
	                      'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'];

	  var optionDesign = {
	    FREQ: function(value, dict, fmtIcal) {
	      // yes this is actually equal or faster then regex.
	      // upside here is we can enumerate the valid values.
	      if (ALLOWED_FREQ.indexOf(value) !== -1) {
	        dict.freq = value;
	      } else {
	        throw new Error(
	          'invalid frequency "' + value + '" expected: "' +
	          ALLOWED_FREQ.join(', ') + '"'
	        );
	      }
	    },

	    COUNT: function(value, dict, fmtIcal) {
	      dict.count = ICAL.helpers.strictParseInt(value);
	    },

	    INTERVAL: function(value, dict, fmtIcal) {
	      dict.interval = ICAL.helpers.strictParseInt(value);
	      if (dict.interval < 1) {
	        // 0 or negative values are not allowed, some engines seem to generate
	        // it though. Assume 1 instead.
	        dict.interval = 1;
	      }
	    },

	    UNTIL: function(value, dict, fmtIcal) {
	      if (value.length > 10) {
	        dict.until = ICAL.design.icalendar.value['date-time'].fromICAL(value);
	      } else {
	        dict.until = ICAL.design.icalendar.value.date.fromICAL(value);
	      }
	      if (!fmtIcal) {
	        dict.until = ICAL.Time.fromString(dict.until);
	      }
	    },

	    WKST: function(value, dict, fmtIcal) {
	      if (VALID_DAY_NAMES.test(value)) {
	        dict.wkst = ICAL.Recur.icalDayToNumericDay(value);
	      } else {
	        throw new Error('invalid WKST value "' + value + '"');
	      }
	    }
	  };

	  var partDesign = {
	    BYSECOND: parseNumericValue.bind(this, 'BYSECOND', 0, 60),
	    BYMINUTE: parseNumericValue.bind(this, 'BYMINUTE', 0, 59),
	    BYHOUR: parseNumericValue.bind(this, 'BYHOUR', 0, 23),
	    BYDAY: function(value) {
	      if (VALID_BYDAY_PART.test(value)) {
	        return value;
	      } else {
	        throw new Error('invalid BYDAY value "' + value + '"');
	      }
	    },
	    BYMONTHDAY: parseNumericValue.bind(this, 'BYMONTHDAY', -31, 31),
	    BYYEARDAY: parseNumericValue.bind(this, 'BYYEARDAY', -366, 366),
	    BYWEEKNO: parseNumericValue.bind(this, 'BYWEEKNO', -53, 53),
	    BYMONTH: parseNumericValue.bind(this, 'BYMONTH', 1, 12),
	    BYSETPOS: parseNumericValue.bind(this, 'BYSETPOS', -366, 366)
	  };


	  /**
	   * Creates a new {@link ICAL.Recur} instance from the passed string.
	   *
	   * @param {String} string         The string to parse
	   * @return {ICAL.Recur}           The created recurrence instance
	   */
	  ICAL.Recur.fromString = function(string) {
	    var data = ICAL.Recur._stringToData(string, false);
	    return new ICAL.Recur(data);
	  };

	  /**
	   * Creates a new {@link ICAL.Recur} instance using members from the passed
	   * data object.
	   *
	   * @param {Object} aData                              An object with members of the recurrence
	   * @param {ICAL.Recur.frequencyValues=} aData.freq    The frequency value
	   * @param {Number=} aData.interval                    The INTERVAL value
	   * @param {ICAL.Time.weekDay=} aData.wkst             The week start value
	   * @param {ICAL.Time=} aData.until                    The end of the recurrence set
	   * @param {Number=} aData.count                       The number of occurrences
	   * @param {Array.<Number>=} aData.bysecond            The seconds for the BYSECOND part
	   * @param {Array.<Number>=} aData.byminute            The minutes for the BYMINUTE part
	   * @param {Array.<Number>=} aData.byhour              The hours for the BYHOUR part
	   * @param {Array.<String>=} aData.byday               The BYDAY values
	   * @param {Array.<Number>=} aData.bymonthday          The days for the BYMONTHDAY part
	   * @param {Array.<Number>=} aData.byyearday           The days for the BYYEARDAY part
	   * @param {Array.<Number>=} aData.byweekno            The weeks for the BYWEEKNO part
	   * @param {Array.<Number>=} aData.bymonth             The month for the BYMONTH part
	   * @param {Array.<Number>=} aData.bysetpos            The positionals for the BYSETPOS part
	   */
	  ICAL.Recur.fromData = function(aData) {
	    return new ICAL.Recur(aData);
	  };

	  /**
	   * Converts a recurrence string to a data object, suitable for the fromData
	   * method.
	   *
	   * @param {String} string     The string to parse
	   * @param {Boolean} fmtIcal   If true, the string is considered to be an
	   *                              iCalendar string
	   * @return {ICAL.Recur}       The recurrence instance
	   */
	  ICAL.Recur._stringToData = function(string, fmtIcal) {
	    var dict = Object.create(null);

	    // split is slower in FF but fast enough.
	    // v8 however this is faster then manual split?
	    var values = string.split(';');
	    var len = values.length;

	    for (var i = 0; i < len; i++) {
	      var parts = values[i].split('=');
	      var ucname = parts[0].toUpperCase();
	      var lcname = parts[0].toLowerCase();
	      var name = (fmtIcal ? lcname : ucname);
	      var value = parts[1];

	      if (ucname in partDesign) {
	        var partArr = value.split(',');
	        var partArrIdx = 0;
	        var partArrLen = partArr.length;

	        for (; partArrIdx < partArrLen; partArrIdx++) {
	          partArr[partArrIdx] = partDesign[ucname](partArr[partArrIdx]);
	        }
	        dict[name] = (partArr.length == 1 ? partArr[0] : partArr);
	      } else if (ucname in optionDesign) {
	        optionDesign[ucname](value, dict, fmtIcal);
	      } else {
	        // Don't swallow unknown values. Just set them as they are.
	        dict[lcname] = value;
	      }
	    }

	    return dict;
	  };
	})();
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.RecurIterator = (function() {

	  /**
	   * @classdesc
	   * An iterator for a single recurrence rule. This class usually doesn't have
	   * to be instanciated directly, the convenience method
	   * {@link ICAL.Recur#iterator} can be used.
	   *
	   * @description
	   * The options object may contain additional members when resuming iteration from a previous run
	   *
	   * @description
	   * The options object may contain additional members when resuming iteration
	   * from a previous run.
	   *
	   * @class
	   * @alias ICAL.RecurIterator
	   * @param {Object} options                The iterator options
	   * @param {ICAL.Recur} options.rule       The rule to iterate.
	   * @param {ICAL.Time} options.dtstart     The start date of the event.
	   * @param {Boolean=} options.initialized  When true, assume that options are
	   *        from a previously constructed iterator. Initialization will not be
	   *        repeated.
	   */
	  function icalrecur_iterator(options) {
	    this.fromData(options);
	  }

	  icalrecur_iterator.prototype = {

	    /**
	     * True when iteration is finished.
	     * @type {Boolean}
	     */
	    completed: false,

	    /**
	     * The rule that is being iterated
	     * @type {ICAL.Recur}
	     */
	    rule: null,

	    /**
	     * The start date of the event being iterated.
	     * @type {ICAL.Time}
	     */
	    dtstart: null,

	    /**
	     * The last occurrence that was returned from the
	     * {@link ICAL.RecurIterator#next} method.
	     * @type {ICAL.Time}
	     */
	    last: null,

	    /**
	     * The sequence number from the occurrence
	     * @type {Number}
	     */
	    occurrence_number: 0,

	    /**
	     * The indices used for the {@link ICAL.RecurIterator#by_data} object.
	     * @type {Object}
	     * @private
	     */
	    by_indices: null,

	    /**
	     * If true, the iterator has already been initialized
	     * @type {Boolean}
	     * @private
	     */
	    initialized: false,

	    /**
	     * The initializd by-data.
	     * @type {Object}
	     * @private
	     */
	    by_data: null,

	    /**
	     * The expanded yeardays
	     * @type {Array}
	     * @private
	     */
	    days: null,

	    /**
	     * The index in the {@link ICAL.RecurIterator#days} array.
	     * @type {Number}
	     * @private
	     */
	    days_index: 0,

	    /**
	     * Initialize the recurrence iterator from the passed data object. This
	     * method is usually not called directly, you can initialize the iterator
	     * through the constructor.
	     *
	     * @param {Object} options                The iterator options
	     * @param {ICAL.Recur} options.rule       The rule to iterate.
	     * @param {ICAL.Time} options.dtstart     The start date of the event.
	     * @param {Boolean=} options.initialized  When true, assume that options are
	     *        from a previously constructed iterator. Initialization will not be
	     *        repeated.
	     */
	    fromData: function(options) {
	      this.rule = ICAL.helpers.formatClassType(options.rule, ICAL.Recur);

	      if (!this.rule) {
	        throw new Error('iterator requires a (ICAL.Recur) rule');
	      }

	      this.dtstart = ICAL.helpers.formatClassType(options.dtstart, ICAL.Time);

	      if (!this.dtstart) {
	        throw new Error('iterator requires a (ICAL.Time) dtstart');
	      }

	      if (options.by_data) {
	        this.by_data = options.by_data;
	      } else {
	        this.by_data = ICAL.helpers.clone(this.rule.parts, true);
	      }

	      if (options.occurrence_number)
	        this.occurrence_number = options.occurrence_number;

	      this.days = options.days || [];
	      if (options.last) {
	        this.last = ICAL.helpers.formatClassType(options.last, ICAL.Time);
	      }

	      this.by_indices = options.by_indices;

	      if (!this.by_indices) {
	        this.by_indices = {
	          "BYSECOND": 0,
	          "BYMINUTE": 0,
	          "BYHOUR": 0,
	          "BYDAY": 0,
	          "BYMONTH": 0,
	          "BYWEEKNO": 0,
	          "BYMONTHDAY": 0
	        };
	      }

	      this.initialized = options.initialized || false;

	      if (!this.initialized) {
	        this.init();
	      }
	    },

	    /**
	     * Intialize the iterator
	     * @private
	     */
	    init: function icalrecur_iterator_init() {
	      this.initialized = true;
	      this.last = this.dtstart.clone();
	      var parts = this.by_data;

	      if ("BYDAY" in parts) {
	        // libical does this earlier when the rule is loaded, but we postpone to
	        // now so we can preserve the original order.
	        this.sort_byday_rules(parts.BYDAY);
	      }

	      // If the BYYEARDAY appares, no other date rule part may appear
	      if ("BYYEARDAY" in parts) {
	        if ("BYMONTH" in parts || "BYWEEKNO" in parts ||
	            "BYMONTHDAY" in parts || "BYDAY" in parts) {
	          throw new Error("Invalid BYYEARDAY rule");
	        }
	      }

	      // BYWEEKNO and BYMONTHDAY rule parts may not both appear
	      if ("BYWEEKNO" in parts && "BYMONTHDAY" in parts) {
	        throw new Error("BYWEEKNO does not fit to BYMONTHDAY");
	      }

	      // For MONTHLY recurrences (FREQ=MONTHLY) neither BYYEARDAY nor
	      // BYWEEKNO may appear.
	      if (this.rule.freq == "MONTHLY" &&
	          ("BYYEARDAY" in parts || "BYWEEKNO" in parts)) {
	        throw new Error("For MONTHLY recurrences neither BYYEARDAY nor BYWEEKNO may appear");
	      }

	      // For WEEKLY recurrences (FREQ=WEEKLY) neither BYMONTHDAY nor
	      // BYYEARDAY may appear.
	      if (this.rule.freq == "WEEKLY" &&
	          ("BYYEARDAY" in parts || "BYMONTHDAY" in parts)) {
	        throw new Error("For WEEKLY recurrences neither BYMONTHDAY nor BYYEARDAY may appear");
	      }

	      // BYYEARDAY may only appear in YEARLY rules
	      if (this.rule.freq != "YEARLY" && "BYYEARDAY" in parts) {
	        throw new Error("BYYEARDAY may only appear in YEARLY rules");
	      }

	      this.last.second = this.setup_defaults("BYSECOND", "SECONDLY", this.dtstart.second);
	      this.last.minute = this.setup_defaults("BYMINUTE", "MINUTELY", this.dtstart.minute);
	      this.last.hour = this.setup_defaults("BYHOUR", "HOURLY", this.dtstart.hour);
	      this.last.day = this.setup_defaults("BYMONTHDAY", "DAILY", this.dtstart.day);
	      this.last.month = this.setup_defaults("BYMONTH", "MONTHLY", this.dtstart.month);

	      if (this.rule.freq == "WEEKLY") {
	        if ("BYDAY" in parts) {
	          var bydayParts = this.ruleDayOfWeek(parts.BYDAY[0], this.rule.wkst);
	          var pos = bydayParts[0];
	          var dow = bydayParts[1];
	          var wkdy = dow - this.last.dayOfWeek(this.rule.wkst);
	          if ((this.last.dayOfWeek(this.rule.wkst) < dow && wkdy >= 0) || wkdy < 0) {
	            // Initial time is after first day of BYDAY data
	            this.last.day += wkdy;
	          }
	        } else {
	          var dayName = ICAL.Recur.numericDayToIcalDay(this.dtstart.dayOfWeek());
	          parts.BYDAY = [dayName];
	        }
	      }

	      if (this.rule.freq == "YEARLY") {
	        for (;;) {
	          this.expand_year_days(this.last.year);
	          if (this.days.length > 0) {
	            break;
	          }
	          this.increment_year(this.rule.interval);
	        }

	        this._nextByYearDay();
	      }

	      if (this.rule.freq == "MONTHLY" && this.has_by_data("BYDAY")) {
	        var tempLast = null;
	        var initLast = this.last.clone();
	        var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);

	        // Check every weekday in BYDAY with relative dow and pos.
	        for (var i in this.by_data.BYDAY) {
	          /* istanbul ignore if */
	          if (!this.by_data.BYDAY.hasOwnProperty(i)) {
	            continue;
	          }
	          this.last = initLast.clone();
	          var bydayParts = this.ruleDayOfWeek(this.by_data.BYDAY[i]);
	          var pos = bydayParts[0];
	          var dow = bydayParts[1];
	          var dayOfMonth = this.last.nthWeekDay(dow, pos);

	          // If |pos| >= 6, the byday is invalid for a monthly rule.
	          if (pos >= 6 || pos <= -6) {
	            throw new Error("Malformed values in BYDAY part");
	          }

	          // If a Byday with pos=+/-5 is not in the current month it
	          // must be searched in the next months.
	          if (dayOfMonth > daysInMonth || dayOfMonth <= 0) {
	            // Skip if we have already found a "last" in this month.
	            if (tempLast && tempLast.month == initLast.month) {
	              continue;
	            }
	            while (dayOfMonth > daysInMonth || dayOfMonth <= 0) {
	              this.increment_month();
	              daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
	              dayOfMonth = this.last.nthWeekDay(dow, pos);
	            }
	          }

	          this.last.day = dayOfMonth;
	          if (!tempLast || this.last.compare(tempLast) < 0) {
	            tempLast = this.last.clone();
	          }
	        }
	        this.last = tempLast.clone();

	        //XXX: This feels like a hack, but we need to initialize
	        //     the BYMONTHDAY case correctly and byDayAndMonthDay handles
	        //     this case. It accepts a special flag which will avoid incrementing
	        //     the initial value without the flag days that match the start time
	        //     would be missed.
	        if (this.has_by_data('BYMONTHDAY')) {
	          this._byDayAndMonthDay(true);
	        }

	        if (this.last.day > daysInMonth || this.last.day == 0) {
	          throw new Error("Malformed values in BYDAY part");
	        }

	      } else if (this.has_by_data("BYMONTHDAY")) {
	        if (this.last.day < 0) {
	          var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
	          this.last.day = daysInMonth + this.last.day + 1;
	        }
	      }

	    },

	    /**
	     * Retrieve the next occurrence from the iterator.
	     * @return {ICAL.Time}
	     */
	    next: function icalrecur_iterator_next() {
	      var before = (this.last ? this.last.clone() : null);

	      if ((this.rule.count && this.occurrence_number >= this.rule.count) ||
	          (this.rule.until && this.last.compare(this.rule.until) > 0)) {

	        //XXX: right now this is just a flag and has no impact
	        //     we can simplify the above case to check for completed later.
	        this.completed = true;

	        return null;
	      }

	      if (this.occurrence_number == 0 && this.last.compare(this.dtstart) >= 0) {
	        // First of all, give the instance that was initialized
	        this.occurrence_number++;
	        return this.last;
	      }


	      var valid;
	      do {
	        valid = 1;

	        switch (this.rule.freq) {
	        case "SECONDLY":
	          this.next_second();
	          break;
	        case "MINUTELY":
	          this.next_minute();
	          break;
	        case "HOURLY":
	          this.next_hour();
	          break;
	        case "DAILY":
	          this.next_day();
	          break;
	        case "WEEKLY":
	          this.next_week();
	          break;
	        case "MONTHLY":
	          valid = this.next_month();
	          break;
	        case "YEARLY":
	          this.next_year();
	          break;

	        default:
	          return null;
	        }
	      } while (!this.check_contracting_rules() ||
	               this.last.compare(this.dtstart) < 0 ||
	               !valid);

	      // TODO is this valid?
	      if (this.last.compare(before) == 0) {
	        throw new Error("Same occurrence found twice, protecting " +
	                        "you from death by recursion");
	      }

	      if (this.rule.until && this.last.compare(this.rule.until) > 0) {
	        this.completed = true;
	        return null;
	      } else {
	        this.occurrence_number++;
	        return this.last;
	      }
	    },

	    next_second: function next_second() {
	      return this.next_generic("BYSECOND", "SECONDLY", "second", "minute");
	    },

	    increment_second: function increment_second(inc) {
	      return this.increment_generic(inc, "second", 60, "minute");
	    },

	    next_minute: function next_minute() {
	      return this.next_generic("BYMINUTE", "MINUTELY",
	                               "minute", "hour", "next_second");
	    },

	    increment_minute: function increment_minute(inc) {
	      return this.increment_generic(inc, "minute", 60, "hour");
	    },

	    next_hour: function next_hour() {
	      return this.next_generic("BYHOUR", "HOURLY", "hour",
	                               "monthday", "next_minute");
	    },

	    increment_hour: function increment_hour(inc) {
	      this.increment_generic(inc, "hour", 24, "monthday");
	    },

	    next_day: function next_day() {
	      ("BYDAY" in this.by_data);
	      var this_freq = (this.rule.freq == "DAILY");

	      if (this.next_hour() == 0) {
	        return 0;
	      }

	      if (this_freq) {
	        this.increment_monthday(this.rule.interval);
	      } else {
	        this.increment_monthday(1);
	      }

	      return 0;
	    },

	    next_week: function next_week() {
	      var end_of_data = 0;

	      if (this.next_weekday_by_week() == 0) {
	        return end_of_data;
	      }

	      if (this.has_by_data("BYWEEKNO")) {
	        ++this.by_indices.BYWEEKNO;

	        if (this.by_indices.BYWEEKNO == this.by_data.BYWEEKNO.length) {
	          this.by_indices.BYWEEKNO = 0;
	          end_of_data = 1;
	        }

	        // HACK should be first month of the year
	        this.last.month = 1;
	        this.last.day = 1;

	        var week_no = this.by_data.BYWEEKNO[this.by_indices.BYWEEKNO];

	        this.last.day += 7 * week_no;

	        if (end_of_data) {
	          this.increment_year(1);
	        }
	      } else {
	        // Jump to the next week
	        this.increment_monthday(7 * this.rule.interval);
	      }

	      return end_of_data;
	    },

	    /**
	     * Normalize each by day rule for a given year/month.
	     * Takes into account ordering and negative rules
	     *
	     * @private
	     * @param {Number} year         Current year.
	     * @param {Number} month        Current month.
	     * @param {Array}  rules        Array of rules.
	     *
	     * @return {Array} sorted and normalized rules.
	     *                 Negative rules will be expanded to their
	     *                 correct positive values for easier processing.
	     */
	    normalizeByMonthDayRules: function(year, month, rules) {
	      var daysInMonth = ICAL.Time.daysInMonth(month, year);

	      // XXX: This is probably bad for performance to allocate
	      //      a new array for each month we scan, if possible
	      //      we should try to optimize this...
	      var newRules = [];

	      var ruleIdx = 0;
	      var len = rules.length;
	      var rule;

	      for (; ruleIdx < len; ruleIdx++) {
	        rule = rules[ruleIdx];

	        // if this rule falls outside of given
	        // month discard it.
	        if (Math.abs(rule) > daysInMonth) {
	          continue;
	        }

	        // negative case
	        if (rule < 0) {
	          // we add (not subtract it is a negative number)
	          // one from the rule because 1 === last day of month
	          rule = daysInMonth + (rule + 1);
	        } else if (rule === 0) {
	          // skip zero: it is invalid.
	          continue;
	        }

	        // only add unique items...
	        if (newRules.indexOf(rule) === -1) {
	          newRules.push(rule);
	        }

	      }

	      // unique and sort
	      return newRules.sort(function(a, b) { return a - b; });
	    },

	    /**
	     * NOTES:
	     * We are given a list of dates in the month (BYMONTHDAY) (23, etc..)
	     * Also we are given a list of days (BYDAY) (MO, 2SU, etc..) when
	     * both conditions match a given date (this.last.day) iteration stops.
	     *
	     * @private
	     * @param {Boolean=} isInit     When given true will not increment the
	     *                                current day (this.last).
	     */
	    _byDayAndMonthDay: function(isInit) {
	      var byMonthDay; // setup in initMonth
	      var byDay = this.by_data.BYDAY;

	      var date;
	      var dateIdx = 0;
	      var dateLen; // setup in initMonth
	      var dayLen = byDay.length;

	      // we are not valid by default
	      var dataIsValid = 0;

	      var daysInMonth;
	      var self = this;
	      // we need a copy of this, because a DateTime gets normalized
	      // automatically if the day is out of range. At some points we
	      // set the last day to 0 to start counting.
	      var lastDay = this.last.day;

	      function initMonth() {
	        daysInMonth = ICAL.Time.daysInMonth(
	          self.last.month, self.last.year
	        );

	        byMonthDay = self.normalizeByMonthDayRules(
	          self.last.year,
	          self.last.month,
	          self.by_data.BYMONTHDAY
	        );

	        dateLen = byMonthDay.length;

	        // For the case of more than one occurrence in one month
	        // we have to be sure to start searching after the last
	        // found date or at the last BYMONTHDAY, unless we are
	        // initializing the iterator because in this case we have
	        // to consider the last found date too.
	        while (byMonthDay[dateIdx] <= lastDay &&
	               !(isInit && byMonthDay[dateIdx] == lastDay) &&
	               dateIdx < dateLen - 1) {
	          dateIdx++;
	        }
	      }

	      function nextMonth() {
	        // since the day is incremented at the start
	        // of the loop below, we need to start at 0
	        lastDay = 0;
	        self.increment_month();
	        dateIdx = 0;
	        initMonth();
	      }

	      initMonth();

	      // should come after initMonth
	      if (isInit) {
	        lastDay -= 1;
	      }

	      // Use a counter to avoid an infinite loop with malformed rules.
	      // Stop checking after 4 years so we consider also a leap year.
	      var monthsCounter = 48;

	      while (!dataIsValid && monthsCounter) {
	        monthsCounter--;
	        // increment the current date. This is really
	        // important otherwise we may fall into the infinite
	        // loop trap. The initial date takes care of the case
	        // where the current date is the date we are looking
	        // for.
	        date = lastDay + 1;

	        if (date > daysInMonth) {
	          nextMonth();
	          continue;
	        }

	        // find next date
	        var next = byMonthDay[dateIdx++];

	        // this logic is dependant on the BYMONTHDAYS
	        // being in order (which is done by #normalizeByMonthDayRules)
	        if (next >= date) {
	          // if the next month day is in the future jump to it.
	          lastDay = next;
	        } else {
	          // in this case the 'next' monthday has past
	          // we must move to the month.
	          nextMonth();
	          continue;
	        }

	        // Now we can loop through the day rules to see
	        // if one matches the current month date.
	        for (var dayIdx = 0; dayIdx < dayLen; dayIdx++) {
	          var parts = this.ruleDayOfWeek(byDay[dayIdx]);
	          var pos = parts[0];
	          var dow = parts[1];

	          this.last.day = lastDay;
	          if (this.last.isNthWeekDay(dow, pos)) {
	            // when we find the valid one we can mark
	            // the conditions as met and break the loop.
	            // (Because we have this condition above
	            //  it will also break the parent loop).
	            dataIsValid = 1;
	            break;
	          }
	        }

	        // It is completely possible that the combination
	        // cannot be matched in the current month.
	        // When we reach the end of possible combinations
	        // in the current month we iterate to the next one.
	        // since dateIdx is incremented right after getting
	        // "next", we don't need dateLen -1 here.
	        if (!dataIsValid && dateIdx === dateLen) {
	          nextMonth();
	          continue;
	        }
	      }

	      if (monthsCounter <= 0) {
	        // Checked 4 years without finding a Byday that matches
	        // a Bymonthday. Maybe the rule is not correct.
	        throw new Error("Malformed values in BYDAY combined with BYMONTHDAY parts");
	      }


	      return dataIsValid;
	    },

	    next_month: function next_month() {
	      (this.rule.freq == "MONTHLY");
	      var data_valid = 1;

	      if (this.next_hour() == 0) {
	        return data_valid;
	      }

	      if (this.has_by_data("BYDAY") && this.has_by_data("BYMONTHDAY")) {
	        data_valid = this._byDayAndMonthDay();
	      } else if (this.has_by_data("BYDAY")) {
	        var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
	        var setpos = 0;
	        var setpos_total = 0;

	        if (this.has_by_data("BYSETPOS")) {
	          var last_day = this.last.day;
	          for (var day = 1; day <= daysInMonth; day++) {
	            this.last.day = day;
	            if (this.is_day_in_byday(this.last)) {
	              setpos_total++;
	              if (day <= last_day) {
	                setpos++;
	              }
	            }
	          }
	          this.last.day = last_day;
	        }

	        data_valid = 0;
	        for (var day = this.last.day + 1; day <= daysInMonth; day++) {
	          this.last.day = day;

	          if (this.is_day_in_byday(this.last)) {
	            if (!this.has_by_data("BYSETPOS") ||
	                this.check_set_position(++setpos) ||
	                this.check_set_position(setpos - setpos_total - 1)) {

	              data_valid = 1;
	              break;
	            }
	          }
	        }

	        if (day > daysInMonth) {
	          this.last.day = 1;
	          this.increment_month();

	          if (this.is_day_in_byday(this.last)) {
	            if (!this.has_by_data("BYSETPOS") || this.check_set_position(1)) {
	              data_valid = 1;
	            }
	          } else {
	            data_valid = 0;
	          }
	        }
	      } else if (this.has_by_data("BYMONTHDAY")) {
	        this.by_indices.BYMONTHDAY++;

	        if (this.by_indices.BYMONTHDAY >= this.by_data.BYMONTHDAY.length) {
	          this.by_indices.BYMONTHDAY = 0;
	          this.increment_month();
	        }

	        var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
	        var day = this.by_data.BYMONTHDAY[this.by_indices.BYMONTHDAY];

	        if (day < 0) {
	          day = daysInMonth + day + 1;
	        }

	        if (day > daysInMonth) {
	          this.last.day = 1;
	          data_valid = this.is_day_in_byday(this.last);
	        } else {
	          this.last.day = day;
	        }

	      } else {
	        this.increment_month();
	        var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
	        if (this.by_data.BYMONTHDAY[0] > daysInMonth) {
	          data_valid = 0;
	        } else {
	          this.last.day = this.by_data.BYMONTHDAY[0];
	        }
	      }

	      return data_valid;
	    },

	    next_weekday_by_week: function next_weekday_by_week() {
	      var end_of_data = 0;

	      if (this.next_hour() == 0) {
	        return end_of_data;
	      }

	      if (!this.has_by_data("BYDAY")) {
	        return 1;
	      }

	      for (;;) {
	        var tt = new ICAL.Time();
	        this.by_indices.BYDAY++;

	        if (this.by_indices.BYDAY == Object.keys(this.by_data.BYDAY).length) {
	          this.by_indices.BYDAY = 0;
	          end_of_data = 1;
	        }

	        var coded_day = this.by_data.BYDAY[this.by_indices.BYDAY];
	        var parts = this.ruleDayOfWeek(coded_day);
	        var dow = parts[1];

	        dow -= this.rule.wkst;

	        if (dow < 0) {
	          dow += 7;
	        }

	        tt.year = this.last.year;
	        tt.month = this.last.month;
	        tt.day = this.last.day;

	        var startOfWeek = tt.startDoyWeek(this.rule.wkst);

	        if (dow + startOfWeek < 1) {
	          // The selected date is in the previous year
	          if (!end_of_data) {
	            continue;
	          }
	        }

	        var next = ICAL.Time.fromDayOfYear(startOfWeek + dow,
	                                                  this.last.year);

	        /**
	         * The normalization horrors below are due to
	         * the fact that when the year/month/day changes
	         * it can effect the other operations that come after.
	         */
	        this.last.year = next.year;
	        this.last.month = next.month;
	        this.last.day = next.day;

	        return end_of_data;
	      }
	    },

	    next_year: function next_year() {

	      if (this.next_hour() == 0) {
	        return 0;
	      }

	      if (++this.days_index == this.days.length) {
	        this.days_index = 0;
	        do {
	          this.increment_year(this.rule.interval);
	          this.expand_year_days(this.last.year);
	        } while (this.days.length == 0);
	      }

	      this._nextByYearDay();

	      return 1;
	    },

	    _nextByYearDay: function _nextByYearDay() {
	        var doy = this.days[this.days_index];
	        var year = this.last.year;
	        if (doy < 1) {
	            // Time.fromDayOfYear(doy, year) indexes relative to the
	            // start of the given year. That is different from the
	            // semantics of BYYEARDAY where negative indexes are an
	            // offset from the end of the given year.
	            doy += 1;
	            year += 1;
	        }
	        var next = ICAL.Time.fromDayOfYear(doy, year);
	        this.last.day = next.day;
	        this.last.month = next.month;
	    },

	    /**
	     * @param dow (eg: '1TU', '-1MO')
	     * @param {ICAL.Time.weekDay=} aWeekStart The week start weekday
	     * @return [pos, numericDow] (eg: [1, 3]) numericDow is relative to aWeekStart
	     */
	    ruleDayOfWeek: function ruleDayOfWeek(dow, aWeekStart) {
	      var matches = dow.match(/([+-]?[0-9])?(MO|TU|WE|TH|FR|SA|SU)/);
	      if (matches) {
	        var pos = parseInt(matches[1] || 0, 10);
	        dow = ICAL.Recur.icalDayToNumericDay(matches[2], aWeekStart);
	        return [pos, dow];
	      } else {
	        return [0, 0];
	      }
	    },

	    next_generic: function next_generic(aRuleType, aInterval, aDateAttr,
	                                        aFollowingAttr, aPreviousIncr) {
	      var has_by_rule = (aRuleType in this.by_data);
	      var this_freq = (this.rule.freq == aInterval);
	      var end_of_data = 0;

	      if (aPreviousIncr && this[aPreviousIncr]() == 0) {
	        return end_of_data;
	      }

	      if (has_by_rule) {
	        this.by_indices[aRuleType]++;
	        this.by_indices[aRuleType];
	        var dta = this.by_data[aRuleType];

	        if (this.by_indices[aRuleType] == dta.length) {
	          this.by_indices[aRuleType] = 0;
	          end_of_data = 1;
	        }
	        this.last[aDateAttr] = dta[this.by_indices[aRuleType]];
	      } else if (this_freq) {
	        this["increment_" + aDateAttr](this.rule.interval);
	      }

	      if (has_by_rule && end_of_data && this_freq) {
	        this["increment_" + aFollowingAttr](1);
	      }

	      return end_of_data;
	    },

	    increment_monthday: function increment_monthday(inc) {
	      for (var i = 0; i < inc; i++) {
	        var daysInMonth = ICAL.Time.daysInMonth(this.last.month, this.last.year);
	        this.last.day++;

	        if (this.last.day > daysInMonth) {
	          this.last.day -= daysInMonth;
	          this.increment_month();
	        }
	      }
	    },

	    increment_month: function increment_month() {
	      this.last.day = 1;
	      if (this.has_by_data("BYMONTH")) {
	        this.by_indices.BYMONTH++;

	        if (this.by_indices.BYMONTH == this.by_data.BYMONTH.length) {
	          this.by_indices.BYMONTH = 0;
	          this.increment_year(1);
	        }

	        this.last.month = this.by_data.BYMONTH[this.by_indices.BYMONTH];
	      } else {
	        if (this.rule.freq == "MONTHLY") {
	          this.last.month += this.rule.interval;
	        } else {
	          this.last.month++;
	        }

	        this.last.month--;
	        var years = ICAL.helpers.trunc(this.last.month / 12);
	        this.last.month %= 12;
	        this.last.month++;

	        if (years != 0) {
	          this.increment_year(years);
	        }
	      }
	    },

	    increment_year: function increment_year(inc) {
	      this.last.year += inc;
	    },

	    increment_generic: function increment_generic(inc, aDateAttr,
	                                                  aFactor, aNextIncrement) {
	      this.last[aDateAttr] += inc;
	      var nextunit = ICAL.helpers.trunc(this.last[aDateAttr] / aFactor);
	      this.last[aDateAttr] %= aFactor;
	      if (nextunit != 0) {
	        this["increment_" + aNextIncrement](nextunit);
	      }
	    },

	    has_by_data: function has_by_data(aRuleType) {
	      return (aRuleType in this.rule.parts);
	    },

	    expand_year_days: function expand_year_days(aYear) {
	      var t = new ICAL.Time();
	      this.days = [];

	      // We need our own copy with a few keys set
	      var parts = {};
	      var rules = ["BYDAY", "BYWEEKNO", "BYMONTHDAY", "BYMONTH", "BYYEARDAY"];
	      for (var p in rules) {
	        /* istanbul ignore else */
	        if (rules.hasOwnProperty(p)) {
	          var part = rules[p];
	          if (part in this.rule.parts) {
	            parts[part] = this.rule.parts[part];
	          }
	        }
	      }

	      if ("BYMONTH" in parts && "BYWEEKNO" in parts) {
	        var valid = 1;
	        var validWeeks = {};
	        t.year = aYear;
	        t.isDate = true;

	        for (var monthIdx = 0; monthIdx < this.by_data.BYMONTH.length; monthIdx++) {
	          var month = this.by_data.BYMONTH[monthIdx];
	          t.month = month;
	          t.day = 1;
	          var first_week = t.weekNumber(this.rule.wkst);
	          t.day = ICAL.Time.daysInMonth(month, aYear);
	          var last_week = t.weekNumber(this.rule.wkst);
	          for (monthIdx = first_week; monthIdx < last_week; monthIdx++) {
	            validWeeks[monthIdx] = 1;
	          }
	        }

	        for (var weekIdx = 0; weekIdx < this.by_data.BYWEEKNO.length && valid; weekIdx++) {
	          var weekno = this.by_data.BYWEEKNO[weekIdx];
	          if (weekno < 52) {
	            valid &= validWeeks[weekIdx];
	          } else {
	            valid = 0;
	          }
	        }

	        if (valid) {
	          delete parts.BYMONTH;
	        } else {
	          delete parts.BYWEEKNO;
	        }
	      }

	      var partCount = Object.keys(parts).length;

	      if (partCount == 0) {
	        var t1 = this.dtstart.clone();
	        t1.year = this.last.year;
	        this.days.push(t1.dayOfYear());
	      } else if (partCount == 1 && "BYMONTH" in parts) {
	        for (var monthkey in this.by_data.BYMONTH) {
	          /* istanbul ignore if */
	          if (!this.by_data.BYMONTH.hasOwnProperty(monthkey)) {
	            continue;
	          }
	          var t2 = this.dtstart.clone();
	          t2.year = aYear;
	          t2.month = this.by_data.BYMONTH[monthkey];
	          t2.isDate = true;
	          this.days.push(t2.dayOfYear());
	        }
	      } else if (partCount == 1 && "BYMONTHDAY" in parts) {
	        for (var monthdaykey in this.by_data.BYMONTHDAY) {
	          /* istanbul ignore if */
	          if (!this.by_data.BYMONTHDAY.hasOwnProperty(monthdaykey)) {
	            continue;
	          }
	          var t3 = this.dtstart.clone();
	          var day_ = this.by_data.BYMONTHDAY[monthdaykey];
	          if (day_ < 0) {
	            var daysInMonth = ICAL.Time.daysInMonth(t3.month, aYear);
	            day_ = day_ + daysInMonth + 1;
	          }
	          t3.day = day_;
	          t3.year = aYear;
	          t3.isDate = true;
	          this.days.push(t3.dayOfYear());
	        }
	      } else if (partCount == 2 &&
	                 "BYMONTHDAY" in parts &&
	                 "BYMONTH" in parts) {
	        for (var monthkey in this.by_data.BYMONTH) {
	          /* istanbul ignore if */
	          if (!this.by_data.BYMONTH.hasOwnProperty(monthkey)) {
	            continue;
	          }
	          var month_ = this.by_data.BYMONTH[monthkey];
	          var daysInMonth = ICAL.Time.daysInMonth(month_, aYear);
	          for (var monthdaykey in this.by_data.BYMONTHDAY) {
	            /* istanbul ignore if */
	            if (!this.by_data.BYMONTHDAY.hasOwnProperty(monthdaykey)) {
	              continue;
	            }
	            var day_ = this.by_data.BYMONTHDAY[monthdaykey];
	            if (day_ < 0) {
	              day_ = day_ + daysInMonth + 1;
	            }
	            t.day = day_;
	            t.month = month_;
	            t.year = aYear;
	            t.isDate = true;

	            this.days.push(t.dayOfYear());
	          }
	        }
	      } else if (partCount == 1 && "BYWEEKNO" in parts) ; else if (partCount == 2 &&
	                 "BYWEEKNO" in parts &&
	                 "BYMONTHDAY" in parts) ; else if (partCount == 1 && "BYDAY" in parts) {
	        this.days = this.days.concat(this.expand_by_day(aYear));
	      } else if (partCount == 2 && "BYDAY" in parts && "BYMONTH" in parts) {
	        for (var monthkey in this.by_data.BYMONTH) {
	          /* istanbul ignore if */
	          if (!this.by_data.BYMONTH.hasOwnProperty(monthkey)) {
	            continue;
	          }
	          var month = this.by_data.BYMONTH[monthkey];
	          var daysInMonth = ICAL.Time.daysInMonth(month, aYear);

	          t.year = aYear;
	          t.month = this.by_data.BYMONTH[monthkey];
	          t.day = 1;
	          t.isDate = true;

	          var first_dow = t.dayOfWeek();
	          var doy_offset = t.dayOfYear() - 1;

	          t.day = daysInMonth;
	          var last_dow = t.dayOfWeek();

	          if (this.has_by_data("BYSETPOS")) {
	            var by_month_day = [];
	            for (var day = 1; day <= daysInMonth; day++) {
	              t.day = day;
	              if (this.is_day_in_byday(t)) {
	                by_month_day.push(day);
	              }
	            }

	            for (var spIndex = 0; spIndex < by_month_day.length; spIndex++) {
	              if (this.check_set_position(spIndex + 1) ||
	                  this.check_set_position(spIndex - by_month_day.length)) {
	                this.days.push(doy_offset + by_month_day[spIndex]);
	              }
	            }
	          } else {
	            for (var daycodedkey in this.by_data.BYDAY) {
	              /* istanbul ignore if */
	              if (!this.by_data.BYDAY.hasOwnProperty(daycodedkey)) {
	                continue;
	              }
	              var coded_day = this.by_data.BYDAY[daycodedkey];
	              var bydayParts = this.ruleDayOfWeek(coded_day);
	              var pos = bydayParts[0];
	              var dow = bydayParts[1];
	              var month_day;

	              var first_matching_day = ((dow + 7 - first_dow) % 7) + 1;
	              var last_matching_day = daysInMonth - ((last_dow + 7 - dow) % 7);

	              if (pos == 0) {
	                for (var day = first_matching_day; day <= daysInMonth; day += 7) {
	                  this.days.push(doy_offset + day);
	                }
	              } else if (pos > 0) {
	                month_day = first_matching_day + (pos - 1) * 7;

	                if (month_day <= daysInMonth) {
	                  this.days.push(doy_offset + month_day);
	                }
	              } else {
	                month_day = last_matching_day + (pos + 1) * 7;

	                if (month_day > 0) {
	                  this.days.push(doy_offset + month_day);
	                }
	              }
	            }
	          }
	        }
	        // Return dates in order of occurrence (1,2,3,...) instead
	        // of by groups of weekdays (1,8,15,...,2,9,16,...).
	        this.days.sort(function(a, b) { return a - b; }); // Comparator function allows to sort numbers.
	      } else if (partCount == 2 && "BYDAY" in parts && "BYMONTHDAY" in parts) {
	        var expandedDays = this.expand_by_day(aYear);

	        for (var daykey in expandedDays) {
	          /* istanbul ignore if */
	          if (!expandedDays.hasOwnProperty(daykey)) {
	            continue;
	          }
	          var day = expandedDays[daykey];
	          var tt = ICAL.Time.fromDayOfYear(day, aYear);
	          if (this.by_data.BYMONTHDAY.indexOf(tt.day) >= 0) {
	            this.days.push(day);
	          }
	        }
	      } else if (partCount == 3 &&
	                 "BYDAY" in parts &&
	                 "BYMONTHDAY" in parts &&
	                 "BYMONTH" in parts) {
	        var expandedDays = this.expand_by_day(aYear);

	        for (var daykey in expandedDays) {
	          /* istanbul ignore if */
	          if (!expandedDays.hasOwnProperty(daykey)) {
	            continue;
	          }
	          var day = expandedDays[daykey];
	          var tt = ICAL.Time.fromDayOfYear(day, aYear);

	          if (this.by_data.BYMONTH.indexOf(tt.month) >= 0 &&
	              this.by_data.BYMONTHDAY.indexOf(tt.day) >= 0) {
	            this.days.push(day);
	          }
	        }
	      } else if (partCount == 2 && "BYDAY" in parts && "BYWEEKNO" in parts) {
	        var expandedDays = this.expand_by_day(aYear);

	        for (var daykey in expandedDays) {
	          /* istanbul ignore if */
	          if (!expandedDays.hasOwnProperty(daykey)) {
	            continue;
	          }
	          var day = expandedDays[daykey];
	          var tt = ICAL.Time.fromDayOfYear(day, aYear);
	          var weekno = tt.weekNumber(this.rule.wkst);

	          if (this.by_data.BYWEEKNO.indexOf(weekno)) {
	            this.days.push(day);
	          }
	        }
	      } else if (partCount == 3 &&
	                 "BYDAY" in parts &&
	                 "BYWEEKNO" in parts &&
	                 "BYMONTHDAY" in parts) ; else if (partCount == 1 && "BYYEARDAY" in parts) {
	        this.days = this.days.concat(this.by_data.BYYEARDAY);
	      } else {
	        this.days = [];
	      }
	      return 0;
	    },

	    expand_by_day: function expand_by_day(aYear) {

	      var days_list = [];
	      var tmp = this.last.clone();

	      tmp.year = aYear;
	      tmp.month = 1;
	      tmp.day = 1;
	      tmp.isDate = true;

	      var start_dow = tmp.dayOfWeek();

	      tmp.month = 12;
	      tmp.day = 31;
	      tmp.isDate = true;

	      var end_dow = tmp.dayOfWeek();
	      var end_year_day = tmp.dayOfYear();

	      for (var daykey in this.by_data.BYDAY) {
	        /* istanbul ignore if */
	        if (!this.by_data.BYDAY.hasOwnProperty(daykey)) {
	          continue;
	        }
	        var day = this.by_data.BYDAY[daykey];
	        var parts = this.ruleDayOfWeek(day);
	        var pos = parts[0];
	        var dow = parts[1];

	        if (pos == 0) {
	          var tmp_start_doy = ((dow + 7 - start_dow) % 7) + 1;

	          for (var doy = tmp_start_doy; doy <= end_year_day; doy += 7) {
	            days_list.push(doy);
	          }

	        } else if (pos > 0) {
	          var first;
	          if (dow >= start_dow) {
	            first = dow - start_dow + 1;
	          } else {
	            first = dow - start_dow + 8;
	          }

	          days_list.push(first + (pos - 1) * 7);
	        } else {
	          var last;
	          pos = -pos;

	          if (dow <= end_dow) {
	            last = end_year_day - end_dow + dow;
	          } else {
	            last = end_year_day - end_dow + dow - 7;
	          }

	          days_list.push(last - (pos - 1) * 7);
	        }
	      }
	      return days_list;
	    },

	    is_day_in_byday: function is_day_in_byday(tt) {
	      for (var daykey in this.by_data.BYDAY) {
	        /* istanbul ignore if */
	        if (!this.by_data.BYDAY.hasOwnProperty(daykey)) {
	          continue;
	        }
	        var day = this.by_data.BYDAY[daykey];
	        var parts = this.ruleDayOfWeek(day);
	        var pos = parts[0];
	        var dow = parts[1];
	        var this_dow = tt.dayOfWeek();

	        if ((pos == 0 && dow == this_dow) ||
	            (tt.nthWeekDay(dow, pos) == tt.day)) {
	          return 1;
	        }
	      }

	      return 0;
	    },

	    /**
	     * Checks if given value is in BYSETPOS.
	     *
	     * @private
	     * @param {Numeric} aPos position to check for.
	     * @return {Boolean} false unless BYSETPOS rules exist
	     *                   and the given value is present in rules.
	     */
	    check_set_position: function check_set_position(aPos) {
	      if (this.has_by_data('BYSETPOS')) {
	        var idx = this.by_data.BYSETPOS.indexOf(aPos);
	        // negative numbers are not false-y
	        return idx !== -1;
	      }
	      return false;
	    },

	    sort_byday_rules: function icalrecur_sort_byday_rules(aRules) {
	      for (var i = 0; i < aRules.length; i++) {
	        for (var j = 0; j < i; j++) {
	          var one = this.ruleDayOfWeek(aRules[j], this.rule.wkst)[1];
	          var two = this.ruleDayOfWeek(aRules[i], this.rule.wkst)[1];

	          if (one > two) {
	            var tmp = aRules[i];
	            aRules[i] = aRules[j];
	            aRules[j] = tmp;
	          }
	        }
	      }
	    },

	    check_contract_restriction: function check_contract_restriction(aRuleType, v) {
	      var indexMapValue = icalrecur_iterator._indexMap[aRuleType];
	      var ruleMapValue = icalrecur_iterator._expandMap[this.rule.freq][indexMapValue];
	      var pass = false;

	      if (aRuleType in this.by_data &&
	          ruleMapValue == icalrecur_iterator.CONTRACT) {

	        var ruleType = this.by_data[aRuleType];

	        for (var bydatakey in ruleType) {
	          /* istanbul ignore else */
	          if (ruleType.hasOwnProperty(bydatakey)) {
	            if (ruleType[bydatakey] == v) {
	              pass = true;
	              break;
	            }
	          }
	        }
	      } else {
	        // Not a contracting byrule or has no data, test passes
	        pass = true;
	      }
	      return pass;
	    },

	    check_contracting_rules: function check_contracting_rules() {
	      var dow = this.last.dayOfWeek();
	      var weekNo = this.last.weekNumber(this.rule.wkst);
	      var doy = this.last.dayOfYear();

	      return (this.check_contract_restriction("BYSECOND", this.last.second) &&
	              this.check_contract_restriction("BYMINUTE", this.last.minute) &&
	              this.check_contract_restriction("BYHOUR", this.last.hour) &&
	              this.check_contract_restriction("BYDAY", ICAL.Recur.numericDayToIcalDay(dow)) &&
	              this.check_contract_restriction("BYWEEKNO", weekNo) &&
	              this.check_contract_restriction("BYMONTHDAY", this.last.day) &&
	              this.check_contract_restriction("BYMONTH", this.last.month) &&
	              this.check_contract_restriction("BYYEARDAY", doy));
	    },

	    setup_defaults: function setup_defaults(aRuleType, req, deftime) {
	      var indexMapValue = icalrecur_iterator._indexMap[aRuleType];
	      var ruleMapValue = icalrecur_iterator._expandMap[this.rule.freq][indexMapValue];

	      if (ruleMapValue != icalrecur_iterator.CONTRACT) {
	        if (!(aRuleType in this.by_data)) {
	          this.by_data[aRuleType] = [deftime];
	        }
	        if (this.rule.freq != req) {
	          return this.by_data[aRuleType][0];
	        }
	      }
	      return deftime;
	    },

	    /**
	     * Convert iterator into a serialize-able object.  Will preserve current
	     * iteration sequence to ensure the seamless continuation of the recurrence
	     * rule.
	     * @return {Object}
	     */
	    toJSON: function() {
	      var result = Object.create(null);

	      result.initialized = this.initialized;
	      result.rule = this.rule.toJSON();
	      result.dtstart = this.dtstart.toJSON();
	      result.by_data = this.by_data;
	      result.days = this.days;
	      result.last = this.last.toJSON();
	      result.by_indices = this.by_indices;
	      result.occurrence_number = this.occurrence_number;

	      return result;
	    }
	  };

	  icalrecur_iterator._indexMap = {
	    "BYSECOND": 0,
	    "BYMINUTE": 1,
	    "BYHOUR": 2,
	    "BYDAY": 3,
	    "BYMONTHDAY": 4,
	    "BYYEARDAY": 5,
	    "BYWEEKNO": 6,
	    "BYMONTH": 7,
	    "BYSETPOS": 8
	  };

	  icalrecur_iterator._expandMap = {
	    "SECONDLY": [1, 1, 1, 1, 1, 1, 1, 1],
	    "MINUTELY": [2, 1, 1, 1, 1, 1, 1, 1],
	    "HOURLY": [2, 2, 1, 1, 1, 1, 1, 1],
	    "DAILY": [2, 2, 2, 1, 1, 1, 1, 1],
	    "WEEKLY": [2, 2, 2, 2, 3, 3, 1, 1],
	    "MONTHLY": [2, 2, 2, 2, 2, 3, 3, 1],
	    "YEARLY": [2, 2, 2, 2, 2, 2, 2, 2]
	  };
	  icalrecur_iterator.UNKNOWN = 0;
	  icalrecur_iterator.CONTRACT = 1;
	  icalrecur_iterator.EXPAND = 2;
	  icalrecur_iterator.ILLEGAL = 3;

	  return icalrecur_iterator;

	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.RecurExpansion = (function() {
	  function formatTime(item) {
	    return ICAL.helpers.formatClassType(item, ICAL.Time);
	  }

	  function compareTime(a, b) {
	    return a.compare(b);
	  }

	  function isRecurringComponent(comp) {
	    return comp.hasProperty('rdate') ||
	           comp.hasProperty('rrule') ||
	           comp.hasProperty('recurrence-id');
	  }

	  /**
	   * @classdesc
	   * Primary class for expanding recurring rules.  Can take multiple rrules,
	   * rdates, exdate(s) and iterate (in order) over each next occurrence.
	   *
	   * Once initialized this class can also be serialized saved and continue
	   * iteration from the last point.
	   *
	   * NOTE: it is intended that this class is to be used
	   *       with ICAL.Event which handles recurrence exceptions.
	   *
	   * @example
	   * // assuming event is a parsed ical component
	   * var event;
	   *
	   * var expand = new ICAL.RecurExpansion({
	   *   component: event,
	   *   dtstart: event.getFirstPropertyValue('dtstart')
	   * });
	   *
	   * // remember there are infinite rules
	   * // so it is a good idea to limit the scope
	   * // of the iterations then resume later on.
	   *
	   * // next is always an ICAL.Time or null
	   * var next;
	   *
	   * while (someCondition && (next = expand.next())) {
	   *   // do something with next
	   * }
	   *
	   * // save instance for later
	   * var json = JSON.stringify(expand);
	   *
	   * //...
	   *
	   * // NOTE: if the component's properties have
	   * //       changed you will need to rebuild the
	   * //       class and start over. This only works
	   * //       when the component's recurrence info is the same.
	   * var expand = new ICAL.RecurExpansion(JSON.parse(json));
	   *
	   * @description
	   * The options object can be filled with the specified initial values. It can
	   * also contain additional members, as a result of serializing a previous
	   * expansion state, as shown in the example.
	   *
	   * @class
	   * @alias ICAL.RecurExpansion
	   * @param {Object} options
	   *        Recurrence expansion options
	   * @param {ICAL.Time} options.dtstart
	   *        Start time of the event
	   * @param {ICAL.Component=} options.component
	   *        Component for expansion, required if not resuming.
	   */
	  function RecurExpansion(options) {
	    this.ruleDates = [];
	    this.exDates = [];
	    this.fromData(options);
	  }

	  RecurExpansion.prototype = {
	    /**
	     * True when iteration is fully completed.
	     * @type {Boolean}
	     */
	    complete: false,

	    /**
	     * Array of rrule iterators.
	     *
	     * @type {ICAL.RecurIterator[]}
	     * @private
	     */
	    ruleIterators: null,

	    /**
	     * Array of rdate instances.
	     *
	     * @type {ICAL.Time[]}
	     * @private
	     */
	    ruleDates: null,

	    /**
	     * Array of exdate instances.
	     *
	     * @type {ICAL.Time[]}
	     * @private
	     */
	    exDates: null,

	    /**
	     * Current position in ruleDates array.
	     * @type {Number}
	     * @private
	     */
	    ruleDateInc: 0,

	    /**
	     * Current position in exDates array
	     * @type {Number}
	     * @private
	     */
	    exDateInc: 0,

	    /**
	     * Current negative date.
	     *
	     * @type {ICAL.Time}
	     * @private
	     */
	    exDate: null,

	    /**
	     * Current additional date.
	     *
	     * @type {ICAL.Time}
	     * @private
	     */
	    ruleDate: null,

	    /**
	     * Start date of recurring rules.
	     *
	     * @type {ICAL.Time}
	     */
	    dtstart: null,

	    /**
	     * Last expanded time
	     *
	     * @type {ICAL.Time}
	     */
	    last: null,

	    /**
	     * Initialize the recurrence expansion from the data object. The options
	     * object may also contain additional members, see the
	     * {@link ICAL.RecurExpansion constructor} for more details.
	     *
	     * @param {Object} options
	     *        Recurrence expansion options
	     * @param {ICAL.Time} options.dtstart
	     *        Start time of the event
	     * @param {ICAL.Component=} options.component
	     *        Component for expansion, required if not resuming.
	     */
	    fromData: function(options) {
	      var start = ICAL.helpers.formatClassType(options.dtstart, ICAL.Time);

	      if (!start) {
	        throw new Error('.dtstart (ICAL.Time) must be given');
	      } else {
	        this.dtstart = start;
	      }

	      if (options.component) {
	        this._init(options.component);
	      } else {
	        this.last = formatTime(options.last) || start.clone();

	        if (!options.ruleIterators) {
	          throw new Error('.ruleIterators or .component must be given');
	        }

	        this.ruleIterators = options.ruleIterators.map(function(item) {
	          return ICAL.helpers.formatClassType(item, ICAL.RecurIterator);
	        });

	        this.ruleDateInc = options.ruleDateInc;
	        this.exDateInc = options.exDateInc;

	        if (options.ruleDates) {
	          this.ruleDates = options.ruleDates.map(formatTime);
	          this.ruleDate = this.ruleDates[this.ruleDateInc];
	        }

	        if (options.exDates) {
	          this.exDates = options.exDates.map(formatTime);
	          this.exDate = this.exDates[this.exDateInc];
	        }

	        if (typeof(options.complete) !== 'undefined') {
	          this.complete = options.complete;
	        }
	      }
	    },

	    /**
	     * Retrieve the next occurrence in the series.
	     * @return {ICAL.Time}
	     */
	    next: function() {
	      var iter;
	      var next;
	      var compare;

	      var maxTries = 500;
	      var currentTry = 0;

	      while (true) {
	        if (currentTry++ > maxTries) {
	          throw new Error(
	            'max tries have occured, rule may be impossible to forfill.'
	          );
	        }

	        next = this.ruleDate;
	        iter = this._nextRecurrenceIter(this.last);

	        // no more matches
	        // because we increment the rule day or rule
	        // _after_ we choose a value this should be
	        // the only spot where we need to worry about the
	        // end of events.
	        if (!next && !iter) {
	          // there are no more iterators or rdates
	          this.complete = true;
	          break;
	        }

	        // no next rule day or recurrence rule is first.
	        if (!next || (iter && next.compare(iter.last) > 0)) {
	          // must be cloned, recur will reuse the time element.
	          next = iter.last.clone();
	          // move to next so we can continue
	          iter.next();
	        }

	        // if the ruleDate is still next increment it.
	        if (this.ruleDate === next) {
	          this._nextRuleDay();
	        }

	        this.last = next;

	        // check the negative rules
	        if (this.exDate) {
	          compare = this.exDate.compare(this.last);

	          if (compare < 0) {
	            this._nextExDay();
	          }

	          // if the current rule is excluded skip it.
	          if (compare === 0) {
	            this._nextExDay();
	            continue;
	          }
	        }

	        //XXX: The spec states that after we resolve the final
	        //     list of dates we execute exdate this seems somewhat counter
	        //     intuitive to what I have seen most servers do so for now
	        //     I exclude based on the original date not the one that may
	        //     have been modified by the exception.
	        return this.last;
	      }
	    },

	    /**
	     * Converts object into a serialize-able format. This format can be passed
	     * back into the expansion to resume iteration.
	     * @return {Object}
	     */
	    toJSON: function() {
	      function toJSON(item) {
	        return item.toJSON();
	      }

	      var result = Object.create(null);
	      result.ruleIterators = this.ruleIterators.map(toJSON);

	      if (this.ruleDates) {
	        result.ruleDates = this.ruleDates.map(toJSON);
	      }

	      if (this.exDates) {
	        result.exDates = this.exDates.map(toJSON);
	      }

	      result.ruleDateInc = this.ruleDateInc;
	      result.exDateInc = this.exDateInc;
	      result.last = this.last.toJSON();
	      result.dtstart = this.dtstart.toJSON();
	      result.complete = this.complete;

	      return result;
	    },

	    /**
	     * Extract all dates from the properties in the given component. The
	     * properties will be filtered by the property name.
	     *
	     * @private
	     * @param {ICAL.Component} component        The component to search in
	     * @param {String} propertyName             The property name to search for
	     * @return {ICAL.Time[]}                    The extracted dates.
	     */
	    _extractDates: function(component, propertyName) {
	      function handleProp(prop) {
	        idx = ICAL.helpers.binsearchInsert(
	          result,
	          prop,
	          compareTime
	        );

	        // ordered insert
	        result.splice(idx, 0, prop);
	      }

	      var result = [];
	      var props = component.getAllProperties(propertyName);
	      var len = props.length;
	      var i = 0;

	      var idx;

	      for (; i < len; i++) {
	        props[i].getValues().forEach(handleProp);
	      }

	      return result;
	    },

	    /**
	     * Initialize the recurrence expansion.
	     *
	     * @private
	     * @param {ICAL.Component} component    The component to initialize from.
	     */
	    _init: function(component) {
	      this.ruleIterators = [];

	      this.last = this.dtstart.clone();

	      // to provide api consistency non-recurring
	      // events can also use the iterator though it will
	      // only return a single time.
	      if (!isRecurringComponent(component)) {
	        this.ruleDate = this.last.clone();
	        this.complete = true;
	        return;
	      }

	      if (component.hasProperty('rdate')) {
	        this.ruleDates = this._extractDates(component, 'rdate');

	        // special hack for cases where first rdate is prior
	        // to the start date. We only check for the first rdate.
	        // This is mostly for google's crazy recurring date logic
	        // (contacts birthdays).
	        if ((this.ruleDates[0]) &&
	            (this.ruleDates[0].compare(this.dtstart) < 0)) {

	          this.ruleDateInc = 0;
	          this.last = this.ruleDates[0].clone();
	        } else {
	          this.ruleDateInc = ICAL.helpers.binsearchInsert(
	            this.ruleDates,
	            this.last,
	            compareTime
	          );
	        }

	        this.ruleDate = this.ruleDates[this.ruleDateInc];
	      }

	      if (component.hasProperty('rrule')) {
	        var rules = component.getAllProperties('rrule');
	        var i = 0;
	        var len = rules.length;

	        var rule;
	        var iter;

	        for (; i < len; i++) {
	          rule = rules[i].getFirstValue();
	          iter = rule.iterator(this.dtstart);
	          this.ruleIterators.push(iter);

	          // increment to the next occurrence so future
	          // calls to next return times beyond the initial iteration.
	          // XXX: I find this suspicious might be a bug?
	          iter.next();
	        }
	      }

	      if (component.hasProperty('exdate')) {
	        this.exDates = this._extractDates(component, 'exdate');
	        // if we have a .last day we increment the index to beyond it.
	        this.exDateInc = ICAL.helpers.binsearchInsert(
	          this.exDates,
	          this.last,
	          compareTime
	        );

	        this.exDate = this.exDates[this.exDateInc];
	      }
	    },

	    /**
	     * Advance to the next exdate
	     * @private
	     */
	    _nextExDay: function() {
	      this.exDate = this.exDates[++this.exDateInc];
	    },

	    /**
	     * Advance to the next rule date
	     * @private
	     */
	    _nextRuleDay: function() {
	      this.ruleDate = this.ruleDates[++this.ruleDateInc];
	    },

	    /**
	     * Find and return the recurrence rule with the most recent event and
	     * return it.
	     *
	     * @private
	     * @return {?ICAL.RecurIterator}    Found iterator.
	     */
	    _nextRecurrenceIter: function() {
	      var iters = this.ruleIterators;

	      if (iters.length === 0) {
	        return null;
	      }

	      var len = iters.length;
	      var iter;
	      var iterTime;
	      var iterIdx = 0;
	      var chosenIter;

	      // loop through each iterator
	      for (; iterIdx < len; iterIdx++) {
	        iter = iters[iterIdx];
	        iterTime = iter.last;

	        // if iteration is complete
	        // then we must exclude it from
	        // the search and remove it.
	        if (iter.completed) {
	          len--;
	          if (iterIdx !== 0) {
	            iterIdx--;
	          }
	          iters.splice(iterIdx, 1);
	          continue;
	        }

	        // find the most recent possible choice
	        if (!chosenIter || chosenIter.last.compare(iterTime) > 0) {
	          // that iterator is saved
	          chosenIter = iter;
	        }
	      }

	      // the chosen iterator is returned but not mutated
	      // this iterator contains the most recent event.
	      return chosenIter;
	    }
	  };

	  return RecurExpansion;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.Event = (function() {

	  /**
	   * @classdesc
	   * ICAL.js is organized into multiple layers. The bottom layer is a raw jCal
	   * object, followed by the component/property layer. The highest level is the
	   * event representation, which this class is part of. See the
	   * {@tutorial layers} guide for more details.
	   *
	   * @class
	   * @alias ICAL.Event
	   * @param {ICAL.Component=} component         The ICAL.Component to base this event on
	   * @param {Object} options                    Options for this event
	   * @param {Boolean} options.strictExceptions
	   *          When true, will verify exceptions are related by their UUID
	   * @param {Array<ICAL.Component|ICAL.Event>} options.exceptions
	   *          Exceptions to this event, either as components or events. If not
	   *            specified exceptions will automatically be set in relation of
	   *            component's parent
	   */
	  function Event(component, options) {
	    if (!(component instanceof ICAL.Component)) {
	      options = component;
	      component = null;
	    }

	    if (component) {
	      this.component = component;
	    } else {
	      this.component = new ICAL.Component('vevent');
	    }

	    this._rangeExceptionCache = Object.create(null);
	    this.exceptions = Object.create(null);
	    this.rangeExceptions = [];

	    if (options && options.strictExceptions) {
	      this.strictExceptions = options.strictExceptions;
	    }

	    if (options && options.exceptions) {
	      options.exceptions.forEach(this.relateException, this);
	    } else if (this.component.parent && !this.isRecurrenceException()) {
	      this.component.parent.getAllSubcomponents('vevent').forEach(function(event) {
	        if (event.hasProperty('recurrence-id')) {
	          this.relateException(event);
	        }
	      }, this);
	    }
	  }

	  Event.prototype = {

	    THISANDFUTURE: 'THISANDFUTURE',

	    /**
	     * List of related event exceptions.
	     *
	     * @type {ICAL.Event[]}
	     */
	    exceptions: null,

	    /**
	     * When true, will verify exceptions are related by their UUID.
	     *
	     * @type {Boolean}
	     */
	    strictExceptions: false,

	    /**
	     * Relates a given event exception to this object.  If the given component
	     * does not share the UID of this event it cannot be related and will throw
	     * an exception.
	     *
	     * If this component is an exception it cannot have other exceptions
	     * related to it.
	     *
	     * @param {ICAL.Component|ICAL.Event} obj       Component or event
	     */
	    relateException: function(obj) {
	      if (this.isRecurrenceException()) {
	        throw new Error('cannot relate exception to exceptions');
	      }

	      if (obj instanceof ICAL.Component) {
	        obj = new ICAL.Event(obj);
	      }

	      if (this.strictExceptions && obj.uid !== this.uid) {
	        throw new Error('attempted to relate unrelated exception');
	      }

	      var id = obj.recurrenceId.toString();

	      // we don't sort or manage exceptions directly
	      // here the recurrence expander handles that.
	      this.exceptions[id] = obj;

	      // index RANGE=THISANDFUTURE exceptions so we can
	      // look them up later in getOccurrenceDetails.
	      if (obj.modifiesFuture()) {
	        var item = [
	          obj.recurrenceId.toUnixTime(), id
	        ];

	        // we keep them sorted so we can find the nearest
	        // value later on...
	        var idx = ICAL.helpers.binsearchInsert(
	          this.rangeExceptions,
	          item,
	          compareRangeException
	        );

	        this.rangeExceptions.splice(idx, 0, item);
	      }
	    },

	    /**
	     * Checks if this record is an exception and has the RANGE=THISANDFUTURE
	     * value.
	     *
	     * @return {Boolean}        True, when exception is within range
	     */
	    modifiesFuture: function() {
	      if (!this.component.hasProperty('recurrence-id')) {
	        return false;
	      }

	      var range = this.component.getFirstProperty('recurrence-id').getParameter('range');
	      return range === this.THISANDFUTURE;
	    },

	    /**
	     * Finds the range exception nearest to the given date.
	     *
	     * @param {ICAL.Time} time usually an occurrence time of an event
	     * @return {?ICAL.Event} the related event/exception or null
	     */
	    findRangeException: function(time) {
	      if (!this.rangeExceptions.length) {
	        return null;
	      }

	      var utc = time.toUnixTime();
	      var idx = ICAL.helpers.binsearchInsert(
	        this.rangeExceptions,
	        [utc],
	        compareRangeException
	      );

	      idx -= 1;

	      // occurs before
	      if (idx < 0) {
	        return null;
	      }

	      var rangeItem = this.rangeExceptions[idx];

	      /* istanbul ignore next: sanity check only */
	      if (utc < rangeItem[0]) {
	        return null;
	      }

	      return rangeItem[1];
	    },

	    /**
	     * This object is returned by {@link ICAL.Event#getOccurrenceDetails getOccurrenceDetails}
	     *
	     * @typedef {Object} occurrenceDetails
	     * @memberof ICAL.Event
	     * @property {ICAL.Time} recurrenceId       The passed in recurrence id
	     * @property {ICAL.Event} item              The occurrence
	     * @property {ICAL.Time} startDate          The start of the occurrence
	     * @property {ICAL.Time} endDate            The end of the occurrence
	     */

	    /**
	     * Returns the occurrence details based on its start time.  If the
	     * occurrence has an exception will return the details for that exception.
	     *
	     * NOTE: this method is intend to be used in conjunction
	     *       with the {@link ICAL.Event#iterator iterator} method.
	     *
	     * @param {ICAL.Time} occurrence time occurrence
	     * @return {ICAL.Event.occurrenceDetails} Information about the occurrence
	     */
	    getOccurrenceDetails: function(occurrence) {
	      var id = occurrence.toString();
	      var utcId = occurrence.convertToZone(ICAL.Timezone.utcTimezone).toString();
	      var item;
	      var result = {
	        //XXX: Clone?
	        recurrenceId: occurrence
	      };

	      if (id in this.exceptions) {
	        item = result.item = this.exceptions[id];
	        result.startDate = item.startDate;
	        result.endDate = item.endDate;
	        result.item = item;
	      } else if (utcId in this.exceptions) {
	        item = this.exceptions[utcId];
	        result.startDate = item.startDate;
	        result.endDate = item.endDate;
	        result.item = item;
	      } else {
	        // range exceptions (RANGE=THISANDFUTURE) have a
	        // lower priority then direct exceptions but
	        // must be accounted for first. Their item is
	        // always the first exception with the range prop.
	        var rangeExceptionId = this.findRangeException(
	          occurrence
	        );
	        var end;

	        if (rangeExceptionId) {
	          var exception = this.exceptions[rangeExceptionId];

	          // range exception must modify standard time
	          // by the difference (if any) in start/end times.
	          result.item = exception;

	          var startDiff = this._rangeExceptionCache[rangeExceptionId];

	          if (!startDiff) {
	            var original = exception.recurrenceId.clone();
	            var newStart = exception.startDate.clone();

	            // zones must be same otherwise subtract may be incorrect.
	            original.zone = newStart.zone;
	            startDiff = newStart.subtractDate(original);

	            this._rangeExceptionCache[rangeExceptionId] = startDiff;
	          }

	          var start = occurrence.clone();
	          start.zone = exception.startDate.zone;
	          start.addDuration(startDiff);

	          end = start.clone();
	          end.addDuration(exception.duration);

	          result.startDate = start;
	          result.endDate = end;
	        } else {
	          // no range exception standard expansion
	          end = occurrence.clone();
	          end.addDuration(this.duration);

	          result.endDate = end;
	          result.startDate = occurrence;
	          result.item = this;
	        }
	      }

	      return result;
	    },

	    /**
	     * Builds a recur expansion instance for a specific point in time (defaults
	     * to startDate).
	     *
	     * @param {ICAL.Time} startTime     Starting point for expansion
	     * @return {ICAL.RecurExpansion}    Expansion object
	     */
	    iterator: function(startTime) {
	      return new ICAL.RecurExpansion({
	        component: this.component,
	        dtstart: startTime || this.startDate
	      });
	    },

	    /**
	     * Checks if the event is recurring
	     *
	     * @return {Boolean}        True, if event is recurring
	     */
	    isRecurring: function() {
	      var comp = this.component;
	      return comp.hasProperty('rrule') || comp.hasProperty('rdate');
	    },

	    /**
	     * Checks if the event describes a recurrence exception. See
	     * {@tutorial terminology} for details.
	     *
	     * @return {Boolean}    True, if the event describes a recurrence exception
	     */
	    isRecurrenceException: function() {
	      return this.component.hasProperty('recurrence-id');
	    },

	    /**
	     * Returns the types of recurrences this event may have.
	     *
	     * Returned as an object with the following possible keys:
	     *
	     *    - YEARLY
	     *    - MONTHLY
	     *    - WEEKLY
	     *    - DAILY
	     *    - MINUTELY
	     *    - SECONDLY
	     *
	     * @return {Object.<ICAL.Recur.frequencyValues, Boolean>}
	     *          Object of recurrence flags
	     */
	    getRecurrenceTypes: function() {
	      var rules = this.component.getAllProperties('rrule');
	      var i = 0;
	      var len = rules.length;
	      var result = Object.create(null);

	      for (; i < len; i++) {
	        var value = rules[i].getFirstValue();
	        result[value.freq] = true;
	      }

	      return result;
	    },

	    /**
	     * The uid of this event
	     * @type {String}
	     */
	    get uid() {
	      return this._firstProp('uid');
	    },

	    set uid(value) {
	      this._setProp('uid', value);
	    },

	    /**
	     * The start date
	     * @type {ICAL.Time}
	     */
	    get startDate() {
	      return this._firstProp('dtstart');
	    },

	    set startDate(value) {
	      this._setTime('dtstart', value);
	    },

	    /**
	     * The end date. This can be the result directly from the property, or the
	     * end date calculated from start date and duration. Setting the property
	     * will remove any duration properties.
	     * @type {ICAL.Time}
	     */
	    get endDate() {
	      var endDate = this._firstProp('dtend');
	      if (!endDate) {
	          var duration = this._firstProp('duration');
	          endDate = this.startDate.clone();
	          if (duration) {
	              endDate.addDuration(duration);
	          } else if (endDate.isDate) {
	              endDate.day += 1;
	          }
	      }
	      return endDate;
	    },

	    set endDate(value) {
	      if (this.component.hasProperty('duration')) {
	        this.component.removeProperty('duration');
	      }
	      this._setTime('dtend', value);
	    },

	    /**
	     * The duration. This can be the result directly from the property, or the
	     * duration calculated from start date and end date. Setting the property
	     * will remove any `dtend` properties.
	     * @type {ICAL.Duration}
	     */
	    get duration() {
	      var duration = this._firstProp('duration');
	      if (!duration) {
	        return this.endDate.subtractDateTz(this.startDate);
	      }
	      return duration;
	    },

	    set duration(value) {
	      if (this.component.hasProperty('dtend')) {
	        this.component.removeProperty('dtend');
	      }

	      this._setProp('duration', value);
	    },

	    /**
	     * The location of the event.
	     * @type {String}
	     */
	    get location() {
	      return this._firstProp('location');
	    },

	    set location(value) {
	      return this._setProp('location', value);
	    },

	    /**
	     * The attendees in the event
	     * @type {ICAL.Property[]}
	     * @readonly
	     */
	    get attendees() {
	      //XXX: This is way lame we should have a better
	      //     data structure for this later.
	      return this.component.getAllProperties('attendee');
	    },


	    /**
	     * The event summary
	     * @type {String}
	     */
	    get summary() {
	      return this._firstProp('summary');
	    },

	    set summary(value) {
	      this._setProp('summary', value);
	    },

	    /**
	     * The event description.
	     * @type {String}
	     */
	    get description() {
	      return this._firstProp('description');
	    },

	    set description(value) {
	      this._setProp('description', value);
	    },

	    /**
	     * The event color from [rfc7986](https://datatracker.ietf.org/doc/html/rfc7986)
	     * @type {String}
	     */
	    get color() {
	      return this._firstProp('color');
	    },

	    set color(value) {
	      this._setProp('color', value);
	    },

	    /**
	     * The organizer value as an uri. In most cases this is a mailto: uri, but
	     * it can also be something else, like urn:uuid:...
	     * @type {String}
	     */
	    get organizer() {
	      return this._firstProp('organizer');
	    },

	    set organizer(value) {
	      this._setProp('organizer', value);
	    },

	    /**
	     * The sequence value for this event. Used for scheduling
	     * see {@tutorial terminology}.
	     * @type {Number}
	     */
	    get sequence() {
	      return this._firstProp('sequence');
	    },

	    set sequence(value) {
	      this._setProp('sequence', value);
	    },

	    /**
	     * The recurrence id for this event. See {@tutorial terminology} for details.
	     * @type {ICAL.Time}
	     */
	    get recurrenceId() {
	      return this._firstProp('recurrence-id');
	    },

	    set recurrenceId(value) {
	      this._setTime('recurrence-id', value);
	    },

	    /**
	     * Set/update a time property's value.
	     * This will also update the TZID of the property.
	     *
	     * TODO: this method handles the case where we are switching
	     * from a known timezone to an implied timezone (one without TZID).
	     * This does _not_ handle the case of moving between a known
	     *  (by TimezoneService) timezone to an unknown timezone...
	     *
	     * We will not add/remove/update the VTIMEZONE subcomponents
	     *  leading to invalid ICAL data...
	     * @private
	     * @param {String} propName     The property name
	     * @param {ICAL.Time} time      The time to set
	     */
	    _setTime: function(propName, time) {
	      var prop = this.component.getFirstProperty(propName);

	      if (!prop) {
	        prop = new ICAL.Property(propName);
	        this.component.addProperty(prop);
	      }

	      // utc and local don't get a tzid
	      if (
	        time.zone === ICAL.Timezone.localTimezone ||
	        time.zone === ICAL.Timezone.utcTimezone
	      ) {
	        // remove the tzid
	        prop.removeParameter('tzid');
	      } else {
	        prop.setParameter('tzid', time.zone.tzid);
	      }

	      prop.setValue(time);
	    },

	    _setProp: function(name, value) {
	      this.component.updatePropertyWithValue(name, value);
	    },

	    _firstProp: function(name) {
	      return this.component.getFirstPropertyValue(name);
	    },

	    /**
	     * The string representation of this event.
	     * @return {String}
	     */
	    toString: function() {
	      return this.component.toString();
	    }

	  };

	  function compareRangeException(a, b) {
	    if (a[0] > b[0]) return 1;
	    if (b[0] > a[0]) return -1;
	    return 0;
	  }

	  return Event;
	}());
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 * Portions Copyright (C) Philipp Kewisch, 2011-2015 */


	/**
	 * This symbol is further described later on
	 * @ignore
	 */
	ICAL.ComponentParser = (function() {
	  /**
	   * @classdesc
	   * The ComponentParser is used to process a String or jCal Object,
	   * firing callbacks for various found components, as well as completion.
	   *
	   * @example
	   * var options = {
	   *   // when false no events will be emitted for type
	   *   parseEvent: true,
	   *   parseTimezone: true
	   * };
	   *
	   * var parser = new ICAL.ComponentParser(options);
	   *
	   * parser.onevent(eventComponent) {
	   *   //...
	   * }
	   *
	   * // ontimezone, etc...
	   *
	   * parser.oncomplete = function() {
	   *
	   * };
	   *
	   * parser.process(stringOrComponent);
	   *
	   * @class
	   * @alias ICAL.ComponentParser
	   * @param {Object=} options        Component parser options
	   * @param {Boolean} options.parseEvent        Whether events should be parsed
	   * @param {Boolean} options.parseTimezeone    Whether timezones should be parsed
	   */
	  function ComponentParser(options) {
	    if (typeof(options) === 'undefined') {
	      options = {};
	    }

	    var key;
	    for (key in options) {
	      /* istanbul ignore else */
	      if (options.hasOwnProperty(key)) {
	        this[key] = options[key];
	      }
	    }
	  }

	  ComponentParser.prototype = {

	    /**
	     * When true, parse events
	     *
	     * @type {Boolean}
	     */
	    parseEvent: true,

	    /**
	     * When true, parse timezones
	     *
	     * @type {Boolean}
	     */
	    parseTimezone: true,


	    /* SAX like events here for reference */

	    /**
	     * Fired when parsing is complete
	     * @callback
	     */
	    oncomplete: /* istanbul ignore next */ function() {},

	    /**
	     * Fired if an error occurs during parsing.
	     *
	     * @callback
	     * @param {Error} err details of error
	     */
	    onerror: /* istanbul ignore next */ function(err) {},

	    /**
	     * Fired when a top level component (VTIMEZONE) is found
	     *
	     * @callback
	     * @param {ICAL.Timezone} component     Timezone object
	     */
	    ontimezone: /* istanbul ignore next */ function(component) {},

	    /**
	     * Fired when a top level component (VEVENT) is found.
	     *
	     * @callback
	     * @param {ICAL.Event} component    Top level component
	     */
	    onevent: /* istanbul ignore next */ function(component) {},

	    /**
	     * Process a string or parse ical object.  This function itself will return
	     * nothing but will start the parsing process.
	     *
	     * Events must be registered prior to calling this method.
	     *
	     * @param {ICAL.Component|String|Object} ical      The component to process,
	     *        either in its final form, as a jCal Object, or string representation
	     */
	    process: function(ical) {
	      //TODO: this is sync now in the future we will have a incremental parser.
	      if (typeof(ical) === 'string') {
	        ical = ICAL.parse(ical);
	      }

	      if (!(ical instanceof ICAL.Component)) {
	        ical = new ICAL.Component(ical);
	      }

	      var components = ical.getAllSubcomponents();
	      var i = 0;
	      var len = components.length;
	      var component;

	      for (; i < len; i++) {
	        component = components[i];

	        switch (component.name) {
	          case 'vtimezone':
	            if (this.parseTimezone) {
	              var tzid = component.getFirstPropertyValue('tzid');
	              if (tzid) {
	                this.ontimezone(new ICAL.Timezone({
	                  tzid: tzid,
	                  component: component
	                }));
	              }
	            }
	            break;
	          case 'vevent':
	            if (this.parseEvent) {
	              this.onevent(new ICAL.Event(component));
	            }
	            break;
	          default:
	            continue;
	        }
	      }

	      //XXX: ideally we should do a "nextTick" here
	      //     so in all cases this is actually async.
	      this.oncomplete();
	    }
	  };

	  return ComponentParser;
	}()); 
} (ical));

var icalExports = ical.exports;

/* eslint-disable */
class IcalExpander {
    constructor(opts) {
        this.maxIterations = opts.maxIterations != null ? opts.maxIterations : 1000;
        this.skipInvalidDates = opts.skipInvalidDates != null ? opts.skipInvalidDates : false;
        this.jCalData = icalExports.parse(opts.ics);
        this.component = new icalExports.Component(this.jCalData);
        this.events = this.component.getAllSubcomponents('vevent').map(vevent => new icalExports.Event(vevent));
        if (this.skipInvalidDates) {
            this.events = this.events.filter((evt) => {
                try {
                    evt.startDate.toJSDate();
                    evt.endDate.toJSDate();
                    return true;
                }
                catch (err) {
                    // skipping events with invalid time
                    return false;
                }
            });
        }
    }
    between(after, before) {
        function isEventWithinRange(startTime, endTime) {
            return (!after || endTime >= after.getTime()) &&
                (!before || startTime <= before.getTime());
        }
        function getTimes(eventOrOccurrence) {
            const startTime = eventOrOccurrence.startDate.toJSDate().getTime();
            let endTime = eventOrOccurrence.endDate.toJSDate().getTime();
            // If it is an all day event, the end date is set to 00:00 of the next day
            // So we need to make it be 23:59:59 to compare correctly with the given range
            if (eventOrOccurrence.endDate.isDate && (endTime > startTime)) {
                endTime -= 1;
            }
            return { startTime, endTime };
        }
        const exceptions = [];
        this.events.forEach((event) => {
            if (event.isRecurrenceException())
                exceptions.push(event);
        });
        const ret = {
            events: [],
            occurrences: [],
        };
        this.events.filter(e => !e.isRecurrenceException()).forEach((event) => {
            const exdates = [];
            event.component.getAllProperties('exdate').forEach((exdateProp) => {
                const exdate = exdateProp.getFirstValue();
                exdates.push(exdate.toJSDate().getTime());
            });
            // Recurring event is handled differently
            if (event.isRecurring()) {
                const iterator = event.iterator();
                let next;
                let i = 0;
                do {
                    i += 1;
                    next = iterator.next();
                    if (next) {
                        const occurrence = event.getOccurrenceDetails(next);
                        const { startTime, endTime } = getTimes(occurrence);
                        const isOccurrenceExcluded = exdates.indexOf(startTime) !== -1;
                        // TODO check that within same day?
                        const exception = exceptions.find(ex => ex.uid === event.uid && ex.recurrenceId.toJSDate().getTime() === occurrence.startDate.toJSDate().getTime());
                        // We have passed the max date, stop
                        if (before && startTime > before.getTime())
                            break;
                        // Check that we are within our range
                        if (isEventWithinRange(startTime, endTime)) {
                            if (exception) {
                                ret.events.push(exception);
                            }
                            else if (!isOccurrenceExcluded) {
                                ret.occurrences.push(occurrence);
                            }
                        }
                    }
                } while (next && (!this.maxIterations || i < this.maxIterations));
                return;
            }
            // Non-recurring event:
            const { startTime, endTime } = getTimes(event);
            if (isEventWithinRange(startTime, endTime))
                ret.events.push(event);
        });
        return ret;
    }
    before(before) {
        return this.between(undefined, before);
    }
    after(after) {
        return this.between(after);
    }
    all() {
        return this.between();
    }
}

const eventSourceDef = {
    parseMeta(refined) {
        if (refined.url && refined.format === 'ics') {
            return {
                url: refined.url,
                format: 'ics',
            };
        }
        return null;
    },
    fetch(arg, successCallback, errorCallback) {
        let meta = arg.eventSource.meta;
        let { internalState } = meta;
        /*
        NOTE: isRefetch is a HACK. we would do the recurring-expanding in a separate plugin hook,
        but we couldn't leverage built-in allDay-guessing, among other things.
        */
        if (!internalState || arg.isRefetch) {
            internalState = meta.internalState = {
                response: null,
                iCalExpanderPromise: fetch(meta.url, { method: 'GET' }).then((response) => {
                    return response.text().then((icsText) => {
                        internalState.response = response;
                        return new IcalExpander({
                            ics: icsText,
                            skipInvalidDates: true,
                        });
                    });
                }),
            };
        }
        internalState.iCalExpanderPromise.then((iCalExpander) => {
            successCallback({
                rawEvents: expandICalEvents(iCalExpander, arg.range),
                response: internalState.response,
            });
        }, errorCallback);
    },
};
function expandICalEvents(iCalExpander, range) {
    // expand the range. because our `range` is timeZone-agnostic UTC
    // or maybe because ical.js always produces dates in local time? i forget
    let rangeStart = addDays(range.start, -1);
    let rangeEnd = addDays(range.end, 1);
    let iCalRes = iCalExpander.between(rangeStart, rangeEnd); // end inclusive. will give extra results
    let expanded = [];
    // TODO: instead of using startDate/endDate.toString to communicate allDay,
    // we can query startDate/endDate.isDate. More efficient to avoid formatting/reparsing.
    // single events
    for (let iCalEvent of iCalRes.events) {
        expanded.push(Object.assign(Object.assign({}, buildNonDateProps(iCalEvent)), { start: iCalEvent.startDate.toString(), end: (specifiesEnd(iCalEvent) && iCalEvent.endDate)
                ? iCalEvent.endDate.toString()
                : null }));
    }
    // recurring event instances
    for (let iCalOccurence of iCalRes.occurrences) {
        let iCalEvent = iCalOccurence.item;
        expanded.push(Object.assign(Object.assign({}, buildNonDateProps(iCalEvent)), { start: iCalOccurence.startDate.toString(), end: (specifiesEnd(iCalEvent) && iCalOccurence.endDate)
                ? iCalOccurence.endDate.toString()
                : null }));
    }
    return expanded;
}
function buildNonDateProps(iCalEvent) {
    return {
        title: iCalEvent.summary,
        url: extractEventUrl(iCalEvent),
        extendedProps: {
            location: iCalEvent.location,
            organizer: iCalEvent.organizer,
            description: iCalEvent.description,
        },
    };
}
function extractEventUrl(iCalEvent) {
    let urlProp = iCalEvent.component.getFirstProperty('url');
    return urlProp ? urlProp.getFirstValue() : '';
}
function specifiesEnd(iCalEvent) {
    return Boolean(iCalEvent.component.getFirstProperty('dtend')) ||
        Boolean(iCalEvent.component.getFirstProperty('duration'));
}

var index$3 = createPlugin({
    name: '@fullcalendar/icalendar',
    eventSourceDefs: [eventSourceDef],
});

/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
class TableView extends DateComponent {
    constructor() {
        super(...arguments);
        this.headerElRef = d();
    }
    renderSimpleLayout(headerRowContent, bodyContent) {
        let { props, context } = this;
        let sections = [];
        let stickyHeaderDates = getStickyHeaderDates(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunk: { content: bodyContent },
        });
        return (y(ViewContainer, { elClasses: ['fc-daygrid'], viewSpec: context.viewSpec },
            y(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [] /* TODO: make optional? */, sections: sections })));
    }
    renderHScrollLayout(headerRowContent, bodyContent, colCnt, dayMinWidth) {
        let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        let { props, context } = this;
        let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
        let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
        let sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunks: [{
                        key: 'main',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    }],
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunks: [{
                    key: 'main',
                    content: bodyContent,
                }],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                type: 'footer',
                key: 'footer',
                isSticky: true,
                chunks: [{
                        key: 'main',
                        content: renderScrollShim,
                    }],
            });
        }
        return (y(ViewContainer, { elClasses: ['fc-daygrid'], viewSpec: context.viewSpec },
            y(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, forPrint: props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections: sections })));
    }
}

function splitSegsByRow(segs, rowCnt) {
    let byRow = [];
    for (let i = 0; i < rowCnt; i += 1) {
        byRow[i] = [];
    }
    for (let seg of segs) {
        byRow[seg.row].push(seg);
    }
    return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
    let byCol = [];
    for (let i = 0; i < colCnt; i += 1) {
        byCol[i] = [];
    }
    for (let seg of segs) {
        byCol[seg.firstCol].push(seg);
    }
    return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
    let byRow = [];
    if (!ui) {
        for (let i = 0; i < rowCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (let i = 0; i < rowCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (let seg of ui.segs) {
            byRow[seg.row].segs.push(seg);
        }
    }
    return byRow;
}

const DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'narrow',
});
function hasListItemDisplay(seg) {
    let { display } = seg.eventRange.ui;
    return display === 'list-item' || (display === 'auto' &&
        !seg.eventRange.def.allDay &&
        seg.firstCol === seg.lastCol && // can't be multi-day
        seg.isStart && // "
        seg.isEnd // "
    );
}

class TableBlockEvent extends BaseComponent {
    render() {
        let { props } = this;
        return (y(StandardEvent, Object.assign({}, props, { elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay })));
    }
}

class TableListItemEvent extends BaseComponent {
    render() {
        let { props, context } = this;
        let { options } = context;
        let { seg } = props;
        let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
        let timeText = buildSegTimeText(seg, timeFormat, context, true, props.defaultDisplayEventEnd);
        return (y(EventContainer, Object.assign({}, props, { elTag: "a", elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'], elAttrs: getSegAnchorAttrs(props.seg, context), defaultGenerator: renderInnerContent$2, timeText: timeText, isResizing: false, isDateSelecting: false })));
    }
}
function renderInnerContent$2(renderProps) {
    return (y(_, null,
        y("div", { className: "fc-daygrid-event-dot", style: { borderColor: renderProps.borderColor || renderProps.backgroundColor } }),
        renderProps.timeText && (y("div", { className: "fc-event-time" }, renderProps.timeText)),
        y("div", { className: "fc-event-title" }, renderProps.event.title || y(_, null, "\u00A0"))));
}

class TableCellMoreLink extends BaseComponent {
    constructor() {
        super(...arguments);
        this.compileSegs = memoize(compileSegs);
    }
    render() {
        let { props } = this;
        let { allSegs, invisibleSegs } = this.compileSegs(props.singlePlacements);
        return (y(MoreLinkContainer, { elClasses: ['fc-daygrid-more-link'], dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs: allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: () => {
                let isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                    (props.eventResize ? props.eventResize.affectedInstances : null) ||
                    {};
                return (y(_, null, allSegs.map((seg) => {
                    let instanceId = seg.eventRange.instance.instanceId;
                    return (y("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
                            visibility: isForcedInvisible[instanceId] ? 'hidden' : '',
                        } }, hasListItemDisplay(seg) ? (y(TableListItemEvent, Object.assign({ seg: seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange)))) : (y(TableBlockEvent, Object.assign({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getSegMeta(seg, props.todayRange))))));
                })));
            } }));
    }
}
function compileSegs(singlePlacements) {
    let allSegs = [];
    let invisibleSegs = [];
    for (let placement of singlePlacements) {
        allSegs.push(placement.seg);
        if (!placement.isVisible) {
            invisibleSegs.push(placement.seg);
        }
    }
    return { allSegs, invisibleSegs };
}

const DEFAULT_WEEK_NUM_FORMAT$1 = createFormatter({ week: 'narrow' });
class TableCell extends DateComponent {
    constructor() {
        super(...arguments);
        this.rootElRef = d();
        this.state = {
            dayNumberId: getUniqueDomId(),
        };
        this.handleRootEl = (el) => {
            setRef(this.rootElRef, el);
            setRef(this.props.elRef, el);
        };
    }
    render() {
        let { context, props, state, rootElRef } = this;
        let { options, dateEnv } = context;
        let { date, dateProfile } = props;
        // TODO: memoize this?
        const isMonthStart = props.showDayNumber &&
            shouldDisplayMonthStart(date, dateProfile.currentRange, dateEnv);
        return (y(DayCellContainer, { elTag: "td", elRef: this.handleRootEl, elClasses: [
                'fc-daygrid-day',
                ...(props.extraClassNames || []),
            ], elAttrs: Object.assign(Object.assign(Object.assign({}, props.extraDataAttrs), (props.showDayNumber ? { 'aria-labelledby': state.dayNumberId } : {})), { role: 'gridcell' }), defaultGenerator: renderTopInner, date: date, dateProfile: dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, isMonthStart: isMonthStart, extraRenderProps: props.extraRenderProps }, (InnerContent, renderProps) => (y("div", { ref: props.innerElRef, className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", style: { minHeight: props.minHeight } },
            props.showWeekNumber && (y(WeekNumberContainer, { elTag: "a", elClasses: ['fc-daygrid-week-number'], elAttrs: buildNavLinkAttrs(context, date, 'week'), date: date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT$1 })),
            !renderProps.isDisabled &&
                (props.showDayNumber || hasCustomDayCellContent(options) || props.forceDayTop) ? (y("div", { className: "fc-daygrid-day-top" },
                y(InnerContent, { elTag: "a", elClasses: [
                        'fc-daygrid-day-number',
                        isMonthStart && 'fc-daygrid-month-start',
                    ], elAttrs: Object.assign(Object.assign({}, buildNavLinkAttrs(context, date)), { id: state.dayNumberId }) }))) : props.showDayNumber ? (
            // for creating correct amount of space (see issue #7162)
            y("div", { className: "fc-daygrid-day-top", style: { visibility: 'hidden' } },
                y("a", { className: "fc-daygrid-day-number" }, "\u00A0"))) : undefined,
            y("div", { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
                props.fgContent,
                y("div", { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
                    y(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange }))),
            y("div", { className: "fc-daygrid-day-bg" }, props.bgContent)))));
    }
}
function renderTopInner(props) {
    return props.dayNumberText || y(_, null, "\u00A0");
}
function shouldDisplayMonthStart(date, currentRange, dateEnv) {
    const { start: currentStart, end: currentEnd } = currentRange;
    const currentEndIncl = addMs(currentEnd, -1);
    const currentFirstYear = dateEnv.getYear(currentStart);
    const currentFirstMonth = dateEnv.getMonth(currentStart);
    const currentLastYear = dateEnv.getYear(currentEndIncl);
    const currentLastMonth = dateEnv.getMonth(currentEndIncl);
    // spans more than one month?
    return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) &&
        Boolean(
        // first date in current view?
        date.valueOf() === currentStart.valueOf() ||
            // a month-start that's within the current range?
            (dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf()));
}

function generateSegKey(seg) {
    return seg.eventRange.instance.instanceId + ':' + seg.firstCol;
}
function generateSegUid(seg) {
    return generateSegKey(seg) + ':' + seg.lastCol;
}
function computeFgSegPlacement(segs, // assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, segHeights, maxContentHeight, cells) {
    let hierarchy = new DayGridSegHierarchy((segEntry) => {
        // TODO: more DRY with generateSegUid
        let segUid = segs[segEntry.index].eventRange.instance.instanceId +
            ':' + segEntry.span.start +
            ':' + (segEntry.span.end - 1);
        // if no thickness known, assume 1 (if 0, so small it always fits)
        return segHeights[segUid] || 1;
    });
    hierarchy.allowReslicing = true;
    hierarchy.strictOrder = strictOrder;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
        hierarchy.maxCoord = maxContentHeight;
        hierarchy.hiddenConsumes = true;
    }
    else if (typeof dayMaxEvents === 'number') {
        hierarchy.maxStackCnt = dayMaxEvents;
    }
    else if (typeof dayMaxEventRows === 'number') {
        hierarchy.maxStackCnt = dayMaxEventRows;
        hierarchy.hiddenConsumes = true;
    }
    // create segInputs only for segs with known heights
    let segInputs = [];
    let unknownHeightSegs = [];
    for (let i = 0; i < segs.length; i += 1) {
        let seg = segs[i];
        let segUid = generateSegUid(seg);
        let eventHeight = segHeights[segUid];
        if (eventHeight != null) {
            segInputs.push({
                index: i,
                span: {
                    start: seg.firstCol,
                    end: seg.lastCol + 1,
                },
            });
        }
        else {
            unknownHeightSegs.push(seg);
        }
    }
    let hiddenEntries = hierarchy.addSegs(segInputs);
    let segRects = hierarchy.toRects();
    let { singleColPlacements, multiColPlacements, leftoverMargins } = placeRects(segRects, segs, cells);
    let moreCnts = [];
    let moreMarginTops = [];
    // add segs with unknown heights
    for (let seg of unknownHeightSegs) {
        multiColPlacements[seg.firstCol].push({
            seg,
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (let col = seg.firstCol; col <= seg.lastCol; col += 1) {
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // add the hidden entries
    for (let col = 0; col < cells.length; col += 1) {
        moreCnts.push(0);
    }
    for (let hiddenEntry of hiddenEntries) {
        let seg = segs[hiddenEntry.index];
        let hiddenSpan = hiddenEntry.span;
        multiColPlacements[hiddenSpan.start].push({
            seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (let col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
            moreCnts[col] += 1;
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // deal with leftover margins
    for (let col = 0; col < cells.length; col += 1) {
        moreMarginTops.push(leftoverMargins[col]);
    }
    return { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
    let rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
    let singleColPlacements = [];
    let multiColPlacements = [];
    let leftoverMargins = [];
    for (let col = 0; col < cells.length; col += 1) {
        let rects = rectsByEachCol[col];
        // compute all static segs in singlePlacements
        let singlePlacements = [];
        let currentHeight = 0;
        let currentMarginTop = 0;
        for (let rect of rects) {
            let seg = segs[rect.index];
            singlePlacements.push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: true,
                isAbsolute: false,
                absoluteTop: rect.levelCoord,
                marginTop: rect.levelCoord - currentHeight,
            });
            currentHeight = rect.levelCoord + rect.thickness;
        }
        // compute mixed static/absolute segs in multiPlacements
        let multiPlacements = [];
        currentHeight = 0;
        currentMarginTop = 0;
        for (let rect of rects) {
            let seg = segs[rect.index];
            let isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
            let isFirstCol = rect.span.start === col;
            currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
            currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
            if (isAbsolute) {
                currentMarginTop += rect.thickness;
                if (isFirstCol) {
                    multiPlacements.push({
                        seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                        isVisible: true,
                        isAbsolute: true,
                        absoluteTop: rect.levelCoord,
                        marginTop: 0,
                    });
                }
            }
            else if (isFirstCol) {
                multiPlacements.push({
                    seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                    isVisible: true,
                    isAbsolute: false,
                    absoluteTop: rect.levelCoord,
                    marginTop: currentMarginTop, // claim the margin
                });
                currentMarginTop = 0;
            }
        }
        singleColPlacements.push(singlePlacements);
        multiColPlacements.push(multiPlacements);
        leftoverMargins.push(currentMarginTop);
    }
    return { singleColPlacements, multiColPlacements, leftoverMargins };
}
function groupRectsByEachCol(rects, colCnt) {
    let rectsByEachCol = [];
    for (let col = 0; col < colCnt; col += 1) {
        rectsByEachCol.push([]);
    }
    for (let rect of rects) {
        for (let col = rect.span.start; col < rect.span.end; col += 1) {
            rectsByEachCol[col].push(rect);
        }
    }
    return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
    if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
        return seg;
    }
    let eventRange = seg.eventRange;
    let origRange = eventRange.range;
    let slicedRange = intersectRanges(origRange, {
        start: cells[spanStart].date,
        end: addDays(cells[spanEnd - 1].date, 1),
    });
    return Object.assign(Object.assign({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
            def: eventRange.def,
            ui: Object.assign(Object.assign({}, eventRange.ui), { durationEditable: false }),
            instance: eventRange.instance,
            range: slicedRange,
        }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
}
class DayGridSegHierarchy extends SegHierarchy {
    constructor() {
        super(...arguments);
        // config
        this.hiddenConsumes = false;
        // allows us to keep hidden entries in the hierarchy so they take up space
        this.forceHidden = {};
    }
    addSegs(segInputs) {
        const hiddenSegs = super.addSegs(segInputs);
        const { entriesByLevel } = this;
        const excludeHidden = (entry) => !this.forceHidden[buildEntryKey(entry)];
        // remove the forced-hidden segs
        for (let level = 0; level < entriesByLevel.length; level += 1) {
            entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
        }
        return hiddenSegs;
    }
    handleInvalidInsertion(insertion, entry, hiddenEntries) {
        const { entriesByLevel, forceHidden } = this;
        const { touchingEntry, touchingLevel, touchingLateral } = insertion;
        // the entry that the new insertion is touching must be hidden
        if (this.hiddenConsumes && touchingEntry) {
            const touchingEntryId = buildEntryKey(touchingEntry);
            if (!forceHidden[touchingEntryId]) {
                if (this.allowReslicing) {
                    // split up the touchingEntry, reinsert it
                    const hiddenEntry = Object.assign(Object.assign({}, touchingEntry), { span: intersectSpans(touchingEntry.span, entry.span) });
                    // reinsert the area that turned into a "more" link (so no other entries try to
                    // occupy the space) but mark it forced-hidden
                    const hiddenEntryId = buildEntryKey(hiddenEntry);
                    forceHidden[hiddenEntryId] = true;
                    entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
                    hiddenEntries.push(hiddenEntry);
                    this.splitEntry(touchingEntry, entry, hiddenEntries);
                }
                else {
                    forceHidden[touchingEntryId] = true;
                    hiddenEntries.push(touchingEntry);
                }
            }
        }
        // will try to reslice...
        super.handleInvalidInsertion(insertion, entry, hiddenEntries);
    }
}

class TableRow extends DateComponent {
    constructor() {
        super(...arguments);
        this.cellElRefs = new RefMap(); // the <td>
        this.frameElRefs = new RefMap(); // the fc-daygrid-day-frame
        this.fgElRefs = new RefMap(); // the fc-daygrid-day-events
        this.segHarnessRefs = new RefMap(); // indexed by "instanceId:firstCol"
        this.rootElRef = d();
        this.state = {
            framePositions: null,
            maxContentHeight: null,
            segHeights: {},
        };
        this.handleResize = (isForced) => {
            if (isForced) {
                this.updateSizing(true); // isExternal=true
            }
        };
    }
    render() {
        let { props, state, context } = this;
        let { options } = context;
        let colCnt = props.cells.length;
        let businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
        let bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
        let highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
        let mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
        let { singleColPlacements, multiColPlacements, moreCnts, moreMarginTops } = computeFgSegPlacement(sortEventSegs(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.segHeights, state.maxContentHeight, props.cells);
        let isForcedInvisible = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        return (y("tr", { ref: this.rootElRef, role: "row" },
            props.renderIntro && props.renderIntro(),
            props.cells.map((cell, col) => {
                let normalFgNodes = this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
                let mirrorFgNodes = this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
                return (y(TableCell, { key: cell.key, elRef: this.cellElRefs.createRef(cell.key), innerElRef: this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */, dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: this.fgElRefs.createRef(cell.key), fgContent: ( // Fragment scopes the keys
                    y(_, null,
                        y(_, null, normalFgNodes),
                        y(_, null, mirrorFgNodes))), bgContent: ( // Fragment scopes the keys
                    y(_, null,
                        this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                        this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                        this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))), minHeight: props.cellMinHeight }));
            })));
    }
    componentDidMount() {
        this.updateSizing(true);
        this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(prevProps, prevState) {
        let currentProps = this.props;
        this.updateSizing(!isPropsEqual(prevProps, currentProps));
    }
    componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize);
    }
    getHighlightSegs() {
        let { props } = this;
        if (props.eventDrag && props.eventDrag.segs.length) { // messy check
            return props.eventDrag.segs;
        }
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return props.dateSelectionSegs;
    }
    getMirrorSegs() {
        let { props } = this;
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return [];
    }
    renderFgSegs(col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
        let { context } = this;
        let { eventSelection } = this.props;
        let { framePositions } = this.state;
        let defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
        let isMirror = isDragging || isResizing || isDateSelecting;
        let nodes = [];
        if (framePositions) {
            for (let placement of segPlacements) {
                let { seg } = placement;
                let { instanceId } = seg.eventRange.instance;
                let isVisible = placement.isVisible && !isForcedInvisible[instanceId];
                let isAbsolute = placement.isAbsolute;
                let left = '';
                let right = '';
                if (isAbsolute) {
                    if (context.isRtl) {
                        right = 0;
                        left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
                    }
                    else {
                        left = 0;
                        right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
                    }
                }
                /*
                known bug: events that are force to be list-item but span multiple days still take up space in later columns
                todo: in print view, for multi-day events, don't display title within non-start/end segs
                */
                nodes.push(y("div", { className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''), key: generateSegKey(seg), ref: isMirror ? null : this.segHarnessRefs.createRef(generateSegUid(seg)), style: {
                        visibility: isVisible ? '' : 'hidden',
                        marginTop: isAbsolute ? '' : placement.marginTop,
                        top: isAbsolute ? placement.absoluteTop : '',
                        left,
                        right,
                    } }, hasListItemDisplay(seg) ? (y(TableListItemEvent, Object.assign({ seg: seg, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, getSegMeta(seg, todayRange)))) : (y(TableBlockEvent, Object.assign({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, getSegMeta(seg, todayRange))))));
            }
        }
        return nodes;
    }
    renderFillSegs(segs, fillType) {
        let { isRtl } = this.context;
        let { todayRange } = this.props;
        let { framePositions } = this.state;
        let nodes = [];
        if (framePositions) {
            for (let seg of segs) {
                let leftRightCss = isRtl ? {
                    right: 0,
                    left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol],
                } : {
                    left: 0,
                    right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol],
                };
                nodes.push(y("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === 'bg-event' ?
                    y(BgEvent, Object.assign({ seg: seg }, getSegMeta(seg, todayRange))) :
                    renderFill(fillType)));
            }
        }
        return y(_, {}, ...nodes);
    }
    updateSizing(isExternalSizingChange) {
        let { props, state, frameElRefs } = this;
        if (!props.forPrint &&
            props.clientWidth !== null // positioning ready?
        ) {
            if (isExternalSizingChange) {
                let frameEls = props.cells.map((cell) => frameElRefs.currentMap[cell.key]);
                if (frameEls.length) {
                    let originEl = this.rootElRef.current;
                    let newPositionCache = new PositionCache(originEl, frameEls, true, // isHorizontal
                    false);
                    if (!state.framePositions || !state.framePositions.similarTo(newPositionCache)) {
                        this.setState({
                            framePositions: new PositionCache(originEl, frameEls, true, // isHorizontal
                            false),
                        });
                    }
                }
            }
            const oldSegHeights = this.state.segHeights;
            const newSegHeights = this.querySegHeights();
            const limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
            this.safeSetState({
                // HACK to prevent oscillations of events being shown/hidden from max-event-rows
                // Essentially, once you compute an element's height, never null-out.
                // TODO: always display all events, as visibility:hidden?
                segHeights: Object.assign(Object.assign({}, oldSegHeights), newSegHeights),
                maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null,
            });
        }
    }
    querySegHeights() {
        let segElMap = this.segHarnessRefs.currentMap;
        let segHeights = {};
        // get the max height amongst instance segs
        for (let segUid in segElMap) {
            let height = Math.round(segElMap[segUid].getBoundingClientRect().height);
            segHeights[segUid] = Math.max(segHeights[segUid] || 0, height);
        }
        return segHeights;
    }
    computeMaxContentHeight() {
        let firstKey = this.props.cells[0].key;
        let cellEl = this.cellElRefs.currentMap[firstKey];
        let fcContainerEl = this.fgElRefs.currentMap[firstKey];
        return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
    }
    getCellEls() {
        let elMap = this.cellElRefs.currentMap;
        return this.props.cells.map((cell) => elMap[cell.key]);
    }
}
TableRow.addStateEquality({
    segHeights: isPropsEqual,
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
    if (!mirrorSegs.length) {
        return [];
    }
    let topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
    return mirrorSegs.map((seg) => ({
        seg,
        isVisible: true,
        isAbsolute: true,
        absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
        marginTop: 0,
    }));
}
function buildAbsoluteTopHash(colPlacements) {
    let topsByInstanceId = {};
    for (let placements of colPlacements) {
        for (let placement of placements) {
            topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
        }
    }
    return topsByInstanceId;
}

class TableRows extends DateComponent {
    constructor() {
        super(...arguments);
        this.splitBusinessHourSegs = memoize(splitSegsByRow);
        this.splitBgEventSegs = memoize(splitSegsByRow);
        this.splitFgEventSegs = memoize(splitSegsByRow);
        this.splitDateSelectionSegs = memoize(splitSegsByRow);
        this.splitEventDrag = memoize(splitInteractionByRow);
        this.splitEventResize = memoize(splitInteractionByRow);
        this.rowRefs = new RefMap();
    }
    render() {
        let { props, context } = this;
        let rowCnt = props.cells.length;
        let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
        let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
        let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
        let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
        let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
        let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
        // for DayGrid view with many rows, force a min-height on cells so doesn't appear squished
        // choose 7 because a month view will have max 6 rows
        let cellMinHeight = (rowCnt >= 7 && props.clientWidth) ?
            props.clientWidth / context.options.aspectRatio / 6 :
            null;
        return (y(NowTimer, { unit: "day" }, (nowDate, todayRange) => (y(_, null, props.cells.map((cells, row) => (y(TableRow, { ref: this.rowRefs.createRef(row), key: cells.length
                ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */
                : row // in case there are no cells (like when resource view is loading)
            , showDayNumbers: rowCnt > 1, showWeekNumbers: props.showWeekNumbers, todayRange: todayRange, dateProfile: props.dateProfile, cells: cells, renderIntro: props.renderRowIntro, businessHourSegs: businessHourSegsByRow[row], eventSelection: props.eventSelection, bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */, fgEventSegs: fgEventSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, clientWidth: props.clientWidth, clientHeight: props.clientHeight, cellMinHeight: cellMinHeight, forPrint: props.forPrint })))))));
    }
    componentDidMount() {
        this.registerInteractiveComponent();
    }
    componentDidUpdate() {
        // for if started with zero cells
        this.registerInteractiveComponent();
    }
    registerInteractiveComponent() {
        if (!this.rootEl) {
            // HACK: need a daygrid wrapper parent to do positioning
            // NOTE: a daygrid resource view w/o resources can have zero cells
            const firstCellEl = this.rowRefs.currentMap[0].getCellEls()[0];
            const rootEl = firstCellEl ? firstCellEl.closest('.fc-daygrid-body') : null;
            if (rootEl) {
                this.rootEl = rootEl;
                this.context.registerInteractiveComponent(this, {
                    el: rootEl,
                    isHitComboAllowed: this.props.isHitComboAllowed,
                });
            }
        }
    }
    componentWillUnmount() {
        if (this.rootEl) {
            this.context.unregisterInteractiveComponent(this);
            this.rootEl = null;
        }
    }
    // Hit System
    // ----------------------------------------------------------------------------------------------------
    prepareHits() {
        this.rowPositions = new PositionCache(this.rootEl, this.rowRefs.collect().map((rowObj) => rowObj.getCellEls()[0]), // first cell el in each row. TODO: not optimal
        false, true);
        this.colPositions = new PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
        true, // horizontal
        false);
    }
    queryHit(positionLeft, positionTop) {
        let { colPositions, rowPositions } = this;
        let col = colPositions.leftToIndex(positionLeft);
        let row = rowPositions.topToIndex(positionTop);
        if (row != null && col != null) {
            let cell = this.props.cells[row][col];
            return {
                dateProfile: this.props.dateProfile,
                dateSpan: Object.assign({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
                dayEl: this.getCellEl(row, col),
                rect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row],
                },
                layer: 0,
            };
        }
        return null;
    }
    getCellEl(row, col) {
        return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
    }
    getCellRange(row, col) {
        let start = this.props.cells[row][col].date;
        let end = addDays(start, 1);
        return { start, end };
    }
}
function isSegAllDay(seg) {
    return seg.eventRange.def.allDay;
}

class Table extends DateComponent {
    constructor() {
        super(...arguments);
        this.elRef = d();
        this.needsScrollReset = false;
    }
    render() {
        let { props } = this;
        let { dayMaxEventRows, dayMaxEvents, expandRows } = props;
        let limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
        // if rows can't expand to fill fixed height, can't do balanced-height event limit
        // TODO: best place to normalize these options?
        if (limitViaBalanced && !expandRows) {
            limitViaBalanced = false;
            dayMaxEventRows = null;
            dayMaxEvents = null;
        }
        let classNames = [
            'fc-daygrid-body',
            limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
            expandRows ? '' : 'fc-daygrid-body-natural', // will height of one row depend on the others?
        ];
        return (y("div", { ref: this.elRef, className: classNames.join(' '), style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            y("table", { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
                    width: props.clientWidth,
                    minWidth: props.tableMinWidth,
                    height: expandRows ? props.clientHeight : '',
                } },
                props.colGroupNode,
                y("tbody", { role: "presentation" },
                    y(TableRows, { dateProfile: props.dateProfile, cells: props.cells, renderRowIntro: props.renderRowIntro, showWeekNumbers: props.showWeekNumbers, clientWidth: props.clientWidth, clientHeight: props.clientHeight, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed })))));
    }
    componentDidMount() {
        this.requestScrollReset();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.dateProfile !== this.props.dateProfile) {
            this.requestScrollReset();
        }
        else {
            this.flushScrollReset();
        }
    }
    requestScrollReset() {
        this.needsScrollReset = true;
        this.flushScrollReset();
    }
    flushScrollReset() {
        if (this.needsScrollReset &&
            this.props.clientWidth // sizes computed?
        ) {
            const subjectEl = getScrollSubjectEl(this.elRef.current, this.props.dateProfile);
            if (subjectEl) {
                const originEl = subjectEl.closest('.fc-daygrid-body');
                const scrollEl = originEl.closest('.fc-scroller');
                const scrollTop = subjectEl.getBoundingClientRect().top -
                    originEl.getBoundingClientRect().top;
                scrollEl.scrollTop = scrollTop ? (scrollTop + 1) : 0; // overcome border
            }
            this.needsScrollReset = false;
        }
    }
}
function getScrollSubjectEl(containerEl, dateProfile) {
    let el;
    if (dateProfile.currentRangeUnit.match(/year|month/)) {
        el = containerEl.querySelector(`[data-date="${formatIsoMonthStr(dateProfile.currentDate)}-01"]`);
        // even if view is month-based, first-of-month might be hidden...
    }
    if (!el) {
        el = containerEl.querySelector(`[data-date="${formatDayString(dateProfile.currentDate)}"]`);
        // could still be hidden if an interior-view hidden day
    }
    return el;
}

class DayTableSlicer extends Slicer {
    constructor() {
        super(...arguments);
        this.forceDayIfListItem = true;
    }
    sliceRange(dateRange, dayTableModel) {
        return dayTableModel.sliceRange(dateRange);
    }
}

class DayTable extends DateComponent {
    constructor() {
        super(...arguments);
        this.slicer = new DayTableSlicer();
        this.tableRef = d();
    }
    render() {
        let { props, context } = this;
        return (y(Table, Object.assign({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })));
    }
}

class DayTableView extends TableView {
    constructor() {
        super(...arguments);
        this.buildDayTableModel = memoize(buildDayTableModel);
        this.headerRef = d();
        this.tableRef = d();
        // can't override any lifecycle methods from parent
    }
    render() {
        let { options, dateProfileGenerator } = this.context;
        let { props } = this;
        let dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
        let headerContent = options.dayHeaders && (y(DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 }));
        let bodyContent = (contentArg) => (y(DayTable, { ref: this.tableRef, dateProfile: props.dateProfile, dayTableModel: dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }));
        return options.dayMinWidth
            ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth)
            : this.renderSimpleLayout(headerContent, bodyContent);
    }
}
function buildDayTableModel(dateProfile, dateProfileGenerator) {
    let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

class TableDateProfileGenerator extends DateProfileGenerator {
    // Computes the date range that will be rendered
    buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
        let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
        let { props } = this;
        return buildDayTableRenderRange({
            currentRange: renderRange,
            snapToWeek: /^(year|month)$/.test(currentRangeUnit),
            fixedWeekCount: props.fixedWeekCount,
            dateEnv: props.dateEnv,
        });
    }
}
function buildDayTableRenderRange(props) {
    let { dateEnv, currentRange } = props;
    let { start, end } = currentRange;
    let endOfWeek;
    // year and month views should be aligned with weeks. this is already done for week
    if (props.snapToWeek) {
        start = dateEnv.startOfWeek(start);
        // make end-of-week if not already
        endOfWeek = dateEnv.startOfWeek(end);
        if (endOfWeek.valueOf() !== end.valueOf()) {
            end = addWeeks(endOfWeek, 1);
        }
    }
    // ensure 6 weeks
    if (props.fixedWeekCount) {
        // TODO: instead of these date-math gymnastics (for multimonth view),
        // compute dateprofiles of all months, then use start of first and end of last.
        let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth(addDays(currentRange.end, -1)));
        let rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
        diffWeeks(lastMonthRenderStart, end));
        end = addWeeks(end, 6 - rowCnt);
    }
    return { start, end };
}

var css_248z$2 = ":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:\"\";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}";
injectStyles(css_248z$2);

var index$2 = createPlugin({
    name: '@fullcalendar/daygrid',
    initialView: 'dayGridMonth',
    views: {
        dayGrid: {
            component: DayTableView,
            dateProfileGeneratorClass: TableDateProfileGenerator,
        },
        dayGridDay: {
            type: 'dayGrid',
            duration: { days: 1 },
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: { weeks: 1 },
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 1 },
            fixedWeekCount: true,
        },
        dayGridYear: {
            type: 'dayGrid',
            duration: { years: 1 },
        },
    },
});

class AllDaySplitter extends Splitter {
    getKeyInfo() {
        return {
            allDay: {},
            timed: {},
        };
    }
    getKeysForDateSpan(dateSpan) {
        if (dateSpan.allDay) {
            return ['allDay'];
        }
        return ['timed'];
    }
    getKeysForEventDef(eventDef) {
        if (!eventDef.allDay) {
            return ['timed'];
        }
        if (hasBgRendering(eventDef)) {
            return ['timed', 'allDay'];
        }
        return ['allDay'];
    }
}

const DEFAULT_SLAT_LABEL_FORMAT = createFormatter({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'short',
});
function TimeColsAxisCell(props) {
    let classNames = [
        'fc-timegrid-slot',
        'fc-timegrid-slot-label',
        props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
    ];
    return (y(ViewContextType.Consumer, null, (context) => {
        if (!props.isLabeled) {
            return (y("td", { className: classNames.join(' '), "data-time": props.isoTimeStr }));
        }
        let { dateEnv, options, viewApi } = context;
        let labelFormat = // TODO: fully pre-parse
         options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
            Array.isArray(options.slotLabelFormat) ? createFormatter(options.slotLabelFormat[0]) :
                createFormatter(options.slotLabelFormat);
        let renderProps = {
            level: 0,
            time: props.time,
            date: dateEnv.toDate(props.date),
            view: viewApi,
            text: dateEnv.format(props.date, labelFormat),
        };
        return (y(ContentContainer, { elTag: "td", elClasses: classNames, elAttrs: {
                'data-time': props.isoTimeStr,
            }, renderProps: renderProps, generatorName: "slotLabelContent", customGenerator: options.slotLabelContent, defaultGenerator: renderInnerContent$1, classNameGenerator: options.slotLabelClassNames, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, (InnerContent) => (y("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
            y(InnerContent, { elTag: "div", elClasses: [
                    'fc-timegrid-slot-label-cushion',
                    'fc-scrollgrid-shrink-cushion',
                ] })))));
    }));
}
function renderInnerContent$1(props) {
    return props.text;
}

class TimeBodyAxis extends BaseComponent {
    render() {
        return this.props.slatMetas.map((slatMeta) => (y("tr", { key: slatMeta.key },
            y(TimeColsAxisCell, Object.assign({}, slatMeta)))));
    }
}

const DEFAULT_WEEK_NUM_FORMAT = createFormatter({ week: 'short' });
const AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
class TimeColsView extends DateComponent {
    constructor() {
        super(...arguments);
        this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
        this.headerElRef = d();
        this.rootElRef = d();
        this.scrollerElRef = d();
        this.state = {
            slatCoords: null,
        };
        this.handleScrollTopRequest = (scrollTop) => {
            let scrollerEl = this.scrollerElRef.current;
            if (scrollerEl) { // TODO: not sure how this could ever be null. weirdness with the reducer
                scrollerEl.scrollTop = scrollTop;
            }
        };
        /* Header Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        this.renderHeadAxis = (rowKey, frameHeight = '') => {
            let { options } = this.context;
            let { dateProfile } = this.props;
            let range = dateProfile.renderRange;
            let dayCnt = diffDays(range.start, range.end);
            // only do in day views (to avoid doing in week views that dont need it)
            let navLinkAttrs = (dayCnt === 1)
                ? buildNavLinkAttrs(this.context, range.start, 'week')
                : {};
            if (options.weekNumbers && rowKey === 'day') {
                return (y(WeekNumberContainer, { elTag: "th", elClasses: [
                        'fc-timegrid-axis',
                        'fc-scrollgrid-shrink',
                    ], elAttrs: {
                        'aria-hidden': true,
                    }, date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, (InnerContent) => (y("div", { className: [
                        'fc-timegrid-axis-frame',
                        'fc-scrollgrid-shrink-frame',
                        'fc-timegrid-axis-frame-liquid',
                    ].join(' '), style: { height: frameHeight } },
                    y(InnerContent, { elTag: "a", elClasses: [
                            'fc-timegrid-axis-cushion',
                            'fc-scrollgrid-shrink-cushion',
                            'fc-scrollgrid-sync-inner',
                        ], elAttrs: navLinkAttrs })))));
            }
            return (y("th", { "aria-hidden": true, className: "fc-timegrid-axis" },
                y("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })));
        };
        /* Table Component Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
        // but DayGrid still needs to have classNames on inner elements in order to measure.
        this.renderTableRowAxis = (rowHeight) => {
            let { options, viewApi } = this.context;
            let renderProps = {
                text: options.allDayText,
                view: viewApi,
            };
            return (
            // TODO: make reusable hook. used in list view too
            y(ContentContainer, { elTag: "td", elClasses: [
                    'fc-timegrid-axis',
                    'fc-scrollgrid-shrink',
                ], elAttrs: {
                    'aria-hidden': true,
                }, renderProps: renderProps, generatorName: "allDayContent", customGenerator: options.allDayContent, defaultGenerator: renderAllDayInner$1, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, (InnerContent) => (y("div", { className: [
                    'fc-timegrid-axis-frame',
                    'fc-scrollgrid-shrink-frame',
                    rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : '',
                ].join(' '), style: { height: rowHeight } },
                y(InnerContent, { elTag: "span", elClasses: [
                        'fc-timegrid-axis-cushion',
                        'fc-scrollgrid-shrink-cushion',
                        'fc-scrollgrid-sync-inner',
                    ] })))));
        };
        this.handleSlatCoords = (slatCoords) => {
            this.setState({ slatCoords });
        };
    }
    // rendering
    // ----------------------------------------------------------------------------------------------------
    renderSimpleLayout(headerRowContent, allDayContent, timeContent) {
        let { context, props } = this;
        let sections = [];
        let stickyHeaderDates = getStickyHeaderDates(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                chunk: { content: allDayContent },
            });
            sections.push({
                type: 'body',
                key: 'all-day-divider',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                y("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    y("td", { className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunk: {
                scrollerElRef: this.scrollerElRef,
                content: timeContent,
            },
        });
        return (y(ViewContainer, { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: context.viewSpec },
            y(SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: 'shrink' }], sections: sections })));
    }
    renderHScrollLayout(headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
        let ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        let { context, props } = this;
        let stickyHeaderDates = !props.forPrint && getStickyHeaderDates(context.options);
        let stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(context.options);
        let sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: (arg) => (y("tr", { role: "presentation" }, this.renderHeadAxis('day', arg.rowSyncHeights[0]))),
                    },
                    {
                        key: 'cols',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                ],
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: (contentArg) => (y("tr", { role: "presentation" }, this.renderTableRowAxis(contentArg.rowSyncHeights[0]))),
                    },
                    {
                        key: 'cols',
                        content: allDayContent,
                    },
                ],
            });
            sections.push({
                key: 'all-day-divider',
                type: 'body',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                y("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    y("td", { colSpan: 2, className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        let isNowIndicator = context.options.nowIndicator;
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunks: [
                {
                    key: 'axis',
                    content: (arg) => (
                    // TODO: make this now-indicator arrow more DRY with TimeColsContent
                    y("div", { className: "fc-timegrid-axis-chunk" },
                        y("table", { "aria-hidden": true, style: { height: arg.expandRows ? arg.clientHeight : '' } },
                            arg.tableColGroupNode,
                            y("tbody", null,
                                y(TimeBodyAxis, { slatMetas: slatMetas }))),
                        y("div", { className: "fc-timegrid-now-indicator-container" },
                            y(NowTimer, { unit: isNowIndicator ? 'minute' : 'day' /* hacky */ }, (nowDate) => {
                                let nowIndicatorTop = isNowIndicator &&
                                    slatCoords &&
                                    slatCoords.safeComputeTop(nowDate); // might return void
                                if (typeof nowIndicatorTop === 'number') {
                                    return (y(NowIndicatorContainer, { elClasses: ['fc-timegrid-now-indicator-arrow'], elStyle: { top: nowIndicatorTop }, isAxis: true, date: nowDate }));
                                }
                                return null;
                            })))),
                },
                {
                    key: 'cols',
                    scrollerElRef: this.scrollerElRef,
                    content: timeContent,
                },
            ],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                key: 'footer',
                type: 'footer',
                isSticky: true,
                chunks: [
                    {
                        key: 'axis',
                        content: renderScrollShim,
                    },
                    {
                        key: 'cols',
                        content: renderScrollShim,
                    },
                ],
            });
        }
        return (y(ViewContainer, { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: context.viewSpec },
            y(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, forPrint: props.forPrint, collapsibleWidth: false, colGroups: [
                    { width: 'shrink', cols: [{ width: 'shrink' }] },
                    { cols: [{ span: colCnt, minWidth: dayMinWidth }] },
                ], sections: sections })));
    }
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    getAllDayMaxEventProps() {
        let { dayMaxEvents, dayMaxEventRows } = this.context.options;
        if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
            dayMaxEvents = undefined;
            dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
        }
        return { dayMaxEvents, dayMaxEventRows };
    }
}
function renderAllDayInner$1(renderProps) {
    return renderProps.text;
}

class TimeColsSlatsCoords {
    constructor(positions, dateProfile, slotDuration) {
        this.positions = positions;
        this.dateProfile = dateProfile;
        this.slotDuration = slotDuration;
    }
    safeComputeTop(date) {
        let { dateProfile } = this;
        if (rangeContainsMarker(dateProfile.currentRange, date)) {
            let startOfDayDate = startOfDay(date);
            let timeMs = date.valueOf() - startOfDayDate.valueOf();
            if (timeMs >= asRoughMs(dateProfile.slotMinTime) &&
                timeMs < asRoughMs(dateProfile.slotMaxTime)) {
                return this.computeTimeTop(createDuration(timeMs));
            }
        }
        return null;
    }
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    computeDateTop(when, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = startOfDay(when);
        }
        return this.computeTimeTop(createDuration(when.valueOf() - startOfDayDate.valueOf()));
    }
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
    // Eventually allow computation with arbirary slat dates.
    computeTimeTop(duration) {
        let { positions, dateProfile } = this;
        let len = positions.els.length;
        // floating-point value of # of slots covered
        let slatCoverage = (duration.milliseconds - asRoughMs(dateProfile.slotMinTime)) / asRoughMs(this.slotDuration);
        let slatIndex;
        let slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because slotMinTime/slotMaxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return positions.tops[slatIndex] +
            positions.getHeight(slatIndex) * slatRemainder;
    }
}

class TimeColsSlatsBody extends BaseComponent {
    render() {
        let { props, context } = this;
        let { options } = context;
        let { slatElRefs } = props;
        return (y("tbody", null, props.slatMetas.map((slatMeta, i) => {
            let renderProps = {
                time: slatMeta.time,
                date: context.dateEnv.toDate(slatMeta.date),
                view: context.viewApi,
            };
            return (y("tr", { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
                props.axis && (y(TimeColsAxisCell, Object.assign({}, slatMeta))),
                y(ContentContainer, { elTag: "td", elClasses: [
                        'fc-timegrid-slot',
                        'fc-timegrid-slot-lane',
                        !slatMeta.isLabeled && 'fc-timegrid-slot-minor',
                    ], elAttrs: {
                        'data-time': slatMeta.isoTimeStr,
                    }, renderProps: renderProps, generatorName: "slotLaneContent", customGenerator: options.slotLaneContent, classNameGenerator: options.slotLaneClassNames, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount })));
        })));
    }
}

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
class TimeColsSlats extends BaseComponent {
    constructor() {
        super(...arguments);
        this.rootElRef = d();
        this.slatElRefs = new RefMap();
    }
    render() {
        let { props, context } = this;
        return (y("div", { ref: this.rootElRef, className: "fc-timegrid-slots" },
            y("table", { "aria-hidden": true, className: context.theme.getClass('table'), style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                    height: props.minHeight,
                } },
                props.tableColGroupNode /* relies on there only being a single <col> for the axis */,
                y(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas }))));
    }
    componentDidMount() {
        this.updateSizing();
    }
    componentDidUpdate() {
        this.updateSizing();
    }
    componentWillUnmount() {
        if (this.props.onCoords) {
            this.props.onCoords(null);
        }
    }
    updateSizing() {
        let { context, props } = this;
        if (props.onCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            let rootEl = this.rootElRef.current;
            if (rootEl.offsetHeight) { // not hidden by css
                props.onCoords(new TimeColsSlatsCoords(new PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
            }
        }
    }
}
function collectSlatEls(elMap, slatMetas) {
    return slatMetas.map((slatMeta) => elMap[slatMeta.key]);
}

function splitSegsByCol(segs, colCnt) {
    let segsByCol = [];
    let i;
    for (i = 0; i < colCnt; i += 1) {
        segsByCol.push([]);
    }
    if (segs) {
        for (i = 0; i < segs.length; i += 1) {
            segsByCol[segs[i].col].push(segs[i]);
        }
    }
    return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
    let byRow = [];
    if (!ui) {
        for (let i = 0; i < colCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (let i = 0; i < colCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (let seg of ui.segs) {
            byRow[seg.col].segs.push(seg);
        }
    }
    return byRow;
}

class TimeColMoreLink extends BaseComponent {
    render() {
        let { props } = this;
        return (y(MoreLinkContainer, { elClasses: ['fc-timegrid-more-link'], elStyle: {
                top: props.top,
                bottom: props.bottom,
            }, allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props), defaultGenerator: renderMoreLinkInner, forceTimed: true }, (InnerContent) => (y(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky'] }))));
    }
}
function renderMoreLinkInner(props) {
    return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
    let hierarchy = new SegHierarchy();
    if (strictOrder != null) {
        hierarchy.strictOrder = strictOrder;
    }
    if (maxStackCnt != null) {
        hierarchy.maxStackCnt = maxStackCnt;
    }
    let hiddenEntries = hierarchy.addSegs(segInputs);
    let hiddenGroups = groupIntersectingEntries(hiddenEntries);
    let web = buildWeb(hierarchy);
    web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
    let segRects = webToRects(web);
    return { segRects, hiddenGroups };
}
function buildWeb(hierarchy) {
    const { entriesByLevel } = hierarchy;
    const buildNode = cacheable((level, lateral) => level + ':' + lateral, (level, lateral) => {
        let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
        let nextLevelRes = buildNodes(siblingRange, buildNode);
        let entry = entriesByLevel[level][lateral];
        return [
            Object.assign(Object.assign({}, entry), { nextLevelNodes: nextLevelRes[0] }),
            entry.thickness + nextLevelRes[1], // the pressure builds
        ];
    });
    return buildNodes(entriesByLevel.length
        ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
        : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
    if (!siblingRange) {
        return [[], 0];
    }
    let { level, lateralStart, lateralEnd } = siblingRange;
    let lateral = lateralStart;
    let pairs = [];
    while (lateral < lateralEnd) {
        pairs.push(buildNode(level, lateral));
        lateral += 1;
    }
    pairs.sort(cmpDescPressures);
    return [
        pairs.map(extractNode),
        pairs[0][1], // first item's pressure
    ];
}
function cmpDescPressures(a, b) {
    return b[1] - a[1];
}
function extractNode(a) {
    return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
    let { levelCoords, entriesByLevel } = hierarchy;
    let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
    let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
    let levelCnt = levelCoords.length;
    let level = subjectLevel;
    // skip past levels that are too high up
    for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
        ; // do nothing
    for (; level < levelCnt; level += 1) {
        let entries = entriesByLevel[level];
        let entry;
        let searchIndex = binarySearch(entries, subjectEntry.span.start, getEntrySpanEnd);
        let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
        let lateralEnd = lateralStart;
        while ( // loop through entries that horizontally intersect
        (entry = entries[lateralEnd]) && // but not past the whole seg list
            entry.span.start < subjectEntry.span.end) {
            lateralEnd += 1;
        }
        if (lateralStart < lateralEnd) {
            return { level, lateralStart, lateralEnd };
        }
    }
    return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
    const stretchNode = cacheable((node, startCoord, prevThickness) => buildEntryKey(node), (node, startCoord, prevThickness) => {
        let { nextLevelNodes, thickness } = node;
        let allThickness = thickness + prevThickness;
        let thicknessFraction = thickness / allThickness;
        let endCoord;
        let newChildren = [];
        if (!nextLevelNodes.length) {
            endCoord = totalThickness;
        }
        else {
            for (let childNode of nextLevelNodes) {
                if (endCoord === undefined) {
                    let res = stretchNode(childNode, startCoord, allThickness);
                    endCoord = res[0];
                    newChildren.push(res[1]);
                }
                else {
                    let res = stretchNode(childNode, endCoord, 0);
                    newChildren.push(res[1]);
                }
            }
        }
        let newThickness = (endCoord - startCoord) * thicknessFraction;
        return [endCoord - newThickness, Object.assign(Object.assign({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
    });
    return topLevelNodes.map((node) => stretchNode(node, 0, 0)[1]);
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
    let rects = [];
    const processNode = cacheable((node, levelCoord, stackDepth) => buildEntryKey(node), (node, levelCoord, stackDepth) => {
        let rect = Object.assign(Object.assign({}, node), { levelCoord,
            stackDepth, stackForward: 0 });
        rects.push(rect);
        return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
    });
    function processNodes(nodes, levelCoord, stackDepth) {
        let stackForward = 0;
        for (let node of nodes) {
            stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
        }
        return stackForward;
    }
    processNodes(topLevelNodes, 0, 0);
    return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
    const cache = {};
    return (...args) => {
        let key = keyFunc(...args);
        return (key in cache)
            ? cache[key]
            : (cache[key] = workFunc(...args));
    };
}

function computeSegVCoords(segs, colDate, slatCoords = null, eventMinHeight = 0) {
    let vcoords = [];
    if (slatCoords) {
        for (let i = 0; i < segs.length; i += 1) {
            let seg = segs[i];
            let spanStart = slatCoords.computeDateTop(seg.start, colDate);
            let spanEnd = Math.max(spanStart + (eventMinHeight || 0), // :(
            slatCoords.computeDateTop(seg.end, colDate));
            vcoords.push({
                start: Math.round(spanStart),
                end: Math.round(spanEnd), //
            });
        }
    }
    return vcoords;
}
function computeFgSegPlacements(segs, segVCoords, // might not have for every seg
eventOrderStrict, eventMaxStack) {
    let segInputs = [];
    let dumbSegs = []; // segs without coords
    for (let i = 0; i < segs.length; i += 1) {
        let vcoords = segVCoords[i];
        if (vcoords) {
            segInputs.push({
                index: i,
                thickness: 1,
                span: vcoords,
            });
        }
        else {
            dumbSegs.push(segs[i]);
        }
    }
    let { segRects, hiddenGroups } = buildPositioning(segInputs, eventOrderStrict, eventMaxStack);
    let segPlacements = [];
    for (let segRect of segRects) {
        segPlacements.push({
            seg: segs[segRect.index],
            rect: segRect,
        });
    }
    for (let dumbSeg of dumbSegs) {
        segPlacements.push({ seg: dumbSeg, rect: null });
    }
    return { segPlacements, hiddenGroups };
}

const DEFAULT_TIME_FORMAT$1 = createFormatter({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: false,
});
class TimeColEvent extends BaseComponent {
    render() {
        return (y(StandardEvent, Object.assign({}, this.props, { elClasses: [
                'fc-timegrid-event',
                'fc-v-event',
                this.props.isShort && 'fc-timegrid-event-short',
            ], defaultTimeFormat: DEFAULT_TIME_FORMAT$1 })));
    }
}

class TimeCol extends BaseComponent {
    constructor() {
        super(...arguments);
        this.sortEventSegs = memoize(sortEventSegs);
    }
    // TODO: memoize event-placement?
    render() {
        let { props, context } = this;
        let { options } = context;
        let isSelectMirror = options.selectMirror;
        let mirrorSegs = // yuck
         (props.eventDrag && props.eventDrag.segs) ||
            (props.eventResize && props.eventResize.segs) ||
            (isSelectMirror && props.dateSelectionSegs) ||
            [];
        let interactionAffectedInstances = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
        return (y(DayCellContainer, { elTag: "td", elRef: props.elRef, elClasses: [
                'fc-timegrid-col',
                ...(props.extraClassNames || []),
            ], elAttrs: Object.assign({ role: 'gridcell' }, props.extraDataAttrs), date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraRenderProps: props.extraRenderProps }, (InnerContent) => (y("div", { className: "fc-timegrid-col-frame" },
            y("div", { className: "fc-timegrid-col-bg" },
                this.renderFillSegs(props.businessHourSegs, 'non-business'),
                this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                this.renderFillSegs(props.dateSelectionSegs, 'highlight')),
            y("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)),
            y("div", { className: "fc-timegrid-col-events" }, this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror), 'mirror')),
            y("div", { className: "fc-timegrid-now-indicator-container" }, this.renderNowIndicator(props.nowIndicatorSegs)),
            hasCustomDayCellContent(options) && (y(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-col-misc'] }))))));
    }
    renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
        let { props } = this;
        if (props.forPrint) {
            return renderPlainFgSegs(sortedFgSegs, props);
        }
        return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey);
    }
    renderPositionedFgSegs(segs, // if not mirror, needs to be sorted
    segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
        let { eventMaxStack, eventShortHeight, eventOrderStrict, eventMinHeight } = this.context.options;
        let { date, slatCoords, eventSelection, todayRange, nowDate } = this.props;
        let isMirror = isDragging || isResizing || isDateSelecting;
        let segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
        let { segPlacements, hiddenGroups } = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack);
        return (y(_, null,
            this.renderHiddenGroups(hiddenGroups, segs),
            segPlacements.map((segPlacement) => {
                let { seg, rect } = segPlacement;
                let instanceId = seg.eventRange.instance.instanceId;
                let isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
                let vStyle = computeSegVStyle(rect && rect.span);
                let hStyle = (!isMirror && rect) ? this.computeSegHStyle(rect) : { left: 0, right: 0 };
                let isInset = Boolean(rect) && rect.stackForward > 0;
                let isShort = Boolean(rect) && (rect.span.end - rect.span.start) < eventShortHeight; // look at other places for this problem
                return (y("div", { className: 'fc-timegrid-event-harness' +
                        (isInset ? ' fc-timegrid-event-harness-inset' : ''), key: forcedKey || instanceId, style: Object.assign(Object.assign({ visibility: isVisible ? '' : 'hidden' }, vStyle), hStyle) },
                    y(TimeColEvent, Object.assign({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: isShort }, getSegMeta(seg, todayRange, nowDate)))));
            })));
    }
    // will already have eventMinHeight applied because segInputs already had it
    renderHiddenGroups(hiddenGroups, segs) {
        let { extraDateSpan, dateProfile, todayRange, nowDate, eventSelection, eventDrag, eventResize } = this.props;
        return (y(_, null, hiddenGroups.map((hiddenGroup) => {
            let positionCss = computeSegVStyle(hiddenGroup.span);
            let hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
            return (y(TimeColMoreLink, { key: buildIsoString(computeEarliestSegStart(hiddenSegs)), hiddenSegs: hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
        })));
    }
    renderFillSegs(segs, fillType) {
        let { props, context } = this;
        let segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
        let children = segVCoords.map((vcoords, i) => {
            let seg = segs[i];
            return (y("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-timegrid-bg-harness", style: computeSegVStyle(vcoords) }, fillType === 'bg-event' ?
                y(BgEvent, Object.assign({ seg: seg }, getSegMeta(seg, props.todayRange, props.nowDate))) :
                renderFill(fillType)));
        });
        return y(_, null, children);
    }
    renderNowIndicator(segs) {
        let { slatCoords, date } = this.props;
        if (!slatCoords) {
            return null;
        }
        return segs.map((seg, i) => (y(NowIndicatorContainer
        // key doesn't matter. will only ever be one
        , { 
            // key doesn't matter. will only ever be one
            key: i, elClasses: ['fc-timegrid-now-indicator-line'], elStyle: {
                top: slatCoords.computeDateTop(seg.start, date),
            }, isAxis: false, date: date })));
    }
    computeSegHStyle(segHCoords) {
        let { isRtl, options } = this.context;
        let shouldOverlap = options.slotEventOverlap;
        let nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
        let farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
        let left; // amount of space from left edge, a fraction of the total width
        let right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
        }
        if (isRtl) {
            left = 1 - farCoord;
            right = nearCoord;
        }
        else {
            left = nearCoord;
            right = 1 - farCoord;
        }
        let props = {
            zIndex: segHCoords.stackDepth + 1,
            left: left * 100 + '%',
            right: right * 100 + '%',
        };
        if (shouldOverlap && !segHCoords.stackForward) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    }
}
function renderPlainFgSegs(sortedFgSegs, { todayRange, nowDate, eventSelection, eventDrag, eventResize }) {
    let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
        (eventResize ? eventResize.affectedInstances : null) ||
        {};
    return (y(_, null, sortedFgSegs.map((seg) => {
        let instanceId = seg.eventRange.instance.instanceId;
        return (y("div", { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
            y(TimeColEvent, Object.assign({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, getSegMeta(seg, todayRange, nowDate)))));
    })));
}
function computeSegVStyle(segVCoords) {
    if (!segVCoords) {
        return { top: '', bottom: '' };
    }
    return {
        top: segVCoords.start,
        bottom: -segVCoords.end,
    };
}
function compileSegsFromEntries(segEntries, allSegs) {
    return segEntries.map((segEntry) => allSegs[segEntry.index]);
}

class TimeColsContent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.splitFgEventSegs = memoize(splitSegsByCol);
        this.splitBgEventSegs = memoize(splitSegsByCol);
        this.splitBusinessHourSegs = memoize(splitSegsByCol);
        this.splitNowIndicatorSegs = memoize(splitSegsByCol);
        this.splitDateSelectionSegs = memoize(splitSegsByCol);
        this.splitEventDrag = memoize(splitInteractionByCol);
        this.splitEventResize = memoize(splitInteractionByCol);
        this.rootElRef = d();
        this.cellElRefs = new RefMap();
    }
    render() {
        let { props, context } = this;
        let nowIndicatorTop = context.options.nowIndicator &&
            props.slatCoords &&
            props.slatCoords.safeComputeTop(props.nowDate); // might return void
        let colCnt = props.cells.length;
        let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
        let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
        let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
        let nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
        let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
        let eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
        let eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
        return (y("div", { className: "fc-timegrid-cols", ref: this.rootElRef },
            y("table", { role: "presentation", style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                } },
                props.tableColGroupNode,
                y("tbody", { role: "presentation" },
                    y("tr", { role: "row" },
                        props.axis && (y("td", { "aria-hidden": true, className: "fc-timegrid-col fc-timegrid-axis" },
                            y("div", { className: "fc-timegrid-col-frame" },
                                y("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === 'number' && (y(NowIndicatorContainer, { elClasses: ['fc-timegrid-now-indicator-arrow'], elStyle: { top: nowIndicatorTop }, isAxis: true, date: props.nowDate })))))),
                        props.cells.map((cell, i) => (y(TimeCol, { key: cell.key, elRef: this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i], bgEventSegs: bgEventSegsByRow[i], businessHourSegs: businessHourSegsByRow[i], nowIndicatorSegs: nowIndicatorSegsByRow[i], dateSelectionSegs: dateSelectionSegsByRow[i], eventDrag: eventDragByRow[i], eventResize: eventResizeByRow[i], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint }))))))));
    }
    componentDidMount() {
        this.updateCoords();
    }
    componentDidUpdate() {
        this.updateCoords();
    }
    updateCoords() {
        let { props } = this;
        if (props.onColCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            props.onColCoords(new PositionCache(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
            false));
        }
    }
}
function collectCellEls(elMap, cells) {
    return cells.map((cell) => elMap[cell.key]);
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
class TimeCols extends DateComponent {
    constructor() {
        super(...arguments);
        this.processSlotOptions = memoize(processSlotOptions);
        this.state = {
            slatCoords: null,
        };
        this.handleRootEl = (el) => {
            if (el) {
                this.context.registerInteractiveComponent(this, {
                    el,
                    isHitComboAllowed: this.props.isHitComboAllowed,
                });
            }
            else {
                this.context.unregisterInteractiveComponent(this);
            }
        };
        this.handleScrollRequest = (request) => {
            let { onScrollTopRequest } = this.props;
            let { slatCoords } = this.state;
            if (onScrollTopRequest && slatCoords) {
                if (request.time) {
                    let top = slatCoords.computeTimeTop(request.time);
                    top = Math.ceil(top); // zoom can give weird floating-point values. rather scroll a little bit further
                    if (top) {
                        top += 1; // to overcome top border that slots beyond the first have. looks better
                    }
                    onScrollTopRequest(top);
                }
                return true;
            }
            return false;
        };
        this.handleColCoords = (colCoords) => {
            this.colCoords = colCoords;
        };
        this.handleSlatCoords = (slatCoords) => {
            this.setState({ slatCoords });
            if (this.props.onSlatCoords) {
                this.props.onSlatCoords(slatCoords);
            }
        };
    }
    render() {
        let { props, state } = this;
        return (y("div", { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            y(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */, onCoords: this.handleSlatCoords }),
            y(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })));
    }
    componentDidMount() {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    }
    componentDidUpdate(prevProps) {
        this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
    }
    componentWillUnmount() {
        this.scrollResponder.detach();
    }
    queryHit(positionLeft, positionTop) {
        let { dateEnv, options } = this.context;
        let { colCoords } = this;
        let { dateProfile } = this.props;
        let { slatCoords } = this.state;
        let { snapDuration, snapsPerSlot } = this.processSlotOptions(this.props.slotDuration, options.snapDuration);
        let colIndex = colCoords.leftToIndex(positionLeft);
        let slatIndex = slatCoords.positions.topToIndex(positionTop);
        if (colIndex != null && slatIndex != null) {
            let cell = this.props.cells[colIndex];
            let slatTop = slatCoords.positions.tops[slatIndex];
            let slatHeight = slatCoords.positions.getHeight(slatIndex);
            let partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            let localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            let snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            let dayDate = this.props.cells[colIndex].date;
            let time = addDurations(dateProfile.slotMinTime, multiplyDuration(snapDuration, snapIndex));
            let start = dateEnv.add(dayDate, time);
            let end = dateEnv.add(start, snapDuration);
            return {
                dateProfile,
                dateSpan: Object.assign({ range: { start, end }, allDay: false }, cell.extraDateSpan),
                dayEl: colCoords.els[colIndex],
                rect: {
                    left: colCoords.lefts[colIndex],
                    right: colCoords.rights[colIndex],
                    top: slatTop,
                    bottom: slatTop + slatHeight,
                },
                layer: 0,
            };
        }
        return null;
    }
}
function processSlotOptions(slotDuration, snapDurationOverride) {
    let snapDuration = snapDurationOverride || slotDuration;
    let snapsPerSlot = wholeDivideDurations(slotDuration, snapDuration);
    if (snapsPerSlot === null) {
        snapDuration = slotDuration;
        snapsPerSlot = 1;
        // TODO: say warning?
    }
    return { snapDuration, snapsPerSlot };
}

class DayTimeColsSlicer extends Slicer {
    sliceRange(range, dayRanges) {
        let segs = [];
        for (let col = 0; col < dayRanges.length; col += 1) {
            let segRange = intersectRanges(range, dayRanges[col]);
            if (segRange) {
                segs.push({
                    start: segRange.start,
                    end: segRange.end,
                    isStart: segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: segRange.end.valueOf() === range.end.valueOf(),
                    col,
                });
            }
        }
        return segs;
    }
}

class DayTimeCols extends DateComponent {
    constructor() {
        super(...arguments);
        this.buildDayRanges = memoize(buildDayRanges);
        this.slicer = new DayTimeColsSlicer();
        this.timeColsRef = d();
    }
    render() {
        let { props, context } = this;
        let { dateProfile, dayTableModel } = props;
        let { nowIndicator, nextDayThreshold } = context.options;
        let dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
        // give it the first row of cells
        // TODO: would move this further down hierarchy, but sliceNowDate needs it
        return (y(NowTimer, { unit: nowIndicator ? 'minute' : 'day' }, (nowDate, todayRange) => (y(TimeCols, Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile: dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate: nowDate, nowIndicatorSegs: nowIndicator && this.slicer.sliceNowDate(nowDate, dateProfile, nextDayThreshold, context, dayRanges), todayRange: todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords })))));
    }
}
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
    let ranges = [];
    for (let date of dayTableModel.headerDates) {
        ranges.push({
            start: dateEnv.add(date, dateProfile.slotMinTime),
            end: dateEnv.add(date, dateProfile.slotMaxTime),
        });
    }
    return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
const STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
    let dayStart = new Date(0);
    let slatTime = slotMinTime;
    let slatIterator = createDuration(0);
    let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
    let metas = [];
    while (asRoughMs(slatTime) < asRoughMs(slotMaxTime)) {
        let date = dateEnv.add(dayStart, slatTime);
        let isLabeled = wholeDivideDurations(slatIterator, labelInterval) !== null;
        metas.push({
            date,
            time: slatTime,
            key: date.toISOString(),
            isoTimeStr: formatIsoTimeString(date),
            isLabeled,
        });
        slatTime = addDurations(slatTime, slotDuration);
        slatIterator = addDurations(slatIterator, slotDuration);
    }
    return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
    let i;
    let labelInterval;
    let slotsPerLabel;
    // find the smallest stock label interval that results in more than one slots-per-label
    for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
        labelInterval = createDuration(STOCK_SUB_DURATIONS[i]);
        slotsPerLabel = wholeDivideDurations(labelInterval, slotDuration);
        if (slotsPerLabel !== null && slotsPerLabel > 1) {
            return labelInterval;
        }
    }
    return slotDuration; // fall back
}

class DayTimeColsView extends TimeColsView {
    constructor() {
        super(...arguments);
        this.buildTimeColsModel = memoize(buildTimeColsModel);
        this.buildSlatMetas = memoize(buildSlatMetas);
    }
    render() {
        let { options, dateEnv, dateProfileGenerator } = this.context;
        let { props } = this;
        let { dateProfile } = props;
        let dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
        let splitProps = this.allDaySplitter.splitProps(props);
        let slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
        let { dayMinWidth } = options;
        let hasAttachedAxis = !dayMinWidth;
        let hasDetachedAxis = dayMinWidth;
        let headerContent = options.dayHeaders && (y(DayHeader, { dates: dayTableModel.headerDates, dateProfile: dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null }));
        let allDayContent = (options.allDaySlot !== false) && ((contentArg) => (y(DayTable, Object.assign({}, splitProps.allDay, { dateProfile: dateProfile, dayTableModel: dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, this.getAllDayMaxEventProps()))));
        let timeGridContent = (contentArg) => (y(DayTimeCols, Object.assign({}, splitProps.timed, { dayTableModel: dayTableModel, dateProfile: dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas: slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: this.handleScrollTopRequest })));
        return hasDetachedAxis
            ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords)
            : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
    }
}
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
    let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new DayTableModel(daySeries, false);
}

var css_248z$1 = ".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:\"\\00a0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}";
injectStyles(css_248z$1);

const OPTION_REFINERS$1 = {
    allDaySlot: Boolean,
};

var index$1 = createPlugin({
    name: '@fullcalendar/timegrid',
    initialView: 'timeGridWeek',
    optionRefiners: OPTION_REFINERS$1,
    views: {
        timeGrid: {
            component: DayTimeColsView,
            usesMinMaxTime: true,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true, // a bad name. confused with overlap/constraint system
        },
        timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 },
        },
        timeGridWeek: {
            type: 'timeGrid',
            duration: { weeks: 1 },
        },
    },
});

class ListViewHeaderRow extends BaseComponent {
    constructor() {
        super(...arguments);
        this.state = {
            textId: getUniqueDomId(),
        };
    }
    render() {
        let { theme, dateEnv, options, viewApi } = this.context;
        let { cellId, dayDate, todayRange } = this.props;
        let { textId } = this.state;
        let dayMeta = getDateMeta(dayDate, todayRange);
        // will ever be falsy?
        let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
        // will ever be falsy? also, BAD NAME "alt"
        let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
        let renderProps = Object.assign({ date: dateEnv.toDate(dayDate), view: viewApi, textId,
            text,
            sideText, navLinkAttrs: buildNavLinkAttrs(this.context, dayDate), sideNavLinkAttrs: buildNavLinkAttrs(this.context, dayDate, 'day', false) }, dayMeta);
        // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
        return (y(ContentContainer, { elTag: "tr", elClasses: [
                'fc-list-day',
                ...getDayClassNames(dayMeta, theme),
            ], elAttrs: {
                'data-date': formatDayString(dayDate),
            }, renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInnerContent, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => ( // TODO: force-hide top border based on :first-child
        y("th", { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
            y(InnerContent, { elTag: "div", elClasses: [
                    'fc-list-day-cushion',
                    theme.getClass('tableCellShaded'),
                ] })))));
    }
}
function renderInnerContent(props) {
    return (y(_, null,
        props.text && (y("a", Object.assign({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text)),
        props.sideText && ( /* not keyboard tabbable */y("a", Object.assign({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText))));
}

const DEFAULT_TIME_FORMAT = createFormatter({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: 'short',
});
class ListViewEventRow extends BaseComponent {
    render() {
        let { props, context } = this;
        let { options } = context;
        let { seg, timeHeaderId, eventHeaderId, dateHeaderId } = props;
        let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
        return (y(EventContainer, Object.assign({}, props, { elTag: "tr", elClasses: [
                'fc-list-event',
                seg.eventRange.def.url && 'fc-event-forced-url',
            ], defaultGenerator: () => renderEventInnerContent(seg, context) /* weird */, seg: seg, timeText: "", disableDragging: true, disableResizing: true }), (InnerContent, eventContentArg) => (y(_, null,
            buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
            y("td", { "aria-hidden": true, className: "fc-list-event-graphic" },
                y("span", { className: "fc-list-event-dot", style: {
                        borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor,
                    } })),
            y(InnerContent, { elTag: "td", elClasses: ['fc-list-event-title'], elAttrs: { headers: `${eventHeaderId} ${dateHeaderId}` } })))));
    }
}
function renderEventInnerContent(seg, context) {
    let interactiveAttrs = getSegAnchorAttrs(seg, context);
    return (y("a", Object.assign({}, interactiveAttrs), seg.eventRange.def.title));
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
    let { options } = context;
    if (options.displayEventTime !== false) {
        let eventDef = seg.eventRange.def;
        let eventInstance = seg.eventRange.instance;
        let doAllDay = false;
        let timeText;
        if (eventDef.allDay) {
            doAllDay = true;
        }
        else if (isMultiDayRange(seg.eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
            if (seg.isStart) {
                timeText = buildSegTimeText(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
            }
            else if (seg.isEnd) {
                timeText = buildSegTimeText(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
            }
            else {
                doAllDay = true;
            }
        }
        else {
            timeText = buildSegTimeText(seg, timeFormat, context);
        }
        if (doAllDay) {
            let renderProps = {
                text: context.options.allDayText,
                view: context.viewApi,
            };
            return (y(ContentContainer, { elTag: "td", elClasses: ['fc-list-event-time'], elAttrs: {
                    headers: `${timeHeaderId} ${dateHeaderId}`,
                }, renderProps: renderProps, generatorName: "allDayContent", customGenerator: options.allDayContent, defaultGenerator: renderAllDayInner, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }));
        }
        return (y("td", { className: "fc-list-event-time" }, timeText));
    }
    return null;
}
function renderAllDayInner(renderProps) {
    return renderProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
class ListView extends DateComponent {
    constructor() {
        super(...arguments);
        this.computeDateVars = memoize(computeDateVars);
        this.eventStoreToSegs = memoize(this._eventStoreToSegs);
        this.state = {
            timeHeaderId: getUniqueDomId(),
            eventHeaderId: getUniqueDomId(),
            dateHeaderIdRoot: getUniqueDomId(),
        };
        this.setRootEl = (rootEl) => {
            if (rootEl) {
                this.context.registerInteractiveComponent(this, {
                    el: rootEl,
                });
            }
            else {
                this.context.unregisterInteractiveComponent(this);
            }
        };
    }
    render() {
        let { props, context } = this;
        let { dayDates, dayRanges } = this.computeDateVars(props.dateProfile);
        let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
        return (y(ViewContainer, { elRef: this.setRootEl, elClasses: [
                'fc-list',
                context.theme.getClass('table'),
                context.options.stickyHeaderDates !== false ?
                    'fc-list-sticky' :
                    '',
            ], viewSpec: context.viewSpec },
            y(Scroller, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? 'visible' : 'hidden', overflowY: props.isHeightAuto ? 'visible' : 'auto' }, eventSegs.length > 0 ?
                this.renderSegList(eventSegs, dayDates) :
                this.renderEmptyMessage())));
    }
    renderEmptyMessage() {
        let { options, viewApi } = this.context;
        let renderProps = {
            text: options.noEventsText,
            view: viewApi,
        };
        return (y(ContentContainer, { elTag: "div", elClasses: ['fc-list-empty'], renderProps: renderProps, generatorName: "noEventsContent", customGenerator: options.noEventsContent, defaultGenerator: renderNoEventsInner, classNameGenerator: options.noEventsClassNames, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, (InnerContent) => (y(InnerContent, { elTag: "div", elClasses: ['fc-list-empty-cushion'] }))));
    }
    renderSegList(allSegs, dayDates) {
        let { theme, options } = this.context;
        let { timeHeaderId, eventHeaderId, dateHeaderIdRoot } = this.state;
        let segsByDay = groupSegsByDay(allSegs); // sparse array
        return (y(NowTimer, { unit: "day" }, (nowDate, todayRange) => {
            let innerNodes = [];
            for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                let daySegs = segsByDay[dayIndex];
                if (daySegs) { // sparse array, so might be undefined
                    let dayStr = formatDayString(dayDates[dayIndex]);
                    let dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
                    // append a day header
                    innerNodes.push(y(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                    daySegs = sortEventSegs(daySegs, options.eventOrder);
                    for (let seg of daySegs) {
                        innerNodes.push(y(ListViewEventRow, Object.assign({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId: timeHeaderId, eventHeaderId: eventHeaderId, dateHeaderId: dateHeaderId }, getSegMeta(seg, todayRange, nowDate))));
                    }
                }
            }
            return (y("table", { className: 'fc-list-table ' + theme.getClass('table') },
                y("thead", null,
                    y("tr", null,
                        y("th", { scope: "col", id: timeHeaderId }, options.timeHint),
                        y("th", { scope: "col", "aria-hidden": true }),
                        y("th", { scope: "col", id: eventHeaderId }, options.eventHint))),
                y("tbody", null, innerNodes)));
        }));
    }
    _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
        return this.eventRangesToSegs(sliceEventStore(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
    }
    eventRangesToSegs(eventRanges, dayRanges) {
        let segs = [];
        for (let eventRange of eventRanges) {
            segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
        }
        return segs;
    }
    eventRangeToSegs(eventRange, dayRanges) {
        let { dateEnv } = this.context;
        let { nextDayThreshold } = this.context.options;
        let range = eventRange.range;
        let allDay = eventRange.def.allDay;
        let dayIndex;
        let segRange;
        let seg;
        let segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
            segRange = intersectRanges(range, dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    component: this,
                    eventRange,
                    start: segRange.start,
                    end: segRange.end,
                    isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                    dayIndex,
                };
                segs.push(seg);
                // detect when range won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !allDay &&
                    dayIndex + 1 < dayRanges.length &&
                    range.end <
                        dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                    seg.end = range.end;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    }
}
function renderNoEventsInner(renderProps) {
    return renderProps.text;
}
function computeDateVars(dateProfile) {
    let dayStart = startOfDay(dateProfile.renderRange.start);
    let viewEnd = dateProfile.renderRange.end;
    let dayDates = [];
    let dayRanges = [];
    while (dayStart < viewEnd) {
        dayDates.push(dayStart);
        dayRanges.push({
            start: dayStart,
            end: addDays(dayStart, 1),
        });
        dayStart = addDays(dayStart, 1);
    }
    return { dayDates, dayRanges };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
    let segsByDay = []; // sparse array
    let i;
    let seg;
    for (i = 0; i < segs.length; i += 1) {
        seg = segs[i];
        (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
            .push(seg);
    }
    return segsByDay;
}

var css_248z = ":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:\"\";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}";
injectStyles(css_248z);

const OPTION_REFINERS = {
    listDayFormat: createFalsableFormatter,
    listDaySideFormat: createFalsableFormatter,
    noEventsClassNames: identity,
    noEventsContent: identity,
    noEventsDidMount: identity,
    noEventsWillUnmount: identity,
    // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
    return input === false ? null : createFormatter(input);
}

var index = createPlugin({
    name: '@fullcalendar/list',
    optionRefiners: OPTION_REFINERS,
    views: {
        list: {
            component: ListView,
            buttonTextKey: 'list',
            listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' }, // like "January 1, 2016"
        },
        listDay: {
            type: 'list',
            duration: { days: 1 },
            listDayFormat: { weekday: 'long' }, // day-of-week is all we need. full date is probably in headerToolbar
        },
        listWeek: {
            type: 'list',
            duration: { weeks: 1 },
            listDayFormat: { weekday: 'long' },
            listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        },
        listMonth: {
            type: 'list',
            duration: { month: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
        listYear: {
            type: 'list',
            duration: { year: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
    },
});

function renderCalendar(url){
  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    initialView: 'listYear',
    plugins: [
    index,
    index$3,
    index$1,
    index$2
  ],
  events: {
    url: url,
    format: 'ics'
  }
  });
  calendar.render();
  return calendar;
}

export { renderCalendar };
