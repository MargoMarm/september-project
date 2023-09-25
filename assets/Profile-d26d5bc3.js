import{n as i,m as a,c as r,z as I,d as q,K as L,r as F,u as U,j as e,s as f,M as O,P as o,O as V}from"./index-22f915ea.js";import{T as E}from"./Title-f4a866f2.js";import{D as C,a as z,m as H}from"./descriptionTextMargin-c79cd6d7.js";import{F as M,I as $,L as w,b as m,E as g,d as W,H as y,C as P,e as G,f as A,g as _,h as K,B as X}from"./Calendar-b79464e0.js";import{c as Y,b,e as k,f as J,u as N}from"./formik.esm-c161cd90.js";import{s as R}from"./index-9f28316a.js";const Q=i.div`
  flex-shrink: 0;
  max-width: 439px;
  margin: 0 auto;
  ${a.desktop} {
    margin: 0;
  }
`,Z=i.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin: 0 auto 32px;
  border: 1px solid ${r.orange};
  border-radius: 50%;

  ${a.tablet} {
    width: 150px;
    height: 150px;
    margin-bottom: 34px;
  }
`,ee=i.svg`
  width: 62px;
  height: 62px;
  fill: ${r.grey};
  fill-opacity: 0.1;

  ${a.tablet} {
    width: 102px;
    height: 102px;
  }
`,te=i.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;

  ${a.tablet} {
    width: 150px;
    height: 150px;
  }
`,ie=i.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`,re=i.label`
  position: absolute;
  bottom: -12px;
  left: 50%;
  display: block;
  width: 24px;
  height: 24px;
  transform: translateX(-50%);

  & input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: ${r.orange};
    stroke: ${r.white};
    transition: fill 0.3s;
  }

  &:hover svg,
  &:focus svg {
    fill: ${r.orangeSecondary};
  }

  ${a.tablet} {
    bottom: -16px;
    width: 32px;
    height: 32px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }
`,ae=i.h3`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1;
  color: ${r.grey};
  text-align: center;

  ${a.tablet} {
    margin-bottom: 32px;
  }
`,se=i.div`
  display: flex;
  justify-content: center;
  gap: 0 14px;
  margin-bottom: 40px;

  ${a.tablet} {
    margin-bottom: 32px;
  }
`,S=i.div`
  width: 100%;
`,ne=i.button`
  ${I};
  display: flex;
  gap: 0 8px;
  margin-top: 40px;
  margin-left: auto;
  transition: color 0.3s;

  & span {
    font-size: 14px;
    line-height: 1.3;
    color: ${r.grey};
    transition: color 0.3s;
  }

  & svg {
    width: 20px;
    height: 20px;
    stroke: ${r.orange};
    transition: stroke 0.3s;
  }

  &:hover span,
  &:hover svg,
  &:focus span,
  &:focus svg {
    color: ${r.textWhite08};
    stroke: ${r.orangeSecondary};
  }

  ${a.tablet} {
    margin-top: 32px;
  }
`;function B({setAvatar:l}){const{name:d,avatarURL:c,dailyСalories:p,dailyTime:x}=q(L),[n,h]=F.useState(c||null),u=U(),j=v=>{h(URL.createObjectURL(v.target.files[0])),l(v.target.files[0]),URL.revokeObjectURL(n)};return e.jsxs(Q,{children:[e.jsxs(Z,{children:[n?e.jsx(te,{children:e.jsx(ie,{src:n})}):e.jsx(ee,{children:e.jsx("use",{href:`${f}#icon-gridicons_user`})}),e.jsxs(re,{children:[e.jsx("input",{type:"file",onChange:j}),e.jsx("svg",{children:e.jsx("use",{href:`${f}#icon-check-mark`})})]})]}),e.jsx(ae,{children:d||"user"}),e.jsxs(se,{children:[e.jsx(S,{children:e.jsx(C,{icon:"fork-and-knife",keyValue:(p||"0")+"",label:"Daily calorie intake",fill:"true"})}),e.jsx(S,{children:e.jsx(C,{icon:"dumbbell",keyValue:(x||0)+" min",label:"Daily norm of sports",fill:"true"})})]}),e.jsx(z,{margin:H,text:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.",width:{tablet:439,desktop:439}}),e.jsxs(ne,{type:"button",onClick:()=>{O(u)},children:[e.jsx("span",{children:"Logout"}),e.jsx("svg",{children:e.jsx("use",{href:`${f}#logout_`})})]})]})}B.propTypes={setAvatar:o.func.isRequired};const oe=i.label`
  display: inline-flex;
  align-items: center;
  position: relative;

  &:not(:last-child) {
    margin-right: 9px;
  }

  &:hover p,
  &:focus p {
    color: ${r.orange};
    border-color: ${r.orange};
  }
`,le=i.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;

  &:checked + p {
    border-color: #ef8964;

    &:before {
      background-color: #ef8964;
    }
  }
`,de=i.p`
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 14px;
  height: 14px;
  background-color: #000;
  border: 1px solid #636366;
  border-radius: 50%;
  transition:
    color 0.3s,
    border-color 0.3s;

  &:before {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    background-color: #000;
    border-radius: 50%;
  }
`,he=i.p`
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.3;
  color: grey;
  transition:
    color 0.3s,
    border-color 0.3s;
`;function s({styleWrapper:l,styleCheckbox:d,styleText:c,name:p,value:x,checked:n,onChange:h,children:u}){return e.jsxs(oe,{style:l||null,children:[e.jsx(le,{type:"radio",name:p,value:x,checked:n||!1,onChange:h||null}),e.jsx(de,{style:d||null}),e.jsx(he,{style:c||null,children:u})]})}s.propTypes={styleWrapper:o.object,styleCheckbox:o.object,styleText:o.object,name:o.string.isRequired,value:o.string.isRequired,checked:o.oneOf([!0,!1]),onChange:o.func,children:o.string};const ce=Y({name:b().required(),height:k().min(150).required(),currentWeight:k().min(35).required(),desiredWeight:k().min(35).required(),birthday:J().required(),blood:b().oneOf(["1","2","3","4"]).required(),sex:b().oneOf(["male","female"]).required(),levelActivity:b().oneOf(["1","2","3","4","5"]).required()}),D=R(new Date,{years:18}),pe=R(new Date,{years:70});function T({submit:l}){const{name:d,email:c,bodyParameters:{height:p,currentWeight:x,desiredWeight:n,birthday:h,blood:u,sex:j,levelActivity:v}}=q(L),t=N({initialValues:{name:d||"",height:p||"",currentWeight:x||"",desiredWeight:n||"",birthday:h||D,blood:u||"",sex:j||"",levelActivity:v||""},enableReinitialize:!0,validationSchema:ce,onSubmit:l});return e.jsxs(M,{onSubmit:t.handleSubmit,autoComplete:"off",children:[e.jsxs($,{children:[e.jsxs(w,{children:[e.jsx("p",{children:"Basic info"}),e.jsx(m,{type:"text",name:"name",value:t.values.name,onChange:t.handleChange,"aria-invalid":t.errors.name}),t.errors.name&&e.jsx(g,{children:t.errors.name})]}),e.jsx(w,{children:e.jsx(m,{type:"text",name:"email",defaultValue:c,disabled:!0})})]}),e.jsxs($,{children:[e.jsxs(W,{children:[e.jsxs(y,{children:[e.jsx("p",{children:"Height"}),e.jsx(m,{type:"text",name:"height",value:t.values.height,onChange:t.handleChange,"aria-invalid":t.errors.height}),t.errors.height&&e.jsx(g,{children:t.errors.height})]}),e.jsxs(y,{children:[e.jsx("p",{children:"Current Weight"}),e.jsx(m,{type:"text",name:"currentWeight",value:t.values.currentWeight,onChange:t.handleChange,"aria-invalid":t.errors.currentWeight}),t.errors.currentWeight&&e.jsx(g,{children:t.errors.currentWeight})]})]}),e.jsxs(W,{children:[e.jsxs(y,{children:[e.jsx("p",{children:"Desired Weight"}),e.jsx(m,{type:"text",name:"desiredWeight",value:t.values.desiredWeight,onChange:t.handleChange,"aria-invalid":t.errors.desiredWeight}),t.errors.desiredWeight&&e.jsx(g,{children:t.errors.desiredWeight})]}),e.jsx(y,{children:e.jsx(P,{name:"birthday",value:t.values.birthday,maxDate:D,minDate:pe,dateFormat:"dd.MM.yyyy",showYearDropdown:!0,onChange:t.setFieldValue})})]})]}),e.jsxs(G,{children:[e.jsxs(A,{children:[e.jsx(_,{children:"Blood"}),e.jsx(s,{type:"radio",name:"blood",value:"1",checked:t.values.blood=="1",onChange:t.handleChange,children:"1"}),e.jsx(s,{type:"radio",name:"blood",value:"2",checked:t.values.blood=="2",onChange:t.handleChange,children:"2"}),e.jsx(s,{type:"radio",name:"blood",value:"3",checked:t.values.blood=="3",onChange:t.handleChange,children:"3"}),e.jsx(s,{type:"radio",name:"blood",value:"4",checked:t.values.blood=="4",onChange:t.handleChange,children:"4"}),t.errors.blood&&e.jsx(g,{children:t.errors.blood})]}),e.jsxs(A,{children:[e.jsx(s,{type:"radio",name:"sex",value:"male",checked:t.values.sex==="male",onChange:t.handleChange,children:"Male"}),e.jsx(s,{type:"radio",name:"sex",value:"female",checked:t.values.sex==="female",onChange:t.handleChange,children:"Female"}),t.errors.sex&&e.jsx(g,{children:t.errors.sex})]})]}),e.jsxs(K,{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"1",checked:t.values.levelActivity=="1",onChange:t.handleChange,styleWrapper:{marginBottom:"9px",display:"flex"},children:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(s,{type:"radio",name:"levelActivity",value:"2",checked:t.values.levelActivity=="2",onChange:t.handleChange,styleWrapper:{marginBottom:"9px",display:"flex"},children:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(s,{type:"radio",name:"levelActivity",value:"3",checked:t.values.levelActivity=="3",onChange:t.handleChange,styleWrapper:{marginBottom:"9px",display:"flex"},children:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(s,{type:"radio",name:"levelActivity",value:"4",checked:t.values.levelActivity=="4",onChange:t.handleChange,styleWrapper:{marginBottom:"9px",display:"flex"},children:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(s,{type:"radio",name:"levelActivity",value:"5",checked:t.values.levelActivity=="5",onChange:t.handleChange,styleWrapper:{display:"flex"},children:"Extremely active (very strenuous exercises/sports and physical work)"}),t.errors.levelActivity&&e.jsx(g,{children:t.errors.levelActivity})]}),e.jsx(X,{type:"submit",children:"Save"})]})}T.propTypes={submit:o.func.isRequired};const xe=i.div`
  padding: 40px 20px 78px 20px;
  ${a.tablet} {
    padding: 72px 32px 54px 32px;
  }
  ${a.desktop} {
    padding: 72px 96px 44px 96px;
  }
`,ge=i.div`
  margin-top: 40px;

  ${a.tablet} {
    margin-top: 64px;
  }

  ${a.desktop} {
    display: flex;
    flex-direction: row-reverse;
    gap: 0 49px;
    margin-top: 32px;
    justify-content: space-between;
  }
`,ue=i.div`
  ${a.desktop} {
    padding-right: 64px;
    border-right: 1px solid ${r.textWhite02};
  }
`;function Ce(){const[l,d]=F.useState(),c=U(),p=x=>{const n=new FormData;Object.entries(x).forEach(h=>{n.append(h[0],h[1])}),l&&n.append("avatar",l,l.name),c(V(n))};return e.jsxs(xe,{children:[e.jsx(E,{text:"Profile Settings"}),e.jsxs(ge,{children:[e.jsx(B,{setAvatar:d}),e.jsx(ue,{children:e.jsx(T,{submit:p})})]})]})}export{Ce as default};
