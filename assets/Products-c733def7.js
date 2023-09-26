import{n as d,m as a,c as j,b as w,g as X,u as Q,r as y,d as U,f as H,e as Y,j as t,s as R}from"./index-cb13c4de.js";import{S as _,P as q,a as J}from"./ProductsOrExercisesItem-28282842.js";import{T as V}from"./Title-c0337acf.js";import{B as W}from"./ButtonIconForInput-61c9cfe7.js";import{c as G}from"./formatDate-d1383d55.js";import"./BtnSubmit-bbe6c6d1.js";const Z="/september-project/assets/products_desktop_1x-48a51d2e.jpg",K="/september-project/assets/products_desktop_2x-7123c357.jpg",ee="/september-project/assets/products_desktop_3x-4c8deaec.jpg",te={imgDx1:Z,imgDx2:K,imgDx3:ee},ne=e=>e.products.products,oe=e=>e.products.categories,re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7c7NDYJAEAXgN64F4IWzJdCClUgHliQtWIElSAdcTFaJZDyb6DqshvC3G8IFDrzj5u03D1gyXTi/RmM6q0bhoWOo9YWL+9GJFDr5dW4HJ4SPSgF6AibuwywC2tvOy5zgn51HgrBcNHWsRP5vXHba/8iFQZmzLAukkshUqpa8abcJw3QQ1MVs1Yl4oSYm8SCDwlpvOcsCLJlPvpJwX8IciLb3AAAAAElFTkSuQmCC";d.option`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color:#fff;
  appearance: none;
  cursor: pointer;
`;const F=d.select`
  appearance: none;
  position: reletive;
  
  height: 46px;
  width: 100%;

  
  ${a.tablet} {
    width: 204px;
    height: 52px;
  }

  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${j.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${j.textWhite06};
  background-color: transparent;
 

`,ie=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${a.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,se=d.div`
  display: none;
  ${a.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${j.textWhite05};
  }
`,ae=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
   ${a.tablet} {
    flex-direction: row;
    
  }

`,D=d.div`
  position: relative;
&::after {
  content: " ";
  width: 18px;
  height: 18px;
  background-image: url(${re}); 
  color: red;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  pointer-events: none; 
}
`,ce=d.form`
  position: relative;
  width: 100%;
  ${a.tablet} {
    width: 236px;
  }
`,de=d.input`
  height: 46px;
  width: 100%;
  ${a.tablet} {
    height: 52px;
    width: 236px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${j.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  outline: none;

  color: ${j.textWhite06};
  background-color: transparent;

  
  &:focus-visible {
    border: 1px solid ${j.orange};
  }

  &:focus-visible + button {
    color: ${j.orange};
  }
`,z=d.svg`
  stroke: currentColor;

  width: 18px;
  height: 18px;
`;var le="Expected a function",B=0/0,pe="[object Symbol]",ue=/^\s+|\s+$/g,xe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,he=parseInt,me=typeof w=="object"&&w&&w.Object===Object&&w,be=typeof self=="object"&&self&&self.Object===Object&&self,je=me||be||Function("return this")(),Ae=Object.prototype,ye=Ae.toString,ve=Math.max,Ce=Math.min,I=function(){return je.Date.now()};function Se(e,n,s){var g,l,A,p,c,u,h=0,k=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(le);n=L(n)||0,O(s)&&(k=!!s.leading,m="maxWait"in s,A=m?ve(L(s.maxWait)||0,n):A,v="trailing"in s?!!s.trailing:v);function x(i){var f=g,S=l;return g=l=void 0,h=i,p=e.apply(S,f),p}function $(i){return h=i,c=setTimeout(r,n),k?x(i):p}function T(i){var f=i-u,S=i-h,P=n-f;return m?Ce(P,A-S):P}function o(i){var f=i-u,S=i-h;return u===void 0||f>=n||f<0||m&&S>=A}function r(){var i=I();if(o(i))return C(i);c=setTimeout(r,T(i))}function C(i){return c=void 0,v&&g?x(i):(g=l=void 0,p)}function b(){c!==void 0&&clearTimeout(c),h=0,g=u=l=c=void 0}function M(){return c===void 0?p:C(I())}function E(){var i=I(),f=o(i);if(g=arguments,l=this,u=i,f){if(c===void 0)return $(u);if(m)return c=setTimeout(r,n),x(u)}return c===void 0&&(c=setTimeout(r,n)),p}return E.cancel=b,E.flush=M,E}function O(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function ke(e){return!!e&&typeof e=="object"}function we(e){return typeof e=="symbol"||ke(e)&&ye.call(e)==pe}function L(e){if(typeof e=="number")return e;if(we(e))return B;if(O(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=O(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(ue,"");var s=ge.test(e);return s||fe.test(e)?he(e.slice(2),s?2:8):xe.test(e)?B:+e}var $e=Se;const Te=X($e);function Ee(){const e=(o,r,C)=>{const b={};return o&&(b.title=o.trim()),r&&r!=="Categories"&&r!=="default"&&(b.category=r),C==="Recommended"&&(b.recommended=!0),C==="Not recommended"&&(b.recommended=!1),b},n=Q(),[s,g]=y.useState("Categories"),[l,A]=y.useState("All"),[p,c]=y.useState(""),u=U(oe);y.useEffect(()=>{const o=e(p,s,l),r=new URLSearchParams(o).toString();n(H(r))},[p,s,l,n]),y.useEffect(()=>{n(Y())},[n]);const h=o=>{const r=o.target.value;g(r)},k=Te(o=>{c(o)},500),m=o=>{const r=o.target.value;k(r)},v=o=>{const r=o.target.value;A(r)},x={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},$=o=>{o.preventDefault(),console.log("SUBMIT");const r=o.target.value;c(r)},T=()=>{console.log("isReset"),c("")};return t.jsxs(ie,{children:[t.jsx(se,{children:"Filters"}),t.jsxs(ce,{onSubmit:$,onReset:T,children:[t.jsx(de,{type:"text",autoComplete:"off",onChange:m}),t.jsx(W,{type:"submit",right:"18px",children:t.jsx(z,{children:t.jsx("use",{href:R+"#icon-search"})})}),t.jsx(W,{right:"42px",type:"reset",children:t.jsx(z,{children:t.jsx("use",{href:R+"#close"})})})]}),t.jsxs(ae,{children:[t.jsx(D,{children:t.jsxs(F,{value:s,onChange:h,children:[t.jsx("option",{style:x,value:"default",children:"Categories"}),u.map(o=>t.jsx("option",{value:o,style:x,children:G(o)},o))]})}),t.jsx(D,{children:t.jsxs(F,{value:l,onChange:v,children:[t.jsx("option",{style:x,value:"default",children:"All"}),t.jsx("option",{style:x,value:"Recommended",children:"Recommended"}),t.jsx("option",{style:x,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Ie=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;
  position: relative;

  ${a.tablet} {
    gap: 32px;
    padding: 72px 32px 48px 32px;
  }

  ${a.desktop} {
    padding: 68px 81px 81px 96px;

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${te.imgDx1});

    ${""}
  }
`,Oe=d.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${a.tablet} {
    gap: 32px;
  }
  ${a.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Pe=d.div`
  
  ${a.tablet} {
   width: 580px;
   margin-top: 45px;
  }
  ${a.desktop} {
    margin-top: 100px;
  }
`,Re=d.p`
color: rgba(239, 237, 232, 0.30);
margin-bottom: 16px;
font-size: 14px;
line-height: 1.28;
  ${a.tablet} {
  
  }
  ${a.desktop} {
  
  }
`,N=d.span`
color:  #E6533C;

font-size: 14px;

line-height: 1.28; 
  ${a.tablet} {
    gap: 32px;
  }
  ${a.desktop} {

  }
`,We=()=>t.jsxs(Pe,{children:[t.jsxs(Re,{children:[" ",t.jsx(N,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(N,{children:"Try changing the search parameters."})]}),Qe=()=>{const e=Q(),n=U(ne);return y.useEffect(()=>{e(H())},[e]),t.jsxs(Ie,{children:[t.jsxs(Oe,{children:[t.jsx(V,{text:"Products"}),t.jsx(Ee,{})]}),n.length!==0?t.jsx(_,{width:{dt:"868"},children:t.jsx(q,{children:n.map(s=>t.jsx(J,{page:"product",data:s},s.id))})}):t.jsx(We,{})]})};export{Qe as default};
