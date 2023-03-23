import ContactForm from '../components/ContactForm';
import ContactFilter from '../components/ContactFilter';
import ContactList from '../components/ContactList';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contactSlice';

export function Phonebook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>

      <ContactFilter />
      <ContactList />
    </div>
  );
}

export default Phonebook;
