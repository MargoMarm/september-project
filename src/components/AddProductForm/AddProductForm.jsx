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

function AddProductForm({ data, closeModal }) {
  const [quantity, setQuantity] = useState(0);

  const amount = Math.round((quantity * data.calories) / 100);

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
        <AddButton type="button">Add to diary</AddButton>
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
};

export default AddProductForm;
