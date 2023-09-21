import{n as s,c as e,P as t,j as a}from"./index-e8b491c1.js";const p=s.button`
  position: absolute;
  top: 50%;
  right: ${({right:n})=>n||"0"};
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
`;function u({children:n,onClick:o,right:r,type:i}){return a.jsx(p,{onClick:o,right:r,type:i,children:n})}u.propTypes={onClick:t.func.isRequired,right:t.string,type:t.string.isRequired,children:t.object.isRequired};export{u as B};
