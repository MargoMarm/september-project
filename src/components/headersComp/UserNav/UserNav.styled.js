import styled from '@emotion/styled';
import { mq } from '../../../utils';

export const WrapUserNav = styled.div`
  ${mq.smallMobile} {
    display: none;
  }
  ${mq.desktop} {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
  }
`;
export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
`;
export const ButtonWrap = styled.div`
  display: flex;
  margin-left: 30px;
  gap: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  gap: 5px;
`;
export const Span = styled.span`
  color: #efede8;
  font-size: 16px;
  line-height: 24px;

  ${mq.desktop} {
	gap: 8px;
  }
`;
