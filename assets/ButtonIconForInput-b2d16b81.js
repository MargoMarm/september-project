import{n as i,c as n,P as o,j as c}from"./index-f154743e.js";const a=i.button`
  position: absolute;
  top: 50%;
  right: ${({right:t})=>t||"0"};
  transform: translateY(-50%);
  padding: 8px;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${n.white};
  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${n.orange};
    scale: 1.15;
  }
`;function l({children:t,onClick:e,right:r,type:s}){return c.jsx(a,{onClick:e,right:r,type:s,children:t})}l.propTypes={right:o.string,type:o.string,children:o.object.isRequired};export{l as B};
