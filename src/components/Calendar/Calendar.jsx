import PropTypes from 'prop-types';
import { forwardRef} from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import uk from 'date-fns/locale/uk';
import { format, parseISO  } from 'date-fns';
import { Icon, Ipt, Label, GlobalStyles } from './Calendar.styled';
import sprite from '../../assets/sprite.svg';
import { Global } from '@emotion/react';
registerLocale('uk', uk);

export default function Calendar({ name, value, onChange, maxDate, minDate, showYearDropdown, dateFormat, withoutВorder }) {
  const ExampleCustomInput = forwardRef((dd, ref) => {
    const { value, onClick } = dd;
    return(
      <Label onClick={onClick} ref={ref}>
        <Ipt value={value || ''} name="name" readOnly withoutВorder={withoutВorder} />
        <Icon>
          <use href={`${sprite}#calendar`}></use>
        </Icon>
      </Label>
    )
  });

  ExampleCustomInput.displayName = 'Label';

  return (
    <>
      <DatePicker
        name={name}
        locale="uk"
        selected={typeof value == "string" ? parseISO(value) : value}
        onChange={date => { onChange(name, date) }}
        maxDate={maxDate}
        minDate={minDate}
        yearDropdownItemNumber={40}
        customInput={<ExampleCustomInput />}
        scrollableYearDropdown
        dateFormat={dateFormat || "dd.MM.yyyy"}
        showYearDropdown={showYearDropdown}
      />
      <Global styles={GlobalStyles} />
    </>
  );
}

Calendar.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  maxDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  showYearDropdown: PropTypes.bool,
  dateFormat: PropTypes.string,
  withoutВorder: PropTypes.bool,
};
