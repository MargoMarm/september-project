import{n as r,m as a,c as i,P as s,r as f,j as e,s as o,L as k}from"./index-56493184.js";import{F as z,a as P,c as R,b as c,d as T,E as p}from"./formik.esm-dbd90745.js";import{B}from"./BtnSubmit-ca13d8e6.js";import{B as E}from"./ButtonIconForInput-de22a239.js";import{s as g}from"./styled-components.browser.esm-0be90080.js";const I=r(z)`
  width: 335px;
  margin-top: 28px;
  ${a.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,F=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  ${a.tablet} {
    gap: 20px;
    margin-bottom: 64px;
  }
`,x=r.div`
  position: relative;
  width: 100%;
`,h=r(P)`
  height: 42px;
  width: 100%;
  ${a.tablet} {
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
`,u=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${i.textError};
`,A=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,W=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function L({nameIsShown:n,btnTitle:l,onSubmit:d}){const[j,w]=f.useState(!1),[b,y]=f.useState("password"),$=t=>t?c().required("Name is required"):null,v=R().shape({name:$(n),email:c().matches(A,{message:"Email must be valid"}).email("Invalid email").required("Email is required"),password:c().matches(W,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),q=n?{name:"",email:"",password:""}:{email:"",password:""},S=()=>{w(t=>!t),y(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsx(T,{initialValues:q,onSubmit:d,validationSchema:v,children:e.jsxs(I,{children:[e.jsxs(F,{children:[n&&e.jsxs(x,{children:[e.jsx(h,{id:"name",type:"text",placeholder:"name",name:"name"}),e.jsx(m,{children:e.jsx(p,{name:"name",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:o+"#icon-checkbox-circle-fill"})}),t]})})})]}),e.jsxs(x,{children:[e.jsx(h,{id:"email",type:"email",placeholder:"email",name:"email"}),e.jsx(m,{children:e.jsx(p,{name:"email",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:o+"#icon-checkbox-circle-fill"})}),t]})})})]}),e.jsxs(x,{children:[e.jsx(h,{id:"password",type:b,placeholder:"password",name:"password"}),e.jsx(E,{type:"button",right:"16px",onClick:S,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:o+`${j?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(m,{children:e.jsx(p,{name:"password",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:o+"#icon-checkbox-circle-fill"})}),t]})})})]})]}),e.jsx(B,{title:l,fontSize:"20px"})]})})}L.propTypes={nameIsShown:s.bool.isRequired,btnTitle:s.string.isRequired,onSubmit:s.func.isRequired};const Z=g.span`
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

  ${a.tablet} {
    padding-left: 9px;
  }
`,M=({text:n,linkText:l,to:d})=>e.jsxs(N,{children:[e.jsx(Z,{children:n}),e.jsx(C,{to:d,children:l})]});M.propTypes={text:s.string.isRequired,linkText:s.string.isRequired,to:s.string.isRequired};export{L as A,M as B};
