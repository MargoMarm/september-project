import{n as c,m as f,c as C,b as E,g as H,u as L,r as y,d as q,f as A,e as V,j as t,s as R}from"./index-48b352cd.js";import{S as G,P as Q,a as U}from"./ProductsOrExercisesItem-38252b0f.js";import{T as X}from"./Title-5b08062f.js";import{B as F}from"./ButtonIconForInput-97ae922f.js";import"./capitalizeWord-85339af4.js";const Y="/september-project/assets/products_desktop_1x-48a51d2e.jpg",J="/september-project/assets/products_desktop_2x-7123c357.jpg",K="/september-project/assets/products_desktop_3x-4c8deaec.jpg",Z={imgDx1:Y,imgDx2:J,imgDx3:K},ee=e=>e.products.products,te=e=>e.products.categories;c.option`
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
    height: 52px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${C.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${C.textWhite06};
  background-color: transparent;
 
}
`,ne=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${f.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,re=c.div`
  display: none;
  ${f.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${C.textWhite05};
  }
`,oe=c.div`
  display: flex;
  gap: 16px;

`,D=c.div`
  position: relative;
&::after {
  content: " ";
  background-image: url('../../assets/shewron.svg'); 
  color: red;
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  pointer-events: none; 
}
`,ie=c.form`
  position: relative;
  width: 100%;
  ${f.tablet} {
    width: 236px;
  }
`,se=c.input`
  height: 46px;
  width: 100%;
  ${f.tablet} {
    height: 52px;
    width: 236px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${C.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  outline: none;

  color: ${C.textWhite06};
  background-color: transparent;
  &:focus-visible {
    border: 1px solid ${C.orange};
  }
`,_=c.svg`
  width: 18px;
  height: 18px;
`;var ae="Expected a function",N=0/0,ce="[object Symbol]",de=/^\s+|\s+$/g,pe=/^[-+]0x[0-9a-f]+$/i,le=/^0b[01]+$/i,ue=/^0o[0-7]+$/i,xe=parseInt,fe=typeof E=="object"&&E&&E.Object===Object&&E,ge=typeof self=="object"&&self&&self.Object===Object&&self,he=fe||ge||Function("return this")(),me=Object.prototype,be=me.toString,je=Math.max,ve=Math.min,P=function(){return he.Date.now()};function ye(e,n,i){var d,p,v,l,a,u,m=0,$=!1,b=!1,S=!0;if(typeof e!="function")throw new TypeError(ae);n=z(n)||0,O(i)&&($=!!i.leading,b="maxWait"in i,v=b?je(z(i.maxWait)||0,n):v,S="trailing"in i?!!i.trailing:S);function x(o){var h=d,k=p;return d=p=void 0,m=o,l=e.apply(k,h),l}function T(o){return m=o,a=setTimeout(j,n),$?x(o):l}function r(o){var h=o-u,k=o-m,w=n-h;return b?ve(w,v-k):w}function s(o){var h=o-u,k=o-m;return u===void 0||h>=n||h<0||b&&k>=v}function j(){var o=P();if(s(o))return g(o);a=setTimeout(j,r(o))}function g(o){return a=void 0,S&&d?x(o):(d=p=void 0,l)}function B(){a!==void 0&&clearTimeout(a),m=0,d=u=p=a=void 0}function M(){return a===void 0?l:g(P())}function I(){var o=P(),h=s(o);if(d=arguments,p=this,u=o,h){if(a===void 0)return T(u);if(b)return a=setTimeout(j,n),x(u)}return a===void 0&&(a=setTimeout(j,n)),l}return I.cancel=B,I.flush=M,I}function O(e){var n=typeof e;return!!e&&(n=="object"||n=="function")}function Ce(e){return!!e&&typeof e=="object"}function Se(e){return typeof e=="symbol"||Ce(e)&&be.call(e)==ce}function z(e){if(typeof e=="number")return e;if(Se(e))return N;if(O(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=O(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=e.replace(de,"");var i=le.test(e);return i||ue.test(e)?xe(e.slice(2),i?2:8):pe.test(e)?N:+e}var ke=ye;const $e=H(ke);function Ee(){const e=(r,s,j)=>{const g={};return r&&(g.title=r),s&&s!=="Categories"&&s!=="default"&&(g.category=s),j==="Recommended"&&(g.recommended=!0),j==="Not recommended"&&(g.recommended=!1),g},n=L(),[i,d]=y.useState("Categories"),[p,v]=y.useState("All"),[l,a]=y.useState(""),u=q(te);y.useEffect(()=>{const r=e(l,i,p),s=new URLSearchParams(r).toString();n(A(s))},[l,i,p,n]),y.useEffect(()=>{n(V())},[n]);const m=r=>{const s=r.target.value;d(s)},$=$e(r=>{a(r)},500),b=r=>{const s=r.target.value;$(s)},S=r=>{const s=r.target.value;v(s)},x={backgroundColor:"rgba(28, 28, 28, 1)",color:"#EFEDE8",fontSize:"16px",lineHeight:"24px"},T=r=>{r.preventDefault()};return t.jsxs(ne,{children:[t.jsx(re,{children:"Filters"}),t.jsxs(ie,{children:[t.jsx(se,{type:"text",autoComplete:"off",onSubmit:T,onChange:b}),t.jsx(F,{right:"42px",type:"reset",children:t.jsx(_,{children:t.jsx("use",{href:R+"#close"})})}),t.jsx(F,{right:"18px",type:"submit",children:t.jsx(_,{children:t.jsx("use",{href:R+"#icon-search"})})})]}),t.jsxs(oe,{children:[t.jsx(D,{children:t.jsxs(W,{value:i,onChange:m,children:[t.jsx("option",{style:x,value:"default",children:"Categories"}),u.map(r=>t.jsx("option",{value:r,style:x,children:r},r))]})}),t.jsx(D,{children:t.jsxs(W,{value:p,onChange:S,children:[t.jsx("option",{style:x,value:"default",children:"All"}),t.jsx("option",{style:x,value:"Recommended",children:"Recommended"}),t.jsx("option",{style:x,value:"Not recommended",children:"Not recommended"})]})})]})]})}const Te=c.div`
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
    background-image: url(${Z.imgDx1});

    ${""}
  }
`,Ie=c.div`
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
`,We=()=>{const e=L(),n=q(ee);return y.useEffect(()=>{e(A())},[e]),t.jsxs(Te,{children:[t.jsxs(Ie,{children:[t.jsx(X,{text:"Products"}),t.jsx(Ee,{})]}),t.jsx(G,{width:{dt:"868"},children:t.jsx(Q,{children:n.map((i,d)=>d<20?t.jsx(U,{page:"product",data:i},i.id):null)})})]})};export{We as default};
