import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Form = () => {
  const contactsArray = useSelector(selectContacts);

  const dispatch = useDispatch();

  const addContact = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const isContactAdded = contactsArray.some(
      contact => contact.name === name.value
    );

    if (isContactAdded) {
      alert(`${name.value} is Already in contacts`);
    } else {
      dispatch(add({ name: name.value, number: number.value }));
    }
    e.currentTarget.reset();
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { my: 1, mr: '30px', width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={addContact}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mb="20px"
    >
      <TextField
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="name"
        label="Name"
        variant="outlined"
      />
      <TextField
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="number"
        label="Number"
        variant="outlined"
      />
      <Button variant="contained" sx={{ my: 1, mx: 1.5 }} type="submit">
        Add Contact
      </Button>
    </Box>
  );
};
