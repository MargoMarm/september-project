import{n as d,m as s,c as j,b as w,g as X,u as N,r as y,d as Q,f as H,e as Y,j as t,s as R}from"./index-636452aa.js";import{S as _,P as q,a as J}from"./ProductsOrExercisesItem-80fcb09f.js";import{T as M}from"./Title-c8efb26c.js";import{B as V}from"./ButtonIconForInput-a2b77fc8.js";import{c as G}from"./formatDate-d1383d55.js";import"./BtnSubmit-4625692d.js";const Z="/september-project/assets/products_desktop_1x-48a51d2e.jpg",K="/september-project/assets/products_desktop_2x-7123c357.jpg",ee="/september-project/assets/products_desktop_3x-4c8deaec.jpg",te={imgDx1:Z,imgDx2:K,imgDx3:ee},ne=e=>e.products.products,oe=e=>e.products.categories,re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7c7NDYJAEAXgN64F4IWzJdCClUgHliQtWIElSAdcTFaJZDyb6DqshvC3G8IFDrzj5u03D1gyXTi/RmM6q0bhoWOo9YWL+9GJFDr5dW4HJ4SPSgF6AibuwywC2tvOy5zgn51HgrBcNHWsRP5vXHba/8iFQZmzLAukkshUqpa8abcJw3QQ1MVs1Yl4oSYm8SCDwlpvOcsCLJlPvpJwX8IciLb3AAAAAElFTkSuQmCC";d.option`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
`;const W=d.select`
  appearance: none;
  position: reletive;

  height: 46px;
  width: 100%;

  ${s.tablet} {
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
  ${s.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,se=d.div`
  display: none;
  ${s.desktop} {
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
  ${s.tablet} {
    flex-direction: row;
  }
`,F=d.div`
  position: relative;
  &::after {
    content: ' ';
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
  ${s.tablet} {
    width: 236px;
  }
`,de=d.input`
  height: 46px;
  width: 100%;
  ${s.tablet} {
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

  &:focus-visible + span {
    color: ${j.orange};
  }
`,D=d.svg`
  stroke: currentColor;

  width: 18px;
  height: 18px;
`,pe=d.span`
  position: absolute;
  top: 15px;
  right: 18px;

  width: 18px;
  height: 18px;

  ${s.tablet} {
    top: 17px;
  }

  ${s.desktop} {
    top: 18px;
  }
`;var le="Expected a function",z=0/0,ue="[object Symbol]",xe=/^\s+|\s+$/g,ge=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,he=/^0o[0-7]+$/i,me=parseInt,be=typeof w=="object"&&w&&w.Object===Object&&w,je=typeof self=="object"&&self&&self.Object===Object&&self,Ae=be||je||Function("return this")(),ye=Object.prototype,ve=ye.toString,Ce=Math.max,Se=Math.min,I=function(){return Ae.Date.now()};function ke(e,n,a){var g,p,A,l,c,u,h=0,k=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(le);n=B(n)||0,O(a)&&(k=!!a.leading,m="maxWait"in a,A=m?Ce(B(a.maxWait)||0,n):A,v="trailing"in a?!!a.trailing:v);function x(i){var f=g,S=p;return g=p=void 0,h=i,l=e.apply(S,f),l}function $(i){return h=i,c=setTimeout(r,n),k?x(i):l}function E(i){var f=i-u,S=i-h,P=n-f;return m?Se(P,A-S):P}function o(i){var f=i-u,S=i-h;return u===void 0||f>=n||f<0||m&&S>=A}function r(){var i=I();if(o(i))return C(i);c=setTimeout(r,E(i))}function C(i){return c=void 0,v&&g?x(i):(g=p=void 0,l)}function b(){c!==void 0&&clearTimeout(c),h=0,g=u=p=c=void 0}function U(){return c===void 0?l:C(I())}function T(){var i=I(),f=o(i);if(g=arguments,p=this,u=i,f){if(c===void 0)return $(u);if(m)return c=setTimeout(r,n),x(u)}return c===void 0&&(c=setTimeout(r,n)),l}return T.cancel=b,T.flush=U,T}function O(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function we(e){return!!e&&typeof e=="object"}function $e(e){return typeof e=="symbol"||we(e)&&ve.call(e)==ue}function B(e){if(typeof e=="number")return e;if($e(e))return z;if(O(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=O(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(xe,"");var a=fe.test(e);return a||he.test(e)?me(e.slice(2),a?2:8):ge.test(e)?z:+e}var Ee=ke;const Te=X(Ee);function Ie(){const e=(o,r,C)=>{const b={};return o&&(b.title=o.trim()),r&&r!=="Categories"&&r!=="default"&&(b.category=r),C==="Recommended"&&(b.recommended=!0),C==="Not recommended"&&(b.recommended=!1),b},n=N(),[a,g]=y.useState("Categories"),[p,A]=y.useState("All"),[l,c]=y.useState(""),u=Q(oe);y.useEffect(()=>{const o=e(l,a,p),r=new URLSearchParams(o).toString();n(H(r))},[l,a,p,n]),y.useEffect(()=>{n(Y())},[n]);const h=o=>{const r=o.target.value;g(r)},k=Te(o=>{c(o)},500),m=o=>{const r=o.target.value;k(r)},v=o=>{const r=o.target.value;A(r)},x={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},$=o=>{o.preventDefault();const r=o.target.value;c(r)},E=()=>{c("")};return t.jsxs(ie,{children:[t.jsx(se,{children:"Filters"}),t.jsxs(ce,{onSubmit:$,onReset:E,children:[t.jsx(de,{type:"text",autoComplete:"off",onChange:m}),t.jsx(pe,{children:t.jsx(D,{children:t.jsx("use",{href:R+"#icon-search"})})}),t.jsx(V,{right:"42px",type:"reset",children:t.jsx(D,{children:t.jsx("use",{href:R+"#close"})})})]}),t.jsxs(ae,{children:[t.jsx(F,{children:t.jsxs(W,{value:a,onChange:h,children:[t.jsx("option",{style:x,value:"default",children:"Categories"}),u.map(o=>t.jsx("option",{value:o,style:x,children:G(o)},o))]})}),t.jsx(F,{children:t.jsxs(W,{value:p,onChange:v,children:[t.jsx("option",{style:x,value:"default",children:"All"}),t.jsx("option",{style:x,value:"Recommended",children:"Recommended"}),t.jsx("option",{style:x,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Oe=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;
  position: relative;

  ${s.tablet} {
    gap: 32px;
    padding: 72px 32px 48px 32px;
  }

  ${s.desktop} {
    padding: 68px 81px 81px 96px;

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${te.imgDx1});

    ${""}
  }
`,Pe=d.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${s.tablet} {
    gap: 32px;
  }
  ${s.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Re=d.div`
  
  ${s.tablet} {
   width: 580px;
   margin-top: 45px;
  }
  ${s.desktop} {
    margin-top: 100px;
  }
`,We=d.p`
color: rgba(239, 237, 232, 0.30);
margin-bottom: 16px;
font-size: 14px;
line-height: 1.28;
  ${s.tablet} {
  
  }
  ${s.desktop} {
  
  }
`,L=d.span`
color:  #E6533C;

font-size: 14px;

line-height: 1.28; 
  ${s.tablet} {
    gap: 32px;
  }
  ${s.desktop} {

  }
`,Fe=()=>t.jsxs(Re,{children:[t.jsxs(We,{children:[" ",t.jsx(L,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(L,{children:"Try changing the search parameters."})]}),He=()=>{const e=N(),n=Q(ne);return y.useEffect(()=>{e(H())},[e]),t.jsxs(Oe,{children:[t.jsxs(Pe,{children:[t.jsx(M,{text:"Products"}),t.jsx(Ie,{})]}),n.length!==0?t.jsx(_,{width:{dt:"868"},children:t.jsx(q,{children:n.map(a=>t.jsx(J,{page:"product",data:a},a.id))})}):t.jsx(Fe,{})]})};export{He as default};
