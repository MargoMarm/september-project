import{n as v,m as g,j as i,c as O,N as sr,r as l,Z as U,P as D,s as se,u as Je,k as cr,o as ur,d as we,p as dr}from"./index-674a463e.js";import{D as ie,a as pr,m as fr}from"./descriptionTextMargin-08352884.js";import{T as hr}from"./Title-e96e0078.js";import{c as V,j as b}from"./emotion-react.browser.esm-5f177834.js";const xr=v.ul`
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
`,mr=()=>i.jsxs(xr,{children:[i.jsx(ie,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),i.jsx(ie,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),i.jsx(ie,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),i.jsx(ie,{icon:"fire",label:"Сalories burned",keyValue:"0"}),i.jsx(ie,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),i.jsx(ie,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),yr=v.div`
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
`,br=v.div`
  display: flex;
  justify-content: space-between;
`,gr=v.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${O.textWhite05};
`,vr=v(sr)`
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
`,jr=v.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${O.textWhite05};
`,wr=v.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${O.orange};

  transition: stroke 250ms ease-in-out;
`,Ce=v.div`
  display: none;
  
  ${g.tablet} {
    display: block;
  }`,de=v.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,pe=v.svg`
  width: 20px;
  height: 20px;
`,ke=v.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${g.desktop} {
    margin-left: 16px;
  }
`,le=v.p`
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
`,re=v.p`
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
`,Cr=v.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-right: 8px;
  background: ${e=>e.bgColor};
`,kr={Table:`
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
  `},Ye={Table:`
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
  `};function he(){return Qe=he=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},he.apply(this,arguments)}var Qe=he,q=Qe,Or=function(e,n){if(e==null)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o},te=function(e,n){if(e==null)return{};var t,r,o=Or(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o},ne=l.createContext(null),oe=function(e){var n=e.current.querySelector(".tr-header");return Array.from((n==null?void 0:n.querySelectorAll(".th"))||[])},Ue=function(e,n,t,r){return Array.from(e.current.querySelectorAll(t)).forEach(function(o){var a=Array.from(o.querySelectorAll(r)),c=a.length;a.forEach(function(s,u){return n(s,u,c)})})},$r=function(e,n){return Ue(e,n,".tr-header",".th")},Er=function(e,n){return Ue(e,n,".tr-body",".td")},ae=function(e,n){return{index:n,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},X=l.createContext(null),Pr=function(e){var n=e.tableElementRef,t=e.tableMemoryRef,r=e.layout,o=e.children,a=l.useMemo(function(){return{layout:r,tableElementRef:n,tableMemoryRef:t}},[r,n,t]);return b(X.Provider,{value:a},o)},Ke=function(e,n){var t=oe(e).map(ae);n.current.dataColumns=t},fe=function(e,n,t){var r=n.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;n.current&&e&&r&&(n.current.style.setProperty("--data-table-library_grid-template-columns",e),Ke(n,t))},Ie=function(e,n){n!=null&&n.onLayoutChange&&e&&n.onLayoutChange(e)},er=`
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
`),Dr=V(er,";",""),Oe=l.forwardRef(function(e,n){var t=l.useContext(X);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"td";return b(o,q({css:Dr,ref:n},e))}),Sr=V(er," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),$e=l.forwardRef(function(e,n){var t=l.useContext(X);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"th";return b(o,q({css:Sr,ref:n},e))}),Nr={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Ee=function(e){var n=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,t=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:Nr,area:V("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",n,"px;height:100%;&:hover,&.active{background-color:",t,";}","")}},rr=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},Pe=rr,tr=function(e,n){if(e){if(typeof e=="string")return Pe(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Pe(e,n):void 0}},Rr=function(e){if(Array.isArray(e))return e},Br=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(u){o=!0,a=u}finally{try{r||s.return==null||s.return()}finally{if(o)throw a}}return t}},Lr=tr,Fr=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},xe=function(e,n){return Rr(e)||Br(e,n)||Lr(e,n)||Fr()},ce=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},zr=rr,Ar=function(e){if(Array.isArray(e))return zr(e)},Tr=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},Wr=tr,_r=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},me=function(e){return Ar(e)||Tr(e)||Wr(e)||_r()},ye=null,Hr=function(){return ye||(ye=l.createContext(null))},Vr=function(){return l.useContext(ye)};function De(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Se(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?De(Object(t),!0).forEach(function(r){ce(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var qr=function(e,n){var t=l.useContext(X);if(!t)throw new Error("No Layout Context.");var r=t.tableElementRef,o=t.tableMemoryRef,a=t.layout,c=l.useRef(null),s=l.useRef(null),u=l.useRef(""),p=l.useRef(null),f=l.useRef(!1),h=l.useCallback(function(x){var w;x.preventDefault(),u.current=r.current.style.getPropertyValue("--data-table-library_grid-template-columns"),f.current=!0,p.current=c.current.offsetWidth-x.pageX,(w=c.current)===null||w===void 0||w.querySelector(".resizer-area").classList.add("active")},[r]),m=l.useCallback(function(x){if(f.current){x.preventDefault();var w=p.current+x.pageX,j=function($,y,E,N){var R=oe(E).map(ae).filter(function(d){return!d.isHide}),L=R.findIndex(function(d){return d.index===$}),S=(R=R.map(function(d,C){return Se(Se({},d),{},{index:C})})).reduce(function(d,C,B){return d||(B>L&&C.width!==0?C:d)},null),G=R.reduce(function(d,C){return d+C.width},0),_=R[L].minWidth,Z=N>_&&N!==0?N:_,M=Z-R[L].width,P=R.map(function(d,C){if(S&&L===C)return S.width-M>_?Z:d.width;if((S==null?void 0:S.index)===C){var B=d.width-M;return B>_?B:d.width}return d.width}),K=G-P.reduce(function(d,C){return d+C},0);P[L]=P[L]+K;var J=!1,I=R.slice(0).reverse().map(function(d,C){var B=P.slice(0).reverse()[C],Y=B/G*100;return d.isStiff||y!=null&&y.horizontalScroll?"".concat(B,"px"):J?"minmax(0, ".concat(Y,"%)"):(J=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),F=function(d,C){if(me(Array.from(d.classList)).includes("pin-left")){var B=P.reduce(function(Q,H,ee){return ee>=C?Q:Q+H},0);d.style.left="".concat(B,"px")}if(me(Array.from(d.classList)).includes("pin-right")){var Y=P.reduceRight(function(Q,H,ee){return ee<=C?Q:Q+H},0);d.style.right="".concat(Y,"px")}};return $r(E,F),Er(E,F),I}(e,a,r,w);fe(j,r,o)}},[e,a,r,o]),k=l.useCallback(function(){var x;f.current=!1;var w=r.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(u.current!==w){Ie(w,a);var j=oe(r).map(ae);o.current.dataColumns=j}(x=c.current)===null||x===void 0||x.querySelector(".resizer-area").classList.remove("active")},[a,r,o]);return l.useEffect(function(){var x=s.current;return x&&(x.addEventListener("mousedown",h),document.addEventListener("mousemove",m),document.addEventListener("mouseup",k)),function(){x&&(x.removeEventListener("mousedown",h),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",k))}},[n,h,m,k]),{cellRef:c,resizeRef:s}},Mr=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Re(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ne(Object(t),!0).forEach(function(r){ce(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ne(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Be=function(e,n){return n.find(function(t){return t.index===e})},z=function(e){var n=e.index,t=e.className,r=e.hide,o=e.pinLeft,a=e.pinRight,c=e.stiff,s=e.isFooter,u=e.includePreviousColSpan,p=e.previousColSpans,f=e.gridColumnStart,h=e.gridColumnEnd,m=e.resize,k=e.role,x=k===void 0?"columnheader":k,w=e.children,j=e.style,$=te(e,Mr),y=l.useContext(ne);(function(Z,M){var P=l.useContext(X);if(!P)throw new Error("No Layout Context.");var K=P.layout,J=P.tableElementRef,I=P.tableMemoryRef;l.useLayoutEffect(function(){var F=I.current.dataColumns,d=oe(J).map(ae),C=Be(Z,F),B=(C==null?void 0:C.isHide)===!!M;if(F!=null&&F.length&&!B){var Y=d.filter(function(H){return!H.isHide}).map(function(H){if(H.isStiff||K!=null&&K.horizontalScroll){var ee=Be(H.index,F);return ee?"".concat(ee.width||2*ee.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");fe(Y,J,I),Ie(Y,K);var Q=oe(J).map(ae);I.current.dataColumns=Q}},[Z,M,K,J,I])})(n,r);var E=qr(n,r),N=E.cellRef,R=E.resizeRef,L=f&&h,S=L?h-f-1:0,G=u?f+p:f,_=u?h+p:h;return b(l.Fragment,null,b($e,q({role:x,"data-table-library_th":"","data-hide":!!r,"data-resize-min-width":typeof m=="boolean"||(m==null?void 0:m.minWidth)==null?75:m.minWidth,style:Re(Re({},L?{gridColumnStart:G,gridColumnEnd:_}:{}),j),css:V(y==null?void 0:y.BaseCell," ",s?y==null?void 0:y.FooterCell:y==null?void 0:y.HeaderCell,";",""),className:U("th",t,{stiff:c,hide:r,resize:m,"pin-left":o,"pin-right":a}),ref:N},$),b("div",null,w),m&&!r&&b("div",{className:"resizer-area",ref:R,css:Ee(m).area},b("span",{className:"resizer-handle",css:Ee(m).handle}))),Array.from({length:S},function(){return b($e,{className:U("th","hide","colspan")})}))},be=null,Xr=function(){return be||(be=l.createContext(null))},Gr=function(){return l.useContext(be)},Zr=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},Jr=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function Le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Fe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Le(Object(t),!0).forEach(function(r){ce(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Le(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var A=function(e){e.index;var n=e.className,t=e.hide,r=e.pinLeft,o=e.pinRight,a=e.stiff,c=e.includePreviousColSpan,s=e.previousColSpans,u=e.gridColumnStart,p=e.gridColumnEnd,f=e.onClick,h=e.children,m=e.style,k=te(e,Jr),x=l.useContext(ne),w=u&&p,j=w?p-u-1:0,$=c?u+s:u,y=c?p+s:p;return b(l.Fragment,null,b(Oe,q({role:"gridcell","data-table-library_td":"",style:Fe(Fe({},w?{gridColumnStart:$,gridColumnEnd:y}:{}),m),css:V(x==null?void 0:x.BaseCell," ",x==null?void 0:x.Cell,";",""),className:U("td",n,{stiff:a,hide:t,"pin-left":r,"pin-right":o}),onClick:f},k),b("div",null,h)),Array.from({length:j},function(){return b(Oe,{className:U("td","hide","colspan")})}))},ge=null,Yr=function(){return ge||(ge=l.createContext(null))},Qr=function(){return l.useContext(ge)},ve=null,Ur=function(){return ve||(ve=l.createContext(null))},Kr=function(){var e=l.useState(!1),n=xe(e,2),t=n[0],r=n[1];return l.useEffect(function(){var o=function(c){c.shiftKey?r(!0):t&&r(!1)},a=function(){t&&r(!1)};return document&&(document.addEventListener("keydown",o),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",o),document.removeEventListener("keyup",a))}},[t]),t},Ir=function(){return{select:Qr(),tree:Gr(),sort:Vr(),pagination:l.useContext(ve)}},et=function(e){var n=e.sort,t=e.pagination,r=e.tree;return function(o){var a=me(o);return a=n?n.modifier(a):a,a=t?t.modifier(a):a,a=r?r.modifier(a):a}},rt=function(e){return e.reduce(function(n,t){return Object.keys(t).forEach(function(r){n[r]||(n[r]=""),n[r]=`
        `.concat(n[r],`
        `).concat(t[r],`
      `)}),n},{})},tt=function(e){return Array.isArray(e)?rt(e):e},nt=["children"],ze=function(e){var n=e.children,t=te(e,nt),r=l.useContext(ne),o=l.useContext(X);if(!o)throw new Error("No Layout Context.");var a=o.layout,c=a!=null&&a.isDiv?"div":"tbody";return b(c,q({css:V(r==null?void 0:r.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},t),n)},it=["isFooter","children"],Ae=function(e){var n=e.isFooter,t=e.children,r=te(e,it),o=l.useContext(ne),a=l.useContext(X);if(!a)throw new Error("No Layout Context.");var c=a.layout,s=c!=null&&c.isDiv?"div":n?"tfoot":"thead";return b(s,q({role:"rowgroup",className:U({tfoot:n,thead:!n}),css:V(`
  display: contents;
`," ",n?o==null?void 0:o.Footer:o==null?void 0:o.Header,";","")},r),l.Children.map(t,function(u){if(l.isValidElement(u))return l.cloneElement(u)}))},Te=null,ot=function(){return Te||(Te=l.createContext(null))},at=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],lt={Table:`
    height: 100%;
  `},We=l.forwardRef(function(e,n){var t=e.data,r=e.theme,o=e.layout,a=e.sort,c=e.pagination,s=e.select,u=e.tree,p=e.onInit,f=p===void 0?function(){}:p,h=e.className,m=h===void 0?"table":h,k=e.children,x=te(e,at),w=function(F){var d=l.useRef(null);return F&&(d=F),d}(n),j=function(F){var d=l.useRef(null);return d.current||(d.current={onlyOnce:!1,dataColumns:[]}),d}(),$=et({sort:a,pagination:c,tree:u,select:s})(t.nodes),y=function(F,d){var C=l.useState(!1),B=xe(C,2),Y=B[0],Q=B[1];return[Y,function(H){H&&(Y||(Q(!0),d.current=H,F(H)))}]}(f,w),E=xe(y,2),N=E[0],R=E[1],L=Kr(),S=[];o!=null&&o.fixedHeader&&(S=S.concat(lt)),r&&(S=S.concat(r));var G,_=tt(S),Z=o!=null&&o.isDiv?"div":"table",M=ot(),P=Hr(),K=Yr(),J=Xr(),I=Ur();return b(Z,q({role:"grid","data-table-library_table":"",css:V((G={isShiftDown:L},`
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

  `.concat(G.isShiftDown?`
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    `:"",`
  `))," ",_==null?void 0:_.Table,";",""),className:U(m),ref:R},x),N&&b(M.Provider,{value:t},b(ne.Provider,{value:_},b(P.Provider,{value:a},b(K.Provider,{value:s},b(J.Provider,{value:u},b(I.Provider,{value:c},b(Pr,{layout:o,tableElementRef:w,tableMemoryRef:j},k&&k($)))))))))}),nr=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},st=l.forwardRef(function(e,n){var t=l.useContext(X);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"tr";return b(o,q({css:V(nr(),";",""),ref:n},e))}),ct=l.forwardRef(function(e,n){var t=l.useContext(X);if(!t)throw new Error("No Layout Context.");var r=t.layout,o=r!=null&&r.isDiv?"div":"tr";return b(o,q({css:V(nr(),";",""),ref:n},e))}),ir=function(e){return e.type?e.type===l.Fragment:e===l.Fragment},or=function(e,n){return l.Children.toArray(e).reduce(function(t,r,o){return l.isValidElement(r)?o>=n?t:r.props.gridColumnStart||r.props.gridColumnEnd?t+r.props.gridColumnEnd-r.props.gridColumnStart-1:t:t},0)},ut=["className","role","isFooter","children"];function _e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function He(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_e(Object(t),!0).forEach(function(r){ce(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_e(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ve=function(e){var n,t=e.className,r=e.role,o=r===void 0?"rowheader":r,a=e.isFooter,c=e.children,s=te(e,ut),u=l.useContext(ne),p=l.useRef(null);return n=l.useContext(X),l.useLayoutEffect(function(){var f;if(!n)throw new Error("No Layout Context.");var h=n.layout,m=n.tableElementRef,k=n.tableMemoryRef,x=oe(m).map(ae);if((f=k.current)===null||f===void 0||!f.onlyOnce)if(k.current.onlyOnce=!0,h!=null&&h.resizedLayout){var w=h==null?void 0:h.resizedLayout;fe(w,m,k)}else if(h!=null&&h.custom)Ke(m,k);else{var j=x.filter(function($){return!$.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");fe(j,m,k)}},[n]),b(ct,q({role:o,"data-table-library_tr-header":"",css:V(u==null?void 0:u.BaseRow," ",a?u==null?void 0:u.FooterRow:u==null?void 0:u.HeaderRow,";",""),className:U("tr",t,{"tr-footer":a,"tr-header":!a}),ref:p},s),l.Children.toArray(c).filter(Boolean).map(function(f,h){if(l.isValidElement(f)){var m={};return ir(f)||(m=He(He({},m),{},{index:h,previousColSpans:or(c,h)})),l.cloneElement(f,m)}}))},dt=function(){},pt=function(e,n,t,r){(function(o){var a=o.onSingleClick,c=o.onDoubleClick,s=o.ref,u=l.useRef(0);l.useEffect(function(){var p=s.current,f=function(h){c&&(u.current===0&&a(h),u.current+=1,setTimeout(function(){u.current===2&&c(h),u.current=0},300))};return p==null||p.addEventListener("click",f),function(){p==null||p.removeEventListener("click",f)}})})({onSingleClick:n?function(o){return n(r,o)}:dt,onDoubleClick:t?function(o){return t(r,o)}:null,ref:e})},ft=["item","className","disabled","onClick","onDoubleClick","children"];function qe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ue(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?qe(Object(t),!0).forEach(function(r){ce(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Me=function(e){var n=e.item,t=e.className,r=e.disabled,o=e.onClick,a=e.onDoubleClick,c=e.children,s=te(e,ft),u=function(j,$){return Object.values(j).filter(Boolean).filter(function(y){return y==null?void 0:y.hasOwnProperty("_getRowProps")}).map(function(y){return y._getRowProps($,j)})}(Ir(),e),p=l.useContext(ne),f=function(j,$){var y=j.reduce(function(E,N){var R=N.theme,L=N.className,S=N.onClick,G=`
        `.concat(E.themeByFeature,`
        `).concat(R,`
      `),_=U(E.classNamesByFeature,L),Z=E.clickable||!!S;return ue(ue({},E),{},{themeByFeature:G,classNamesByFeature:_,clickable:Z,onClickByFeature:function(M,P){S(M,P),E.onClickByFeature(M,P)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!$,onClickByFeature:function(E,N){$&&Zr(N)&&$(E,N)}});return{themeByFeature:y.themeByFeature,classNamesByFeature:y.classNamesByFeature,clickable:y.clickable,onClickByFeature:y.onClickByFeature}}(u,o),h=f.themeByFeature,m=f.classNamesByFeature,k=f.clickable,x=f.onClickByFeature,w=l.useRef(null);return pt(w,x,a,n),b(st,q({role:"row","data-table-library_tr-body":"",onClick:r||a?function(){}:function(j){return x(n,j)},css:V(h," ",p==null?void 0:p.BaseRow," ",p==null?void 0:p.Row,";",""),className:U("tr","tr-body",m,t,{disabled:r,clickable:k||!!a}),ref:w},s),l.Children.toArray(c).filter(Boolean).map(function(j,$){if(l.isValidElement(j)){var y={};return ir(j)||(y=ue(ue({},y),{},{index:$,previousColSpans:or(c,$)})),l.cloneElement(j,y)}}))};const ht={...Ye,...kr},ar=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:o})=>{const a={nodes:e};return i.jsxs(i.Fragment,{children:[n&&i.jsxs(Ce,{children:[i.jsxs(ke,{children:[i.jsx(le,{children:"Title"}),i.jsx(le,{children:"Category"}),i.jsx(le,{children:"Calories"}),i.jsx(le,{children:"Weight"}),i.jsx(le,{children:"Recommend"})]}),i.jsx(We,{data:a,theme:Ye,layout:{custom:!0},children:c=>i.jsxs(i.Fragment,{children:[i.jsx(Ae,{children:i.jsxs(Ve,{children:[i.jsx(z,{children:"Title"}),i.jsx(z,{children:"Category"}),i.jsx(z,{children:"Calories"}),i.jsx(z,{children:"Weight"}),i.jsx(z,{children:"Recommend"}),i.jsx(z,{children:""})]})}),i.jsx(ze,{children:c.map(s=>i.jsxs(Me,{item:s,children:[i.jsx(A,{children:s.title}),i.jsx(A,{children:s.category}),i.jsx(A,{children:s.calories}),i.jsx(A,{children:s.amount}),i.jsxs(A,{children:[i.jsx(Cr,{bgColor:s.recommend?"#419B09":"#E9101D"}),s.recommend?"Yes":"No"]}),i.jsx(A,{children:i.jsx(de,{onClick:()=>r({date:o,id:s._id}),children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]},s._id))})]})})]}),t&&i.jsxs(Ce,{children:[i.jsxs(ke,{children:[i.jsx(re,{children:"Body Part"}),i.jsx(re,{children:"Equipment"}),i.jsx(re,{children:"Name"}),i.jsx(re,{children:"Target"}),i.jsx(re,{}),i.jsx(re,{children:"Time"}),i.jsx(re,{children:""})]}),i.jsx(We,{data:a,theme:ht,layout:{custom:!0},children:c=>i.jsxs(i.Fragment,{children:[i.jsx(Ae,{children:i.jsxs(Ve,{children:[i.jsx(z,{children:"Body Part"}),i.jsx(z,{children:"Equipment"}),i.jsx(z,{children:"Name"}),i.jsx(z,{children:"Target"}),i.jsx(z,{children:"Burned Cal..."}),i.jsx(z,{children:"Time"}),i.jsx(z,{children:""})]})}),i.jsx(ze,{children:c.map(s=>i.jsxs(Me,{item:s,children:[i.jsx(A,{children:s.bodyPart}),i.jsx(A,{children:s.equipment}),i.jsx(A,{children:s.name}),i.jsx(A,{children:s.target}),i.jsx(A,{children:s.burnedCalories}),i.jsx(A,{children:s.time}),i.jsx(A,{children:i.jsx(de,{onClick:()=>r({date:o,id:s._id}),children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]},s._id))})]})})]})]})};ar.propTypes={list:D.array,productTable:D.bool,exerciseTable:D.bool,onDelete:D.func,date:D.string};const Xe=v.div`
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
`,Ge=v.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 8px;
  }
`,Ze=v.div`
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
`,lr=({list:e,productTable:n,exerciseTable:t,onDelete:r,date:o})=>i.jsxs(i.Fragment,{children:[n&&i.jsx(Xe,{children:e.map(a=>i.jsxs(Ge,{children:[i.jsxs(T,{children:["Title",i.jsx(W,{children:a.title})]}),i.jsxs(T,{children:["Category",i.jsx(W,{children:a.category})]}),i.jsxs(Ze,{children:[i.jsxs(T,{children:["Calories ",i.jsx(W,{children:a.calories})]}),i.jsxs(T,{children:["Weight ",i.jsx(W,{children:a.amount})]}),i.jsxs(T,{children:["Recommend",i.jsx(W,{before:!0,colorBefore:a.recommend,children:a.recommend?"Yes":"No"})]}),i.jsx(T,{children:i.jsx(W,{children:i.jsx(de,{onClick:()=>r({date:o,id:a._id}),children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})})]})]},a._id))}),t&&i.jsx(Xe,{children:e.map(a=>i.jsxs(Ge,{children:[i.jsxs(T,{children:["Body Part",i.jsx(W,{children:a.bodyPart})]}),i.jsxs(T,{children:["Equipment",i.jsx(W,{children:a.equipment})]}),i.jsxs(T,{children:["Name",i.jsx(W,{children:a.name})]}),i.jsxs(Ze,{children:[i.jsxs(T,{children:["Target ",i.jsx(W,{children:a.burnedCalories})]}),i.jsxs(T,{children:["Burned Calor..",i.jsx(W,{children:a.time})]}),i.jsxs(T,{children:["Time ",i.jsx(W,{children:a.time})]}),i.jsxs(T,{children:[" ",i.jsx(W,{children:i.jsx(de,{onClick:()=>r({date:o,id:a._id}),children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]})]})]},a._id))})]});lr.propTypes={list:D.array,productTable:D.bool,exerciseTable:D.bool,onDelete:D.func,date:D.string};const je=({to:e,marginBottom:n,list:t,productTable:r,exerciseTable:o,date:a})=>{const c=Je(),s=({date:u,id:p})=>{r&&c(cr({productId:p,date:u})),o&&c(ur({exerciseId:p,date:u}))};return i.jsxs(yr,{marginBottom:n,children:[i.jsxs(br,{children:[i.jsx(gr,{children:r?"Products":"Exercises"}),i.jsxs(vr,{to:e,children:["Add ",r?"product":"exercise",i.jsx(wr,{children:i.jsx("use",{href:se+"#arrow-right"})})]})]}),t.length!==0?i.jsxs(i.Fragment,{children:[i.jsx(ar,{list:t,productTable:r,exerciseTable:o,onDelete:s,date:a}),i.jsx(lr,{list:t,productTable:r,exerciseTable:o,onDelete:s,date:a})]}):i.jsxs(jr,{children:["Not found ",r?"products":"exercises"]})]})};je.propTypes={to:D.string,marginBottom:D.number,list:D.array,productTable:D.bool,exerciseTable:D.bool,date:D.string};const xt=v.div`
  padding: 40px 20px 80px 20px;
  ${g.tablet} {
    padding: 72px 32px 64px 32px;
  }
  ${g.desktop} {
    padding: 72px 96px 68px 96px;
  }
`,mt=v.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${g.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,yt=v.div`
  width: auto;

  ${g.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${g.desktop} {
    margin-top: 0;
  }
`,bt=v.div`
  width: auto;

  ${g.tablet} {
    width: 704px;
  }

  ${g.desktop} {
    width: 826px;
  }
`,gt=e=>e.diary.products,vt=e=>e.diary.exercises,Ot=()=>{const e=we(gt),n=we(vt),t=Je(),r="19-09-2023";return l.useEffect(()=>{t(dr(r))},[t]),i.jsxs(xt,{children:[i.jsx(hr,{text:"Diary"}),i.jsxs(mt,{children:[i.jsxs(yt,{children:[i.jsx(mr,{}),i.jsx(pr,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:fr})]}),i.jsxs(bt,{children:[i.jsx(je,{marginBottom:40,list:e,productTable:!0,date:r,to:"/products"}),i.jsx(je,{list:n,exerciseTable:!0,date:r,to:"/exercises"})]})," "]})]})};export{Ot as default};
