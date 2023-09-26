import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  AddButton,
  ButtonContainer,
  Calories,
  CloseButton,
  InputContainer,
  InputQuantity,
  InputTitle,
  TitleCalories,
  Label,
  InputWrapper,
} from './AddProductForm.styled';
import formatDate from '../../utils/formatDate';

function AddProductForm({ data, closeModal, addProduct }) {
  const [quantity, setQuantity] = useState('');

  const amount = Math.round((quantity * data.calories) / 100);
  const date = formatDate(new Date());

  return (
    <form>
      <InputContainer>
        <label>
          <InputTitle type="text" value={data.title} disabled />
        </label>
        <InputWrapper>
          <InputQuantity
            id="grams"
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
          <Label htmlFor="grams">grams </Label>
        </InputWrapper>
      </InputContainer>

      <Calories>
        <TitleCalories>Calories:</TitleCalories> {amount}
      </Calories>

      <ButtonContainer>
        <AddButton
          disabled={quantity > 0 ? false : true}
          type="button"
          onClick={() =>
            addProduct({
              id: data.id,
              date,
              amount: quantity,
              calories: amount,
            })
          }
        >
          Add to diary
        </AddButton>
        <CloseButton type="button" onClick={closeModal}>
          Cancel
        </CloseButton>
      </ButtonContainer>
    </form>
  );
}

AddProductForm.propTypes = {
  data: PropTypes.object,
  closeModal: PropTypes.func,
  addProduct: PropTypes.func,
};

export default AddProductForm;
