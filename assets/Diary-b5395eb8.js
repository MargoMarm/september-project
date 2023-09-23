import{n as y,m as x,b as oe,x as pt,y as ft,j as o,c as j,N as ht,r as s,Z as K,P as S,s as te,u as Ue,z as xt,A as mt,B as yt}from"./index-a1a82419.js";import{D as se,a as gt,m as bt}from"./descriptionTextMargin-5441ba25.js";import{T as vt}from"./Title-a6d3b891.js";import{c as V}from"./capitalizeWord-85339af4.js";import{c as M,j as v,C as jt}from"./Calendar-30b436b0.js";const Ct=y.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${x.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${x.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,wt=e=>e.diary.products,kt=e=>e.diary.exercises,Ot=e=>e.diary.burnedCalories,$t=e=>e.diary.consumedCalories,Dt=e=>e.diary.doneExercisesTime,Et=()=>{const e=oe(pt),n=oe(ft),t=oe(Ot),r=oe($t),i=oe(Dt);function a(p){const d=Math.floor(p/60),m=p%60;return{minutes:d,seconds:m}}const l=a(i);let u=e-l.minutes,f=n-r;return o.jsxs(Ct,{children:[o.jsx(se,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:n}),o.jsx(se,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:e+" min"}),o.jsx(se,{icon:"apple",label:"Сalories consumed",keyValue:r}),o.jsx(se,{icon:"fire",label:"Сalories burned",keyValue:t}),o.jsx(se,{icon:"bubble",label:"The rest of the calories",keyValue:f,border:f<0?"red":"default"}),o.jsx(se,{icon:"runningMan",label:"The rest of sports",keyValue:u+" min",border:u>e?"green":"default"})]})},St=y.div`
  overflow: auto;

  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 335px;
  padding: 15px;
  align-items: flex-start;
  margin-bottom: ${e=>e.marginBottom}px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${j.textWhite02};
  background: rgba(239, 237, 232, 0.05);

  ${x.tablet} {
    width: auto;
    height: 234px;
  }

  ${x.desktop} {
    width: auto;
  }
`,Pt=y.div`
  display: flex;
  justify-content: space-between;
`,Nt=y.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${j.textWhite05};
`,Rt=y(ht)`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 1.5;

  color: ${j.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${j.orangeSecondary};

    svg {
      stroke: ${j.orangeSecondary};
    }
  }
`,Bt=y.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${j.textWhite05};
`,Ft=y.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${j.orange};

  transition: stroke 250ms ease-in-out;
`,ke=y.div`
  display: none;
  
  ${x.tablet} {
    display: block;
  }`,fe=y.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,he=y.svg`
  width: 20px;
  height: 20px;
`,Oe=y.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${x.desktop} {
    margin-left: 16px;
  }
`,ue=y.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${j.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 188px;

    ${x.desktop} {
      margin-right: 196px;
    }
  }

  :nth-of-type(2) {
    margin-right: 87px;

    ${x.desktop} {
      margin-right: 125px;
    }
  }

  :nth-of-type(3) {
    margin-right: 54px;

    ${x.desktop} {
      margin-right: 69px;
    }
  }

  :nth-of-type(4) {
    margin-right: 60px;

    ${x.desktop} {
      margin-right: 75px;
    }
  }

  :nth-of-type(5) {
    margin-right: 12px;
  }
`,ne=y.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${j.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 45px;

    ${x.desktop} {
      margin-right: 70px;
    }
  }

  :nth-of-type(2) {
    margin-right: 82px;

    ${x.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(3) {
    margin-right: 104px;

    ${x.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(4) {
    margin-right: 58px;

    ${x.desktop} {
      margin-right: 80px;
    }
  }

  :nth-of-type(5)::before {
    content: 'Burned calor...';
    margin-right: 14px;

    ${x.desktop} {
      content: 'Burned Calories';
      margin-right: 15px;
    }
  }
`,Lt=y.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-right: 8px;
  background: ${e=>e.bgColor};
`,zt={Table:`
    --data-table-library_grid-template-columns:  98px 140px 136px 92px 86px 84px 28px;
    height: 136px;

    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${j.textWhite01};
      border-radius: 12px;
    };

    ${x.desktop} {
      --data-table-library_grid-template-columns:  123px 165px 139px 114px 99px 102px 28px;
      margin-left: 16px;
    }

    @media (max-width: 767) {
      --data-table-library_grid-template-columns:  0 0 0 0 0 0 0;
    }
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${j.textWhite03};

    :nth-of-type(6) {
      margin-right: 12px;
    }

    :nth-of-type(7) {
      margin-right: 0;
      border: none;
      padding: 0
    }  
  `},Ke={Table:`
    --data-table-library_grid-template-columns:  212px 136px 98px 98px 92px 28px;
    height: 136px; 
    
    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${j.textWhite01};
      border-radius: 12px;
    };

    ${x.desktop} {
      --data-table-library_grid-template-columns:  220px 174px 113px 113px 122px 28px;
      margin-left: 16px;
    }
    `,Body:"",Header:"display: none;",BaseRow:"",Row:`
    font-size: 16px;
    background-color: inherit;
    color: ${j.white};
  `,HeaderRow:`
    background-color: inherit;`,BaseCell:"",HeaderCell:`
    color: ${j.orangeSecondary};
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.5;
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${j.textWhite03};

    :nth-of-type(5) {
      margin-right: 12px;
    }

    :nth-of-type(6) {
      margin-right: 0;
      border: none;
      padding: 0
    }  

    >div {
      display: flex;
      align-items: center;}
  `};function me(){return Ie=me=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},me.apply(this,arguments)}var Ie=me,q=Ie,Tt=function(e,n){if(e==null)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i},ie=function(e,n){if(e==null)return{};var t,r,i=Tt(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i},ae=s.createContext(null),le=function(e){var n=e.current.querySelector(".tr-header");return Array.from((n==null?void 0:n.querySelectorAll(".th"))||[])},et=function(e,n,t,r){return Array.from(e.current.querySelectorAll(t)).forEach(function(i){var a=Array.from(i.querySelectorAll(r)),c=a.length;a.forEach(function(l,u){return n(l,u,c)})})},At=function(e,n){return et(e,n,".tr-header",".th")},_t=function(e,n){return et(e,n,".tr-body",".td")},ce=function(e,n){return{index:n,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},G=s.createContext(null),Wt=function(e){var n=e.tableElementRef,t=e.tableMemoryRef,r=e.layout,i=e.children,a=s.useMemo(function(){return{layout:r,tableElementRef:n,tableMemoryRef:t}},[r,n,t]);return v(G.Provider,{value:a},i)},tt=function(e,n){var t=le(e).map(ce);n.current.dataColumns=t},xe=function(e,n,t){var r=n.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;n.current&&e&&r&&(n.current.style.setProperty("--data-table-library_grid-template-columns",e),tt(n,t))},rt=function(e,n){n!=null&&n.onLayoutChange&&e&&n.onLayoutChange(e)},nt=`
  `.concat(function(){},`
  padding: 0;
  margin: 0;

  `).concat(function(){},`
  display: flex;
  align-items: center;

  `).concat(function(){},`
  align-self: stretch;


  & > div {
    `).concat(function(){},`
    flex: 1;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &.hide {
    display: none;
  }

  &.pin-left,
  &.pin-right {
    position: sticky;
    z-index: 2;
  }

  `).concat(function(){},`
  background-color: inherit;
`),Ht=M(nt,";",""),$e=s.forwardRef(function(e,n){var t=s.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,i=r!=null&&r.isDiv?"div":"td";return v(i,q({css:Ht,ref:n},e))}),Vt=M(nt," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),De=s.forwardRef(function(e,n){var t=s.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,i=r!=null&&r.isDiv?"div":"th";return v(i,q({css:Vt,ref:n},e))}),Mt={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Ee=function(e){var n=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,t=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:Mt,area:M("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",n,"px;height:100%;&:hover,&.active{background-color:",t,";}","")}},ot=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},Se=ot,it=function(e,n){if(e){if(typeof e=="string")return Se(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Se(e,n):void 0}},qt=function(e){if(Array.isArray(e))return e},Xt=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(u){i=!0,a=u}finally{try{r||l.return==null||l.return()}finally{if(i)throw a}}return t}},Gt=it,Yt=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},ye=function(e,n){return qt(e)||Xt(e,n)||Gt(e,n)||Yt()},de=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},Zt=ot,Jt=function(e){if(Array.isArray(e))return Zt(e)},Qt=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},Ut=it,Kt=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},ge=function(e){return Jt(e)||Qt(e)||Ut(e)||Kt()},be=null,It=function(){return be||(be=s.createContext(null))},er=function(){return s.useContext(be)};function Pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ne(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Pe(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var tr=function(e,n){var t=s.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.tableElementRef,i=t.tableMemoryRef,a=t.layout,c=s.useRef(null),l=s.useRef(null),u=s.useRef(""),f=s.useRef(null),p=s.useRef(!1),d=s.useCallback(function(g){var w;g.preventDefault(),u.current=r.current.style.getPropertyValue("--data-table-library_grid-template-columns"),p.current=!0,f.current=c.current.offsetWidth-g.pageX,(w=c.current)===null||w===void 0||w.querySelector(".resizer-area").classList.add("active")},[r]),m=s.useCallback(function(g){if(p.current){g.preventDefault();var w=f.current+g.pageX,C=function($,b,D,N){var R=le(D).map(ce).filter(function(h){return!h.isHide}),F=R.findIndex(function(h){return h.index===$}),P=(R=R.map(function(h,k){return Ne(Ne({},h),{},{index:k})})).reduce(function(h,k,B){return h||(B>F&&k.width!==0?k:h)},null),Y=R.reduce(function(h,k){return h+k.width},0),W=R[F].minWidth,Z=N>W&&N!==0?N:W,X=Z-R[F].width,E=R.map(function(h,k){if(P&&F===k)return P.width-X>W?Z:h.width;if((P==null?void 0:P.index)===k){var B=h.width-X;return B>W?B:h.width}return h.width}),I=Y-E.reduce(function(h,k){return h+k},0);E[F]=E[F]+I;var J=!1,ee=R.slice(0).reverse().map(function(h,k){var B=E.slice(0).reverse()[k],Q=B/Y*100;return h.isStiff||b!=null&&b.horizontalScroll?"".concat(B,"px"):J?"minmax(0, ".concat(Q,"%)"):(J=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),L=function(h,k){if(ge(Array.from(h.classList)).includes("pin-left")){var B=E.reduce(function(U,H,re){return re>=k?U:U+H},0);h.style.left="".concat(B,"px")}if(ge(Array.from(h.classList)).includes("pin-right")){var Q=E.reduceRight(function(U,H,re){return re<=k?U:U+H},0);h.style.right="".concat(Q,"px")}};return At(D,L),_t(D,L),ee}(e,a,r,w);xe(C,r,i)}},[e,a,r,i]),O=s.useCallback(function(){var g;p.current=!1;var w=r.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(u.current!==w){rt(w,a);var C=le(r).map(ce);i.current.dataColumns=C}(g=c.current)===null||g===void 0||g.querySelector(".resizer-area").classList.remove("active")},[a,r,i]);return s.useEffect(function(){var g=l.current;return g&&(g.addEventListener("mousedown",d),document.addEventListener("mousemove",m),document.addEventListener("mouseup",O)),function(){g&&(g.removeEventListener("mousedown",d),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",O))}},[n,d,m,O]),{cellRef:c,resizeRef:l}},rr=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Be(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Re(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Re(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Fe=function(e,n){return n.find(function(t){return t.index===e})},z=function(e){var n=e.index,t=e.className,r=e.hide,i=e.pinLeft,a=e.pinRight,c=e.stiff,l=e.isFooter,u=e.includePreviousColSpan,f=e.previousColSpans,p=e.gridColumnStart,d=e.gridColumnEnd,m=e.resize,O=e.role,g=O===void 0?"columnheader":O,w=e.children,C=e.style,$=ie(e,rr),b=s.useContext(ae);(function(Z,X){var E=s.useContext(G);if(!E)throw new Error("No Layout Context.");var I=E.layout,J=E.tableElementRef,ee=E.tableMemoryRef;s.useLayoutEffect(function(){var L=ee.current.dataColumns,h=le(J).map(ce),k=Fe(Z,L),B=(k==null?void 0:k.isHide)===!!X;if(L!=null&&L.length&&!B){var Q=h.filter(function(H){return!H.isHide}).map(function(H){if(H.isStiff||I!=null&&I.horizontalScroll){var re=Fe(H.index,L);return re?"".concat(re.width||2*re.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");xe(Q,J,ee),rt(Q,I);var U=le(J).map(ce);ee.current.dataColumns=U}},[Z,X,I,J,ee])})(n,r);var D=tr(n,r),N=D.cellRef,R=D.resizeRef,F=p&&d,P=F?d-p-1:0,Y=u?p+f:p,W=u?d+f:d;return v(s.Fragment,null,v(De,q({role:g,"data-table-library_th":"","data-hide":!!r,"data-resize-min-width":typeof m=="boolean"||(m==null?void 0:m.minWidth)==null?75:m.minWidth,style:Be(Be({},F?{gridColumnStart:Y,gridColumnEnd:W}:{}),C),css:M(b==null?void 0:b.BaseCell," ",l?b==null?void 0:b.FooterCell:b==null?void 0:b.HeaderCell,";",""),className:K("th",t,{stiff:c,hide:r,resize:m,"pin-left":i,"pin-right":a}),ref:N},$),v("div",null,w),m&&!r&&v("div",{className:"resizer-area",ref:R,css:Ee(m).area},v("span",{className:"resizer-handle",css:Ee(m).handle}))),Array.from({length:P},function(){return v(De,{className:K("th","hide","colspan")})}))},ve=null,nr=function(){return ve||(ve=s.createContext(null))},or=function(){return s.useContext(ve)},ir=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},ar=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function Le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function ze(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Le(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Le(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var T=function(e){e.index;var n=e.className,t=e.hide,r=e.pinLeft,i=e.pinRight,a=e.stiff,c=e.includePreviousColSpan,l=e.previousColSpans,u=e.gridColumnStart,f=e.gridColumnEnd,p=e.onClick,d=e.children,m=e.style,O=ie(e,ar),g=s.useContext(ae),w=u&&f,C=w?f-u-1:0,$=c?u+l:u,b=c?f+l:f;return v(s.Fragment,null,v($e,q({role:"gridcell","data-table-library_td":"",style:ze(ze({},w?{gridColumnStart:$,gridColumnEnd:b}:{}),m),css:M(g==null?void 0:g.BaseCell," ",g==null?void 0:g.Cell,";",""),className:K("td",n,{stiff:a,hide:t,"pin-left":r,"pin-right":i}),onClick:p},O),v("div",null,d)),Array.from({length:C},function(){return v($e,{className:K("td","hide","colspan")})}))},je=null,sr=function(){return je||(je=s.createContext(null))},lr=function(){return s.useContext(je)},Ce=null,cr=function(){return Ce||(Ce=s.createContext(null))},ur=function(){var e=s.useState(!1),n=ye(e,2),t=n[0],r=n[1];return s.useEffect(function(){var i=function(c){c.shiftKey?r(!0):t&&r(!1)},a=function(){t&&r(!1)};return document&&(document.addEventListener("keydown",i),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",i),document.removeEventListener("keyup",a))}},[t]),t},dr=function(){return{select:lr(),tree:or(),sort:er(),pagination:s.useContext(Ce)}},pr=function(e){var n=e.sort,t=e.pagination,r=e.tree;return function(i){var a=ge(i);return a=n?n.modifier(a):a,a=t?t.modifier(a):a,a=r?r.modifier(a):a}},fr=function(e){return e.reduce(function(n,t){return Object.keys(t).forEach(function(r){n[r]||(n[r]=""),n[r]=`
        `.concat(n[r],`
        `).concat(t[r],`
      `)}),n},{})},hr=function(e){return Array.isArray(e)?fr(e):e},xr=["children"],Te=function(e){var n=e.children,t=ie(e,xr),r=s.useContext(ae),i=s.useContext(G);if(!i)throw new Error("No Layout Context.");var a=i.layout,c=a!=null&&a.isDiv?"div":"tbody";return v(c,q({css:M(r==null?void 0:r.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},t),n)},mr=["isFooter","children"],Ae=function(e){var n=e.isFooter,t=e.children,r=ie(e,mr),i=s.useContext(ae),a=s.useContext(G);if(!a)throw new Error("No Layout Context.");var c=a.layout,l=c!=null&&c.isDiv?"div":n?"tfoot":"thead";return v(l,q({role:"rowgroup",className:K({tfoot:n,thead:!n}),css:M(`
  display: contents;
`," ",n?i==null?void 0:i.Footer:i==null?void 0:i.Header,";","")},r),s.Children.map(t,function(u){if(s.isValidElement(u))return s.cloneElement(u)}))},_e=null,yr=function(){return _e||(_e=s.createContext(null))},gr=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],br={Table:`
    height: 100%;
  `},We=s.forwardRef(function(e,n){var t=e.data,r=e.theme,i=e.layout,a=e.sort,c=e.pagination,l=e.select,u=e.tree,f=e.onInit,p=f===void 0?function(){}:f,d=e.className,m=d===void 0?"table":d,O=e.children,g=ie(e,gr),w=function(L){var h=s.useRef(null);return L&&(h=L),h}(n),C=function(L){var h=s.useRef(null);return h.current||(h.current={onlyOnce:!1,dataColumns:[]}),h}(),$=pr({sort:a,pagination:c,tree:u,select:l})(t.nodes),b=function(L,h){var k=s.useState(!1),B=ye(k,2),Q=B[0],U=B[1];return[Q,function(H){H&&(Q||(U(!0),h.current=H,L(H)))}]}(p,w),D=ye(b,2),N=D[0],R=D[1],F=ur(),P=[];i!=null&&i.fixedHeader&&(P=P.concat(br)),r&&(P=P.concat(r));var Y,W=hr(P),Z=i!=null&&i.isDiv?"div":"table",X=yr(),E=It(),I=sr(),J=nr(),ee=cr();return v(Z,q({role:"grid","data-table-library_table":"",css:M((Y={isShiftDown:F},`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  overflow: auto;
  position: relative;

  border-collapse: collapse;

  display: grid;

  --data-table-library_grid-template-columns: '';
  grid-template-columns: var(--data-table-library_grid-template-columns);

  button * {
    pointer-events: none;
  }

  `.concat(Y.isShiftDown?`
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    `:"",`
  `))," ",W==null?void 0:W.Table,";",""),className:K(m),ref:R},g),N&&v(X.Provider,{value:t},v(ae.Provider,{value:W},v(E.Provider,{value:a},v(I.Provider,{value:l},v(J.Provider,{value:u},v(ee.Provider,{value:c},v(Wt,{layout:i,tableElementRef:w,tableMemoryRef:C},O&&O($)))))))))}),at=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},vr=s.forwardRef(function(e,n){var t=s.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,i=r!=null&&r.isDiv?"div":"tr";return v(i,q({css:M(at(),";",""),ref:n},e))}),jr=s.forwardRef(function(e,n){var t=s.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,i=r!=null&&r.isDiv?"div":"tr";return v(i,q({css:M(at(),";",""),ref:n},e))}),st=function(e){return e.type?e.type===s.Fragment:e===s.Fragment},lt=function(e,n){return s.Children.toArray(e).reduce(function(t,r,i){return s.isValidElement(r)?i>=n?t:r.props.gridColumnStart||r.props.gridColumnEnd?t+r.props.gridColumnEnd-r.props.gridColumnStart-1:t:t},0)},Cr=["className","role","isFooter","children"];function He(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function Ve(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?He(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):He(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Me=function(e){var n,t=e.className,r=e.role,i=r===void 0?"rowheader":r,a=e.isFooter,c=e.children,l=ie(e,Cr),u=s.useContext(ae),f=s.useRef(null);return n=s.useContext(G),s.useLayoutEffect(function(){var p;if(!n)throw new Error("No Layout Context.");var d=n.layout,m=n.tableElementRef,O=n.tableMemoryRef,g=le(m).map(ce);if((p=O.current)===null||p===void 0||!p.onlyOnce)if(O.current.onlyOnce=!0,d!=null&&d.resizedLayout){var w=d==null?void 0:d.resizedLayout;xe(w,m,O)}else if(d!=null&&d.custom)tt(m,O);else{var C=g.filter(function($){return!$.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");xe(C,m,O)}},[n]),v(jr,q({role:i,"data-table-library_tr-header":"",css:M(u==null?void 0:u.BaseRow," ",a?u==null?void 0:u.FooterRow:u==null?void 0:u.HeaderRow,";",""),className:K("tr",t,{"tr-footer":a,"tr-header":!a}),ref:f},l),s.Children.toArray(c).filter(Boolean).map(function(p,d){if(s.isValidElement(p)){var m={};return st(p)||(m=Ve(Ve({},m),{},{index:d,previousColSpans:lt(c,d)})),s.cloneElement(p,m)}}))},wr=function(){},kr=function(e,n,t,r){(function(i){var a=i.onSingleClick,c=i.onDoubleClick,l=i.ref,u=s.useRef(0);s.useEffect(function(){var f=l.current,p=function(d){c&&(u.current===0&&a(d),u.current+=1,setTimeout(function(){u.current===2&&c(d),u.current=0},300))};return f==null||f.addEventListener("click",p),function(){f==null||f.removeEventListener("click",p)}})})({onSingleClick:n?function(i){return n(r,i)}:wr,onDoubleClick:t?function(i){return t(r,i)}:null,ref:e})},Or=["item","className","disabled","onClick","onDoubleClick","children"];function qe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,r)}return t}function pe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?qe(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Xe=function(e){var n=e.item,t=e.className,r=e.disabled,i=e.onClick,a=e.onDoubleClick,c=e.children,l=ie(e,Or),u=function(C,$){return Object.values(C).filter(Boolean).filter(function(b){return b==null?void 0:b.hasOwnProperty("_getRowProps")}).map(function(b){return b._getRowProps($,C)})}(dr(),e),f=s.useContext(ae),p=function(C,$){var b=C.reduce(function(D,N){var R=N.theme,F=N.className,P=N.onClick,Y=`
        `.concat(D.themeByFeature,`
        `).concat(R,`
      `),W=K(D.classNamesByFeature,F),Z=D.clickable||!!P;return pe(pe({},D),{},{themeByFeature:Y,classNamesByFeature:W,clickable:Z,onClickByFeature:function(X,E){P(X,E),D.onClickByFeature(X,E)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!$,onClickByFeature:function(D,N){$&&ir(N)&&$(D,N)}});return{themeByFeature:b.themeByFeature,classNamesByFeature:b.classNamesByFeature,clickable:b.clickable,onClickByFeature:b.onClickByFeature}}(u,i),d=p.themeByFeature,m=p.classNamesByFeature,O=p.clickable,g=p.onClickByFeature,w=s.useRef(null);return kr(w,g,a,n),v(vr,q({role:"row","data-table-library_tr-body":"",onClick:r||a?function(){}:function(C){return g(n,C)},css:M(d," ",f==null?void 0:f.BaseRow," ",f==null?void 0:f.Row,";",""),className:K("tr","tr-body",m,t,{disabled:r,clickable:O||!!a}),ref:w},l),s.Children.toArray(c).filter(Boolean).map(function(C,$){if(s.isValidElement(C)){var b={};return st(C)||(b=pe(pe({},b),{},{index:$,previousColSpans:lt(c,$)})),s.cloneElement(C,b)}}))};const $r={...Ke,...zt},ct=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:i})=>{const a={nodes:e};return o.jsxs(o.Fragment,{children:[n&&o.jsxs(ke,{children:[o.jsxs(Oe,{children:[o.jsx(ue,{children:"Title"}),o.jsx(ue,{children:"Category"}),o.jsx(ue,{children:"Calories"}),o.jsx(ue,{children:"Weight"}),o.jsx(ue,{children:"Recommend"})]}),o.jsx(We,{data:a,theme:Ke,layout:{custom:!0},children:c=>o.jsxs(o.Fragment,{children:[o.jsx(Ae,{children:o.jsxs(Me,{children:[o.jsx(z,{children:"Title"}),o.jsx(z,{children:"Category"}),o.jsx(z,{children:"Calories"}),o.jsx(z,{children:"Weight"}),o.jsx(z,{children:"Recommend"}),o.jsx(z,{children:""})]})}),o.jsx(Te,{children:c.map(l=>o.jsxs(Xe,{item:l,children:[o.jsx(T,{children:V(l.title)}),o.jsx(T,{children:V(l.category)}),o.jsx(T,{children:l.calories}),o.jsx(T,{children:l.amount}),o.jsxs(T,{children:[o.jsx(Lt,{bgColor:l.recommend?"#419B09":"#E9101D"}),l.recommend?"Yes":"No"]}),o.jsx(T,{children:o.jsx(fe,{onClick:()=>r({date:i,id:l._id,calories:l.calories,time:l.amount}),children:o.jsx(he,{children:o.jsx("use",{href:te+"#icon-trash"})})})})]},l._id))})]})})]}),t&&o.jsxs(ke,{children:[o.jsxs(Oe,{children:[o.jsx(ne,{children:"Body Part"}),o.jsx(ne,{children:"Equipment"}),o.jsx(ne,{children:"Name"}),o.jsx(ne,{children:"Target"}),o.jsx(ne,{}),o.jsx(ne,{children:"Time"}),o.jsx(ne,{children:""})]}),o.jsx(We,{data:a,theme:$r,layout:{custom:!0},children:c=>o.jsxs(o.Fragment,{children:[o.jsx(Ae,{children:o.jsxs(Me,{children:[o.jsx(z,{children:"Body Part"}),o.jsx(z,{children:"Equipment"}),o.jsx(z,{children:"Name"}),o.jsx(z,{children:"Target"}),o.jsx(z,{children:"Burned Cal..."}),o.jsx(z,{children:"Time"}),o.jsx(z,{children:""})]})}),o.jsx(Te,{children:c.map(l=>o.jsxs(Xe,{item:l,children:[o.jsx(T,{children:V(l.bodyPart)}),o.jsx(T,{children:V(l.equipment)}),o.jsx(T,{children:V(l.name)}),o.jsx(T,{children:V(l.target)}),o.jsx(T,{children:l.burnedCalories}),o.jsx(T,{children:l.time}),o.jsx(T,{children:o.jsx(fe,{onClick:()=>r({date:i,id:l._id,calories:l.burnedCalories,time:l.time}),children:o.jsx(he,{children:o.jsx("use",{href:te+"#icon-trash"})})})})]},l._id))})]})})]})]})};ct.propTypes={list:S.array,productTable:S.bool,exerciseTable:S.bool,onDelete:S.func,date:S.string};const Ge=y.div`
  overflow: auto;
  margin-top: 22px;
  height: 254px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 90px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${j.textWhite01};
    border-radius: 12px;
  }

  ${x.tablet} {
    display: none;
  }
`,Ye=y.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 8px;
  }
`,Ze=y.div`
  display: flex;
  height: 64px;

  & > div {
    &:nth-of-type(1) {
      width: 81px;
      margin-right: 16px;
    }
  }

  & > div {
    &:nth-of-type(2) {
      width: 80px;
      margin-right: 16px;
    }
  }

  & > div {
    &:nth-of-type(3) {
      width: 76px;
      margin-right: 8px;

      & > p {
        &::before {
          ${e=>e.before&&`
            content: '';
            width: 14px;
            height: 14px;
            border-radius: 10px;
            background: #419b09;
            margin-right: 8px;
          `}
        }
      }
    }
  }

  & > div {
    &:nth-of-type(4) {
      & > p {
        padding: 0;
        margin-top: 35px;

        border: none;
      }
    }
  }
`,A=y.div`
  font-size: 12px;
  line-height: 1.5;

  color: ${j.orange};
`,_=y.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 10px 0 10px 14px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${j.textWhite03};

  color: ${j.white};

  &::before {
    ${e=>e.before&&`
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 10px;
      background: ${e.colorBefore?"#419B09":"#E9101D"};
      margin-right: 8px;
    `}
  }
`,ut=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:i})=>o.jsxs(o.Fragment,{children:[n&&o.jsx(Ge,{children:e.map(a=>o.jsxs(Ye,{children:[o.jsxs(A,{children:["Title",o.jsx(_,{children:V(a.title)})]}),o.jsxs(A,{children:["Category",o.jsx(_,{children:V(a.category)})]}),o.jsxs(Ze,{children:[o.jsxs(A,{children:["Calories",o.jsx(_,{children:a.calories})]}),o.jsxs(A,{children:["Weight ",o.jsx(_,{children:a.amount})]}),o.jsxs(A,{children:["Recommend",o.jsx(_,{before:!0,colorBefore:a.recommend,children:a.recommend?"Yes":"No"})]}),o.jsx(A,{children:o.jsx(_,{children:o.jsx(fe,{onClick:()=>r({date:i,id:a._id,calories:a.calories,time:a.amount}),children:o.jsx(he,{children:o.jsx("use",{href:te+"#icon-trash"})})})})})]})]},a._id))}),t&&o.jsx(Ge,{children:e.map(a=>o.jsxs(Ye,{children:[o.jsxs(A,{children:["Body Part",o.jsx(_,{children:V(a.bodyPart)})]}),o.jsxs(A,{children:["Equipment",o.jsx(_,{children:V(a.equipment)})]}),o.jsxs(A,{children:["Name",o.jsx(_,{children:V(a.name)})]}),o.jsxs(Ze,{children:[o.jsxs(A,{children:["Target ",o.jsx(_,{children:V(a.target)})]}),o.jsxs(A,{children:["Burned Calor..",o.jsx(_,{children:a.burnedCalories})]}),o.jsxs(A,{children:["Time ",o.jsx(_,{children:a.time})]}),o.jsxs(A,{children:[" ",o.jsx(_,{children:o.jsx(fe,{onClick:()=>r({date:i,id:a._id,calories:a.burnedCalories,time:a.time}),children:o.jsx(he,{children:o.jsx("use",{href:te+"#icon-trash"})})})})]})]})]},a._id))})]});ut.propTypes={list:S.array,productTable:S.bool,exerciseTable:S.bool,onDelete:S.func,date:S.string};const we=({to:e,marginBottom:n,list:t,productTable:r,exerciseTable:i,date:a})=>{const c=Ue(),l=({date:u,id:f,calories:p,time:d})=>{r&&c(xt({productId:f,date:u,calories:p,time:d})),i&&c(mt({exerciseId:f,date:u,calories:p,time:d}))};return o.jsxs(St,{marginBottom:n,children:[o.jsxs(Pt,{children:[o.jsx(Nt,{children:r?"Products":"Exercises"}),o.jsxs(Rt,{to:e,children:["Add ",r?"product":"exercise",o.jsx(Ft,{children:o.jsx("use",{href:te+"#arrow-right"})})]})]}),t.length!==0?o.jsxs(o.Fragment,{children:[o.jsx(ct,{list:t,productTable:r,exerciseTable:i,onDelete:l,date:a}),o.jsx(ut,{list:t,productTable:r,exerciseTable:i,onDelete:l,date:a})]}):o.jsxs(Bt,{children:["Not found ",r?"products":"exercises"]})]})};we.propTypes={to:S.string,marginBottom:S.number,list:S.array,productTable:S.bool,exerciseTable:S.bool,date:S.string};const Dr=y.div`
  position: relative;

  padding: 0 20px;
  ${x.tablet} {
    padding: 0 32px;
  }
  ${x.desktop} {
    padding: 0 96px;
  }
`,Er=y.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${x.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Sr=y.div`
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 999;
  right: 20px;
  top: 4px;

  ${x.tablet} {
    right: 32px;
    top: -10px;
  }

  ${x.desktop} {
    right: 96px;
  }
`,Je=y.button`
  height: 16px;
  padding: 0;
  margin-left: 40px;

  border: none;
  background-color: inherit;

  &:last-child {
    margin-left: 6px;
  }

  &:hover > svg {
    fill: ${j.orange};
  }
`,Qe=y.svg`
  width: 16px;
  height: 16px;

  transition: fill 0.3s;

  fill: ${j.white};
`,Pr=y.div`
  width: auto;

  ${x.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${x.desktop} {
    margin-top: 0;
  }
`,Nr=y.div`
  width: auto;

  ${x.tablet} {
    width: 704px;
  }

  ${x.desktop} {
    width: 826px;
  }
`,Rr={top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}},Br=y.label`
  position: relative;

  background-color: inherit;
  border: none;

  cursor: pointer;

  &:hover svg,
  &:hover input {
    stroke: ${j.orange};
    color: ${j.orange};
  }

  &:focus-visible {
    border: none;
  }

  &:focus {
    border: none;
  }
`,Fr=y.input`
  width: 125px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;

  cursor: pointer;

  color: ${j.white};
  border: none;
  background-color: inherit;

  transition: color 0.3s;

  &:focus {
    color: ${j.orange};
    border: none;
  }

  &:focus-visible {
    border: none;
  }

  &:focus + svg {
    stroke: ${j.orange};
  }

  ${x.tablet} {
    width: 161px;

    font-size: 24px;
    line-height: 1.33;
  }

  ${x.desktop} {
  }
`,Lr=y.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: -8px;
  top: 46%;

  stroke: ${j.grey};

  transform: translate(-50%, -50%);
  transition: stroke 0.3s;

  ${x.tablet} {
    width: 24px;
    height: 24px;
    right: -14px;
    top: 40%;
  }
`,dt=s.forwardRef((e,n)=>{const{value:t,onClick:r}=e;return o.jsxs(Br,{onClick:r,ref:n,children:[o.jsx(Fr,{value:t||"",name:"name",readOnly:!0}),o.jsx(Lr,{children:o.jsx("use",{href:`${te}#calendar`})})]})});dt.displayName="CustomInputForCalendar";const zr=e=>{const n=e;let t=n.getDate(),r=n.getMonth()+1;const i=n.getFullYear();return t<10&&(t="0"+t),r<10&&(r="0"+r),t+"-"+r+"-"+i},Vr=()=>{const[e,n]=s.useState(new Date),[t,r]=s.useState(""),i=oe(wt),a=oe(kt),c=Ue();s.useEffect(()=>{c(yt(t||l(t,e)))},[c,e,t]);const l=(f,p)=>{const d=zr(p);return r(d),n(p),d},u=(f,p)=>{const d=new Date(p);f==="nextDay"&&d.setDate(d.getDate()+1),f==="previousDay"&&d.setDate(d.getDate()-1),l(d,d)};return o.jsxs(Dr,{children:[o.jsx(vt,{text:"Diary",margin:Rr}),o.jsxs(Sr,{children:[o.jsx(jt,{value:e,onChange:l,name:"name",dateFormat:"dd/MM/yyyy",customInput:o.jsx(dt,{}),withoutВorder:!0}),o.jsx(Je,{onClick:()=>u("previousDay",e),children:o.jsx(Qe,{children:o.jsx("use",{href:te+"#chevron-left"})})}),o.jsx(Je,{onClick:()=>u("nextDay",e),children:o.jsx(Qe,{children:o.jsx("use",{href:te+"#chevron-right"})})})]}),o.jsxs(Er,{children:[o.jsxs(Pr,{children:[o.jsx(Et,{}),o.jsx(gt,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:bt})]}),o.jsxs(Nr,{children:[o.jsx(we,{marginBottom:40,list:i,productTable:!0,date:t,to:"/products"}),o.jsx(we,{list:a,exerciseTable:!0,date:t,to:"/exercises"})]})," "]})]})};export{Vr as default};
