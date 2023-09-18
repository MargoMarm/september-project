import{n as h,N as x,m as d,g as u,j as y}from"./index-4860e1c9.js";const n={black:"#040404",white:"#EFEDE8",orange:"#E6533C",grey:"#efede84d",orangeSecondary:"#EF8964",textSuccess:"#3CBF61",textError:"#D80027",red:"#E9101D",green:"#3CBF61",textWhite005:"rgba(239, 237, 232, 0.05)",textWhite02:"rgba(239, 237, 232, 0.20);",textWhite03:"rgba(239, 237, 232, 0.30)",textWhite04:"rgba(239, 237, 232, 0.40);",textWhite05:"rgba(239, 237, 232, 0.50)",textWhite06:"rgba(239, 237, 232, 0.60)",textWhite08:"rgba(239, 237, 232, 0.80)"},l=h(x)`
  box-sizing: border-box;
  padding: ${e=>e.isinheader==="true"?"10px 27px":"12px 40px"};
  display: inline-block;
  gap: 10px;
  border-radius: 12px;

  background-color: ${e=>e.isorange==="true"?n.orange:"inherit"};
  border: ${e=>e.isorange==="true"?"none":"1px solid rgba(239, 237, 232, 0.30)"};
  color: ${n.white};

  font-size: 16px;
  font-weight: ${e=>e.isinheader==="true"?"400":"500"};
  line-height: 1.13;

  &:hover {
    background-color: ${e=>e.isorange==="true"?n.orangeSecondary:"inherit"};
    border: ${e=>e.isorange==="true"?"none":"1px solid #E6533C"};
  }

  ${d.tablet} {
    padding: ${e=>e.isinheader==="true"?"10px 27px":"16px 60px"};

    font-size: ${e=>e.isinheader==="true"?"16px":"20px"};
    line-height: 1.2;
  }
`;var p={exports:{}},b="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",m=b,f=m;function s(){}function c(){}c.resetWarningCache=s;var T=function(){function e(a,S,P,W,k,g){if(g!==f){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:c,resetWarningCache:s};return t.PropTypes=t,t};p.exports=T();var E=p.exports;const o=u(E),v=({to:e,isorange:r,isinheader:t,text:a})=>y.jsx(l,{isorange:r,isinheader:t,to:e,children:a});v.propTypes={to:o.string,isorange:o.string,isinheader:o.string,text:o.string};export{v as C,o as P,n as c};
