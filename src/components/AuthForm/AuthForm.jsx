import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';

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

const emailLyout = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordLayout = /^(?=.*[a-zA-Z]{6,})(?=.*\d)[a-zA-Z\d]{7,}$/;

export default function AuthForm({ nameIsShown, btnTitle, onSubmit }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [typePasswordInput, setTypePasswordInput] = useState('password');

  const validateName = nameIsShown => {
    return nameIsShown ? Yup.string().required('Name is required') : null;
  };
  const authSchema = Yup.object().shape({
    name: validateName(nameIsShown),
    email: Yup.string()
      .matches({ emailLyout, message: 'Email must be valid' })
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .matches({
        passwordLayout,
        message:
          'Password must contain 6+ letters, 1 number, and 1+ letter or number',
      })
      .required('Password is required'),
  });

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
      onSubmit={onSubmit}
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
            <HidePasswordbtn onClick={toglePassword} type="button">
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
