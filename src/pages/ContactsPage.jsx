import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import MaterialContacts from 'components/Contacts/MaterialContacts';

export const ContactsPage = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      width="75vw"
      ml="auto"
      mr="auto"
    >
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <MaterialContacts />
      </Section>
    </Box>
  );
};
