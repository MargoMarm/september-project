import{g as w,n,m as o,N as S,j as e,r as $}from"./index-368819ed.js";const x={black:"#040404",white:"#EFEDE8",orange:"#E6533C",orangeSecondary:"#EF8964",textSuccess:"#3CBF61",textError:"#D80027",textWhite03:"rgba(239, 237, 232, 0.30);",textWhite05:"rgba(239, 237, 232, 0.50)",textWhite06:"rgba(239, 237, 232, 0.60)"};var f={exports:{}},T="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",E=T,C=E;function b(){}function y(){}y.resetWarningCache=b;var N=function(){function t(g,G,J,K,Q,k){if(k!==C){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function r(){return t}var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:y,resetWarningCache:b};return s.PropTypes=s,s};f.exports=N();var P=f.exports;const c=w(P),F=n.div`
  background-color: transparent;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border: none;

  ${o.desktop} {
  }
`,R=n(S)`
  box-sizing: border-box;
  padding: ${t=>t.isinheader==="true"?"10px 27px":"12px 40px"};
  display: inline-block;
  gap: 10px;
  border-radius: 12px;

  background-color: ${t=>t.isorange==="true"?x.orange:"inherit"};
  border: ${t=>t.isorange==="true"?"none":"1px solid rgba(239, 237, 232, 0.30)"};
  color: ${x.white};

  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  &:hover {
    background-color: ${t=>t.isorange==="true"?x.orangeSecondary:"inherit"};
    border: ${t=>t.isorange==="true"?"none":"1px solid #E6533C"};
  }

  ${o.tablet} {
    padding: ${t=>t.isinheader==="true"?"10px 27px":"16px 60px"};

    font-size: 20px;
    line-height: 1.2;
  }
`,a=({to:t,isorange:r,isinheader:s,text:g})=>e.jsx(R,{isorange:r,isinheader:s,to:t,children:g});a.propTypes={to:c.string,isorange:c.string,isinheader:c.string,text:c.string};const W=n.div`
  ${o.smallMobile} {
    display: none;
  }
  ${o.desktop} {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`,d=n.svg`
  width: 24px;
  height: 24px;
  fill: white;
`,L=n.div`
  display: flex;
  margin-left: 30px;
  gap: 16px;
`,h=n.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  gap: 5px;
`,_=n.span`
  color: #efede8;
  font-size: 16px;
  line-height: 24px;

  ${o.desktop} {
	gap: 8px;
  }
`,i="/september-project/assets/sprite-8504a232.svg",B=()=>e.jsxs(W,{children:[e.jsx(a,{text:"Diary",isinheader:"true"}),e.jsx(a,{text:"Products",isinheader:"true"}),e.jsx(a,{text:"Exercises",isinheader:"true"}),e.jsxs(L,{children:[e.jsxs(h,{children:[e.jsx(d,{children:e.jsx("use",{href:i+"#settings"})})," "]}),e.jsxs(h,{children:[e.jsx(d,{children:e.jsx("use",{href:i+"#ecllipse"})})," "]}),e.jsxs(h,{children:[e.jsx(_,{children:"Logout"}),e.jsx(d,{children:e.jsx("use",{href:i+"#log-out"})})," "]})]})]}),O=n.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`,D=n.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`,I=n.svg`
  width: 126px;
  height: 13px;
  ${o.tablet} {
    width: 152px;
    height: 17px;
  }
`,M=()=>e.jsx(e.Fragment,{children:e.jsx(D,{children:e.jsxs(O,{type:"button",children:[e.jsx(I,{children:e.jsx("use",{href:i+"#logo-big"})})," "]})})}),m={display:"flex",alignItems:"center",gap:10,margin:0,padding:0,border:"none"},j=n.div`
  display: flex;
  margin-right: 20px;
  gap: 14px;

  ${o.tablet} {
    margin-right: 32px;
    gap: 16px;
  }
`,l=n.button`
  ${m}
  background-color: rgba(0, 0, 0, 0);
  ${o.desktop} {
    display: none;
  }
`,p=n.svg`
  fill: white;
  width: 24px;
  height: 24px;
`,z=n.button`
  ${m}
  flex-direction: row-reverse;
  background-color: rgba(0, 0, 0, 0);
`,H=n.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  font-size: 14px;
  color: white;
`,U=n.div`
  display: flex;
  width: 100%;
  background-color: #e6533c;
  padding: 20px 20px 0px 20px;
  flex-direction: column;
  justify-content: space-between;
`,q=n.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`,A=n.div`
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  &.active {
    left: 0;
    transition: 350ms;
  }
`,V=n.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,Y=()=>{const[t,r]=$.useState(!1),s=()=>r(!t);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{to:"#",children:[e.jsx(l,{type:"button",children:e.jsx(p,{children:e.jsx("use",{href:i+"#settings"})})}),e.jsx(l,{type:"button",children:e.jsx(p,{children:e.jsx("use",{href:i+"#ecllipse"})})}),e.jsx(l,{type:"button",onClick:s,children:e.jsx(p,{children:e.jsx("use",{href:i+"#menu"})})})]}),e.jsx(A,{className:t===!0?"active":"",children:e.jsxs(U,{onClick:s,children:[e.jsx(z,{type:"button",onClick:s,children:e.jsx(p,{children:e.jsx("use",{href:i+"#apple"})})}),e.jsxs(V,{children:[e.jsx(a,{text:"Diary"}),e.jsx(a,{text:"Products"}),e.jsx(a,{text:"Exercises"})]}),e.jsx(q,{children:e.jsx(j,{to:"#",children:e.jsxs(l,{type:"button",onClick:s,children:[e.jsx(H,{children:" Logout"}),e.jsx(p,{children:e.jsx("use",{href:i+"#apple"})})]})})})]})})]})},v=({children:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(F,{children:[e.jsx(M,{}),e.jsx(B,{}),e.jsx(Y,{})]}),t]});v.propTypes={children:c.any};const Z=()=>e.jsx(e.Fragment,{children:e.jsx(v,{})});export{Z as default};
