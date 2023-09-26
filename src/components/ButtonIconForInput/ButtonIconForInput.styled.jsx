import styled from '@emotion/styled';
import { colors } from '../../utils';

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ right }) => right || '0'};
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  padding: 0;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${colors.white};

  &:hover {
    color: ${colors.orange};
  }
`;
