import { Button, WrapLogo, Svg } from './Logo.styled';
import sprite from '../../../assets/sprite.svg';

export const Logo = () => {
  return (
    <>
      <WrapLogo>
        <Button type="button">
          <Svg>
            <use href={sprite + `#logo-big`}></use>
          </Svg>{' '}
        </Button>
      </WrapLogo>
    </>
  );
};

export default Logo;
