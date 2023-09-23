import { forwardRef } from 'react';
import { Icon, Input, Label } from './CustomInputForCalendar.styled';

import sprite from '../../assets/sprite.svg';

const CustomInputForCalendar = forwardRef((dd, ref) => {
  const { value, onClick } = dd;
  return (
    <Label onClick={onClick} ref={ref}>
      <Input value={value || ''} name="name" readOnly />
      <Icon>
        <use href={`${sprite}#calendar`}></use>
      </Icon>
    </Label>
  );
});

CustomInputForCalendar.displayName = 'CustomInputForCalendar';

export default CustomInputForCalendar;
