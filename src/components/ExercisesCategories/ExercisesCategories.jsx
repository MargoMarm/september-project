// import React, { useState, useEffect } from 'react';
import {
  CategoriesList,
  CategoriesListItem,
  CategoriesLink,
} from './ExercisesCategories.styled'; // Імпорт стилів

const ExercisesCategories = () => {
  // const [selectedCategory, setSelectedCategory] = useState('Body parts');
  // const [subcategories, setSubcategories] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   Сюди вставте логіку для відправлення запиту на сервер
  //   і отримання списку підкатегорій на основі обраної категорії (selectedCategory)
  //   Приклад:
  //   const fetchSubcategories = async () => {
  //     setIsFetching(true);
  //     try {
  //       const response = await fetch(`/api/categories/${selectedCategory}/subcategories`);
  //       const data = await response.json();
  //       setSubcategories(data);
  //     } catch (error) {
  //       console.error('Error fetching subcategories:', error);
  //     } finally {
  //       setIsFetching(false);
  //     }
  //   };
  //   fetchSubcategories();
  // }, [selectedCategory]);

  // const handleCategoryChange = category => {
  //   setSelectedCategory(category);
  // };

  return (
    <>
      <CategoriesList>
        <CategoriesListItem>
          <CategoriesLink to="bodyparts">Body parts</CategoriesLink>
        </CategoriesListItem>
        <CategoriesListItem>
          <CategoriesLink to="muscles">Muscles</CategoriesLink>
        </CategoriesListItem>
        <CategoriesListItem>
          <CategoriesLink to="equipment">Equipment</CategoriesLink>
        </CategoriesListItem>
      </CategoriesList>
    </>
  );
};

export default ExercisesCategories;
