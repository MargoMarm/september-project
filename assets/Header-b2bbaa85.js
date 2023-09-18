import{n as t,m as s,j as e,r as j}from"./index-4535f9f1.js";import{c as n}from"./index-56ab578e.js";import{C as r}from"./CustomNavLink-ef1566e5.js";import{b as c}from"./customBtn-d4ff7805.js";import{s as i}from"./sprite-57a4f95b.js";const g={width:"46px",height:"46px",fill:"rgba(48, 48, 48, 0.3)",strokeWidth:"1px",stroke:" #e6533c"},f=t.div`
  background-color: ${n.black};
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${s.tablet} {
    background-color: ${n.black};

    height: 84px;
    border-bottom: 1px solid ${n.textWhite03};
  }

  ${s.desktop} {
    background-color: transparent;
	 border: none;
  }
`,m=t.div`
  ${s.smallMobile} {
    display: none;
  }
  ${s.desktop} {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`,p=t.svg`
  width: 24px;
  height: 24px;
  fill: ${n.grey};
`,b=t.svg`
  ${g}
`,y=t.div`
  display: flex;
  margin-left: 30px;
  gap: 16px;
`,a=t.button`
  display: flex;
  align-items: center;
  gap: 5px;
  ${c};
`,v=t.span`
  color: ${n.orange};
  font-size: 16px;
  line-height: 24px;

  ${s.desktop} {
    gap: 8px;
  }
`,$=()=>e.jsxs(m,{children:[e.jsx(r,{to:"/dairy",text:"Diary",isinheader:"true"}),e.jsx(r,{to:"/products",text:"Products",isinheader:"true"}),e.jsx(r,{to:"/exercises",text:"Exercises",isinheader:"true"}),e.jsxs(y,{children:[e.jsxs(a,{children:[e.jsx(p,{children:e.jsx("use",{href:i+"#settings"})})," "]}),e.jsxs(a,{children:[e.jsx(b,{children:e.jsx("use",{href:i+"#ecllipse"})})," "]}),e.jsxs(a,{children:[e.jsx(v,{children:"Logout"}),e.jsx(p,{children:e.jsx("use",{href:i+"#logout"})})," "]})]})]}),w=t.button`
  ${c}
`,k=t.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`,S=t.svg`
  width: 126px;
  height: 13px;
  ${s.tablet} {
    width: 152px;
    height: 17px;
  }
`,C=()=>e.jsx(e.Fragment,{children:e.jsx(k,{children:e.jsxs(w,{type:"button",children:[e.jsx(S,{children:e.jsx("use",{href:i+"#logo-big"})})," "]})})}),h=t.div`
  display: flex;
  margin-right: 20px;
  gap: 14px;

  ${s.tablet} {
    margin-right: 32px;
    gap: 16px;
  }
`,x=t.button`
  display: flex;
  align-items: center;
  gap: 8px;
  ${c}

  ${s.desktop} {
    display: none;
  }
`,l=t.svg`
  fill: ${n.grey};
  width: 24px;
  height: 24px;
`,N=t.svg`
  @media (max-width: 376px) {
    width: 37px;
    height: 37px;
  }
  ${g}
`,B=t.button`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  ${c}
`,L=t.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  color: ${n.white};
  font-family: Roboto;
  font-size: 14px;

  ${s.tablet} {
    color: ${n.white};
    font-size: 16px;
    line-height: 24px;
  }
`,M=t.div`
  display: flex;
  width: 100%;
  background-color: ${n.orange};
  padding: 20px 20px 0px 20px;
  flex-direction: column;
  justify-content: space-between;
`,E=t.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`,U=t.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  z-index: 1;

  ${s.tablet} {
    width: 350px;
  }

  &.active {
    right: 0;
    transition: 350ms;
  }
`,W=t.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,z=()=>{const[d,u]=j.useState(!1),o=()=>u(!d);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{to:"#",children:[e.jsx(x,{type:"button",children:e.jsx(l,{children:e.jsx("use",{href:i+"#settings"})})}),e.jsx(x,{type:"button",children:e.jsx(N,{children:e.jsx("use",{href:i+"#ecllipse"})})}),e.jsx(x,{type:"button",onClick:o,children:e.jsx(l,{children:e.jsx("use",{href:i+"#menu"})})})]}),e.jsx(U,{className:d===!0?"active":"",children:e.jsxs(M,{onClick:o,children:[e.jsx(B,{type:"button",onClick:o,children:e.jsx(l,{children:e.jsx("use",{href:i+"#close"})})}),e.jsxs(W,{children:[e.jsx(r,{to:"/dairy",text:"Diary"}),e.jsx(r,{to:"/products",text:"Products"}),e.jsx(r,{to:"/exercises",text:"Exercises"})]}),e.jsx(E,{children:e.jsx(h,{to:"#",children:e.jsxs(x,{type:"button",onClick:o,children:[e.jsx(L,{children:" Logout"}),e.jsx(l,{children:e.jsx("use",{href:i+"#logout"})})]})})})]})})]})},q=()=>e.jsxs(f,{children:[e.jsx(C,{}),e.jsx($,{}),e.jsx(z,{})]});export{q as H};
