import { useState } from "react";
import Title from "../../components/Title/Title";
import UserCard from "../../components/UserCard";
import UserForm from "../../components/UserForm";
import { BlockWrapper, FormWrap, Container } from "./Profile.styled";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../redux/auth/operation";

export default function Profile() {
  const [avatarFile, setAvatarFile] = useState(null);
  const dispatch = useDispatch()

  const handleSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(value => {
      formData.append(value[0], value[1])
    });
    avatarFile && formData.append('avatar', avatarFile, avatarFile.name);
    
    dispatch(updateUserData(formData));
    setAvatarFile(null);
  }

  return (
    <Container>
      <Title text="Profile Settings" />

      <BlockWrapper>
        <UserCard setAvatar={setAvatarFile} />

        <FormWrap>
          <UserForm submit={handleSubmit} avatar={avatarFile}/>
        </FormWrap>
      </BlockWrapper>
    </Container>
  );
}
