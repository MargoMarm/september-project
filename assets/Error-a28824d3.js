import{n as e,m as t,c as i,U as s,j as o,s as n,C as r}from"./index-bf61e43f.js";import{i as p}from"./exercises_desk_2x-1531e374.js";const d=e.div`
  display: flex;
  position: relative;
  ${t.mobile} {
    width: 375px;
  }

  ${t.tablet} {
    width: 768px;
  }

  ${t.desktop} {
    width: 1440px;
  }
`,h=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;

  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: ${i.orange};

  ${t.mobile} {
    width: 240px;
  }

  ${t.tablet} {
    width: 420px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    height: 100%;
  }

  ${t.desktop} {
    width: 670px;
    padding-left: 96px;
    padding-right: 96px;
    padding-bottom: 96px;
    height: 100vh;
  }
`,g=e.h1`
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
`,x=e.p`
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
`,l=e.div`
  display: none;
  ${t.mobile} {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    display: block;

    width: 135px;
    height: 100vh;
    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 446px auto;
    background-image: url(${p});
  }

  ${t.tablet} {
    width: 348px;
    background-size: cover;
    height: 100%;
  }

  ${t.desktop} {
    width: 670px;
    height: 100vh;
  }
`,c=e.div`
  margin-top: 24px;
  margin-bottom: 125px;
`,m=e.svg`
  width: 44px;
  height: 17px;
  margin-right: 8px;
`,b=e.svg`
  width: 100px;
  height: 17px;
`,w=()=>{const{isLoggedIn:a}=s();return o.jsxs(d,{children:[o.jsxs(h,{children:[o.jsxs(c,{children:[o.jsx(m,{children:o.jsx("use",{href:n+"#icon-logo_error"})}),o.jsx(b,{children:o.jsx("use",{href:n+"#icon-PowerPulse"})})]}),o.jsx(g,{children:"404"}),o.jsx(x,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),o.jsx(r,{type:"button",text:"Go Home",isorange:"true",to:a?"/diary":"/"})]}),o.jsx(l,{})]})};export{w as default};
