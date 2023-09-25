import{n as d,m as a,c as y,b as k,g as X,u as Q,r as A,d as U,f as H,e as Y,j as t,s as P}from"./index-6891c9c9.js";import{S as _,P as q,a as J}from"./ProductsOrExercisesItem-7e07d0f5.js";import{T as V}from"./Title-8647ac01.js";import{B as W}from"./ButtonIconForInput-83dfb3c6.js";import{c as G}from"./formatDate-d1383d55.js";import"./BtnSubmit-47563aa0.js";const Z="/september-project/assets/products_desktop_1x-48a51d2e.jpg",K="/september-project/assets/products_desktop_2x-7123c357.jpg",ee="/september-project/assets/products_desktop_3x-4c8deaec.jpg",te={imgDx1:Z,imgDx2:K,imgDx3:ee},ne=e=>e.products.products,oe=e=>e.products.categories,re="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7c7NDYJAEAXgN64F4IWzJdCClUgHliQtWIElSAdcTFaJZDyb6DqshvC3G8IFDrzj5u03D1gyXTi/RmM6q0bhoWOo9YWL+9GJFDr5dW4HJ4SPSgF6AibuwywC2tvOy5zgn51HgrBcNHWsRP5vXHba/8iFQZmzLAukkshUqpa8abcJw3QQ1MVs1Yl4oSYm8SCDwlpvOcsCLJlPvpJwX8IciLb3AAAAAElFTkSuQmCC";d.option`
  width: '200px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  appearance: 'none',
  cursor: 'pointer',
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
  border: 1px solid ${y.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${y.textWhite06};
  background-color: transparent;
 
}
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
    color: ${y.textWhite05};
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
  border: 1px solid ${y.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  outline: none;

  color: ${y.textWhite06};
  background-color: transparent;
  &:focus-visible {
    border: 1px solid ${y.orange};
  }
`,z=d.svg`
  width: 18px;
  height: 18px;
`;var pe="Expected a function",B=0/0,le="[object Symbol]",ue=/^\s+|\s+$/g,xe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,fe=/^0o[0-7]+$/i,he=parseInt,me=typeof k=="object"&&k&&k.Object===Object&&k,be=typeof self=="object"&&self&&self.Object===Object&&self,je=me||be||Function("return this")(),Ae=Object.prototype,ye=Ae.toString,ve=Math.max,Ce=Math.min,I=function(){return je.Date.now()};function Se(e,n,s){var p,l,j,u,c,x,h=0,w=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(pe);n=L(n)||0,R(s)&&(w=!!s.leading,m="maxWait"in s,j=m?ve(L(s.maxWait)||0,n):j,v="trailing"in s?!!s.trailing:v);function g(i){var f=p,S=l;return p=l=void 0,h=i,u=e.apply(S,f),u}function $(i){return h=i,c=setTimeout(r,n),w?g(i):u}function T(i){var f=i-x,S=i-h,O=n-f;return m?Ce(O,j-S):O}function o(i){var f=i-x,S=i-h;return x===void 0||f>=n||f<0||m&&S>=j}function r(){var i=I();if(o(i))return C(i);c=setTimeout(r,T(i))}function C(i){return c=void 0,v&&p?g(i):(p=l=void 0,u)}function b(){c!==void 0&&clearTimeout(c),h=0,p=x=l=c=void 0}function M(){return c===void 0?u:C(I())}function E(){var i=I(),f=o(i);if(p=arguments,l=this,x=i,f){if(c===void 0)return $(x);if(m)return c=setTimeout(r,n),g(x)}return c===void 0&&(c=setTimeout(r,n)),u}return E.cancel=b,E.flush=M,E}function R(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function we(e){return!!e&&typeof e=="object"}function ke(e){return typeof e=="symbol"||we(e)&&ye.call(e)==le}function L(e){if(typeof e=="number")return e;if(ke(e))return B;if(R(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=R(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(ue,"");var s=ge.test(e);return s||fe.test(e)?he(e.slice(2),s?2:8):xe.test(e)?B:+e}var $e=Se;const Te=X($e);function Ee(){const e=(o,r,C)=>{const b={};return o&&(b.title=o.trim()),r&&r!=="Categories"&&r!=="default"&&(b.category=r),C==="Recommended"&&(b.recommended=!0),C==="Not recommended"&&(b.recommended=!1),b},n=Q(),[s,p]=A.useState("Categories"),[l,j]=A.useState("All"),[u,c]=A.useState(""),x=U(oe);A.useEffect(()=>{const o=e(u,s,l),r=new URLSearchParams(o).toString();n(H(r))},[u,s,l,n]),A.useEffect(()=>{n(Y())},[n]);const h=o=>{const r=o.target.value;p(r)},w=Te(o=>{c(o)},500),m=o=>{const r=o.target.value;w(r)},v=o=>{const r=o.target.value;j(r)},g={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},$=o=>{o.preventDefault(),console.log("SUBMIT");const r=o.target.value;c(r)},T=()=>{console.log("isReset"),c("")};return t.jsxs(ie,{children:[t.jsx(se,{children:"Filters"}),t.jsxs(ce,{onSubmit:$,onReset:T,children:[t.jsx(de,{type:"text",autoComplete:"off",onChange:m}),t.jsx(W,{right:"42px",type:"reset",children:t.jsx(z,{children:t.jsx("use",{href:P+"#close"})})}),t.jsx(W,{type:"submit",right:"18px",children:t.jsx(z,{children:t.jsx("use",{href:P+"#icon-search"})})})]}),t.jsxs(ae,{children:[t.jsx(D,{children:t.jsxs(F,{value:s,onChange:h,children:[t.jsx("option",{style:g,value:"default",children:"Categories"}),x.map(o=>t.jsx("option",{value:o,style:g,children:G(o)},o))]})}),t.jsx(D,{children:t.jsxs(F,{value:l,onChange:v,children:[t.jsx("option",{style:g,value:"default",children:"All"}),t.jsx("option",{style:g,value:"Recommended",children:"Recommended"}),t.jsx("option",{style:g,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Ie=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;
  height: 100vh;
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
  
`,Re=d.div`
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
`,Oe=d.div`
  
  ${a.tablet} {
   width: 580px;
   margin-top: 45px;
  }
  ${a.desktop} {
    margin-top: 100px;
  }
`,Pe=d.p`
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
`,We=()=>t.jsxs(Oe,{children:[t.jsxs(Pe,{children:[" ",t.jsx(N,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(N,{children:"Try changing the search parameters."})]}),Qe=()=>{const e=Q(),n=U(ne);return A.useEffect(()=>{e(H())},[e]),t.jsxs(Ie,{children:[t.jsxs(Re,{children:[t.jsx(V,{text:"Products"}),t.jsx(Ee,{})]}),n.length!==0?t.jsx(_,{width:{dt:"868"},children:t.jsx(q,{children:n.map((s,p)=>t.jsx(J,{page:"product",data:s},s.id))})}):t.jsx(We,{})]})};export{Qe as default};
