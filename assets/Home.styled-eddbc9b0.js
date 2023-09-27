import{n as o,m as i}from"./index-636452aa.js";const t="/september-project/assets/home-page_desktop_1x-2dc737d6.jpg",p="/september-project/assets/home-page_desktop_2x-2c5d358c.jpg",m="/september-project/assets/home-page_desktop_3x-30837f7d.jpg",a="/september-project/assets/home-page_tablet_1x-3f850f85.jpg",s="/september-project/assets/home-page_tablet_2x-16fa8106.jpg",n="/september-project/assets/home-page_tablet_3x-96c27aa0.jpg",r="/september-project/assets/home-page_mobile_1x-516df911.jpg",g="/september-project/assets/home-page_mobile_2x-1e729053.jpg",d="/september-project/assets/home-page_mobile_3x-10fc07f4.jpg",e={imgDx1:t,imgDx2:p,imgDx3:m,imgTx1:a,imgTx2:s,imgTx3:n,imgMx1:r,imgMx2:g,imgMx3:d},c=o.ul`
  display: flex;
  gap: 20px;
`,l=o.div`
  position: relative;
  height: 685px;
  background-image: url(${e.imgMx1});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 298px 571px;
  padding: 0 20px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${e.imgMx2});
    }
  }

  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: url(${e.imgMx3});
    }
  }

  ${i.tablet} {
    height: 832px;
    background-image: url(${e.imgTx1});
    background-size: 437px 893px;
    padding: 0 32px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${e.imgTx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${e.imgTx3});
      }
    }
  }
  ${i.desktop} {
    height: 0;
    background: none;
    padding: 0 0 0 96px;
  }
`,b=o.div`
  ${i.desktop} {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${e.imgDx1});
    background-size: 670px 800px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${e.imgDx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${e.imgDx3});
      }
    }
  }
`;export{c as L,b as W,l as a};
