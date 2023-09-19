import{r as g,R as c,n as r,m as l,c as o,P as a,j as t,s as p,L as C}from"./index-e661b445.js";import{F as E,a as T,c as A,b as x,d as B,E as u}from"./formik.esm-5cf56211.js";import{s as j}from"./styled-components.browser.esm-4711b9c9.js";function w(e=c){return function(){return g.useContext(e)}}const F=w();function $(e=c){const n=e===c?F:w(e);return function(){const{store:d}=n();return d}}const I=$();function W(e=c){const n=e===c?I:$(e);return function(){return n().dispatch}}const Q=W(),L=r(E)`
  width: 335px;
  margin-top: 28px;
  ${l.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`,H=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 28px;
  ${l.tablet} {
    gap: 20px;
    margin-bottom: 64px;
  }
`,h=r.div`
  position: relative;
  width: 100%;
`,m=r(T)`
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
`,b=r.div`
  position: absolute;
`,f=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${o.textError};
`,Z=r.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${l.tablet} {
    right: 14px;
  }
  background-color: transparent;
  stroke: ${o.white};
`,D=r.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  outline: none;
  background-color: ${o.orange};
  border-radius: 12px;
  border: none;
  margin-top: ${({margin:e})=>(e==null?void 0:e.top.mob)||0};
  margin-bottom: : ${({margin:e})=>(e==null?void 0:e.bot.mob)||0};

  color: ${o.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;

  ${l.tablet} {
    padding: 16px 60px;
    font-size: ${e=>e};
    line-height: 120%;
    margin-top: ${({margin:e})=>(e==null?void 0:e.top.tab)||0};
    margin-bottom: : ${({margin:e})=>(e==null?void 0:e.bot.tab)||0} ;
  }
`;function y({title:e,margin:n,fontSize:i}){return t.jsx(D,{type:"submit",margin:n,fontSize:i,children:e})}y.propTypes={title:a.string.isRequired,margin:a.object,fontSize:a.string};const V=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,N=/^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;function M({nameIsShown:e,btnTitle:n,onSubmit:i}){const[d,S]=g.useState(!1),[k,v]=g.useState("password"),R=s=>s?x().required("Name is required"):null,z=A().shape({name:R(e),email:x().matches(V,{message:"Email must be valid"}).email("Invalid email").required("Email is required"),password:x().matches(N,{message:"Password must contain 6+ letters, 1 number, and 1+ letter or number"}).required("Password is required")}),q=e?{name:"",email:"",password:""}:{email:"",password:""},P=()=>{S(s=>!s),v(s=>{if(s==="password")return"text";if(s==="text")return"password"})};return t.jsx(B,{initialValues:q,onSubmit:i,validationSchema:z,children:t.jsxs(L,{children:[t.jsxs(H,{children:[e&&t.jsxs(h,{children:[t.jsx(m,{id:"name",type:"text",placeholder:"name",name:"name"}),t.jsx(b,{children:t.jsx(u,{name:"name",children:s=>t.jsxs(f,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]}),t.jsxs(h,{children:[t.jsx(m,{id:"email",type:"email",placeholder:"email",name:"email"}),t.jsx(b,{children:t.jsx(u,{name:"email",children:s=>t.jsxs(f,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]}),t.jsxs(h,{children:[t.jsx(m,{id:"password",type:k,placeholder:"password",name:"password"}),t.jsx(Z,{onClick:P,type:"button",children:t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+`${d?"#icon-eye-off":"#icon-eye"}`})})}),t.jsx(b,{children:t.jsx(u,{name:"password",children:s=>t.jsxs(f,{children:[t.jsx("svg",{width:"20",height:"20",children:t.jsx("use",{href:p+"#icon-checkbox-circle-fill"})}),s]})})})]})]}),t.jsx(y,{title:n,fontSize:"20px"})]})})}M.propTypes={nameIsShown:a.bool.isRequired,btnTitle:a.string.isRequired,onSubmit:a.func.isRequired};const Y=j.span`
  color: ${o.textWhite06};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
`,_=j(C)`
  color: ${o.white};
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
`,G=j.div`
  display: inline-block;
  margin-top: 12px;

  ${l.tablet} {
    padding-left: 9px;
  }
`,U=({text:e,linkText:n,to:i})=>t.jsxs(G,{children:[t.jsx(Y,{children:e}),t.jsx(_,{to:i,children:n})]});export{M as A,U as B,Q as u};
