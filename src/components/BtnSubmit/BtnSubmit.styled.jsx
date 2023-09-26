import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const ButtonSubmit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 40px;
  outline: none;
  background-color: ${colors.orange};
  border-radius: 12px;
  border: none;
  margin-top: ${({ margin }) => {
    return margin?.top.mob || 0;
  }};
  margin-bottom: ${({ margin }) => {
    return margin?.bot.mob || 0;
  }};

  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;
  transition: background 0.3s ease-out;

  ${mq.tablet} {
    padding: 14px 32px;
    line-height: 120%;
    margin-top: ${({ margin }) => margin?.top.tab || 0};
    margin-bottom: ${({ margin }) => margin?.bot.tab || 0};
  }

  &:hover,
  &:focus {
    background: ${colors.orangeSecondary};
  }
`;
