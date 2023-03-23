import styles from '../../components/ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { useState } from 'react';
export const AuthForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Форма регистрации</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <input
            value={name}
            type="text"
            name="name"
            required
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter name"
          />
        </label>
        <label className={styles.label}>
          <input
            value={email}
            type="email"
            name="email"
            required
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter email"
          />
        </label>
        <label className={styles.label}>
          <input
            value={password}
            type="text"
            name="password"
            required
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter password"
          />
        </label>
        <button type="submit" className={styles.button}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
