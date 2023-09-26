import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const Container = styled.div`
  background-color: ${colors.modalBlack};
  border-radius: 12px;
  padding: 48px 24px;
  ${mq.tablet} {
    padding: 48px 32px;
  }
`;

export const InputContainer = styled.div`
  position: relative;

  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${mq.tablet} {
    flex-direction: row;
  }
`;

export const InputTitle = styled.input`
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${colors.orange};
  gap: 10px;
  background-color: inherit;
  color: ${colors.textWhite03};

  ${mq.tablet} {
    width: 244px;
    height: 40px;
  }
`;

export const InputQuantity = styled.input`
  position: relative;
  width: 287px;
  height: 34px;
  padding: 8px 14px;
  border-radius: 12px;
  border: 1px solid ${colors.orange};
  gap: 10px;
  background-color: inherit;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.textWhite03};
    text-align: right;
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
    width: 155px;
    height: 40px;
    margin-top: 0;
  }

  :focus-visible {
	outline: 0;
    border: 2px solid ${colors.orange};
  }

  &:focus + label {
    top: -11px;
  }
`;

export const Label = styled.label`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 13px;
  font-size: 14px;
  padding: 0 5px;
  background-color: ${colors.modalBlack};
  color: ${colors.textWhite03};

  transition: top 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Calories = styled.p`
  font-size: 12px;
  align-items: end;
  color: ${colors.white};
`;

export const TitleCalories = styled.span`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: ${colors.textWhite04};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  ${mq.tablet} {
    margin-top: 64px;
  }
`;

export const AddButton = styled.button`
  display: flex;
  padding: 12px 32px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: ${colors.orange};
  color: ${colors.white};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);
  border: 1px solid ${colors.textWhite03};
  margin-right: 14px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${colors.orangeSecondary};
  }

  ${mq.tablet} {
    margin-right: 16px;
  }

  &:disabled {
    color: ${colors.textWhite06};
    background: ${colors.orangeSecondary};

    cursor: not-allowed;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  background-color: inherit;
  color: ${colors.white};
  border-radius: 12px;
  border: 1px solid ${colors.textWhite03};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(18 / 16);

  ${mq.tablet} {
    padding: 12px 40px;
  }

  &:hover {
    border-color: ${colors.orange};
    transition: border-color 0.3s ease-out;
  }
`;
