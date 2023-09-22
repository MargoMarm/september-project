import{n as v,m as g,b as ne,x as cr,y as ur,j as i,c as O,N as dr,r as l,Z as K,P as D,s as ue,u as Ye,z as pr,A as fr,B as hr}from"./index-0afd7ee1.js";import{D as ae,a as xr,m as mr}from"./descriptionTextMargin-dcbdef7d.js";import{T as yr}from"./Title-3028ade6.js";import{c as V}from"./capitalizeWord-85339af4.js";import{c as M,j as b}from"./emotion-react.browser.esm-bb9a0449.js";const br=v.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${g.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${g.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,gr=e=>e.diary.products,vr=e=>e.diary.exercises,jr=e=>e.diary.burnedCalories,Cr=e=>e.diary.consumedCalories,wr=e=>e.diary.doneExercisesTime,kr=()=>{const e=ne(cr),n=ne(ur),t=ne(jr),r=ne(Cr),o=ne(wr);function a(p){const f=Math.floor(p/60),x=p%60;return{minutes:f,seconds:x}}const s=a(o);let u=e-s.minutes,h=n-r;return i.jsxs(br,{children:[i.jsx(ae,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:n}),i.jsx(ae,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:e+" min"}),i.jsx(ae,{icon:"apple",label:"Сalories consumed",keyValue:r}),i.jsx(ae,{icon:"fire",label:"Сalories burned",keyValue:t}),i.jsx(ae,{icon:"bubble",label:"The rest of the calories",keyValue:h,border:h<0?"red":"default"}),i.jsx(ae,{icon:"runningMan",label:"The rest of sports",keyValue:u+" min",border:u>e?"green":"default"})]})},Or=v.div`
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
  border: 1px solid ${O.textWhite02};
  background: rgba(239, 237, 232, 0.05);

  ${g.tablet} {
    width: auto;
    height: 234px;
  }

  ${g.desktop} {
    width: auto;
  }
`,Er=v.div`
  display: flex;
  justify-content: space-between;
`,$r=v.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${O.textWhite05};
`,Sr=v(dr)`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 1.5;

  color: ${O.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${O.orangeSecondary};

    svg {
      stroke: ${O.orangeSecondary};
    }
  }
`,Dr=v.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${O.textWhite05};
`,Pr=v.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${O.orange};

  transition: stroke 250ms ease-in-out;
`,ke=v.div`
  display: none;
  
  ${g.tablet} {
    display: block;
  }`,fe=v.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,he=v.svg`
  width: 20px;
  height: 20px;
`,Oe=v.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${g.desktop} {
    margin-left: 16px;
  }
`,ce=v.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${O.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 188px;

    ${g.desktop} {
      margin-right: 196px;
    }
  }

  :nth-of-type(2) {
    margin-right: 87px;

    ${g.desktop} {
      margin-right: 125px;
    }
  }

  :nth-of-type(3) {
    margin-right: 54px;

    ${g.desktop} {
      margin-right: 69px;
    }
  }

  :nth-of-type(4) {
    margin-right: 60px;

    ${g.desktop} {
      margin-right: 75px;
    }
  }

  :nth-of-type(5) {
    margin-right: 12px;
  }
`,te=v.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${O.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 45px;

    ${g.desktop} {
      margin-right: 70px;
    }
  }

  :nth-of-type(2) {
    margin-right: 82px;

    ${g.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(3) {
    margin-right: 104px;

    ${g.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(4) {
    margin-right: 58px;

    ${g.desktop} {
      margin-right: 80px;
    }
  }

  :nth-of-type(5)::before {
    content: 'Burned calor...';
    margin-right: 14px;

    ${g.desktop} {
      content: 'Burned Calories';
      margin-right: 15px;
    }
  }
`,Nr=v.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-right: 8px;
  background: ${e=>e.bgColor};
`,Rr={Table:`
    --data-table-library_grid-template-columns:  98px 140px 136px 92px 86px 84px 28px;
    height: 136px;

    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${O.textWhite01};
      border-radius: 12px;
    };

    ${g.desktop} {
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
    border: 1px solid ${O.textWhite03};

    :nth-of-type(6) {
      margin-right: 12px;
    }

    :nth-of-type(7) {
      margin-right: 0;
      border: none;
      padding: 0
    }  
  `},Qe={Table:`
    --data-table-library_grid-template-columns:  212px 136px 98px 98px 92px 28px;
    height: 136px; 
    
    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${O.textWhite01};
      border-radius: 12px;
    };

    ${g.desktop} {
      --data-table-library_grid-template-columns:  220px 174px 113px 113px 122px 28px;
      margin-left: 16px;
    }
    `,Body:"",Header:"display: none;",BaseRow:"",Row:`
    font-size: 16px;
    background-color: inherit;
    color: ${O.white};
  `,HeaderRow:`
    background-color: inherit;`,BaseCell:"",HeaderCell:`
    color: ${O.orangeSecondary};
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.5;
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${O.textWhite03};

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
  `};function me(){return Ue=me=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},me.apply(this,arguments)}var Ue=me,q=Ue,Br=function(e,n){if(e==null)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o},ie=function(e,n){if(e==null)return{};var t,r,o=Br(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o},oe=l.createContext(null),le=function(e){var n=e.current.querySelector(".tr-header");return Array.from((n==null?void 0:n.querySelectorAll(".th"))||[])},Ke=function(e,n,t,r){return Array.from(e.current.querySelectorAll(t)).forEach(function(o){var a=Array.from(o.querySelectorAll(r)),c=a.length;a.forEach(function(s,u){return n(s,u,c)})})},Lr=function(e,n){return Ke(e,n,".tr-header",".th")},Fr=function(e,n){return Ke(e,n,".tr-body",".td")},se=function(e,n){return{index:n,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},G=l.createContext(null),Tr=function(e){var n=e.tableElementRef,t=e.tableMemoryRef,r=e.layout,o=e.children,a=l.useMemo(function(){return{layout:r,tableElementRef:n,tableMemoryRef:t}},[r,n,t]);return b(G.Provider,{value:a},o)},Ie=function(e,n){var t=le(e).map(se);n.current.dataColumns=t},xe=function(e,n,t){var r=n.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;n.current&&e&&r&&(n.current.style.setProperty("--data-table-library_grid-template-columns",e),Ie(n,t))},er=function(e,n){n!=null&&n.onLayoutChange&&e&&n.onLayoutChange(e)},rr=`
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
`),zr=M(rr,";",""),Ee=l.forwardRef(function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"td";return b(o,q({css:zr,ref:n},e))}),Ar=M(rr," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),$e=l.forwardRef(function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"th";return b(o,q({css:Ar,ref:n},e))}),Wr={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Se=function(e){var n=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,t=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:Wr,area:M("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",n,"px;height:100%;&:hover,&.active{background-color:",t,";}","")}},tr=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},De=tr,nr=function(e,n){if(e){if(typeof e=="string")return De(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?De(e,n):void 0}},_r=function(e){if(Array.isArray(e))return e},Hr=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||s.return==null||s.return()}finally{if(o)throw a}}return t}},Vr=nr,Mr=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},ye=function(e,n){return _r(e)||Hr(e,n)||Vr(e,n)||Mr()},de=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},qr=tr,Xr=function(e){if(Array.isArray(e))return qr(e)},Gr=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},Zr=nr,Jr=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},be=function(e){return Xr(e)||Gr(e)||Zr(e)||Jr()},ge=null,Yr=function(){return ge||(ge=l.createContext(null))},Qr=function(){return l.useContext(ge)};function Pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ne(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Pe(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ur=function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.tableElementRef,o=t.tableMemoryRef,a=t.layout,c=l.useRef(null),s=l.useRef(null),u=l.useRef(""),h=l.useRef(null),p=l.useRef(!1),f=l.useCallback(function(m){var C;m.preventDefault(),u.current=r.current.style.getPropertyValue("--data-table-library_grid-template-columns"),p.current=!0,h.current=c.current.offsetWidth-m.pageX,(C=c.current)===null||C===void 0||C.querySelector(".resizer-area").classList.add("active")},[r]),x=l.useCallback(function(m){if(p.current){m.preventDefault();var C=h.current+m.pageX,j=function(E,y,$,N){var R=le($).map(se).filter(function(d){return!d.isHide}),L=R.findIndex(function(d){return d.index===E}),P=(R=R.map(function(d,w){return Ne(Ne({},d),{},{index:w})})).reduce(function(d,w,B){return d||(B>L&&w.width!==0?w:d)},null),Z=R.reduce(function(d,w){return d+w.width},0),_=R[L].minWidth,J=N>_&&N!==0?N:_,X=J-R[L].width,S=R.map(function(d,w){if(P&&L===w)return P.width-X>_?J:d.width;if((P==null?void 0:P.index)===w){var B=d.width-X;return B>_?B:d.width}return d.width}),I=Z-S.reduce(function(d,w){return d+w},0);S[L]=S[L]+I;var Y=!1,ee=R.slice(0).reverse().map(function(d,w){var B=S.slice(0).reverse()[w],Q=B/Z*100;return d.isStiff||y!=null&&y.horizontalScroll?"".concat(B,"px"):Y?"minmax(0, ".concat(Q,"%)"):(Y=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),F=function(d,w){if(be(Array.from(d.classList)).includes("pin-left")){var B=S.reduce(function(U,H,re){return re>=w?U:U+H},0);d.style.left="".concat(B,"px")}if(be(Array.from(d.classList)).includes("pin-right")){var Q=S.reduceRight(function(U,H,re){return re<=w?U:U+H},0);d.style.right="".concat(Q,"px")}};return Lr($,F),Fr($,F),ee}(e,a,r,C);xe(j,r,o)}},[e,a,r,o]),k=l.useCallback(function(){var m;p.current=!1;var C=r.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(u.current!==C){er(C,a);var j=le(r).map(se);o.current.dataColumns=j}(m=c.current)===null||m===void 0||m.querySelector(".resizer-area").classList.remove("active")},[a,r,o]);return l.useEffect(function(){var m=s.current;return m&&(m.addEventListener("mousedown",f),document.addEventListener("mousemove",x),document.addEventListener("mouseup",k)),function(){m&&(m.removeEventListener("mousedown",f),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",k))}},[n,f,x,k]),{cellRef:c,resizeRef:s}},Kr=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Be(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Re(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Re(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Le=function(e,n){return n.find(function(t){return t.index===e})},T=function(e){var n=e.index,t=e.className,r=e.hide,o=e.pinLeft,a=e.pinRight,c=e.stiff,s=e.isFooter,u=e.includePreviousColSpan,h=e.previousColSpans,p=e.gridColumnStart,f=e.gridColumnEnd,x=e.resize,k=e.role,m=k===void 0?"columnheader":k,C=e.children,j=e.style,E=ie(e,Kr),y=l.useContext(oe);(function(J,X){var S=l.useContext(G);if(!S)throw new Error("No Layout Context.");var I=S.layout,Y=S.tableElementRef,ee=S.tableMemoryRef;l.useLayoutEffect(function(){var F=ee.current.dataColumns,d=le(Y).map(se),w=Le(J,F),B=(w==null?void 0:w.isHide)===!!X;if(F!=null&&F.length&&!B){var Q=d.filter(function(H){return!H.isHide}).map(function(H){if(H.isStiff||I!=null&&I.horizontalScroll){var re=Le(H.index,F);return re?"".concat(re.width||2*re.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");xe(Q,Y,ee),er(Q,I);var U=le(Y).map(se);ee.current.dataColumns=U}},[J,X,I,Y,ee])})(n,r);var $=Ur(n,r),N=$.cellRef,R=$.resizeRef,L=p&&f,P=L?f-p-1:0,Z=u?p+h:p,_=u?f+h:f;return b(l.Fragment,null,b($e,q({role:m,"data-table-library_th":"","data-hide":!!r,"data-resize-min-width":typeof x=="boolean"||(x==null?void 0:x.minWidth)==null?75:x.minWidth,style:Be(Be({},L?{gridColumnStart:Z,gridColumnEnd:_}:{}),j),css:M(y==null?void 0:y.BaseCell," ",s?y==null?void 0:y.FooterCell:y==null?void 0:y.HeaderCell,";",""),className:K("th",t,{stiff:c,hide:r,resize:x,"pin-left":o,"pin-right":a}),ref:N},E),b("div",null,C),x&&!r&&b("div",{className:"resizer-area",ref:R,css:Se(x).area},b("span",{className:"resizer-handle",css:Se(x).handle}))),Array.from({length:P},function(){return b($e,{className:K("th","hide","colspan")})}))},ve=null,Ir=function(){return ve||(ve=l.createContext(null))},et=function(){return l.useContext(ve)},rt=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},tt=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function Fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Te(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Fe(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Fe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var z=function(e){e.index;var n=e.className,t=e.hide,r=e.pinLeft,o=e.pinRight,a=e.stiff,c=e.includePreviousColSpan,s=e.previousColSpans,u=e.gridColumnStart,h=e.gridColumnEnd,p=e.onClick,f=e.children,x=e.style,k=ie(e,tt),m=l.useContext(oe),C=u&&h,j=C?h-u-1:0,E=c?u+s:u,y=c?h+s:h;return b(l.Fragment,null,b(Ee,q({role:"gridcell","data-table-library_td":"",style:Te(Te({},C?{gridColumnStart:E,gridColumnEnd:y}:{}),x),css:M(m==null?void 0:m.BaseCell," ",m==null?void 0:m.Cell,";",""),className:K("td",n,{stiff:a,hide:t,"pin-left":r,"pin-right":o}),onClick:p},k),b("div",null,f)),Array.from({length:j},function(){return b(Ee,{className:K("td","hide","colspan")})}))},je=null,nt=function(){return je||(je=l.createContext(null))},it=function(){return l.useContext(je)},Ce=null,ot=function(){return Ce||(Ce=l.createContext(null))},at=function(){var e=l.useState(!1),n=ye(e,2),t=n[0],r=n[1];return l.useEffect(function(){var o=function(c){c.shiftKey?r(!0):t&&r(!1)},a=function(){t&&r(!1)};return document&&(document.addEventListener("keydown",o),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",o),document.removeEventListener("keyup",a))}},[t]),t},lt=function(){return{select:it(),tree:et(),sort:Qr(),pagination:l.useContext(Ce)}},st=function(e){var n=e.sort,t=e.pagination,r=e.tree;return function(o){var a=be(o);return a=n?n.modifier(a):a,a=t?t.modifier(a):a,a=r?r.modifier(a):a}},ct=function(e){return e.reduce(function(n,t){return Object.keys(t).forEach(function(r){n[r]||(n[r]=""),n[r]=`
        `.concat(n[r],`
        `).concat(t[r],`
      `)}),n},{})},ut=function(e){return Array.isArray(e)?ct(e):e},dt=["children"],ze=function(e){var n=e.children,t=ie(e,dt),r=l.useContext(oe),o=l.useContext(G);if(!o)throw new Error("No Layout Context.");var a=o.layout,c=a!=null&&a.isDiv?"div":"tbody";return b(c,q({css:M(r==null?void 0:r.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},t),n)},pt=["isFooter","children"],Ae=function(e){var n=e.isFooter,t=e.children,r=ie(e,pt),o=l.useContext(oe),a=l.useContext(G);if(!a)throw new Error("No Layout Context.");var c=a.layout,s=c!=null&&c.isDiv?"div":n?"tfoot":"thead";return b(s,q({role:"rowgroup",className:K({tfoot:n,thead:!n}),css:M(`
  display: contents;
`," ",n?o==null?void 0:o.Footer:o==null?void 0:o.Header,";","")},r),l.Children.map(t,function(u){if(l.isValidElement(u))return l.cloneElement(u)}))},We=null,ft=function(){return We||(We=l.createContext(null))},ht=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],xt={Table:`
    height: 100%;
  `},_e=l.forwardRef(function(e,n){var t=e.data,r=e.theme,o=e.layout,a=e.sort,c=e.pagination,s=e.select,u=e.tree,h=e.onInit,p=h===void 0?function(){}:h,f=e.className,x=f===void 0?"table":f,k=e.children,m=ie(e,ht),C=function(F){var d=l.useRef(null);return F&&(d=F),d}(n),j=function(F){var d=l.useRef(null);return d.current||(d.current={onlyOnce:!1,dataColumns:[]}),d}(),E=st({sort:a,pagination:c,tree:u,select:s})(t.nodes),y=function(F,d){var w=l.useState(!1),B=ye(w,2),Q=B[0],U=B[1];return[Q,function(H){H&&(Q||(U(!0),d.current=H,F(H)))}]}(p,C),$=ye(y,2),N=$[0],R=$[1],L=at(),P=[];o!=null&&o.fixedHeader&&(P=P.concat(xt)),r&&(P=P.concat(r));var Z,_=ut(P),J=o!=null&&o.isDiv?"div":"table",X=ft(),S=Yr(),I=nt(),Y=Ir(),ee=ot();return b(J,q({role:"grid","data-table-library_table":"",css:M((Z={isShiftDown:L},`
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

  `.concat(Z.isShiftDown?`
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    `:"",`
  `))," ",_==null?void 0:_.Table,";",""),className:K(x),ref:R},m),N&&b(X.Provider,{value:t},b(oe.Provider,{value:_},b(S.Provider,{value:a},b(I.Provider,{value:s},b(Y.Provider,{value:u},b(ee.Provider,{value:c},b(Tr,{layout:o,tableElementRef:C,tableMemoryRef:j},k&&k(E)))))))))}),ir=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},mt=l.forwardRef(function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"tr";return b(o,q({css:M(ir(),";",""),ref:n},e))}),yt=l.forwardRef(function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"tr";return b(o,q({css:M(ir(),";",""),ref:n},e))}),or=function(e){return e.type?e.type===l.Fragment:e===l.Fragment},ar=function(e,n){return l.Children.toArray(e).reduce(function(t,r,o){return l.isValidElement(r)?o>=n?t:r.props.gridColumnStart||r.props.gridColumnEnd?t+r.props.gridColumnEnd-r.props.gridColumnStart-1:t:t},0)},bt=["className","role","isFooter","children"];function He(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ve(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?He(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):He(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Me=function(e){var n,t=e.className,r=e.role,o=r===void 0?"rowheader":r,a=e.isFooter,c=e.children,s=ie(e,bt),u=l.useContext(oe),h=l.useRef(null);return n=l.useContext(G),l.useLayoutEffect(function(){var p;if(!n)throw new Error("No Layout Context.");var f=n.layout,x=n.tableElementRef,k=n.tableMemoryRef,m=le(x).map(se);if((p=k.current)===null||p===void 0||!p.onlyOnce)if(k.current.onlyOnce=!0,f!=null&&f.resizedLayout){var C=f==null?void 0:f.resizedLayout;xe(C,x,k)}else if(f!=null&&f.custom)Ie(x,k);else{var j=m.filter(function(E){return!E.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");xe(j,x,k)}},[n]),b(yt,q({role:o,"data-table-library_tr-header":"",css:M(u==null?void 0:u.BaseRow," ",a?u==null?void 0:u.FooterRow:u==null?void 0:u.HeaderRow,";",""),className:K("tr",t,{"tr-footer":a,"tr-header":!a}),ref:h},s),l.Children.toArray(c).filter(Boolean).map(function(p,f){if(l.isValidElement(p)){var x={};return or(p)||(x=Ve(Ve({},x),{},{index:f,previousColSpans:ar(c,f)})),l.cloneElement(p,x)}}))},gt=function(){},vt=function(e,n,t,r){(function(o){var a=o.onSingleClick,c=o.onDoubleClick,s=o.ref,u=l.useRef(0);l.useEffect(function(){var h=s.current,p=function(f){c&&(u.current===0&&a(f),u.current+=1,setTimeout(function(){u.current===2&&c(f),u.current=0},300))};return h==null||h.addEventListener("click",p),function(){h==null||h.removeEventListener("click",p)}})})({onSingleClick:n?function(o){return n(r,o)}:gt,onDoubleClick:t?function(o){return t(r,o)}:null,ref:e})},jt=["item","className","disabled","onClick","onDoubleClick","children"];function qe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function pe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?qe(Object(t),!0).forEach(function(r){de(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Xe=function(e){var n=e.item,t=e.className,r=e.disabled,o=e.onClick,a=e.onDoubleClick,c=e.children,s=ie(e,jt),u=function(j,E){return Object.values(j).filter(Boolean).filter(function(y){return y==null?void 0:y.hasOwnProperty("_getRowProps")}).map(function(y){return y._getRowProps(E,j)})}(lt(),e),h=l.useContext(oe),p=function(j,E){var y=j.reduce(function($,N){var R=N.theme,L=N.className,P=N.onClick,Z=`
        `.concat($.themeByFeature,`
        `).concat(R,`
      `),_=K($.classNamesByFeature,L),J=$.clickable||!!P;return pe(pe({},$),{},{themeByFeature:Z,classNamesByFeature:_,clickable:J,onClickByFeature:function(X,S){P(X,S),$.onClickByFeature(X,S)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!E,onClickByFeature:function($,N){E&&rt(N)&&E($,N)}});return{themeByFeature:y.themeByFeature,classNamesByFeature:y.classNamesByFeature,clickable:y.clickable,onClickByFeature:y.onClickByFeature}}(u,o),f=p.themeByFeature,x=p.classNamesByFeature,k=p.clickable,m=p.onClickByFeature,C=l.useRef(null);return vt(C,m,a,n),b(mt,q({role:"row","data-table-library_tr-body":"",onClick:r||a?function(){}:function(j){return m(n,j)},css:M(f," ",h==null?void 0:h.BaseRow," ",h==null?void 0:h.Row,";",""),className:K("tr","tr-body",x,t,{disabled:r,clickable:k||!!a}),ref:C},s),l.Children.toArray(c).filter(Boolean).map(function(j,E){if(l.isValidElement(j)){var y={};return or(j)||(y=pe(pe({},y),{},{index:E,previousColSpans:ar(c,E)})),l.cloneElement(j,y)}}))};const Ct={...Qe,...Rr},lr=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:o})=>{const a={nodes:e};return i.jsxs(i.Fragment,{children:[n&&i.jsxs(ke,{children:[i.jsxs(Oe,{children:[i.jsx(ce,{children:"Title"}),i.jsx(ce,{children:"Category"}),i.jsx(ce,{children:"Calories"}),i.jsx(ce,{children:"Weight"}),i.jsx(ce,{children:"Recommend"})]}),i.jsx(_e,{data:a,theme:Qe,layout:{custom:!0},children:c=>i.jsxs(i.Fragment,{children:[i.jsx(Ae,{children:i.jsxs(Me,{children:[i.jsx(T,{children:"Title"}),i.jsx(T,{children:"Category"}),i.jsx(T,{children:"Calories"}),i.jsx(T,{children:"Weight"}),i.jsx(T,{children:"Recommend"}),i.jsx(T,{children:""})]})}),i.jsx(ze,{children:c.map(s=>i.jsxs(Xe,{item:s,children:[i.jsx(z,{children:V(s.title)}),i.jsx(z,{children:V(s.category)}),i.jsx(z,{children:s.calories}),i.jsx(z,{children:s.amount}),i.jsxs(z,{children:[i.jsx(Nr,{bgColor:s.recommend?"#419B09":"#E9101D"}),s.recommend?"Yes":"No"]}),i.jsx(z,{children:i.jsx(fe,{onClick:()=>r({date:o,id:s._id,calories:s.calories,time:s.amount}),children:i.jsx(he,{children:i.jsx("use",{href:ue+"#icon-trash"})})})})]},s._id))})]})})]}),t&&i.jsxs(ke,{children:[i.jsxs(Oe,{children:[i.jsx(te,{children:"Body Part"}),i.jsx(te,{children:"Equipment"}),i.jsx(te,{children:"Name"}),i.jsx(te,{children:"Target"}),i.jsx(te,{}),i.jsx(te,{children:"Time"}),i.jsx(te,{children:""})]}),i.jsx(_e,{data:a,theme:Ct,layout:{custom:!0},children:c=>i.jsxs(i.Fragment,{children:[i.jsx(Ae,{children:i.jsxs(Me,{children:[i.jsx(T,{children:"Body Part"}),i.jsx(T,{children:"Equipment"}),i.jsx(T,{children:"Name"}),i.jsx(T,{children:"Target"}),i.jsx(T,{children:"Burned Cal..."}),i.jsx(T,{children:"Time"}),i.jsx(T,{children:""})]})}),i.jsx(ze,{children:c.map(s=>i.jsxs(Xe,{item:s,children:[i.jsx(z,{children:V(s.bodyPart)}),i.jsx(z,{children:V(s.equipment)}),i.jsx(z,{children:V(s.name)}),i.jsx(z,{children:V(s.target)}),i.jsx(z,{children:s.burnedCalories}),i.jsx(z,{children:s.time}),i.jsx(z,{children:i.jsx(fe,{onClick:()=>r({date:o,id:s._id,calories:s.burnedCalories,time:s.time}),children:i.jsx(he,{children:i.jsx("use",{href:ue+"#icon-trash"})})})})]},s._id))})]})})]})]})};lr.propTypes={list:D.array,productTable:D.bool,exerciseTable:D.bool,onDelete:D.func,date:D.string};const Ge=v.div`
  overflow: auto;
  margin-top: 22px;
  height: 254px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 90px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${O.textWhite01};
    border-radius: 12px;
  }

  ${g.tablet} {
    display: none;
  }
`,Ze=v.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 8px;
  }
`,Je=v.div`
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
`,A=v.div`
  font-size: 12px;
  line-height: 1.5;

  color: ${O.orange};
`,W=v.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 10px 0 10px 14px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${O.textWhite03};

  color: ${O.white};

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
`,sr=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:o})=>i.jsxs(i.Fragment,{children:[n&&i.jsx(Ge,{children:e.map(a=>i.jsxs(Ze,{children:[i.jsxs(A,{children:["Title",i.jsx(W,{children:V(a.title)})]}),i.jsxs(A,{children:["Category",i.jsx(W,{children:V(a.category)})]}),i.jsxs(Je,{children:[i.jsxs(A,{children:["Calories",i.jsx(W,{children:a.calories})]}),i.jsxs(A,{children:["Weight ",i.jsx(W,{children:a.amount})]}),i.jsxs(A,{children:["Recommend",i.jsx(W,{before:!0,colorBefore:a.recommend,children:a.recommend?"Yes":"No"})]}),i.jsx(A,{children:i.jsx(W,{children:i.jsx(fe,{onClick:()=>r({date:o,id:a._id,calories:a.calories,time:a.amount}),children:i.jsx(he,{children:i.jsx("use",{href:ue+"#icon-trash"})})})})})]})]},a._id))}),t&&i.jsx(Ge,{children:e.map(a=>i.jsxs(Ze,{children:[i.jsxs(A,{children:["Body Part",i.jsx(W,{children:V(a.bodyPart)})]}),i.jsxs(A,{children:["Equipment",i.jsx(W,{children:V(a.equipment)})]}),i.jsxs(A,{children:["Name",i.jsx(W,{children:V(a.name)})]}),i.jsxs(Je,{children:[i.jsxs(A,{children:["Target ",i.jsx(W,{children:V(a.target)})]}),i.jsxs(A,{children:["Burned Calor..",i.jsx(W,{children:a.burnedCalories})]}),i.jsxs(A,{children:["Time ",i.jsx(W,{children:a.time})]}),i.jsxs(A,{children:[" ",i.jsx(W,{children:i.jsx(fe,{onClick:()=>r({date:o,id:a._id,calories:a.burnedCalories,time:a.time}),children:i.jsx(he,{children:i.jsx("use",{href:ue+"#icon-trash"})})})})]})]})]},a._id))})]});sr.propTypes={list:D.array,productTable:D.bool,exerciseTable:D.bool,onDelete:D.func,date:D.string};const we=({to:e,marginBottom:n,list:t,productTable:r,exerciseTable:o,date:a})=>{const c=Ye(),s=({date:u,id:h,calories:p,time:f})=>{r&&c(pr({productId:h,date:u,calories:p,time:f})),o&&c(fr({exerciseId:h,date:u,calories:p,time:f}))};return i.jsxs(Or,{marginBottom:n,children:[i.jsxs(Er,{children:[i.jsx($r,{children:r?"Products":"Exercises"}),i.jsxs(Sr,{to:e,children:["Add ",r?"product":"exercise",i.jsx(Pr,{children:i.jsx("use",{href:ue+"#arrow-right"})})]})]}),t.length!==0?i.jsxs(i.Fragment,{children:[i.jsx(lr,{list:t,productTable:r,exerciseTable:o,onDelete:s,date:a}),i.jsx(sr,{list:t,productTable:r,exerciseTable:o,onDelete:s,date:a})]}):i.jsxs(Dr,{children:["Not found ",r?"products":"exercises"]})]})};we.propTypes={to:D.string,marginBottom:D.number,list:D.array,productTable:D.bool,exerciseTable:D.bool,date:D.string};const wt=v.div`
  padding: 40px 20px 80px 20px;
  ${g.tablet} {
    padding: 72px 32px 64px 32px;
  }
  ${g.desktop} {
    padding: 72px 96px 68px 96px;
  }
`,kt=v.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${g.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Ot=v.div`
  width: auto;

  ${g.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${g.desktop} {
    margin-top: 0;
  }
`,Et=v.div`
  width: auto;

  ${g.tablet} {
    width: 704px;
  }

  ${g.desktop} {
    width: 826px;
  }
`,Rt=()=>{const e=ne(gr),n=ne(vr),t=Ye(),r="19-09-2023";return l.useEffect(()=>{t(hr(r))},[t]),i.jsxs(wt,{children:[i.jsx(yr,{text:"Diary"}),i.jsxs(kt,{children:[i.jsxs(Ot,{children:[i.jsx(kr,{}),i.jsx(xr,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:mr})]}),i.jsxs(Et,{children:[i.jsx(we,{marginBottom:40,list:e,productTable:!0,date:r,to:"/products"}),i.jsx(we,{list:n,exerciseTable:!0,date:r,to:"/exercises"})]})," "]})]})};export{Rt as default};
