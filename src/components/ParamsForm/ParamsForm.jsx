import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  colors,
} from '@mui/material';
// import { format } from 'date-fns';
// import axios from 'axios';

import {
  FormikField,
  InputGroup,
  FormRadioBtnGroupWrapper,
  BtnsAndBlock,
  BtnSubmit,
} from './ParamsForm.styled';
import { colors as palette } from '../../utils';
import { mg } from '../../utils';

import ParamsBlockCard from '../ParamsBlockСard';
import ParamsBtn from '../ParamsBtn';
import Title from '../Title/Title';
import SubTitle from '../SubTitle/SubTitle';
// import Calendar from '../Calendar/Calendar';

const ParamsForm = ({ setSteps, setSwiperRef }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        height: '',
        currentWeight: '',
        desiredWeight: '',
        birthday: '',
        blood: '',
        sex: '',
        levelActivity: '',
      }}
      onSubmit={async (values, Formik) => {
        // const newParamsUser = {
        //   ...values,
        //   blood: Number(values.blood),
        //   levelActivity: Number(values.levelActivity),
        //   birthday: format(date, 'yyyy-MM-dd'),
        // };

        // await axios.post(
        //   'https://power-pulse-rest-api.onrender.com/api/users/create',
        //   newParamsUser,
        // );
        console.log(values);

        navigate('/diary');

        Formik.resetForm();

        setSteps(1);
      }}
      validationSchema={paramsSchema}
    >
      {({ handleChange }) => (
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
                <FormikField
                  type="number"
                  name="height"
                  placeholder="Height"
                  autoComplete="off"
                />
                <FormikField
                  type="number"
                  name="currentWeight"
                  placeholder="Current Weight"
                  autoComplete="off"
                />
                <FormikField
                  type="number"
                  name="desiredWeight"
                  placeholder="Desired Weight"
                  autoComplete="off"
                />
                {/* <div style={{ width: '155px', height: '52px', margin: '7px' }}>
                  <Calendar
                    name="birthday"
                    onChange={handleChange}
                    date={date}
                    setDate={setDate}
                  />
                </div> */}
              </InputGroup>

              <ParamsBtn setSteps={setSteps} type={'next'} step={2} />

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
                    <FormLabel
                      style={{
                        color: `${palette.white}`,
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '128.571%',
                      }}
                    >
                      Blood:
                    </FormLabel>

                    <FormControlLabel
                      name="blood"
                      onChange={handleChange}
                      value="1"
                      control={
                        <Radio
                          sx={{
                            color: 'grey',
                            '&.Mui-checked': {
                              color: colors.orange[800],
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="1"
                    />
                    <FormControlLabel
                      name="blood"
                      onChange={handleChange}
                      value="2"
                      control={
                        <Radio
                          sx={{
                            color: 'grey',
                            '&.Mui-checked': {
                              color: colors.orange[800],
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="2"
                    />
                    <FormControlLabel
                      name="blood"
                      onChange={handleChange}
                      value="3"
                      control={
                        <Radio
                          sx={{
                            color: 'grey',
                            '&.Mui-checked': {
                              color: colors.orange[800],
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="3"
                    />
                    <FormControlLabel
                      name="blood"
                      onChange={handleChange}
                      value="4"
                      control={
                        <Radio
                          sx={{
                            color: 'grey',
                            '&.Mui-checked': {
                              color: colors.orange[800],
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="4"
                    />
                  </RadioGroup>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group2"
                    style={{ marginLeft: '64px' }}
                  >
                    <FormLabel
                      style={{
                        color: `${palette.white}`,
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '128.571%',
                      }}
                    >
                      Sex:
                    </FormLabel>

                    <FormControlLabel
                      name="sex"
                      onChange={handleChange}
                      value="male"
                      control={
                        <Radio
                          sx={{
                            color: 'grey',
                            '&.Mui-checked': {
                              color: colors.orange[800],
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="male"
                    />
                    <FormControlLabel
                      name="sex"
                      onChange={handleChange}
                      value="female"
                      control={
                        <Radio
                          sx={{
                            color: 'grey',
                            '&.Mui-checked': {
                              color: colors.orange[800],
                            },
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="female"
                    />
                  </RadioGroup>
                </FormRadioBtnGroupWrapper>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group3"
                  style={{ padding: '2px' }}
                >
                  <FormLabel
                    style={{
                      color: `${palette.white}`,
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '128.571%',
                    }}
                  >
                    Level:
                  </FormLabel>

                  <FormControlLabel
                    name="levelActivity"
                    onChange={handleChange}
                    value="1"
                    control={
                      <Radio
                        sx={{
                          color: 'grey',
                          '&.Mui-checked': {
                            color: colors.orange[800],
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label="Sedentary lifestyle (little or no physical activity)"
                  />

                  <FormControlLabel
                    name="levelActivity"
                    onChange={handleChange}
                    value="2"
                    control={
                      <Radio
                        sx={{
                          color: 'grey',
                          '&.Mui-checked': {
                            color: colors.orange[800],
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label="Light activity (light exercises/sports 1-3 days per
                        week)"
                  />

                  <FormControlLabel
                    name="levelActivity"
                    onChange={handleChange}
                    value="3"
                    control={
                      <Radio
                        sx={{
                          color: 'grey',
                          '&.Mui-checked': {
                            color: colors.orange[800],
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label=" Moderately active (moderate exercises/sports 3-5 days
                        per week)"
                  />

                  <FormControlLabel
                    name="levelActivity"
                    onChange={handleChange}
                    value="4"
                    control={
                      <Radio
                        sx={{
                          color: 'grey',
                          '&.Mui-checked': {
                            color: colors.orange[800],
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label="Very active (intense exercises/sports 6-7 days per week)"
                  />

                  <FormControlLabel
                    name="levelActivity"
                    onChange={handleChange}
                    value="5"
                    control={
                      <Radio
                        sx={{
                          color: 'grey',
                          '&.Mui-checked': {
                            color: colors.orange[800],
                          },
                          '& .MuiSvgIcon-root': {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label="Extremely active (very strenuous exercises/sports and
                    physical work)"
                  />
                </RadioGroup>
              </FormControl>

              <BtnsAndBlock>
                <ParamsBtn setSteps={setSteps} type={'back'} step={1} />
                <ParamsBtn setSteps={setSteps} type={'next'} step={3} />

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

              <BtnSubmit type="submit">Go</BtnSubmit>

              <ParamsBtn setSteps={setSteps} type={'back'} step={2} />

              <ParamsBlockCard data={350} type={'grey'} />
              <ParamsBlockCard data={300} measure={'ex'} type={'orange'} />
            </SwiperSlide>
          </Swiper>
        </Form>
      )}
    </Formik>
  );
};

ParamsForm.propTypes = {
  setSteps: PropTypes.func.isRequired,
  setSwiperRef: PropTypes.func.isRequired,
};

const paramsSchema = Yup.object({
  height: Yup.number().min(150).required(),
  currentWeight: Yup.number().min(35).required(),
  desiredWeight: Yup.number().min(35).required(),
  birthday: Yup.string(),
  blood: Yup.number().required(),
  sex: Yup.string().required(),
  levelActivity: Yup.number().required(),
});

export default ParamsForm;
