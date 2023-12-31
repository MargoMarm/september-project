import styled from '@emotion/styled';
import { colors } from '../../utils';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimerTitle = styled.div`
  margin-bottom: 4px;
  font-size: 10px;
  line-height: 140%;
  color: ${colors.textWhite04};
`;

export const PauseButton = styled.button`
  margin-bottom: 8px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;

  &:hover svg {
    scale: 1.15;
  }

`;

export const Svg = styled.svg`
  width: 32px;
  height: 32px;
  fill: ${colors.orange};
  stroke: ${colors.white};

  scale: 1;

  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BurntCaloryLabel = styled.div`
  font-size: 14px;
  line-height: 128%;
  color: ${colors.textWhite03};
`;

export const BurntCaloryInfo = styled.span`
  margin-left: 8px;
  color: ${colors.orange};
`;
