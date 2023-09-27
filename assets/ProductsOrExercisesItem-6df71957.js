import{n as I,m as et,j as f,r as Y,P as lt,c as z,B as os,D as ss,s as ce,k as fe,E as yo,F as rs,Q as cs,N as is,q as ls,u as as,G as ds}from"./index-a6c0a827.js";import{c as Pt,f as vo}from"./formatDate-d1383d55.js";import{B as us}from"./BtnSubmit-2ca4d991.js";const ps=(t,e)=>t==="product"?{subtitle:"DIET",title:Pt(e.title),button:"Add",text1:"Calories:",text2:"Category:",text3:"Weight:",subText1:e.calories,subText2:Pt(e.category),subText3:e.weight}:{subtitle:"WORKOUT",title:Pt(e.name),button:"Start",text1:"Burned calories:",text2:"Body part:",text3:"Target:",subText1:e.burnedCalories,subText2:Pt(e.bodyPart),subText3:Pt(e.target)},fs=I.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 20px;
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
`;function Fc({children:t,...e}){return f.jsx(fs,{...e,children:t})}const hs=["(max-width: 767px)","(min-width: 768px) and (max-width: 1439px)","(min-width: 1440px)"],gs=()=>{const t=hs.map(s=>matchMedia(s)),e=()=>t.map(s=>s.matches),[n,o]=Y.useState(e);return Y.useLayoutEffect(()=>{const s=()=>o(e);return t.forEach(r=>r.addEventListener("change",s)),()=>t.forEach(r=>r.removeEventListener("change",s))}),["isMobile","isTablet","isDesktop"].reduce((s,r,c)=>({...s,[r]:n[c]}),{})};/*!
 * OverlayScrollbars
 * Version: 2.3.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */function G(t,e){if(Fe(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&G(Object.keys(t),n=>e(t[n],n,t));return t}function at(t,e){const n=Nt(e);if(yt(e)||n){let s=n?"":{};if(t){const r=window.getComputedStyle(t,null);s=n?Fn(t,r,e):e.reduce((c,l)=>(c[l]=Fn(t,r,l),c),s)}return s}t&&G(vt(e),s=>Rs(t,s,e[s]))}const $t=(t,e)=>{const{o:n,u:o,_:s}=t;let r=n,c;const l=(u,h)=>{const p=r,g=u,m=h||(o?!o(p,g):p!==g);return(m||s)&&(r=g,c=p),[r,m,c]};return[e?u=>l(e(r,c),u):l,u=>[r,!!u,c]]},we=()=>typeof window<"u",wo=we()&&Node.ELEMENT_NODE,{toString:xs,hasOwnProperty:Ze}=Object.prototype,Lt=t=>t===void 0,He=t=>t===null,ms=t=>Lt(t)||He(t)?`${t}`:xs.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),_t=t=>typeof t=="number",Nt=t=>typeof t=="string",Sn=t=>typeof t=="boolean",Ct=t=>typeof t=="function",yt=t=>Array.isArray(t),be=t=>typeof t=="object"&&!yt(t)&&!He(t),Fe=t=>{const e=!!t&&t.length,n=_t(e)&&e>-1&&e%1==0;return yt(t)||!Ct(t)&&n?e>0&&be(t)?e-1 in t:!0:!1},pn=t=>{if(!t||!be(t)||ms(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,r=Ze.call(t,n),c=s&&Ze.call(s,"isPrototypeOf");if(o&&!r&&!c)return!1;for(e in t);return Lt(e)||Ze.call(t,e)},me=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===wo:!1},_e=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===wo:!1},qe=(t,e,n)=>t.indexOf(e,n),Z=(t,e,n)=>(!n&&!Nt(e)&&Fe(e)?Array.prototype.push.apply(t,e):t.push(e),t),Zt=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{Z(n,o)}):G(t,o=>{Z(n,o)}),n)},jn=t=>!!t&&t.length===0,Rt=(t,e,n)=>{G(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},Ne=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),vt=t=>t?Object.keys(t):[],st=(t,e,n,o,s,r,c)=>{const l=[e,n,o,s,r,c];return(typeof t!="object"||He(t))&&!Ct(t)&&(t={}),G(l,i=>{G(vt(i),a=>{const u=i[a];if(t===u)return!0;const h=yt(u);if(u&&pn(u)){const p=t[a];let g=p;h&&!yt(p)?g=[]:!h&&!pn(p)&&(g={}),t[a]=st(g,u)}else t[a]=h?u.slice():u})}),t},Cn=t=>{for(const e in t)return!1;return!0},$o=(t,e,n,o)=>{if(Lt(o))return n?n[t]:e;n&&(Nt(o)||_t(o))&&(n[t]=o)},dt=(t,e,n)=>{if(Lt(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},So=(t,e)=>new Set((dt(t,e)||"").split(" ")),ht=(t,e)=>{t&&t.removeAttribute(e)},Xt=(t,e,n,o)=>{if(n){const s=So(t,e);s[o?"add":"delete"](n);const r=Zt(s).join(" ").trim();dt(t,e,r)}},bs=(t,e,n)=>So(t,e).has(n),jt=(t,e)=>$o("scrollLeft",0,t,e),At=(t,e)=>$o("scrollTop",0,t,e),fn=we()&&Element.prototype,jo=(t,e)=>{const n=[],o=e?_e(e)&&e:document;return o?Z(n,o.querySelectorAll(t)):n},ys=(t,e)=>{const n=e?_e(e)&&e:document;return n?n.querySelector(t):null},Ae=(t,e)=>_e(t)?(fn.matches||fn.msMatchesSelector).call(t,e):!1,En=t=>t?Zt(t.childNodes):[],Mt=t=>t&&t.parentElement,ee=(t,e)=>{if(_e(t)){const n=fn.closest;if(n)return n.call(t,e);do{if(Ae(t,e))return t;t=Mt(t)}while(t)}},vs=(t,e,n)=>{const o=ee(t,e),s=t&&ys(n,o),r=ee(s,e)===o;return o&&s?o===t||s===t||r&&ee(ee(t,n),e)!==o:!1},kn=(t,e,n)=>{if(n&&t){let o=e,s;Fe(n)?(s=document.createDocumentFragment(),G(n,r=>{r===o&&(o=r.previousSibling),s.appendChild(r)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null)}},wt=(t,e)=>{kn(t,null,e)},ws=(t,e)=>{kn(Mt(t),t,e)},Dn=(t,e)=>{kn(Mt(t),t&&t.nextSibling,e)},zt=t=>{if(Fe(t))G(Zt(t),e=>zt(e));else if(t){const e=Mt(t);e&&e.removeChild(t)}},Jt=t=>{const e=document.createElement("div");return t&&dt(e,"class",t),e},Co=t=>{const e=Jt();return e.innerHTML=t.trim(),G(En(e),n=>zt(n))},hn=t=>t.charAt(0).toUpperCase()+t.slice(1),$s=()=>Jt().style,Ss=["-webkit-","-moz-","-o-","-ms-"],js=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Qe={},tn={},Cs=t=>{let e=tn[t];if(Ne(tn,t))return e;const n=hn(t),o=$s();return G(Ss,s=>{const r=s.replace(/-/g,"");return!(e=[t,s+t,r+n,hn(r)+n].find(l=>o[l]!==void 0))}),tn[t]=e||""},ae=t=>{if(we()){let e=Qe[t]||window[t];return Ne(Qe,t)||(G(js,n=>(e=e||window[n+hn(t)],!e)),Qe[t]=e),e}},Es=ae("MutationObserver"),Bn=ae("IntersectionObserver"),ne=ae("ResizeObserver"),Eo=ae("cancelAnimationFrame"),ko=ae("requestAnimationFrame"),gn=ae("ScrollTimeline"),Me=we()&&window.setTimeout,xn=we()&&window.clearTimeout,ks=/[^\x20\t\r\n\f]+/g,To=(t,e,n)=>{const o=t&&t.classList;let s,r=0,c=!1;if(o&&e&&Nt(e)){const l=e.match(ks)||[];for(c=l.length>0;s=l[r++];)c=!!n(o,s)&&c}return c},Tn=(t,e)=>{To(t,e,(n,o)=>n.remove(o))},qt=(t,e)=>(To(t,e,(n,o)=>n.add(o)),Tn.bind(0,t,e)),Ue=(t,e,n,o)=>{if(t&&e){let s=!0;return G(n,r=>{const c=o?o(t[r]):t[r],l=o?o(e[r]):e[r];c!==l&&(s=!1)}),s}return!1},Oo=(t,e)=>Ue(t,e,["w","h"]),zo=(t,e)=>Ue(t,e,["x","y"]),Ts=(t,e)=>Ue(t,e,["t","r","b","l"]),Hn=(t,e,n)=>Ue(t,e,["width","height"],n&&(o=>Math.round(o))),bt=()=>{},Yt=t=>{let e;const n=t?Me:ko,o=t?xn:Eo;return[s=>{o(e),e=n(s,Ct(t)?t():t)},()=>o(e)]},On=(t,e)=>{let n,o,s,r=bt;const{g:c,v:l,p:i}=e||{},a=function(m){r(),xn(n),n=o=void 0,r=bt,t.apply(this,m)},u=g=>i&&o?i(o,g):g,h=()=>{r!==bt&&a(u(s)||s)},p=function(){const m=Zt(arguments),v=Ct(c)?c():c;if(_t(v)&&v>=0){const j=Ct(l)?l():l,d=_t(j)&&j>=0,x=v>0?Me:ko,S=v>0?xn:Eo,F=u(m)||m,H=a.bind(0,F);r();const T=x(H,v);r=()=>S(T),d&&!n&&(n=Me(h,j)),o=s=F}else a(m)};return p.m=h,p},Os={opacity:1,zIndex:1},Ee=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},zs=(t,e)=>!Os[t]&&_t(e)?`${e}px`:e,Fn=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),Rs=(t,e,n)=>{try{const{style:o}=t;Lt(o[e])?o.setProperty(e,n):o[e]=zs(e,n)}catch{}},ie=t=>at(t,"direction")==="rtl",_n=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,a=at(t,[r,c,l,i]);return{t:Ee(a[r],!0),r:Ee(a[c],!0),b:Ee(a[l],!0),l:Ee(a[i],!0)}},le=(t,e)=>`translate${yt(t)?`(${t[0]},${t[1]})`:`${e?"X":"Y"}(${t})`}`,{round:qn}=Math,zn={w:0,h:0},ye=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:zn,Pe=t=>t?{w:t.clientWidth,h:t.clientHeight}:zn,Le=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:zn,We=t=>{const e=parseFloat(at(t,"height"))||0,n=parseFloat(at(t,"width"))||0;return{w:n-qn(n),h:e-qn(e)}},Ot=t=>t.getBoundingClientRect(),oe=t=>!!(t&&(t.height||t.width));let ke;const Is=()=>{if(Lt(ke)){ke=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){ke=!0}}))}catch{}}return ke},Ro=t=>t.split(" "),Ps=(t,e,n,o)=>{G(Ro(e),s=>{t.removeEventListener(s,n,o)})},ct=(t,e,n,o)=>{var s;const r=Is(),c=(s=r&&o&&o.S)!=null?s:r,l=o&&o.$||!1,i=o&&o.C||!1,a=[],u=r?{passive:c,capture:l}:l;return G(Ro(e),h=>{const p=i?g=>{t.removeEventListener(h,p,l),n&&n(g)}:n;Z(a,Ps.bind(null,t,h,p,l)),t.addEventListener(h,p,u)}),Rt.bind(0,a)},Io=t=>t.stopPropagation(),Po=t=>t.preventDefault(),As={x:0,y:0},en=t=>{const e=t?Ot(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:As},Nn=(t,e)=>{G(yt(e)?e:[e],t)},Rn=t=>{const e=new Map,n=(r,c)=>{if(r){const l=e.get(r);Nn(i=>{l&&l[i?"delete":"clear"](i)},c)}else e.forEach(l=>{l.clear()}),e.clear()},o=(r,c)=>{if(Nt(r)){const a=e.get(r)||new Set;return e.set(r,a),Nn(u=>{Ct(u)&&a.add(u)},c),n.bind(0,r,c)}Sn(c)&&c&&n();const l=vt(r),i=[];return G(l,a=>{const u=r[a];u&&Z(i,o(a,u))}),Rt.bind(0,i)},s=(r,c)=>{const l=e.get(r);G(Zt(l),i=>{c&&!jn(c)?i.apply(0,c):i()})};return o(t||{}),[o,n,s]},Un=t=>JSON.stringify(t,(e,n)=>{if(Ct(n))throw new Error;return n}),Ms={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Ao=(t,e)=>{const n={},o=vt(e).concat(vt(t));return G(o,s=>{const r=t[s],c=e[s];if(be(r)&&be(c))st(n[s]={},Ao(r,c)),Cn(n[s])&&delete n[s];else if(Ne(e,s)&&c!==r){let l=!0;if(yt(r)||yt(c))try{Un(r)===Un(c)&&(l=!1)}catch{}l&&(n[s]=c)}}),n},$e="data-overlayscrollbars",Mo="os-environment",Lo=`${Mo}-flexbox-glue`,Ls=`${Lo}-max`,Wo="os-scrollbar-hidden",nn=`${$e}-initialize`,St=$e,Do=`${St}-overflow-x`,Bo=`${St}-overflow-y`,se="overflowVisible",Ws="scrollbarHidden",Vn="scrollbarPressed",De="updating",Ht=`${$e}-viewport`,on="arrange",Ho="scrollbarHidden",re=se,mn=`${$e}-padding`,Ds=re,Gn=`${$e}-content`,In="os-size-observer",Bs=`${In}-appear`,Hs=`${In}-listener`,Fs="os-trinsic-observer",_s="os-no-css-vars",qs="os-theme-none",gt="os-scrollbar",Ns=`${gt}-rtl`,Us=`${gt}-horizontal`,Vs=`${gt}-vertical`,Fo=`${gt}-track`,Pn=`${gt}-handle`,Gs=`${gt}-visible`,Ks=`${gt}-cornerless`,Kn=`${gt}-transitionless`,Yn=`${gt}-interaction`,Xn=`${gt}-unusable`,bn=`${gt}-auto-hide`,Jn=`${bn}-hidden`,Zn=`${gt}-wheel`,Ys=`${Fo}-interactive`,Xs=`${Pn}-interactive`,_o={},Qt=()=>_o,Js=t=>{const e=[];return G(yt(t)?t:[t],n=>{const o=vt(n);G(o,s=>{Z(e,_o[s]=n[s])})}),e},Zs="__osOptionsValidationPlugin",Qs="__osSizeObserverPlugin",An="__osScrollbarsHidingPlugin",tr="__osClickScrollPlugin";let sn;const Qn=(t,e,n,o)=>{wt(t,e);const s=Pe(e),r=ye(e),c=We(n);return o&&zt(e),{x:r.h-s.h+c.h,y:r.w-s.w+c.w}},er=t=>{let e=!1;const n=qt(t,Wo);try{e=at(t,Cs("scrollbar-width"))==="none"||window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},nr=(t,e)=>{const n="hidden";at(t,{overflowX:n,overflowY:n,direction:"rtl"}),jt(t,0);const o=en(t),s=en(e);jt(t,-999);const r=en(e);return{i:o.x===s.x,n:s.x!==r.x}},or=(t,e)=>{const n=qt(t,Lo),o=Ot(t),s=Ot(e),r=Hn(s,o,!0),c=qt(t,Ls),l=Ot(t),i=Ot(e),a=Hn(i,l,!0);return n(),c(),r&&a},sr=()=>{const{body:t}=document,n=Co(`<div class="${Mo}"><div></div></div>`)[0],o=n.firstChild,[s,,r]=Rn(),[c,l]=$t({o:Qn(t,n,o),u:zo},Qn.bind(0,t,n,o,!0)),[i]=l(),a=er(n),u={x:i.x===0,y:i.y===0},h={elements:{host:null,padding:!a,viewport:d=>a&&d===d.ownerDocument.body&&d,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=st({},Ms),g=st.bind(0,{},p),m=st.bind(0,{},h),v={k:i,I:u,A:a,H:at(n,"zIndex")==="-1",B:!!gn,V:nr(n,o),Y:or(n,o),j:s.bind(0,"z"),N:s.bind(0,"r"),q:m,F:d=>st(h,d)&&m(),G:g,X:d=>st(p,d)&&g(),U:st({},h),W:st({},p)},C=window.addEventListener,j=On(d=>r(d?"z":"r"),{g:33,v:99});if(ht(n,"style"),zt(n),C("resize",j.bind(0,!1)),!a&&(!u.x||!u.y)){let d;C("resize",()=>{const x=Qt()[An];d=d||x&&x.R(),d&&d(v,c,j.bind(0,!0))})}return v},xt=()=>(sn||(sn=sr()),sn),Mn=(t,e)=>Ct(e)?e.apply(0,t):e,rr=(t,e,n,o)=>{const s=Lt(o)?n:o;return Mn(t,s)||e.apply(0,t)},qo=(t,e,n,o)=>{const s=Lt(o)?n:o,r=Mn(t,s);return!!r&&(me(r)?r:e.apply(0,t))},cr=(t,e,n)=>{const{nativeScrollbarsOverlaid:o,body:s}=n||{},{I:r,A:c}=xt(),{nativeScrollbarsOverlaid:l,body:i}=e,a=o??l,u=Lt(s)?i:s,h=(r.x||r.y)&&a,p=t&&(He(u)?!c:u);return!!h||!!p},Ln=new WeakMap,ir=(t,e)=>{Ln.set(t,e)},lr=t=>{Ln.delete(t)},No=t=>Ln.get(t),to=(t,e)=>t?e.split(".").reduce((n,o)=>n&&Ne(n,o)?n[o]:void 0,t):void 0,yn=(t,e,n)=>o=>[to(t,o),n||to(e,o)!==void 0],Uo=t=>{let e=t;return[()=>e,n=>{e=st({},e,n)}]},Te="tabindex",Oe=Jt.bind(0,""),rn=t=>{wt(Mt(t),En(t)),zt(t)},ar=t=>{const e=xt(),{q:n,A:o}=e,s=Qt()[An],r=s&&s.T,{elements:c}=n(),{host:l,padding:i,viewport:a,content:u}=c,h=me(t),p=h?{}:t,{elements:g}=p,{host:m,padding:v,viewport:C,content:j}=g||{},d=h?t:p.target,x=Ae(d,"textarea"),S=d.ownerDocument,M=S.documentElement,F=d===S.body,H=S.defaultView,T=rr.bind(0,[d]),L=qo.bind(0,[d]),U=Mn.bind(0,[d]),K=T.bind(0,Oe,a),_=L.bind(0,Oe,u),w=K(C),E=w===d,b=E&&F,k=!E&&_(j),W=!E&&me(w)&&w===k,P=W&&!!U(u),O=P?K():w,B=P?k:_(),q=b?M:W?O:w,X=x?T(Oe,l,m):d,tt=b?q:X,$=W?B:k,y=S.activeElement,R=!E&&H.top===H&&y===d,A={Z:d,J:tt,K:q,tt:!E&&L(Oe,i,v),nt:$,ot:!E&&!o&&r&&r(e),st:b?M:q,et:b?S:q,ct:H,rt:S,lt:x,it:F,ut:h,ft:E,dt:W,_t:(it,pt)=>bs(q,E?St:Ht,E?pt:it),ht:(it,pt,ft)=>Xt(q,E?St:Ht,E?pt:it,ft)},N=vt(A).reduce((it,pt)=>{const ft=A[pt];return Z(it,ft&&me(ft)&&!Mt(ft)?ft:!1)},[]),V=it=>it?qe(N,it)>-1:null,{Z:nt,J:Q,tt:rt,K:J,nt:ot,ot:ut}=A,mt=[()=>{ht(Q,St),ht(Q,nn),ht(nt,nn),F&&(ht(M,St),ht(M,nn))}],Wt=x&&V(Q);let Ut=x?nt:En([ot,J,rt,Q,nt].find(it=>V(it)===!1));const Vt=b?nt:ot||J;return[A,()=>{dt(Q,St,E?"viewport":"host"),dt(rt,mn,""),dt(ot,Gn,""),E||dt(J,Ht,"");const it=F&&!E?qt(Mt(d),Wo):bt;if(Wt&&(Dn(nt,Q),Z(mt,()=>{Dn(Q,nt),zt(Q)})),wt(Vt,Ut),wt(Q,rt),wt(rt||Q,!E&&J),wt(J,ot),Z(mt,()=>{it(),ht(rt,mn),ht(ot,Gn),ht(J,Do),ht(J,Bo),ht(J,Ht),V(ot)&&rn(ot),V(J)&&rn(J),V(rt)&&rn(rt)}),o&&!E&&(Xt(J,Ht,Ho,!0),Z(mt,ht.bind(0,J,Ht))),ut&&(ws(J,ut),Z(mt,zt.bind(0,ut))),R){const pt=dt(J,Te);dt(J,Te,"-1"),J.focus();const ft=()=>pt?dt(J,Te,pt):ht(J,Te),Et=ct(S,"pointerdown keydown",()=>{ft(),Et()});Z(mt,[ft,Et])}else y&&y.focus&&y.focus();Ut=0},Rt.bind(0,mt)]},dr=(t,e)=>{const{nt:n}=t,[o]=e;return s=>{const{Y:r}=xt(),{gt:c}=o(),{vt:l}=s,i=(n||!r)&&l;return i&&at(n,{height:c?"":"100%"}),{wt:i,bt:i}}},ur=(t,e)=>{const[n,o]=e,{J:s,tt:r,K:c,ft:l}=t,[i,a]=$t({u:Ts,o:_n()},_n.bind(0,s,"padding",""));return(u,h,p)=>{let[g,m]=a(p);const{A:v,Y:C}=xt(),{yt:j}=n(),{wt:d,bt:x,St:S}=u,[M,F]=h("paddingAbsolute");(d||m||!C&&x)&&([g,m]=i(p));const T=!l&&(F||S||m);if(T){const L=!M||!r&&!v,U=g.r+g.l,K=g.t+g.b,_={marginRight:L&&!j?-U:0,marginBottom:L?-K:0,marginLeft:L&&j?-U:0,top:L?-g.t:0,right:L?j?-g.r:"auto":0,left:L?j?"auto":-g.l:0,width:L?`calc(100% + ${U}px)`:""},w={paddingTop:L?g.t:0,paddingRight:L?g.r:0,paddingBottom:L?g.b:0,paddingLeft:L?g.l:0};at(r||c,_),at(c,w),o({tt:g,$t:!L,P:r?w:st({},_,w)})}return{xt:T}}},{max:vn}=Math,Ft=vn.bind(0,0),Vo="visible",eo="hidden",pr=42,ze={u:Oo,o:{w:0,h:0}},fr={u:zo,o:{x:eo,y:eo}},hr=(t,e)=>{const n=window.devicePixelRatio%1!==0?1:0,o={w:Ft(t.w-e.w),h:Ft(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}},Re=t=>t.indexOf(Vo)===0,gr=(t,e)=>{const[n,o]=e,{J:s,tt:r,K:c,ot:l,ft:i,ht:a,it:u,ct:h}=t,{k:p,Y:g,A:m,I:v}=xt(),C=Qt()[An],j=!i&&!m&&(v.x||v.y),d=u&&i,[x,S]=$t(ze,We.bind(0,c)),[M,F]=$t(ze,Le.bind(0,c)),[H,T]=$t(ze),[L,U]=$t(ze),[K]=$t(fr),_=(P,O)=>{if(at(c,{height:""}),O){const{$t:B,tt:D}=n(),{Ct:q,M:X}=P,tt=We(s),$=Pe(s),y=at(c,"boxSizing")==="content-box",R=B||y?D.b+D.t:0,A=!(v.x&&y);at(c,{height:$.h+tt.h+(q.x&&A?X.x:0)-R})}},w=(P,O)=>{const B=!m&&!P?pr:0,D=(V,nt,Q)=>{const rt=at(c,V),ot=(O?O[V]:rt)==="scroll";return[rt,ot,ot&&!m?nt?B:Q:0,nt&&!!B]},[q,X,tt,$]=D("overflowX",v.x,p.x),[y,R,A,N]=D("overflowY",v.y,p.y);return{Ot:{x:q,y},Ct:{x:X,y:R},M:{x:tt,y:A},D:{x:$,y:N}}},E=(P,O,B,D)=>{const q=(R,A)=>{const N=Re(R),V=A&&N&&R.replace(`${Vo}-`,"")||"";return[A&&!N?R:"",Re(V)?"hidden":V]},[X,tt]=q(B.x,O.x),[$,y]=q(B.y,O.y);return D.overflowX=tt&&$?tt:X,D.overflowY=y&&X?y:$,w(P,D)},b=(P,O,B,D)=>{const{M:q,D:X}=P,{x:tt,y:$}=X,{x:y,y:R}=q,{P:A}=n(),N=O?"marginLeft":"marginRight",V=O?"paddingLeft":"paddingRight",nt=A[N],Q=A.marginBottom,rt=A[V],J=A.paddingBottom;D.width=`calc(100% + ${R+nt*-1}px)`,D[N]=-R+nt,D.marginBottom=-y+Q,B&&(D[V]=rt+($?R:0),D.paddingBottom=J+(tt?y:0))},[k,W]=C?C.L(j,g,c,l,n,w,b):[()=>j,()=>[bt]];return(P,O,B)=>{const{wt:D,Tt:q,bt:X,xt:tt,vt:$,St:y}=P,{gt:R,yt:A}=n(),[N,V]=O("showNativeOverlaidScrollbars"),[nt,Q]=O("overflow"),rt=N&&v.x&&v.y,J=!i&&!g&&(D||X||q||V||$),ot=Re(nt.x),ut=Re(nt.y),mt=ot||ut;let Wt=S(B),Ut=F(B),Vt=T(B),de=U(B),it;if(V&&m&&a(Ho,Ws,!rt),J&&(it=w(rt),_(it,R)),D||tt||X||y||V){mt&&a(re,se,!1);const[It,Dt]=W(rt,A,it),[Tt,Xe]=Wt=x(B),[Bt,Je]=Ut=M(B),te=Pe(c);let Gt=Bt,Kt=te;It(),(Je||Xe||V)&&Dt&&!rt&&k(Dt,Bt,Tt,A)&&(Kt=Pe(c),Gt=Le(c));const pe={w:Ft(vn(Bt.w,Gt.w)+Tt.w),h:Ft(vn(Bt.h,Gt.h)+Tt.h)},Wn={w:Ft((d?h.innerWidth:Kt.w+Ft(te.w-Bt.w))+Tt.w),h:Ft((d?h.innerHeight+Tt.h:Kt.h+Ft(te.h-Bt.h))+Tt.h)};de=L(Wn),Vt=H(hr(pe,Wn),B)}const[pt,ft]=de,[Et,Se]=Vt,[ue,Ve]=Ut,[je,Ge]=Wt,kt={x:Et.w>0,y:Et.h>0},Ce=ot&&ut&&(kt.x||kt.y)||ot&&kt.x&&!kt.y||ut&&kt.y&&!kt.x;if(tt||y||Ge||Ve||ft||Se||Q||V||J){const It={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},Dt=E(rt,kt,nt,It),Tt=k(Dt,ue,je,A);i||b(Dt,A,Tt,It),J&&_(Dt,R),i?(dt(s,Do,It.overflowX),dt(s,Bo,It.overflowY)):at(c,It)}Xt(s,St,se,Ce),Xt(r,mn,Ds,Ce),i||Xt(c,Ht,re,mt);const[Ke,Ye]=K(w(rt).Ot);return o({Ot:Ke,zt:{x:pt.w,y:pt.h},Et:{x:Et.w,y:Et.h},At:kt}),{It:Ye,Ht:ft,Lt:Se}}},no=(t,e,n)=>{const o={},s=e||{},r=vt(t).concat(vt(s));return G(r,c=>{const l=t[c],i=s[c];o[c]=!!(n||l||i)}),o},xr=(t,e)=>{const{Z:n,K:o,ht:s,ft:r}=t,{A:c,I:l,Y:i}=xt(),a=!c&&(l.x||l.y),u=[dr(t,e),ur(t,e),gr(t,e)];return(h,p,g)=>{const m=no(st({wt:!1,xt:!1,St:!1,vt:!1,Ht:!1,Lt:!1,It:!1,Tt:!1,bt:!1,Pt:!1},p),{},g),v=a||!i,C=v&&jt(o),j=v&&At(o);s("",De,!0);let d=m;return G(u,x=>{d=no(d,x(d,h,!!g)||{},g)}),jt(o,C),At(o,j),s("",De),r||(jt(n,0),At(n,0)),d}},mr=(t,e,n)=>{let o,s=!1;const r=()=>{s=!0},c=l=>{if(n){const i=n.reduce((a,u)=>{if(u){const[h,p]=u,g=p&&h&&(l?l(h):jo(h,t));g&&g.length&&p&&Nt(p)&&Z(a,[g,p.trim()],!0)}return a},[]);G(i,a=>G(a[0],u=>{const h=a[1],p=o.get(u)||[];if(t.contains(u)){const m=ct(u,h,v=>{s?(m(),o.delete(u)):e(v)});o.set(u,Z(p,m))}else Rt(p),o.delete(u)}))}};return n&&(o=new WeakMap,c()),[r,c]},oo=(t,e,n,o)=>{let s=!1;const{Mt:r,Dt:c,Rt:l,kt:i,Bt:a,Vt:u}=o||{},h=On(()=>s&&n(!0),{g:33,v:99}),[p,g]=mr(t,h,l),m=r||[],v=c||[],C=m.concat(v),j=(x,S)=>{const M=a||bt,F=u||bt,H=new Set,T=new Set;let L=!1,U=!1;if(G(x,K=>{const{attributeName:_,target:w,type:E,oldValue:b,addedNodes:k,removedNodes:W}=K,P=E==="attributes",O=E==="childList",B=t===w,D=P&&Nt(_)?dt(w,_):0,q=D!==0&&b!==D,X=qe(v,_)>-1&&q;if(e&&(O||!B)){const tt=!P,$=P&&q,y=$&&i&&Ae(w,i),A=(y?!M(w,_,b,D):tt||$)&&!F(K,!!y,t,o);G(k,N=>H.add(N)),G(W,N=>H.add(N)),U=U||A}!e&&B&&q&&!M(w,_,b,D)&&(T.add(_),L=L||X)}),H.size>0&&g(K=>Zt(H).reduce((_,w)=>(Z(_,jo(K,w)),Ae(w,K)?Z(_,w):_),[])),e)return!S&&U&&n(!1),[!1];if(T.size>0||L){const K=[Zt(T),L];return!S&&n.apply(0,K),K}},d=new Es(x=>j(x));return d.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:C,subtree:e,childList:e,characterData:e}),s=!0,[()=>{s&&(p(),d.disconnect(),s=!1)},()=>{if(s){h.m();const x=d.takeRecords();return!jn(x)&&j(x,!0)}}]},Ie=3333333,Go=(t,e,n)=>{const{Yt:o,Pt:s}=n||{},r=Qt()[Qs],{V:c}=xt(),i=Co(`<div class="${In}"><div class="${Hs}"></div></div>`)[0],a=i.firstChild,u=ie.bind(0,t),[h]=$t({o:!1,_:!0,u:(m,v)=>!(!m||!oe(m)&&oe(v))}),p=m=>{const v=yt(m)&&m.length>0&&be(m[0]),C=!v&&Sn(m[0]);let j=!1,d=!1,x=!0;if(v){const[S,,M]=h(m.pop().contentRect),F=oe(S),H=oe(M);j=!M&&!!H||!F,d=!H&&F,x=!j}else C?[,x]=m:d=m===!0;if(o&&x){const S=C?m[0]:ie(i);jt(i,S?c.n?-Ie:c.i?0:Ie:Ie),At(i,Ie)}j||e({wt:!C,jt:C?m:void 0,Pt:!!d})},g=[];return[()=>{Rt(g),zt(i)},()=>{let m=s&&p;if(ne){const v=new ne(p);v.observe(a),Z(g,()=>{v.disconnect()})}else if(r){const[v,C]=r.O(a,p,s);m=v,Z(g,C)}if(o){const[v]=$t({o:void 0},u);Z(g,ct(i,"scroll",C=>{const j=v(),[d,x,S]=j;x&&(Tn(a,"ltr rtl"),qt(a,d?"rtl":"ltr"),p([!!d,x,S])),Io(C)}))}m&&(qt(i,Bs),Z(g,ct(i,"animationstart",m,{C:!!ne}))),(ne||r)&&wt(t,i)}]},br=t=>t.h===0||t.isIntersecting||t.intersectionRatio>0,yr=(t,e)=>{let n;const o=Jt(Fs),s=[],[r]=$t({o:!1}),c=(i,a)=>{if(i){const u=r(br(i)),[,h]=u;return h&&!a&&e(u)&&[u]}},l=(i,a)=>i&&i.length>0&&c(i.pop(),a);return[()=>{Rt(s),zt(o)},()=>{if(Bn)n=new Bn(i=>l(i),{root:t}),n.observe(o),Z(s,()=>{n.disconnect()});else{const i=()=>{const h=ye(o);c(h)},[a,u]=Go(o,i);Z(s,a),u(),i()}wt(t,o)},()=>n&&l(n.takeRecords(),!0)]},so=`[${St}]`,vr=`[${Ht}]`,cn=["tabindex"],ro=["wrap","cols","rows"],ln=["id","class","style","open"],wr=(t,e,n)=>{let o,s,r;const{J:c,K:l,nt:i,lt:a,ft:u,_t:h,ht:p}=t,{Y:g}=xt(),[m]=$t({u:Oo,o:{w:0,h:0}},()=>{const b=h(re,se),k=h(on,""),W=k&&jt(l),P=k&&At(l);p(re,se),p(on,""),p("",De,!0);const O=Le(i),B=Le(l),D=We(l);return p(re,se,b),p(on,"",k),p("",De),jt(l,W),At(l,P),{w:B.w+O.w+D.w,h:B.h+O.h+D.h}}),v=a?ro:ln.concat(ro),C=On(n,{g:()=>o,v:()=>s,p(b,k){const[W]=b,[P]=k;return[vt(W).concat(vt(P)).reduce((O,B)=>(O[B]=W[B]||P[B],O),{})]}}),j=b=>{G(b||cn,k=>{if(qe(cn,k)>-1){const W=dt(c,k);Nt(W)?dt(l,k,W):ht(l,k)}})},d=(b,k)=>{const[W,P]=b,O={vt:P};return e({gt:W}),!k&&n(O),O},x=({wt:b,jt:k,Pt:W})=>{const P=!b||W?n:C;let O=!1;if(k){const[B,D]=k;O=D,e({yt:B})}P({wt:b,Pt:W,St:O})},S=(b,k)=>{const[,W]=m(),P={bt:W};return W&&!k&&(b?n:C)(P),P},M=(b,k,W)=>{const P={Tt:k};return k?!W&&C(P):u||j(b),P},[F,H,T]=i||!g?yr(c,d):[bt,bt,bt],[L,U]=u?[bt,bt]:Go(c,x,{Pt:!0,Yt:!0}),[K,_]=oo(c,!1,M,{Dt:ln,Mt:ln.concat(cn)});let w;const E=u&&ne&&new ne(b=>{const k=b[b.length-1].contentRect,W=oe(k),O=!oe(w)&&W;x({wt:!0,Pt:O}),w=k});return[()=>{F(),L(),r&&r[0](),E&&E.disconnect(),K()},()=>{E&&E.observe(c),j(),U(),H()},()=>{const b={},k=_(),W=T(),P=r&&r[1]();return k&&st(b,M.apply(0,Z(k,!0))),W&&st(b,d.apply(0,Z(W,!0))),P&&st(b,S.apply(0,Z(P,!0))),b},b=>{const[k]=b("update.ignoreMutation"),[W,P]=b("update.attributes"),[O,B]=b("update.elementEvents"),[D,q]=b("update.debounce"),X=B||P,tt=$=>Ct(k)&&k($);if(X&&(r&&(r[1](),r[0]()),r=oo(i||l,!0,S,{Mt:v.concat(W||[]),Rt:O,kt:so,Vt:($,y)=>{const{target:R,attributeName:A}=$;return(!y&&A&&!u?vs(R,so,vr):!1)||!!ee(R,`.${gt}`)||!!tt($)}})),q)if(C.m(),yt(D)){const $=D[0],y=D[1];o=_t($)&&$,s=_t(y)&&y}else _t(D)?(o=D,s=!1):(o=!1,s=!1)}]},co={x:0,y:0},$r=t=>({tt:{t:0,r:0,b:0,l:0},$t:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:co,Et:co,Ot:{x:"hidden",y:"hidden"},At:{x:!1,y:!1},gt:!1,yt:ie(t.J)}),Sr=(t,e)=>{const n=yn(e,{}),[o,s,r]=Rn(),[c,l,i]=ar(t),a=Uo($r(c)),[u,h]=a,p=xr(c,a),g=(x,S,M)=>{const H=vt(x).some(T=>!!x[T])||!Cn(S)||M;return H&&r("u",[x,S,M]),H},[m,v,C,j]=wr(c,h,x=>g(p(n,x),{},!1)),d=u.bind(0);return d.Nt=x=>o("u",x),d.qt=()=>{const{Z:x,K:S,rt:M,it:F}=c,H=F?M.documentElement:x,T=jt(H),L=At(H);v(),l(),jt(S,T),At(S,L)},d.Ft=c,[(x,S)=>{const M=yn(e,x,S);return j(M),g(p(M,C(),S),x,!!S)},d,()=>{s(),m(),i()}]},{round:io}=Math,jr=t=>{const{width:e,height:n}=Ot(t),{w:o,h:s}=ye(t);return{x:io(e)/o||1,y:io(n)/s||1}},Cr=(t,e,n)=>{const o=e.scrollbars,{button:s,isPrimary:r,pointerType:c}=t,{pointers:l}=o;return s===0&&r&&o[n?"dragScroll":"clickScroll"]&&(l||[]).includes(c)},lo="pointerup pointerleave pointercancel lostpointercapture",Er=(t,e)=>ct(t,"mousedown",ct.bind(0,e,"click",Io,{C:!0,$:!0}),{$:!0}),kr=(t,e,n,o,s,r,c)=>{const{V:l}=xt(),{Gt:i,Xt:a,Ut:u}=o,h=`scroll${c?"Left":"Top"}`,p=`client${c?"X":"Y"}`,g=c?"width":"height",m=c?"left":"top",v=c?"w":"h",C=c?"x":"y",j=(d,x)=>S=>{const{Et:M}=r(),F=ye(a)[v]-ye(i)[v],T=x*S/F*M[C],U=ie(u)&&c?l.n||l.i?1:-1:1;s[h]=d+T*U};return ct(a,"pointerdown",d=>{const x=ee(d.target,`.${Pn}`)===i,S=x?i:a;if(Xt(e,St,Vn,!0),Cr(d,t,x)){const M=!x&&d.shiftKey,F=()=>Ot(i),H=()=>Ot(a),T=(O,B)=>(O||F())[m]-(B||H())[m],L=j(s[h]||0,1/jr(s)[C]),U=d[p],K=F(),_=H(),w=K[g],E=T(K,_)+w/2,b=U-_[m],k=x?0:b-E,W=O=>{Rt(P),S.releasePointerCapture(O.pointerId)},P=[Xt.bind(0,e,St,Vn),ct(n,lo,W),ct(n,"selectstart",O=>Po(O),{S:!1}),ct(a,lo,W),ct(a,"pointermove",O=>{const B=O[p]-U;(x||M)&&L(k+B)})];if(M)L(k);else if(!x){const O=Qt()[tr];O&&Z(P,O.O(L,T,k,w,b))}S.setPointerCapture(d.pointerId)}})},Tr=(t,e)=>(n,o,s,r,c,l,i)=>{const{Ut:a}=n,[u,h]=Yt(333),p=!!c.scrollBy;let g=!0;return Rt.bind(0,[ct(a,"pointerenter",()=>{o(Yn,!0)}),ct(a,"pointerleave pointercancel",()=>{o(Yn)}),ct(a,"wheel",m=>{const{deltaX:v,deltaY:C,deltaMode:j}=m;p&&g&&j===0&&Mt(a)===r&&c.scrollBy({left:v,top:C,behavior:"smooth"}),g=!1,o(Zn,!0),u(()=>{g=!0,o(Zn)}),Po(m)},{S:!1,$:!0}),Er(a,s),kr(t,r,s,n,c,e,i),h])},{min:Be,max:wn,round:Or}=Math,Ko=(t,e,n,o)=>{if(o){const l=n?"x":"y",{Et:i,zt:a}=o,u=a[l],h=i[l];return wn(0,Be(1,u/(u+h)))}const s=n?"width":"height",r=Ot(t)[s],c=Ot(e)[s];return wn(0,Be(1,r/c))},zr=(t,e,n,o,s,r)=>{const{V:c}=xt(),l=r?"x":"y",i=r?"Left":"Top",{Et:a}=o,u=Or(a[l]),h=Be(u,wn(0,n[`scroll${i}`])),p=r&&s,g=c.i?h:u-h,v=Be(1,(p?g:h)/u),C=Ko(t,e,r);return 1/C*(1-C)*v},Yo=(t,e,n,o)=>e&&t.animate(n,{timeline:e,composite:o}),Rr=(t,e)=>({transform:[le("0%",e),le(e&&t?"100%":"-100%",e)],[e?t?"right":"left":"top"]:["0%","100%"]}),Ir=t=>`${Math.max(0,t-.5)}px`,ao=(t,e,n,o)=>Yo(t,e,{transform:[le("0px",o),le(Ir(n),o)]},"add"),uo=(t,e)=>gn?new gn({source:t,axis:e}):null,Pr=(t,e,n)=>{const{q:o,H:s}=xt(),{scrollbars:r}=o(),{slot:c}=r,{rt:l,Z:i,J:a,K:u,ut:h,st:p,it:g,ft:m}=e,{scrollbars:v}=h?{}:t,{slot:C}=v||{},j=new Map,d=uo(p,"x"),x=uo(p,"y"),S=qo([i,a,u],()=>m&&g?i:a,c,C),M=$=>m&&!g&&Mt($)===u,F=$=>{j.forEach((y,R)=>{($?qe(yt($)?$:[$],R)>-1:!0)&&((y||[]).forEach(N=>{N&&N.cancel()}),j.delete(R))})},H=($,y,R)=>{const A=R?qt:Tn;G($,N=>{A(N.Ut,y)})},T=($,y)=>{G($,R=>{const[A,N]=y(R);at(A,N)})},L=($,y,R)=>{T($,A=>{const{Gt:N,Xt:V}=A;return[N,{[R?"width":"height"]:`${(Ko(N,V,R,y)*100).toFixed(3)}%`}]})},U=($,y,R)=>{!x&&!x&&T($,A=>{const{Gt:N,Xt:V,Ut:nt}=A,Q=zr(N,V,p,y,ie(nt),R);return[N,{transform:Q===Q?le(`${(Q*100).toFixed(3)}%`,R):""}]})},K=$=>{const{Ut:y}=$,R=M(y)&&y;return[R,{transform:R?le([`${jt(p)}px`,`${At(p)}px`]):""}]},_=[],w=[],E=[],b=($,y,R)=>{const A=Sn(R),N=A?R:!0,V=A?!R:!0;N&&H(w,$,y),V&&H(E,$,y)},k=$=>{L(w,$,!0),L(E,$)},W=$=>{U(w,$,!0),U(E,$)},P=()=>{const $=(y,{Ut:R,Gt:A})=>{F(A),j.set(A,[Yo(A,y?d:x,Rr(y&&ie(R),y))])};w.forEach($.bind(0,!0)),E.forEach($.bind(0,!1))},O=()=>{!x&&!x&&(m&&T(w,K),m&&T(E,K))},B=({Et:$})=>{E.concat(w).forEach(({Ut:y})=>{F(y),M(y)&&j.set(y,[ao(y,d,$.x,!0),ao(y,x,$.y)])})},D=$=>{const y=$?Us:Vs,R=$?w:E,A=jn(R)?Kn:"",N=Jt(`${gt} ${y} ${A}`),V=Jt(Fo),nt=Jt(Pn),Q={Ut:N,Xt:V,Gt:nt};return s||qt(N,_s),wt(N,V),wt(V,nt),Z(R,Q),Z(_,[zt.bind(0,N),F,n(Q,b,l,a,p,$?d:x,$)]),Q},q=D.bind(0,!0),X=D.bind(0,!1),tt=()=>{wt(S,w[0].Ut),wt(S,E[0].Ut),Me(()=>{b(Kn)},300)};return q(),X(),[{Wt:k,Zt:W,Jt:P,Kt:B,Qt:O,tn:b,nn:{B:d,sn:w,en:q,cn:T.bind(0,w)},rn:{B:x,sn:E,en:X,cn:T.bind(0,E)}},tt,Rt.bind(0,_)]},an=t=>t.pointerType==="mouse",Ar=(t,e,n,o)=>{let s,r,c,l,i,a=bt,u=0;const h=Uo({}),[p]=h,[g,m]=Yt(),[v,C]=Yt(),[j,d]=Yt(100),[x,S]=Yt(100),[M,F]=Yt(100),[H,T]=Yt(()=>u),[L,U,K]=Pr(t,n.Ft,Tr(e,n)),{J:_,et:w,it:E}=n.Ft,{tn:b,Wt:k,Zt:W,Jt:P,Kt:O,Qt:B}=L,D=y=>{b(bn,y,!0),b(bn,y,!1)},q=(y,R)=>{if(T(),y)b(Jn);else{const A=()=>b(Jn,!0);u>0&&!R?H(A):A()}},X=y=>{an(y)&&(l=r,l&&q(!0))},tt=[d,T,S,F,C,m,K,ct(_,"pointerover",X,{C:!0}),ct(_,"pointerenter",X),ct(_,"pointerleave",y=>{an(y)&&(l=!1,r&&q(!1))}),ct(_,"pointermove",y=>{an(y)&&s&&g(()=>{d(),q(!0),x(()=>{s&&q(!1)})})}),ct(w,"scroll",y=>{v(()=>{W(n()),c&&q(!0),j(()=>{c&&!l&&q(!1)})}),o(y),B()})],$=p.bind(0);return $.Ft=L,$.qt=U,[(y,R,A)=>{const{Ht:N,Lt:V,It:nt,St:Q,Pt:rt}=A,{I:J}=xt(),ot=yn(e,y,R),ut=n(),{Et:mt,Ot:Wt,yt:Ut,At:Vt}=ut,[de,it]=ot("showNativeOverlaidScrollbars"),[pt,ft]=ot("scrollbars.theme"),[Et,Se]=ot("scrollbars.visibility"),[ue,Ve]=ot("scrollbars.autoHide"),[je,Ge]=ot("scrollbars.autoHideSuspend"),[kt]=ot("scrollbars.autoHideDelay"),[Ce,Ke]=ot("scrollbars.dragScroll"),[Ye,It]=ot("scrollbars.clickScroll"),Dt=rt&&!R,Tt=Vt.x||Vt.y,Xe=N||V||Q,Bt=nt||Se,Je=de&&J.x&&J.y,te=(Gt,Kt)=>{const pe=Et==="visible"||Et==="auto"&&Gt==="scroll";return b(Gs,pe,Kt),pe};if(u=kt,Dt&&(je&&Tt?(D(!1),a(),M(()=>{a=ct(w,"scroll",D.bind(0,!0),{C:!0})})):D(!0)),it&&b(qs,Je),ft&&(b(i),b(pt,!0),i=pt),Ge&&!je&&D(!0),Ve&&(s=ue==="move",r=ue==="leave",c=ue!=="never",q(!c,!0)),Ke&&b(Xs,Ce),It&&b(Ys,Ye),Bt){const Gt=te(Wt.x,!0),Kt=te(Wt.y,!1);b(Ks,!(Gt&&Kt))}Xe&&(k(ut),W(ut),P(ut),O(ut),B(),b(Xn,!mt.x,!0),b(Xn,!mt.y,!1),b(Ns,Ut&&!E))},$,()=>{Rt(tt),a()}]},Xo=(t,e,n)=>{Ct(t)&&t(e||void 0,n||void 0)},ve=(t,e,n)=>{const{G:o,q:s,j:r,N:c}=xt(),l=Qt(),i=me(t),a=i?t:t.target,u=No(a);if(e&&!u){let h=!1;const p=w=>{const E=Qt()[Zs],b=E&&E.O;return b?b(w,!0):w},g=st({},o(),p(e)),[m,v,C]=Rn(n),[j,d,x]=Sr(t,g),[S,M,F]=Ar(t,g,d,w=>C("scroll",[_,w])),H=(w,E)=>j(w,!!E),T=H.bind(0,{},!0),L=r(T),U=c(T),K=w=>{lr(a),L(),U(),F(),x(),h=!0,C("destroyed",[_,!!w]),v()},_={options(w,E){if(w){const b=E?o():{},k=Ao(g,st(b,p(w)));Cn(k)||(st(g,k),H(k))}return st({},g)},on:m,off:(w,E)=>{w&&E&&v(w,E)},state(){const{zt:w,Et:E,Ot:b,At:k,tt:W,$t:P,yt:O}=d();return st({},{overflowEdge:w,overflowAmount:E,overflowStyle:b,hasOverflow:k,padding:W,paddingAbsolute:P,directionRTL:O,destroyed:h})},elements(){const{Z:w,J:E,tt:b,K:k,nt:W,st:P,et:O}=d.Ft,{nn:B,rn:D}=M.Ft,q=tt=>{const{Gt:$,Xt:y,Ut:R}=tt;return{scrollbar:R,track:y,handle:$}},X=tt=>{const{sn:$,en:y}=tt,R=q($[0]);return st({},R,{clone:()=>{const A=q(y());return S({},!0,{}),A}})};return st({},{target:w,host:E,padding:b||k,viewport:k,content:W||k,scrollOffsetElement:P,scrollEventElement:O,scrollbarHorizontal:X(B),scrollbarVertical:X(D)})},update:w=>H({},w),destroy:K.bind(0)};return d.Nt((w,E,b)=>{S(E,b,w)}),ir(a,_),G(vt(l),w=>Xo(l[w],0,_)),cr(d.Ft.it,s().cancel,!i&&t.cancel)?(K(!0),_):(d.qt(),M.qt(),C("initialized",[_]),d.Nt((w,E,b)=>{const{wt:k,St:W,vt:P,Ht:O,Lt:B,It:D,bt:q,Tt:X}=w;C("updated",[_,{updateHints:{sizeChanged:k,directionChanged:W,heightIntrinsicChanged:P,overflowEdgeChanged:O,overflowAmountChanged:B,overflowStyleChanged:D,contentMutation:q,hostMutation:X},changedOptions:E,force:b}])}),_.update(!0),_)}return u};ve.plugin=t=>{G(Js(t),e=>Xo(e,ve))};ve.valid=t=>{const e=t&&t.elements,n=Ct(e)&&e();return pn(n)&&!!No(n.target)};ve.env=()=>{const{k:t,I:e,A:n,V:o,Y:s,H:r,B:c,U:l,W:i,q:a,F:u,G:h,X:p}=xt();return st({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:r,scrollTimeline:c,staticDefaultInitialization:l,staticDefaultOptions:i,getDefaultInitialization:a,setDefaultInitialization:u,getDefaultOptions:h,setDefaultOptions:p})};const Mr={scrollbars:{visibility:"auto",autoHide:"never"}},Lr=(t,e)=>{Y.useEffect(()=>{let n;return t.current&&e&&(n=ve(t.current,Mr)),()=>{n&&n.destroy()}},[t,e])},Wr=I.div`
  width: ${({width:t})=>(t==null?void 0:t.mob)+"px"||"100%"};
  ${et.tablet} {
    width: ${({width:t})=>(t==null?void 0:t.nab)+"px"||"100%"};
    height: 660px;
  }
  ${et.desktop} {
    width: ${({width:t})=>(t==null?void 0:t.dt)+"px"||"100%"};
    height: 487px;
  }

`;function Dr({children:t,width:e}){const{isMobile:n}=gs(),o=Y.useRef(null);return Lr(o,!n),f.jsx(Wr,{width:e,ref:o,children:t})}Dr.propTypes={width:lt.object};const Br=I.li`
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
  border: 1px solid ${z.textWhite02};
  background: ${z.textWhite005};

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
`,Hr=I.div`
  display: flex;
  align-items: flex-start;
`,Fr=I.p`
  display: inline-flex;
  width: auto;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  padding: 0 7.5px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${z.textWhite005};
  border-radius: 4px;
  color: #fff;
`,_r=I.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${z.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${t=>t.reccomend?"#419b09":"#E9101D"};
    margin-right: 8px;
  }
`,qr=I.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;
  cursor: pointer;

  color: ${z.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${z.orangeSecondary};

    svg {
      stroke: ${z.orangeSecondary};
    }
  }

  ${et.tablet} {
    font-size: 16px;
  }
`,Nr=I.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${z.orange};

  transition: stroke 250ms ease-in-out;
`,Ur=I.div`
  display: inline-flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${z.white};

  ${et.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 21px;
  }
`,Vr=I.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`,Gr=I.svg`
  width: 16px;
  height: 16px;

  fill: ${z.white};
`,Kr=I.div`
  display: inline-block;
  align-items: center;
  margin-top: 8px;

  ${et.tablet} {
    margin-top: 12px;
  }
`,dn=I.div`
  display: inline-flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${z.textWhite04};

  &:last-child {
    margin-right: 0;
  }
`,un=I.p`
  margin-left: 4px;

  color: ${z.white};
`,Yr=I.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${z.backdrop};
`,Xr=I.div`
  border: 1px solid ${z.textWhite02};
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 335px;
  padding: 48px 20px;
  border-radius: 8px;
  background-color: ${z.modalBlack};
  z-index: 1;

  ${et.tablet} {
    width: ${t=>t.width}px;
    padding: 48px 32px;
  }
`,Jr=I.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  ${os}

  &:hover svg {
    stroke: ${z.orange};
    scale: 1.1;
  }
  &:focus svg {
    stroke: ${z.orange};
    scale: 1.1;
  }
`,Zr=I.svg`
  width: 24px;
  height: 24px;
  stroke: ${z.textWhite04};
  scale: 1;

  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 200ms cubic-bezier(0.4, 0, 0.2, 1);
`,Qr=document.querySelector("#modal-root"),po=({children:t,openModal:e,width:n})=>{Y.useEffect(()=>{const s=r=>{r.code==="Escape"&&e()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[e]);const o=s=>{s.currentTarget===s.target&&e()};return ss.createPortal(f.jsx(Yr,{onClick:o,children:f.jsxs(Xr,{width:n,children:[f.jsx(Jr,{type:"button",onClick:()=>e(),children:f.jsx(Zr,{children:f.jsx("use",{href:ce+"#close"})})}),t]})}),Qr)};I.div`
  background-color: ${z.modalBlack};
  border-radius: 12px;
  padding: 48px 24px;
  ${et.tablet} {
    padding: 48px 32px;
  }
`;const tc=I.div`
  position: relative;

  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${et.tablet} {
    flex-direction: row;
  }
`,ec=I.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${z.orange};
  gap: 10px;
  background-color: inherit;
  color: ${z.textWhite03};

  ${et.tablet} {
    width: 244px;
    height: 40px;
  }
`,nc=I.input`
  position: relative;
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${z.orange};
  gap: 10px;
  background-color: inherit;
  color: ${z.white};

  &::placeholder {
    color: ${z.textWhite03};
    text-align: right;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* &[type='number'] {
    -moz-appearance: textfield;
  } */

  ${et.tablet} {
    width: 155px;
    height: 40px;
    margin-top: 0;
  }

  :focus-visible {
	outline: 0;
    border: 2px solid ${z.orange};
  }

  &:focus + label {
    top: -10px;
  }
`,oc=I.label`
  position: absolute;
  top: 10px;
  right: 18px;
  font-size: 14px;
  padding: 0 12px;
  background-color: ${z.modalBlack};
  color: ${z.textWhite03};

  transition: top 200ms cubic-bezier(0.4, 0, 0.2, 1);
`,sc=I.div`
  position: relative;
`,rc=I.p`
  font-size: 12px;
  align-items: end;
  color: ${z.white};
`,cc=I.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: ${z.textWhite04};
`,ic=I.div`
  display: flex;
  margin-top: 24px;
  ${et.tablet} {
    margin-top: 64px;
  }
`,Jo=I.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: ${z.orange};
  color: ${z.white};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid ${z.textWhite03};
  margin-right: 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${z.orangeSecondary};
  }

  ${et.tablet} {
    margin-right: 16px;
  }

  &:disabled {
    color: ${z.textWhite06};
    background: ${z.orangeSecondary};

    cursor: not-allowed;
  }
`,lc=I.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: inherit;
  color: ${z.white};
  border-radius: 12px;
  border: 1px solid ${z.textWhite03};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  ${et.tablet} {
    padding: 12px 40px;
  }

  &:hover {
    border-color: ${z.orange};
    transition: border-color 0.3s ease-out;
  }
`;function Zo({data:t,closeModal:e,addProduct:n}){const[o,s]=Y.useState(""),r=Math.round(o*t.calories/100),c=vo(new Date);return f.jsxs("form",{children:[f.jsxs(tc,{children:[f.jsx("label",{children:f.jsx(ec,{type:"text",value:t.title,disabled:!0})}),f.jsxs(sc,{children:[f.jsx(nc,{id:"grams",type:"number",value:o,onChange:l=>s(l.target.value)}),f.jsx(oc,{htmlFor:"grams",children:"grams "})]})]}),f.jsxs(rc,{children:[f.jsx(cc,{children:"Calories:"})," ",r]}),f.jsxs(ic,{children:[f.jsx(Jo,{disabled:!(o>0),type:"button",onClick:()=>n({id:t.id,date:c,amount:o,calories:r}),children:"Add to diary"}),f.jsx(lc,{type:"button",onClick:e,children:"Cancel"})]})]})}Zo.propTypes={data:lt.object,closeModal:lt.func,addProduct:lt.func};var fo=typeof window>"u"?Y.useEffect:Y.useLayoutEffect,ac=({isPlaying:t,duration:e,startAt:n=0,updateInterval:o=0,onComplete:s,onUpdate:r})=>{let[c,l]=Y.useState(n),i=Y.useRef(0),a=Y.useRef(n),u=Y.useRef(n*-1e3),h=Y.useRef(null),p=Y.useRef(null),g=Y.useRef(null),m=j=>{let d=j/1e3;if(p.current===null){p.current=d,h.current=requestAnimationFrame(m);return}let x=d-p.current,S=i.current+x;p.current=d,i.current=S;let M=a.current+(o===0?S:(S/o|0)*o),F=a.current+S,H=typeof e=="number"&&F>=e;l(H?e:M),H||(h.current=requestAnimationFrame(m))},v=()=>{h.current&&cancelAnimationFrame(h.current),g.current&&clearTimeout(g.current),p.current=null},C=Y.useCallback(j=>{v(),i.current=0;let d=typeof j=="number"?j:n;a.current=d,l(d),t&&(h.current=requestAnimationFrame(m))},[t,n]);return fo(()=>{if(r==null||r(c),e&&c>=e){u.current+=e*1e3;let{shouldRepeat:j=!1,delay:d=0,newStartAt:x}=(s==null?void 0:s(u.current/1e3))||{};j&&(g.current=setTimeout(()=>C(x),d*1e3))}},[c,e]),fo(()=>(t&&(h.current=requestAnimationFrame(m)),v),[t,e,o]),{elapsedTime:c,reset:C}},dc=(t,e,n)=>{let o=t/2,s=e/2,r=o-s,c=2*r,l=n==="clockwise"?"1,0":"0,1",i=2*Math.PI*r;return{path:`m ${o},${s} a ${r},${r} 0 ${l} 0,${c} a ${r},${r} 0 ${l} 0,-${c}`,pathLength:i}},ho=(t,e)=>t===0||t===e?0:typeof e=="number"?t-e:0,uc=t=>({position:"relative",width:t,height:t}),pc={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},Qo=(t,e,n,o,s)=>{if(o===0)return e;let r=(s?o-t:t)/o;return e+n*r},go=t=>{var e,n;return(n=(e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,s,r,c)=>`#${s}${s}${r}${r}${c}${c}`).substring(1).match(/.{2}/g))==null?void 0:e.map(o=>parseInt(o,16)))!=null?n:[]},fc=(t,e)=>{var n;let{colors:o,colorsTime:s,isSmoothColorTransition:r=!0}=t;if(typeof o=="string")return o;let c=(n=s==null?void 0:s.findIndex((p,g)=>p>=e&&e>=s[g+1]))!=null?n:-1;if(!s||c===-1)return o[0];if(!r)return o[c];let l=s[c]-e,i=s[c]-s[c+1],a=go(o[c]),u=go(o[c+1]),h=!!t.isGrowing;return`rgb(${a.map((p,g)=>Qo(l,p,u[g]-p,i,h)|0).join(",")})`},hc=t=>{let{duration:e,initialRemainingTime:n,updateInterval:o,size:s=180,strokeWidth:r=12,trailStrokeWidth:c,isPlaying:l=!1,isGrowing:i=!1,rotation:a="clockwise",onComplete:u,onUpdate:h}=t,p=Y.useRef(),g=Math.max(r,c??0),{path:m,pathLength:v}=dc(s,g,a),{elapsedTime:C}=ac({isPlaying:l,duration:e,startAt:ho(e,n),updateInterval:o,onUpdate:typeof h=="function"?d=>{let x=Math.ceil(e-d);x!==p.current&&(p.current=x,h(x))}:void 0,onComplete:typeof u=="function"?d=>{var x;let{shouldRepeat:S,delay:M,newInitialRemainingTime:F}=(x=u(d))!=null?x:{};if(S)return{shouldRepeat:S,delay:M,newStartAt:ho(e,F)}}:void 0}),j=e-C;return{elapsedTime:C,path:m,pathLength:v,remainingTime:Math.ceil(j),rotation:a,size:s,stroke:fc(t,j),strokeDashoffset:Qo(C,0,v,e,i),strokeWidth:r}},ts=t=>{let{children:e,strokeLinecap:n,trailColor:o,trailStrokeWidth:s}=t,{path:r,pathLength:c,stroke:l,strokeDashoffset:i,remainingTime:a,elapsedTime:u,size:h,strokeWidth:p}=hc(t);return fe.createElement("div",{style:uc(h)},fe.createElement("svg",{viewBox:`0 0 ${h} ${h}`,width:h,height:h,xmlns:"http://www.w3.org/2000/svg"},fe.createElement("path",{d:r,fill:"none",stroke:o??"#d9d9d9",strokeWidth:s??p}),fe.createElement("path",{d:r,fill:"none",stroke:l,strokeLinecap:n??"round",strokeWidth:p,strokeDasharray:c,strokeDashoffset:i})),typeof e=="function"&&fe.createElement("div",{style:pc},e({remainingTime:a,elapsedTime:u,color:l})))};ts.displayName="CountdownCircleTimer";const xo=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,gc=I.div`
  margin-bottom: 4px;
  font-size: 10px;
  line-height: 140%;
  color: ${z.textWhite04};
`,mo=I.button`
  margin-bottom: 8px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;

  &:hover svg {
    scale: 1.15;
  }

`,bo=I.svg`
  width: 32px;
  height: 32px;
  fill: ${z.orange};
  stroke: ${z.white};

  scale: 1;

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,xc=I.div`
  font-size: 14px;
  line-height: 128%;
  color: ${z.textWhite03};
`,mc=I.span`
  margin-left: 8px;
  color: ${z.orange};
`;function es({writeTime:t,isPlaying:e,calory:n,startExercise:o,stopExercise:s}){return f.jsxs(f.Fragment,{children:[f.jsxs(xo,{children:[f.jsx(gc,{children:"Timer"}),f.jsx(ts,{size:124,duration:180,colors:"#E6533C",strokeWidth:4,trailColor:"#EFEDE81A",isPlaying:e,children:t})]}),f.jsxs(xo,{children:[e?f.jsx(mo,{type:"button",onClick:s,children:f.jsx(bo,{children:f.jsx("use",{href:ce+"#pause"})})}):f.jsx(mo,{type:"button",onClick:o,children:f.jsx(bo,{children:f.jsx("use",{href:ce+"#play"})})}),f.jsxs(xc,{children:["Burned calories:",f.jsx(mc,{children:n})]})]})]})}es.propTypes={calory:lt.number.isRequired,writeTime:lt.func.isRequired,startExercise:lt.func.isRequired,stopExercise:lt.func.isRequired,isPlaying:lt.bool.isRequired};const bc=I.div`
  position: relative;
  z-index: 100;
  width: 335px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border: transparent;

  background-color: ${z.modalBackground};
  ${et.tablet} {
    width: 694px;
    display: flex;
    gap: 15px;
  }
`,yc=I.div`
  width: 270px;
  height: 226px;
  overflow: hidden;
  border: 1px solid ${z.textWhite02};
  border-radius: 12px;
`,vc=I.img`
  width: 270px;
  height: 226px;
`,wc=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
  ${et.tablet} {
    margin-bottom: 0;
  }
`,$c=I.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  ${et.tablet} {
    height: 226px;
  }
`,he=I.div`
  flex-basis: calc((100% - 8px) / 2);

  min-height: 62px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${z.textWhite02};
  background-color: ${z.textWhite005};
  ${et.tablet} {
    min-height: 68px;
  }
`,ge=I.div`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 133%;
  color: ${z.textWhite04};
`,xe=I.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 128.571%;
  color: ${z.white};
  ${et.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`,Sc=I.div`
  ${et.tablet} {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }
`,jc=I.span`
  font-size: 16px;
  line-height: 150%;
  color: ${z.white};
`;function ns({data:t,addExercise:e}){const{_id:n,burnedCalories:o,name:s,bodyPart:r,gifUrl:c,target:l,equipment:i,time:a}=t,[u,h]=Y.useState(0),[p,g]=Y.useState(0),[m,v]=Y.useState(!1),[C,j]=Y.useState(null),d=(T,L,U)=>{const K=Math.floor(U*T/(L*60));h(K)};Y.useEffect(()=>{d(o,a,p)},[o,a,p]);const x=()=>{g(T=>T+1)},S=()=>{const T=setInterval(x,1e3);j(T),v(!0)},M=()=>{v(!1),clearInterval(C),j(null)},F=vo(new Date),H=({remainingTime:T})=>{const L=Math.floor(T/60).toString().length>1?Math.floor(T/60):"0"+Math.floor(T/60),U=(T%60).toString().length>1?T%60:"0"+T%60;return f.jsxs(jc,{children:[L,":",U]})};return f.jsxs(bc,{children:[f.jsxs(wc,{children:[f.jsx(yc,{children:f.jsx(vc,{src:c,alt:"gif of exercise"})}),f.jsx(es,{startExercise:S,stopExercise:M,countCalory:d,calory:u,writeTime:H,isPlaying:m})]}),f.jsxs($c,{children:[f.jsxs(he,{children:[f.jsx(ge,{children:"Name"}),f.jsx(xe,{children:Pt(s)})]}),f.jsxs(he,{children:[f.jsx(ge,{children:"Target"}),f.jsx(xe,{children:Pt(l)})]}),f.jsxs(he,{children:[f.jsx(ge,{children:"Body Part"}),f.jsx(xe,{children:Pt(r)})]}),f.jsxs(he,{children:[f.jsx(ge,{children:"Equipment"}),f.jsx(xe,{children:Pt(i)})]}),f.jsxs(he,{children:[f.jsx(ge,{children:"Time"}),f.jsxs(xe,{children:[a," minutes"]})]})]}),f.jsx(Sc,{children:f.jsx(Jo,{disabled:!(u>10),type:"button",onClick:()=>e({id:n,date:F,time:p,burnedCalories:u}),children:"Add to diary"})})]})}ns.propTypes={data:lt.object.isRequired,addExercise:lt.func};yo.defaults.baseURL="https://power-pulse-rest-api.onrender.com";const Cc=rs("addProduct",async(t,{rejectWithValue:e})=>{try{await yo.post("/api/diary/add-product",t)}catch{return cs.error("Oops... Something went wrong! Try again!"),e("Oops... Something went wrong!")}}),Ec=(t,e)=>{let n=24;return e<768?n=23:e<1440&&(n=19),t.length<=n?t:t.substring(0,n)+"..."},kc=I.div`
  display: flex;
  flex-direction: column;
  width: 190px;
`,Tc=I.img`
  width: 120px;
  height: 97px;
  margin: 0 auto;
  margin-bottom: 19px;
`,Oc=I.strong`
  margin: 0 auto;
  margin-bottom: 16px;

  color: ${z.white};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: ${32/24};
`,zc=I.ul`
  margin: 0 auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Rc=I.p`
  color: ${z.textWhite03};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${18/14};
  display: flex;
  align-items: center;
`,Ic=I.span`
  color: ${z.orange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${14/18};
  margin-left: 5px;
`,Pc=I(is)`
  margin: 0 auto;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: baseline;

  gap: 8px;

  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    color: ${z.orange};
    scale: 1.1;
  }
`,Ac=I.svg`
  stroke: currentColor;
  width: 16px;
  height: 16px;
  fill: ${z.textWhite04};
  scale: 1;


`,Mc="/september-project/assets/foodIcon-f93b792c.png",Lc="/september-project/assets/thumbUp-e8c8bf67.png";function $n({modalType:t,data:e,btnNext:n}){const o=r=>{if(r==="time")return"Your  time:   ";if(r==="burnedCalories")return"Burned calories:    ";if(r==="calories")return"Calories: "},s=r=>Object.keys(r).map(i=>f.jsx("li",{children:f.jsxs(Rc,{children:[`${o(i)} `,f.jsxs(Ic,{children:[i==="time"&&`${r[i]} seconds`," ",i==="burnedCalories"&&`${r[i]}`," ",i==="calories"&&`${r[i]}`," "]})]})},ls()));return f.jsxs(kc,{children:[f.jsx(Tc,{src:t==="product"?Mc:Lc,alt:"it`s a placeholder image, but it`s avocado too"}),f.jsx(Oc,{children:"Well Done"}),f.jsx(zc,{children:s(e)}),f.jsx(us,{title:t==="product"?"Next product":"Next exercise",btnNext:n}),f.jsxs(Pc,{to:"/diary",children:["To the diary",f.jsx(Ac,{fill:"",children:f.jsx("use",{href:ce+"#arrow-right"})})]})]})}$n.propTypes={modalType:lt.oneOf(["product","exercise"]),data:lt.object.isRequired,btnNext:lt.func};const Wc=({page:t,data:e})=>{const[n,o]=Y.useState(window.innerWidth),[s,r]=Y.useState(!1),[c,l]=Y.useState(!1),[i,a]=Y.useState(0),[u,h]=Y.useState(0),[p,g]=Y.useState(0),m=()=>r(S=>!S),v=()=>l(S=>!S),C=as();Y.useEffect(()=>(window.addEventListener("resize",j),()=>{window.removeEventListener("resize",j)}),[]);const j=()=>{o(window.innerWidth)},d=ps(t,e),x=({id:S,date:M,amount:F,calories:H,time:T,burnedCalories:L})=>{if(t==="product"){const U={productId:S,date:M,amount:F,calories:H};a(H),C(Cc(U))}if(t==="exercise"){const U={exerciseId:S,date:M,time:T,burnedCalories:L};if(!T||!L)return;h(T),g(L),C(ds(U))}m(),v()};return f.jsxs(Br,{children:[f.jsxs(Hr,{children:[f.jsx(Fr,{children:d.subtitle}),t==="product"&&f.jsx(_r,{reccomend:e.recommended,children:e.recommended?"Recommended":"Not recommended"}),f.jsxs(qr,{onClick:m,children:[d.button,f.jsx(Nr,{children:f.jsx("use",{href:ce+"#arrow-right"})})]})]}),f.jsxs(Ur,{children:[f.jsx(Vr,{children:f.jsx(Gr,{children:f.jsx("use",{href:ce+"#runningMan"})})}),Ec(d.title,n)]}),f.jsxs(Kr,{children:[f.jsxs(dn,{children:[d.text1,f.jsx(un,{children:d.subText1})]}),f.jsxs(dn,{children:[d.text2,f.jsx(un,{children:d.subText2})]}),f.jsxs(dn,{children:[d.text3,f.jsx(un,{children:d.subText3})]})]}),s&&f.jsxs(po,{openModal:m,width:t==="product"?479:694,children:[t==="product"&&f.jsx(Zo,{closeModal:m,data:e,addProduct:x}),t==="exercise"&&f.jsx(ns,{data:e,addExercise:x})]}),c&&f.jsxs(po,{openModal:v,width:430,children:[t==="product"&&f.jsx($n,{modalType:"product",data:{calories:i},btnNext:v}),t==="exercise"&&f.jsx($n,{modalType:"exercise",data:{time:u,burnedCalories:p},btnNext:v})]})]})};Wc.propTypes={page:lt.string,data:lt.object,openModal:lt.func};export{Fc as P,Dr as S,Wc as a};
