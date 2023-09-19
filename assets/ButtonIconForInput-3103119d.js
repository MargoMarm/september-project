import{n as s,c as o,P as n,j as a}from"./index-fd774893.js";const p=s.button`
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
  &:hover {
    fill: ${o.orange};
    stroke: ${o.orange};
  }
`;function u({children:t,onClick:e,right:r,type:i}){return a.jsx(p,{onClick:e,right:r,type:i,children:t})}u.propTypes={onClick:n.func.isRequired,right:n.string,type:n.string.isRequired};export{u as B};
