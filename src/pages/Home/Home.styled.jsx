import styled from '@emotion/styled';

import {imgForHome} from '../../assets/images';
import { colors, mq } from '../../utils';

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
    height: 800px;
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
