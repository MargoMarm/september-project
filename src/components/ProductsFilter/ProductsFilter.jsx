import sprite from '../../assets/sprite.svg';
import ButtonIconForInput from '../ButtonIconForInput';
import productsCategories from '../../data/productsCategories.json';

import {
  FilterContainer,
  SelectContainer,
  TextInput,
  Select,
  InputWrapper,
  Svg,
  FilterTitle,
} from './ProductsFilter.styled';

export default function ProductsFilter() {
  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <InputWrapper>
        <TextInput type="text" autoComplete="off" />
        <ButtonIconForInput
          onClick={e => console.log(e)}
          right="42px"
          type="submit"
        >
          <Svg>
            <use href={sprite + `#close`}></use>
          </Svg>
        </ButtonIconForInput>
        <ButtonIconForInput
          onClick={e => console.log(e)}
          right="18px"
          type="submit"
        >
          <Svg>
            <use href={sprite + `#icon-search`}></use>
          </Svg>
        </ButtonIconForInput>
      </InputWrapper>
      <SelectContainer>
        <Select>
          {productsCategories.map(category => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </Select>
        <Select>
          <option value="All">All</option>
          <option value="Recommended">Recommended</option>
          <option value="Not recomended">Not recommended</option>
        </Select>
      </SelectContainer>
    </FilterContainer>
  );
}
