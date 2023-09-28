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
import { UseAuth } from '../../hooks/useAuth';

const Error = () => {
  const { isLoggedIn } = UseAuth();

  return (
    <main>
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

          <CustomBtn
            type="button"
            text={'Go Home'}
            isorange={'true'}
            to={isLoggedIn ? '/diary' : '/'}
          />
        </Content>

        <BGImg />
      </Container>
    </main>
  );
};

export default Error;
