import styled from '@emotion/styled';
import color from '../../utils/colorVeriables';
import { NavLink } from 'react-router-dom';

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 190px;
`;

export const Img = styled.img`
  width: 120px;
  height: 97px;
  margin: 0 auto;
  margin-bottom: 3px;
`;

export const WellDone = styled.strong`
  margin: 0 auto;
  margin-bottom: 16px;

  color: ${color.white};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: ${32 / 24};
`;

export const DataList = styled.ul`
 margin: 0 auto;
  margin-bottom: 24px;
`;

export const Key = styled.p`
 

  color: ${color.textWhite03};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${18 / 14};
  display: flex;
  align-items: center;
`;

export const Value = styled.span`
  color: ${color.orange};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: ${14 / 18};
`;

export const ToDiary = styled(NavLink)`
  margin: 0 auto;
  margin-top: 16px;

  display: flex;
  align-content: center;
  justify-content: baseline;

  gap: 8px;

  color: rgba(239, 237, 232, 0.3);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const Svg = styled.svg`
  fill: currentColor;
  width: 16px;
  height: 16px;
`;
