import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UseAuth } from '../../hooks/useAuth';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = UseAuth();
  const shouldRedirect = isLoggedIn && !isRefreshing;

  return shouldRedirect ? component : <Navigate to={redirectTo} />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;
