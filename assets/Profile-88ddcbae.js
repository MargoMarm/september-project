import{n as t,m as r,j as e}from"./index-4535f9f1.js";import{T as f}from"./Title-36eaf101.js";import{D as c}from"./DailyStatsCards-6f83f7a7.js";import{c as i,P as h}from"./index-56ab578e.js";import{b as u}from"./customBtn-d4ff7805.js";import{s as d}from"./sprite-57a4f95b.js";const j=t.div`
  flex-shrink: 0;
  max-width: 439px;
  margin: 0 auto;
  ${r.desktop} {
    margin: 0;
  }
`,v=t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  margin: 0 auto 32px;
  border: 1px solid ${i.orange};
  border-radius: 50%;

  ${r.tablet} {
    width: 150px;
    height: 150px;
    margin-bottom: 34px;
  }
`,k=t.svg`
  width: 62px;
  height: 62px;
  fill: ${i.grey};
  fill-opacity: 0.1;

  ${r.tablet} {
    width: 102px;
    height: 102px;
  }
`;t.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;

  ${r.tablet} {
    width: 150px;
    height: 150px;
  }
`;t.img`
  width: 100%;
`;const $=t.label`
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
    fill: ${i.orange};
    stroke: ${i.white};
    transition: fill 0.3s;
  }

  &:hover svg,
  &:focus svg {
    fill: ${i.orangeSecondary};
  }

  ${r.tablet} {
    bottom: -16px;
    width: 32px;
    height: 32px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }
`,w=t.h3`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.1;
  color: ${i.grey};
  text-align: center;

  ${r.tablet} {
    margin-bottom: 32px;
  }
`,W=t.div`
  display: flex;
  justify-content: center;
  gap: 0 14px;
  margin-bottom: 40px;

  ${r.tablet} {
    margin-bottom: 32px;
  }
`,g=t.div`
  width: 100%;
`,C=t.button`
  ${u};
  display: flex;
  gap: 0 8px;
  margin-top: 40px;
  margin-left: auto;
  transition: color 0.3s;

  & span {
    font-size: 14px;
    line-height: 1.3;
    color: ${i.grey};
    transition: color 0.3s;
  }

  & svg {
    width: 20px;
    height: 20px;
    stroke: ${i.orange};
    transition: stroke 0.3s;
  }

  &:hover span,
  &:hover svg,
  &:focus span,
  &:focus svg {
    color: ${i.textWhite08};
    stroke: ${i.orangeSecondary};
  }

  ${r.tablet} {
    margin-top: 32px;
  }
`,S=t.p`
  width: auto;
  display: flex;

  font-size: 14px;
  line-height: 1.29;

  color: ${i.textWhite03};

  ${r.tablet} {
    width: ${o=>o.width.tablet}px;

    font-size: 16px;
    line-height: 1.5;
  }

  ${r.desktop} {
    width: ${o=>o.width.desktop}px;
  }
`,D=t.svg`
  max-width: 24px;
  max-height: 24px;
  margin-right: 8px;
`,b=({text:o,width:l})=>e.jsxs(S,{width:l,children:[e.jsx(D,{children:e.jsx("use",{href:d+"#icon-exclamation-mark"})}),o]});b.propTypes={text:h.string,width:h.object};const B=b;function T(){return e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(k,{children:e.jsx("use",{href:`${d}#icon-gridicons_user`})}),e.jsxs($,{children:[e.jsx("input",{type:"file"}),e.jsx("svg",{children:e.jsx("use",{href:`${d}#icon-check-mark`})})]})]}),e.jsx(w,{children:"Anna Rybachok"}),e.jsxs(W,{children:[e.jsx(g,{children:e.jsx(c,{icon:"fork-and-knife",keyValue:"2200",label:"Daily calorie intake",fill:"true"})}),e.jsx(g,{children:e.jsx(c,{icon:"dumbbell",keyValue:"110 min",label:"Daily norm of sports",fill:"true"})})]}),e.jsx(B,{text:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals.",width:{tablet:439,desktop:439}}),e.jsxs(C,{type:"button",children:[e.jsx("span",{children:"Logout"}),e.jsx("svg",{children:e.jsx("use",{href:`${d}#logout_`})})]})]})}const A=t.form`
  flex-shrink: 0;
  max-width: 704px;
  margin: 18px auto 0;
`,m=t.div`
  ${r.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0 14px;
  }
`,p=t.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0 14px;
`,z=t(p)`
  ${r.tablet} {
    justify-content: flex-start;
    gap: 0 32px;
  }
`,x=t.label`
  display: block;
  max-width: 345px;
  width: 100%;
  margin-bottom: 14px;
  font-size: 12px;
  line-height: 1.5;
  color: ${i.textWhite05};

  & p {
    margin-bottom: 4px;
  }
`,a=t(x)`
  max-width: 168px;
  width: 50%;
`,n=t.input`
  width: 100%;
  height: 46px;
  padding: 14px;
  color: ${i.grey};
  background-color: inherit;
  border: 1px solid ${i.textWhite03};
  border-radius: 12px;
  transition: border-color 0.3s;

  &:disabled {
    color: ${i.textWhite06};
  }

  &:hover,
  &:focus {
    border-color: ${i.orange};
  }
`,I=t.p`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 1.5;
  color: ${i.textWhite05};
`,F=t.div`
  margin: 42px 0 40px;

  ${r.tablet} {
    margin: 32px 0 38px;
  }

  ${r.desktop} {
    margin-bottom: 48px;
  }
`,L=t.button`
  ${u};

  min-width: 115px;
  padding: 12px;
  color: ${i.textWhite06};
  background-color: ${i.orange};
  border-radius: 12px;
  transition:
    color 0.3s,
    background-color 0.3s;

  &:hover,
  &:focus {
    color: ${i.textWhite08};
    background-color: ${i.orangeSecondary};
  }
`,P=t.label`
  display: inline-flex;
  align-items: center;
  position: relative;

  &:not(:last-child) {
    margin-right: 9px;
  }

  &:hover p,
  &:focus p {
    color: ${i.orange};
    border-color: ${i.orange};
  }
`,U=t.input`
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
`,E=t.p`
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
`,G=t.p`
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.3;
  color: grey;
  transition:
    color 0.3s,
    border-color 0.3s;
`;function s(o){return e.jsxs(P,{style:o.styleWrapper||null,children:[e.jsx(U,{type:"radio",name:o.name,value:o.value,defaultChecked:!!o.checked}),e.jsx(E,{style:o.styleCheckbox||null}),e.jsx(G,{style:o.styleText||null,children:o.children})]})}function H(){const o=l=>{l.preventDefault();const y=new FormData(l.target);console.log(l),console.log(y)};return e.jsxs(A,{onSubmit:o,autoComplete:"off",children:[e.jsxs(m,{children:[e.jsxs(x,{children:[e.jsx("p",{children:"Basic info"}),e.jsx(n,{type:"text"})]}),e.jsx(x,{children:e.jsx(n,{type:"text",value:"mail@mail.tst",disabled:!0})})]}),e.jsxs(m,{children:[e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsx("p",{children:"Height"}),e.jsx(n,{type:"text"})]}),e.jsxs(a,{children:[e.jsx("p",{children:"Current Weight"}),e.jsx(n,{type:"text"})]})]}),e.jsxs(p,{children:[e.jsxs(a,{children:[e.jsx("p",{children:"Desired Weight"}),e.jsx(n,{type:"text"})]}),e.jsx(a,{children:e.jsx(n,{type:"text"})})]})]}),e.jsxs(z,{children:[e.jsxs("div",{children:[e.jsx(I,{children:"Blood"}),e.jsx(s,{type:"radio",name:"blood",value:"1",checked:!0,children:"1"}),e.jsx(s,{type:"radio",name:"blood",value:"2",children:"2"}),e.jsx(s,{type:"radio",name:"blood",value:"3",children:"3"}),e.jsx(s,{type:"radio",name:"blood",value:"4",children:"4"})]}),e.jsxs("div",{children:[e.jsx(s,{type:"radio",name:"sex",value:"male",checked:!0,children:"Male"}),e.jsx(s,{type:"radio",name:"sex",value:"female",children:"Female"})]})]}),e.jsxs(F,{children:[e.jsx(s,{type:"radio",name:"levelActivity",value:"1",styleWrapper:{marginBottom:"9px",display:"flex"},checked:!0,children:"Sedentary lifestyle (little or no physical activity)"}),e.jsx(s,{type:"radio",name:"levelActivity",value:"2",styleWrapper:{marginBottom:"9px",display:"flex"},children:"Light activity (light exercises/sports 1-3 days per week)"}),e.jsx(s,{type:"radio",name:"levelActivity",value:"3",styleWrapper:{marginBottom:"9px",display:"flex"},children:"Moderately active (moderate exercises/sports 3-5 days per week)"}),e.jsx(s,{type:"radio",name:"levelActivity",value:"4",styleWrapper:{marginBottom:"9px",display:"flex"},children:"Very active (intense exercises/sports 6-7 days per week)"}),e.jsx(s,{type:"radio",name:"levelActivity",value:"5",styleWrapper:{display:"flex"},children:"Extremely active (very strenuous exercises/sports and physical work)"})]}),e.jsx(L,{children:"Save"})]})}const V=t.div`
  padding: 0 20px 50px;
`,q=t.div`
  margin-top: 40px;

  ${r.tablet} {
    margin-top: 64px;
  }

  ${r.desktop} {
    display: flex;
    flex-direction: row-reverse;
    gap: 0 49px;
    margin-top: 32px;
    justify-content: space-between;
  }
`,M=t.div`
  ${r.desktop} {
    padding-right: 64px;
    border-right: 1px solid ${i.textWhite02};
  }
`;function O(){const o={top:{tab:72,mob:40},bt:{desk:32,tab:64,mob:40}};return e.jsxs(V,{children:[e.jsx(f,{text:"Profile Settings",margin:o}),e.jsxs(q,{children:[e.jsx(T,{}),e.jsx(M,{children:e.jsx(H,{})})]})]})}export{O as default};
