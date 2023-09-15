import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const AuthBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  outline: none;
  background-color: ${colors.orange};
  border-radius: 12px;
  border: none;

  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;
  ${mq.tablet} {
    padding: 16px 60px;
  }
`;
