import { useEffect, useState } from 'react';
import Title from '../../components/Title/Title';
import UserCard from '../../components/UserCard';
import UserForm from '../../components/UserForm';
import { BlockWrapper, FormWrap, Container } from './Profile.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/auth/operation';
import { selectUser } from '../../redux/auth/selectors';

const mgUserPage = {
  top: { tab: 72, mob: 40 },
  bt: { desk: 32, tab: 64, mob: 40 },
};
export default function Profile() {
  const [avatarFile, setAvatarFile] = useState();

  const handleSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <Title text="Profile Settings" />

      <BlockWrapper>
        <UserCard setAvatar={setAvatarFile} />

        <FormWrap>
          <UserForm submit={handleSubmit} />
        </FormWrap>
      </BlockWrapper>
    </Container>
  );
}
