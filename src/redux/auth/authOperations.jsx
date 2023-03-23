import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    throw Error(`Error fetching contacts: ${error.message}`);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    throw Error(`Error fetching contacts: ${error.message}`);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/users/logOut');
    token.unset();
  } catch (error) {
    throw Error(`Error fetching contacts: ${error.message}`);
  }
});
export const fetchCurrentUser = createAsyncThunk(
  'fetch/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterTokin = state.auth.token;
    if (persisterTokin === null) {
      return thunkAPI.rejectWithValue(); // отклонить!!!
    }
    token.set(persisterTokin);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {}
  }
);
