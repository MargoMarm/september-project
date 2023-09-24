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

function ProductOrExerciseModal({ modalType, data, btnNext }) {
  const transformKey = key => {
    if (key === 'time') {
      return 'Your  time:   ';
    }
    if (key === 'burnedCalories') {
      return 'Burned calories:    ';
    }
    if (key === 'calories') {
      return 'Calories: ';
    }
  };

  const mappedData = data => {
    const keys = Object.keys(data);
    const renderKeys = keys.map(key => {
      console.log("KEY",key);
      return (
        <li key={nanoid()}>
          <Key>
          {`${transformKey(key)} `}
           <Value>{key === "time" && `${data[key]} seconds` } {key === "burnedCalories" && `${data[key]}`} {key === "calories" && `${data[key]}`} </Value>
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

      <BtnSubmit title={'Next product'} btnNext={btnNext} />

      <ToDiary to={'/diary'}>
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
  btnNext: PropTypes.func,
};

export default ProductOrExerciseModal;
