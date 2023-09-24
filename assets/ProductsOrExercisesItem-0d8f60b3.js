import{n as N,m as rt,j,r as wt,P as kt,c as U,y as _o,z as Fo,s as rn,k as io,A as No,Q as Vo,N as Uo,B as qo,u as Ko}from"./index-1216710f.js";import{c as ue,f as Yo}from"./formatDate-d1383d55.js";import{B as Xo}from"./BtnSubmit-948fc7bd.js";const Go=(t,e)=>t==="product"?{subtitle:"DIET",title:ue(e.title),button:"Add",text1:"Calories:",text2:"Category:",text3:"Weight:",subText1:e.calories,subText2:ue(e.category),subText3:e.weight}:{subtitle:"WORKOUT",title:ue(e.name),button:"Start",text1:"Burned calories:",text2:"Body part:",text3:"Target:",subText1:e.burnedCalories,subText2:ue(e.bodyPart),subText3:ue(e.target)},Jo=N.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  height: 100vh;
  width: 100%;

  margin-top: ${t=>t.marginTop};
  ${rt.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
  ${rt.desktop} {
    width: 868px;
  }
`;function rr({children:t,...e}){return j.jsx(Jo,{...e,children:t})}const Zo=["(max-width: 767px)","(min-width: 768px) and (max-width: 1439px)","(min-width: 1440px)"],Qo=()=>{const t=Zo.map(s=>matchMedia(s)),e=()=>t.map(s=>s.matches),[n,o]=wt.useState(e);return wt.useLayoutEffect(()=>{const s=()=>o(e);return t.forEach(c=>c.addEventListener("change",s)),()=>t.forEach(c=>c.removeEventListener("change",s))}),["isMobile","isTablet","isDesktop"].reduce((s,c,r)=>({...s,[c]:n[r]}),{})};/*!
 * OverlayScrollbars
 * Version: 2.3.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */function q(t,e){if(Ie(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&q(Object.keys(t),n=>e(t[n],n,t));return t}function it(t,e){const n=Nt(e);if(bt(e)||n){let s=n?"":{};if(t){const c=window.getComputedStyle(t,null);s=n?In(t,c,e):e.reduce((r,l)=>(r[l]=In(t,c,l),r),s)}return s}t&&q(mt(e),s=>gs(t,s,e[s]))}const vt=(t,e)=>{const{o:n,u:o,_:s}=t;let c=n,r;const l=(d,x)=>{const p=c,f=d,h=x||(o?!o(p,f):p!==f);return(h||s)&&(c=f,r=p),[c,h,r]};return[e?d=>l(e(c,r),d):l,d=>[c,!!d,r]]},xe=()=>typeof window<"u",lo=xe()&&Node.ELEMENT_NODE,{toString:ts,hasOwnProperty:Ke}=Object.prototype,Rt=t=>t===void 0,Re=t=>t===null,es=t=>Rt(t)||Re(t)?`${t}`:ts.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),_t=t=>typeof t=="number",Nt=t=>typeof t=="string",mn=t=>typeof t=="boolean",Ot=t=>typeof t=="function",bt=t=>Array.isArray(t),pe=t=>typeof t=="object"&&!bt(t)&&!Re(t),Ie=t=>{const e=!!t&&t.length,n=_t(e)&&e>-1&&e%1==0;return bt(t)||!Ot(t)&&n?e>0&&pe(t)?e-1 in t:!0:!1},ln=t=>{if(!t||!pe(t)||es(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=Ke.call(t,n),r=s&&Ke.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return Rt(e)||Ke.call(t,e)},fe=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===lo:!1},He=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===lo:!1},De=(t,e,n)=>t.indexOf(e,n),G=(t,e,n)=>(!n&&!Nt(e)&&Ie(e)?Array.prototype.push.apply(t,e):t.push(e),t),Jt=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{G(n,o)}):q(t,o=>{G(n,o)}),n)},yn=t=>!!t&&t.length===0,Pt=(t,e,n)=>{q(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},Be=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),mt=t=>t?Object.keys(t):[],nt=(t,e,n,o,s,c,r)=>{const l=[e,n,o,s,c,r];return(typeof t!="object"||Re(t))&&!Ot(t)&&(t={}),q(l,i=>{q(mt(i),a=>{const d=i[a];if(t===d)return!0;const x=bt(d);if(d&&ln(d)){const p=t[a];let f=p;x&&!bt(p)?f=[]:!x&&!ln(p)&&(f={}),t[a]=nt(f,d)}else t[a]=x?d.slice():d})}),t},wn=t=>{for(const e in t)return!1;return!0},ao=(t,e,n,o)=>{if(Rt(o))return n?n[t]:e;n&&(Nt(o)||_t(o))&&(n[t]=o)},lt=(t,e,n)=>{if(Rt(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},uo=(t,e)=>new Set((lt(t,e)||"").split(" ")),ft=(t,e)=>{t&&t.removeAttribute(e)},Xt=(t,e,n,o)=>{if(n){const s=uo(t,e);s[o?"add":"delete"](n);const c=Jt(s).join(" ").trim();lt(t,e,c)}},ns=(t,e,n)=>uo(t,e).has(n),$t=(t,e)=>ao("scrollLeft",0,t,e),At=(t,e)=>ao("scrollTop",0,t,e),an=xe()&&Element.prototype,fo=(t,e)=>{const n=[],o=e?He(e)&&e:document;return o?G(n,o.querySelectorAll(t)):n},os=(t,e)=>{const n=e?He(e)&&e:document;return n?n.querySelector(t):null},ke=(t,e)=>He(t)?(an.matches||an.msMatchesSelector).call(t,e):!1,vn=t=>t?Jt(t.childNodes):[],Lt=t=>t&&t.parentElement,te=(t,e)=>{if(He(t)){const n=an.closest;if(n)return n.call(t,e);do{if(ke(t,e))return t;t=Lt(t)}while(t)}},ss=(t,e,n)=>{const o=te(t,e),s=t&&os(n,o),c=te(s,e)===o;return o&&s?o===t||s===t||c&&te(te(t,n),e)!==o:!1},Sn=(t,e,n)=>{if(n&&t){let o=e,s;Ie(n)?(s=document.createDocumentFragment(),q(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null)}},yt=(t,e)=>{Sn(t,null,e)},cs=(t,e)=>{Sn(Lt(t),t,e)},An=(t,e)=>{Sn(Lt(t),t&&t.nextSibling,e)},zt=t=>{if(Ie(t))q(Jt(t),e=>zt(e));else if(t){const e=Lt(t);e&&e.removeChild(t)}},Gt=t=>{const e=document.createElement("div");return t&&lt(e,"class",t),e},po=t=>{const e=Gt();return e.innerHTML=t.trim(),q(vn(e),n=>zt(n))},dn=t=>t.charAt(0).toUpperCase()+t.slice(1),rs=()=>Gt().style,is=["-webkit-","-moz-","-o-","-ms-"],ls=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Ye={},Xe={},as=t=>{let e=Xe[t];if(Be(Xe,t))return e;const n=dn(t),o=rs();return q(is,s=>{const c=s.replace(/-/g,"");return!(e=[t,s+t,c+n,dn(c)+n].find(l=>o[l]!==void 0))}),Xe[t]=e||""},ie=t=>{if(xe()){let e=Ye[t]||window[t];return Be(Ye,t)||(q(ls,n=>(e=e||window[n+dn(t)],!e)),Ye[t]=e),e}},ds=ie("MutationObserver"),Ln=ie("IntersectionObserver"),ee=ie("ResizeObserver"),ho=ie("cancelAnimationFrame"),go=ie("requestAnimationFrame"),un=ie("ScrollTimeline"),ze=xe()&&window.setTimeout,fn=xe()&&window.clearTimeout,us=/[^\x20\t\r\n\f]+/g,xo=(t,e,n)=>{const o=t&&t.classList;let s,c=0,r=!1;if(o&&e&&Nt(e)){const l=e.match(us)||[];for(r=l.length>0;s=l[c++];)r=!!n(o,s)&&r}return r},$n=(t,e)=>{xo(t,e,(n,o)=>n.remove(o))},Ft=(t,e)=>(xo(t,e,(n,o)=>n.add(o)),$n.bind(0,t,e)),We=(t,e,n,o)=>{if(t&&e){let s=!0;return q(n,c=>{const r=o?o(t[c]):t[c],l=o?o(e[c]):e[c];r!==l&&(s=!1)}),s}return!1},bo=(t,e)=>We(t,e,["w","h"]),mo=(t,e)=>We(t,e,["x","y"]),fs=(t,e)=>We(t,e,["t","r","b","l"]),Rn=(t,e,n)=>We(t,e,["width","height"],n&&(o=>Math.round(o))),xt=()=>{},Yt=t=>{let e;const n=t?ze:go,o=t?fn:ho;return[s=>{o(e),e=n(s,Ot(t)?t():t)},()=>o(e)]},On=(t,e)=>{let n,o,s,c=xt;const{g:r,v:l,p:i}=e||{},a=function(h){c(),fn(n),n=o=void 0,c=xt,t.apply(this,h)},d=f=>i&&o?i(o,f):f,x=()=>{c!==xt&&a(d(s)||s)},p=function(){const h=Jt(arguments),v=Ot(r)?r():r;if(_t(v)&&v>=0){const P=Ot(l)?l():l,u=_t(P)&&P>=0,y=v>0?ze:go,T=v>0?fn:ho,_=d(h)||h,F=a.bind(0,_);c();const B=y(F,v);c=()=>T(B),u&&!n&&(n=ze(x,P)),o=s=_}else a(h)};return p.m=x,p},ps={opacity:1,zIndex:1},ve=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},hs=(t,e)=>!ps[t]&&_t(e)?`${e}px`:e,In=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),gs=(t,e,n)=>{try{const{style:o}=t;Rt(o[e])?o.setProperty(e,n):o[e]=hs(e,n)}catch{}},ce=t=>it(t,"direction")==="rtl",Hn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,a=it(t,[c,r,l,i]);return{t:ve(a[c],!0),r:ve(a[r],!0),b:ve(a[l],!0),l:ve(a[i],!0)}},re=(t,e)=>`translate${bt(t)?`(${t[0]},${t[1]})`:`${e?"X":"Y"}(${t})`}`,{round:Dn}=Math,Cn={w:0,h:0},he=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:Cn,Te=t=>t?{w:t.clientWidth,h:t.clientHeight}:Cn,Pe=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:Cn,Me=t=>{const e=parseFloat(it(t,"height"))||0,n=parseFloat(it(t,"width"))||0;return{w:n-Dn(n),h:e-Dn(e)}},Tt=t=>t.getBoundingClientRect(),ne=t=>!!(t&&(t.height||t.width));let Se;const xs=()=>{if(Rt(Se)){Se=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){Se=!0}}))}catch{}}return Se},yo=t=>t.split(" "),bs=(t,e,n,o)=>{q(yo(e),s=>{t.removeEventListener(s,n,o)})},st=(t,e,n,o)=>{var s;const c=xs(),r=(s=c&&o&&o.S)!=null?s:c,l=o&&o.$||!1,i=o&&o.C||!1,a=[],d=c?{passive:r,capture:l}:l;return q(yo(e),x=>{const p=i?f=>{t.removeEventListener(x,p,l),n&&n(f)}:n;G(a,bs.bind(null,t,x,p,l)),t.addEventListener(x,p,d)}),Pt.bind(0,a)},wo=t=>t.stopPropagation(),vo=t=>t.preventDefault(),ms={x:0,y:0},Ge=t=>{const e=t?Tt(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:ms},Bn=(t,e)=>{q(bt(e)?e:[e],t)},En=t=>{const e=new Map,n=(c,r)=>{if(c){const l=e.get(c);Bn(i=>{l&&l[i?"delete":"clear"](i)},r)}else e.forEach(l=>{l.clear()}),e.clear()},o=(c,r)=>{if(Nt(c)){const a=e.get(c)||new Set;return e.set(c,a),Bn(d=>{Ot(d)&&a.add(d)},r),n.bind(0,c,r)}mn(r)&&r&&n();const l=mt(c),i=[];return q(l,a=>{const d=c[a];d&&G(i,o(a,d))}),Pt.bind(0,i)},s=(c,r)=>{const l=e.get(c);q(Jt(l),i=>{r&&!yn(r)?i.apply(0,r):i()})};return o(t||{}),[o,n,s]},Wn=t=>JSON.stringify(t,(e,n)=>{if(Ot(n))throw new Error;return n}),ys={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},So=(t,e)=>{const n={},o=mt(e).concat(mt(t));return q(o,s=>{const c=t[s],r=e[s];if(pe(c)&&pe(r))nt(n[s]={},So(c,r)),wn(n[s])&&delete n[s];else if(Be(e,s)&&r!==c){let l=!0;if(bt(c)||bt(r))try{Wn(c)===Wn(r)&&(l=!1)}catch{}l&&(n[s]=r)}}),n},be="data-overlayscrollbars",$o="os-environment",Oo=`${$o}-flexbox-glue`,ws=`${Oo}-max`,Co="os-scrollbar-hidden",Je=`${be}-initialize`,St=be,Eo=`${St}-overflow-x`,jo=`${St}-overflow-y`,oe="overflowVisible",vs="scrollbarHidden",_n="scrollbarPressed",Ae="updating",Bt=`${be}-viewport`,Ze="arrange",To="scrollbarHidden",se=oe,pn=`${be}-padding`,Ss=se,Fn=`${be}-content`,jn="os-size-observer",$s=`${jn}-appear`,Os=`${jn}-listener`,Cs="os-trinsic-observer",Es="os-no-css-vars",js="os-theme-none",pt="os-scrollbar",Ts=`${pt}-rtl`,ks=`${pt}-horizontal`,zs=`${pt}-vertical`,ko=`${pt}-track`,Tn=`${pt}-handle`,Ps=`${pt}-visible`,Ms=`${pt}-cornerless`,Nn=`${pt}-transitionless`,Vn=`${pt}-interaction`,Un=`${pt}-unusable`,hn=`${pt}-auto-hide`,qn=`${hn}-hidden`,Kn=`${pt}-wheel`,As=`${ko}-interactive`,Ls=`${Tn}-interactive`,zo={},Zt=()=>zo,Rs=t=>{const e=[];return q(bt(t)?t:[t],n=>{const o=mt(n);q(o,s=>{G(e,zo[s]=n[s])})}),e},Is="__osOptionsValidationPlugin",Hs="__osSizeObserverPlugin",kn="__osScrollbarsHidingPlugin",Ds="__osClickScrollPlugin";let Qe;const Yn=(t,e,n,o)=>{yt(t,e);const s=Te(e),c=he(e),r=Me(n);return o&&zt(e),{x:c.h-s.h+r.h,y:c.w-s.w+r.w}},Bs=t=>{let e=!1;const n=Ft(t,Co);try{e=it(t,as("scrollbar-width"))==="none"||window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},Ws=(t,e)=>{const n="hidden";it(t,{overflowX:n,overflowY:n,direction:"rtl"}),$t(t,0);const o=Ge(t),s=Ge(e);$t(t,-999);const c=Ge(e);return{i:o.x===s.x,n:s.x!==c.x}},_s=(t,e)=>{const n=Ft(t,Oo),o=Tt(t),s=Tt(e),c=Rn(s,o,!0),r=Ft(t,ws),l=Tt(t),i=Tt(e),a=Rn(i,l,!0);return n(),r(),c&&a},Fs=()=>{const{body:t}=document,n=po(`<div class="${$o}"><div></div></div>`)[0],o=n.firstChild,[s,,c]=En(),[r,l]=vt({o:Yn(t,n,o),u:mo},Yn.bind(0,t,n,o,!0)),[i]=l(),a=Bs(n),d={x:i.x===0,y:i.y===0},x={elements:{host:null,padding:!a,viewport:u=>a&&u===u.ownerDocument.body&&u,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=nt({},ys),f=nt.bind(0,{},p),h=nt.bind(0,{},x),v={k:i,I:d,A:a,H:it(n,"zIndex")==="-1",B:!!un,V:Ws(n,o),Y:_s(n,o),j:s.bind(0,"z"),N:s.bind(0,"r"),q:h,F:u=>nt(x,u)&&h(),G:f,X:u=>nt(p,u)&&f(),U:nt({},x),W:nt({},p)},C=window.addEventListener,P=On(u=>c(u?"z":"r"),{g:33,v:99});if(ft(n,"style"),zt(n),C("resize",P.bind(0,!1)),!a&&(!d.x||!d.y)){let u;C("resize",()=>{const y=Zt()[kn];u=u||y&&y.R(),u&&u(v,r,P.bind(0,!0))})}return v},ht=()=>(Qe||(Qe=Fs()),Qe),zn=(t,e)=>Ot(e)?e.apply(0,t):e,Ns=(t,e,n,o)=>{const s=Rt(o)?n:o;return zn(t,s)||e.apply(0,t)},Po=(t,e,n,o)=>{const s=Rt(o)?n:o,c=zn(t,s);return!!c&&(fe(c)?c:e.apply(0,t))},Vs=(t,e,n)=>{const{nativeScrollbarsOverlaid:o,body:s}=n||{},{I:c,A:r}=ht(),{nativeScrollbarsOverlaid:l,body:i}=e,a=o??l,d=Rt(s)?i:s,x=(c.x||c.y)&&a,p=t&&(Re(d)?!r:d);return!!x||!!p},Pn=new WeakMap,Us=(t,e)=>{Pn.set(t,e)},qs=t=>{Pn.delete(t)},Mo=t=>Pn.get(t),Xn=(t,e)=>t?e.split(".").reduce((n,o)=>n&&Be(n,o)?n[o]:void 0,t):void 0,gn=(t,e,n)=>o=>[Xn(t,o),n||Xn(e,o)!==void 0],Ao=t=>{let e=t;return[()=>e,n=>{e=nt({},e,n)}]},$e="tabindex",Oe=Gt.bind(0,""),tn=t=>{yt(Lt(t),vn(t)),zt(t)},Ks=t=>{const e=ht(),{q:n,A:o}=e,s=Zt()[kn],c=s&&s.T,{elements:r}=n(),{host:l,padding:i,viewport:a,content:d}=r,x=fe(t),p=x?{}:t,{elements:f}=p,{host:h,padding:v,viewport:C,content:P}=f||{},u=x?t:p.target,y=ke(u,"textarea"),T=u.ownerDocument,I=T.documentElement,_=u===T.body,F=T.defaultView,B=Ns.bind(0,[u]),H=Po.bind(0,[u]),Z=zn.bind(0,[u]),K=B.bind(0,Oe,a),R=H.bind(0,Oe,d),m=K(C),S=m===u,g=S&&_,$=!S&&R(P),M=!S&&fe(m)&&m===$,k=M&&!!Z(d),O=k?K():m,L=k?$:R(),D=g?I:M?O:m,Y=y?B(Oe,l,h):u,Q=g?D:Y,w=M?L:$,b=T.activeElement,E=!S&&F.top===F&&b===u,z={Z:u,J:Q,K:D,tt:!S&&H(Oe,i,v),nt:w,ot:!S&&!o&&c&&c(e),st:g?I:D,et:g?T:D,ct:F,rt:T,lt:y,it:_,ut:x,ft:S,dt:M,_t:(ct,dt)=>ns(D,S?St:Bt,S?dt:ct),ht:(ct,dt,ut)=>Xt(D,S?St:Bt,S?dt:ct,ut)},W=mt(z).reduce((ct,dt)=>{const ut=z[dt];return G(ct,ut&&fe(ut)&&!Lt(ut)?ut:!1)},[]),V=ct=>ct?De(W,ct)>-1:null,{Z:tt,J,tt:ot,K:X,nt:et,ot:at}=z,gt=[()=>{ft(J,St),ft(J,Je),ft(tt,Je),_&&(ft(I,St),ft(I,Je))}],It=y&&V(J);let Vt=y?tt:vn([et,X,ot,J,tt].find(ct=>V(ct)===!1));const Ut=g?tt:et||X;return[z,()=>{lt(J,St,S?"viewport":"host"),lt(ot,pn,""),lt(et,Fn,""),S||lt(X,Bt,"");const ct=_&&!S?Ft(Lt(u),Co):xt;if(It&&(An(tt,J),G(gt,()=>{An(J,tt),zt(J)})),yt(Ut,Vt),yt(J,ot),yt(ot||J,!S&&X),yt(X,et),G(gt,()=>{ct(),ft(ot,pn),ft(et,Fn),ft(X,Eo),ft(X,jo),ft(X,Bt),V(et)&&tn(et),V(X)&&tn(X),V(ot)&&tn(ot)}),o&&!S&&(Xt(X,Bt,To,!0),G(gt,ft.bind(0,X,Bt))),at&&(cs(X,at),G(gt,zt.bind(0,at))),E){const dt=lt(X,$e);lt(X,$e,"-1"),X.focus();const ut=()=>dt?lt(X,$e,dt):ft(X,$e),Ct=st(T,"pointerdown keydown",()=>{ut(),Ct()});G(gt,[ut,Ct])}else b&&b.focus&&b.focus();Vt=0},Pt.bind(0,gt)]},Ys=(t,e)=>{const{nt:n}=t,[o]=e;return s=>{const{Y:c}=ht(),{gt:r}=o(),{vt:l}=s,i=(n||!c)&&l;return i&&it(n,{height:r?"":"100%"}),{wt:i,bt:i}}},Xs=(t,e)=>{const[n,o]=e,{J:s,tt:c,K:r,ft:l}=t,[i,a]=vt({u:fs,o:Hn()},Hn.bind(0,s,"padding",""));return(d,x,p)=>{let[f,h]=a(p);const{A:v,Y:C}=ht(),{yt:P}=n(),{wt:u,bt:y,St:T}=d,[I,_]=x("paddingAbsolute");(u||h||!C&&y)&&([f,h]=i(p));const B=!l&&(_||T||h);if(B){const H=!I||!c&&!v,Z=f.r+f.l,K=f.t+f.b,R={marginRight:H&&!P?-Z:0,marginBottom:H?-K:0,marginLeft:H&&P?-Z:0,top:H?-f.t:0,right:H?P?-f.r:"auto":0,left:H?P?"auto":-f.l:0,width:H?`calc(100% + ${Z}px)`:""},m={paddingTop:H?f.t:0,paddingRight:H?f.r:0,paddingBottom:H?f.b:0,paddingLeft:H?f.l:0};it(c||r,R),it(r,m),o({tt:f,$t:!H,P:c?m:nt({},R,m)})}return{xt:B}}},{max:xn}=Math,Wt=xn.bind(0,0),Lo="visible",Gn="hidden",Gs=42,Ce={u:bo,o:{w:0,h:0}},Js={u:mo,o:{x:Gn,y:Gn}},Zs=(t,e)=>{const n=window.devicePixelRatio%1!==0?1:0,o={w:Wt(t.w-e.w),h:Wt(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}},Ee=t=>t.indexOf(Lo)===0,Qs=(t,e)=>{const[n,o]=e,{J:s,tt:c,K:r,ot:l,ft:i,ht:a,it:d,ct:x}=t,{k:p,Y:f,A:h,I:v}=ht(),C=Zt()[kn],P=!i&&!h&&(v.x||v.y),u=d&&i,[y,T]=vt(Ce,Me.bind(0,r)),[I,_]=vt(Ce,Pe.bind(0,r)),[F,B]=vt(Ce),[H,Z]=vt(Ce),[K]=vt(Js),R=(k,O)=>{if(it(r,{height:""}),O){const{$t:L,tt:A}=n(),{Ct:D,M:Y}=k,Q=Me(s),w=Te(s),b=it(r,"boxSizing")==="content-box",E=L||b?A.b+A.t:0,z=!(v.x&&b);it(r,{height:w.h+Q.h+(D.x&&z?Y.x:0)-E})}},m=(k,O)=>{const L=!h&&!k?Gs:0,A=(V,tt,J)=>{const ot=it(r,V),et=(O?O[V]:ot)==="scroll";return[ot,et,et&&!h?tt?L:J:0,tt&&!!L]},[D,Y,Q,w]=A("overflowX",v.x,p.x),[b,E,z,W]=A("overflowY",v.y,p.y);return{Ot:{x:D,y:b},Ct:{x:Y,y:E},M:{x:Q,y:z},D:{x:w,y:W}}},S=(k,O,L,A)=>{const D=(E,z)=>{const W=Ee(E),V=z&&W&&E.replace(`${Lo}-`,"")||"";return[z&&!W?E:"",Ee(V)?"hidden":V]},[Y,Q]=D(L.x,O.x),[w,b]=D(L.y,O.y);return A.overflowX=Q&&w?Q:Y,A.overflowY=b&&Y?b:w,m(k,A)},g=(k,O,L,A)=>{const{M:D,D:Y}=k,{x:Q,y:w}=Y,{x:b,y:E}=D,{P:z}=n(),W=O?"marginLeft":"marginRight",V=O?"paddingLeft":"paddingRight",tt=z[W],J=z.marginBottom,ot=z[V],X=z.paddingBottom;A.width=`calc(100% + ${E+tt*-1}px)`,A[W]=-E+tt,A.marginBottom=-b+J,L&&(A[V]=ot+(w?E:0),A.paddingBottom=X+(Q?b:0))},[$,M]=C?C.L(P,f,r,l,n,m,g):[()=>P,()=>[xt]];return(k,O,L)=>{const{wt:A,Tt:D,bt:Y,xt:Q,vt:w,St:b}=k,{gt:E,yt:z}=n(),[W,V]=O("showNativeOverlaidScrollbars"),[tt,J]=O("overflow"),ot=W&&v.x&&v.y,X=!i&&!f&&(A||Y||D||V||w),et=Ee(tt.x),at=Ee(tt.y),gt=et||at;let It=T(L),Vt=_(L),Ut=B(L),le=Z(L),ct;if(V&&h&&a(To,vs,!ot),X&&(ct=m(ot),R(ct,E)),A||Q||Y||b||V){gt&&a(se,oe,!1);const[Mt,Ht]=M(ot,z,ct),[jt,Ue]=It=y(L),[Dt,qe]=Vt=I(L),Qt=Te(r);let qt=Dt,Kt=Qt;Mt(),(qe||Ue||V)&&Ht&&!ot&&$(Ht,Dt,jt,z)&&(Kt=Te(r),qt=Pe(r));const de={w:Wt(xn(Dt.w,qt.w)+jt.w),h:Wt(xn(Dt.h,qt.h)+jt.h)},Mn={w:Wt((u?x.innerWidth:Kt.w+Wt(Qt.w-Dt.w))+jt.w),h:Wt((u?x.innerHeight+jt.h:Kt.h+Wt(Qt.h-Dt.h))+jt.h)};le=H(Mn),Ut=F(Zs(de,Mn),L)}const[dt,ut]=le,[Ct,me]=Ut,[ae,_e]=Vt,[ye,Fe]=It,Et={x:Ct.w>0,y:Ct.h>0},we=et&&at&&(Et.x||Et.y)||et&&Et.x&&!Et.y||at&&Et.y&&!Et.x;if(Q||b||Fe||_e||ut||me||J||V||X){const Mt={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},Ht=S(ot,Et,tt,Mt),jt=$(Ht,ae,ye,z);i||g(Ht,z,jt,Mt),X&&R(Ht,E),i?(lt(s,Eo,Mt.overflowX),lt(s,jo,Mt.overflowY)):it(r,Mt)}Xt(s,St,oe,we),Xt(c,pn,Ss,we),i||Xt(r,Bt,se,gt);const[Ne,Ve]=K(m(ot).Ot);return o({Ot:Ne,zt:{x:dt.w,y:dt.h},Et:{x:Ct.w,y:Ct.h},At:Et}),{It:Ve,Ht:ut,Lt:me}}},Jn=(t,e,n)=>{const o={},s=e||{},c=mt(t).concat(mt(s));return q(c,r=>{const l=t[r],i=s[r];o[r]=!!(n||l||i)}),o},tc=(t,e)=>{const{Z:n,K:o,ht:s,ft:c}=t,{A:r,I:l,Y:i}=ht(),a=!r&&(l.x||l.y),d=[Ys(t,e),Xs(t,e),Qs(t,e)];return(x,p,f)=>{const h=Jn(nt({wt:!1,xt:!1,St:!1,vt:!1,Ht:!1,Lt:!1,It:!1,Tt:!1,bt:!1,Pt:!1},p),{},f),v=a||!i,C=v&&$t(o),P=v&&At(o);s("",Ae,!0);let u=h;return q(d,y=>{u=Jn(u,y(u,x,!!f)||{},f)}),$t(o,C),At(o,P),s("",Ae),c||($t(n,0),At(n,0)),u}},ec=(t,e,n)=>{let o,s=!1;const c=()=>{s=!0},r=l=>{if(n){const i=n.reduce((a,d)=>{if(d){const[x,p]=d,f=p&&x&&(l?l(x):fo(x,t));f&&f.length&&p&&Nt(p)&&G(a,[f,p.trim()],!0)}return a},[]);q(i,a=>q(a[0],d=>{const x=a[1],p=o.get(d)||[];if(t.contains(d)){const h=st(d,x,v=>{s?(h(),o.delete(d)):e(v)});o.set(d,G(p,h))}else Pt(p),o.delete(d)}))}};return n&&(o=new WeakMap,r()),[c,r]},Zn=(t,e,n,o)=>{let s=!1;const{Mt:c,Dt:r,Rt:l,kt:i,Bt:a,Vt:d}=o||{},x=On(()=>s&&n(!0),{g:33,v:99}),[p,f]=ec(t,x,l),h=c||[],v=r||[],C=h.concat(v),P=(y,T)=>{const I=a||xt,_=d||xt,F=new Set,B=new Set;let H=!1,Z=!1;if(q(y,K=>{const{attributeName:R,target:m,type:S,oldValue:g,addedNodes:$,removedNodes:M}=K,k=S==="attributes",O=S==="childList",L=t===m,A=k&&Nt(R)?lt(m,R):0,D=A!==0&&g!==A,Y=De(v,R)>-1&&D;if(e&&(O||!L)){const Q=!k,w=k&&D,b=w&&i&&ke(m,i),z=(b?!I(m,R,g,A):Q||w)&&!_(K,!!b,t,o);q($,W=>F.add(W)),q(M,W=>F.add(W)),Z=Z||z}!e&&L&&D&&!I(m,R,g,A)&&(B.add(R),H=H||Y)}),F.size>0&&f(K=>Jt(F).reduce((R,m)=>(G(R,fo(K,m)),ke(m,K)?G(R,m):R),[])),e)return!T&&Z&&n(!1),[!1];if(B.size>0||H){const K=[Jt(B),H];return!T&&n.apply(0,K),K}},u=new ds(y=>P(y));return u.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:C,subtree:e,childList:e,characterData:e}),s=!0,[()=>{s&&(p(),u.disconnect(),s=!1)},()=>{if(s){x.m();const y=u.takeRecords();return!yn(y)&&P(y,!0)}}]},je=3333333,Ro=(t,e,n)=>{const{Yt:o,Pt:s}=n||{},c=Zt()[Hs],{V:r}=ht(),i=po(`<div class="${jn}"><div class="${Os}"></div></div>`)[0],a=i.firstChild,d=ce.bind(0,t),[x]=vt({o:!1,_:!0,u:(h,v)=>!(!h||!ne(h)&&ne(v))}),p=h=>{const v=bt(h)&&h.length>0&&pe(h[0]),C=!v&&mn(h[0]);let P=!1,u=!1,y=!0;if(v){const[T,,I]=x(h.pop().contentRect),_=ne(T),F=ne(I);P=!I&&!!F||!_,u=!F&&_,y=!P}else C?[,y]=h:u=h===!0;if(o&&y){const T=C?h[0]:ce(i);$t(i,T?r.n?-je:r.i?0:je:je),At(i,je)}P||e({wt:!C,jt:C?h:void 0,Pt:!!u})},f=[];return[()=>{Pt(f),zt(i)},()=>{let h=s&&p;if(ee){const v=new ee(p);v.observe(a),G(f,()=>{v.disconnect()})}else if(c){const[v,C]=c.O(a,p,s);h=v,G(f,C)}if(o){const[v]=vt({o:void 0},d);G(f,st(i,"scroll",C=>{const P=v(),[u,y,T]=P;y&&($n(a,"ltr rtl"),Ft(a,u?"rtl":"ltr"),p([!!u,y,T])),wo(C)}))}h&&(Ft(i,$s),G(f,st(i,"animationstart",h,{C:!!ee}))),(ee||c)&&yt(t,i)}]},nc=t=>t.h===0||t.isIntersecting||t.intersectionRatio>0,oc=(t,e)=>{let n;const o=Gt(Cs),s=[],[c]=vt({o:!1}),r=(i,a)=>{if(i){const d=c(nc(i)),[,x]=d;return x&&!a&&e(d)&&[d]}},l=(i,a)=>i&&i.length>0&&r(i.pop(),a);return[()=>{Pt(s),zt(o)},()=>{if(Ln)n=new Ln(i=>l(i),{root:t}),n.observe(o),G(s,()=>{n.disconnect()});else{const i=()=>{const x=he(o);r(x)},[a,d]=Ro(o,i);G(s,a),d(),i()}yt(t,o)},()=>n&&l(n.takeRecords(),!0)]},Qn=`[${St}]`,sc=`[${Bt}]`,en=["tabindex"],to=["wrap","cols","rows"],nn=["id","class","style","open"],cc=(t,e,n)=>{let o,s,c;const{J:r,K:l,nt:i,lt:a,ft:d,_t:x,ht:p}=t,{Y:f}=ht(),[h]=vt({u:bo,o:{w:0,h:0}},()=>{const g=x(se,oe),$=x(Ze,""),M=$&&$t(l),k=$&&At(l);p(se,oe),p(Ze,""),p("",Ae,!0);const O=Pe(i),L=Pe(l),A=Me(l);return p(se,oe,g),p(Ze,"",$),p("",Ae),$t(l,M),At(l,k),{w:L.w+O.w+A.w,h:L.h+O.h+A.h}}),v=a?to:nn.concat(to),C=On(n,{g:()=>o,v:()=>s,p(g,$){const[M]=g,[k]=$;return[mt(M).concat(mt(k)).reduce((O,L)=>(O[L]=M[L]||k[L],O),{})]}}),P=g=>{q(g||en,$=>{if(De(en,$)>-1){const M=lt(r,$);Nt(M)?lt(l,$,M):ft(l,$)}})},u=(g,$)=>{const[M,k]=g,O={vt:k};return e({gt:M}),!$&&n(O),O},y=({wt:g,jt:$,Pt:M})=>{const k=!g||M?n:C;let O=!1;if($){const[L,A]=$;O=A,e({yt:L})}k({wt:g,Pt:M,St:O})},T=(g,$)=>{const[,M]=h(),k={bt:M};return M&&!$&&(g?n:C)(k),k},I=(g,$,M)=>{const k={Tt:$};return $?!M&&C(k):d||P(g),k},[_,F,B]=i||!f?oc(r,u):[xt,xt,xt],[H,Z]=d?[xt,xt]:Ro(r,y,{Pt:!0,Yt:!0}),[K,R]=Zn(r,!1,I,{Dt:nn,Mt:nn.concat(en)});let m;const S=d&&ee&&new ee(g=>{const $=g[g.length-1].contentRect,M=ne($),O=!ne(m)&&M;y({wt:!0,Pt:O}),m=$});return[()=>{_(),H(),c&&c[0](),S&&S.disconnect(),K()},()=>{S&&S.observe(r),P(),Z(),F()},()=>{const g={},$=R(),M=B(),k=c&&c[1]();return $&&nt(g,I.apply(0,G($,!0))),M&&nt(g,u.apply(0,G(M,!0))),k&&nt(g,T.apply(0,G(k,!0))),g},g=>{const[$]=g("update.ignoreMutation"),[M,k]=g("update.attributes"),[O,L]=g("update.elementEvents"),[A,D]=g("update.debounce"),Y=L||k,Q=w=>Ot($)&&$(w);if(Y&&(c&&(c[1](),c[0]()),c=Zn(i||l,!0,T,{Mt:v.concat(M||[]),Rt:O,kt:Qn,Vt:(w,b)=>{const{target:E,attributeName:z}=w;return(!b&&z&&!d?ss(E,Qn,sc):!1)||!!te(E,`.${pt}`)||!!Q(w)}})),D)if(C.m(),bt(A)){const w=A[0],b=A[1];o=_t(w)&&w,s=_t(b)&&b}else _t(A)?(o=A,s=!1):(o=!1,s=!1)}]},eo={x:0,y:0},rc=t=>({tt:{t:0,r:0,b:0,l:0},$t:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:eo,Et:eo,Ot:{x:"hidden",y:"hidden"},At:{x:!1,y:!1},gt:!1,yt:ce(t.J)}),ic=(t,e)=>{const n=gn(e,{}),[o,s,c]=En(),[r,l,i]=Ks(t),a=Ao(rc(r)),[d,x]=a,p=tc(r,a),f=(y,T,I)=>{const F=mt(y).some(B=>!!y[B])||!wn(T)||I;return F&&c("u",[y,T,I]),F},[h,v,C,P]=cc(r,x,y=>f(p(n,y),{},!1)),u=d.bind(0);return u.Nt=y=>o("u",y),u.qt=()=>{const{Z:y,K:T,rt:I,it:_}=r,F=_?I.documentElement:y,B=$t(F),H=At(F);v(),l(),$t(T,B),At(T,H)},u.Ft=r,[(y,T)=>{const I=gn(e,y,T);return P(I),f(p(I,C(),T),y,!!T)},u,()=>{s(),h(),i()}]},{round:no}=Math,lc=t=>{const{width:e,height:n}=Tt(t),{w:o,h:s}=he(t);return{x:no(e)/o||1,y:no(n)/s||1}},ac=(t,e,n)=>{const o=e.scrollbars,{button:s,isPrimary:c,pointerType:r}=t,{pointers:l}=o;return s===0&&c&&o[n?"dragScroll":"clickScroll"]&&(l||[]).includes(r)},oo="pointerup pointerleave pointercancel lostpointercapture",dc=(t,e)=>st(t,"mousedown",st.bind(0,e,"click",wo,{C:!0,$:!0}),{$:!0}),uc=(t,e,n,o,s,c,r)=>{const{V:l}=ht(),{Gt:i,Xt:a,Ut:d}=o,x=`scroll${r?"Left":"Top"}`,p=`client${r?"X":"Y"}`,f=r?"width":"height",h=r?"left":"top",v=r?"w":"h",C=r?"x":"y",P=(u,y)=>T=>{const{Et:I}=c(),_=he(a)[v]-he(i)[v],B=y*T/_*I[C],Z=ce(d)&&r?l.n||l.i?1:-1:1;s[x]=u+B*Z};return st(a,"pointerdown",u=>{const y=te(u.target,`.${Tn}`)===i,T=y?i:a;if(Xt(e,St,_n,!0),ac(u,t,y)){const I=!y&&u.shiftKey,_=()=>Tt(i),F=()=>Tt(a),B=(O,L)=>(O||_())[h]-(L||F())[h],H=P(s[x]||0,1/lc(s)[C]),Z=u[p],K=_(),R=F(),m=K[f],S=B(K,R)+m/2,g=Z-R[h],$=y?0:g-S,M=O=>{Pt(k),T.releasePointerCapture(O.pointerId)},k=[Xt.bind(0,e,St,_n),st(n,oo,M),st(n,"selectstart",O=>vo(O),{S:!1}),st(a,oo,M),st(a,"pointermove",O=>{const L=O[p]-Z;(y||I)&&H($+L)})];if(I)H($);else if(!y){const O=Zt()[Ds];O&&G(k,O.O(H,B,$,m,g))}T.setPointerCapture(u.pointerId)}})},fc=(t,e)=>(n,o,s,c,r,l,i)=>{const{Ut:a}=n,[d,x]=Yt(333),p=!!r.scrollBy;let f=!0;return Pt.bind(0,[st(a,"pointerenter",()=>{o(Vn,!0)}),st(a,"pointerleave pointercancel",()=>{o(Vn)}),st(a,"wheel",h=>{const{deltaX:v,deltaY:C,deltaMode:P}=h;p&&f&&P===0&&Lt(a)===c&&r.scrollBy({left:v,top:C,behavior:"smooth"}),f=!1,o(Kn,!0),d(()=>{f=!0,o(Kn)}),vo(h)},{S:!1,$:!0}),dc(a,s),uc(t,c,s,n,r,e,i),x])},{min:Le,max:bn,round:pc}=Math,Io=(t,e,n,o)=>{if(o){const l=n?"x":"y",{Et:i,zt:a}=o,d=a[l],x=i[l];return bn(0,Le(1,d/(d+x)))}const s=n?"width":"height",c=Tt(t)[s],r=Tt(e)[s];return bn(0,Le(1,c/r))},hc=(t,e,n,o,s,c)=>{const{V:r}=ht(),l=c?"x":"y",i=c?"Left":"Top",{Et:a}=o,d=pc(a[l]),x=Le(d,bn(0,n[`scroll${i}`])),p=c&&s,f=r.i?x:d-x,v=Le(1,(p?f:x)/d),C=Io(t,e,c);return 1/C*(1-C)*v},Ho=(t,e,n,o)=>e&&t.animate(n,{timeline:e,composite:o}),gc=(t,e)=>({transform:[re("0%",e),re(e&&t?"100%":"-100%",e)],[e?t?"right":"left":"top"]:["0%","100%"]}),xc=t=>`${Math.max(0,t-.5)}px`,so=(t,e,n,o)=>Ho(t,e,{transform:[re("0px",o),re(xc(n),o)]},"add"),co=(t,e)=>un?new un({source:t,axis:e}):null,bc=(t,e,n)=>{const{q:o,H:s}=ht(),{scrollbars:c}=o(),{slot:r}=c,{rt:l,Z:i,J:a,K:d,ut:x,st:p,it:f,ft:h}=e,{scrollbars:v}=x?{}:t,{slot:C}=v||{},P=new Map,u=co(p,"x"),y=co(p,"y"),T=Po([i,a,d],()=>h&&f?i:a,r,C),I=w=>h&&!f&&Lt(w)===d,_=w=>{P.forEach((b,E)=>{(w?De(bt(w)?w:[w],E)>-1:!0)&&((b||[]).forEach(W=>{W&&W.cancel()}),P.delete(E))})},F=(w,b,E)=>{const z=E?Ft:$n;q(w,W=>{z(W.Ut,b)})},B=(w,b)=>{q(w,E=>{const[z,W]=b(E);it(z,W)})},H=(w,b,E)=>{B(w,z=>{const{Gt:W,Xt:V}=z;return[W,{[E?"width":"height"]:`${(Io(W,V,E,b)*100).toFixed(3)}%`}]})},Z=(w,b,E)=>{!y&&!y&&B(w,z=>{const{Gt:W,Xt:V,Ut:tt}=z,J=hc(W,V,p,b,ce(tt),E);return[W,{transform:J===J?re(`${(J*100).toFixed(3)}%`,E):""}]})},K=w=>{const{Ut:b}=w,E=I(b)&&b;return[E,{transform:E?re([`${$t(p)}px`,`${At(p)}px`]):""}]},R=[],m=[],S=[],g=(w,b,E)=>{const z=mn(E),W=z?E:!0,V=z?!E:!0;W&&F(m,w,b),V&&F(S,w,b)},$=w=>{H(m,w,!0),H(S,w)},M=w=>{Z(m,w,!0),Z(S,w)},k=()=>{const w=(b,{Ut:E,Gt:z})=>{_(z),P.set(z,[Ho(z,b?u:y,gc(b&&ce(E),b))])};m.forEach(w.bind(0,!0)),S.forEach(w.bind(0,!1))},O=()=>{!y&&!y&&(h&&B(m,K),h&&B(S,K))},L=({Et:w})=>{S.concat(m).forEach(({Ut:b})=>{_(b),I(b)&&P.set(b,[so(b,u,w.x,!0),so(b,y,w.y)])})},A=w=>{const b=w?ks:zs,E=w?m:S,z=yn(E)?Nn:"",W=Gt(`${pt} ${b} ${z}`),V=Gt(ko),tt=Gt(Tn),J={Ut:W,Xt:V,Gt:tt};return s||Ft(W,Es),yt(W,V),yt(V,tt),G(E,J),G(R,[zt.bind(0,W),_,n(J,g,l,a,p,w?u:y,w)]),J},D=A.bind(0,!0),Y=A.bind(0,!1),Q=()=>{yt(T,m[0].Ut),yt(T,S[0].Ut),ze(()=>{g(Nn)},300)};return D(),Y(),[{Wt:$,Zt:M,Jt:k,Kt:L,Qt:O,tn:g,nn:{B:u,sn:m,en:D,cn:B.bind(0,m)},rn:{B:y,sn:S,en:Y,cn:B.bind(0,S)}},Q,Pt.bind(0,R)]},on=t=>t.pointerType==="mouse",mc=(t,e,n,o)=>{let s,c,r,l,i,a=xt,d=0;const x=Ao({}),[p]=x,[f,h]=Yt(),[v,C]=Yt(),[P,u]=Yt(100),[y,T]=Yt(100),[I,_]=Yt(100),[F,B]=Yt(()=>d),[H,Z,K]=bc(t,n.Ft,fc(e,n)),{J:R,et:m,it:S}=n.Ft,{tn:g,Wt:$,Zt:M,Jt:k,Kt:O,Qt:L}=H,A=b=>{g(hn,b,!0),g(hn,b,!1)},D=(b,E)=>{if(B(),b)g(qn);else{const z=()=>g(qn,!0);d>0&&!E?F(z):z()}},Y=b=>{on(b)&&(l=c,l&&D(!0))},Q=[u,B,T,_,C,h,K,st(R,"pointerover",Y,{C:!0}),st(R,"pointerenter",Y),st(R,"pointerleave",b=>{on(b)&&(l=!1,c&&D(!1))}),st(R,"pointermove",b=>{on(b)&&s&&f(()=>{u(),D(!0),y(()=>{s&&D(!1)})})}),st(m,"scroll",b=>{v(()=>{M(n()),r&&D(!0),P(()=>{r&&!l&&D(!1)})}),o(b),L()})],w=p.bind(0);return w.Ft=H,w.qt=Z,[(b,E,z)=>{const{Ht:W,Lt:V,It:tt,St:J,Pt:ot}=z,{I:X}=ht(),et=gn(e,b,E),at=n(),{Et:gt,Ot:It,yt:Vt,At:Ut}=at,[le,ct]=et("showNativeOverlaidScrollbars"),[dt,ut]=et("scrollbars.theme"),[Ct,me]=et("scrollbars.visibility"),[ae,_e]=et("scrollbars.autoHide"),[ye,Fe]=et("scrollbars.autoHideSuspend"),[Et]=et("scrollbars.autoHideDelay"),[we,Ne]=et("scrollbars.dragScroll"),[Ve,Mt]=et("scrollbars.clickScroll"),Ht=ot&&!E,jt=Ut.x||Ut.y,Ue=W||V||J,Dt=tt||me,qe=le&&X.x&&X.y,Qt=(qt,Kt)=>{const de=Ct==="visible"||Ct==="auto"&&qt==="scroll";return g(Ps,de,Kt),de};if(d=Et,Ht&&(ye&&jt?(A(!1),a(),I(()=>{a=st(m,"scroll",A.bind(0,!0),{C:!0})})):A(!0)),ct&&g(js,qe),ut&&(g(i),g(dt,!0),i=dt),Fe&&!ye&&A(!0),_e&&(s=ae==="move",c=ae==="leave",r=ae!=="never",D(!r,!0)),Ne&&g(Ls,we),Mt&&g(As,Ve),Dt){const qt=Qt(It.x,!0),Kt=Qt(It.y,!1);g(Ms,!(qt&&Kt))}Ue&&($(at),M(at),k(at),O(at),L(),g(Un,!gt.x,!0),g(Un,!gt.y,!1),g(Ts,Vt&&!S))},w,()=>{Pt(Q),a()}]},Do=(t,e,n)=>{Ot(t)&&t(e||void 0,n||void 0)},ge=(t,e,n)=>{const{G:o,q:s,j:c,N:r}=ht(),l=Zt(),i=fe(t),a=i?t:t.target,d=Mo(a);if(e&&!d){let x=!1;const p=m=>{const S=Zt()[Is],g=S&&S.O;return g?g(m,!0):m},f=nt({},o(),p(e)),[h,v,C]=En(n),[P,u,y]=ic(t,f),[T,I,_]=mc(t,f,u,m=>C("scroll",[R,m])),F=(m,S)=>P(m,!!S),B=F.bind(0,{},!0),H=c(B),Z=r(B),K=m=>{qs(a),H(),Z(),_(),y(),x=!0,C("destroyed",[R,!!m]),v()},R={options(m,S){if(m){const g=S?o():{},$=So(f,nt(g,p(m)));wn($)||(nt(f,$),F($))}return nt({},f)},on:h,off:(m,S)=>{m&&S&&v(m,S)},state(){const{zt:m,Et:S,Ot:g,At:$,tt:M,$t:k,yt:O}=u();return nt({},{overflowEdge:m,overflowAmount:S,overflowStyle:g,hasOverflow:$,padding:M,paddingAbsolute:k,directionRTL:O,destroyed:x})},elements(){const{Z:m,J:S,tt:g,K:$,nt:M,st:k,et:O}=u.Ft,{nn:L,rn:A}=I.Ft,D=Q=>{const{Gt:w,Xt:b,Ut:E}=Q;return{scrollbar:E,track:b,handle:w}},Y=Q=>{const{sn:w,en:b}=Q,E=D(w[0]);return nt({},E,{clone:()=>{const z=D(b());return T({},!0,{}),z}})};return nt({},{target:m,host:S,padding:g||$,viewport:$,content:M||$,scrollOffsetElement:k,scrollEventElement:O,scrollbarHorizontal:Y(L),scrollbarVertical:Y(A)})},update:m=>F({},m),destroy:K.bind(0)};return u.Nt((m,S,g)=>{T(S,g,m)}),Us(a,R),q(mt(l),m=>Do(l[m],0,R)),Vs(u.Ft.it,s().cancel,!i&&t.cancel)?(K(!0),R):(u.qt(),I.qt(),C("initialized",[R]),u.Nt((m,S,g)=>{const{wt:$,St:M,vt:k,Ht:O,Lt:L,It:A,bt:D,Tt:Y}=m;C("updated",[R,{updateHints:{sizeChanged:$,directionChanged:M,heightIntrinsicChanged:k,overflowEdgeChanged:O,overflowAmountChanged:L,overflowStyleChanged:A,contentMutation:D,hostMutation:Y},changedOptions:S,force:g}])}),R.update(!0),R)}return d};ge.plugin=t=>{q(Rs(t),e=>Do(e,ge))};ge.valid=t=>{const e=t&&t.elements,n=Ot(e)&&e();return ln(n)&&!!Mo(n.target)};ge.env=()=>{const{k:t,I:e,A:n,V:o,Y:s,H:c,B:r,U:l,W:i,q:a,F:d,G:x,X:p}=ht();return nt({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:c,scrollTimeline:r,staticDefaultInitialization:l,staticDefaultOptions:i,getDefaultInitialization:a,setDefaultInitialization:d,getDefaultOptions:x,setDefaultOptions:p})};const yc={scrollbars:{visibility:"auto",autoHide:"never"}},wc=(t,e)=>{wt.useEffect(()=>{let n;return t.current&&e&&(n=ge(t.current,yc)),()=>{n&&n.destroy()}},[t,e])},vc=N.div`
  width: ${({width:t})=>(t==null?void 0:t.mob)+"px"||"100%"};
  ${rt.tablet} {
    width: ${({width:t})=>(t==null?void 0:t.nab)+"px"||"100%"};
    height: 660px;
  }
  ${rt.desktop} {
    width: ${({width:t})=>(t==null?void 0:t.dt)+"px"||"100%"};
    height: 487px;
  }
`;function Sc({children:t,width:e}){const{isMobile:n}=Qo(),o=wt.useRef(null);return wc(o,!n),j.jsx(vc,{width:e,ref:o,children:t})}Sc.propTypes={width:kt.object};const $c=N.li`
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
  border: 1px solid ${U.textWhite02};
  background: ${U.textWhite005};

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
`,Oc=N.div`
  display: flex;
  align-items: flex-start;
`,Cc=N.p`
  display: inline-flex;
  width: auto;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  padding: 0 7.5px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${U.textWhite005};
  border-radius: 4px;
  color: #fff;
`,Ec=N.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${U.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${t=>t.reccomend?"#419b09":"#E9101D"};
    margin-right: 8px;
  }
`,jc=N.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;
  cursor: pointer;

  color: ${U.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${U.orangeSecondary};

    svg {
      stroke: ${U.orangeSecondary};
    }
  }

  ${rt.tablet} {
    font-size: 16px;
  }
`,Tc=N.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${U.orange};

  transition: stroke 250ms ease-in-out;
`,kc=N.div`
  display: inline-flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${U.white};

  ${rt.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 21px;
  }
`,zc=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`,Pc=N.svg`
  width: 16px;
  height: 16px;

  fill: ${U.white};
`,Mc=N.div`
  display: inline-block;
  align-items: center;
  margin-top: 8px;

  ${rt.tablet} {
    margin-top: 12px;
  }
`,sn=N.div`
  display: inline-flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${U.textWhite04};

  &:last-child {
    margin-right: 0;
  }
`,cn=N.p`
  margin-left: 4px;

  color: ${U.white};
`,Ac=N.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${U.backdrop};
`,Lc=N.div`
  border: 1px solid ${U.textWhite02};
  box-sizing: border-box;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 335px;
  padding: 48px 0;
  border-radius: 8px;
  background-color: ${U.modalBlack};
  z-index: 1;

  ${rt.tablet} {
    min-width: 430px;
    padding: 48px 32px;
    box-sizing: content-box;
  }
`,Rc=N.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  ${_o}
`,Ic=N.svg`
  fill: ${U.grey};
  width: 24px;
  height: 24px;
`,Hc=document.querySelector("#modal-root"),ro=({children:t,openModal:e,width:n})=>{wt.useEffect(()=>{const s=c=>{c.code==="Escape"&&e()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e]);const o=s=>{s.currentTarget===s.target&&e()};return Fo.createPortal(j.jsx(Ac,{onClick:o,children:j.jsxs(Lc,{width:n,children:[j.jsx(Rc,{type:"button",onClick:()=>e(),children:j.jsx(Ic,{children:j.jsx("use",{href:rn+"#close"})})}),t]})}),Hc)};N.div`
  background-color: ${U.modalBlack};
  border-radius: 12px;
  padding: 48px 24px;
  ${rt.tablet} {
    padding: 48px 32px;
  }
`;const Dc=N.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${rt.tablet} {
    flex-direction: row;
  }
`,Bc=N.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${U.orange};
  gap: 10px;
  background-color: inherit;
  color: ${U.textWhite03};

  ${rt.tablet} {
    width: 244px;
    height: 40px;
  }
`,Wc=N.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${U.orange};
  gap: 10px;
  background-color: inherit;
  color: ${U.white};

  &::placeholder {
    color: ${U.textWhite03};
    text-align: right;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${rt.tablet} {
    width: 155px;
    height: 40px;
    margin-top: 0;
  }
`,_c=N.p`
  font-size: 12px;
  align-items: end;
  color: ${U.white};
`,Fc=N.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: ${U.textWhite04};
`,Nc=N.div`
  display: flex;
  margin-top: 24px;
  ${rt.tablet} {
    margin-top: 64px;
  }
`,Vc=N.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: ${U.orange};
  color: ${U.white};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid ${U.textWhite03};
  transition: background 0.3s ease-out;
  margin-right: 14px;

  &:hover {
    background: #ef8964;
  }

  ${rt.tablet} {
    margin-right: 16px;
  }
`,Uc=N.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: inherit;
  color: ${U.white};
  border-radius: 12px;
  border: 1px solid ${U.textWhite03};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  ${rt.tablet} {
    padding: 12px 40px;
  }
`;function Bo({data:t,closeModal:e,addProduct:n}){const[o,s]=wt.useState(0),c=Math.round(o*t.calories/100),r=Yo(new Date);return j.jsxs("form",{children:[j.jsxs(Dc,{children:[j.jsx("label",{children:j.jsx(Bc,{type:"text",value:t.title,disabled:!0})}),j.jsx("label",{children:j.jsx(Wc,{placeholder:"grams",type:"number",value:o,onChange:l=>s(l.target.value)})})]}),j.jsxs(_c,{children:[j.jsx(Fc,{children:"Calories:"})," ",c]}),j.jsxs(Nc,{children:[j.jsx(Vc,{type:"button",onClick:()=>n({id:t.id,date:r,amount:o,calories:c}),children:"Add to diary"}),j.jsx(Uc,{type:"button",onClick:e,children:"Cancel"})]})]})}Bo.propTypes={data:kt.object,closeModal:kt.func,addProduct:kt.func};io.defaults.baseURL="https://power-pulse-rest-api.onrender.com";const qc=No("addProduct",async(t,{rejectWithValue:e})=>{try{await io.post("/api/diary/add-product",t)}catch{return Vo.error("Oops... Something went wrong! Try again!"),e("Oops... Something went wrong!")}}),Kc=(t,e)=>{let n=24;return e<768?n=23:e<1440&&(n=19),t.length<=n?t:t.substring(0,n)+"..."},Yc=N.div`
  display: flex;
  flex-direction: column;
  width: 190px;
`,Xc=N.img`
  width: 120px;
  height: 97px;
  margin: 0 auto;
  margin-bottom: 19px;
`,Gc=N.strong`
  margin: 0 auto;
  margin-bottom: 16px;

  color: ${U.white};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: ${32/24};
`,Jc=N.ul`
  margin: 0 auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Zc=N.p`
  color: ${U.textWhite03};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${18/14};
  display: flex;
  align-items: center;
`,Qc=N.span`
  color: ${U.orange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${14/18};
`,tr=N(Uo)`
  margin: 0 auto;
  margin-top: 16px;

  display: flex;
  align-content: center;
  justify-content: baseline;

  gap: 8px;

  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,er=N.svg`
  stroke: currentColor;
  width: 16px;
  height: 16px;
`;function Wo({modalType:t,data:e,btnNext:n}){const o=c=>{if(c==="yourTime")return"Your  time: ";if(c==="burnedCalories")return"Burned calories:  ";if(c==="calories")return"calories: "},s=c=>Object.keys(c).map(i=>j.jsx("li",{children:j.jsxs(Zc,{children:[o(i)," ",j.jsx(Qc,{children:c[i]})]})},qo()));return j.jsxs(Yc,{children:[j.jsx(Xc,{src:t==="product"?"/src/assets/images/foodIcon.png":"/src/assets/images/thumbUp.png",alt:"it`s a placeholder image, but it`s avocado too"}),j.jsx(Gc,{children:"Well Done"}),j.jsx(Jc,{children:s(e)}),j.jsx(Xo,{title:"Next product",btnNext:n}),j.jsxs(tr,{to:"/diary",children:["To the diary",j.jsx(er,{fill:"",children:j.jsx("use",{href:"/src/assets/sprite.svg#arrow-right"})})]})]})}Wo.propTypes={modalType:kt.oneOf(["product","exercise"]),data:kt.object.isRequired,btnNext:kt.func};const nr=({page:t,data:e})=>{const[n,o]=wt.useState(window.innerWidth),[s,c]=wt.useState(!1),[r,l]=wt.useState(!1),[i,a]=wt.useState(0),d=()=>c(C=>!C),x=()=>l(C=>!C),p=Ko();wt.useEffect(()=>(window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}),[]);const f=()=>{o(window.innerWidth)},h=Go(t,e),v=({id:C,date:P,amount:u,calories:y,time:T,burnedCalories:I})=>{if(t==="product"){const _={productId:C,date:P,amount:u,calories:y};console.log(_),a(y),p(qc(_))}t==="exercises"&&console.log(C,P,T,I),d(),x()};return j.jsxs($c,{children:[j.jsxs(Oc,{children:[j.jsx(Cc,{children:h.subtitle}),t==="product"&&j.jsx(Ec,{reccomend:e.recommended,children:e.recommended?"Recommended":"Not recommended"}),j.jsxs(jc,{onClick:d,children:[h.button,j.jsx(Tc,{children:j.jsx("use",{href:rn+"#arrow-right"})})]})]}),j.jsxs(kc,{children:[j.jsx(zc,{children:j.jsx(Pc,{children:j.jsx("use",{href:rn+"#runningMan"})})}),Kc(h.title,n)]}),j.jsxs(Mc,{children:[j.jsxs(sn,{children:[h.text1,j.jsx(cn,{children:h.subText1})]}),j.jsxs(sn,{children:[h.text2,j.jsx(cn,{children:h.subText2})]}),j.jsxs(sn,{children:[h.text3,j.jsx(cn,{children:h.subText3})]})]}),s&&j.jsx(ro,{openModal:d,children:t==="product"&&j.jsx(Bo,{closeModal:d,data:e,addProduct:v})}),r&&j.jsx(ro,{openModal:x,children:t==="product"&&j.jsx(Wo,{modalType:"product",data:{calories:i},btnNext:x})})]})};nr.propTypes={page:kt.string,data:kt.object,openModal:kt.func};export{rr as P,Sc as S,nr as a};
