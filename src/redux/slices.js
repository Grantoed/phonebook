import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { fetch, add, remove } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetch.pending]: handlePending,
    [add.pending]: handlePending,
    [remove.pending]: handlePending,
    [fetch.rejected]: handleRejected,
    [add.rejected]: handleRejected,
    [remove.rejected]: handleRejected,
    [fetch.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [add.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [remove.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

const contactsReducer = contactsSlice.reducer;
const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
