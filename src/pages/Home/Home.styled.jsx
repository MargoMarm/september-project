import styled from '@emotion/styled';

import { colors, mq } from '../../utils';

import imgDesktop from '../../assets/images/home-page_desktop_1x.jpg';
import imgMob from '../../assets/images/home-page_mobile_1x.jpg';
import imgTablet from '../../assets/images/home-page_tablet_1x.jpg';
export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Wrapper = styled.div`
  height: 812px;
  background-image: url(${imgMob});
  background-repeat: no-repeat;
  background-position: right;

  ${mq.tablet} {
    height: 768px;
    background-image: url(${imgTablet});
  }
  ${mq.desktop} {
    height: 800px;
    background-image: url(${imgDesktop});
  }
`;
