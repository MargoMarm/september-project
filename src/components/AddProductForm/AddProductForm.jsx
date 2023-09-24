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
} from './AddProductForm.styled';
import formatDate from '../../utils/formatDate';

function AddProductForm({ data, closeModal, addProduct }) {
  const [quantity, setQuantity] = useState(0);

  const amount = Math.round((quantity * data.calories) / 100);
  const date = formatDate(new Date());

  return (
    <form>
      <InputContainer>
        <label>
          <InputTitle type="text" value={data.title} disabled />
        </label>

        <label>
          <InputQuantity
            placeholder="grams"
            type="number"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </label>
      </InputContainer>

      <Calories>
        <TitleCalories>Calories:</TitleCalories> {amount}
      </Calories>

      <ButtonContainer>
        <AddButton
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
