import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  CategoriesList,
  CategoriesListItem,
  CategoriesLink,
} from './ExercisesCategories.styled'; // Імпорт стилів

const ExercisesCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Body parts');
  // const [subcategories, setSubcategories] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  console.log(selectedCategory);

  useEffect(() => {
    const fetchSubcategories = async () => {
      // setIsFetching(true);
      try {
        const response = await axios.get(
          `/api/filter?filter=${selectedCategory}`,
        );

        console.log(response);
        // setSubcategories(data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      } finally {
        // setIsFetching(false);
      }
    };
    fetchSubcategories();
  }, [selectedCategory]);

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
