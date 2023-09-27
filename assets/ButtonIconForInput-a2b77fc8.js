import{n as s,c as e,P as o,j as c}from"./index-636452aa.js";const a=s.button`
  position: absolute;
  top: 50%;
  right: ${({right:t})=>t||"0"};
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${e.white};
  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${e.orange};
    scale: 1.15;
  }
`;function p({children:t,onClick:n,right:r,type:i}){return c.jsx(a,{onClick:n,right:r,type:i,children:t})}p.propTypes={right:o.string,type:o.string,children:o.object.isRequired};export{p as B};
