import ExercisesItemList from '../../components/ExercisesItemList/ExercisesItemList';
import bodyParts from '../../data/filters.json';

const Exercises = () => {
  return <ExercisesItemList bodyParts={bodyParts} />;
};

export default Exercises;
