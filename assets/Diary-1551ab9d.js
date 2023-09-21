import{n as C,m as b,j as i,c as $,N as at,r as l,Z as Q,P as H,s as se}from"./index-e8b491c1.js";import{D as ie,a as lt,m as st}from"./descriptionTextMargin-972edc1c.js";import{T as ct}from"./Title-143605be.js";import{c as _,j as x}from"./emotion-react.browser.esm-30ca4eac.js";const ut=C.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${b.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${b.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,dt=()=>i.jsxs(ut,{children:[i.jsx(ie,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),i.jsx(ie,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),i.jsx(ie,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),i.jsx(ie,{icon:"fire",label:"Сalories burned",keyValue:"0"}),i.jsx(ie,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),i.jsx(ie,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),pt=C.div`
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
  border: 1px solid ${$.textWhite02};
  background: rgba(239, 237, 232, 0.05);

  ${b.tablet} {
    width: auto;
    height: 234px;
  }

  ${b.desktop} {
    width: auto;
  }
`,ft=C.div`
  display: flex;
  justify-content: space-between;
`,ht=C.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${$.textWhite05};
`,mt=C(at)`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 1.5;

  color: ${$.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${$.orangeSecondary};

    svg {
      stroke: ${$.orangeSecondary};
    }
  }
`,xt=C.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${$.textWhite05};
`,yt=C.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${$.orange};

  transition: stroke 250ms ease-in-out;
`,we=C.div`
  display: none;
  
  ${b.tablet} {
    display: block;
  }`,de=C.button`
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
`,Ce=C.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${b.desktop} {
    margin-left: 16px;
  }
`,le=C.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${$.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 188px;

    ${b.desktop} {
      margin-right: 196px;
    }
  }

  :nth-of-type(2) {
    margin-right: 87px;

    ${b.desktop} {
      margin-right: 125px;
    }
  }

  :nth-of-type(3) {
    margin-right: 54px;

    ${b.desktop} {
      margin-right: 69px;
    }
  }

  :nth-of-type(4) {
    margin-right: 60px;

    ${b.desktop} {
      margin-right: 75px;
    }
  }

  :nth-of-type(5) {
    margin-right: 12px;
  }
`,te=C.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${$.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 45px;

    ${b.desktop} {
      margin-right: 70px;
    }
  }

  :nth-of-type(2) {
    margin-right: 82px;

    ${b.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(3) {
    margin-right: 104px;

    ${b.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(4) {
    margin-right: 58px;

    ${b.desktop} {
      margin-right: 80px;
    }
  }

  :nth-of-type(5)::before {
    content: 'Burned calor...';
    margin-right: 14px;

    ${b.desktop} {
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
      background-color: ${$.textWhite01};
      border-radius: 12px;
    };

    ${b.desktop} {
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
    border: 1px solid ${$.textWhite03};

    :nth-of-type(6) {
      margin-right: 12px;
    }

    :nth-of-type(7) {
      margin-right: 0;
      border: none;
      padding: 0
    }  
  `},Ge={Table:`
    --data-table-library_grid-template-columns:  212px 136px 98px 98px 92px 28px;
    height: 136px; 
    
    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${$.textWhite01};
      border-radius: 12px;
    };

    ${b.desktop} {
      --data-table-library_grid-template-columns:  220px 174px 113px 113px 122px 28px;
      margin-left: 16px;
    }
    `,Body:"",Header:"display: none;",BaseRow:"",Row:`
    font-size: 16px;
    background-color: inherit;
    color: ${$.white};
  `,HeaderRow:`
    background-color: inherit;`,BaseCell:"",HeaderCell:`
    color: ${$.orangeSecondary};
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.5;
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${$.textWhite03};

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
  `};function he(){return Ze=he=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},he.apply(this,arguments)}var Ze=he,V=Ze,bt=function(e,n){if(e==null)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o},re=function(e,n){if(e==null)return{};var r,t,o=bt(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},ne=l.createContext(null),oe=function(e){var n=e.current.querySelector(".tr-header");return Array.from((n==null?void 0:n.querySelectorAll(".th"))||[])},Je=function(e,n,r,t){return Array.from(e.current.querySelectorAll(r)).forEach(function(o){var a=Array.from(o.querySelectorAll(t)),u=a.length;a.forEach(function(g,c){return n(g,c,u)})})},vt=function(e,n){return Je(e,n,".tr-header",".th")},jt=function(e,n){return Je(e,n,".tr-body",".td")},ae=function(e,n){return{index:n,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},X=l.createContext(null),wt=function(e){var n=e.tableElementRef,r=e.tableMemoryRef,t=e.layout,o=e.children,a=l.useMemo(function(){return{layout:t,tableElementRef:n,tableMemoryRef:r}},[t,n,r]);return x(X.Provider,{value:a},o)},Ye=function(e,n){var r=oe(e).map(ae);n.current.dataColumns=r},fe=function(e,n,r){var t=n.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;n.current&&e&&t&&(n.current.style.setProperty("--data-table-library_grid-template-columns",e),Ye(n,r))},Qe=function(e,n){n!=null&&n.onLayoutChange&&e&&n.onLayoutChange(e)},Ke=`
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
`),Ct=_(Ke,";",""),Oe=l.forwardRef(function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.layout,o=t!=null&&t.isDiv?"div":"td";return x(o,V({css:Ct,ref:n},e))}),Ot=_(Ke," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),ke=l.forwardRef(function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.layout,o=t!=null&&t.isDiv?"div":"th";return x(o,V({css:Ot,ref:n},e))}),kt={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},$e=function(e){var n=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,r=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:kt,area:_("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",n,"px;height:100%;&:hover,&.active{background-color:",r,";}","")}},Ie=function(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t},Ee=Ie,et=function(e,n){if(e){if(typeof e=="string")return Ee(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ee(e,n):void 0}},$t=function(e){if(Array.isArray(e))return e},Et=function(e,n){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var r=[],t=!0,o=!1,a=void 0;try{for(var u,g=e[Symbol.iterator]();!(t=(u=g.next()).done)&&(r.push(u.value),!n||r.length!==n);t=!0);}catch(c){o=!0,a=c}finally{try{t||g.return==null||g.return()}finally{if(o)throw a}}return r}},Pt=et,St=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},me=function(e,n){return $t(e)||Et(e,n)||Pt(e,n)||St()},ce=function(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e},Dt=Ie,Nt=function(e){if(Array.isArray(e))return Dt(e)},Rt=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},Bt=et,zt=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},xe=function(e){return Nt(e)||Rt(e)||Bt(e)||zt()},ye=null,Ft=function(){return ye||(ye=l.createContext(null))},Lt=function(){return l.useContext(ye)};function Pe(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function Se(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Pe(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var At=function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.tableElementRef,o=r.tableMemoryRef,a=r.layout,u=l.useRef(null),g=l.useRef(null),c=l.useRef(""),y=l.useRef(null),d=l.useRef(!1),p=l.useCallback(function(f){var j;f.preventDefault(),c.current=t.current.style.getPropertyValue("--data-table-library_grid-template-columns"),d.current=!0,y.current=u.current.offsetWidth-f.pageX,(j=u.current)===null||j===void 0||j.querySelector(".resizer-area").classList.add("active")},[t]),h=l.useCallback(function(f){if(d.current){f.preventDefault();var j=y.current+f.pageX,v=function(k,m,E,D){var N=oe(E).map(ae).filter(function(s){return!s.isHide}),B=N.findIndex(function(s){return s.index===k}),S=(N=N.map(function(s,w){return Se(Se({},s),{},{index:w})})).reduce(function(s,w,R){return s||(R>B&&w.width!==0?w:s)},null),U=N.reduce(function(s,w){return s+w.width},0),W=N[B].minWidth,G=D>W&&D!==0?D:W,M=G-N[B].width,P=N.map(function(s,w){if(S&&B===w)return S.width-M>W?G:s.width;if((S==null?void 0:S.index)===w){var R=s.width-M;return R>W?R:s.width}return s.width}),K=U-P.reduce(function(s,w){return s+w},0);P[B]=P[B]+K;var Z=!1,I=N.slice(0).reverse().map(function(s,w){var R=P.slice(0).reverse()[w],J=R/U*100;return s.isStiff||m!=null&&m.horizontalScroll?"".concat(R,"px"):Z?"minmax(0, ".concat(J,"%)"):(Z=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),z=function(s,w){if(xe(Array.from(s.classList)).includes("pin-left")){var R=P.reduce(function(Y,q,ee){return ee>=w?Y:Y+q},0);s.style.left="".concat(R,"px")}if(xe(Array.from(s.classList)).includes("pin-right")){var J=P.reduceRight(function(Y,q,ee){return ee<=w?Y:Y+q},0);s.style.right="".concat(J,"px")}};return vt(E,z),jt(E,z),I}(e,a,t,j);fe(v,t,o)}},[e,a,t,o]),O=l.useCallback(function(){var f;d.current=!1;var j=t.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(c.current!==j){Qe(j,a);var v=oe(t).map(ae);o.current.dataColumns=v}(f=u.current)===null||f===void 0||f.querySelector(".resizer-area").classList.remove("active")},[a,t,o]);return l.useEffect(function(){var f=g.current;return f&&(f.addEventListener("mousedown",p),document.addEventListener("mousemove",h),document.addEventListener("mouseup",O)),function(){f&&(f.removeEventListener("mousedown",p),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",O))}},[n,p,h,O]),{cellRef:u,resizeRef:g}},Tt=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function De(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function Ne(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?De(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Re=function(e,n){return n.find(function(r){return r.index===e})},F=function(e){var n=e.index,r=e.className,t=e.hide,o=e.pinLeft,a=e.pinRight,u=e.stiff,g=e.isFooter,c=e.includePreviousColSpan,y=e.previousColSpans,d=e.gridColumnStart,p=e.gridColumnEnd,h=e.resize,O=e.role,f=O===void 0?"columnheader":O,j=e.children,v=e.style,k=re(e,Tt),m=l.useContext(ne);(function(G,M){var P=l.useContext(X);if(!P)throw new Error("No Layout Context.");var K=P.layout,Z=P.tableElementRef,I=P.tableMemoryRef;l.useLayoutEffect(function(){var z=I.current.dataColumns,s=oe(Z).map(ae),w=Re(G,z),R=(w==null?void 0:w.isHide)===!!M;if(z!=null&&z.length&&!R){var J=s.filter(function(q){return!q.isHide}).map(function(q){if(q.isStiff||K!=null&&K.horizontalScroll){var ee=Re(q.index,z);return ee?"".concat(ee.width||2*ee.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");fe(J,Z,I),Qe(J,K);var Y=oe(Z).map(ae);I.current.dataColumns=Y}},[G,M,K,Z,I])})(n,t);var E=At(n,t),D=E.cellRef,N=E.resizeRef,B=d&&p,S=B?p-d-1:0,U=c?d+y:d,W=c?p+y:p;return x(l.Fragment,null,x(ke,V({role:f,"data-table-library_th":"","data-hide":!!t,"data-resize-min-width":typeof h=="boolean"||(h==null?void 0:h.minWidth)==null?75:h.minWidth,style:Ne(Ne({},B?{gridColumnStart:U,gridColumnEnd:W}:{}),v),css:_(m==null?void 0:m.BaseCell," ",g?m==null?void 0:m.FooterCell:m==null?void 0:m.HeaderCell,";",""),className:Q("th",r,{stiff:u,hide:t,resize:h,"pin-left":o,"pin-right":a}),ref:D},k),x("div",null,j),h&&!t&&x("div",{className:"resizer-area",ref:N,css:$e(h).area},x("span",{className:"resizer-handle",css:$e(h).handle}))),Array.from({length:S},function(){return x(ke,{className:Q("th","hide","colspan")})}))},ge=null,Wt=function(){return ge||(ge=l.createContext(null))},qt=function(){return l.useContext(ge)},_t=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},Ht=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function Be(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function ze(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Be(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var L=function(e){e.index;var n=e.className,r=e.hide,t=e.pinLeft,o=e.pinRight,a=e.stiff,u=e.includePreviousColSpan,g=e.previousColSpans,c=e.gridColumnStart,y=e.gridColumnEnd,d=e.onClick,p=e.children,h=e.style,O=re(e,Ht),f=l.useContext(ne),j=c&&y,v=j?y-c-1:0,k=u?c+g:c,m=u?y+g:y;return x(l.Fragment,null,x(Oe,V({role:"gridcell","data-table-library_td":"",style:ze(ze({},j?{gridColumnStart:k,gridColumnEnd:m}:{}),h),css:_(f==null?void 0:f.BaseCell," ",f==null?void 0:f.Cell,";",""),className:Q("td",n,{stiff:a,hide:r,"pin-left":t,"pin-right":o}),onClick:d},O),x("div",null,p)),Array.from({length:v},function(){return x(Oe,{className:Q("td","hide","colspan")})}))},be=null,Vt=function(){return be||(be=l.createContext(null))},Mt=function(){return l.useContext(be)},ve=null,Xt=function(){return ve||(ve=l.createContext(null))},Ut=function(){var e=l.useState(!1),n=me(e,2),r=n[0],t=n[1];return l.useEffect(function(){var o=function(u){u.shiftKey?t(!0):r&&t(!1)},a=function(){r&&t(!1)};return document&&(document.addEventListener("keydown",o),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",o),document.removeEventListener("keyup",a))}},[r]),r},Gt=function(){return{select:Mt(),tree:qt(),sort:Lt(),pagination:l.useContext(ve)}},Zt=function(e){var n=e.sort,r=e.pagination,t=e.tree;return function(o){var a=xe(o);return a=n?n.modifier(a):a,a=r?r.modifier(a):a,a=t?t.modifier(a):a}},Jt=function(e){return e.reduce(function(n,r){return Object.keys(r).forEach(function(t){n[t]||(n[t]=""),n[t]=`
        `.concat(n[t],`
        `).concat(r[t],`
      `)}),n},{})},Yt=function(e){return Array.isArray(e)?Jt(e):e},Qt=["children"],Fe=function(e){var n=e.children,r=re(e,Qt),t=l.useContext(ne),o=l.useContext(X);if(!o)throw new Error("No Layout Context.");var a=o.layout,u=a!=null&&a.isDiv?"div":"tbody";return x(u,V({css:_(t==null?void 0:t.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},r),n)},Kt=["isFooter","children"],Le=function(e){var n=e.isFooter,r=e.children,t=re(e,Kt),o=l.useContext(ne),a=l.useContext(X);if(!a)throw new Error("No Layout Context.");var u=a.layout,g=u!=null&&u.isDiv?"div":n?"tfoot":"thead";return x(g,V({role:"rowgroup",className:Q({tfoot:n,thead:!n}),css:_(`
  display: contents;
`," ",n?o==null?void 0:o.Footer:o==null?void 0:o.Header,";","")},t),l.Children.map(r,function(c){if(l.isValidElement(c))return l.cloneElement(c)}))},Ae=null,It=function(){return Ae||(Ae=l.createContext(null))},er=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],tr={Table:`
    height: 100%;
  `},Te=l.forwardRef(function(e,n){var r=e.data,t=e.theme,o=e.layout,a=e.sort,u=e.pagination,g=e.select,c=e.tree,y=e.onInit,d=y===void 0?function(){}:y,p=e.className,h=p===void 0?"table":p,O=e.children,f=re(e,er),j=function(z){var s=l.useRef(null);return z&&(s=z),s}(n),v=function(z){var s=l.useRef(null);return s.current||(s.current={onlyOnce:!1,dataColumns:[]}),s}(),k=Zt({sort:a,pagination:u,tree:c,select:g})(r.nodes),m=function(z,s){var w=l.useState(!1),R=me(w,2),J=R[0],Y=R[1];return[J,function(q){q&&(J||(Y(!0),s.current=q,z(q)))}]}(d,j),E=me(m,2),D=E[0],N=E[1],B=Ut(),S=[];o!=null&&o.fixedHeader&&(S=S.concat(tr)),t&&(S=S.concat(t));var U,W=Yt(S),G=o!=null&&o.isDiv?"div":"table",M=It(),P=Ft(),K=Vt(),Z=Wt(),I=Xt();return x(G,V({role:"grid","data-table-library_table":"",css:_((U={isShiftDown:B},`
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
  `))," ",W==null?void 0:W.Table,";",""),className:Q(h),ref:N},f),D&&x(M.Provider,{value:r},x(ne.Provider,{value:W},x(P.Provider,{value:a},x(K.Provider,{value:g},x(Z.Provider,{value:c},x(I.Provider,{value:u},x(wt,{layout:o,tableElementRef:j,tableMemoryRef:v},O&&O(k)))))))))}),tt=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},rr=l.forwardRef(function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.layout,o=t!=null&&t.isDiv?"div":"tr";return x(o,V({css:_(tt(),";",""),ref:n},e))}),nr=l.forwardRef(function(e,n){var r=l.useContext(X);if(!r)throw new Error("No Layout Context.");var t=r.layout,o=t!=null&&t.isDiv?"div":"tr";return x(o,V({css:_(tt(),";",""),ref:n},e))}),rt=function(e){return e.type?e.type===l.Fragment:e===l.Fragment},nt=function(e,n){return l.Children.toArray(e).reduce(function(r,t,o){return l.isValidElement(t)?o>=n?r:t.props.gridColumnStart||t.props.gridColumnEnd?r+t.props.gridColumnEnd-t.props.gridColumnStart-1:r:r},0)},ir=["className","role","isFooter","children"];function We(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function qe(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?We(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):We(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var _e=function(e){var n,r=e.className,t=e.role,o=t===void 0?"rowheader":t,a=e.isFooter,u=e.children,g=re(e,ir),c=l.useContext(ne),y=l.useRef(null);return n=l.useContext(X),l.useLayoutEffect(function(){var d;if(!n)throw new Error("No Layout Context.");var p=n.layout,h=n.tableElementRef,O=n.tableMemoryRef,f=oe(h).map(ae);if((d=O.current)===null||d===void 0||!d.onlyOnce)if(O.current.onlyOnce=!0,p!=null&&p.resizedLayout){var j=p==null?void 0:p.resizedLayout;fe(j,h,O)}else if(p!=null&&p.custom)Ye(h,O);else{var v=f.filter(function(k){return!k.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");fe(v,h,O)}},[n]),x(nr,V({role:o,"data-table-library_tr-header":"",css:_(c==null?void 0:c.BaseRow," ",a?c==null?void 0:c.FooterRow:c==null?void 0:c.HeaderRow,";",""),className:Q("tr",r,{"tr-footer":a,"tr-header":!a}),ref:y},g),l.Children.toArray(u).filter(Boolean).map(function(d,p){if(l.isValidElement(d)){var h={};return rt(d)||(h=qe(qe({},h),{},{index:p,previousColSpans:nt(u,p)})),l.cloneElement(d,h)}}))},or=function(){},ar=function(e,n,r,t){(function(o){var a=o.onSingleClick,u=o.onDoubleClick,g=o.ref,c=l.useRef(0);l.useEffect(function(){var y=g.current,d=function(p){u&&(c.current===0&&a(p),c.current+=1,setTimeout(function(){c.current===2&&u(p),c.current=0},300))};return y==null||y.addEventListener("click",d),function(){y==null||y.removeEventListener("click",d)}})})({onSingleClick:n?function(o){return n(t,o)}:or,onDoubleClick:r?function(o){return r(t,o)}:null,ref:e})},lr=["item","className","disabled","onClick","onDoubleClick","children"];function He(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function ue(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?He(Object(r),!0).forEach(function(t){ce(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Ve=function(e){var n=e.item,r=e.className,t=e.disabled,o=e.onClick,a=e.onDoubleClick,u=e.children,g=re(e,lr),c=function(v,k){return Object.values(v).filter(Boolean).filter(function(m){return m==null?void 0:m.hasOwnProperty("_getRowProps")}).map(function(m){return m._getRowProps(k,v)})}(Gt(),e),y=l.useContext(ne),d=function(v,k){var m=v.reduce(function(E,D){var N=D.theme,B=D.className,S=D.onClick,U=`
        `.concat(E.themeByFeature,`
        `).concat(N,`
      `),W=Q(E.classNamesByFeature,B),G=E.clickable||!!S;return ue(ue({},E),{},{themeByFeature:U,classNamesByFeature:W,clickable:G,onClickByFeature:function(M,P){S(M,P),E.onClickByFeature(M,P)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!k,onClickByFeature:function(E,D){k&&_t(D)&&k(E,D)}});return{themeByFeature:m.themeByFeature,classNamesByFeature:m.classNamesByFeature,clickable:m.clickable,onClickByFeature:m.onClickByFeature}}(c,o),p=d.themeByFeature,h=d.classNamesByFeature,O=d.clickable,f=d.onClickByFeature,j=l.useRef(null);return ar(j,f,a,n),x(rr,V({role:"row","data-table-library_tr-body":"",onClick:t||a?function(){}:function(v){return f(n,v)},css:_(p," ",y==null?void 0:y.BaseRow," ",y==null?void 0:y.Row,";",""),className:Q("tr","tr-body",h,r,{disabled:t,clickable:O||!!a}),ref:j},g),l.Children.toArray(u).filter(Boolean).map(function(v,k){if(l.isValidElement(v)){var m={};return rt(v)||(m=ue(ue({},m),{},{index:k,previousColSpans:nt(u,k)})),l.cloneElement(v,m)}}))};const sr={...Ge,...gt},it=({list:e,productTable:n,exerciseTable:r})=>{const t={nodes:e};return i.jsxs(i.Fragment,{children:[n&&i.jsxs(we,{children:[i.jsxs(Ce,{children:[i.jsx(le,{children:"Title"}),i.jsx(le,{children:"Category"}),i.jsx(le,{children:"Calories"}),i.jsx(le,{children:"Weight"}),i.jsx(le,{children:"Recommend"})]}),i.jsx(Te,{data:t,theme:Ge,layout:{custom:!0},children:o=>i.jsxs(i.Fragment,{children:[i.jsx(Le,{children:i.jsxs(_e,{children:[i.jsx(F,{children:"Title"}),i.jsx(F,{children:"Category"}),i.jsx(F,{children:"Calories"}),i.jsx(F,{children:"Weight"}),i.jsx(F,{children:"Recommend"}),i.jsx(F,{children:""})]})}),i.jsx(Fe,{children:o.map(a=>i.jsxs(Ve,{item:a,children:[i.jsx(L,{children:a.title}),i.jsx(L,{children:a.category}),i.jsx(L,{children:a.calories}),i.jsx(L,{children:a.weight}),i.jsx(L,{children:a.groupBloodNotAllowed?"Yes":"No"}),i.jsx(L,{children:i.jsx(de,{children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]},a._id.$oid))})]})})]}),r&&i.jsxs(we,{children:[i.jsxs(Ce,{children:[i.jsx(te,{children:"Body Part"}),i.jsx(te,{children:"Equipment"}),i.jsx(te,{children:"Name"}),i.jsx(te,{children:"Target"}),i.jsx(te,{}),i.jsx(te,{children:"Time"}),i.jsx(te,{children:""})]}),i.jsx(Te,{data:t,theme:sr,layout:{custom:!0},children:o=>i.jsxs(i.Fragment,{children:[i.jsx(Le,{children:i.jsxs(_e,{children:[i.jsx(F,{children:"Body Part"}),i.jsx(F,{children:"Equipment"}),i.jsx(F,{children:"Name"}),i.jsx(F,{children:"Target"}),i.jsx(F,{children:"Burned Cal..."}),i.jsx(F,{children:"Time"}),i.jsx(F,{children:""})]})}),i.jsx(Fe,{children:o.map(a=>i.jsxs(Ve,{item:a,children:[i.jsx(L,{children:a.bodyPart}),i.jsx(L,{children:a.equipment}),i.jsx(L,{children:a.name}),i.jsx(L,{children:a.target}),i.jsx(L,{children:a.burnedCalories}),i.jsx(L,{children:a.time}),i.jsx(L,{children:i.jsx(de,{children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]},a.name))})]})})]})]})};it.propTypes={list:H.array,productTable:H.bool,exerciseTable:H.bool};const Me=C.div`
  overflow: auto;
  margin-top: 22px;
  height: 254px;

  ${b.tablet} {
    display: none;
  }
`,Xe=C.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 0;
  }
`,Ue=C.div`
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

  color: ${$.orange};
`,T=C.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 10px 0 10px 14px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${$.textWhite03};

  color: ${$.white};

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
`,ot=({list:e,productTable:n,exerciseTable:r})=>i.jsxs(i.Fragment,{children:[n&&i.jsx(Me,{children:e.map(t=>i.jsxs(Xe,{children:[i.jsxs(A,{children:["Title",i.jsx(T,{children:t.title})]}),i.jsxs(A,{children:["Category",i.jsx(T,{children:t.category})]}),i.jsxs(Ue,{children:[i.jsxs(A,{children:["Calories ",i.jsx(T,{children:t.calories})]}),i.jsxs(A,{children:["Weight ",i.jsx(T,{children:t.weight})]}),i.jsxs(A,{children:["Recommend ",i.jsx(T,{before:!0,children:"YES"})]}),i.jsxs(A,{children:[" ",i.jsx(T,{children:i.jsx(de,{children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]})]})]},t._id.$oid))}),r&&i.jsx(Me,{children:e.map(t=>i.jsxs(Xe,{children:[i.jsxs(A,{children:["Body Part",i.jsx(T,{children:t.bodyPart})]}),i.jsxs(A,{children:["Equipment",i.jsx(T,{children:t.equipment})]}),i.jsxs(A,{children:["Name",i.jsx(T,{children:t.name})]}),i.jsxs(Ue,{children:[i.jsxs(A,{children:["Target ",i.jsx(T,{children:t.burnedCalories})]}),i.jsxs(A,{children:["Burned Calor..",i.jsx(T,{children:t.time})]}),i.jsxs(A,{children:["Time ",i.jsx(T,{children:t.time})]}),i.jsxs(A,{children:[" ",i.jsx(T,{children:i.jsx(de,{children:i.jsx(pe,{children:i.jsx("use",{href:se+"#icon-trash"})})})})]})]})]},t.name))})]});ot.propTypes={list:H.array,productTable:H.bool,exerciseTable:H.bool};const je=({to:e,marginBottom:n,list:r,productTable:t,exerciseTable:o})=>i.jsxs(pt,{marginBottom:n,children:[i.jsxs(ft,{children:[i.jsx(ht,{children:t?"Products":"Exercises"}),i.jsxs(mt,{to:e,children:["Add ",t?"product":"exercise",i.jsx(yt,{children:i.jsx("use",{href:se+"#arrow-right"})})]})]}),r.length!==0?i.jsxs(i.Fragment,{children:[i.jsx(it,{list:r,productTable:t,exerciseTable:o}),i.jsx(ot,{list:r,productTable:t,exerciseTable:o})]}):i.jsxs(xt,{children:["Not found ",t?"products":"exercises"]})]});je.propTypes={to:H.string,marginBottom:H.number,list:H.array,productTable:H.bool,exerciseTable:H.bool};const cr=C.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${b.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,ur=C.div`
  width: auto;

  ${b.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${b.desktop} {
    margin-top: 0;
  }
`,dr=C.div`
  width: auto;

  ${b.tablet} {
    width: 704px;
  }

  ${b.desktop} {
    width: 826px;
  }
`,pr={top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}},fr=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],hr=[{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif",name:"3/4 sit-up",target:"abs",burnedCalories:220,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif",name:"45° side bend",target:"abs",burnedCalories:323,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0003.gif",name:"air bike",target:"abs",burnedCalories:312,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0006.gif",name:"alternate heel touchers",target:"abs",burnedCalories:116,time:3},{bodyPart:"back",equipment:"cable",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0007.gif",name:"alternate lateral pulldown",target:"lats",burnedCalories:70,time:3},{bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3},{bodyPart:"waist",equipment:"assisted",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0010.gif",name:"assisted hanging knee raise with throw down",target:"abs",burnedCalories:216,time:3}],br=()=>i.jsxs(i.Fragment,{children:[i.jsx(ct,{text:"Diary",margin:pr}),i.jsxs(cr,{children:[i.jsxs(ur,{children:[i.jsx(dt,{}),i.jsx(lt,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:st})]}),i.jsxs(dr,{children:[i.jsx(je,{marginBottom:40,list:fr,productTable:!0,to:"/products"}),i.jsx(je,{list:hr,exerciseTable:!0,to:"/exercises"})]})," "]})]});export{br as default};
