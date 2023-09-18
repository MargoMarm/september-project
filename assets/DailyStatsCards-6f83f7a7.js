import{n,m as i,j as r}from"./index-4535f9f1.js";import{c as t,P as o}from"./index-56ab578e.js";import{s}from"./sprite-57a4f95b.js";const f=n.div`
  box-sizing: border-box;
  border: 1px solid;

  border-color: ${e=>e.border==="green"?t.green:e.border==="red"?t.red:t.textWhite03};

  background-color: ${e=>e.fill==="true"?t.orange:t.textWhite005};

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
`,h=n.div`
  display: flex;
  gap: 3px;
  ${i.mobile} {
    gap: 8px;
  }
`,g=n.svg`
  width: 20px;
  height: 20px;

  fill: ${t.orangeSecondary};
`,c=n.span`
  color: ${e=>e.fill==="true"?t.textWhite08:t.textWhite05};

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: ${16/12};
  ${i.tablet} {
    line-height: ${18/12};
  }
`,u=n.p`
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
`,l=({icon:e,keyValue:a,label:d,border:p="default",fill:x="false"})=>r.jsxs(f,{fill:x,border:p,children:[r.jsxs(h,{children:[r.jsxs(g,{children:[r.jsx("use",{href:`${s}#${e}`}),r.jsx("use",{href:s+`#${e}`})]}),r.jsx(c,{children:d})]}),r.jsx(u,{children:a})]});l.propTypes={icon:o.string.isRequired,keyValue:o.string.isRequired,label:o.string.isRequired,border:o.oneOf(["green","red","default"]),fill:o.oneOf(["true","false"])};const y=l;export{y as D};
