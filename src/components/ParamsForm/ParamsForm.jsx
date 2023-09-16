import { Formik, Form } from 'formik';
import { useState } from 'react';
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

import { colors as palette } from '../../utils';
import planka from '../../assets/images/params-step1_mobile_1x.jpg';
import stretch from '../../assets/images/params-step2_mobile_1x.jpg';
import leg from '../../assets/images/params-step3_mobile_1x.jpg';
import {
  Page,
  Logo,
  FormikField,
  Title,
  InputGroup,
  FormRadioBtnGroupWrapper,
  BtnNav,
  BtnsAndBlock,
  BtnSubmit,
  ProgressBar,
  BarItem,
} from './ParamsForm.styled';

import ParamsBlockCard from '../ParamsBlocks/ParamsBlocks';
import ParamsText from '../ParamsText/ParamsText';

const ParamsForm = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [steps, setSteps] = useState(1);

  const slideTo = index => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <Page
      style={{
        backgroundImage:
          (steps === 1 && `url(${planka})`) ||
          (steps === 2 && `url(${stretch})`) ||
          (steps === 3 && `url(${leg})`),
      }}
    >
      <Logo>PowerPulse</Logo>

      <Formik
        initialValues={{
          height: '',
          currentWeight: '',
          desiredWeight: '',
          birthday: '',
        }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ handleChange }) => (
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
                  functioning of our platform, we ask you to provide the
                  following information about your weight, height and other
                  relevant data:
                </ParamsText>

                <InputGroup>
                  <FormikField
                    name="height"
                    placeholder="Height"
                    autoComplete="off"
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
                    slideTo(2);
                    setSteps(2);
                  }}
                >
                  Next
                </BtnNav>

                <ParamsBlockCard
                  type={'video'}
                  mt_m={'100px'}
                  ml_m="101px"
                  mb_m="70px"
                  mt_t="165px"
                  ml_t="311px"
                  mb_t="56px"
                />

                <ParamsBlockCard
                  type={'users'}
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
                      defaultValue="1"
                      name="radio-buttons-group"
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
                      defaultValue="1"
                      name="radio-buttons-group"
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
                    defaultValue="1"
                    name="radio-buttons-group"
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
                    onClick={() => {
                      slideTo(1);
                      setSteps(1);
                    }}
                  >
                    Back
                  </BtnNav>

                  <BtnNav
                    type="button"
                    onClick={() => {
                      slideTo(3);
                      setSteps(3);
                    }}
                  >
                    Next
                  </BtnNav>

                  <ParamsBlockCard
                    type={'video'}
                    ml_m="20px"
                    mt_t="40px"
                    ml_t="165px"
                  />
                </BtnsAndBlock>

                <ParamsBlockCard
                  type={'users'}
                  ml_m={'auto'}
                  mb_m={'16px'}
                  mb_t={'12px'}
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
                  onClick={() => {
                    slideTo(2);
                    setSteps(2);
                  }}
                >
                  Back
                </BtnNav>

                <ParamsBlockCard
                  type={'video'}
                  mt_m={'276px'}
                  ml_m={'101px'}
                  mb_m={'25px'}
                  mt_t={'249px'}
                  ml_t={'297px'}
                  mb_t={'56px'}
                />
                <ParamsBlockCard type={'users'} ml_m={'auto'} />
              </SwiperSlide>
            </Swiper>
          </Form>
        )}
      </Formik>

      <ProgressBar>
        <BarItem
          style={{
            background: steps >= 1 && '#ef8964',
            boxShadow: steps >= 1 && `0px 1px 10px 0px rgba(230, 83, 60, 0.8)`,
          }}
        ></BarItem>
        <BarItem
          style={{
            background: steps >= 2 && steps > 1 && '#ef8964',
            boxShadow:
              steps >= 2 &&
              steps > 1 &&
              `0px 1px 10px 0px rgba(230, 83, 60, 0.8)`,
          }}
        ></BarItem>
        <BarItem
          style={{
            background: steps === 3 && '#ef8964',
            boxShadow: steps === 3 && `0px 1px 10px 0px rgba(230, 83, 60, 0.8)`,
          }}
        ></BarItem>
      </ProgressBar>
    </Page>
  );
};

export default ParamsForm;
