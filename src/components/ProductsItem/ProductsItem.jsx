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

import React, { useEffect, useState } from 'react';

import sprite from '../../assets/sprite.svg';

const product = {
  _id: {
    $oid: '5d51694902b2373622ff5773',
  },
  weight: 100,
  calories: 340,
  category: 'dairy',
  title: 'Salads Belaya Dacha Delicate root',
  groupBloodNotAllowed: {
    1: true,
    2: true,
    3: false,
    4: false,
  },
};

const ProductsItem = () => {
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

  const textLength = productName => {
    if (windowWidth < 768) {
      return productName.substring(0, 25) + '...';
    }
    if (windowWidth < 1440) {
      return productName.substring(0, 20) + '...';
    }
    return productName.substring(0, 27) + '...';
  };

  return (
    <Item key={product._id.$oid}>
      <SubDiv>
        <TextDiet>DIET</TextDiet>
        <TextRecommended>Recommended</TextRecommended>
        <AddBtn>
          Add
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
        {textLength(product.title)}
      </NameProduct>
      <SubTypeDiv>
        <SubType>Calories: </SubType>
        <SubTypeValue>{product.calories}</SubTypeValue>
        <SubType>Category: </SubType>
        <SubTypeValue>{product.category}</SubTypeValue>
        <SubType>Weight: </SubType>
        <SubTypeValue>{product.weight}</SubTypeValue>
      </SubTypeDiv>
    </Item>
  );
};

export default ProductsItem;
