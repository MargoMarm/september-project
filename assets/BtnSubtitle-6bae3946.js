import{r as g,R as l,n as r,m as c,c as i,P as a,j as t,s as p,L as P}from"./index-72201a7d.js";import{F as B,a as E,c as I,b as u,d as T,E as x}from"./formik.esm-298e8621.js";import{B as F}from"./ButtonIconForInput-824feeef.js";import{s as j}from"./styled-components.browser.esm-74fc1ed4.js";function w(e=l){return function(){return g.useContext(e)}}const A=w();function $(e=l){const o=e===l?A:w(e);return function(){const{store:d}=o();return d}}const W=$();function L(e=l){const o=e===l?W:$(e);return function(){return o().dispatch}}const X=L(),Z=r(B)`
  width: 335px;
  margin-top: 28px;
  ${c.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,D=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  ${c.tablet} {
    gap: 20px;
    margin-bottom: 64px;
  }
`,h=r.div`
  position: relative;
  width: 100%;
`,m=r(E)`
  height: 42px;
  width: 100%;
  ${c.tablet} {
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
`,f=r.div`
  position: absolute;
`,b=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${i.textError};
`,H=r.button`
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

  ${c.tablet} {
    padding: 16px 60px;
    font-size: ${e=>e};
    line-height: 120%;
    margin-top: ${({margin:e})=>(e==null?void 0:e.top.tab)||0};
    margin-bottom: : ${({margin:e})=>(e==null?void 0:e.bot.tab)||0} ;
  }
`;function y({title:e,margin:o,fontSize:n}){return t.jsx(H,{type:"submit",margin:o,fontSize:n,children:e})}y.propTypes={title:a.string.isRequired,margin:a.object,fontSize:a.string};const V=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,N=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function M({nameIsShown:e,btnTitle:o,onSubmit:n}){const[d,S]=g.useState(!1),[v,R]=g.useState("password"),k=s=>s?u().required("Name is required"):null,z=I().shape({name:k(e),email:u().matches(V,{message:"Email must be valid"}).email("Invalid email").required("Email is required"),password:u().matches(N,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),q=e?{name:"",email:"",password:""}:{email:"",password:""},C=()=>{S(s=>!s),R(s=>{if(s==="password")return"text";if(s==="text")return"password"})};return t.jsx(T,{initialValues:q,onSubmit:n,validationSchema:z,children:t.jsxs(Z,{children:[t.jsxs(D,{children:[e&&t.jsxs(h,{children:[t.jsx(m,{id:"name",type:"text",placeholder:"name",name:"name"}),t.jsx(f,{children:t.jsx(x,{name:"name",children:s=>t.jsxs(b,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]}),t.jsxs(h,{children:[t.jsx(m,{id:"email",type:"email",placeholder:"email",name:"email"}),t.jsx(f,{children:t.jsx(x,{name:"email",children:s=>t.jsxs(b,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]}),t.jsxs(h,{children:[t.jsx(m,{id:"password",type:v,placeholder:"password",name:"password"}),t.jsx(F,{type:"button",right:"16px",onClick:C,children:t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+`${d?"#icon-eye-off":"#icon-eye"}`})})}),t.jsx(f,{children:t.jsx(x,{name:"password",children:s=>t.jsxs(b,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]})]}),t.jsx(y,{title:o,fontSize:"20px"})]})})}M.propTypes={nameIsShown:a.bool.isRequired,btnTitle:a.string.isRequired,onSubmit:a.func.isRequired};const _=j.span`
  color: ${i.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,G=j(P)`
  color: ${i.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
`,J=j.div`
  display: inline-block;
  margin-top: 12px;

  ${c.tablet} {
    padding-left: 9px;
  }
`,Y=({text:e,linkText:o,to:n})=>t.jsxs(J,{children:[t.jsx(_,{children:e}),t.jsx(G,{to:n,children:o})]});export{M as A,Y as B,X as u};
