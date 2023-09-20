import { logOutUser } from '../redux/auth/operation';

const handleLogout = dispatch => {
  dispatch(logOutUser());
};

export default handleLogout;
