import styled from '@emotion/styled';
import { colors, mq } from '../../utils/index';

export const Item = styled.li`
  flex-basis: calc((100% - 70px) / 5);
`;

export const WrapCard = styled.a`
  display: block;
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  background-color: ${colors.background05};
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  z-index: -1;
`;

export const WrapSpan = styled.div`
  position: absolute;
  top: 77px;
  left: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 137px;

  ${mq.tablet} {
  }
`;

export const Name = styled.span`
  color: ${colors.white};
  font-size: 24px;
  font-weight: 400;
  line-height: 1.33;
`;

export const Filter = styled.span`
  color: ${colors.textWhite04};
  font-size: 12px;
  line-height: 1.5;
`;
