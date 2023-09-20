import{n as S,m as j,j as i,c as P,N as Ie,r as l,Z,P as Y,s as ue}from"./index-4fa55ea7.js";import{D as re,a as et,m as tt}from"./descriptionTextMargin-028e2648.js";import{T as rt}from"./Title-429fa3ca.js";import{c as _,j as y}from"./emotion-react.browser.esm-7182129a.js";const nt=S.ul`
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
`,it=()=>i.jsxs(nt,{children:[i.jsx(re,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),i.jsx(re,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),i.jsx(re,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),i.jsx(re,{icon:"fire",label:"Сalories burned",keyValue:"0"}),i.jsx(re,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),i.jsx(re,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),ot=S.div`
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
`,at=S.div`
  display: flex;
  justify-content: space-between;
`,lt=S.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${P.textWhite05};
`,st=S(Ie)`
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
`,ut=S.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${P.textWhite05};
`,ct=S.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${P.orange};

  transition: stroke 250ms ease-in-out;
`,xe=S.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`,ge=S.svg`
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
`,dt={Table:`
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
  `};function ce(){return He=ce=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},ce.apply(this,arguments)}var He=ce,W=He,ft=function(e,r){if(e==null)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o},ee=function(e,r){if(e==null)return{};var t,n,o=ft(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o},te=l.createContext(null),ne=function(e){var r=e.current.querySelector(".tr-header");return Array.from((r==null?void 0:r.querySelectorAll(".th"))||[])},Ve=function(e,r,t,n){return Array.from(e.current.querySelectorAll(t)).forEach(function(o){var a=Array.from(o.querySelectorAll(n)),c=a.length;a.forEach(function(x,u){return r(x,u,c)})})},pt=function(e,r){return Ve(e,r,".tr-header",".th")},mt=function(e,r){return Ve(e,r,".tr-body",".td")},ie=function(e,r){return{index:r,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},H=l.createContext(null),ht=function(e){var r=e.tableElementRef,t=e.tableMemoryRef,n=e.layout,o=e.children,a=l.useMemo(function(){return{layout:n,tableElementRef:r,tableMemoryRef:t}},[n,r,t]);return y(H.Provider,{value:a},o)},Me=function(e,r){var t=ne(e).map(ie);r.current.dataColumns=t},se=function(e,r,t){var n=r.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;r.current&&e&&n&&(r.current.style.setProperty("--data-table-library_grid-template-columns",e),Me(r,t))},Xe=function(e,r){r!=null&&r.onLayoutChange&&e&&r.onLayoutChange(e)},Ue=`
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
`),yt=_(Ue,";",""),we=l.forwardRef(function(e,r){var t=l.useContext(H);if(!t)throw new Error("No Layout Context.");var n=t.layout,o=n!=null&&n.isDiv?"div":"td";return y(o,W({css:yt,ref:r},e))}),bt=_(Ue," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),je=l.forwardRef(function(e,r){var t=l.useContext(H);if(!t)throw new Error("No Layout Context.");var n=t.layout,o=n!=null&&n.isDiv?"div":"th";return y(o,W({css:bt,ref:r},e))}),xt={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Ce=function(e){var r=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,t=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:xt,area:_("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",r,"px;height:100%;&:hover,&.active{background-color:",t,";}","")}},Ge=function(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n},Oe=Ge,Ze=function(e,r){if(e){if(typeof e=="string")return Oe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Oe(e,r):void 0}},gt=function(e){if(Array.isArray(e))return e},vt=function(e,r){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var c,x=e[Symbol.iterator]();!(n=(c=x.next()).done)&&(t.push(c.value),!r||t.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||x.return==null||x.return()}finally{if(o)throw a}}return t}},wt=Ze,jt=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},de=function(e,r){return gt(e)||vt(e,r)||wt(e,r)||jt()},ae=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},Ct=Ge,Ot=function(e){if(Array.isArray(e))return Ct(e)},kt=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},$t=Ze,Et=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},fe=function(e){return Ot(e)||kt(e)||$t(e)||Et()},pe=null,Pt=function(){return pe||(pe=l.createContext(null))},St=function(){return l.useContext(pe)};function ke(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function $e(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ke(Object(t),!0).forEach(function(n){ae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ke(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var Dt=function(e,r){var t=l.useContext(H);if(!t)throw new Error("No Layout Context.");var n=t.tableElementRef,o=t.tableMemoryRef,a=t.layout,c=l.useRef(null),x=l.useRef(null),u=l.useRef(""),b=l.useRef(null),d=l.useRef(!1),f=l.useCallback(function(p){var v;p.preventDefault(),u.current=n.current.style.getPropertyValue("--data-table-library_grid-template-columns"),d.current=!0,b.current=c.current.offsetWidth-p.pageX,(v=c.current)===null||v===void 0||v.querySelector(".resizer-area").classList.add("active")},[n]),m=l.useCallback(function(p){if(d.current){p.preventDefault();var v=b.current+p.pageX,g=function(O,h,k,D){var N=ne(k).map(ie).filter(function(s){return!s.isHide}),B=N.findIndex(function(s){return s.index===O}),E=(N=N.map(function(s,w){return $e($e({},s),{},{index:w})})).reduce(function(s,w,R){return s||(R>B&&w.width!==0?w:s)},null),V=N.reduce(function(s,w){return s+w.width},0),L=N[B].minWidth,M=D>L&&D!==0?D:L,q=M-N[B].width,$=N.map(function(s,w){if(E&&B===w)return E.width-q>L?M:s.width;if((E==null?void 0:E.index)===w){var R=s.width-q;return R>L?R:s.width}return s.width}),J=V-$.reduce(function(s,w){return s+w},0);$[B]=$[B]+J;var X=!1,Q=N.slice(0).reverse().map(function(s,w){var R=$.slice(0).reverse()[w],U=R/V*100;return s.isStiff||h!=null&&h.horizontalScroll?"".concat(R,"px"):X?"minmax(0, ".concat(U,"%)"):(X=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),z=function(s,w){if(fe(Array.from(s.classList)).includes("pin-left")){var R=$.reduce(function(G,T,K){return K>=w?G:G+T},0);s.style.left="".concat(R,"px")}if(fe(Array.from(s.classList)).includes("pin-right")){var U=$.reduceRight(function(G,T,K){return K<=w?G:G+T},0);s.style.right="".concat(U,"px")}};return pt(k,z),mt(k,z),Q}(e,a,n,v);se(g,n,o)}},[e,a,n,o]),C=l.useCallback(function(){var p;d.current=!1;var v=n.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(u.current!==v){Xe(v,a);var g=ne(n).map(ie);o.current.dataColumns=g}(p=c.current)===null||p===void 0||p.querySelector(".resizer-area").classList.remove("active")},[a,n,o]);return l.useEffect(function(){var p=x.current;return p&&(p.addEventListener("mousedown",f),document.addEventListener("mousemove",m),document.addEventListener("mouseup",C)),function(){p&&(p.removeEventListener("mousedown",f),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",C))}},[r,f,m,C]),{cellRef:c,resizeRef:x}},Nt=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Ee(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function Pe(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ee(Object(t),!0).forEach(function(n){ae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var Se=function(e,r){return r.find(function(t){return t.index===e})},A=function(e){var r=e.index,t=e.className,n=e.hide,o=e.pinLeft,a=e.pinRight,c=e.stiff,x=e.isFooter,u=e.includePreviousColSpan,b=e.previousColSpans,d=e.gridColumnStart,f=e.gridColumnEnd,m=e.resize,C=e.role,p=C===void 0?"columnheader":C,v=e.children,g=e.style,O=ee(e,Nt),h=l.useContext(te);(function(M,q){var $=l.useContext(H);if(!$)throw new Error("No Layout Context.");var J=$.layout,X=$.tableElementRef,Q=$.tableMemoryRef;l.useLayoutEffect(function(){var z=Q.current.dataColumns,s=ne(X).map(ie),w=Se(M,z),R=(w==null?void 0:w.isHide)===!!q;if(z!=null&&z.length&&!R){var U=s.filter(function(T){return!T.isHide}).map(function(T){if(T.isStiff||J!=null&&J.horizontalScroll){var K=Se(T.index,z);return K?"".concat(K.width||2*K.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");se(U,X,Q),Xe(U,J);var G=ne(X).map(ie);Q.current.dataColumns=G}},[M,q,J,X,Q])})(r,n);var k=Dt(r,n),D=k.cellRef,N=k.resizeRef,B=d&&f,E=B?f-d-1:0,V=u?d+b:d,L=u?f+b:f;return y(l.Fragment,null,y(je,W({role:p,"data-table-library_th":"","data-hide":!!n,"data-resize-min-width":typeof m=="boolean"||(m==null?void 0:m.minWidth)==null?75:m.minWidth,style:Pe(Pe({},B?{gridColumnStart:V,gridColumnEnd:L}:{}),g),css:_(h==null?void 0:h.BaseCell," ",x?h==null?void 0:h.FooterCell:h==null?void 0:h.HeaderCell,";",""),className:Z("th",t,{stiff:c,hide:n,resize:m,"pin-left":o,"pin-right":a}),ref:D},O),y("div",null,v),m&&!n&&y("div",{className:"resizer-area",ref:N,css:Ce(m).area},y("span",{className:"resizer-handle",css:Ce(m).handle}))),Array.from({length:E},function(){return y(je,{className:Z("th","hide","colspan")})}))},me=null,Rt=function(){return me||(me=l.createContext(null))},Bt=function(){return l.useContext(me)},zt=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},At=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function De(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function Ne(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?De(Object(t),!0).forEach(function(n){ae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var F=function(e){e.index;var r=e.className,t=e.hide,n=e.pinLeft,o=e.pinRight,a=e.stiff,c=e.includePreviousColSpan,x=e.previousColSpans,u=e.gridColumnStart,b=e.gridColumnEnd,d=e.onClick,f=e.children,m=e.style,C=ee(e,At),p=l.useContext(te),v=u&&b,g=v?b-u-1:0,O=c?u+x:u,h=c?b+x:b;return y(l.Fragment,null,y(we,W({role:"gridcell","data-table-library_td":"",style:Ne(Ne({},v?{gridColumnStart:O,gridColumnEnd:h}:{}),m),css:_(p==null?void 0:p.BaseCell," ",p==null?void 0:p.Cell,";",""),className:Z("td",r,{stiff:a,hide:t,"pin-left":n,"pin-right":o}),onClick:d},C),y("div",null,f)),Array.from({length:g},function(){return y(we,{className:Z("td","hide","colspan")})}))},he=null,Ft=function(){return he||(he=l.createContext(null))},Lt=function(){return l.useContext(he)},ye=null,Tt=function(){return ye||(ye=l.createContext(null))},_t=function(){var e=l.useState(!1),r=de(e,2),t=r[0],n=r[1];return l.useEffect(function(){var o=function(c){c.shiftKey?n(!0):t&&n(!1)},a=function(){t&&n(!1)};return document&&(document.addEventListener("keydown",o),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",o),document.removeEventListener("keyup",a))}},[t]),t},Wt=function(){return{select:Lt(),tree:Bt(),sort:St(),pagination:l.useContext(ye)}},qt=function(e){var r=e.sort,t=e.pagination,n=e.tree;return function(o){var a=fe(o);return a=r?r.modifier(a):a,a=t?t.modifier(a):a,a=n?n.modifier(a):a}},Ht=function(e){return e.reduce(function(r,t){return Object.keys(t).forEach(function(n){r[n]||(r[n]=""),r[n]=`
        `.concat(r[n],`
        `).concat(t[n],`
      `)}),r},{})},Vt=function(e){return Array.isArray(e)?Ht(e):e},Mt=["children"],Re=function(e){var r=e.children,t=ee(e,Mt),n=l.useContext(te),o=l.useContext(H);if(!o)throw new Error("No Layout Context.");var a=o.layout,c=a!=null&&a.isDiv?"div":"tbody";return y(c,W({css:_(n==null?void 0:n.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},t),r)},Xt=["isFooter","children"],Be=function(e){var r=e.isFooter,t=e.children,n=ee(e,Xt),o=l.useContext(te),a=l.useContext(H);if(!a)throw new Error("No Layout Context.");var c=a.layout,x=c!=null&&c.isDiv?"div":r?"tfoot":"thead";return y(x,W({role:"rowgroup",className:Z({tfoot:r,thead:!r}),css:_(`
  display: contents;
`," ",r?o==null?void 0:o.Footer:o==null?void 0:o.Header,";","")},n),l.Children.map(t,function(u){if(l.isValidElement(u))return l.cloneElement(u)}))},ze=null,Ut=function(){return ze||(ze=l.createContext(null))},Gt=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],Zt={Table:`
    height: 100%;
  `},Ae=l.forwardRef(function(e,r){var t=e.data,n=e.theme,o=e.layout,a=e.sort,c=e.pagination,x=e.select,u=e.tree,b=e.onInit,d=b===void 0?function(){}:b,f=e.className,m=f===void 0?"table":f,C=e.children,p=ee(e,Gt),v=function(z){var s=l.useRef(null);return z&&(s=z),s}(r),g=function(z){var s=l.useRef(null);return s.current||(s.current={onlyOnce:!1,dataColumns:[]}),s}(),O=qt({sort:a,pagination:c,tree:u,select:x})(t.nodes),h=function(z,s){var w=l.useState(!1),R=de(w,2),U=R[0],G=R[1];return[U,function(T){T&&(U||(G(!0),s.current=T,z(T)))}]}(d,v),k=de(h,2),D=k[0],N=k[1],B=_t(),E=[];o!=null&&o.fixedHeader&&(E=E.concat(Zt)),n&&(E=E.concat(n));var V,L=Vt(E),M=o!=null&&o.isDiv?"div":"table",q=Ut(),$=Pt(),J=Ft(),X=Rt(),Q=Tt();return y(M,W({role:"grid","data-table-library_table":"",css:_((V={isShiftDown:B},`
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
  `))," ",L==null?void 0:L.Table,";",""),className:Z(m),ref:N},p),D&&y(q.Provider,{value:t},y(te.Provider,{value:L},y($.Provider,{value:a},y(J.Provider,{value:x},y(X.Provider,{value:u},y(Q.Provider,{value:c},y(ht,{layout:o,tableElementRef:v,tableMemoryRef:g},C&&C(O)))))))))}),Je=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},Jt=l.forwardRef(function(e,r){var t=l.useContext(H);if(!t)throw new Error("No Layout Context.");var n=t.layout,o=n!=null&&n.isDiv?"div":"tr";return y(o,W({css:_(Je(),";",""),ref:r},e))}),Qt=l.forwardRef(function(e,r){var t=l.useContext(H);if(!t)throw new Error("No Layout Context.");var n=t.layout,o=n!=null&&n.isDiv?"div":"tr";return y(o,W({css:_(Je(),";",""),ref:r},e))}),Qe=function(e){return e.type?e.type===l.Fragment:e===l.Fragment},Ye=function(e,r){return l.Children.toArray(e).reduce(function(t,n,o){return l.isValidElement(n)?o>=r?t:n.props.gridColumnStart||n.props.gridColumnEnd?t+n.props.gridColumnEnd-n.props.gridColumnStart-1:t:t},0)},Yt=["className","role","isFooter","children"];function Fe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function Le(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Fe(Object(t),!0).forEach(function(n){ae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Fe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var Te=function(e){var r,t=e.className,n=e.role,o=n===void 0?"rowheader":n,a=e.isFooter,c=e.children,x=ee(e,Yt),u=l.useContext(te),b=l.useRef(null);return r=l.useContext(H),l.useLayoutEffect(function(){var d;if(!r)throw new Error("No Layout Context.");var f=r.layout,m=r.tableElementRef,C=r.tableMemoryRef,p=ne(m).map(ie);if((d=C.current)===null||d===void 0||!d.onlyOnce)if(C.current.onlyOnce=!0,f!=null&&f.resizedLayout){var v=f==null?void 0:f.resizedLayout;se(v,m,C)}else if(f!=null&&f.custom)Me(m,C);else{var g=p.filter(function(O){return!O.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");se(g,m,C)}},[r]),y(Qt,W({role:o,"data-table-library_tr-header":"",css:_(u==null?void 0:u.BaseRow," ",a?u==null?void 0:u.FooterRow:u==null?void 0:u.HeaderRow,";",""),className:Z("tr",t,{"tr-footer":a,"tr-header":!a}),ref:b},x),l.Children.toArray(c).filter(Boolean).map(function(d,f){if(l.isValidElement(d)){var m={};return Qe(d)||(m=Le(Le({},m),{},{index:f,previousColSpans:Ye(c,f)})),l.cloneElement(d,m)}}))},Kt=function(){},It=function(e,r,t,n){(function(o){var a=o.onSingleClick,c=o.onDoubleClick,x=o.ref,u=l.useRef(0);l.useEffect(function(){var b=x.current,d=function(f){c&&(u.current===0&&a(f),u.current+=1,setTimeout(function(){u.current===2&&c(f),u.current=0},300))};return b==null||b.addEventListener("click",d),function(){b==null||b.removeEventListener("click",d)}})})({onSingleClick:r?function(o){return r(n,o)}:Kt,onDoubleClick:t?function(o){return t(n,o)}:null,ref:e})},er=["item","className","disabled","onClick","onDoubleClick","children"];function _e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function le(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?_e(Object(t),!0).forEach(function(n){ae(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_e(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var We=function(e){var r=e.item,t=e.className,n=e.disabled,o=e.onClick,a=e.onDoubleClick,c=e.children,x=ee(e,er),u=function(g,O){return Object.values(g).filter(Boolean).filter(function(h){return h==null?void 0:h.hasOwnProperty("_getRowProps")}).map(function(h){return h._getRowProps(O,g)})}(Wt(),e),b=l.useContext(te),d=function(g,O){var h=g.reduce(function(k,D){var N=D.theme,B=D.className,E=D.onClick,V=`
        `.concat(k.themeByFeature,`
        `).concat(N,`
      `),L=Z(k.classNamesByFeature,B),M=k.clickable||!!E;return le(le({},k),{},{themeByFeature:V,classNamesByFeature:L,clickable:M,onClickByFeature:function(q,$){E(q,$),k.onClickByFeature(q,$)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!O,onClickByFeature:function(k,D){O&&zt(D)&&O(k,D)}});return{themeByFeature:h.themeByFeature,classNamesByFeature:h.classNamesByFeature,clickable:h.clickable,onClickByFeature:h.onClickByFeature}}(u,o),f=d.themeByFeature,m=d.classNamesByFeature,C=d.clickable,p=d.onClickByFeature,v=l.useRef(null);return It(v,p,a,r),y(Jt,W({role:"row","data-table-library_tr-body":"",onClick:n||a?function(){}:function(g){return p(r,g)},css:_(f," ",b==null?void 0:b.BaseRow," ",b==null?void 0:b.Row,";",""),className:Z("tr","tr-body",m,t,{disabled:n,clickable:C||!!a}),ref:v},x),l.Children.toArray(c).filter(Boolean).map(function(g,O){if(l.isValidElement(g)){var h={};return Qe(g)||(h=le(le({},h),{},{index:O,previousColSpans:Ye(c,O)})),l.cloneElement(g,h)}}))};const tr={...qe,...dt},Ke=({list:e,productTable:r,exerciseTable:t})=>{const n={nodes:e};return i.jsxs(i.Fragment,{children:[r&&i.jsxs(i.Fragment,{children:[i.jsxs(ve,{children:[i.jsx(oe,{children:"Title"}),i.jsx(oe,{children:"Category"}),i.jsx(oe,{children:"Calories"}),i.jsx(oe,{children:"Weight"}),i.jsx(oe,{children:"Recommend"})]}),i.jsx(Ae,{data:n,theme:qe,layout:{custom:!0},children:o=>i.jsxs(i.Fragment,{children:[i.jsx(Be,{children:i.jsxs(Te,{children:[i.jsx(A,{children:"Title"}),i.jsx(A,{children:"Category"}),i.jsx(A,{children:"Calories"}),i.jsx(A,{children:"Weight"}),i.jsx(A,{children:"Recommend"}),i.jsx(A,{children:""})]})}),i.jsx(Re,{children:o.map(a=>i.jsxs(We,{item:a,children:[i.jsx(F,{children:a.title}),i.jsx(F,{children:a.category}),i.jsx(F,{children:a.calories}),i.jsx(F,{children:a.weight}),i.jsx(F,{children:a.groupBloodNotAllowed?"Yes":"No"}),i.jsx(F,{children:i.jsx(xe,{children:i.jsx(ge,{children:i.jsx("use",{href:ue+"#icon-trash"})})})})]},a._id.$oid))})]})})]}),t&&i.jsxs(i.Fragment,{children:[i.jsxs(ve,{children:[i.jsx(I,{children:"Body Part"}),i.jsx(I,{children:"Equipment"}),i.jsx(I,{children:"Name"}),i.jsx(I,{children:"Target"}),i.jsx(I,{}),i.jsx(I,{children:"Time"}),i.jsx(I,{children:""})]}),i.jsx(Ae,{data:n,theme:tr,layout:{custom:!0},children:o=>i.jsxs(i.Fragment,{children:[i.jsx(Be,{children:i.jsxs(Te,{children:[i.jsx(A,{children:"Body Part"}),i.jsx(A,{children:"Equipment"}),i.jsx(A,{children:"Name"}),i.jsx(A,{children:"Target"}),i.jsx(A,{children:"Burned Cal..."}),i.jsx(A,{children:"Time"}),i.jsx(A,{children:""})]})}),i.jsx(Re,{children:o.map(a=>i.jsxs(We,{item:a,children:[i.jsx(F,{children:a.bodyPart}),i.jsx(F,{children:a.equipment}),i.jsx(F,{children:a.name}),i.jsx(F,{children:a.target}),i.jsx(F,{children:a.burnedCalories}),i.jsx(F,{children:a.time}),i.jsx(F,{children:i.jsx(xe,{children:i.jsx(ge,{children:i.jsx("use",{href:ue+"#icon-trash"})})})})]},a.name))})]})})]})]})};Ke.propTypes={list:Y.array,productTable:Y.bool,exerciseTable:Y.bool};const be=({to:e,marginBottom:r,list:t,productTable:n,exerciseTable:o})=>i.jsxs(ot,{marginBottom:r,children:[i.jsxs(at,{children:[i.jsx(lt,{children:n?"Products":"Exercises"}),i.jsxs(st,{to:e,children:["Add ",n?"product":"exercise",i.jsx(ct,{children:i.jsx("use",{href:ue+"#arrow-right"})})]})]}),t.length!==0?i.jsx(Ke,{list:t,productTable:n,exerciseTable:o}):i.jsxs(ut,{children:["Not found ",n?"products":"exercises"]})]});be.propTypes={to:Y.string,marginBottom:Y.number,list:Y.array,productTable:Y.bool,exerciseTable:Y.bool};const rr=S.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${j.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,nr=S.div`
  width: auto;

  ${j.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${j.desktop} {
    margin-top: 0;
  }
`,ir=S.div`
  width: auto;

  ${j.tablet} {
    width: 704px;
  }

  ${j.desktop} {
    width: 826px;
  }
`,or={top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}},ar=[{_id:{$oid:"5d51694902b2373622ff5773"},weight:100,calories:340,category:"dairy",title:"Danbo cheese",groupBloodNotAllowed:{1:!0,2:!0,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b7f"},weight:100,calories:112,category:"fish",title:"marlin",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5e13"},weight:100,calories:17,category:"vegetables and herbs",title:"Salads Belaya Dacha Delicate root",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b6f"},weight:100,calories:160,category:"fish",title:"Cold smoked bream",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}},{_id:{$oid:"5d51694902b2373622ff5b8d"},weight:100,calories:281,category:"fish",title:"Pollock in batter",groupBloodNotAllowed:{1:!1,2:!1,3:!1,4:!1}}],lr=[{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0001.gif",name:"3/4 sit-up",target:"abs",burnedCalories:220,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0002.gif",name:"45° side bend",target:"abs",burnedCalories:323,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0003.gif",name:"air bike",target:"abs",burnedCalories:312,time:3},{bodyPart:"waist",equipment:"body weight",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0006.gif",name:"alternate heel touchers",target:"abs",burnedCalories:116,time:3},{bodyPart:"back",equipment:"cable",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0007.gif",name:"alternate lateral pulldown",target:"lats",burnedCalories:70,time:3},{bodyPart:"chest",equipment:"leverage machine",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0009.gif",name:"assisted chest dip (kneeling)",target:"pectorals",burnedCalories:329,time:3},{bodyPart:"waist",equipment:"assisted",gifUrl:"https://res.cloudinary.com/ditdqzoio/image/upload/v1687127066/exercises/0010.gif",name:"assisted hanging knee raise with throw down",target:"abs",burnedCalories:216,time:3}],fr=()=>i.jsxs(i.Fragment,{children:[" ",i.jsx(rt,{text:"Diary",margin:or}),i.jsxs(rr,{children:[i.jsxs(nr,{children:[i.jsx(it,{}),i.jsx(et,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:tt})]}),i.jsxs(ir,{children:[i.jsx(be,{marginBottom:40,list:ar,productTable:!0}),i.jsx(be,{list:lr,exerciseTable:!0})]})," "]})]});export{fr as default};
