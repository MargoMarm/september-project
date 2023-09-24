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

import Modal from '../../components/Modal/Modal';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/products/operations';
import textLength from '../../utils/textLength';

const ProductsOrExercisesItem = ({ page, data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const contentToRender = pageContentToRender(page, data);

  const addProductOrExercise = ({
    id,
    date,
    amount,
    calories,
    time,
    burnedCalories,
  }) => {
    if (page === 'product') {
      const data = {
        productId: id,
        date,
        amount,
        calories,
      };
      dispatch(addProduct(data));
    }
    if (page === 'exercises') {
      console.log(id, date, time, burnedCalories);
      // тут буде dispatch(addExercises бла бла бла)
    }
    toggleModal();
  };

  return (
    <Item>
      <SubDiv>
        <TextDiet>{contentToRender.subtitle}</TextDiet>
        {page === 'product' && (
          <TextRecommended reccomend={data.recommended}>
            {data.recommended ? 'Recommended' : 'Not recommended'}
          </TextRecommended>
        )}

        <AddBtn onClick={toggleModal}>
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
        {textLength(contentToRender.title, windowWidth)}
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

      {isModalOpen && (
        <Modal openModal={toggleModal}>
          {page === 'product' && (
            <AddProductForm
              closeModal={toggleModal}
              data={data}
              addProduct={addProductOrExercise}
            />
          )}

          {/* тут буде логіка відкриття модалки для додавання вправ, я поки що до неї не лізу
           {page === 'exercise' && (
            <AddProductForm closeModal={toggleModal} data={data} />
          )} */}
        </Modal>
      )}
    </Item>
  );
};

ProductsOrExercisesItem.propTypes = {
  page: PropTypes.string,
  data: PropTypes.object,
  openModal: PropTypes.func,
};

export default ProductsOrExercisesItem;
