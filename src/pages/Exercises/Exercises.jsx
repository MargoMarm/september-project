import ExercisesItemList from '../../components/ExercisesItemList/ExercisesItemList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import Title from '../../components/Title/Title';
import { TitleThumb } from './Exercises.styled';
import bodyParts from '../../data/filters.json';

const Exercises = () => {
  return (
    <>
      <TitleThumb>
        <Title
          text={'Exercises'}
          margin={{
            top: {
              desk: 72,
              tab: 72,
              mob: 40,
            },
            bt: {
              tab: 32,
              mob: 40,
            },
          }}
        />
        <ExercisesCategories />
      </TitleThumb>
      <ExercisesItemList bodyParts={bodyParts} />;
    </>
  );
};

export default Exercises;
