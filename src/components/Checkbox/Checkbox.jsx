import {
  CheckboxWrap,
  InputHidden,
  Chkbx,
  CheckboxText,
} from './Checkbox.styled';
import PropTypes from 'prop-types';

export default function Checkbox({
  styleWrapper,
  name,
  value,
  checked,
  styleCheckbox,
  styleText,
  children,
}) {
  return (
    <CheckboxWrap style={styleWrapper || null}>
      <InputHidden
        type="radio"
        name={name}
        value={value}
        defaultChecked={checked ? true : false}
      />
      <Chkbx style={styleCheckbox || null}></Chkbx>
      <CheckboxText style={styleText || null}>{children}</CheckboxText>
    </CheckboxWrap>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.string,
  styleWrapper: PropTypes.object,
  styleCheckbox: PropTypes.object,
  styleText: PropTypes.object,
  checked: PropTypes.oneOf([true,  false]),
};
