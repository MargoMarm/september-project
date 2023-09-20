import{n as C,m as w,j as i,c as E,N as ot,r as l,Z as Q,P as _,s as se}from"./index-a0cb364e.js";import{D as ie,a as at,m as lt}from"./descriptionTextMargin-9512466a.js";import{T as st}from"./Title-fa13282e.js";import{c as H,j as x}from"./emotion-react.browser.esm-a067171a.js";const ct=C.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${w.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${w.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,ut=()=>i.jsxs(ct,{children:[i.jsx(ie,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),i.jsx(ie,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),i.jsx(ie,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),i.jsx(ie,{icon:"fire",label:"Сalories burned",keyValue:"0"}),i.jsx(ie,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),i.jsx(ie,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),dt=C.div`
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
  border: 1px solid ${E.textWhite02};
  background: rgba(239, 237, 232, 0.05);

  ${w.tablet} {
    width: auto;
    height: 234px;
  }

  ${w.desktop} {
    width: auto;
  }
`,pt=C.div`
  display: flex;
  justify-content: space-between;
`,ft=C.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${E.textWhite05};
`,ht=C(ot)`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 1.5;

  color: ${E.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${E.orangeSecondary};

    svg {
      stroke: ${E.orangeSecondary};
    }
  }
`,mt=C.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${E.textWhite05};
`,xt=C.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${E.orange};

  transition: stroke 250ms ease-in-out;
`,de=C.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,pe=C.svg`
  width: 20px;
  height: 20px;
`,we=C.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${w.desktop} {
    margin-left: 16px;
  }
`,le=C.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${E.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 188px;

    ${w.desktop} {
      margin-right: 196px;
    }
  }

  :nth-of-type(2) {
    margin-right: 87px;

    ${w.desktop} {
      margin-right: 125px;
    }
  }

  :nth-of-type(3) {
    margin-right: 54px;

    ${w.desktop} {
      margin-right: 69px;
    }
  }

  :nth-of-type(4) {
    margin-right: 60px;

    ${w.desktop} {
      margin-right: 75px;
    }
  }

  :nth-of-type(5) {
    margin-right: 12px;
  }
`,te=C.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${E.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 45px;

    ${w.desktop} {
      margin-right: 70px;
    }
  }

  :nth-of-type(2) {
    margin-right: 82px;

    ${w.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(3) {
    margin-right: 104px;

    ${w.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(4) {
    margin-right: 58px;

    ${w.desktop} {
      margin-right: 80px;
    }
  }

  :nth-of-type(5)::before {
    content: 'Burned calor...';
    margin-right: 14px;

    ${w.desktop} {
      content: 'Burned Calories';
      margin-right: 15px;
    }
  }
`,gt={Table:`
    --data-table-library_grid-template-columns:  98px 140px 136px 92px 86px 84px 28px;
    height: 136px;

    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${E.textWhite01};
      border-radius: 12px;
    };

    ${w.desktop} {
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
    border: 1px solid ${E.textWhite03};

    :nth-of-type(6) {
      margin-right: 12px;
    }

    :nth-of-type(7) {
      margin-right: 0;
      border: none;
      padding: 0
    }  
  `},Ue={Table:`
    --data-table-library_grid-template-columns:  212px 136px 98px 98px 92px 28px;
    height: 136px; 
    
    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${E.textWhite01};
      border-radius: 12px;
    };

    ${w.desktop} {
      --data-table-library_grid-template-columns:  220px 174px 113px 113px 122px 28px;
      margin-left: 16px;
    }
    `,Body:"",Header:"display: none;",BaseRow:"",Row:`
    font-size: 16px;
    background-color: inherit;
    color: ${E.white};
  `,HeaderRow:`
    background-color: inherit;`,BaseCell:"",HeaderCell:`
    color: ${E.orangeSecondary};
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.5;
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${E.textWhite03};

    :nth-of-type(5) {
      margin-right: 12px;
    }

    :nth-of-type(6) {
      margin-right: 0;
      border: none;
      padding: 0
    }  

    :nth-of-type(5)::before {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 10px;
      background: #419B09;
      margin-right: 8px;
    }
  `};function he(){return Ge=he=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},he.apply(this,arguments)}var Ge=he,V=Ge,yt=function(e,n){if(e==null)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o},re=function(e,n){if(e==null)return{};var r,t,o=yt(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},ne=l.createContext(null),oe=function(e){var n=e.current.querySelector(".tr-header");return Array.from((n==null?void 0:n.querySelectorAll(".th"))||[])},Ze=function(e,n,r,t){return Array.from(e.current.querySelectorAll(r)).forEach(function(o){var a=Array.from(o.querySelectorAll(t)),u=a.length;a.forEach(function(y,c){return n(y,c,u)})})},bt=function(e,n){return Ze(e,n,".tr-header",".th")},vt=function(e,n){return Ze(e,n,".tr-body",".td")},ae=function(e,n){return{index:n,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},X=l.createContext(null),jt=function(e){var n=e.tableElementRef,r=e.tableMemoryRef,t=e.layout,o=e.children,a=l.useMemo(function(){return{layout:t,tableElementRef:n,tableMemoryRef:r}},[t,n,r]);return x(X.Provider,{value:a},o)},Je=function(e,n){var r=oe(e).map(ae);n.current.dataColumns=r},fe=function(e,n,r){var t=n.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;n.current&&e&&t&&(n.current.style.setProperty("--data-table-library_grid-template-columns",e),Je(n,r))},Ye=function(e,n){n!=null&&n.onLayoutChange&&e&&n.onLayoutChange(e)},Qe=`
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
`),wt=H(Qe,";",""),Ce=l.forwardRef(function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.layout,o=t!=null&&t.isDiv?"div":"td";return x(o,V({css:wt,ref:n},e))}),Ct=H(Qe," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),Oe=l.forwardRef(function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.layout,o=t!=null&&t.isDiv?"div":"th";return x(o,V({css:Ct,ref:n},e))}),Ot={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},ke=function(e){var n=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,r=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:Ot,area:H("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",n,"px;height:100%;&:hover,&.active{background-color:",r,";}","")}},Ke=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t},Ee=Ke,Ie=function(e,n){if(e){if(typeof e=="string")return Ee(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ee(e,n):void 0}},kt=function(e){if(Array.isArray(e))return e},Et=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var r=[],t=!0,o=!1,a=void 0;try{for(var u,y=e[Symbol.iterator]();!(t=(u=y.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(c){o=!0,a=c}finally{try{t||y.return==null||y.return()}finally{if(o)throw a}}return r}},$t=Ie,Pt=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},me=function(e,n){return kt(e)||Et(e,n)||$t(e,n)||Pt()},ce=function(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e},St=Ke,Dt=function(e){if(Array.isArray(e))return St(e)},Nt=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},Rt=Ie,Bt=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},xe=function(e){return Dt(e)||Nt(e)||Rt(e)||Bt()},ge=null,zt=function(){return ge||(ge=l.createContext(null))},Ft=function(){return l.useContext(ge)};function $e(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function Pe(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?$e(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$e(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Lt=function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.tableElementRef,o=r.tableMemoryRef,a=r.layout,u=l.useRef(null),y=l.useRef(null),c=l.useRef(""),g=l.useRef(null),d=l.useRef(!1),p=l.useCallback(function(f){var v;f.preventDefault(),c.current=t.current.style.getPropertyValue("--data-table-library_grid-template-columns"),d.current=!0,g.current=u.current.offsetWidth-f.pageX,(v=u.current)===null||v===void 0||v.querySelector(".resizer-area").classList.add("active")},[t]),h=l.useCallback(function(f){if(d.current){f.preventDefault();var v=g.current+f.pageX,b=function(k,m,$,D){var N=oe($).map(ae).filter(function(s){return!s.isHide}),B=N.findIndex(function(s){return s.index===k}),S=(N=N.map(function(s,j){return Pe(Pe({},s),{},{index:j})})).reduce(function(s,j,R){return s||(R>B&&j.width!==0?j:s)},null),U=N.reduce(function(s,j){return s+j.width},0),W=N[B].minWidth,G=D>W&&D!==0?D:W,M=G-N[B].width,P=N.map(function(s,j){if(S&&B===j)return S.width-M>W?G:s.width;if((S==null?void 0:S.index)===j){var R=s.width-M;return R>W?R:s.width}return s.width}),K=U-P.reduce(function(s,j){return s+j},0);P[B]=P[B]+K;var Z=!1,I=N.slice(0).reverse().map(function(s,j){var R=P.slice(0).reverse()[j],J=R/U*100;return s.isStiff||m!=null&&m.horizontalScroll?"".concat(R,"px"):Z?"minmax(0, ".concat(J,"%)"):(Z=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),z=function(s,j){if(xe(Array.from(s.classList)).includes("pin-left")){var R=P.reduce(function(Y,q,ee){return ee>=j?Y:Y+q},0);s.style.left="".concat(R,"px")}if(xe(Array.from(s.classList)).includes("pin-right")){var J=P.reduceRight(function(Y,q,ee){return ee<=j?Y:Y+q},0);s.style.right="".concat(J,"px")}};return bt($,z),vt($,z),I}(e,a,t,v);fe(b,t,o)}},[e,a,t,o]),O=l.useCallback(function(){var f;d.current=!1;var v=t.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(c.current!==v){Ye(v,a);var b=oe(t).map(ae);o.current.dataColumns=b}(f=u.current)===null||f===void 0||f.querySelector(".resizer-area").classList.remove("active")},[a,t,o]);return l.useEffect(function(){var f=y.current;return f&&(f.addEventListener("mousedown",p),document.addEventListener("mousemove",h),document.addEventListener("mouseup",O)),function(){f&&(f.removeEventListener("mousedown",p),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",O))}},[n,p,h,O]),{cellRef:u,resizeRef:y}},At=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Se(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function De(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Se(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ne=function(e,n){return n.find(function(r){return r.index===e})},F=function(e){var n=e.index,r=e.className,t=e.hide,o=e.pinLeft,a=e.pinRight,u=e.stiff,y=e.isFooter,c=e.includePreviousColSpan,g=e.previousColSpans,d=e.gridColumnStart,p=e.gridColumnEnd,h=e.resize,O=e.role,f=O===void 0?"columnheader":O,v=e.children,b=e.style,k=re(e,At),m=l.useContext(ne);(function(G,M){var P=l.useContext(X);if(!P)throw new Error("No Layout Context.");var K=P.layout,Z=P.tableElementRef,I=P.tableMemoryRef;l.useLayoutEffect(function(){var z=I.current.dataColumns,s=oe(Z).map(ae),j=Ne(G,z),R=(j==null?void 0:j.isHide)===!!M;if(z!=null&&z.length&&!R){var J=s.filter(function(q){return!q.isHide}).map(function(q){if(q.isStiff||K!=null&&K.horizontalScroll){var ee=Ne(q.index,z);return ee?"".concat(ee.width||2*ee.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");fe(J,Z,I),Ye(J,K);var Y=oe(Z).map(ae);I.current.dataColumns=Y}},[G,M,K,Z,I])})(n,t);var $=Lt(n,t),D=$.cellRef,N=$.resizeRef,B=d&&p,S=B?p-d-1:0,U=c?d+g:d,W=c?p+g:p;return x(l.Fragment,null,x(Oe,V({role:f,"data-table-library_th":"","data-hide":!!t,"data-resize-min-width":typeof h=="boolean"||(h==null?void 0:h.minWidth)==null?75:h.minWidth,style:De(De({},B?{gridColumnStart:U,gridColumnEnd:W}:{}),b),css:H(m==null?void 0:m.BaseCell," ",y?m==null?void 0:m.FooterCell:m==null?void 0:m.HeaderCell,";",""),className:Q("th",r,{stiff:u,hide:t,resize:h,"pin-left":o,"pin-right":a}),ref:D},k),x("div",null,v),h&&!t&&x("div",{className:"resizer-area",ref:N,css:ke(h).area},x("span",{className:"resizer-handle",css:ke(h).handle}))),Array.from({length:S},function(){return x(Oe,{className:Q("th","hide","colspan")})}))},ye=null,Tt=function(){return ye||(ye=l.createContext(null))},Wt=function(){return l.useContext(ye)},qt=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},_t=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function Re(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function Be(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Re(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var L=function(e){e.index;var n=e.className,r=e.hide,t=e.pinLeft,o=e.pinRight,a=e.stiff,u=e.includePreviousColSpan,y=e.previousColSpans,c=e.gridColumnStart,g=e.gridColumnEnd,d=e.onClick,p=e.children,h=e.style,O=re(e,_t),f=l.useContext(ne),v=c&&g,b=v?g-c-1:0,k=u?c+y:c,m=u?g+y:g;return x(l.Fragment,null,x(Ce,V({role:"gridcell","data-table-library_td":"",style:Be(Be({},v?{gridColumnStart:k,gridColumnEnd:m}:{}),h),css:H(f==null?void 0:f.BaseCell," ",f==null?void 0:f.Cell,";",""),className:Q("td",n,{stiff:a,hide:r,"pin-left":t,"pin-right":o}),onClick:d},O),x("div",null,p)),Array.from({length:b},function(){return x(Ce,{className:Q("td","hide","colspan")})}))},be=null,Ht=function(){return be||(be=l.createContext(null))},Vt=function(){return l.useContext(be)},ve=null,Mt=function(){return ve||(ve=l.createContext(null))},Xt=function(){var e=l.useState(!1),n=me(e,2),r=n[0],t=n[1];return l.useEffect(function(){var o=function(u){u.shiftKey?t(!0):r&&t(!1)},a=function(){r&&t(!1)};return document&&(document.addEventListener("keydown",o),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",o),document.removeEventListener("keyup",a))}},[r]),r},Ut=function(){return{select:Vt(),tree:Wt(),sort:Ft(),pagination:l.useContext(ve)}},Gt=function(e){var n=e.sort,r=e.pagination,t=e.tree;return function(o){var a=xe(o);return a=n?n.modifier(a):a,a=r?r.modifier(a):a,a=t?t.modifier(a):a}},Zt=function(e){return e.reduce(function(n,r){return Object.keys(r).forEach(function(t){n[t]||(n[t]=""),n[t]=`
        `.concat(n[t],`
        `).concat(r[t],`
      `)}),n},{})},Jt=function(e){return Array.isArray(e)?Zt(e):e},Yt=["children"],ze=function(e){var n=e.children,r=re(e,Yt),t=l.useContext(ne),o=l.useContext(X);if(!o)throw new Error("No Layout Context.");var a=o.layout,u=a!=null&&a.isDiv?"div":"tbody";return x(u,V({css:H(t==null?void 0:t.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},r),n)},Qt=["isFooter","children"],Fe=function(e){var n=e.isFooter,r=e.children,t=re(e,Qt),o=l.useContext(ne),a=l.useContext(X);if(!a)throw new Error("No Layout Context.");var u=a.layout,y=u!=null&&u.isDiv?"div":n?"tfoot":"thead";return x(y,V({role:"rowgroup",className:Q({tfoot:n,thead:!n}),css:H(`
  display: contents;
`," ",n?o==null?void 0:o.Footer:o==null?void 0:o.Header,";","")},t),l.Children.map(r,function(c){if(l.isValidElement(c))return l.cloneElement(c)}))},Le=null,Kt=function(){return Le||(Le=l.createContext(null))},It=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],er={Table:`
    height: 100%;
  `},Ae=l.forwardRef(function(e,n){var r=e.data,t=e.theme,o=e.layout,a=e.sort,u=e.pagination,y=e.select,c=e.tree,g=e.onInit,d=g===void 0?function(){}:g,p=e.className,h=p===void 0?"table":p,O=e.children,f=re(e,It),v=function(z){var s=l.useRef(null);return z&&(s=z),s}(n),b=function(z){var s=l.useRef(null);return s.current||(s.current={onlyOnce:!1,dataColumns:[]}),s}(),k=Gt({sort:a,pagination:u,tree:c,select:y})(r.nodes),m=function(z,s){var j=l.useState(!1),R=me(j,2),J=R[0],Y=R[1];return[J,function(q){q&&(J||(Y(!0),s.current=q,z(q)))}]}(d,v),$=me(m,2),D=$[0],N=$[1],B=Xt(),S=[];o!=null&&o.fixedHeader&&(S=S.concat(er)),t&&(S=S.concat(t));var U,W=Jt(S),G=o!=null&&o.isDiv?"div":"table",M=Kt(),P=zt(),K=Ht(),Z=Tt(),I=Mt();return x(G,V({role:"grid","data-table-library_table":"",css:H((U={isShiftDown:B},`
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

  `.concat(U.isShiftDown?`
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    `:"",`
  `))," ",W==null?void 0:W.Table,";",""),className:Q(h),ref:N},f),D&&x(M.Provider,{value:r},x(ne.Provider,{value:W},x(P.Provider,{value:a},x(K.Provider,{value:y},x(Z.Provider,{value:c},x(I.Provider,{value:u},x(jt,{layout:o,tableElementRef:v,tableMemoryRef:b},O&&O(k)))))))))}),et=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},tr=l.forwardRef(function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.layout,o=t!=null&&t.isDiv?"div":"tr";return x(o,V({css:H(et(),";",""),ref:n},e))}),rr=l.forwardRef(function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.layout,o=t!=null&&t.isDiv?"div":"tr";return x(o,V({css:H(et(),";",""),ref:n},e))}),tt=function(e){return e.type?e.type===l.Fragment:e===l.Fragment},rt=function(e,n){return l.Children.toArray(e).reduce(function(r,t,o){return l.isValidElement(t)?o>=n?r:t.props.gridColumnStart||t.props.gridColumnEnd?r+t.props.gridColumnEnd-t.props.gridColumnStart-1:r:r},0)},nr=["className","role","isFooter","children"];function Te(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function We(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Te(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var qe=function(e){var n,r=e.className,t=e.role,o=t===void 0?"rowheader":t,a=e.isFooter,u=e.children,y=re(e,nr),c=l.useContext(ne),g=l.useRef(null);return n=l.useContext(X),l.useLayoutEffect(function(){var d;if(!n)throw new Error("No Layout Context.");var p=n.layout,h=n.tableElementRef,O=n.tableMemoryRef,f=oe(h).map(ae);if((d=O.current)===null||d===void 0||!d.onlyOnce)if(O.current.onlyOnce=!0,p!=null&&p.resizedLayout){var v=p==null?void 0:p.resizedLayout;fe(v,h,O)}else if(p!=null&&p.custom)Je(h,O);else{var b=f.filter(function(k){return!k.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");fe(b,h,O)}},[n]),x(rr,V({role:o,"data-table-library_tr-header":"",css:H(c==null?void 0:c.BaseRow," ",a?c==null?void 0:c.FooterRow:c==null?void 0:c.HeaderRow,";",""),className:Q("tr",r,{"tr-footer":a,"tr-header":!a}),ref:g},y),l.Children.toArray(u).filter(Boolean).map(function(d,p){if(l.isValidElement(d)){var h={};return tt(d)||(h=We(We({},h),{},{index:p,previousColSpans:rt(u,p)})),l.cloneElement(d,h)}}))},ir=function(){},or=function(e,n,r,t){(function(o){var a=o.onSingleClick,u=o.onDoubleClick,y=o.ref,c=l.useRef(0);l.useEffect(function(){var g=y.current,d=function(p){u&&(c.current===0&&a(p),c.current+=1,setTimeout(function(){c.current===2&&u(p),c.current=0},300))};return g==null||g.addEventListener("click",d),function(){g==null||g.removeEventListener("click",d)}})})({onSingleClick:n?function(o){return n(t,o)}:ir,onDoubleClick:r?function(o){return r(t,o)}:null,ref:e})},ar=["item","className","disabled","onClick","onDoubleClick","children"];function _e(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function ue(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?_e(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var He=function(e){var n=e.item,r=e.className,t=e.disabled,o=e.onClick,a=e.onDoubleClick,u=e.children,y=re(e,ar),c=function(b,k){return Object.values(b).filter(Boolean).filter(function(m){return m==null?void 0:m.hasOwnProperty("_getRowProps")}).map(function(m){return m._getRowProps(k,b)})}(Ut(),e),g=l.useContext(ne),d=function(b,k){var m=b.reduce(function($,D){var N=D.theme,B=D.className,S=D.onClick,U=`
        `.concat($.themeByFeature,`
        `).concat(N,`
      `),W=Q($.classNamesByFeature,B),G=$.clickable||!!S;return ue(ue({},$),{},{themeByFeature:U,classNamesByFeature:W,clickable:G,onClickByFeature:function(M,P){S(M,P),$.onClickByFeature(M,P)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!k,onClickByFeature:function($,D){k&&qt(D)&&k($,D)}});return{themeByFeature:m.themeByFeature,classNamesByFeature:m.classNamesByFeature,clickable:m.clickable,onClickByFeature:m.onClickByFeature}}(c,o),p=d.themeByFeature,h=d.classNamesByFeature,O=d.clickable,f=d.onClickByFeature,v=l.useRef(null);return or(v,f,a,n),x(tr,V({role:"row","data-table-library_tr-body":"",onClick:t||a?function(){}:function(b){return f(n,b)},css:H(p," ",g==null?void 0:g.BaseRow," ",g==null?void 0:g.Row,";",""),className:Q("tr","tr-body",h,r,{disabled:t,clickable:O||!!a}),ref:v},y),l.Children.toArray(u).filter(Boolean).map(function(b,k){if(l.isValidElement(b)){var m={};return tt(b)||(m=ue(ue({},m),{},{index:k,previousColSpans:rt(u,k)})),l.cloneElement(b,m)}}))};const lr={...Ue,...gt},nt=({list:e,productTable:n,exerciseTable:r})=>{const t={nodes:e};return i.jsxs(i.Fragment,{children:[n&&i.jsxs(i.Fragment,{children:[i.jsxs(we,{children:[i.jsx(le,{children:"Title"}),i.jsx(le,{children:"Category"}),i.jsx(le,{children:"Calories"}),i.jsx(le,{children:"Weight"}),i.jsx(le,{children:"Recommend"})]}),i.jsx(Ae,{data:t,theme:Ue,layout:{custom:!0},children:o=>i.jsxs(i.Fragment,{children:[i.jsx(Fe,{children:i.jsxs(qe,{children:[i.jsx(F,{children:"Title"}),i.jsx(F,{children:"Category"}),i.jsx(F,{children:"Calories"}),i.jsx(F,{children:"Weight"}),i.jsx(F,{children:"Recommend"}),i.jsx(F,{children:""})]})}),i.jsx(ze,{children:o.map(a=>i.jsxs(He,{item:a,children:[i.jsx(L,{children:a.title}),i.jsx(L,{children:a.category}),i.jsx(L,{children:a.calories}),i.jsx(L,{children:a.weight}),i.jsx(L,{children:a.groupBloodNotAllowed?"Yes":"No"}),i.jsx(L,{children:i.jsx(de,{children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]},a._id.$oid))})]})})]}),r&&i.jsxs(i.Fragment,{children:[i.jsxs(we,{children:[i.jsx(te,{children:"Body Part"}),i.jsx(te,{children:"Equipment"}),i.jsx(te,{children:"Name"}),i.jsx(te,{children:"Target"}),i.jsx(te,{}),i.jsx(te,{children:"Time"}),i.jsx(te,{children:""})]}),i.jsx(Ae,{data:t,theme:lr,layout:{custom:!0},children:o=>i.jsxs(i.Fragment,{children:[i.jsx(Fe,{children:i.jsxs(qe,{children:[i.jsx(F,{children:"Body Part"}),i.jsx(F,{children:"Equipment"}),i.jsx(F,{children:"Name"}),i.jsx(F,{children:"Target"}),i.jsx(F,{children:"Burned Cal..."}),i.jsx(F,{children:"Time"}),i.jsx(F,{children:""})]})}),i.jsx(ze,{children:o.map(a=>i.jsxs(He,{item:a,children:[i.jsx(L,{children:a.bodyPart}),i.jsx(L,{children:a.equipment}),i.jsx(L,{children:a.name}),i.jsx(L,{children:a.target}),i.jsx(L,{children:a.burnedCalories}),i.jsx(L,{children:a.time}),i.jsx(L,{children:i.jsx(de,{children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]},a.name))})]})})]})]})};nt.propTypes={list:_.array,productTable:_.bool,exerciseTable:_.bool};const Ve=C.div`
  overflow: auto;
  margin-top: 22px;
  height: 254px;
`,Me=C.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 0;
  }
`,Xe=C.div`
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
  

`,A=C.div`
  font-size: 12px;
  line-height: 1.5;

  color: ${E.orange};
`,T=C.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 10px 0 10px 14px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${E.textWhite03};

  color: ${E.white};

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
`,it=({list:e,productTable:n,exerciseTable:r})=>i.jsxs(i.Fragment,{children:[n&&i.jsx(Ve,{children:e.map(t=>i.jsxs(Me,{children:[i.jsxs(A,{children:["Title",i.jsx(T,{children:t.title})]}),i.jsxs(A,{children:["Category",i.jsx(T,{children:t.category})]}),i.jsxs(Xe,{children:[i.jsxs(A,{children:["Calories ",i.jsx(T,{children:t.calories})]}),i.jsxs(A,{children:["Weight ",i.jsx(T,{children:t.weight})]}),i.jsxs(A,{children:["Recommend ",i.jsx(T,{before:!0,children:"YES"})]}),i.jsxs(A,{children:[" ",i.jsx(T,{children:i.jsx(de,{children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]})]})]},t._id.$oid))}),r&&i.jsx(Ve,{children:e.map(t=>i.jsxs(Me,{children:[i.jsxs(A,{children:["Body Part",i.jsx(T,{children:t.bodyPart})]}),i.jsxs(A,{children:["Equipment",i.jsx(T,{children:t.equipment})]}),i.jsxs(A,{children:["Name",i.jsx(T,{children:t.name})]}),i.jsxs(Xe,{children:[i.jsxs(A,{children:["Target ",i.jsx(T,{children:t.burnedCalories})]}),i.jsxs(A,{children:["Burned Calor..",i.jsx(T,{children:t.time})]}),i.jsxs(A,{children:["Time ",i.jsx(T,{children:t.time})]}),i.jsxs(A,{children:[" ",i.jsx(T,{children:i.jsx(de,{children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]})]})]},t.name))})]});it.propTypes={list:_.array,productTable:_.bool,exerciseTable:_.bool};const je=({to:e,marginBottom:n,list:r,productTable:t,exerciseTable:o,windowWidth:a})=>i.jsxs(dt,{marginBottom:n,children:[i.jsxs(pt,{children:[i.jsx(ft,{children:t?"Products":"Exercises"}),i.jsxs(ht,{to:e,children:["Add ",t?"product":"exercise",i.jsx(xt,{children:i.jsx("use",{href:se+"#arrow-right"})})]})]}),r.length!==0?i.jsxs(i.Fragment,{children:[a>=768&&i.jsx(nt,{list:r,productTable:t,exerciseTable:o}),a<768&&i.jsx(it,{list:r,productTable:t,exerciseTable:o})]}):i.jsxs(mt,{children:["Not found ",t?"products":"exercises"]})]});je.propTypes={to:_.string,marginBottom:_.number,list:_.array,productTable:_.bool,exerciseTable:_.bool,windowWidth:_.number};const sr=C.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${w.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,cr=C.div`
  width: auto;

  ${w.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${w.desktop} {
    margin-top: 0;
  }
`,ur=C.div`
  width: auto;

  ${w.tablet} {
    width: 704px;
  }

  ${w.desktop} {
    width: 826px;
  }
`,dr={top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}},pr=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],fr=[{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif",name:"3/4 sit-up",target:"abs",burnedCalories:220,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif",name:"45° side bend",target:"abs",burnedCalories:323,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0003.gif",name:"air bike",target:"abs",burnedCalories:312,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0006.gif",name:"alternate heel touchers",target:"abs",burnedCalories:116,time:3},{bodyPart:"back",equipment:"cable",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0007.gif",name:"alternate lateral pulldown",target:"lats",burnedCalories:70,time:3},{bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3},{bodyPart:"waist",equipment:"assisted",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0010.gif",name:"assisted hanging knee raise with throw down",target:"abs",burnedCalories:216,time:3}],yr=()=>{const[e,n]=l.useState(window.innerWidth);l.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[]);const r=()=>{n(window.innerWidth)};return i.jsxs(i.Fragment,{children:[i.jsx(st,{text:"Diary",margin:dr}),i.jsxs(sr,{children:[i.jsxs(cr,{children:[i.jsx(ut,{}),i.jsx(at,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:lt})]}),i.jsxs(ur,{children:[i.jsx(je,{marginBottom:40,list:pr,productTable:!0,windowWidth:e,to:"/products"}),i.jsx(je,{list:fr,exerciseTable:!0,windowWidth:e,to:"/exercises"})]})," "]})]})};export{yr as default};
