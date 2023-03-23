import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUser);

  return (
    <div>
      <span>добро пожаловать {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </button>
    </div>
  );
};
export default UserMenu;
