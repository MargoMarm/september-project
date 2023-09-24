import{n as o,m as e}from"./index-1e579745.js";import{i}from"./imgHomePage-66a7b711.js";const r=o.ul`
  display: flex;
  gap: 20px;
`,a=o.div`
  height: 812px;
  background-image: url(${i.imgMx1});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 298px 571px;
  padding: 0 20px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${i.imgMx2});
    }
  }

  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: url(${i.imgMx3});
    }
  }

  ${e.tablet} {
    height: 768px;
    background-image: url(${i.imgTx1});
    background-size: 437px 893px;
    padding: 0 32px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${i.imgTx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${i.imgTx3});
      }
    }
  }
  ${e.desktop} {
    height: 0;
    background: none;
    padding: 0 0 0 96px;
  }
`,d=o.div`
  ${e.desktop} {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${i.imgDx1});
    background-size: 670px 800px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${i.imgDx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${i.imgDx3});
      }
    }
  }
`;export{r as L,d as W,a};
