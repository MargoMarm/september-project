import{n as c,m as f,c as y,b as w,g as X,u as z,r as v,d as L,f as Q,e as _,j as t,s as P}from"./index-33f75ee5.js";import{S as q,P as J,a as Y}from"./ProductsOrExercisesItem-67a1e7ae.js";import{T as M}from"./Title-371d2aaa.js";import{B as R}from"./ButtonIconForInput-35815738.js";import"./formatDate-d1383d55.js";import"./BtnSubmit-da28be0b.js";const V="/september-project/assets/products_desktop_1x-48a51d2e.jpg",G="/september-project/assets/products_desktop_2x-7123c357.jpg",Z="/september-project/assets/products_desktop_3x-4c8deaec.jpg",K={imgDx1:V,imgDx2:G,imgDx3:Z},ee=e=>e.products.products,te=e=>e.products.categories,ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7c7NDYJAEAXgN64F4IWzJdCClUgHliQtWIElSAdcTFaJZDyb6DqshvC3G8IFDrzj5u03D1gyXTi/RmM6q0bhoWOo9YWL+9GJFDr5dW4HJ4SPSgF6AibuwywC2tvOy5zgn51HgrBcNHWsRP5vXHba/8iFQZmzLAukkshUqpa8abcJw3QQ1MVs1Yl4oSYm8SCDwlpvOcsCLJlPvpJwX8IciLb3AAAAAElFTkSuQmCC";c.option`
  width: '200px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#fff',
  appearance: 'none',
  cursor: 'pointer',
`;const W=c.select`
  appearance: none;
  position: reletive;
  
  height: 46px;
  width: 100%;

  
  ${f.tablet} {
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
`,re=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${f.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,oe=c.div`
  display: none;
  ${f.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${y.textWhite05};
  }
`,ie=c.div`
  display: flex;
  gap: 16px;

`,F=c.div`
  position: relative;
&::after {
  content: " ";
  width: 18px;
  height: 18px;
  background-image: url(${ne}); 
  color: red;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  pointer-events: none; 
}
`,se=c.form`
  position: relative;
  width: 100%;
  ${f.tablet} {
    width: 236px;
  }
`,ae=c.input`
  height: 46px;
  width: 100%;
  ${f.tablet} {
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
`,D=c.svg`
  width: 18px;
  height: 18px;
`;var ce="Expected a function",B=0/0,de="[object Symbol]",pe=/^\s+|\s+$/g,le=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,xe=/^0o[0-7]+$/i,fe=parseInt,ge=typeof w=="object"&&w&&w.Object===Object&&w,he=typeof self=="object"&&self&&self.Object===Object&&self,me=ge||he||Function("return this")(),be=Object.prototype,je=be.toString,Ae=Math.max,ve=Math.min,$=function(){return me.Date.now()};function ye(e,n,i){var d,p,A,l,a,u,m=0,k=!1,b=!1,C=!0;if(typeof e!="function")throw new TypeError(ce);n=N(n)||0,T(i)&&(k=!!i.leading,b="maxWait"in i,A=b?Ae(N(i.maxWait)||0,n):A,C="trailing"in i?!!i.trailing:C);function x(o){var h=d,S=p;return d=p=void 0,m=o,l=e.apply(S,h),l}function E(o){return m=o,a=setTimeout(j,n),k?x(o):l}function r(o){var h=o-u,S=o-m,O=n-h;return b?ve(O,A-S):O}function s(o){var h=o-u,S=o-m;return u===void 0||h>=n||h<0||b&&S>=A}function j(){var o=$();if(s(o))return g(o);a=setTimeout(j,r(o))}function g(o){return a=void 0,C&&d?x(o):(d=p=void 0,l)}function H(){a!==void 0&&clearTimeout(a),m=0,d=u=p=a=void 0}function U(){return a===void 0?l:g($())}function I(){var o=$(),h=s(o);if(d=arguments,p=this,u=o,h){if(a===void 0)return E(u);if(b)return a=setTimeout(j,n),x(u)}return a===void 0&&(a=setTimeout(j,n)),l}return I.cancel=H,I.flush=U,I}function T(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Ce(e){return!!e&&typeof e=="object"}function Se(e){return typeof e=="symbol"||Ce(e)&&je.call(e)==de}function N(e){if(typeof e=="number")return e;if(Se(e))return B;if(T(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=T(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(pe,"");var i=ue.test(e);return i||xe.test(e)?fe(e.slice(2),i?2:8):le.test(e)?B:+e}var ke=ye;const we=X(ke);function Ee(){const e=(r,s,j)=>{const g={};return r&&(g.title=r),s&&s!=="Categories"&&s!=="default"&&(g.category=s),j==="Recommended"&&(g.recommended=!0),j==="Not recommended"&&(g.recommended=!1),g},n=z(),[i,d]=v.useState("Categories"),[p,A]=v.useState("All"),[l,a]=v.useState(""),u=L(te);v.useEffect(()=>{const r=e(l,i,p),s=new URLSearchParams(r).toString();n(Q(s))},[l,i,p,n]),v.useEffect(()=>{n(_())},[n]);const m=r=>{const s=r.target.value;d(s)},k=we(r=>{a(r)},500),b=r=>{const s=r.target.value;k(s)},C=r=>{const s=r.target.value;A(s)},x={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},E=r=>{r.preventDefault()};return t.jsxs(re,{children:[t.jsx(oe,{children:"Filters"}),t.jsxs(se,{children:[t.jsx(ae,{type:"text",autoComplete:"off",onSubmit:E,onChange:b}),t.jsx(R,{right:"42px",type:"reset",children:t.jsx(D,{children:t.jsx("use",{href:P+"#close"})})}),t.jsx(R,{right:"18px",type:"submit",children:t.jsx(D,{children:t.jsx("use",{href:P+"#icon-search"})})})]}),t.jsxs(ie,{children:[t.jsx(F,{children:t.jsxs(W,{value:i,onChange:m,children:[t.jsx("option",{style:x,value:"default",children:"Categories"}),u.map(r=>t.jsx("option",{value:r,style:x,children:r},r))]})}),t.jsx(F,{children:t.jsxs(W,{value:p,onChange:C,children:[t.jsx("option",{style:x,value:"default",children:"All"}),t.jsx("option",{style:x,value:"Recommended",children:"Recommended"}),t.jsx("option",{style:x,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Ie=c.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;

  ${f.tablet} {
    gap: 32px;
    padding: 72px 32px 48px 32px;
  }

  ${f.desktop} {
    padding: 68px 81px 81px 96px;

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${K.imgDx1});

    ${""}
  }
`,$e=c.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${f.tablet} {
    gap: 32px;
  }
  ${f.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,De=()=>{const e=z(),n=L(ee);return v.useEffect(()=>{e(Q())},[e]),t.jsxs(Ie,{children:[t.jsxs($e,{children:[t.jsx(M,{text:"Products"}),t.jsx(Ee,{})]}),t.jsx(q,{width:{dt:"868"},children:t.jsx(J,{children:n.map((i,d)=>d<20?t.jsx(Y,{page:"product",data:i},i.id):null)})})]})};export{De as default};
