import Title from "../../components/Title/Title";
import UserCard from "../../components/UserCard";
import UserForm from "../../components/UserForm";
import { BlockWrapper } from "./Profile.styled";

export default function Profile() {
  return (
    <>
      <Title text="Profile Settings" />
      <BlockWrapper>
        <UserCard />
        <UserForm/>
      </BlockWrapper>
    </>
  )
}