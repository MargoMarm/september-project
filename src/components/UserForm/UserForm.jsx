import { Button, Caption, CheckboxList, Form, HalfLabel, Input, InputGroup, InputSecondGroup,InputThirdGroup, Label } from "./UserForm.styled";

import Checkbox from "../Checkbox";
import Calendar from "../Calendar/Calendar";

export default function UserForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    console.log(e);
    console.log(formData);
  }
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputGroup>
        <Label>
          <p>Basic info</p>
          <Input type="text"/>
        </Label>

        <Label>
          <Input type="text" value="mail@mail.tst" disabled/>
        </Label>
      </InputGroup>

      <InputGroup>
        <InputSecondGroup>
          <HalfLabel>
            <p>Height</p>
            <Input type="text"/>
          </HalfLabel>

          <HalfLabel>
            <p>Current Weight</p>
            <Input type="text"/>
          </HalfLabel>
        </InputSecondGroup>

        <InputSecondGroup>
          <HalfLabel>
            <p>Desired Weight</p>
            <Input type="text"/>
          </HalfLabel>

          <HalfLabel>
            <Calendar name="birthday"/>
          </HalfLabel>
        </InputSecondGroup>
      </InputGroup>

      <InputThirdGroup>
        <div>
          <Caption>Blood</Caption>
          <Checkbox type="radio" name="blood" value="1" checked>1</Checkbox>
          <Checkbox type="radio" name="blood" value="2">2</Checkbox>
          <Checkbox type="radio" name="blood" value="3">3</Checkbox>
          <Checkbox type="radio" name="blood" value="4">4</Checkbox>
        </div>
  
        <div>
          <Checkbox type="radio" name="sex" value="male" checked>Male</Checkbox>
          <Checkbox type="radio" name="sex" value="female">Female</Checkbox>
        </div>
      </InputThirdGroup>

      <CheckboxList>
        <Checkbox type="radio" name="levelActivity" value="1" styleWrapper={{ marginBottom: "9px", display: "flex" }} checked>
          Sedentary lifestyle (little or no physical activity)
        </Checkbox>
        <Checkbox type="radio" name="levelActivity" value="2" styleWrapper={{ marginBottom: "9px", display: "flex" }} >
          Light activity (light exercises/sports 1-3 days per week)
        </Checkbox>
        <Checkbox type="radio" name="levelActivity" value="3" styleWrapper={{ marginBottom: "9px", display: "flex" }} >
          Moderately active (moderate exercises/sports 3-5 days per week)
        </Checkbox>
        <Checkbox type="radio" name="levelActivity" value="4" styleWrapper={{ marginBottom: "9px", display: "flex" }} >
          Very active (intense exercises/sports 6-7 days per week)
        </Checkbox>
        <Checkbox type="radio" name="levelActivity" value="5" styleWrapper={{ display: "flex" }}>
          Extremely active (very strenuous exercises/sports and physical work)
        </Checkbox>
      </CheckboxList>

      <Button>Save</Button>
    </Form>
  )
}