import{n as O,m as I,c as F,P as N,r as G,j as b,u as _,a as q,v as oe,w as ce,x as pe,y as de,z as fe,A as te,B as ge,s as ue,k as Z,D as me}from"./index-1ab40bd0.js";import{s as se,f as be,h as he,i as xe,j as ve,S as ye,I as Ee,P as Ce,e as Le}from"./ProductsOrExercisesItem-6547adad.js";import{c as ke}from"./formatDate-d1383d55.js";import{e as we,c as K,b as Se,d as Q,f as $e,g as Me,n as Ae,h as De,S as Be,a as ze}from"./swiper-6aafa7f7.js";import{r as Ie}from"./react-responsive-20e318ce.js";import{s as W}from"./styled-components.browser.esm-f66ec0e2.js";import{T as ee}from"./Title-b2457eef.js";import{i as Pe}from"./exercises_desk_2x-1531e374.js";import"./BtnSubmit-ff0f4f48.js";import"./notiflix-aio-3.2.6.min-55aed2f6.js";const Te=O.li`
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
`,je=O.a`
  display: block;

  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: ${F.background05};
`,qe=O.img`
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  z-index: -1;
`,Oe=O.div`
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
`,Re=O.span`
  color: ${F.white};
  font-size: 20px;
  line-height: 1.2;

  ${I.tablet} {
    font-size: 24px;
    line-height: 1.33;
  }
`,Fe=O.span`
  color: ${F.textWhite04};
  font-size: 12px;
  line-height: 1.5;
`,ie=({filter:g,name:e,imgURL:w,handleGetExercises:f})=>{const[d,o]=G.useState(g);G.useEffect(()=>{switch(g){case"Body parts":return o("bodyPart");case"Muscles":return o("target");case"Equipment":return o("equipment");default:return}},[g]);const h=`${d}=${e.toLowerCase()}`;return b.jsx(Te,{onClick:()=>f(h,e),children:b.jsxs(je,{children:[b.jsx(qe,{src:w,alt:e}),b.jsxs(Oe,{children:[b.jsx(Re,{children:e}),b.jsx(Fe,{children:g})]})]})})};ie.propTypes={filter:N.string.isRequired,name:N.string.isRequired,imgURL:N.string.isRequired,handleGetExercises:N.func.isRequired};const He=O.ul`
  margin-top: 40px;

  padding-bottom: 52px;

  ${I.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`,Ne=g=>g.filter.items,ne=g=>g.filter.filter,Ge=g=>g.filter.currentTitle,We=g=>g.filter.isLoading;function J(g,e,w,f){return g.params.createElements&&Object.keys(f).forEach(d=>{if(!w[d]&&w.auto===!0){let o=we(g.el,`.${f[d]}`)[0];o||(o=K("div",f[d]),o.className=f[d],g.el.append(o)),w[d]=o,e[d]=o}}),w}function Ue(g){let{swiper:e,extendParams:w,on:f,emit:d}=g;w({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const o=l=>(Array.isArray(l)?l:[l]).filter(m=>!!m);function h(l){let m;return l&&typeof l=="string"&&e.isElement&&(m=e.el.querySelector(l),m)?m:(l&&(typeof l=="string"&&(m=[...document.querySelectorAll(l)]),e.params.uniqueNavElements&&typeof l=="string"&&m.length>1&&e.el.querySelectorAll(l).length===1&&(m=e.el.querySelector(l))),l&&!m?l:m)}function u(l,m){const E=e.params.navigation;l=o(l),l.forEach(t=>{t&&(t.classList[m?"add":"remove"](...E.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=m),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](E.lockClass))})}function y(){const{nextEl:l,prevEl:m}=e.navigation;if(e.params.loop){u(m,!1),u(l,!1);return}u(m,e.isBeginning&&!e.params.rewind),u(l,e.isEnd&&!e.params.rewind)}function D(l){l.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),d("navigationPrev"))}function C(l){l.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),d("navigationNext"))}function L(){const l=e.params.navigation;if(e.params.navigation=J(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(l.nextEl||l.prevEl))return;let m=h(l.nextEl),E=h(l.prevEl);Object.assign(e.navigation,{nextEl:m,prevEl:E}),m=o(m),E=o(E);const t=(i,r)=>{i&&i.addEventListener("click",r==="next"?C:D),!e.enabled&&i&&i.classList.add(...l.lockClass.split(" "))};m.forEach(i=>t(i,"next")),E.forEach(i=>t(i,"prev"))}function M(){let{nextEl:l,prevEl:m}=e.navigation;l=o(l),m=o(m);const E=(t,i)=>{t.removeEventListener("click",i==="next"?C:D),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};l.forEach(t=>E(t,"next")),m.forEach(t=>E(t,"prev"))}f("init",()=>{e.params.navigation.enabled===!1?R():(L(),y())}),f("toEdge fromEdge lock unlock",()=>{y()}),f("destroy",()=>{M()}),f("enable disable",()=>{let{nextEl:l,prevEl:m}=e.navigation;if(l=o(l),m=o(m),e.enabled){y();return}[...l,...m].filter(E=>!!E).forEach(E=>E.classList.add(e.params.navigation.lockClass))}),f("click",(l,m)=>{let{nextEl:E,prevEl:t}=e.navigation;E=o(E),t=o(t);const i=m.target;if(e.params.navigation.hideOnClick&&!t.includes(i)&&!E.includes(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===i||e.pagination.el.contains(i)))return;let r;E.length?r=E[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(r=t[0].classList.contains(e.params.navigation.hiddenClass)),d(r===!0?"navigationShow":"navigationHide"),[...E,...t].filter(x=>!!x).forEach(x=>x.classList.toggle(e.params.navigation.hiddenClass))}});const z=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),L(),y()},R=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),M()};Object.assign(e.navigation,{enable:z,disable:R,update:y,init:L,destroy:M})}function H(g){return g===void 0&&(g=""),`.${g.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Ve(g){let{swiper:e,extendParams:w,on:f,emit:d}=g;const o="swiper-pagination";w({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let h,u=0;const y=t=>(Array.isArray(t)?t:[t]).filter(i=>!!i);function D(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function C(t,i){const{bulletActiveClass:r}=e.params.pagination;t&&(t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${r}-${i}`),t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${r}-${i}-${i}`)))}function L(t){const i=t.target.closest(H(e.params.pagination.bulletClass));if(!i)return;t.preventDefault();const r=Q(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;const x=e.realIndex,S=e.getSlideIndexByData(r),P=e.getSlideIndexByData(e.realIndex),T=v=>{const B=e.activeIndex;e.loopFix({direction:v,activeSlideIndex:S,slideTo:!1});const $=e.activeIndex;B===$&&e.slideToLoop(x,0,!1,!0)};if(S>e.slides.length-e.loopedSlides)T(S>P?"next":"prev");else if(e.params.centeredSlides){const v=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(e.params.slidesPerView,10));S<Math.floor(v/2)&&T("prev")}e.slideToLoop(r)}else e.slideTo(r)}function M(){const t=e.rtl,i=e.params.pagination;if(D())return;let r=e.pagination.el;r=y(r);let x,S;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,T=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(S=e.previousRealIndex||0,x=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(x=e.snapIndex,S=e.previousSnapIndex):(S=e.previousIndex||0,x=e.activeIndex||0),i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const v=e.pagination.bullets;let B,$,c;if(i.dynamicBullets&&(h=Se(v[0],e.isHorizontal()?"width":"height",!0),r.forEach(p=>{p.style[e.isHorizontal()?"width":"height"]=`${h*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&S!==void 0&&(u+=x-(S||0),u>i.dynamicMainBullets-1?u=i.dynamicMainBullets-1:u<0&&(u=0)),B=Math.max(x-u,0),$=B+(Math.min(v.length,i.dynamicMainBullets)-1),c=($+B)/2),v.forEach(p=>{const a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(s=>`${i.bulletActiveClass}${s}`)].map(s=>typeof s=="string"&&s.includes(" ")?s.split(" "):s).flat();p.classList.remove(...a)}),r.length>1)v.forEach(p=>{const a=Q(p);a===x?p.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&p.setAttribute("part","bullet"),i.dynamicBullets&&(a>=B&&a<=$&&p.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),a===B&&C(p,"prev"),a===$&&C(p,"next"))});else{const p=v[x];if(p&&p.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&v.forEach((a,s)=>{a.setAttribute("part",s===x?"bullet-active":"bullet")}),i.dynamicBullets){const a=v[B],s=v[$];for(let n=B;n<=$;n+=1)v[n]&&v[n].classList.add(...`${i.bulletActiveClass}-main`.split(" "));C(a,"prev"),C(s,"next")}}if(i.dynamicBullets){const p=Math.min(v.length,i.dynamicMainBullets+4),a=(h*p-h)/2-c*h,s=t?"right":"left";v.forEach(n=>{n.style[e.isHorizontal()?s:"top"]=`${a}px`})}}r.forEach((v,B)=>{if(i.type==="fraction"&&(v.querySelectorAll(H(i.currentClass)).forEach($=>{$.textContent=i.formatFractionCurrent(x+1)}),v.querySelectorAll(H(i.totalClass)).forEach($=>{$.textContent=i.formatFractionTotal(T)})),i.type==="progressbar"){let $;i.progressbarOpposite?$=e.isHorizontal()?"vertical":"horizontal":$=e.isHorizontal()?"horizontal":"vertical";const c=(x+1)/T;let p=1,a=1;$==="horizontal"?p=c:a=c,v.querySelectorAll(H(i.progressbarFillClass)).forEach(s=>{s.style.transform=`translate3d(0,0,0) scaleX(${p}) scaleY(${a})`,s.style.transitionDuration=`${e.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(v.innerHTML=i.renderCustom(e,x+1,T),B===0&&d("paginationRender",v)):(B===0&&d("paginationRender",v),d("paginationUpdate",v)),e.params.watchOverflow&&e.enabled&&v.classList[e.isLocked?"add":"remove"](i.lockClass)})}function z(){const t=e.params.pagination;if(D())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let r=e.pagination.el;r=y(r);let x="";if(t.type==="bullets"){let S=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&S>i&&(S=i);for(let P=0;P<S;P+=1)t.renderBullet?x+=t.renderBullet.call(e,P,t.bulletClass):x+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?x=t.renderFraction.call(e,t.currentClass,t.totalClass):x=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?x=t.renderProgressbar.call(e,t.progressbarFillClass):x=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],r.forEach(S=>{t.type!=="custom"&&(S.innerHTML=x||""),t.type==="bullets"&&e.pagination.bullets.push(...S.querySelectorAll(H(t.bulletClass)))}),t.type!=="custom"&&d("paginationRender",r[0])}function R(){e.params.pagination=J(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let i;typeof t.el=="string"&&e.isElement&&(i=e.el.querySelector(t.el)),!i&&typeof t.el=="string"&&(i=[...document.querySelectorAll(t.el)]),i||(i=t.el),!(!i||i.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(t.el)],i.length>1&&(i=i.filter(r=>$e(r,".swiper")[0]===e.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=y(i),i.forEach(r=>{t.type==="bullets"&&t.clickable&&r.classList.add(...(t.clickableClass||"").split(" ")),r.classList.add(t.modifierClass+t.type),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(r.classList.add(`${t.modifierClass}${t.type}-dynamic`),u=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&r.classList.add(t.progressbarOppositeClass),t.clickable&&r.addEventListener("click",L),e.enabled||r.classList.add(t.lockClass)}))}function l(){const t=e.params.pagination;if(D())return;let i=e.pagination.el;i&&(i=y(i),i.forEach(r=>{r.classList.remove(t.hiddenClass),r.classList.remove(t.modifierClass+t.type),r.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(r.classList.remove(...(t.clickableClass||"").split(" ")),r.removeEventListener("click",L))})),e.pagination.bullets&&e.pagination.bullets.forEach(r=>r.classList.remove(...t.bulletActiveClass.split(" ")))}f("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:i}=e.pagination;i=y(i),i.forEach(r=>{r.classList.remove(t.horizontalClass,t.verticalClass),r.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),f("init",()=>{e.params.pagination.enabled===!1?E():(R(),z(),M())}),f("activeIndexChange",()=>{typeof e.snapIndex>"u"&&M()}),f("snapIndexChange",()=>{M()}),f("snapGridLengthChange",()=>{z(),M()}),f("destroy",()=>{l()}),f("enable disable",()=>{let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),f("lock unlock",()=>{M()}),f("click",(t,i)=>{const r=i.target,x=y(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&x&&x.length>0&&!r.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&r===e.navigation.nextEl||e.navigation.prevEl&&r===e.navigation.prevEl))return;const S=x[0].classList.contains(e.params.pagination.hiddenClass);d(S===!0?"paginationShow":"paginationHide"),x.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const m=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList.remove(e.params.pagination.paginationDisabledClass))),R(),z(),M()},E=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=y(t),t.forEach(i=>i.classList.add(e.params.pagination.paginationDisabledClass))),l()};Object.assign(e.pagination,{enable:m,disable:E,render:z,update:M,init:R,destroy:l})}function _e(g){let{swiper:e,extendParams:w,on:f,emit:d}=g;const o=Me();let h=!1,u=null,y=null,D,C,L,M;w({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function z(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:c,rtlTranslate:p}=e,{dragEl:a,el:s}=c,n=e.params.scrollbar,A=e.params.loop?e.progressLoop:e.progress;let j=C,k=(L-C)*A;p?(k=-k,k>0?(j=C-k,k=0):-k+C>L&&(j=L+k)):k<0?(j=C+k,k=0):k+C>L&&(j=L-k),e.isHorizontal()?(a.style.transform=`translate3d(${k}px, 0, 0)`,a.style.width=`${j}px`):(a.style.transform=`translate3d(0px, ${k}px, 0)`,a.style.height=`${j}px`),n.hide&&(clearTimeout(u),s.style.opacity=1,u=setTimeout(()=>{s.style.opacity=0,s.style.transitionDuration="400ms"},1e3))}function R(c){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${c}ms`)}function l(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:c}=e,{dragEl:p,el:a}=c;p.style.width="",p.style.height="",L=e.isHorizontal()?a.offsetWidth:a.offsetHeight,M=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?C=L*M:C=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?p.style.width=`${C}px`:p.style.height=`${C}px`,M>=1?a.style.display="none":a.style.display="",e.params.scrollbar.hide&&(a.style.opacity=0),e.params.watchOverflow&&e.enabled&&c.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function m(c){return e.isHorizontal()?c.clientX:c.clientY}function E(c){const{scrollbar:p,rtlTranslate:a}=e,{el:s}=p;let n;n=(m(c)-De(s)[e.isHorizontal()?"left":"top"]-(D!==null?D:C/2))/(L-C),n=Math.max(Math.min(n,1),0),a&&(n=1-n);const A=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*n;e.updateProgress(A),e.setTranslate(A),e.updateActiveIndex(),e.updateSlidesClasses()}function t(c){const p=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:n,dragEl:A}=a;h=!0,D=c.target===A?m(c)-c.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,c.preventDefault(),c.stopPropagation(),s.style.transitionDuration="100ms",A.style.transitionDuration="100ms",E(c),clearTimeout(y),n.style.transitionDuration="0ms",p.hide&&(n.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),d("scrollbarDragStart",c)}function i(c){const{scrollbar:p,wrapperEl:a}=e,{el:s,dragEl:n}=p;h&&(c.preventDefault?c.preventDefault():c.returnValue=!1,E(c),a.style.transitionDuration="0ms",s.style.transitionDuration="0ms",n.style.transitionDuration="0ms",d("scrollbarDragMove",c))}function r(c){const p=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:n}=a;h&&(h=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",s.style.transitionDuration=""),p.hide&&(clearTimeout(y),y=Ae(()=>{n.style.opacity=0,n.style.transitionDuration="400ms"},1e3)),d("scrollbarDragEnd",c),p.snapOnRelease&&e.slideToClosest())}function x(c){const{scrollbar:p,params:a}=e,s=p.el;if(!s)return;const n=s,A=a.passiveListeners?{passive:!1,capture:!1}:!1,j=a.passiveListeners?{passive:!0,capture:!1}:!1;if(!n)return;const k=c==="on"?"addEventListener":"removeEventListener";n[k]("pointerdown",t,A),o[k]("pointermove",i,A),o[k]("pointerup",r,j)}function S(){!e.params.scrollbar.el||!e.scrollbar.el||x("on")}function P(){!e.params.scrollbar.el||!e.scrollbar.el||x("off")}function T(){const{scrollbar:c,el:p}=e;e.params.scrollbar=J(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let s;typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"?s=o.querySelectorAll(a.el):s||(s=a.el),e.params.uniqueNavElements&&typeof a.el=="string"&&s.length>1&&p.querySelectorAll(a.el).length===1&&(s=p.querySelector(a.el)),s.length>0&&(s=s[0]),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass);let n;s&&(n=s.querySelector(`.${e.params.scrollbar.dragClass}`),n||(n=K("div",e.params.scrollbar.dragClass),s.append(n))),Object.assign(c,{el:s,dragEl:n}),a.draggable&&S(),s&&s.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}function v(){const c=e.params.scrollbar,p=e.scrollbar.el;p&&p.classList.remove(e.isHorizontal()?c.horizontalClass:c.verticalClass),P()}f("init",()=>{e.params.scrollbar.enabled===!1?$():(T(),l(),z())}),f("update resize observerUpdate lock unlock",()=>{l()}),f("setTranslate",()=>{z()}),f("setTransition",(c,p)=>{R(p)}),f("enable disable",()=>{const{el:c}=e.scrollbar;c&&c.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}),f("destroy",()=>{v()});const B=()=>{e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),T(),l(),z()},$=()=>{e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),v()};Object.assign(e.scrollbar,{enable:B,disable:$,updateSize:l,setTranslate:z,init:T,destroy:v})}function Xe(g){let{swiper:e,extendParams:w,on:f}=g;w({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let d=null;function o(a){const s=d;s.length!==0&&(s.innerHTML="",s.innerHTML=a)}const h=a=>(Array.isArray(a)?a:[a]).filter(s=>!!s);function u(a){a===void 0&&(a=16);const s=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(a).replace(/x/g,s)}function y(a){a=h(a),a.forEach(s=>{s.setAttribute("tabIndex","0")})}function D(a){a=h(a),a.forEach(s=>{s.setAttribute("tabIndex","-1")})}function C(a,s){a=h(a),a.forEach(n=>{n.setAttribute("role",s)})}function L(a,s){a=h(a),a.forEach(n=>{n.setAttribute("aria-roledescription",s)})}function M(a,s){a=h(a),a.forEach(n=>{n.setAttribute("aria-controls",s)})}function z(a,s){a=h(a),a.forEach(n=>{n.setAttribute("aria-label",s)})}function R(a,s){a=h(a),a.forEach(n=>{n.setAttribute("id",s)})}function l(a,s){a=h(a),a.forEach(n=>{n.setAttribute("aria-live",s)})}function m(a){a=h(a),a.forEach(s=>{s.setAttribute("aria-disabled",!0)})}function E(a){a=h(a),a.forEach(s=>{s.setAttribute("aria-disabled",!1)})}function t(a){if(a.keyCode!==13&&a.keyCode!==32)return;const s=e.params.a11y,n=a.target;e.pagination&&e.pagination.el&&(n===e.pagination.el||e.pagination.el.contains(a.target))&&!a.target.matches(H(e.params.pagination.bulletClass))||(e.navigation&&e.navigation.nextEl&&n===e.navigation.nextEl&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?o(s.lastSlideMessage):o(s.nextSlideMessage)),e.navigation&&e.navigation.prevEl&&n===e.navigation.prevEl&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?o(s.firstSlideMessage):o(s.prevSlideMessage)),e.pagination&&n.matches(H(e.params.pagination.bulletClass))&&n.click())}function i(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:a,prevEl:s}=e.navigation;s&&(e.isBeginning?(m(s),D(s)):(E(s),y(s))),a&&(e.isEnd?(m(a),D(a)):(E(a),y(a)))}function r(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function x(){return r()&&e.params.pagination.clickable}function S(){const a=e.params.a11y;r()&&e.pagination.bullets.forEach(s=>{e.params.pagination.clickable&&(y(s),e.params.pagination.renderBullet||(C(s,"button"),z(s,a.paginationBulletMessage.replace(/\{\{index\}\}/,Q(s)+1)))),s.matches(H(e.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")})}const P=(a,s,n)=>{y(a),a.tagName!=="BUTTON"&&(C(a,"button"),a.addEventListener("keydown",t)),z(a,n),M(a,s)},T=()=>{e.a11y.clicked=!0},v=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},B=a=>{if(e.a11y.clicked)return;const s=a.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!s||!e.slides.includes(s))return;const n=e.slides.indexOf(s)===e.activeIndex,A=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(s);n||A||a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,e.slideTo(e.slides.indexOf(s),0))},$=()=>{const a=e.params.a11y;a.itemRoleDescriptionMessage&&L(e.slides,a.itemRoleDescriptionMessage),a.slideRole&&C(e.slides,a.slideRole);const s=e.slides.length;a.slideLabelMessage&&e.slides.forEach((n,A)=>{const j=e.params.loop?parseInt(n.getAttribute("data-swiper-slide-index"),10):A,k=a.slideLabelMessage.replace(/\{\{index\}\}/,j+1).replace(/\{\{slidesLength\}\}/,s);z(n,k)})},c=()=>{const a=e.params.a11y;e.el.append(d);const s=e.el;a.containerRoleDescriptionMessage&&L(s,a.containerRoleDescriptionMessage),a.containerMessage&&z(s,a.containerMessage);const n=e.wrapperEl,A=a.id||n.getAttribute("id")||`swiper-wrapper-${u(16)}`,j=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";R(n,A),l(n,j),$();let{nextEl:k,prevEl:U}=e.navigation?e.navigation:{};k=h(k),U=h(U),k&&k.forEach(V=>P(V,A,a.nextSlideMessage)),U&&U.forEach(V=>P(V,A,a.prevSlideMessage)),x()&&(Array.isArray(e.pagination.el)?e.pagination.el:[e.pagination.el]).forEach(le=>{le.addEventListener("keydown",t)}),e.el.addEventListener("focus",B,!0),e.el.addEventListener("pointerdown",T,!0),e.el.addEventListener("pointerup",v,!0)};function p(){d&&d.remove();let{nextEl:a,prevEl:s}=e.navigation?e.navigation:{};a=h(a),s=h(s),a&&a.forEach(n=>n.removeEventListener("keydown",t)),s&&s.forEach(n=>n.removeEventListener("keydown",t)),x()&&(Array.isArray(e.pagination.el)?e.pagination.el:[e.pagination.el]).forEach(A=>{A.removeEventListener("keydown",t)}),e.el.removeEventListener("focus",B,!0),e.el.removeEventListener("pointerdown",T,!0),e.el.removeEventListener("pointerup",v,!0)}f("beforeInit",()=>{d=K("span",e.params.a11y.notificationClass),d.setAttribute("aria-live","assertive"),d.setAttribute("aria-atomic","true")}),f("afterInit",()=>{e.params.a11y.enabled&&c()}),f("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&$()}),f("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&i()}),f("paginationUpdate",()=>{e.params.a11y.enabled&&S()}),f("destroy",()=>{e.params.a11y.enabled&&p()})}const re=()=>{const g=_(),e=(u,y)=>{g(ce(u)),g(pe(u)),g(de(y))};let w=q(ne);const d=q(Ne).filter(u=>u.filter===w),o=Ie.useMediaQuery({minWidth:768,maxWidth:1439}),h=[];if(o)for(let u=0;u<d.length;u+=9)h.push(d.slice(u,u+9));else for(let u=0;u<d.length;u+=10)h.push(d.slice(u,u+10));return b.jsx(Be,{modules:[Ue,Ve,_e,Xe],spaceBetween:50,slidesPerView:1,pagination:{clickable:!0},className:"pagination",children:h.map(u=>b.jsx(ze,{children:b.jsx(He,{children:u.map(({filter:y,name:D,imgURL:C,_id:L})=>b.jsx(ie,{handleGetExercises:e,imgURL:C,name:ke(D),filter:y},L))})},oe()))},w)};re.propTypes={bodyParts:N.arrayOf(N.shape({name:N.string.isRequired}))};const Ye=W.ul`
  display: flex;
  gap: 28px;

  margin-top: 20px;

  ${I.tablet} {
    gap: 32px;
  }
`,X=W.li``,Y=W.button`
  position: relative;
  padding: 0;

  color: ${F.textWhite03};
  font-family: Roboto;
  font-size: 14px;

  line-height: 1.28;

  background-color: transparent;
  outline: none;
  border: none;

  &:after {
    content: '';
    display: block;
    position: absolute;

    transition:
      background-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scalex(0);

    bottom: -4px;
    left: 0;
    background-color: transparent;
  }

  &.active::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;

    bottom: -4px;
    left: 0;
    background-color: #ef8964;
    transform: scalex(1);
    border-radius: 2px;
  }

  ${I.tablet} {
    font-size: 16px;

    line-height: 1.5;
  }
`,Qe=()=>{let g=q(ne);const[e,w]=G.useState(g),f=q(se),d=_();G.useEffect(()=>{d(fe())},[d,f]);const o=h=>{const u=h.target.childNodes[0].textContent;d(te(!0)),w(u),d(ge(u))};return b.jsx(b.Fragment,{children:b.jsxs(Ye,{children:[b.jsx(X,{children:b.jsx(Y,{type:"button",onClick:o,className:e==="Body parts"?"active":"",children:"Body parts"})}),b.jsx(X,{children:b.jsx(Y,{type:"button",onClick:o,className:e==="Muscles"?"active":"",children:"Muscles"})}),b.jsx(X,{children:b.jsx(Y,{type:"button",onClick:o,className:e==="Equipment"?"active":"",children:"Equipment"})})]})})},ae=O.div`
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
`,Ke=O.div`
  ${I.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,Je=O.div`
  padding: 40px 20px 80px 20px;
  position: relative;


  ${I.tablet} {
    padding: 32px 32px 0px 32px;
  }

  ${I.desktop} {
    padding: 0px 81px 0px 96px;
  }
`,Ze=O.div`
  ${I.desktop} {
    position: absolute;
    top: -117px;
    right: 0;
    z-index: -1;
    display: block;

    width: 428px;
    height: 716px;
    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${Pe});
  }
`,ea=W.button`
  display: flex;
  align-items: center;

  padding: 0px;
  margin-top: 10px;

  font-size: 14px;
  line-height: 1.28;

  background-color: transparent;
  color: ${F.textWhite04};
  border: none;
  scale: 1;

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out,
    fill 250ms ease-in-out;

  ${I.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }

  &:hover {
    color: ${F.orange};
    scale: 1.1;
  }
  &:focus {
    color: ${F.orange};
    scale: 1.1;
  }

  &:hover svg {
    fill: ${F.orange};
    scale: 1.1;
  }
  &:focus svg {
    fill: ${F.orange};
    scale: 1.1;
  }
`,aa=W.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${F.textWhite04};
  scale: 1;

  transition:
    scale 250ms ease-in-out,
    fill 250ms ease-in-out;
`,ta=()=>{const g=_(),e=()=>{g(te(!0))};return b.jsxs(ea,{type:"button",onClick:e,children:[b.jsx(aa,{children:b.jsx("use",{href:ue+"#icon-arrow-left"})}),"Back"]})},ga=()=>{const[g,e]=G.useState(1);let w=q(se),f=q(be),d=q(Ge);const o=q(We),h=q(he),u=_(),y=q(xe),D=q(ve);G.useEffect(()=>{e(1)},[y]);const C=()=>{if(g===1){e(M=>M+1);return}const L=new URLSearchParams({page:g,limit:20}).toString();u(me(`${y}&${L}`)),e(M=>M+1)};return b.jsxs("main",{children:[b.jsxs(ae,{children:[w?null:b.jsx(ta,{}),b.jsxs(Ke,{children:[w?b.jsx(ee,{text:"Exercises",margin:{top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}}}):b.jsx(ee,{text:d,margin:{top:{desk:16,tab:16,mob:12},bt:{tab:32,mob:40}}}),b.jsx(Qe,{})]})]}),o?b.jsx(Z,{size:"60"}):w?b.jsx(ae,{children:b.jsx(re,{})}):b.jsxs(Je,{children:[b.jsx(Ze,{}),b.jsx(ye,{width:{dt:"878"},children:b.jsx(Ee,{pageStart:0,loadMore:C,hasMore:D&&!h,loader:b.jsx(Z,{},"qwe258"),useWindow:!1,children:b.jsx(Ce,{children:f.map(L=>b.jsx(Le,{page:"exercise",data:L},L._id))})})})]})]})};export{ga as default};
