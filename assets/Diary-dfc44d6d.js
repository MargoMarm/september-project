import{n as y,m,a as J,J as hr,K as xr,j as o,c as j,N as mr,r as s,Z as ee,P as S,A as me,s as ne,u as Ie,M as yr,O as gr,S as br}from"./index-1f286196.js";import{D as H,a as vr,m as jr}from"./descriptionTextMargin-5769a263.js";import{r as Cr}from"./react-responsive-9ec20605.js";import{T as wr}from"./Title-8b7f9122.js";import{c as M,f as kr}from"./formatDate-d1383d55.js";import{c as q,j as v,C as Or}from"./Calendar-ea567eca.js";const Oe=y.ul`
  display: grid;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${m.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 593px;


  }
  ${m.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,$r=e=>e.diary.products,Dr=e=>e.diary.exercises,Er=e=>e.diary.isLoading,Sr=e=>e.diary.isLoadingExercies,Pr=e=>e.diary.isLoadingProducts,Nr=e=>e.diary.burnedCalories,Lr=e=>e.diary.consumedCalories,Rr=e=>e.diary.doneExercisesTime,Br=()=>{const e=Cr.useMediaQuery({minWidth:768,maxWidth:1439}),t=J(hr),r=J(xr),n=J(Nr),i=J(Lr),a=J(Rr);function u(p){const f=Math.floor(p/60),w=p%60;return{minutes:f,seconds:w}}const c=u(a);let l=t-c.minutes,d=r-i;return e?o.jsxs(Oe,{children:[" ",o.jsx(H,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:r}),o.jsx(H,{icon:"apple",label:"Сalories consumed",keyValue:i}),o.jsx(H,{icon:"bubble",label:"The rest of the calories",keyValue:d,border:d<0?"red":"default"}),o.jsx(H,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:t+" min"}),o.jsx(H,{icon:"fire",label:"Сalories burned",keyValue:n}),o.jsx(H,{icon:"runningMan",label:"The rest of sports",keyValue:l+" min",border:l>t?"green":"default"})]}):o.jsxs(Oe,{children:[o.jsx(H,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:r}),o.jsx(H,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:t+" min"}),o.jsx(H,{icon:"apple",label:"Сalories consumed",keyValue:i}),o.jsx(H,{icon:"fire",label:"Сalories burned",keyValue:n}),o.jsx(H,{icon:"bubble",label:"The rest of the calories",keyValue:d,border:d<0?"red":"default"}),o.jsx(H,{icon:"runningMan",label:"The rest of sports",keyValue:l+" min",border:l>t?"green":"default"})]})},Fr=y.div`
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

  ${m.tablet} {
    width: auto;
    height: 234px;
  }

  ${m.desktop} {
    width: auto;
  }
`,Tr=y.div`
  display: flex;
  justify-content: space-between;
`,zr=y.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.29;

  color: ${j.textWhite05};
`,Ar=y(mr)`
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
`,Wr=y.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${j.textWhite05};
`,_r=y.svg`
  width: 20px;
  height: 20px;
  margin-left: 8px;

  stroke: ${j.orange};

  transition: stroke 250ms ease-in-out;
`,$e=y.div`
  display: none;
  
  ${m.tablet} {
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
`,De=y.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${m.desktop} {
    margin-left: 16px;
  }
`,ue=y.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${j.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 188px;

    ${m.desktop} {
      margin-right: 196px;
    }
  }

  :nth-of-type(2) {
    margin-right: 87px;

    ${m.desktop} {
      margin-right: 125px;
    }
  }

  :nth-of-type(3) {
    margin-right: 54px;

    ${m.desktop} {
      margin-right: 69px;
    }
  }

  :nth-of-type(4) {
    margin-right: 60px;

    ${m.desktop} {
      margin-right: 75px;
    }
  }

  :nth-of-type(5) {
    margin-right: 12px;
  }
`,ie=y.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${j.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 45px;

    ${m.desktop} {
      margin-right: 70px;
    }
  }

  :nth-of-type(2) {
    margin-right: 82px;

    ${m.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(3) {
    margin-right: 104px;

    ${m.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(4) {
    margin-right: 58px;

    ${m.desktop} {
      margin-right: 80px;
    }
  }

  :nth-of-type(5)::before {
    content: 'Burned calor...';
    margin-right: 14px;

    ${m.desktop} {
      content: 'Burned Calories';
      margin-right: 15px;
    }
  }
`,Vr=y.div`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  margin-right: 8px;
  background: ${e=>e.bgColor};
`,Hr={Table:`
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

    ${m.desktop} {
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
  `},er={Table:`
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

    ${m.desktop} {
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
  `};function ye(){return rr=ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ye.apply(this,arguments)}var rr=ye,X=rr,Mr=function(e,t){if(e==null)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i},ae=function(e,t){if(e==null)return{};var r,n,i=Mr(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i},se=s.createContext(null),le=function(e){var t=e.current.querySelector(".tr-header");return Array.from((t==null?void 0:t.querySelectorAll(".th"))||[])},tr=function(e,t,r,n){return Array.from(e.current.querySelectorAll(r)).forEach(function(i){var a=Array.from(i.querySelectorAll(n)),u=a.length;a.forEach(function(x,c){return t(x,c,u)})})},qr=function(e,t){return tr(e,t,".tr-header",".th")},Xr=function(e,t){return tr(e,t,".tr-body",".td")},ce=function(e,t){return{index:t,minWidth:+e.getAttribute("data-resize-min-width"),width:e.getBoundingClientRect().width,isStiff:e.classList.contains("stiff"),isHide:e.getAttribute("data-hide")==="true",isColSpan:e.classList.contains("colspan")}},Z=s.createContext(null),Gr=function(e){var t=e.tableElementRef,r=e.tableMemoryRef,n=e.layout,i=e.children,a=s.useMemo(function(){return{layout:n,tableElementRef:t,tableMemoryRef:r}},[n,t,r]);return v(Z.Provider,{value:a},i)},nr=function(e,t){var r=le(e).map(ce);t.current.dataColumns=r},xe=function(e,t,r){var n=t.current.style.getPropertyValue("--data-table-library_grid-template-columns")!==e;t.current&&e&&n&&(t.current.style.setProperty("--data-table-library_grid-template-columns",e),nr(t,r))},or=function(e,t){t!=null&&t.onLayoutChange&&e&&t.onLayoutChange(e)},ir=`
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
`),Jr=q(ir,";",""),Ee=s.forwardRef(function(e,t){var r=s.useContext(Z);if(!r)throw new Error("No Layout Context.");var n=r.layout,i=n!=null&&n.isDiv?"div":"td";return v(i,X({css:Jr,ref:t},e))}),Zr=q(ir," z-index:1;text-align:left;position:sticky;top:0;&.pin-left,&.pin-right{z-index:3;}",""),Se=s.forwardRef(function(e,t){var r=s.useContext(Z);if(!r)throw new Error("No Layout Context.");var n=r.layout,i=n!=null&&n.isDiv?"div":"th";return v(i,X({css:Zr,ref:t},e))}),Qr={name:"1k13m5t",styles:"z-index:2;position:absolute;top:0;right:0;bottom:0;width:1px;margin:4px 0"},Pe=function(e){var t=typeof e=="boolean"||(e==null?void 0:e.resizerWidth)==null?10:e.resizerWidth,r=typeof e=="boolean"||(e==null?void 0:e.resizerHighlight)==null?"transparent":e.resizerHighlight;return{handle:Qr,area:q("z-index:1;position:absolute;top:0;right:0;bottom:0;cursor:ew-resize;width:",t,"px;height:100%;&:hover,&.active{background-color:",r,";}","")}},ar=function(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},Ne=ar,sr=function(e,t){if(e){if(typeof e=="string")return Ne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ne(e,t):void 0}},Yr=function(e){if(Array.isArray(e))return e},Kr=function(e,t){if(typeof Symbol<"u"&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,a=void 0;try{for(var u,x=e[Symbol.iterator]();!(n=(u=x.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(c){i=!0,a=c}finally{try{n||x.return==null||x.return()}finally{if(i)throw a}}return r}},Ur=sr,Ir=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},ge=function(e,t){return Yr(e)||Kr(e,t)||Ur(e,t)||Ir()},de=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},et=ar,rt=function(e){if(Array.isArray(e))return et(e)},tt=function(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)},nt=sr,ot=function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},be=function(e){return rt(e)||tt(e)||nt(e)||ot()},ve=null,it=function(){return ve||(ve=s.createContext(null))},at=function(){return s.useContext(ve)};function Le(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Le(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Le(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var st=function(e,t){var r=s.useContext(Z);if(!r)throw new Error("No Layout Context.");var n=r.tableElementRef,i=r.tableMemoryRef,a=r.layout,u=s.useRef(null),x=s.useRef(null),c=s.useRef(""),l=s.useRef(null),d=s.useRef(!1),p=s.useCallback(function(g){var k;g.preventDefault(),c.current=n.current.style.getPropertyValue("--data-table-library_grid-template-columns"),d.current=!0,l.current=u.current.offsetWidth-g.pageX,(k=u.current)===null||k===void 0||k.querySelector(".resizer-area").classList.add("active")},[n]),f=s.useCallback(function(g){if(d.current){g.preventDefault();var k=l.current+g.pageX,C=function($,b,D,N){var L=le(D).map(ce).filter(function(h){return!h.isHide}),B=L.findIndex(function(h){return h.index===$}),P=(L=L.map(function(h,O){return Re(Re({},h),{},{index:O})})).reduce(function(h,O,R){return h||(R>B&&O.width!==0?O:h)},null),Q=L.reduce(function(h,O){return h+O.width},0),_=L[B].minWidth,Y=N>_&&N!==0?N:_,G=Y-L[B].width,E=L.map(function(h,O){if(P&&B===O)return P.width-G>_?Y:h.width;if((P==null?void 0:P.index)===O){var R=h.width-G;return R>_?R:h.width}return h.width}),re=Q-E.reduce(function(h,O){return h+O},0);E[B]=E[B]+re;var K=!1,te=L.slice(0).reverse().map(function(h,O){var R=E.slice(0).reverse()[O],U=R/Q*100;return h.isStiff||b!=null&&b.horizontalScroll?"".concat(R,"px"):K?"minmax(0, ".concat(U,"%)"):(K=!0,"minmax(0, 1fr)")}).slice(0).reverse().join(" "),F=function(h,O){if(be(Array.from(h.classList)).includes("pin-left")){var R=E.reduce(function(I,V,oe){return oe>=O?I:I+V},0);h.style.left="".concat(R,"px")}if(be(Array.from(h.classList)).includes("pin-right")){var U=E.reduceRight(function(I,V,oe){return oe<=O?I:I+V},0);h.style.right="".concat(U,"px")}};return qr(D,F),Xr(D,F),te}(e,a,n,k);xe(C,n,i)}},[e,a,n,i]),w=s.useCallback(function(){var g;d.current=!1;var k=n.current.style.getPropertyValue("--data-table-library_grid-template-columns");if(c.current!==k){or(k,a);var C=le(n).map(ce);i.current.dataColumns=C}(g=u.current)===null||g===void 0||g.querySelector(".resizer-area").classList.remove("active")},[a,n,i]);return s.useEffect(function(){var g=x.current;return g&&(g.addEventListener("mousedown",p),document.addEventListener("mousemove",f),document.addEventListener("mouseup",w)),function(){g&&(g.removeEventListener("mousedown",p),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",w))}},[t,p,f,w]),{cellRef:u,resizeRef:x}},lt=["index","className","hide","pinLeft","pinRight","stiff","isFooter","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","resize","role","children","style"];function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Fe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Be(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var Te=function(e,t){return t.find(function(r){return r.index===e})},T=function(e){var t=e.index,r=e.className,n=e.hide,i=e.pinLeft,a=e.pinRight,u=e.stiff,x=e.isFooter,c=e.includePreviousColSpan,l=e.previousColSpans,d=e.gridColumnStart,p=e.gridColumnEnd,f=e.resize,w=e.role,g=w===void 0?"columnheader":w,k=e.children,C=e.style,$=ae(e,lt),b=s.useContext(se);(function(Y,G){var E=s.useContext(Z);if(!E)throw new Error("No Layout Context.");var re=E.layout,K=E.tableElementRef,te=E.tableMemoryRef;s.useLayoutEffect(function(){var F=te.current.dataColumns,h=le(K).map(ce),O=Te(Y,F),R=(O==null?void 0:O.isHide)===!!G;if(F!=null&&F.length&&!R){var U=h.filter(function(V){return!V.isHide}).map(function(V){if(V.isStiff||re!=null&&re.horizontalScroll){var oe=Te(V.index,F);return oe?"".concat(oe.width||2*oe.minWidth,"px"):"minmax(0px, 1fr)"}return"minmax(0px, 1fr)"}).join(" ");xe(U,K,te),or(U,re);var I=le(K).map(ce);te.current.dataColumns=I}},[Y,G,re,K,te])})(t,n);var D=st(t,n),N=D.cellRef,L=D.resizeRef,B=d&&p,P=B?p-d-1:0,Q=c?d+l:d,_=c?p+l:p;return v(s.Fragment,null,v(Se,X({role:g,"data-table-library_th":"","data-hide":!!n,"data-resize-min-width":typeof f=="boolean"||(f==null?void 0:f.minWidth)==null?75:f.minWidth,style:Fe(Fe({},B?{gridColumnStart:Q,gridColumnEnd:_}:{}),C),css:q(b==null?void 0:b.BaseCell," ",x?b==null?void 0:b.FooterCell:b==null?void 0:b.HeaderCell,";",""),className:ee("th",r,{stiff:u,hide:n,resize:f,"pin-left":i,"pin-right":a}),ref:N},$),v("div",null,k),f&&!n&&v("div",{className:"resizer-area",ref:L,css:Pe(f).area},v("span",{className:"resizer-handle",css:Pe(f).handle}))),Array.from({length:P},function(){return v(Se,{className:ee("th","hide","colspan")})}))},je=null,ct=function(){return je||(je=s.createContext(null))},ut=function(){return s.useContext(je)},dt=function(e){return e.target.tagName==="svg"||e.target.tagName==="path"||e.target.tagName==="DIV"||e.target.tagName==="SPAN"||e.target.tagName==="TD"},pt=["index","className","hide","pinLeft","pinRight","stiff","includePreviousColSpan","previousColSpans","gridColumnStart","gridColumnEnd","onClick","children","style"];function ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function Ae(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ze(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var z=function(e){e.index;var t=e.className,r=e.hide,n=e.pinLeft,i=e.pinRight,a=e.stiff,u=e.includePreviousColSpan,x=e.previousColSpans,c=e.gridColumnStart,l=e.gridColumnEnd,d=e.onClick,p=e.children,f=e.style,w=ae(e,pt),g=s.useContext(se),k=c&&l,C=k?l-c-1:0,$=u?c+x:c,b=u?l+x:l;return v(s.Fragment,null,v(Ee,X({role:"gridcell","data-table-library_td":"",style:Ae(Ae({},k?{gridColumnStart:$,gridColumnEnd:b}:{}),f),css:q(g==null?void 0:g.BaseCell," ",g==null?void 0:g.Cell,";",""),className:ee("td",t,{stiff:a,hide:r,"pin-left":n,"pin-right":i}),onClick:d},w),v("div",null,p)),Array.from({length:C},function(){return v(Ee,{className:ee("td","hide","colspan")})}))},Ce=null,ft=function(){return Ce||(Ce=s.createContext(null))},ht=function(){return s.useContext(Ce)},we=null,xt=function(){return we||(we=s.createContext(null))},mt=function(){var e=s.useState(!1),t=ge(e,2),r=t[0],n=t[1];return s.useEffect(function(){var i=function(u){u.shiftKey?n(!0):r&&n(!1)},a=function(){r&&n(!1)};return document&&(document.addEventListener("keydown",i),document.addEventListener("keyup",a)),function(){document&&(document.removeEventListener("keydown",i),document.removeEventListener("keyup",a))}},[r]),r},yt=function(){return{select:ht(),tree:ut(),sort:at(),pagination:s.useContext(we)}},gt=function(e){var t=e.sort,r=e.pagination,n=e.tree;return function(i){var a=be(i);return a=t?t.modifier(a):a,a=r?r.modifier(a):a,a=n?n.modifier(a):a}},bt=function(e){return e.reduce(function(t,r){return Object.keys(r).forEach(function(n){t[n]||(t[n]=""),t[n]=`
        `.concat(t[n],`
        `).concat(r[n],`
      `)}),t},{})},vt=function(e){return Array.isArray(e)?bt(e):e},jt=["children"],We=function(e){var t=e.children,r=ae(e,jt),n=s.useContext(se),i=s.useContext(Z);if(!i)throw new Error("No Layout Context.");var a=i.layout,u=a!=null&&a.isDiv?"div":"tbody";return v(u,X({css:q(n==null?void 0:n.Body," display:contents;",""),"data-table-library_body":"",className:"tbody"},r),t)},Ct=["isFooter","children"],_e=function(e){var t=e.isFooter,r=e.children,n=ae(e,Ct),i=s.useContext(se),a=s.useContext(Z);if(!a)throw new Error("No Layout Context.");var u=a.layout,x=u!=null&&u.isDiv?"div":t?"tfoot":"thead";return v(x,X({role:"rowgroup",className:ee({tfoot:t,thead:!t}),css:q(`
  display: contents;
`," ",t?i==null?void 0:i.Footer:i==null?void 0:i.Header,";","")},n),s.Children.map(r,function(c){if(s.isValidElement(c))return s.cloneElement(c)}))},Ve=null,wt=function(){return Ve||(Ve=s.createContext(null))},kt=["data","theme","layout","sort","pagination","select","tree","onInit","className","children"],Ot={Table:`
    height: 100%;
  `},He=s.forwardRef(function(e,t){var r=e.data,n=e.theme,i=e.layout,a=e.sort,u=e.pagination,x=e.select,c=e.tree,l=e.onInit,d=l===void 0?function(){}:l,p=e.className,f=p===void 0?"table":p,w=e.children,g=ae(e,kt),k=function(F){var h=s.useRef(null);return F&&(h=F),h}(t),C=function(F){var h=s.useRef(null);return h.current||(h.current={onlyOnce:!1,dataColumns:[]}),h}(),$=gt({sort:a,pagination:u,tree:c,select:x})(r.nodes),b=function(F,h){var O=s.useState(!1),R=ge(O,2),U=R[0],I=R[1];return[U,function(V){V&&(U||(I(!0),h.current=V,F(V)))}]}(d,k),D=ge(b,2),N=D[0],L=D[1],B=mt(),P=[];i!=null&&i.fixedHeader&&(P=P.concat(Ot)),n&&(P=P.concat(n));var Q,_=vt(P),Y=i!=null&&i.isDiv?"div":"table",G=wt(),E=it(),re=ft(),K=ct(),te=xt();return v(Y,X({role:"grid","data-table-library_table":"",css:q((Q={isShiftDown:B},`
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

  `.concat(Q.isShiftDown?`
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    `:"",`
  `))," ",_==null?void 0:_.Table,";",""),className:ee(f),ref:L},g),N&&v(G.Provider,{value:r},v(se.Provider,{value:_},v(E.Provider,{value:a},v(re.Provider,{value:x},v(K.Provider,{value:c},v(te.Provider,{value:u},v(Gr,{layout:i,tableElementRef:k,tableMemoryRef:C},w&&w($)))))))))}),lr=function(){return`
  display: contents;

  &.disabled td {
    cursor: auto;
  }

  `.concat(function(){},`
  background-color: #ffffff;
`)},$t=s.forwardRef(function(e,t){var r=s.useContext(Z);if(!r)throw new Error("No Layout Context.");var n=r.layout,i=n!=null&&n.isDiv?"div":"tr";return v(i,X({css:q(lr(),";",""),ref:t},e))}),Dt=s.forwardRef(function(e,t){var r=s.useContext(Z);if(!r)throw new Error("No Layout Context.");var n=r.layout,i=n!=null&&n.isDiv?"div":"tr";return v(i,X({css:q(lr(),";",""),ref:t},e))}),cr=function(e){return e.type?e.type===s.Fragment:e===s.Fragment},ur=function(e,t){return s.Children.toArray(e).reduce(function(r,n,i){return s.isValidElement(n)?i>=t?r:n.props.gridColumnStart||n.props.gridColumnEnd?r+n.props.gridColumnEnd-n.props.gridColumnStart-1:r:r},0)},Et=["className","role","isFooter","children"];function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function qe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Me(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var Xe=function(e){var t,r=e.className,n=e.role,i=n===void 0?"rowheader":n,a=e.isFooter,u=e.children,x=ae(e,Et),c=s.useContext(se),l=s.useRef(null);return t=s.useContext(Z),s.useLayoutEffect(function(){var d;if(!t)throw new Error("No Layout Context.");var p=t.layout,f=t.tableElementRef,w=t.tableMemoryRef,g=le(f).map(ce);if((d=w.current)===null||d===void 0||!d.onlyOnce)if(w.current.onlyOnce=!0,p!=null&&p.resizedLayout){var k=p==null?void 0:p.resizedLayout;xe(k,f,w)}else if(p!=null&&p.custom)nr(f,w);else{var C=g.filter(function($){return!$.isHide}).map(function(){return"minmax(0px, 1fr)"}).join(" ");xe(C,f,w)}},[t]),v(Dt,X({role:i,"data-table-library_tr-header":"",css:q(c==null?void 0:c.BaseRow," ",a?c==null?void 0:c.FooterRow:c==null?void 0:c.HeaderRow,";",""),className:ee("tr",r,{"tr-footer":a,"tr-header":!a}),ref:l},x),s.Children.toArray(u).filter(Boolean).map(function(d,p){if(s.isValidElement(d)){var f={};return cr(d)||(f=qe(qe({},f),{},{index:p,previousColSpans:ur(u,p)})),s.cloneElement(d,f)}}))},St=function(){},Pt=function(e,t,r,n){(function(i){var a=i.onSingleClick,u=i.onDoubleClick,x=i.ref,c=s.useRef(0);s.useEffect(function(){var l=x.current,d=function(p){u&&(c.current===0&&a(p),c.current+=1,setTimeout(function(){c.current===2&&u(p),c.current=0},300))};return l==null||l.addEventListener("click",d),function(){l==null||l.removeEventListener("click",d)}})})({onSingleClick:t?function(i){return t(n,i)}:St,onDoubleClick:r?function(i){return r(n,i)}:null,ref:e})},Nt=["item","className","disabled","onClick","onDoubleClick","children"];function Ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ge(Object(r),!0).forEach(function(n){de(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ge(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}var Je=function(e){var t=e.item,r=e.className,n=e.disabled,i=e.onClick,a=e.onDoubleClick,u=e.children,x=ae(e,Nt),c=function(C,$){return Object.values(C).filter(Boolean).filter(function(b){return b==null?void 0:b.hasOwnProperty("_getRowProps")}).map(function(b){return b._getRowProps($,C)})}(yt(),e),l=s.useContext(se),d=function(C,$){var b=C.reduce(function(D,N){var L=N.theme,B=N.className,P=N.onClick,Q=`
        `.concat(D.themeByFeature,`
        `).concat(L,`
      `),_=ee(D.classNamesByFeature,B),Y=D.clickable||!!P;return pe(pe({},D),{},{themeByFeature:Q,classNamesByFeature:_,clickable:Y,onClickByFeature:function(G,E){P(G,E),D.onClickByFeature(G,E)}})},{themeByFeature:"",classNamesByFeature:"",clickable:!!$,onClickByFeature:function(D,N){$&&dt(N)&&$(D,N)}});return{themeByFeature:b.themeByFeature,classNamesByFeature:b.classNamesByFeature,clickable:b.clickable,onClickByFeature:b.onClickByFeature}}(c,i),p=d.themeByFeature,f=d.classNamesByFeature,w=d.clickable,g=d.onClickByFeature,k=s.useRef(null);return Pt(k,g,a,t),v($t,X({role:"row","data-table-library_tr-body":"",onClick:n||a?function(){}:function(C){return g(t,C)},css:q(p," ",l==null?void 0:l.BaseRow," ",l==null?void 0:l.Row,";",""),className:ee("tr","tr-body",f,r,{disabled:n,clickable:w||!!a}),ref:k},x),s.Children.toArray(u).filter(Boolean).map(function(C,$){if(s.isValidElement(C)){var b={};return cr(C)||(b=pe(pe({},b),{},{index:$,previousColSpans:ur(u,$)})),s.cloneElement(C,b)}}))};const Lt={...er,...Hr},dr=({list:e,productTable:t,exerciseTable:r,onDelete:n,date:i})=>{const a={nodes:e},u=J(Sr),x=J(Pr);return o.jsxs(o.Fragment,{children:[t&&o.jsxs($e,{children:[o.jsxs(De,{children:[o.jsx(ue,{children:"Title"}),o.jsx(ue,{children:"Category"}),o.jsx(ue,{children:"Calories"}),o.jsx(ue,{children:"Weight"}),o.jsx(ue,{children:"Recommend"})]}),x?o.jsx(me,{size:"60"}):o.jsx(He,{data:a,theme:er,layout:{custom:!0},children:c=>o.jsxs(o.Fragment,{children:[o.jsx(_e,{children:o.jsxs(Xe,{children:[o.jsx(T,{children:"Title"}),o.jsx(T,{children:"Category"}),o.jsx(T,{children:"Calories"}),o.jsx(T,{children:"Weight"}),o.jsx(T,{children:"Recommend"}),o.jsx(T,{children:""})]})}),o.jsx(We,{children:c.map(l=>o.jsxs(Je,{item:l,children:[o.jsx(z,{children:M(l.title)}),o.jsx(z,{children:M(l.category)}),o.jsx(z,{children:l.calories}),o.jsx(z,{children:l.amount}),o.jsxs(z,{children:[o.jsx(Vr,{bgColor:l.recommend?"#419B09":"#E9101D"}),l.recommend?"Yes":"No"]}),o.jsx(z,{children:o.jsx(fe,{onClick:()=>n({date:i,id:l._id,calories:l.calories,time:l.amount}),children:o.jsx(he,{children:o.jsx("use",{href:ne+"#icon-trash"})})})})]},l._id))})]})})]}),r&&o.jsxs($e,{children:[o.jsxs(De,{children:[o.jsx(ie,{children:"Body Part"}),o.jsx(ie,{children:"Equipment"}),o.jsx(ie,{children:"Name"}),o.jsx(ie,{children:"Target"}),o.jsx(ie,{}),o.jsx(ie,{children:"Time"}),o.jsx(ie,{children:""})]}),u?o.jsx(me,{size:"60"}):o.jsx(He,{data:a,theme:Lt,layout:{custom:!0},children:c=>o.jsxs(o.Fragment,{children:[o.jsx(_e,{children:o.jsxs(Xe,{children:[o.jsx(T,{children:"Body Part"}),o.jsx(T,{children:"Equipment"}),o.jsx(T,{children:"Name"}),o.jsx(T,{children:"Target"}),o.jsx(T,{children:"Burned Cal..."}),o.jsx(T,{children:"Time"}),o.jsx(T,{children:""})]})}),o.jsx(We,{children:c.map(l=>o.jsxs(Je,{item:l,children:[o.jsx(z,{children:M(l.bodyPart)}),o.jsx(z,{children:M(l.equipment)}),o.jsx(z,{children:M(l.name)}),o.jsx(z,{children:M(l.target)}),o.jsx(z,{children:l.burnedCalories}),o.jsx(z,{children:l.time}),o.jsx(z,{children:o.jsx(fe,{onClick:()=>n({date:i,id:l._id,calories:l.burnedCalories,time:l.time}),children:o.jsx(he,{children:o.jsx("use",{href:ne+"#icon-trash"})})})})]},l._id))})]})})]})]})};dr.propTypes={list:S.array,productTable:S.bool,exerciseTable:S.bool,onDelete:S.func,date:S.string};const Ze=y.div`
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

  ${m.tablet} {
    display: none;
  }
`,Qe=y.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 8px;
  }
`,Ye=y.div`
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
`,pr=({list:e,productTable:t,exerciseTable:r,onDelete:n,date:i})=>o.jsxs(o.Fragment,{children:[t&&o.jsx(Ze,{children:e.map(a=>o.jsxs(Qe,{children:[o.jsxs(A,{children:["Title",o.jsx(W,{children:M(a.title)})]}),o.jsxs(A,{children:["Category",o.jsx(W,{children:M(a.category)})]}),o.jsxs(Ye,{children:[o.jsxs(A,{children:["Calories",o.jsx(W,{children:a.amount})]}),o.jsxs(A,{children:["Weight ",o.jsx(W,{children:a.calories})]}),o.jsxs(A,{children:["Recommend",o.jsx(W,{before:!0,colorBefore:a.recommend,children:a.recommend?"Yes":"No"})]}),o.jsx(A,{children:o.jsx(W,{children:o.jsx(fe,{onClick:()=>n({date:i,id:a._id,calories:a.calories,time:a.amount}),children:o.jsx(he,{children:o.jsx("use",{href:ne+"#icon-trash"})})})})})]})]},a._id))}),r&&o.jsx(Ze,{children:e.map(a=>o.jsxs(Qe,{children:[o.jsxs(A,{children:["Body Part",o.jsx(W,{children:M(a.bodyPart)})]}),o.jsxs(A,{children:["Equipment",o.jsx(W,{children:M(a.equipment)})]}),o.jsxs(A,{children:["Name",o.jsx(W,{children:M(a.name)})]}),o.jsxs(Ye,{children:[o.jsxs(A,{children:["Target ",o.jsx(W,{children:M(a.target)})]}),o.jsxs(A,{children:["Burned Calor..",o.jsx(W,{children:a.burnedCalories})]}),o.jsxs(A,{children:["Time ",o.jsx(W,{children:a.time})]}),o.jsxs(A,{children:[" ",o.jsx(W,{children:o.jsx(fe,{onClick:()=>n({date:i,id:a._id,calories:a.burnedCalories,time:a.time}),children:o.jsx(he,{children:o.jsx("use",{href:ne+"#icon-trash"})})})})]})]})]},a._id))})]});pr.propTypes={list:S.array,productTable:S.bool,exerciseTable:S.bool,onDelete:S.func,date:S.string};const ke=({to:e,marginBottom:t,list:r,productTable:n,exerciseTable:i,date:a})=>{const u=Ie(),x=({date:c,id:l,calories:d,time:p})=>{n&&u(yr({productId:l,date:c,calories:d,time:p})),i&&u(gr({exerciseId:l,date:c,calories:d,time:p}))};return o.jsxs(Fr,{marginBottom:t,children:[o.jsxs(Tr,{children:[o.jsx(zr,{children:n?"Products":"Exercises"}),o.jsxs(Ar,{to:e,children:["Add ",n?"product":"exercise",o.jsx(_r,{children:o.jsx("use",{href:ne+"#arrow-right"})})]})]}),r.length!==0?o.jsxs(o.Fragment,{children:[o.jsx(dr,{list:r,productTable:n,exerciseTable:i,onDelete:x,date:a}),o.jsx(pr,{list:r,productTable:n,exerciseTable:i,onDelete:x,date:a})]}):o.jsxs(Wr,{children:["Not found ",n?"products":"exercises"]})]})};ke.propTypes={to:S.string,marginBottom:S.number,list:S.array,productTable:S.bool,exerciseTable:S.bool,date:S.string};const Rt=y.div`
  position: relative;

  padding: 0 20px 80px 20px;
  ${m.tablet} {
    padding: 0 32px 64px 32px;
  }
  ${m.desktop} {
    padding: 0 96px 68px 96px;
  }
`,Bt=y.div`
  width: auto;
  display: flex;
  flex-direction: column;

  ${m.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Ft=y.div`
  display: flex;
  position: absolute;
  align-items: center;
  z-index: 667;
  right: 20px;
  top: 4px;

  ${m.tablet} {
    right: 32px;
    top: -10px;
  }

  ${m.desktop} {
    right: 96px;
  }
`,Ke=y.button`
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
`,Tt=y.div`
  width: auto;

  ${m.tablet} {
    margin-top: 64px;
    order: 1;
  }

  ${m.desktop} {
    margin-top: 0;
  }
`,zt=y.div`
  width: auto;

  ${m.tablet} {
    width: 704px;
  }

  ${m.desktop} {
    width: 826px;
  }
`,At={top:{desk:72,tab:72,mob:40},bt:{tab:32,mob:40}},Wt=y.label`
  position: relative;

  background-color: inherit;
  border: none;

  cursor: url('./assets/cursor-pointer.png'), pointer;
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
`,_t=y.input`
  width: 125px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;

  cursor: url('./assets/cursor-pointer.png'), pointer;
  color: ${j.white};
  border: none;
  background-color: inherit;

  transition: color 0.3s;

  &:focus {
    color: ${j.orange};
  }

  &:focus-visible {
    outline: none;
  }

  &:focus + svg {
    stroke: ${j.orange};
  }

  ${m.tablet} {
    width: 161px;

    font-size: 24px;
    line-height: 1.33;
  }

  ${m.desktop} {
  }
`,Vt=y.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: -8px;
  top: 46%;

  stroke: ${j.grey};

  transform: translate(-50%, -50%);
  transition: stroke 0.3s;

  ${m.tablet} {
    width: 24px;
    height: 24px;
    right: -14px;
    top: 40%;
  }
`,fr=s.forwardRef((e,t)=>{const{value:r,onClick:n}=e;return o.jsxs(Wt,{onClick:n,ref:t,children:[o.jsx(_t,{value:r||"",name:"name",readOnly:!0}),o.jsx(Vt,{children:o.jsx("use",{href:`${ne}#calendar`})})]})});fr.displayName="CustomInputForCalendar";const Zt=()=>{const[e,t]=s.useState(new Date),[r,n]=s.useState(""),i=J($r),a=J(Dr),u=J(Er),x=Ie();s.useEffect(()=>{x(br(r||c(r,e)))},[x,e,r]);const c=(d,p)=>{const f=kr(p);return n(f),t(p),f},l=(d,p)=>{const f=new Date(p);d==="nextDay"&&f.setDate(f.getDate()+1),d==="previousDay"&&f.setDate(f.getDate()-1),c(f,f)};return o.jsxs(Rt,{children:[o.jsx(wr,{text:"Diary",margin:At}),o.jsxs(Ft,{children:[o.jsx(Or,{value:e,onChange:c,name:"name",dateFormat:"dd/MM/yyyy",customInput:o.jsx(fr,{}),withoutВorder:!0}),o.jsx(Ke,{onClick:()=>l("previousDay",e),children:o.jsx(Ue,{children:o.jsx("use",{href:ne+"#chevron-left"})})}),o.jsx(Ke,{onClick:()=>l("nextDay",e),children:o.jsx(Ue,{children:o.jsx("use",{href:ne+"#chevron-right"})})})]}),o.jsxs(Bt,{children:[o.jsxs(Tt,{children:[o.jsx(Br,{}),o.jsx(vr,{text:`Record all your meals in a calorie diary every day. This will help me be
     aware of my nutrition and make me responsible for my choices.`,width:{tablet:593,desktop:390},margin:jr})]}),u?o.jsx(me,{size:"100"}):o.jsxs(zt,{children:[o.jsx(ke,{marginBottom:40,list:i,productTable:!0,date:r,to:"/products"}),o.jsx(ke,{list:a,exerciseTable:!0,date:r,to:"/exercises"})]})]})]})};export{Zt as default};
