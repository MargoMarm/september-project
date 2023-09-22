import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/auth/selectors';

export const UseAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    error,
  };
};
