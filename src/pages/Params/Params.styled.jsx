import styled from '@emotion/styled';

import imgPrmsForm from '../../assets/images/imgParamsForm';
import { mq } from '../../utils';

export const ParamsPageWrapper = styled.div`
  ${mq.smallMobile} {
    padding: 0 20px 20px 20px;

    background-color: black;
    background:
      linear-gradient(168deg, #040404 14.75%, rgba(4, 4, 4, 0) 52.97%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%) black;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 289px 571px;

    background-image: url(${props => {
      if (props.steps === 1) {
        return imgPrmsForm.mobile.imgS1Mx1;
      }
      if (props.steps === 2) {
        return imgPrmsForm.mobile.imgS2Mx1;
      }
      if (props.steps === 3) {
        return imgPrmsForm.mobile.imgS3Mx1;
      }
    }});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${props => {
          if (props.steps === 1) {
            return imgPrmsForm.mobile.imgS1Mx2;
          }
          if (props.steps === 2) {
            return imgPrmsForm.mobile.imgS2Mx2;
          }
          if (props.steps === 3) {
            return imgPrmsForm.mobile.imgS3Mx2;
          }
        }});
      }
    }

    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${props => {
          if (props.steps === 1) {
            return imgPrmsForm.mobile.imgS1Mx3;
          }
          if (props.steps === 2) {
            return imgPrmsForm.mobile.imgS2Mx3;
          }
          if (props.steps === 3) {
            return imgPrmsForm.mobile.imgS3Mx3;
          }
        }});
      }
    }
  }

  ${mq.tablet} {
    padding: 0 32px 32px 32px;
    background-size: 488px 835px;

    background-image: url(${props => {
      if (props.steps === 1) {
        return imgPrmsForm.tablet.imgS1Tx1;
      }
      if (props.steps === 2) {
        return imgPrmsForm.tablet.imgS2Tx1;
      }
      if (props.steps === 3) {
        return imgPrmsForm.tablet.imgS3Tx1;
      }
    }});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${props => {
          if (props.steps === 1) {
            return imgPrmsForm.tablet.imgS1Tx2;
          }
          if (props.steps === 2) {
            return imgPrmsForm.tablet.imgS2Tx2;
          }
          if (props.steps === 3) {
            return imgPrmsForm.tablet.imgS3Tx2;
          }
        }});
      }
    }

    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${props => {
          if (props.steps === 1) {
            return imgPrmsForm.tablet.imgS1Tx3;
          }
          if (props.steps === 2) {
            return imgPrmsForm.tablet.imgS2Tx3;
          }
          if (props.steps === 3) {
            return imgPrmsForm.tablet.imgS3Tx3;
          }
        }});
      }
    }

    ${mq.desktop} {
      background: none;
    }
  }
`;

export const ParamsPageWrapperDesktop = styled.div`
  ${mq.desktop} {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;

    padding: 0 32px 32px 96px;

    background-size: 670px 800px;
    background-repeat: no-repeat;

    background-image: url(${props => {
      if (props.steps === 1) {
        return imgPrmsForm.desktop.imgS1Dx1;
      }
      if (props.steps === 2) {
        return imgPrmsForm.desktop.imgS2Dx1;
      }
      if (props.steps === 3) {
        return imgPrmsForm.desktop.imgS3Dx1;
      }
    }});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${props => {
          if (props.steps === 1) {
            return imgPrmsForm.desktop.imgS1Dx2;
          }
          if (props.steps === 2) {
            return imgPrmsForm.desktop.imgS2Dx2;
          }
          if (props.steps === 3) {
            return imgPrmsForm.desktop.imgS3Dx2;
          }
        }});
      }
    }

    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${props => {
          if (props.steps === 1) {
            return imgPrmsForm.desktop.imgS1Dx3;
          }
          if (props.steps === 2) {
            return imgPrmsForm.desktop.imgS2Dx3;
          }
          if (props.steps === 3) {
            return imgPrmsForm.desktop.imgS3Dx3;
          }
        }});
      }
    }
  }
`;
