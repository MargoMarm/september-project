import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const Label = styled.label`
  position: relative;

  background-color: inherit;
  border: none;

  cursor: url('./assets/cursor-pointer.png'), pointer;
  &:hover svg,
  &:hover input {
    stroke: ${colors.orange};
    color: ${colors.orange};
  }

  &:focus-visible {
    border: none;
  }

  &:focus {
    border: none;
  }
`;

export const Input = styled.input`
  width: 125px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;

  cursor: url('./assets/cursor-pointer.png'), pointer;
  color: ${colors.white};
  border: none;
  background-color: inherit;

  transition: color 0.3s;

  &:focus {
    color: ${colors.orange};
  }

  &:focus-visible {
    outline: none;
  }

  &:focus + svg {
    stroke: ${colors.orange};
  }

  ${mq.tablet} {
    width: 161px;

    font-size: 24px;
    line-height: 1.33;
  }

  ${mq.desktop} {
  }
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: -8px;
  top: 46%;

  stroke: ${colors.grey};

  transform: translate(-50%, -50%);
  transition: stroke 0.3s;

  ${mq.tablet} {
    width: 24px;
    height: 24px;
    right: -14px;
    top: 40%;
  }
`;
