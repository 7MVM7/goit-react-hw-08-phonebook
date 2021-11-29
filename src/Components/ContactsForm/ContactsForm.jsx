import { useState } from 'react';
import PropTypes from 'prop-types';
import { MyForm } from "./ContactsForm.styled";
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors.js';
import { addContact } from '../../redux/back-end';

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

 
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

 
  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.map(contact => contact.name).includes(name)) {
      alert(`Sorry, but ${name} is already in contacs.`);
      return;
    }

    dispatch(addContact({ name, number }));
   
    reset();
  };

  
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <MyForm onSubmit={handleSubmit}>
            <label>
             
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
         Number
           </label>

      
       
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
    
    <button type="submit">Add contact</button>
    </MyForm>
  );
}

ContactsForm.PropsType = {
  onSubmit: PropTypes.func.isRequired,
};


export default ContactsForm;

