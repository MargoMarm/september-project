import{n as p,c as r,m as o,j as a,P as e}from"./index-f73ea04a.js";const s=p.h2`
  color: ${r.white};

  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.38px;
  margin-bottom: ${t=>t.margin.bt.mob}px;
  margin-top: ${t=>t.margin.top.mob}px;

  ${o.tablet} {
    margin-bottom: ${t=>t.margin.bt.tab}px;
    margin-top: ${t=>t.margin.top.tab}px;
    font-size: 32px;

    line-height: 1.11;
    letter-spacing: 0.7px;
  }

  ${o.desktop} {
    margin-top: ${t=>t.margin.top.desk}px;
  }
`,n=({text:t,margin:i})=>a.jsx(s,{margin:i,children:t});n.propTypes={text:e.string,margin:e.object};const g=n;export{g as T};
