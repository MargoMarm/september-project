import { useDispatch } from 'react-redux';
import { handleLogout } from '../../../utils';
import CustomNavLink from '../../CustomNavLink/CustomNavLink';
import {
  WrapUserNav,
  Button,
  Svg,
  SvgUser,
  ButtonWrap,
  Span,
} from './UserNav.styled';
import { NavLink } from 'react-router-dom';

import sprite from '../../../assets/sprite.svg';

export const UserNav = () => {
  const dispatch = useDispatch();

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
        <Button>
          <SvgUser>
            <use href={sprite + `#ecllipse`}></use>
          </SvgUser>{' '}
        </Button>
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
