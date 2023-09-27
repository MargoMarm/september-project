import{n as q,m as I,c as F,P as N,r as V,j as m,u as Q,a as R,q as oe,t as ce,v as pe,w as de,x as te,y as fe,s as ge,i as Z}from"./index-a6c0a827.js";import{c as ue}from"./formatDate-d1383d55.js";import{e as me,c as K,b as be,d as Y,f as he,g as xe,n as ve,h as ye,S as Ee,a as Ce}from"./swiper-b45dabcc.js";import{r as Le}from"./react-responsive-a86cfcf7.js";import{s as G}from"./styled-components.browser.esm-5d096466.js";import{T as ee}from"./Title-35aa4539.js";import{S as ke,P as we,a as $e}from"./ProductsOrExercisesItem-6df71957.js";import"./BtnSubmit-2ca4d991.js";const Se=q.li`
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
`,Ae=q.a`
  display: block;

  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: ${F.background05};
`,Me=q.img`
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  z-index: -1;
`,De=q.div`
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
`,ze=q.span`
  color: ${F.white};
  font-size: 20px;
  line-height: 1.2;

  ${I.tablet} {
    font-size: 24px;
    line-height: 1.33;
  }
`,Be=q.span`
  color: ${F.textWhite04};
  font-size: 12px;
  line-height: 1.5;
`,se=({filter:d,name:e,imgURL:$,handleGetExercises:g})=>{const[f,r]=V.useState(d);V.useEffect(()=>{switch(d){case"Body parts":return r("bodyPart");case"Muscles":return r("target");case"Equipment":return r("equipment");default:return}},[d]);const b=`${f}=${e.toLowerCase()}`;return m.jsx(Se,{onClick:()=>g(b,e),children:m.jsxs(Ae,{children:[m.jsx(Me,{src:$,alt:e}),m.jsxs(De,{children:[m.jsx(ze,{children:e}),m.jsx(Be,{children:d})]})]})})};se.propTypes={filter:N.string.isRequired,name:N.string.isRequired,imgURL:N.string.isRequired,handleGetExercises:N.func.isRequired};const Ie=q.ul`
  margin-top: 40px;

  padding-bottom: 52px;

  ${I.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`,Te=d=>d.filter.items,ie=d=>d.filter.filter,je=d=>d.filter.currentTitle,Pe=d=>d.filter.isLoading;function J(d,e,$,g){return d.params.createElements&&Object.keys(g).forEach(f=>{if(!$[f]&&$.auto===!0){let r=me(d.el,`.${g[f]}`)[0];r||(r=K("div",g[f]),r.className=g[f],d.el.append(r)),$[f]=r,e[f]=r}}),$}function qe(d){let{swiper:e,extendParams:$,on:g,emit:f}=d;$({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const r=o=>(Array.isArray(o)?o:[o]).filter(u=>!!u);function b(o){let u;return o&&typeof o=="string"&&e.isElement&&(u=e.el.querySelector(o),u)?u:(o&&(typeof o=="string"&&(u=[...document.querySelectorAll(o)]),e.params.uniqueNavElements&&typeof o=="string"&&u.length>1&&e.el.querySelectorAll(o).length===1&&(u=e.el.querySelector(o))),o&&!u?o:u)}function h(o,u){const y=e.params.navigation;o=r(o),o.forEach(t=>{t&&(t.classList[u?"add":"remove"](...y.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=u),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](y.lockClass))})}function E(){const{nextEl:o,prevEl:u}=e.navigation;if(e.params.loop){h(u,!1),h(o,!1);return}h(u,e.isBeginning&&!e.params.rewind),h(o,e.isEnd&&!e.params.rewind)}function B(o){o.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),f("navigationPrev"))}function C(o){o.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),f("navigationNext"))}function S(){const o=e.params.navigation;if(e.params.navigation=J(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(o.nextEl||o.prevEl))return;let u=b(o.nextEl),y=b(o.prevEl);Object.assign(e.navigation,{nextEl:u,prevEl:y}),u=r(u),y=r(y);const t=(i,l)=>{i&&i.addEventListener("click",l==="next"?C:B),!e.enabled&&i&&i.classList.add(...o.lockClass.split(" "))};u.forEach(i=>t(i,"next")),y.forEach(i=>t(i,"prev"))}function M(){let{nextEl:o,prevEl:u}=e.navigation;o=r(o),u=r(u);const y=(t,i)=>{t.removeEventListener("click",i==="next"?C:B),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};o.forEach(t=>y(t,"next")),u.forEach(t=>y(t,"prev"))}g("init",()=>{e.params.navigation.enabled===!1?O():(S(),E())}),g("toEdge fromEdge lock unlock",()=>{E()}),g("destroy",()=>{M()}),g("enable disable",()=>{let{nextEl:o,prevEl:u}=e.navigation;if(o=r(o),u=r(u),e.enabled){E();return}[...o,...u].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),g("click",(o,u)=>{let{nextEl:y,prevEl:t}=e.navigation;y=r(y),t=r(t);const i=u.target;if(e.params.navigation.hideOnClick&&!t.includes(i)&&!y.includes(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===i||e.pagination.el.contains(i)))return;let l;y.length?l=y[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(l=t[0].classList.contains(e.params.navigation.hiddenClass)),f(l===!0?"navigationShow":"navigationHide"),[...y,...t].filter(x=>!!x).forEach(x=>x.classList.toggle(e.params.navigation.hiddenClass))}});const z=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),S(),E()},O=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),M()};Object.assign(e.navigation,{enable:z,disable:O,update:E,init:S,destroy:M})}function H(d){return d===void 0&&(d=""),`.${d.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Oe(d){let{swiper:e,extendParams:$,on:g,emit:f}=d;const r="swiper-pagination";$({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let b,h=0;const E=t=>(Array.isArray(t)?t:[t]).filter(i=>!!i);function B(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function C(t,i){const{bulletActiveClass:l}=e.params.pagination;t&&(t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${l}-${i}`),t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${l}-${i}-${i}`)))}function S(t){const i=t.target.closest(H(e.params.pagination.bulletClass));if(!i)return;t.preventDefault();const l=Y(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===l)return;const x=e.realIndex,k=e.getSlideIndexByData(l),T=e.getSlideIndexByData(e.realIndex),j=v=>{const D=e.activeIndex;e.loopFix({direction:v,activeSlideIndex:k,slideTo:!1});const w=e.activeIndex;D===w&&e.slideToLoop(x,0,!1,!0)};if(k>e.slides.length-e.loopedSlides)j(k>T?"next":"prev");else if(e.params.centeredSlides){const v=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(e.params.slidesPerView,10));k<Math.floor(v/2)&&j("prev")}e.slideToLoop(l)}else e.slideTo(l)}function M(){const t=e.rtl,i=e.params.pagination;if(B())return;let l=e.pagination.el;l=E(l);let x,k;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,j=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,x=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(x=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,x=e.activeIndex||0),i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const v=e.pagination.bullets;let D,w,c;if(i.dynamicBullets&&(b=be(v[0],e.isHorizontal()?"width":"height",!0),l.forEach(p=>{p.style[e.isHorizontal()?"width":"height"]=`${b*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&k!==void 0&&(h+=x-(k||0),h>i.dynamicMainBullets-1?h=i.dynamicMainBullets-1:h<0&&(h=0)),D=Math.max(x-h,0),w=D+(Math.min(v.length,i.dynamicMainBullets)-1),c=(w+D)/2),v.forEach(p=>{const a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(s=>`${i.bulletActiveClass}${s}`)].map(s=>typeof s=="string"&&s.includes(" ")?s.split(" "):s).flat();p.classList.remove(...a)}),l.length>1)v.forEach(p=>{const a=Y(p);a===x?p.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&p.setAttribute("part","bullet"),i.dynamicBullets&&(a>=D&&a<=w&&p.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),a===D&&C(p,"prev"),a===w&&C(p,"next"))});else{const p=v[x];if(p&&p.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&v.forEach((a,s)=>{a.setAttribute("part",s===x?"bullet-active":"bullet")}),i.dynamicBullets){const a=v[D],s=v[w];for(let n=D;n<=w;n+=1)v[n]&&v[n].classList.add(...`${i.bulletActiveClass}-main`.split(" "));C(a,"prev"),C(s,"next")}}if(i.dynamicBullets){const p=Math.min(v.length,i.dynamicMainBullets+4),a=(b*p-b)/2-c*b,s=t?"right":"left";v.forEach(n=>{n.style[e.isHorizontal()?s:"top"]=`${a}px`})}}l.forEach((v,D)=>{if(i.type==="fraction"&&(v.querySelectorAll(H(i.currentClass)).forEach(w=>{w.textContent=i.formatFractionCurrent(x+1)}),v.querySelectorAll(H(i.totalClass)).forEach(w=>{w.textContent=i.formatFractionTotal(j)})),i.type==="progressbar"){let w;i.progressbarOpposite?w=e.isHorizontal()?"vertical":"horizontal":w=e.isHorizontal()?"horizontal":"vertical";const c=(x+1)/j;let p=1,a=1;w==="horizontal"?p=c:a=c,v.querySelectorAll(H(i.progressbarFillClass)).forEach(s=>{s.style.transform=`translate3d(0,0,0) scaleX(${p}) scaleY(${a})`,s.style.transitionDuration=`${e.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(v.innerHTML=i.renderCustom(e,x+1,j),D===0&&f("paginationRender",v)):(D===0&&f("paginationRender",v),f("paginationUpdate",v)),e.params.watchOverflow&&e.enabled&&v.classList[e.isLocked?"add":"remove"](i.lockClass)})}function z(){const t=e.params.pagination;if(B())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let l=e.pagination.el;l=E(l);let x="";if(t.type==="bullets"){let k=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>i&&(k=i);for(let T=0;T<k;T+=1)t.renderBullet?x+=t.renderBullet.call(e,T,t.bulletClass):x+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?x=t.renderFraction.call(e,t.currentClass,t.totalClass):x=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?x=t.renderProgressbar.call(e,t.progressbarFillClass):x=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],l.forEach(k=>{t.type!=="custom"&&(k.innerHTML=x||""),t.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(H(t.bulletClass)))}),t.type!=="custom"&&f("paginationRender",l[0])}function O(){e.params.pagination=J(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let i;typeof t.el=="string"&&e.isElement&&(i=e.el.querySelector(t.el)),!i&&typeof t.el=="string"&&(i=[...document.querySelectorAll(t.el)]),i||(i=t.el),!(!i||i.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(t.el)],i.length>1&&(i=i.filter(l=>he(l,".swiper")[0]===e.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=E(i),i.forEach(l=>{t.type==="bullets"&&t.clickable&&l.classList.add(...(t.clickableClass||"").split(" ")),l.classList.add(t.modifierClass+t.type),l.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(l.classList.add(`${t.modifierClass}${t.type}-dynamic`),h=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&l.classList.add(t.progressbarOppositeClass),t.clickable&&l.addEventListener("click",S),e.enabled||l.classList.add(t.lockClass)}))}function o(){const t=e.params.pagination;if(B())return;let i=e.pagination.el;i&&(i=E(i),i.forEach(l=>{l.classList.remove(t.hiddenClass),l.classList.remove(t.modifierClass+t.type),l.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(l.classList.remove(...(t.clickableClass||"").split(" ")),l.removeEventListener("click",S))})),e.pagination.bullets&&e.pagination.bullets.forEach(l=>l.classList.remove(...t.bulletActiveClass.split(" ")))}g("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:i}=e.pagination;i=E(i),i.forEach(l=>{l.classList.remove(t.horizontalClass,t.verticalClass),l.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),g("init",()=>{e.params.pagination.enabled===!1?y():(O(),z(),M())}),g("activeIndexChange",()=>{typeof e.snapIndex>"u"&&M()}),g("snapIndexChange",()=>{M()}),g("snapGridLengthChange",()=>{z(),M()}),g("destroy",()=>{o()}),g("enable disable",()=>{let{el:t}=e.pagination;t&&(t=E(t),t.forEach(i=>i.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),g("lock unlock",()=>{M()}),g("click",(t,i)=>{const l=i.target,x=E(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&x&&x.length>0&&!l.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&l===e.navigation.nextEl||e.navigation.prevEl&&l===e.navigation.prevEl))return;const k=x[0].classList.contains(e.params.pagination.hiddenClass);f(k===!0?"paginationShow":"paginationHide"),x.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const u=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=E(t),t.forEach(i=>i.classList.remove(e.params.pagination.paginationDisabledClass))),O(),z(),M()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=E(t),t.forEach(i=>i.classList.add(e.params.pagination.paginationDisabledClass))),o()};Object.assign(e.pagination,{enable:u,disable:y,render:z,update:M,init:O,destroy:o})}function Fe(d){let{swiper:e,extendParams:$,on:g,emit:f}=d;const r=xe();let b=!1,h=null,E=null,B,C,S,M;$({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function z(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:c,rtlTranslate:p}=e,{dragEl:a,el:s}=c,n=e.params.scrollbar,A=e.params.loop?e.progressLoop:e.progress;let P=C,L=(S-C)*A;p?(L=-L,L>0?(P=C-L,L=0):-L+C>S&&(P=S+L)):L<0?(P=C+L,L=0):L+C>S&&(P=S-L),e.isHorizontal()?(a.style.transform=`translate3d(${L}px, 0, 0)`,a.style.width=`${P}px`):(a.style.transform=`translate3d(0px, ${L}px, 0)`,a.style.height=`${P}px`),n.hide&&(clearTimeout(h),s.style.opacity=1,h=setTimeout(()=>{s.style.opacity=0,s.style.transitionDuration="400ms"},1e3))}function O(c){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${c}ms`)}function o(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:c}=e,{dragEl:p,el:a}=c;p.style.width="",p.style.height="",S=e.isHorizontal()?a.offsetWidth:a.offsetHeight,M=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?C=S*M:C=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?p.style.width=`${C}px`:p.style.height=`${C}px`,M>=1?a.style.display="none":a.style.display="",e.params.scrollbar.hide&&(a.style.opacity=0),e.params.watchOverflow&&e.enabled&&c.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function u(c){return e.isHorizontal()?c.clientX:c.clientY}function y(c){const{scrollbar:p,rtlTranslate:a}=e,{el:s}=p;let n;n=(u(c)-ye(s)[e.isHorizontal()?"left":"top"]-(B!==null?B:C/2))/(S-C),n=Math.max(Math.min(n,1),0),a&&(n=1-n);const A=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*n;e.updateProgress(A),e.setTranslate(A),e.updateActiveIndex(),e.updateSlidesClasses()}function t(c){const p=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:n,dragEl:A}=a;b=!0,B=c.target===A?u(c)-c.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,c.preventDefault(),c.stopPropagation(),s.style.transitionDuration="100ms",A.style.transitionDuration="100ms",y(c),clearTimeout(E),n.style.transitionDuration="0ms",p.hide&&(n.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),f("scrollbarDragStart",c)}function i(c){const{scrollbar:p,wrapperEl:a}=e,{el:s,dragEl:n}=p;b&&(c.preventDefault?c.preventDefault():c.returnValue=!1,y(c),a.style.transitionDuration="0ms",s.style.transitionDuration="0ms",n.style.transitionDuration="0ms",f("scrollbarDragMove",c))}function l(c){const p=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:n}=a;b&&(b=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",s.style.transitionDuration=""),p.hide&&(clearTimeout(E),E=ve(()=>{n.style.opacity=0,n.style.transitionDuration="400ms"},1e3)),f("scrollbarDragEnd",c),p.snapOnRelease&&e.slideToClosest())}function x(c){const{scrollbar:p,params:a}=e,s=p.el;if(!s)return;const n=s,A=a.passiveListeners?{passive:!1,capture:!1}:!1,P=a.passiveListeners?{passive:!0,capture:!1}:!1;if(!n)return;const L=c==="on"?"addEventListener":"removeEventListener";n[L]("pointerdown",t,A),r[L]("pointermove",i,A),r[L]("pointerup",l,P)}function k(){!e.params.scrollbar.el||!e.scrollbar.el||x("on")}function T(){!e.params.scrollbar.el||!e.scrollbar.el||x("off")}function j(){const{scrollbar:c,el:p}=e;e.params.scrollbar=J(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let s;typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"?s=r.querySelectorAll(a.el):s||(s=a.el),e.params.uniqueNavElements&&typeof a.el=="string"&&s.length>1&&p.querySelectorAll(a.el).length===1&&(s=p.querySelector(a.el)),s.length>0&&(s=s[0]),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass);let n;s&&(n=s.querySelector(`.${e.params.scrollbar.dragClass}`),n||(n=K("div",e.params.scrollbar.dragClass),s.append(n))),Object.assign(c,{el:s,dragEl:n}),a.draggable&&k(),s&&s.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}function v(){const c=e.params.scrollbar,p=e.scrollbar.el;p&&p.classList.remove(e.isHorizontal()?c.horizontalClass:c.verticalClass),T()}g("init",()=>{e.params.scrollbar.enabled===!1?w():(j(),o(),z())}),g("update resize observerUpdate lock unlock",()=>{o()}),g("setTranslate",()=>{z()}),g("setTransition",(c,p)=>{O(p)}),g("enable disable",()=>{const{el:c}=e.scrollbar;c&&c.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}),g("destroy",()=>{v()});const D=()=>{e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),j(),o(),z()},w=()=>{e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),v()};Object.assign(e.scrollbar,{enable:D,disable:w,updateSize:o,setTranslate:z,init:j,destroy:v})}function Re(d){let{swiper:e,extendParams:$,on:g}=d;$({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let f=null;function r(a){const s=f;s.length!==0&&(s.innerHTML="",s.innerHTML=a)}const b=a=>(Array.isArray(a)?a:[a]).filter(s=>!!s);function h(a){a===void 0&&(a=16);const s=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(a).replace(/x/g,s)}function E(a){a=b(a),a.forEach(s=>{s.setAttribute("tabIndex","0")})}function B(a){a=b(a),a.forEach(s=>{s.setAttribute("tabIndex","-1")})}function C(a,s){a=b(a),a.forEach(n=>{n.setAttribute("role",s)})}function S(a,s){a=b(a),a.forEach(n=>{n.setAttribute("aria-roledescription",s)})}function M(a,s){a=b(a),a.forEach(n=>{n.setAttribute("aria-controls",s)})}function z(a,s){a=b(a),a.forEach(n=>{n.setAttribute("aria-label",s)})}function O(a,s){a=b(a),a.forEach(n=>{n.setAttribute("id",s)})}function o(a,s){a=b(a),a.forEach(n=>{n.setAttribute("aria-live",s)})}function u(a){a=b(a),a.forEach(s=>{s.setAttribute("aria-disabled",!0)})}function y(a){a=b(a),a.forEach(s=>{s.setAttribute("aria-disabled",!1)})}function t(a){if(a.keyCode!==13&&a.keyCode!==32)return;const s=e.params.a11y,n=a.target;e.pagination&&e.pagination.el&&(n===e.pagination.el||e.pagination.el.contains(a.target))&&!a.target.matches(H(e.params.pagination.bulletClass))||(e.navigation&&e.navigation.nextEl&&n===e.navigation.nextEl&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),e.navigation&&e.navigation.prevEl&&n===e.navigation.prevEl&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),e.pagination&&n.matches(H(e.params.pagination.bulletClass))&&n.click())}function i(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:a,prevEl:s}=e.navigation;s&&(e.isBeginning?(u(s),B(s)):(y(s),E(s))),a&&(e.isEnd?(u(a),B(a)):(y(a),E(a)))}function l(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function x(){return l()&&e.params.pagination.clickable}function k(){const a=e.params.a11y;l()&&e.pagination.bullets.forEach(s=>{e.params.pagination.clickable&&(E(s),e.params.pagination.renderBullet||(C(s,"button"),z(s,a.paginationBulletMessage.replace(/\{\{index\}\}/,Y(s)+1)))),s.matches(H(e.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")})}const T=(a,s,n)=>{E(a),a.tagName!=="BUTTON"&&(C(a,"button"),a.addEventListener("keydown",t)),z(a,n),M(a,s)},j=()=>{e.a11y.clicked=!0},v=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},D=a=>{if(e.a11y.clicked)return;const s=a.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!s||!e.slides.includes(s))return;const n=e.slides.indexOf(s)===e.activeIndex,A=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(s);n||A||a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,e.slideTo(e.slides.indexOf(s),0))},w=()=>{const a=e.params.a11y;a.itemRoleDescriptionMessage&&S(e.slides,a.itemRoleDescriptionMessage),a.slideRole&&C(e.slides,a.slideRole);const s=e.slides.length;a.slideLabelMessage&&e.slides.forEach((n,A)=>{const P=e.params.loop?parseInt(n.getAttribute("data-swiper-slide-index"),10):A,L=a.slideLabelMessage.replace(/\{\{index\}\}/,P+1).replace(/\{\{slidesLength\}\}/,s);z(n,L)})},c=()=>{const a=e.params.a11y;e.el.append(f);const s=e.el;a.containerRoleDescriptionMessage&&S(s,a.containerRoleDescriptionMessage),a.containerMessage&&z(s,a.containerMessage);const n=e.wrapperEl,A=a.id||n.getAttribute("id")||`swiper-wrapper-${h(16)}`,P=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";O(n,A),o(n,P),w();let{nextEl:L,prevEl:W}=e.navigation?e.navigation:{};L=b(L),W=b(W),L&&L.forEach(U=>T(U,A,a.nextSlideMessage)),W&&W.forEach(U=>T(U,A,a.prevSlideMessage)),x()&&(Array.isArray(e.pagination.el)?e.pagination.el:[e.pagination.el]).forEach(re=>{re.addEventListener("keydown",t)}),e.el.addEventListener("focus",D,!0),e.el.addEventListener("pointerdown",j,!0),e.el.addEventListener("pointerup",v,!0)};function p(){f&&f.remove();let{nextEl:a,prevEl:s}=e.navigation?e.navigation:{};a=b(a),s=b(s),a&&a.forEach(n=>n.removeEventListener("keydown",t)),s&&s.forEach(n=>n.removeEventListener("keydown",t)),x()&&(Array.isArray(e.pagination.el)?e.pagination.el:[e.pagination.el]).forEach(A=>{A.removeEventListener("keydown",t)}),e.el.removeEventListener("focus",D,!0),e.el.removeEventListener("pointerdown",j,!0),e.el.removeEventListener("pointerup",v,!0)}g("beforeInit",()=>{f=K("span",e.params.a11y.notificationClass),f.setAttribute("aria-live","assertive"),f.setAttribute("aria-atomic","true")}),g("afterInit",()=>{e.params.a11y.enabled&&c()}),g("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&w()}),g("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&i()}),g("paginationUpdate",()=>{e.params.a11y.enabled&&k()}),g("destroy",()=>{e.params.a11y.enabled&&p()})}const ne=()=>{const d=Q(),e=(h,E)=>{d(ce(h)),d(pe(E))};let $=R(ie);const f=R(Te).filter(h=>h.filter===$),r=Le.useMediaQuery({minWidth:768,maxWidth:1439}),b=[];if(r)for(let h=0;h<f.length;h+=9)b.push(f.slice(h,h+9));else for(let h=0;h<f.length;h+=10)b.push(f.slice(h,h+10));return m.jsx(Ee,{modules:[qe,Oe,Fe,Re],spaceBetween:50,slidesPerView:1,pagination:{clickable:!0},className:"pagination",children:b.map(h=>m.jsx(Ce,{children:m.jsx(Ie,{children:h.map(({filter:E,name:B,imgURL:C,_id:S})=>m.jsx(se,{handleGetExercises:e,imgURL:C,name:ue(B),filter:E},S))})},oe()))},$)};ne.propTypes={bodyParts:N.arrayOf(N.shape({name:N.string.isRequired}))};const He=d=>d.exercises.items,le=d=>d.exercises.getFilters,Ne=d=>d.exercises.isLoading,Ge=G.ul`
  display: flex;
  gap: 28px;

  margin-top: 20px;

  ${I.tablet} {
    gap: 32px;
  }
`,_=G.li``,X=G.button`
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
`,We=()=>{let d=R(ie);const[e,$]=V.useState(d),g=R(le),f=Q();V.useEffect(()=>{f(de())},[f,g]);const r=b=>{const h=b.target.childNodes[0].textContent;f(te(!0)),$(h),f(fe(h))};return m.jsx(m.Fragment,{children:m.jsxs(Ge,{children:[m.jsx(_,{children:m.jsx(X,{type:"button",onClick:r,className:e==="Body parts"?"active":"",children:"Body parts"})}),m.jsx(_,{children:m.jsx(X,{type:"button",onClick:r,className:e==="Muscles"?"active":"",children:"Muscles"})}),m.jsx(_,{children:m.jsx(X,{type:"button",onClick:r,className:e==="Equipment"?"active":"",children:"Equipment"})})]})})},Ue="/september-project/assets/exercises_desk_2x-598143e6.jpeg",ae=q.div`
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
`,Ve=q.div`
  ${I.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,_e=q.div`
  padding: 40px 20px 80px 20px;
  position: relative;


  ${I.tablet} {
    padding: 72px 32px 48px 32px;
  }

  ${I.desktop} {
    padding: 68px 81px 81px 96px;
  }
`,Xe=q.div`
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
    background-image: url(${Ue});
  }
`,Ye=G.button`
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
`,Qe=G.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${F.textWhite04};
  scale: 1;

  transition:
    scale 250ms ease-in-out,
    fill 250ms ease-in-out;
`,Ke=()=>{const d=Q(),e=()=>{d(te(!0))};return m.jsxs(Ye,{type:"button",onClick:e,children:[m.jsx(Qe,{children:m.jsx("use",{href:ge+"#icon-arrow-left"})}),"Back"]})},la=()=>{let d=R(le),e=R(He),$=R(je);const g=R(Pe),f=R(Ne);return m.jsxs(m.Fragment,{children:[m.jsxs(ae,{children:[d?null:m.jsx(Ke,{}),m.jsxs(Ve,{children:[d?m.jsx(ee,{text:"Exercises",margin:{top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}}}):m.jsx(ee,{text:$,margin:{top:{desk:16,tab:16,mob:12},bt:{tab:32,mob:40}}}),m.jsx(We,{})]})]}),g?m.jsx(Z,{size:"60"}):d?m.jsx(ae,{children:m.jsx(ne,{})}):m.jsxs(_e,{children:[m.jsx(Xe,{}),f?m.jsx(Z,{size:"60"}):m.jsx(ke,{width:{dt:"868"},children:m.jsx(we,{children:e.map((r,b)=>b<20?m.jsx($e,{page:"exercise",data:r},r._id):null)})})]})]})};export{la as default};
