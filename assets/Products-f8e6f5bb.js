import{n as d,m as s,c as f,d as $,e as X,u as Q,r as v,a as P,f as H,h as Y,j as t,s as R,i as _}from"./index-cd569242.js";import{S as q,P as J,a as M}from"./ProductsOrExercisesItem-edd41813.js";import{T as V}from"./Title-3147abca.js";import{B as G}from"./ButtonIconForInput-e204ede4.js";import{c as Z}from"./formatDate-d1383d55.js";import"./BtnSubmit-5c990fbd.js";const K="/september-project/assets/products_desktop_1x-48a51d2e.jpg",ee="/september-project/assets/products_desktop_2x-7123c357.jpg",te="/september-project/assets/products_desktop_3x-4c8deaec.jpg",ne={imgDx1:K,imgDx2:ee,imgDx3:te},oe=e=>e.products.products,re=e=>e.products.categories,ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7c7NDYJAEAXgN64F4IWzJdCClUgHliQtWIElSAdcTFaJZDyb6DqshvC3G8IFDrzj5u03D1gyXTi/RmM6q0bhoWOo9YWL+9GJFDr5dW4HJ4SPSgF6AibuwywC2tvOy5zgn51HgrBcNHWsRP5vXHba/8iFQZmzLAukkshUqpa8abcJw3QQ1MVs1Yl4oSYm8SCDwlpvOcsCLJlPvpJwX8IciLb3AAAAAElFTkSuQmCC";d.option`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  cursor: url('./assets/cursor-pointer.png'), pointer;
`;const F=d.select`
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
  border: 1px solid ${f.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${f.textWhite06};
  background-color: transparent;
`,se=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${s.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,ae=d.div`
  display: none;
  ${s.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${f.textWhite05};
  }
`,ce=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${s.tablet} {
    flex-direction: row;
  }
`,D=d.div`
  position: relative;
  &::after {
    content: ' ';
    width: 18px;
    height: 18px;
    background-image: url(${ie});
    color: red;
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`,de=d.form`
  position: relative;
  width: 100%;
  ${s.tablet} {
    width: 236px;
  }
`,pe=d.input`
  height: 46px;
  width: 100%;
  ${s.tablet} {
    height: 52px;
    width: 236px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${f.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  outline: none;

  color: ${f.textWhite06};
  background-color: transparent;

  &:focus-visible {
    border: 1px solid ${f.orange};
  }

  &:focus-visible + span > svg{
    stroke: ${f.orange};
  }
`,L=d.svg`
  stroke: ${f.textWhite06};

  width: 18px;
  height: 18px;

  &:hover {
    stroke: ${f.orange};
  }
`,le=d.span`
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
`;var ue="Expected a function",z=0/0,xe="[object Symbol]",ge=/^\s+|\s+$/g,fe=/^[-+]0x[0-9a-f]+$/i,he=/^0b[01]+$/i,me=/^0o[0-7]+$/i,be=parseInt,je=typeof $=="object"&&$&&$.Object===Object&&$,Ae=typeof self=="object"&&self&&self.Object===Object&&self,ve=je||Ae||Function("return this")(),ye=Object.prototype,Ce=ye.toString,Se=Math.max,ke=Math.min,I=function(){return ve.Date.now()};function $e(e,n,a){var p,l,A,u,c,x,m=0,k=!1,b=!1,y=!0;if(typeof e!="function")throw new TypeError(ue);n=B(n)||0,O(a)&&(k=!!a.leading,b="maxWait"in a,A=b?Se(B(a.maxWait)||0,n):A,y="trailing"in a?!!a.trailing:y);function g(i){var h=p,S=l;return p=l=void 0,m=i,u=e.apply(S,h),u}function w(i){return m=i,c=setTimeout(r,n),k?g(i):u}function E(i){var h=i-x,S=i-m,W=n-h;return b?ke(W,A-S):W}function o(i){var h=i-x,S=i-m;return x===void 0||h>=n||h<0||b&&S>=A}function r(){var i=I();if(o(i))return C(i);c=setTimeout(r,E(i))}function C(i){return c=void 0,y&&p?g(i):(p=l=void 0,u)}function j(){c!==void 0&&clearTimeout(c),m=0,p=x=l=c=void 0}function U(){return c===void 0?u:C(I())}function T(){var i=I(),h=o(i);if(p=arguments,l=this,x=i,h){if(c===void 0)return w(x);if(b)return c=setTimeout(r,n),g(x)}return c===void 0&&(c=setTimeout(r,n)),u}return T.cancel=j,T.flush=U,T}function O(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function we(e){return!!e&&typeof e=="object"}function Ee(e){return typeof e=="symbol"||we(e)&&Ce.call(e)==xe}function B(e){if(typeof e=="number")return e;if(Ee(e))return z;if(O(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=O(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(ge,"");var a=he.test(e);return a||me.test(e)?be(e.slice(2),a?2:8):fe.test(e)?z:+e}var Te=$e;const Ie=X(Te);function Pe(){const e=(o,r,C)=>{const j={};return o&&(j.title=o.trim()),r&&r!=="Categories"&&r!=="default"&&(j.category=r),C==="Recommended"&&(j.recommended=!0),C==="Not recommended"&&(j.recommended=!1),j},n=Q(),[a,p]=v.useState("Categories"),[l,A]=v.useState("All"),[u,c]=v.useState(""),x=P(re);v.useEffect(()=>{const o=e(u,a,l),r=new URLSearchParams(o).toString();n(H(r))},[u,a,l,n]),v.useEffect(()=>{n(Y())},[n]);const m=o=>{const r=o.target.value;p(r)},k=Ie(o=>{c(o)},500),b=o=>{const r=o.target.value;k(r)},y=o=>{const r=o.target.value;A(r)},g={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},w=o=>{o.preventDefault();const r=o.target.value;c(r)},E=()=>{c("")};return t.jsxs(se,{children:[t.jsx(ae,{children:"Filters"}),t.jsxs(de,{onSubmit:w,onReset:E,children:[t.jsx(pe,{type:"text",autoComplete:"off",onChange:b}),t.jsx(le,{children:t.jsx(L,{children:t.jsx("use",{href:R+"#icon-search"})})}),t.jsx(G,{right:"35px",type:"reset",children:t.jsx(L,{children:t.jsx("use",{href:R+"#close"})})})]}),t.jsxs(ce,{children:[t.jsx(D,{children:t.jsxs(F,{value:a,onChange:m,children:[t.jsx("option",{style:g,value:"default",children:"Categories"}),x.map(o=>t.jsx("option",{value:o,style:g,children:Z(o)},o))]})}),t.jsx(D,{children:t.jsxs(F,{value:l,onChange:y,children:[t.jsx("option",{style:g,value:"default",children:"All"}),t.jsx("option",{style:g,value:"Recommended",children:"Recommended"}),t.jsx("option",{style:g,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Oe=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;
  position: relative;
  height: 100vh;
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
    background-image: url(${ne.imgDx1});

    ${""}
  }
`,We=d.div`
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
`,Re=e=>e.products.isLoading,Fe=d.div`
  
  ${s.tablet} {
   width: 580px;
   margin-top: 45px;
  }
  ${s.desktop} {
    margin-top: 100px;
  }
`,De=d.p`
color: rgba(239, 237, 232, 0.30);
margin-bottom: 16px;
font-size: 14px;
line-height: 1.28;
  ${s.tablet} {
  
  }
  ${s.desktop} {
  
  }
`,N=d.span`
color:  #E6533C;

font-size: 14px;

line-height: 1.28; 
  ${s.tablet} {
    gap: 32px;
  }
  ${s.desktop} {

  }
`,Le=()=>t.jsxs(Fe,{children:[t.jsxs(De,{children:[" ",t.jsx(N,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(N,{children:"Try changing the search parameters."})]}),Xe=()=>{const e=Q(),n=P(oe),a=P(Re);return v.useEffect(()=>{e(H())},[e]),t.jsxs(Oe,{children:[t.jsxs(We,{children:[t.jsx(V,{text:"Products"}),t.jsx(Pe,{})]}),a?t.jsx(_,{}):n.length!==0?t.jsx(q,{width:{dt:"868"},children:t.jsx(J,{children:n.map(p=>t.jsx(M,{page:"product",data:p},p.id))})}):t.jsx(Le,{})]})};export{Xe as default};
