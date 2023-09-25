import styled from '@emotion/styled';
import { mq } from '../../utils';

export const TextContainer = styled.div`
  
  ${mq.tablet} {
   width: 580px;
   margin-top: 45px;
  }
  ${mq.desktop} {
    margin-top: 100px;
  }
`;
export const MainText = styled.p`
color: rgba(239, 237, 232, 0.30);
margin-bottom: 16px;
font-size: 14px;
line-height: 1.28;
  ${mq.tablet} {
  
  }
  ${mq.desktop} {
  
  }
`;
export const AccentText = styled.span`
color:  #E6533C;

font-size: 14px;

line-height: 1.28; 
  ${mq.tablet} {
    gap: 32px;
  }
  ${mq.desktop} {

  }
`;
