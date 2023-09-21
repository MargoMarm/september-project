import ExercisesItemList from '../../components/ExercisesItemList/ExercisesItemList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import Title from '../../components/Title/Title';
import { TitleThumb } from './Exercises.styled';
// import bodyParts from '../../data/filters.json';
// import { useState, useEffect } from 'react';
import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
// import products from '../../data/products.json';
import { useSelector } from 'react-redux';
import { selectGetFilters } from '../../redux/exercises/selectors';
// import {  useLocation } from 'react-router-dom';
import { selectCurrentTitle } from '../../redux/exerciseFilters/selectors';
import { selectItems } from '../../redux/exercises/selectors';
import ExercisesBtnBack from '../../components/ExercisesBtnBack/ExercisesBtnBack';
import Scrollbar from '../../components/Scrollbar';

const Exercises = () => {
  // const dispatch = useDispatch();
  // const location = useLocation();
  let shouldGetFilters = useSelector(selectGetFilters);
  let items = useSelector(selectItems);
  let currentTitle = useSelector(selectCurrentTitle);

  console.log(currentTitle);

  return (
    <>
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
      {shouldGetFilters ? (
        <ExercisesItemList />
      ) : (
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
      )}
      ;
    </>
  );
};

export default Exercises;
