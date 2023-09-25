import{n as s,c as e,P as n,j as a}from"./index-03078ed5.js";const p=s.button`
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
    fill: ${e.orange};
    stroke: ${e.orange};
  }
`;function l({children:t,onClick:o,right:r,type:i}){return a.jsx(p,{onClick:o,right:r,type:i,children:t})}l.propTypes={right:n.string,type:n.string.isRequired,children:n.object.isRequired};export{l as B};
