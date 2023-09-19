import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from '../../redux/exerciseFilters/selectors'
import { fetchFilters } from '../../redux/exerciseFilters/operations';

import {
  CategoriesList,
  CategoriesListItem,
  CategoriesLink,
} from './ExercisesCategories.styled'; // Імпорт стилів

const ExercisesCategories = () => {
  const dispatch = useDispatch();
  let filters = useSelector(selectFilters);


  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  useEffect(() => {
    dispatch(fetchFilters(selectedCategory));
  }, [dispatch, selectedCategory]);
  console.log("FILTERS", filters);
  console.log(selectedCategory);

  

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
