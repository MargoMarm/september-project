import styled from '@emotion/styled';
import { mq } from '../../utils';

import imgProducts from '../../assets/images/imgProduct';

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;

  ${mq.tablet} {
    gap: 32px;
    padding: 72px 32px 48px 32px;
  }
  ${mq.desktop} {
    padding: 68px 81px 81px 96px;
    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
      url(${imgProducts.imgDx1});

    background-repeat: no-repeat;
    background-position: 100% 0;

    gap: 28px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  ${mq.tablet} {
    gap: 32px;
  }
  ${mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
