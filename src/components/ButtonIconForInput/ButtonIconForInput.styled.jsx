import styled from '@emotion/styled';
import { colors } from '../../utils';

export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: ${({ right }) => right || '0'};
  transform: translateY(-50%);
  padding: 8px;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${colors.white};
  transition:
    scale 200ms cubic-bezier(0.4, 0, 0.2, 1),
    color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${colors.orange};
    scale: 1.15;
  }
`;
