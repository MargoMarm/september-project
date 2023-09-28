import{n as r,m as n,c as s,E as V,a as L,V as F,r as C,u as T,j as e,s as j,W as H,P as a,X as M}from"./index-5fa3f891.js";import{T as P}from"./Title-74f24b08.js";import{D as $,a as z,m as G}from"./descriptionTextMargin-cd2fbd37.js";import{F as X,I as w,L as A,b as m,E as u,d as B,H as y,C as _,e as Y,f as S,g as J,h as K,B as N}from"./Calendar-988a3d8f.js";import{c as Q,b,e as k,f as Z,u as ee}from"./formik.esm-b9c5d73d.js";import{s as U}from"./index-abda7cf7.js";function te(i,o){const p=Object.keys(i);let h=!0;return p.forEach(c=>{i[c]!=o[c]&&(h=!1)}),h}const re=r.div`
  flex-shrink: 0;
  max-width: 439px;
  margin: 0 auto;
  ${n.desktop} {
    margin: 0;
  }
`,ie=r.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin: 0 auto 32px;
  border: 1px solid ${s.orange};
  border-radius: 50%;

  ${n.tablet} {
    width: 150px;
    height: 150px;
    margin-bottom: 34px;
  }
`,ae=r.svg`
  width: 62px;
  height: 62px;
  fill: ${s.grey};
  fill-opacity: 0.1;

  ${n.tablet} {
    width: 102px;
    height: 102px;
  }
`,se=r.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;

  ${n.tablet} {
    width: 150px;
    height: 150px;
  }
`,ne=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`,oe=r.label`
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
    fill: ${s.orange};
    stroke: ${s.white};
    transition: fill 0.3s;
  }

  &:hover svg,
  &:focus svg {
    fill: ${s.orangeSecondary};
  }

  ${n.tablet} {
    bottom: -16px;
    width: 32px;
    height: 32px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }
`,le=r.h3`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1;
  color: ${s.grey};
  text-align: center;

  ${n.tablet} {
    margin-bottom: 32px;
  }
`,de=r.div`
  display: flex;
  justify-content: center;
  gap: 0 14px;
  margin-bottom: 40px;

  ${n.tablet} {
    margin-bottom: 32px;
  }
`,D=r.div`
  width: 100%;
`,he=r.button`
  ${V};
  display: flex;
  gap: 0 8px;
  margin-top: 40px;
  margin-left: auto;
  transition: color 0.3s;

  & span {
    font-size: 14px;
    line-height: 1.3;
    color: ${s.grey};
    transition: color 0.3s;
  }

  & svg {
    width: 20px;
    height: 20px;
    stroke: ${s.orange};
    transition: stroke 0.3s;
  }

  &:hover span,
  &:hover svg,
  &:focus span,
  &:focus svg {
    color: ${s.textWhite08};
    stroke: ${s.orangeSecondary};
  }

  ${n.tablet} {
    margin-top: 32px;
  }
`;function R({setAvatar:i}){const{name:o,avatarURL:p,dailyСalories:h,dailyTime:c}=L(F),[d,x]=C.useState(p||null),g=T(),f=v=>{x(URL.createObjectURL(v.target.files[0])),i(v.target.files[0]),URL.revokeObjectURL(d)};return e.jsxs(re,{children:[e.jsxs(ie,{children:[d?e.jsx(se,{children:e.jsx(ne,{src:d})}):e.jsx(ae,{children:e.jsx("use",{href:`${j}#icon-gridicons_user`})}),e.jsxs(oe,{children:[e.jsx("input",{type:"file",onChange:f}),e.jsx("svg",{children:e.jsx("use",{href:`${j}#icon-check-mark`})})]})]}),e.jsx(le,{children:o||"user"}),e.jsxs(de,{children:[e.jsx(D,{children:e.jsx($,{icon:"fork-and-knife",keyValue:(h||"0")+"",label:"Daily calorie intake",fill:"true"})}),e.jsx(D,{children:e.jsx($,{icon:"dumbbell",keyValue:(c||0)+" min",label:"Daily norm of sports",fill:"true"})})]}),e.jsx(z,{margin:G,text:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.",width:{tablet:439,desktop:439}}),e.jsxs(he,{type:"button",onClick:()=>{H(g)},children:[e.jsx("span",{children:"Logout"}),e.jsx("svg",{children:e.jsx("use",{href:`${j}#logout_`})})]})]})}R.propTypes={setAvatar:a.func.isRequired};const ce=r.label`
  display: inline-flex;
  align-items: center;
  position: relative;

  &:not(:last-child) {
    margin-right: 9px;
  }

  &:hover p,
  &:focus p {
    color: ${s.orange};
    border-color: ${s.orange};
  }
`,pe=r.input`
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
`,xe=r.p`
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
`,ue=r.p`
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.3;
  color: grey;
  transition:
    color 0.3s,
    border-color 0.3s;
`;function l({styleWrapper:i,styleCheckbox:o,styleText:p,name:h,value:c,checked:d,onChange:x,children:g}){return e.jsxs(ce,{style:i||null,children:[e.jsx(pe,{type:"radio",name:h,value:c,checked:d||!1,onChange:x||null}),e.jsx(xe,{style:o||null}),e.jsx(ue,{style:p||null,children:g})]})}l.propTypes={styleWrapper:a.object,styleCheckbox:a.object,styleText:a.object,name:a.string.isRequired,value:a.string.isRequired,checked:a.oneOf([!0,!1]),onChange:a.func,children:a.string};const ge=Q({name:b().required(),height:k().min(150).max(250).required(),currentWeight:k().min(35).max(200).required(),desiredWeight:k().min(35).max(200).required(),birthday:Z().required(),blood:b().oneOf(["1","2","3","4"]).required(),sex:b().oneOf(["male","female"]).required(),levelActivity:b().oneOf(["1","2","3","4","5"]).required()}),q=U(new Date,{years:18}),me=U(new Date,{years:70});function O({submit:i,avatar:o}){const{name:p,email:h,bodyParameters:{height:c,currentWeight:d,desiredWeight:x,birthday:g,blood:f,sex:v,levelActivity:E}}=L(F),W={name:p||"",height:c||"",currentWeight:d||"",desiredWeight:x||"",birthday:g||q,blood:f||"",sex:v||"",levelActivity:E||""},t=ee({initialValues:W,enableReinitialize:!0,validationSchema:ge,onSubmit:i});let I=C.useMemo(()=>te(W,t.values)&&!o,[t.values,o]);return e.jsxs(X,{onSubmit:t.handleSubmit,autoComplete:"off",children:[e.jsxs(w,{children:[e.jsxs(A,{children:[e.jsx("p",{children:"Basic info"}),e.jsx(m,{type:"text",name:"name",value:t.values.name,onChange:t.handleChange,onBlur:t.handleBlur,"aria-invalid":t.errors.name,"data-touch":t.touched.name&&!t.errors.name}),t.errors.name&&e.jsx(u,{children:t.errors.name})]}),e.jsx(A,{children:e.jsx(m,{type:"text",name:"email",defaultValue:h,disabled:!0})})]}),e.jsxs(w,{children:[e.jsxs(B,{children:[e.jsxs(y,{children:[e.jsx("p",{children:"Height"}),e.jsx(m,{type:"text",name:"height",value:t.values.height,onChange:t.handleChange,onBlur:t.handleBlur,"aria-invalid":t.errors.height,"data-touch":t.touched.height&&!t.errors.height}),t.errors.height&&e.jsx(u,{children:t.errors.height})]}),e.jsxs(y,{children:[e.jsx("p",{children:"Current Weight"}),e.jsx(m,{type:"text",name:"currentWeight",value:t.values.currentWeight,onChange:t.handleChange,onBlur:t.handleBlur,"aria-invalid":t.errors.currentWeight,"data-touch":t.touched.currentWeight&&!t.errors.currentWeight}),t.errors.currentWeight&&e.jsx(u,{children:t.errors.currentWeight})]})]}),e.jsxs(B,{children:[e.jsxs(y,{children:[e.jsx("p",{children:"Desired Weight"}),e.jsx(m,{type:"text",name:"desiredWeight",value:t.values.desiredWeight,onChange:t.handleChange,onBlur:t.handleBlur,"aria-invalid":t.errors.desiredWeight,"data-touch":t.touched.desiredWeight&&!t.errors.desiredWeight}),t.errors.desiredWeight&&e.jsx(u,{children:t.errors.desiredWeight})]}),e.jsx(y,{children:e.jsx(_,{name:"birthday",value:t.values.birthday,maxDate:q,minDate:me,dateFormat:"dd.MM.yyyy",showYearDropdown:!0,onChange:t.setFieldValue})})]})]}),e.jsxs(Y,{children:[e.jsxs(S,{children:[e.jsx(J,{children:"Blood"}),e.jsx(l,{type:"radio",name:"blood",value:"1",checked:t.values.blood=="1",onChange:t.handleChange,children:"1"}),e.jsx(l,{type:"radio",name:"blood",value:"2",checked:t.values.blood=="2",onChange:t.handleChange,children:"2"}),e.jsx(l,{type:"radio",name:"blood",value:"3",checked:t.values.blood=="3",onChange:t.handleChange,children:"3"}),e.jsx(l,{type:"radio",name:"blood",value:"4",checked:t.values.blood=="4",onChange:t.handleChange,children:"4"}),t.errors.blood&&e.jsx(u,{children:t.errors.blood})]}),e.jsxs(S,{children:[e.jsx(l,{type:"radio",name:"sex",value:"male",checked:t.values.sex==="male",onChange:t.handleChange,children:"Male"}),e.jsx(l,{type:"radio",name:"sex",value:"female",checked:t.values.sex==="female",onChange:t.handleChange,children:"Female"}),t.errors.sex&&e.jsx(u,{children:t.errors.sex})]})]}),e.jsxs(K,{children:[e.jsx(l,{type:"radio",name:"levelActivity",value:"1",checked:t.values.levelActivity=="1",onChange:t.handleChange,styleWrapper:{marginBottom:"9px",display:"flex"},children:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(l,{type:"radio",name:"levelActivity",value:"2",checked:t.values.levelActivity=="2",onChange:t.handleChange,styleWrapper:{marginBottom:"9px",display:"flex"},children:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(l,{type:"radio",name:"levelActivity",value:"3",checked:t.values.levelActivity=="3",onChange:t.handleChange,styleWrapper:{marginBottom:"9px",display:"flex"},children:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(l,{type:"radio",name:"levelActivity",value:"4",checked:t.values.levelActivity=="4",onChange:t.handleChange,styleWrapper:{marginBottom:"9px",display:"flex"},children:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(l,{type:"radio",name:"levelActivity",value:"5",checked:t.values.levelActivity=="5",onChange:t.handleChange,styleWrapper:{display:"flex"},children:"Extremely active (very strenuous exercises/sports and physical work)"}),t.errors.levelActivity&&e.jsx(u,{children:t.errors.levelActivity})]}),e.jsx(N,{type:"submit",disabled:I,children:"Save"})]})}O.propTypes={submit:a.func.isRequired,avatar:a.oneOfType([a.object,a.instanceOf(null)])};const ve=r.div`
  padding: 40px 20px 78px 20px;
  ${n.tablet} {
    padding: 72px 32px 54px 32px;
  }
  ${n.desktop} {
    padding: 72px 96px 44px 96px;
  }
`,ye=r.div`
  margin-top: 40px;

  ${n.tablet} {
    margin-top: 64px;
  }

  ${n.desktop} {
    display: flex;
    flex-direction: row-reverse;
    gap: 0 49px;
    margin-top: 32px;
    justify-content: space-between;
  }
`,be=r.div`
  ${n.desktop} {
    padding-right: 64px;
    border-right: 1px solid ${s.textWhite02};
  }
`;function we(){const[i,o]=C.useState(null),p=T(),h=c=>{const d=new FormData;Object.entries(c).forEach(x=>{d.append(x[0],x[1])}),i&&d.append("avatar",i,i.name),p(M(d)),o(null)};return e.jsxs(ve,{children:[e.jsx(P,{text:"Profile Settings"}),e.jsxs(ye,{children:[e.jsx(R,{setAvatar:o}),e.jsx(be,{children:e.jsx(O,{submit:h,avatar:i})})]})]})}export{we as default};
