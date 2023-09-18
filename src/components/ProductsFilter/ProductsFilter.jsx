import sprite from '../../assets/sprite.svg';

import {
  FilterContainer,
  SelectContainer,
  TextInput,
  Select,
  InputWrapper,
  ButtonIcon,
  Svg,
} from './ProductsFilter.styled';

export default function ProductsFilter() {
  return (
    <FilterContainer>
      <InputWrapper>
        <TextInput type="text" autoComplete="off" />
        {/* <ButtonIcon type="submit">
          <Svg>
            <use href={sprite + `#close`}></use>
          </Svg>
        </ButtonIcon> */}
        <ButtonIcon type="submit">
          <Svg>
            <use href={sprite + `#icon-search`}></use>
          </Svg>
        </ButtonIcon>
      </InputWrapper>
      <SelectContainer>
        <Select>
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
