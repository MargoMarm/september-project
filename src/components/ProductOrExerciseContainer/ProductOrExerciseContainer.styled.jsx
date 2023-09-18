import styled from '@emotion/styled';
import { mq } from '../../utils';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  margin-top: ${props => props.marginTop};
  ${mq.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 16px;
    column-gap: 32px;
    margin-top: 32px;
  }
  ${mq.desktop} {
    width: 858px;
  }
`;
