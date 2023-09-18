import { CheckboxWrap, InputHidden, Chkbx, CheckboxText } from "./Checkbox.styled";

export default function Checkbox(props) {
  return (
    <CheckboxWrap style={props.styleWrapper || null}>
      <InputHidden type="radio" name={props.name} value={props.value} defaultChecked={ props.checked ? true : false} />
      <Chkbx style={props.styleCheckbox || null}></Chkbx>
      <CheckboxText style={props.styleText || null}>{props.children}</CheckboxText>
    </CheckboxWrap>
  )
}
