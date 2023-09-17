import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { colors as palette } from '../../utils';

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

import ParamsBlockCard from '../ParamsBlocks/ParamsBlocks';
import ParamsText from '../ParamsText/ParamsText';

import {
  FormikField,
  Title,
  InputGroup,
  FormRadioBtnGroupWrapper,
  BtnNav,
  BtnsAndBlock,
  BtnSubmit,
} from './ParamsForm.styled';

const ParamsForm = ({ setSteps, setSwiperRef }) => {
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
      onSubmit={(values, Formik) => {
        console.log(values);
        Formik.resetForm();
        setSteps(1);
      }}
    >
      {({ handleChange, values }) => (
        <Form>
          <Swiper
            spaceBetween={10}
            allowTouchMove={false}
            onSwiper={setSwiperRef}
          >
            <SwiperSlide>
              <Title>Get closer to your goals!</Title>

              <ParamsText mb_m={'50px'} mb_t={'54px'}>
                To ensure a personalized user experience and the proper
                functioning of our platform, we ask you to provide the following
                information about your weight, height and other relevant data:
              </ParamsText>

              <InputGroup>
                <FormikField
                  name="height"
                  placeholder="Height"
                  autoComplete="off"
                  value={values.height}
                />
                <FormikField
                  name="currentWeight"
                  placeholder="Current Weight"
                  autoComplete="off"
                />
                <FormikField
                  name="desiredWeight"
                  placeholder="Desired Weight"
                  autoComplete="off"
                />
                <FormikField
                  name="birthday"
                  placeholder="Birthday"
                  autoComplete="off"
                />
              </InputGroup>

              <BtnNav
                type="button"
                onClick={() => {
                  setSteps(2);
                }}
              >
                Next
              </BtnNav>

              <ParamsBlockCard
                type={'grey'}
                data={350}
                mt_m={'100px'}
                ml_m={'101px'}
                mb_m={'75px'}
                mt_t={'165px'}
                ml_t={'311px'}
                mb_t={'56px'}
                mt_d={'-200px'}
                ml_d={'674px'}
              />

              <ParamsBlockCard
                data={100}
                measure={'users'}
                type={'orange'}
                ml_m={'auto'}
                mb_m={'16px'}
                mb_t={'12px'}
              />
            </SwiperSlide>

            <SwiperSlide>
              <Title style={{ marginBottom: '28px' }}>
                Get closer to your goals!
              </Title>

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
                <BtnNav
                  type="button"
                  style={{ color: `${palette.textWhite06}` }}
                  onClick={() => {
                    setSteps(1);
                  }}
                >
                  Back
                </BtnNav>

                <BtnNav
                  type="button"
                  onClick={() => {
                    setSteps(3);
                  }}
                >
                  Next
                </BtnNav>

                <ParamsBlockCard
                  data={350}
                  type={'grey'}
                  ml_m={'20px'}
                  mt_t={'40px'}
                  ml_t={'165px'}
                  ml_d={'580px'}
                  mt_d={'-310px'}
                />
              </BtnsAndBlock>

              <ParamsBlockCard
                type={'orange'}
                data={24}
                measure={'hours'}
                ml_m={'auto'}
                mb_m={'16px'}
                mb_t={'12px'}
                mt_d={'-260px'}
                mb_d={'142px'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Title>Dear user</Title>

              <ParamsText mb_m={'28px'} mb_t={'64px'}>
                Thank you for filling in all the required data. We greatly
                appreciate your cooperation and commitment to a healthy
                lifestyle. The collected information will allow us to provide
                you with a more individual and personalized approach.
              </ParamsText>

              <BtnSubmit>Go</BtnSubmit>

              <BtnNav
                type="button"
                style={{ color: `${palette.textWhite06}` }}
                onClick={() => {
                  setSteps(2);
                }}
              >
                Back
              </BtnNav>

              <ParamsBlockCard
                data={350}
                type={'grey'}
                mt_m={'276px'}
                ml_m={'101px'}
                mb_m={'25px'}
                mt_t={'249px'}
                ml_t={'297px'}
                mb_t={'56px'}
                mt_d={'-80px'}
                mb_d={'40px'}
                ml_d={'674px'}
              />
              <ParamsBlockCard
                data={300}
                measure={'ex'}
                type={'orange'}
                ml_m={'auto'}
              />
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

export default ParamsForm;
