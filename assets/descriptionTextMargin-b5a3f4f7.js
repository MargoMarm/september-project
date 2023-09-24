import{n as r,c as o,m as i,j as e,s as p,P as s}from"./index-33f75ee5.js";const h=r.div`
  box-sizing: border-box;
  border: 1px solid;

  border-color: ${t=>t.border==="green"?o.green:t.border==="red"?o.red:o.textWhite03};

  background-color: ${t=>t.fill==="true"?o.orange:o.textWhite005};

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
`,g=r.div`
  display: flex;
  gap: 3px;
  ${i.mobile} {
    gap: 8px;
  }
`,m=r.svg`
  width: 20px;
  height: 20px;

  fill: ${o.orangeSecondary};
`,c=r.span`
  color: ${t=>t.fill==="true"?o.textWhite08:o.textWhite05};

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: ${16/12};
  ${i.tablet} {
    line-height: ${18/12};
  }
`,b=r.p`
  color: ${o.white};
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
`,$=({icon:t,keyValue:n,label:a,border:x="default",fill:d="false"})=>e.jsxs(h,{fill:d,border:x,children:[e.jsxs(g,{children:[e.jsxs(m,{children:[e.jsx("use",{href:`${p}#${t}`}),e.jsx("use",{href:p+`#${t}`})]}),e.jsx(c,{children:a})]}),e.jsx(b,{children:n})]}),j=$,f=r.p`
  width: auto;
  display: flex;
  margin-top: ${t=>t.margin.top.mobile}px;
  margin-bottom: ${t=>t.margin.bottom.mobile}px;

  font-size: 14px;
  line-height: 1.29;

  color: ${o.textWhite03};

  ${i.tablet} {
    width: ${t=>t.width.tablet}px;
    margin-top: ${t=>t.margin.top.tablet}px;
    margin-bottom: ${t=>t.margin.bottom.tablet}px;

    font-size: 16px;
    line-height: 1.5;
  }

  ${i.desktop} {
    width: ${t=>t.width.desktop}px;
    margin-top: ${t=>t.margin.top.desktop}px;
    margin-bottom: ${t=>t.margin.bottom.desktop}px;
  }
`,u=r.svg`
  max-width: 24px;
  max-height: 24px;
  margin-right: 8px;
`,l=({text:t,width:n,margin:a})=>e.jsxs(f,{width:n,margin:a,children:[e.jsx(u,{children:e.jsx("use",{href:p+"#icon-exclamation-mark"})}),t]});l.propTypes={text:s.string,width:s.object,margin:s.object};const w=l,k={top:{mobile:20,tablet:32,desktop:48},bottom:{mobile:40,tablet:0,desktop:0}};export{j as D,w as a,k as m};
