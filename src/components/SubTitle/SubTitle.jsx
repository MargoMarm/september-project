import { SubStyle } from './SubTitle.styled';

// eslint-disable-next-line react/prop-types
const SubTitle = ({ text }) => {
  console.log(text);
  return <SubStyle>{text}</SubStyle>;
};

export default SubTitle;
