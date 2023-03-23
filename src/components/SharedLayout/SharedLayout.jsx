import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { getIsloggedIn } from '../../redux/auth/authSelectors';
import styled from './SharedLayout.module.css';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UesrMenu/UserMenu';
import { useSelector } from 'react-redux';

// import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getIsloggedIn);
  return (
    <div>
      <header className={styled.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
