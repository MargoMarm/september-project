import { Button, Caption, CheckboxList, Form, HalfLabel, Input, InputGroup, InputSecondGroup,InputThirdGroup, Label } from "./UserForm.styled";

import Checkbox from "../Checkbox";
import Calendar from "../Calendar/Calendar";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useFormik } from "formik";


export default function UserForm() {
  const {name, email, height, currentWeight, desiredWeight, birthday, blood, sex, levelActivity} = useSelector(selectUser);
  
  const handleSubmit = (data) => {
    console.log(data);
  }

const initialValues=  { name: name || '', email: email || '', height: height || '', currentWeight: currentWeight || '', desiredWeight: desiredWeight || '', blood: blood || '', sex: '', levelActivity: levelActivity || '' }
   const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    //validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit} autoComplete="off">
      
      <InputGroup>
        <Label>
          <p>Basic info</p>
          <Input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/>
        </Label>

        <Label>
          <Input type="text" name="email" defaultValue={formik.values.email} disabled/>
        </Label>
      </InputGroup>

      <InputGroup>
        <InputSecondGroup>
          <HalfLabel>
            <p>Height</p>
            <Input type="text" name="height" value={formik.values.height} onChange={formik.handleChange}/>
          </HalfLabel>

          <HalfLabel>
            <p>Current Weight</p>
            <Input type="text" name="currentWeight" value={formik.values.currentWeight} onChange={formik.handleChange}/>
          </HalfLabel>
        </InputSecondGroup>

        <InputSecondGroup>
          <HalfLabel>
            <p>Desired Weight</p>
            <Input type="text" name="desiredWeight" value={formik.values.desiredWeight} onChange={formik.handleChange}/>
          </HalfLabel>

          <HalfLabel>
            {/* <Calendar name="birthday"/> */}
          </HalfLabel>
        </InputSecondGroup>
      </InputGroup>

      <InputThirdGroup>
        <div>
          <Caption>Blood</Caption>
          <Checkbox type="radio" name="blood" value="1" checked={formik.values.blood === "1"} onChange={formik.handleChange}>1</Checkbox>
          <Checkbox type="radio" name="blood" value="2" checked={formik.values.blood === "2"} onChange={formik.handleChange}>2</Checkbox>
          <Checkbox type="radio" name="blood" value="3" checked={formik.values.blood === "3"} onChange={formik.handleChange}>3</Checkbox>
          <Checkbox type="radio" name="blood" value="4" checked={formik.values.blood === "4"} onChange={formik.handleChange}>4</Checkbox>
        </div>
  
        <div>
          <Checkbox type="radio" name="sex" value="male" checked={formik.values.sex === "male"} onChange={formik.handleChange}>Male</Checkbox>
          <Checkbox type="radio" name="sex" value="female"  checked={formik.values.sex === "female"} onChange={formik.handleChange}>Female</Checkbox>
        </div>
      </InputThirdGroup>

      <CheckboxList>
        <Checkbox type="radio" name="levelActivity" value="1" checked={formik.values.levelActivity === "1"} onChange={formik.handleChange} styleWrapper={{ marginBottom: "9px", display: "flex" }} >
          Sedentary lifestyle (little or no physical activity)
        </Checkbox>
            
        <Checkbox type="radio" name="levelActivity" value="2" checked={formik.values.levelActivity === "2"} onChange={formik.handleChange} styleWrapper={{ marginBottom: "9px", display: "flex" }} >
          Light activity (light exercises/sports 1-3 days per week)
        </Checkbox>
            
        <Checkbox type="radio" name="levelActivity" value="3" checked={formik.values.levelActivity === "3"} onChange={formik.handleChange} styleWrapper={{ marginBottom: "9px", display: "flex" }} >
          Moderately active (moderate exercises/sports 3-5 days per week)
        </Checkbox>
            
        <Checkbox type="radio" name="levelActivity" value="4" checked={formik.values.levelActivity === "4"} onChange={formik.handleChange} styleWrapper={{ marginBottom: "9px", display: "flex" }} >
          Very active (intense exercises/sports 6-7 days per week)
        </Checkbox>
            
        <Checkbox type="radio" name="levelActivity" value="5" checked={formik.values.levelActivity === "5"} onChange={formik.handleChange} styleWrapper={{ display: "flex" }} >
          Extremely active (very strenuous exercises/sports and physical work)
        </Checkbox>
      </CheckboxList>

      <Button>Save</Button>
    </Form>
  )
}