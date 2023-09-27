import CustomBtn from '../../components/CustomNavLink/CustomNavLink';
import {
  Container,
  Content,
  Title,
  Text,
  BGImg,
  WrapLogo,
  Logo,
  LogoText,
} from './Error.styled';
import sprite from '../../assets/sprite.svg';

const Error = () => {
  return (
    <Container>
      <Content>
        <WrapLogo>
          <Logo>
            <use href={sprite + `#icon-logo_error`}></use>
          </Logo>
          <LogoText>
            <use href={sprite + `#icon-PowerPulse`}></use>
          </LogoText>
        </WrapLogo>
        <Title>404</Title>
        <Text>
          Sorry, you have reached a page that we could not find. It seems that
          you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into
          another dimension. We apologize for this inconvenience.
        </Text>

        <CustomBtn type="button" text={'Go Home'} isorange={'true'} to={'/'} />
      </Content>

      <BGImg />
    </Container>
  );
};

export default Error;
