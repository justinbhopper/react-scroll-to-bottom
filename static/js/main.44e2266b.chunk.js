(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],[,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AutoHideFollowButton",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Composer",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"FunctionContext",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Panel",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"StateContext",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"useAnimating",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"useAnimatingToEnd",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"useAtBottom",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"useAtEnd",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"useAtStart",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"useAtTop",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"useMode",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"useObserveScrollPosition",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"useScrollTo",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"useScrollToBottom",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"useScrollToEnd",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"useScrollToStart",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"useScrollToTop",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"useSticky",{enumerable:!0,get:function(){return E.default}}),t.default=void 0;var r=_(n(48)),o=_(n(22)),a=_(n(51)),l=_(n(26)),u=_(n(13)),c=_(n(27)),i=_(n(14)),s=_(n(58)),f=_(n(59)),d=_(n(60)),m=_(n(61)),b=_(n(62)),v=_(n(63)),p=_(n(64)),h=_(n(65)),y=_(n(66)),g=_(n(67)),O=_(n(23)),j=_(n(68)),S=_(n(69)),E=_(n(24));function _(e){return e&&e.__esModule?e:{default:e}}var C=a.default;t.default=C,(0,r.default)()},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.useContext)(a.default)};var r,o=n(0),a=(r=n(14))&&r.__esModule?r:{default:r}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.useContext)(a.default)};var r,o=n(0),a=(r=n(13))&&r.__esModule?r:{default:r}},,,,,,,function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext({scrollTo:function(){return 0},scrollToBottom:function(){return 0},scrollToEnd:function(){return 0},scrollToStart:function(){return 0},scrollToTop:function(){return 0}});o.displayName="ScrollToBottomFunctionContext";var a=o;t.default=a},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext({animating:!1,animatingToEnd:!1,atBottom:!0,atEnd:!0,atStart:!1,atTop:!0,mode:"bottom",sticky:!0});o.displayName="ScrollToBottomStateContext";var a=o;t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.default)().styleToClassName};var r,o=(r=n(25))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext({offsetHeight:0,scrollHeight:0,setTarget:function(){return 0},styleToClassName:function(){return""}});o.displayName="ScrollToBottomInternalContext";var a=o;t.default=a},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(12)),o=i(n(5)),a=i(n(0)),l=i(n(23)),u=i(n(24)),c=i(n(15));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d={backgroundColor:"rgba(0, 0, 0, .2)",borderRadius:10,borderWidth:0,bottom:5,cursor:"pointer",height:20,outline:0,position:"absolute",right:20,width:20,"&:hover":{backgroundColor:"rgba(0, 0, 0, .4)"},"&:active":{backgroundColor:"rgba(0, 0, 0, .6)"}},m=function(e){var t=e.children,n=e.className,o=s((0,u.default)(),1)[0],i=(0,c.default)()(d),f=(0,l.default)();return!o&&a.default.createElement("button",{className:(0,r.default)(i,(n||"")+""),onClick:f,type:"button"},t)};m.defaultProps={children:void 0,className:""},m.propTypes={children:o.default.any,className:o.default.string};var b=m;t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.default)().scrollToEnd};var r,o=(r=n(6))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return[(0,o.default)().sticky]};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.useContext)(a.default)};var r,o=n(0),a=(r=n(16))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=b(n(70)),a=b(n(5)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),u=b(n(52)),c=b(n(55)),i=b(n(13)),s=b(n(16)),f=b(n(57)),d=b(n(14));function m(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function b(e){return e&&e.__esModule?e:{default:e}}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h={};function y(e){var t=e.mode,n=e.target,r=n.offsetHeight,o=n.scrollHeight,a=n.scrollTop,l=o-a-r<1,u=a<1;return{atBottom:l,atEnd:"top"===t?u:l,atStart:"top"!==t?u:l,atTop:u}}function g(e,t){return"top"===t&&0===e||"bottom"===t&&"100%"===e}var O=function(e){var t=e.checkInterval,n=e.children,r=e.debounce,a=e.mode,m=e.nonce;a="top"===a?"top":"bottom";var b=(0,l.useRef)(0),p=v((0,l.useState)("top"===a?0:"100%"),2),O=p[0],j=p[1],S=v((0,l.useState)(null),2),E=S[0],_=S[1],C=v((0,l.useState)(0),2),w=C[0],T=C[1],M=v((0,l.useState)(0),2),k=M[0],P=M[1],N=v((0,l.useState)(!1),2),A=N[0],x=N[1],B=v((0,l.useState)(!0),2),I=B[0],L=B[1],H=v((0,l.useState)(!0),2),R=H[0],D=H[1],W=v((0,l.useState)(!0),2),F=W[0],V=W[1],q=v((0,l.useState)(!1),2),U=q[0],$=q[1],J=v((0,l.useState)(!0),2),K=J[0],Y=J[1],z=(0,l.useRef)([]),G=(0,l.useCallback)((function(e){return z.current.push(e),E&&e({scrollTop:E.scrollTop}),function(){var t=z.current,n=t.indexOf(e);~n&&t.splice(n,1)}}),[z,E]),Q=(0,l.useCallback)((function(){b.current=Date.now(),x(!1),j(null)}),[b,x,j]),X=(0,l.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.behavior;"auto"===n?(Q(),E.scrollTop="100%"===e?E.scrollHeight-E.offsetHeight:e):("smooth"!==n&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollTo". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),x(!0),j(e))}),[Q,x,j,E]),Z=(0,l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.behavior;"smooth"!==t&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToBottom". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),X("100%",{behavior:t||"smooth"})}),[X]),ee=(0,l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.behavior;"smooth"!==t&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToTop". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),X(0,{behavior:t||"smooth"})}),[X]),te=(0,l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.behavior;"smooth"!==t&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToEnd". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var n={behavior:t||"smooth"};"top"===a?ee(n):Z(n)}),[a,Z,ee]),ne=(0,l.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.behavior;"smooth"!==t&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToStart". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var n={behavior:t||"smooth"};"top"===a?Z(n):ee(n)}),[a,Z,ee]);(0,l.useEffect)((function(){if(K){var e=!1,n=(r=function(){K&&E&&!y({mode:a,target:E}).atEnd?e?Date.now()-e>34&&(!A&&te({behavior:"smooth"}),e=!1):e=Date.now():e=!1},o=Math.max(17,t)||17,r(),setInterval(r,o));return function(){return clearInterval(n)}}var r,o}),[A,t,a,te,K,E]);var re=(0,l.useCallback)((function(e){if(!(e.timeStampLow<=b.current)&&E){var t=y({mode:a,target:E}),n=t.atBottom,r=t.atEnd,o=t.atStart,l=t.atTop;L(n),D(r),$(o),V(l);var u=E.offsetHeight,c=E.scrollHeight,i=u!==w,s=c!==k;i&&T(u),s&&P(c),!i&&!s&&Y(A&&g(O,a)||r),null===O&&x(!1);var f=E.scrollTop;z.current.forEach((function(e){return e({scrollTop:f})}))}}),[A,b,a,w,k,z,O,x,L,D,$,V,T,P,Y,E]),oe=(0,l.useMemo)((function(){var e=h[m]||(h[m]=(0,o.default)({key:"react-scroll-to-bottom--css-".concat((0,u.default)()),nonce:m}));return function(t){return e.css(t)+""}}),[m]),ae=(0,l.useMemo)((function(){return{observeScrollPosition:G,offsetHeight:w,scrollHeight:k,setTarget:_,styleToClassName:oe}}),[G,w,k,_,oe]),le=A&&g(O,a),ue=(0,l.useMemo)((function(){return{animating:A,animatingToEnd:le,atBottom:I,atEnd:R,atStart:U,atTop:F,mode:a,sticky:K}}),[A,le,I,R,U,F,a,K]),ce=(0,l.useMemo)((function(){return{scrollTo:X,scrollToBottom:Z,scrollToEnd:te,scrollToStart:ne,scrollToTop:ee}}),[X,Z,te,ne,ee]);return(0,l.useEffect)((function(){if(E){var e=function(){return P(E.scrollHeight)};return E.addEventListener("focus",e,{capture:!0,passive:!0}),function(){return E.removeEventListener("focus",e)}}}),[E]),l.default.createElement(s.default.Provider,{value:ae},l.default.createElement(i.default.Provider,{value:ce},l.default.createElement(d.default.Provider,{value:ue},n,E&&l.default.createElement(c.default,{debounce:r,name:"scroll",onEvent:re,target:E}),E&&null!==O&&l.default.createElement(f.default,{name:"scrollTop",onEnd:Q,target:E,value:O}))))};O.defaultProps={checkInterval:100,children:void 0,debounce:17,mode:void 0,nonce:void 0},O.propTypes={checkInterval:a.default.number,children:a.default.any,debounce:a.default.number,mode:a.default.oneOf(["bottom","top"]),nonce:a.default.string};var j=O;t.default=j},function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(12)),a=s(n(5)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),u=s(n(16)),c=s(n(15));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}var f={height:"100%",overflowY:"auto",width:"100%"},d=function(e){var t=e.children,n=e.className,r=(0,l.useContext)(u.default).setTarget,a=(0,c.default)()(f);return l.default.createElement("div",{className:(0,o.default)(a,(n||"")+""),ref:r},t)};d.defaultProps={children:void 0,className:void 0},d.propTypes={children:a.default.any,className:a.default.string};var m=d;t.default=m},,,function(e,t,n){e.exports=n(71)},,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){!function(t,n){try{var r=e.document;if("undefined"!==typeof r&&r.createElement&&r.head&&r.head.appendChild){var o=r.querySelector('html meta[name="'.concat(encodeURI(t),'"]'))||r.createElement("meta");o.setAttribute("name",t),o.setAttribute("content",n),r.head.appendChild(o)}}catch(a){}}("react-scroll-to-bottom:version","4.0.0")}}).call(this,n(20))},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(12)),o=s(n(5)),a=s(n(0)),l=s(n(22)),u=s(n(26)),c=s(n(27)),i=s(n(15));function s(e){return e&&e.__esModule?e:{default:e}}var f={position:"relative"},d=function(e){var t=e.children,n=e.className,o=e.followButtonClassName,u=e.scrollViewClassName,s=(0,i.default)()(f);return a.default.createElement("div",{className:(0,r.default)(s,(n||"")+"")},a.default.createElement(c.default,{className:(u||"")+""},t),a.default.createElement(l.default,{className:(o||"")+""}))};d.defaultProps={children:void 0,className:void 0,followButtonClassName:void 0,scrollViewClassName:void 0},d.propTypes={children:o.default.any,className:o.default.string,followButtonClassName:o.default.string,scrollViewClassName:o.default.string};var m=function(e){var t=e.checkInterval,n=e.children,r=e.className,o=e.debounce,l=e.followButtonClassName,c=e.mode,i=e.nonce,s=e.scrollViewClassName;return a.default.createElement(u.default,{checkInterval:t,debounce:o,mode:c,nonce:i},a.default.createElement(d,{className:r,followButtonClassName:l,scrollViewClassName:s},n))};m.defaultProps={checkInterval:void 0,children:void 0,className:void 0,debounce:void 0,followButtonClassName:void 0,mode:void 0,nonce:void 0,scrollViewClassName:void 0},m.propTypes={checkInterval:o.default.number,children:o.default.any,className:o.default.string,debounce:o.default.number,followButtonClassName:o.default.string,mode:o.default.oneOf(["bottom","top"]),nonce:o.default.string,scrollViewClassName:o.default.string};var b=m;t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.default)().toString(26).substr(2,5).replace(/\d/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+65)}))};var r,o=(r=n(53))&&r.__esModule?r:{default:r}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),a=(r=n(56))&&r.__esModule?r:{default:r};var l=function(e){var t=e.debounce,n=e.name,r=e.onEvent,l=e.target,u=(0,o.useRef)();u.current=r;var c=(0,o.useMemo)((function(){return(0,a.default)((function(e){var t=u.current;t&&t(e)}),t)}),[t,u]),i=(0,o.useCallback)((function(e){e.timeStampLow=Date.now(),c(e)}),[c]);return(0,o.useLayoutEffect)((function(){return l.addEventListener(n,i,{passive:!0}),i({target:l,type:n}),function(){return l.removeEventListener(n,i)}}),[n,i,l]),!1};l.defaultProps={debounce:200};var u=l;t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!t)return e;var n=0,r=null;return function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];var u=Date.now();u-n>t?(e.apply(void 0,a),n=u):(clearTimeout(r),r=setTimeout((function(){e.apply(void 0,a),n=Date.now()}),Math.max(0,t-u+n)))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(0),a=(r=n(5))&&r.__esModule?r:{default:r};function l(e,t){var n=Math.sign(t-e),r=e+Math.sqrt(Math.abs(t-e))*n;return n>0?Math.min(t,r):Math.max(t,r)}function u(e,t,n,r){for(var o=e,a=0;a<r;a++)o=n(o,t);return o}var c=function(e){var t=e.name,n=e.onEnd,r=e.target,a=e.value,c=(0,o.useRef)(),i=(0,o.useCallback)((function(e,t,o,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now();"100%"!==o&&"number"!==typeof o||(cancelAnimationFrame(c.current),c.current=requestAnimationFrame((function(){if(r){var c="100%"===o?r.scrollHeight-r.offsetHeight:o,f=u(t,c,l,(Date.now()-s)/5);Math.abs(c-f)<1.5&&(f=c),r[e]=f,c===f?n&&n(!0):i(e,t,o,a+1,s)}})))}),[c,n,r]),s=(0,o.useCallback)((function(){cancelAnimationFrame(c.current),n&&n(!1)}),[n]);return(0,o.useLayoutEffect)((function(){return i(t,r[t],a,1),r?(r.addEventListener("pointerdown",s,{passive:!0}),r.addEventListener("wheel",s,{passive:!0}),function(){r.removeEventListener("pointerdown",s),r.removeEventListener("wheel",s),cancelAnimationFrame(c.current)}):function(){return cancelAnimationFrame(c.current)}}),[i,c,s,t,r,a]),!1};c.propTypes={name:a.default.string.isRequired,onEnd:a.default.func,target:a.default.any.isRequired,value:a.default.oneOfType([a.default.number,a.default.oneOf(["100%"])]).isRequired};var i=c;t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return[(0,o.default)().animating]};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return[(0,o.default)().animatingToEnd]};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return[(0,o.default)().atBottom]};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return[(0,o.default)().atEnd]};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return[(0,o.default)().atStart]};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return[(0,o.default)().atTop]};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return[(0,o.default)().mode]};var r,o=(r=n(4))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];"function"!==typeof e?console.error('react-scroll-to-bottom: First argument passed to "useObserveScrollPosition" must be a function.'):Array.isArray(t)||console.error('react-scroll-to-bottom: Second argument passed to "useObserveScrollPosition" must be an array if specified.');var n=(0,a.default)(),r=n.observeScrollPosition;(0,o.useEffect)((function(){return e&&r(e)}),[].concat(l(t),[r]))};var r,o=n(0),a=(r=n(25))&&r.__esModule?r:{default:r};function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.default)().scrollTo};var r,o=(r=n(6))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.default)().scrollToBottom};var r,o=(r=n(6))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.default)().scrollToStart};var r,o=(r=n(6))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,o.default)().scrollToTop};var r,o=(r=n(6))&&r.__esModule?r:{default:r}},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(28),l=n.n(a),u=n(8),c=n(2),i=n(18),s=n(10),f=n(17),d=n(3),m=n.n(d),b=n(29),v=n.n(b),p=n(1),h=n.n(p),y={backgroundColor:"#FFF",boxShadow:"0 0 10px rgba(0, 0, 0, .2)","& > ul":{display:"flex",listStyleType:"none",margin:0,padding:10,"&:first-child":{paddingBottom:0},"& > li:not(:first-child)":{marginLeft:4}},"& > .badges > li":{alignItems:"center",backgroundColor:"#DDD",borderRadius:5,display:"flex",flex:1,fontFamily:"Arial",fontSize:"50%",justifyContent:"center",padding:"2px 4px",textAlign:"center","&.lit":{backgroundColor:"Red",color:"White"}}},g=function(e){var t=e.nonce,n=Object(r.useMemo)((function(){return Object(s.a)({nonce:t}).css(y)}),[t]),a=Object(r.useRef)(),l=Object(p.useAnimating)(),u=Object(c.a)(l,1)[0],i=Object(p.useAtBottom)(),f=Object(c.a)(i,1)[0],d=Object(p.useAtEnd)(),b=Object(c.a)(d,1)[0],v=Object(p.useAtStart)(),h=Object(c.a)(v,1)[0],g=Object(p.useAtTop)(),O=Object(c.a)(g,1)[0],j=Object(p.useMode)(),S=Object(c.a)(j,1)[0],E=Object(p.useSticky)(),_=Object(c.a)(E,1)[0],C=Object(p.useScrollTo)(),w=Object(p.useScrollToBottom)(),T=Object(p.useScrollToEnd)(),M=Object(p.useScrollToStart)(),k=Object(p.useScrollToTop)(),P=Object(r.useCallback)((function(){return C(100,{behavior:"smooth"})}),[C]),N=Object(r.useCallback)((function(){return w({behavior:"smooth"})}),[w]),A=Object(r.useCallback)((function(){return T({behavior:"smooth"})}),[T]),x=Object(r.useCallback)((function(){return M({behavior:"smooth"})}),[M]),B=Object(r.useCallback)((function(){return k({behavior:"smooth"})}),[k]);return Object(p.useObserveScrollPosition)((function(e){var t=e.scrollTop,n=a.current;n&&(n.innerText=t+"px")}),[a]),o.a.createElement("div",{className:n+""},o.a.createElement("ul",{className:"actions"},o.a.createElement("li",null,o.a.createElement("button",{onClick:N},"Scroll to bottom")),o.a.createElement("li",null,o.a.createElement("button",{onClick:B},"Scroll to top")),o.a.createElement("li",null,o.a.createElement("button",{onClick:x},"Scroll to start")),o.a.createElement("li",null,o.a.createElement("button",{onClick:A},"Scroll to end")),o.a.createElement("li",null,o.a.createElement("button",{onClick:P},"100px")),o.a.createElement("li",{ref:a})),o.a.createElement("ul",{className:"badges"},o.a.createElement("li",{className:m()({lit:u})},"ANIMATING"),o.a.createElement("li",{className:m()({lit:f})},"AT BOTTOM"),o.a.createElement("li",{className:m()({lit:b})},"AT END"),o.a.createElement("li",{className:m()({lit:h})},"AT START"),o.a.createElement("li",{className:m()({lit:O})},"AT TOP"),o.a.createElement("li",{className:m()({lit:"top"!==S})},"STICK TO BOTTOM"),o.a.createElement("li",{className:m()({lit:_})},"STICKY")))},O={"0%":{opacity:.2},"100%":{opacity:1}},j={"& > ul.button-bar":{display:"flex",listStyleType:"none",margin:0,padding:0,"& > li:not(:last-child)":{marginRight:10}},"& > .panes":{display:"flex","& > *":{flex:1},"& > *:not(:last-child)":{marginRight:10}},"& > .version":{bottom:10,position:"absolute"}},S={borderColor:"Black",borderStyle:"solid",borderWidth:1,height:400,marginTop:10},E={height:600},_={backgroundColor:"#EEE"},C={paddingLeft:10,paddingRight:10,"&:not(.sticky)":{backgroundColor:"rgba(255, 0, 0, .1)"}},w={height:300},T=function(e){return new Array(e).fill().map((function(){return Object(f.loremIpsum)({units:"paragraph"})}))},M=function(e){var t=e.nonce,n=Object(r.useMemo)((function(){var e=Object(s.a)({nonce:t}),n=e.css,r=e.keyframes;return{containerCSS:n(S),largeContainerCSS:n(E),rootCSS:n(j),scrollViewCSS:n(_),scrollViewPaddingCSS:n(Object(i.a)(Object(i.a)({},C),{},{"& > p":{animation:"".concat(r(O)," 500ms")}})),smallContainerCSS:n(w)}}),[t]),a=n.containerCSS,l=n.largeContainerCSS,d=n.rootCSS,b=n.scrollViewCSS,y=n.scrollViewPaddingCSS,M=n.smallContainerCSS,k=Object(r.useState)(""),P=Object(c.a)(k,2),N=P[0],A=P[1],x=Object(r.useState)(!1),B=Object(c.a)(x,2),I=B[0],L=B[1],H=Object(r.useState)(T(10)),R=Object(c.a)(H,2),D=R[0],W=R[1],F=Object(r.useState)(!1),V=Object(c.a)(F,2),q=V[0],U=V[1],$=Object(r.useState)((function(){return document.querySelector('head meta[name="react-scroll-to-bottom:version"]').getAttribute("content")})),J=Object(c.a)($,1)[0],K=Object(r.useCallback)((function(e){return W([].concat(Object(u.a)(D),Object(u.a)(T(e))))}),[D,W]),Y=Object(r.useCallback)((function(){return K(1)}),[K]),z=Object(r.useCallback)((function(){return K(10)}),[K]),G=Object(r.useCallback)((function(){return W([].concat(Object(u.a)(D),["Button: "+Object(f.loremIpsum)({units:"words"})]))}),[D,W]),Q=Object(r.useCallback)((function(){return W([])}),[W]),X=Object(r.useCallback)((function(e){var t=e.target.checked;return U(t)}),[U]),Z=Object(r.useCallback)((function(){return A("large")}),[A]),ee=Object(r.useCallback)((function(){return A("")}),[A]),te=Object(r.useCallback)((function(){return A("small")}),[A]),ne=Object(r.useCallback)((function(e){var t=e.target.checked;return L(t)}),[]),re=Object(r.useMemo)((function(){return m()(a+"","small"===N?M+"":"large"===N?l+"":"")}),[a,N,l,M]),oe=Object(r.useCallback)((function(e){switch(e.keyCode){case 49:return Y();case 50:return z();case 51:return Q();case 52:return te();case 53:return ee();case 54:return Z();case 55:return G();case 82:return window.location.reload()}}),[Y,z,G,Q,Z,ee,te]);return Object(r.useEffect)((function(){return window.addEventListener("keydown",oe),function(){return window.removeEventListener("keydown",oe)}}),[oe]),o.a.createElement("div",{className:d+""},o.a.createElement("ul",{className:"button-bar"},o.a.createElement("li",null,o.a.createElement("button",{onClick:Y},"Add new paragraph")),o.a.createElement("li",null,o.a.createElement("button",{onClick:z},"Add 10 new paragraphs")),o.a.createElement("li",null,o.a.createElement("button",{onClick:Q},"Clear")),o.a.createElement("li",null,o.a.createElement("button",{onClick:te},"Small")),o.a.createElement("li",null,o.a.createElement("button",{onClick:ee},"Normal")),o.a.createElement("li",null,o.a.createElement("button",{onClick:Z},"Large")),o.a.createElement("li",null,o.a.createElement("button",{onClick:G},"Add a button")),o.a.createElement("li",null,o.a.createElement("label",null,o.a.createElement("input",{checked:I,onChange:ne,type:"checkbox"}),"Add one every second")),o.a.createElement("li",null,o.a.createElement("label",null,o.a.createElement("input",{checked:q,onChange:X,type:"checkbox"}),"Show command bar"))),o.a.createElement("div",{className:"panes"},o.a.createElement(h.a,{className:re,nonce:"a1b2c3d",scrollViewClassName:b+""},q&&o.a.createElement(g,{nonce:t}),o.a.createElement(p.StateContext.Consumer,null,(function(e){var t=e.sticky;return o.a.createElement("div",{className:m()(y+"",{sticky:t})},D.map((function(e){return o.a.createElement("p",{key:e},e.startsWith("Button: ")?o.a.createElement("button",{type:"button"},e.substr(8)):e)})))})),q&&o.a.createElement(g,{nonce:t})),o.a.createElement(h.a,{className:re,mode:"top",nonce:"a1b2c3d"},q&&o.a.createElement(g,{nonce:t}),o.a.createElement(p.StateContext.Consumer,null,(function(e){var t=e.sticky;return o.a.createElement("div",{className:m()(y+"",{sticky:t})},Object(u.a)(D).reverse().map((function(e){return o.a.createElement("p",{key:e},e.startsWith("Button: ")?o.a.createElement("button",{type:"button"},e.substr(8)):e)})))})),q&&o.a.createElement(g,{nonce:t}))),o.a.createElement("div",{className:"version"},o.a.createElement("code",null,"react-scroll-to-bottom@",J)," has loaded."),I&&o.a.createElement(v.a,{callback:Y,enabled:!0,timeout:1e3}))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(M,{nonce:"a1b2c3d"}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-scroll-to-bottom",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-scroll-to-bottom","/service-worker.js");k?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):P(e)}))}}()}],[[30,1,2]]]);
//# sourceMappingURL=main.44e2266b.chunk.js.map