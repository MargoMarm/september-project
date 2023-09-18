import Title from "../../components/Title/Title";
import UserCard from "../../components/UserCard";
import UserForm from "../../components/UserForm";
import { BlockWrapper, FormWrap, Section } from "./Profile.styled";

export default function Profile() {
  const mgUserPage = {
    top: {tab: 72, mob: 40},
    bt: {desk: 32, tab: 64, mob: 40}
  }

  return (
    <Section>
      <Title text="Profile Settings" margin={mgUserPage} />

      <BlockWrapper>
        <UserCard />

        <FormWrap>
          <UserForm />
        </FormWrap>
      </BlockWrapper>
    </Section>
  )
}