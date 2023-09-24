import styled from '@emotion/styled';
import { mq } from '../../utils';

import imgHomePage from '../../assets/images/imgHomePage';

export const ExercisesContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  ${mq.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }

  ${mq.desktop} {
    padding-left: 95px;
    padding-right: 95px;
  }
`;

export const TitleThumb = styled.div`
  ${mq.tablet} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const ExercisesListContainer = styled.div`
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

    gap: 28px;

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${imgHomePage.imgDx1});

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
