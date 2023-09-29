import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UseAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing, user } = UseAuth();
  const shouldRedirect = isLoggedIn && !isRefreshing;

  const emptyUserParams = Object.keys(user.bodyParameters).length === 0;

  return shouldRedirect ? (
    component
  ) : (
    <Navigate to={emptyUserParams ? '/params' : redirectTo} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
