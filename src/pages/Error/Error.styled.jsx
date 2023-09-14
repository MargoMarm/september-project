import styled from '@emotion/styled';

import { colors, mq } from '../../utils';

export const Container = styled.div`
  display: flex;

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
  background-color: ${colors.orange};

  ${mq.mobile} {
    width: 240px;
  }

  ${mq.tablet} {
  }

  ${mq.desktop} {
  }
`;

export const Img = styled.div`
  background-color: black;
  height: 100vh;

  ${mq.mobile} {
    width: 135px;
  }

  ${mq.tablet} {
  }

  ${mq.desktop} {
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-family: Roboto;
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 1 
  letter-spacing: 0.66px;


	${mq.mobile}{
	
	}


	  ${mq.tablet} {
  }

		  ${mq.desktop} {
  }
`;

export const Text = styled.p`
  color: ${colors.white};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  ${mq.mobile} {
  }

  ${mq.tablet} {
  }

  ${mq.desktop} {
  }
`;

export const Button = styled.button`
  padding: 12px 40px;

  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  color: ${colors.white};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.12;

  ${mq.mobile} {
  }

  ${mq.tablet} {
  }

  ${mq.desktop} {
  }
`;
