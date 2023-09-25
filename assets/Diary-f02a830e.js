import{n as U,m as Q,r as w,b as Mt,d as je,F as Lt,G as Ft,j as o,c as X,N as Bt,Z as ve,P as re,s as be,u as bt,H as zt,I as Wt,J as Nt}from"./index-6891c9c9.js";import{D as ue,a as It,m as Yt}from"./descriptionTextMargin-d99a7e3c.js";import{T as Qt}from"./Title-8647ac01.js";import{c as ce,f as Ht}from"./formatDate-d1383d55.js";import{c as de,j as V,C as Ut}from"./Calendar-b3eae890.js";const He=U.ul`
  display: grid;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${Q.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 593px;


  }
  ${Q.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,Vt=e=>e.diary.products,Xt=e=>e.diary.exercises,Gt=e=>e.diary.burnedCalories,Jt=e=>e.diary.consumedCalories,Kt=e=>e.diary.doneExercisesTime;var gt={exports:{}};(function(e,n){(function(r,d){e.exports=d(w)})(Mt,t=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(u,a)=>{a.match=s,a.parse=p;var i=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,y=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,h=/^(?:(min|max)-)?(.+)/,b=/(em|rem|px|cm|mm|in|pt|pc)?$/,l=/(dpi|dpcm|dppx)?$/;function s(O,x){return p(O).some(function(_){var D=_.inverse,P=_.type==="all"||x.type===_.type;if(P&&D||!(P||D))return!1;var z=_.expressions.every(function(j){var R=j.feature,$=j.modifier,T=j.value,S=x[R];if(!S)return!1;switch(R){case"orientation":case"scan":return S.toLowerCase()===T.toLowerCase();case"width":case"height":case"device-width":case"device-height":T=f(T),S=f(S);break;case"resolution":T=m(T),S=m(S);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":T=g(T),S=g(S);break;case"grid":case"color":case"color-index":case"monochrome":T=parseInt(T,10)||1,S=parseInt(S,10)||0;break}switch($){case"min":return S>=T;case"max":return S<=T;default:return S===T}});return z&&!D||!z&&D})}function p(O){return O.split(",").map(function(x){x=x.trim();var _=x.match(i),D=_[1],P=_[2],z=_[3]||"",j={};return j.inverse=!!D&&D.toLowerCase()==="not",j.type=P?P.toLowerCase():"all",z=z.match(/\([^\)]+\)/g)||[],j.expressions=z.map(function(R){var $=R.match(y),T=$[1].toLowerCase().match(h);return{modifier:T[1],feature:T[2],value:$[2]}}),j})}function g(O){var x=Number(O),_;return x||(_=O.match(/^(\d+)\s*\/\s*(\d+)$/),x=_[1]/_[2]),x}function m(O){var x=parseFloat(O),_=String(O).match(l)[1];switch(_){case"dpcm":return x/2.54;case"dppx":return x*96;default:return x}}function f(O){var x=parseFloat(O),_=String(O).match(b)[1];switch(_){case"em":return x*16;case"rem":return x*16;case"cm":return x*96/2.54;case"mm":return x*96/2.54/10;case"in":return x*96;case"pt":return x*72;case"pc":return x*72/12;default:return x}}},"./node_modules/hyphenate-style-name/index.js":(u,a,i)=>{i.r(a),i.d(a,{default:()=>p});var y=/[A-Z]/g,h=/^ms-/,b={};function l(g){return"-"+g.toLowerCase()}function s(g){if(b.hasOwnProperty(g))return b[g];var m=g.replace(y,l);return b[g]=h.test(m)?"-"+m:m}const p=s},"./node_modules/matchmediaquery/index.js":(u,a,i)=>{var y=i("./node_modules/css-mediaquery/index.js").match,h=typeof window<"u"?window.matchMedia:null;function b(s,p,g){var m=this;if(h&&!g){var f=h.call(window,s);this.matches=f.matches,this.media=f.media,f.addListener(_)}else this.matches=y(s,p),this.media=s;this.addListener=O,this.removeListener=x,this.dispose=D;function O(P){f&&f.addListener(P)}function x(P){f&&f.removeListener(P)}function _(P){m.matches=P.matches,m.media=P.media}function D(){f&&f.removeListener(_)}}function l(s,p,g){return new b(s,p,g)}u.exports=l},"./node_modules/object-assign/index.js":u=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function h(l){if(l==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(l)}function b(){try{if(!Object.assign)return!1;var l=new String("abc");if(l[5]="de",Object.getOwnPropertyNames(l)[0]==="5")return!1;for(var s={},p=0;p<10;p++)s["_"+String.fromCharCode(p)]=p;var g=Object.getOwnPropertyNames(s).map(function(f){return s[f]});if(g.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(f){m[f]=f}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}u.exports=b()?Object.assign:function(l,s){for(var p,g=h(l),m,f=1;f<arguments.length;f++){p=Object(arguments[f]);for(var O in p)i.call(p,O)&&(g[O]=p[O]);if(a){m=a(p);for(var x=0;x<m.length;x++)y.call(p,m[x])&&(g[m[x]]=p[m[x]])}}return g}},"./node_modules/prop-types/checkPropTypes.js":(u,a,i)=>{var y=function(){};{var h=i("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),b={},l=i("./node_modules/prop-types/lib/has.js");y=function(p){var g="Warning: "+p;typeof console<"u"&&console.error(g);try{throw new Error(g)}catch{}}}function s(p,g,m,f,O){for(var x in p)if(l(p,x)){var _;try{if(typeof p[x]!="function"){var D=Error((f||"React class")+": "+m+" type `"+x+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof p[x]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw D.name="Invariant Violation",D}_=p[x](g,x,f,m,null,h)}catch(z){_=z}if(_&&!(_ instanceof Error)&&y((f||"React class")+": type specification of "+m+" `"+x+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof _+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),_ instanceof Error&&!(_.message in b)){b[_.message]=!0;var P=O?O():"";y("Failed "+m+" type: "+_.message+(P??""))}}}s.resetWarningCache=function(){b={}},u.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":(u,a,i)=>{var y=i("./node_modules/react-is/index.js"),h=i("./node_modules/object-assign/index.js"),b=i("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),l=i("./node_modules/prop-types/lib/has.js"),s=i("./node_modules/prop-types/checkPropTypes.js"),p=function(){};p=function(m){var f="Warning: "+m;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function g(){return null}u.exports=function(m,f){var O=typeof Symbol=="function"&&Symbol.iterator,x="@@iterator";function _(v){var E=v&&(O&&v[O]||v[x]);if(typeof E=="function")return E}var D="<<anonymous>>",P={array:$("array"),bigint:$("bigint"),bool:$("boolean"),func:$("function"),number:$("number"),object:$("object"),string:$("string"),symbol:$("symbol"),any:T(),arrayOf:S,element:G(),elementType:Z(),instanceOf:K,node:oe(),objectOf:J,oneOf:M,oneOfType:q,shape:te,exact:fe};function z(v,E){return v===E?v!==0||1/v===1/E:v!==v&&E!==E}function j(v,E){this.message=v,this.data=E&&typeof E=="object"?E:{},this.stack=""}j.prototype=Error.prototype;function R(v){var E={},W=0;function F(N,L,B,I,H,Y,C){if(I=I||D,Y=Y||B,C!==b){if(f){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}else if(typeof console<"u"){var pe=I+":"+B;!E[pe]&&W<3&&(p("You are manually calling a React.PropTypes validation function for the `"+Y+"` prop on `"+I+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),E[pe]=!0,W++)}}return L[B]==null?N?L[B]===null?new j("The "+H+" `"+Y+"` is marked as required "+("in `"+I+"`, but its value is `null`.")):new j("The "+H+" `"+Y+"` is marked as required in "+("`"+I+"`, but its value is `undefined`.")):null:v(L,B,I,H,Y)}var A=F.bind(null,!1);return A.isRequired=F.bind(null,!0),A}function $(v){function E(W,F,A,N,L,B){var I=W[F],H=ye(I);if(H!==v){var Y=xe(I);return new j("Invalid "+N+" `"+L+"` of type "+("`"+Y+"` supplied to `"+A+"`, expected ")+("`"+v+"`."),{expectedType:v})}return null}return R(E)}function T(){return R(g)}function S(v){function E(W,F,A,N,L){if(typeof v!="function")return new j("Property `"+L+"` of component `"+A+"` has invalid PropType notation inside arrayOf.");var B=W[F];if(!Array.isArray(B)){var I=ye(B);return new j("Invalid "+N+" `"+L+"` of type "+("`"+I+"` supplied to `"+A+"`, expected an array."))}for(var H=0;H<B.length;H++){var Y=v(B,H,A,N,L+"["+H+"]",b);if(Y instanceof Error)return Y}return null}return R(E)}function G(){function v(E,W,F,A,N){var L=E[W];if(!m(L)){var B=ye(L);return new j("Invalid "+A+" `"+N+"` of type "+("`"+B+"` supplied to `"+F+"`, expected a single ReactElement."))}return null}return R(v)}function Z(){function v(E,W,F,A,N){var L=E[W];if(!y.isValidElementType(L)){var B=ye(L);return new j("Invalid "+A+" `"+N+"` of type "+("`"+B+"` supplied to `"+F+"`, expected a single ReactElement type."))}return null}return R(v)}function K(v){function E(W,F,A,N,L){if(!(W[F]instanceof v)){var B=v.name||D,I=Se(W[F]);return new j("Invalid "+N+" `"+L+"` of type "+("`"+I+"` supplied to `"+A+"`, expected ")+("instance of `"+B+"`."))}return null}return R(E)}function M(v){if(!Array.isArray(v))return arguments.length>1?p("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):p("Invalid argument supplied to oneOf, expected an array."),g;function E(W,F,A,N,L){for(var B=W[F],I=0;I<v.length;I++)if(z(B,v[I]))return null;var H=JSON.stringify(v,function(C,ee){var pe=xe(ee);return pe==="symbol"?String(ee):ee});return new j("Invalid "+N+" `"+L+"` of value `"+String(B)+"` "+("supplied to `"+A+"`, expected one of "+H+"."))}return R(E)}function J(v){function E(W,F,A,N,L){if(typeof v!="function")return new j("Property `"+L+"` of component `"+A+"` has invalid PropType notation inside objectOf.");var B=W[F],I=ye(B);if(I!=="object")return new j("Invalid "+N+" `"+L+"` of type "+("`"+I+"` supplied to `"+A+"`, expected an object."));for(var H in B)if(l(B,H)){var Y=v(B,H,A,N,L+"."+H,b);if(Y instanceof Error)return Y}return null}return R(E)}function q(v){if(!Array.isArray(v))return p("Invalid argument supplied to oneOfType, expected an instance of array."),g;for(var E=0;E<v.length;E++){var W=v[E];if(typeof W!="function")return p("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Me(W)+" at index "+E+"."),g}function F(A,N,L,B,I){for(var H=[],Y=0;Y<v.length;Y++){var C=v[Y],ee=C(A,N,L,B,I,b);if(ee==null)return null;ee.data&&l(ee.data,"expectedType")&&H.push(ee.data.expectedType)}var pe=H.length>0?", expected one of type ["+H.join(", ")+"]":"";return new j("Invalid "+B+" `"+I+"` supplied to "+("`"+L+"`"+pe+"."))}return R(F)}function oe(){function v(E,W,F,A,N){return Oe(E[W])?null:new j("Invalid "+A+" `"+N+"` supplied to "+("`"+F+"`, expected a ReactNode."))}return R(v)}function ne(v,E,W,F,A){return new j((v||"React class")+": "+E+" type `"+W+"."+F+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+A+"`.")}function te(v){function E(W,F,A,N,L){var B=W[F],I=ye(B);if(I!=="object")return new j("Invalid "+N+" `"+L+"` of type `"+I+"` "+("supplied to `"+A+"`, expected `object`."));for(var H in v){var Y=v[H];if(typeof Y!="function")return ne(A,N,L,H,xe(Y));var C=Y(B,H,A,N,L+"."+H,b);if(C)return C}return null}return R(E)}function fe(v){function E(W,F,A,N,L){var B=W[F],I=ye(B);if(I!=="object")return new j("Invalid "+N+" `"+L+"` of type `"+I+"` "+("supplied to `"+A+"`, expected `object`."));var H=h({},W[F],v);for(var Y in H){var C=v[Y];if(l(v,Y)&&typeof C!="function")return ne(A,N,L,Y,xe(C));if(!C)return new j("Invalid "+N+" `"+L+"` key `"+Y+"` supplied to `"+A+"`.\nBad object: "+JSON.stringify(W[F],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(v),null,"  "));var ee=C(B,Y,A,N,L+"."+Y,b);if(ee)return ee}return null}return R(E)}function Oe(v){switch(typeof v){case"number":case"string":case"undefined":return!0;case"boolean":return!v;case"object":if(Array.isArray(v))return v.every(Oe);if(v===null||m(v))return!0;var E=_(v);if(E){var W=E.call(v),F;if(E!==v.entries){for(;!(F=W.next()).done;)if(!Oe(F.value))return!1}else for(;!(F=W.next()).done;){var A=F.value;if(A&&!Oe(A[1]))return!1}}else return!1;return!0;default:return!1}}function Ae(v,E){return v==="symbol"?!0:E?E["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&E instanceof Symbol:!1}function ye(v){var E=typeof v;return Array.isArray(v)?"array":v instanceof RegExp?"object":Ae(E,v)?"symbol":E}function xe(v){if(typeof v>"u"||v===null)return""+v;var E=ye(v);if(E==="object"){if(v instanceof Date)return"date";if(v instanceof RegExp)return"regexp"}return E}function Me(v){var E=xe(v);switch(E){case"array":case"object":return"an "+E;case"boolean":case"date":case"regexp":return"a "+E;default:return E}}function Se(v){return!v.constructor||!v.constructor.name?D:v.constructor.name}return P.checkPropTypes=s,P.resetWarningCache=s.resetWarningCache,P.PropTypes=P,P}},"./node_modules/prop-types/index.js":(u,a,i)=>{{var y=i("./node_modules/react-is/index.js"),h=!0;u.exports=i("./node_modules/prop-types/factoryWithTypeCheckers.js")(y.isElement,h)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":u=>{var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";u.exports=a},"./node_modules/prop-types/lib/has.js":u=>{u.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(u,a)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var i=typeof Symbol=="function"&&Symbol.for,y=i?Symbol.for("react.element"):60103,h=i?Symbol.for("react.portal"):60106,b=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,s=i?Symbol.for("react.profiler"):60114,p=i?Symbol.for("react.provider"):60109,g=i?Symbol.for("react.context"):60110,m=i?Symbol.for("react.async_mode"):60111,f=i?Symbol.for("react.concurrent_mode"):60111,O=i?Symbol.for("react.forward_ref"):60112,x=i?Symbol.for("react.suspense"):60113,_=i?Symbol.for("react.suspense_list"):60120,D=i?Symbol.for("react.memo"):60115,P=i?Symbol.for("react.lazy"):60116,z=i?Symbol.for("react.block"):60121,j=i?Symbol.for("react.fundamental"):60117,R=i?Symbol.for("react.responder"):60118,$=i?Symbol.for("react.scope"):60119;function T(C){return typeof C=="string"||typeof C=="function"||C===b||C===f||C===s||C===l||C===x||C===_||typeof C=="object"&&C!==null&&(C.$$typeof===P||C.$$typeof===D||C.$$typeof===p||C.$$typeof===g||C.$$typeof===O||C.$$typeof===j||C.$$typeof===R||C.$$typeof===$||C.$$typeof===z)}function S(C){if(typeof C=="object"&&C!==null){var ee=C.$$typeof;switch(ee){case y:var pe=C.type;switch(pe){case m:case f:case b:case s:case l:case x:return pe;default:var Qe=pe&&pe.$$typeof;switch(Qe){case g:case O:case P:case D:case p:return Qe;default:return ee}}case h:return ee}}}var G=m,Z=f,K=g,M=p,J=y,q=O,oe=b,ne=P,te=D,fe=h,Oe=s,Ae=l,ye=x,xe=!1;function Me(C){return xe||(xe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),Se(C)||S(C)===m}function Se(C){return S(C)===f}function v(C){return S(C)===g}function E(C){return S(C)===p}function W(C){return typeof C=="object"&&C!==null&&C.$$typeof===y}function F(C){return S(C)===O}function A(C){return S(C)===b}function N(C){return S(C)===P}function L(C){return S(C)===D}function B(C){return S(C)===h}function I(C){return S(C)===s}function H(C){return S(C)===l}function Y(C){return S(C)===x}a.AsyncMode=G,a.ConcurrentMode=Z,a.ContextConsumer=K,a.ContextProvider=M,a.Element=J,a.ForwardRef=q,a.Fragment=oe,a.Lazy=ne,a.Memo=te,a.Portal=fe,a.Profiler=Oe,a.StrictMode=Ae,a.Suspense=ye,a.isAsyncMode=Me,a.isConcurrentMode=Se,a.isContextConsumer=v,a.isContextProvider=E,a.isElement=W,a.isForwardRef=F,a.isFragment=A,a.isLazy=N,a.isMemo=L,a.isPortal=B,a.isProfiler=I,a.isStrictMode=H,a.isSuspense=Y,a.isValidElementType=T,a.typeOf=S})()},"./node_modules/react-is/index.js":(u,a,i)=>{u.exports=i("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(u,a,i)=>{i.r(a),i.d(a,{shallowEqualArrays:()=>h,shallowEqualObjects:()=>y});function y(b,l){if(b===l)return!0;if(!b||!l)return!1;var s=Object.keys(b),p=Object.keys(l),g=s.length;if(p.length!==g)return!1;for(var m=0;m<g;m++){var f=s[m];if(b[f]!==l[f]||!Object.prototype.hasOwnProperty.call(l,f))return!1}return!0}function h(b,l){if(b===l)return!0;if(!b||!l)return!1;var s=b.length;if(l.length!==s)return!1;for(var p=0;p<s;p++)if(b[p]!==l[p])return!1;return!0}},"./src/Component.ts":function(u,a,i){var y=this&&this.__rest||function(s,p){var g={};for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&p.indexOf(m)<0&&(g[m]=s[m]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,m=Object.getOwnPropertySymbols(s);f<m.length;f++)p.indexOf(m[f])<0&&Object.prototype.propertyIsEnumerable.call(s,m[f])&&(g[m[f]]=s[m[f]]);return g},h=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(a,"__esModule",{value:!0});var b=h(i("./src/useMediaQuery.ts")),l=function(s){var p=s.children,g=s.device,m=s.onChange,f=y(s,["children","device","onChange"]),O=(0,b.default)(f,g,m);return typeof p=="function"?p(O):O?p:null};a.default=l},"./src/Context.ts":(u,a,i)=>{Object.defineProperty(a,"__esModule",{value:!0});var y=i("react"),h=(0,y.createContext)(void 0);a.default=h},"./src/index.ts":function(u,a,i){var y=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(a,"__esModule",{value:!0}),a.Context=a.toQuery=a.useMediaQuery=a.default=void 0;var h=y(i("./src/useMediaQuery.ts"));a.useMediaQuery=h.default;var b=y(i("./src/Component.ts"));a.default=b.default;var l=y(i("./src/toQuery.ts"));a.toQuery=l.default;var s=y(i("./src/Context.ts"));a.Context=s.default},"./src/mediaQuery.ts":function(u,a,i){var y=this&&this.__assign||function(){return y=Object.assign||function(x){for(var _,D=1,P=arguments.length;D<P;D++){_=arguments[D];for(var z in _)Object.prototype.hasOwnProperty.call(_,z)&&(x[z]=_[z])}return x},y.apply(this,arguments)},h=this&&this.__rest||function(x,_){var D={};for(var P in x)Object.prototype.hasOwnProperty.call(x,P)&&_.indexOf(P)<0&&(D[P]=x[P]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,P=Object.getOwnPropertySymbols(x);z<P.length;z++)_.indexOf(P[z])<0&&Object.prototype.propertyIsEnumerable.call(x,P[z])&&(D[P[z]]=x[P[z]]);return D},b=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(a,"__esModule",{value:!0});var l=b(i("./node_modules/prop-types/index.js")),s=l.default.oneOfType([l.default.string,l.default.number]),p={all:l.default.bool,grid:l.default.bool,aural:l.default.bool,braille:l.default.bool,handheld:l.default.bool,print:l.default.bool,projection:l.default.bool,screen:l.default.bool,tty:l.default.bool,tv:l.default.bool,embossed:l.default.bool},g={orientation:l.default.oneOf(["portrait","landscape"]),scan:l.default.oneOf(["progressive","interlace"]),aspectRatio:l.default.string,deviceAspectRatio:l.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:l.default.bool,colorIndex:l.default.bool,monochrome:l.default.bool,resolution:s,type:Object.keys(p)};g.type;var m=h(g,["type"]),f=y({minAspectRatio:l.default.string,maxAspectRatio:l.default.string,minDeviceAspectRatio:l.default.string,maxDeviceAspectRatio:l.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:l.default.number,maxColor:l.default.number,minColorIndex:l.default.number,maxColorIndex:l.default.number,minMonochrome:l.default.number,maxMonochrome:l.default.number,minResolution:s,maxResolution:s},m),O=y(y({},p),f);a.default={all:O,types:p,matchers:g,features:f}},"./src/toQuery.ts":function(u,a,i){var y=this&&this.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(a,"__esModule",{value:!0});var h=y(i("./node_modules/hyphenate-style-name/index.js")),b=y(i("./src/mediaQuery.ts")),l=function(m){return"not ".concat(m)},s=function(m,f){var O=(0,h.default)(m);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?O:f===!1?l(O):"(".concat(O,": ").concat(f,")")},p=function(m){return m.join(" and ")},g=function(m){var f=[];return Object.keys(b.default.all).forEach(function(O){var x=m[O];x!=null&&f.push(s(O,x))}),p(f)};a.default=g},"./src/useMediaQuery.ts":function(u,a,i){var y=this&&this.__importDefault||function(j){return j&&j.__esModule?j:{default:j}};Object.defineProperty(a,"__esModule",{value:!0});var h=i("react"),b=y(i("./node_modules/matchmediaquery/index.js")),l=y(i("./node_modules/hyphenate-style-name/index.js")),s=i("./node_modules/shallow-equal/dist/index.esm.js"),p=y(i("./src/toQuery.ts")),g=y(i("./src/Context.ts")),m=function(j){return j.query||(0,p.default)(j)},f=function(j){if(j){var R=Object.keys(j);return R.reduce(function($,T){return $[(0,l.default)(T)]=j[T],$},{})}},O=function(){var j=(0,h.useRef)(!1);return(0,h.useEffect)(function(){j.current=!0},[]),j.current},x=function(j){var R=(0,h.useContext)(g.default),$=function(){return f(j)||f(R)},T=(0,h.useState)($),S=T[0],G=T[1];return(0,h.useEffect)(function(){var Z=$();(0,s.shallowEqualObjects)(S,Z)||G(Z)},[j,R]),S},_=function(j){var R=function(){return m(j)},$=(0,h.useState)(R),T=$[0],S=$[1];return(0,h.useEffect)(function(){var G=R();T!==G&&S(G)},[j]),T},D=function(j,R){var $=function(){return(0,b.default)(j,R||{},!!R)},T=(0,h.useState)($),S=T[0],G=T[1],Z=O();return(0,h.useEffect)(function(){if(Z){var K=$();return G(K),function(){K&&K.dispose()}}},[j,R]),S},P=function(j){var R=(0,h.useState)(j.matches),$=R[0],T=R[1];return(0,h.useEffect)(function(){var S=function(G){T(G.matches)};return j.addListener(S),T(j.matches),function(){j.removeListener(S)}},[j]),$},z=function(j,R,$){var T=x(R),S=_(j);if(!S)throw new Error("Invalid or missing MediaQuery!");var G=D(S,T),Z=P(G),K=O();return(0,h.useEffect)(function(){K&&$&&$(Z)},[Z]),(0,h.useEffect)(function(){return function(){G&&G.dispose()}},[]),Z};a.default=z},react:u=>{u.exports=t}},d={};function c(u){var a=d[u];if(a!==void 0)return a.exports;var i=d[u]={exports:{}};return r[u].call(i.exports,i,i.exports,c),i.exports}c.d=(u,a)=>{for(var i in a)c.o(a,i)&&!c.o(u,i)&&Object.defineProperty(u,i,{enumerable:!0,get:a[i]})},c.o=(u,a)=>Object.prototype.hasOwnProperty.call(u,a),c.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var k=c("./src/index.ts");return k})())})(gt);var Zt=gt.exports;const qt=()=>{const e=Zt.useMediaQuery({minWidth:768,maxWidth:1439}),n=je(Lt),t=je(Ft),r=je(Gt),d=je(Jt),c=je(Kt);function k(h){const b=Math.floor(h/60),l=h%60;return{minutes:b,seconds:l}}const a=k(c);let i=n-a.minutes,y=t-d;return e?o.jsxs(He,{children:[" ",o.jsx(ue,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:t}),o.jsx(ue,{icon:"apple",label:"Сalories consumed",keyValue:d}),o.jsx(ue,{icon:"bubble",label:"The rest of the calories",keyValue:y,border:y<0?"red":"default"}),o.jsx(ue,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:n+" min"}),o.jsx(ue,{icon:"fire",label:"Сalories burned",keyValue:r}),o.jsx(ue,{icon:"runningMan",label:"The rest of sports",keyValue:i+" min",border:i>n?"green":"default"})]}):o.jsxs(He,{children:[o.jsx(ue,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:t}),o.jsx(ue,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:n+" min"}),o.jsx(ue,{icon:"apple",label:"Сalories consumed",keyValue:d}),o.jsx(ue,{icon:"fire",label:"Сalories burned",keyValue:r}),o.jsx(ue,{icon:"bubble",label:"The rest of the calories",keyValue:y,border:y<0?"red":"default"}),o.jsx(ue,{icon:"runningMan",label:"The rest of sports",keyValue:i+" min",border:i>n?"green":"default"})]})},er=U.div`
  overflow: auto;

  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 335px;
  padding: 15px;
  align-items: flex-start;
  margin-bottom: ${e=>e.marginBottom}px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${X.textWhite02};
  background: rgba(239, 237, 232, 0.05);

  ${Q.tablet} {
    width: auto;
    height: 234px;
  }

  ${Q.desktop} {
    width: auto;
  }
`,tr=U.div`
  display: flex;
  justify-content: space-between;
`,rr=U.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${X.textWhite05};
`,nr=U(Bt)`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 1.5;

  color: ${X.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${X.orangeSecondary};

    svg {
      stroke: ${X.orangeSecondary};
    }
  }
`,or=U.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${X.textWhite05};
`,ar=U.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${X.orange};

  transition: stroke 250ms ease-in-out;
`,Ue=U.div`
  display: none;
  
  ${Q.tablet} {
    display: block;
  }`,Re=U.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,De=U.svg`
  width: 20px;
  height: 20px;
`,Ve=U.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${Q.desktop} {
    margin-left: 16px;
  }
`,Pe=U.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${X.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 188px;

    ${Q.desktop} {
      margin-right: 196px;
    }
  }

  :nth-of-type(2) {
    margin-right: 87px;

    ${Q.desktop} {
      margin-right: 125px;
    }
  }

  :nth-of-type(3) {
    margin-right: 54px;

    ${Q.desktop} {
      margin-right: 69px;
    }
  }

  :nth-of-type(4) {
    margin-right: 60px;

    ${Q.desktop} {
      margin-right: 75px;
    }
  }

  :nth-of-type(5) {
    margin-right: 12px;
  }
`,ge=U.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${X.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 45px;

    ${Q.desktop} {
      margin-right: 70px;
    }
  }

  :nth-of-type(2) {
    margin-right: 82px;

    ${Q.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(3) {
    margin-right: 104px;

    ${Q.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(4) {
    margin-right: 58px;

    ${Q.desktop} {
      margin-right: 80px;
    }
  }

  :nth-of-type(5)::before {
    content: 'Burned calor...';
    margin-right: 14px;

    ${Q.desktop} {
      content: 'Burned Calories';
      margin-right: 15px;
    }
  }
`,ir=U.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-right: 8px;
  background: ${e=>e.bgColor};
`,sr={Table:`
    --data-table-library_grid-template-columns:  98px 140px 136px 92px 86px 84px 28px;
    height: 136px;

    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${X.textWhite01};
      border-radius: 12px;
    };

    ${Q.desktop} {
      --data-table-library_grid-template-columns:  123px 165px 139px 114px 99px 102px 28px;
      margin-left: 16px;
    }

    @media (max-width: 767) {
      --data-table-library_grid-template-columns:  0 0 0 0 0 0 0;
    }
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${X.textWhite03};

    :nth-of-type(6) {
      margin-right: 12px;
    }

    :nth-of-type(7) {
      margin-right: 0;
      border: none;
      padding: 0
    }  
  `},jt={Table:`
    --data-table-library_grid-template-columns:  212px 136px 98px 98px 92px 28px;
    height: 136px; 
    
    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${X.textWhite01};
      border-radius: 12px;
    };

    ${Q.desktop} {
      --data-table-library_grid-template-columns:  220px 174px 113px 113px 122px 28px;
      margin-left: 16px;
    }
    `,Body:"",Header:"display: none;",BaseRow:"",Row:`
    font-size: 16px;
    background-color: inherit;
    color: ${X.white};
  `,HeaderRow:`
    background-color: inherit;`,BaseCell:"",HeaderCell:`
    color: ${X.orangeSecondary};
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.5;
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${X.textWhite03};

    :nth-of-type(5) {
      margin-right: 12px;
    }

    :nth-of-type(6) {
      margin-right: 0;
      border: none;
      padding: 0
    }  

    >div {
      display: flex;
      align-items: center;}
  `};function Le(){return wt=Le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Le.apply(this,arguments)}var wt=Le,he=wt,lr=function(e,n){if(e==null)return{};var t,r,d={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(d[t]=e[t]);return d},we=function(e,n){if(e==null)return{};var t,r,d=lr(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d},Ce=w.createContext(null),Ee=function(e){var n=e.current.querySelector(".tr-header");return Array.from((n==null?void 0:n.querySelectorAll(".th"))||[])},Ct=function(e,n,t,r){return Array.from(e.current.querySelectorAll(t)).forEach(function(d){var c=Array.from(d.querySelectorAll(r)),k=c.length;c.forEach(function(u,a){return n(u,a,k)})})},ur=function(e,n){return Ct(e,n,".tr-header",".th")},cr=function(e,n){return Ct(e,n,".tr-body",".td")},_e=function(e,n){return{index:n,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},me=w.createContext(null),dr=function(e){var n=e.tableElementRef,t=e.tableMemoryRef,r=e.layout,d=e.children,c=w.useMemo(function(){return{layout:r,tableElementRef:n,tableMemoryRef:t}},[r,n,t]);return V(me.Provider,{value:c},d)},Ot=function(e,n){var t=Ee(e).map(_e);n.current.dataColumns=t},$e=function(e,n,t){var r=n.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;n.current&&e&&r&&(n.current.style.setProperty("--data-table-library_grid-template-columns",e),Ot(n,t))},Et=function(e,n){n!=null&&n.onLayoutChange&&e&&n.onLayoutChange(e)},_t=`
  `.concat(function(){},`
  padding: 0;
  margin: 0;

  `).concat(function(){},`
  display: flex;
  align-items: center;

  `).concat(function(){},`
  align-self: stretch;


  & > div {
    `).concat(function(){},`
    flex: 1;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &.hide {
    display: none;
  }

  &.pin-left,
  &.pin-right {
    position: sticky;
    z-index: 2;
  }

  `).concat(function(){},`
  background-color: inherit;
`),fr=de(_t,";",""),Xe=w.forwardRef(function(e,n){var t=w.useContext(me);if(!t)throw new Error("No Layout Context.");var r=t.layout,d=r!=null&&r.isDiv?"div":"td";return V(d,he({css:fr,ref:n},e))}),pr=de(_t," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),Ge=w.forwardRef(function(e,n){var t=w.useContext(me);if(!t)throw new Error("No Layout Context.");var r=t.layout,d=r!=null&&r.isDiv?"div":"th";return V(d,he({css:pr,ref:n},e))}),hr={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Je=function(e){var n=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,t=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:hr,area:de("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",n,"px;height:100%;&:hover,&.active{background-color:",t,";}","")}},Pt=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},Ke=Pt,Tt=function(e,n){if(e){if(typeof e=="string")return Ke(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ke(e,n):void 0}},yr=function(e){if(Array.isArray(e))return e},mr=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,d=!1,c=void 0;try{for(var k,u=e[Symbol.iterator]();!(r=(k=u.next()).done)&&(t.push(k.value),!n||t.length!==n);r=!0);}catch(a){d=!0,c=a}finally{try{r||u.return==null||u.return()}finally{if(d)throw c}}return t}},vr=Tt,xr=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},Fe=function(e,n){return yr(e)||mr(e,n)||vr(e,n)||xr()},Te=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},br=Pt,gr=function(e){if(Array.isArray(e))return br(e)},jr=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},wr=Tt,Cr=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},Be=function(e){return gr(e)||jr(e)||wr(e)||Cr()},ze=null,Or=function(){return ze||(ze=w.createContext(null))},Er=function(){return w.useContext(ze)};function Ze(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),t.push.apply(t,r)}return t}function qe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ze(Object(t),!0).forEach(function(r){Te(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ze(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var _r=function(e,n){var t=w.useContext(me);if(!t)throw new Error("No Layout Context.");var r=t.tableElementRef,d=t.tableMemoryRef,c=t.layout,k=w.useRef(null),u=w.useRef(null),a=w.useRef(""),i=w.useRef(null),y=w.useRef(!1),h=w.useCallback(function(s){var p;s.preventDefault(),a.current=r.current.style.getPropertyValue("--data-table-library_grid-template-columns"),y.current=!0,i.current=k.current.offsetWidth-s.pageX,(p=k.current)===null||p===void 0||p.querySelector(".resizer-area").classList.add("active")},[r]),b=w.useCallback(function(s){if(y.current){s.preventDefault();var p=i.current+s.pageX,g=function(m,f,O,x){var _=Ee(O).map(_e).filter(function(M){return!M.isHide}),D=_.findIndex(function(M){return M.index===m}),P=(_=_.map(function(M,J){return qe(qe({},M),{},{index:J})})).reduce(function(M,J,q){return M||(q>D&&J.width!==0?J:M)},null),z=_.reduce(function(M,J){return M+J.width},0),j=_[D].minWidth,R=x>j&&x!==0?x:j,$=R-_[D].width,T=_.map(function(M,J){if(P&&D===J)return P.width-$>j?R:M.width;if((P==null?void 0:P.index)===J){var q=M.width-$;return q>j?q:M.width}return M.width}),S=z-T.reduce(function(M,J){return M+J},0);T[D]=T[D]+S;var G=!1,Z=_.slice(0).reverse().map(function(M,J){var q=T.slice(0).reverse()[J],oe=q/z*100;return M.isStiff||f!=null&&f.horizontalScroll?"".concat(q,"px"):G?"minmax(0, ".concat(oe,"%)"):(G=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),K=function(M,J){if(Be(Array.from(M.classList)).includes("pin-left")){var q=T.reduce(function(ne,te,fe){return fe>=J?ne:ne+te},0);M.style.left="".concat(q,"px")}if(Be(Array.from(M.classList)).includes("pin-right")){var oe=T.reduceRight(function(ne,te,fe){return fe<=J?ne:ne+te},0);M.style.right="".concat(oe,"px")}};return ur(O,K),cr(O,K),Z}(e,c,r,p);$e(g,r,d)}},[e,c,r,d]),l=w.useCallback(function(){var s;y.current=!1;var p=r.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(a.current!==p){Et(p,c);var g=Ee(r).map(_e);d.current.dataColumns=g}(s=k.current)===null||s===void 0||s.querySelector(".resizer-area").classList.remove("active")},[c,r,d]);return w.useEffect(function(){var s=u.current;return s&&(s.addEventListener("mousedown",h),document.addEventListener("mousemove",b),document.addEventListener("mouseup",l)),function(){s&&(s.removeEventListener("mousedown",h),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",l))}},[n,h,b,l]),{cellRef:k,resizeRef:u}},Pr=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function et(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),t.push.apply(t,r)}return t}function tt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?et(Object(t),!0).forEach(function(r){Te(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):et(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var rt=function(e,n){return n.find(function(t){return t.index===e})},ae=function(e){var n=e.index,t=e.className,r=e.hide,d=e.pinLeft,c=e.pinRight,k=e.stiff,u=e.isFooter,a=e.includePreviousColSpan,i=e.previousColSpans,y=e.gridColumnStart,h=e.gridColumnEnd,b=e.resize,l=e.role,s=l===void 0?"columnheader":l,p=e.children,g=e.style,m=we(e,Pr),f=w.useContext(Ce);(function(R,$){var T=w.useContext(me);if(!T)throw new Error("No Layout Context.");var S=T.layout,G=T.tableElementRef,Z=T.tableMemoryRef;w.useLayoutEffect(function(){var K=Z.current.dataColumns,M=Ee(G).map(_e),J=rt(R,K),q=(J==null?void 0:J.isHide)===!!$;if(K!=null&&K.length&&!q){var oe=M.filter(function(te){return!te.isHide}).map(function(te){if(te.isStiff||S!=null&&S.horizontalScroll){var fe=rt(te.index,K);return fe?"".concat(fe.width||2*fe.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");$e(oe,G,Z),Et(oe,S);var ne=Ee(G).map(_e);Z.current.dataColumns=ne}},[R,$,S,G,Z])})(n,r);var O=_r(n,r),x=O.cellRef,_=O.resizeRef,D=y&&h,P=D?h-y-1:0,z=a?y+i:y,j=a?h+i:h;return V(w.Fragment,null,V(Ge,he({role:s,"data-table-library_th":"","data-hide":!!r,"data-resize-min-width":typeof b=="boolean"||(b==null?void 0:b.minWidth)==null?75:b.minWidth,style:tt(tt({},D?{gridColumnStart:z,gridColumnEnd:j}:{}),g),css:de(f==null?void 0:f.BaseCell," ",u?f==null?void 0:f.FooterCell:f==null?void 0:f.HeaderCell,";",""),className:ve("th",t,{stiff:k,hide:r,resize:b,"pin-left":d,"pin-right":c}),ref:x},m),V("div",null,p),b&&!r&&V("div",{className:"resizer-area",ref:_,css:Je(b).area},V("span",{className:"resizer-handle",css:Je(b).handle}))),Array.from({length:P},function(){return V(Ge,{className:ve("th","hide","colspan")})}))},We=null,Tr=function(){return We||(We=w.createContext(null))},Sr=function(){return w.useContext(We)},kr=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},Rr=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function nt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),t.push.apply(t,r)}return t}function ot(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?nt(Object(t),!0).forEach(function(r){Te(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):nt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var ie=function(e){e.index;var n=e.className,t=e.hide,r=e.pinLeft,d=e.pinRight,c=e.stiff,k=e.includePreviousColSpan,u=e.previousColSpans,a=e.gridColumnStart,i=e.gridColumnEnd,y=e.onClick,h=e.children,b=e.style,l=we(e,Rr),s=w.useContext(Ce),p=a&&i,g=p?i-a-1:0,m=k?a+u:a,f=k?i+u:i;return V(w.Fragment,null,V(Xe,he({role:"gridcell","data-table-library_td":"",style:ot(ot({},p?{gridColumnStart:m,gridColumnEnd:f}:{}),b),css:de(s==null?void 0:s.BaseCell," ",s==null?void 0:s.Cell,";",""),className:ve("td",n,{stiff:c,hide:t,"pin-left":r,"pin-right":d}),onClick:y},l),V("div",null,h)),Array.from({length:g},function(){return V(Xe,{className:ve("td","hide","colspan")})}))},Ne=null,Dr=function(){return Ne||(Ne=w.createContext(null))},$r=function(){return w.useContext(Ne)},Ie=null,Ar=function(){return Ie||(Ie=w.createContext(null))},Mr=function(){var e=w.useState(!1),n=Fe(e,2),t=n[0],r=n[1];return w.useEffect(function(){var d=function(k){k.shiftKey?r(!0):t&&r(!1)},c=function(){t&&r(!1)};return document&&(document.addEventListener("keydown",d),document.addEventListener("keyup",c)),function(){document&&(document.removeEventListener("keydown",d),document.removeEventListener("keyup",c))}},[t]),t},Lr=function(){return{select:$r(),tree:Sr(),sort:Er(),pagination:w.useContext(Ie)}},Fr=function(e){var n=e.sort,t=e.pagination,r=e.tree;return function(d){var c=Be(d);return c=n?n.modifier(c):c,c=t?t.modifier(c):c,c=r?r.modifier(c):c}},Br=function(e){return e.reduce(function(n,t){return Object.keys(t).forEach(function(r){n[r]||(n[r]=""),n[r]=`
        `.concat(n[r],`
        `).concat(t[r],`
      `)}),n},{})},zr=function(e){return Array.isArray(e)?Br(e):e},Wr=["children"],at=function(e){var n=e.children,t=we(e,Wr),r=w.useContext(Ce),d=w.useContext(me);if(!d)throw new Error("No Layout Context.");var c=d.layout,k=c!=null&&c.isDiv?"div":"tbody";return V(k,he({css:de(r==null?void 0:r.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},t),n)},Nr=["isFooter","children"],it=function(e){var n=e.isFooter,t=e.children,r=we(e,Nr),d=w.useContext(Ce),c=w.useContext(me);if(!c)throw new Error("No Layout Context.");var k=c.layout,u=k!=null&&k.isDiv?"div":n?"tfoot":"thead";return V(u,he({role:"rowgroup",className:ve({tfoot:n,thead:!n}),css:de(`
  display: contents;
`," ",n?d==null?void 0:d.Footer:d==null?void 0:d.Header,";","")},r),w.Children.map(t,function(a){if(w.isValidElement(a))return w.cloneElement(a)}))},st=null,Ir=function(){return st||(st=w.createContext(null))},Yr=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],Qr={Table:`
    height: 100%;
  `},lt=w.forwardRef(function(e,n){var t=e.data,r=e.theme,d=e.layout,c=e.sort,k=e.pagination,u=e.select,a=e.tree,i=e.onInit,y=i===void 0?function(){}:i,h=e.className,b=h===void 0?"table":h,l=e.children,s=we(e,Yr),p=function(K){var M=w.useRef(null);return K&&(M=K),M}(n),g=function(K){var M=w.useRef(null);return M.current||(M.current={onlyOnce:!1,dataColumns:[]}),M}(),m=Fr({sort:c,pagination:k,tree:a,select:u})(t.nodes),f=function(K,M){var J=w.useState(!1),q=Fe(J,2),oe=q[0],ne=q[1];return[oe,function(te){te&&(oe||(ne(!0),M.current=te,K(te)))}]}(y,p),O=Fe(f,2),x=O[0],_=O[1],D=Mr(),P=[];d!=null&&d.fixedHeader&&(P=P.concat(Qr)),r&&(P=P.concat(r));var z,j=zr(P),R=d!=null&&d.isDiv?"div":"table",$=Ir(),T=Or(),S=Dr(),G=Tr(),Z=Ar();return V(R,he({role:"grid","data-table-library_table":"",css:de((z={isShiftDown:D},`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  overflow: auto;
  position: relative;

  border-collapse: collapse;

  display: grid;

  --data-table-library_grid-template-columns: '';
  grid-template-columns: var(--data-table-library_grid-template-columns);

  button * {
    pointer-events: none;
  }

  `.concat(z.isShiftDown?`
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    `:"",`
  `))," ",j==null?void 0:j.Table,";",""),className:ve(b),ref:_},s),x&&V($.Provider,{value:t},V(Ce.Provider,{value:j},V(T.Provider,{value:c},V(S.Provider,{value:u},V(G.Provider,{value:a},V(Z.Provider,{value:k},V(dr,{layout:d,tableElementRef:p,tableMemoryRef:g},l&&l(m)))))))))}),St=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},Hr=w.forwardRef(function(e,n){var t=w.useContext(me);if(!t)throw new Error("No Layout Context.");var r=t.layout,d=r!=null&&r.isDiv?"div":"tr";return V(d,he({css:de(St(),";",""),ref:n},e))}),Ur=w.forwardRef(function(e,n){var t=w.useContext(me);if(!t)throw new Error("No Layout Context.");var r=t.layout,d=r!=null&&r.isDiv?"div":"tr";return V(d,he({css:de(St(),";",""),ref:n},e))}),kt=function(e){return e.type?e.type===w.Fragment:e===w.Fragment},Rt=function(e,n){return w.Children.toArray(e).reduce(function(t,r,d){return w.isValidElement(r)?d>=n?t:r.props.gridColumnStart||r.props.gridColumnEnd?t+r.props.gridColumnEnd-r.props.gridColumnStart-1:t:t},0)},Vr=["className","role","isFooter","children"];function ut(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),t.push.apply(t,r)}return t}function ct(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ut(Object(t),!0).forEach(function(r){Te(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ut(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var dt=function(e){var n,t=e.className,r=e.role,d=r===void 0?"rowheader":r,c=e.isFooter,k=e.children,u=we(e,Vr),a=w.useContext(Ce),i=w.useRef(null);return n=w.useContext(me),w.useLayoutEffect(function(){var y;if(!n)throw new Error("No Layout Context.");var h=n.layout,b=n.tableElementRef,l=n.tableMemoryRef,s=Ee(b).map(_e);if((y=l.current)===null||y===void 0||!y.onlyOnce)if(l.current.onlyOnce=!0,h!=null&&h.resizedLayout){var p=h==null?void 0:h.resizedLayout;$e(p,b,l)}else if(h!=null&&h.custom)Ot(b,l);else{var g=s.filter(function(m){return!m.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");$e(g,b,l)}},[n]),V(Ur,he({role:d,"data-table-library_tr-header":"",css:de(a==null?void 0:a.BaseRow," ",c?a==null?void 0:a.FooterRow:a==null?void 0:a.HeaderRow,";",""),className:ve("tr",t,{"tr-footer":c,"tr-header":!c}),ref:i},u),w.Children.toArray(k).filter(Boolean).map(function(y,h){if(w.isValidElement(y)){var b={};return kt(y)||(b=ct(ct({},b),{},{index:h,previousColSpans:Rt(k,h)})),w.cloneElement(y,b)}}))},Xr=function(){},Gr=function(e,n,t,r){(function(d){var c=d.onSingleClick,k=d.onDoubleClick,u=d.ref,a=w.useRef(0);w.useEffect(function(){var i=u.current,y=function(h){k&&(a.current===0&&c(h),a.current+=1,setTimeout(function(){a.current===2&&k(h),a.current=0},300))};return i==null||i.addEventListener("click",y),function(){i==null||i.removeEventListener("click",y)}})})({onSingleClick:n?function(d){return n(r,d)}:Xr,onDoubleClick:t?function(d){return t(r,d)}:null,ref:e})},Jr=["item","className","disabled","onClick","onDoubleClick","children"];function ft(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),t.push.apply(t,r)}return t}function ke(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ft(Object(t),!0).forEach(function(r){Te(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ft(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var pt=function(e){var n=e.item,t=e.className,r=e.disabled,d=e.onClick,c=e.onDoubleClick,k=e.children,u=we(e,Jr),a=function(g,m){return Object.values(g).filter(Boolean).filter(function(f){return f==null?void 0:f.hasOwnProperty("_getRowProps")}).map(function(f){return f._getRowProps(m,g)})}(Lr(),e),i=w.useContext(Ce),y=function(g,m){var f=g.reduce(function(O,x){var _=x.theme,D=x.className,P=x.onClick,z=`
        `.concat(O.themeByFeature,`
        `).concat(_,`
      `),j=ve(O.classNamesByFeature,D),R=O.clickable||!!P;return ke(ke({},O),{},{themeByFeature:z,classNamesByFeature:j,clickable:R,onClickByFeature:function($,T){P($,T),O.onClickByFeature($,T)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!m,onClickByFeature:function(O,x){m&&kr(x)&&m(O,x)}});return{themeByFeature:f.themeByFeature,classNamesByFeature:f.classNamesByFeature,clickable:f.clickable,onClickByFeature:f.onClickByFeature}}(a,d),h=y.themeByFeature,b=y.classNamesByFeature,l=y.clickable,s=y.onClickByFeature,p=w.useRef(null);return Gr(p,s,c,n),V(Hr,he({role:"row","data-table-library_tr-body":"",onClick:r||c?function(){}:function(g){return s(n,g)},css:de(h," ",i==null?void 0:i.BaseRow," ",i==null?void 0:i.Row,";",""),className:ve("tr","tr-body",b,t,{disabled:r,clickable:l||!!c}),ref:p},u),w.Children.toArray(k).filter(Boolean).map(function(g,m){if(w.isValidElement(g)){var f={};return kt(g)||(f=ke(ke({},f),{},{index:m,previousColSpans:Rt(k,m)})),w.cloneElement(g,f)}}))};const Kr={...jt,...sr},Dt=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:d})=>{const c={nodes:e};return o.jsxs(o.Fragment,{children:[n&&o.jsxs(Ue,{children:[o.jsxs(Ve,{children:[o.jsx(Pe,{children:"Title"}),o.jsx(Pe,{children:"Category"}),o.jsx(Pe,{children:"Calories"}),o.jsx(Pe,{children:"Weight"}),o.jsx(Pe,{children:"Recommend"})]}),o.jsx(lt,{data:c,theme:jt,layout:{custom:!0},children:k=>o.jsxs(o.Fragment,{children:[o.jsx(it,{children:o.jsxs(dt,{children:[o.jsx(ae,{children:"Title"}),o.jsx(ae,{children:"Category"}),o.jsx(ae,{children:"Calories"}),o.jsx(ae,{children:"Weight"}),o.jsx(ae,{children:"Recommend"}),o.jsx(ae,{children:""})]})}),o.jsx(at,{children:k.map(u=>o.jsxs(pt,{item:u,children:[o.jsx(ie,{children:ce(u.title)}),o.jsx(ie,{children:ce(u.category)}),o.jsx(ie,{children:u.calories}),o.jsx(ie,{children:u.amount}),o.jsxs(ie,{children:[o.jsx(ir,{bgColor:u.recommend?"#419B09":"#E9101D"}),u.recommend?"Yes":"No"]}),o.jsx(ie,{children:o.jsx(Re,{onClick:()=>r({date:d,id:u._id,calories:u.calories,time:u.amount}),children:o.jsx(De,{children:o.jsx("use",{href:be+"#icon-trash"})})})})]},u._id))})]})})]}),t&&o.jsxs(Ue,{children:[o.jsxs(Ve,{children:[o.jsx(ge,{children:"Body Part"}),o.jsx(ge,{children:"Equipment"}),o.jsx(ge,{children:"Name"}),o.jsx(ge,{children:"Target"}),o.jsx(ge,{}),o.jsx(ge,{children:"Time"}),o.jsx(ge,{children:""})]}),o.jsx(lt,{data:c,theme:Kr,layout:{custom:!0},children:k=>o.jsxs(o.Fragment,{children:[o.jsx(it,{children:o.jsxs(dt,{children:[o.jsx(ae,{children:"Body Part"}),o.jsx(ae,{children:"Equipment"}),o.jsx(ae,{children:"Name"}),o.jsx(ae,{children:"Target"}),o.jsx(ae,{children:"Burned Cal..."}),o.jsx(ae,{children:"Time"}),o.jsx(ae,{children:""})]})}),o.jsx(at,{children:k.map(u=>o.jsxs(pt,{item:u,children:[o.jsx(ie,{children:ce(u.bodyPart)}),o.jsx(ie,{children:ce(u.equipment)}),o.jsx(ie,{children:ce(u.name)}),o.jsx(ie,{children:ce(u.target)}),o.jsx(ie,{children:u.burnedCalories}),o.jsx(ie,{children:u.time}),o.jsx(ie,{children:o.jsx(Re,{onClick:()=>r({date:d,id:u._id,calories:u.burnedCalories,time:u.time}),children:o.jsx(De,{children:o.jsx("use",{href:be+"#icon-trash"})})})})]},u._id))})]})})]})]})};Dt.propTypes={list:re.array,productTable:re.bool,exerciseTable:re.bool,onDelete:re.func,date:re.string};const ht=U.div`
  overflow: auto;
  margin-top: 22px;
  height: 254px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 90px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${X.textWhite01};
    border-radius: 12px;
  }

  ${Q.tablet} {
    display: none;
  }
`,yt=U.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 8px;
  }
`,mt=U.div`
  display: flex;
  height: 64px;

  & > div {
    &:nth-of-type(1) {
      width: 81px;
      margin-right: 16px;
    }
  }

  & > div {
    &:nth-of-type(2) {
      width: 80px;
      margin-right: 16px;
    }
  }

  & > div {
    &:nth-of-type(3) {
      width: 76px;
      margin-right: 8px;

      & > p {
        &::before {
          ${e=>e.before&&`
            content: '';
            width: 14px;
            height: 14px;
            border-radius: 10px;
            background: #419b09;
            margin-right: 8px;
          `}
        }
      }
    }
  }

  & > div {
    &:nth-of-type(4) {
      & > p {
        padding: 0;
        margin-top: 35px;

        border: none;
      }
    }
  }
`,se=U.div`
  font-size: 12px;
  line-height: 1.5;

  color: ${X.orange};
`,le=U.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 10px 0 10px 14px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${X.textWhite03};

  color: ${X.white};

  &::before {
    ${e=>e.before&&`
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 10px;
      background: ${e.colorBefore?"#419B09":"#E9101D"};
      margin-right: 8px;
    `}
  }
`,$t=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:d})=>o.jsxs(o.Fragment,{children:[n&&o.jsx(ht,{children:e.map(c=>o.jsxs(yt,{children:[o.jsxs(se,{children:["Title",o.jsx(le,{children:ce(c.title)})]}),o.jsxs(se,{children:["Category",o.jsx(le,{children:ce(c.category)})]}),o.jsxs(mt,{children:[o.jsxs(se,{children:["Calories",o.jsx(le,{children:c.amount})]}),o.jsxs(se,{children:["Weight ",o.jsx(le,{children:c.calories})]}),o.jsxs(se,{children:["Recommend",o.jsx(le,{before:!0,colorBefore:c.recommend,children:c.recommend?"Yes":"No"})]}),o.jsx(se,{children:o.jsx(le,{children:o.jsx(Re,{onClick:()=>r({date:d,id:c._id,calories:c.calories,time:c.amount}),children:o.jsx(De,{children:o.jsx("use",{href:be+"#icon-trash"})})})})})]})]},c._id))}),t&&o.jsx(ht,{children:e.map(c=>o.jsxs(yt,{children:[o.jsxs(se,{children:["Body Part",o.jsx(le,{children:ce(c.bodyPart)})]}),o.jsxs(se,{children:["Equipment",o.jsx(le,{children:ce(c.equipment)})]}),o.jsxs(se,{children:["Name",o.jsx(le,{children:ce(c.name)})]}),o.jsxs(mt,{children:[o.jsxs(se,{children:["Target ",o.jsx(le,{children:ce(c.target)})]}),o.jsxs(se,{children:["Burned Calor..",o.jsx(le,{children:c.burnedCalories})]}),o.jsxs(se,{children:["Time ",o.jsx(le,{children:c.time})]}),o.jsxs(se,{children:[" ",o.jsx(le,{children:o.jsx(Re,{onClick:()=>r({date:d,id:c._id,calories:c.burnedCalories,time:c.time}),children:o.jsx(De,{children:o.jsx("use",{href:be+"#icon-trash"})})})})]})]})]},c._id))})]});$t.propTypes={list:re.array,productTable:re.bool,exerciseTable:re.bool,onDelete:re.func,date:re.string};const Ye=({to:e,marginBottom:n,list:t,productTable:r,exerciseTable:d,date:c})=>{const k=bt(),u=({date:a,id:i,calories:y,time:h})=>{r&&k(zt({productId:i,date:a,calories:y,time:h})),d&&k(Wt({exerciseId:i,date:a,calories:y,time:h}))};return o.jsxs(er,{marginBottom:n,children:[o.jsxs(tr,{children:[o.jsx(rr,{children:r?"Products":"Exercises"}),o.jsxs(nr,{to:e,children:["Add ",r?"product":"exercise",o.jsx(ar,{children:o.jsx("use",{href:be+"#arrow-right"})})]})]}),t.length!==0?o.jsxs(o.Fragment,{children:[o.jsx(Dt,{list:t,productTable:r,exerciseTable:d,onDelete:u,date:c}),o.jsx($t,{list:t,productTable:r,exerciseTable:d,onDelete:u,date:c})]}):o.jsxs(or,{children:["Not found ",r?"products":"exercises"]})]})};Ye.propTypes={to:re.string,marginBottom:re.number,list:re.array,productTable:re.bool,exerciseTable:re.bool,date:re.string};const Zr=U.div`
  position: relative;

  padding: 0 20px;
  ${Q.tablet} {
    padding: 0 32px;
  }
  ${Q.desktop} {
    padding: 0 96px;
  }
`,qr=U.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${Q.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,en=U.div`
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 667;
  right: 20px;
  top: 4px;

  ${Q.tablet} {
    right: 32px;
    top: -10px;
  }

  ${Q.desktop} {
    right: 96px;
  }
`,vt=U.button`
  height: 16px;
  padding: 0;
  margin-left: 40px;

  border: none;
  background-color: inherit;

  &:last-child {
    margin-left: 6px;
  }

  &:hover > svg {
    fill: ${X.orange};
  }
`,xt=U.svg`
  width: 16px;
  height: 16px;

  transition: fill 0.3s;

  fill: ${X.white};
`,tn=U.div`
  width: auto;

  ${Q.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${Q.desktop} {
    margin-top: 0;
  }
`,rn=U.div`
  width: auto;

  ${Q.tablet} {
    width: 704px;
  }

  ${Q.desktop} {
    width: 826px;
  }
`,nn={top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}},on=U.label`
  position: relative;

  background-color: inherit;
  border: none;

  cursor: pointer;

  &:hover svg,
  &:hover input {
    stroke: ${X.orange};
    color: ${X.orange};
  }

  &:focus-visible {
    border: none;
  }

  &:focus {
    border: none;
  }
`,an=U.input`
  width: 125px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;

  cursor: pointer;

  color: ${X.white};
  border: none;
  background-color: inherit;

  transition: color 0.3s;

  &:focus {
    color: ${X.orange};
    border: none;
  }

  &:focus-visible {
    border: none;
  }

  &:focus + svg {
    stroke: ${X.orange};
  }

  ${Q.tablet} {
    width: 161px;

    font-size: 24px;
    line-height: 1.33;
  }

  ${Q.desktop} {
  }
`,sn=U.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: -8px;
  top: 46%;

  stroke: ${X.grey};

  transform: translate(-50%, -50%);
  transition: stroke 0.3s;

  ${Q.tablet} {
    width: 24px;
    height: 24px;
    right: -14px;
    top: 40%;
  }
`,At=w.forwardRef((e,n)=>{const{value:t,onClick:r}=e;return o.jsxs(on,{onClick:r,ref:n,children:[o.jsx(an,{value:t||"",name:"name",readOnly:!0}),o.jsx(sn,{children:o.jsx("use",{href:`${be}#calendar`})})]})});At.displayName="CustomInputForCalendar";const pn=()=>{const[e,n]=w.useState(new Date),[t,r]=w.useState(""),d=je(Vt),c=je(Xt),k=bt();w.useEffect(()=>{k(Nt(t||u(t,e)))},[k,e,t]);const u=(i,y)=>{const h=Ht(y);return r(h),n(y),h},a=(i,y)=>{const h=new Date(y);i==="nextDay"&&h.setDate(h.getDate()+1),i==="previousDay"&&h.setDate(h.getDate()-1),u(h,h)};return o.jsxs(Zr,{children:[o.jsx(Qt,{text:"Diary",margin:nn}),o.jsxs(en,{children:[o.jsx(Ut,{value:e,onChange:u,name:"name",dateFormat:"dd/MM/yyyy",customInput:o.jsx(At,{}),withoutВorder:!0}),o.jsx(vt,{onClick:()=>a("previousDay",e),children:o.jsx(xt,{children:o.jsx("use",{href:be+"#chevron-left"})})}),o.jsx(vt,{onClick:()=>a("nextDay",e),children:o.jsx(xt,{children:o.jsx("use",{href:be+"#chevron-right"})})})]}),o.jsxs(qr,{children:[o.jsxs(tn,{children:[o.jsx(qt,{}),o.jsx(It,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:Yt})]}),o.jsxs(rn,{children:[o.jsx(Ye,{marginBottom:40,list:d,productTable:!0,date:t,to:"/products"}),o.jsx(Ye,{list:c,exerciseTable:!0,date:t,to:"/exercises"})]})," "]})]})};export{pn as default};
