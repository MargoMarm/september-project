import ExercisesItemList from '../../components/ExercisesItemList/ExercisesItemList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import Title from '../../components/Title/Title';
import { ExercisesWrapper, TitleThumb } from './Exercises.styled';
import bodyParts from '../../data/filters.json';

const Exercises = () => {
  return (
    <ExercisesWrapper>
      <TitleThumb>
        <Title text={'Exercises'} />
        <ExercisesCategories />
      </TitleThumb>
      <ExercisesItemList bodyParts={bodyParts} />;
    </ExercisesWrapper>
  );
};

export default Exercises;
