import{n,m as l,c as o,P as s,j as e,r as f,s as d,L as k}from"./index-32125c21.js";import{F as R,a as T,c as P,b as p,d as B,E as c}from"./formik.esm-63a836dd.js";import{B as E}from"./ButtonIconForInput-838dc499.js";import{s as b}from"./styled-components.browser.esm-4c37130d.js";const I=n(R)`
  width: 335px;
  margin-top: 28px;
  ${l.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,F=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  ${l.tablet} {
    gap: 20px;
    margin-bottom: 64px;
  }
`,x=n.div`
  position: relative;
  width: 100%;
`,h=n(T)`
  height: 42px;
  width: 100%;
  ${l.tablet} {
    height: 48px;
  }
  padding-left: 14px;
  padding-right: 14px;

  border-radius: 12px;
  border: 1px solid ${o.textWhite03};

  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;

  color: ${o.textWhite06};
  background-color: transparent;
  &:focus-visible {
    border: 1px solid ${o.orange};
  }
`,u=n.div`
  position: absolute;
`,m=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${o.textError};
`,A=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  outline: none;
  background-color: ${o.orange};
  border-radius: 12px;
  border: none;
  margin-top: ${({margin:t})=>(t==null?void 0:t.top.mob)||0};
  margin-bottom: : ${({margin:t})=>(t==null?void 0:t.bot.mob)||0};

  color: ${o.white};
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
`;function g({title:t,margin:r,fontSize:a}){return e.jsx(A,{type:"submit",margin:r,fontSize:a,children:t})}g.propTypes={title:s.string.isRequired,margin:s.object,fontSize:s.string};const W=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,L=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function Z({nameIsShown:t,btnTitle:r,onSubmit:a}){const[j,w]=f.useState(!1),[y,$]=f.useState("password"),q=i=>i?p().required("Name is required"):null,v=P().shape({name:q(t),email:p().matches(W,{message:"Email must be valid"}).email("Invalid email").required("Email is required"),password:p().matches(L,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),S=t?{name:"",email:"",password:""}:{email:"",password:""},z=()=>{w(i=>!i),$(i=>{if(i==="password")return"text";if(i==="text")return"password"})};return e.jsx(B,{initialValues:S,onSubmit:a,validationSchema:v,children:e.jsxs(I,{children:[e.jsxs(F,{children:[t&&e.jsxs(x,{children:[e.jsx(h,{id:"name",type:"text",placeholder:"name",name:"name"}),e.jsx(u,{children:e.jsx(c,{name:"name",children:i=>e.jsxs(m,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),i]})})})]}),e.jsxs(x,{children:[e.jsx(h,{id:"email",type:"email",placeholder:"email",name:"email"}),e.jsx(u,{children:e.jsx(c,{name:"email",children:i=>e.jsxs(m,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),i]})})})]}),e.jsxs(x,{children:[e.jsx(h,{id:"password",type:y,placeholder:"password",name:"password"}),e.jsx(E,{type:"button",right:"16px",onClick:z,children:e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+`${j?"#icon-eye-off":"#icon-eye"}`})})}),e.jsx(u,{children:e.jsx(c,{name:"password",children:i=>e.jsxs(m,{children:[e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{href:d+"#icon-checkbox-circle-fill"})}),i]})})})]})]}),e.jsx(g,{title:r,fontSize:"20px"})]})})}Z.propTypes={nameIsShown:s.bool.isRequired,btnTitle:s.string.isRequired,onSubmit:s.func.isRequired};const C=b.span`
  color: ${o.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,N=b(k)`
  color: ${o.white};
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
`,V=({text:t,linkText:r,to:a})=>e.jsxs(M,{children:[e.jsx(C,{children:t}),e.jsx(N,{to:a,children:r})]});V.propTypes={text:s.string.isRequired,linkText:s.string.isRequired,to:s.string.isRequired};export{Z as A,V as B};
