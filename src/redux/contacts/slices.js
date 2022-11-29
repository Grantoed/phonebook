import { createSlice } from '@reduxjs/toolkit';
import { fetch, add, remove } from '../contacts/operations';

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
  extraReducers: buider => {
    buider
      .addCase(fetch.pending, handlePending)
      .addCase(fetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetch.rejected, handleRejected)
      .addCase(add.pending, handlePending)
      .addCase(add.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(add.rejected, handleRejected)
      .addCase(remove.pending, handlePending)
      .addCase(remove.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(remove.rejected, handleRejected);
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

export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;
