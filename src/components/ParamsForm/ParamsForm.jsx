import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { sub } from 'date-fns';

import { updateBodyParts } from '../../redux/auth/operation';
import {
  FormikField,
  InputGroup,
  FormRadioBtnGroupWrapper,
  BtnsAndBlock,
  BtnSubmit,
  CalendarWrapper,
  ErrorMessage,
  RADIO_STYLE_OPTIONS,
  RADIO_TITLE_STYLE,
} from './ParamsForm.styled';
import ParamsBlockCard from '../ParamsBlockСard';
import ParamsBtn from '../ParamsBtn';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
import Calendar from '../Calendar/Calendar';
import { mg } from '../../utils';

const ParamsForm = ({ setSteps, setSwiperRef }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const maxDate = sub(new Date() - 86400000, { years: 18 });
  const minDate = sub(new Date(), { years: 70 });

  return (
    <Formik
      initialValues={{
        height: '',
        currentWeight: '',
        desiredWeight: '',
        birthday: maxDate,
        blood: '',
        sex: '',
        levelActivity: '',
      }}
      validationSchema={paramsSchema}
      validateOnMount={true}
      onSubmit={(values, Formik) => {
        const newParams = {
          ...values,
          blood: Number(values.blood),
          levelActivity: Number(values.levelActivity),
          birthday: values.birthday,
        };

        dispatch(updateBodyParts(newParams));

        navigate('/diary');

        Formik.resetForm();
      }}
    >
      {({ handleChange, values, setFieldValue, errors, touched }) => {
        return (
          <Form>
            <Swiper
              spaceBetween={10}
              allowTouchMove={false}
              onSwiper={setSwiperRef}
            >
              <SwiperSlide>
                <Title text={'Get closer to your goals!'} margin={mg} />

                <SubTitle
                  text={
                    'To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data: '
                  }
                />

                <InputGroup>
                  <div>
                    <FormikField
                      type="number"
                      name="height"
                      placeholder="Height"
                      autoComplete="off"
                    />
                    {errors.height && touched.height && (
                      <ErrorMessage padding={true}>
                        {errors.height}
                      </ErrorMessage>
                    )}
                  </div>

                  <div>
                    <FormikField
                      type="number"
                      name="currentWeight"
                      placeholder="Current Weight"
                      autoComplete="off"
                    />
                    {errors.currentWeight && touched.currentWeight && (
                      <ErrorMessage padding={true}>
                        {errors.currentWeight}
                      </ErrorMessage>
                    )}
                  </div>

                  <div>
                    <FormikField
                      type="number"
                      name="desiredWeight"
                      placeholder="Desired Weight"
                      autoComplete="off"
                    />
                    {errors.desiredWeight && touched.desiredWeight && (
                      <ErrorMessage padding={true}>
                        {errors.desiredWeight}
                      </ErrorMessage>
                    )}
                  </div>

                  <CalendarWrapper>
                    <Calendar
                      name="birthday"
                      value={values.birthday}
                      maxDate={maxDate}
                      minDate={minDate}
                      dateFormat="dd.MM.yyyy"
                      showYearDropdown
                      onChange={setFieldValue}
                    />
                  </CalendarWrapper>
                </InputGroup>

                <ParamsBtn
                  setSteps={setSteps}
                  type={'next'}
                  step={2}
                  values={values}
                />

                <ParamsBlockCard type={'grey'} data={350} />

                <ParamsBlockCard data={100} measure={'users'} type={'orange'} />
              </SwiperSlide>

              <SwiperSlide>
                <Title text={'Get closer to your goals!'} margin={mg} />

                <FormControl style={{ marginBottom: '28px' }}>
                  <FormRadioBtnGroupWrapper>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group1"
                    >
                      {errors.blood && touched.blood && (
                        <ErrorMessage>{errors.blood}</ErrorMessage>
                      )}
                      <FormLabel style={RADIO_TITLE_STYLE}>Blood:</FormLabel>

                      <FormControlLabel
                        name="blood"
                        onChange={handleChange}
                        value="1"
                        control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                        label="1"
                      />
                      <FormControlLabel
                        name="blood"
                        onChange={handleChange}
                        value="2"
                        control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                        label="2"
                      />
                      <FormControlLabel
                        name="blood"
                        onChange={handleChange}
                        value="3"
                        control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                        label="3"
                      />
                      <FormControlLabel
                        name="blood"
                        onChange={handleChange}
                        value="4"
                        control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                        label="4"
                      />
                    </RadioGroup>

                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group2"
                      style={{ marginLeft: '64px' }}
                    >
                      {errors.sex && touched.sex && (
                        <ErrorMessage>{errors.sex}</ErrorMessage>
                      )}

                      <FormLabel style={RADIO_TITLE_STYLE}>Sex:</FormLabel>

                      <FormControlLabel
                        name="sex"
                        onChange={handleChange}
                        value="male"
                        control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                        label="male"
                      />
                      <FormControlLabel
                        name="sex"
                        onChange={handleChange}
                        value="female"
                        control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                        label="female"
                      />
                    </RadioGroup>
                  </FormRadioBtnGroupWrapper>

                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group3"
                    style={{ padding: '2px' }}
                  >
                    <FormLabel style={RADIO_TITLE_STYLE}>Level:</FormLabel>

                    {errors.levelActivity && touched.levelActivity && (
                      <ErrorMessage>{errors.levelActivity}</ErrorMessage>
                    )}
                    <FormControlLabel
                      name="levelActivity"
                      onChange={handleChange}
                      value="1"
                      control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                      label="Sedentary lifestyle (little or no physical activity)"
                    />

                    <FormControlLabel
                      name="levelActivity"
                      onChange={handleChange}
                      value="2"
                      control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                      label="Light activity (light exercises/sports 1-3 days per
                        week)"
                    />

                    <FormControlLabel
                      name="levelActivity"
                      onChange={handleChange}
                      value="3"
                      control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                      label=" Moderately active (moderate exercises/sports 3-5 days
                        per week)"
                    />

                    <FormControlLabel
                      name="levelActivity"
                      onChange={handleChange}
                      value="4"
                      control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                      label="Very active (intense exercises/sports 6-7 days per week)"
                    />

                    <FormControlLabel
                      name="levelActivity"
                      onChange={handleChange}
                      value="5"
                      control={<Radio sx={RADIO_STYLE_OPTIONS} />}
                      label="Extremely active (very strenuous exercises/sports and
                    physical work)"
                    />
                  </RadioGroup>
                </FormControl>

                <BtnsAndBlock>
                  <ParamsBtn setSteps={setSteps} type={'back'} step={1} />
                  <ParamsBtn
                    setSteps={setSteps}
                    type={'next'}
                    step={3}
                    values={values}
                  />

                  <ParamsBlockCard data={350} type={'grey'} step={'2'} />
                </BtnsAndBlock>

                <ParamsBlockCard type={'orange'} data={24} measure={'hours'} />
              </SwiperSlide>

              <SwiperSlide>
                <Title text={'Dear user'} margin={mg} />

                <SubTitle
                  text={
                    ' Thank you for filling in all the required data. We greatl appreciate your cooperation and commitment to a health lifestyle. The collected information will allow us to provide you with a more individual and personalized approach.'
                  }
                />

                <BtnSubmit>Go</BtnSubmit>

                <ParamsBtn setSteps={setSteps} type={'back'} step={2} />

                <ParamsBlockCard data={350} type={'grey'} />
                <ParamsBlockCard data={300} measure={'ex'} type={'orange'} />
              </SwiperSlide>
            </Swiper>
          </Form>
        );
      }}
    </Formik>
  );
};

ParamsForm.propTypes = {
  setSteps: PropTypes.func.isRequired,
  setSwiperRef: PropTypes.func.isRequired,
};

const paramsSchema = Yup.object({
  height: Yup.number().min(150).max(250).required('Field is required'),
  currentWeight: Yup.number().min(35).max(400).required('Field is required'),
  desiredWeight: Yup.number().min(35).max(400).required('Field is required'),
  birthday: Yup.string().required(),
  blood: Yup.string().required(),
  sex: Yup.string().required(),
  levelActivity: Yup.number().required(),
});

export default ParamsForm;
