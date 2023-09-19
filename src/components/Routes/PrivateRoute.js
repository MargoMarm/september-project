import { Navigate } from 'react-router-dom';
import { UseAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = UseAuth();
  const shouldRedirect = isLoggedIn && !isRefreshing;

  console.log(shouldRedirect);
  return shouldRedirect ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
