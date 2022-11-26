import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { Box } from 'components/Box';

import {
  ContactForm,
  ContactLabel,
  ContactInput,
  SubmitButton,
} from './Form.styled';

export const Form = () => {
  const contactsArray = useSelector(selectContacts);

  const dispatch = useDispatch();

  const addContact = e => {
    e.preventDefault();
    const { name, phone } = e.target.elements;
    const isContactAdded = contactsArray.some(
      contact => contact.name === name.value
    );

    if (isContactAdded) {
      alert(`${name.value} is Already in contacts`);
    } else {
      dispatch(add({ name: name.value, phone: phone.value }));
    }
    e.currentTarget.reset();
  };

  return (
    <ContactForm onSubmit={addContact}>
      <Box dispay="flex" flexDirection="column" mb="20px">
        <ContactLabel htmlFor="name">Name</ContactLabel>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
        />
      </Box>
      <Box dispay="flex" flexDirection="column" mb="20px">
        <ContactLabel htmlFor="phone">Phone</ContactLabel>
        <ContactInput
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="phone"
        />
      </Box>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </ContactForm>
  );
};
