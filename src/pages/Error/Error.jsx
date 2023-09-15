// import MainTitle from '../../components/MainTitle'
import CustomBtn from '../../components/CustomNavLink/CustomNavLink';
import { Container, Content, Img, Title, Text } from './Error.styled';

const Error = () => {
  return (
    <Container>
      <Content>
        <Title>404</Title>
        <Text>
          Sorry, you have reached a page that we could not find. It seems that
          you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into
          another dimension. We apologize for this inconvenience.
        </Text>

        <CustomBtn type="button" text={'Go Home'} />
      </Content>

      <Img></Img>
    </Container>
  );
};

export default Error;
