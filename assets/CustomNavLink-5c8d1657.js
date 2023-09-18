import{n as t,N as a,m as p,j as d}from"./index-3f06b336.js";import{c as i,P as e}from"./index-e7937559.js";const x=t(a)`
  box-sizing: border-box;
  padding: ${r=>r.isinheader==="true"?"10px 27px":"12px 40px"};
  display: inline-block;
  gap: 10px;
  border-radius: 12px;

  background-color: ${r=>r.isorange==="true"?i.orange:"inherit"};
  border: ${r=>r.isorange==="true"?"none":"1px solid rgba(239, 237, 232, 0.30)"};
  color: ${i.white};

  font-size: 16px;
  font-weight: ${r=>r.isinheader==="true"?"400":"500"};
  line-height: 1.13;

  &:hover {
    background-color: ${r=>r.isorange==="true"?i.orangeSecondary:"inherit"};
    border: ${r=>r.isorange==="true"?"none":"1px solid #E6533C"};
  }

  ${p.tablet} {
    padding: ${r=>r.isinheader==="true"?"10px 27px":"16px 60px"};

    font-size: ${r=>r.isinheader==="true"?"16px":"20px"};
    line-height: 1.2;
  }
`,g=({to:r,isorange:n,isinheader:o,text:s})=>d.jsx(x,{isorange:n,isinheader:o,to:r,children:s});g.propTypes={to:e.string,isorange:e.string,isinheader:e.string,text:e.string};export{g as C};
