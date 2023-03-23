import styles from '../../components/ContactForm/ContactForm.module.css';
import { login } from 'redux/auth/authOperations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div>
      <h2>Форма авторизации</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <input
            value={email}
            type="email"
            name="email"
            required
            className={styles.input}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          <input
            value={password}
            type="text"
            name="password"
            required
            className={styles.input}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          авторизироваться
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
