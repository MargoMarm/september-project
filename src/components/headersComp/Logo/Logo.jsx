import { Button, WrapLogo, Svg } from './Logo.styled';
import sprite from '../../../assets/sprite.svg';

export const Logo = () => {
  return (
    <>
      <WrapLogo>
        <a href="/september-project/">
          <Svg>
            <use href={sprite + `#logo-big`}></use>
          </Svg>{' '}
        </a>
      </WrapLogo>
    </>
  );
};

export default Logo;
