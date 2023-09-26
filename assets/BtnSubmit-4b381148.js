import{n as i,c as e,m as p,P as o,j as u}from"./index-ada2ea4c.js";const b=i.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  outline: none;
  background-color: ${e.orange};
  border-radius: 12px;
  border: none;
  margin-top: ${({margin:t})=>(t==null?void 0:t.top.mob)||0};
  margin-bottom: ${({margin:t})=>(t==null?void 0:t.bot.mob)||0};

  color: ${e.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;
  transition: background 0.3s ease-out;

  ${p.tablet} {
    padding: 14px 32px;
    line-height: 120%;
    margin-top: ${({margin:t})=>(t==null?void 0:t.top.tab)||0};
    margin-bottom: ${({margin:t})=>(t==null?void 0:t.bot.tab)||0};
  }

  &:hover,
  &:focus {
    background: ${e.orangeSecondary};
  }
`;function c({title:t,margin:n,fontSize:s,btnNext:r=()=>null}){return u.jsx(b,{type:"submit",margin:n,fontSize:s,onClick:r,children:t})}c.propTypes={title:o.string.isRequired,margin:o.object,fontSize:o.string,btnNext:o.func};export{c as B};
