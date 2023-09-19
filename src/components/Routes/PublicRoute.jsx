import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UseAuth } from '../../hooks/useAuth';

const PublicRoute = ({ component, redirectTo }) => {
  const { isLoggedIn } = UseAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

PublicRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};

export default PublicRoute;
