import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';
import ExercisesItemList from '../../components/ExercisesItemList/ExercisesItemList';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import Title from '../../components/Title/Title';
import {
  TitleThumb,
  ExercisesContainer,
  ExercisesListContainer,
  BGImg,
} from './Exercises.styled';

import ProductsOrExercisesContainer from '../../components/ProductOrExerciseContainer/ProductOrExerciseContainer';
import ProductsOrExercisesItem from '../../components/ProductsOrExercisesItem/ProductsOrExercisesItem';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectGetFilters,
  selectHasMore,
  selectSearchParams,
} from '../../redux/exercises/selectors';

import {
  selectCurrentTitle,
  selectIsLoading,
} from '../../redux/exerciseFilters/selectors';
import { selectIsLoadingExercises } from '../../redux/exercises/selectors';
import { selectItems } from '../../redux/exercises/selectors';

import ExercisesBtnBack from '../../components/ExercisesBtnBack/ExercisesBtnBack';
import Scrollbar from '../../components/Scrollbar';
import Loader from '../../components/Lodaer/Loader';
import { getMoreExercises } from '../../redux/exercises/operations';

const Exercises = () => {
  const [page, setPage] = useState(1);

  let shouldGetFilters = useSelector(selectGetFilters);
  let items = useSelector(selectItems);
  let currentTitle = useSelector(selectCurrentTitle);
  // const isLoadingFilters = useSelector(selectIsLoading);
  const isLoadingExercises = useSelector(selectIsLoadingExercises);
  const dispatch = useDispatch();
  const searchParams = useSelector(selectSearchParams);
  const hasMore = useSelector(selectHasMore);

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
          <BGImg />

          <Scrollbar width={{ dt: '868' }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={() => {
                if (page === 1) {
                  console.log('page ');
                  setPage(prevPage => prevPage + 1);
                  return;
                }
                console.log('page 1');

                const paginationParams = new URLSearchParams({
                  page,
                  limit: 20,
                }).toString();

                dispatch(
                  getMoreExercises(`${searchParams}&${paginationParams}`),
                );
                setPage(prevPage => prevPage + 1);
              }}
              hasMore={hasMore && !isLoadingExercises}
              loader={<Loader key={123} />}
              useWindow={false}
            >
              <ProductsOrExercisesContainer>
                {items.map(item => {
                  return (
                    <ProductsOrExercisesItem
                      key={item._id}
                      page="exercise"
                      data={item}
                    />
                  );
                })}
              </ProductsOrExercisesContainer>
            </InfiniteScroll>
          </Scrollbar>
        </ExercisesListContainer>
      )}
    </>
  );
};

export default Exercises;
