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
  } catch (error) {}
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/users/logOut');
    token.unset();
  } catch (error) {}
});

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import { toast } from 'react-hot-toast';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };
// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/signup', credentials);
//       setAuthHeader(res.data.token);
//       // toast.success('Signuped successfully');
//       return res.data;
//     } catch (error) {
//       // toast.error('User info is not valid');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/login', credentials);
//       setAuthHeader(res.data.token);
//       // toast.success('Logined successfully');
//       return res.data;
//     } catch (error) {
//       // toast.error('User can not be found');
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//     // toast.success('Logout successfully');
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
