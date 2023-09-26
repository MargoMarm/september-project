import { useState } from "react";
import Title from "../../components/Title/Title";
import UserCard from "../../components/UserCard";
import UserForm from "../../components/UserForm";
import { BlockWrapper, FormWrap, Container } from "./Profile.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { updateUserData } from "../../redux/auth/operation";

export default function Profile() {
  const [avatarFile, setAvatarFile] = useState();
  const dispatch = useDispatch()
  const {
    name,
    bodyParameters: {
      height,
      currentWeight,
      desiredWeight,
      birthday,
      blood,
      sex,
      levelActivity, 
    }
  } = useSelector(selectUser);
  
  const handleSubmit = (data) => {
    if (data.name == name
      && data.height == height
      && data.currentWeight == currentWeight
      && data.desiredWeight == desiredWeight
      && data.birthday == birthday
      && data.blood == blood
      && data.sex == sex
      && data.levelActivity == levelActivity
      && !avatarFile) {
      return
    }

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
          <UserForm submit={handleSubmit} />
        </FormWrap>
      </BlockWrapper>
    </Container>
  );
}
