import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/slices';
import { fetch, remove } from 'redux/contacts/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectFilter,
} from 'redux/contacts/selectors';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { StyledTableCell, StyledTableRow } from './Contacts.styled';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';

export default function MaterialContacts() {
  const contacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isRefreshing && isLoggedIn) {
      dispatch(fetch());
    }
  }, [dispatch, isRefreshing, isLoggedIn]);

  const deleteContact = contactId => {
    dispatch(remove(contactId));
  };

  const handleChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <>
      <TextField
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleChange}
        label="Filter contacts"
        variant="filled"
      />
      {isLoading && <div>Loading...</div>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Number</StyledTableCell>
              <StyledTableCell>Remove</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map(({ name, number, id }) => (
              <StyledTableRow key={id}>
                <StyledTableCell component="th" scope="row">
                  {name}
                </StyledTableCell>
                <StyledTableCell>{number} </StyledTableCell>
                <StyledTableCell>
                  <Tooltip
                    title="Delete"
                    type="button"
                    onClick={() => deleteContact(id)}
                  >
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
