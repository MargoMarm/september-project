import{n as o,m as s,c as i,j as e,s as n,u as x,b as u,r as h,f as g}from"./index-c352a624.js";import{S as m,P as f,a as b}from"./ProductsOrExercisesItem-c6402216.js";import{T as j}from"./Title-5dcd3376.js";import{B as p}from"./ButtonIconForInput-45050372.js";import"./capitalizeWord-85339af4.js";const k="/september-project/assets/products_desktop_1x-48a51d2e.jpg",$="/september-project/assets/products_desktop_2x-7123c357.jpg",v="/september-project/assets/products_desktop_3x-4c8deaec.jpg",w={imgDx1:k,imgDx2:$,imgDx3:v},y=["alcoholic drinks","berries","cereals","dairy","dried fruits","eggs","fish","flour","fruits","meat","mushrooms","nuts","oils and fats","poppy","sausage","seeds","sesame","soft drinks","vegetables and herbs"],P=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${s.tablet} {
    flex-direction: row;
    width: 664px;
  }
`,C=o.div`
  display: none;
  ${s.desktop} {
    display: block;
    position: absolute;
    top: -24px;
    right: 12px;
    font-size: 14px;
    line-height: 128%;
    color: ${i.textWhite05};
  }
`,S=o.div`
  display: flex;
  gap: 16px;
`,W=o.div`
  position: relative;
  width: 100%;
  ${s.tablet} {
    width: 236px;
  }
`,_=o.input`
  height: 46px;
  width: 100%;
  ${s.tablet} {
    height: 52px;
    width: 236px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${i.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  outline: none;

  color: ${i.textWhite06};
  background-color: transparent;
  &:focus-visible {
    border: 1px solid ${i.orange};
  }
`,d=o.svg`
  width: 18px;
  height: 18px;
`,c=o.select`
  height: 46px;
  width: 100%;
  ${s.tablet} {
    height: 52px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${i.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${i.textWhite06};
  background-color: transparent;
`;function F(){return e.jsxs(P,{children:[e.jsx(C,{children:"Filters"}),e.jsxs(W,{children:[e.jsx(_,{type:"text",autoComplete:"off"}),e.jsx(p,{onClick:t=>console.log(t),right:"42px",type:"submit",children:e.jsx(d,{children:e.jsx("use",{href:n+"#close"})})}),e.jsx(p,{onClick:t=>console.log(t),right:"18px",type:"submit",children:e.jsx(d,{children:e.jsx("use",{href:n+"#icon-search"})})})]}),e.jsxs(S,{children:[e.jsx(c,{children:y.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsxs(c,{children:[e.jsx("option",{value:"All",children:"All"}),e.jsx("option",{value:"Recommended",children:"Recommended"}),e.jsx("option",{value:"Not recomended",children:"Not recommended"})]})]})]})}const D=o.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;

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
    background-image: url(${w.imgDx1});

    ${""}
  }
`,E=o.div`
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
`,I=t=>t.products.products,N=()=>{const t=x(),a=u(I);return h.useEffect(()=>{t(g())},[t]),e.jsxs(D,{children:[e.jsxs(E,{children:[e.jsx(j,{text:"Products"}),e.jsx(F,{})]}),e.jsx(m,{width:{dt:"868"},children:e.jsx(f,{children:a.map((r,l)=>l<20?e.jsx(b,{page:"product",data:r},r._id):null)})})]})};export{N as default};
