import {
  CheckboxWrap,
  InputHidden,
  Chkbx,
  CheckboxText,
} from "./Checkbox.styled";
import PropTypes from "prop-types";

export default function Checkbox({
  styleWrapper,
  styleCheckbox,
  styleText,
  name,
  value,
  checked,
  onChange,
  children,
}) {
  return (
    <CheckboxWrap style={styleWrapper || null}>
      <InputHidden
        type="radio"
        name={name}
        value={value}
        checked={checked || false}
        onChange={onChange || null}
      />

      <Chkbx style={styleCheckbox || null}></Chkbx>
      
      <CheckboxText style={styleText || null}>{children}</CheckboxText>
    </CheckboxWrap>
  );
}

Checkbox.propTypes = {
  styleWrapper: PropTypes.object,
  styleCheckbox: PropTypes.object,
  styleText: PropTypes.object,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.oneOf([true, false]),
  onChange: PropTypes.func,
  children: PropTypes.string,
};
