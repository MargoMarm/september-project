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
} from './ProductsItem.styled';
import PropTypes from 'prop-types';

import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';

const ProductsItem = ({ product, exercise }) => {
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

  let contentToRender;

  if (product) {
    contentToRender = {
      key: product._id.$oid,
      subtitle: 'DIET',
      title: product.title,
      button: 'Add',
      text1: 'Calories:',
      text2: 'Category:',
      text3: 'Weight:',
      subText1: product.calories,
      subText2: product.category,
      subText3: product.weight,
    };
  }

  if (exercise) {
    contentToRender = {
      key: exercise.title,
      subtitle: 'WORKOUT',
      title: exercise.name,
      button: 'Start',
      text1: 'Burned calories:',
      text2: 'Body part:',
      text3: 'Target:',
      subText1: exercise.burnedCalories,
      subText2: exercise.bodyPart,
      subText3: exercise.target,
    };
  }

  return (
    <Item key={contentToRender.key}>
      <SubDiv>
        <TextDiet>{contentToRender.subtitle}</TextDiet>
        {product && <TextRecommended>Recommended</TextRecommended>}
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

ProductsItem.propTypes = {
  product: PropTypes.object,
  exercise: PropTypes.object,
};

export default ProductsItem;
