import styled from '@emotion/styled';
import { colors, mq } from '../../utils';
import { Form, Field } from 'formik';

export const TextInput = styled(Field)`
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
  &:focus-visible {
    border: 1px solid ${colors.orange};
  }
`;

export const FormContainer = styled(Form)`
  width: 335px;
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 200px;
  right: 16px;
  padding: 0;
  border: none;
  outline: none;
`;

export const Error = styled.div`
  font-size: 12px;
  color: ${colors.textError};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  ${mq.tablet} {
    gap: 20px;
    width: 365px;
  }
  margin-bottom: 28px;
  ${mq.tablet} {
    margin-bottom: 64px;
  }
`;
