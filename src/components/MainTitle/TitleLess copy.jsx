import { StyledTitle } from './TitleLess.styled';

const TitleLess = ({ children }) => {
  return (
    <StyledTitle>
      <h2>{children}</h2>
    </StyledTitle>
  );
};

export default TitleLess;
