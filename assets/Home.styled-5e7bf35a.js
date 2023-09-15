import{n as i,N as b,m as o,g as h,j as t}from"./index-120927f8.js";const s={black:"#040404",white:"#EFEDE8",orange:"#E6533C",orangeSecondary:"#EF8964",textSuccess:"#3CBF61",textError:"#D80027",textWhite03:"rgba(239, 237, 232, 0.30);",textWhite05:"rgba(239, 237, 232, 0.50)",textWhite06:"rgba(239, 237, 232, 0.60)"},f=i(b)`
  box-sizing: border-box;
  padding: ${e=>e.isinheader==="true"?"10px 27px":"12px 40px"};
  display: inline-block;
  gap: 10px;
  border-radius: 12px;

  background-color: ${e=>e.isorange==="true"?s.orange:"inherit"};
  border: ${e=>e.isorange==="true"?"none":"1px solid rgba(239, 237, 232, 0.30)"};
  color: ${s.white};

  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  &:hover {
    background-color: ${e=>e.isorange==="true"?s.orangeSecondary:"inherit"};
    border: ${e=>e.isorange==="true"?"none":"1px solid #E6533C"};
  }

  ${o.tablet} {
    padding: ${e=>e.isinheader==="true"?"10px 27px":"16px 60px"};

    font-size: 20px;
    line-height: 1.2;
  }
`;var d={exports:{}},y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",k=y,v=k;function l(){}function x(){}x.resetWarningCache=l;var j=function(){function e(g,I,B,q,U,u){if(u!==v){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function r(){return e}var p={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:x,resetWarningCache:l};return p.PropTypes=p,p};d.exports=j();var $=d.exports;const a=h($),_=({to:e,isorange:r,isinheader:p,text:g})=>t.jsx(f,{isorange:r,isinheader:p,to:e,children:g});_.propTypes={to:a.string,isorange:a.string,isinheader:a.string,text:a.string};const w="/september-project/assets/sprite-7f6bfff0.svg",T=i.div`
  background-color: transparent;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border: none;

  ${o.desktop} {
  }
`;i.div`
  ${o.smallMobile} {
    display: none;
  }
  ${o.desktop} {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`;i.svg`
  width: 24px;
  height: 24px;
  fill: white;
`;i.div`
  display: flex;
  margin-left: 30px;
  gap: 16px;
`;i.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  gap: 5px;
`;i.span`
  color: #efede8;
  font-size: 16px;
  line-height: 24px;

  ${o.desktop} {
	gap: 8px;
  }
`;const E=i.button`
  margin: 0;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`,S=i.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`,C=i.svg`
  width: 126px;
  height: 13px;
  ${o.tablet} {
    width: 152px;
    height: 17px;
  }
`,P=()=>t.jsx(t.Fragment,{children:t.jsx(S,{children:t.jsxs(E,{type:"button",children:[t.jsx(C,{children:t.jsx("use",{href:w+"#logo-big"})})," "]})})}),m={display:"flex",alignItems:"center",gap:10,margin:0,padding:0,border:"none"};i.div`
  display: flex;
  margin-right: 20px;
  gap: 14px;

  ${o.tablet} {
    margin-right: 32px;
    gap: 16px;
  }
`;i.button`
  ${m}
  background-color: rgba(0, 0, 0, 0);
  ${o.desktop} {
    display: none;
  }
`;i.svg`
  fill: white;
  width: 24px;
  height: 24px;
`;i.button`
  ${m}
  flex-direction: row-reverse;
  background-color: rgba(0, 0, 0, 0);
`;i.span`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  font-size: 14px;
  color: white;
`;i.div`
  display: flex;
  width: 100%;
  background-color: #e6533c;
  padding: 20px 20px 0px 20px;
  flex-direction: column;
  justify-content: space-between;
`;i.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
`;i.div`
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
`;i.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;const D=({children:e})=>t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsx(P,{})}),e]});D.propTypes={children:a.any};const F="/september-project/assets/home-page_desktop_1x-2dc737d6.jpg",R="/september-project/assets/home-page_desktop_2x-2c5d358c.jpg",W="/september-project/assets/home-page_desktop_3x-30837f7d.jpg",L="/september-project/assets/home-page_tablet_1x-3f850f85.jpg",O="/september-project/assets/home-page_tablet_2x-16fa8106.jpg",z="/september-project/assets/home-page_tablet_3x-96c27aa0.jpg",M="/september-project/assets/home-page_mobile_1x-516df911.jpg",N="/september-project/assets/home-page_mobile_2x-1e729053.jpg",H="/september-project/assets/home-page_mobile_3x-10fc07f4.jpg",n={imgDx1:F,imgDx2:R,imgDx3:W,imgTx1:L,imgTx2:O,imgTx3:z,imgMx1:M,imgMx2:N,imgMx3:H},V=i.ul`
  display: flex;
  gap: 20px;
`,Y=i.div`
  height: 812px;
  background-image: url(${n.imgMx1});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 298px 571px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${n.imgMx2});
    }
  }

  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: url(${n.imgMx3});
    }
  }

  ${o.tablet} {
    height: 768px;
    background-image: url(${n.imgTx1});
    background-size: 437px 893px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${n.imgTx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${n.imgTx3});
      }
    }
  }
  ${o.desktop} {
    height: 800px;
    background-image: url(${n.imgDx1});
    background-size: 670px 800px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${n.imgDx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${n.imgDx3});
      }
    }
  }
`;export{_ as C,D as H,V as L,a as P,Y as W,s as c,w as s};
