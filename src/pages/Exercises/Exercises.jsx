import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

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
import ScrollBar from '../../components/Scrollbar';
import ExercisesBtnBack from '../../components/ExercisesBtnBack/ExercisesBtnBack';
import Loader from '../../components/Lodaer/Loader';

import {
  selectGetFilters,
  selectHasMore,
  selectSearchParams,
  selectItems,
  selectIsLoadingExercises,
} from '../../redux/exercises/selectors';

import {
  selectCurrentTitle,
  selectIsLoading,
} from '../../redux/exerciseFilters/selectors';

import { getMoreExercises } from '../../redux/exercises/operations';

const Exercises = () => {
  const [page, setPage] = useState(1);

  let shouldGetFilters = useSelector(selectGetFilters);
  let items = useSelector(selectItems);
  let currentTitle = useSelector(selectCurrentTitle);
  const isLoadingFilters = useSelector(selectIsLoading);
  const isLoadingExercises = useSelector(selectIsLoadingExercises);
  const dispatch = useDispatch();
  const searchParams = useSelector(selectSearchParams);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    setPage(1);
  }, [searchParams]);

  const onLoadMore = () => {
    if (page === 1) {
      setPage(prevPage => prevPage + 1);
      return;
    }
    const paginationParams = new URLSearchParams({
      page,
      limit: 20,
    }).toString();

    dispatch(getMoreExercises(`${searchParams}&${paginationParams}`));
    setPage(prevPage => prevPage + 1);
  };

  return (
    <main>
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
      {isLoadingFilters ? (
        <Loader size={'60'} />
      ) : shouldGetFilters ? (
        <ExercisesContainer>
          <ExercisesItemList />
        </ExercisesContainer>
      ) : (
        <ExercisesListContainer>
          <BGImg />
          <ScrollBar width={{ dt: '878' }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={onLoadMore}
              hasMore={hasMore && !isLoadingExercises}
              loader={<Loader key={'qwe258'} />}
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
          </ScrollBar>
        </ExercisesListContainer>
      )}
    </main>
  );
};

export default Exercises;
