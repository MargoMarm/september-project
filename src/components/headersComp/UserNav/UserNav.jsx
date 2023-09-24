import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '../../../utils';
import CustomNavLink from '../../CustomNavLink/CustomNavLink';
import {
  WrapUserNav,
  Button,
  Svg,
  SvgUser,
  ButtonWrap,
	Span,
  UserAvatar
} from './UserNav.styled';
import { NavLink } from 'react-router-dom';

import sprite from '../../../assets/sprite.svg';
import { selectUser } from '../../../redux/auth/selectors';

export const UserNav = () => {
  const dispatch = useDispatch();
	const {avatarURL} = useSelector(selectUser)
	
	console.log(avatarURL)
  return (
    <WrapUserNav>
      <CustomNavLink to="/diary" text="Diary" isinheader={'true'} />
      <CustomNavLink to="/products" text="Products" isinheader={'true'} />
      <CustomNavLink to="/exercises" text="Exercises" isinheader={'true'} />
      <ButtonWrap>
        <NavLink to={'/profile'}>
          <Svg>
            <use href={sprite + `#settings`}></use>
          </Svg>{' '}
        </NavLink>
			  <UserAvatar>
				  
</UserAvatar>
        <Button
          onClick={() => {
            handleLogout(dispatch);
          }}
        >
          <Span>Logout</Span>
          <Svg>
            <use href={sprite + `#logout`}></use>
          </Svg>{' '}
        </Button>
      </ButtonWrap>
    </WrapUserNav>
  );
};

export default UserNav;
