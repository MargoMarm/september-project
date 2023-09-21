import { useDispatch } from 'react-redux';
import { changeStatusFilter } from '../../redux/exercises/slice';
import { ButtonBack, SvgArrow } from './ExercisesBtnBack.styled'; // Імпорт стилів

const ExercisesBtnBack = () => {
  const dispatch = useDispatch();

  const handleBtnBack = () => {
    dispatch(changeStatusFilter(true));
  };

  return (
    <ButtonBack type="button" onClick={handleBtnBack}>
      <SvgArrow>
        <use href="/src/assets/sprite.svg#icon-arrow-left"></use>
      </SvgArrow>
      Back
    </ButtonBack>
  );
};

export default ExercisesBtnBack;
