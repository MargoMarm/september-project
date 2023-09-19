import{r as g,R as c,n as a,m as d,c as i,P as r,j as t,s as p,L as T}from"./index-1e86908d.js";import{F as B,a as E,c as I,b as u,d as F,E as x}from"./formik.esm-bf19d4d1.js";import{s as j}from"./styled-components.browser.esm-0019f66b.js";function w(e=c){return function(){return g.useContext(e)}}const A=w();function $(e=c){const n=e===c?A:w(e);return function(){const{store:l}=n();return l}}const W=$();function L(e=c){const n=e===c?W:$(e);return function(){return n().dispatch}}const U=L(),Z=a(B)`
  width: 335px;
  margin-top: 28px;
  ${d.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,D=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  ${d.tablet} {
    gap: 20px;
    margin-bottom: 64px;
  }
`,h=a.div`
  position: relative;
  width: 100%;
`,m=a(E)`
  height: 42px;
  width: 100%;
  ${d.tablet} {
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
`,f=a.div`
  position: absolute;
`,b=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${i.textError};
`,H=a.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  outline: none;
  background-color: ${i.orange};
  border-radius: 12px;
  border: none;
  margin-top: ${({margin:e})=>(e==null?void 0:e.top.mob)||0};
  margin-bottom: : ${({margin:e})=>(e==null?void 0:e.bot.mob)||0};

  color: ${i.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;

  ${d.tablet} {
    padding: 16px 60px;
    font-size: ${e=>e};
    line-height: 120%;
    margin-top: ${({margin:e})=>(e==null?void 0:e.top.tab)||0};
    margin-bottom: : ${({margin:e})=>(e==null?void 0:e.bot.tab)||0} ;
  }
`;function y({title:e,margin:n,fontSize:o}){return t.jsx(H,{type:"submit",margin:n,fontSize:o,children:e})}y.propTypes={title:r.string.isRequired,margin:r.object,fontSize:r.string};const V=a.button`
  position: absolute;
  top: 50%;
  right: ${({right:e})=>e||"0"};
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  &:hover {
    fill: ${i.orange};
    stroke: ${i.orange};
  }
`;function S({children:e,onClick:n,right:o,type:l}){return t.jsx(V,{onClick:n,right:o,type:l,children:e})}S.propTypes={onClick:r.func.isRequired,right:r.string,type:r.string.isRequired};const N=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,M=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function Y({nameIsShown:e,btnTitle:n,onSubmit:o}){const[l,k]=g.useState(!1),[R,v]=g.useState("password"),q=s=>s?u().required("Name is required"):null,z=I().shape({name:q(e),email:u().matches(N,{message:"Email must be valid"}).email("Invalid email").required("Email is required"),password:u().matches(M,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),C=e?{name:"",email:"",password:""}:{email:"",password:""},P=()=>{k(s=>!s),v(s=>{if(s==="password")return"text";if(s==="text")return"password"})};return t.jsx(F,{initialValues:C,onSubmit:o,validationSchema:z,children:t.jsxs(Z,{children:[t.jsxs(D,{children:[e&&t.jsxs(h,{children:[t.jsx(m,{id:"name",type:"text",placeholder:"name",name:"name"}),t.jsx(f,{children:t.jsx(x,{name:"name",children:s=>t.jsxs(b,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]}),t.jsxs(h,{children:[t.jsx(m,{id:"email",type:"email",placeholder:"email",name:"email"}),t.jsx(f,{children:t.jsx(x,{name:"email",children:s=>t.jsxs(b,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]}),t.jsxs(h,{children:[t.jsx(m,{id:"password",type:R,placeholder:"password",name:"password"}),t.jsx(S,{type:"button",right:"16px",onClick:P,children:t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+`${l?"#icon-eye-off":"#icon-eye"}`})})}),t.jsx(f,{children:t.jsx(x,{name:"password",children:s=>t.jsxs(b,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]})]}),t.jsx(y,{title:n,fontSize:"20px"})]})})}Y.propTypes={nameIsShown:r.bool.isRequired,btnTitle:r.string.isRequired,onSubmit:r.func.isRequired};const _=j.span`
  color: ${i.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,G=j(T)`
  color: ${i.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
`,J=j.div`
  display: inline-block;
  margin-top: 12px;

  ${d.tablet} {
    padding-left: 9px;
  }
`,X=({text:e,linkText:n,to:o})=>t.jsxs(J,{children:[t.jsx(_,{children:e}),t.jsx(G,{to:o,children:n})]});export{Y as A,X as B,U as u};
