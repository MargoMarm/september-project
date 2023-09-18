import styled from '@emotion/styled';
import { colors, button } from '../../utils';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(22, 22, 22, 0.5);
`;

export const Modalka = styled.div`
  border: 1px solid var(--modal-border);
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  min-width: 300px;
  border-radius: 8px;
  background-color: var(--bg-modal);
  z-index: 1;
`;

export const ButtonExit = styled.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  ${button}
`;

export const Svg = styled.svg`
  fill: ${colors.grey};
  width: 24px;
  height: 24px;
`;
