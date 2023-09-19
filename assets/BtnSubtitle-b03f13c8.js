import{n as o,m as l,c as s,P as n,j as e,r as f,s as d,L as k}from"./index-8f374fc6.js";import{F as P,a as B,c as E,b as p,d as I,E as c}from"./formik.esm-b7b28ca9.js";import{B as T}from"./ButtonIconForInput-0fa18b04.js";import{s as b}from"./styled-components.browser.esm-c2c28fb1.js";const F=o(P)`
  width: 335px;
  margin-top: 28px;
  ${l.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,R=o.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  ${l.tablet} {
    gap: 20px;
    margin-bottom: 64px;
  }
`,x=o.div`
  position: relative;
  width: 100%;
`,h=o(B)`
  height: 42px;
  width: 100%;
  ${l.tablet} {
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
`,u=o.div`
  position: absolute;
`,m=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${s.textError};
`,A=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  outline: none;
  background-color: ${s.orange};
  border-radius: 12px;
  border: none;
  margin-top: ${({margin:t})=>(t==null?void 0:t.top.mob)||0};
  margin-bottom: : ${({margin:t})=>(t==null?void 0:t.bot.mob)||0};

  color: ${s.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;

  ${l.tablet} {
    padding: 16px 60px;
    font-size: ${t=>t};
    line-height: 120%;
    margin-top: ${({margin:t})=>(t==null?void 0:t.top.tab)||0};
    margin-bottom: : ${({margin:t})=>(t==null?void 0:t.bot.tab)||0} ;
  }
`;function g({title:t,margin:r,fontSize:a}){return e.jsx(A,{type:"submit",margin:r,fontSize:a,children:t})}g.propTypes={title:n.string.isRequired,margin:n.object,fontSize:n.string};const W=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,L=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function Z({nameIsShown:t,btnTitle:r,onSubmit:a}){const[j,w]=f.useState(!1),[y,$]=f.useState("password"),v=i=>i?p().required("Name is required"):null,S=E().shape({name:v(t),email:p().matches(W,{message:"Email must be valid"}).email("Invalid email").required("Email is required"),password:p().matches(L,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),z=t?{name:"",email:"",password:""}:{email:"",password:""},q=()=>{w(i=>!i),$(i=>{if(i==="password")return"text";if(i==="text")return"password"})};return e.jsx(I,{initialValues:z,onSubmit:a,validationSchema:S,children:e.jsxs(F,{children:[e.jsxs(R,{children:[t&&e.jsxs(x,{children:[e.jsx(h,{id:"name",type:"text",placeholder:"name",name:"name"}),e.jsx(u,{children:e.jsx(c,{name:"name",children:i=>e.jsxs(m,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),i]})})})]}),e.jsxs(x,{children:[e.jsx(h,{id:"email",type:"email",placeholder:"email",name:"email"}),e.jsx(u,{children:e.jsx(c,{name:"email",children:i=>e.jsxs(m,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),i]})})})]}),e.jsxs(x,{children:[e.jsx(h,{id:"password",type:y,placeholder:"password",name:"password"}),e.jsx(T,{type:"button",right:"16px",onClick:q,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+`${j?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(u,{children:e.jsx(c,{name:"password",children:i=>e.jsxs(m,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),i]})})})]})]}),e.jsx(g,{title:r,fontSize:"20px"})]})})}Z.propTypes={nameIsShown:n.bool.isRequired,btnTitle:n.string.isRequired,onSubmit:n.func.isRequired};const C=b.span`
  color: ${s.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,N=b(k)`
  color: ${s.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
`,M=b.div`
  display: inline-block;
  margin-top: 12px;

  ${l.tablet} {
    padding-left: 9px;
  }
`,H=({text:t,linkText:r,to:a})=>e.jsxs(M,{children:[e.jsx(C,{children:t}),e.jsx(N,{to:a,children:r})]});export{Z as A,H as B};
