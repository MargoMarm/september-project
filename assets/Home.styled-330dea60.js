import{n as t,m as i,j as e,r as b}from"./index-514d82eb.js";import{c as o}from"./index-ea091eae.js";import{C as r}from"./CustomNavLink-c97f0f76.js";import{s as n}from"./sprite-bc778fc9.js";const l={margin:"0",padding:"0",border:"none",backgroundColor:" rgba(0, 0, 0, 0)"},h={width:"46px",height:"46px",fill:"rgba(48, 48, 48, 0.3)",strokeWidth:"1px",stroke:" #e6533c"},j=t.div`
  background-color: ${o.black};
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${i.tablet} {
    background-color: ${o.black};

    height: 84px;
    border-bottom: 1px solid ${o.textWhite03};
  }

  ${i.desktop} {
    background-color: transparent;
	 border: none;
  }
`,f=t.div`
  ${i.smallMobile} {
    display: none;
  }
  ${i.desktop} {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`,g=t.svg`
  width: 24px;
  height: 24px;
  fill: ${o.grey};
`,k=t.svg`
  ${h}
`,v=t.div`
  display: flex;
  margin-left: 30px;
  gap: 16px;
`,c=t.button`
  display: flex;
  align-items: center;
  gap: 5px;
  ${l};
`,$=t.span`
  color: ${o.orange};
  font-size: 16px;
  line-height: 24px;

  ${i.desktop} {
    gap: 8px;
  }
`,y=()=>e.jsxs(f,{children:[e.jsx(r,{text:"Diary",isinheader:"true"}),e.jsx(r,{text:"Products",isinheader:"true"}),e.jsx(r,{text:"Exercises",isinheader:"true"}),e.jsxs(v,{children:[e.jsxs(c,{children:[e.jsx(g,{children:e.jsx("use",{href:n+"#settings"})})," "]}),e.jsxs(c,{children:[e.jsx(k,{children:e.jsx("use",{href:n+"#ecllipse"})})," "]}),e.jsxs(c,{children:[e.jsx($,{children:"Logout"}),e.jsx(g,{children:e.jsx("use",{href:n+"#logout"})})," "]})]})]}),w=t.button`
  ${l}
`,_=t.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`,M=t.svg`
  width: 126px;
  height: 13px;
  ${i.tablet} {
    width: 152px;
    height: 17px;
  }
`,S=()=>e.jsx(e.Fragment,{children:e.jsx(_,{children:e.jsxs(w,{type:"button",children:[e.jsx(M,{children:e.jsx("use",{href:n+"#logo-big"})})," "]})})}),m=t.div`
  display: flex;
  margin-right: 20px;
  gap: 14px;

  ${i.tablet} {
    margin-right: 32px;
    gap: 16px;
  }
`,p=t.button`
  display: flex;
  align-items: center;
  gap: 8px;
  ${l}

  ${i.desktop} {
    display: none;
  }
`,x=t.svg`
  fill: ${o.grey};
  width: 24px;
  height: 24px;
`,C=t.svg`
  @media (max-width: 376px) {
    width: 37px;
    height: 37px;
  }
  ${h}
`,L=t.button`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  ${l}
`,D=t.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  color: ${o.white};
  font-family: Roboto;
  font-size: 14px;

  ${i.tablet} {
    color: ${o.white};
    font-size: 16px;
    line-height: 24px;
  }
`,z=t.div`
  display: flex;
  width: 100%;
  background-color: ${o.orange};
  padding: 20px 20px 0px 20px;
  flex-direction: column;
  justify-content: space-between;
`,N=t.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`,T=t.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  z-index: 1;

  ${i.tablet} {
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
`,B=()=>{const[d,u]=b.useState(!1),a=()=>u(!d);return e.jsxs(e.Fragment,{children:[e.jsxs(m,{to:"#",children:[e.jsx(p,{type:"button",children:e.jsx(x,{children:e.jsx("use",{href:n+"#settings"})})}),e.jsx(p,{type:"button",children:e.jsx(C,{children:e.jsx("use",{href:n+"#ecllipse"})})}),e.jsx(p,{type:"button",onClick:a,children:e.jsx(x,{children:e.jsx("use",{href:n+"#menu"})})})]}),e.jsx(T,{className:d===!0?"active":"",children:e.jsxs(z,{onClick:a,children:[e.jsx(L,{type:"button",onClick:a,children:e.jsx(x,{children:e.jsx("use",{href:n+"#close"})})}),e.jsxs(W,{children:[e.jsx(r,{text:"Diary"}),e.jsx(r,{text:"Products"}),e.jsx(r,{text:"Exercises"})]}),e.jsx(N,{children:e.jsx(m,{to:"#",children:e.jsxs(p,{type:"button",onClick:a,children:[e.jsx(D,{children:" Logout"}),e.jsx(x,{children:e.jsx("use",{href:n+"#logout"})})]})})})]})})]})},Q=()=>e.jsxs(j,{children:[e.jsx(S,{}),e.jsx(y,{}),e.jsx(B,{})]}),E="/september-project/assets/home-page_desktop_1x-2dc737d6.jpg",U="/september-project/assets/home-page_desktop_2x-2c5d358c.jpg",H="/september-project/assets/home-page_desktop_3x-30837f7d.jpg",F="/september-project/assets/home-page_tablet_1x-3f850f85.jpg",P="/september-project/assets/home-page_tablet_2x-16fa8106.jpg",R="/september-project/assets/home-page_tablet_3x-96c27aa0.jpg",q="/september-project/assets/home-page_mobile_1x-516df911.jpg",I="/september-project/assets/home-page_mobile_2x-1e729053.jpg",A="/september-project/assets/home-page_mobile_3x-10fc07f4.jpg",s={imgDx1:E,imgDx2:U,imgDx3:H,imgTx1:F,imgTx2:P,imgTx3:R,imgMx1:q,imgMx2:I,imgMx3:A},V=t.ul`
  display: flex;
  gap: 20px;
`,X=t.div`
  height: 812px;
  background-image: url(${s.imgMx1});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 298px 571px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${s.imgMx2});
    }
  }

  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: url(${s.imgMx3});
    }
  }

  ${i.tablet} {
    height: 768px;
    background-image: url(${s.imgTx1});
    background-size: 437px 893px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${s.imgTx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${s.imgTx3});
      }
    }
  }
  ${i.desktop} {
    background-image: url(${s.imgDx1});
    background-size: 670px 800px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${s.imgDx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${s.imgDx3});
      }
    }
  }
`;export{Q as H,V as L,X as W};
