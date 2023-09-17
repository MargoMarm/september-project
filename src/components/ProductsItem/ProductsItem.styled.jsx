import styled from '@emotion/styled';

import { colors, mq } from '../../utils';

export const Item = styled.li`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: auto;
  padding: 16px;
  align-items: flex-start;

  font-size: 14px;
  line-heigth: 1.29;

  border-radius: 12px;
  border: 1px solid ${colors.textWhite02};
  background: ${colors.textWhite005};

  ${mq.mobile} {
    width: 335px;
  }

  ${mq.tablet} {
    width: 335px;
    align-items: center;
  }

  ${mq.desktop} {
    width: 405px;
  }
`;

export const SubDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const TextDiet = styled.p`
  display: inline-flex;
  width: auto;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  padding: 0 7.5px;

  font-size: 12px;
  font-weight: 700;

  background-color: ${colors.textWhite005};
  border-radius: 4px;
  color: #fff;
`;

export const TextRecommended = styled.p`
  display: flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${colors.white};

  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 10px;
    background: #419b09;
    margin-right: 8px;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;

  line-height: 1.29;

  color: inherit;
  background-color: transparent;
  cursor: pointer;

  color: ${colors.orange};

  ${mq.tablet} {
    font-size: 16px;
  }
`;

export const ArrowRight = styled.svg`
  width: 16px;
  height: 16px;
  margin-left: 8px;

  ${mq.tablet} {
    width: 20px;
    height: 20px;
  }
`;

export const NameProduct = styled.p`
  display: inline-flex;
  margin-top: 30px;
  align-items: center;

  font-size: 20px;
  line-height: 1.2;

  color: ${colors.white};

  ${mq.tablet} {
    font-size: 24px;
    line-height: 1.33;
    margin-top: 21px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  margin-right: 16px;

  background-color: #efa082;
`;

export const RunningMan = styled.svg`
  width: 16px;
  height: 16x;
`;

export const SubTypeDiv = styled.div`
  display: inline-block;
  align-items: center;
  margin-top: 8px;

  ${mq.tablet} {
    margin-top: 12px;
  }
`;

export const SubType = styled.p`
  display: inline-flex;
  margin-right: 16px;

  font-size: 12px;
  line-height: 1.5;

  color: ${colors.textWhite04};

  &:last-child {
    margin-right: 0;
  }
`;

export const SubTypeValue = styled.p`
  margin-left: 4px;

  color: ${colors.white};
`;
