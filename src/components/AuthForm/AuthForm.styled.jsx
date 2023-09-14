import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const TextInput = styled.input`
  height: 42px;
  width: 305px;
   ${mq.tablet} {
    height: 48px;
    width: 334px;
  }
  padding-left: 14px;
  padding-right: 14px;
  
  border-radius: 12px;
  border: 1px solid ${colors.textWhite03};
  
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  outline: none;
 
  color: ${colors.textWhite06};
  background-color: transparent;
  &:focus-visible {border:1px solid ${colors.orange}};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  gap: 18px;
  ${mq.tablet} {
    gap: 20px;
    width: 365px;
  }  
`;

export const ShowPasswordBtn = styled.button`
position: absolute;
top: 200px;
right: 16px;
padding: 0;
border: none;
outline:  none;
`;
