import{n as r,m as s,c as i,P as o,r as w,j as e,s as l,L as B}from"./index-5385bbe7.js";import{F as E,a as R,c as T,b as m,d as F,E as h}from"./formik.esm-3c0fbfb9.js";import{B as I}from"./BtnSubmit-3c1b0633.js";import{B as A}from"./ButtonIconForInput-4e250921.js";import{s as j}from"./styled-components.browser.esm-57a73a3d.js";const W=r(E)`
  margin-top: 28px;

  ${s.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,L=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 32px;

  ${s.mobile} {
    gap: 33px;
    margin-bottom: 34px;
  }

  ${s.tablet} {
    gap: 34px;
    margin-bottom: 54px;
  }
`,u=r.div`
  position: relative;
  width: 100%;
`,g=r(R)`
  height: 42px;
  width: 100%;
  ${s.tablet} {
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

  &[data-touch=true]{
    border-color: ${i.textSuccess};
  }
`,b=r.div`
  position: absolute;
  ${s.smallMobile} {
    bottom: -28px;
  }

  ${s.Mobile} {
    bottom: -29px;
  }

  ${s.tablet} {
    bottom: -30px;
  }
`,f=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${i.textError};
`,Z=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,C=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function M({nameIsShown:n,btnTitle:d,onSubmit:c}){const[$,y]=w.useState(!1),[v,q]=w.useState("password"),S=t=>t?m().required("Name is required"):null,k=T().shape({name:S(n),email:m().matches(Z,{message:"Email must be valid! For example: example@gmail.com"}).email("Invalid email").required("Email is required"),password:m().matches(C,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),z=n?{name:"",email:"",password:""}:{email:"",password:""},P=()=>{y(t=>!t),q(t=>{if(t==="password")return"text";if(t==="text")return"password"})};return e.jsx(F,{initialValues:z,onSubmit:c,validationSchema:k,children:({handleBlur:t,touched:p,errors:x})=>e.jsxs(W,{children:[e.jsxs(L,{children:[n&&e.jsxs(u,{children:[e.jsx(g,{id:"name",type:"text",placeholder:"name",name:"name",onBlur:t,"data-touch":p.name&&!x.name}),e.jsx(b,{children:e.jsx(h,{name:"name",children:a=>e.jsxs(f,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:l+"#icon-checkbox-circle-fill"})}),a]})})})]}),e.jsxs(u,{children:[e.jsx(g,{id:"email",type:"email",placeholder:"Email",name:"email",onBlur:t,"data-touch":p.email&&!x.email}),e.jsx(b,{children:e.jsx(h,{name:"email",children:a=>e.jsxs(f,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:l+"#icon-checkbox-circle-fill"})}),a]})})})]}),e.jsxs(u,{children:[e.jsx(g,{id:"password",type:v,placeholder:"Password",name:"password",onBlur:t,"data-touch":p.password&&!x.password}),e.jsx(A,{type:"button",right:"16px",onClick:P,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:l+`${$?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(b,{children:e.jsx(h,{name:"password",children:a=>e.jsxs(f,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:l+"#icon-checkbox-circle-fill"})}),a]})})})]})]}),e.jsx(I,{title:d,fontSize:"20px"})]})})}M.propTypes={nameIsShown:o.bool.isRequired,btnTitle:o.string.isRequired,onSubmit:o.func.isRequired};const N=j.span`
  color: ${i.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,V=j(B)`
  color: ${i.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    color: ${i.orange};
  }
`,_=j.div`
  display: inline-block;
  margin-top: 12px;

  ${s.tablet} {
    padding-left: 9px;
  }
`,D=({text:n,linkText:d,to:c})=>e.jsxs(_,{children:[e.jsx(N,{children:n}),e.jsx(V,{to:c,children:d})]});D.propTypes={text:o.string.isRequired,linkText:o.string.isRequired,to:o.string.isRequired};export{M as A,D as B};
