import{n as o,m as i,c as s,P as r,r as b,j as e,s as a,L as k}from"./index-34023d96.js";import{F as P,a as z,c as E,b as p,d as R,E as c}from"./formik.esm-5aa622bc.js";import{B as T}from"./BtnSubmit-57bb270c.js";import{B}from"./ButtonIconForInput-738349b8.js";import{s as g}from"./styled-components.browser.esm-528c09c9.js";const F=o(P)`
  margin-top: 28px;

  ${i.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,I=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 32px;

  ${i.mobile} {
    gap: 33px;
    margin-bottom: 34px;
  }

  ${i.tablet} {
    gap: 34px;
    margin-bottom: 64px;
  }
`,x=o.div`
  position: relative;
  width: 100%;
`,m=o(z)`
  height: 42px;
  width: 100%;
  ${i.tablet} {
    height: 48px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${s.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${s.textWhite06};
  background-color: transparent;
  &:focus-visible {
    border: 1px solid ${s.orange};
  }
`,h=o.div`
  position: absolute;
  ${i.smallMobile} {
    bottom: -28px;
  }

  ${i.Mobile} {
    bottom: -29px;
  }

  ${i.tablet} {
    bottom: -30px;
  }
`,u=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${s.textError};
`,A=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,W=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function L({nameIsShown:n,btnTitle:l,onSubmit:d}){const[f,j]=b.useState(!1),[w,y]=b.useState("password"),$=t=>t?p().required("Name is required"):null,v=E().shape({name:$(n),email:p().matches(A,{message:"Email must be valid! For example: example@gmail.com"}).email("Invalid email").required("Email is required"),password:p().matches(W,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),q=n?{name:"",email:"",password:""}:{email:"",password:""},S=()=>{j(t=>!t),y(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsx(R,{initialValues:q,onSubmit:d,validationSchema:v,children:e.jsxs(F,{children:[e.jsxs(I,{children:[n&&e.jsxs(x,{children:[e.jsx(m,{id:"name",type:"text",placeholder:"Name",name:"name"}),e.jsx(h,{children:e.jsx(c,{name:"name",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]}),e.jsxs(x,{children:[e.jsx(m,{id:"email",type:"email",placeholder:"Email",name:"email"}),e.jsx(h,{children:e.jsx(c,{name:"email",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]}),e.jsxs(x,{children:[e.jsx(m,{id:"password",type:w,placeholder:"Password",name:"password"}),e.jsx(B,{type:"button",right:"16px",onClick:S,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+`${f?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(h,{children:e.jsx(c,{name:"password",children:t=>e.jsxs(u,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:a+"#icon-checkbox-circle-fill"})}),t]})})})]})]}),e.jsx(T,{title:l,fontSize:"20px"})]})})}L.propTypes={nameIsShown:r.bool.isRequired,btnTitle:r.string.isRequired,onSubmit:r.func.isRequired};const Z=g.span`
  color: ${s.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,C=g(k)`
  color: ${s.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
`,M=g.div`
  display: inline-block;
  margin-top: 12px;

  ${i.tablet} {
    padding-left: 9px;
  }
`,N=({text:n,linkText:l,to:d})=>e.jsxs(M,{children:[e.jsx(Z,{children:n}),e.jsx(C,{to:d,children:l})]});N.propTypes={text:r.string.isRequired,linkText:r.string.isRequired,to:r.string.isRequired};export{L as A,N as B};
