import { useDispatch } from 'react-redux';
import { changeStatusFilter } from '../../redux/exercises/slice';
import { ButtonBack, SvgArrow } from './ExercisesBtnBack.styled'; // Імпорт стилів
import sprite from '../../assets/sprite.svg';

const ExercisesBtnBack = () => {
  const dispatch = useDispatch();

  const handleBtnBack = () => {
    dispatch(changeStatusFilter(true));
  };

  return (
    <ButtonBack type="button" onClick={handleBtnBack}>
      <SvgArrow>
        <use href={sprite + `#icon-arrow-left`}></use>
      </SvgArrow>
      Back
    </ButtonBack>
  );
};

export default ExercisesBtnBack;
