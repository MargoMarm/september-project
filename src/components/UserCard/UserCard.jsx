import DailyStatsCards from "../DailyStatsCards/DailyStatsCards";
import { AddUserBtn, Avatar, ImgWrap, AvatarWrapper, CardsWrap, DailyStatsWrap, H3, Container, UserSVG, Button } from "./UserCard.styled";
import sprite from '../../assets/sprite.svg';
import img from '../../assets/11.png'
import DescriptionText from "../DescriptionText/DescriptionText";

import { mgForDiary } from '../../utils/descriptionTextMargin';
import { useState } from "react";

export default function UserCard() {
  const [imgURL, setImgUrl] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const handleChange = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setImgFile(e.target.files[0]);
    console.log(imgURL);
    console.log(imgFile);
  }

	
  return (
    <Container>
      <AvatarWrapper>
        {imgURL ? (
          <ImgWrap>
            <Avatar src={imgURL} />
          </ImgWrap>
        ) : (
          <UserSVG>
            <use href={`${sprite}#icon-gridicons_user`}></use>
          </UserSVG>
        )}
        <AddUserBtn>
          <input type="file" onChange={handleChange} />
          <svg>
            <use href={`${sprite}#icon-check-mark`}></use>
          </svg>
        </AddUserBtn>
      </AvatarWrapper>

      <H3>Anna Rybachok</H3>

      <CardsWrap>
        <DailyStatsWrap>
          <DailyStatsCards
            icon="fork-and-knife"
            keyValue="2200"
            label="Daily calorie intake"
            fill="true"
          />
        </DailyStatsWrap>

        <DailyStatsWrap>
          <DailyStatsCards
            icon="dumbbell"
            keyValue="110 min"
            label="Daily norm of sports"
            fill="true"
          />
        </DailyStatsWrap>
      </CardsWrap>

      <DescriptionText
        margin={mgForDiary}
        text="We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."
        width={{ tablet: 439, desktop: 439 }}
      />

      <Button type="button">
        <span>Logout</span>
        <svg>
          <use href={`${sprite}#logout_`}></use>
        </svg>
      </Button>
    </Container>
  );
}