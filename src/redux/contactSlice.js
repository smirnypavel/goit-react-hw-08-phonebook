import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// const BASE_URL = 'https://64198550f398d7d95d41c7b5.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async credentials => {
    try {
      const { data } = await axios.get('/contacts', credentials);
      return data;
    } catch (error) {
      throw Error(`Error fetching contacts: ${error.message}`);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      throw Error(`Error fetching contacts: ${error.message}`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      throw Error(`Error deleting contact: ${error.message}`);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.pending, state => {
        state.loading = 'loading';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = 'loading';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default contactsSlice.reducer;
