import{n,c as i,m as r,j as e,s as l,P as o}from"./index-95d477e9.js";const h=n.div`
  box-sizing: border-box;
  border: 1px solid;

  border-color: ${t=>t.border==="green"?i.green:t.border==="red"?i.red:i.textWhite03};

  background-color: ${t=>t.fill==="true"?i.orange:i.textWhite005};

  height: 96px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 96px;
  padding: 10px;
  ${r.mobile} {
    padding: 14px;
  }
  ${r.tablet} {
    padding: 18px;
    height: 116px;
  }
  ${r.desktop} {
    padding: 14px 18px;
  }
`,m=n.div`
  display: flex;
  gap: 3px;
  ${r.mobile} {
    gap: 8px;
  }
`,c=n.svg`
  width: 20px;
  height: 20px;

  fill: ${i.orangeSecondary};
`,b=n.span`
  color: ${t=>t.fill==="true"?i.textWhite08:i.textWhite05};

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: ${16/12};
  ${r.tablet} {
    line-height: ${18/12};
  }
`,f=n.p`
  color: ${i.white};
  margin: 0;

  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${18/20};

  ${r.tablet} {
    font-size: 24px;
    line-height: ${32/24};
  }
`,p=({icon:t,keyValue:s,label:a,border:d="default",fill:g="false"})=>e.jsxs(h,{fill:g,border:d,children:[e.jsxs(m,{children:[e.jsxs(c,{children:[e.jsx("use",{href:`${l}#${t}`}),e.jsx("use",{href:l+`#${t}`})]}),e.jsx(b,{children:a})]}),e.jsx(f,{children:s})]});p.propTypes={icon:o.string.isRequired,keyValue:o.any.isRequired,label:o.string.isRequired,border:o.oneOf(["green","red","default"]),fill:o.oneOf(["true","false"])};const j=p,$=n.p`
  width: auto;
  display: flex;
  margin-top: ${t=>t.margin.top.mobile}px;
  margin-bottom: ${t=>t.margin.bottom.mobile}px;

  font-size: 14px;
  line-height: 1.29;

  color: ${i.textWhite03};

  ${r.tablet} {
    width: ${t=>t.width.tablet}px;
    margin-top: ${t=>t.margin.top.tablet}px;
    margin-bottom: ${t=>t.margin.bottom.tablet}px;

    font-size: 16px;
    line-height: 1.5;
  }

  ${r.desktop} {
    width: ${t=>t.width.desktop}px;
    margin-top: ${t=>t.margin.top.desktop}px;
    margin-bottom: ${t=>t.margin.bottom.desktop}px;
  }
`,u=n.svg`
  max-width: 24px;
  max-height: 24px;
  margin-right: 8px;
`,x=({text:t,width:s,margin:a})=>e.jsxs($,{width:s,margin:a,children:[e.jsx(u,{children:e.jsx("use",{href:l+"#icon-exclamation-mark"})}),t]});x.propTypes={text:o.string,width:o.object,margin:o.object};const w=x,k={top:{mobile:20,tablet:32,desktop:48},bottom:{mobile:40,tablet:0,desktop:0}};export{j as D,w as a,k as m};
