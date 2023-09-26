import {
  Button,
  Caption,
  CheckboxList,
  CheckboxListLine,
  ErrorField,
  Form,
  HalfLabel,
  Input,
  InputGroup,
  InputSecondGroup,
  InputThirdGroup,
  Label,
} from "./UserForm.styled";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox";
import Calendar from "../Calendar/Calendar";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useFormik } from "formik";
import { sub } from 'date-fns';
import validationSchema from "./validationSchema";
import {isTheSameForm} from "../../utils"
import { useMemo } from "react";


const maxDate = sub(new Date(), { years: 18 });
const minDate = sub(new Date(), { years: 70 });

export default function UserForm({submit, avatar}) {
  const {
    name,
    email,
    bodyParameters: {
      height,
      currentWeight,
      desiredWeight,
      birthday,
      blood,
      sex,
      levelActivity, 
    }
  } = useSelector(selectUser);

  const initialValues = {
    name: name || "",
    height: height || "",
    currentWeight: currentWeight || "",
    desiredWeight: desiredWeight || "",
    birthday: birthday || maxDate,
    blood: blood || "",
    sex: sex || "",
    levelActivity: levelActivity || "",
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: submit,
  });

  let disBtn = useMemo(() => isTheSameForm(initialValues, formik.values) && !avatar, [formik.values, avatar]);

  return (
    <Form onSubmit={formik.handleSubmit} autoComplete="off">
      <InputGroup>
        <Label>
          <p>Basic info</p>
          <Input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            aria-invalid={formik.errors.name}
          />

           { formik.errors.name &&
              <ErrorField>
                {formik.errors.name }
              </ErrorField>
            }
        </Label>

        <Label>
          <Input
            type="text"
            name="email"
            defaultValue={email}
            disabled
          />
        </Label>
      </InputGroup>

      <InputGroup>
        <InputSecondGroup>
          <HalfLabel>
            <p>Height</p>
            <Input
              type="text"
              name="height"
              value={formik.values.height}
              onChange={formik.handleChange}
              aria-invalid={formik.errors.height}
            />

            { formik.errors.height &&
              <ErrorField>
                {formik.errors.height }
              </ErrorField>
            }
          </HalfLabel>

          <HalfLabel>
            <p>Current Weight</p>
            <Input
              type="text"
              name="currentWeight"
              value={formik.values.currentWeight}
              onChange={formik.handleChange}
              aria-invalid={formik.errors.currentWeight}
            />

             { formik.errors.currentWeight &&
              <ErrorField>
                {formik.errors.currentWeight }
              </ErrorField>
            }
          </HalfLabel>
        </InputSecondGroup>

        <InputSecondGroup>
          <HalfLabel>
            <p>Desired Weight</p>
            <Input
              type="text"
              name="desiredWeight"
              value={formik.values.desiredWeight}
              onChange={formik.handleChange}
              aria-invalid={formik.errors.desiredWeight}
            />

             { formik.errors.desiredWeight &&
              <ErrorField>
                {formik.errors.desiredWeight }
              </ErrorField>
            }
          </HalfLabel>

          <HalfLabel>
            <Calendar
              name="birthday"
              value={formik.values.birthday}
              maxDate={maxDate}
              minDate={minDate}
              dateFormat='dd.MM.yyyy'
              showYearDropdown
              onChange={formik.setFieldValue}
            />
          </HalfLabel>
        </InputSecondGroup>
      </InputGroup>
      <InputThirdGroup>
        <CheckboxListLine>
          <Caption>Blood</Caption>
          <Checkbox
            type="radio"
            name="blood"
            value="1"
            checked={formik.values.blood == "1"}
            onChange={formik.handleChange}
          >
            1
          </Checkbox>
          <Checkbox
            type="radio"
            name="blood"
            value="2"
            checked={formik.values.blood == "2"}
            onChange={formik.handleChange}
          >
            2
          </Checkbox>
          <Checkbox
            type="radio"
            name="blood"
            value="3"
            checked={formik.values.blood == "3"}
            onChange={formik.handleChange}
          >
            3
          </Checkbox>
          <Checkbox
            type="radio"
            name="blood"
            value="4"
            checked={formik.values.blood == "4"}
            onChange={formik.handleChange}
          >
            4
          </Checkbox>
           { formik.errors.blood &&
              <ErrorField>
                {formik.errors.blood }
              </ErrorField>
            }
        </CheckboxListLine>

        <CheckboxListLine>
          <Checkbox
            type="radio"
            name="sex"
            value="male"
            checked={formik.values.sex === "male"}
            onChange={formik.handleChange}
          >
            Male
          </Checkbox>
          <Checkbox
            type="radio"
            name="sex"
            value="female"
            checked={formik.values.sex === "female"}
            onChange={formik.handleChange}
          >
            Female
          </Checkbox>
           { formik.errors.sex &&
              <ErrorField>
                {formik.errors.sex }
              </ErrorField>
            }
        </CheckboxListLine>
      </InputThirdGroup>

      <CheckboxList>
        <Checkbox
          type="radio"
          name="levelActivity"
          value="1"
          checked={formik.values.levelActivity == "1"}
          onChange={formik.handleChange}
          styleWrapper={{ marginBottom: "9px", display: "flex" }}
        >
          Sedentary lifestyle (little or no physical activity)
        </Checkbox>

        <Checkbox
          type="radio"
          name="levelActivity"
          value="2"
          checked={formik.values.levelActivity == "2"}
          onChange={formik.handleChange}
          styleWrapper={{ marginBottom: "9px", display: "flex" }}
        >
          Light activity (light exercises/sports 1-3 days per week)
        </Checkbox>

        <Checkbox
          type="radio"
          name="levelActivity"
          value="3"
          checked={formik.values.levelActivity == "3"}
          onChange={formik.handleChange}
          styleWrapper={{ marginBottom: "9px", display: "flex" }}
        >
          Moderately active (moderate exercises/sports 3-5 days per week)
        </Checkbox>

        <Checkbox
          type="radio"
          name="levelActivity"
          value="4"
          checked={formik.values.levelActivity == "4"}
          onChange={formik.handleChange}
          styleWrapper={{ marginBottom: "9px", display: "flex" }}
        >
          Very active (intense exercises/sports 6-7 days per week)
        </Checkbox>

        <Checkbox
          type="radio"
          name="levelActivity"
          value="5"
          checked={formik.values.levelActivity == "5"}
          onChange={formik.handleChange}
          styleWrapper={{ display: "flex" }}
        >
          Extremely active (very strenuous exercises/sports and physical work)
        </Checkbox>

        { formik.errors.levelActivity &&
          <ErrorField>
            {formik.errors.levelActivity }
          </ErrorField>
        }
      </CheckboxList>

      <Button type="submit" disabled={disBtn}>Save</Button>
    </Form>
  );
}

UserForm.propTypes = {
  submit: PropTypes.func.isRequired,
  avatar: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(null)]),
}
