import styled from '@emotion/styled';
import { colors, mq } from '../../utils';
import { Form, Field } from 'formik';

export const FormContainer = styled(Form)`
  margin-top: 28px;

  ${mq.tablet} {
    margin-top: 32px;
    width: 364px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-bottom: 32px;

  ${mq.mobile} {
    gap: 33px;
    margin-bottom: 34px;
  }

  ${mq.tablet} {
    gap: 34px;
    margin-bottom: 64px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TextInput = styled(Field)`
  height: 42px;
  width: 100%;
  ${mq.tablet} {
    height: 48px;
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

  &[data-touch=true]{
    border-color: ${colors.textSuccess};
  }
`;

export const Warning = styled.div`
  position: absolute;
  ${mq.smallMobile} {
    bottom: -28px;
  }

  ${mq.Mobile} {
    bottom: -29px;
  }

  ${mq.tablet} {
    bottom: -30px;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: ${colors.textError};
`;
