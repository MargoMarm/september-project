import ExercisesItemList from '../../components/ExercisesItemList/ExercisesItemList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import Title from '../../components/Title/Title';
import {
  TitleThumb,
  ExercisesContainer,
	ExercisesListContainer,
  BGImg
} from './Exercises.styled';

import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';

import { useSelector } from 'react-redux';
import { selectGetFilters } from '../../redux/exercises/selectors';

import { selectCurrentTitle } from '../../redux/exerciseFilters/selectors';
import { selectItems } from '../../redux/exercises/selectors';
import ExercisesBtnBack from '../../components/ExercisesBtnBack/ExercisesBtnBack';
import Scrollbar from '../../components/Scrollbar';

const Exercises = () => {
  let shouldGetFilters = useSelector(selectGetFilters);
  let items = useSelector(selectItems);
  let currentTitle = useSelector(selectCurrentTitle);

  return (
    <>
      <ExercisesContainer>
        {shouldGetFilters ? null : <ExercisesBtnBack />}
        <TitleThumb>
          {shouldGetFilters ? (
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
          ) : (
            <Title
              text={currentTitle}
              margin={{
                top: {
                  desk: 16,
                  tab: 16,
                  mob: 12,
                },
                bt: {
                  tab: 32,
                  mob: 40,
                },
              }}
            />
          )}

          <ExercisesCategories />
        </TitleThumb>
      </ExercisesContainer>
      {shouldGetFilters ? (
        <ExercisesContainer>
          <ExercisesItemList />
        </ExercisesContainer>
      ) : (
				  <ExercisesListContainer>
					  <BGImg/>
          <Scrollbar width={{ dt: '868' }}>
            <ProductsOrExercisesContainer>
              {items.map((item, i) => {
                if (i < 20) {
                  return (
                    <ProductsOrExercisesItem
                      key={item._id}
                      page="exercise"
                      data={item}
                    />
                  );
                }
                return null;
              })}
            </ProductsOrExercisesContainer>
          </Scrollbar>
        </ExercisesListContainer>
      )}
    </>
  );
};

export default Exercises;
