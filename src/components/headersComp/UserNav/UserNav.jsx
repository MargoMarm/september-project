import CustomNavLink from '../../CustomNavLink/CustomNavLink';
import { WrapUserNav, Button, Svg, ButtonWrap ,Span} from './UserNav.styled';
import sprite from '../../../assets/sprite.svg';

export const UserNav = () => {
  return (
    <WrapUserNav>
      <CustomNavLink text="Diary" isinheader={'true'} />
      <CustomNavLink text="Products" isinheader={'true'} />
      <CustomNavLink text="Exercises" isinheader={'true'} />
      <ButtonWrap>
        <Button>
          <Svg>
            <use href={sprite + `#fire`}></use>
          </Svg>{' '}
        </Button>
        <Button>
          <Svg>
            <use href={sprite + `#fire`}></use>
          </Svg>{' '}
        </Button>
        <Button>
          <Span>Logout</Span>
          <Svg>
            <use href={sprite + `#fire`}></use>
          </Svg>{' '}
        </Button>
      </ButtonWrap>
    </WrapUserNav>
  );
};

export default UserNav;
