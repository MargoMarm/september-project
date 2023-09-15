import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const StyledTitle = styled.h2`
  color: ${colors.white};

  font-family: Roboto;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0.38px;

  ${mq.mobile} {
    width: 335px;
  }

  ${mq.tablet} {
    width: 598px;

    font-size: 70px;

    line-height: 1.11;
    letter-spacing: 0.7px;
  }
`;

// const commonStyles = {
//   color: colors.white,
//   fontFamily: 'Roboto',
//   fontWeight: 500,
//   wordWrap: 'break-word',
// };

// export const StyledTitle = styled.h2`
//   h2 {
//     ${commonStyles}

//     ${mq.mobile} {
//       font-size: 24px;
//       line-height: 116.667%;
//     }

//     ${mq.tablet} {
//       font-size: 32px;
//       line-height: 137.5%;
//     }
//   }
// `;
