import { Link } from 'react-router-dom';
import styled from '../../components/SharedLayout/SharedLayout.module.css';
export const AuthNav = () => {
  return (
    <div>
      <nav>
        <Link to="./authform" className={styled.link}>
          SingAp
        </Link>
        <Link to="./loginform" className={styled.link}>
          LogIn
        </Link>
      </nav>
    </div>
  );
};
export default AuthNav;
