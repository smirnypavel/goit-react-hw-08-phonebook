import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout';
const Phonebook = lazy(() => import('../Pages/Phonebook'));
const Home = lazy(() => import('../Pages/Home'));
const NotFound = lazy(() => import('../Pages/notFaund/notFaund'));
// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const AuthForm = lazy(() => import('../Pages/AuthForm/AuthForm'));
const LoginForm = lazy(() => import('../Pages/LoginForm'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="authform" element={<AuthForm />} />
          <Route path="loginform" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
