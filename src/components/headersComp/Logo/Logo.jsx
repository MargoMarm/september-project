import { WrapLogo, Svg } from './Logo.styled';
import sprite from '../../../assets/sprite.svg';
import 'animate.css';

import { UseAuth } from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  const { isLoggedIn } = UseAuth();

  return (
    <>
      <WrapLogo>
        <NavLink
          to={isLoggedIn ? '/diary' : '/'}
        >
          <Svg>
            <use href={sprite + `#logo-big`}></use>
          </Svg>{' '}
        </NavLink>
      </WrapLogo>
    </>
  );
};

export default Logo;
