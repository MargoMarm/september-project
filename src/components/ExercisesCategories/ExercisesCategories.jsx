import { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';

import { fetchFilters } from '../../redux/exerciseFilters/operations';

import {
  CategoriesList,
  CategoriesListItem,
  CategoriesLink,
} from './ExercisesCategories.styled'; // Імпорт стилів

const ExercisesCategories = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('Body parts');

  
  useEffect(() => {
    dispatch(fetchFilters(selectedCategory));
  }, [dispatch, selectedCategory]);


  

  const handleCategoryChange = event => {
    const textContent = event.target.childNodes[0].textContent;
    console.log(textContent);

    setSelectedCategory(textContent);
  };

  return (
    <>
      <CategoriesList>
        <CategoriesListItem>
          <CategoriesLink type="button" onClick={handleCategoryChange}>
            Body parts
          </CategoriesLink>
        </CategoriesListItem>
        <CategoriesListItem>
          <CategoriesLink type="button" onClick={handleCategoryChange}>
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
