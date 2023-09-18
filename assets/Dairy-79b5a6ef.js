import{n,m as i,j as e}from"./index-43ac5c71.js";import{c as t,P as o}from"./index-cb35df29.js";import{s as x}from"./sprite-4ff87bc4.js";const c=n.ul`
  display: grid;
  width: 335px;
  gap: 13px;

  grid-template-columns: repeat(2, 1fr);

  ${i.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 593px;
  }
  ${i.desktop} {
    grid-template-columns: repeat(2, 1fr);
    width: 390px;
  }
`,f=n.div`
  box-sizing: border-box;
  border: 1px solid;

  border-color: ${r=>r.border==="green"?t.green:r.border==="red"?t.red:t.textWhite03};

  background-color: ${r=>r.fill==="true"?t.orange:t.textWhite005};

  height: 96px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 96px;
  padding: 10px;
  ${i.mobile} {
    padding: 14px;
  }
  ${i.tablet} {
    padding: 18px;
    height: 116px;
  }
  ${i.desktop} {
    padding: 14px 18px;
  }
`,u=n.div`
  display: flex;
  gap: 3px;
  ${i.mobile} {
    gap: 8px;
  }
`,h=n.svg`
  width: 20px;
  height: 20px;

  fill: ${t.orangeSecondary};
`,g=n.span`
  color: ${r=>r.fill==="true"?t.textWhite08:t.textWhite05};

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: ${16/12};
  ${i.tablet} {
    line-height: ${18/12};
  }
`,b=n.p`
  color: ${t.white};
  margin: 0;

  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${18/20};

  ${i.tablet} {
    font-size: 24px;
    line-height: ${32/24};
  }
`,l=({icon:r,keyValue:s,label:a,border:p="default",fill:d="false"})=>e.jsxs(f,{fill:d,border:p,children:[e.jsxs(u,{children:[e.jsx(h,{children:e.jsx("use",{href:x+`#${r}`})}),e.jsx(g,{children:a})]}),e.jsx(b,{children:s})]});l.propTypes={icon:o.string.isRequired,keyValue:o.string.isRequired,label:o.string.isRequired,border:o.oneOf(["green","red","default"]),fill:o.oneOf(["true","false"])};const m=()=>e.jsxs(c,{children:[e.jsx(l,{icon:"fork-and-knife",fill:"true",label:"Daily calorie intake",keyValue:"2200"}),e.jsx(l,{icon:"barbell",fill:"true",label:"Daily norm of sports",keyValue:"110 min"}),e.jsx(l,{icon:"apple",label:"Сalories consumed",keyValue:"0"}),e.jsx(l,{icon:"fire",label:"Сalories burned",keyValue:"0"}),e.jsx(l,{icon:"bubble",label:"The rest of the calories",keyValue:"2200"}),e.jsx(l,{icon:"runningMan",label:"The rest of sports",keyValue:"110 min"})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"THIS IS DAIRY PAGE"}),e.jsx(m,{})]});export{k as default};
