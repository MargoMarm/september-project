import{n as r,m as a,j as e}from"./index-2d0f13de.js";import{D as l}from"./DailyStatsCards-ec1c2dac.js";const t=r.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${a.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${a.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,s=()=>e.jsxs(t,{children:[e.jsx(l,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),e.jsx(l,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),e.jsx(l,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),e.jsx(l,{icon:"fire",label:"Сalories burned",keyValue:"0"}),e.jsx(l,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),e.jsx(l,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),o=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"THIS IS DAIRY PAGE"}),e.jsx(s,{})]});export{o as default};
