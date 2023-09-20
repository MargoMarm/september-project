import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import uk from 'date-fns/locale/uk';
import sub from 'date-fns/sub';
import { Icon, Ipt, Label, GlobalStyles } from './Calendar.styled';
import sprite from '../../assets/sprite.svg';
import { Global } from '@emotion/react';
registerLocale('uk', uk);

export default function Calendar({ name }) {
  const maxDate = sub(new Date(), { years: 18 });
  const minDate = sub(new Date(), { years: 70 });
  const [date, setDate] = useState(maxDate);

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Label>
      <Ipt onClick={onClick} ref={ref} value={value} name={name} readOnly />
      <Icon>
        <use href={`${sprite}#calendar`}></use>
      </Icon>
    </Label>
  ));

  ExampleCustomInput.displayName = 'Label';

  return (
    <>
      <DatePicker
        locale="uk"
        selected={date}
        onChange={date => setDate(date)}
        maxDate={maxDate}
        minDate={minDate}
        dateFormat="yyyy-MM-dd"
        yearDropdownItemNumber={40}
        customInput={<ExampleCustomInput />}
        scrollableYearDropdown
        showYearDropdown
      />
      <Global styles={GlobalStyles} />
    </>
  );
}

Calendar.propTypes = {
  name: PropTypes.string.isRequired,
  onClick:PropTypes.func,
};
