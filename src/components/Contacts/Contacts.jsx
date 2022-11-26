import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/slices';
import { fetch, remove } from 'redux/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectFilter,
} from 'redux/selectors';
import {
  ContactsList,
  ContactsItem,
  FilterLabel,
  FilterInput,
  DeleteBtn,
} from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const handleChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
      {isLoading && <div>Loading...</div>}
      <ContactsList>
        {contacts.map(({ name, phone, id }) => {
          return (
            <ContactsItem key={id}>
              {name}: {phone}
              <DeleteBtn type="button" onClick={() => deleteContact(id)}>
                Delete
              </DeleteBtn>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};
