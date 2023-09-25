import{n as z,m as et,j as g,r as Y,P as lt,c as H,z as os,A as ss,s as re,h as pe,B as yo,D as rs,Q as cs,N as is,o as ls,u as as,E as ds}from"./index-6891c9c9.js";import{c as fe,f as wo}from"./formatDate-d1383d55.js";import{B as us}from"./BtnSubmit-47563aa0.js";const ps=(t,e)=>t==="product"?{subtitle:"DIET",title:fe(e.title),button:"Add",text1:"Calories:",text2:"Category:",text3:"Weight:",subText1:e.calories,subText2:fe(e.category),subText3:e.weight}:{subtitle:"WORKOUT",title:fe(e.name),button:"Start",text1:"Burned calories:",text2:"Body part:",text3:"Target:",subText1:e.burnedCalories,subText2:fe(e.bodyPart),subText3:fe(e.target)},fs=z.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 20px;
  height: 100vh;
  width: 100%;

  margin-top: ${t=>t.marginTop};
  ${et.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
    
  }
  ${et.desktop} {
    width: 868px;
   
  }

`;function Bc({children:t,...e}){return g.jsx(fs,{...e,children:t})}const hs=["(max-width: 767px)","(min-width: 768px) and (max-width: 1439px)","(min-width: 1440px)"],gs=()=>{const t=hs.map(s=>matchMedia(s)),e=()=>t.map(s=>s.matches),[n,o]=Y.useState(e);return Y.useLayoutEffect(()=>{const s=()=>o(e);return t.forEach(r=>r.addEventListener("change",s)),()=>t.forEach(r=>r.removeEventListener("change",s))}),["isMobile","isTablet","isDesktop"].reduce((s,r,c)=>({...s,[r]:n[c]}),{})};/*!
 * OverlayScrollbars
 * Version: 2.3.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */function K(t,e){if(Fe(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&K(Object.keys(t),n=>e(t[n],n,t));return t}function at(t,e){const n=qt(e);if(yt(e)||n){let s=n?"":{};if(t){const r=window.getComputedStyle(t,null);s=n?Fn(t,r,e):e.reduce((c,l)=>(c[l]=Fn(t,r,l),c),s)}return s}t&&K(wt(e),s=>zs(t,s,e[s]))}const $t=(t,e)=>{const{o:n,u:o,_:s}=t;let r=n,c;const l=(u,f)=>{const p=r,h=u,m=f||(o?!o(p,h):p!==h);return(m||s)&&(r=h,c=p),[r,m,c]};return[e?u=>l(e(r,c),u):l,u=>[r,!!u,c]]},ve=()=>typeof window<"u",vo=ve()&&Node.ELEMENT_NODE,{toString:xs,hasOwnProperty:Ze}=Object.prototype,Mt=t=>t===void 0,He=t=>t===null,ms=t=>Mt(t)||He(t)?`${t}`:xs.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),Ft=t=>typeof t=="number",qt=t=>typeof t=="string",Sn=t=>typeof t=="boolean",jt=t=>typeof t=="function",yt=t=>Array.isArray(t),be=t=>typeof t=="object"&&!yt(t)&&!He(t),Fe=t=>{const e=!!t&&t.length,n=Ft(e)&&e>-1&&e%1==0;return yt(t)||!jt(t)&&n?e>0&&be(t)?e-1 in t:!0:!1},pn=t=>{if(!t||!be(t)||ms(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,r=Ze.call(t,n),c=s&&Ze.call(s,"isPrototypeOf");if(o&&!r&&!c)return!1;for(e in t);return Mt(e)||Ze.call(t,e)},me=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===vo:!1},_e=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===vo:!1},qe=(t,e,n)=>t.indexOf(e,n),Z=(t,e,n)=>(!n&&!qt(e)&&Fe(e)?Array.prototype.push.apply(t,e):t.push(e),t),Jt=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{Z(n,o)}):K(t,o=>{Z(n,o)}),n)},Cn=t=>!!t&&t.length===0,zt=(t,e,n)=>{K(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},Ne=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),wt=t=>t?Object.keys(t):[],st=(t,e,n,o,s,r,c)=>{const l=[e,n,o,s,r,c];return(typeof t!="object"||He(t))&&!jt(t)&&(t={}),K(l,i=>{K(wt(i),a=>{const u=i[a];if(t===u)return!0;const f=yt(u);if(u&&pn(u)){const p=t[a];let h=p;f&&!yt(p)?h=[]:!f&&!pn(p)&&(h={}),t[a]=st(h,u)}else t[a]=f?u.slice():u})}),t},jn=t=>{for(const e in t)return!1;return!0},$o=(t,e,n,o)=>{if(Mt(o))return n?n[t]:e;n&&(qt(o)||Ft(o))&&(n[t]=o)},dt=(t,e,n)=>{if(Mt(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},So=(t,e)=>new Set((dt(t,e)||"").split(" ")),ht=(t,e)=>{t&&t.removeAttribute(e)},Yt=(t,e,n,o)=>{if(n){const s=So(t,e);s[o?"add":"delete"](n);const r=Jt(s).join(" ").trim();dt(t,e,r)}},bs=(t,e,n)=>So(t,e).has(n),Ct=(t,e)=>$o("scrollLeft",0,t,e),It=(t,e)=>$o("scrollTop",0,t,e),fn=ve()&&Element.prototype,Co=(t,e)=>{const n=[],o=e?_e(e)&&e:document;return o?Z(n,o.querySelectorAll(t)):n},ys=(t,e)=>{const n=e?_e(e)&&e:document;return n?n.querySelector(t):null},Ae=(t,e)=>_e(t)?(fn.matches||fn.msMatchesSelector).call(t,e):!1,En=t=>t?Jt(t.childNodes):[],At=t=>t&&t.parentElement,te=(t,e)=>{if(_e(t)){const n=fn.closest;if(n)return n.call(t,e);do{if(Ae(t,e))return t;t=At(t)}while(t)}},ws=(t,e,n)=>{const o=te(t,e),s=t&&ys(n,o),r=te(s,e)===o;return o&&s?o===t||s===t||r&&te(te(t,n),e)!==o:!1},Tn=(t,e,n)=>{if(n&&t){let o=e,s;Fe(n)?(s=document.createDocumentFragment(),K(n,r=>{r===o&&(o=r.previousSibling),s.appendChild(r)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null)}},vt=(t,e)=>{Tn(t,null,e)},vs=(t,e)=>{Tn(At(t),t,e)},Wn=(t,e)=>{Tn(At(t),t&&t.nextSibling,e)},Rt=t=>{if(Fe(t))K(Jt(t),e=>Rt(e));else if(t){const e=At(t);e&&e.removeChild(t)}},Xt=t=>{const e=document.createElement("div");return t&&dt(e,"class",t),e},jo=t=>{const e=Xt();return e.innerHTML=t.trim(),K(En(e),n=>Rt(n))},hn=t=>t.charAt(0).toUpperCase()+t.slice(1),$s=()=>Xt().style,Ss=["-webkit-","-moz-","-o-","-ms-"],Cs=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Qe={},tn={},js=t=>{let e=tn[t];if(Ne(tn,t))return e;const n=hn(t),o=$s();return K(Ss,s=>{const r=s.replace(/-/g,"");return!(e=[t,s+t,r+n,hn(r)+n].find(l=>o[l]!==void 0))}),tn[t]=e||""},le=t=>{if(ve()){let e=Qe[t]||window[t];return Ne(Qe,t)||(K(Cs,n=>(e=e||window[n+hn(t)],!e)),Qe[t]=e),e}},Es=le("MutationObserver"),Bn=le("IntersectionObserver"),ee=le("ResizeObserver"),Eo=le("cancelAnimationFrame"),To=le("requestAnimationFrame"),gn=le("ScrollTimeline"),Me=ve()&&window.setTimeout,xn=ve()&&window.clearTimeout,Ts=/[^\x20\t\r\n\f]+/g,ko=(t,e,n)=>{const o=t&&t.classList;let s,r=0,c=!1;if(o&&e&&qt(e)){const l=e.match(Ts)||[];for(c=l.length>0;s=l[r++];)c=!!n(o,s)&&c}return c},kn=(t,e)=>{ko(t,e,(n,o)=>n.remove(o))},_t=(t,e)=>(ko(t,e,(n,o)=>n.add(o)),kn.bind(0,t,e)),Ue=(t,e,n,o)=>{if(t&&e){let s=!0;return K(n,r=>{const c=o?o(t[r]):t[r],l=o?o(e[r]):e[r];c!==l&&(s=!1)}),s}return!1},Oo=(t,e)=>Ue(t,e,["w","h"]),Ro=(t,e)=>Ue(t,e,["x","y"]),ks=(t,e)=>Ue(t,e,["t","r","b","l"]),Hn=(t,e,n)=>Ue(t,e,["width","height"],n&&(o=>Math.round(o))),bt=()=>{},Gt=t=>{let e;const n=t?Me:To,o=t?xn:Eo;return[s=>{o(e),e=n(s,jt(t)?t():t)},()=>o(e)]},On=(t,e)=>{let n,o,s,r=bt;const{g:c,v:l,p:i}=e||{},a=function(m){r(),xn(n),n=o=void 0,r=bt,t.apply(this,m)},u=h=>i&&o?i(o,h):h,f=()=>{r!==bt&&a(u(s)||s)},p=function(){const m=Jt(arguments),w=jt(c)?c():c;if(Ft(w)&&w>=0){const C=jt(l)?l():l,d=Ft(C)&&C>=0,x=w>0?Me:To,S=w>0?xn:Eo,F=u(m)||m,B=a.bind(0,F);r();const k=x(B,w);r=()=>S(k),d&&!n&&(n=Me(f,C)),o=s=F}else a(m)};return p.m=f,p},Os={opacity:1,zIndex:1},Ee=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},Rs=(t,e)=>!Os[t]&&Ft(e)?`${e}px`:e,Fn=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),zs=(t,e,n)=>{try{const{style:o}=t;Mt(o[e])?o.setProperty(e,n):o[e]=Rs(e,n)}catch{}},ce=t=>at(t,"direction")==="rtl",_n=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,a=at(t,[r,c,l,i]);return{t:Ee(a[r],!0),r:Ee(a[c],!0),b:Ee(a[l],!0),l:Ee(a[i],!0)}},ie=(t,e)=>`translate${yt(t)?`(${t[0]},${t[1]})`:`${e?"X":"Y"}(${t})`}`,{round:qn}=Math,Rn={w:0,h:0},ye=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:Rn,Ie=t=>t?{w:t.clientWidth,h:t.clientHeight}:Rn,Le=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:Rn,De=t=>{const e=parseFloat(at(t,"height"))||0,n=parseFloat(at(t,"width"))||0;return{w:n-qn(n),h:e-qn(e)}},Ot=t=>t.getBoundingClientRect(),ne=t=>!!(t&&(t.height||t.width));let Te;const Ps=()=>{if(Mt(Te)){Te=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){Te=!0}}))}catch{}}return Te},zo=t=>t.split(" "),Is=(t,e,n,o)=>{K(zo(e),s=>{t.removeEventListener(s,n,o)})},ct=(t,e,n,o)=>{var s;const r=Ps(),c=(s=r&&o&&o.S)!=null?s:r,l=o&&o.$||!1,i=o&&o.C||!1,a=[],u=r?{passive:c,capture:l}:l;return K(zo(e),f=>{const p=i?h=>{t.removeEventListener(f,p,l),n&&n(h)}:n;Z(a,Is.bind(null,t,f,p,l)),t.addEventListener(f,p,u)}),zt.bind(0,a)},Po=t=>t.stopPropagation(),Io=t=>t.preventDefault(),As={x:0,y:0},en=t=>{const e=t?Ot(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:As},Nn=(t,e)=>{K(yt(e)?e:[e],t)},zn=t=>{const e=new Map,n=(r,c)=>{if(r){const l=e.get(r);Nn(i=>{l&&l[i?"delete":"clear"](i)},c)}else e.forEach(l=>{l.clear()}),e.clear()},o=(r,c)=>{if(qt(r)){const a=e.get(r)||new Set;return e.set(r,a),Nn(u=>{jt(u)&&a.add(u)},c),n.bind(0,r,c)}Sn(c)&&c&&n();const l=wt(r),i=[];return K(l,a=>{const u=r[a];u&&Z(i,o(a,u))}),zt.bind(0,i)},s=(r,c)=>{const l=e.get(r);K(Jt(l),i=>{c&&!Cn(c)?i.apply(0,c):i()})};return o(t||{}),[o,n,s]},Un=t=>JSON.stringify(t,(e,n)=>{if(jt(n))throw new Error;return n}),Ms={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Ao=(t,e)=>{const n={},o=wt(e).concat(wt(t));return K(o,s=>{const r=t[s],c=e[s];if(be(r)&&be(c))st(n[s]={},Ao(r,c)),jn(n[s])&&delete n[s];else if(Ne(e,s)&&c!==r){let l=!0;if(yt(r)||yt(c))try{Un(r)===Un(c)&&(l=!1)}catch{}l&&(n[s]=c)}}),n},$e="data-overlayscrollbars",Mo="os-environment",Lo=`${Mo}-flexbox-glue`,Ls=`${Lo}-max`,Do="os-scrollbar-hidden",nn=`${$e}-initialize`,St=$e,Wo=`${St}-overflow-x`,Bo=`${St}-overflow-y`,oe="overflowVisible",Ds="scrollbarHidden",Vn="scrollbarPressed",We="updating",Bt=`${$e}-viewport`,on="arrange",Ho="scrollbarHidden",se=oe,mn=`${$e}-padding`,Ws=se,Kn=`${$e}-content`,Pn="os-size-observer",Bs=`${Pn}-appear`,Hs=`${Pn}-listener`,Fs="os-trinsic-observer",_s="os-no-css-vars",qs="os-theme-none",gt="os-scrollbar",Ns=`${gt}-rtl`,Us=`${gt}-horizontal`,Vs=`${gt}-vertical`,Fo=`${gt}-track`,In=`${gt}-handle`,Ks=`${gt}-visible`,Gs=`${gt}-cornerless`,Gn=`${gt}-transitionless`,Yn=`${gt}-interaction`,Xn=`${gt}-unusable`,bn=`${gt}-auto-hide`,Jn=`${bn}-hidden`,Zn=`${gt}-wheel`,Ys=`${Fo}-interactive`,Xs=`${In}-interactive`,_o={},Zt=()=>_o,Js=t=>{const e=[];return K(yt(t)?t:[t],n=>{const o=wt(n);K(o,s=>{Z(e,_o[s]=n[s])})}),e},Zs="__osOptionsValidationPlugin",Qs="__osSizeObserverPlugin",An="__osScrollbarsHidingPlugin",tr="__osClickScrollPlugin";let sn;const Qn=(t,e,n,o)=>{vt(t,e);const s=Ie(e),r=ye(e),c=De(n);return o&&Rt(e),{x:r.h-s.h+c.h,y:r.w-s.w+c.w}},er=t=>{let e=!1;const n=_t(t,Do);try{e=at(t,js("scrollbar-width"))==="none"||window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},nr=(t,e)=>{const n="hidden";at(t,{overflowX:n,overflowY:n,direction:"rtl"}),Ct(t,0);const o=en(t),s=en(e);Ct(t,-999);const r=en(e);return{i:o.x===s.x,n:s.x!==r.x}},or=(t,e)=>{const n=_t(t,Lo),o=Ot(t),s=Ot(e),r=Hn(s,o,!0),c=_t(t,Ls),l=Ot(t),i=Ot(e),a=Hn(i,l,!0);return n(),c(),r&&a},sr=()=>{const{body:t}=document,n=jo(`<div class="${Mo}"><div></div></div>`)[0],o=n.firstChild,[s,,r]=zn(),[c,l]=$t({o:Qn(t,n,o),u:Ro},Qn.bind(0,t,n,o,!0)),[i]=l(),a=er(n),u={x:i.x===0,y:i.y===0},f={elements:{host:null,padding:!a,viewport:d=>a&&d===d.ownerDocument.body&&d,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=st({},Ms),h=st.bind(0,{},p),m=st.bind(0,{},f),w={k:i,I:u,A:a,H:at(n,"zIndex")==="-1",B:!!gn,V:nr(n,o),Y:or(n,o),j:s.bind(0,"z"),N:s.bind(0,"r"),q:m,F:d=>st(f,d)&&m(),G:h,X:d=>st(p,d)&&h(),U:st({},f),W:st({},p)},j=window.addEventListener,C=On(d=>r(d?"z":"r"),{g:33,v:99});if(ht(n,"style"),Rt(n),j("resize",C.bind(0,!1)),!a&&(!u.x||!u.y)){let d;j("resize",()=>{const x=Zt()[An];d=d||x&&x.R(),d&&d(w,c,C.bind(0,!0))})}return w},xt=()=>(sn||(sn=sr()),sn),Mn=(t,e)=>jt(e)?e.apply(0,t):e,rr=(t,e,n,o)=>{const s=Mt(o)?n:o;return Mn(t,s)||e.apply(0,t)},qo=(t,e,n,o)=>{const s=Mt(o)?n:o,r=Mn(t,s);return!!r&&(me(r)?r:e.apply(0,t))},cr=(t,e,n)=>{const{nativeScrollbarsOverlaid:o,body:s}=n||{},{I:r,A:c}=xt(),{nativeScrollbarsOverlaid:l,body:i}=e,a=o??l,u=Mt(s)?i:s,f=(r.x||r.y)&&a,p=t&&(He(u)?!c:u);return!!f||!!p},Ln=new WeakMap,ir=(t,e)=>{Ln.set(t,e)},lr=t=>{Ln.delete(t)},No=t=>Ln.get(t),to=(t,e)=>t?e.split(".").reduce((n,o)=>n&&Ne(n,o)?n[o]:void 0,t):void 0,yn=(t,e,n)=>o=>[to(t,o),n||to(e,o)!==void 0],Uo=t=>{let e=t;return[()=>e,n=>{e=st({},e,n)}]},ke="tabindex",Oe=Xt.bind(0,""),rn=t=>{vt(At(t),En(t)),Rt(t)},ar=t=>{const e=xt(),{q:n,A:o}=e,s=Zt()[An],r=s&&s.T,{elements:c}=n(),{host:l,padding:i,viewport:a,content:u}=c,f=me(t),p=f?{}:t,{elements:h}=p,{host:m,padding:w,viewport:j,content:C}=h||{},d=f?t:p.target,x=Ae(d,"textarea"),S=d.ownerDocument,A=S.documentElement,F=d===S.body,B=S.defaultView,k=rr.bind(0,[d]),M=qo.bind(0,[d]),U=Mn.bind(0,[d]),G=k.bind(0,Oe,a),_=M.bind(0,Oe,u),v=G(j),E=v===d,b=E&&F,T=!E&&_(C),L=!E&&me(v)&&v===T,P=L&&!!U(u),O=P?G():v,W=P?T:_(),q=b?A:L?O:v,X=x?k(Oe,l,m):d,tt=b?q:X,$=L?W:T,y=S.activeElement,R=!E&&B.top===B&&y===d,I={Z:d,J:tt,K:q,tt:!E&&M(Oe,i,w),nt:$,ot:!E&&!o&&r&&r(e),st:b?A:q,et:b?S:q,ct:B,rt:S,lt:x,it:F,ut:f,ft:E,dt:L,_t:(it,pt)=>bs(q,E?St:Bt,E?pt:it),ht:(it,pt,ft)=>Yt(q,E?St:Bt,E?pt:it,ft)},N=wt(I).reduce((it,pt)=>{const ft=I[pt];return Z(it,ft&&me(ft)&&!At(ft)?ft:!1)},[]),V=it=>it?qe(N,it)>-1:null,{Z:nt,J:Q,tt:rt,K:J,nt:ot,ot:ut}=I,mt=[()=>{ht(Q,St),ht(Q,nn),ht(nt,nn),F&&(ht(A,St),ht(A,nn))}],Lt=x&&V(Q);let Nt=x?nt:En([ot,J,rt,Q,nt].find(it=>V(it)===!1));const Ut=b?nt:ot||J;return[I,()=>{dt(Q,St,E?"viewport":"host"),dt(rt,mn,""),dt(ot,Kn,""),E||dt(J,Bt,"");const it=F&&!E?_t(At(d),Do):bt;if(Lt&&(Wn(nt,Q),Z(mt,()=>{Wn(Q,nt),Rt(Q)})),vt(Ut,Nt),vt(Q,rt),vt(rt||Q,!E&&J),vt(J,ot),Z(mt,()=>{it(),ht(rt,mn),ht(ot,Kn),ht(J,Wo),ht(J,Bo),ht(J,Bt),V(ot)&&rn(ot),V(J)&&rn(J),V(rt)&&rn(rt)}),o&&!E&&(Yt(J,Bt,Ho,!0),Z(mt,ht.bind(0,J,Bt))),ut&&(vs(J,ut),Z(mt,Rt.bind(0,ut))),R){const pt=dt(J,ke);dt(J,ke,"-1"),J.focus();const ft=()=>pt?dt(J,ke,pt):ht(J,ke),Et=ct(S,"pointerdown keydown",()=>{ft(),Et()});Z(mt,[ft,Et])}else y&&y.focus&&y.focus();Nt=0},zt.bind(0,mt)]},dr=(t,e)=>{const{nt:n}=t,[o]=e;return s=>{const{Y:r}=xt(),{gt:c}=o(),{vt:l}=s,i=(n||!r)&&l;return i&&at(n,{height:c?"":"100%"}),{wt:i,bt:i}}},ur=(t,e)=>{const[n,o]=e,{J:s,tt:r,K:c,ft:l}=t,[i,a]=$t({u:ks,o:_n()},_n.bind(0,s,"padding",""));return(u,f,p)=>{let[h,m]=a(p);const{A:w,Y:j}=xt(),{yt:C}=n(),{wt:d,bt:x,St:S}=u,[A,F]=f("paddingAbsolute");(d||m||!j&&x)&&([h,m]=i(p));const k=!l&&(F||S||m);if(k){const M=!A||!r&&!w,U=h.r+h.l,G=h.t+h.b,_={marginRight:M&&!C?-U:0,marginBottom:M?-G:0,marginLeft:M&&C?-U:0,top:M?-h.t:0,right:M?C?-h.r:"auto":0,left:M?C?"auto":-h.l:0,width:M?`calc(100% + ${U}px)`:""},v={paddingTop:M?h.t:0,paddingRight:M?h.r:0,paddingBottom:M?h.b:0,paddingLeft:M?h.l:0};at(r||c,_),at(c,v),o({tt:h,$t:!M,P:r?v:st({},_,v)})}return{xt:k}}},{max:wn}=Math,Ht=wn.bind(0,0),Vo="visible",eo="hidden",pr=42,Re={u:Oo,o:{w:0,h:0}},fr={u:Ro,o:{x:eo,y:eo}},hr=(t,e)=>{const n=window.devicePixelRatio%1!==0?1:0,o={w:Ht(t.w-e.w),h:Ht(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}},ze=t=>t.indexOf(Vo)===0,gr=(t,e)=>{const[n,o]=e,{J:s,tt:r,K:c,ot:l,ft:i,ht:a,it:u,ct:f}=t,{k:p,Y:h,A:m,I:w}=xt(),j=Zt()[An],C=!i&&!m&&(w.x||w.y),d=u&&i,[x,S]=$t(Re,De.bind(0,c)),[A,F]=$t(Re,Le.bind(0,c)),[B,k]=$t(Re),[M,U]=$t(Re),[G]=$t(fr),_=(P,O)=>{if(at(c,{height:""}),O){const{$t:W,tt:D}=n(),{Ct:q,M:X}=P,tt=De(s),$=Ie(s),y=at(c,"boxSizing")==="content-box",R=W||y?D.b+D.t:0,I=!(w.x&&y);at(c,{height:$.h+tt.h+(q.x&&I?X.x:0)-R})}},v=(P,O)=>{const W=!m&&!P?pr:0,D=(V,nt,Q)=>{const rt=at(c,V),ot=(O?O[V]:rt)==="scroll";return[rt,ot,ot&&!m?nt?W:Q:0,nt&&!!W]},[q,X,tt,$]=D("overflowX",w.x,p.x),[y,R,I,N]=D("overflowY",w.y,p.y);return{Ot:{x:q,y},Ct:{x:X,y:R},M:{x:tt,y:I},D:{x:$,y:N}}},E=(P,O,W,D)=>{const q=(R,I)=>{const N=ze(R),V=I&&N&&R.replace(`${Vo}-`,"")||"";return[I&&!N?R:"",ze(V)?"hidden":V]},[X,tt]=q(W.x,O.x),[$,y]=q(W.y,O.y);return D.overflowX=tt&&$?tt:X,D.overflowY=y&&X?y:$,v(P,D)},b=(P,O,W,D)=>{const{M:q,D:X}=P,{x:tt,y:$}=X,{x:y,y:R}=q,{P:I}=n(),N=O?"marginLeft":"marginRight",V=O?"paddingLeft":"paddingRight",nt=I[N],Q=I.marginBottom,rt=I[V],J=I.paddingBottom;D.width=`calc(100% + ${R+nt*-1}px)`,D[N]=-R+nt,D.marginBottom=-y+Q,W&&(D[V]=rt+($?R:0),D.paddingBottom=J+(tt?y:0))},[T,L]=j?j.L(C,h,c,l,n,v,b):[()=>C,()=>[bt]];return(P,O,W)=>{const{wt:D,Tt:q,bt:X,xt:tt,vt:$,St:y}=P,{gt:R,yt:I}=n(),[N,V]=O("showNativeOverlaidScrollbars"),[nt,Q]=O("overflow"),rt=N&&w.x&&w.y,J=!i&&!h&&(D||X||q||V||$),ot=ze(nt.x),ut=ze(nt.y),mt=ot||ut;let Lt=S(W),Nt=F(W),Ut=k(W),ae=U(W),it;if(V&&m&&a(Ho,Ds,!rt),J&&(it=v(rt),_(it,R)),D||tt||X||y||V){mt&&a(se,oe,!1);const[Pt,Dt]=L(rt,I,it),[kt,Xe]=Lt=x(W),[Wt,Je]=Nt=A(W),Qt=Ie(c);let Vt=Wt,Kt=Qt;Pt(),(Je||Xe||V)&&Dt&&!rt&&T(Dt,Wt,kt,I)&&(Kt=Ie(c),Vt=Le(c));const ue={w:Ht(wn(Wt.w,Vt.w)+kt.w),h:Ht(wn(Wt.h,Vt.h)+kt.h)},Dn={w:Ht((d?f.innerWidth:Kt.w+Ht(Qt.w-Wt.w))+kt.w),h:Ht((d?f.innerHeight+kt.h:Kt.h+Ht(Qt.h-Wt.h))+kt.h)};ae=M(Dn),Ut=B(hr(ue,Dn),W)}const[pt,ft]=ae,[Et,Se]=Ut,[de,Ve]=Nt,[Ce,Ke]=Lt,Tt={x:Et.w>0,y:Et.h>0},je=ot&&ut&&(Tt.x||Tt.y)||ot&&Tt.x&&!Tt.y||ut&&Tt.y&&!Tt.x;if(tt||y||Ke||Ve||ft||Se||Q||V||J){const Pt={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},Dt=E(rt,Tt,nt,Pt),kt=T(Dt,de,Ce,I);i||b(Dt,I,kt,Pt),J&&_(Dt,R),i?(dt(s,Wo,Pt.overflowX),dt(s,Bo,Pt.overflowY)):at(c,Pt)}Yt(s,St,oe,je),Yt(r,mn,Ws,je),i||Yt(c,Bt,se,mt);const[Ge,Ye]=G(v(rt).Ot);return o({Ot:Ge,zt:{x:pt.w,y:pt.h},Et:{x:Et.w,y:Et.h},At:Tt}),{It:Ye,Ht:ft,Lt:Se}}},no=(t,e,n)=>{const o={},s=e||{},r=wt(t).concat(wt(s));return K(r,c=>{const l=t[c],i=s[c];o[c]=!!(n||l||i)}),o},xr=(t,e)=>{const{Z:n,K:o,ht:s,ft:r}=t,{A:c,I:l,Y:i}=xt(),a=!c&&(l.x||l.y),u=[dr(t,e),ur(t,e),gr(t,e)];return(f,p,h)=>{const m=no(st({wt:!1,xt:!1,St:!1,vt:!1,Ht:!1,Lt:!1,It:!1,Tt:!1,bt:!1,Pt:!1},p),{},h),w=a||!i,j=w&&Ct(o),C=w&&It(o);s("",We,!0);let d=m;return K(u,x=>{d=no(d,x(d,f,!!h)||{},h)}),Ct(o,j),It(o,C),s("",We),r||(Ct(n,0),It(n,0)),d}},mr=(t,e,n)=>{let o,s=!1;const r=()=>{s=!0},c=l=>{if(n){const i=n.reduce((a,u)=>{if(u){const[f,p]=u,h=p&&f&&(l?l(f):Co(f,t));h&&h.length&&p&&qt(p)&&Z(a,[h,p.trim()],!0)}return a},[]);K(i,a=>K(a[0],u=>{const f=a[1],p=o.get(u)||[];if(t.contains(u)){const m=ct(u,f,w=>{s?(m(),o.delete(u)):e(w)});o.set(u,Z(p,m))}else zt(p),o.delete(u)}))}};return n&&(o=new WeakMap,c()),[r,c]},oo=(t,e,n,o)=>{let s=!1;const{Mt:r,Dt:c,Rt:l,kt:i,Bt:a,Vt:u}=o||{},f=On(()=>s&&n(!0),{g:33,v:99}),[p,h]=mr(t,f,l),m=r||[],w=c||[],j=m.concat(w),C=(x,S)=>{const A=a||bt,F=u||bt,B=new Set,k=new Set;let M=!1,U=!1;if(K(x,G=>{const{attributeName:_,target:v,type:E,oldValue:b,addedNodes:T,removedNodes:L}=G,P=E==="attributes",O=E==="childList",W=t===v,D=P&&qt(_)?dt(v,_):0,q=D!==0&&b!==D,X=qe(w,_)>-1&&q;if(e&&(O||!W)){const tt=!P,$=P&&q,y=$&&i&&Ae(v,i),I=(y?!A(v,_,b,D):tt||$)&&!F(G,!!y,t,o);K(T,N=>B.add(N)),K(L,N=>B.add(N)),U=U||I}!e&&W&&q&&!A(v,_,b,D)&&(k.add(_),M=M||X)}),B.size>0&&h(G=>Jt(B).reduce((_,v)=>(Z(_,Co(G,v)),Ae(v,G)?Z(_,v):_),[])),e)return!S&&U&&n(!1),[!1];if(k.size>0||M){const G=[Jt(k),M];return!S&&n.apply(0,G),G}},d=new Es(x=>C(x));return d.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:j,subtree:e,childList:e,characterData:e}),s=!0,[()=>{s&&(p(),d.disconnect(),s=!1)},()=>{if(s){f.m();const x=d.takeRecords();return!Cn(x)&&C(x,!0)}}]},Pe=3333333,Ko=(t,e,n)=>{const{Yt:o,Pt:s}=n||{},r=Zt()[Qs],{V:c}=xt(),i=jo(`<div class="${Pn}"><div class="${Hs}"></div></div>`)[0],a=i.firstChild,u=ce.bind(0,t),[f]=$t({o:!1,_:!0,u:(m,w)=>!(!m||!ne(m)&&ne(w))}),p=m=>{const w=yt(m)&&m.length>0&&be(m[0]),j=!w&&Sn(m[0]);let C=!1,d=!1,x=!0;if(w){const[S,,A]=f(m.pop().contentRect),F=ne(S),B=ne(A);C=!A&&!!B||!F,d=!B&&F,x=!C}else j?[,x]=m:d=m===!0;if(o&&x){const S=j?m[0]:ce(i);Ct(i,S?c.n?-Pe:c.i?0:Pe:Pe),It(i,Pe)}C||e({wt:!j,jt:j?m:void 0,Pt:!!d})},h=[];return[()=>{zt(h),Rt(i)},()=>{let m=s&&p;if(ee){const w=new ee(p);w.observe(a),Z(h,()=>{w.disconnect()})}else if(r){const[w,j]=r.O(a,p,s);m=w,Z(h,j)}if(o){const[w]=$t({o:void 0},u);Z(h,ct(i,"scroll",j=>{const C=w(),[d,x,S]=C;x&&(kn(a,"ltr rtl"),_t(a,d?"rtl":"ltr"),p([!!d,x,S])),Po(j)}))}m&&(_t(i,Bs),Z(h,ct(i,"animationstart",m,{C:!!ee}))),(ee||r)&&vt(t,i)}]},br=t=>t.h===0||t.isIntersecting||t.intersectionRatio>0,yr=(t,e)=>{let n;const o=Xt(Fs),s=[],[r]=$t({o:!1}),c=(i,a)=>{if(i){const u=r(br(i)),[,f]=u;return f&&!a&&e(u)&&[u]}},l=(i,a)=>i&&i.length>0&&c(i.pop(),a);return[()=>{zt(s),Rt(o)},()=>{if(Bn)n=new Bn(i=>l(i),{root:t}),n.observe(o),Z(s,()=>{n.disconnect()});else{const i=()=>{const f=ye(o);c(f)},[a,u]=Ko(o,i);Z(s,a),u(),i()}vt(t,o)},()=>n&&l(n.takeRecords(),!0)]},so=`[${St}]`,wr=`[${Bt}]`,cn=["tabindex"],ro=["wrap","cols","rows"],ln=["id","class","style","open"],vr=(t,e,n)=>{let o,s,r;const{J:c,K:l,nt:i,lt:a,ft:u,_t:f,ht:p}=t,{Y:h}=xt(),[m]=$t({u:Oo,o:{w:0,h:0}},()=>{const b=f(se,oe),T=f(on,""),L=T&&Ct(l),P=T&&It(l);p(se,oe),p(on,""),p("",We,!0);const O=Le(i),W=Le(l),D=De(l);return p(se,oe,b),p(on,"",T),p("",We),Ct(l,L),It(l,P),{w:W.w+O.w+D.w,h:W.h+O.h+D.h}}),w=a?ro:ln.concat(ro),j=On(n,{g:()=>o,v:()=>s,p(b,T){const[L]=b,[P]=T;return[wt(L).concat(wt(P)).reduce((O,W)=>(O[W]=L[W]||P[W],O),{})]}}),C=b=>{K(b||cn,T=>{if(qe(cn,T)>-1){const L=dt(c,T);qt(L)?dt(l,T,L):ht(l,T)}})},d=(b,T)=>{const[L,P]=b,O={vt:P};return e({gt:L}),!T&&n(O),O},x=({wt:b,jt:T,Pt:L})=>{const P=!b||L?n:j;let O=!1;if(T){const[W,D]=T;O=D,e({yt:W})}P({wt:b,Pt:L,St:O})},S=(b,T)=>{const[,L]=m(),P={bt:L};return L&&!T&&(b?n:j)(P),P},A=(b,T,L)=>{const P={Tt:T};return T?!L&&j(P):u||C(b),P},[F,B,k]=i||!h?yr(c,d):[bt,bt,bt],[M,U]=u?[bt,bt]:Ko(c,x,{Pt:!0,Yt:!0}),[G,_]=oo(c,!1,A,{Dt:ln,Mt:ln.concat(cn)});let v;const E=u&&ee&&new ee(b=>{const T=b[b.length-1].contentRect,L=ne(T),O=!ne(v)&&L;x({wt:!0,Pt:O}),v=T});return[()=>{F(),M(),r&&r[0](),E&&E.disconnect(),G()},()=>{E&&E.observe(c),C(),U(),B()},()=>{const b={},T=_(),L=k(),P=r&&r[1]();return T&&st(b,A.apply(0,Z(T,!0))),L&&st(b,d.apply(0,Z(L,!0))),P&&st(b,S.apply(0,Z(P,!0))),b},b=>{const[T]=b("update.ignoreMutation"),[L,P]=b("update.attributes"),[O,W]=b("update.elementEvents"),[D,q]=b("update.debounce"),X=W||P,tt=$=>jt(T)&&T($);if(X&&(r&&(r[1](),r[0]()),r=oo(i||l,!0,S,{Mt:w.concat(L||[]),Rt:O,kt:so,Vt:($,y)=>{const{target:R,attributeName:I}=$;return(!y&&I&&!u?ws(R,so,wr):!1)||!!te(R,`.${gt}`)||!!tt($)}})),q)if(j.m(),yt(D)){const $=D[0],y=D[1];o=Ft($)&&$,s=Ft(y)&&y}else Ft(D)?(o=D,s=!1):(o=!1,s=!1)}]},co={x:0,y:0},$r=t=>({tt:{t:0,r:0,b:0,l:0},$t:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:co,Et:co,Ot:{x:"hidden",y:"hidden"},At:{x:!1,y:!1},gt:!1,yt:ce(t.J)}),Sr=(t,e)=>{const n=yn(e,{}),[o,s,r]=zn(),[c,l,i]=ar(t),a=Uo($r(c)),[u,f]=a,p=xr(c,a),h=(x,S,A)=>{const B=wt(x).some(k=>!!x[k])||!jn(S)||A;return B&&r("u",[x,S,A]),B},[m,w,j,C]=vr(c,f,x=>h(p(n,x),{},!1)),d=u.bind(0);return d.Nt=x=>o("u",x),d.qt=()=>{const{Z:x,K:S,rt:A,it:F}=c,B=F?A.documentElement:x,k=Ct(B),M=It(B);w(),l(),Ct(S,k),It(S,M)},d.Ft=c,[(x,S)=>{const A=yn(e,x,S);return C(A),h(p(A,j(),S),x,!!S)},d,()=>{s(),m(),i()}]},{round:io}=Math,Cr=t=>{const{width:e,height:n}=Ot(t),{w:o,h:s}=ye(t);return{x:io(e)/o||1,y:io(n)/s||1}},jr=(t,e,n)=>{const o=e.scrollbars,{button:s,isPrimary:r,pointerType:c}=t,{pointers:l}=o;return s===0&&r&&o[n?"dragScroll":"clickScroll"]&&(l||[]).includes(c)},lo="pointerup pointerleave pointercancel lostpointercapture",Er=(t,e)=>ct(t,"mousedown",ct.bind(0,e,"click",Po,{C:!0,$:!0}),{$:!0}),Tr=(t,e,n,o,s,r,c)=>{const{V:l}=xt(),{Gt:i,Xt:a,Ut:u}=o,f=`scroll${c?"Left":"Top"}`,p=`client${c?"X":"Y"}`,h=c?"width":"height",m=c?"left":"top",w=c?"w":"h",j=c?"x":"y",C=(d,x)=>S=>{const{Et:A}=r(),F=ye(a)[w]-ye(i)[w],k=x*S/F*A[j],U=ce(u)&&c?l.n||l.i?1:-1:1;s[f]=d+k*U};return ct(a,"pointerdown",d=>{const x=te(d.target,`.${In}`)===i,S=x?i:a;if(Yt(e,St,Vn,!0),jr(d,t,x)){const A=!x&&d.shiftKey,F=()=>Ot(i),B=()=>Ot(a),k=(O,W)=>(O||F())[m]-(W||B())[m],M=C(s[f]||0,1/Cr(s)[j]),U=d[p],G=F(),_=B(),v=G[h],E=k(G,_)+v/2,b=U-_[m],T=x?0:b-E,L=O=>{zt(P),S.releasePointerCapture(O.pointerId)},P=[Yt.bind(0,e,St,Vn),ct(n,lo,L),ct(n,"selectstart",O=>Io(O),{S:!1}),ct(a,lo,L),ct(a,"pointermove",O=>{const W=O[p]-U;(x||A)&&M(T+W)})];if(A)M(T);else if(!x){const O=Zt()[tr];O&&Z(P,O.O(M,k,T,v,b))}S.setPointerCapture(d.pointerId)}})},kr=(t,e)=>(n,o,s,r,c,l,i)=>{const{Ut:a}=n,[u,f]=Gt(333),p=!!c.scrollBy;let h=!0;return zt.bind(0,[ct(a,"pointerenter",()=>{o(Yn,!0)}),ct(a,"pointerleave pointercancel",()=>{o(Yn)}),ct(a,"wheel",m=>{const{deltaX:w,deltaY:j,deltaMode:C}=m;p&&h&&C===0&&At(a)===r&&c.scrollBy({left:w,top:j,behavior:"smooth"}),h=!1,o(Zn,!0),u(()=>{h=!0,o(Zn)}),Io(m)},{S:!1,$:!0}),Er(a,s),Tr(t,r,s,n,c,e,i),f])},{min:Be,max:vn,round:Or}=Math,Go=(t,e,n,o)=>{if(o){const l=n?"x":"y",{Et:i,zt:a}=o,u=a[l],f=i[l];return vn(0,Be(1,u/(u+f)))}const s=n?"width":"height",r=Ot(t)[s],c=Ot(e)[s];return vn(0,Be(1,r/c))},Rr=(t,e,n,o,s,r)=>{const{V:c}=xt(),l=r?"x":"y",i=r?"Left":"Top",{Et:a}=o,u=Or(a[l]),f=Be(u,vn(0,n[`scroll${i}`])),p=r&&s,h=c.i?f:u-f,w=Be(1,(p?h:f)/u),j=Go(t,e,r);return 1/j*(1-j)*w},Yo=(t,e,n,o)=>e&&t.animate(n,{timeline:e,composite:o}),zr=(t,e)=>({transform:[ie("0%",e),ie(e&&t?"100%":"-100%",e)],[e?t?"right":"left":"top"]:["0%","100%"]}),Pr=t=>`${Math.max(0,t-.5)}px`,ao=(t,e,n,o)=>Yo(t,e,{transform:[ie("0px",o),ie(Pr(n),o)]},"add"),uo=(t,e)=>gn?new gn({source:t,axis:e}):null,Ir=(t,e,n)=>{const{q:o,H:s}=xt(),{scrollbars:r}=o(),{slot:c}=r,{rt:l,Z:i,J:a,K:u,ut:f,st:p,it:h,ft:m}=e,{scrollbars:w}=f?{}:t,{slot:j}=w||{},C=new Map,d=uo(p,"x"),x=uo(p,"y"),S=qo([i,a,u],()=>m&&h?i:a,c,j),A=$=>m&&!h&&At($)===u,F=$=>{C.forEach((y,R)=>{($?qe(yt($)?$:[$],R)>-1:!0)&&((y||[]).forEach(N=>{N&&N.cancel()}),C.delete(R))})},B=($,y,R)=>{const I=R?_t:kn;K($,N=>{I(N.Ut,y)})},k=($,y)=>{K($,R=>{const[I,N]=y(R);at(I,N)})},M=($,y,R)=>{k($,I=>{const{Gt:N,Xt:V}=I;return[N,{[R?"width":"height"]:`${(Go(N,V,R,y)*100).toFixed(3)}%`}]})},U=($,y,R)=>{!x&&!x&&k($,I=>{const{Gt:N,Xt:V,Ut:nt}=I,Q=Rr(N,V,p,y,ce(nt),R);return[N,{transform:Q===Q?ie(`${(Q*100).toFixed(3)}%`,R):""}]})},G=$=>{const{Ut:y}=$,R=A(y)&&y;return[R,{transform:R?ie([`${Ct(p)}px`,`${It(p)}px`]):""}]},_=[],v=[],E=[],b=($,y,R)=>{const I=Sn(R),N=I?R:!0,V=I?!R:!0;N&&B(v,$,y),V&&B(E,$,y)},T=$=>{M(v,$,!0),M(E,$)},L=$=>{U(v,$,!0),U(E,$)},P=()=>{const $=(y,{Ut:R,Gt:I})=>{F(I),C.set(I,[Yo(I,y?d:x,zr(y&&ce(R),y))])};v.forEach($.bind(0,!0)),E.forEach($.bind(0,!1))},O=()=>{!x&&!x&&(m&&k(v,G),m&&k(E,G))},W=({Et:$})=>{E.concat(v).forEach(({Ut:y})=>{F(y),A(y)&&C.set(y,[ao(y,d,$.x,!0),ao(y,x,$.y)])})},D=$=>{const y=$?Us:Vs,R=$?v:E,I=Cn(R)?Gn:"",N=Xt(`${gt} ${y} ${I}`),V=Xt(Fo),nt=Xt(In),Q={Ut:N,Xt:V,Gt:nt};return s||_t(N,_s),vt(N,V),vt(V,nt),Z(R,Q),Z(_,[Rt.bind(0,N),F,n(Q,b,l,a,p,$?d:x,$)]),Q},q=D.bind(0,!0),X=D.bind(0,!1),tt=()=>{vt(S,v[0].Ut),vt(S,E[0].Ut),Me(()=>{b(Gn)},300)};return q(),X(),[{Wt:T,Zt:L,Jt:P,Kt:W,Qt:O,tn:b,nn:{B:d,sn:v,en:q,cn:k.bind(0,v)},rn:{B:x,sn:E,en:X,cn:k.bind(0,E)}},tt,zt.bind(0,_)]},an=t=>t.pointerType==="mouse",Ar=(t,e,n,o)=>{let s,r,c,l,i,a=bt,u=0;const f=Uo({}),[p]=f,[h,m]=Gt(),[w,j]=Gt(),[C,d]=Gt(100),[x,S]=Gt(100),[A,F]=Gt(100),[B,k]=Gt(()=>u),[M,U,G]=Ir(t,n.Ft,kr(e,n)),{J:_,et:v,it:E}=n.Ft,{tn:b,Wt:T,Zt:L,Jt:P,Kt:O,Qt:W}=M,D=y=>{b(bn,y,!0),b(bn,y,!1)},q=(y,R)=>{if(k(),y)b(Jn);else{const I=()=>b(Jn,!0);u>0&&!R?B(I):I()}},X=y=>{an(y)&&(l=r,l&&q(!0))},tt=[d,k,S,F,j,m,G,ct(_,"pointerover",X,{C:!0}),ct(_,"pointerenter",X),ct(_,"pointerleave",y=>{an(y)&&(l=!1,r&&q(!1))}),ct(_,"pointermove",y=>{an(y)&&s&&h(()=>{d(),q(!0),x(()=>{s&&q(!1)})})}),ct(v,"scroll",y=>{w(()=>{L(n()),c&&q(!0),C(()=>{c&&!l&&q(!1)})}),o(y),W()})],$=p.bind(0);return $.Ft=M,$.qt=U,[(y,R,I)=>{const{Ht:N,Lt:V,It:nt,St:Q,Pt:rt}=I,{I:J}=xt(),ot=yn(e,y,R),ut=n(),{Et:mt,Ot:Lt,yt:Nt,At:Ut}=ut,[ae,it]=ot("showNativeOverlaidScrollbars"),[pt,ft]=ot("scrollbars.theme"),[Et,Se]=ot("scrollbars.visibility"),[de,Ve]=ot("scrollbars.autoHide"),[Ce,Ke]=ot("scrollbars.autoHideSuspend"),[Tt]=ot("scrollbars.autoHideDelay"),[je,Ge]=ot("scrollbars.dragScroll"),[Ye,Pt]=ot("scrollbars.clickScroll"),Dt=rt&&!R,kt=Ut.x||Ut.y,Xe=N||V||Q,Wt=nt||Se,Je=ae&&J.x&&J.y,Qt=(Vt,Kt)=>{const ue=Et==="visible"||Et==="auto"&&Vt==="scroll";return b(Ks,ue,Kt),ue};if(u=Tt,Dt&&(Ce&&kt?(D(!1),a(),A(()=>{a=ct(v,"scroll",D.bind(0,!0),{C:!0})})):D(!0)),it&&b(qs,Je),ft&&(b(i),b(pt,!0),i=pt),Ke&&!Ce&&D(!0),Ve&&(s=de==="move",r=de==="leave",c=de!=="never",q(!c,!0)),Ge&&b(Xs,je),Pt&&b(Ys,Ye),Wt){const Vt=Qt(Lt.x,!0),Kt=Qt(Lt.y,!1);b(Gs,!(Vt&&Kt))}Xe&&(T(ut),L(ut),P(ut),O(ut),W(),b(Xn,!mt.x,!0),b(Xn,!mt.y,!1),b(Ns,Nt&&!E))},$,()=>{zt(tt),a()}]},Xo=(t,e,n)=>{jt(t)&&t(e||void 0,n||void 0)},we=(t,e,n)=>{const{G:o,q:s,j:r,N:c}=xt(),l=Zt(),i=me(t),a=i?t:t.target,u=No(a);if(e&&!u){let f=!1;const p=v=>{const E=Zt()[Zs],b=E&&E.O;return b?b(v,!0):v},h=st({},o(),p(e)),[m,w,j]=zn(n),[C,d,x]=Sr(t,h),[S,A,F]=Ar(t,h,d,v=>j("scroll",[_,v])),B=(v,E)=>C(v,!!E),k=B.bind(0,{},!0),M=r(k),U=c(k),G=v=>{lr(a),M(),U(),F(),x(),f=!0,j("destroyed",[_,!!v]),w()},_={options(v,E){if(v){const b=E?o():{},T=Ao(h,st(b,p(v)));jn(T)||(st(h,T),B(T))}return st({},h)},on:m,off:(v,E)=>{v&&E&&w(v,E)},state(){const{zt:v,Et:E,Ot:b,At:T,tt:L,$t:P,yt:O}=d();return st({},{overflowEdge:v,overflowAmount:E,overflowStyle:b,hasOverflow:T,padding:L,paddingAbsolute:P,directionRTL:O,destroyed:f})},elements(){const{Z:v,J:E,tt:b,K:T,nt:L,st:P,et:O}=d.Ft,{nn:W,rn:D}=A.Ft,q=tt=>{const{Gt:$,Xt:y,Ut:R}=tt;return{scrollbar:R,track:y,handle:$}},X=tt=>{const{sn:$,en:y}=tt,R=q($[0]);return st({},R,{clone:()=>{const I=q(y());return S({},!0,{}),I}})};return st({},{target:v,host:E,padding:b||T,viewport:T,content:L||T,scrollOffsetElement:P,scrollEventElement:O,scrollbarHorizontal:X(W),scrollbarVertical:X(D)})},update:v=>B({},v),destroy:G.bind(0)};return d.Nt((v,E,b)=>{S(E,b,v)}),ir(a,_),K(wt(l),v=>Xo(l[v],0,_)),cr(d.Ft.it,s().cancel,!i&&t.cancel)?(G(!0),_):(d.qt(),A.qt(),j("initialized",[_]),d.Nt((v,E,b)=>{const{wt:T,St:L,vt:P,Ht:O,Lt:W,It:D,bt:q,Tt:X}=v;j("updated",[_,{updateHints:{sizeChanged:T,directionChanged:L,heightIntrinsicChanged:P,overflowEdgeChanged:O,overflowAmountChanged:W,overflowStyleChanged:D,contentMutation:q,hostMutation:X},changedOptions:E,force:b}])}),_.update(!0),_)}return u};we.plugin=t=>{K(Js(t),e=>Xo(e,we))};we.valid=t=>{const e=t&&t.elements,n=jt(e)&&e();return pn(n)&&!!No(n.target)};we.env=()=>{const{k:t,I:e,A:n,V:o,Y:s,H:r,B:c,U:l,W:i,q:a,F:u,G:f,X:p}=xt();return st({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:r,scrollTimeline:c,staticDefaultInitialization:l,staticDefaultOptions:i,getDefaultInitialization:a,setDefaultInitialization:u,getDefaultOptions:f,setDefaultOptions:p})};const Mr={scrollbars:{visibility:"auto",autoHide:"never"}},Lr=(t,e)=>{Y.useEffect(()=>{let n;return t.current&&e&&(n=we(t.current,Mr)),()=>{n&&n.destroy()}},[t,e])},Dr=z.div`
  width: ${({width:t})=>(t==null?void 0:t.mob)+"px"||"100%"};
  ${et.tablet} {
    width: ${({width:t})=>(t==null?void 0:t.nab)+"px"||"100%"};
    height: 660px;
  }
  ${et.desktop} {
    width: ${({width:t})=>(t==null?void 0:t.dt)+"px"||"100%"};
    height: 487px;
  }

`;function Wr({children:t,width:e}){const{isMobile:n}=gs(),o=Y.useRef(null);return Lr(o,!n),g.jsx(Dr,{width:e,ref:o,children:t})}Wr.propTypes={width:lt.object};const Br=z.li`
  display: grid;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 159px;
  padding: 16px;
  align-items: flex-start;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${H.textWhite02};
  background: ${H.textWhite005};

  ${et.mobile} {
    width: 335px;
  }

  ${et.tablet} {
    width: 335px;
    align-items: center;
  }

  ${et.desktop} {
    width: 405px;
  }
`,Hr=z.div`
  display: flex;
  align-items: flex-start;
`,Fr=z.p`
  display: inline-flex;
  width: auto;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  padding: 0 7.5px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${H.textWhite005};
  border-radius: 4px;
  color: #fff;
`,_r=z.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${H.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${t=>t.reccomend?"#419b09":"#E9101D"};
    margin-right: 8px;
  }
`,qr=z.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;
  cursor: pointer;

  color: ${H.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${H.orangeSecondary};

    svg {
      stroke: ${H.orangeSecondary};
    }
  }

  ${et.tablet} {
    font-size: 16px;
  }
`,Nr=z.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${H.orange};

  transition: stroke 250ms ease-in-out;
`,Ur=z.div`
  display: inline-flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${H.white};

  ${et.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 21px;
  }
`,Vr=z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`,Kr=z.svg`
  width: 16px;
  height: 16px;

  fill: ${H.white};
`,Gr=z.div`
  display: inline-block;
  align-items: center;
  margin-top: 8px;

  ${et.tablet} {
    margin-top: 12px;
  }
`,dn=z.div`
  display: inline-flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${H.textWhite04};

  &:last-child {
    margin-right: 0;
  }
`,un=z.p`
  margin-left: 4px;

  color: ${H.white};
`,Yr=z.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${H.backdrop};
`,Xr=z.div`
  border: 1px solid ${H.textWhite02};
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 335px;
  padding: 48px 20px;
  border-radius: 8px;
  background-color: ${H.modalBlack};
  z-index: 1;

  ${et.tablet} {
    width: ${t=>t.width}px;
    padding: 48px 32px;
  }
`,Jr=z.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  ${os}
`,Zr=z.svg`
  fill: ${H.grey};
  width: 24px;
  height: 24px;
`,Qr=document.querySelector("#modal-root"),po=({children:t,openModal:e,width:n})=>{Y.useEffect(()=>{const s=r=>{r.code==="Escape"&&e()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e]);const o=s=>{s.currentTarget===s.target&&e()};return ss.createPortal(g.jsx(Yr,{onClick:o,children:g.jsxs(Xr,{width:n,children:[g.jsx(Jr,{type:"button",onClick:()=>e(),children:g.jsx(Zr,{children:g.jsx("use",{href:re+"#close"})})}),t]})}),Qr)};z.div`
  background-color: ${H.modalBlack};
  border-radius: 12px;
  padding: 48px 24px;
  ${et.tablet} {
    padding: 48px 32px;
  }
`;const tc=z.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${et.tablet} {
    flex-direction: row;
  }
`,ec=z.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${H.orange};
  gap: 10px;
  background-color: inherit;
  color: ${H.textWhite03};

  ${et.tablet} {
    width: 244px;
    height: 40px;
  }
  

`,nc=z.input`
  position: relative;
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${H.orange};
  gap: 10px;
  background-color: inherit;
  color: ${H.white};

  &::placeholder {
    color: ${H.textWhite03};
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

  ${et.tablet} {
    width: 155px;
    height: 40px;
    margin-top: 0;
  }

  :focus-visible {
    outline: 2px solid ${H.orange};
  }
`,oc=z.p`
  font-size: 12px;
  align-items: end;
  color: ${H.white};
`,sc=z.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: ${H.textWhite04};
`,rc=z.div`
  display: flex;
  margin-top: 24px;
  ${et.tablet} {
    margin-top: 64px;
  }
`,Jo=z.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: ${H.orange};
  color: ${H.white};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid ${H.textWhite03};
  transition: background 0.3s ease-out;
  margin-right: 14px;

  &:hover {
    background: #ef8964;
  }

  ${et.tablet} {
    margin-right: 16px;
  }
`,cc=z.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: inherit;
  color: ${H.white};
  border-radius: 12px;
  border: 1px solid ${H.textWhite03};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  ${et.tablet} {
    padding: 12px 40px;
  }
`;function Zo({data:t,closeModal:e,addProduct:n}){const[o,s]=Y.useState(""),r=Math.round(o*t.calories/100),c=wo(new Date);return g.jsxs("form",{children:[g.jsxs(tc,{children:[g.jsx("label",{children:g.jsx(ec,{type:"text",value:t.title,disabled:!0})}),g.jsx("label",{children:g.jsx(nc,{placeholder:"grams",type:"number",value:o,onChange:l=>s(l.target.value)})})]}),g.jsxs(oc,{children:[g.jsx(sc,{children:"Calories:"})," ",r]}),g.jsxs(rc,{children:[g.jsx(Jo,{type:"button",onClick:()=>n({id:t.id,date:c,amount:o,calories:r}),children:"Add to diary"}),g.jsx(cc,{type:"button",onClick:e,children:"Cancel"})]})]})}Zo.propTypes={data:lt.object,closeModal:lt.func,addProduct:lt.func};var fo=typeof window>"u"?Y.useEffect:Y.useLayoutEffect,ic=({isPlaying:t,duration:e,startAt:n=0,updateInterval:o=0,onComplete:s,onUpdate:r})=>{let[c,l]=Y.useState(n),i=Y.useRef(0),a=Y.useRef(n),u=Y.useRef(n*-1e3),f=Y.useRef(null),p=Y.useRef(null),h=Y.useRef(null),m=C=>{let d=C/1e3;if(p.current===null){p.current=d,f.current=requestAnimationFrame(m);return}let x=d-p.current,S=i.current+x;p.current=d,i.current=S;let A=a.current+(o===0?S:(S/o|0)*o),F=a.current+S,B=typeof e=="number"&&F>=e;l(B?e:A),B||(f.current=requestAnimationFrame(m))},w=()=>{f.current&&cancelAnimationFrame(f.current),h.current&&clearTimeout(h.current),p.current=null},j=Y.useCallback(C=>{w(),i.current=0;let d=typeof C=="number"?C:n;a.current=d,l(d),t&&(f.current=requestAnimationFrame(m))},[t,n]);return fo(()=>{if(r==null||r(c),e&&c>=e){u.current+=e*1e3;let{shouldRepeat:C=!1,delay:d=0,newStartAt:x}=(s==null?void 0:s(u.current/1e3))||{};C&&(h.current=setTimeout(()=>j(x),d*1e3))}},[c,e]),fo(()=>(t&&(f.current=requestAnimationFrame(m)),w),[t,e,o]),{elapsedTime:c,reset:j}},lc=(t,e,n)=>{let o=t/2,s=e/2,r=o-s,c=2*r,l=n==="clockwise"?"1,0":"0,1",i=2*Math.PI*r;return{path:`m ${o},${s} a ${r},${r} 0 ${l} 0,${c} a ${r},${r} 0 ${l} 0,-${c}`,pathLength:i}},ho=(t,e)=>t===0||t===e?0:typeof e=="number"?t-e:0,ac=t=>({position:"relative",width:t,height:t}),dc={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},Qo=(t,e,n,o,s)=>{if(o===0)return e;let r=(s?o-t:t)/o;return e+n*r},go=t=>{var e,n;return(n=(e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,s,r,c)=>`#${s}${s}${r}${r}${c}${c}`).substring(1).match(/.{2}/g))==null?void 0:e.map(o=>parseInt(o,16)))!=null?n:[]},uc=(t,e)=>{var n;let{colors:o,colorsTime:s,isSmoothColorTransition:r=!0}=t;if(typeof o=="string")return o;let c=(n=s==null?void 0:s.findIndex((p,h)=>p>=e&&e>=s[h+1]))!=null?n:-1;if(!s||c===-1)return o[0];if(!r)return o[c];let l=s[c]-e,i=s[c]-s[c+1],a=go(o[c]),u=go(o[c+1]),f=!!t.isGrowing;return`rgb(${a.map((p,h)=>Qo(l,p,u[h]-p,i,f)|0).join(",")})`},pc=t=>{let{duration:e,initialRemainingTime:n,updateInterval:o,size:s=180,strokeWidth:r=12,trailStrokeWidth:c,isPlaying:l=!1,isGrowing:i=!1,rotation:a="clockwise",onComplete:u,onUpdate:f}=t,p=Y.useRef(),h=Math.max(r,c??0),{path:m,pathLength:w}=lc(s,h,a),{elapsedTime:j}=ic({isPlaying:l,duration:e,startAt:ho(e,n),updateInterval:o,onUpdate:typeof f=="function"?d=>{let x=Math.ceil(e-d);x!==p.current&&(p.current=x,f(x))}:void 0,onComplete:typeof u=="function"?d=>{var x;let{shouldRepeat:S,delay:A,newInitialRemainingTime:F}=(x=u(d))!=null?x:{};if(S)return{shouldRepeat:S,delay:A,newStartAt:ho(e,F)}}:void 0}),C=e-j;return{elapsedTime:j,path:m,pathLength:w,remainingTime:Math.ceil(C),rotation:a,size:s,stroke:uc(t,C),strokeDashoffset:Qo(j,0,w,e,i),strokeWidth:r}},ts=t=>{let{children:e,strokeLinecap:n,trailColor:o,trailStrokeWidth:s}=t,{path:r,pathLength:c,stroke:l,strokeDashoffset:i,remainingTime:a,elapsedTime:u,size:f,strokeWidth:p}=pc(t);return pe.createElement("div",{style:ac(f)},pe.createElement("svg",{viewBox:`0 0 ${f} ${f}`,width:f,height:f,xmlns:"http://www.w3.org/2000/svg"},pe.createElement("path",{d:r,fill:"none",stroke:o??"#d9d9d9",strokeWidth:s??p}),pe.createElement("path",{d:r,fill:"none",stroke:l,strokeLinecap:n??"round",strokeWidth:p,strokeDasharray:c,strokeDashoffset:i})),typeof e=="function"&&pe.createElement("div",{style:dc},e({remainingTime:a,elapsedTime:u,color:l})))};ts.displayName="CountdownCircleTimer";const xo=z.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,fc=z.div`
  margin-bottom: 4px;
  font-size: 10px;
  line-height: 140%;
  color: ${H.textWhite04};
`,mo=z.button`
  margin-bottom: 8px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
`,bo=z.svg`
  width: 32px;
  height: 32px;
  fill: ${H.orange};
  stroke: ${H.white};
`,hc=z.div`
  font-size: 14px;
  line-height: 128 %;
  color: ${H.textWhite03};
`,gc=z.span`
  margin-left: 8px;
  color: ${H.orange};
`;function es({writeTime:t,isPlaying:e,calory:n,startExercise:o,stopExercise:s}){return g.jsxs(g.Fragment,{children:[g.jsxs(xo,{children:[g.jsx(fc,{children:"Timer"}),g.jsx(ts,{size:124,duration:180,colors:"#E6533C",strokeWidth:4,trailColor:"#EFEDE81A",isPlaying:e,children:t})]}),g.jsxs(xo,{children:[e?g.jsx(mo,{type:"button",onClick:s,children:g.jsx(bo,{children:g.jsx("use",{href:re+"#pause"})})}):g.jsx(mo,{type:"button",onClick:o,children:g.jsx(bo,{children:g.jsx("use",{href:re+"#play"})})}),g.jsxs(hc,{children:["Burned calories:",g.jsx(gc,{children:n})]})]})]})}es.propTypes={calory:lt.number.isRequired,writeTime:lt.func.isRequired,startExercise:lt.func.isRequired,stopExercise:lt.func.isRequired,isPlaying:lt.bool.isRequired};const xc=z.div`
  position: relative;
  z-index: 100;
  width: 335px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border: transparent;

  background-color: ${H.modalBackground};
  ${et.tablet} {
    width: 694px;
    display: flex;
    gap: 15px;
  }
`,mc=z.div`
  width: 270px;
  height: 226px;
  overflow: hidden;
  border: 1px solid ${H.textWhite02};
  border-radius: 12px;
`,bc=z.img`
  width: 270px;
  height: 226px;
`,yc=z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
  ${et.tablet} {
    margin-bottom: 0;
  }
`,wc=z.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  ${et.tablet} {
    height: 226px;
  }
`,he=z.div`
  flex-basis: calc((100% - 8px) / 2);

  min-height: 62px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${H.textWhite02};
  background-color: ${H.textWhite005};
  ${et.tablet} {
    min-height: 68px;
  }
`,ge=z.div`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 133%;
  color: ${H.textWhite04};
`,xe=z.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 128.571%;
  color: ${H.white};
  ${et.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`,vc=z.div`
  ${et.tablet} {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }
`,$c=z.span`
  font-size: 16px;
  line-height: 150%;
  color: ${H.white};
`;function ns({data:t,addExercise:e}){const{_id:n,burnedCalories:o,name:s,bodyPart:r,gifUrl:c,target:l,equipment:i,time:a}=t,[u,f]=Y.useState(0),[p,h]=Y.useState(0),[m,w]=Y.useState(!1),[j,C]=Y.useState(null),d=(k,M,U)=>{const G=Math.floor(U*k/(M*60));f(G)};Y.useEffect(()=>{d(o,a,p)},[o,a,p]);const x=()=>{h(k=>k+1)},S=()=>{const k=setInterval(x,1e3);C(k),w(!0)},A=()=>{w(!1),clearInterval(j),C(null)},F=wo(new Date),B=({remainingTime:k})=>{const M=Math.floor(k/60).toString().length>1?Math.floor(k/60):"0"+Math.floor(k/60),U=(k%60).toString().length>1?k%60:"0"+k%60;return g.jsxs($c,{children:[M,":",U]})};return g.jsxs(xc,{children:[g.jsxs(yc,{children:[g.jsx(mc,{children:g.jsx(bc,{src:c,alt:"gif of exercise"})}),g.jsx(es,{startExercise:S,stopExercise:A,countCalory:d,calory:u,writeTime:B,isPlaying:m})]}),g.jsxs(wc,{children:[g.jsxs(he,{children:[g.jsx(ge,{children:"Name"}),g.jsx(xe,{children:s})]}),g.jsxs(he,{children:[g.jsx(ge,{children:"Target"}),g.jsx(xe,{children:l})]}),g.jsxs(he,{children:[g.jsx(ge,{children:"Body Part"}),g.jsx(xe,{children:r})]}),g.jsxs(he,{children:[g.jsx(ge,{children:"Equipment"}),g.jsx(xe,{children:i})]}),g.jsxs(he,{children:[g.jsx(ge,{children:"Time"}),g.jsxs(xe,{children:[a," minutes"]})]})]}),g.jsx(vc,{children:g.jsx(Jo,{type:"button",onClick:()=>e({id:n,date:F,time:p,burnedCalories:u}),children:"Add to diary"})})]})}ns.propTypes={data:lt.object.isRequired,addExercise:lt.func};yo.defaults.baseURL="https://power-pulse-rest-api.onrender.com";const Sc=rs("addProduct",async(t,{rejectWithValue:e})=>{try{await yo.post("/api/diary/add-product",t)}catch{return cs.error("Oops... Something went wrong! Try again!"),e("Oops... Something went wrong!")}}),Cc=(t,e)=>{let n=24;return e<768?n=23:e<1440&&(n=19),t.length<=n?t:t.substring(0,n)+"..."},jc=z.div`
  display: flex;
  flex-direction: column;
  width: 190px;
`,Ec=z.img`
  width: 120px;
  height: 97px;
  margin: 0 auto;
  margin-bottom: 19px;
`,Tc=z.strong`
  margin: 0 auto;
  margin-bottom: 16px;

  color: ${H.white};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: ${32/24};
`,kc=z.ul`
  margin: 0 auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Oc=z.p`
  color: ${H.textWhite03};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${18/14};
  display: flex;
  align-items: center;
`,Rc=z.span`
  color: ${H.orange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${14/18};
  margin-left: 5px;
`,zc=z(is)`
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
`,Pc=z.svg`
  stroke: currentColor;
  width: 16px;
  height: 16px;
`,Ic="/september-project/assets/foodIcon-f93b792c.png",Ac="/september-project/assets/thumbUp-e8c8bf67.png";function $n({modalType:t,data:e,btnNext:n}){const o=r=>{if(r==="time")return"Your  time:   ";if(r==="burnedCalories")return"Burned calories:    ";if(r==="calories")return"Calories: "},s=r=>Object.keys(r).map(i=>g.jsx("li",{children:g.jsxs(Oc,{children:[`${o(i)} `,g.jsxs(Rc,{children:[i==="time"&&`${r[i]} seconds`," ",i==="burnedCalories"&&`${r[i]}`," ",i==="calories"&&`${r[i]}`," "]})]})},ls()));return g.jsxs(jc,{children:[g.jsx(Ec,{src:t==="product"?Ic:Ac,alt:"it`s a placeholder image, but it`s avocado too"}),g.jsx(Tc,{children:"Well Done"}),g.jsx(kc,{children:s(e)}),g.jsx(us,{title:"Next product",btnNext:n}),g.jsxs(zc,{to:"/diary",children:["To the diary",g.jsx(Pc,{fill:"",children:g.jsx("use",{href:re+"#arrow-right"})})]})]})}$n.propTypes={modalType:lt.oneOf(["product","exercise"]),data:lt.object.isRequired,btnNext:lt.func};const Mc=({page:t,data:e})=>{const[n,o]=Y.useState(window.innerWidth),[s,r]=Y.useState(!1),[c,l]=Y.useState(!1),[i,a]=Y.useState(0),[u,f]=Y.useState(0),[p,h]=Y.useState(0),m=()=>r(S=>!S),w=()=>l(S=>!S),j=as();Y.useEffect(()=>(window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)}),[]);const C=()=>{o(window.innerWidth)},d=ps(t,e),x=({id:S,date:A,amount:F,calories:B,time:k,burnedCalories:M})=>{if(t==="product"){const U={productId:S,date:A,amount:F,calories:B};a(B),j(Sc(U))}if(t==="exercise"){const U={exerciseId:S,date:A,time:k,burnedCalories:M};if(!k||!M)return;console.log(U),f(k),h(M),j(ds(U))}m(),w()};return g.jsxs(Br,{children:[g.jsxs(Hr,{children:[g.jsx(Fr,{children:d.subtitle}),t==="product"&&g.jsx(_r,{reccomend:e.recommended,children:e.recommended?"Recommended":"Not recommended"}),g.jsxs(qr,{onClick:m,children:[d.button,g.jsx(Nr,{children:g.jsx("use",{href:re+"#arrow-right"})})]})]}),g.jsxs(Ur,{children:[g.jsx(Vr,{children:g.jsx(Kr,{children:g.jsx("use",{href:re+"#runningMan"})})}),Cc(d.title,n)]}),g.jsxs(Gr,{children:[g.jsxs(dn,{children:[d.text1,g.jsx(un,{children:d.subText1})]}),g.jsxs(dn,{children:[d.text2,g.jsx(un,{children:d.subText2})]}),g.jsxs(dn,{children:[d.text3,g.jsx(un,{children:d.subText3})]})]}),s&&g.jsxs(po,{openModal:m,width:t==="product"?479:694,children:[t==="product"&&g.jsx(Zo,{closeModal:m,data:e,addProduct:x}),t==="exercise"&&g.jsx(ns,{data:e,addExercise:x})]}),c&&g.jsxs(po,{openModal:w,width:430,children:[t==="product"&&g.jsx($n,{modalType:"product",data:{calories:i},btnNext:w}),t==="exercise"&&g.jsx($n,{modalType:"exercise",data:{time:u,burnedCalories:p},btnNext:w})]})]})};Mc.propTypes={page:lt.string,data:lt.object,openModal:lt.func};export{Bc as P,Wr as S,Mc as a};
