import{n as r,m as i,c as s,P as o,r as w,j as e,s as d,L as B}from"./index-295e236b.js";import{F as E,a as R,c as T,b as m,d as F,E as h}from"./formik.esm-ce4bf4ef.js";import{B as I}from"./BtnSubmit-4ddeedb3.js";import{B as A}from"./ButtonIconForInput-e371ca36.js";import{s as j}from"./styled-components.browser.esm-b9f2e159.js";const W=r(E)`
  margin-top: 28px;

  ${i.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,L=r.div`
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
`,u=r.div`
  position: relative;
  width: 100%;
`,g=r(R)`
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

  &[data-touch=true]{
    border-color: ${s.textSuccess};
  }
`,b=r.div`
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
`,f=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${s.textError};
`,Z=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,C=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function M({nameIsShown:n,btnTitle:c,onSubmit:p}){const[y,$]=w.useState(!1),[v,q]=w.useState("password"),S=t=>t?m().required("Name is required"):null,k=T().shape({name:S(n),email:m().matches(Z,{message:"Email must be valid! For example: example@gmail.com"}).email("Invalid email").required("Email is required"),password:m().matches(C,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),P=n?{name:"",email:"",password:""}:{email:"",password:""},z=()=>{$(t=>!t),q(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsx(F,{initialValues:P,onSubmit:p,validationSchema:k,children:({handleBlur:t,touched:x,errors:l})=>e.jsxs(W,{children:["(",console.log(l),")",e.jsxs(L,{children:[n&&e.jsxs(u,{children:[e.jsx(g,{id:"name",type:"text",placeholder:"name",name:"name",onBlur:t,"data-touch":x.name&&!l.name}),e.jsx(b,{children:e.jsx(h,{name:"name",children:a=>e.jsxs(f,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),a]})})})]}),e.jsxs(u,{children:[e.jsx(g,{id:"email",type:"email",placeholder:"Email",name:"email",onBlur:t,"data-touch":x.email&&!l.email}),e.jsx(b,{children:e.jsx(h,{name:"email",children:a=>e.jsxs(f,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),a]})})})]}),e.jsxs(u,{children:[e.jsx(g,{id:"password",type:v,placeholder:"Password",name:"password",onBlur:t,"data-touch":x.password&&!l.password}),e.jsx(A,{type:"button",right:"16px",onClick:z,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+`${y?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(b,{children:e.jsx(h,{name:"password",children:a=>e.jsxs(f,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),a]})})})]})]}),e.jsx(I,{title:c,fontSize:"20px"})]})})}M.propTypes={nameIsShown:o.bool.isRequired,btnTitle:o.string.isRequired,onSubmit:o.func.isRequired};const N=j.span`
  color: ${s.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,V=j(B)`
  color: ${s.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
`,_=j.div`
  display: inline-block;
  margin-top: 12px;

  ${i.tablet} {
    padding-left: 9px;
  }
`,D=({text:n,linkText:c,to:p})=>e.jsxs(_,{children:[e.jsx(N,{children:n}),e.jsx(V,{to:p,children:c})]});D.propTypes={text:o.string.isRequired,linkText:o.string.isRequired,to:o.string.isRequired};export{M as A,D as B};
