import{n as P,m as tt,r as K,a as wo,j as f,P as lt,c as k,E as cs,F as is,s as ce,k as fe,u as vo,G as pn,H as $o,I as ls,Q as as,N as ds,t as us,J as ps}from"./index-5fa3f891.js";import{c as Rt,f as So}from"./formatDate-d1383d55.js";import{B as fs}from"./BtnSubmit-47be46fe.js";import{n as hs}from"./notiflix-aio-3.2.6.min-923d63f5.js";const gs=(t,e)=>t==="product"?{subtitle:"DIET",title:Rt(e.title),button:"Add",text1:"Calories:",text2:"Category:",text3:"Weight:",subText1:e.calories,subText2:Rt(e.category),subText3:e.weight}:{subtitle:"WORKOUT",title:Rt(e.name),button:"Start",text1:"Burned calories:",text2:"Body part:",text3:"Target:",subText1:e.burnedCalories,subText2:Rt(e.bodyPart),subText3:Rt(e.target)},Gc=t=>t.products.products,Yc=t=>t.products.categories,Kc=t=>t.products.isLoading,xs=t=>t.products.searchParams,Xc=t=>t.products.hasMore,ms=P.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  gap: 20px;
  width: 100%;

  margin-top: ${t=>t.marginTop};
  ${tt.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
  ${tt.desktop} {
    width: 868px;
  }
`;function Jc({children:t,...e}){const n=K.useRef(),o=wo(xs);return K.useEffect(()=>{var s;(s=n.current.firstChild)==null||s.scrollIntoView()},[o]),f.jsx(ms,{ref:n,...e,children:t})}const bs=["(max-width: 767px)","(min-width: 768px) and (max-width: 1439px)","(min-width: 1440px)"],ys=()=>{const t=bs.map(s=>matchMedia(s)),e=()=>t.map(s=>s.matches),[n,o]=K.useState(e);return K.useLayoutEffect(()=>{const s=()=>o(e);return t.forEach(r=>r.addEventListener("change",s)),()=>t.forEach(r=>r.removeEventListener("change",s))}),["isMobile","isTablet","isDesktop"].reduce((s,r,c)=>({...s,[r]:n[c]}),{})};/*!
 * OverlayScrollbars
 * Version: 2.3.2
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */function Y(t,e){if(Fe(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&Y(Object.keys(t),n=>e(t[n],n,t));return t}function at(t,e){const n=qt(e);if(yt(e)||n){let s=n?"":{};if(t){const r=window.getComputedStyle(t,null);s=n?_n(t,r,e):e.reduce((c,l)=>(c[l]=_n(t,r,l),c),s)}return s}t&&Y(wt(e),s=>Ls(t,s,e[s]))}const $t=(t,e)=>{const{o:n,u:o,_:s}=t;let r=n,c;const l=(d,h)=>{const u=r,g=d,m=h||(o?!o(u,g):u!==g);return(m||s)&&(r=g,c=u),[r,m,c]};return[e?d=>l(e(r,c),d):l,d=>[r,!!d,c]]},ve=()=>typeof window<"u",Co=ve()&&Node.ELEMENT_NODE,{toString:ws,hasOwnProperty:Ze}=Object.prototype,Mt=t=>t===void 0,He=t=>t===null,vs=t=>Mt(t)||He(t)?`${t}`:ws.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),_t=t=>typeof t=="number",qt=t=>typeof t=="string",Cn=t=>typeof t=="boolean",jt=t=>typeof t=="function",yt=t=>Array.isArray(t),be=t=>typeof t=="object"&&!yt(t)&&!He(t),Fe=t=>{const e=!!t&&t.length,n=_t(e)&&e>-1&&e%1==0;return yt(t)||!jt(t)&&n?e>0&&be(t)?e-1 in t:!0:!1},fn=t=>{if(!t||!be(t)||vs(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,r=Ze.call(t,n),c=s&&Ze.call(s,"isPrototypeOf");if(o&&!r&&!c)return!1;for(e in t);return Mt(e)||Ze.call(t,e)},me=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===Co:!1},_e=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===Co:!1},Ne=(t,e,n)=>t.indexOf(e,n),Z=(t,e,n)=>(!n&&!qt(e)&&Fe(e)?Array.prototype.push.apply(t,e):t.push(e),t),Zt=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{Z(n,o)}):Y(t,o=>{Z(n,o)}),n)},jn=t=>!!t&&t.length===0,It=(t,e,n)=>{Y(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},qe=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),wt=t=>t?Object.keys(t):[],st=(t,e,n,o,s,r,c)=>{const l=[e,n,o,s,r,c];return(typeof t!="object"||He(t))&&!jt(t)&&(t={}),Y(l,i=>{Y(wt(i),a=>{const d=i[a];if(t===d)return!0;const h=yt(d);if(d&&fn(d)){const u=t[a];let g=u;h&&!yt(u)?g=[]:!h&&!fn(u)&&(g={}),t[a]=st(g,d)}else t[a]=h?d.slice():d})}),t},En=t=>{for(const e in t)return!1;return!0},jo=(t,e,n,o)=>{if(Mt(o))return n?n[t]:e;n&&(qt(o)||_t(o))&&(n[t]=o)},dt=(t,e,n)=>{if(Mt(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},Eo=(t,e)=>new Set((dt(t,e)||"").split(" ")),ht=(t,e)=>{t&&t.removeAttribute(e)},Xt=(t,e,n,o)=>{if(n){const s=Eo(t,e);s[o?"add":"delete"](n);const r=Zt(s).join(" ").trim();dt(t,e,r)}},$s=(t,e,n)=>Eo(t,e).has(n),Ct=(t,e)=>jo("scrollLeft",0,t,e),At=(t,e)=>jo("scrollTop",0,t,e),hn=ve()&&Element.prototype,ko=(t,e)=>{const n=[],o=e?_e(e)&&e:document;return o?Z(n,o.querySelectorAll(t)):n},Ss=(t,e)=>{const n=e?_e(e)&&e:document;return n?n.querySelector(t):null},Ae=(t,e)=>_e(t)?(hn.matches||hn.msMatchesSelector).call(t,e):!1,kn=t=>t?Zt(t.childNodes):[],Lt=t=>t&&t.parentElement,ee=(t,e)=>{if(_e(t)){const n=hn.closest;if(n)return n.call(t,e);do{if(Ae(t,e))return t;t=Lt(t)}while(t)}},Cs=(t,e,n)=>{const o=ee(t,e),s=t&&Ss(n,o),r=ee(s,e)===o;return o&&s?o===t||s===t||r&&ee(ee(t,n),e)!==o:!1},Tn=(t,e,n)=>{if(n&&t){let o=e,s;Fe(n)?(s=document.createDocumentFragment(),Y(n,r=>{r===o&&(o=r.previousSibling),s.appendChild(r)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null)}},vt=(t,e)=>{Tn(t,null,e)},js=(t,e)=>{Tn(Lt(t),t,e)},Bn=(t,e)=>{Tn(Lt(t),t&&t.nextSibling,e)},zt=t=>{if(Fe(t))Y(Zt(t),e=>zt(e));else if(t){const e=Lt(t);e&&e.removeChild(t)}},Jt=t=>{const e=document.createElement("div");return t&&dt(e,"class",t),e},To=t=>{const e=Jt();return e.innerHTML=t.trim(),Y(kn(e),n=>zt(n))},gn=t=>t.charAt(0).toUpperCase()+t.slice(1),Es=()=>Jt().style,ks=["-webkit-","-moz-","-o-","-ms-"],Ts=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Qe={},tn={},Os=t=>{let e=tn[t];if(qe(tn,t))return e;const n=gn(t),o=Es();return Y(ks,s=>{const r=s.replace(/-/g,"");return!(e=[t,s+t,r+n,gn(r)+n].find(l=>o[l]!==void 0))}),tn[t]=e||""},ae=t=>{if(ve()){let e=Qe[t]||window[t];return qe(Qe,t)||(Y(Ts,n=>(e=e||window[n+gn(t)],!e)),Qe[t]=e),e}},zs=ae("MutationObserver"),Hn=ae("IntersectionObserver"),ne=ae("ResizeObserver"),Oo=ae("cancelAnimationFrame"),zo=ae("requestAnimationFrame"),xn=ae("ScrollTimeline"),Le=ve()&&window.setTimeout,mn=ve()&&window.clearTimeout,Is=/[^\x20\t\r\n\f]+/g,Io=(t,e,n)=>{const o=t&&t.classList;let s,r=0,c=!1;if(o&&e&&qt(e)){const l=e.match(Is)||[];for(c=l.length>0;s=l[r++];)c=!!n(o,s)&&c}return c},On=(t,e)=>{Io(t,e,(n,o)=>n.remove(o))},Nt=(t,e)=>(Io(t,e,(n,o)=>n.add(o)),On.bind(0,t,e)),Ue=(t,e,n,o)=>{if(t&&e){let s=!0;return Y(n,r=>{const c=o?o(t[r]):t[r],l=o?o(e[r]):e[r];c!==l&&(s=!1)}),s}return!1},Po=(t,e)=>Ue(t,e,["w","h"]),Ro=(t,e)=>Ue(t,e,["x","y"]),Ps=(t,e)=>Ue(t,e,["t","r","b","l"]),Fn=(t,e,n)=>Ue(t,e,["width","height"],n&&(o=>Math.round(o))),bt=()=>{},Kt=t=>{let e;const n=t?Le:zo,o=t?mn:Oo;return[s=>{o(e),e=n(s,jt(t)?t():t)},()=>o(e)]},zn=(t,e)=>{let n,o,s,r=bt;const{g:c,v:l,p:i}=e||{},a=function(m){r(),mn(n),n=o=void 0,r=bt,t.apply(this,m)},d=g=>i&&o?i(o,g):g,h=()=>{r!==bt&&a(d(s)||s)},u=function(){const m=Zt(arguments),y=jt(c)?c():c;if(_t(y)&&y>=0){const S=jt(l)?l():l,p=_t(S)&&S>=0,x=y>0?Le:zo,j=y>0?mn:Oo,W=d(m)||m,F=a.bind(0,W);r();const _=x(F,y);r=()=>j(_),p&&!n&&(n=Le(h,S)),o=s=W}else a(m)};return u.m=h,u},Rs={opacity:1,zIndex:1},Ee=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},As=(t,e)=>!Rs[t]&&_t(e)?`${e}px`:e,_n=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),Ls=(t,e,n)=>{try{const{style:o}=t;Mt(o[e])?o.setProperty(e,n):o[e]=As(e,n)}catch{}},ie=t=>at(t,"direction")==="rtl",Nn=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",r=`${o}top${s}`,c=`${o}right${s}`,l=`${o}bottom${s}`,i=`${o}left${s}`,a=at(t,[r,c,l,i]);return{t:Ee(a[r],!0),r:Ee(a[c],!0),b:Ee(a[l],!0),l:Ee(a[i],!0)}},le=(t,e)=>`translate${yt(t)?`(${t[0]},${t[1]})`:`${e?"X":"Y"}(${t})`}`,{round:qn}=Math,In={w:0,h:0},ye=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:In,Re=t=>t?{w:t.clientWidth,h:t.clientHeight}:In,Me=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:In,We=t=>{const e=parseFloat(at(t,"height"))||0,n=parseFloat(at(t,"width"))||0;return{w:n-qn(n),h:e-qn(e)}},Ot=t=>t.getBoundingClientRect(),oe=t=>!!(t&&(t.height||t.width));let ke;const Ms=()=>{if(Mt(ke)){ke=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){ke=!0}}))}catch{}}return ke},Ao=t=>t.split(" "),Ws=(t,e,n,o)=>{Y(Ao(e),s=>{t.removeEventListener(s,n,o)})},ct=(t,e,n,o)=>{var s;const r=Ms(),c=(s=r&&o&&o.S)!=null?s:r,l=o&&o.$||!1,i=o&&o.C||!1,a=[],d=r?{passive:c,capture:l}:l;return Y(Ao(e),h=>{const u=i?g=>{t.removeEventListener(h,u,l),n&&n(g)}:n;Z(a,Ws.bind(null,t,h,u,l)),t.addEventListener(h,u,d)}),It.bind(0,a)},Lo=t=>t.stopPropagation(),Mo=t=>t.preventDefault(),Ds={x:0,y:0},en=t=>{const e=t?Ot(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:Ds},Un=(t,e)=>{Y(yt(e)?e:[e],t)},Pn=t=>{const e=new Map,n=(r,c)=>{if(r){const l=e.get(r);Un(i=>{l&&l[i?"delete":"clear"](i)},c)}else e.forEach(l=>{l.clear()}),e.clear()},o=(r,c)=>{if(qt(r)){const a=e.get(r)||new Set;return e.set(r,a),Un(d=>{jt(d)&&a.add(d)},c),n.bind(0,r,c)}Cn(c)&&c&&n();const l=wt(r),i=[];return Y(l,a=>{const d=r[a];d&&Z(i,o(a,d))}),It.bind(0,i)},s=(r,c)=>{const l=e.get(r);Y(Zt(l),i=>{c&&!jn(c)?i.apply(0,c):i()})};return o(t||{}),[o,n,s]},Vn=t=>JSON.stringify(t,(e,n)=>{if(jt(n))throw new Error;return n}),Bs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Wo=(t,e)=>{const n={},o=wt(e).concat(wt(t));return Y(o,s=>{const r=t[s],c=e[s];if(be(r)&&be(c))st(n[s]={},Wo(r,c)),En(n[s])&&delete n[s];else if(qe(e,s)&&c!==r){let l=!0;if(yt(r)||yt(c))try{Vn(r)===Vn(c)&&(l=!1)}catch{}l&&(n[s]=c)}}),n},$e="data-overlayscrollbars",Do="os-environment",Bo=`${Do}-flexbox-glue`,Hs=`${Bo}-max`,Ho="os-scrollbar-hidden",nn=`${$e}-initialize`,St=$e,Fo=`${St}-overflow-x`,_o=`${St}-overflow-y`,se="overflowVisible",Fs="scrollbarHidden",Gn="scrollbarPressed",De="updating",Ht=`${$e}-viewport`,on="arrange",No="scrollbarHidden",re=se,bn=`${$e}-padding`,_s=re,Yn=`${$e}-content`,Rn="os-size-observer",Ns=`${Rn}-appear`,qs=`${Rn}-listener`,Us="os-trinsic-observer",Vs="os-no-css-vars",Gs="os-theme-none",gt="os-scrollbar",Ys=`${gt}-rtl`,Ks=`${gt}-horizontal`,Xs=`${gt}-vertical`,qo=`${gt}-track`,An=`${gt}-handle`,Js=`${gt}-visible`,Zs=`${gt}-cornerless`,Kn=`${gt}-transitionless`,Xn=`${gt}-interaction`,Jn=`${gt}-unusable`,yn=`${gt}-auto-hide`,Zn=`${yn}-hidden`,Qn=`${gt}-wheel`,Qs=`${qo}-interactive`,tr=`${An}-interactive`,Uo={},Qt=()=>Uo,er=t=>{const e=[];return Y(yt(t)?t:[t],n=>{const o=wt(n);Y(o,s=>{Z(e,Uo[s]=n[s])})}),e},nr="__osOptionsValidationPlugin",or="__osSizeObserverPlugin",Ln="__osScrollbarsHidingPlugin",sr="__osClickScrollPlugin";let sn;const to=(t,e,n,o)=>{vt(t,e);const s=Re(e),r=ye(e),c=We(n);return o&&zt(e),{x:r.h-s.h+c.h,y:r.w-s.w+c.w}},rr=t=>{let e=!1;const n=Nt(t,Ho);try{e=at(t,Os("scrollbar-width"))==="none"||window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},cr=(t,e)=>{const n="hidden";at(t,{overflowX:n,overflowY:n,direction:"rtl"}),Ct(t,0);const o=en(t),s=en(e);Ct(t,-999);const r=en(e);return{i:o.x===s.x,n:s.x!==r.x}},ir=(t,e)=>{const n=Nt(t,Bo),o=Ot(t),s=Ot(e),r=Fn(s,o,!0),c=Nt(t,Hs),l=Ot(t),i=Ot(e),a=Fn(i,l,!0);return n(),c(),r&&a},lr=()=>{const{body:t}=document,n=To(`<div class="${Do}"><div></div></div>`)[0],o=n.firstChild,[s,,r]=Pn(),[c,l]=$t({o:to(t,n,o),u:Ro},to.bind(0,t,n,o,!0)),[i]=l(),a=rr(n),d={x:i.x===0,y:i.y===0},h={elements:{host:null,padding:!a,viewport:p=>a&&p===p.ownerDocument.body&&p,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},u=st({},Bs),g=st.bind(0,{},u),m=st.bind(0,{},h),y={k:i,I:d,A:a,H:at(n,"zIndex")==="-1",B:!!xn,V:cr(n,o),Y:ir(n,o),j:s.bind(0,"z"),N:s.bind(0,"r"),q:m,F:p=>st(h,p)&&m(),G:g,X:p=>st(u,p)&&g(),U:st({},h),W:st({},u)},C=window.addEventListener,S=zn(p=>r(p?"z":"r"),{g:33,v:99});if(ht(n,"style"),zt(n),C("resize",S.bind(0,!1)),!a&&(!d.x||!d.y)){let p;C("resize",()=>{const x=Qt()[Ln];p=p||x&&x.R(),p&&p(y,c,S.bind(0,!0))})}return y},xt=()=>(sn||(sn=lr()),sn),Mn=(t,e)=>jt(e)?e.apply(0,t):e,ar=(t,e,n,o)=>{const s=Mt(o)?n:o;return Mn(t,s)||e.apply(0,t)},Vo=(t,e,n,o)=>{const s=Mt(o)?n:o,r=Mn(t,s);return!!r&&(me(r)?r:e.apply(0,t))},dr=(t,e,n)=>{const{nativeScrollbarsOverlaid:o,body:s}=n||{},{I:r,A:c}=xt(),{nativeScrollbarsOverlaid:l,body:i}=e,a=o??l,d=Mt(s)?i:s,h=(r.x||r.y)&&a,u=t&&(He(d)?!c:d);return!!h||!!u},Wn=new WeakMap,ur=(t,e)=>{Wn.set(t,e)},pr=t=>{Wn.delete(t)},Go=t=>Wn.get(t),eo=(t,e)=>t?e.split(".").reduce((n,o)=>n&&qe(n,o)?n[o]:void 0,t):void 0,wn=(t,e,n)=>o=>[eo(t,o),n||eo(e,o)!==void 0],Yo=t=>{let e=t;return[()=>e,n=>{e=st({},e,n)}]},Te="tabindex",Oe=Jt.bind(0,""),rn=t=>{vt(Lt(t),kn(t)),zt(t)},fr=t=>{const e=xt(),{q:n,A:o}=e,s=Qt()[Ln],r=s&&s.T,{elements:c}=n(),{host:l,padding:i,viewport:a,content:d}=c,h=me(t),u=h?{}:t,{elements:g}=u,{host:m,padding:y,viewport:C,content:S}=g||{},p=h?t:u.target,x=Ae(p,"textarea"),j=p.ownerDocument,M=j.documentElement,W=p===j.body,F=j.defaultView,_=ar.bind(0,[p]),O=Vo.bind(0,[p]),V=Mn.bind(0,[p]),U=_.bind(0,Oe,a),L=O.bind(0,Oe,d),v=U(C),E=v===p,b=E&&W,T=!E&&L(S),D=!E&&me(v)&&v===T,R=D&&!!V(d),z=R?U():v,H=R?T:L(),N=b?M:D?z:v,X=x?_(Oe,l,m):p,et=b?N:X,$=D?H:T,w=j.activeElement,I=!E&&F.top===F&&w===p,A={Z:p,J:et,K:N,tt:!E&&O(Oe,i,y),nt:$,ot:!E&&!o&&r&&r(e),st:b?M:N,et:b?j:N,ct:F,rt:j,lt:x,it:W,ut:h,ft:E,dt:D,_t:(it,pt)=>$s(N,E?St:Ht,E?pt:it),ht:(it,pt,ft)=>Xt(N,E?St:Ht,E?pt:it,ft)},q=wt(A).reduce((it,pt)=>{const ft=A[pt];return Z(it,ft&&me(ft)&&!Lt(ft)?ft:!1)},[]),G=it=>it?Ne(q,it)>-1:null,{Z:nt,J:Q,tt:rt,K:J,nt:ot,ot:ut}=A,mt=[()=>{ht(Q,St),ht(Q,nn),ht(nt,nn),W&&(ht(M,St),ht(M,nn))}],Wt=x&&G(Q);let Ut=x?nt:kn([ot,J,rt,Q,nt].find(it=>G(it)===!1));const Vt=b?nt:ot||J;return[A,()=>{dt(Q,St,E?"viewport":"host"),dt(rt,bn,""),dt(ot,Yn,""),E||dt(J,Ht,"");const it=W&&!E?Nt(Lt(p),Ho):bt;if(Wt&&(Bn(nt,Q),Z(mt,()=>{Bn(Q,nt),zt(Q)})),vt(Vt,Ut),vt(Q,rt),vt(rt||Q,!E&&J),vt(J,ot),Z(mt,()=>{it(),ht(rt,bn),ht(ot,Yn),ht(J,Fo),ht(J,_o),ht(J,Ht),G(ot)&&rn(ot),G(J)&&rn(J),G(rt)&&rn(rt)}),o&&!E&&(Xt(J,Ht,No,!0),Z(mt,ht.bind(0,J,Ht))),ut&&(js(J,ut),Z(mt,zt.bind(0,ut))),I){const pt=dt(J,Te);dt(J,Te,"-1"),J.focus();const ft=()=>pt?dt(J,Te,pt):ht(J,Te),Et=ct(j,"pointerdown keydown",()=>{ft(),Et()});Z(mt,[ft,Et])}else w&&w.focus&&w.focus();Ut=0},It.bind(0,mt)]},hr=(t,e)=>{const{nt:n}=t,[o]=e;return s=>{const{Y:r}=xt(),{gt:c}=o(),{vt:l}=s,i=(n||!r)&&l;return i&&at(n,{height:c?"":"100%"}),{wt:i,bt:i}}},gr=(t,e)=>{const[n,o]=e,{J:s,tt:r,K:c,ft:l}=t,[i,a]=$t({u:Ps,o:Nn()},Nn.bind(0,s,"padding",""));return(d,h,u)=>{let[g,m]=a(u);const{A:y,Y:C}=xt(),{yt:S}=n(),{wt:p,bt:x,St:j}=d,[M,W]=h("paddingAbsolute");(p||m||!C&&x)&&([g,m]=i(u));const _=!l&&(W||j||m);if(_){const O=!M||!r&&!y,V=g.r+g.l,U=g.t+g.b,L={marginRight:O&&!S?-V:0,marginBottom:O?-U:0,marginLeft:O&&S?-V:0,top:O?-g.t:0,right:O?S?-g.r:"auto":0,left:O?S?"auto":-g.l:0,width:O?`calc(100% + ${V}px)`:""},v={paddingTop:O?g.t:0,paddingRight:O?g.r:0,paddingBottom:O?g.b:0,paddingLeft:O?g.l:0};at(r||c,L),at(c,v),o({tt:g,$t:!O,P:r?v:st({},L,v)})}return{xt:_}}},{max:vn}=Math,Ft=vn.bind(0,0),Ko="visible",no="hidden",xr=42,ze={u:Po,o:{w:0,h:0}},mr={u:Ro,o:{x:no,y:no}},br=(t,e)=>{const n=window.devicePixelRatio%1!==0?1:0,o={w:Ft(t.w-e.w),h:Ft(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}},Ie=t=>t.indexOf(Ko)===0,yr=(t,e)=>{const[n,o]=e,{J:s,tt:r,K:c,ot:l,ft:i,ht:a,it:d,ct:h}=t,{k:u,Y:g,A:m,I:y}=xt(),C=Qt()[Ln],S=!i&&!m&&(y.x||y.y),p=d&&i,[x,j]=$t(ze,We.bind(0,c)),[M,W]=$t(ze,Me.bind(0,c)),[F,_]=$t(ze),[O,V]=$t(ze),[U]=$t(mr),L=(R,z)=>{if(at(c,{height:""}),z){const{$t:H,tt:B}=n(),{Ct:N,M:X}=R,et=We(s),$=Re(s),w=at(c,"boxSizing")==="content-box",I=H||w?B.b+B.t:0,A=!(y.x&&w);at(c,{height:$.h+et.h+(N.x&&A?X.x:0)-I})}},v=(R,z)=>{const H=!m&&!R?xr:0,B=(G,nt,Q)=>{const rt=at(c,G),ot=(z?z[G]:rt)==="scroll";return[rt,ot,ot&&!m?nt?H:Q:0,nt&&!!H]},[N,X,et,$]=B("overflowX",y.x,u.x),[w,I,A,q]=B("overflowY",y.y,u.y);return{Ot:{x:N,y:w},Ct:{x:X,y:I},M:{x:et,y:A},D:{x:$,y:q}}},E=(R,z,H,B)=>{const N=(I,A)=>{const q=Ie(I),G=A&&q&&I.replace(`${Ko}-`,"")||"";return[A&&!q?I:"",Ie(G)?"hidden":G]},[X,et]=N(H.x,z.x),[$,w]=N(H.y,z.y);return B.overflowX=et&&$?et:X,B.overflowY=w&&X?w:$,v(R,B)},b=(R,z,H,B)=>{const{M:N,D:X}=R,{x:et,y:$}=X,{x:w,y:I}=N,{P:A}=n(),q=z?"marginLeft":"marginRight",G=z?"paddingLeft":"paddingRight",nt=A[q],Q=A.marginBottom,rt=A[G],J=A.paddingBottom;B.width=`calc(100% + ${I+nt*-1}px)`,B[q]=-I+nt,B.marginBottom=-w+Q,H&&(B[G]=rt+($?I:0),B.paddingBottom=J+(et?w:0))},[T,D]=C?C.L(S,g,c,l,n,v,b):[()=>S,()=>[bt]];return(R,z,H)=>{const{wt:B,Tt:N,bt:X,xt:et,vt:$,St:w}=R,{gt:I,yt:A}=n(),[q,G]=z("showNativeOverlaidScrollbars"),[nt,Q]=z("overflow"),rt=q&&y.x&&y.y,J=!i&&!g&&(B||X||N||G||$),ot=Ie(nt.x),ut=Ie(nt.y),mt=ot||ut;let Wt=j(H),Ut=W(H),Vt=_(H),de=V(H),it;if(G&&m&&a(No,Fs,!rt),J&&(it=v(rt),L(it,I)),B||et||X||w||G){mt&&a(re,se,!1);const[Pt,Dt]=D(rt,A,it),[Tt,Xe]=Wt=x(H),[Bt,Je]=Ut=M(H),te=Re(c);let Gt=Bt,Yt=te;Pt(),(Je||Xe||G)&&Dt&&!rt&&T(Dt,Bt,Tt,A)&&(Yt=Re(c),Gt=Me(c));const pe={w:Ft(vn(Bt.w,Gt.w)+Tt.w),h:Ft(vn(Bt.h,Gt.h)+Tt.h)},Dn={w:Ft((p?h.innerWidth:Yt.w+Ft(te.w-Bt.w))+Tt.w),h:Ft((p?h.innerHeight+Tt.h:Yt.h+Ft(te.h-Bt.h))+Tt.h)};de=O(Dn),Vt=F(br(pe,Dn),H)}const[pt,ft]=de,[Et,Se]=Vt,[ue,Ve]=Ut,[Ce,Ge]=Wt,kt={x:Et.w>0,y:Et.h>0},je=ot&&ut&&(kt.x||kt.y)||ot&&kt.x&&!kt.y||ut&&kt.y&&!kt.x;if(et||w||Ge||Ve||ft||Se||Q||G||J){const Pt={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},Dt=E(rt,kt,nt,Pt),Tt=T(Dt,ue,Ce,A);i||b(Dt,A,Tt,Pt),J&&L(Dt,I),i?(dt(s,Fo,Pt.overflowX),dt(s,_o,Pt.overflowY)):at(c,Pt)}Xt(s,St,se,je),Xt(r,bn,_s,je),i||Xt(c,Ht,re,mt);const[Ye,Ke]=U(v(rt).Ot);return o({Ot:Ye,zt:{x:pt.w,y:pt.h},Et:{x:Et.w,y:Et.h},At:kt}),{It:Ke,Ht:ft,Lt:Se}}},oo=(t,e,n)=>{const o={},s=e||{},r=wt(t).concat(wt(s));return Y(r,c=>{const l=t[c],i=s[c];o[c]=!!(n||l||i)}),o},wr=(t,e)=>{const{Z:n,K:o,ht:s,ft:r}=t,{A:c,I:l,Y:i}=xt(),a=!c&&(l.x||l.y),d=[hr(t,e),gr(t,e),yr(t,e)];return(h,u,g)=>{const m=oo(st({wt:!1,xt:!1,St:!1,vt:!1,Ht:!1,Lt:!1,It:!1,Tt:!1,bt:!1,Pt:!1},u),{},g),y=a||!i,C=y&&Ct(o),S=y&&At(o);s("",De,!0);let p=m;return Y(d,x=>{p=oo(p,x(p,h,!!g)||{},g)}),Ct(o,C),At(o,S),s("",De),r||(Ct(n,0),At(n,0)),p}},vr=(t,e,n)=>{let o,s=!1;const r=()=>{s=!0},c=l=>{if(n){const i=n.reduce((a,d)=>{if(d){const[h,u]=d,g=u&&h&&(l?l(h):ko(h,t));g&&g.length&&u&&qt(u)&&Z(a,[g,u.trim()],!0)}return a},[]);Y(i,a=>Y(a[0],d=>{const h=a[1],u=o.get(d)||[];if(t.contains(d)){const m=ct(d,h,y=>{s?(m(),o.delete(d)):e(y)});o.set(d,Z(u,m))}else It(u),o.delete(d)}))}};return n&&(o=new WeakMap,c()),[r,c]},so=(t,e,n,o)=>{let s=!1;const{Mt:r,Dt:c,Rt:l,kt:i,Bt:a,Vt:d}=o||{},h=zn(()=>s&&n(!0),{g:33,v:99}),[u,g]=vr(t,h,l),m=r||[],y=c||[],C=m.concat(y),S=(x,j)=>{const M=a||bt,W=d||bt,F=new Set,_=new Set;let O=!1,V=!1;if(Y(x,U=>{const{attributeName:L,target:v,type:E,oldValue:b,addedNodes:T,removedNodes:D}=U,R=E==="attributes",z=E==="childList",H=t===v,B=R&&qt(L)?dt(v,L):0,N=B!==0&&b!==B,X=Ne(y,L)>-1&&N;if(e&&(z||!H)){const et=!R,$=R&&N,w=$&&i&&Ae(v,i),A=(w?!M(v,L,b,B):et||$)&&!W(U,!!w,t,o);Y(T,q=>F.add(q)),Y(D,q=>F.add(q)),V=V||A}!e&&H&&N&&!M(v,L,b,B)&&(_.add(L),O=O||X)}),F.size>0&&g(U=>Zt(F).reduce((L,v)=>(Z(L,ko(U,v)),Ae(v,U)?Z(L,v):L),[])),e)return!j&&V&&n(!1),[!1];if(_.size>0||O){const U=[Zt(_),O];return!j&&n.apply(0,U),U}},p=new zs(x=>S(x));return p.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:C,subtree:e,childList:e,characterData:e}),s=!0,[()=>{s&&(u(),p.disconnect(),s=!1)},()=>{if(s){h.m();const x=p.takeRecords();return!jn(x)&&S(x,!0)}}]},Pe=3333333,Xo=(t,e,n)=>{const{Yt:o,Pt:s}=n||{},r=Qt()[or],{V:c}=xt(),i=To(`<div class="${Rn}"><div class="${qs}"></div></div>`)[0],a=i.firstChild,d=ie.bind(0,t),[h]=$t({o:!1,_:!0,u:(m,y)=>!(!m||!oe(m)&&oe(y))}),u=m=>{const y=yt(m)&&m.length>0&&be(m[0]),C=!y&&Cn(m[0]);let S=!1,p=!1,x=!0;if(y){const[j,,M]=h(m.pop().contentRect),W=oe(j),F=oe(M);S=!M&&!!F||!W,p=!F&&W,x=!S}else C?[,x]=m:p=m===!0;if(o&&x){const j=C?m[0]:ie(i);Ct(i,j?c.n?-Pe:c.i?0:Pe:Pe),At(i,Pe)}S||e({wt:!C,jt:C?m:void 0,Pt:!!p})},g=[];return[()=>{It(g),zt(i)},()=>{let m=s&&u;if(ne){const y=new ne(u);y.observe(a),Z(g,()=>{y.disconnect()})}else if(r){const[y,C]=r.O(a,u,s);m=y,Z(g,C)}if(o){const[y]=$t({o:void 0},d);Z(g,ct(i,"scroll",C=>{const S=y(),[p,x,j]=S;x&&(On(a,"ltr rtl"),Nt(a,p?"rtl":"ltr"),u([!!p,x,j])),Lo(C)}))}m&&(Nt(i,Ns),Z(g,ct(i,"animationstart",m,{C:!!ne}))),(ne||r)&&vt(t,i)}]},$r=t=>t.h===0||t.isIntersecting||t.intersectionRatio>0,Sr=(t,e)=>{let n;const o=Jt(Us),s=[],[r]=$t({o:!1}),c=(i,a)=>{if(i){const d=r($r(i)),[,h]=d;return h&&!a&&e(d)&&[d]}},l=(i,a)=>i&&i.length>0&&c(i.pop(),a);return[()=>{It(s),zt(o)},()=>{if(Hn)n=new Hn(i=>l(i),{root:t}),n.observe(o),Z(s,()=>{n.disconnect()});else{const i=()=>{const h=ye(o);c(h)},[a,d]=Xo(o,i);Z(s,a),d(),i()}vt(t,o)},()=>n&&l(n.takeRecords(),!0)]},ro=`[${St}]`,Cr=`[${Ht}]`,cn=["tabindex"],co=["wrap","cols","rows"],ln=["id","class","style","open"],jr=(t,e,n)=>{let o,s,r;const{J:c,K:l,nt:i,lt:a,ft:d,_t:h,ht:u}=t,{Y:g}=xt(),[m]=$t({u:Po,o:{w:0,h:0}},()=>{const b=h(re,se),T=h(on,""),D=T&&Ct(l),R=T&&At(l);u(re,se),u(on,""),u("",De,!0);const z=Me(i),H=Me(l),B=We(l);return u(re,se,b),u(on,"",T),u("",De),Ct(l,D),At(l,R),{w:H.w+z.w+B.w,h:H.h+z.h+B.h}}),y=a?co:ln.concat(co),C=zn(n,{g:()=>o,v:()=>s,p(b,T){const[D]=b,[R]=T;return[wt(D).concat(wt(R)).reduce((z,H)=>(z[H]=D[H]||R[H],z),{})]}}),S=b=>{Y(b||cn,T=>{if(Ne(cn,T)>-1){const D=dt(c,T);qt(D)?dt(l,T,D):ht(l,T)}})},p=(b,T)=>{const[D,R]=b,z={vt:R};return e({gt:D}),!T&&n(z),z},x=({wt:b,jt:T,Pt:D})=>{const R=!b||D?n:C;let z=!1;if(T){const[H,B]=T;z=B,e({yt:H})}R({wt:b,Pt:D,St:z})},j=(b,T)=>{const[,D]=m(),R={bt:D};return D&&!T&&(b?n:C)(R),R},M=(b,T,D)=>{const R={Tt:T};return T?!D&&C(R):d||S(b),R},[W,F,_]=i||!g?Sr(c,p):[bt,bt,bt],[O,V]=d?[bt,bt]:Xo(c,x,{Pt:!0,Yt:!0}),[U,L]=so(c,!1,M,{Dt:ln,Mt:ln.concat(cn)});let v;const E=d&&ne&&new ne(b=>{const T=b[b.length-1].contentRect,D=oe(T),z=!oe(v)&&D;x({wt:!0,Pt:z}),v=T});return[()=>{W(),O(),r&&r[0](),E&&E.disconnect(),U()},()=>{E&&E.observe(c),S(),V(),F()},()=>{const b={},T=L(),D=_(),R=r&&r[1]();return T&&st(b,M.apply(0,Z(T,!0))),D&&st(b,p.apply(0,Z(D,!0))),R&&st(b,j.apply(0,Z(R,!0))),b},b=>{const[T]=b("update.ignoreMutation"),[D,R]=b("update.attributes"),[z,H]=b("update.elementEvents"),[B,N]=b("update.debounce"),X=H||R,et=$=>jt(T)&&T($);if(X&&(r&&(r[1](),r[0]()),r=so(i||l,!0,j,{Mt:y.concat(D||[]),Rt:z,kt:ro,Vt:($,w)=>{const{target:I,attributeName:A}=$;return(!w&&A&&!d?Cs(I,ro,Cr):!1)||!!ee(I,`.${gt}`)||!!et($)}})),N)if(C.m(),yt(B)){const $=B[0],w=B[1];o=_t($)&&$,s=_t(w)&&w}else _t(B)?(o=B,s=!1):(o=!1,s=!1)}]},io={x:0,y:0},Er=t=>({tt:{t:0,r:0,b:0,l:0},$t:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:io,Et:io,Ot:{x:"hidden",y:"hidden"},At:{x:!1,y:!1},gt:!1,yt:ie(t.J)}),kr=(t,e)=>{const n=wn(e,{}),[o,s,r]=Pn(),[c,l,i]=fr(t),a=Yo(Er(c)),[d,h]=a,u=wr(c,a),g=(x,j,M)=>{const F=wt(x).some(_=>!!x[_])||!En(j)||M;return F&&r("u",[x,j,M]),F},[m,y,C,S]=jr(c,h,x=>g(u(n,x),{},!1)),p=d.bind(0);return p.Nt=x=>o("u",x),p.qt=()=>{const{Z:x,K:j,rt:M,it:W}=c,F=W?M.documentElement:x,_=Ct(F),O=At(F);y(),l(),Ct(j,_),At(j,O)},p.Ft=c,[(x,j)=>{const M=wn(e,x,j);return S(M),g(u(M,C(),j),x,!!j)},p,()=>{s(),m(),i()}]},{round:lo}=Math,Tr=t=>{const{width:e,height:n}=Ot(t),{w:o,h:s}=ye(t);return{x:lo(e)/o||1,y:lo(n)/s||1}},Or=(t,e,n)=>{const o=e.scrollbars,{button:s,isPrimary:r,pointerType:c}=t,{pointers:l}=o;return s===0&&r&&o[n?"dragScroll":"clickScroll"]&&(l||[]).includes(c)},ao="pointerup pointerleave pointercancel lostpointercapture",zr=(t,e)=>ct(t,"mousedown",ct.bind(0,e,"click",Lo,{C:!0,$:!0}),{$:!0}),Ir=(t,e,n,o,s,r,c)=>{const{V:l}=xt(),{Gt:i,Xt:a,Ut:d}=o,h=`scroll${c?"Left":"Top"}`,u=`client${c?"X":"Y"}`,g=c?"width":"height",m=c?"left":"top",y=c?"w":"h",C=c?"x":"y",S=(p,x)=>j=>{const{Et:M}=r(),W=ye(a)[y]-ye(i)[y],_=x*j/W*M[C],V=ie(d)&&c?l.n||l.i?1:-1:1;s[h]=p+_*V};return ct(a,"pointerdown",p=>{const x=ee(p.target,`.${An}`)===i,j=x?i:a;if(Xt(e,St,Gn,!0),Or(p,t,x)){const M=!x&&p.shiftKey,W=()=>Ot(i),F=()=>Ot(a),_=(z,H)=>(z||W())[m]-(H||F())[m],O=S(s[h]||0,1/Tr(s)[C]),V=p[u],U=W(),L=F(),v=U[g],E=_(U,L)+v/2,b=V-L[m],T=x?0:b-E,D=z=>{It(R),j.releasePointerCapture(z.pointerId)},R=[Xt.bind(0,e,St,Gn),ct(n,ao,D),ct(n,"selectstart",z=>Mo(z),{S:!1}),ct(a,ao,D),ct(a,"pointermove",z=>{const H=z[u]-V;(x||M)&&O(T+H)})];if(M)O(T);else if(!x){const z=Qt()[sr];z&&Z(R,z.O(O,_,T,v,b))}j.setPointerCapture(p.pointerId)}})},Pr=(t,e)=>(n,o,s,r,c,l,i)=>{const{Ut:a}=n,[d,h]=Kt(333),u=!!c.scrollBy;let g=!0;return It.bind(0,[ct(a,"pointerenter",()=>{o(Xn,!0)}),ct(a,"pointerleave pointercancel",()=>{o(Xn)}),ct(a,"wheel",m=>{const{deltaX:y,deltaY:C,deltaMode:S}=m;u&&g&&S===0&&Lt(a)===r&&c.scrollBy({left:y,top:C,behavior:"smooth"}),g=!1,o(Qn,!0),d(()=>{g=!0,o(Qn)}),Mo(m)},{S:!1,$:!0}),zr(a,s),Ir(t,r,s,n,c,e,i),h])},{min:Be,max:$n,round:Rr}=Math,Jo=(t,e,n,o)=>{if(o){const l=n?"x":"y",{Et:i,zt:a}=o,d=a[l],h=i[l];return $n(0,Be(1,d/(d+h)))}const s=n?"width":"height",r=Ot(t)[s],c=Ot(e)[s];return $n(0,Be(1,r/c))},Ar=(t,e,n,o,s,r)=>{const{V:c}=xt(),l=r?"x":"y",i=r?"Left":"Top",{Et:a}=o,d=Rr(a[l]),h=Be(d,$n(0,n[`scroll${i}`])),u=r&&s,g=c.i?h:d-h,y=Be(1,(u?g:h)/d),C=Jo(t,e,r);return 1/C*(1-C)*y},Zo=(t,e,n,o)=>e&&t.animate(n,{timeline:e,composite:o}),Lr=(t,e)=>({transform:[le("0%",e),le(e&&t?"100%":"-100%",e)],[e?t?"right":"left":"top"]:["0%","100%"]}),Mr=t=>`${Math.max(0,t-.5)}px`,uo=(t,e,n,o)=>Zo(t,e,{transform:[le("0px",o),le(Mr(n),o)]},"add"),po=(t,e)=>xn?new xn({source:t,axis:e}):null,Wr=(t,e,n)=>{const{q:o,H:s}=xt(),{scrollbars:r}=o(),{slot:c}=r,{rt:l,Z:i,J:a,K:d,ut:h,st:u,it:g,ft:m}=e,{scrollbars:y}=h?{}:t,{slot:C}=y||{},S=new Map,p=po(u,"x"),x=po(u,"y"),j=Vo([i,a,d],()=>m&&g?i:a,c,C),M=$=>m&&!g&&Lt($)===d,W=$=>{S.forEach((w,I)=>{($?Ne(yt($)?$:[$],I)>-1:!0)&&((w||[]).forEach(q=>{q&&q.cancel()}),S.delete(I))})},F=($,w,I)=>{const A=I?Nt:On;Y($,q=>{A(q.Ut,w)})},_=($,w)=>{Y($,I=>{const[A,q]=w(I);at(A,q)})},O=($,w,I)=>{_($,A=>{const{Gt:q,Xt:G}=A;return[q,{[I?"width":"height"]:`${(Jo(q,G,I,w)*100).toFixed(3)}%`}]})},V=($,w,I)=>{!x&&!x&&_($,A=>{const{Gt:q,Xt:G,Ut:nt}=A,Q=Ar(q,G,u,w,ie(nt),I);return[q,{transform:Q===Q?le(`${(Q*100).toFixed(3)}%`,I):""}]})},U=$=>{const{Ut:w}=$,I=M(w)&&w;return[I,{transform:I?le([`${Ct(u)}px`,`${At(u)}px`]):""}]},L=[],v=[],E=[],b=($,w,I)=>{const A=Cn(I),q=A?I:!0,G=A?!I:!0;q&&F(v,$,w),G&&F(E,$,w)},T=$=>{O(v,$,!0),O(E,$)},D=$=>{V(v,$,!0),V(E,$)},R=()=>{const $=(w,{Ut:I,Gt:A})=>{W(A),S.set(A,[Zo(A,w?p:x,Lr(w&&ie(I),w))])};v.forEach($.bind(0,!0)),E.forEach($.bind(0,!1))},z=()=>{!x&&!x&&(m&&_(v,U),m&&_(E,U))},H=({Et:$})=>{E.concat(v).forEach(({Ut:w})=>{W(w),M(w)&&S.set(w,[uo(w,p,$.x,!0),uo(w,x,$.y)])})},B=$=>{const w=$?Ks:Xs,I=$?v:E,A=jn(I)?Kn:"",q=Jt(`${gt} ${w} ${A}`),G=Jt(qo),nt=Jt(An),Q={Ut:q,Xt:G,Gt:nt};return s||Nt(q,Vs),vt(q,G),vt(G,nt),Z(I,Q),Z(L,[zt.bind(0,q),W,n(Q,b,l,a,u,$?p:x,$)]),Q},N=B.bind(0,!0),X=B.bind(0,!1),et=()=>{vt(j,v[0].Ut),vt(j,E[0].Ut),Le(()=>{b(Kn)},300)};return N(),X(),[{Wt:T,Zt:D,Jt:R,Kt:H,Qt:z,tn:b,nn:{B:p,sn:v,en:N,cn:_.bind(0,v)},rn:{B:x,sn:E,en:X,cn:_.bind(0,E)}},et,It.bind(0,L)]},an=t=>t.pointerType==="mouse",Dr=(t,e,n,o)=>{let s,r,c,l,i,a=bt,d=0;const h=Yo({}),[u]=h,[g,m]=Kt(),[y,C]=Kt(),[S,p]=Kt(100),[x,j]=Kt(100),[M,W]=Kt(100),[F,_]=Kt(()=>d),[O,V,U]=Wr(t,n.Ft,Pr(e,n)),{J:L,et:v,it:E}=n.Ft,{tn:b,Wt:T,Zt:D,Jt:R,Kt:z,Qt:H}=O,B=w=>{b(yn,w,!0),b(yn,w,!1)},N=(w,I)=>{if(_(),w)b(Zn);else{const A=()=>b(Zn,!0);d>0&&!I?F(A):A()}},X=w=>{an(w)&&(l=r,l&&N(!0))},et=[p,_,j,W,C,m,U,ct(L,"pointerover",X,{C:!0}),ct(L,"pointerenter",X),ct(L,"pointerleave",w=>{an(w)&&(l=!1,r&&N(!1))}),ct(L,"pointermove",w=>{an(w)&&s&&g(()=>{p(),N(!0),x(()=>{s&&N(!1)})})}),ct(v,"scroll",w=>{y(()=>{D(n()),c&&N(!0),S(()=>{c&&!l&&N(!1)})}),o(w),H()})],$=u.bind(0);return $.Ft=O,$.qt=V,[(w,I,A)=>{const{Ht:q,Lt:G,It:nt,St:Q,Pt:rt}=A,{I:J}=xt(),ot=wn(e,w,I),ut=n(),{Et:mt,Ot:Wt,yt:Ut,At:Vt}=ut,[de,it]=ot("showNativeOverlaidScrollbars"),[pt,ft]=ot("scrollbars.theme"),[Et,Se]=ot("scrollbars.visibility"),[ue,Ve]=ot("scrollbars.autoHide"),[Ce,Ge]=ot("scrollbars.autoHideSuspend"),[kt]=ot("scrollbars.autoHideDelay"),[je,Ye]=ot("scrollbars.dragScroll"),[Ke,Pt]=ot("scrollbars.clickScroll"),Dt=rt&&!I,Tt=Vt.x||Vt.y,Xe=q||G||Q,Bt=nt||Se,Je=de&&J.x&&J.y,te=(Gt,Yt)=>{const pe=Et==="visible"||Et==="auto"&&Gt==="scroll";return b(Js,pe,Yt),pe};if(d=kt,Dt&&(Ce&&Tt?(B(!1),a(),M(()=>{a=ct(v,"scroll",B.bind(0,!0),{C:!0})})):B(!0)),it&&b(Gs,Je),ft&&(b(i),b(pt,!0),i=pt),Ge&&!Ce&&B(!0),Ve&&(s=ue==="move",r=ue==="leave",c=ue!=="never",N(!c,!0)),Ye&&b(tr,je),Pt&&b(Qs,Ke),Bt){const Gt=te(Wt.x,!0),Yt=te(Wt.y,!1);b(Zs,!(Gt&&Yt))}Xe&&(T(ut),D(ut),R(ut),z(ut),H(),b(Jn,!mt.x,!0),b(Jn,!mt.y,!1),b(Ys,Ut&&!E))},$,()=>{It(et),a()}]},Qo=(t,e,n)=>{jt(t)&&t(e||void 0,n||void 0)},we=(t,e,n)=>{const{G:o,q:s,j:r,N:c}=xt(),l=Qt(),i=me(t),a=i?t:t.target,d=Go(a);if(e&&!d){let h=!1;const u=v=>{const E=Qt()[nr],b=E&&E.O;return b?b(v,!0):v},g=st({},o(),u(e)),[m,y,C]=Pn(n),[S,p,x]=kr(t,g),[j,M,W]=Dr(t,g,p,v=>C("scroll",[L,v])),F=(v,E)=>S(v,!!E),_=F.bind(0,{},!0),O=r(_),V=c(_),U=v=>{pr(a),O(),V(),W(),x(),h=!0,C("destroyed",[L,!!v]),y()},L={options(v,E){if(v){const b=E?o():{},T=Wo(g,st(b,u(v)));En(T)||(st(g,T),F(T))}return st({},g)},on:m,off:(v,E)=>{v&&E&&y(v,E)},state(){const{zt:v,Et:E,Ot:b,At:T,tt:D,$t:R,yt:z}=p();return st({},{overflowEdge:v,overflowAmount:E,overflowStyle:b,hasOverflow:T,padding:D,paddingAbsolute:R,directionRTL:z,destroyed:h})},elements(){const{Z:v,J:E,tt:b,K:T,nt:D,st:R,et:z}=p.Ft,{nn:H,rn:B}=M.Ft,N=et=>{const{Gt:$,Xt:w,Ut:I}=et;return{scrollbar:I,track:w,handle:$}},X=et=>{const{sn:$,en:w}=et,I=N($[0]);return st({},I,{clone:()=>{const A=N(w());return j({},!0,{}),A}})};return st({},{target:v,host:E,padding:b||T,viewport:T,content:D||T,scrollOffsetElement:R,scrollEventElement:z,scrollbarHorizontal:X(H),scrollbarVertical:X(B)})},update:v=>F({},v),destroy:U.bind(0)};return p.Nt((v,E,b)=>{j(E,b,v)}),ur(a,L),Y(wt(l),v=>Qo(l[v],0,L)),dr(p.Ft.it,s().cancel,!i&&t.cancel)?(U(!0),L):(p.qt(),M.qt(),C("initialized",[L]),p.Nt((v,E,b)=>{const{wt:T,St:D,vt:R,Ht:z,Lt:H,It:B,bt:N,Tt:X}=v;C("updated",[L,{updateHints:{sizeChanged:T,directionChanged:D,heightIntrinsicChanged:R,overflowEdgeChanged:z,overflowAmountChanged:H,overflowStyleChanged:B,contentMutation:N,hostMutation:X},changedOptions:E,force:b}])}),L.update(!0),L)}return d};we.plugin=t=>{Y(er(t),e=>Qo(e,we))};we.valid=t=>{const e=t&&t.elements,n=jt(e)&&e();return fn(n)&&!!Go(n.target)};we.env=()=>{const{k:t,I:e,A:n,V:o,Y:s,H:r,B:c,U:l,W:i,q:a,F:d,G:h,X:u}=xt();return st({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:r,scrollTimeline:c,staticDefaultInitialization:l,staticDefaultOptions:i,getDefaultInitialization:a,setDefaultInitialization:d,getDefaultOptions:h,setDefaultOptions:u})};const Br={scrollbars:{visibility:"auto",autoHide:"never"}},Hr=(t,e)=>{K.useEffect(()=>{let n;return t.current&&e&&(n=we(t.current,Br)),()=>{n&&n.destroy()}},[t,e])},Fr=P.div`
  width: ${({width:t})=>(t==null?void 0:t.mob)+"px"||"100%"};
  
  ${tt.tablet} {
    width: ${({width:t})=>(t==null?void 0:t.nab)+"px"||"100%"};
   
  }
  ${tt.desktop} {
    width: ${({width:t})=>(t==null?void 0:t.dt)+"px"||"100%"};
    height: calc(100vh - 220px);
  }
`;function _r({children:t,width:e}){const{isMobile:n}=ys(),o=K.useRef(null);return Hr(o,!n),f.jsx(Fr,{width:e,ref:o,children:t})}_r.propTypes={width:lt.object};const Nr=P.li`
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
  border: 1px solid ${k.textWhite02};
  background: ${k.textWhite005};

  ${tt.mobile} {
    width: 335px;
  }

  ${tt.tablet} {
    width: 335px;
    align-items: center;
  }

  ${tt.desktop} {
    width: 405px;
  }
`,qr=P.div`
  display: flex;
  align-items: flex-start;
`,Ur=P.p`
  display: inline-flex;
  width: auto;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  padding: 0 7.5px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${k.textWhite005};
  border-radius: 4px;
  color: #fff;
`,Vr=P.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${k.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background-color: ${t=>t.reccomend?"#419b09":"#E9101D"};
    margin-right: 8px;
  }
`,Gr=P.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;

  color: ${k.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${k.orangeSecondary};

    svg {
      stroke: ${k.orangeSecondary};
    }
  }

  ${tt.tablet} {
    font-size: 16px;
  }
`,Yr=P.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${k.orange};

  transition: stroke 250ms ease-in-out;
`,Kr=P.div`
  display: inline-flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${k.white};

  ${tt.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 21px;
  }
`,Xr=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`,Jr=P.svg`
  width: 16px;
  height: 16px;

  fill: ${k.white};
`,Zr=P.div`
  display: inline-block;
  align-items: center;
  margin-top: 8px;

  ${tt.tablet} {
    margin-top: 12px;
  }
`,dn=P.div`
  display: inline-flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${k.textWhite04};

  &:last-child {
    margin-right: 0;
  }
`,un=P.p`
  margin-left: 4px;

  color: ${k.white};
`,Qr=P.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${k.backdrop};
`,tc=P.div`
  border: 1px solid ${k.textWhite02};
  position: absolute;

  overflow: auto;
  height: ${t=>t.height[0]}px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${tt.smallMobile} {
    width: 300px;
  }
  ${tt.mobile} {
    width: 335px;
  }
  padding: 48px 20px;
  border-radius: 8px;
  background-color: ${k.modalBlack};
  z-index: 1;

  ${tt.tablet} {
    width: ${t=>t.width}px;
    height: ${t=>t.height[1]}px;

    padding: 48px 32px;
  }
`,ec=P.button`
  position: absolute;
  top: 14px;
  right: 14px;
  ${cs}

  &:hover svg {
    stroke: ${k.orange};
    scale: 1.1;
  }
  &:focus svg {
    stroke: ${k.orange};
    scale: 1.1;
  }
`,nc=P.svg`
  width: 24px;
  height: 24px;
  stroke: ${k.textWhite04};
  scale: 1;

  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke 200ms cubic-bezier(0.4, 0, 0.2, 1);
`,oc=document.querySelector("#modal-root"),fo=({children:t,openModal:e,width:n,height:o})=>{K.useEffect(()=>{const r=c=>{c.code==="Escape"&&e()};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},[e]);const s=r=>{r.currentTarget===r.target&&e()};return is.createPortal(f.jsx(Qr,{onClick:s,children:f.jsxs(tc,{width:n,height:o,children:[f.jsx(ec,{type:"button",onClick:()=>e(),children:f.jsx(nc,{children:f.jsx("use",{href:ce+"#close"})})}),t]})}),oc)};P.div`
  background-color: ${k.modalBlack};
  border-radius: 12px;
  padding: 48px 24px;
  ${tt.tablet} {
    padding: 48px 32px;
  }
`;const sc=P.div`
  position: relative;

  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${tt.tablet} {
    flex-direction: row;
  }
`,rc=P.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${k.orange};
  gap: 10px;
  background-color: inherit;
  color: ${k.textWhite03};

  ${tt.tablet} {
    width: 244px;
    height: 40px;
  }
`,cc=P.input`
  position: relative;
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${k.orange};
  gap: 10px;
  background-color: inherit;
  color: ${k.white};

  &::placeholder {
    color: ${k.textWhite03};
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

  ${tt.tablet} {
    width: 155px;
    height: 40px;
    margin-top: 0;
  }

  :focus-visible {
	outline: 0;
    border: 2px solid ${k.orange};
  }

  &:focus + label {
    top: -10px;
  }
`,ic=P.label`
  position: absolute;
  top: 10px;
  right: 18px;
  font-size: 14px;
  padding: 0 12px;
  background-color: ${k.modalBlack};
  color: ${k.textWhite03};

  transition: top 200ms cubic-bezier(0.4, 0, 0.2, 1);
`,lc=P.div`
  position: relative;
`,ac=P.p`
  font-size: 12px;
  align-items: end;
  color: ${k.white};
`,dc=P.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: ${k.textWhite04};
`,uc=P.div`
  display: flex;
  margin-top: 24px;
  ${tt.tablet} {
    margin-top: 64px;
  }
`,ts=P.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: ${k.orange};
  color: ${k.white};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid ${k.textWhite03};
  margin-right: 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${k.orangeSecondary};
  }

  ${tt.tablet} {
    margin-right: 16px;
  }

  &:disabled {
    color: ${k.textWhite06};
    background: ${k.orangeSecondary};

  }
`,pc=P.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: inherit;
  color: ${k.white};
  border-radius: 12px;
  border: 1px solid ${k.textWhite03};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  ${tt.tablet} {
    padding: 12px 40px;
  }

  &:hover {
    border-color: ${k.orange};
    transition: border-color 0.3s ease-out;
  }
`;function es({data:t,closeModal:e,addProduct:n}){const[o,s]=K.useState(""),r=Math.round(o*t.calories/100),c=So(new Date);return f.jsxs("form",{children:[f.jsxs(sc,{children:[f.jsx("label",{children:f.jsx(rc,{type:"text",value:t.title,disabled:!0})}),f.jsxs(lc,{children:[f.jsx(cc,{id:"grams",type:"number",value:o,onChange:l=>s(l.target.value)}),f.jsx(ic,{htmlFor:"grams",children:"grams "})]})]}),f.jsxs(ac,{children:[f.jsx(dc,{children:"Calories:"})," ",r]}),f.jsxs(uc,{children:[f.jsx(ts,{disabled:!(o>0),type:"button",onClick:()=>n({id:t.id,date:c,amount:o,calories:r}),children:"Add to diary"}),f.jsx(pc,{type:"button",onClick:e,children:"Cancel"})]})]})}es.propTypes={data:lt.object,closeModal:lt.func,addProduct:lt.func};var ho=typeof window>"u"?K.useEffect:K.useLayoutEffect,fc=({isPlaying:t,duration:e,startAt:n=0,updateInterval:o=0,onComplete:s,onUpdate:r})=>{let[c,l]=K.useState(n),i=K.useRef(0),a=K.useRef(n),d=K.useRef(n*-1e3),h=K.useRef(null),u=K.useRef(null),g=K.useRef(null),m=S=>{let p=S/1e3;if(u.current===null){u.current=p,h.current=requestAnimationFrame(m);return}let x=p-u.current,j=i.current+x;u.current=p,i.current=j;let M=a.current+(o===0?j:(j/o|0)*o),W=a.current+j,F=typeof e=="number"&&W>=e;l(F?e:M),F||(h.current=requestAnimationFrame(m))},y=()=>{h.current&&cancelAnimationFrame(h.current),g.current&&clearTimeout(g.current),u.current=null},C=K.useCallback(S=>{y(),i.current=0;let p=typeof S=="number"?S:n;a.current=p,l(p),t&&(h.current=requestAnimationFrame(m))},[t,n]);return ho(()=>{if(r==null||r(c),e&&c>=e){d.current+=e*1e3;let{shouldRepeat:S=!1,delay:p=0,newStartAt:x}=(s==null?void 0:s(d.current/1e3))||{};S&&(g.current=setTimeout(()=>C(x),p*1e3))}},[c,e]),ho(()=>(t&&(h.current=requestAnimationFrame(m)),y),[t,e,o]),{elapsedTime:c,reset:C}},hc=(t,e,n)=>{let o=t/2,s=e/2,r=o-s,c=2*r,l=n==="clockwise"?"1,0":"0,1",i=2*Math.PI*r;return{path:`m ${o},${s} a ${r},${r} 0 ${l} 0,${c} a ${r},${r} 0 ${l} 0,-${c}`,pathLength:i}},go=(t,e)=>t===0||t===e?0:typeof e=="number"?t-e:0,gc=t=>({position:"relative",width:t,height:t}),xc={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},ns=(t,e,n,o,s)=>{if(o===0)return e;let r=(s?o-t:t)/o;return e+n*r},xo=t=>{var e,n;return(n=(e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(o,s,r,c)=>`#${s}${s}${r}${r}${c}${c}`).substring(1).match(/.{2}/g))==null?void 0:e.map(o=>parseInt(o,16)))!=null?n:[]},mc=(t,e)=>{var n;let{colors:o,colorsTime:s,isSmoothColorTransition:r=!0}=t;if(typeof o=="string")return o;let c=(n=s==null?void 0:s.findIndex((u,g)=>u>=e&&e>=s[g+1]))!=null?n:-1;if(!s||c===-1)return o[0];if(!r)return o[c];let l=s[c]-e,i=s[c]-s[c+1],a=xo(o[c]),d=xo(o[c+1]),h=!!t.isGrowing;return`rgb(${a.map((u,g)=>ns(l,u,d[g]-u,i,h)|0).join(",")})`},bc=t=>{let{duration:e,initialRemainingTime:n,updateInterval:o,size:s=180,strokeWidth:r=12,trailStrokeWidth:c,isPlaying:l=!1,isGrowing:i=!1,rotation:a="clockwise",onComplete:d,onUpdate:h}=t,u=K.useRef(),g=Math.max(r,c??0),{path:m,pathLength:y}=hc(s,g,a),{elapsedTime:C}=fc({isPlaying:l,duration:e,startAt:go(e,n),updateInterval:o,onUpdate:typeof h=="function"?p=>{let x=Math.ceil(e-p);x!==u.current&&(u.current=x,h(x))}:void 0,onComplete:typeof d=="function"?p=>{var x;let{shouldRepeat:j,delay:M,newInitialRemainingTime:W}=(x=d(p))!=null?x:{};if(j)return{shouldRepeat:j,delay:M,newStartAt:go(e,W)}}:void 0}),S=e-C;return{elapsedTime:C,path:m,pathLength:y,remainingTime:Math.ceil(S),rotation:a,size:s,stroke:mc(t,S),strokeDashoffset:ns(C,0,y,e,i),strokeWidth:r}},os=t=>{let{children:e,strokeLinecap:n,trailColor:o,trailStrokeWidth:s}=t,{path:r,pathLength:c,stroke:l,strokeDashoffset:i,remainingTime:a,elapsedTime:d,size:h,strokeWidth:u}=bc(t);return fe.createElement("div",{style:gc(h)},fe.createElement("svg",{viewBox:`0 0 ${h} ${h}`,width:h,height:h,xmlns:"http://www.w3.org/2000/svg"},fe.createElement("path",{d:r,fill:"none",stroke:o??"#d9d9d9",strokeWidth:s??u}),fe.createElement("path",{d:r,fill:"none",stroke:l,strokeLinecap:n??"round",strokeWidth:u,strokeDasharray:c,strokeDashoffset:i})),typeof e=="function"&&fe.createElement("div",{style:xc},e({remainingTime:a,elapsedTime:d,color:l})))};os.displayName="CountdownCircleTimer";const mo=P.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,yc=P.div`
  margin-bottom: 4px;
  font-size: 10px;
  line-height: 140%;
  color: ${k.textWhite04};
`,bo=P.button`
  margin-bottom: 8px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;

  &:hover svg {
    scale: 1.15;
  }

`,yo=P.svg`
  width: 32px;
  height: 32px;
  fill: ${k.orange};
  stroke: ${k.white};

  scale: 1;

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,wc=P.div`
  font-size: 14px;
  line-height: 128%;
  color: ${k.textWhite03};
`,vc=P.span`
  margin-left: 8px;
  color: ${k.orange};
`;function ss({writeTime:t,isPlaying:e,calory:n,startExercise:o,stopExercise:s}){return f.jsxs(f.Fragment,{children:[f.jsxs(mo,{children:[f.jsx(yc,{children:"Timer"}),f.jsx(os,{size:124,duration:180,colors:"#E6533C",strokeWidth:4,trailColor:"#EFEDE81A",isPlaying:e,children:t})]}),f.jsxs(mo,{children:[e?f.jsx(bo,{type:"button",onClick:s,children:f.jsx(yo,{children:f.jsx("use",{href:ce+"#pause"})})}):f.jsx(bo,{type:"button",onClick:o,children:f.jsx(yo,{children:f.jsx("use",{href:ce+"#play"})})}),f.jsxs(wc,{children:["Burned calories:",f.jsx(vc,{children:n})]})]})]})}ss.propTypes={calory:lt.number.isRequired,writeTime:lt.func.isRequired,startExercise:lt.func.isRequired,stopExercise:lt.func.isRequired,isPlaying:lt.bool.isRequired};const $c=P.div`
  position: relative;
  z-index: 100;
  width: 335px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border: transparent;

  background-color: ${k.modalBackground};
  ${tt.tablet} {
    width: 694px;
    display: flex;
    gap: 15px;
  }
`,Sc=P.div`
  width: 270px;
  height: 226px;
  overflow: hidden;
  border: 1px solid ${k.textWhite02};
  border-radius: 12px;
`,Cc=P.img`
  width: 270px;
  height: 226px;
`,jc=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 40px;
  ${tt.tablet} {
    margin-bottom: 0;
  }
`,Ec=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  ${tt.tablet} {
    height: 226px;
  }
`,he=P.div`
  flex-basis: calc((100% - 8px) / 2);

  min-height: 62px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid ${k.textWhite02};
  background-color: ${k.textWhite005};
  ${tt.tablet} {
    min-height: 68px;
  }
`,ge=P.div`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 133%;
  color: ${k.textWhite04};
`,xe=P.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 128.571%;
  color: ${k.white};
  ${tt.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`,kc=P.div`
  ${tt.tablet} {
    position: absolute;
    bottom: 48px;
    right: 32px;
  }
`,Tc=P.span`
  font-size: 16px;
  line-height: 150%;
  color: ${k.white};
`;function rs({data:t,addExercise:e}){const{_id:n,burnedCalories:o,name:s,bodyPart:r,gifUrl:c,target:l,equipment:i,time:a}=t,[d,h]=K.useState(0),[u,g]=K.useState(0),[m,y]=K.useState(!1),[C,S]=K.useState(null),p=vo(),x=(O,V,U)=>{const L=Math.floor(U*O/(V*60));h(L)};K.useEffect(()=>{x(o,a,u)},[o,a,u]);const j=()=>{g(O=>O+1)},M=()=>{const O=setInterval(j,1e3);S(O),y(!0),p(pn(!0))},W=()=>{y(!1),clearInterval(C),S(null)},F=So(new Date),_=({remainingTime:O})=>{const V=Math.floor(O/60).toString().length>1?Math.floor(O/60):"0"+Math.floor(O/60),U=(O%60).toString().length>1?O%60:"0"+O%60;return f.jsxs(Tc,{children:[V,":",U]})};return f.jsxs($c,{children:[f.jsxs(jc,{children:[f.jsx(Sc,{children:f.jsx(Cc,{src:c,alt:"gif of exercise"})}),f.jsx(ss,{startExercise:M,stopExercise:W,countCalory:x,calory:d,writeTime:_,isPlaying:m})]}),f.jsxs(Ec,{children:[f.jsxs(he,{children:[f.jsx(ge,{children:"Name"}),f.jsx(xe,{children:Rt(s)})]}),f.jsxs(he,{children:[f.jsx(ge,{children:"Target"}),f.jsx(xe,{children:Rt(l)})]}),f.jsxs(he,{children:[f.jsx(ge,{children:"Body Part"}),f.jsx(xe,{children:Rt(r)})]}),f.jsxs(he,{children:[f.jsx(ge,{children:"Equipment"}),f.jsx(xe,{children:Rt(i)})]}),f.jsxs(he,{children:[f.jsx(ge,{children:"Time"}),f.jsxs(xe,{children:[a," minutes"]})]})]}),f.jsx(kc,{children:f.jsx(ts,{disabled:!(d>10),type:"button",onClick:()=>{e({id:n,date:F,time:u,burnedCalories:d}),p(pn(!1))},children:"Add to diary"})})]})}rs.propTypes={data:lt.object.isRequired,addExercise:lt.func};$o.defaults.baseURL="https://power-pulse-rest-api.onrender.com";const Oc=ls("addProduct",async(t,{rejectWithValue:e})=>{try{await $o.post("/api/diary/add-product",t)}catch{return as.error("Oops... Something went wrong! Try again!"),e("Oops... Something went wrong!")}}),zc=(t,e)=>{let n=24;return e<768?n=23:e<1440&&(n=19),t.length<=n?t:t.substring(0,n)+"..."},Ic=P.div`
  display: flex;
  flex-direction: column;
  width: 190px;
`,Pc=P.img`
  width: 120px;
  height: 97px;
  margin: 0 auto;
  margin-bottom: 19px;
`,Rc=P.strong`
  margin: 0 auto;
  margin-bottom: 16px;

  color: ${k.white};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: ${32/24};
`,Ac=P.ul`
  margin: 0 auto;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Lc=P.p`
  color: ${k.textWhite03};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${18/14};
  display: flex;
  align-items: center;
`,Mc=P.span`
  color: ${k.orange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${14/18};
  margin-left: 5px;
`,Wc=P(ds)`
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
    color: ${k.orange};
    scale: 1.1;
  }
`,Dc=P.svg`
  stroke: currentColor;
  width: 16px;
  height: 16px;
  fill: ${k.textWhite04};
  scale: 1;


`,Bc="/september-project/assets/foodIcon-f93b792c.png",Hc="/september-project/assets/thumbUp-e8c8bf67.png";function Sn({modalType:t,data:e,btnNext:n}){const o=r=>{if(r==="time")return"Your  time:   ";if(r==="burnedCalories")return"Burned calories:    ";if(r==="calories")return"Calories: "},s=r=>Object.keys(r).map(i=>f.jsx("li",{children:f.jsxs(Lc,{children:[`${o(i)} `,f.jsxs(Mc,{children:[i==="time"&&`${r[i]} seconds`," ",i==="burnedCalories"&&`${r[i]}`," ",i==="calories"&&`${r[i]}`," "]})]})},us()));return f.jsxs(Ic,{children:[f.jsx(Pc,{src:t==="product"?Bc:Hc,alt:"it`s a placeholder image, but it`s avocado too"}),f.jsx(Rc,{children:"Well Done"}),f.jsx(Ac,{children:s(e)}),f.jsx(fs,{title:t==="product"?"Next product":"Next exercise",btnNext:n}),f.jsxs(Wc,{to:"/diary",children:["To the diary",f.jsx(Dc,{fill:"",children:f.jsx("use",{href:ce+"#arrow-right"})})]})]})}Sn.propTypes={modalType:lt.oneOf(["product","exercise"]),data:lt.object.isRequired,btnNext:lt.func};const Zc=t=>t.exercises.items,Qc=t=>t.exercises.getFilters,ti=t=>t.exercises.isLoading,Fc=t=>t.exercises.isTimerOn,_c=({page:t,data:e})=>{const[n,o]=K.useState(window.innerWidth),[s,r]=K.useState(!1),[c,l]=K.useState(!1),[i,a]=K.useState(0),[d,h]=K.useState(0),[u,g]=K.useState(0),m=wo(Fc),y=()=>{r(W=>!W),document.body.classList.toggle("body-scroll-lock")},C=()=>{l(W=>!W),document.body.classList.toggle("body-scroll-lock")},S=vo();K.useEffect(()=>(window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[]);const p=()=>{o(window.innerWidth)},x=gs(t,e),j=({id:W,date:F,amount:_,calories:O,time:V,burnedCalories:U})=>{if(t==="product"){const L={productId:W,date:F,amount:_,calories:O};a(O),S(Oc(L))}if(t==="exercise"){const L={exerciseId:W,date:F,time:V,burnedCalories:U};if(!V||!U)return;h(V),g(U),S(ps(L))}y(),C()},M=()=>{m?hs.Confirm.show("Warning","Do you really want to exit? You will lost all of your progress.","Yes","No",()=>{S(pn(!1)),y()},()=>{},{backgroundColor:`${k.black}`,titleColor:`${k.orange}`,messageColor:`${k.orangeSecondary}`,okButtonBackground:`${k.orange}`}):y()};return f.jsxs(Nr,{children:[f.jsxs(qr,{children:[f.jsx(Ur,{children:x.subtitle}),t==="product"&&f.jsx(Vr,{reccomend:e.recommended,children:e.recommended?"Recommended":"Not recommended"}),f.jsxs(Gr,{onClick:y,children:[x.button,f.jsx(Yr,{children:f.jsx("use",{href:ce+"#arrow-right"})})]})]}),f.jsxs(Kr,{children:[f.jsx(Xr,{children:f.jsx(Jr,{children:f.jsx("use",{href:ce+"#runningMan"})})}),zc(x.title,n)]}),f.jsxs(Zr,{children:[f.jsxs(dn,{children:[x.text1,f.jsx(un,{children:x.subText1})]}),f.jsxs(dn,{children:[x.text2,f.jsx(un,{children:x.subText2})]}),f.jsxs(dn,{children:[x.text3,f.jsx(un,{children:x.subText3})]})]}),s&&f.jsxs(fo,{openModal:t==="product"?y:M,width:t==="product"?481:696,height:t==="product"?[285,286]:[405,550],children:[t==="product"&&f.jsx(es,{closeModal:y,data:e,addProduct:j}),t==="exercise"&&f.jsx(rs,{data:e,addExercise:j})]}),c&&f.jsxs(fo,{openModal:C,width:430,height:t==="product"?[389,428]:[402,408],children:[t==="product"&&f.jsx(Sn,{modalType:"product",data:{calories:i},btnNext:C}),t==="exercise"&&f.jsx(Sn,{modalType:"exercise",data:{time:d,burnedCalories:u},btnNext:C})]})]})};_c.propTypes={page:lt.string,data:lt.object,openModal:lt.func};export{Jc as P,_r as S,Xc as a,Kc as b,Gc as c,xs as d,_c as e,Zc as f,Yc as g,ti as h,Qc as s};
