import { Container, Content, Img, Title, Text, Button } from './Error.styled';

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

        <Button type="button">Go Home</Button>
      </Content>

      <Img></Img>
    </Container>
  );
};

export default Error;
