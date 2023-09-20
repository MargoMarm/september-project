import{n as o,m as i}from"./index-479e2e2c.js";const t="/september-project/assets/home-page_desktop_1x-2dc737d6.jpg",p="/september-project/assets/home-page_desktop_2x-2c5d358c.jpg",m="/september-project/assets/home-page_desktop_3x-30837f7d.jpg",a="/september-project/assets/home-page_tablet_1x-3f850f85.jpg",r="/september-project/assets/home-page_tablet_2x-16fa8106.jpg",s="/september-project/assets/home-page_tablet_3x-96c27aa0.jpg",n="/september-project/assets/home-page_mobile_1x-516df911.jpg",g="/september-project/assets/home-page_mobile_2x-1e729053.jpg",d="/september-project/assets/home-page_mobile_3x-10fc07f4.jpg",e={imgDx1:t,imgDx2:p,imgDx3:m,imgTx1:a,imgTx2:r,imgTx3:s,imgMx1:n,imgMx2:g,imgMx3:d},c=o.ul`
  display: flex;
  gap: 20px;
`,l=o.div`
  height: 812px;
  background-image: url(${e.imgMx1});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 298px 571px;

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
    height: 768px;
    background-image: url(${e.imgTx1});
    background-size: 437px 893px;

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
`;export{c as L,l as W};
