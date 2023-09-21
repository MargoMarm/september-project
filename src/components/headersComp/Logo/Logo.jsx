import { Button, WrapLogo, Svg } from './Logo.styled';
import sprite from '../../../assets/sprite.svg';

import { UseAuth } from '../../../hooks/useAuth';

export const Logo = () => {
  const { isLoggedIn } = UseAuth();

  return (
    <>
      <WrapLogo>
        <a
          href={isLoggedIn ? '/september-project/diary' : '/september-project/'}
        >
          <Svg>
            <use href={sprite + `#logo-big`}></use>
          </Svg>{' '}
        </a>
      </WrapLogo>
    </>
  );
};

export default Logo;
