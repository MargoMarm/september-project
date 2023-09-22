import * as yup from 'yup';

export default yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  height: yup.number().min(150).required(),
  currentWeight: yup.number().min(35).required(),
  desiredWeight: yup.number().min(35).required(),
  birthday: yup.date().required(),
  blood: yup.string().oneOf(['1', '2', '3', '4']).required(),
  sex: yup.string().oneOf(['male', 'female']).required(),
  levelActivity: yup.string().oneOf(['1', '2', '3', '4', '5']).required(),
});
