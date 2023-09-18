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
  margin-top: ${margin => {
    return margin.top?.mob || 0;
  }};
  margin-bottom: : ${margin => {
    return margin.bot?.mob || 0;
  }};

  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;

  ${mq.tablet} {
    padding: 16px 60px;
    font-size: ${fontSize => fontSize};
    line-height: 120%;
    margin-top: ${margin => margin.top?.tab || 0};
    margin-bottom: : ${margin => margin.bot?.tab || 0} ;
  }
`;
