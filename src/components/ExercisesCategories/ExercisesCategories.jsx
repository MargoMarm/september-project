import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters } from '../../redux/exerciseFilters/operations';
import { setStatusFilter } from '../../redux/exerciseFilters/slice';
import { selectGetFilters } from '../../redux/exercises/selectors';
import { changeStatusFilter } from '../../redux/exercises/slice';
import { selectFilter } from '../../redux/exerciseFilters/selectors';
import {
  CategoriesList,
  CategoriesListItem,
  CategoriesLink,
} from './ExercisesCategories.styled';

const ExercisesCategories = () => {
  let activeBtn = useSelector(selectFilter);
  const [activeCategory, setActiveCategory] = useState(activeBtn); // Используйте локальное состояние для хранения активной категории
  const filter = useSelector(selectGetFilters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch, filter]);

  const handleCategoryChange = event => {
    const currentCategory = event.target.childNodes[0].textContent;

    dispatch(changeStatusFilter(true));

    setActiveCategory(currentCategory); // Устанавливаем активную категорию

    dispatch(setStatusFilter(currentCategory));
  };

  return (
    <>
      <CategoriesList>
        <CategoriesListItem>
          <CategoriesLink
            type="button"
            onClick={handleCategoryChange}
            className={activeCategory === 'Body parts' ? 'active' : ''} // Применяем класс "active" к активной кнопке
          >
            Body parts
          </CategoriesLink>
        </CategoriesListItem>
        <CategoriesListItem>
          <CategoriesLink
            type="button"
            onClick={handleCategoryChange}
            className={activeCategory === 'Muscles' ? 'active' : ''}
          >
            Muscles
          </CategoriesLink>
        </CategoriesListItem>
        <CategoriesListItem>
          <CategoriesLink
            type="button"
            onClick={handleCategoryChange}
            className={activeCategory === 'Equipment' ? 'active' : ''}
          >
            Equipment
          </CategoriesLink>
        </CategoriesListItem>
      </CategoriesList>
    </>
  );
};

export default ExercisesCategories;
