import sprite from '../../assets/sprite.svg';
import ButtonIconForInput from '../ButtonIconForInput';
// import productsCategories from '../../data/productsCategories.json';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductsCategories } from '../../redux/productsFilter/selectors';
import { getCategories } from "../../redux/productsFilter/operations";
import {
  FilterContainer,
  SelectContainer,
  TextInput,
  Select,
  Option,
  InputWrapper,
  
  Svg,
  FilterTitle,
} from './ProductsFilter.styled';

export default function ProductsFilter() {
  const dispatch = useDispatch()
  const [currentCategory, setCurrentCategory] = useState("Categories");
  const [isRecommended, setIsRecommended] = useState("All")
  const productsCategories = useSelector(getProductsCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

   const handleChange = event => {
    const selectedValue = event.target.value;
    setCurrentCategory(selectedValue)
  }
  console.log(currentCategory);
  const handleChangeIsReccomended = event => {
    const selectedValue = event.target.value;
    setIsRecommended(selectedValue)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  }
  const request = {
    recommended: isRecommended,
    category: currentCategory,

  }
  const optionStyles = {
    backgroundColor: 'rgba(28, 28, 28, 1)',
    color: "#EFEDE8",
    fontSize: "16px",
    lineHeight: "24px", 
  };
  
  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <InputWrapper onSubmit={handleSubmit}>
        <TextInput type="text" autoComplete="off" />
        <ButtonIconForInput
          right="42px"
          type="reset"
          
        >
          <Svg>
            <use href={sprite + `#close`}></use>
          </Svg>
        </ButtonIconForInput>
        <ButtonIconForInput
          
          right="18px"
          type="submit"
        >
          <Svg>
            <use href={sprite + `#icon-search`}></use>
          </Svg>
        </ButtonIconForInput>
      </InputWrapper>
      <SelectContainer>
        
        <Select value={currentCategory} onChange={handleChange}>
        <option style={optionStyles} value="default">Categories</option>
          {productsCategories.map(category => {
            return (
              <option key={category} value={category} style={optionStyles}>
                {category}
              </option>
            );
          })}
        </Select>
       
        
        <Select value={isRecommended} onChange={handleChangeIsReccomended}> 
          <option value="default" >All</option>
          <option value="Recommended">Recommended</option>
          <option value="Not recomended">Not recommended</option>
        </Select>
      </SelectContainer>
    </FilterContainer>
  );
}
