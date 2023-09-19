import PropTypes from 'prop-types';
import BtnSubmit from '../BtnSubmit/BtnSubmit';
import {
  ContentWrap,
  Img,
  WellDone,
  Key,
  Value,
  ToDiary,
  Svg,
  DataList,
} from './ProductOrExerciseModal.styled';
import { nanoid } from '@reduxjs/toolkit';

function ProductOrExerciseModal({ modalType, data }) {
  const transformKey = key => {
    if (key === 'yourTime') {
      return 'Your  time: ';
    }
    if (key === 'burnedCalories') {
      return 'Burned calories:  ';
    }
    if (key === 'calories') {
      return 'calories: ';
    }
  };

  const mappedData = data => {
    const keys = Object.keys(data);
    const renderKeys = keys.map(key => {
      return (
        <li key={nanoid()}>
          <Key>
            {transformKey(key)} <Value>{data[key]}</Value>
          </Key>
        </li>
      );
    });
    return renderKeys;
  };

  return (
    <ContentWrap>
      <Img
        src={
          modalType === 'product'
            ? '/src/assets/images/foodIcon.png'
            : '/src/assets/images/thumbUp.png'
        }
        alt="it`s a placeholder image, but it`s avocado too"
      />
      <WellDone>Well Done</WellDone>

      <DataList>{mappedData(data)}</DataList>

      <BtnSubmit title={'Next product'} />

      <ToDiary to={'/dairy'}>
        To the diary
        <Svg fill="">
          <use href="/src/assets/sprite.svg#arrow-right"></use>
        </Svg>
      </ToDiary>
    </ContentWrap>
  );
}

ProductOrExerciseModal.propTypes = {
  modalType: PropTypes.oneOf(['product', 'exercise']),
  data: PropTypes.object.isRequired,
};

export default ProductOrExerciseModal;
