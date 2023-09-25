import{n as i,c as e,m as b,P as o,j as l}from"./index-03078ed5.js";const r=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  outline: none;
  background-color: ${e.orange};
  border-radius: 12px;
  border: none;
  margin-top: ${({margin:t})=>(t==null?void 0:t.top.mob)||0};
  margin-bottom: : ${({margin:t})=>(t==null?void 0:t.bot.mob)||0};

  color: ${e.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;

  ${b.tablet} {
    padding: 16px 60px;
    font-size: ${t=>t};
    line-height: 120%;
    margin-top: ${({margin:t})=>(t==null?void 0:t.top.tab)||0};
    margin-bottom: : ${({margin:t})=>(t==null?void 0:t.bot.tab)||0} ;
  }
`;function u({title:t,margin:n,fontSize:s,btnNext:p=()=>null}){return l.jsx(r,{type:"submit",margin:n,fontSize:s,onClick:p,children:t})}u.propTypes={title:o.string.isRequired,margin:o.object,fontSize:o.string,btnNext:o.func};export{u as B};
