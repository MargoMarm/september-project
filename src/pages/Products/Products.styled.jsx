import styled from '@emotion/styled';
import { mq } from '../../utils';

import imgProducts from '../../assets/images/imgProduct';

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 80px 20px;
  gap: 40px;
  height: 100vh;

  ${mq.tablet} {
    gap: 32px;
    padding: 72px 32px 48px 32px;
  }

  ${mq.desktop} {
    padding: 68px 81px 81px 96px;

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${imgProducts.imgDx1});

    ${
      '' /* @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${imgProducts.imgDx2});
      }

      
    } */
    }
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

