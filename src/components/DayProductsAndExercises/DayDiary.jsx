import PropTypes from 'prop-types';

import {
  DayDiaryContainer,
  DayDiarySubTitle,
  AddLink,
  DayNoContentText,
} from './DayDiary.styled';

const DayDiary = ({ isDayProducts }) => {
  return (
    <DayDiaryContainer>
      <DayDiarySubTitle>
        {isDayProducts ? 'Products' : 'Exercises'}
      </DayDiarySubTitle>
      <AddLink>Add {isDayProducts ? 'product' : 'exercise'}</AddLink>
      <DayNoContentText>
        Not found {isDayProducts ? 'products' : 'exercises'}
      </DayNoContentText>
    </DayDiaryContainer>
  );
};

DayDiary.propTypes = {
  subTitleText: PropTypes.string,
  addLinkText: PropTypes.string,
  isDayProducts: PropTypes.string,
  text: PropTypes.string,
};

export default DayDiary;
