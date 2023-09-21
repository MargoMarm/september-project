import styled from '@emotion/styled';

import { imgForHome } from '../../assets/images';
import { mq } from '../../utils';

export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Wrapper = styled.div`
  height: 812px;
  background-image: url(${imgForHome.imgMx1});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 298px 571px;
  padding: 0 20px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${imgForHome.imgMx2});
    }
  }

  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 288dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: url(${imgForHome.imgMx3});
    }
  }

  ${mq.tablet} {
    height: 768px;
    background-image: url(${imgForHome.imgTx1});
    background-size: 437px 893px;
    padding: 0 32px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgForHome.imgTx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${imgForHome.imgTx3});
      }
    }
  }
  ${mq.desktop} {
    height: 0;
    background: none;
    padding: 0 0 0 96px;
  }
`;

export const WrapperDesktop = styled.div`
  ${mq.desktop} {
    position: absolute;
    top: 0;
    right: 0;
    width: 670px;
    height: 800px;
    pointer-events: none;

    background-image: url(${imgForHome.imgDx1});
    background-size: 670px 800px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgForHome.imgDx2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 288dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${imgForHome.imgDx3});
      }
    }
  }
`;
