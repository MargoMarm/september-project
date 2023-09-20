import { useState, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import { fetchFilters } from '../../redux/exerciseFilters/operations';
import {setStatusFilter} from '../../redux/exerciseFilters/slice'
import { selectFilter } from '../../redux/exerciseFilters/selectors'

import {
  CategoriesList,
  CategoriesListItem,
  CategoriesLink,
} from './ExercisesCategories.styled'; // Імпорт стилів

const ExercisesCategories = () => {
  const [isActive, setIsActive] = useState(false);
  let filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  useEffect(() => {
   setIsActive(!isActive)
  }, [filter]);
  
  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);


  

  const handleCategoryChange = event => {
    dispatch(setStatusFilter(event.target.childNodes[0].textContent));
  };

  return (
    <>
      <CategoriesList>
        <CategoriesListItem>
          <CategoriesLink type="button"  onClick={handleCategoryChange}>
            Body parts
          </CategoriesLink>
        </CategoriesListItem>
        <CategoriesListItem>
          <CategoriesLink type="button"  onClick={handleCategoryChange}>
            Muscles
          </CategoriesLink>
        </CategoriesListItem>
        <CategoriesListItem>
          <CategoriesLink type="button" onClick={handleCategoryChange}>
            Equipment
          </CategoriesLink>
        </CategoriesListItem>
      </CategoriesList>
    </>
  );
};

export default ExercisesCategories;
