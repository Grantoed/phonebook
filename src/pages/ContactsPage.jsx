import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';

export const ContactsPage = () => {
  return (
    <Box width="400px">
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </Box>
  );
};
