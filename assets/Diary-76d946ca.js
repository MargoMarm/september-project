import{n as S,m as j,j as i,c as P,N as et,r as l,P as Y,s as ue}from"./index-fd774893.js";import{D as re,a as tt,m as rt}from"./descriptionTextMargin-ce0b5ed6.js";import{T as nt}from"./Title-9945f219.js";import{c as _,j as y}from"./emotion-react.browser.esm-ad58e3f7.js";const it=S.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${j.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${j.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,ot=()=>i.jsxs(it,{children:[i.jsx(re,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),i.jsx(re,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),i.jsx(re,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),i.jsx(re,{icon:"fire",label:"Сalories burned",keyValue:"0"}),i.jsx(re,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),i.jsx(re,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),at=S.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 335px;
  padding: 16px;
  align-items: flex-start;
  margin-bottom: ${e=>e.marginBottom}px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${P.textWhite02};
  background: rgba(239, 237, 232, 0.05);

  ${j.tablet} {
    width: auto;
    height: 234px;
  }

  ${j.desktop} {
    width: auto;
  }
`,lt=S.div`
  display: flex;
  justify-content: space-between;
`,st=S.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${P.textWhite05};
`,ut=S(et)`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 1.5;

  color: ${P.orange};

  transition:
    scale 250ms ease-in-out,
    color 250ms ease-in-out;

  &:hover {
    scale: 1.1;
    color: ${P.orangeSecondary};

    svg {
      stroke: ${P.orangeSecondary};
    }
  }
`,ct=S.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${P.textWhite05};
`,dt=S.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${P.orange};

  transition: stroke 250ms ease-in-out;
`,ge=S.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,xe=S.svg`
  width: 20px;
  height: 20px;
`,ve=S.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${j.desktop} {
    margin-left: 16px;
  }
`,oe=S.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${P.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 188px;

    ${j.desktop} {
      margin-right: 196px;
    }
  }

  :nth-of-type(2) {
    margin-right: 87px;

    ${j.desktop} {
      margin-right: 125px;
    }
  }

  :nth-of-type(3) {
    margin-right: 54px;

    ${j.desktop} {
      margin-right: 69px;
    }
  }

  :nth-of-type(4) {
    margin-right: 60px;

    ${j.desktop} {
      margin-right: 75px;
    }
  }

  :nth-of-type(5) {
    margin-right: 12px;
  }
`,I=S.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${P.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 45px;

    ${j.desktop} {
      margin-right: 70px;
    }
  }

  :nth-of-type(2) {
    margin-right: 82px;

    ${j.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(3) {
    margin-right: 104px;

    ${j.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(4) {
    margin-right: 58px;

    ${j.desktop} {
      margin-right: 80px;
    }
  }

  :nth-of-type(5)::before {
    content: 'Burned calor...';
    margin-right: 14px;

    ${j.desktop} {
      content: 'Burned Calories';
      margin-right: 15px;
    }
  }
`,ft={Table:`
    --data-table-library_grid-template-columns:  98px 140px 136px 92px 86px 84px 28px;
    height: 136px;

    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${P.textWhite01};
      border-radius: 12px;
    };

    ${j.desktop} {
      --data-table-library_grid-template-columns:  123px 165px 139px 114px 99px 102px 28px;
      margin-left: 16px;
    }
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${P.textWhite03};

    :nth-of-type(6) {
      margin-right: 12px;
    }

    :nth-of-type(7) {
      margin-right: 0;
      border: none;
      padding: 0
    }  
  `},qe={Table:`
    --data-table-library_grid-template-columns:  212px 136px 98px 98px 92px 28px;
    height: 136px; 
    
    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${P.textWhite01};
      border-radius: 12px;
    };

    ${j.desktop} {
      --data-table-library_grid-template-columns:  220px 174px 113px 113px 122px 28px;
      margin-left: 16px;
    }
    `,Body:"",Header:"display: none;",BaseRow:"",Row:`
    font-size: 16px;
    background-color: inherit;
    color: ${P.white};
  `,HeaderRow:`
    background-color: inherit;`,BaseCell:"",HeaderCell:`
    color: ${P.orangeSecondary};
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.5;
  `,Cell:`
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${P.textWhite03};

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
  `};function ce(){return He=ce=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},ce.apply(this,arguments)}var He=ce,W=He,pt=function(e,r){if(e==null)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o},ee=function(e,r){if(e==null)return{};var n,t,o=pt(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},te=l.createContext(null),ne=function(e){var r=e.current.querySelector(".tr-header");return Array.from((r==null?void 0:r.querySelectorAll(".th"))||[])},Ve=function(e,r,n,t){return Array.from(e.current.querySelectorAll(n)).forEach(function(o){var a=Array.from(o.querySelectorAll(t)),c=a.length;a.forEach(function(g,u){return r(g,u,c)})})},ht=function(e,r){return Ve(e,r,".tr-header",".th")},mt=function(e,r){return Ve(e,r,".tr-body",".td")},ie=function(e,r){return{index:r,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},H=l.createContext(null),yt=function(e){var r=e.tableElementRef,n=e.tableMemoryRef,t=e.layout,o=e.children,a=l.useMemo(function(){return{layout:t,tableElementRef:r,tableMemoryRef:n}},[t,r,n]);return y(H.Provider,{value:a},o)},Me=function(e,r){var n=ne(e).map(ie);r.current.dataColumns=n},se=function(e,r,n){var t=r.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;r.current&&e&&t&&(r.current.style.setProperty("--data-table-library_grid-template-columns",e),Me(r,n))},Xe=function(e,r){r!=null&&r.onLayoutChange&&e&&r.onLayoutChange(e)},Ue=`
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
`),bt=_(Ue,";",""),we=l.forwardRef(function(e,r){var n=l.useContext(H);if(!n)throw new Error("No Layout Context.");var t=n.layout,o=t!=null&&t.isDiv?"div":"td";return y(o,W({css:bt,ref:r},e))}),gt=_(Ue," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),je=l.forwardRef(function(e,r){var n=l.useContext(H);if(!n)throw new Error("No Layout Context.");var t=n.layout,o=t!=null&&t.isDiv?"div":"th";return y(o,W({css:gt,ref:r},e))}),xt={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Ce=function(e){var r=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,n=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:xt,area:_("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",r,"px;height:100%;&:hover,&.active{background-color:",n,";}","")}},Ge=function(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t},Oe=Ge,Je=function(e,r){if(e){if(typeof e=="string")return Oe(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Oe(e,r):void 0}},vt=function(e){if(Array.isArray(e))return e},wt=function(e,r){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var n=[],t=!0,o=!1,a=void 0;try{for(var c,g=e[Symbol.iterator]();!(t=(c=g.next()).done)&&(n.push(c.value),!r||n.length!==r);t=!0);}catch(u){o=!0,a=u}finally{try{t||g.return==null||g.return()}finally{if(o)throw a}}return n}},jt=Je,Ct=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},de=function(e,r){return vt(e)||wt(e,r)||jt(e,r)||Ct()};function Ze(e){var r,n,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=Ze(e[r]))&&(t&&(t+=" "),t+=n);else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function J(){for(var e=0,r,n,t="";e<arguments.length;)(r=arguments[e++])&&(n=Ze(r))&&(t&&(t+=" "),t+=n);return t}var ae=function(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e},Ot=Ge,kt=function(e){if(Array.isArray(e))return Ot(e)},$t=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},Et=Je,Pt=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},fe=function(e){return kt(e)||$t(e)||Et(e)||Pt()},pe=null,St=function(){return pe||(pe=l.createContext(null))},Dt=function(){return l.useContext(pe)};function ke(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function $e(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?ke(Object(n),!0).forEach(function(t){ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Nt=function(e,r){var n=l.useContext(H);if(!n)throw new Error("No Layout Context.");var t=n.tableElementRef,o=n.tableMemoryRef,a=n.layout,c=l.useRef(null),g=l.useRef(null),u=l.useRef(""),b=l.useRef(null),d=l.useRef(!1),f=l.useCallback(function(p){var v;p.preventDefault(),u.current=t.current.style.getPropertyValue("--data-table-library_grid-template-columns"),d.current=!0,b.current=c.current.offsetWidth-p.pageX,(v=c.current)===null||v===void 0||v.querySelector(".resizer-area").classList.add("active")},[t]),h=l.useCallback(function(p){if(d.current){p.preventDefault();var v=b.current+p.pageX,x=function(O,m,k,D){var N=ne(k).map(ie).filter(function(s){return!s.isHide}),B=N.findIndex(function(s){return s.index===O}),E=(N=N.map(function(s,w){return $e($e({},s),{},{index:w})})).reduce(function(s,w,R){return s||(R>B&&w.width!==0?w:s)},null),V=N.reduce(function(s,w){return s+w.width},0),L=N[B].minWidth,M=D>L&&D!==0?D:L,q=M-N[B].width,$=N.map(function(s,w){if(E&&B===w)return E.width-q>L?M:s.width;if((E==null?void 0:E.index)===w){var R=s.width-q;return R>L?R:s.width}return s.width}),Z=V-$.reduce(function(s,w){return s+w},0);$[B]=$[B]+Z;var X=!1,Q=N.slice(0).reverse().map(function(s,w){var R=$.slice(0).reverse()[w],U=R/V*100;return s.isStiff||m!=null&&m.horizontalScroll?"".concat(R,"px"):X?"minmax(0, ".concat(U,"%)"):(X=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),A=function(s,w){if(fe(Array.from(s.classList)).includes("pin-left")){var R=$.reduce(function(G,T,K){return K>=w?G:G+T},0);s.style.left="".concat(R,"px")}if(fe(Array.from(s.classList)).includes("pin-right")){var U=$.reduceRight(function(G,T,K){return K<=w?G:G+T},0);s.style.right="".concat(U,"px")}};return ht(k,A),mt(k,A),Q}(e,a,t,v);se(x,t,o)}},[e,a,t,o]),C=l.useCallback(function(){var p;d.current=!1;var v=t.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(u.current!==v){Xe(v,a);var x=ne(t).map(ie);o.current.dataColumns=x}(p=c.current)===null||p===void 0||p.querySelector(".resizer-area").classList.remove("active")},[a,t,o]);return l.useEffect(function(){var p=g.current;return p&&(p.addEventListener("mousedown",f),document.addEventListener("mousemove",h),document.addEventListener("mouseup",C)),function(){p&&(p.removeEventListener("mousedown",f),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",C))}},[r,f,h,C]),{cellRef:c,resizeRef:g}},Rt=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Ee(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function Pe(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Ee(Object(n),!0).forEach(function(t){ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Se=function(e,r){return r.find(function(n){return n.index===e})},z=function(e){var r=e.index,n=e.className,t=e.hide,o=e.pinLeft,a=e.pinRight,c=e.stiff,g=e.isFooter,u=e.includePreviousColSpan,b=e.previousColSpans,d=e.gridColumnStart,f=e.gridColumnEnd,h=e.resize,C=e.role,p=C===void 0?"columnheader":C,v=e.children,x=e.style,O=ee(e,Rt),m=l.useContext(te);(function(M,q){var $=l.useContext(H);if(!$)throw new Error("No Layout Context.");var Z=$.layout,X=$.tableElementRef,Q=$.tableMemoryRef;l.useLayoutEffect(function(){var A=Q.current.dataColumns,s=ne(X).map(ie),w=Se(M,A),R=(w==null?void 0:w.isHide)===!!q;if(A!=null&&A.length&&!R){var U=s.filter(function(T){return!T.isHide}).map(function(T){if(T.isStiff||Z!=null&&Z.horizontalScroll){var K=Se(T.index,A);return K?"".concat(K.width||2*K.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");se(U,X,Q),Xe(U,Z);var G=ne(X).map(ie);Q.current.dataColumns=G}},[M,q,Z,X,Q])})(r,t);var k=Nt(r,t),D=k.cellRef,N=k.resizeRef,B=d&&f,E=B?f-d-1:0,V=u?d+b:d,L=u?f+b:f;return y(l.Fragment,null,y(je,W({role:p,"data-table-library_th":"","data-hide":!!t,"data-resize-min-width":typeof h=="boolean"||(h==null?void 0:h.minWidth)==null?75:h.minWidth,style:Pe(Pe({},B?{gridColumnStart:V,gridColumnEnd:L}:{}),x),css:_(m==null?void 0:m.BaseCell," ",g?m==null?void 0:m.FooterCell:m==null?void 0:m.HeaderCell,";",""),className:J("th",n,{stiff:c,hide:t,resize:h,"pin-left":o,"pin-right":a}),ref:D},O),y("div",null,v),h&&!t&&y("div",{className:"resizer-area",ref:N,css:Ce(h).area},y("span",{className:"resizer-handle",css:Ce(h).handle}))),Array.from({length:E},function(){return y(je,{className:J("th","hide","colspan")})}))},he=null,Bt=function(){return he||(he=l.createContext(null))},At=function(){return l.useContext(he)},zt=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},Ft=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function De(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function Ne(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?De(Object(n),!0).forEach(function(t){ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var F=function(e){e.index;var r=e.className,n=e.hide,t=e.pinLeft,o=e.pinRight,a=e.stiff,c=e.includePreviousColSpan,g=e.previousColSpans,u=e.gridColumnStart,b=e.gridColumnEnd,d=e.onClick,f=e.children,h=e.style,C=ee(e,Ft),p=l.useContext(te),v=u&&b,x=v?b-u-1:0,O=c?u+g:u,m=c?b+g:b;return y(l.Fragment,null,y(we,W({role:"gridcell","data-table-library_td":"",style:Ne(Ne({},v?{gridColumnStart:O,gridColumnEnd:m}:{}),h),css:_(p==null?void 0:p.BaseCell," ",p==null?void 0:p.Cell,";",""),className:J("td",r,{stiff:a,hide:n,"pin-left":t,"pin-right":o}),onClick:d},C),y("div",null,f)),Array.from({length:x},function(){return y(we,{className:J("td","hide","colspan")})}))},me=null,Lt=function(){return me||(me=l.createContext(null))},Tt=function(){return l.useContext(me)},ye=null,_t=function(){return ye||(ye=l.createContext(null))},Wt=function(){var e=l.useState(!1),r=de(e,2),n=r[0],t=r[1];return l.useEffect(function(){var o=function(c){c.shiftKey?t(!0):n&&t(!1)},a=function(){n&&t(!1)};return document&&(document.addEventListener("keydown",o),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",o),document.removeEventListener("keyup",a))}},[n]),n},qt=function(){return{select:Tt(),tree:At(),sort:Dt(),pagination:l.useContext(ye)}},Ht=function(e){var r=e.sort,n=e.pagination,t=e.tree;return function(o){var a=fe(o);return a=r?r.modifier(a):a,a=n?n.modifier(a):a,a=t?t.modifier(a):a}},Vt=function(e){return e.reduce(function(r,n){return Object.keys(n).forEach(function(t){r[t]||(r[t]=""),r[t]=`
        `.concat(r[t],`
        `).concat(n[t],`
      `)}),r},{})},Mt=function(e){return Array.isArray(e)?Vt(e):e},Xt=["children"],Re=function(e){var r=e.children,n=ee(e,Xt),t=l.useContext(te),o=l.useContext(H);if(!o)throw new Error("No Layout Context.");var a=o.layout,c=a!=null&&a.isDiv?"div":"tbody";return y(c,W({css:_(t==null?void 0:t.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},n),r)},Ut=["isFooter","children"],Be=function(e){var r=e.isFooter,n=e.children,t=ee(e,Ut),o=l.useContext(te),a=l.useContext(H);if(!a)throw new Error("No Layout Context.");var c=a.layout,g=c!=null&&c.isDiv?"div":r?"tfoot":"thead";return y(g,W({role:"rowgroup",className:J({tfoot:r,thead:!r}),css:_(`
  display: contents;
`," ",r?o==null?void 0:o.Footer:o==null?void 0:o.Header,";","")},t),l.Children.map(n,function(u){if(l.isValidElement(u))return l.cloneElement(u)}))},Ae=null,Gt=function(){return Ae||(Ae=l.createContext(null))},Jt=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],Zt={Table:`
    height: 100%;
  `},ze=l.forwardRef(function(e,r){var n=e.data,t=e.theme,o=e.layout,a=e.sort,c=e.pagination,g=e.select,u=e.tree,b=e.onInit,d=b===void 0?function(){}:b,f=e.className,h=f===void 0?"table":f,C=e.children,p=ee(e,Jt),v=function(A){var s=l.useRef(null);return A&&(s=A),s}(r),x=function(A){var s=l.useRef(null);return s.current||(s.current={onlyOnce:!1,dataColumns:[]}),s}(),O=Ht({sort:a,pagination:c,tree:u,select:g})(n.nodes),m=function(A,s){var w=l.useState(!1),R=de(w,2),U=R[0],G=R[1];return[U,function(T){T&&(U||(G(!0),s.current=T,A(T)))}]}(d,v),k=de(m,2),D=k[0],N=k[1],B=Wt(),E=[];o!=null&&o.fixedHeader&&(E=E.concat(Zt)),t&&(E=E.concat(t));var V,L=Mt(E),M=o!=null&&o.isDiv?"div":"table",q=Gt(),$=St(),Z=Lt(),X=Bt(),Q=_t();return y(M,W({role:"grid","data-table-library_table":"",css:_((V={isShiftDown:B},`
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

  `.concat(V.isShiftDown?`
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    `:"",`
  `))," ",L==null?void 0:L.Table,";",""),className:J(h),ref:N},p),D&&y(q.Provider,{value:n},y(te.Provider,{value:L},y($.Provider,{value:a},y(Z.Provider,{value:g},y(X.Provider,{value:u},y(Q.Provider,{value:c},y(yt,{layout:o,tableElementRef:v,tableMemoryRef:x},C&&C(O)))))))))}),Qe=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},Qt=l.forwardRef(function(e,r){var n=l.useContext(H);if(!n)throw new Error("No Layout Context.");var t=n.layout,o=t!=null&&t.isDiv?"div":"tr";return y(o,W({css:_(Qe(),";",""),ref:r},e))}),Yt=l.forwardRef(function(e,r){var n=l.useContext(H);if(!n)throw new Error("No Layout Context.");var t=n.layout,o=t!=null&&t.isDiv?"div":"tr";return y(o,W({css:_(Qe(),";",""),ref:r},e))}),Ye=function(e){return e.type?e.type===l.Fragment:e===l.Fragment},Ke=function(e,r){return l.Children.toArray(e).reduce(function(n,t,o){return l.isValidElement(t)?o>=r?n:t.props.gridColumnStart||t.props.gridColumnEnd?n+t.props.gridColumnEnd-t.props.gridColumnStart-1:n:n},0)},Kt=["className","role","isFooter","children"];function Fe(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function Le(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Fe(Object(n),!0).forEach(function(t){ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Te=function(e){var r,n=e.className,t=e.role,o=t===void 0?"rowheader":t,a=e.isFooter,c=e.children,g=ee(e,Kt),u=l.useContext(te),b=l.useRef(null);return r=l.useContext(H),l.useLayoutEffect(function(){var d;if(!r)throw new Error("No Layout Context.");var f=r.layout,h=r.tableElementRef,C=r.tableMemoryRef,p=ne(h).map(ie);if((d=C.current)===null||d===void 0||!d.onlyOnce)if(C.current.onlyOnce=!0,f!=null&&f.resizedLayout){var v=f==null?void 0:f.resizedLayout;se(v,h,C)}else if(f!=null&&f.custom)Me(h,C);else{var x=p.filter(function(O){return!O.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");se(x,h,C)}},[r]),y(Yt,W({role:o,"data-table-library_tr-header":"",css:_(u==null?void 0:u.BaseRow," ",a?u==null?void 0:u.FooterRow:u==null?void 0:u.HeaderRow,";",""),className:J("tr",n,{"tr-footer":a,"tr-header":!a}),ref:b},g),l.Children.toArray(c).filter(Boolean).map(function(d,f){if(l.isValidElement(d)){var h={};return Ye(d)||(h=Le(Le({},h),{},{index:f,previousColSpans:Ke(c,f)})),l.cloneElement(d,h)}}))},It=function(){},er=function(e,r,n,t){(function(o){var a=o.onSingleClick,c=o.onDoubleClick,g=o.ref,u=l.useRef(0);l.useEffect(function(){var b=g.current,d=function(f){c&&(u.current===0&&a(f),u.current+=1,setTimeout(function(){u.current===2&&c(f),u.current=0},300))};return b==null||b.addEventListener("click",d),function(){b==null||b.removeEventListener("click",d)}})})({onSingleClick:r?function(o){return r(t,o)}:It,onDoubleClick:n?function(o){return n(t,o)}:null,ref:e})},tr=["item","className","disabled","onClick","onDoubleClick","children"];function _e(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function le(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?_e(Object(n),!0).forEach(function(t){ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var We=function(e){var r=e.item,n=e.className,t=e.disabled,o=e.onClick,a=e.onDoubleClick,c=e.children,g=ee(e,tr),u=function(x,O){return Object.values(x).filter(Boolean).filter(function(m){return m==null?void 0:m.hasOwnProperty("_getRowProps")}).map(function(m){return m._getRowProps(O,x)})}(qt(),e),b=l.useContext(te),d=function(x,O){var m=x.reduce(function(k,D){var N=D.theme,B=D.className,E=D.onClick,V=`
        `.concat(k.themeByFeature,`
        `).concat(N,`
      `),L=J(k.classNamesByFeature,B),M=k.clickable||!!E;return le(le({},k),{},{themeByFeature:V,classNamesByFeature:L,clickable:M,onClickByFeature:function(q,$){E(q,$),k.onClickByFeature(q,$)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!O,onClickByFeature:function(k,D){O&&zt(D)&&O(k,D)}});return{themeByFeature:m.themeByFeature,classNamesByFeature:m.classNamesByFeature,clickable:m.clickable,onClickByFeature:m.onClickByFeature}}(u,o),f=d.themeByFeature,h=d.classNamesByFeature,C=d.clickable,p=d.onClickByFeature,v=l.useRef(null);return er(v,p,a,r),y(Qt,W({role:"row","data-table-library_tr-body":"",onClick:t||a?function(){}:function(x){return p(r,x)},css:_(f," ",b==null?void 0:b.BaseRow," ",b==null?void 0:b.Row,";",""),className:J("tr","tr-body",h,n,{disabled:t,clickable:C||!!a}),ref:v},g),l.Children.toArray(c).filter(Boolean).map(function(x,O){if(l.isValidElement(x)){var m={};return Ye(x)||(m=le(le({},m),{},{index:O,previousColSpans:Ke(c,O)})),l.cloneElement(x,m)}}))};const rr={...qe,...ft},Ie=({list:e,productTable:r,exerciseTable:n})=>{const t={nodes:e};return i.jsxs(i.Fragment,{children:[r&&i.jsxs(i.Fragment,{children:[i.jsxs(ve,{children:[i.jsx(oe,{children:"Title"}),i.jsx(oe,{children:"Category"}),i.jsx(oe,{children:"Calories"}),i.jsx(oe,{children:"Weight"}),i.jsx(oe,{children:"Recommend"})]}),i.jsx(ze,{data:t,theme:qe,layout:{custom:!0},children:o=>i.jsxs(i.Fragment,{children:[i.jsx(Be,{children:i.jsxs(Te,{children:[i.jsx(z,{children:"Title"}),i.jsx(z,{children:"Category"}),i.jsx(z,{children:"Calories"}),i.jsx(z,{children:"Weight"}),i.jsx(z,{children:"Recommend"}),i.jsx(z,{children:""})]})}),i.jsx(Re,{children:o.map(a=>i.jsxs(We,{item:a,children:[i.jsx(F,{children:a.title}),i.jsx(F,{children:a.category}),i.jsx(F,{children:a.calories}),i.jsx(F,{children:a.weight}),i.jsx(F,{children:a.groupBloodNotAllowed?"Yes":"No"}),i.jsx(F,{children:i.jsx(ge,{children:i.jsx(xe,{children:i.jsx("use",{href:ue+"#icon-trash"})})})})]},a._id.$oid))})]})})]}),n&&i.jsxs(i.Fragment,{children:[i.jsxs(ve,{children:[i.jsx(I,{children:"Body Part"}),i.jsx(I,{children:"Equipment"}),i.jsx(I,{children:"Name"}),i.jsx(I,{children:"Target"}),i.jsx(I,{}),i.jsx(I,{children:"Time"}),i.jsx(I,{children:""})]}),i.jsx(ze,{data:t,theme:rr,layout:{custom:!0},children:o=>i.jsxs(i.Fragment,{children:[i.jsx(Be,{children:i.jsxs(Te,{children:[i.jsx(z,{children:"Body Part"}),i.jsx(z,{children:"Equipment"}),i.jsx(z,{children:"Name"}),i.jsx(z,{children:"Target"}),i.jsx(z,{children:"Burned Cal..."}),i.jsx(z,{children:"Time"}),i.jsx(z,{children:""})]})}),i.jsx(Re,{children:o.map(a=>i.jsxs(We,{item:a,children:[i.jsx(F,{children:a.bodyPart}),i.jsx(F,{children:a.equipment}),i.jsx(F,{children:a.name}),i.jsx(F,{children:a.target}),i.jsx(F,{children:a.burnedCalories}),i.jsx(F,{children:a.time}),i.jsx(F,{children:i.jsx(ge,{children:i.jsx(xe,{children:i.jsx("use",{href:ue+"#icon-trash"})})})})]},a.name))})]})})]})]})};Ie.propTypes={list:Y.array,productTable:Y.bool,exerciseTable:Y.bool};const be=({to:e,marginBottom:r,list:n,productTable:t,exerciseTable:o})=>i.jsxs(at,{marginBottom:r,children:[i.jsxs(lt,{children:[i.jsx(st,{children:t?"Products":"Exercises"}),i.jsxs(ut,{to:e,children:["Add ",t?"product":"exercise",i.jsx(dt,{children:i.jsx("use",{href:ue+"#arrow-right"})})]})]}),n.length!==0?i.jsx(Ie,{list:n,productTable:t,exerciseTable:o}):i.jsxs(ct,{children:["Not found ",t?"products":"exercises"]})]});be.propTypes={to:Y.string,marginBottom:Y.number,list:Y.array,productTable:Y.bool,exerciseTable:Y.bool};const nr=S.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${j.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,ir=S.div`
  width: auto;

  ${j.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${j.desktop} {
    margin-top: 0;
  }
`,or=S.div`
  width: auto;

  ${j.tablet} {
    width: 704px;
  }

  ${j.desktop} {
    width: 826px;
  }
`,ar={top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}},lr=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b6f"},weight:100,calories:160,category:"fish",title:"Cold smoked bream",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b8d"},weight:100,calories:281,category:"fish",title:"Pollock in batter",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],sr=[{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif",name:"3/4 sit-up",target:"abs",burnedCalories:220,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif",name:"45° side bend",target:"abs",burnedCalories:323,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0003.gif",name:"air bike",target:"abs",burnedCalories:312,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0006.gif",name:"alternate heel touchers",target:"abs",burnedCalories:116,time:3},{bodyPart:"back",equipment:"cable",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0007.gif",name:"alternate lateral pulldown",target:"lats",burnedCalories:70,time:3},{bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3},{bodyPart:"waist",equipment:"assisted",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0010.gif",name:"assisted hanging knee raise with throw down",target:"abs",burnedCalories:216,time:3}],pr=()=>i.jsxs(i.Fragment,{children:[" ",i.jsx(nt,{text:"Diary",margin:ar}),i.jsxs(nr,{children:[i.jsxs(ir,{children:[i.jsx(ot,{}),i.jsx(tt,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:rt})]}),i.jsxs(or,{children:[i.jsx(be,{marginBottom:40,list:lr,productTable:!0}),i.jsx(be,{list:sr,exerciseTable:!0})]})," "]})]});export{pr as default};
