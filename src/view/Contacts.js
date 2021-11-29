import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContact } from "../redux/back-end";

import ContactsForm from "../Components/ContactsForm/ContactsForm";
import ContactsList from "../Components/ContactsList/ContactsList";
import Filter from "../Components/Filter/Filter";

function Contact() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

export default Contact;
