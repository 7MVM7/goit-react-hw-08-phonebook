import React from "react";
import shortid from 'shortid';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MyList } from "./ContactsList.styled";
import { onFilteredContacts,isLoad  } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContact } from '../../redux/back-end';


function ContactsList () {
  const contacts = useSelector(onFilteredContacts);
  const loader = useSelector(isLoad);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);


  return (
    !loader &&
    contacts && (
    <MyList>
      {contacts.map(({ name, number, id }) => (
        <li className="contact" key={shortid.generate()}>
          <p>
            {name}: {number}
          </p>
          <button
            className="buttonDelete"
            type="button"
            onClick={() => dispatch (deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </MyList>
    )
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactsList;
