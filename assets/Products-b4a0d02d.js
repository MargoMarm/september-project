var Q=Object.defineProperty;var X=(t,e,s)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var O=(t,e,s)=>(X(t,typeof e!="symbol"?e+"":e,s),s);import{n as u,m as d,c as b,d as $,e as _,u as Y,r as j,a as E,f as J,h as V,i as G,j as o,s as D,P as h,k as Z,o as K}from"./index-295e236b.js";import{g as ee,a as te,b as se,c as oe,d as re,S as ne,P as ie,e as ae}from"./ProductsOrExercisesItem-eec8f867.js";import{T as le}from"./Title-be5b43de.js";import{B as ce}from"./ButtonIconForInput-e371ca36.js";import{c as pe}from"./formatDate-d1383d55.js";import"./BtnSubmit-4ddeedb3.js";const de="/september-project/assets/products_desktop_1x-48a51d2e.jpg",ue="/september-project/assets/products_desktop_2x-7123c357.jpg",he="/september-project/assets/products_desktop_3x-4c8deaec.jpg",fe={imgDx1:de,imgDx2:ue,imgDx3:he},ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7c7NDYJAEAXgN64F4IWzJdCClUgHliQtWIElSAdcTFaJZDyb6DqshvC3G8IFDrzj5u03D1gyXTi/RmM6q0bhoWOo9YWL+9GJFDr5dW4HJ4SPSgF6AibuwywC2tvOy5zgn51HgrBcNHWsRP5vXHba/8iFQZmzLAukkshUqpa8abcJw3QQ1MVs1Yl4oSYm8SCDwlpvOcsCLJlPvpJwX8IciLb3AAAAAElFTkSuQmCC";u.option`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  cursor: url('./assets/cursor-pointer.png'), pointer;
`;const F=u.select`
  appearance: none;
  position: reletive;

  height: 46px;
  width: 100%;

  ${d.tablet} {
    width: 204px;
    height: 52px;
  }

  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${b.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${b.textWhite06};
  background-color: transparent;
`,me=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${d.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,xe=u.div`
  display: none;
  ${d.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${b.textWhite05};
  }
`,be=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${d.tablet} {
    flex-direction: row;
  }
`,H=u.div`
  position: relative;
  &::after {
    content: ' ';
    width: 18px;
    height: 18px;
    background-image: url(${ge});
    color: red;
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`,ve=u.form`
  position: relative;
  width: 100%;
  ${d.tablet} {
    width: 236px;
  }
`,Se=u.input`
  height: 46px;
  width: 100%;
  ${d.tablet} {
    height: 52px;
    width: 236px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${b.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  outline: none;

  color: ${b.textWhite06};
  background-color: transparent;

  &:focus-visible {
    border: 1px solid ${b.orange};
  }

  &:focus-visible + span > svg{
    stroke: ${b.orange};
  }
`,N=u.svg`
  stroke: ${b.textWhite06};

  width: 18px;
  height: 18px;

  &:hover {
    stroke: ${b.orange};
  }
`,je=u.span`
  position: absolute;
  top: 15px;
  right: 18px;
  width: 18px;
  height: 18px;
  ${d.tablet} {
    top: 17px;
  }

  ${d.desktop} {
    top: 18px;
  }
`;var we="Expected a function",z=0/0,Ce="[object Symbol]",Le=/^\s+|\s+$/g,Ae=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,Pe=/^0o[0-7]+$/i,Ee=parseInt,Te=typeof $=="object"&&$&&$.Object===Object&&$,$e=typeof self=="object"&&self&&self.Object===Object&&self,ke=Te||$e||Function("return this")(),Oe=Object.prototype,We=Oe.toString,Re=Math.max,Me=Math.min,W=function(){return ke.Date.now()};function Ie(t,e,s){var a,l,f,p,n,g,m=0,w=!1,v=!1,L=!0;if(typeof t!="function")throw new TypeError(we);e=B(e)||0,R(s)&&(w=!!s.leading,v="maxWait"in s,f=v?Re(B(s.maxWait)||0,e):f,L="trailing"in s?!!s.trailing:L);function x(c){var S=a,P=l;return a=l=void 0,m=c,p=t.apply(P,S),p}function T(c){return m=c,n=setTimeout(i,e),w?x(c):p}function A(c){var S=c-g,P=c-m,I=e-S;return v?Me(I,f-P):I}function r(c){var S=c-g,P=c-m;return g===void 0||S>=e||S<0||v&&P>=f}function i(){var c=W();if(r(c))return y(c);n=setTimeout(i,A(c))}function y(c){return n=void 0,L&&a?x(c):(a=l=void 0,p)}function C(){n!==void 0&&clearTimeout(n),m=0,a=g=l=n=void 0}function q(){return n===void 0?p:y(W())}function k(){var c=W(),S=r(c);if(a=arguments,l=this,g=c,S){if(n===void 0)return T(g);if(v)return n=setTimeout(i,e),x(g)}return n===void 0&&(n=setTimeout(i,e)),p}return k.cancel=C,k.flush=q,k}function R(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function De(t){return!!t&&typeof t=="object"}function Fe(t){return typeof t=="symbol"||De(t)&&We.call(t)==Ce}function B(t){if(typeof t=="number")return t;if(Fe(t))return z;if(R(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=R(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Le,"");var s=ye.test(t);return s||Pe.test(t)?Ee(t.slice(2),s?2:8):Ae.test(t)?z:+t}var He=Ie;const Ne=_(He);function ze(){const t=(r,i,y)=>{const C={};return r&&(C.title=r.trim()),i&&i!=="Categories"&&i!=="default"&&(C.category=i),y==="Recommended"&&(C.recommended=!0),y==="Not recommended"&&(C.recommended=!1),C},e=Y(),[s,a]=j.useState("Categories"),[l,f]=j.useState("All"),[p,n]=j.useState(""),g=E(ee);j.useEffect(()=>{const r=t(p,s,l),i=new URLSearchParams(r).toString();e(J(i)),e(V(i))},[p,s,l,e]),j.useEffect(()=>{e(G())},[e]);const m=r=>{const i=r.target.value;a(i)},w=Ne(r=>{n(r)},500),v=r=>{const i=r.target.value;w(i)},L=r=>{const i=r.target.value;f(i)},x={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},T=r=>{r.preventDefault();const i=r.target.value;n(i)},A=()=>{n("")};return o.jsxs(me,{children:[o.jsx(xe,{children:"Filters"}),o.jsxs(ve,{onSubmit:T,onReset:A,children:[o.jsx(Se,{type:"text",autoComplete:"off",onChange:v}),o.jsx(je,{children:o.jsx(N,{children:o.jsx("use",{href:D+"#icon-search"})})}),o.jsx(ce,{right:"35px",type:"reset",children:o.jsx(N,{children:o.jsx("use",{href:D+"#close"})})})]}),o.jsxs(be,{children:[o.jsx(H,{children:o.jsxs(F,{value:s,onChange:m,children:[o.jsx("option",{style:x,value:"default",children:"Categories"}),g.map(r=>o.jsx("option",{value:r,style:x,children:pe(r)},r))]})}),o.jsx(H,{children:o.jsxs(F,{value:l,onChange:L,children:[o.jsx("option",{style:x,value:"default",children:"All"}),o.jsx("option",{style:x,value:"Recommended",children:"Recommended"}),o.jsx("option",{style:x,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Be=u.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;
  position: relative;
  height: 100vh;
  ${d.tablet} {
    gap: 32px;
    padding: 72px 32px 48px 32px;
  }

  ${d.desktop} {
    padding: 68px 81px 81px 96px;

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${fe.imgDx1});

    ${""}
  }
`,Ue=u.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${d.tablet} {
    gap: 32px;
  }
  ${d.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Ye=u.div`
  
  ${d.tablet} {
   width: 580px;
   margin-top: 45px;
  }
  ${d.desktop} {
    margin-top: 100px;
  }
`,qe=u.p`
color: rgba(239, 237, 232, 0.30);
margin-bottom: 16px;
font-size: 14px;
line-height: 1.28;
  ${d.tablet} {
  
  }
  ${d.desktop} {
  
  }
`,U=u.span`
color:  #E6533C;

font-size: 14px;

line-height: 1.28; 
  ${d.tablet} {
    gap: 32px;
  }
  ${d.desktop} {

  }
`,Qe=()=>o.jsxs(Ye,{children:[o.jsxs(qe,{children:[" ",o.jsx(U,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),o.jsx(U,{children:"Try changing the search parameters."})]});class M extends j.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const s={get passive(){e=!0}};try{document.addEventListener("test",null,s),document.removeEventListener("test",null,s)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){const s=this.props.getScrollParent&&this.props.getScrollParent();return s??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let s=window;this.props.useWindow===!1&&(s=e),s.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),s.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),s.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,s=window,a=this.getParentElement(e);let l;if(this.props.useWindow){const f=document.documentElement||document.body.parentNode||document.body,p=s.pageYOffset!==void 0?s.pageYOffset:f.scrollTop;this.props.isReverse?l=p:l=this.calculateOffset(e,p)}else this.props.isReverse?l=a.scrollTop:l=e.scrollHeight-a.scrollTop-a.clientHeight;l<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=a.scrollHeight,this.beforeScrollTop=a.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,s){return e?this.calculateTopPosition(e)+(e.offsetHeight-s-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:s,element:a,hasMore:l,initialLoad:f,isReverse:p,loader:n,loadMore:g,pageStart:m,ref:w,threshold:v,useCapture:L,useWindow:x,getScrollParent:T,...A}=e;A.ref=i=>{this.scrollComponent=i,w&&w(i)};const r=[s];return l&&(n?p?r.unshift(n):r.push(n):this.defaultLoader&&(p?r.unshift(this.defaultLoader):r.push(this.defaultLoader))),Z.createElement(a,A,r)}}O(M,"propTypes",{children:h.node.isRequired,element:h.node,hasMore:h.bool,initialLoad:h.bool,isReverse:h.bool,loader:h.node,loadMore:h.func.isRequired,pageStart:h.number,ref:h.func,getScrollParent:h.func,threshold:h.number,useCapture:h.bool,useWindow:h.bool}),O(M,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});const et=()=>{const[t,e]=j.useState(1),s=E(te),a=E(se),l=Y(),f=E(oe),p=E(re);return j.useEffect(()=>{e(1)},[p]),o.jsxs(Be,{children:[o.jsxs(Ue,{children:[o.jsx(le,{text:"Products"}),o.jsx(ze,{})]}),f.length!==0?o.jsx(ne,{width:{dt:"868"},children:o.jsx(M,{pageStart:1,loadMore:()=>{if(t===1){e(m=>m+1);return}const n={page:t,limit:20},g=new URLSearchParams(n).toString();l(K(`${p}&${g}`)),e(m=>m+1)},hasMore:s&&!a,loader:o.jsx("div",{className:"loader",children:"Loading ..."},0),useWindow:!1,children:o.jsx(ie,{children:f.map(n=>o.jsx(ae,{page:"product",data:n},n.id))})})}):o.jsx(Qe,{})]})};export{et as default};
