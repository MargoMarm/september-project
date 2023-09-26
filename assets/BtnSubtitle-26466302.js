import{n as r,m as o,c as i,P as s,r as f,j as e,s as a,L as k}from"./index-f7692a4e.js";import{F as z,a as P,c as R,b as c,d as T,E as p}from"./formik.esm-7a8c134c.js";import{B}from"./BtnSubmit-7c790093.js";import{B as E}from"./ButtonIconForInput-c1047b1d.js";import{s as g}from"./styled-components.browser.esm-40e97145.js";const I=r(z)`
  margin-top: 28px;

  ${o.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,F=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  margin-bottom: 28px;
  ${o.tablet} {
    gap: 32px;
    margin-bottom: 64px;
  }
`,x=r.div`
  position: relative;
  width: 100%;
`,h=r(P)`
  height: 42px;
  width: 100%;
  ${o.tablet} {
    height: 48px;
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
`,m=r.div`
  position: absolute;
  ${o.smallMobile} {
    bottom: -24px;
  }
`,u=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${i.textError};
`,A=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,W=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function L({nameIsShown:n,btnTitle:l,onSubmit:d}){const[j,b]=f.useState(!1),[w,y]=f.useState("password"),$=t=>t?c().required("Name is required"):null,v=R().shape({name:$(n),email:c().matches(A,{message:"Email must be valid"}).email("Invalid email").required("Email is required"),password:c().matches(W,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),q=n?{name:"",email:"",password:""}:{email:"",password:""},S=()=>{b(t=>!t),y(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsx(T,{initialValues:q,onSubmit:d,validationSchema:v,children:e.jsxs(I,{children:[e.jsxs(F,{children:[n&&e.jsxs(x,{children:[e.jsx(h,{id:"name",type:"text",placeholder:"name",name:"name"}),e.jsx(m,{children:e.jsx(p,{name:"name",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]}),e.jsxs(x,{children:[e.jsx(h,{id:"email",type:"email",placeholder:"email",name:"email"}),e.jsx(m,{children:e.jsx(p,{name:"email",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]}),e.jsxs(x,{children:[e.jsx(h,{id:"password",type:w,placeholder:"password",name:"password"}),e.jsx(E,{type:"button",right:"16px",onClick:S,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+`${j?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(m,{children:e.jsx(p,{name:"password",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]})]}),e.jsx(B,{title:l,fontSize:"20px"})]})})}L.propTypes={nameIsShown:s.bool.isRequired,btnTitle:s.string.isRequired,onSubmit:s.func.isRequired};const Z=g.span`
  color: ${i.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,C=g(k)`
  color: ${i.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
`,M=g.div`
  display: inline-block;
  margin-top: 12px;

  ${o.tablet} {
    padding-left: 9px;
  }
`,N=({text:n,linkText:l,to:d})=>e.jsxs(M,{children:[e.jsx(Z,{children:n}),e.jsx(C,{to:d,children:l})]});N.propTypes={text:s.string.isRequired,linkText:s.string.isRequired,to:s.string.isRequired};export{L as A,N as B};
