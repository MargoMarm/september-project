import{n as r,m as o,c as i,P as s,r as f,j as e,s as a,L as k}from"./index-ada2ea4c.js";import{F as P,a as z,c as E,b as c,d as R,E as p}from"./formik.esm-35317f8e.js";import{B as T}from"./BtnSubmit-4b381148.js";import{B}from"./ButtonIconForInput-c23c80b4.js";import{s as g}from"./styled-components.browser.esm-53d1ad3c.js";const F=r(P)`
  margin-top: 28px;

  ${o.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,I=r.div`
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
`,m=r(z)`
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
`,h=r.div`
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
`,A=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,W=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function L({nameIsShown:n,btnTitle:l,onSubmit:d}){const[j,b]=f.useState(!1),[w,y]=f.useState("password"),$=t=>t?c().required("Name is required"):null,v=E().shape({name:$(n),email:c().matches(A,{message:"Email must be valid! For example: example@gmail.com"}).email("Invalid email").required("Email is required"),password:c().matches(W,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),q=n?{name:"",email:"",password:""}:{email:"",password:""},S=()=>{b(t=>!t),y(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsx(R,{initialValues:q,onSubmit:d,validationSchema:v,children:e.jsxs(F,{children:[e.jsxs(I,{children:[n&&e.jsxs(x,{children:[e.jsx(m,{id:"name",type:"text",placeholder:"Name",name:"name"}),e.jsx(h,{children:e.jsx(p,{name:"name",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]}),e.jsxs(x,{children:[e.jsx(m,{id:"email",type:"email",placeholder:"Email",name:"email"}),e.jsx(h,{children:e.jsx(p,{name:"email",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]}),e.jsxs(x,{children:[e.jsx(m,{id:"password",type:w,placeholder:"Password",name:"password"}),e.jsx(B,{type:"button",right:"16px",onClick:S,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+`${j?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(h,{children:e.jsx(p,{name:"password",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]})]}),e.jsx(T,{title:l,fontSize:"20px"})]})})}L.propTypes={nameIsShown:s.bool.isRequired,btnTitle:s.string.isRequired,onSubmit:s.func.isRequired};const Z=g.span`
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
`,N=g.div`
  display: inline-block;
  margin-top: 12px;

  ${o.tablet} {
    padding-left: 9px;
  }
`,M=({text:n,linkText:l,to:d})=>e.jsxs(N,{children:[e.jsx(Z,{children:n}),e.jsx(C,{to:d,children:l})]});M.propTypes={text:s.string.isRequired,linkText:s.string.isRequired,to:s.string.isRequired};export{L as A,M as B};
