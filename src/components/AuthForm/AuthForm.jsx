import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

import {
  TextInput,
  FormContainer,
  Error,
  InputContainer,
  InputWrapper,
  HidePasswordbtn,
} from './AuthForm.styled';
import AuthButton from '../AuthButton';

const authSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, {
      message: 'Email must be valid',
    })
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(/^(&=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, {
      message: 'password must have ...',
    })
    .required('Password is required'),
});

export default function AuthForm({ nameIsShown, btnTitle }) {
  const initialValues = nameIsShown
    ? {
        name: '',
        email: '',
        password: '',
      }
    : { email: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
      }}
      validationSchema={authSchema}
    >
      <FormContainer>
        <InputContainer>
          {nameIsShown && (
            <>
              <TextInput id="name" type="text" placeholder="name" name="name" />
              <ErrorMessage name="name">
                {msg => <Error>{msg}</Error>}
              </ErrorMessage>
            </>
          )}
          <TextInput id="email" type="email" placeholder="email" name="email" />
          <ErrorMessage name="email">
            {msg => <Error>{msg}</Error>}
          </ErrorMessage>
          <InputWrapper>
            <TextInput
              id="password"
              type="password"
              placeholder="password"
              name="password"
            />
          </InputWrapper>
          <ErrorMessage name="password">
            {msg => <Error>{msg}</Error>}
          </ErrorMessage>
          <HidePasswordbtn></HidePasswordbtn>
        </InputContainer>
        <AuthButton type="submit" title={btnTitle} />
      </FormContainer>
    </Formik>
  );
}

AuthForm.propTypes = {
  nameIsShown: PropTypes.bool.isRequired,
  btnTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
