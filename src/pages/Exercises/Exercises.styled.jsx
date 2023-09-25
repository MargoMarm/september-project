import styled from '@emotion/styled';
import { mq } from '../../utils';

import imgDx2 from '../../assets/images/exercises_desk_2x.jpeg';

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
  padding: 40px 20px 80px 20px;
  position: relative;


  ${mq.tablet} {
    padding: 72px 32px 48px 32px;
  }

  ${mq.desktop} {
    padding: 68px 81px 81px 96px;
  }
`;

export const BGImg = styled.div`
  ${mq.desktop} {
    position: absolute;
    top: -117px;
    right: 0;
    z-index: -1;
    display: block;

    width: 428px;
    height: 716px;
    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: 428px 716px;
    background-image: url(${imgDx2});
  }
`;