import{n as o,m as t,c as i,j as e,C as n}from"./index-1216710f.js";const a=o.div`
  display: flex;

  ${t.mobile} {
    width: 375px;
  }

  ${t.tablet} {
    width: 768px;
  }

  ${t.desktop} {
    width: 1440px;
  }
`,s=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;

  padding: 20px;
  background-color: ${i.orange};

  ${t.mobile} {
    width: 240px;
  }

  ${t.tablet} {
    width: 420px;
    padding: 32px;
  }

  ${t.desktop} {
    width: 670px;
    padding: 96px;
  }
`,r=o.h1`
  margin-bottom: 14px;

  color: ${i.white};
  font-family: Roboto;
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.66px;

  ${t.mobile} {
  }

  ${t.tablet} {
    font-size: 160px;
    margin-bottom: 28px;
  }
`,l=o.p`
  margin-bottom: 28px;

  color: ${i.white};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  ${t.mobile} {
    width: 200px;
  }

  ${t.tablet} {
    width: 356px;
    font-size: 16px;
  }

  ${t.desktop} {
    width: 447px;
  }
`,d=()=>e.jsx(a,{children:e.jsxs(s,{children:[e.jsx(r,{children:"404"}),e.jsx(l,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(n,{type:"button",text:"Go Home",isorange:"true",to:"/"})]})});export{d as default};
