import{n as G,m as rt,j as _,r as Pt,P as ne,c as N,v as Bo,w as Do,s as rn}from"./index-a1a82419.js";import{c as ue}from"./capitalizeWord-85339af4.js";const _o=(t,e)=>t==="product"?{subtitle:"DIET",title:ue(e.title),button:"Add",text1:"Calories:",text2:"Category:",text3:"Weight:",subText1:e.calories,subText2:ue(e.category),subText3:e.weight}:{subtitle:"WORKOUT",title:ue(e.name),button:"Start",text1:"Burned calories:",text2:"Body part:",text3:"Target:",subText1:e.burnedCalories,subText2:ue(e.bodyPart),subText3:ue(e.target)},Wo=G.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 100vh;
  width: 100%;

  margin-top: ${t=>t.marginTop};
  ${rt.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 32px;
  }
  ${rt.desktop} {
    width: 868px;
  }
`;function _c({children:t,...e}){return _.jsx(Wo,{...e,children:t})}const Fo=["(max-width: 767px)","(min-width: 768px) and (max-width: 1439px)","(min-width: 1440px)"],Vo=()=>{const t=Fo.map(s=>matchMedia(s)),e=()=>t.map(s=>s.matches),[n,o]=Pt.useState(e);return Pt.useLayoutEffect(()=>{const s=()=>o(e);return t.forEach(c=>c.addEventListener("change",s)),()=>t.forEach(c=>c.removeEventListener("change",s))}),["isMobile","isTablet","isDesktop"].reduce((s,c,r)=>({...s,[c]:n[r]}),{})};/*!
 * OverlayScrollbars
 * Version: 2.3.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */function U(t,e){if(Re(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&U(Object.keys(t),n=>e(t[n],n,t));return t}function it(t,e){const n=Ft(e);if(xt(e)||n){let s=n?"":{};if(t){const c=window.getComputedStyle(t,null);s=n?Rn(t,c,e):e.reduce((r,a)=>(r[a]=Rn(t,c,a),r),s)}return s}t&&U(mt(e),s=>cs(t,s,e[s]))}const wt=(t,e)=>{const{o:n,u:o,_:s}=t;let c=n,r;const a=(d,g)=>{const f=c,p=d,v=g||(o?!o(f,p):f!==p);return(v||s)&&(c=p,r=f),[c,v,r]};return[e?d=>a(e(c,r),d):a,d=>[c,!!d,r]]},be=()=>typeof window<"u",ro=be()&&Node.ELEMENT_NODE,{toString:Uo,hasOwnProperty:Ye}=Object.prototype,At=t=>t===void 0,He=t=>t===null,No=t=>At(t)||He(t)?`${t}`:Uo.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),_t=t=>typeof t=="number",Ft=t=>typeof t=="string",mn=t=>typeof t=="boolean",$t=t=>typeof t=="function",xt=t=>Array.isArray(t),pe=t=>typeof t=="object"&&!xt(t)&&!He(t),Re=t=>{const e=!!t&&t.length,n=_t(e)&&e>-1&&e%1==0;return xt(t)||!$t(t)&&n?e>0&&pe(t)?e-1 in t:!0:!1},ln=t=>{if(!t||!pe(t)||No(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=Ye.call(t,n),r=s&&Ye.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return At(e)||Ye.call(t,e)},fe=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===ro:!1},Ie=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===ro:!1},Be=(t,e,n)=>t.indexOf(e,n),K=(t,e,n)=>(!n&&!Ft(e)&&Re(e)?Array.prototype.push.apply(t,e):t.push(e),t),Gt=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{K(n,o)}):U(t,o=>{K(n,o)}),n)},vn=t=>!!t&&t.length===0,jt=(t,e,n)=>{U(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},De=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),mt=t=>t?Object.keys(t):[],nt=(t,e,n,o,s,c,r)=>{const a=[e,n,o,s,c,r];return(typeof t!="object"||He(t))&&!$t(t)&&(t={}),U(a,l=>{U(mt(l),i=>{const d=l[i];if(t===d)return!0;const g=xt(d);if(d&&ln(d)){const f=t[i];let p=f;g&&!xt(f)?p=[]:!g&&!ln(f)&&(p={}),t[i]=nt(p,d)}else t[i]=g?d.slice():d})}),t},wn=t=>{for(const e in t)return!1;return!0},io=(t,e,n,o)=>{if(At(o))return n?n[t]:e;n&&(Ft(o)||_t(o))&&(n[t]=o)},lt=(t,e,n)=>{if(At(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},lo=(t,e)=>new Set((lt(t,e)||"").split(" ")),ft=(t,e)=>{t&&t.removeAttribute(e)},Xt=(t,e,n,o)=>{if(n){const s=lo(t,e);s[o?"add":"delete"](n);const c=Gt(s).join(" ").trim();lt(t,e,c)}},qo=(t,e,n)=>lo(t,e).has(n),St=(t,e)=>io("scrollLeft",0,t,e),Mt=(t,e)=>io("scrollTop",0,t,e),an=be()&&Element.prototype,ao=(t,e)=>{const n=[],o=e?Ie(e)&&e:document;return o?K(n,o.querySelectorAll(t)):n},Yo=(t,e)=>{const n=e?Ie(e)&&e:document;return n?n.querySelector(t):null},je=(t,e)=>Ie(t)?(an.matches||an.msMatchesSelector).call(t,e):!1,yn=t=>t?Gt(t.childNodes):[],Lt=t=>t&&t.parentElement,Qt=(t,e)=>{if(Ie(t)){const n=an.closest;if(n)return n.call(t,e);do{if(je(t,e))return t;t=Lt(t)}while(t)}},Xo=(t,e,n)=>{const o=Qt(t,e),s=t&&Yo(n,o),c=Qt(s,e)===o;return o&&s?o===t||s===t||c&&Qt(Qt(t,n),e)!==o:!1},Sn=(t,e,n)=>{if(n&&t){let o=e,s;Re(n)?(s=document.createDocumentFragment(),U(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null)}},vt=(t,e)=>{Sn(t,null,e)},Ko=(t,e)=>{Sn(Lt(t),t,e)},Ln=(t,e)=>{Sn(Lt(t),t&&t.nextSibling,e)},Tt=t=>{if(Re(t))U(Gt(t),e=>Tt(e));else if(t){const e=Lt(t);e&&e.removeChild(t)}},Kt=t=>{const e=document.createElement("div");return t&&lt(e,"class",t),e},uo=t=>{const e=Kt();return e.innerHTML=t.trim(),U(yn(e),n=>Tt(n))},dn=t=>t.charAt(0).toUpperCase()+t.slice(1),Go=()=>Kt().style,Jo=["-webkit-","-moz-","-o-","-ms-"],Zo=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Xe={},Ke={},Qo=t=>{let e=Ke[t];if(De(Ke,t))return e;const n=dn(t),o=Go();return U(Jo,s=>{const c=s.replace(/-/g,"");return!(e=[t,s+t,c+n,dn(c)+n].find(a=>o[a]!==void 0))}),Ke[t]=e||""},ie=t=>{if(be()){let e=Xe[t]||window[t];return De(Xe,t)||(U(Zo,n=>(e=e||window[n+dn(t)],!e)),Xe[t]=e),e}},ts=ie("MutationObserver"),An=ie("IntersectionObserver"),te=ie("ResizeObserver"),fo=ie("cancelAnimationFrame"),po=ie("requestAnimationFrame"),un=ie("ScrollTimeline"),ze=be()&&window.setTimeout,fn=be()&&window.clearTimeout,es=/[^\x20\t\r\n\f]+/g,ho=(t,e,n)=>{const o=t&&t.classList;let s,c=0,r=!1;if(o&&e&&Ft(e)){const a=e.match(es)||[];for(r=a.length>0;s=a[c++];)r=!!n(o,s)&&r}return r},$n=(t,e)=>{ho(t,e,(n,o)=>n.remove(o))},Wt=(t,e)=>(ho(t,e,(n,o)=>n.add(o)),$n.bind(0,t,e)),_e=(t,e,n,o)=>{if(t&&e){let s=!0;return U(n,c=>{const r=o?o(t[c]):t[c],a=o?o(e[c]):e[c];r!==a&&(s=!1)}),s}return!1},go=(t,e)=>_e(t,e,["w","h"]),bo=(t,e)=>_e(t,e,["x","y"]),ns=(t,e)=>_e(t,e,["t","r","b","l"]),Hn=(t,e,n)=>_e(t,e,["width","height"],n&&(o=>Math.round(o))),bt=()=>{},Yt=t=>{let e;const n=t?ze:po,o=t?fn:fo;return[s=>{o(e),e=n(s,$t(t)?t():t)},()=>o(e)]},En=(t,e)=>{let n,o,s,c=bt;const{g:r,v:a,p:l}=e||{},i=function(v){c(),fn(n),n=o=void 0,c=bt,t.apply(this,v)},d=p=>l&&o?l(o,p):p,g=()=>{c!==bt&&i(d(s)||s)},f=function(){const v=Gt(arguments),S=$t(r)?r():r;if(_t(S)&&S>=0){const L=$t(a)?a():a,u=_t(L)&&L>=0,w=S>0?ze:po,T=S>0?fn:fo,F=d(v)||v,W=i.bind(0,F);c();const B=w(W,S);c=()=>T(B),u&&!n&&(n=ze(g,L)),o=s=F}else i(v)};return f.m=g,f},os={opacity:1,zIndex:1},ye=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},ss=(t,e)=>!os[t]&&_t(e)?`${e}px`:e,Rn=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),cs=(t,e,n)=>{try{const{style:o}=t;At(o[e])?o.setProperty(e,n):o[e]=ss(e,n)}catch{}},ce=t=>it(t,"direction")==="rtl",In=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,a=`${o}bottom${s}`,l=`${o}left${s}`,i=it(t,[c,r,a,l]);return{t:ye(i[c],!0),r:ye(i[r],!0),b:ye(i[a],!0),l:ye(i[l],!0)}},re=(t,e)=>`translate${xt(t)?`(${t[0]},${t[1]})`:`${e?"X":"Y"}(${t})`}`,{round:Bn}=Math,Cn={w:0,h:0},he=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:Cn,Te=t=>t?{w:t.clientWidth,h:t.clientHeight}:Cn,Pe=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:Cn,Me=t=>{const e=parseFloat(it(t,"height"))||0,n=parseFloat(it(t,"width"))||0;return{w:n-Bn(n),h:e-Bn(e)}},kt=t=>t.getBoundingClientRect(),ee=t=>!!(t&&(t.height||t.width));let Se;const rs=()=>{if(At(Se)){Se=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){Se=!0}}))}catch{}}return Se},xo=t=>t.split(" "),is=(t,e,n,o)=>{U(xo(e),s=>{t.removeEventListener(s,n,o)})},st=(t,e,n,o)=>{var s;const c=rs(),r=(s=c&&o&&o.S)!=null?s:c,a=o&&o.$||!1,l=o&&o.C||!1,i=[],d=c?{passive:r,capture:a}:a;return U(xo(e),g=>{const f=l?p=>{t.removeEventListener(g,f,a),n&&n(p)}:n;K(i,is.bind(null,t,g,f,a)),t.addEventListener(g,f,d)}),jt.bind(0,i)},mo=t=>t.stopPropagation(),vo=t=>t.preventDefault(),ls={x:0,y:0},Ge=t=>{const e=t?kt(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:ls},Dn=(t,e)=>{U(xt(e)?e:[e],t)},On=t=>{const e=new Map,n=(c,r)=>{if(c){const a=e.get(c);Dn(l=>{a&&a[l?"delete":"clear"](l)},r)}else e.forEach(a=>{a.clear()}),e.clear()},o=(c,r)=>{if(Ft(c)){const i=e.get(c)||new Set;return e.set(c,i),Dn(d=>{$t(d)&&i.add(d)},r),n.bind(0,c,r)}mn(r)&&r&&n();const a=mt(c),l=[];return U(a,i=>{const d=c[i];d&&K(l,o(i,d))}),jt.bind(0,l)},s=(c,r)=>{const a=e.get(c);U(Gt(a),l=>{r&&!vn(r)?l.apply(0,r):l()})};return o(t||{}),[o,n,s]},_n=t=>JSON.stringify(t,(e,n)=>{if($t(n))throw new Error;return n}),as={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},wo=(t,e)=>{const n={},o=mt(e).concat(mt(t));return U(o,s=>{const c=t[s],r=e[s];if(pe(c)&&pe(r))nt(n[s]={},wo(c,r)),wn(n[s])&&delete n[s];else if(De(e,s)&&r!==c){let a=!0;if(xt(c)||xt(r))try{_n(c)===_n(r)&&(a=!1)}catch{}a&&(n[s]=r)}}),n},xe="data-overlayscrollbars",yo="os-environment",So=`${yo}-flexbox-glue`,ds=`${So}-max`,$o="os-scrollbar-hidden",Je=`${xe}-initialize`,yt=xe,Eo=`${yt}-overflow-x`,Co=`${yt}-overflow-y`,oe="overflowVisible",us="scrollbarHidden",Wn="scrollbarPressed",Le="updating",Bt=`${xe}-viewport`,Ze="arrange",Oo="scrollbarHidden",se=oe,pn=`${xe}-padding`,fs=se,Fn=`${xe}-content`,kn="os-size-observer",ps=`${kn}-appear`,hs=`${kn}-listener`,gs="os-trinsic-observer",bs="os-no-css-vars",xs="os-theme-none",pt="os-scrollbar",ms=`${pt}-rtl`,vs=`${pt}-horizontal`,ws=`${pt}-vertical`,ko=`${pt}-track`,Tn=`${pt}-handle`,ys=`${pt}-visible`,Ss=`${pt}-cornerless`,Vn=`${pt}-transitionless`,Un=`${pt}-interaction`,Nn=`${pt}-unusable`,hn=`${pt}-auto-hide`,qn=`${hn}-hidden`,Yn=`${pt}-wheel`,$s=`${ko}-interactive`,Es=`${Tn}-interactive`,To={},Jt=()=>To,Cs=t=>{const e=[];return U(xt(t)?t:[t],n=>{const o=mt(n);U(o,s=>{K(e,To[s]=n[s])})}),e},Os="__osOptionsValidationPlugin",ks="__osSizeObserverPlugin",jn="__osScrollbarsHidingPlugin",Ts="__osClickScrollPlugin";let Qe;const Xn=(t,e,n,o)=>{vt(t,e);const s=Te(e),c=he(e),r=Me(n);return o&&Tt(e),{x:c.h-s.h+r.h,y:c.w-s.w+r.w}},js=t=>{let e=!1;const n=Wt(t,$o);try{e=it(t,Qo("scrollbar-width"))==="none"||window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},zs=(t,e)=>{const n="hidden";it(t,{overflowX:n,overflowY:n,direction:"rtl"}),St(t,0);const o=Ge(t),s=Ge(e);St(t,-999);const c=Ge(e);return{i:o.x===s.x,n:s.x!==c.x}},Ps=(t,e)=>{const n=Wt(t,So),o=kt(t),s=kt(e),c=Hn(s,o,!0),r=Wt(t,ds),a=kt(t),l=kt(e),i=Hn(l,a,!0);return n(),r(),c&&i},Ms=()=>{const{body:t}=document,n=uo(`<div class="${yo}"><div></div></div>`)[0],o=n.firstChild,[s,,c]=On(),[r,a]=wt({o:Xn(t,n,o),u:bo},Xn.bind(0,t,n,o,!0)),[l]=a(),i=js(n),d={x:l.x===0,y:l.y===0},g={elements:{host:null,padding:!i,viewport:u=>i&&u===u.ownerDocument.body&&u,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},f=nt({},as),p=nt.bind(0,{},f),v=nt.bind(0,{},g),S={k:l,I:d,A:i,H:it(n,"zIndex")==="-1",B:!!un,V:zs(n,o),Y:Ps(n,o),j:s.bind(0,"z"),N:s.bind(0,"r"),q:v,F:u=>nt(g,u)&&v(),G:p,X:u=>nt(f,u)&&p(),U:nt({},g),W:nt({},f)},j=window.addEventListener,L=En(u=>c(u?"z":"r"),{g:33,v:99});if(ft(n,"style"),Tt(n),j("resize",L.bind(0,!1)),!i&&(!d.x||!d.y)){let u;j("resize",()=>{const w=Jt()[jn];u=u||w&&w.R(),u&&u(S,r,L.bind(0,!0))})}return S},ht=()=>(Qe||(Qe=Ms()),Qe),zn=(t,e)=>$t(e)?e.apply(0,t):e,Ls=(t,e,n,o)=>{const s=At(o)?n:o;return zn(t,s)||e.apply(0,t)},jo=(t,e,n,o)=>{const s=At(o)?n:o,c=zn(t,s);return!!c&&(fe(c)?c:e.apply(0,t))},As=(t,e,n)=>{const{nativeScrollbarsOverlaid:o,body:s}=n||{},{I:c,A:r}=ht(),{nativeScrollbarsOverlaid:a,body:l}=e,i=o??a,d=At(s)?l:s,g=(c.x||c.y)&&i,f=t&&(He(d)?!r:d);return!!g||!!f},Pn=new WeakMap,Hs=(t,e)=>{Pn.set(t,e)},Rs=t=>{Pn.delete(t)},zo=t=>Pn.get(t),Kn=(t,e)=>t?e.split(".").reduce((n,o)=>n&&De(n,o)?n[o]:void 0,t):void 0,gn=(t,e,n)=>o=>[Kn(t,o),n||Kn(e,o)!==void 0],Po=t=>{let e=t;return[()=>e,n=>{e=nt({},e,n)}]},$e="tabindex",Ee=Kt.bind(0,""),tn=t=>{vt(Lt(t),yn(t)),Tt(t)},Is=t=>{const e=ht(),{q:n,A:o}=e,s=Jt()[jn],c=s&&s.T,{elements:r}=n(),{host:a,padding:l,viewport:i,content:d}=r,g=fe(t),f=g?{}:t,{elements:p}=f,{host:v,padding:S,viewport:j,content:L}=p||{},u=g?t:f.target,w=je(u,"textarea"),T=u.ownerDocument,H=T.documentElement,F=u===T.body,W=T.defaultView,B=Ls.bind(0,[u]),R=jo.bind(0,[u]),Z=zn.bind(0,[u]),q=B.bind(0,Ee,i),A=R.bind(0,Ee,d),x=q(j),y=x===u,h=y&&F,$=!y&&A(L),z=!y&&fe(x)&&x===$,O=z&&!!Z(d),E=O?q():x,M=O?$:A(),I=h?H:z?E:x,Y=w?B(Ee,a,v):u,Q=h?I:Y,m=z?M:$,b=T.activeElement,C=!y&&W.top===W&&b===u,k={Z:u,J:Q,K:I,tt:!y&&R(Ee,l,S),nt:m,ot:!y&&!o&&c&&c(e),st:h?H:I,et:h?T:I,ct:W,rt:T,lt:w,it:F,ut:g,ft:y,dt:z,_t:(ct,dt)=>qo(I,y?yt:Bt,y?dt:ct),ht:(ct,dt,ut)=>Xt(I,y?yt:Bt,y?dt:ct,ut)},D=mt(k).reduce((ct,dt)=>{const ut=k[dt];return K(ct,ut&&fe(ut)&&!Lt(ut)?ut:!1)},[]),V=ct=>ct?Be(D,ct)>-1:null,{Z:tt,J,tt:ot,K:X,nt:et,ot:at}=k,gt=[()=>{ft(J,yt),ft(J,Je),ft(tt,Je),F&&(ft(H,yt),ft(H,Je))}],Ht=w&&V(J);let Vt=w?tt:yn([et,X,ot,J,tt].find(ct=>V(ct)===!1));const Ut=h?tt:et||X;return[k,()=>{lt(J,yt,y?"viewport":"host"),lt(ot,pn,""),lt(et,Fn,""),y||lt(X,Bt,"");const ct=F&&!y?Wt(Lt(u),$o):bt;if(Ht&&(Ln(tt,J),K(gt,()=>{Ln(J,tt),Tt(J)})),vt(Ut,Vt),vt(J,ot),vt(ot||J,!y&&X),vt(X,et),K(gt,()=>{ct(),ft(ot,pn),ft(et,Fn),ft(X,Eo),ft(X,Co),ft(X,Bt),V(et)&&tn(et),V(X)&&tn(X),V(ot)&&tn(ot)}),o&&!y&&(Xt(X,Bt,Oo,!0),K(gt,ft.bind(0,X,Bt))),at&&(Ko(X,at),K(gt,Tt.bind(0,at))),C){const dt=lt(X,$e);lt(X,$e,"-1"),X.focus();const ut=()=>dt?lt(X,$e,dt):ft(X,$e),Et=st(T,"pointerdown keydown",()=>{ut(),Et()});K(gt,[ut,Et])}else b&&b.focus&&b.focus();Vt=0},jt.bind(0,gt)]},Bs=(t,e)=>{const{nt:n}=t,[o]=e;return s=>{const{Y:c}=ht(),{gt:r}=o(),{vt:a}=s,l=(n||!c)&&a;return l&&it(n,{height:r?"":"100%"}),{wt:l,bt:l}}},Ds=(t,e)=>{const[n,o]=e,{J:s,tt:c,K:r,ft:a}=t,[l,i]=wt({u:ns,o:In()},In.bind(0,s,"padding",""));return(d,g,f)=>{let[p,v]=i(f);const{A:S,Y:j}=ht(),{yt:L}=n(),{wt:u,bt:w,St:T}=d,[H,F]=g("paddingAbsolute");(u||v||!j&&w)&&([p,v]=l(f));const B=!a&&(F||T||v);if(B){const R=!H||!c&&!S,Z=p.r+p.l,q=p.t+p.b,A={marginRight:R&&!L?-Z:0,marginBottom:R?-q:0,marginLeft:R&&L?-Z:0,top:R?-p.t:0,right:R?L?-p.r:"auto":0,left:R?L?"auto":-p.l:0,width:R?`calc(100% + ${Z}px)`:""},x={paddingTop:R?p.t:0,paddingRight:R?p.r:0,paddingBottom:R?p.b:0,paddingLeft:R?p.l:0};it(c||r,A),it(r,x),o({tt:p,$t:!R,P:c?x:nt({},A,x)})}return{xt:B}}},{max:bn}=Math,Dt=bn.bind(0,0),Mo="visible",Gn="hidden",_s=42,Ce={u:go,o:{w:0,h:0}},Ws={u:bo,o:{x:Gn,y:Gn}},Fs=(t,e)=>{const n=window.devicePixelRatio%1!==0?1:0,o={w:Dt(t.w-e.w),h:Dt(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}},Oe=t=>t.indexOf(Mo)===0,Vs=(t,e)=>{const[n,o]=e,{J:s,tt:c,K:r,ot:a,ft:l,ht:i,it:d,ct:g}=t,{k:f,Y:p,A:v,I:S}=ht(),j=Jt()[jn],L=!l&&!v&&(S.x||S.y),u=d&&l,[w,T]=wt(Ce,Me.bind(0,r)),[H,F]=wt(Ce,Pe.bind(0,r)),[W,B]=wt(Ce),[R,Z]=wt(Ce),[q]=wt(Ws),A=(O,E)=>{if(it(r,{height:""}),E){const{$t:M,tt:P}=n(),{Ct:I,M:Y}=O,Q=Me(s),m=Te(s),b=it(r,"boxSizing")==="content-box",C=M||b?P.b+P.t:0,k=!(S.x&&b);it(r,{height:m.h+Q.h+(I.x&&k?Y.x:0)-C})}},x=(O,E)=>{const M=!v&&!O?_s:0,P=(V,tt,J)=>{const ot=it(r,V),et=(E?E[V]:ot)==="scroll";return[ot,et,et&&!v?tt?M:J:0,tt&&!!M]},[I,Y,Q,m]=P("overflowX",S.x,f.x),[b,C,k,D]=P("overflowY",S.y,f.y);return{Ot:{x:I,y:b},Ct:{x:Y,y:C},M:{x:Q,y:k},D:{x:m,y:D}}},y=(O,E,M,P)=>{const I=(C,k)=>{const D=Oe(C),V=k&&D&&C.replace(`${Mo}-`,"")||"";return[k&&!D?C:"",Oe(V)?"hidden":V]},[Y,Q]=I(M.x,E.x),[m,b]=I(M.y,E.y);return P.overflowX=Q&&m?Q:Y,P.overflowY=b&&Y?b:m,x(O,P)},h=(O,E,M,P)=>{const{M:I,D:Y}=O,{x:Q,y:m}=Y,{x:b,y:C}=I,{P:k}=n(),D=E?"marginLeft":"marginRight",V=E?"paddingLeft":"paddingRight",tt=k[D],J=k.marginBottom,ot=k[V],X=k.paddingBottom;P.width=`calc(100% + ${C+tt*-1}px)`,P[D]=-C+tt,P.marginBottom=-b+J,M&&(P[V]=ot+(m?C:0),P.paddingBottom=X+(Q?b:0))},[$,z]=j?j.L(L,p,r,a,n,x,h):[()=>L,()=>[bt]];return(O,E,M)=>{const{wt:P,Tt:I,bt:Y,xt:Q,vt:m,St:b}=O,{gt:C,yt:k}=n(),[D,V]=E("showNativeOverlaidScrollbars"),[tt,J]=E("overflow"),ot=D&&S.x&&S.y,X=!l&&!p&&(P||Y||I||V||m),et=Oe(tt.x),at=Oe(tt.y),gt=et||at;let Ht=T(M),Vt=F(M),Ut=B(M),le=Z(M),ct;if(V&&v&&i(Oo,us,!ot),X&&(ct=x(ot),A(ct,C)),P||Q||Y||b||V){gt&&i(se,oe,!1);const[zt,Rt]=z(ot,k,ct),[Ot,Ne]=Ht=w(M),[It,qe]=Vt=H(M),Zt=Te(r);let Nt=It,qt=Zt;zt(),(qe||Ne||V)&&Rt&&!ot&&$(Rt,It,Ot,k)&&(qt=Te(r),Nt=Pe(r));const de={w:Dt(bn(It.w,Nt.w)+Ot.w),h:Dt(bn(It.h,Nt.h)+Ot.h)},Mn={w:Dt((u?g.innerWidth:qt.w+Dt(Zt.w-It.w))+Ot.w),h:Dt((u?g.innerHeight+Ot.h:qt.h+Dt(Zt.h-It.h))+Ot.h)};le=R(Mn),Ut=W(Fs(de,Mn),M)}const[dt,ut]=le,[Et,me]=Ut,[ae,We]=Vt,[ve,Fe]=Ht,Ct={x:Et.w>0,y:Et.h>0},we=et&&at&&(Ct.x||Ct.y)||et&&Ct.x&&!Ct.y||at&&Ct.y&&!Ct.x;if(Q||b||Fe||We||ut||me||J||V||X){const zt={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},Rt=y(ot,Ct,tt,zt),Ot=$(Rt,ae,ve,k);l||h(Rt,k,Ot,zt),X&&A(Rt,C),l?(lt(s,Eo,zt.overflowX),lt(s,Co,zt.overflowY)):it(r,zt)}Xt(s,yt,oe,we),Xt(c,pn,fs,we),l||Xt(r,Bt,se,gt);const[Ve,Ue]=q(x(ot).Ot);return o({Ot:Ve,zt:{x:dt.w,y:dt.h},Et:{x:Et.w,y:Et.h},At:Ct}),{It:Ue,Ht:ut,Lt:me}}},Jn=(t,e,n)=>{const o={},s=e||{},c=mt(t).concat(mt(s));return U(c,r=>{const a=t[r],l=s[r];o[r]=!!(n||a||l)}),o},Us=(t,e)=>{const{Z:n,K:o,ht:s,ft:c}=t,{A:r,I:a,Y:l}=ht(),i=!r&&(a.x||a.y),d=[Bs(t,e),Ds(t,e),Vs(t,e)];return(g,f,p)=>{const v=Jn(nt({wt:!1,xt:!1,St:!1,vt:!1,Ht:!1,Lt:!1,It:!1,Tt:!1,bt:!1,Pt:!1},f),{},p),S=i||!l,j=S&&St(o),L=S&&Mt(o);s("",Le,!0);let u=v;return U(d,w=>{u=Jn(u,w(u,g,!!p)||{},p)}),St(o,j),Mt(o,L),s("",Le),c||(St(n,0),Mt(n,0)),u}},Ns=(t,e,n)=>{let o,s=!1;const c=()=>{s=!0},r=a=>{if(n){const l=n.reduce((i,d)=>{if(d){const[g,f]=d,p=f&&g&&(a?a(g):ao(g,t));p&&p.length&&f&&Ft(f)&&K(i,[p,f.trim()],!0)}return i},[]);U(l,i=>U(i[0],d=>{const g=i[1],f=o.get(d)||[];if(t.contains(d)){const v=st(d,g,S=>{s?(v(),o.delete(d)):e(S)});o.set(d,K(f,v))}else jt(f),o.delete(d)}))}};return n&&(o=new WeakMap,r()),[c,r]},Zn=(t,e,n,o)=>{let s=!1;const{Mt:c,Dt:r,Rt:a,kt:l,Bt:i,Vt:d}=o||{},g=En(()=>s&&n(!0),{g:33,v:99}),[f,p]=Ns(t,g,a),v=c||[],S=r||[],j=v.concat(S),L=(w,T)=>{const H=i||bt,F=d||bt,W=new Set,B=new Set;let R=!1,Z=!1;if(U(w,q=>{const{attributeName:A,target:x,type:y,oldValue:h,addedNodes:$,removedNodes:z}=q,O=y==="attributes",E=y==="childList",M=t===x,P=O&&Ft(A)?lt(x,A):0,I=P!==0&&h!==P,Y=Be(S,A)>-1&&I;if(e&&(E||!M)){const Q=!O,m=O&&I,b=m&&l&&je(x,l),k=(b?!H(x,A,h,P):Q||m)&&!F(q,!!b,t,o);U($,D=>W.add(D)),U(z,D=>W.add(D)),Z=Z||k}!e&&M&&I&&!H(x,A,h,P)&&(B.add(A),R=R||Y)}),W.size>0&&p(q=>Gt(W).reduce((A,x)=>(K(A,ao(q,x)),je(x,q)?K(A,x):A),[])),e)return!T&&Z&&n(!1),[!1];if(B.size>0||R){const q=[Gt(B),R];return!T&&n.apply(0,q),q}},u=new ts(w=>L(w));return u.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:j,subtree:e,childList:e,characterData:e}),s=!0,[()=>{s&&(f(),u.disconnect(),s=!1)},()=>{if(s){g.m();const w=u.takeRecords();return!vn(w)&&L(w,!0)}}]},ke=3333333,Lo=(t,e,n)=>{const{Yt:o,Pt:s}=n||{},c=Jt()[ks],{V:r}=ht(),l=uo(`<div class="${kn}"><div class="${hs}"></div></div>`)[0],i=l.firstChild,d=ce.bind(0,t),[g]=wt({o:!1,_:!0,u:(v,S)=>!(!v||!ee(v)&&ee(S))}),f=v=>{const S=xt(v)&&v.length>0&&pe(v[0]),j=!S&&mn(v[0]);let L=!1,u=!1,w=!0;if(S){const[T,,H]=g(v.pop().contentRect),F=ee(T),W=ee(H);L=!H&&!!W||!F,u=!W&&F,w=!L}else j?[,w]=v:u=v===!0;if(o&&w){const T=j?v[0]:ce(l);St(l,T?r.n?-ke:r.i?0:ke:ke),Mt(l,ke)}L||e({wt:!j,jt:j?v:void 0,Pt:!!u})},p=[];return[()=>{jt(p),Tt(l)},()=>{let v=s&&f;if(te){const S=new te(f);S.observe(i),K(p,()=>{S.disconnect()})}else if(c){const[S,j]=c.O(i,f,s);v=S,K(p,j)}if(o){const[S]=wt({o:void 0},d);K(p,st(l,"scroll",j=>{const L=S(),[u,w,T]=L;w&&($n(i,"ltr rtl"),Wt(i,u?"rtl":"ltr"),f([!!u,w,T])),mo(j)}))}v&&(Wt(l,ps),K(p,st(l,"animationstart",v,{C:!!te}))),(te||c)&&vt(t,l)}]},qs=t=>t.h===0||t.isIntersecting||t.intersectionRatio>0,Ys=(t,e)=>{let n;const o=Kt(gs),s=[],[c]=wt({o:!1}),r=(l,i)=>{if(l){const d=c(qs(l)),[,g]=d;return g&&!i&&e(d)&&[d]}},a=(l,i)=>l&&l.length>0&&r(l.pop(),i);return[()=>{jt(s),Tt(o)},()=>{if(An)n=new An(l=>a(l),{root:t}),n.observe(o),K(s,()=>{n.disconnect()});else{const l=()=>{const g=he(o);r(g)},[i,d]=Lo(o,l);K(s,i),d(),l()}vt(t,o)},()=>n&&a(n.takeRecords(),!0)]},Qn=`[${yt}]`,Xs=`[${Bt}]`,en=["tabindex"],to=["wrap","cols","rows"],nn=["id","class","style","open"],Ks=(t,e,n)=>{let o,s,c;const{J:r,K:a,nt:l,lt:i,ft:d,_t:g,ht:f}=t,{Y:p}=ht(),[v]=wt({u:go,o:{w:0,h:0}},()=>{const h=g(se,oe),$=g(Ze,""),z=$&&St(a),O=$&&Mt(a);f(se,oe),f(Ze,""),f("",Le,!0);const E=Pe(l),M=Pe(a),P=Me(a);return f(se,oe,h),f(Ze,"",$),f("",Le),St(a,z),Mt(a,O),{w:M.w+E.w+P.w,h:M.h+E.h+P.h}}),S=i?to:nn.concat(to),j=En(n,{g:()=>o,v:()=>s,p(h,$){const[z]=h,[O]=$;return[mt(z).concat(mt(O)).reduce((E,M)=>(E[M]=z[M]||O[M],E),{})]}}),L=h=>{U(h||en,$=>{if(Be(en,$)>-1){const z=lt(r,$);Ft(z)?lt(a,$,z):ft(a,$)}})},u=(h,$)=>{const[z,O]=h,E={vt:O};return e({gt:z}),!$&&n(E),E},w=({wt:h,jt:$,Pt:z})=>{const O=!h||z?n:j;let E=!1;if($){const[M,P]=$;E=P,e({yt:M})}O({wt:h,Pt:z,St:E})},T=(h,$)=>{const[,z]=v(),O={bt:z};return z&&!$&&(h?n:j)(O),O},H=(h,$,z)=>{const O={Tt:$};return $?!z&&j(O):d||L(h),O},[F,W,B]=l||!p?Ys(r,u):[bt,bt,bt],[R,Z]=d?[bt,bt]:Lo(r,w,{Pt:!0,Yt:!0}),[q,A]=Zn(r,!1,H,{Dt:nn,Mt:nn.concat(en)});let x;const y=d&&te&&new te(h=>{const $=h[h.length-1].contentRect,z=ee($),E=!ee(x)&&z;w({wt:!0,Pt:E}),x=$});return[()=>{F(),R(),c&&c[0](),y&&y.disconnect(),q()},()=>{y&&y.observe(r),L(),Z(),W()},()=>{const h={},$=A(),z=B(),O=c&&c[1]();return $&&nt(h,H.apply(0,K($,!0))),z&&nt(h,u.apply(0,K(z,!0))),O&&nt(h,T.apply(0,K(O,!0))),h},h=>{const[$]=h("update.ignoreMutation"),[z,O]=h("update.attributes"),[E,M]=h("update.elementEvents"),[P,I]=h("update.debounce"),Y=M||O,Q=m=>$t($)&&$(m);if(Y&&(c&&(c[1](),c[0]()),c=Zn(l||a,!0,T,{Mt:S.concat(z||[]),Rt:E,kt:Qn,Vt:(m,b)=>{const{target:C,attributeName:k}=m;return(!b&&k&&!d?Xo(C,Qn,Xs):!1)||!!Qt(C,`.${pt}`)||!!Q(m)}})),I)if(j.m(),xt(P)){const m=P[0],b=P[1];o=_t(m)&&m,s=_t(b)&&b}else _t(P)?(o=P,s=!1):(o=!1,s=!1)}]},eo={x:0,y:0},Gs=t=>({tt:{t:0,r:0,b:0,l:0},$t:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:eo,Et:eo,Ot:{x:"hidden",y:"hidden"},At:{x:!1,y:!1},gt:!1,yt:ce(t.J)}),Js=(t,e)=>{const n=gn(e,{}),[o,s,c]=On(),[r,a,l]=Is(t),i=Po(Gs(r)),[d,g]=i,f=Us(r,i),p=(w,T,H)=>{const W=mt(w).some(B=>!!w[B])||!wn(T)||H;return W&&c("u",[w,T,H]),W},[v,S,j,L]=Ks(r,g,w=>p(f(n,w),{},!1)),u=d.bind(0);return u.Nt=w=>o("u",w),u.qt=()=>{const{Z:w,K:T,rt:H,it:F}=r,W=F?H.documentElement:w,B=St(W),R=Mt(W);S(),a(),St(T,B),Mt(T,R)},u.Ft=r,[(w,T)=>{const H=gn(e,w,T);return L(H),p(f(H,j(),T),w,!!T)},u,()=>{s(),v(),l()}]},{round:no}=Math,Zs=t=>{const{width:e,height:n}=kt(t),{w:o,h:s}=he(t);return{x:no(e)/o||1,y:no(n)/s||1}},Qs=(t,e,n)=>{const o=e.scrollbars,{button:s,isPrimary:c,pointerType:r}=t,{pointers:a}=o;return s===0&&c&&o[n?"dragScroll":"clickScroll"]&&(a||[]).includes(r)},oo="pointerup pointerleave pointercancel lostpointercapture",tc=(t,e)=>st(t,"mousedown",st.bind(0,e,"click",mo,{C:!0,$:!0}),{$:!0}),ec=(t,e,n,o,s,c,r)=>{const{V:a}=ht(),{Gt:l,Xt:i,Ut:d}=o,g=`scroll${r?"Left":"Top"}`,f=`client${r?"X":"Y"}`,p=r?"width":"height",v=r?"left":"top",S=r?"w":"h",j=r?"x":"y",L=(u,w)=>T=>{const{Et:H}=c(),F=he(i)[S]-he(l)[S],B=w*T/F*H[j],Z=ce(d)&&r?a.n||a.i?1:-1:1;s[g]=u+B*Z};return st(i,"pointerdown",u=>{const w=Qt(u.target,`.${Tn}`)===l,T=w?l:i;if(Xt(e,yt,Wn,!0),Qs(u,t,w)){const H=!w&&u.shiftKey,F=()=>kt(l),W=()=>kt(i),B=(E,M)=>(E||F())[v]-(M||W())[v],R=L(s[g]||0,1/Zs(s)[j]),Z=u[f],q=F(),A=W(),x=q[p],y=B(q,A)+x/2,h=Z-A[v],$=w?0:h-y,z=E=>{jt(O),T.releasePointerCapture(E.pointerId)},O=[Xt.bind(0,e,yt,Wn),st(n,oo,z),st(n,"selectstart",E=>vo(E),{S:!1}),st(i,oo,z),st(i,"pointermove",E=>{const M=E[f]-Z;(w||H)&&R($+M)})];if(H)R($);else if(!w){const E=Jt()[Ts];E&&K(O,E.O(R,B,$,x,h))}T.setPointerCapture(u.pointerId)}})},nc=(t,e)=>(n,o,s,c,r,a,l)=>{const{Ut:i}=n,[d,g]=Yt(333),f=!!r.scrollBy;let p=!0;return jt.bind(0,[st(i,"pointerenter",()=>{o(Un,!0)}),st(i,"pointerleave pointercancel",()=>{o(Un)}),st(i,"wheel",v=>{const{deltaX:S,deltaY:j,deltaMode:L}=v;f&&p&&L===0&&Lt(i)===c&&r.scrollBy({left:S,top:j,behavior:"smooth"}),p=!1,o(Yn,!0),d(()=>{p=!0,o(Yn)}),vo(v)},{S:!1,$:!0}),tc(i,s),ec(t,c,s,n,r,e,l),g])},{min:Ae,max:xn,round:oc}=Math,Ao=(t,e,n,o)=>{if(o){const a=n?"x":"y",{Et:l,zt:i}=o,d=i[a],g=l[a];return xn(0,Ae(1,d/(d+g)))}const s=n?"width":"height",c=kt(t)[s],r=kt(e)[s];return xn(0,Ae(1,c/r))},sc=(t,e,n,o,s,c)=>{const{V:r}=ht(),a=c?"x":"y",l=c?"Left":"Top",{Et:i}=o,d=oc(i[a]),g=Ae(d,xn(0,n[`scroll${l}`])),f=c&&s,p=r.i?g:d-g,S=Ae(1,(f?p:g)/d),j=Ao(t,e,c);return 1/j*(1-j)*S},Ho=(t,e,n,o)=>e&&t.animate(n,{timeline:e,composite:o}),cc=(t,e)=>({transform:[re("0%",e),re(e&&t?"100%":"-100%",e)],[e?t?"right":"left":"top"]:["0%","100%"]}),rc=t=>`${Math.max(0,t-.5)}px`,so=(t,e,n,o)=>Ho(t,e,{transform:[re("0px",o),re(rc(n),o)]},"add"),co=(t,e)=>un?new un({source:t,axis:e}):null,ic=(t,e,n)=>{const{q:o,H:s}=ht(),{scrollbars:c}=o(),{slot:r}=c,{rt:a,Z:l,J:i,K:d,ut:g,st:f,it:p,ft:v}=e,{scrollbars:S}=g?{}:t,{slot:j}=S||{},L=new Map,u=co(f,"x"),w=co(f,"y"),T=jo([l,i,d],()=>v&&p?l:i,r,j),H=m=>v&&!p&&Lt(m)===d,F=m=>{L.forEach((b,C)=>{(m?Be(xt(m)?m:[m],C)>-1:!0)&&((b||[]).forEach(D=>{D&&D.cancel()}),L.delete(C))})},W=(m,b,C)=>{const k=C?Wt:$n;U(m,D=>{k(D.Ut,b)})},B=(m,b)=>{U(m,C=>{const[k,D]=b(C);it(k,D)})},R=(m,b,C)=>{B(m,k=>{const{Gt:D,Xt:V}=k;return[D,{[C?"width":"height"]:`${(Ao(D,V,C,b)*100).toFixed(3)}%`}]})},Z=(m,b,C)=>{!w&&!w&&B(m,k=>{const{Gt:D,Xt:V,Ut:tt}=k,J=sc(D,V,f,b,ce(tt),C);return[D,{transform:J===J?re(`${(J*100).toFixed(3)}%`,C):""}]})},q=m=>{const{Ut:b}=m,C=H(b)&&b;return[C,{transform:C?re([`${St(f)}px`,`${Mt(f)}px`]):""}]},A=[],x=[],y=[],h=(m,b,C)=>{const k=mn(C),D=k?C:!0,V=k?!C:!0;D&&W(x,m,b),V&&W(y,m,b)},$=m=>{R(x,m,!0),R(y,m)},z=m=>{Z(x,m,!0),Z(y,m)},O=()=>{const m=(b,{Ut:C,Gt:k})=>{F(k),L.set(k,[Ho(k,b?u:w,cc(b&&ce(C),b))])};x.forEach(m.bind(0,!0)),y.forEach(m.bind(0,!1))},E=()=>{!w&&!w&&(v&&B(x,q),v&&B(y,q))},M=({Et:m})=>{y.concat(x).forEach(({Ut:b})=>{F(b),H(b)&&L.set(b,[so(b,u,m.x,!0),so(b,w,m.y)])})},P=m=>{const b=m?vs:ws,C=m?x:y,k=vn(C)?Vn:"",D=Kt(`${pt} ${b} ${k}`),V=Kt(ko),tt=Kt(Tn),J={Ut:D,Xt:V,Gt:tt};return s||Wt(D,bs),vt(D,V),vt(V,tt),K(C,J),K(A,[Tt.bind(0,D),F,n(J,h,a,i,f,m?u:w,m)]),J},I=P.bind(0,!0),Y=P.bind(0,!1),Q=()=>{vt(T,x[0].Ut),vt(T,y[0].Ut),ze(()=>{h(Vn)},300)};return I(),Y(),[{Wt:$,Zt:z,Jt:O,Kt:M,Qt:E,tn:h,nn:{B:u,sn:x,en:I,cn:B.bind(0,x)},rn:{B:w,sn:y,en:Y,cn:B.bind(0,y)}},Q,jt.bind(0,A)]},on=t=>t.pointerType==="mouse",lc=(t,e,n,o)=>{let s,c,r,a,l,i=bt,d=0;const g=Po({}),[f]=g,[p,v]=Yt(),[S,j]=Yt(),[L,u]=Yt(100),[w,T]=Yt(100),[H,F]=Yt(100),[W,B]=Yt(()=>d),[R,Z,q]=ic(t,n.Ft,nc(e,n)),{J:A,et:x,it:y}=n.Ft,{tn:h,Wt:$,Zt:z,Jt:O,Kt:E,Qt:M}=R,P=b=>{h(hn,b,!0),h(hn,b,!1)},I=(b,C)=>{if(B(),b)h(qn);else{const k=()=>h(qn,!0);d>0&&!C?W(k):k()}},Y=b=>{on(b)&&(a=c,a&&I(!0))},Q=[u,B,T,F,j,v,q,st(A,"pointerover",Y,{C:!0}),st(A,"pointerenter",Y),st(A,"pointerleave",b=>{on(b)&&(a=!1,c&&I(!1))}),st(A,"pointermove",b=>{on(b)&&s&&p(()=>{u(),I(!0),w(()=>{s&&I(!1)})})}),st(x,"scroll",b=>{S(()=>{z(n()),r&&I(!0),L(()=>{r&&!a&&I(!1)})}),o(b),M()})],m=f.bind(0);return m.Ft=R,m.qt=Z,[(b,C,k)=>{const{Ht:D,Lt:V,It:tt,St:J,Pt:ot}=k,{I:X}=ht(),et=gn(e,b,C),at=n(),{Et:gt,Ot:Ht,yt:Vt,At:Ut}=at,[le,ct]=et("showNativeOverlaidScrollbars"),[dt,ut]=et("scrollbars.theme"),[Et,me]=et("scrollbars.visibility"),[ae,We]=et("scrollbars.autoHide"),[ve,Fe]=et("scrollbars.autoHideSuspend"),[Ct]=et("scrollbars.autoHideDelay"),[we,Ve]=et("scrollbars.dragScroll"),[Ue,zt]=et("scrollbars.clickScroll"),Rt=ot&&!C,Ot=Ut.x||Ut.y,Ne=D||V||J,It=tt||me,qe=le&&X.x&&X.y,Zt=(Nt,qt)=>{const de=Et==="visible"||Et==="auto"&&Nt==="scroll";return h(ys,de,qt),de};if(d=Ct,Rt&&(ve&&Ot?(P(!1),i(),H(()=>{i=st(x,"scroll",P.bind(0,!0),{C:!0})})):P(!0)),ct&&h(xs,qe),ut&&(h(l),h(dt,!0),l=dt),Fe&&!ve&&P(!0),We&&(s=ae==="move",c=ae==="leave",r=ae!=="never",I(!r,!0)),Ve&&h(Es,we),zt&&h($s,Ue),It){const Nt=Zt(Ht.x,!0),qt=Zt(Ht.y,!1);h(Ss,!(Nt&&qt))}Ne&&($(at),z(at),O(at),E(at),M(),h(Nn,!gt.x,!0),h(Nn,!gt.y,!1),h(ms,Vt&&!y))},m,()=>{jt(Q),i()}]},Ro=(t,e,n)=>{$t(t)&&t(e||void 0,n||void 0)},ge=(t,e,n)=>{const{G:o,q:s,j:c,N:r}=ht(),a=Jt(),l=fe(t),i=l?t:t.target,d=zo(i);if(e&&!d){let g=!1;const f=x=>{const y=Jt()[Os],h=y&&y.O;return h?h(x,!0):x},p=nt({},o(),f(e)),[v,S,j]=On(n),[L,u,w]=Js(t,p),[T,H,F]=lc(t,p,u,x=>j("scroll",[A,x])),W=(x,y)=>L(x,!!y),B=W.bind(0,{},!0),R=c(B),Z=r(B),q=x=>{Rs(i),R(),Z(),F(),w(),g=!0,j("destroyed",[A,!!x]),S()},A={options(x,y){if(x){const h=y?o():{},$=wo(p,nt(h,f(x)));wn($)||(nt(p,$),W($))}return nt({},p)},on:v,off:(x,y)=>{x&&y&&S(x,y)},state(){const{zt:x,Et:y,Ot:h,At:$,tt:z,$t:O,yt:E}=u();return nt({},{overflowEdge:x,overflowAmount:y,overflowStyle:h,hasOverflow:$,padding:z,paddingAbsolute:O,directionRTL:E,destroyed:g})},elements(){const{Z:x,J:y,tt:h,K:$,nt:z,st:O,et:E}=u.Ft,{nn:M,rn:P}=H.Ft,I=Q=>{const{Gt:m,Xt:b,Ut:C}=Q;return{scrollbar:C,track:b,handle:m}},Y=Q=>{const{sn:m,en:b}=Q,C=I(m[0]);return nt({},C,{clone:()=>{const k=I(b());return T({},!0,{}),k}})};return nt({},{target:x,host:y,padding:h||$,viewport:$,content:z||$,scrollOffsetElement:O,scrollEventElement:E,scrollbarHorizontal:Y(M),scrollbarVertical:Y(P)})},update:x=>W({},x),destroy:q.bind(0)};return u.Nt((x,y,h)=>{T(y,h,x)}),Hs(i,A),U(mt(a),x=>Ro(a[x],0,A)),As(u.Ft.it,s().cancel,!l&&t.cancel)?(q(!0),A):(u.qt(),H.qt(),j("initialized",[A]),u.Nt((x,y,h)=>{const{wt:$,St:z,vt:O,Ht:E,Lt:M,It:P,bt:I,Tt:Y}=x;j("updated",[A,{updateHints:{sizeChanged:$,directionChanged:z,heightIntrinsicChanged:O,overflowEdgeChanged:E,overflowAmountChanged:M,overflowStyleChanged:P,contentMutation:I,hostMutation:Y},changedOptions:y,force:h}])}),A.update(!0),A)}return d};ge.plugin=t=>{U(Cs(t),e=>Ro(e,ge))};ge.valid=t=>{const e=t&&t.elements,n=$t(e)&&e();return ln(n)&&!!zo(n.target)};ge.env=()=>{const{k:t,I:e,A:n,V:o,Y:s,H:c,B:r,U:a,W:l,q:i,F:d,G:g,X:f}=ht();return nt({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:c,scrollTimeline:r,staticDefaultInitialization:a,staticDefaultOptions:l,getDefaultInitialization:i,setDefaultInitialization:d,getDefaultOptions:g,setDefaultOptions:f})};const ac={scrollbars:{visibility:"auto",autoHide:"never"}},dc=(t,e)=>{Pt.useEffect(()=>{let n;return t.current&&e&&(n=ge(t.current,ac)),()=>{n&&n.destroy()}},[t,e])},uc=G.div`
  width: ${({width:t})=>(t==null?void 0:t.mob)+"px"||"100%"};
  ${rt.tablet} {
    width: ${({width:t})=>(t==null?void 0:t.nab)+"px"||"100%"};
    height: 660px;
  }
  ${rt.desktop} {
    width: ${({width:t})=>(t==null?void 0:t.dt)+"px"||"100%"};
    height: 487px;
  }
`;function fc({children:t,width:e}){const{isMobile:n}=Vo(),o=Pt.useRef(null);return dc(o,!n),_.jsx(uc,{width:e,ref:o,children:t})}fc.propTypes={width:ne.object};const pc=G.li`
  display: grid;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 16px;
  align-items: flex-start;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${N.textWhite02};
  background: ${N.textWhite005};

  ${rt.mobile} {
    width: 335px;
  }

  ${rt.tablet} {
    width: 335px;
    align-items: center;
  }

  ${rt.desktop} {
    width: 405px;
  }
`,hc=G.div`
  display: flex;
  align-items: flex-start;
`,gc=G.p`
  display: inline-flex;
  width: auto;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  padding: 0 7.5px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${N.textWhite005};
  border-radius: 4px;
  color: #fff;
`,bc=G.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${N.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background: #419b09;
    margin-right: 8px;
  }
`,xc=G.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;
  cursor: pointer;

  color: ${N.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${N.orangeSecondary};

    svg {
      stroke: ${N.orangeSecondary};
    }
  }

  ${rt.tablet} {
    font-size: 16px;
  }
`,mc=G.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${N.orange};

  transition: stroke 250ms ease-in-out;
`,vc=G.div`
  display: inline-flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${N.white};

  ${rt.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 21px;
  }
`,wc=G.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`,yc=G.svg`
  width: 16px;
  height: 16px;

  fill: ${N.white};
`,Sc=G.div`
  display: inline-block;
  align-items: center;
  margin-top: 8px;

  ${rt.tablet} {
    margin-top: 12px;
  }
`,sn=G.div`
  display: inline-flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${N.textWhite04};

  &:last-child {
    margin-right: 0;
  }
`,cn=G.p`
  margin-left: 4px;

  color: ${N.white};
`,$c=G.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center; 
  background-color: ${N.backdrop};
`,Ec=G.div`
  border: 1px solid ${N.textWhite02};
  box-sizing: border-box;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  // max-width: 400px;
  // min-width: 300px;
  padding: 48px 32px;
  border-radius: 8px;
  background-color: ${N.modalBlack};
  z-index: 1;
`,Cc=G.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  ${Bo}
`,Oc=G.svg`
  fill: ${N.grey};
  width: 24px;
  height: 24px;
`,kc=document.querySelector("#modal-root"),Tc=({children:t,openModal:e})=>{Pt.useEffect(()=>{const o=s=>{s.code==="Escape"&&e()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[e]);const n=o=>{o.currentTarget===o.target&&e()};return Do.createPortal(_.jsx($c,{onClick:n,children:_.jsxs(Ec,{children:[_.jsx(Cc,{type:"button",onClick:()=>e(),children:_.jsx(Oc,{children:_.jsx("use",{href:rn+"#close"})})}),t]})}),kc)};G.div`
  background-color: ${N.modalBlack};
  border-radius: 12px;
  padding: 48px 24px;
  ${rt.tablet} {
    padding: 48px 32px;
  }
`;const jc=G.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${rt.tablet} {
    flex-direction: row;
  }
`,zc=G.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${N.orange};
  gap: 10px;
  background-color: inherit;
  color: ${N.textWhite03};

  ${rt.tablet} {
    width: 244px;
    height: 40px;
  }
`,Pc=G.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${N.orange};
  gap: 10px;
  background-color: inherit;
  color: ${N.white};

  &::placeholder {
    color: ${N.textWhite03};
    text-align: right;
  }

  ${rt.tablet} {
    width: 155px;
    height: 40px;
    margin-top: 0;
  }
`,Mc=G.p`
  font-size: 12px;
  align-items: end;
  color: ${N.white};
`,Lc=G.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: ${N.textWhite04};
`,Ac=G.div`
  display: flex;
  margin-top: 24px;
  ${rt.tablet} {
    margin-top: 64px;
  }
`,Hc=G.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: ${N.orange};
  color: ${N.white};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid ${N.textWhite03};
  transition: background 0.3s ease-out;
  margin-right: 14px;

  &:hover {
    background: #ef8964;
  }

  ${rt.tablet} {
    margin-right: 16px;
  }
`,Rc=G.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: inherit;
  color: ${N.white};
  border-radius: 12px;
  border: 1px solid ${N.textWhite03};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  ${rt.tablet} {
    padding: 12px 40px;
  }
`;function Io({data:t,closeModal:e}){const[n,o]=Pt.useState(0),s=Math.round(n*t.calories/100);return _.jsxs("form",{children:[_.jsxs(jc,{children:[_.jsx("label",{children:_.jsx(zc,{type:"text",value:t.title,disabled:!0})}),_.jsx("label",{children:_.jsx(Pc,{placeholder:"grams",type:"number",value:n,onChange:c=>o(c.target.value)})})]}),_.jsxs(Mc,{children:[_.jsx(Lc,{children:"Calories:"})," ",s]}),_.jsxs(Ac,{children:[_.jsx(Hc,{type:"button",children:"Add to diary"}),_.jsx(Rc,{type:"button",onClick:e,children:"Cancel"})]})]})}Io.propTypes={data:ne.object,closeModal:ne.func};const Ic=({page:t,data:e})=>{const[n,o]=Pt.useState(window.innerWidth),[s,c]=Pt.useState(!1),r=()=>c(d=>!d);Pt.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]);const a=()=>{o(window.innerWidth)},l=d=>{let g=24;return n<768?g=23:n<1440&&(g=19),d.length<=g?d:d.substring(0,g)+"..."},i=_o(t,e);return _.jsxs(pc,{children:[_.jsxs(hc,{children:[_.jsx(gc,{children:i.subtitle}),t==="product"&&_.jsx(bc,{children:"Recommended"}),_.jsxs(xc,{onClick:r,children:[i.button,_.jsx(mc,{children:_.jsx("use",{href:rn+"#arrow-right"})})]})]}),_.jsxs(vc,{children:[_.jsx(wc,{children:_.jsx(yc,{children:_.jsx("use",{href:rn+"#runningMan"})})}),l(i.title)]}),_.jsxs(Sc,{children:[_.jsxs(sn,{children:[i.text1,_.jsx(cn,{children:i.subText1})]}),_.jsxs(sn,{children:[i.text2,_.jsx(cn,{children:i.subText2})]}),_.jsxs(sn,{children:[i.text3,_.jsx(cn,{children:i.subText3})]})]}),s&&_.jsx(Tc,{openModal:r,children:t==="product"&&_.jsx(Io,{closeModal:r,data:e})})]})};Ic.propTypes={page:ne.string,data:ne.object,openModal:ne.func};export{_c as P,fc as S,Ic as a};
