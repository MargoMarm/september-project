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
} from './ProductsFilter.styled';

export default function ProductsFilter() {
  return (
    <FilterContainer>
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
          <option value="Alcoholic drinks">Alcoholic drinks</option>
          <option value="Berries">Berries</option>
          <option value="Cereals">Cereals</option>
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
