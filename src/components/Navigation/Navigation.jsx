import { Link } from 'react-router-dom';
import styled from '../../components/SharedLayout/SharedLayout.module.css';
export const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/" className={styled.link}>
          Home
        </Link>
        <Link to="/phonebook" className={styled.link}>
          Phonebook
        </Link>
      </nav>
    </div>
  );
};
export default Navigation;
