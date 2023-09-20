import styled from '@emotion/styled';
import { mq, colors, button } from '../../utils';

export const Form = styled.form`
  flex-shrink: 0;
  max-width: 704px;
  margin: 18px auto 0;
`;

export const InputGroup = styled.div`
  ${mq.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0 14px;
  }
`;

export const InputSecondGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0 14px;
`;

export const InputThirdGroup = styled(InputSecondGroup)`
  ${mq.tablet} {
    justify-content: flex-start;
    gap: 0 32px;
  }
`;

export const Label = styled.label`
  display: block;
  max-width: 345px;
  width: 100%;
  margin-bottom: 14px;
  font-size: 12px;
  line-height: 1.5;
  color: ${colors.textWhite05};

  & p {
    margin-bottom: 4px;
  }
`;

export const HalfLabel = styled(Label)`
  max-width: 168px;
  width: 50%;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 14px;
  color: ${colors.grey};
  background-color: inherit;
  border: 1px solid ${colors.textWhite03};
  border-radius: 12px;
  transition: border-color 0.3s;
  outline: none;
  &:disabled {
    color: ${colors.textWhite06};
  }

  &:hover,
  &:focus {
    border-color: ${colors.orange};
  }
  &::placeholder {
    color: ${colors.textWhite06};
  }
`;

export const Caption = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 1.5;
  color: ${colors.textWhite05};
`;

export const CheckboxList = styled.div`
  margin: 42px 0 40px;

  ${mq.tablet} {
    margin: 32px 0 38px;
  }

  ${mq.desktop} {
    margin-bottom: 48px;
  }
`;

export const Button = styled.button`
  ${button};

  min-width: 115px;
  padding: 12px;
  color: ${colors.textWhite06};
  background-color: ${colors.orange};
  border-radius: 12px;
  transition:
    color 0.3s,
    background-color 0.3s;

  &:hover,
  &:focus {
    color: ${colors.textWhite08};
    background-color: ${colors.orangeSecondary};
  }
`;
