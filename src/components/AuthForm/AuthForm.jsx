import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import sprite from '../../assets/sprite.svg';

import {
  TextInput,
  FormContainer,
  Error,
  InputContainer,
  InputWrapper,
  HidePasswordbtn,
  Warning,
} from './AuthForm.styled';
import AuthButton from '../AuthButton';
import { useState } from 'react';

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
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [typePasswordInput, setTypePasswordInput] = useState('password');

  const initialValues = nameIsShown
    ? {
        name: '',
        email: '',
        password: '',
      }
    : { email: '', password: '' };

  const toglePassword = () => {
    setIsPasswordShown(prevstate => {
      return !prevstate;
    });
    setTypePasswordInput(prevstate => {
      if (prevstate === 'password') {
        return 'text';
      }
      if (prevstate === 'text') {
        return 'password';
      }
    });
  };

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
            <InputWrapper>
              <TextInput id="name" type="text" placeholder="name" name="name" />
              <Warning>
                <ErrorMessage name="name">
                  {msg => (
                    <Error>
                      <svg width="20" height="20">
                        <use href={sprite + `#icon-checkbox-circle-fill`}></use>
                      </svg>
                      {msg}
                    </Error>
                  )}
                </ErrorMessage>
              </Warning>
            </InputWrapper>
          )}
          <InputWrapper>
            <TextInput
              id="email"
              type="email"
              placeholder="email"
              name="email"
            />
            <Warning>
              <ErrorMessage name="email">
                {msg => (
                  <Error>
                    <svg width="20" height="20">
                      <use href={sprite + `#icon-checkbox-circle-fill`}></use>
                    </svg>
                    {msg}
                  </Error>
                )}
              </ErrorMessage>
            </Warning>
          </InputWrapper>
          <InputWrapper>
            <TextInput
              id="password"
              type={typePasswordInput}
              placeholder="password"
              name="password"
            />
            <HidePasswordbtn onClick={toglePassword}>
              <svg width="20" height="20">
                <use
                  href={
                    sprite +
                    `${isPasswordShown ? `#icon-eye-off` : `#icon-eye`}`
                  }
                ></use>
              </svg>
            </HidePasswordbtn>
            <Warning>
              <ErrorMessage name="password">
                {msg => (
                  <Error>
                    <svg width="20" height="20">
                      <use href={sprite + `#icon-checkbox-circle-fill`}></use>
                    </svg>
                    {msg}
                  </Error>
                )}
              </ErrorMessage>
            </Warning>
          </InputWrapper>
        </InputContainer>
        <AuthButton title={btnTitle} />
      </FormContainer>
    </Formik>
  );
}

AuthForm.propTypes = {
  nameIsShown: PropTypes.bool.isRequired,
  btnTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
