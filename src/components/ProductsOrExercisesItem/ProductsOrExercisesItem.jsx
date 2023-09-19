import {
  AddBtn,
  ArrowRight,
  IconContainer,
  Item,
  NameProduct,
  RunningMan,
  SubDiv,
  SubType,
  SubTypeDiv,
  SubTypeValue,
  TextDiet,
  TextRecommended,
} from './ProductsOrExercisesItem.styled';
import PropTypes from 'prop-types';

import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';

import { pageContentToRender } from '../../utils';

const ProductsOrExercisesItem = ({ page, data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const textLength = name => {
    let maxLength = 24;

    if (windowWidth < 768) {
      maxLength = 23;
    } else if (windowWidth < 1440) {
      maxLength = 19;
    }

    return name.length <= maxLength
      ? name
      : name.substring(0, maxLength) + '...';
  };

  const contentToRender = pageContentToRender(page, data);
//   console.log(contentToRender);

  return (
    <Item>
      <SubDiv>
        <TextDiet>{contentToRender.subtitle}</TextDiet>
        {page === 'product' && <TextRecommended>Recommended</TextRecommended>}
        <AddBtn>
          {contentToRender.button}
          <ArrowRight>
            <use href={sprite + `#arrow-right`}></use>
          </ArrowRight>
        </AddBtn>
      </SubDiv>
      <NameProduct>
        <IconContainer>
          <RunningMan>
            <use href={sprite + `#runningMan`}></use>
          </RunningMan>
        </IconContainer>
        {textLength(contentToRender.title)}
      </NameProduct>
      <SubTypeDiv>
        <SubType>
          {contentToRender.text1}
          <SubTypeValue>{contentToRender.subText1}</SubTypeValue>
        </SubType>

        <SubType>
          {contentToRender.text2}
          <SubTypeValue>{contentToRender.subText2}</SubTypeValue>
        </SubType>

        <SubType>
          {contentToRender.text3}
          <SubTypeValue>{contentToRender.subText3}</SubTypeValue>
        </SubType>
      </SubTypeDiv>
    </Item>
  );
};

ProductsOrExercisesItem.propTypes = {
  page: PropTypes.string,
  data: PropTypes.object,
};

export default ProductsOrExercisesItem;
