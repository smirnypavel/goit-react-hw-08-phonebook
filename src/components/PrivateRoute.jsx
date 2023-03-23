import { Navigate } from 'react-router-dom';
import { getIsloggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isloggedIn = useSelector(getIsloggedIn);
  return !isloggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
