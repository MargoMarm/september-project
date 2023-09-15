import CustomNavLink from '../../CustomNavLink/CustomNavLink';
import {WrapUserNav} from "./UserNav.styled"

export const UserNav = () => {
  return (
    <WrapUserNav>
      <CustomNavLink text="Diary" isinheader={'true'} />
      <CustomNavLink text="Products" isinheader={'true'} />
      <CustomNavLink text="Exercises" isinheader={'true'} />
    </WrapUserNav>
  );
};

export default UserNav;
