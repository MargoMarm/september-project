import ExercisesItemList from '../../components/ExercisesItemList/ExercisesItemList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import Title from '../../components/Title/Title';
import { TitleThumb } from './Exercises.styled';
import bodyParts from '../../data/filters.json';
import { useState, useEffect } from 'react';
import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer'
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';
import products from '../../data/products.json';
import { useSelector, useDispatch } from 'react-redux';
import { selectGetFilters } from '../../redux/exercises/selectors'
import {  useLocation } from 'react-router-dom';
import {setStatusFilter} from '../../redux/exercises/slice'
import { selectItems } from '../../redux/exercises/selectors'

const Exercises = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  let shouldGetFilters = useSelector(selectGetFilters);
  let items = useSelector(selectItems);
 
  // if (location.pathname !== "/exercises") {
  //   dispatch(setStatusFilter(true))
  // }

 
  return (
    <>
      <TitleThumb>
      {shouldGetFilters
          ? <Title
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
          : <Title
          text={'TestText'}
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
        />}
        
        <ExercisesCategories />
      </TitleThumb>
      {shouldGetFilters ? <ExercisesItemList  /> :  <ProductsOrExercisesContainer>
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
      </ProductsOrExercisesContainer> }
      ;
    </>
  );
};

export default Exercises;
