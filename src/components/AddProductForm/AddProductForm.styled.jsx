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

  ${mq.tablet} {
    width: 155px;
    height: 40px;
    margin-top: 0;
  }
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
  transition: background 0.3s ease-out;
  margin-right: 14px;

  &:hover {
    background: #ef8964;
  }

  ${mq.tablet} {
    margin-right: 16px;
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
`;
