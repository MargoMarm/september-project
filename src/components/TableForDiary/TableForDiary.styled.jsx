import styled from '@emotion/styled';

import { colors, mq } from '../../utils';

export const DeleteBtn = styled.button`
  padding: 0;
  margin: 0;
  background-color: inherit;
  border: none;
  display: flex;

  transition: scale 250ms ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;

export const DeleteIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const HeaderCont = styled.div`
  display: inline-flex;
  margin: 16px 0 8px 0;

  ${mq.desktop} {
    margin-left: 16px;
  }
`;

export const ColumnNameProducts = styled.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${colors.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 188px;

    ${mq.desktop} {
      margin-right: 196px;
    }
  }

  :nth-of-type(2) {
    margin-right: 87px;

    ${mq.desktop} {
      margin-right: 125px;
    }
  }

  :nth-of-type(3) {
    margin-right: 54px;

    ${mq.desktop} {
      margin-right: 69px;
    }
  }

  :nth-of-type(4) {
    margin-right: 60px;

    ${mq.desktop} {
      margin-right: 75px;
    }
  }

  :nth-of-type(5) {
    margin-right: 12px;
  }
`;

export const ColumnNameExercises = styled.p`
  font-size: 12px;
  line-height: 1.5;

  color: ${colors.orangeSecondary};

  :nth-of-type(1) {
    margin-right: 45px;

    ${mq.desktop} {
      margin-right: 70px;
    }
  }

  :nth-of-type(2) {
    margin-right: 82px;

    ${mq.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(3) {
    margin-right: 104px;

    ${mq.desktop} {
      margin-right: 108px;
    }
  }

  :nth-of-type(4) {
    margin-right: 58px;

    ${mq.desktop} {
      margin-right: 80px;
    }
  }

  :nth-of-type(5)::before {
    content: 'Burned calor...';
    margin-right: 14px;

    ${mq.desktop} {
      content: 'Burned Calories';
      margin-right: 15px;
    }
  }
`;

export const BASELINE_THEME_EXERCISES = {
  Table: `
    --data-table-library_grid-template-columns:  98px 140px 136px 92px 86px 84px 28px;
    height: 136px;

    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.textWhite01};
      border-radius: 12px;
    };

    ${mq.desktop} {
      --data-table-library_grid-template-columns:  123px 165px 139px 114px 99px 102px 29px;
      margin-left: 16px;
    }
  `,
  Cell: `
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${colors.textWhite03};

    :nth-of-type(6) {
      margin-right: 12px;
    }

    :nth-of-type(7) {
      margin-right: 0;
      border: none;
      padding: 0
    }  
  `,
};

export const BASELINE_THEME = {
  Table: `
    --data-table-library_grid-template-columns:  212px 136px 98px 98px 92px 28px;
    height: 136px; 
    
    ::-webkit-scrollbar {
      width: 6px; 
      height: 90px;
    }; 
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.textWhite01};
      border-radius: 12px;
    };

    ${mq.desktop} {
      --data-table-library_grid-template-columns:  220px 174px 113px 113px 122px 29px;
      margin-left: 16px;
    }
    `,
  Body: ``,
  Header: `display: none;`,
  BaseRow: ``,
  Row: `
    font-size: 16px;
    background-color: inherit;
    color: ${colors.white};
  `,
  HeaderRow: `
    background-color: inherit;`,
  BaseCell: ``,
  HeaderCell: `
    color: ${colors.orangeSecondary};
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 1.5;
  `,
  Cell: `
    height: 40px;
    padding: 8px 10px 8px 14px;
    margin: 0 8px 8px 0;
    border-radius: 12px;
    border: 1px solid ${colors.textWhite03};

    :nth-of-type(5) {
      margin-right: 12px;
    }

    :nth-of-type(6) {
      margin-right: 0;
      border: none;
      padding: 0
    }  

    :nth-of-type(5)::before {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 10px;
      background: #419B09;
      margin-right: 8px;
    }
  `,
};
