import{n as i,N as w,m as s,g as _,j as e,r as T}from"./index-dc240249.js";const r={black:"#040404",white:"#EFEDE8",orange:"#E6533C",grey:"#efede84d",orangeSecondary:"#EF8964",textSuccess:"#3CBF61",textError:"#D80027",textWhite03:"rgba(239, 237, 232, 0.30);",textWhite05:"rgba(239, 237, 232, 0.50)",textWhite06:"rgba(239, 237, 232, 0.60)"},g={margin:"0",padding:"0",border:"none",backgroundColor:" rgba(0, 0, 0, 0)"},f={width:"46px",height:"46px",fill:"rgba(48, 48, 48, 0.3)",strokeWidth:"1px",stroke:" #e6533c"},S=i(w)`
  box-sizing: border-box;
  padding: ${t=>t.isinheader==="true"?"10px 27px":"12px 40px"};
  display: inline-block;
  gap: 10px;
  border-radius: 12px;

  background-color: ${t=>t.isorange==="true"?r.orange:"inherit"};
  border: ${t=>t.isorange==="true"?"none":"1px solid rgba(239, 237, 232, 0.30)"};
  color: ${r.white};

  font-size: 16px;
  font-weight: ${t=>t.isinheader==="true"?"400":"500"};
  line-height: 1.13;

  &:hover {
    background-color: ${t=>t.isorange==="true"?r.orangeSecondary:"inherit"};
    border: ${t=>t.isorange==="true"?"none":"1px solid #E6533C"};
  }

  ${s.tablet} {
    padding: ${t=>t.isinheader==="true"?"10px 27px":"16px 60px"};

    font-size: ${t=>t.isinheader==="true"?"16px":"20px"};
    line-height: 1.2;
  }
`;var y={exports:{}},E="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",C=E,W=C;function v(){}function k(){}k.resetWarningCache=v;var P=function(){function t(m,oe,ae,pe,ce,$){if($!==W){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function n(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:k,resetWarningCache:v};return o.PropTypes=o,o};y.exports=P();var D=y.exports;const x=_(D),c=({to:t,isorange:n,isinheader:o,text:m})=>e.jsx(S,{isorange:n,isinheader:o,to:t,children:m});c.propTypes={to:x.string,isorange:x.string,isinheader:x.string,text:x.string};const p="/september-project/assets/sprite-7b324f90.svg",L=i.div`
  background-color: ${r.black};
  height: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${s.tablet} {
    background-color: ${r.black};

    height: 84px;
    border-bottom: 1px solid ${r.textWhite03};
  }

  ${s.desktop} {
    background-color: transparent;
	 border: none;
  }
`,N=i.div`
  ${s.smallMobile} {
    display: none;
  }
  ${s.desktop} {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`,b=i.svg`
  width: 24px;
  height: 24px;
  fill: ${r.grey};
`,M=i.svg`
  ${f}
`,R=i.div`
  display: flex;
  margin-left: 30px;
  gap: 16px;
`,h=i.button`
  display: flex;
  align-items: center;
  gap: 5px;
  ${g};
`,F=i.span`
  color: ${r.orange};
  font-size: 16px;
  line-height: 24px;

  ${s.desktop} {
    gap: 8px;
  }
`,z=()=>e.jsxs(N,{children:[e.jsx(c,{text:"Diary",isinheader:"true"}),e.jsx(c,{text:"Products",isinheader:"true"}),e.jsx(c,{text:"Exercises",isinheader:"true"}),e.jsxs(R,{children:[e.jsxs(h,{children:[e.jsx(b,{children:e.jsx("use",{href:p+"#settings"})})," "]}),e.jsxs(h,{children:[e.jsx(M,{children:e.jsx("use",{href:p+"#ecllipse"})})," "]}),e.jsxs(h,{children:[e.jsx(F,{children:"Logout"}),e.jsx(b,{children:e.jsx("use",{href:p+"#logout"})})," "]})]})]}),O=i.button`
  ${g}
`,B=i.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`,U=i.svg`
  width: 126px;
  height: 13px;
  ${s.tablet} {
    width: 152px;
    height: 17px;
  }
`,H=()=>e.jsx(e.Fragment,{children:e.jsx(B,{children:e.jsxs(O,{type:"button",children:[e.jsx(U,{children:e.jsx("use",{href:p+"#logo-big"})})," "]})})}),j=i.div`
  display: flex;
  margin-right: 20px;
  gap: 14px;

  ${s.tablet} {
    margin-right: 32px;
    gap: 16px;
  }
`,l=i.button`
  display: flex;
  align-items: center;
  gap: 8px;
  ${g}

  ${s.desktop} {
    display: none;
  }
`,d=i.svg`
  fill: ${r.grey};
  width: 24px;
  height: 24px;
`,I=i.svg`
  @media (max-width: 376px) {
    width: 37px;
    height: 37px;
  }
  ${f}
`,q=i.button`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  ${g}
`,A=i.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  color: ${r.white};
  font-family: Roboto;
  font-size: 14px;

  ${s.tablet} {
    color: ${r.white};
    font-size: 16px;
    line-height: 24px;
  }
`,V=i.div`
  display: flex;
  width: 100%;
  background-color: ${r.orange};
  padding: 20px 20px 0px 20px;
  flex-direction: column;
  justify-content: space-between;
`,Y=i.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`,G=i.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  z-index: 1;

  ${s.tablet} {
    width: 350px;
  }

  &.active {
    right: 0;
    transition: 350ms;
  }
`,J=i.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,K=()=>{const[t,n]=T.useState(!1),o=()=>n(!t);return e.jsxs(e.Fragment,{children:[e.jsxs(j,{to:"#",children:[e.jsx(l,{type:"button",children:e.jsx(d,{children:e.jsx("use",{href:p+"#settings"})})}),e.jsx(l,{type:"button",children:e.jsx(I,{children:e.jsx("use",{href:p+"#ecllipse"})})}),e.jsx(l,{type:"button",onClick:o,children:e.jsx(d,{children:e.jsx("use",{href:p+"#menu"})})})]}),e.jsx(G,{className:t===!0?"active":"",children:e.jsxs(V,{onClick:o,children:[e.jsx(q,{type:"button",onClick:o,children:e.jsx(d,{children:e.jsx("use",{href:p+"#close"})})}),e.jsxs(J,{children:[e.jsx(c,{text:"Diary"}),e.jsx(c,{text:"Products"}),e.jsx(c,{text:"Exercises"})]}),e.jsx(Y,{children:e.jsx(j,{to:"#",children:e.jsxs(l,{type:"button",onClick:o,children:[e.jsx(A,{children:" Logout"}),e.jsx(d,{children:e.jsx("use",{href:p+"#logout"})})]})})})]})})]})},le=()=>e.jsxs(L,{children:[e.jsx(H,{}),e.jsx(z,{}),e.jsx(K,{})]}),Q="/september-project/assets/home-page_desktop_1x-2dc737d6.jpg",X="/september-project/assets/home-page_desktop_2x-2c5d358c.jpg",Z="/september-project/assets/home-page_desktop_3x-30837f7d.jpg",ee="/september-project/assets/home-page_tablet_1x-3f850f85.jpg",te="/september-project/assets/home-page_tablet_2x-16fa8106.jpg",ie="/september-project/assets/home-page_tablet_3x-96c27aa0.jpg",se="/september-project/assets/home-page_mobile_1x-516df911.jpg",re="/september-project/assets/home-page_mobile_2x-1e729053.jpg",ne="/september-project/assets/home-page_mobile_3x-10fc07f4.jpg",a={imgDx1:Q,imgDx2:X,imgDx3:Z,imgTx1:ee,imgTx2:te,imgTx3:ie,imgMx1:se,imgMx2:re,imgMx3:ne},de=i.ul`
  display: flex;
  gap: 20px;
`,ge=i.div`
  height: 812px;
  background-image: url(${a.imgMx1});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 298px 571px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${a.imgMx2});
    }
  }

  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: url(${a.imgMx3});
    }
  }

  ${s.tablet} {
    height: 768px;
    background-image: url(${a.imgTx1});
    background-size: 437px 893px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${a.imgTx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${a.imgTx3});
      }
    }
  }
  ${s.desktop} {
    background-image: url(${a.imgDx1});
    background-size: 670px 800px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${a.imgDx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${a.imgDx3});
      }
    }
  }
`;export{c as C,le as H,de as L,x as P,ge as W,r as c,p as s};
