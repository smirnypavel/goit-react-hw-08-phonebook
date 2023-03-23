import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import SharedLayout from './SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
const Phonebook = lazy(() => import('../Pages/Phonebook'));
const Home = lazy(() => import('../Pages/Home'));
const NotFound = lazy(() => import('../Pages/notFaund/notFaund'));
const AuthForm = lazy(() => import('../Pages/AuthForm/AuthForm'));
const LoginForm = lazy(() => import('../Pages/LoginForm'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route
            path="phonebook"
            element={
              <PrivateRoute component={Phonebook} redirectTo="/loginform" />
            }
          />
          <Route
            path="authform"
            element={
              <RestrictedRoute component={AuthForm} redirectTo="/phonebook" />
            }
          />
          <Route
            path="loginform"
            element={
              <RestrictedRoute component={LoginForm} redirectTo="/phonebook" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
