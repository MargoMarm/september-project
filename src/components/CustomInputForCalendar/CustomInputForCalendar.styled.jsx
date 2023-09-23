import styled from '@emotion/styled';
import { colors } from '../../utils';

export const Label = styled.label`
  position: relative;

  background-color: inherit;
  border: none;

  cursor: pointer;

  &:hover svg,
  &:hover input {
    stroke: ${colors.orange};
    color: ${colors.orange};
  }

  &:focus-visible {
    border: none;
  }
`;

export const Input = styled.input`
  width: 161px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;

  cursor: pointer;

  color: ${colors.white};
  border: none;
  background-color: inherit;

  transition: color 0.3s;

  &:focus {
    color: ${colors.orange};
  }

  &:focus-visible {
    border: none;
  }

  &:focus + svg {
    stroke: ${colors.orange};
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  position: absolute;
  right: -14px;
  top: 40%;

  stroke: ${colors.grey};

  transform: translate(-50%, -50%);
  transition: stroke 0.3s;
`;
