import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { useState } from 'react';
import Notiflix from 'notiflix';
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contactSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = contacts.items;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const isContactExist =
      filter.length > 0 &&
      filter.find(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      );
    if (isContactExist) {
      Notiflix.Notify.failure(`${name} ${number} is already in contacts`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          required
          className={styles.input}
          placeholder="Enter name"
        />
      </label>
      <label className={styles.label}>
        <input
          value={number}
          onChange={handleChange}
          type="tel"
          name="phone"
          required
          className={styles.input}
          placeholder="Enter phone number"
        />
      </label>
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
