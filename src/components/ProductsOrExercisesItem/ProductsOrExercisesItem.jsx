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

import { colors, pageContentToRender } from '../../utils';

import Modal from '../../components/Modal/Modal';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import AddExerciseForm from '../AddExerciseForm';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/products/operations';
import textLength from '../../utils/textLength';
import ProductOrExerciseModal from '../ProductOrExerciseModal/ProductOrExerciseModal';
import { addExercise } from '../../redux/exercises/operations';
import { Confirm } from 'notiflix';
import { isTimerOn } from '../../redux/exercises/selectors';
import { changeStatusTimer } from '../../redux/exercises/slice';

const ProductsOrExercisesItem = ({ page, data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalSuccessOpen, setIsModalOpen] = useState(false);
  const [addedCaloriesToDiary, setAddedCaloriesToDiary] = useState(0);
  const [addedExerciseTime, setAddedExerciseTime] = useState(0);
  const [addedExerciseBurnedCalories, setAddedExerciseBurnedCalories] =
    useState(0);

  const isTimerGoingOn = useSelector(isTimerOn);

  const toggleAddModal = () => setIsModalAddOpen(state => !state);
  const toggleSuccessModal = () => setIsModalOpen(state => !state);

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
      setAddedCaloriesToDiary(calories);
      dispatch(addProduct(data));
    }
    if (page === 'exercise') {
      const data = {
        exerciseId: id,
        date,
        time,
        burnedCalories,
      };

      if (!time || !burnedCalories) {
        return;
      }
      setAddedExerciseTime(time);
      setAddedExerciseBurnedCalories(burnedCalories);
      dispatch(addExercise(data));
    }
    toggleAddModal();
    toggleSuccessModal();
  };

  const closeModalWithoutData = () => {
    if (isTimerGoingOn) {
      Confirm.show(
        'Warning',
        'Do you really want to exit? You will lost all of your progress.',
        'Yes',
        'No',
        () => {
          dispatch(changeStatusTimer(false));
          toggleAddModal();
        },
        () => {
          return;
        },
        {
          backgroundColor: `${colors.black}`,
          titleColor: `${colors.orange}`,
          messageColor: `${colors.orangeSecondary}`,
          okButtonBackground: `${colors.orange}`,
        },
      );
    } else {
      toggleAddModal();
    }
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

        <AddBtn onClick={toggleAddModal}>
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

      {isModalAddOpen && (
        <Modal
          openModal={
            page === 'product' ? toggleAddModal : closeModalWithoutData
          }
          width={page === 'product' ? 481 : 696}
        >
          {page === 'product' && (
            <AddProductForm
              closeModal={toggleAddModal}
              data={data}
              addProduct={addProductOrExercise}
            />
          )}
          {page === 'exercise' && (
            <AddExerciseForm data={data} addExercise={addProductOrExercise} />
          )}
        </Modal>
      )}

      {isModalSuccessOpen && (
        <Modal openModal={toggleSuccessModal} width={430}>
          {page === 'product' && (
            <ProductOrExerciseModal
              modalType="product"
              data={{ calories: addedCaloriesToDiary }}
              btnNext={toggleSuccessModal}
            />
          )}

          {page === 'exercise' && (
            <ProductOrExerciseModal
              modalType="exercise"
              data={{
                time: addedExerciseTime,
                burnedCalories: addedExerciseBurnedCalories,
              }}
              btnNext={toggleSuccessModal}
            />
          )}
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
