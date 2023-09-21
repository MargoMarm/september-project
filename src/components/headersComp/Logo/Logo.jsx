import { Button, WrapLogo, Svg } from './Logo.styled';
import sprite from '../../../assets/sprite.svg';

import { UseAuth } from '../../../hooks/useAuth';

export const Logo = () => {
  const { isLoggedIn } = UseAuth();
  console.log(isLoggedIn);

  return (
    <>
      <WrapLogo>
        <a href={isLoggedIn ? '/diary' : '/'}>
          <Svg>
            <use href={sprite + `#logo-big`}></use>
          </Svg>{' '}
        </a>
      </WrapLogo>
    </>
  );
};

export default Logo;
