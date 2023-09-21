import styled from '@emotion/styled';
import { colors, mq } from '../../utils';

export const CustomContainer = styled.div`
  overflow: auto;
  margin-top: 22px;
  height: 254px;

  ${mq.tablet} {
    display: none;
  }
`;

export const ContainerForTable = styled.div`
  padding-right: 14px;
  margin-bottom: 40px;
  height: auto;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  height: 64px;

  & > div {
    &:nth-of-type(1) {
      width: 81px;
      margin-right: 16px;
    }
  }

  & > div {
    &:nth-of-type(2) {
      width: 80px;
      margin-right: 16px;
    }
  }

  & > div {
    &:nth-of-type(3) {
      width: 76px;
      margin-right: 8px;

      & > p {
        &::before {
          ${props =>
            props.before &&
            `
            content: '';
            width: 14px;
            height: 14px;
            border-radius: 10px;
            background: #419b09;
            margin-right: 8px;
          `}
        }
      }
    }
  }

  & > div {
    &:nth-of-type(4) {
      & > p {
        padding: 0;
        margin-top: 35px;

        border: none;
      }
    }
  }
`;

export const Cell = styled.div`
  font-size: 12px;
  line-height: 1.5;

  color: ${colors.orange};
`;

export const CellValue = styled.p`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 10px 0 10px 14px;

  font-size: 14px;
  line-height: 1.29;

  border-radius: 12px;
  border: 1px solid ${colors.textWhite03};

  color: ${colors.white};

  &::before {
    ${props =>
      props.before &&
      `
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 10px;
      background: #419b09;
      margin-right: 8px;
    `}
  }
`;
