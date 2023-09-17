import DailyStatsCards from "../DailyStatsCards/DailyStatsCards";
import { AddUserBtn, Avatar, ImgWrap, AvatarWrapper, CardWrap, H3, Section, UserSVG, Button } from "./UserCard.styled";
import sprite from '../../assets/sprite2.svg';
import img from '../../assets/11.png'

export default function UserCard({customStyles}) {
  return (
    <Section css={customStyles}>
      <AvatarWrapper>
        {/* <UserSVG><use href={`${sprite}#icon-gridicons_user`} ></use></UserSVG> */}
        <ImgWrap><Avatar src={img}/></ImgWrap>
        <AddUserBtn>
          <input type="file"/>
          <svg><use href={`${sprite}#icon-check-mark`} ></use></svg>
        </AddUserBtn>
      </AvatarWrapper>
      
      
      <H3>Anna Rybachok</H3>
      <CardWrap>
        <DailyStatsCards icon="fork-and-knife" keyValue='2200' label='Daily calorie intake' fill='true' />
        <DailyStatsCards icon="dumbbell" keyValue='110 min' label='Daily norm of sports' fill='true' />
      </CardWrap>
      <Button type="button">
        <span>Logout</span>
        <svg><use href={`${sprite}#logout`} ></use></svg>
      </Button>
    </Section>
  )
}