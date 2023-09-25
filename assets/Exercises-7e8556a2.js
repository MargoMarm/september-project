import{n as F,m as I,c as O,P as H,r as V,j as h,u as K,d as N,o as re,p as oe,q as ce,t as pe,v as ae,w as de}from"./index-03078ed5.js";import{c as fe}from"./formatDate-d1383d55.js";import{e as ge,c as Q,b as ue,d as Y,f as me,g as be,n as he,h as ve,S as xe,a as ye}from"./swiper-68c20c93.js";import{s as G}from"./styled-components.browser.esm-63b18772.js";import{T as Z}from"./Title-00c8947d.js";import{i as Ce}from"./imgHomePage-66a7b711.js";import{S as Ee,P as Le,a as ke}from"./ProductsOrExercisesItem-c3b40493.js";import"./BtnSubmit-6eb12b0a.js";const we=F.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }



  ${I.tablet} {
    flex-basis: calc((100% - 32px) / 3);
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${I.desktop} {
    flex-basis: calc((100% - 64px) / 5);
  }
`,$e=F.a`
  display: block;

  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: ${O.background05};
`,Se=F.img`
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  z-index: -1;
`,Ae=F.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 137px;
  text-align: center;

  ${I.mobile} {
    top: 50%;
    left: 50%;
  }

  ${I.tablet} {
    top: 50%;
    left: 50%;
  }
`,Me=F.span`
  color: ${O.white};
  font-size: 20px;
  line-height: 1.2;

  ${I.tablet} {
    font-size: 24px;
    line-height: 1.33;
  }
`,De=F.span`
  color: ${O.textWhite04};
  font-size: 12px;
  line-height: 1.5;
`,te=({filter:u,name:e,imgURL:$,handleGetExercises:f})=>{const[g,o]=V.useState(u);V.useEffect(()=>{switch(u){case"Body parts":return o("bodyPart");case"Muscles":return o("target");case"Equipment":return o("equipment");default:return}},[u]);const d=`${g}=${e.toLowerCase()}`;return h.jsx(we,{onClick:()=>f(d,e),children:h.jsxs($e,{children:[h.jsx(Se,{src:$,alt:e}),h.jsxs(Ae,{children:[h.jsx(Me,{children:e}),h.jsx(De,{children:u})]})]})})};te.propTypes={filter:H.string.isRequired,name:H.string.isRequired,imgURL:H.string.isRequired,handleGetExercises:H.func.isRequired};const Be=F.ul`
  margin-top: 40px;

  padding-bottom: 52px;

  ${I.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`,Te=u=>u.filter.items,se=u=>u.filter.filter,ze=u=>u.filter.currentTitle;function J(u,e,$,f){return u.params.createElements&&Object.keys(f).forEach(g=>{if(!$[g]&&$.auto===!0){let o=ge(u.el,`.${f[g]}`)[0];o||(o=Q("div",f[g]),o.className=f[g],u.el.append(o)),$[g]=o,e[g]=o}}),$}function Ie(u){let{swiper:e,extendParams:$,on:f,emit:g}=u;$({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const o=r=>(Array.isArray(r)?r:[r]).filter(m=>!!m);function d(r){let m;return r&&typeof r=="string"&&e.isElement&&(m=e.el.querySelector(r),m)?m:(r&&(typeof r=="string"&&(m=[...document.querySelectorAll(r)]),e.params.uniqueNavElements&&typeof r=="string"&&m.length>1&&e.el.querySelectorAll(r).length===1&&(m=e.el.querySelector(r))),r&&!m?r:m)}function L(r,m){const x=e.params.navigation;r=o(r),r.forEach(t=>{t&&(t.classList[m?"add":"remove"](...x.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=m),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](x.lockClass))})}function y(){const{nextEl:r,prevEl:m}=e.navigation;if(e.params.loop){L(m,!1),L(r,!1);return}L(m,e.isBeginning&&!e.params.rewind),L(r,e.isEnd&&!e.params.rewind)}function T(r){r.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),g("navigationPrev"))}function C(r){r.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),g("navigationNext"))}function A(){const r=e.params.navigation;if(e.params.navigation=J(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(r.nextEl||r.prevEl))return;let m=d(r.nextEl),x=d(r.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:x}),m=o(m),x=o(x);const t=(i,l)=>{i&&i.addEventListener("click",l==="next"?C:T),!e.enabled&&i&&i.classList.add(...r.lockClass.split(" "))};m.forEach(i=>t(i,"next")),x.forEach(i=>t(i,"prev"))}function M(){let{nextEl:r,prevEl:m}=e.navigation;r=o(r),m=o(m);const x=(t,i)=>{t.removeEventListener("click",i==="next"?C:T),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};r.forEach(t=>x(t,"next")),m.forEach(t=>x(t,"prev"))}f("init",()=>{e.params.navigation.enabled===!1?q():(A(),y())}),f("toEdge fromEdge lock unlock",()=>{y()}),f("destroy",()=>{M()}),f("enable disable",()=>{let{nextEl:r,prevEl:m}=e.navigation;if(r=o(r),m=o(m),e.enabled){y();return}[...r,...m].filter(x=>!!x).forEach(x=>x.classList.add(e.params.navigation.lockClass))}),f("click",(r,m)=>{let{nextEl:x,prevEl:t}=e.navigation;x=o(x),t=o(t);const i=m.target;if(e.params.navigation.hideOnClick&&!t.includes(i)&&!x.includes(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===i||e.pagination.el.contains(i)))return;let l;x.length?l=x[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(l=t[0].classList.contains(e.params.navigation.hiddenClass)),g(l===!0?"navigationShow":"navigationHide"),[...x,...t].filter(b=>!!b).forEach(b=>b.classList.toggle(e.params.navigation.hiddenClass))}});const B=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),A(),y()},q=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),M()};Object.assign(e.navigation,{enable:B,disable:q,update:y,init:A,destroy:M})}function R(u){return u===void 0&&(u=""),`.${u.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Pe(u){let{swiper:e,extendParams:$,on:f,emit:g}=u;const o="swiper-pagination";$({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let d,L=0;const y=t=>(Array.isArray(t)?t:[t]).filter(i=>!!i);function T(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function C(t,i){const{bulletActiveClass:l}=e.params.pagination;t&&(t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${l}-${i}`),t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${l}-${i}-${i}`)))}function A(t){const i=t.target.closest(R(e.params.pagination.bulletClass));if(!i)return;t.preventDefault();const l=Y(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===l)return;const b=e.realIndex,k=e.getSlideIndexByData(l),z=e.getSlideIndexByData(e.realIndex),P=v=>{const D=e.activeIndex;e.loopFix({direction:v,activeSlideIndex:k,slideTo:!1});const w=e.activeIndex;D===w&&e.slideToLoop(b,0,!1,!0)};if(k>e.slides.length-e.loopedSlides)P(k>z?"next":"prev");else if(e.params.centeredSlides){const v=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(e.params.slidesPerView,10));k<Math.floor(v/2)&&P("prev")}e.slideToLoop(l)}else e.slideTo(l)}function M(){const t=e.rtl,i=e.params.pagination;if(T())return;let l=e.pagination.el;l=y(l);let b,k;const z=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,P=e.params.loop?Math.ceil(z/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,b=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(b=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,b=e.activeIndex||0),i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const v=e.pagination.bullets;let D,w,c;if(i.dynamicBullets&&(d=ue(v[0],e.isHorizontal()?"width":"height",!0),l.forEach(p=>{p.style[e.isHorizontal()?"width":"height"]=`${d*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&k!==void 0&&(L+=b-(k||0),L>i.dynamicMainBullets-1?L=i.dynamicMainBullets-1:L<0&&(L=0)),D=Math.max(b-L,0),w=D+(Math.min(v.length,i.dynamicMainBullets)-1),c=(w+D)/2),v.forEach(p=>{const a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(s=>`${i.bulletActiveClass}${s}`)].map(s=>typeof s=="string"&&s.includes(" ")?s.split(" "):s).flat();p.classList.remove(...a)}),l.length>1)v.forEach(p=>{const a=Y(p);a===b?p.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&p.setAttribute("part","bullet"),i.dynamicBullets&&(a>=D&&a<=w&&p.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),a===D&&C(p,"prev"),a===w&&C(p,"next"))});else{const p=v[b];if(p&&p.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&v.forEach((a,s)=>{a.setAttribute("part",s===b?"bullet-active":"bullet")}),i.dynamicBullets){const a=v[D],s=v[w];for(let n=D;n<=w;n+=1)v[n]&&v[n].classList.add(...`${i.bulletActiveClass}-main`.split(" "));C(a,"prev"),C(s,"next")}}if(i.dynamicBullets){const p=Math.min(v.length,i.dynamicMainBullets+4),a=(d*p-d)/2-c*d,s=t?"right":"left";v.forEach(n=>{n.style[e.isHorizontal()?s:"top"]=`${a}px`})}}l.forEach((v,D)=>{if(i.type==="fraction"&&(v.querySelectorAll(R(i.currentClass)).forEach(w=>{w.textContent=i.formatFractionCurrent(b+1)}),v.querySelectorAll(R(i.totalClass)).forEach(w=>{w.textContent=i.formatFractionTotal(P)})),i.type==="progressbar"){let w;i.progressbarOpposite?w=e.isHorizontal()?"vertical":"horizontal":w=e.isHorizontal()?"horizontal":"vertical";const c=(b+1)/P;let p=1,a=1;w==="horizontal"?p=c:a=c,v.querySelectorAll(R(i.progressbarFillClass)).forEach(s=>{s.style.transform=`translate3d(0,0,0) scaleX(${p}) scaleY(${a})`,s.style.transitionDuration=`${e.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(v.innerHTML=i.renderCustom(e,b+1,P),D===0&&g("paginationRender",v)):(D===0&&g("paginationRender",v),g("paginationUpdate",v)),e.params.watchOverflow&&e.enabled&&v.classList[e.isLocked?"add":"remove"](i.lockClass)})}function B(){const t=e.params.pagination;if(T())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let l=e.pagination.el;l=y(l);let b="";if(t.type==="bullets"){let k=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>i&&(k=i);for(let z=0;z<k;z+=1)t.renderBullet?b+=t.renderBullet.call(e,z,t.bulletClass):b+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?b=t.renderFraction.call(e,t.currentClass,t.totalClass):b=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?b=t.renderProgressbar.call(e,t.progressbarFillClass):b=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],l.forEach(k=>{t.type!=="custom"&&(k.innerHTML=b||""),t.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(R(t.bulletClass)))}),t.type!=="custom"&&g("paginationRender",l[0])}function q(){e.params.pagination=J(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let i;typeof t.el=="string"&&e.isElement&&(i=e.el.querySelector(t.el)),!i&&typeof t.el=="string"&&(i=[...document.querySelectorAll(t.el)]),i||(i=t.el),!(!i||i.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(t.el)],i.length>1&&(i=i.filter(l=>me(l,".swiper")[0]===e.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=y(i),i.forEach(l=>{t.type==="bullets"&&t.clickable&&l.classList.add(...(t.clickableClass||"").split(" ")),l.classList.add(t.modifierClass+t.type),l.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(l.classList.add(`${t.modifierClass}${t.type}-dynamic`),L=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&l.classList.add(t.progressbarOppositeClass),t.clickable&&l.addEventListener("click",A),e.enabled||l.classList.add(t.lockClass)}))}function r(){const t=e.params.pagination;if(T())return;let i=e.pagination.el;i&&(i=y(i),i.forEach(l=>{l.classList.remove(t.hiddenClass),l.classList.remove(t.modifierClass+t.type),l.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(l.classList.remove(...(t.clickableClass||"").split(" ")),l.removeEventListener("click",A))})),e.pagination.bullets&&e.pagination.bullets.forEach(l=>l.classList.remove(...t.bulletActiveClass.split(" ")))}f("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:i}=e.pagination;i=y(i),i.forEach(l=>{l.classList.remove(t.horizontalClass,t.verticalClass),l.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),f("init",()=>{e.params.pagination.enabled===!1?x():(q(),B(),M())}),f("activeIndexChange",()=>{typeof e.snapIndex>"u"&&M()}),f("snapIndexChange",()=>{M()}),f("snapGridLengthChange",()=>{B(),M()}),f("destroy",()=>{r()}),f("enable disable",()=>{let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),f("lock unlock",()=>{M()}),f("click",(t,i)=>{const l=i.target,b=y(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&b&&b.length>0&&!l.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&l===e.navigation.nextEl||e.navigation.prevEl&&l===e.navigation.prevEl))return;const k=b[0].classList.contains(e.params.pagination.hiddenClass);g(k===!0?"paginationShow":"paginationHide"),b.forEach(z=>z.classList.toggle(e.params.pagination.hiddenClass))}});const m=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList.remove(e.params.pagination.paginationDisabledClass))),q(),B(),M()},x=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList.add(e.params.pagination.paginationDisabledClass))),r()};Object.assign(e.pagination,{enable:m,disable:x,render:B,update:M,init:q,destroy:r})}function je(u){let{swiper:e,extendParams:$,on:f,emit:g}=u;const o=be();let d=!1,L=null,y=null,T,C,A,M;$({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function B(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:c,rtlTranslate:p}=e,{dragEl:a,el:s}=c,n=e.params.scrollbar,S=e.params.loop?e.progressLoop:e.progress;let j=C,E=(A-C)*S;p?(E=-E,E>0?(j=C-E,E=0):-E+C>A&&(j=A+E)):E<0?(j=C+E,E=0):E+C>A&&(j=A-E),e.isHorizontal()?(a.style.transform=`translate3d(${E}px, 0, 0)`,a.style.width=`${j}px`):(a.style.transform=`translate3d(0px, ${E}px, 0)`,a.style.height=`${j}px`),n.hide&&(clearTimeout(L),s.style.opacity=1,L=setTimeout(()=>{s.style.opacity=0,s.style.transitionDuration="400ms"},1e3))}function q(c){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${c}ms`)}function r(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:c}=e,{dragEl:p,el:a}=c;p.style.width="",p.style.height="",A=e.isHorizontal()?a.offsetWidth:a.offsetHeight,M=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?C=A*M:C=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?p.style.width=`${C}px`:p.style.height=`${C}px`,M>=1?a.style.display="none":a.style.display="",e.params.scrollbar.hide&&(a.style.opacity=0),e.params.watchOverflow&&e.enabled&&c.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function m(c){return e.isHorizontal()?c.clientX:c.clientY}function x(c){const{scrollbar:p,rtlTranslate:a}=e,{el:s}=p;let n;n=(m(c)-ve(s)[e.isHorizontal()?"left":"top"]-(T!==null?T:C/2))/(A-C),n=Math.max(Math.min(n,1),0),a&&(n=1-n);const S=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*n;e.updateProgress(S),e.setTranslate(S),e.updateActiveIndex(),e.updateSlidesClasses()}function t(c){const p=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:n,dragEl:S}=a;d=!0,T=c.target===S?m(c)-c.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,c.preventDefault(),c.stopPropagation(),s.style.transitionDuration="100ms",S.style.transitionDuration="100ms",x(c),clearTimeout(y),n.style.transitionDuration="0ms",p.hide&&(n.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),g("scrollbarDragStart",c)}function i(c){const{scrollbar:p,wrapperEl:a}=e,{el:s,dragEl:n}=p;d&&(c.preventDefault?c.preventDefault():c.returnValue=!1,x(c),a.style.transitionDuration="0ms",s.style.transitionDuration="0ms",n.style.transitionDuration="0ms",g("scrollbarDragMove",c))}function l(c){const p=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:n}=a;d&&(d=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",s.style.transitionDuration=""),p.hide&&(clearTimeout(y),y=he(()=>{n.style.opacity=0,n.style.transitionDuration="400ms"},1e3)),g("scrollbarDragEnd",c),p.snapOnRelease&&e.slideToClosest())}function b(c){const{scrollbar:p,params:a}=e,s=p.el;if(!s)return;const n=s,S=a.passiveListeners?{passive:!1,capture:!1}:!1,j=a.passiveListeners?{passive:!0,capture:!1}:!1;if(!n)return;const E=c==="on"?"addEventListener":"removeEventListener";n[E]("pointerdown",t,S),o[E]("pointermove",i,S),o[E]("pointerup",l,j)}function k(){!e.params.scrollbar.el||!e.scrollbar.el||b("on")}function z(){!e.params.scrollbar.el||!e.scrollbar.el||b("off")}function P(){const{scrollbar:c,el:p}=e;e.params.scrollbar=J(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let s;typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"?s=o.querySelectorAll(a.el):s||(s=a.el),e.params.uniqueNavElements&&typeof a.el=="string"&&s.length>1&&p.querySelectorAll(a.el).length===1&&(s=p.querySelector(a.el)),s.length>0&&(s=s[0]),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass);let n;s&&(n=s.querySelector(`.${e.params.scrollbar.dragClass}`),n||(n=Q("div",e.params.scrollbar.dragClass),s.append(n))),Object.assign(c,{el:s,dragEl:n}),a.draggable&&k(),s&&s.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}function v(){const c=e.params.scrollbar,p=e.scrollbar.el;p&&p.classList.remove(e.isHorizontal()?c.horizontalClass:c.verticalClass),z()}f("init",()=>{e.params.scrollbar.enabled===!1?w():(P(),r(),B())}),f("update resize observerUpdate lock unlock",()=>{r()}),f("setTranslate",()=>{B()}),f("setTransition",(c,p)=>{q(p)}),f("enable disable",()=>{const{el:c}=e.scrollbar;c&&c.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}),f("destroy",()=>{v()});const D=()=>{e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),P(),r(),B()},w=()=>{e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),v()};Object.assign(e.scrollbar,{enable:D,disable:w,updateSize:r,setTranslate:B,init:P,destroy:v})}function qe(u){let{swiper:e,extendParams:$,on:f}=u;$({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let g=null;function o(a){const s=g;s.length!==0&&(s.innerHTML="",s.innerHTML=a)}const d=a=>(Array.isArray(a)?a:[a]).filter(s=>!!s);function L(a){a===void 0&&(a=16);const s=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(a).replace(/x/g,s)}function y(a){a=d(a),a.forEach(s=>{s.setAttribute("tabIndex","0")})}function T(a){a=d(a),a.forEach(s=>{s.setAttribute("tabIndex","-1")})}function C(a,s){a=d(a),a.forEach(n=>{n.setAttribute("role",s)})}function A(a,s){a=d(a),a.forEach(n=>{n.setAttribute("aria-roledescription",s)})}function M(a,s){a=d(a),a.forEach(n=>{n.setAttribute("aria-controls",s)})}function B(a,s){a=d(a),a.forEach(n=>{n.setAttribute("aria-label",s)})}function q(a,s){a=d(a),a.forEach(n=>{n.setAttribute("id",s)})}function r(a,s){a=d(a),a.forEach(n=>{n.setAttribute("aria-live",s)})}function m(a){a=d(a),a.forEach(s=>{s.setAttribute("aria-disabled",!0)})}function x(a){a=d(a),a.forEach(s=>{s.setAttribute("aria-disabled",!1)})}function t(a){if(a.keyCode!==13&&a.keyCode!==32)return;const s=e.params.a11y,n=a.target;e.pagination&&e.pagination.el&&(n===e.pagination.el||e.pagination.el.contains(a.target))&&!a.target.matches(R(e.params.pagination.bulletClass))||(e.navigation&&e.navigation.nextEl&&n===e.navigation.nextEl&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?o(s.lastSlideMessage):o(s.nextSlideMessage)),e.navigation&&e.navigation.prevEl&&n===e.navigation.prevEl&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?o(s.firstSlideMessage):o(s.prevSlideMessage)),e.pagination&&n.matches(R(e.params.pagination.bulletClass))&&n.click())}function i(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:a,prevEl:s}=e.navigation;s&&(e.isBeginning?(m(s),T(s)):(x(s),y(s))),a&&(e.isEnd?(m(a),T(a)):(x(a),y(a)))}function l(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function b(){return l()&&e.params.pagination.clickable}function k(){const a=e.params.a11y;l()&&e.pagination.bullets.forEach(s=>{e.params.pagination.clickable&&(y(s),e.params.pagination.renderBullet||(C(s,"button"),B(s,a.paginationBulletMessage.replace(/\{\{index\}\}/,Y(s)+1)))),s.matches(R(e.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")})}const z=(a,s,n)=>{y(a),a.tagName!=="BUTTON"&&(C(a,"button"),a.addEventListener("keydown",t)),B(a,n),M(a,s)},P=()=>{e.a11y.clicked=!0},v=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},D=a=>{if(e.a11y.clicked)return;const s=a.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!s||!e.slides.includes(s))return;const n=e.slides.indexOf(s)===e.activeIndex,S=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(s);n||S||a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,e.slideTo(e.slides.indexOf(s),0))},w=()=>{const a=e.params.a11y;a.itemRoleDescriptionMessage&&A(e.slides,a.itemRoleDescriptionMessage),a.slideRole&&C(e.slides,a.slideRole);const s=e.slides.length;a.slideLabelMessage&&e.slides.forEach((n,S)=>{const j=e.params.loop?parseInt(n.getAttribute("data-swiper-slide-index"),10):S,E=a.slideLabelMessage.replace(/\{\{index\}\}/,j+1).replace(/\{\{slidesLength\}\}/,s);B(n,E)})},c=()=>{const a=e.params.a11y;e.el.append(g);const s=e.el;a.containerRoleDescriptionMessage&&A(s,a.containerRoleDescriptionMessage),a.containerMessage&&B(s,a.containerMessage);const n=e.wrapperEl,S=a.id||n.getAttribute("id")||`swiper-wrapper-${L(16)}`,j=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";q(n,S),r(n,j),w();let{nextEl:E,prevEl:W}=e.navigation?e.navigation:{};E=d(E),W=d(W),E&&E.forEach(U=>z(U,S,a.nextSlideMessage)),W&&W.forEach(U=>z(U,S,a.prevSlideMessage)),b()&&(Array.isArray(e.pagination.el)?e.pagination.el:[e.pagination.el]).forEach(le=>{le.addEventListener("keydown",t)}),e.el.addEventListener("focus",D,!0),e.el.addEventListener("pointerdown",P,!0),e.el.addEventListener("pointerup",v,!0)};function p(){g&&g.remove();let{nextEl:a,prevEl:s}=e.navigation?e.navigation:{};a=d(a),s=d(s),a&&a.forEach(n=>n.removeEventListener("keydown",t)),s&&s.forEach(n=>n.removeEventListener("keydown",t)),b()&&(Array.isArray(e.pagination.el)?e.pagination.el:[e.pagination.el]).forEach(S=>{S.removeEventListener("keydown",t)}),e.el.removeEventListener("focus",D,!0),e.el.removeEventListener("pointerdown",P,!0),e.el.removeEventListener("pointerup",v,!0)}f("beforeInit",()=>{g=Q("span",e.params.a11y.notificationClass),g.setAttribute("aria-live","assertive"),g.setAttribute("aria-atomic","true")}),f("afterInit",()=>{e.params.a11y.enabled&&c()}),f("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&w()}),f("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&i()}),f("paginationUpdate",()=>{e.params.a11y.enabled&&k()}),f("destroy",()=>{e.params.a11y.enabled&&p()})}const ie=()=>{const u=K(),e=(d,L)=>{u(oe(d)),u(ce(L))};let $=N(se);const g=N(Te).filter(d=>d.filter===$),o=[];for(let d=0;d<g.length;d+=10)o.push(g.slice(d,d+10));return h.jsx(xe,{modules:[Ie,Pe,je,qe],spaceBetween:50,slidesPerView:1,pagination:{clickable:!0},scrollbar:{draggable:!0},onSwiper:d=>console.log(d),className:"pagination",children:o.map(d=>h.jsx(ye,{children:h.jsx(Be,{children:d.map(({filter:L,name:y,imgURL:T,_id:C})=>h.jsx(te,{handleGetExercises:e,imgURL:T,name:fe(y),filter:L},C))})},re()))})};ie.propTypes={bodyParts:H.arrayOf(H.shape({name:H.string.isRequired}))};const Oe=u=>u.exercises.items,ne=u=>u.exercises.getFilters,Fe=G.ul`
  display: flex;
  gap: 28px;

  margin-top: 20px;

  ${I.tablet} {
    gap: 32px;
  }
`,_=G.li``,X=G.button`
  position: relative;
  padding: 0;

  color: ${O.textWhite03};
  font-family: Roboto;
  font-size: 14px;

  line-height: 1.28;

  background-color: transparent;
  outline: none;
  border: none;

  &.active::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;

    bottom: -4px;
    left: 0;
    background-color: #ef8964;
    border-radius: 2px;
  }

  ${I.tablet} {
    font-size: 16px;

    line-height: 1.5;
  }
`,Re=()=>{let u=N(se);const[e,$]=V.useState(u),f=N(ne),g=K();V.useEffect(()=>{g(pe())},[g,f]);const o=d=>{const L=d.target.childNodes[0].textContent;g(ae(!0)),$(L),g(de(L))};return h.jsx(h.Fragment,{children:h.jsxs(Fe,{children:[h.jsx(_,{children:h.jsx(X,{type:"button",onClick:o,className:e==="Body parts"?"active":"",children:"Body parts"})}),h.jsx(_,{children:h.jsx(X,{type:"button",onClick:o,className:e==="Muscles"?"active":"",children:"Muscles"})}),h.jsx(_,{children:h.jsx(X,{type:"button",onClick:o,className:e==="Equipment"?"active":"",children:"Equipment"})})]})})},ee=F.div`
  padding-left: 20px;
  padding-right: 20px;

  ${I.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }

  ${I.desktop} {
    padding-left: 95px;
    padding-right: 95px;
  }
`,He=F.div`
  ${I.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,Ne=F.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;

  ${I.tablet} {
    gap: 32px;
    padding: 72px 32px 48px 32px;
  }

  ${I.desktop} {
    padding: 68px 81px 81px 96px;

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${Ce.imgDx1});

    ${""}
  }
`,Ge=G.button`
  display: flex;
  padding: 0px;
  align-items: center;
	font-size: 14px;
  line-height: 1.28; 



  background-color: transparent;
  color: ${O.textWhite04};
  border: none;
	scale: 1;

  transition:
  scale 250ms ease-in-out,
  color 250ms ease-in-out;
	fill 250ms ease-in-out;


		${I.tablet}{
 font-size: 16px;
line-height: 1.5; 
		}



  &:hover {
    color: ${O.orange};
    scale: 1.1;

  }
  &:focus {
    color: ${O.orange};
		scale: 1.1;
  }

  &:hover svg {
    fill: ${O.orange};
		scale: 1.1;
  }
  &:focus svg {
    fill: ${O.orange};
		scale: 1.1;
  }
`,We=G.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${O.textWhite04};
  scale: 1;

  transition:
    scale 250ms ease-in-out,
    fill 250ms ease-in-out;
`,Ue=()=>{const u=K(),e=()=>{u(ae(!0))};return h.jsxs(Ge,{type:"button",onClick:e,children:[h.jsx(We,{children:h.jsx("use",{href:"/src/assets/sprite.svg#icon-arrow-left"})}),"Back"]})},ea=()=>{let u=N(ne),e=N(Oe),$=N(ze);return h.jsxs(h.Fragment,{children:[h.jsxs(ee,{children:[u?null:h.jsx(Ue,{}),h.jsxs(He,{children:[u?h.jsx(Z,{text:"Exercises",margin:{top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}}}):h.jsx(Z,{text:$,margin:{top:{desk:16,tab:16,mob:12},bt:{tab:32,mob:40}}}),h.jsx(Re,{})]})]}),u?h.jsx(ee,{children:h.jsx(ie,{})}):h.jsx(Ne,{children:h.jsx(Ee,{width:{dt:"868"},children:h.jsx(Le,{children:e.map((f,g)=>g<20?h.jsx(ke,{page:"exercise",data:f},f._id):null)})})})]})};export{ea as default};
