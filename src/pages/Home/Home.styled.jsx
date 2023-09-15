import styled from '@emotion/styled';

import { colors, mq } from '../../utils';

import img from '../../assets/images/home-page_desktop_1x.jpg';

export const LinkList = styled.ul`
display: flex;
gap: 20px;
`

export const Wrapper = styled.div`
height: 800px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: right ;
`;