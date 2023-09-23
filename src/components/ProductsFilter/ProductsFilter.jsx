import sprite from '../../assets/sprite.svg';
import ButtonIconForInput from '../ButtonIconForInput';
// import productsCategories from '../../data/productsCategories.json';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductsCategories } from '../../redux/productsFilter/selectors';
import { getCategories, fetchProducts } from "../../redux/productsFilter/operations";
import {
  FilterContainer,
  SelectContainer,
  TextInput,
  Select,
  Option,
  InputWrapper,
  SelectPointer,
  Svg,
  FilterTitle,
} from './ProductsFilter.styled';
import debounce from 'lodash.debounce';



export default function ProductsFilter() {
  const makeReqObj = (input, category, recommended) => {
    const reqObj = {};

    if (input) {
      reqObj.title = input;
    }
    if (category && category !== 'Categories' && category !== "default") {
      reqObj.category = category;
    }

    if (recommended === 'Recommended') {
      reqObj.recommended = true;
    }
    if (recommended === 'Not recommended') {
      reqObj.recommended = false;
    }
    return reqObj;
  };
  const dispatch = useDispatch()
  const [currentCategory, setCurrentCategory] = useState("Categories");
  const [isRecommended, setIsRecommended] = useState("All")
  const [query, setQuery] = useState("");
  
  const productsCategories = useSelector(getProductsCategories);
  useEffect(() => {
    const reqObj = makeReqObj(query, currentCategory, isRecommended);
    const urlParams = new URLSearchParams(reqObj).toString();
     dispatch(fetchProducts(urlParams))
  }, [query, currentCategory, isRecommended, dispatch ] )
 

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

   const handleChangeCategory = event => {
    const selectedValue = event.target.value;
    setCurrentCategory(selectedValue)
  }
  const debouncedHandleChange = debounce((term) => {
    setQuery(term)
  }, 500);

  const handleChangeQuery = event => {
    const selectedValue = event.target.value;
    debouncedHandleChange(selectedValue);
  }
  const handleChangeisReccomended = event => {
    const selectedValue = event.target.value;
    setIsRecommended(selectedValue) 
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
      <InputWrapper >
        <TextInput type="text" autoComplete="off"  onChange={handleChangeQuery} />
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
        <SelectPointer>
        <Select value={currentCategory} onChange={handleChangeCategory}>
        <option style={optionStyles} value="default">Categories</option>
          {productsCategories.map(category => {
            return (
              <option key={category} value={category} style={optionStyles}>
                {category}
              </option>
              
            );
          })}
          
        </Select>
        </SelectPointer>
        <SelectPointer>
        <Select value={isRecommended} onChange={handleChangeisReccomended}> 
          <option style={optionStyles} value="default" >All</option>
          <option style={optionStyles} value="Recommended">Recommended</option>
          <option style={optionStyles} value="Not recommended">Not recommended</option>
        </Select>
        </SelectPointer>
       
        
      </SelectContainer>
    </FilterContainer>
  );
}
