import{n as i,c as o,P as n,j as a}from"./index-5031df81.js";const p=i.button`
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
`;function l({children:t,onClick:e,right:r,type:s}){return a.jsx(p,{onClick:e,right:r,type:s,children:t})}l.propTypes={right:n.string,type:n.string,children:n.object.isRequired};export{l as B};
