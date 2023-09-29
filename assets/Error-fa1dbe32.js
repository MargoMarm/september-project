import{n as o,m as t,c as n,U as d,j as e,s,C as h}from"./index-1ab40bd0.js";import{i as l}from"./exercises_desk_2x-1531e374.js";const g=o.div`
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
`,x=o.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;

  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: ${n.orange};

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
`,c=o.h1`
  margin-bottom: 14px;

  color: ${n.white};
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
`,m=o.p`
  margin-bottom: 28px;

  color: ${n.white};
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
`,b=o.div`
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
    background-image: url(${l});
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
`,f=o.div`
  margin-top: 24px;
  margin-bottom: 125px;
`,u=o.svg`
  width: 44px;
  height: 17px;
  margin-right: 8px;
`,w=o.svg`
  width: 100px;
  height: 17px;
`,v=()=>{const{isLoggedIn:i,user:a}=d(),r=Object.keys(a.bodyParameters).length===0,p=()=>{if(i&&r)return"/params";if(i&&!r)return"diary";if(i===!1)return"/"};return e.jsx("main",{children:e.jsxs(g,{children:[e.jsxs(x,{children:[e.jsxs(f,{children:[e.jsx(u,{children:e.jsx("use",{href:s+"#icon-logo_error"})}),e.jsx(w,{children:e.jsx("use",{href:s+"#icon-PowerPulse"})})]}),e.jsx(c,{children:"404"}),e.jsx(m,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),e.jsx(h,{type:"button",text:"Go Home",isorange:"true",to:p()})]}),e.jsx(b,{})]})})};export{v as default};
