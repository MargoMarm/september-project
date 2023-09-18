import{n as s,m as i,j as t}from"./index-3f06b336.js";import{C as e}from"./CustomNavLink-5c8d1657.js";import{c as o}from"./index-e7937559.js";import{s as n}from"./sprite-4ff87bc4.js";import{H as r}from"./Header-d6e80bcc.js";import{W as p,L as x}from"./Home.styled-af79c816.js";const a={color:o.white,fontFamily:"Roboto",fontWeight:500,wordWrap:"break-word"},l=s.h1`
  letter-spacing: 0.38px;
  ${a}

  & > span {
    position: relative;
    display: inline-block;

    & > svg {
      position: absolute;
      z-index: -1;
      width: 98px;
      height: 35px;
      left: -13px;
      top: 1px;

      ${i.tablet} {
        width: 185px;
        height: 67px;
        left: -20px;
        top: 10px;
      }
    }
  }

  ${i.mobile} {
    width: 335px;
    line-height: 105.26%;
  }

  ${i.tablet} {
    width: 598px;
    font-size: 70px;
    line-height: 111.43%;
    letter-spacing: 0.7px;

    padding-top: 116px;
    margin-bottom: 64px;
  }
`;function h(){return t.jsxs(l,{children:["Transforming your"," ",t.jsxs("span",{children:["body"," ",t.jsx("svg",{children:t.jsx("use",{href:n+"#line"})})]})," ","shape with Power Pulse"]})}const u=()=>t.jsx(t.Fragment,{children:t.jsxs(p,{children:[t.jsx(r,{}),t.jsx(h,{}),t.jsxs(x,{children:[t.jsx("li",{children:t.jsx(e,{isorange:"true",text:"Sign up",to:"/signup"})}),t.jsx("li",{children:t.jsx(e,{text:"Sign in",to:"/signin"})})]})]})});export{u as default};
