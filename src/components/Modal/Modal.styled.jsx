import styled from '@emotion/styled';
import { colors, button, mq } from '../../utils';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.backdrop};
`;

export const ModalWrap = styled.div`
  border: 1px solid ${colors.textWhite02};
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 335px;
  padding: 48px 20px;
  border-radius: 8px;
  background-color: ${colors.modalBlack};
  z-index: 1;

  ${mq.tablet} {
    width: ${props => props.width}px;
    padding: 48px 32px;
  }
`;

export const ButtonExit = styled.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  right: 14px;
  ${button}

  &:hover svg {
    stroke: ${colors.orange};
    scale: 1.1;
  }
  &:focus svg {
    stroke: ${colors.orange};
    scale: 1.1;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${colors.textWhite04};
  scale: 1;

  transition:
    scale 250ms ease-in-out,
    stroke 250ms ease-in-out;
`;
