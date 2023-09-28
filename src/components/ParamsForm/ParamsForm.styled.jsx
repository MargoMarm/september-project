import styled from '@emotion/styled';
import { Field } from 'formik';
import { colors, mq } from '../../utils';

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin: -7px;
  margin-top: 50px;
  margin-bottom: 30px;

  ${mq.tablet} {
    justify-content: flex-start;
    width: 527px;
    margin-top: 54px;
    margin-bottom: 32px;
  }
`;

export const FormikField = styled(Field)`
	  width: 275px;

  ${mq.mobile} {
    width: 155px;
  }
  height: 52px;
  padding: 14px 0 14px 14px;
  margin: 7px;

  font-size: 14px;
  line-height: 128.571%;

  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  outline: none;

  background-color: transparent;
  color: ${colors.textWhite06};

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &[data-touch=true]{
    border-color: ${colors.textSuccess};
  }

  &::placeholder {
    color: ${colors.textWhite06};
  }

  &:focus-within {
    border-color: ${colors.orange};
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* &[type='number'] {
    -moz-appearance: textfield;
  } */

  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const FormRadioBtnGroupWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  padding-left: 2px;

  ${mq.tablet} {
    margin-bottom: 32px;
  }
`;

export const BtnsAndBlock = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 159px;

  ${mq.tablet} {
    margin-bottom: 283px;
  }
  ${mq.desktop} {
    margin-bottom: 48px;
  }
`;

export const BtnSubmit = styled.button`
  margin-top: 28px;
  margin-right: 16px;
  padding: 12px 40px;

  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;

  color: ${colors.white};
  background: ${colors.orange};

  border: none;
  border-radius: 12px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(0.99);
  }

  &:focus {
    transform: scale(0.99);
  }

  ${mq.tablet} {
    margin-top: 64px;
    padding: 16px 75px;

    font-size: 20px;
    line-height: 120%;
  }
`;

export const CalendarWrapper = styled.div`
  position: relative;
  width: 155px;
  height: 52px;
  margin: 7px;
`;

export const CalendarPlaceholder = styled.p`
  position: absolute;
  pointer-events: none;
  color: ${colors.textWhite06};
  top: 25%;
  left: 10%;

  font-size: 14px;
  line-height: 128.571%;

  ${mq.tablet} {
    font-size: 16px;
    line-height: 150%;
  }
`;

export const RADIO_STYLE_OPTIONS = {
  color: 'grey',
  '&.Mui-checked': {
    color: colors.orangeSecondary,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 18,
  },
};

export const RADIO_TITLE_STYLE = {
  color: `${colors.white}`,
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '128.571%',
};

export const ErrorMessage = styled.p`
  width: 155px;
  font-size: 11px;
  padding-left: ${props => (props.padding ? 10 : 0)}px;
  color: ${colors.red};
`;
