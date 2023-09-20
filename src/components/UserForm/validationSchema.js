import * as yup from 'yup';

export default validationSchema = yup.object({
  name: yup.string().required(),
  height: yup.string().required(),
  currentWeight: yup.string().required(),
  desiredWeight: yup.string().required(),
  birthday: yup.string().required(),
  blood: yup.string().required(),
  sex: yup.string().required(),
  levelActivity: yup.string().required(),
});
