import{n as ut,m as Tt,j as et,r as oe,P as Te,c as wt,s as Ln}from"./index-d61bca6e.js";import{c as ue}from"./capitalizeWord-85339af4.js";const Io=(t,e)=>t==="product"?{subtitle:"DIET",title:ue(e.title),button:"Add",text1:"Calories:",text2:"Category:",text3:"Weight:",subText1:e.calories,subText2:ue(e.category),subText3:e.weight}:{subtitle:"WORKOUT",title:ue(e.name),button:"Start",text1:"Burned calories:",text2:"Body part:",text3:"Target:",subText1:e.burnedCalories,subText2:ue(e.bodyPart),subText3:ue(e.target)},_o=ut.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 100vh;
  width: 100%;

  margin-top: ${t=>t.marginTop};
  ${Tt.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 32px;
  }
  ${Tt.desktop} {
    width: 868px;
  }
`;function $c({children:t,...e}){return et.jsx(_o,{...e,children:t})}const Do=["(max-width: 767px)","(min-width: 768px) and (max-width: 1439px)","(min-width: 1440px)"],Fo=()=>{const t=Do.map(s=>matchMedia(s)),e=()=>t.map(s=>s.matches),[n,o]=oe.useState(e);return oe.useLayoutEffect(()=>{const s=()=>o(e);return t.forEach(c=>c.addEventListener("change",s)),()=>t.forEach(c=>c.removeEventListener("change",s))}),["isMobile","isTablet","isDesktop"].reduce((s,c,r)=>({...s,[c]:n[r]}),{})};/*!
 * OverlayScrollbars
 * Version: 2.3.1
 *
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 */function W(t,e){if(je(t))for(let n=0;n<t.length&&e(t[n],n,t)!==!1;n++);else t&&W(Object.keys(t),n=>e(t[n],n,t));return t}function st(t,e){const n=Bt(e);if(gt(e)||n){let s=n?"":{};if(t){const c=window.getComputedStyle(t,null);s=n?jn(t,c,e):e.reduce((r,i)=>(r[i]=jn(t,c,i),r),s)}return s}t&&W(bt(e),s=>ns(t,s,e[s]))}const xt=(t,e)=>{const{o:n,u:o,_:s}=t;let c=n,r;const i=(u,m)=>{const f=c,p=u,v=m||(o?!o(f,p):f!==p);return(v||s)&&(c=p,r=f),[c,v,r]};return[e?u=>i(e(c,r),u):i,u=>[c,!!u,r]]},ge=()=>typeof window<"u",ro=ge()&&Node.ELEMENT_NODE,{toString:Bo,hasOwnProperty:Ye}=Object.prototype,At=t=>t===void 0,Re=t=>t===null,Vo=t=>At(t)||Re(t)?`${t}`:Bo.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),Dt=t=>typeof t=="number",Bt=t=>typeof t=="string",mn=t=>typeof t=="boolean",St=t=>typeof t=="function",gt=t=>Array.isArray(t),fe=t=>typeof t=="object"&&!gt(t)&&!Re(t),je=t=>{const e=!!t&&t.length,n=Dt(e)&&e>-1&&e%1==0;return gt(t)||!St(t)&&n?e>0&&fe(t)?e-1 in t:!0:!1},rn=t=>{if(!t||!fe(t)||Vo(t)!=="object")return!1;let e;const n="constructor",o=t[n],s=o&&o.prototype,c=Ye.call(t,n),r=s&&Ye.call(s,"isPrototypeOf");if(o&&!c&&!r)return!1;for(e in t);return At(e)||Ye.call(t,e)},de=t=>{const e=HTMLElement;return t?e?t instanceof e:t.nodeType===ro:!1},Ie=t=>{const e=Element;return t?e?t instanceof e:t.nodeType===ro:!1},_e=(t,e,n)=>t.indexOf(e,n),Y=(t,e,n)=>(!n&&!Bt(e)&&je(e)?Array.prototype.push.apply(t,e):t.push(e),t),Gt=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach(o=>{Y(n,o)}):W(t,o=>{Y(n,o)}),n)},xn=t=>!!t&&t.length===0,zt=(t,e,n)=>{W(t,s=>s&&s.apply(void 0,e||[])),!n&&(t.length=0)},De=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),bt=t=>t?Object.keys(t):[],Q=(t,e,n,o,s,c,r)=>{const i=[e,n,o,s,c,r];return(typeof t!="object"||Re(t))&&!St(t)&&(t={}),W(i,l=>{W(bt(l),a=>{const u=l[a];if(t===u)return!0;const m=gt(u);if(u&&rn(u)){const f=t[a];let p=f;m&&!gt(f)?p=[]:!m&&!rn(f)&&(p={}),t[a]=Q(p,u)}else t[a]=m?u.slice():u})}),t},vn=t=>{for(const e in t)return!1;return!0},io=(t,e,n,o)=>{if(At(o))return n?n[t]:e;n&&(Bt(o)||Dt(o))&&(n[t]=o)},ct=(t,e,n)=>{if(At(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},lo=(t,e)=>new Set((ct(t,e)||"").split(" ")),at=(t,e)=>{t&&t.removeAttribute(e)},Yt=(t,e,n,o)=>{if(n){const s=lo(t,e);s[o?"add":"delete"](n);const c=Gt(s).join(" ").trim();ct(t,e,c)}},Wo=(t,e,n)=>lo(t,e).has(n),yt=(t,e)=>io("scrollLeft",0,t,e),Ht=(t,e)=>io("scrollTop",0,t,e),ln=ge()&&Element.prototype,ao=(t,e)=>{const n=[],o=e?Ie(e)&&e:document;return o?Y(n,o.querySelectorAll(t)):n},Uo=(t,e)=>{const n=e?Ie(e)&&e:document;return n?n.querySelector(t):null},ze=(t,e)=>Ie(t)?(ln.matches||ln.msMatchesSelector).call(t,e):!1,wn=t=>t?Gt(t.childNodes):[],Lt=t=>t&&t.parentElement,Zt=(t,e)=>{if(Ie(t)){const n=ln.closest;if(n)return n.call(t,e);do{if(ze(t,e))return t;t=Lt(t)}while(t)}},No=(t,e,n)=>{const o=Zt(t,e),s=t&&Uo(n,o),c=Zt(s,e)===o;return o&&s?o===t||s===t||c&&Zt(Zt(t,n),e)!==o:!1},yn=(t,e,n)=>{if(n&&t){let o=e,s;je(n)?(s=document.createDocumentFragment(),W(n,c=>{c===o&&(o=c.previousSibling),s.appendChild(c)})):s=n,e&&(o?o!==e&&(o=o.nextSibling):o=t.firstChild),t.insertBefore(s,o||null)}},mt=(t,e)=>{yn(t,null,e)},qo=(t,e)=>{yn(Lt(t),t,e)},An=(t,e)=>{yn(Lt(t),t&&t.nextSibling,e)},Pt=t=>{if(je(t))W(Gt(t),e=>Pt(e));else if(t){const e=Lt(t);e&&e.removeChild(t)}},Xt=t=>{const e=document.createElement("div");return t&&ct(e,"class",t),e},uo=t=>{const e=Xt();return e.innerHTML=t.trim(),W(wn(e),n=>Pt(n))},an=t=>t.charAt(0).toUpperCase()+t.slice(1),Yo=()=>Xt().style,Xo=["-webkit-","-moz-","-o-","-ms-"],Go=["WebKit","Moz","O","MS","webkit","moz","o","ms"],Xe={},Ge={},Ko=t=>{let e=Ge[t];if(De(Ge,t))return e;const n=an(t),o=Yo();return W(Xo,s=>{const c=s.replace(/-/g,"");return!(e=[t,s+t,c+n,an(c)+n].find(i=>o[i]!==void 0))}),Ge[t]=e||""},re=t=>{if(ge()){let e=Xe[t]||window[t];return De(Xe,t)||(W(Go,n=>(e=e||window[n+an(t)],!e)),Xe[t]=e),e}},Jo=re("MutationObserver"),Mn=re("IntersectionObserver"),Qt=re("ResizeObserver"),fo=re("cancelAnimationFrame"),po=re("requestAnimationFrame"),un=re("ScrollTimeline"),ke=ge()&&window.setTimeout,dn=ge()&&window.clearTimeout,Zo=/[^\x20\t\r\n\f]+/g,ho=(t,e,n)=>{const o=t&&t.classList;let s,c=0,r=!1;if(o&&e&&Bt(e)){const i=e.match(Zo)||[];for(r=i.length>0;s=i[c++];)r=!!n(o,s)&&r}return r},Sn=(t,e)=>{ho(t,e,(n,o)=>n.remove(o))},Ft=(t,e)=>(ho(t,e,(n,o)=>n.add(o)),Sn.bind(0,t,e)),Fe=(t,e,n,o)=>{if(t&&e){let s=!0;return W(n,c=>{const r=o?o(t[c]):t[c],i=o?o(e[c]):e[c];r!==i&&(s=!1)}),s}return!1},go=(t,e)=>Fe(t,e,["w","h"]),bo=(t,e)=>Fe(t,e,["x","y"]),Qo=(t,e)=>Fe(t,e,["t","r","b","l"]),Rn=(t,e,n)=>Fe(t,e,["width","height"],n&&(o=>Math.round(o))),ht=()=>{},qt=t=>{let e;const n=t?ke:po,o=t?dn:fo;return[s=>{o(e),e=n(s,St(t)?t():t)},()=>o(e)]},$n=(t,e)=>{let n,o,s,c=ht;const{g:r,v:i,p:l}=e||{},a=function(v){c(),dn(n),n=o=void 0,c=ht,t.apply(this,v)},u=p=>l&&o?l(o,p):p,m=()=>{c!==ht&&a(u(s)||s)},f=function(){const v=Gt(arguments),S=St(r)?r():r;if(Dt(S)&&S>=0){const A=St(i)?i():i,d=Dt(A)&&A>=0,w=S>0?ke:po,P=S>0?dn:fo,B=u(v)||v,D=a.bind(0,B);c();const _=w(D,S);c=()=>P(_),d&&!n&&(n=ke(m,A)),o=s=B}else a(v)};return f.m=m,f},ts={opacity:1,zIndex:1},we=(t,e)=>{const n=t||"",o=e?parseFloat(n):parseInt(n,10);return o===o?o:0},es=(t,e)=>!ts[t]&&Dt(e)?`${e}px`:e,jn=(t,e,n)=>String((e!=null?e[n]||e.getPropertyValue(n):t.style[n])||""),ns=(t,e,n)=>{try{const{style:o}=t;At(o[e])?o.setProperty(e,n):o[e]=es(e,n)}catch{}},se=t=>st(t,"direction")==="rtl",In=(t,e,n)=>{const o=e?`${e}-`:"",s=n?`-${n}`:"",c=`${o}top${s}`,r=`${o}right${s}`,i=`${o}bottom${s}`,l=`${o}left${s}`,a=st(t,[c,r,i,l]);return{t:we(a[c],!0),r:we(a[r],!0),b:we(a[i],!0),l:we(a[l],!0)}},ce=(t,e)=>`translate${gt(t)?`(${t[0]},${t[1]})`:`${e?"X":"Y"}(${t})`}`,{round:_n}=Math,On={w:0,h:0},pe=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:On,Pe=t=>t?{w:t.clientWidth,h:t.clientHeight}:On,He=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:On,Le=t=>{const e=parseFloat(st(t,"height"))||0,n=parseFloat(st(t,"width"))||0;return{w:n-_n(n),h:e-_n(e)}},Ct=t=>t.getBoundingClientRect(),te=t=>!!(t&&(t.height||t.width));let ye;const os=()=>{if(At(ye)){ye=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){ye=!0}}))}catch{}}return ye},mo=t=>t.split(" "),ss=(t,e,n,o)=>{W(mo(e),s=>{t.removeEventListener(s,n,o)})},nt=(t,e,n,o)=>{var s;const c=os(),r=(s=c&&o&&o.S)!=null?s:c,i=o&&o.$||!1,l=o&&o.C||!1,a=[],u=c?{passive:r,capture:i}:i;return W(mo(e),m=>{const f=l?p=>{t.removeEventListener(m,f,i),n&&n(p)}:n;Y(a,ss.bind(null,t,m,f,i)),t.addEventListener(m,f,u)}),zt.bind(0,a)},xo=t=>t.stopPropagation(),vo=t=>t.preventDefault(),cs={x:0,y:0},Ke=t=>{const e=t?Ct(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:cs},Dn=(t,e)=>{W(gt(e)?e:[e],t)},En=t=>{const e=new Map,n=(c,r)=>{if(c){const i=e.get(c);Dn(l=>{i&&i[l?"delete":"clear"](l)},r)}else e.forEach(i=>{i.clear()}),e.clear()},o=(c,r)=>{if(Bt(c)){const a=e.get(c)||new Set;return e.set(c,a),Dn(u=>{St(u)&&a.add(u)},r),n.bind(0,c,r)}mn(r)&&r&&n();const i=bt(c),l=[];return W(i,a=>{const u=c[a];u&&Y(l,o(a,u))}),zt.bind(0,l)},s=(c,r)=>{const i=e.get(c);W(Gt(i),l=>{r&&!xn(r)?l.apply(0,r):l()})};return o(t||{}),[o,n,s]},Fn=t=>JSON.stringify(t,(e,n)=>{if(St(n))throw new Error;return n}),rs={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,autoHideSuspend:!1,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},wo=(t,e)=>{const n={},o=bt(e).concat(bt(t));return W(o,s=>{const c=t[s],r=e[s];if(fe(c)&&fe(r))Q(n[s]={},wo(c,r)),vn(n[s])&&delete n[s];else if(De(e,s)&&r!==c){let i=!0;if(gt(c)||gt(r))try{Fn(c)===Fn(r)&&(i=!1)}catch{}i&&(n[s]=r)}}),n},be="data-overlayscrollbars",yo="os-environment",So=`${yo}-flexbox-glue`,is=`${So}-max`,$o="os-scrollbar-hidden",Je=`${be}-initialize`,vt=be,Oo=`${vt}-overflow-x`,Eo=`${vt}-overflow-y`,ee="overflowVisible",ls="scrollbarHidden",Bn="scrollbarPressed",Ae="updating",It=`${be}-viewport`,Ze="arrange",Co="scrollbarHidden",ne=ee,fn=`${be}-padding`,as=ne,Vn=`${be}-content`,Cn="os-size-observer",us=`${Cn}-appear`,ds=`${Cn}-listener`,fs="os-trinsic-observer",ps="os-no-css-vars",hs="os-theme-none",dt="os-scrollbar",gs=`${dt}-rtl`,bs=`${dt}-horizontal`,ms=`${dt}-vertical`,To=`${dt}-track`,Tn=`${dt}-handle`,xs=`${dt}-visible`,vs=`${dt}-cornerless`,Wn=`${dt}-transitionless`,Un=`${dt}-interaction`,Nn=`${dt}-unusable`,pn=`${dt}-auto-hide`,qn=`${pn}-hidden`,Yn=`${dt}-wheel`,ws=`${To}-interactive`,ys=`${Tn}-interactive`,Po={},Kt=()=>Po,Ss=t=>{const e=[];return W(gt(t)?t:[t],n=>{const o=bt(n);W(o,s=>{Y(e,Po[s]=n[s])})}),e},$s="__osOptionsValidationPlugin",Os="__osSizeObserverPlugin",Pn="__osScrollbarsHidingPlugin",Es="__osClickScrollPlugin";let Qe;const Xn=(t,e,n,o)=>{mt(t,e);const s=Pe(e),c=pe(e),r=Le(n);return o&&Pt(e),{x:c.h-s.h+r.h,y:c.w-s.w+r.w}},Cs=t=>{let e=!1;const n=Ft(t,$o);try{e=st(t,Ko("scrollbar-width"))==="none"||window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return n(),e},Ts=(t,e)=>{const n="hidden";st(t,{overflowX:n,overflowY:n,direction:"rtl"}),yt(t,0);const o=Ke(t),s=Ke(e);yt(t,-999);const c=Ke(e);return{i:o.x===s.x,n:s.x!==c.x}},Ps=(t,e)=>{const n=Ft(t,So),o=Ct(t),s=Ct(e),c=Rn(s,o,!0),r=Ft(t,is),i=Ct(t),l=Ct(e),a=Rn(l,i,!0);return n(),r(),c&&a},zs=()=>{const{body:t}=document,n=uo(`<div class="${yo}"><div></div></div>`)[0],o=n.firstChild,[s,,c]=En(),[r,i]=xt({o:Xn(t,n,o),u:bo},Xn.bind(0,t,n,o,!0)),[l]=i(),a=Cs(n),u={x:l.x===0,y:l.y===0},m={elements:{host:null,padding:!a,viewport:d=>a&&d===d.ownerDocument.body&&d,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},f=Q({},rs),p=Q.bind(0,{},f),v=Q.bind(0,{},m),S={k:l,I:u,A:a,H:st(n,"zIndex")==="-1",B:!!un,V:Ts(n,o),Y:Ps(n,o),j:s.bind(0,"z"),N:s.bind(0,"r"),q:v,F:d=>Q(m,d)&&v(),G:p,X:d=>Q(f,d)&&p(),U:Q({},m),W:Q({},f)},z=window.addEventListener,A=$n(d=>c(d?"z":"r"),{g:33,v:99});if(at(n,"style"),Pt(n),z("resize",A.bind(0,!1)),!a&&(!u.x||!u.y)){let d;z("resize",()=>{const w=Kt()[Pn];d=d||w&&w.R(),d&&d(S,r,A.bind(0,!0))})}return S},ft=()=>(Qe||(Qe=zs()),Qe),zn=(t,e)=>St(e)?e.apply(0,t):e,ks=(t,e,n,o)=>{const s=At(o)?n:o;return zn(t,s)||e.apply(0,t)},zo=(t,e,n,o)=>{const s=At(o)?n:o,c=zn(t,s);return!!c&&(de(c)?c:e.apply(0,t))},Hs=(t,e,n)=>{const{nativeScrollbarsOverlaid:o,body:s}=n||{},{I:c,A:r}=ft(),{nativeScrollbarsOverlaid:i,body:l}=e,a=o??i,u=At(s)?l:s,m=(c.x||c.y)&&a,f=t&&(Re(u)?!r:u);return!!m||!!f},kn=new WeakMap,Ls=(t,e)=>{kn.set(t,e)},As=t=>{kn.delete(t)},ko=t=>kn.get(t),Gn=(t,e)=>t?e.split(".").reduce((n,o)=>n&&De(n,o)?n[o]:void 0,t):void 0,hn=(t,e,n)=>o=>[Gn(t,o),n||Gn(e,o)!==void 0],Ho=t=>{let e=t;return[()=>e,n=>{e=Q({},e,n)}]},Se="tabindex",$e=Xt.bind(0,""),tn=t=>{mt(Lt(t),wn(t)),Pt(t)},Ms=t=>{const e=ft(),{q:n,A:o}=e,s=Kt()[Pn],c=s&&s.T,{elements:r}=n(),{host:i,padding:l,viewport:a,content:u}=r,m=de(t),f=m?{}:t,{elements:p}=f,{host:v,padding:S,viewport:z,content:A}=p||{},d=m?t:f.target,w=ze(d,"textarea"),P=d.ownerDocument,R=P.documentElement,B=d===P.body,D=P.defaultView,_=ks.bind(0,[d]),j=zo.bind(0,[d]),G=zn.bind(0,[d]),U=_.bind(0,$e,a),M=j.bind(0,$e,u),b=U(z),y=b===d,h=y&&B,$=!y&&M(A),k=!y&&de(b)&&b===$,C=k&&!!G(u),O=C?U():b,L=C?$:M(),I=h?R:k?O:b,N=w?_($e,i,v):d,K=h?I:N,x=k?L:$,g=P.activeElement,E=!y&&D.top===D&&g===d,T={Z:d,J:K,K:I,tt:!y&&j($e,l,S),nt:x,ot:!y&&!o&&c&&c(e),st:h?R:I,et:h?P:I,ct:D,rt:P,lt:w,it:B,ut:m,ft:y,dt:k,_t:(ot,it)=>Wo(I,y?vt:It,y?it:ot),ht:(ot,it,lt)=>Yt(I,y?vt:It,y?it:ot,lt)},F=bt(T).reduce((ot,it)=>{const lt=T[it];return Y(ot,lt&&de(lt)&&!Lt(lt)?lt:!1)},[]),V=ot=>ot?_e(F,ot)>-1:null,{Z:J,J:X,tt,K:q,nt:Z,ot:rt}=T,pt=[()=>{at(X,vt),at(X,Je),at(J,Je),B&&(at(R,vt),at(R,Je))}],Mt=w&&V(X);let Vt=w?J:wn([Z,q,tt,X,J].find(ot=>V(ot)===!1));const Wt=h?J:Z||q;return[T,()=>{ct(X,vt,y?"viewport":"host"),ct(tt,fn,""),ct(Z,Vn,""),y||ct(q,It,"");const ot=B&&!y?Ft(Lt(d),$o):ht;if(Mt&&(An(J,X),Y(pt,()=>{An(X,J),Pt(X)})),mt(Wt,Vt),mt(X,tt),mt(tt||X,!y&&q),mt(q,Z),Y(pt,()=>{ot(),at(tt,fn),at(Z,Vn),at(q,Oo),at(q,Eo),at(q,It),V(Z)&&tn(Z),V(q)&&tn(q),V(tt)&&tn(tt)}),o&&!y&&(Yt(q,It,Co,!0),Y(pt,at.bind(0,q,It))),rt&&(qo(q,rt),Y(pt,Pt.bind(0,rt))),E){const it=ct(q,Se);ct(q,Se,"-1"),q.focus();const lt=()=>it?ct(q,Se,it):at(q,Se),$t=nt(P,"pointerdown keydown",()=>{lt(),$t()});Y(pt,[lt,$t])}else g&&g.focus&&g.focus();Vt=0},zt.bind(0,pt)]},Rs=(t,e)=>{const{nt:n}=t,[o]=e;return s=>{const{Y:c}=ft(),{gt:r}=o(),{vt:i}=s,l=(n||!c)&&i;return l&&st(n,{height:r?"":"100%"}),{wt:l,bt:l}}},js=(t,e)=>{const[n,o]=e,{J:s,tt:c,K:r,ft:i}=t,[l,a]=xt({u:Qo,o:In()},In.bind(0,s,"padding",""));return(u,m,f)=>{let[p,v]=a(f);const{A:S,Y:z}=ft(),{yt:A}=n(),{wt:d,bt:w,St:P}=u,[R,B]=m("paddingAbsolute");(d||v||!z&&w)&&([p,v]=l(f));const _=!i&&(B||P||v);if(_){const j=!R||!c&&!S,G=p.r+p.l,U=p.t+p.b,M={marginRight:j&&!A?-G:0,marginBottom:j?-U:0,marginLeft:j&&A?-G:0,top:j?-p.t:0,right:j?A?-p.r:"auto":0,left:j?A?"auto":-p.l:0,width:j?`calc(100% + ${G}px)`:""},b={paddingTop:j?p.t:0,paddingRight:j?p.r:0,paddingBottom:j?p.b:0,paddingLeft:j?p.l:0};st(c||r,M),st(r,b),o({tt:p,$t:!j,P:c?b:Q({},M,b)})}return{xt:_}}},{max:gn}=Math,_t=gn.bind(0,0),Lo="visible",Kn="hidden",Is=42,Oe={u:go,o:{w:0,h:0}},_s={u:bo,o:{x:Kn,y:Kn}},Ds=(t,e)=>{const n=window.devicePixelRatio%1!==0?1:0,o={w:_t(t.w-e.w),h:_t(t.h-e.h)};return{w:o.w>n?o.w:0,h:o.h>n?o.h:0}},Ee=t=>t.indexOf(Lo)===0,Fs=(t,e)=>{const[n,o]=e,{J:s,tt:c,K:r,ot:i,ft:l,ht:a,it:u,ct:m}=t,{k:f,Y:p,A:v,I:S}=ft(),z=Kt()[Pn],A=!l&&!v&&(S.x||S.y),d=u&&l,[w,P]=xt(Oe,Le.bind(0,r)),[R,B]=xt(Oe,He.bind(0,r)),[D,_]=xt(Oe),[j,G]=xt(Oe),[U]=xt(_s),M=(C,O)=>{if(st(r,{height:""}),O){const{$t:L,tt:H}=n(),{Ct:I,M:N}=C,K=Le(s),x=Pe(s),g=st(r,"boxSizing")==="content-box",E=L||g?H.b+H.t:0,T=!(S.x&&g);st(r,{height:x.h+K.h+(I.x&&T?N.x:0)-E})}},b=(C,O)=>{const L=!v&&!C?Is:0,H=(V,J,X)=>{const tt=st(r,V),Z=(O?O[V]:tt)==="scroll";return[tt,Z,Z&&!v?J?L:X:0,J&&!!L]},[I,N,K,x]=H("overflowX",S.x,f.x),[g,E,T,F]=H("overflowY",S.y,f.y);return{Ot:{x:I,y:g},Ct:{x:N,y:E},M:{x:K,y:T},D:{x,y:F}}},y=(C,O,L,H)=>{const I=(E,T)=>{const F=Ee(E),V=T&&F&&E.replace(`${Lo}-`,"")||"";return[T&&!F?E:"",Ee(V)?"hidden":V]},[N,K]=I(L.x,O.x),[x,g]=I(L.y,O.y);return H.overflowX=K&&x?K:N,H.overflowY=g&&N?g:x,b(C,H)},h=(C,O,L,H)=>{const{M:I,D:N}=C,{x:K,y:x}=N,{x:g,y:E}=I,{P:T}=n(),F=O?"marginLeft":"marginRight",V=O?"paddingLeft":"paddingRight",J=T[F],X=T.marginBottom,tt=T[V],q=T.paddingBottom;H.width=`calc(100% + ${E+J*-1}px)`,H[F]=-E+J,H.marginBottom=-g+X,L&&(H[V]=tt+(x?E:0),H.paddingBottom=q+(K?g:0))},[$,k]=z?z.L(A,p,r,i,n,b,h):[()=>A,()=>[ht]];return(C,O,L)=>{const{wt:H,Tt:I,bt:N,xt:K,vt:x,St:g}=C,{gt:E,yt:T}=n(),[F,V]=O("showNativeOverlaidScrollbars"),[J,X]=O("overflow"),tt=F&&S.x&&S.y,q=!l&&!p&&(H||N||I||V||x),Z=Ee(J.x),rt=Ee(J.y),pt=Z||rt;let Mt=P(L),Vt=B(L),Wt=_(L),ie=G(L),ot;if(V&&v&&a(Co,ls,!tt),q&&(ot=b(tt),M(ot,E)),H||K||N||g||V){pt&&a(ne,ee,!1);const[kt,Rt]=k(tt,T,ot),[Et,Ne]=Mt=w(L),[jt,qe]=Vt=R(L),Jt=Pe(r);let Ut=jt,Nt=Jt;kt(),(qe||Ne||V)&&Rt&&!tt&&$(Rt,jt,Et,T)&&(Nt=Pe(r),Ut=He(r));const ae={w:_t(gn(jt.w,Ut.w)+Et.w),h:_t(gn(jt.h,Ut.h)+Et.h)},Hn={w:_t((d?m.innerWidth:Nt.w+_t(Jt.w-jt.w))+Et.w),h:_t((d?m.innerHeight+Et.h:Nt.h+_t(Jt.h-jt.h))+Et.h)};ie=j(Hn),Wt=D(Ds(ae,Hn),L)}const[it,lt]=ie,[$t,me]=Wt,[le,Be]=Vt,[xe,Ve]=Mt,Ot={x:$t.w>0,y:$t.h>0},ve=Z&&rt&&(Ot.x||Ot.y)||Z&&Ot.x&&!Ot.y||rt&&Ot.y&&!Ot.x;if(K||g||Ve||Be||lt||me||X||V||q){const kt={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},Rt=y(tt,Ot,J,kt),Et=$(Rt,le,xe,T);l||h(Rt,T,Et,kt),q&&M(Rt,E),l?(ct(s,Oo,kt.overflowX),ct(s,Eo,kt.overflowY)):st(r,kt)}Yt(s,vt,ee,ve),Yt(c,fn,as,ve),l||Yt(r,It,ne,pt);const[We,Ue]=U(b(tt).Ot);return o({Ot:We,zt:{x:it.w,y:it.h},Et:{x:$t.w,y:$t.h},At:Ot}),{It:Ue,Ht:lt,Lt:me}}},Jn=(t,e,n)=>{const o={},s=e||{},c=bt(t).concat(bt(s));return W(c,r=>{const i=t[r],l=s[r];o[r]=!!(n||i||l)}),o},Bs=(t,e)=>{const{Z:n,K:o,ht:s,ft:c}=t,{A:r,I:i,Y:l}=ft(),a=!r&&(i.x||i.y),u=[Rs(t,e),js(t,e),Fs(t,e)];return(m,f,p)=>{const v=Jn(Q({wt:!1,xt:!1,St:!1,vt:!1,Ht:!1,Lt:!1,It:!1,Tt:!1,bt:!1,Pt:!1},f),{},p),S=a||!l,z=S&&yt(o),A=S&&Ht(o);s("",Ae,!0);let d=v;return W(u,w=>{d=Jn(d,w(d,m,!!p)||{},p)}),yt(o,z),Ht(o,A),s("",Ae),c||(yt(n,0),Ht(n,0)),d}},Vs=(t,e,n)=>{let o,s=!1;const c=()=>{s=!0},r=i=>{if(n){const l=n.reduce((a,u)=>{if(u){const[m,f]=u,p=f&&m&&(i?i(m):ao(m,t));p&&p.length&&f&&Bt(f)&&Y(a,[p,f.trim()],!0)}return a},[]);W(l,a=>W(a[0],u=>{const m=a[1],f=o.get(u)||[];if(t.contains(u)){const v=nt(u,m,S=>{s?(v(),o.delete(u)):e(S)});o.set(u,Y(f,v))}else zt(f),o.delete(u)}))}};return n&&(o=new WeakMap,r()),[c,r]},Zn=(t,e,n,o)=>{let s=!1;const{Mt:c,Dt:r,Rt:i,kt:l,Bt:a,Vt:u}=o||{},m=$n(()=>s&&n(!0),{g:33,v:99}),[f,p]=Vs(t,m,i),v=c||[],S=r||[],z=v.concat(S),A=(w,P)=>{const R=a||ht,B=u||ht,D=new Set,_=new Set;let j=!1,G=!1;if(W(w,U=>{const{attributeName:M,target:b,type:y,oldValue:h,addedNodes:$,removedNodes:k}=U,C=y==="attributes",O=y==="childList",L=t===b,H=C&&Bt(M)?ct(b,M):0,I=H!==0&&h!==H,N=_e(S,M)>-1&&I;if(e&&(O||!L)){const K=!C,x=C&&I,g=x&&l&&ze(b,l),T=(g?!R(b,M,h,H):K||x)&&!B(U,!!g,t,o);W($,F=>D.add(F)),W(k,F=>D.add(F)),G=G||T}!e&&L&&I&&!R(b,M,h,H)&&(_.add(M),j=j||N)}),D.size>0&&p(U=>Gt(D).reduce((M,b)=>(Y(M,ao(U,b)),ze(b,U)?Y(M,b):M),[])),e)return!P&&G&&n(!1),[!1];if(_.size>0||j){const U=[Gt(_),j];return!P&&n.apply(0,U),U}},d=new Jo(w=>A(w));return d.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:z,subtree:e,childList:e,characterData:e}),s=!0,[()=>{s&&(f(),d.disconnect(),s=!1)},()=>{if(s){m.m();const w=d.takeRecords();return!xn(w)&&A(w,!0)}}]},Ce=3333333,Ao=(t,e,n)=>{const{Yt:o,Pt:s}=n||{},c=Kt()[Os],{V:r}=ft(),l=uo(`<div class="${Cn}"><div class="${ds}"></div></div>`)[0],a=l.firstChild,u=se.bind(0,t),[m]=xt({o:!1,_:!0,u:(v,S)=>!(!v||!te(v)&&te(S))}),f=v=>{const S=gt(v)&&v.length>0&&fe(v[0]),z=!S&&mn(v[0]);let A=!1,d=!1,w=!0;if(S){const[P,,R]=m(v.pop().contentRect),B=te(P),D=te(R);A=!R&&!!D||!B,d=!D&&B,w=!A}else z?[,w]=v:d=v===!0;if(o&&w){const P=z?v[0]:se(l);yt(l,P?r.n?-Ce:r.i?0:Ce:Ce),Ht(l,Ce)}A||e({wt:!z,jt:z?v:void 0,Pt:!!d})},p=[];return[()=>{zt(p),Pt(l)},()=>{let v=s&&f;if(Qt){const S=new Qt(f);S.observe(a),Y(p,()=>{S.disconnect()})}else if(c){const[S,z]=c.O(a,f,s);v=S,Y(p,z)}if(o){const[S]=xt({o:void 0},u);Y(p,nt(l,"scroll",z=>{const A=S(),[d,w,P]=A;w&&(Sn(a,"ltr rtl"),Ft(a,d?"rtl":"ltr"),f([!!d,w,P])),xo(z)}))}v&&(Ft(l,us),Y(p,nt(l,"animationstart",v,{C:!!Qt}))),(Qt||c)&&mt(t,l)}]},Ws=t=>t.h===0||t.isIntersecting||t.intersectionRatio>0,Us=(t,e)=>{let n;const o=Xt(fs),s=[],[c]=xt({o:!1}),r=(l,a)=>{if(l){const u=c(Ws(l)),[,m]=u;return m&&!a&&e(u)&&[u]}},i=(l,a)=>l&&l.length>0&&r(l.pop(),a);return[()=>{zt(s),Pt(o)},()=>{if(Mn)n=new Mn(l=>i(l),{root:t}),n.observe(o),Y(s,()=>{n.disconnect()});else{const l=()=>{const m=pe(o);r(m)},[a,u]=Ao(o,l);Y(s,a),u(),l()}mt(t,o)},()=>n&&i(n.takeRecords(),!0)]},Qn=`[${vt}]`,Ns=`[${It}]`,en=["tabindex"],to=["wrap","cols","rows"],nn=["id","class","style","open"],qs=(t,e,n)=>{let o,s,c;const{J:r,K:i,nt:l,lt:a,ft:u,_t:m,ht:f}=t,{Y:p}=ft(),[v]=xt({u:go,o:{w:0,h:0}},()=>{const h=m(ne,ee),$=m(Ze,""),k=$&&yt(i),C=$&&Ht(i);f(ne,ee),f(Ze,""),f("",Ae,!0);const O=He(l),L=He(i),H=Le(i);return f(ne,ee,h),f(Ze,"",$),f("",Ae),yt(i,k),Ht(i,C),{w:L.w+O.w+H.w,h:L.h+O.h+H.h}}),S=a?to:nn.concat(to),z=$n(n,{g:()=>o,v:()=>s,p(h,$){const[k]=h,[C]=$;return[bt(k).concat(bt(C)).reduce((O,L)=>(O[L]=k[L]||C[L],O),{})]}}),A=h=>{W(h||en,$=>{if(_e(en,$)>-1){const k=ct(r,$);Bt(k)?ct(i,$,k):at(i,$)}})},d=(h,$)=>{const[k,C]=h,O={vt:C};return e({gt:k}),!$&&n(O),O},w=({wt:h,jt:$,Pt:k})=>{const C=!h||k?n:z;let O=!1;if($){const[L,H]=$;O=H,e({yt:L})}C({wt:h,Pt:k,St:O})},P=(h,$)=>{const[,k]=v(),C={bt:k};return k&&!$&&(h?n:z)(C),C},R=(h,$,k)=>{const C={Tt:$};return $?!k&&z(C):u||A(h),C},[B,D,_]=l||!p?Us(r,d):[ht,ht,ht],[j,G]=u?[ht,ht]:Ao(r,w,{Pt:!0,Yt:!0}),[U,M]=Zn(r,!1,R,{Dt:nn,Mt:nn.concat(en)});let b;const y=u&&Qt&&new Qt(h=>{const $=h[h.length-1].contentRect,k=te($),O=!te(b)&&k;w({wt:!0,Pt:O}),b=$});return[()=>{B(),j(),c&&c[0](),y&&y.disconnect(),U()},()=>{y&&y.observe(r),A(),G(),D()},()=>{const h={},$=M(),k=_(),C=c&&c[1]();return $&&Q(h,R.apply(0,Y($,!0))),k&&Q(h,d.apply(0,Y(k,!0))),C&&Q(h,P.apply(0,Y(C,!0))),h},h=>{const[$]=h("update.ignoreMutation"),[k,C]=h("update.attributes"),[O,L]=h("update.elementEvents"),[H,I]=h("update.debounce"),N=L||C,K=x=>St($)&&$(x);if(N&&(c&&(c[1](),c[0]()),c=Zn(l||i,!0,P,{Mt:S.concat(k||[]),Rt:O,kt:Qn,Vt:(x,g)=>{const{target:E,attributeName:T}=x;return(!g&&T&&!u?No(E,Qn,Ns):!1)||!!Zt(E,`.${dt}`)||!!K(x)}})),I)if(z.m(),gt(H)){const x=H[0],g=H[1];o=Dt(x)&&x,s=Dt(g)&&g}else Dt(H)?(o=H,s=!1):(o=!1,s=!1)}]},eo={x:0,y:0},Ys=t=>({tt:{t:0,r:0,b:0,l:0},$t:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:eo,Et:eo,Ot:{x:"hidden",y:"hidden"},At:{x:!1,y:!1},gt:!1,yt:se(t.J)}),Xs=(t,e)=>{const n=hn(e,{}),[o,s,c]=En(),[r,i,l]=Ms(t),a=Ho(Ys(r)),[u,m]=a,f=Bs(r,a),p=(w,P,R)=>{const D=bt(w).some(_=>!!w[_])||!vn(P)||R;return D&&c("u",[w,P,R]),D},[v,S,z,A]=qs(r,m,w=>p(f(n,w),{},!1)),d=u.bind(0);return d.Nt=w=>o("u",w),d.qt=()=>{const{Z:w,K:P,rt:R,it:B}=r,D=B?R.documentElement:w,_=yt(D),j=Ht(D);S(),i(),yt(P,_),Ht(P,j)},d.Ft=r,[(w,P)=>{const R=hn(e,w,P);return A(R),p(f(R,z(),P),w,!!P)},d,()=>{s(),v(),l()}]},{round:no}=Math,Gs=t=>{const{width:e,height:n}=Ct(t),{w:o,h:s}=pe(t);return{x:no(e)/o||1,y:no(n)/s||1}},Ks=(t,e,n)=>{const o=e.scrollbars,{button:s,isPrimary:c,pointerType:r}=t,{pointers:i}=o;return s===0&&c&&o[n?"dragScroll":"clickScroll"]&&(i||[]).includes(r)},oo="pointerup pointerleave pointercancel lostpointercapture",Js=(t,e)=>nt(t,"mousedown",nt.bind(0,e,"click",xo,{C:!0,$:!0}),{$:!0}),Zs=(t,e,n,o,s,c,r)=>{const{V:i}=ft(),{Gt:l,Xt:a,Ut:u}=o,m=`scroll${r?"Left":"Top"}`,f=`client${r?"X":"Y"}`,p=r?"width":"height",v=r?"left":"top",S=r?"w":"h",z=r?"x":"y",A=(d,w)=>P=>{const{Et:R}=c(),B=pe(a)[S]-pe(l)[S],_=w*P/B*R[z],G=se(u)&&r?i.n||i.i?1:-1:1;s[m]=d+_*G};return nt(a,"pointerdown",d=>{const w=Zt(d.target,`.${Tn}`)===l,P=w?l:a;if(Yt(e,vt,Bn,!0),Ks(d,t,w)){const R=!w&&d.shiftKey,B=()=>Ct(l),D=()=>Ct(a),_=(O,L)=>(O||B())[v]-(L||D())[v],j=A(s[m]||0,1/Gs(s)[z]),G=d[f],U=B(),M=D(),b=U[p],y=_(U,M)+b/2,h=G-M[v],$=w?0:h-y,k=O=>{zt(C),P.releasePointerCapture(O.pointerId)},C=[Yt.bind(0,e,vt,Bn),nt(n,oo,k),nt(n,"selectstart",O=>vo(O),{S:!1}),nt(a,oo,k),nt(a,"pointermove",O=>{const L=O[f]-G;(w||R)&&j($+L)})];if(R)j($);else if(!w){const O=Kt()[Es];O&&Y(C,O.O(j,_,$,b,h))}P.setPointerCapture(d.pointerId)}})},Qs=(t,e)=>(n,o,s,c,r,i,l)=>{const{Ut:a}=n,[u,m]=qt(333),f=!!r.scrollBy;let p=!0;return zt.bind(0,[nt(a,"pointerenter",()=>{o(Un,!0)}),nt(a,"pointerleave pointercancel",()=>{o(Un)}),nt(a,"wheel",v=>{const{deltaX:S,deltaY:z,deltaMode:A}=v;f&&p&&A===0&&Lt(a)===c&&r.scrollBy({left:S,top:z,behavior:"smooth"}),p=!1,o(Yn,!0),u(()=>{p=!0,o(Yn)}),vo(v)},{S:!1,$:!0}),Js(a,s),Zs(t,c,s,n,r,e,l),m])},{min:Me,max:bn,round:tc}=Math,Mo=(t,e,n,o)=>{if(o){const i=n?"x":"y",{Et:l,zt:a}=o,u=a[i],m=l[i];return bn(0,Me(1,u/(u+m)))}const s=n?"width":"height",c=Ct(t)[s],r=Ct(e)[s];return bn(0,Me(1,c/r))},ec=(t,e,n,o,s,c)=>{const{V:r}=ft(),i=c?"x":"y",l=c?"Left":"Top",{Et:a}=o,u=tc(a[i]),m=Me(u,bn(0,n[`scroll${l}`])),f=c&&s,p=r.i?m:u-m,S=Me(1,(f?p:m)/u),z=Mo(t,e,c);return 1/z*(1-z)*S},Ro=(t,e,n,o)=>t.animate(n,{timeline:e,composite:o}),nc=(t,e)=>({transform:[ce("0%",e),ce(e&&t?"100%":"-100%",e)],[e?t?"right":"left":"top"]:["0%","100%"]}),oc=t=>`${Math.max(0,t-.5)}px`,so=(t,e,n,o)=>Ro(t,e,{transform:[ce("0px",o),ce(oc(n),o)]},"add"),co=(t,e)=>un?new un({source:t,axis:e}):null,sc=(t,e,n)=>{const{q:o,H:s}=ft(),{scrollbars:c}=o(),{slot:r}=c,{rt:i,Z:l,J:a,K:u,ut:m,st:f,it:p,ft:v}=e,{scrollbars:S}=m?{}:t,{slot:z}=S||{},A=new Map,d=co(f,"x"),w=co(f,"y"),P=zo([l,a,u],()=>v&&p?l:a,r,z),R=x=>v&&!p&&Lt(x)===u,B=x=>{A.forEach((g,E)=>{(x?_e(gt(x)?x:[x],E)>-1:!0)&&((g||[]).forEach(F=>{F.cancel()}),A.delete(E))})},D=(x,g,E)=>{const T=E?Ft:Sn;W(x,F=>{T(F.Ut,g)})},_=(x,g)=>{W(x,E=>{const[T,F]=g(E);st(T,F)})},j=(x,g,E)=>{_(x,T=>{const{Gt:F,Xt:V}=T;return[F,{[E?"width":"height"]:`${(Mo(F,V,E,g)*100).toFixed(3)}%`}]})},G=(x,g,E)=>{!w&&!w&&_(x,T=>{const{Gt:F,Xt:V,Ut:J}=T,X=ec(F,V,f,g,se(J),E);return[F,{transform:X===X?ce(`${(X*100).toFixed(3)}%`,E):""}]})},U=x=>{const{Ut:g}=x,E=R(g)&&g;return[E,{transform:E?ce([`${yt(f)}px`,`${Ht(f)}px`]):""}]},M=[],b=[],y=[],h=(x,g,E)=>{const T=mn(E),F=T?E:!0,V=T?!E:!0;F&&D(b,x,g),V&&D(y,x,g)},$=x=>{j(b,x,!0),j(y,x)},k=x=>{G(b,x,!0),G(y,x)},C=()=>{const x=(g,{Ut:E,Gt:T})=>{B(T),A.set(T,[Ro(T,g?d:w,nc(g&&se(E),g))])};b.forEach(x.bind(0,!0)),y.forEach(x.bind(0,!1))},O=()=>{!w&&!w&&(v&&_(b,U),v&&_(y,U))},L=({Et:x})=>{y.concat(b).forEach(({Ut:g})=>{B(g),R(g)&&A.set(g,[so(g,d,x.x,!0),so(g,w,x.y)])})},H=x=>{const g=x?bs:ms,E=x?b:y,T=xn(E)?Wn:"",F=Xt(`${dt} ${g} ${T}`),V=Xt(To),J=Xt(Tn),X={Ut:F,Xt:V,Gt:J};return s||Ft(F,ps),mt(F,V),mt(V,J),Y(E,X),Y(M,[Pt.bind(0,F),B,n(X,h,i,a,f,x?d:w,x)]),X},I=H.bind(0,!0),N=H.bind(0,!1),K=()=>{mt(P,b[0].Ut),mt(P,y[0].Ut),ke(()=>{h(Wn)},300)};return I(),N(),[{Wt:$,Zt:k,Jt:C,Kt:L,Qt:O,tn:h,nn:{B:d,sn:b,en:I,cn:_.bind(0,b)},rn:{B:w,sn:y,en:N,cn:_.bind(0,y)}},K,zt.bind(0,M)]},on=t=>t.pointerType==="mouse",cc=(t,e,n,o)=>{let s,c,r,i,l,a=ht,u=0;const m=Ho({}),[f]=m,[p,v]=qt(),[S,z]=qt(),[A,d]=qt(100),[w,P]=qt(100),[R,B]=qt(100),[D,_]=qt(()=>u),[j,G,U]=sc(t,n.Ft,Qs(e,n)),{J:M,et:b,it:y}=n.Ft,{tn:h,Wt:$,Zt:k,Jt:C,Kt:O,Qt:L}=j,H=g=>{h(pn,g,!0),h(pn,g,!1)},I=(g,E)=>{if(_(),g)h(qn);else{const T=()=>h(qn,!0);u>0&&!E?D(T):T()}},N=g=>{on(g)&&(i=c,i&&I(!0))},K=[d,_,P,B,z,v,U,nt(M,"pointerover",N,{C:!0}),nt(M,"pointerenter",N),nt(M,"pointerleave",g=>{on(g)&&(i=!1,c&&I(!1))}),nt(M,"pointermove",g=>{on(g)&&s&&p(()=>{d(),I(!0),w(()=>{s&&I(!1)})})}),nt(b,"scroll",g=>{S(()=>{k(n()),r&&I(!0),A(()=>{r&&!i&&I(!1)})}),o(g),L()})],x=f.bind(0);return x.Ft=j,x.qt=G,[(g,E,T)=>{const{Ht:F,Lt:V,It:J,St:X,Pt:tt}=T,{I:q}=ft(),Z=hn(e,g,E),rt=n(),{Et:pt,Ot:Mt,yt:Vt,At:Wt}=rt,[ie,ot]=Z("showNativeOverlaidScrollbars"),[it,lt]=Z("scrollbars.theme"),[$t,me]=Z("scrollbars.visibility"),[le,Be]=Z("scrollbars.autoHide"),[xe,Ve]=Z("scrollbars.autoHideSuspend"),[Ot]=Z("scrollbars.autoHideDelay"),[ve,We]=Z("scrollbars.dragScroll"),[Ue,kt]=Z("scrollbars.clickScroll"),Rt=tt&&!E,Et=Wt.x||Wt.y,Ne=F||V||X,jt=J||me,qe=ie&&q.x&&q.y,Jt=(Ut,Nt)=>{const ae=$t==="visible"||$t==="auto"&&Ut==="scroll";return h(xs,ae,Nt),ae};if(u=Ot,Rt&&(xe&&Et?(H(!1),a(),R(()=>{a=nt(b,"scroll",H.bind(0,!0),{C:!0})})):H(!0)),ot&&h(hs,qe),lt&&(h(l),h(it,!0),l=it),Ve&&!xe&&H(!0),Be&&(s=le==="move",c=le==="leave",r=le!=="never",I(!r,!0)),We&&h(ys,ve),kt&&h(ws,Ue),jt){const Ut=Jt(Mt.x,!0),Nt=Jt(Mt.y,!1);h(vs,!(Ut&&Nt))}Ne&&($(rt),k(rt),C(rt),O(rt),L(),h(Nn,!pt.x,!0),h(Nn,!pt.y,!1),h(gs,Vt&&!y))},x,()=>{zt(K),a()}]},jo=(t,e,n)=>{St(t)&&t(e||void 0,n||void 0)},he=(t,e,n)=>{const{G:o,q:s,j:c,N:r}=ft(),i=Kt(),l=de(t),a=l?t:t.target,u=ko(a);if(e&&!u){let m=!1;const f=b=>{const y=Kt()[$s],h=y&&y.O;return h?h(b,!0):b},p=Q({},o(),f(e)),[v,S,z]=En(n),[A,d,w]=Xs(t,p),[P,R,B]=cc(t,p,d,b=>z("scroll",[M,b])),D=(b,y)=>A(b,!!y),_=D.bind(0,{},!0),j=c(_),G=r(_),U=b=>{As(a),j(),G(),B(),w(),m=!0,z("destroyed",[M,!!b]),S()},M={options(b,y){if(b){const h=y?o():{},$=wo(p,Q(h,f(b)));vn($)||(Q(p,$),D($))}return Q({},p)},on:v,off:(b,y)=>{b&&y&&S(b,y)},state(){const{zt:b,Et:y,Ot:h,At:$,tt:k,$t:C,yt:O}=d();return Q({},{overflowEdge:b,overflowAmount:y,overflowStyle:h,hasOverflow:$,padding:k,paddingAbsolute:C,directionRTL:O,destroyed:m})},elements(){const{Z:b,J:y,tt:h,K:$,nt:k,st:C,et:O}=d.Ft,{nn:L,rn:H}=R.Ft,I=K=>{const{Gt:x,Xt:g,Ut:E}=K;return{scrollbar:E,track:g,handle:x}},N=K=>{const{sn:x,en:g}=K,E=I(x[0]);return Q({},E,{clone:()=>{const T=I(g());return P({},!0,{}),T}})};return Q({},{target:b,host:y,padding:h||$,viewport:$,content:k||$,scrollOffsetElement:C,scrollEventElement:O,scrollbarHorizontal:N(L),scrollbarVertical:N(H)})},update:b=>D({},b),destroy:U.bind(0)};return d.Nt((b,y,h)=>{P(y,h,b)}),Ls(a,M),W(bt(i),b=>jo(i[b],0,M)),Hs(d.Ft.it,s().cancel,!l&&t.cancel)?(U(!0),M):(d.qt(),R.qt(),z("initialized",[M]),d.Nt((b,y,h)=>{const{wt:$,St:k,vt:C,Ht:O,Lt:L,It:H,bt:I,Tt:N}=b;z("updated",[M,{updateHints:{sizeChanged:$,directionChanged:k,heightIntrinsicChanged:C,overflowEdgeChanged:O,overflowAmountChanged:L,overflowStyleChanged:H,contentMutation:I,hostMutation:N},changedOptions:y,force:h}])}),M.update(!0),M)}return u};he.plugin=t=>{W(Ss(t),e=>jo(e,he))};he.valid=t=>{const e=t&&t.elements,n=St(e)&&e();return rn(n)&&!!ko(n.target)};he.env=()=>{const{k:t,I:e,A:n,V:o,Y:s,H:c,B:r,U:i,W:l,q:a,F:u,G:m,X:f}=ft();return Q({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:o,flexboxGlue:s,cssCustomProperties:c,scrollTimeline:r,staticDefaultInitialization:i,staticDefaultOptions:l,getDefaultInitialization:a,setDefaultInitialization:u,getDefaultOptions:m,setDefaultOptions:f})};const rc={scrollbars:{visibility:"auto",autoHide:"never"}},ic=(t,e)=>{oe.useEffect(()=>{let n;return t.current&&e&&(n=he(t.current,rc)),()=>{n&&n.destroy()}},[t,e])},lc=ut.div`
  width: ${({width:t})=>(t==null?void 0:t.mob)+"px"||"100%"};
  ${Tt.tablet} {
    width: ${({width:t})=>(t==null?void 0:t.nab)+"px"||"100%"};
    height: 660px;
  }
  ${Tt.desktop} {
    width: ${({width:t})=>(t==null?void 0:t.dt)+"px"||"100%"};
    height: 487px;
  }
`;function ac({children:t,width:e}){const{isMobile:n}=Fo(),o=oe.useRef(null);return ic(o,!n),et.jsx(lc,{width:e,ref:o,children:t})}ac.propTypes={width:Te.object};const uc=ut.li`
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
  border: 1px solid ${wt.textWhite02};
  background: ${wt.textWhite005};

  ${Tt.mobile} {
    width: 335px;
  }

  ${Tt.tablet} {
    width: 335px;
    align-items: center;
  }

  ${Tt.desktop} {
    width: 405px;
  }
`,dc=ut.div`
  display: flex;
  align-items: flex-start;
`,fc=ut.p`
  display: inline-flex;
  width: auto;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  padding: 0 7.5px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${wt.textWhite005};
  border-radius: 4px;
  color: #fff;
`,pc=ut.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${wt.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background: #419b09;
    margin-right: 8px;
  }
`,hc=ut.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;
  cursor: pointer;

  color: ${wt.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${wt.orangeSecondary};

    svg {
      stroke: ${wt.orangeSecondary};
    }
  }

  ${Tt.tablet} {
    font-size: 16px;
  }
`,gc=ut.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${wt.orange};

  transition: stroke 250ms ease-in-out;
`,bc=ut.div`
  display: inline-flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${wt.white};

  ${Tt.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 21px;
  }
`,mc=ut.div`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`,xc=ut.svg`
  width: 16px;
  height: 16x;
`,vc=ut.div`
  display: inline-block;
  align-items: center;
  margin-top: 8px;

  ${Tt.tablet} {
    margin-top: 12px;
  }
`,sn=ut.div`
  display: inline-flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${wt.textWhite04};

  &:last-child {
    margin-right: 0;
  }
`,cn=ut.p`
  margin-left: 4px;

  color: ${wt.white};
`,wc=({page:t,data:e,openModal:n})=>{const[o,s]=oe.useState(window.innerWidth);oe.useEffect(()=>(window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}),[]);const c=()=>{s(window.innerWidth)},r=l=>{let a=24;return o<768?a=23:o<1440&&(a=19),l.length<=a?l:l.substring(0,a)+"..."},i=Io(t,e);return et.jsxs(uc,{children:[et.jsxs(dc,{children:[et.jsx(fc,{children:i.subtitle}),t==="product"&&et.jsx(pc,{children:"Recommended"}),et.jsxs(hc,{onClick:()=>n(),children:[i.button,et.jsx(gc,{children:et.jsx("use",{href:Ln+"#arrow-right"})})]})]}),et.jsxs(bc,{children:[et.jsx(mc,{children:et.jsx(xc,{children:et.jsx("use",{href:Ln+"#runningMan"})})}),r(i.title)]}),et.jsxs(vc,{children:[et.jsxs(sn,{children:[i.text1,et.jsx(cn,{children:i.subText1})]}),et.jsxs(sn,{children:[i.text2,et.jsx(cn,{children:i.subText2})]}),et.jsxs(sn,{children:[i.text3,et.jsx(cn,{children:i.subText3})]})]})]})};wc.propTypes={page:Te.string,data:Te.object,openModal:Te.func};export{$c as P,ac as S,wc as a};
