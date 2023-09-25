import{n as y,m as x,d as ie,F as fr,G as hr,j as o,c as j,N as xr,r as s,Z as I,P as S,s as te,u as Ke,H as mr,I as yr,J as br}from"./index-5031df81.js";import{D as H,a as gr,m as vr}from"./descriptionTextMargin-8a5336b4.js";import{r as jr}from"./react-responsive-4cdb664f.js";import{T as Cr}from"./Title-507a1216.js";import{c as M,f as wr}from"./formatDate-d1383d55.js";import{c as q,j as v,C as kr}from"./Calendar-58093e74.js";const ke=y.ul`
  display: grid;
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
`,Or=e=>e.diary.products,$r=e=>e.diary.exercises,Dr=e=>e.diary.burnedCalories,Er=e=>e.diary.consumedCalories,Sr=e=>e.diary.doneExercisesTime,Pr=()=>{const e=jr.useMediaQuery({minWidth:768,maxWidth:1439}),t=ie(fr),r=ie(hr),n=ie(Dr),i=ie(Er),a=ie(Sr);function c(u){const m=Math.floor(u/60),w=u%60;return{minutes:m,seconds:w}}const d=c(a);let f=t-d.minutes,p=r-i;return e?o.jsxs(ke,{children:[" ",o.jsx(H,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:r}),o.jsx(H,{icon:"apple",label:"Сalories consumed",keyValue:i}),o.jsx(H,{icon:"bubble",label:"The rest of the calories",keyValue:p,border:p<0?"red":"default"}),o.jsx(H,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:t+" min"}),o.jsx(H,{icon:"fire",label:"Сalories burned",keyValue:n}),o.jsx(H,{icon:"runningMan",label:"The rest of sports",keyValue:f+" min",border:f>t?"green":"default"})]}):o.jsxs(ke,{children:[o.jsx(H,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:r}),o.jsx(H,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:t+" min"}),o.jsx(H,{icon:"apple",label:"Сalories consumed",keyValue:i}),o.jsx(H,{icon:"fire",label:"Сalories burned",keyValue:n}),o.jsx(H,{icon:"bubble",label:"The rest of the calories",keyValue:p,border:p<0?"red":"default"}),o.jsx(H,{icon:"runningMan",label:"The rest of sports",keyValue:f+" min",border:f>t?"green":"default"})]})},Nr=y.div`
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
`,Rr=y.div`
  display: flex;
  justify-content: space-between;
`,Br=y.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${j.textWhite05};
`,Fr=y(xr)`
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
`,Lr=y.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${j.textWhite05};
`,Tr=y.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${j.orange};

  transition: stroke 250ms ease-in-out;
`,Oe=y.div`
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
`,$e=y.div`
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
`,oe=y.p`
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
`,zr=y.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-right: 8px;
  background: ${e=>e.bgColor};
`,Ar={Table:`
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
  `},Ie={Table:`
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
  `};function me(){return er=me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},me.apply(this,arguments)}var er=me,X=er,Wr=function(e,t){if(e==null)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i},ae=function(e,t){if(e==null)return{};var r,n,i=Wr(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i},se=s.createContext(null),le=function(e){var t=e.current.querySelector(".tr-header");return Array.from((t==null?void 0:t.querySelectorAll(".th"))||[])},rr=function(e,t,r,n){return Array.from(e.current.querySelectorAll(r)).forEach(function(i){var a=Array.from(i.querySelectorAll(n)),c=a.length;a.forEach(function(l,d){return t(l,d,c)})})},_r=function(e,t){return rr(e,t,".tr-header",".th")},Vr=function(e,t){return rr(e,t,".tr-body",".td")},ce=function(e,t){return{index:t,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},J=s.createContext(null),Hr=function(e){var t=e.tableElementRef,r=e.tableMemoryRef,n=e.layout,i=e.children,a=s.useMemo(function(){return{layout:n,tableElementRef:t,tableMemoryRef:r}},[n,t,r]);return v(J.Provider,{value:a},i)},tr=function(e,t){var r=le(e).map(ce);t.current.dataColumns=r},xe=function(e,t,r){var n=t.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;t.current&&e&&n&&(t.current.style.setProperty("--data-table-library_grid-template-columns",e),tr(t,r))},nr=function(e,t){t!=null&&t.onLayoutChange&&e&&t.onLayoutChange(e)},or=`
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
`),Mr=q(or,";",""),De=s.forwardRef(function(e,t){var r=s.useContext(J);if(!r)throw new Error("No Layout Context.");var n=r.layout,i=n!=null&&n.isDiv?"div":"td";return v(i,X({css:Mr,ref:t},e))}),qr=q(or," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),Ee=s.forwardRef(function(e,t){var r=s.useContext(J);if(!r)throw new Error("No Layout Context.");var n=r.layout,i=n!=null&&n.isDiv?"div":"th";return v(i,X({css:qr,ref:t},e))}),Xr={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Se=function(e){var t=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,r=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:Xr,area:q("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",t,"px;height:100%;&:hover,&.active{background-color:",r,";}","")}},ir=function(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},Pe=ir,ar=function(e,t){if(e){if(typeof e=="string")return Pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Pe(e,t):void 0}},Gr=function(e){if(Array.isArray(e))return e},Jr=function(e,t){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(d){i=!0,a=d}finally{try{n||l.return==null||l.return()}finally{if(i)throw a}}return r}},Zr=ar,Qr=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},ye=function(e,t){return Gr(e)||Jr(e,t)||Zr(e,t)||Qr()},de=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},Yr=ir,Ur=function(e){if(Array.isArray(e))return Yr(e)},Kr=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},Ir=ar,et=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},be=function(e){return Ur(e)||Kr(e)||Ir(e)||et()},ge=null,rt=function(){return ge||(ge=s.createContext(null))},tt=function(){return s.useContext(ge)};function Ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ne(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var nt=function(e,t){var r=s.useContext(J);if(!r)throw new Error("No Layout Context.");var n=r.tableElementRef,i=r.tableMemoryRef,a=r.layout,c=s.useRef(null),l=s.useRef(null),d=s.useRef(""),f=s.useRef(null),p=s.useRef(!1),u=s.useCallback(function(b){var k;b.preventDefault(),d.current=n.current.style.getPropertyValue("--data-table-library_grid-template-columns"),p.current=!0,f.current=c.current.offsetWidth-b.pageX,(k=c.current)===null||k===void 0||k.querySelector(".resizer-area").classList.add("active")},[n]),m=s.useCallback(function(b){if(p.current){b.preventDefault();var k=f.current+b.pageX,C=function($,g,D,N){var R=le(D).map(ce).filter(function(h){return!h.isHide}),F=R.findIndex(function(h){return h.index===$}),P=(R=R.map(function(h,O){return Re(Re({},h),{},{index:O})})).reduce(function(h,O,B){return h||(B>F&&O.width!==0?O:h)},null),Z=R.reduce(function(h,O){return h+O.width},0),_=R[F].minWidth,Q=N>_&&N!==0?N:_,G=Q-R[F].width,E=R.map(function(h,O){if(P&&F===O)return P.width-G>_?Q:h.width;if((P==null?void 0:P.index)===O){var B=h.width-G;return B>_?B:h.width}return h.width}),ee=Z-E.reduce(function(h,O){return h+O},0);E[F]=E[F]+ee;var Y=!1,re=R.slice(0).reverse().map(function(h,O){var B=E.slice(0).reverse()[O],U=B/Z*100;return h.isStiff||g!=null&&g.horizontalScroll?"".concat(B,"px"):Y?"minmax(0, ".concat(U,"%)"):(Y=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),L=function(h,O){if(be(Array.from(h.classList)).includes("pin-left")){var B=E.reduce(function(K,V,ne){return ne>=O?K:K+V},0);h.style.left="".concat(B,"px")}if(be(Array.from(h.classList)).includes("pin-right")){var U=E.reduceRight(function(K,V,ne){return ne<=O?K:K+V},0);h.style.right="".concat(U,"px")}};return _r(D,L),Vr(D,L),re}(e,a,n,k);xe(C,n,i)}},[e,a,n,i]),w=s.useCallback(function(){var b;p.current=!1;var k=n.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(d.current!==k){nr(k,a);var C=le(n).map(ce);i.current.dataColumns=C}(b=c.current)===null||b===void 0||b.querySelector(".resizer-area").classList.remove("active")},[a,n,i]);return s.useEffect(function(){var b=l.current;return b&&(b.addEventListener("mousedown",u),document.addEventListener("mousemove",m),document.addEventListener("mouseup",w)),function(){b&&(b.removeEventListener("mousedown",u),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",w))}},[t,u,m,w]),{cellRef:c,resizeRef:l}},ot=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Fe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var Le=function(e,t){return t.find(function(r){return r.index===e})},T=function(e){var t=e.index,r=e.className,n=e.hide,i=e.pinLeft,a=e.pinRight,c=e.stiff,l=e.isFooter,d=e.includePreviousColSpan,f=e.previousColSpans,p=e.gridColumnStart,u=e.gridColumnEnd,m=e.resize,w=e.role,b=w===void 0?"columnheader":w,k=e.children,C=e.style,$=ae(e,ot),g=s.useContext(se);(function(Q,G){var E=s.useContext(J);if(!E)throw new Error("No Layout Context.");var ee=E.layout,Y=E.tableElementRef,re=E.tableMemoryRef;s.useLayoutEffect(function(){var L=re.current.dataColumns,h=le(Y).map(ce),O=Le(Q,L),B=(O==null?void 0:O.isHide)===!!G;if(L!=null&&L.length&&!B){var U=h.filter(function(V){return!V.isHide}).map(function(V){if(V.isStiff||ee!=null&&ee.horizontalScroll){var ne=Le(V.index,L);return ne?"".concat(ne.width||2*ne.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");xe(U,Y,re),nr(U,ee);var K=le(Y).map(ce);re.current.dataColumns=K}},[Q,G,ee,Y,re])})(t,n);var D=nt(t,n),N=D.cellRef,R=D.resizeRef,F=p&&u,P=F?u-p-1:0,Z=d?p+f:p,_=d?u+f:u;return v(s.Fragment,null,v(Ee,X({role:b,"data-table-library_th":"","data-hide":!!n,"data-resize-min-width":typeof m=="boolean"||(m==null?void 0:m.minWidth)==null?75:m.minWidth,style:Fe(Fe({},F?{gridColumnStart:Z,gridColumnEnd:_}:{}),C),css:q(g==null?void 0:g.BaseCell," ",l?g==null?void 0:g.FooterCell:g==null?void 0:g.HeaderCell,";",""),className:I("th",r,{stiff:c,hide:n,resize:m,"pin-left":i,"pin-right":a}),ref:N},$),v("div",null,k),m&&!n&&v("div",{className:"resizer-area",ref:R,css:Se(m).area},v("span",{className:"resizer-handle",css:Se(m).handle}))),Array.from({length:P},function(){return v(Ee,{className:I("th","hide","colspan")})}))},ve=null,it=function(){return ve||(ve=s.createContext(null))},at=function(){return s.useContext(ve)},st=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},lt=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ze(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Te(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var z=function(e){e.index;var t=e.className,r=e.hide,n=e.pinLeft,i=e.pinRight,a=e.stiff,c=e.includePreviousColSpan,l=e.previousColSpans,d=e.gridColumnStart,f=e.gridColumnEnd,p=e.onClick,u=e.children,m=e.style,w=ae(e,lt),b=s.useContext(se),k=d&&f,C=k?f-d-1:0,$=c?d+l:d,g=c?f+l:f;return v(s.Fragment,null,v(De,X({role:"gridcell","data-table-library_td":"",style:ze(ze({},k?{gridColumnStart:$,gridColumnEnd:g}:{}),m),css:q(b==null?void 0:b.BaseCell," ",b==null?void 0:b.Cell,";",""),className:I("td",t,{stiff:a,hide:r,"pin-left":n,"pin-right":i}),onClick:p},w),v("div",null,u)),Array.from({length:C},function(){return v(De,{className:I("td","hide","colspan")})}))},je=null,ct=function(){return je||(je=s.createContext(null))},ut=function(){return s.useContext(je)},Ce=null,dt=function(){return Ce||(Ce=s.createContext(null))},pt=function(){var e=s.useState(!1),t=ye(e,2),r=t[0],n=t[1];return s.useEffect(function(){var i=function(c){c.shiftKey?n(!0):r&&n(!1)},a=function(){r&&n(!1)};return document&&(document.addEventListener("keydown",i),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",i),document.removeEventListener("keyup",a))}},[r]),r},ft=function(){return{select:ut(),tree:at(),sort:tt(),pagination:s.useContext(Ce)}},ht=function(e){var t=e.sort,r=e.pagination,n=e.tree;return function(i){var a=be(i);return a=t?t.modifier(a):a,a=r?r.modifier(a):a,a=n?n.modifier(a):a}},xt=function(e){return e.reduce(function(t,r){return Object.keys(r).forEach(function(n){t[n]||(t[n]=""),t[n]=`
        `.concat(t[n],`
        `).concat(r[n],`
      `)}),t},{})},mt=function(e){return Array.isArray(e)?xt(e):e},yt=["children"],Ae=function(e){var t=e.children,r=ae(e,yt),n=s.useContext(se),i=s.useContext(J);if(!i)throw new Error("No Layout Context.");var a=i.layout,c=a!=null&&a.isDiv?"div":"tbody";return v(c,X({css:q(n==null?void 0:n.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},r),t)},bt=["isFooter","children"],We=function(e){var t=e.isFooter,r=e.children,n=ae(e,bt),i=s.useContext(se),a=s.useContext(J);if(!a)throw new Error("No Layout Context.");var c=a.layout,l=c!=null&&c.isDiv?"div":t?"tfoot":"thead";return v(l,X({role:"rowgroup",className:I({tfoot:t,thead:!t}),css:q(`
  display: contents;
`," ",t?i==null?void 0:i.Footer:i==null?void 0:i.Header,";","")},n),s.Children.map(r,function(d){if(s.isValidElement(d))return s.cloneElement(d)}))},_e=null,gt=function(){return _e||(_e=s.createContext(null))},vt=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],jt={Table:`
    height: 100%;
  `},Ve=s.forwardRef(function(e,t){var r=e.data,n=e.theme,i=e.layout,a=e.sort,c=e.pagination,l=e.select,d=e.tree,f=e.onInit,p=f===void 0?function(){}:f,u=e.className,m=u===void 0?"table":u,w=e.children,b=ae(e,vt),k=function(L){var h=s.useRef(null);return L&&(h=L),h}(t),C=function(L){var h=s.useRef(null);return h.current||(h.current={onlyOnce:!1,dataColumns:[]}),h}(),$=ht({sort:a,pagination:c,tree:d,select:l})(r.nodes),g=function(L,h){var O=s.useState(!1),B=ye(O,2),U=B[0],K=B[1];return[U,function(V){V&&(U||(K(!0),h.current=V,L(V)))}]}(p,k),D=ye(g,2),N=D[0],R=D[1],F=pt(),P=[];i!=null&&i.fixedHeader&&(P=P.concat(jt)),n&&(P=P.concat(n));var Z,_=mt(P),Q=i!=null&&i.isDiv?"div":"table",G=gt(),E=rt(),ee=ct(),Y=it(),re=dt();return v(Q,X({role:"grid","data-table-library_table":"",css:q((Z={isShiftDown:F},`
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
  `))," ",_==null?void 0:_.Table,";",""),className:I(m),ref:R},b),N&&v(G.Provider,{value:r},v(se.Provider,{value:_},v(E.Provider,{value:a},v(ee.Provider,{value:l},v(Y.Provider,{value:d},v(re.Provider,{value:c},v(Hr,{layout:i,tableElementRef:k,tableMemoryRef:C},w&&w($)))))))))}),sr=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},Ct=s.forwardRef(function(e,t){var r=s.useContext(J);if(!r)throw new Error("No Layout Context.");var n=r.layout,i=n!=null&&n.isDiv?"div":"tr";return v(i,X({css:q(sr(),";",""),ref:t},e))}),wt=s.forwardRef(function(e,t){var r=s.useContext(J);if(!r)throw new Error("No Layout Context.");var n=r.layout,i=n!=null&&n.isDiv?"div":"tr";return v(i,X({css:q(sr(),";",""),ref:t},e))}),lr=function(e){return e.type?e.type===s.Fragment:e===s.Fragment},cr=function(e,t){return s.Children.toArray(e).reduce(function(r,n,i){return s.isValidElement(n)?i>=t?r:n.props.gridColumnStart||n.props.gridColumnEnd?r+n.props.gridColumnEnd-n.props.gridColumnStart-1:r:r},0)},kt=["className","role","isFooter","children"];function He(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Me(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?He(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var qe=function(e){var t,r=e.className,n=e.role,i=n===void 0?"rowheader":n,a=e.isFooter,c=e.children,l=ae(e,kt),d=s.useContext(se),f=s.useRef(null);return t=s.useContext(J),s.useLayoutEffect(function(){var p;if(!t)throw new Error("No Layout Context.");var u=t.layout,m=t.tableElementRef,w=t.tableMemoryRef,b=le(m).map(ce);if((p=w.current)===null||p===void 0||!p.onlyOnce)if(w.current.onlyOnce=!0,u!=null&&u.resizedLayout){var k=u==null?void 0:u.resizedLayout;xe(k,m,w)}else if(u!=null&&u.custom)tr(m,w);else{var C=b.filter(function($){return!$.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");xe(C,m,w)}},[t]),v(wt,X({role:i,"data-table-library_tr-header":"",css:q(d==null?void 0:d.BaseRow," ",a?d==null?void 0:d.FooterRow:d==null?void 0:d.HeaderRow,";",""),className:I("tr",r,{"tr-footer":a,"tr-header":!a}),ref:f},l),s.Children.toArray(c).filter(Boolean).map(function(p,u){if(s.isValidElement(p)){var m={};return lr(p)||(m=Me(Me({},m),{},{index:u,previousColSpans:cr(c,u)})),s.cloneElement(p,m)}}))},Ot=function(){},$t=function(e,t,r,n){(function(i){var a=i.onSingleClick,c=i.onDoubleClick,l=i.ref,d=s.useRef(0);s.useEffect(function(){var f=l.current,p=function(u){c&&(d.current===0&&a(u),d.current+=1,setTimeout(function(){d.current===2&&c(u),d.current=0},300))};return f==null||f.addEventListener("click",p),function(){f==null||f.removeEventListener("click",p)}})})({onSingleClick:t?function(i){return t(n,i)}:Ot,onDoubleClick:r?function(i){return r(n,i)}:null,ref:e})},Dt=["item","className","disabled","onClick","onDoubleClick","children"];function Xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Xe(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Xe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var Ge=function(e){var t=e.item,r=e.className,n=e.disabled,i=e.onClick,a=e.onDoubleClick,c=e.children,l=ae(e,Dt),d=function(C,$){return Object.values(C).filter(Boolean).filter(function(g){return g==null?void 0:g.hasOwnProperty("_getRowProps")}).map(function(g){return g._getRowProps($,C)})}(ft(),e),f=s.useContext(se),p=function(C,$){var g=C.reduce(function(D,N){var R=N.theme,F=N.className,P=N.onClick,Z=`
        `.concat(D.themeByFeature,`
        `).concat(R,`
      `),_=I(D.classNamesByFeature,F),Q=D.clickable||!!P;return pe(pe({},D),{},{themeByFeature:Z,classNamesByFeature:_,clickable:Q,onClickByFeature:function(G,E){P(G,E),D.onClickByFeature(G,E)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!$,onClickByFeature:function(D,N){$&&st(N)&&$(D,N)}});return{themeByFeature:g.themeByFeature,classNamesByFeature:g.classNamesByFeature,clickable:g.clickable,onClickByFeature:g.onClickByFeature}}(d,i),u=p.themeByFeature,m=p.classNamesByFeature,w=p.clickable,b=p.onClickByFeature,k=s.useRef(null);return $t(k,b,a,t),v(Ct,X({role:"row","data-table-library_tr-body":"",onClick:n||a?function(){}:function(C){return b(t,C)},css:q(u," ",f==null?void 0:f.BaseRow," ",f==null?void 0:f.Row,";",""),className:I("tr","tr-body",m,r,{disabled:n,clickable:w||!!a}),ref:k},l),s.Children.toArray(c).filter(Boolean).map(function(C,$){if(s.isValidElement(C)){var g={};return lr(C)||(g=pe(pe({},g),{},{index:$,previousColSpans:cr(c,$)})),s.cloneElement(C,g)}}))};const Et={...Ie,...Ar},ur=({list:e,productTable:t,exerciseTable:r,onDelete:n,date:i})=>{const a={nodes:e};return o.jsxs(o.Fragment,{children:[t&&o.jsxs(Oe,{children:[o.jsxs($e,{children:[o.jsx(ue,{children:"Title"}),o.jsx(ue,{children:"Category"}),o.jsx(ue,{children:"Calories"}),o.jsx(ue,{children:"Weight"}),o.jsx(ue,{children:"Recommend"})]}),o.jsx(Ve,{data:a,theme:Ie,layout:{custom:!0},children:c=>o.jsxs(o.Fragment,{children:[o.jsx(We,{children:o.jsxs(qe,{children:[o.jsx(T,{children:"Title"}),o.jsx(T,{children:"Category"}),o.jsx(T,{children:"Calories"}),o.jsx(T,{children:"Weight"}),o.jsx(T,{children:"Recommend"}),o.jsx(T,{children:""})]})}),o.jsx(Ae,{children:c.map(l=>o.jsxs(Ge,{item:l,children:[o.jsx(z,{children:M(l.title)}),o.jsx(z,{children:M(l.category)}),o.jsx(z,{children:l.calories}),o.jsx(z,{children:l.amount}),o.jsxs(z,{children:[o.jsx(zr,{bgColor:l.recommend?"#419B09":"#E9101D"}),l.recommend?"Yes":"No"]}),o.jsx(z,{children:o.jsx(fe,{onClick:()=>n({date:i,id:l._id,calories:l.calories,time:l.amount}),children:o.jsx(he,{children:o.jsx("use",{href:te+"#icon-trash"})})})})]},l._id))})]})})]}),r&&o.jsxs(Oe,{children:[o.jsxs($e,{children:[o.jsx(oe,{children:"Body Part"}),o.jsx(oe,{children:"Equipment"}),o.jsx(oe,{children:"Name"}),o.jsx(oe,{children:"Target"}),o.jsx(oe,{}),o.jsx(oe,{children:"Time"}),o.jsx(oe,{children:""})]}),o.jsx(Ve,{data:a,theme:Et,layout:{custom:!0},children:c=>o.jsxs(o.Fragment,{children:[o.jsx(We,{children:o.jsxs(qe,{children:[o.jsx(T,{children:"Body Part"}),o.jsx(T,{children:"Equipment"}),o.jsx(T,{children:"Name"}),o.jsx(T,{children:"Target"}),o.jsx(T,{children:"Burned Cal..."}),o.jsx(T,{children:"Time"}),o.jsx(T,{children:""})]})}),o.jsx(Ae,{children:c.map(l=>o.jsxs(Ge,{item:l,children:[o.jsx(z,{children:M(l.bodyPart)}),o.jsx(z,{children:M(l.equipment)}),o.jsx(z,{children:M(l.name)}),o.jsx(z,{children:M(l.target)}),o.jsx(z,{children:l.burnedCalories}),o.jsx(z,{children:l.time}),o.jsx(z,{children:o.jsx(fe,{onClick:()=>n({date:i,id:l._id,calories:l.burnedCalories,time:l.time}),children:o.jsx(he,{children:o.jsx("use",{href:te+"#icon-trash"})})})})]},l._id))})]})})]})]})};ur.propTypes={list:S.array,productTable:S.bool,exerciseTable:S.bool,onDelete:S.func,date:S.string};const Je=y.div`
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
`,Ze=y.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 8px;
  }
`,Qe=y.div`
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
`,W=y.p`
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
`,dr=({list:e,productTable:t,exerciseTable:r,onDelete:n,date:i})=>o.jsxs(o.Fragment,{children:[t&&o.jsx(Je,{children:e.map(a=>o.jsxs(Ze,{children:[o.jsxs(A,{children:["Title",o.jsx(W,{children:M(a.title)})]}),o.jsxs(A,{children:["Category",o.jsx(W,{children:M(a.category)})]}),o.jsxs(Qe,{children:[o.jsxs(A,{children:["Calories",o.jsx(W,{children:a.amount})]}),o.jsxs(A,{children:["Weight ",o.jsx(W,{children:a.calories})]}),o.jsxs(A,{children:["Recommend",o.jsx(W,{before:!0,colorBefore:a.recommend,children:a.recommend?"Yes":"No"})]}),o.jsx(A,{children:o.jsx(W,{children:o.jsx(fe,{onClick:()=>n({date:i,id:a._id,calories:a.calories,time:a.amount}),children:o.jsx(he,{children:o.jsx("use",{href:te+"#icon-trash"})})})})})]})]},a._id))}),r&&o.jsx(Je,{children:e.map(a=>o.jsxs(Ze,{children:[o.jsxs(A,{children:["Body Part",o.jsx(W,{children:M(a.bodyPart)})]}),o.jsxs(A,{children:["Equipment",o.jsx(W,{children:M(a.equipment)})]}),o.jsxs(A,{children:["Name",o.jsx(W,{children:M(a.name)})]}),o.jsxs(Qe,{children:[o.jsxs(A,{children:["Target ",o.jsx(W,{children:M(a.target)})]}),o.jsxs(A,{children:["Burned Calor..",o.jsx(W,{children:a.burnedCalories})]}),o.jsxs(A,{children:["Time ",o.jsx(W,{children:a.time})]}),o.jsxs(A,{children:[" ",o.jsx(W,{children:o.jsx(fe,{onClick:()=>n({date:i,id:a._id,calories:a.burnedCalories,time:a.time}),children:o.jsx(he,{children:o.jsx("use",{href:te+"#icon-trash"})})})})]})]})]},a._id))})]});dr.propTypes={list:S.array,productTable:S.bool,exerciseTable:S.bool,onDelete:S.func,date:S.string};const we=({to:e,marginBottom:t,list:r,productTable:n,exerciseTable:i,date:a})=>{const c=Ke(),l=({date:d,id:f,calories:p,time:u})=>{n&&c(mr({productId:f,date:d,calories:p,time:u})),i&&c(yr({exerciseId:f,date:d,calories:p,time:u}))};return o.jsxs(Nr,{marginBottom:t,children:[o.jsxs(Rr,{children:[o.jsx(Br,{children:n?"Products":"Exercises"}),o.jsxs(Fr,{to:e,children:["Add ",n?"product":"exercise",o.jsx(Tr,{children:o.jsx("use",{href:te+"#arrow-right"})})]})]}),r.length!==0?o.jsxs(o.Fragment,{children:[o.jsx(ur,{list:r,productTable:n,exerciseTable:i,onDelete:l,date:a}),o.jsx(dr,{list:r,productTable:n,exerciseTable:i,onDelete:l,date:a})]}):o.jsxs(Lr,{children:["Not found ",n?"products":"exercises"]})]})};we.propTypes={to:S.string,marginBottom:S.number,list:S.array,productTable:S.bool,exerciseTable:S.bool,date:S.string};const St=y.div`
  position: relative;

  padding: 0 20px;
  ${x.tablet} {
    padding: 0 32px;
  }
  ${x.desktop} {
    padding: 0 96px;
  }
`,Pt=y.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${x.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Nt=y.div`
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 667;
  right: 20px;
  top: 4px;

  ${x.tablet} {
    right: 32px;
    top: -10px;
  }

  ${x.desktop} {
    right: 96px;
  }
`,Ye=y.button`
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
`,Ue=y.svg`
  width: 16px;
  height: 16px;

  transition: fill 0.3s;

  fill: ${j.white};
`,Rt=y.div`
  width: auto;

  ${x.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${x.desktop} {
    margin-top: 0;
  }
`,Bt=y.div`
  width: auto;

  ${x.tablet} {
    width: 704px;
  }

  ${x.desktop} {
    width: 826px;
  }
`,Ft={top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}},Lt=y.label`
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
`,Tt=y.input`
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
`,zt=y.svg`
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
`,pr=s.forwardRef((e,t)=>{const{value:r,onClick:n}=e;return o.jsxs(Lt,{onClick:n,ref:t,children:[o.jsx(Tt,{value:r||"",name:"name",readOnly:!0}),o.jsx(zt,{children:o.jsx("use",{href:`${te}#calendar`})})]})});pr.displayName="CustomInputForCalendar";const qt=()=>{const[e,t]=s.useState(new Date),[r,n]=s.useState(""),i=ie(Or),a=ie($r),c=Ke();s.useEffect(()=>{c(br(r||l(r,e)))},[c,e,r]);const l=(f,p)=>{const u=wr(p);return n(u),t(p),u},d=(f,p)=>{const u=new Date(p);f==="nextDay"&&u.setDate(u.getDate()+1),f==="previousDay"&&u.setDate(u.getDate()-1),l(u,u)};return o.jsxs(St,{children:[o.jsx(Cr,{text:"Diary",margin:Ft}),o.jsxs(Nt,{children:[o.jsx(kr,{value:e,onChange:l,name:"name",dateFormat:"dd/MM/yyyy",customInput:o.jsx(pr,{}),withoutВorder:!0}),o.jsx(Ye,{onClick:()=>d("previousDay",e),children:o.jsx(Ue,{children:o.jsx("use",{href:te+"#chevron-left"})})}),o.jsx(Ye,{onClick:()=>d("nextDay",e),children:o.jsx(Ue,{children:o.jsx("use",{href:te+"#chevron-right"})})})]}),o.jsxs(Pt,{children:[o.jsxs(Rt,{children:[o.jsx(Pr,{}),o.jsx(gr,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:vr})]}),o.jsxs(Bt,{children:[o.jsx(we,{marginBottom:40,list:i,productTable:!0,date:r,to:"/products"}),o.jsx(we,{list:a,exerciseTable:!0,date:r,to:"/exercises"})]})," "]})]})};export{qt as default};
