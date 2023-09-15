import { Button, WrapLogo, Svg } from './Logo.styled';
import PropTypes from 'prop-types';
import sprite from '../../../assets/sprite.svg';

export const Logo = ({ biglogo }) => {
  return (
    <>
      <WrapLogo>
        <Button type="button">
          <Svg>
            {biglogo ? (
              <use href={sprite + `#logo-small`}></use>
            ) : (
              <use href={sprite + `#logo-big`}></use>
            )}
          </Svg>{' '}
        </Button>
      </WrapLogo>
    </>
  );
};

Logo.propTypes = {
  biglogo: PropTypes.any,
};

export default Logo;
