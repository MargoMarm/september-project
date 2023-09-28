import{n as d,m as i,c as f,d as w,e as Q,u as N,r as v,a as $,f as U,h as q,i as X,j as t,s as R,k as Y,o as _}from"./index-a3e616c5.js";import{g as J,a as V,b as G,c as Z,d as K,S as ee,I as te,P as ne,e as oe}from"./ProductsOrExercisesItem-2417915e.js";import{T as re}from"./Title-e67343ff.js";import{B as se}from"./ButtonIconForInput-d6d8eab2.js";import{c as ie}from"./formatDate-d1383d55.js";import"./BtnSubmit-69016a57.js";import"./notiflix-aio-3.2.6.min-8bb4527b.js";const ae="/september-project/assets/products_desktop_1x-48a51d2e.jpg",ce="/september-project/assets/products_desktop_2x-7123c357.jpg",de="/september-project/assets/products_desktop_3x-4c8deaec.jpg",pe={imgDx1:ae,imgDx2:ce,imgDx3:de},le=d.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;
  position: relative;
  height: 100vh;
  ${i.tablet} {
    gap: 32px;
    padding: 72px 32px 48px 32px;
  }

  ${i.desktop} {
    padding: 68px 81px 81px 96px;

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${pe.imgDx1});

    ${""}
  }
`,ue=d.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${i.tablet} {
    gap: 32px;
  }
  ${i.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`,xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACgSURBVHgB7c7NDYJAEAXgN64F4IWzJdCClUgHliQtWIElSAdcTFaJZDyb6DqshvC3G8IFDrzj5u03D1gyXTi/RmM6q0bhoWOo9YWL+9GJFDr5dW4HJ4SPSgF6AibuwywC2tvOy5zgn51HgrBcNHWsRP5vXHba/8iFQZmzLAukkshUqpa8abcJw3QQ1MVs1Yl4oSYm8SCDwlpvOcsCLJlPvpJwX8IciLb3AAAAAElFTkSuQmCC";d.option`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
`;const F=d.select`
  appearance: none;
  position: reletive;

  height: 46px;
  width: 100%;

  ${i.tablet} {
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
`,ge=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${i.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,he=d.div`
  display: none;
  ${i.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${f.textWhite05};
  }
`,fe=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${i.tablet} {
    flex-direction: row;
  }
`,L=d.div`
  position: relative;
  &::after {
    content: ' ';
    width: 18px;
    height: 18px;
    background-image: url(${xe});
    color: red;
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
    pointer-events: none;
  }
`,me=d.form`
  position: relative;
  width: 100%;
  ${i.tablet} {
    width: 236px;
  }
`,be=d.input`
  height: 46px;
  width: 100%;
  ${i.tablet} {
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

  &:focus-visible + span > svg {
    stroke: ${f.orange};
  }
`,D=d.svg`
  stroke: ${f.textWhite06};

  width: 18px;
  height: 18px;

  &:hover {
    stroke: ${f.orange};
  }
`,je=d.span`
  position: absolute;
  top: 15px;
  right: 18px;
  width: 18px;
  height: 18px;
  ${i.tablet} {
    top: 17px;
  }

  ${i.desktop} {
    top: 18px;
  }
`;var Ae="Expected a function",z=0/0,ve="[object Symbol]",ye=/^\s+|\s+$/g,Se=/^[-+]0x[0-9a-f]+$/i,Ce=/^0b[01]+$/i,$e=/^0o[0-7]+$/i,ke=parseInt,we=typeof w=="object"&&w&&w.Object===Object&&w,Pe=typeof self=="object"&&self&&self.Object===Object&&self,Ie=we||Pe||Function("return this")(),Ee=Object.prototype,Te=Ee.toString,We=Math.max,Oe=Math.min,T=function(){return Ie.Date.now()};function Re(e,n,c){var g,l,m,u,a,p,x=0,k=!1,j=!1,y=!0;if(typeof e!="function")throw new TypeError(Ae);n=M(n)||0,W(c)&&(k=!!c.leading,j="maxWait"in c,m=j?We(M(c.maxWait)||0,n):m,y="trailing"in c?!!c.trailing:y);function h(s){var b=g,C=l;return g=l=void 0,x=s,u=e.apply(C,b),u}function P(s){return x=s,a=setTimeout(r,n),k?h(s):u}function I(s){var b=s-p,C=s-x,O=n-b;return j?Oe(O,m-C):O}function o(s){var b=s-p,C=s-x;return p===void 0||b>=n||b<0||j&&C>=m}function r(){var s=T();if(o(s))return S(s);a=setTimeout(r,I(s))}function S(s){return a=void 0,y&&g?h(s):(g=l=void 0,u)}function A(){a!==void 0&&clearTimeout(a),x=0,g=p=l=a=void 0}function H(){return a===void 0?u:S(T())}function E(){var s=T(),b=o(s);if(g=arguments,l=this,p=s,b){if(a===void 0)return P(p);if(j)return a=setTimeout(r,n),h(p)}return a===void 0&&(a=setTimeout(r,n)),u}return E.cancel=A,E.flush=H,E}function W(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Fe(e){return!!e&&typeof e=="object"}function Le(e){return typeof e=="symbol"||Fe(e)&&Te.call(e)==ve}function M(e){if(typeof e=="number")return e;if(Le(e))return z;if(W(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=W(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(ye,"");var c=Ce.test(e);return c||$e.test(e)?ke(e.slice(2),c?2:8):Se.test(e)?z:+e}var De=Re;const ze=Q(De);function Me(){const e=(o,r,S)=>{const A={};return o&&(A.title=o.trim()),r&&r!=="Categories"&&r!=="default"&&(A.category=r),S==="Recommended"&&(A.recommended=!0),S==="Not recommended"&&(A.recommended=!1),A},n=N(),[c,g]=v.useState("Categories"),[l,m]=v.useState("All"),[u,a]=v.useState(""),p=$(J);v.useEffect(()=>{const o=e(u,c,l),r=new URLSearchParams(o).toString();n(U(r)),n(q(r))},[u,c,l,n]),v.useEffect(()=>{n(X())},[n]);const x=o=>{const r=o.target.value;g(r)},k=ze(o=>{a(o)},500),j=o=>{const r=o.target.value;k(r)},y=o=>{const r=o.target.value;m(r)},h={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},P=o=>{o.preventDefault();const r=o.target.value;a(r)},I=()=>{a("")};return t.jsxs(ge,{children:[t.jsx(he,{children:"Filters"}),t.jsxs(me,{onSubmit:P,onReset:I,children:[t.jsx(be,{type:"text",autoComplete:"off",onChange:j}),t.jsx(je,{children:t.jsx(D,{children:t.jsx("use",{href:R+"#icon-search"})})}),t.jsx(se,{right:"35px",type:"reset",children:t.jsx(D,{children:t.jsx("use",{href:R+"#close"})})})]}),t.jsxs(fe,{children:[t.jsx(L,{children:t.jsxs(F,{value:c,onChange:x,children:[t.jsx("option",{style:h,value:"default",children:"Categories"}),p.map(o=>t.jsx("option",{value:o,style:h,children:ie(o)},o))]})}),t.jsx(L,{children:t.jsxs(F,{value:l,onChange:y,children:[t.jsx("option",{style:h,value:"default",children:"All"}),t.jsx("option",{style:h,value:"Recommended",children:"Recommended"}),t.jsx("option",{style:h,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Be=d.div`
  
  ${i.tablet} {
   width: 580px;
   margin-top: 45px;
  }
  ${i.desktop} {
    margin-top: 100px;
  }
`,Ne=d.p`
color: rgba(239, 237, 232, 0.30);
margin-bottom: 16px;
font-size: 14px;
line-height: 1.28;
  ${i.tablet} {
  
  }
  ${i.desktop} {
  
  }
`,B=d.span`
color:  #E6533C;

font-size: 14px;

line-height: 1.28; 
  ${i.tablet} {
    gap: 32px;
  }
  ${i.desktop} {

  }
`,He=()=>t.jsxs(Be,{children:[t.jsxs(Ne,{children:[" ",t.jsx(B,{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),t.jsx(B,{children:"Try changing the search parameters."})]}),Ve=()=>{const[e,n]=v.useState(1),c=$(V),g=$(G),l=$(Z),m=N(),u=$(K);v.useEffect(()=>{n(1)},[u]);const a=()=>{if(e===1){n(x=>x+1);return}const p=new URLSearchParams({page:e,limit:20}).toString();m(_(`${u}&${p}`)),n(x=>x+1)};return t.jsxs(le,{children:[t.jsxs(ue,{children:[t.jsx(re,{text:"Products"}),t.jsx(Me,{})]}),l.length!==0?t.jsx(ee,{width:{dt:"878"},children:t.jsx(te,{pageStart:0,loadMore:a,hasMore:c&&!g,loader:t.jsx(Y,{size:"60"},"qwe789"),useWindow:!1,children:t.jsx(ne,{children:l.map(p=>t.jsx(oe,{page:"product",data:p},p.id))})})}):t.jsx(He,{})]})};export{Ve as default};
