import styled from '@emotion/styled';
import imgDx2 from '../../assets/images/exercises_desk_2x.jpeg';
import { colors, mq } from '../../utils';

export const Container = styled.div`
  display: flex;
  position: relative;
  ${mq.mobile} {
    width: 375px;
  }

  ${mq.tablet} {
    width: 768px;
  }

  ${mq.desktop} {
    width: 1440px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;

  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: ${colors.orange};

  ${mq.mobile} {
    width: 240px;
  }

  ${mq.tablet} {
    width: 420px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    height: 100%;
  }

  ${mq.desktop} {
    width: 670px;
    padding-left: 96px;
    padding-right: 96px;
    padding-bottom: 96px;
    height: 100vh;
  }
`;

export const Title = styled.h1`
  margin-bottom: 14px;

  color: ${colors.white};
  font-family: Roboto;
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.66px;

  ${mq.mobile} {
  }

  ${mq.tablet} {
    font-size: 160px;
    margin-bottom: 28px;
  }
`;

export const Text = styled.p`
  margin-bottom: 28px;

  color: ${colors.white};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  ${mq.mobile} {
    width: 200px;
  }

  ${mq.tablet} {
    width: 356px;
    font-size: 16px;
  }

  ${mq.desktop} {
    width: 447px;
  }
`;

export const BGImg = styled.div`
  display: none;
  ${mq.mobile} {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    display: block;

    width: 135px;
    height: 100vh;
    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 446px auto;
    background-image: url(${imgDx2});
  }

  ${mq.tablet} {
    width: 348px;
    background-size: cover;
    height: 100%;
  }

  ${mq.desktop} {
    width: 670px;
    height: 100vh;
  }
`;

export const WrapLogo = styled.div`
  margin-top: 24px;
  margin-bottom: 125px;
`;

export const Logo = styled.svg`
  width: 44px;
  height: 17px;
  margin-right: 8px;
`;

export const LogoText = styled.svg`
  width: 100px;
  height: 17px;
`;
