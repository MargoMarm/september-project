import{n as q,m as T,c as F,P as H,r as V,j as m,u as Q,d as N,o as re,p as oe,q as ce,t as pe,v as ae,w as de,s as fe}from"./index-ada2ea4c.js";import{c as ge}from"./formatDate-d1383d55.js";import{e as ue,c as K,b as me,d as Y,f as be,g as he,n as ve,h as xe,S as ye,a as Ce}from"./swiper-42fbba7b.js";import{r as Ee}from"./react-responsive-06abcafc.js";import{s as G}from"./styled-components.browser.esm-53d1ad3c.js";import{T as Z}from"./Title-30f83755.js";import{S as Le,P as ke,a as we}from"./ProductsOrExercisesItem-5a1b2a32.js";import"./BtnSubmit-4b381148.js";const $e=q.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }



  ${T.tablet} {
    flex-basis: calc((100% - 32px) / 3);
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${T.desktop} {
    flex-basis: calc((100% - 64px) / 5);
  }
`,Se=q.a`
  display: block;

  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: ${F.background05};
`,Ae=q.img`
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  z-index: -1;
`,Me=q.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 137px;
  text-align: center;

  ${T.mobile} {
    top: 50%;
    left: 50%;
  }

  ${T.tablet} {
    top: 50%;
    left: 50%;
  }
`,De=q.span`
  color: ${F.white};
  font-size: 20px;
  line-height: 1.2;

  ${T.tablet} {
    font-size: 24px;
    line-height: 1.33;
  }
`,Be=q.span`
  color: ${F.textWhite04};
  font-size: 12px;
  line-height: 1.5;
`,te=({filter:g,name:e,imgURL:$,handleGetExercises:f})=>{const[d,o]=V.useState(g);V.useEffect(()=>{switch(g){case"Body parts":return o("bodyPart");case"Muscles":return o("target");case"Equipment":return o("equipment");default:return}},[g]);const b=`${d}=${e.toLowerCase()}`;return m.jsx($e,{onClick:()=>f(b,e),children:m.jsxs(Se,{children:[m.jsx(Ae,{src:$,alt:e}),m.jsxs(Me,{children:[m.jsx(De,{children:e}),m.jsx(Be,{children:g})]})]})})};te.propTypes={filter:H.string.isRequired,name:H.string.isRequired,imgURL:H.string.isRequired,handleGetExercises:H.func.isRequired};const ze=q.ul`
  margin-top: 40px;

  padding-bottom: 52px;

  ${T.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`,Te=g=>g.filter.items,se=g=>g.filter.filter,Ie=g=>g.filter.currentTitle;function J(g,e,$,f){return g.params.createElements&&Object.keys(f).forEach(d=>{if(!$[d]&&$.auto===!0){let o=ue(g.el,`.${f[d]}`)[0];o||(o=K("div",f[d]),o.className=f[d],g.el.append(o)),$[d]=o,e[d]=o}}),$}function je(g){let{swiper:e,extendParams:$,on:f,emit:d}=g;$({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const o=r=>(Array.isArray(r)?r:[r]).filter(u=>!!u);function b(r){let u;return r&&typeof r=="string"&&e.isElement&&(u=e.el.querySelector(r),u)?u:(r&&(typeof r=="string"&&(u=[...document.querySelectorAll(r)]),e.params.uniqueNavElements&&typeof r=="string"&&u.length>1&&e.el.querySelectorAll(r).length===1&&(u=e.el.querySelector(r))),r&&!u?r:u)}function h(r,u){const y=e.params.navigation;r=o(r),r.forEach(t=>{t&&(t.classList[u?"add":"remove"](...y.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=u),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](y.lockClass))})}function C(){const{nextEl:r,prevEl:u}=e.navigation;if(e.params.loop){h(u,!1),h(r,!1);return}h(u,e.isBeginning&&!e.params.rewind),h(r,e.isEnd&&!e.params.rewind)}function z(r){r.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),d("navigationPrev"))}function E(r){r.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),d("navigationNext"))}function S(){const r=e.params.navigation;if(e.params.navigation=J(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(r.nextEl||r.prevEl))return;let u=b(r.nextEl),y=b(r.prevEl);Object.assign(e.navigation,{nextEl:u,prevEl:y}),u=o(u),y=o(y);const t=(i,l)=>{i&&i.addEventListener("click",l==="next"?E:z),!e.enabled&&i&&i.classList.add(...r.lockClass.split(" "))};u.forEach(i=>t(i,"next")),y.forEach(i=>t(i,"prev"))}function M(){let{nextEl:r,prevEl:u}=e.navigation;r=o(r),u=o(u);const y=(t,i)=>{t.removeEventListener("click",i==="next"?E:z),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};r.forEach(t=>y(t,"next")),u.forEach(t=>y(t,"prev"))}f("init",()=>{e.params.navigation.enabled===!1?O():(S(),C())}),f("toEdge fromEdge lock unlock",()=>{C()}),f("destroy",()=>{M()}),f("enable disable",()=>{let{nextEl:r,prevEl:u}=e.navigation;if(r=o(r),u=o(u),e.enabled){C();return}[...r,...u].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),f("click",(r,u)=>{let{nextEl:y,prevEl:t}=e.navigation;y=o(y),t=o(t);const i=u.target;if(e.params.navigation.hideOnClick&&!t.includes(i)&&!y.includes(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===i||e.pagination.el.contains(i)))return;let l;y.length?l=y[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(l=t[0].classList.contains(e.params.navigation.hiddenClass)),d(l===!0?"navigationShow":"navigationHide"),[...y,...t].filter(v=>!!v).forEach(v=>v.classList.toggle(e.params.navigation.hiddenClass))}});const B=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),S(),C()},O=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),M()};Object.assign(e.navigation,{enable:B,disable:O,update:C,init:S,destroy:M})}function R(g){return g===void 0&&(g=""),`.${g.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Pe(g){let{swiper:e,extendParams:$,on:f,emit:d}=g;const o="swiper-pagination";$({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),e.pagination={el:null,bullets:[]};let b,h=0;const C=t=>(Array.isArray(t)?t:[t]).filter(i=>!!i);function z(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function E(t,i){const{bulletActiveClass:l}=e.params.pagination;t&&(t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${l}-${i}`),t=t[`${i==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${l}-${i}-${i}`)))}function S(t){const i=t.target.closest(R(e.params.pagination.bulletClass));if(!i)return;t.preventDefault();const l=Y(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===l)return;const v=e.realIndex,k=e.getSlideIndexByData(l),I=e.getSlideIndexByData(e.realIndex),j=x=>{const D=e.activeIndex;e.loopFix({direction:x,activeSlideIndex:k,slideTo:!1});const w=e.activeIndex;D===w&&e.slideToLoop(v,0,!1,!0)};if(k>e.slides.length-e.loopedSlides)j(k>I?"next":"prev");else if(e.params.centeredSlides){const x=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(e.params.slidesPerView,10));k<Math.floor(x/2)&&j("prev")}e.slideToLoop(l)}else e.slideTo(l)}function M(){const t=e.rtl,i=e.params.pagination;if(z())return;let l=e.pagination.el;l=C(l);let v,k;const I=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,j=e.params.loop?Math.ceil(I/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(k=e.previousRealIndex||0,v=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(v=e.snapIndex,k=e.previousSnapIndex):(k=e.previousIndex||0,v=e.activeIndex||0),i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const x=e.pagination.bullets;let D,w,c;if(i.dynamicBullets&&(b=me(x[0],e.isHorizontal()?"width":"height",!0),l.forEach(p=>{p.style[e.isHorizontal()?"width":"height"]=`${b*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&k!==void 0&&(h+=v-(k||0),h>i.dynamicMainBullets-1?h=i.dynamicMainBullets-1:h<0&&(h=0)),D=Math.max(v-h,0),w=D+(Math.min(x.length,i.dynamicMainBullets)-1),c=(w+D)/2),x.forEach(p=>{const a=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(s=>`${i.bulletActiveClass}${s}`)].map(s=>typeof s=="string"&&s.includes(" ")?s.split(" "):s).flat();p.classList.remove(...a)}),l.length>1)x.forEach(p=>{const a=Y(p);a===v?p.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&p.setAttribute("part","bullet"),i.dynamicBullets&&(a>=D&&a<=w&&p.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),a===D&&E(p,"prev"),a===w&&E(p,"next"))});else{const p=x[v];if(p&&p.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&x.forEach((a,s)=>{a.setAttribute("part",s===v?"bullet-active":"bullet")}),i.dynamicBullets){const a=x[D],s=x[w];for(let n=D;n<=w;n+=1)x[n]&&x[n].classList.add(...`${i.bulletActiveClass}-main`.split(" "));E(a,"prev"),E(s,"next")}}if(i.dynamicBullets){const p=Math.min(x.length,i.dynamicMainBullets+4),a=(b*p-b)/2-c*b,s=t?"right":"left";x.forEach(n=>{n.style[e.isHorizontal()?s:"top"]=`${a}px`})}}l.forEach((x,D)=>{if(i.type==="fraction"&&(x.querySelectorAll(R(i.currentClass)).forEach(w=>{w.textContent=i.formatFractionCurrent(v+1)}),x.querySelectorAll(R(i.totalClass)).forEach(w=>{w.textContent=i.formatFractionTotal(j)})),i.type==="progressbar"){let w;i.progressbarOpposite?w=e.isHorizontal()?"vertical":"horizontal":w=e.isHorizontal()?"horizontal":"vertical";const c=(v+1)/j;let p=1,a=1;w==="horizontal"?p=c:a=c,x.querySelectorAll(R(i.progressbarFillClass)).forEach(s=>{s.style.transform=`translate3d(0,0,0) scaleX(${p}) scaleY(${a})`,s.style.transitionDuration=`${e.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(x.innerHTML=i.renderCustom(e,v+1,j),D===0&&d("paginationRender",x)):(D===0&&d("paginationRender",x),d("paginationUpdate",x)),e.params.watchOverflow&&e.enabled&&x.classList[e.isLocked?"add":"remove"](i.lockClass)})}function B(){const t=e.params.pagination;if(z())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let l=e.pagination.el;l=C(l);let v="";if(t.type==="bullets"){let k=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&k>i&&(k=i);for(let I=0;I<k;I+=1)t.renderBullet?v+=t.renderBullet.call(e,I,t.bulletClass):v+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?v=t.renderFraction.call(e,t.currentClass,t.totalClass):v=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?v=t.renderProgressbar.call(e,t.progressbarFillClass):v=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],l.forEach(k=>{t.type!=="custom"&&(k.innerHTML=v||""),t.type==="bullets"&&e.pagination.bullets.push(...k.querySelectorAll(R(t.bulletClass)))}),t.type!=="custom"&&d("paginationRender",l[0])}function O(){e.params.pagination=J(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let i;typeof t.el=="string"&&e.isElement&&(i=e.el.querySelector(t.el)),!i&&typeof t.el=="string"&&(i=[...document.querySelectorAll(t.el)]),i||(i=t.el),!(!i||i.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(t.el)],i.length>1&&(i=i.filter(l=>be(l,".swiper")[0]===e.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=C(i),i.forEach(l=>{t.type==="bullets"&&t.clickable&&l.classList.add(...(t.clickableClass||"").split(" ")),l.classList.add(t.modifierClass+t.type),l.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(l.classList.add(`${t.modifierClass}${t.type}-dynamic`),h=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&l.classList.add(t.progressbarOppositeClass),t.clickable&&l.addEventListener("click",S),e.enabled||l.classList.add(t.lockClass)}))}function r(){const t=e.params.pagination;if(z())return;let i=e.pagination.el;i&&(i=C(i),i.forEach(l=>{l.classList.remove(t.hiddenClass),l.classList.remove(t.modifierClass+t.type),l.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(l.classList.remove(...(t.clickableClass||"").split(" ")),l.removeEventListener("click",S))})),e.pagination.bullets&&e.pagination.bullets.forEach(l=>l.classList.remove(...t.bulletActiveClass.split(" ")))}f("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:i}=e.pagination;i=C(i),i.forEach(l=>{l.classList.remove(t.horizontalClass,t.verticalClass),l.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),f("init",()=>{e.params.pagination.enabled===!1?y():(O(),B(),M())}),f("activeIndexChange",()=>{typeof e.snapIndex>"u"&&M()}),f("snapIndexChange",()=>{M()}),f("snapGridLengthChange",()=>{B(),M()}),f("destroy",()=>{r()}),f("enable disable",()=>{let{el:t}=e.pagination;t&&(t=C(t),t.forEach(i=>i.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),f("lock unlock",()=>{M()}),f("click",(t,i)=>{const l=i.target,v=C(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&v&&v.length>0&&!l.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&l===e.navigation.nextEl||e.navigation.prevEl&&l===e.navigation.prevEl))return;const k=v[0].classList.contains(e.params.pagination.hiddenClass);d(k===!0?"paginationShow":"paginationHide"),v.forEach(I=>I.classList.toggle(e.params.pagination.hiddenClass))}});const u=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=C(t),t.forEach(i=>i.classList.remove(e.params.pagination.paginationDisabledClass))),O(),B(),M()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=C(t),t.forEach(i=>i.classList.add(e.params.pagination.paginationDisabledClass))),r()};Object.assign(e.pagination,{enable:u,disable:y,render:B,update:M,init:O,destroy:r})}function qe(g){let{swiper:e,extendParams:$,on:f,emit:d}=g;const o=he();let b=!1,h=null,C=null,z,E,S,M;$({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function B(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:c,rtlTranslate:p}=e,{dragEl:a,el:s}=c,n=e.params.scrollbar,A=e.params.loop?e.progressLoop:e.progress;let P=E,L=(S-E)*A;p?(L=-L,L>0?(P=E-L,L=0):-L+E>S&&(P=S+L)):L<0?(P=E+L,L=0):L+E>S&&(P=S-L),e.isHorizontal()?(a.style.transform=`translate3d(${L}px, 0, 0)`,a.style.width=`${P}px`):(a.style.transform=`translate3d(0px, ${L}px, 0)`,a.style.height=`${P}px`),n.hide&&(clearTimeout(h),s.style.opacity=1,h=setTimeout(()=>{s.style.opacity=0,s.style.transitionDuration="400ms"},1e3))}function O(c){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${c}ms`)}function r(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:c}=e,{dragEl:p,el:a}=c;p.style.width="",p.style.height="",S=e.isHorizontal()?a.offsetWidth:a.offsetHeight,M=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?E=S*M:E=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?p.style.width=`${E}px`:p.style.height=`${E}px`,M>=1?a.style.display="none":a.style.display="",e.params.scrollbar.hide&&(a.style.opacity=0),e.params.watchOverflow&&e.enabled&&c.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function u(c){return e.isHorizontal()?c.clientX:c.clientY}function y(c){const{scrollbar:p,rtlTranslate:a}=e,{el:s}=p;let n;n=(u(c)-xe(s)[e.isHorizontal()?"left":"top"]-(z!==null?z:E/2))/(S-E),n=Math.max(Math.min(n,1),0),a&&(n=1-n);const A=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*n;e.updateProgress(A),e.setTranslate(A),e.updateActiveIndex(),e.updateSlidesClasses()}function t(c){const p=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:n,dragEl:A}=a;b=!0,z=c.target===A?u(c)-c.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,c.preventDefault(),c.stopPropagation(),s.style.transitionDuration="100ms",A.style.transitionDuration="100ms",y(c),clearTimeout(C),n.style.transitionDuration="0ms",p.hide&&(n.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),d("scrollbarDragStart",c)}function i(c){const{scrollbar:p,wrapperEl:a}=e,{el:s,dragEl:n}=p;b&&(c.preventDefault?c.preventDefault():c.returnValue=!1,y(c),a.style.transitionDuration="0ms",s.style.transitionDuration="0ms",n.style.transitionDuration="0ms",d("scrollbarDragMove",c))}function l(c){const p=e.params.scrollbar,{scrollbar:a,wrapperEl:s}=e,{el:n}=a;b&&(b=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",s.style.transitionDuration=""),p.hide&&(clearTimeout(C),C=ve(()=>{n.style.opacity=0,n.style.transitionDuration="400ms"},1e3)),d("scrollbarDragEnd",c),p.snapOnRelease&&e.slideToClosest())}function v(c){const{scrollbar:p,params:a}=e,s=p.el;if(!s)return;const n=s,A=a.passiveListeners?{passive:!1,capture:!1}:!1,P=a.passiveListeners?{passive:!0,capture:!1}:!1;if(!n)return;const L=c==="on"?"addEventListener":"removeEventListener";n[L]("pointerdown",t,A),o[L]("pointermove",i,A),o[L]("pointerup",l,P)}function k(){!e.params.scrollbar.el||!e.scrollbar.el||v("on")}function I(){!e.params.scrollbar.el||!e.scrollbar.el||v("off")}function j(){const{scrollbar:c,el:p}=e;e.params.scrollbar=J(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let s;typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"?s=o.querySelectorAll(a.el):s||(s=a.el),e.params.uniqueNavElements&&typeof a.el=="string"&&s.length>1&&p.querySelectorAll(a.el).length===1&&(s=p.querySelector(a.el)),s.length>0&&(s=s[0]),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass);let n;s&&(n=s.querySelector(`.${e.params.scrollbar.dragClass}`),n||(n=K("div",e.params.scrollbar.dragClass),s.append(n))),Object.assign(c,{el:s,dragEl:n}),a.draggable&&k(),s&&s.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}function x(){const c=e.params.scrollbar,p=e.scrollbar.el;p&&p.classList.remove(e.isHorizontal()?c.horizontalClass:c.verticalClass),I()}f("init",()=>{e.params.scrollbar.enabled===!1?w():(j(),r(),B())}),f("update resize observerUpdate lock unlock",()=>{r()}),f("setTranslate",()=>{B()}),f("setTransition",(c,p)=>{O(p)}),f("enable disable",()=>{const{el:c}=e.scrollbar;c&&c.classList[e.enabled?"remove":"add"](e.params.scrollbar.lockClass)}),f("destroy",()=>{x()});const D=()=>{e.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.remove(e.params.scrollbar.scrollbarDisabledClass),j(),r(),B()},w=()=>{e.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.el&&e.scrollbar.el.classList.add(e.params.scrollbar.scrollbarDisabledClass),x()};Object.assign(e.scrollbar,{enable:D,disable:w,updateSize:r,setTranslate:B,init:j,destroy:x})}function Oe(g){let{swiper:e,extendParams:$,on:f}=g;$({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let d=null;function o(a){const s=d;s.length!==0&&(s.innerHTML="",s.innerHTML=a)}const b=a=>(Array.isArray(a)?a:[a]).filter(s=>!!s);function h(a){a===void 0&&(a=16);const s=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(a).replace(/x/g,s)}function C(a){a=b(a),a.forEach(s=>{s.setAttribute("tabIndex","0")})}function z(a){a=b(a),a.forEach(s=>{s.setAttribute("tabIndex","-1")})}function E(a,s){a=b(a),a.forEach(n=>{n.setAttribute("role",s)})}function S(a,s){a=b(a),a.forEach(n=>{n.setAttribute("aria-roledescription",s)})}function M(a,s){a=b(a),a.forEach(n=>{n.setAttribute("aria-controls",s)})}function B(a,s){a=b(a),a.forEach(n=>{n.setAttribute("aria-label",s)})}function O(a,s){a=b(a),a.forEach(n=>{n.setAttribute("id",s)})}function r(a,s){a=b(a),a.forEach(n=>{n.setAttribute("aria-live",s)})}function u(a){a=b(a),a.forEach(s=>{s.setAttribute("aria-disabled",!0)})}function y(a){a=b(a),a.forEach(s=>{s.setAttribute("aria-disabled",!1)})}function t(a){if(a.keyCode!==13&&a.keyCode!==32)return;const s=e.params.a11y,n=a.target;e.pagination&&e.pagination.el&&(n===e.pagination.el||e.pagination.el.contains(a.target))&&!a.target.matches(R(e.params.pagination.bulletClass))||(e.navigation&&e.navigation.nextEl&&n===e.navigation.nextEl&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?o(s.lastSlideMessage):o(s.nextSlideMessage)),e.navigation&&e.navigation.prevEl&&n===e.navigation.prevEl&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?o(s.firstSlideMessage):o(s.prevSlideMessage)),e.pagination&&n.matches(R(e.params.pagination.bulletClass))&&n.click())}function i(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{nextEl:a,prevEl:s}=e.navigation;s&&(e.isBeginning?(u(s),z(s)):(y(s),C(s))),a&&(e.isEnd?(u(a),z(a)):(y(a),C(a)))}function l(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function v(){return l()&&e.params.pagination.clickable}function k(){const a=e.params.a11y;l()&&e.pagination.bullets.forEach(s=>{e.params.pagination.clickable&&(C(s),e.params.pagination.renderBullet||(E(s,"button"),B(s,a.paginationBulletMessage.replace(/\{\{index\}\}/,Y(s)+1)))),s.matches(R(e.params.pagination.bulletActiveClass))?s.setAttribute("aria-current","true"):s.removeAttribute("aria-current")})}const I=(a,s,n)=>{C(a),a.tagName!=="BUTTON"&&(E(a,"button"),a.addEventListener("keydown",t)),B(a,n),M(a,s)},j=()=>{e.a11y.clicked=!0},x=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},D=a=>{if(e.a11y.clicked)return;const s=a.target.closest(`.${e.params.slideClass}, swiper-slide`);if(!s||!e.slides.includes(s))return;const n=e.slides.indexOf(s)===e.activeIndex,A=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(s);n||A||a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,e.slideTo(e.slides.indexOf(s),0))},w=()=>{const a=e.params.a11y;a.itemRoleDescriptionMessage&&S(e.slides,a.itemRoleDescriptionMessage),a.slideRole&&E(e.slides,a.slideRole);const s=e.slides.length;a.slideLabelMessage&&e.slides.forEach((n,A)=>{const P=e.params.loop?parseInt(n.getAttribute("data-swiper-slide-index"),10):A,L=a.slideLabelMessage.replace(/\{\{index\}\}/,P+1).replace(/\{\{slidesLength\}\}/,s);B(n,L)})},c=()=>{const a=e.params.a11y;e.el.append(d);const s=e.el;a.containerRoleDescriptionMessage&&S(s,a.containerRoleDescriptionMessage),a.containerMessage&&B(s,a.containerMessage);const n=e.wrapperEl,A=a.id||n.getAttribute("id")||`swiper-wrapper-${h(16)}`,P=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";O(n,A),r(n,P),w();let{nextEl:L,prevEl:W}=e.navigation?e.navigation:{};L=b(L),W=b(W),L&&L.forEach(U=>I(U,A,a.nextSlideMessage)),W&&W.forEach(U=>I(U,A,a.prevSlideMessage)),v()&&(Array.isArray(e.pagination.el)?e.pagination.el:[e.pagination.el]).forEach(le=>{le.addEventListener("keydown",t)}),e.el.addEventListener("focus",D,!0),e.el.addEventListener("pointerdown",j,!0),e.el.addEventListener("pointerup",x,!0)};function p(){d&&d.remove();let{nextEl:a,prevEl:s}=e.navigation?e.navigation:{};a=b(a),s=b(s),a&&a.forEach(n=>n.removeEventListener("keydown",t)),s&&s.forEach(n=>n.removeEventListener("keydown",t)),v()&&(Array.isArray(e.pagination.el)?e.pagination.el:[e.pagination.el]).forEach(A=>{A.removeEventListener("keydown",t)}),e.el.removeEventListener("focus",D,!0),e.el.removeEventListener("pointerdown",j,!0),e.el.removeEventListener("pointerup",x,!0)}f("beforeInit",()=>{d=K("span",e.params.a11y.notificationClass),d.setAttribute("aria-live","assertive"),d.setAttribute("aria-atomic","true")}),f("afterInit",()=>{e.params.a11y.enabled&&c()}),f("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{e.params.a11y.enabled&&w()}),f("fromEdge toEdge afterInit lock unlock",()=>{e.params.a11y.enabled&&i()}),f("paginationUpdate",()=>{e.params.a11y.enabled&&k()}),f("destroy",()=>{e.params.a11y.enabled&&p()})}const ie=()=>{const g=Q(),e=(h,C)=>{g(oe(h)),g(ce(C))};let $=N(se);const d=N(Te).filter(h=>h.filter===$),o=Ee.useMediaQuery({minWidth:768,maxWidth:1439}),b=[];if(o)for(let h=0;h<d.length;h+=9)b.push(d.slice(h,h+9));else for(let h=0;h<d.length;h+=10)b.push(d.slice(h,h+10));return m.jsx(ye,{modules:[je,Pe,qe,Oe],spaceBetween:50,slidesPerView:1,pagination:{clickable:!0},className:"pagination",children:b.map(h=>m.jsx(Ce,{children:m.jsx(ze,{children:h.map(({filter:C,name:z,imgURL:E,_id:S})=>m.jsx(te,{handleGetExercises:e,imgURL:E,name:ge(z),filter:C},S))})},re()))})};ie.propTypes={bodyParts:H.arrayOf(H.shape({name:H.string.isRequired}))};const Fe=g=>g.exercises.items,ne=g=>g.exercises.getFilters,Re=G.ul`
  display: flex;
  gap: 28px;

  margin-top: 20px;

  ${T.tablet} {
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

  ${T.tablet} {
    font-size: 16px;

    line-height: 1.5;
  }
`,He=()=>{let g=N(se);const[e,$]=V.useState(g),f=N(ne),d=Q();V.useEffect(()=>{d(pe())},[d,f]);const o=b=>{const h=b.target.childNodes[0].textContent;d(ae(!0)),$(h),d(de(h))};return m.jsx(m.Fragment,{children:m.jsxs(Re,{children:[m.jsx(_,{children:m.jsx(X,{type:"button",onClick:o,className:e==="Body parts"?"active":"",children:"Body parts"})}),m.jsx(_,{children:m.jsx(X,{type:"button",onClick:o,className:e==="Muscles"?"active":"",children:"Muscles"})}),m.jsx(_,{children:m.jsx(X,{type:"button",onClick:o,className:e==="Equipment"?"active":"",children:"Equipment"})})]})})},Ne="/september-project/assets/exercises_desk_2x-598143e6.jpeg",ee=q.div`
  padding-left: 20px;
  padding-right: 20px;

  ${T.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }

  ${T.desktop} {
    padding-left: 95px;
    padding-right: 95px;
  }
`,Ge=q.div`
  ${T.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`,We=q.div`
  padding: 40px 20px 80px 20px;
  position: relative;


  ${T.tablet} {
    padding: 72px 32px 48px 32px;
  }

  ${T.desktop} {
    padding: 68px 81px 81px 96px;
  }
`,Ue=q.div`
  ${T.desktop} {
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
    background-image: url(${Ne});
  }
`,Ve=G.button`
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

  ${T.tablet} {
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
`,_e=G.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${F.textWhite04};
  scale: 1;

  transition:
    scale 250ms ease-in-out,
    fill 250ms ease-in-out;
`,Xe=()=>{const g=Q(),e=()=>{g(ae(!0))};return m.jsxs(Ve,{type:"button",onClick:e,children:[m.jsx(_e,{children:m.jsx("use",{href:fe+"#icon-arrow-left"})}),"Back"]})},sa=()=>{let g=N(ne),e=N(Fe),$=N(Ie);return m.jsxs(m.Fragment,{children:[m.jsxs(ee,{children:[g?null:m.jsx(Xe,{}),m.jsxs(Ge,{children:[g?m.jsx(Z,{text:"Exercises",margin:{top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}}}):m.jsx(Z,{text:$,margin:{top:{desk:16,tab:16,mob:12},bt:{tab:32,mob:40}}}),m.jsx(He,{})]})]}),g?m.jsx(ee,{children:m.jsx(ie,{})}):m.jsxs(We,{children:[m.jsx(Ue,{}),m.jsx(Le,{width:{dt:"868"},children:m.jsx(ke,{children:e.map((f,d)=>d<20?m.jsx(we,{page:"exercise",data:f},f._id):null)})})]})]})};export{sa as default};
