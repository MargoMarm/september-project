import{n as t,m as s,j as e,r as j}from"./index-ff757372.js";import{c as i}from"./index-f4d215ad.js";import{C as r}from"./CustomNavLink-708d35c6.js";import{s as n}from"./sprite-4ff87bc4.js";const a={margin:"0",padding:"0",border:"none",backgroundColor:" rgba(0, 0, 0, 0)"},g={width:"46px",height:"46px",fill:"rgba(48, 48, 48, 0.3)",strokeWidth:"1px",stroke:" #e6533c"},f=t.div`
  background-color: ${i.black};
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${s.tablet} {
    background-color: ${i.black};

    height: 84px;
    border-bottom: 1px solid ${i.textWhite03};
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
  fill: ${i.grey};
`,b=t.svg`
  ${g}
`,v=t.div`
  display: flex;
  margin-left: 30px;
  gap: 16px;
`,c=t.button`
  display: flex;
  align-items: center;
  gap: 5px;
  ${a};
`,y=t.span`
  color: ${i.orange};
  font-size: 16px;
  line-height: 24px;

  ${s.desktop} {
    gap: 8px;
  }
`,$=()=>e.jsxs(m,{children:[e.jsx(r,{text:"Diary",isinheader:"true"}),e.jsx(r,{text:"Products",isinheader:"true"}),e.jsx(r,{text:"Exercises",isinheader:"true"}),e.jsxs(v,{children:[e.jsxs(c,{children:[e.jsx(p,{children:e.jsx("use",{href:n+"#settings"})})," "]}),e.jsxs(c,{children:[e.jsx(b,{children:e.jsx("use",{href:n+"#ecllipse"})})," "]}),e.jsxs(c,{children:[e.jsx(y,{children:"Logout"}),e.jsx(p,{children:e.jsx("use",{href:n+"#logout"})})," "]})]})]}),k=t.button`
  ${a}
`,w=t.div`
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
`,C=()=>e.jsx(e.Fragment,{children:e.jsx(w,{children:e.jsxs(k,{type:"button",children:[e.jsx(S,{children:e.jsx("use",{href:n+"#logo-big"})})," "]})})}),h=t.div`
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
  ${a}

  ${s.desktop} {
    display: none;
  }
`,l=t.svg`
  fill: ${i.grey};
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
  ${a}
`,L=t.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  color: ${i.white};
  font-family: Roboto;
  font-size: 14px;

  ${s.tablet} {
    color: ${i.white};
    font-size: 16px;
    line-height: 24px;
  }
`,M=t.div`
  display: flex;
  width: 100%;
  background-color: ${i.orange};
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
`,z=()=>{const[d,u]=j.useState(!1),o=()=>u(!d);return e.jsxs(e.Fragment,{children:[e.jsxs(h,{to:"#",children:[e.jsx(x,{type:"button",children:e.jsx(l,{children:e.jsx("use",{href:n+"#settings"})})}),e.jsx(x,{type:"button",children:e.jsx(N,{children:e.jsx("use",{href:n+"#ecllipse"})})}),e.jsx(x,{type:"button",onClick:o,children:e.jsx(l,{children:e.jsx("use",{href:n+"#menu"})})})]}),e.jsx(U,{className:d===!0?"active":"",children:e.jsxs(M,{onClick:o,children:[e.jsx(B,{type:"button",onClick:o,children:e.jsx(l,{children:e.jsx("use",{href:n+"#close"})})}),e.jsxs(W,{children:[e.jsx(r,{text:"Diary"}),e.jsx(r,{text:"Products"}),e.jsx(r,{text:"Exercises"})]}),e.jsx(E,{children:e.jsx(h,{to:"#",children:e.jsxs(x,{type:"button",onClick:o,children:[e.jsx(L,{children:" Logout"}),e.jsx(l,{children:e.jsx("use",{href:n+"#logout"})})]})})})]})})]})},R=()=>e.jsxs(f,{children:[e.jsx(C,{}),e.jsx($,{}),e.jsx(z,{})]});export{R as H};
