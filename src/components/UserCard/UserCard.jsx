import { useDispatch } from 'react-redux';
import { handleLogout } from '../../utils';
import DailyStatsCards from '../DailyStatsCards/DailyStatsCards';
import {
  AddUserBtn,
  Avatar,
  ImgWrap,
  AvatarWrapper,
  CardsWrap,
  DailyStatsWrap,
  H3,
  Container,
  UserSVG,
  Button,
} from "./UserCard.styled";
import sprite from "../../assets/sprite.svg";
import DescriptionText from "../DescriptionText/DescriptionText";
import PropTypes from "prop-types";

import { mgForDiary } from "../../utils/descriptionTextMargin";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function UserCard({ setAvatar }) {
  const { name, avatarURL, dailyСalories, dailyTime } = useSelector(selectUser);
  const [imgURL, setImgUrl] = useState(avatarURL || null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setAvatar(e.target.files[0]);
    URL.revokeObjectURL(imgURL);
  };

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

      <H3>{name ? name : "user"}</H3>

      <CardsWrap>
        <DailyStatsWrap>
          <DailyStatsCards
            icon="fork-and-knife"
            keyValue={dailyСalories || "0"}
            label="Daily calorie intake"
            fill="true"
          />
        </DailyStatsWrap>

        <DailyStatsWrap>
          <DailyStatsCards
            icon="dumbbell"
            keyValue={dailyTime || 0 + " min"}
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

      <Button
        type="button"
        onClick={() => {
          handleLogout(dispatch);
        }}
      >
        <span>Logout</span>
        <svg>
          <use href={`${sprite}#logout_`}></use>
        </svg>
      </Button>
    </Container>
  );
}

UserCard.propTypes = {
  setAvatar: PropTypes.func.isRequired,
};
