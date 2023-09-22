import{n as v,m as g,j as i,c as O,N as cr,r as l,Z as K,P as D,s as ce,u as Ye,t as ur,v as dr,f as Ce,w as pr}from"./index-f3b94b2f.js";import{D as oe,a as fr,m as hr}from"./descriptionTextMargin-60a7a099.js";import{T as xr}from"./Title-240f593b.js";import{c as V}from"./capitalizeWord-85339af4.js";import{c as q,j as b}from"./emotion-react.browser.esm-f007fdb7.js";const mr=v.ul`
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
`,yr=()=>i.jsxs(mr,{children:[i.jsx(oe,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),i.jsx(oe,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),i.jsx(oe,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),i.jsx(oe,{icon:"fire",label:"Сalories burned",keyValue:"0"}),i.jsx(oe,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),i.jsx(oe,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),br=v.div`
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
`,gr=v.div`
  display: flex;
  justify-content: space-between;
`,vr=v.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${O.textWhite05};
`,jr=v(cr)`
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
`,wr=v.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${O.textWhite05};
`,Cr=v.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${O.orange};

  transition: stroke 250ms ease-in-out;
`,ke=v.div`
  display: none;
  
  ${g.tablet} {
    display: block;
  }`,pe=v.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,fe=v.svg`
  width: 20px;
  height: 20px;
`,Oe=v.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${g.desktop} {
    margin-left: 16px;
  }
`,se=v.p`
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
`,kr=v.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-right: 8px;
  background: ${e=>e.bgColor};
`,Or={Table:`
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
  `};function xe(){return Ue=xe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},xe.apply(this,arguments)}var Ue=xe,M=Ue,$r=function(e,n){if(e==null)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o},ne=function(e,n){if(e==null)return{};var t,r,o=$r(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o},ie=l.createContext(null),ae=function(e){var n=e.current.querySelector(".tr-header");return Array.from((n==null?void 0:n.querySelectorAll(".th"))||[])},Ke=function(e,n,t,r){return Array.from(e.current.querySelectorAll(t)).forEach(function(o){var a=Array.from(o.querySelectorAll(r)),c=a.length;a.forEach(function(s,u){return n(s,u,c)})})},Er=function(e,n){return Ke(e,n,".tr-header",".th")},Pr=function(e,n){return Ke(e,n,".tr-body",".td")},le=function(e,n){return{index:n,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},G=l.createContext(null),Dr=function(e){var n=e.tableElementRef,t=e.tableMemoryRef,r=e.layout,o=e.children,a=l.useMemo(function(){return{layout:r,tableElementRef:n,tableMemoryRef:t}},[r,n,t]);return b(G.Provider,{value:a},o)},Ie=function(e,n){var t=ae(e).map(le);n.current.dataColumns=t},he=function(e,n,t){var r=n.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;n.current&&e&&r&&(n.current.style.setProperty("--data-table-library_grid-template-columns",e),Ie(n,t))},er=function(e,n){n!=null&&n.onLayoutChange&&e&&n.onLayoutChange(e)},rr=`
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
`),Sr=q(rr,";",""),$e=l.forwardRef(function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"td";return b(o,M({css:Sr,ref:n},e))}),Nr=q(rr," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),Ee=l.forwardRef(function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"th";return b(o,M({css:Nr,ref:n},e))}),Rr={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Pe=function(e){var n=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,t=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:Rr,area:q("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",n,"px;height:100%;&:hover,&.active{background-color:",t,";}","")}},tr=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},De=tr,nr=function(e,n){if(e){if(typeof e=="string")return De(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?De(e,n):void 0}},Br=function(e){if(Array.isArray(e))return e},Lr=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||s.return==null||s.return()}finally{if(o)throw a}}return t}},Fr=nr,zr=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},me=function(e,n){return Br(e)||Lr(e,n)||Fr(e,n)||zr()},ue=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},Ar=tr,Tr=function(e){if(Array.isArray(e))return Ar(e)},Wr=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},_r=nr,Hr=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},ye=function(e){return Tr(e)||Wr(e)||_r(e)||Hr()},be=null,Vr=function(){return be||(be=l.createContext(null))},qr=function(){return l.useContext(be)};function Se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ne(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Se(Object(t),!0).forEach(function(r){ue(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Se(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Mr=function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.tableElementRef,o=t.tableMemoryRef,a=t.layout,c=l.useRef(null),s=l.useRef(null),u=l.useRef(""),p=l.useRef(null),f=l.useRef(!1),h=l.useCallback(function(x){var w;x.preventDefault(),u.current=r.current.style.getPropertyValue("--data-table-library_grid-template-columns"),f.current=!0,p.current=c.current.offsetWidth-x.pageX,(w=c.current)===null||w===void 0||w.querySelector(".resizer-area").classList.add("active")},[r]),m=l.useCallback(function(x){if(f.current){x.preventDefault();var w=p.current+x.pageX,j=function($,y,E,N){var R=ae(E).map(le).filter(function(d){return!d.isHide}),L=R.findIndex(function(d){return d.index===$}),S=(R=R.map(function(d,C){return Ne(Ne({},d),{},{index:C})})).reduce(function(d,C,B){return d||(B>L&&C.width!==0?C:d)},null),Z=R.reduce(function(d,C){return d+C.width},0),_=R[L].minWidth,J=N>_&&N!==0?N:_,X=J-R[L].width,P=R.map(function(d,C){if(S&&L===C)return S.width-X>_?J:d.width;if((S==null?void 0:S.index)===C){var B=d.width-X;return B>_?B:d.width}return d.width}),I=Z-P.reduce(function(d,C){return d+C},0);P[L]=P[L]+I;var Y=!1,ee=R.slice(0).reverse().map(function(d,C){var B=P.slice(0).reverse()[C],Q=B/Z*100;return d.isStiff||y!=null&&y.horizontalScroll?"".concat(B,"px"):Y?"minmax(0, ".concat(Q,"%)"):(Y=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),F=function(d,C){if(ye(Array.from(d.classList)).includes("pin-left")){var B=P.reduce(function(U,H,re){return re>=C?U:U+H},0);d.style.left="".concat(B,"px")}if(ye(Array.from(d.classList)).includes("pin-right")){var Q=P.reduceRight(function(U,H,re){return re<=C?U:U+H},0);d.style.right="".concat(Q,"px")}};return Er(E,F),Pr(E,F),ee}(e,a,r,w);he(j,r,o)}},[e,a,r,o]),k=l.useCallback(function(){var x;f.current=!1;var w=r.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(u.current!==w){er(w,a);var j=ae(r).map(le);o.current.dataColumns=j}(x=c.current)===null||x===void 0||x.querySelector(".resizer-area").classList.remove("active")},[a,r,o]);return l.useEffect(function(){var x=s.current;return x&&(x.addEventListener("mousedown",h),document.addEventListener("mousemove",m),document.addEventListener("mouseup",k)),function(){x&&(x.removeEventListener("mousedown",h),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",k))}},[n,h,m,k]),{cellRef:c,resizeRef:s}},Xr=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Re(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Be(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Re(Object(t),!0).forEach(function(r){ue(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Re(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Le=function(e,n){return n.find(function(t){return t.index===e})},z=function(e){var n=e.index,t=e.className,r=e.hide,o=e.pinLeft,a=e.pinRight,c=e.stiff,s=e.isFooter,u=e.includePreviousColSpan,p=e.previousColSpans,f=e.gridColumnStart,h=e.gridColumnEnd,m=e.resize,k=e.role,x=k===void 0?"columnheader":k,w=e.children,j=e.style,$=ne(e,Xr),y=l.useContext(ie);(function(J,X){var P=l.useContext(G);if(!P)throw new Error("No Layout Context.");var I=P.layout,Y=P.tableElementRef,ee=P.tableMemoryRef;l.useLayoutEffect(function(){var F=ee.current.dataColumns,d=ae(Y).map(le),C=Le(J,F),B=(C==null?void 0:C.isHide)===!!X;if(F!=null&&F.length&&!B){var Q=d.filter(function(H){return!H.isHide}).map(function(H){if(H.isStiff||I!=null&&I.horizontalScroll){var re=Le(H.index,F);return re?"".concat(re.width||2*re.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");he(Q,Y,ee),er(Q,I);var U=ae(Y).map(le);ee.current.dataColumns=U}},[J,X,I,Y,ee])})(n,r);var E=Mr(n,r),N=E.cellRef,R=E.resizeRef,L=f&&h,S=L?h-f-1:0,Z=u?f+p:f,_=u?h+p:h;return b(l.Fragment,null,b(Ee,M({role:x,"data-table-library_th":"","data-hide":!!r,"data-resize-min-width":typeof m=="boolean"||(m==null?void 0:m.minWidth)==null?75:m.minWidth,style:Be(Be({},L?{gridColumnStart:Z,gridColumnEnd:_}:{}),j),css:q(y==null?void 0:y.BaseCell," ",s?y==null?void 0:y.FooterCell:y==null?void 0:y.HeaderCell,";",""),className:K("th",t,{stiff:c,hide:r,resize:m,"pin-left":o,"pin-right":a}),ref:N},$),b("div",null,w),m&&!r&&b("div",{className:"resizer-area",ref:R,css:Pe(m).area},b("span",{className:"resizer-handle",css:Pe(m).handle}))),Array.from({length:S},function(){return b(Ee,{className:K("th","hide","colspan")})}))},ge=null,Gr=function(){return ge||(ge=l.createContext(null))},Zr=function(){return l.useContext(ge)},Jr=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},Yr=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function Fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ze(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Fe(Object(t),!0).forEach(function(r){ue(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Fe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var A=function(e){e.index;var n=e.className,t=e.hide,r=e.pinLeft,o=e.pinRight,a=e.stiff,c=e.includePreviousColSpan,s=e.previousColSpans,u=e.gridColumnStart,p=e.gridColumnEnd,f=e.onClick,h=e.children,m=e.style,k=ne(e,Yr),x=l.useContext(ie),w=u&&p,j=w?p-u-1:0,$=c?u+s:u,y=c?p+s:p;return b(l.Fragment,null,b($e,M({role:"gridcell","data-table-library_td":"",style:ze(ze({},w?{gridColumnStart:$,gridColumnEnd:y}:{}),m),css:q(x==null?void 0:x.BaseCell," ",x==null?void 0:x.Cell,";",""),className:K("td",n,{stiff:a,hide:t,"pin-left":r,"pin-right":o}),onClick:f},k),b("div",null,h)),Array.from({length:j},function(){return b($e,{className:K("td","hide","colspan")})}))},ve=null,Qr=function(){return ve||(ve=l.createContext(null))},Ur=function(){return l.useContext(ve)},je=null,Kr=function(){return je||(je=l.createContext(null))},Ir=function(){var e=l.useState(!1),n=me(e,2),t=n[0],r=n[1];return l.useEffect(function(){var o=function(c){c.shiftKey?r(!0):t&&r(!1)},a=function(){t&&r(!1)};return document&&(document.addEventListener("keydown",o),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",o),document.removeEventListener("keyup",a))}},[t]),t},et=function(){return{select:Ur(),tree:Zr(),sort:qr(),pagination:l.useContext(je)}},rt=function(e){var n=e.sort,t=e.pagination,r=e.tree;return function(o){var a=ye(o);return a=n?n.modifier(a):a,a=t?t.modifier(a):a,a=r?r.modifier(a):a}},tt=function(e){return e.reduce(function(n,t){return Object.keys(t).forEach(function(r){n[r]||(n[r]=""),n[r]=`
        `.concat(n[r],`
        `).concat(t[r],`
      `)}),n},{})},nt=function(e){return Array.isArray(e)?tt(e):e},it=["children"],Ae=function(e){var n=e.children,t=ne(e,it),r=l.useContext(ie),o=l.useContext(G);if(!o)throw new Error("No Layout Context.");var a=o.layout,c=a!=null&&a.isDiv?"div":"tbody";return b(c,M({css:q(r==null?void 0:r.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},t),n)},ot=["isFooter","children"],Te=function(e){var n=e.isFooter,t=e.children,r=ne(e,ot),o=l.useContext(ie),a=l.useContext(G);if(!a)throw new Error("No Layout Context.");var c=a.layout,s=c!=null&&c.isDiv?"div":n?"tfoot":"thead";return b(s,M({role:"rowgroup",className:K({tfoot:n,thead:!n}),css:q(`
  display: contents;
`," ",n?o==null?void 0:o.Footer:o==null?void 0:o.Header,";","")},r),l.Children.map(t,function(u){if(l.isValidElement(u))return l.cloneElement(u)}))},We=null,at=function(){return We||(We=l.createContext(null))},lt=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],st={Table:`
    height: 100%;
  `},_e=l.forwardRef(function(e,n){var t=e.data,r=e.theme,o=e.layout,a=e.sort,c=e.pagination,s=e.select,u=e.tree,p=e.onInit,f=p===void 0?function(){}:p,h=e.className,m=h===void 0?"table":h,k=e.children,x=ne(e,lt),w=function(F){var d=l.useRef(null);return F&&(d=F),d}(n),j=function(F){var d=l.useRef(null);return d.current||(d.current={onlyOnce:!1,dataColumns:[]}),d}(),$=rt({sort:a,pagination:c,tree:u,select:s})(t.nodes),y=function(F,d){var C=l.useState(!1),B=me(C,2),Q=B[0],U=B[1];return[Q,function(H){H&&(Q||(U(!0),d.current=H,F(H)))}]}(f,w),E=me(y,2),N=E[0],R=E[1],L=Ir(),S=[];o!=null&&o.fixedHeader&&(S=S.concat(st)),r&&(S=S.concat(r));var Z,_=nt(S),J=o!=null&&o.isDiv?"div":"table",X=at(),P=Vr(),I=Qr(),Y=Gr(),ee=Kr();return b(J,M({role:"grid","data-table-library_table":"",css:q((Z={isShiftDown:L},`
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
  `))," ",_==null?void 0:_.Table,";",""),className:K(m),ref:R},x),N&&b(X.Provider,{value:t},b(ie.Provider,{value:_},b(P.Provider,{value:a},b(I.Provider,{value:s},b(Y.Provider,{value:u},b(ee.Provider,{value:c},b(Dr,{layout:o,tableElementRef:w,tableMemoryRef:j},k&&k($)))))))))}),ir=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},ct=l.forwardRef(function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"tr";return b(o,M({css:q(ir(),";",""),ref:n},e))}),ut=l.forwardRef(function(e,n){var t=l.useContext(G);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"tr";return b(o,M({css:q(ir(),";",""),ref:n},e))}),or=function(e){return e.type?e.type===l.Fragment:e===l.Fragment},ar=function(e,n){return l.Children.toArray(e).reduce(function(t,r,o){return l.isValidElement(r)?o>=n?t:r.props.gridColumnStart||r.props.gridColumnEnd?t+r.props.gridColumnEnd-r.props.gridColumnStart-1:t:t},0)},dt=["className","role","isFooter","children"];function He(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Ve(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?He(Object(t),!0).forEach(function(r){ue(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):He(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var qe=function(e){var n,t=e.className,r=e.role,o=r===void 0?"rowheader":r,a=e.isFooter,c=e.children,s=ne(e,dt),u=l.useContext(ie),p=l.useRef(null);return n=l.useContext(G),l.useLayoutEffect(function(){var f;if(!n)throw new Error("No Layout Context.");var h=n.layout,m=n.tableElementRef,k=n.tableMemoryRef,x=ae(m).map(le);if((f=k.current)===null||f===void 0||!f.onlyOnce)if(k.current.onlyOnce=!0,h!=null&&h.resizedLayout){var w=h==null?void 0:h.resizedLayout;he(w,m,k)}else if(h!=null&&h.custom)Ie(m,k);else{var j=x.filter(function($){return!$.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");he(j,m,k)}},[n]),b(ut,M({role:o,"data-table-library_tr-header":"",css:q(u==null?void 0:u.BaseRow," ",a?u==null?void 0:u.FooterRow:u==null?void 0:u.HeaderRow,";",""),className:K("tr",t,{"tr-footer":a,"tr-header":!a}),ref:p},s),l.Children.toArray(c).filter(Boolean).map(function(f,h){if(l.isValidElement(f)){var m={};return or(f)||(m=Ve(Ve({},m),{},{index:h,previousColSpans:ar(c,h)})),l.cloneElement(f,m)}}))},pt=function(){},ft=function(e,n,t,r){(function(o){var a=o.onSingleClick,c=o.onDoubleClick,s=o.ref,u=l.useRef(0);l.useEffect(function(){var p=s.current,f=function(h){c&&(u.current===0&&a(h),u.current+=1,setTimeout(function(){u.current===2&&c(h),u.current=0},300))};return p==null||p.addEventListener("click",f),function(){p==null||p.removeEventListener("click",f)}})})({onSingleClick:n?function(o){return n(r,o)}:pt,onDoubleClick:t?function(o){return t(r,o)}:null,ref:e})},ht=["item","className","disabled","onClick","onDoubleClick","children"];function Me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function de(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Me(Object(t),!0).forEach(function(r){ue(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Me(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Xe=function(e){var n=e.item,t=e.className,r=e.disabled,o=e.onClick,a=e.onDoubleClick,c=e.children,s=ne(e,ht),u=function(j,$){return Object.values(j).filter(Boolean).filter(function(y){return y==null?void 0:y.hasOwnProperty("_getRowProps")}).map(function(y){return y._getRowProps($,j)})}(et(),e),p=l.useContext(ie),f=function(j,$){var y=j.reduce(function(E,N){var R=N.theme,L=N.className,S=N.onClick,Z=`
        `.concat(E.themeByFeature,`
        `).concat(R,`
      `),_=K(E.classNamesByFeature,L),J=E.clickable||!!S;return de(de({},E),{},{themeByFeature:Z,classNamesByFeature:_,clickable:J,onClickByFeature:function(X,P){S(X,P),E.onClickByFeature(X,P)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!$,onClickByFeature:function(E,N){$&&Jr(N)&&$(E,N)}});return{themeByFeature:y.themeByFeature,classNamesByFeature:y.classNamesByFeature,clickable:y.clickable,onClickByFeature:y.onClickByFeature}}(u,o),h=f.themeByFeature,m=f.classNamesByFeature,k=f.clickable,x=f.onClickByFeature,w=l.useRef(null);return ft(w,x,a,n),b(ct,M({role:"row","data-table-library_tr-body":"",onClick:r||a?function(){}:function(j){return x(n,j)},css:q(h," ",p==null?void 0:p.BaseRow," ",p==null?void 0:p.Row,";",""),className:K("tr","tr-body",m,t,{disabled:r,clickable:k||!!a}),ref:w},s),l.Children.toArray(c).filter(Boolean).map(function(j,$){if(l.isValidElement(j)){var y={};return or(j)||(y=de(de({},y),{},{index:$,previousColSpans:ar(c,$)})),l.cloneElement(j,y)}}))};const xt={...Qe,...Or},lr=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:o})=>{const a={nodes:e};return i.jsxs(i.Fragment,{children:[n&&i.jsxs(ke,{children:[i.jsxs(Oe,{children:[i.jsx(se,{children:"Title"}),i.jsx(se,{children:"Category"}),i.jsx(se,{children:"Calories"}),i.jsx(se,{children:"Weight"}),i.jsx(se,{children:"Recommend"})]}),i.jsx(_e,{data:a,theme:Qe,layout:{custom:!0},children:c=>i.jsxs(i.Fragment,{children:[i.jsx(Te,{children:i.jsxs(qe,{children:[i.jsx(z,{children:"Title"}),i.jsx(z,{children:"Category"}),i.jsx(z,{children:"Calories"}),i.jsx(z,{children:"Weight"}),i.jsx(z,{children:"Recommend"}),i.jsx(z,{children:""})]})}),i.jsx(Ae,{children:c.map(s=>i.jsxs(Xe,{item:s,children:[i.jsx(A,{children:V(s.title)}),i.jsx(A,{children:V(s.category)}),i.jsx(A,{children:s.calories}),i.jsx(A,{children:s.amount}),i.jsxs(A,{children:[i.jsx(kr,{bgColor:s.recommend?"#419B09":"#E9101D"}),s.recommend?"Yes":"No"]}),i.jsx(A,{children:i.jsx(pe,{onClick:()=>r({date:o,id:s._id}),children:i.jsx(fe,{children:i.jsx("use",{href:ce+"#icon-trash"})})})})]},s._id))})]})})]}),t&&i.jsxs(ke,{children:[i.jsxs(Oe,{children:[i.jsx(te,{children:"Body Part"}),i.jsx(te,{children:"Equipment"}),i.jsx(te,{children:"Name"}),i.jsx(te,{children:"Target"}),i.jsx(te,{}),i.jsx(te,{children:"Time"}),i.jsx(te,{children:""})]}),i.jsx(_e,{data:a,theme:xt,layout:{custom:!0},children:c=>i.jsxs(i.Fragment,{children:[i.jsx(Te,{children:i.jsxs(qe,{children:[i.jsx(z,{children:"Body Part"}),i.jsx(z,{children:"Equipment"}),i.jsx(z,{children:"Name"}),i.jsx(z,{children:"Target"}),i.jsx(z,{children:"Burned Cal..."}),i.jsx(z,{children:"Time"}),i.jsx(z,{children:""})]})}),i.jsx(Ae,{children:c.map(s=>i.jsxs(Xe,{item:s,children:[i.jsx(A,{children:V(s.bodyPart)}),i.jsx(A,{children:V(s.equipment)}),i.jsx(A,{children:V(s.name)}),i.jsx(A,{children:V(s.target)}),i.jsx(A,{children:s.burnedCalories}),i.jsx(A,{children:s.time}),i.jsx(A,{children:i.jsx(pe,{onClick:()=>r({date:o,id:s._id}),children:i.jsx(fe,{children:i.jsx("use",{href:ce+"#icon-trash"})})})})]},s._id))})]})})]})]})};lr.propTypes={list:D.array,productTable:D.bool,exerciseTable:D.bool,onDelete:D.func,date:D.string};const Ge=v.div`
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
`,T=v.div`
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
`,sr=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:o})=>i.jsxs(i.Fragment,{children:[n&&i.jsx(Ge,{children:e.map(a=>i.jsxs(Ze,{children:[i.jsxs(T,{children:["Title",i.jsx(W,{children:V(a.title)})]}),i.jsxs(T,{children:["Category",i.jsx(W,{children:V(a.category)})]}),i.jsxs(Je,{children:[i.jsxs(T,{children:["Calories",i.jsx(W,{children:a.calories})]}),i.jsxs(T,{children:["Weight ",i.jsx(W,{children:a.amount})]}),i.jsxs(T,{children:["Recommend",i.jsx(W,{before:!0,colorBefore:a.recommend,children:a.recommend?"Yes":"No"})]}),i.jsx(T,{children:i.jsx(W,{children:i.jsx(pe,{onClick:()=>r({date:o,id:a._id}),children:i.jsx(fe,{children:i.jsx("use",{href:ce+"#icon-trash"})})})})})]})]},a._id))}),t&&i.jsx(Ge,{children:e.map(a=>i.jsxs(Ze,{children:[i.jsxs(T,{children:["Body Part",i.jsx(W,{children:V(a.bodyPart)})]}),i.jsxs(T,{children:["Equipment",i.jsx(W,{children:V(a.equipment)})]}),i.jsxs(T,{children:["Name",i.jsx(W,{children:V(a.name)})]}),i.jsxs(Je,{children:[i.jsxs(T,{children:["Target ",i.jsx(W,{children:V(a.target)})]}),i.jsxs(T,{children:["Burned Calor..",i.jsx(W,{children:a.burnedCalories})]}),i.jsxs(T,{children:["Time ",i.jsx(W,{children:a.time})]}),i.jsxs(T,{children:[" ",i.jsx(W,{children:i.jsx(pe,{onClick:()=>r({date:o,id:a._id}),children:i.jsx(fe,{children:i.jsx("use",{href:ce+"#icon-trash"})})})})]})]})]},a._id))})]});sr.propTypes={list:D.array,productTable:D.bool,exerciseTable:D.bool,onDelete:D.func,date:D.string};const we=({to:e,marginBottom:n,list:t,productTable:r,exerciseTable:o,date:a})=>{const c=Ye(),s=({date:u,id:p})=>{r&&c(ur({productId:p,date:u})),o&&c(dr({exerciseId:p,date:u}))};return i.jsxs(br,{marginBottom:n,children:[i.jsxs(gr,{children:[i.jsx(vr,{children:r?"Products":"Exercises"}),i.jsxs(jr,{to:e,children:["Add ",r?"product":"exercise",i.jsx(Cr,{children:i.jsx("use",{href:ce+"#arrow-right"})})]})]}),t.length!==0?i.jsxs(i.Fragment,{children:[i.jsx(lr,{list:t,productTable:r,exerciseTable:o,onDelete:s,date:a}),i.jsx(sr,{list:t,productTable:r,exerciseTable:o,onDelete:s,date:a})]}):i.jsxs(wr,{children:["Not found ",r?"products":"exercises"]})]})};we.propTypes={to:D.string,marginBottom:D.number,list:D.array,productTable:D.bool,exerciseTable:D.bool,date:D.string};const mt=v.div`
  padding: 40px 20px 80px 20px;
  ${g.tablet} {
    padding: 72px 32px 64px 32px;
  }
  ${g.desktop} {
    padding: 72px 96px 68px 96px;
  }
`,yt=v.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${g.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,bt=v.div`
  width: auto;

  ${g.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${g.desktop} {
    margin-top: 0;
  }
`,gt=v.div`
  width: auto;

  ${g.tablet} {
    width: 704px;
  }

  ${g.desktop} {
    width: 826px;
  }
`,vt=e=>e.diary.products,jt=e=>e.diary.exercises,Et=()=>{const e=Ce(vt),n=Ce(jt),t=Ye(),r="19-09-2023";return l.useEffect(()=>{t(pr(r))},[t]),i.jsxs(mt,{children:[i.jsx(xr,{text:"Diary"}),i.jsxs(yt,{children:[i.jsxs(bt,{children:[i.jsx(yr,{}),i.jsx(fr,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:hr})]}),i.jsxs(gt,{children:[i.jsx(we,{marginBottom:40,list:e,productTable:!0,date:r,to:"/products"}),i.jsx(we,{list:n,exerciseTable:!0,date:r,to:"/exercises"})]})," "]})]})};export{Et as default};
