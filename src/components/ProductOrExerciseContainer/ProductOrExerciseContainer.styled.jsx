import styled from '@emotion/styled';
import { mq } from '../../utils';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  height: 100vh;
  width: 100%;

  margin-top: ${props => props.marginTop};
  ${mq.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 16px;
  }
  ${mq.desktop} {
    width: 868px;
  }

`;
