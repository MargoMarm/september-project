import DailyStatsCards from "../DailyStatsCards/DailyStatsCards";
import { AddUserBtn, Avatar, ImgWrap, AvatarWrapper, CardsWrap, DailyStatsWrap, H3, Section, UserSVG, Button } from "./UserCard.styled";
import sprite from '../../assets/sprite2.svg';
import img from '../../assets/11.png'
import DescriptionText from "../DiscriptionText/DescriptionText";

export default function UserCard() {
  return (
    <Section>
      <AvatarWrapper>
        {true
          ? <UserSVG><use href={`${sprite}#icon-gridicons_user`} ></use></UserSVG>
          :<ImgWrap><Avatar src={img}/></ImgWrap>
        }
        <AddUserBtn>
          <input type="file"/>
          <svg><use href={`${sprite}#icon-check-mark`} ></use></svg>
        </AddUserBtn>
      </AvatarWrapper>

      <H3>Anna Rybachok</H3>

      <CardsWrap>
        <DailyStatsWrap>
          <DailyStatsCards icon="fork-and-knife" keyValue='2200' label='Daily calorie intake' fill='true' />
        </DailyStatsWrap>
        
        <DailyStatsWrap>
          <DailyStatsCards icon="dumbbell" keyValue='110 min' label='Daily norm of sports' fill='true' />
        </DailyStatsWrap>
      </CardsWrap>

      <DescriptionText  text="We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals." />
      
      <Button type="button">
        <span>Logout</span>
        <svg><use href={`${sprite}#logout`} ></use></svg>
      </Button>
    </Section>
  )
}