import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userAPI from '../../services/userAPI';

const token = userAPI.token;

export const register = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.fetchRegister(
        userData
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await userAPI.fetchLogIn(
        userData
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      await userAPI.fetchLogOut();
      token.unset();
    } catch (error) {
      return error.rejectWithValue();
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await userAPI.fetchUsers();
      return data;
    } catch (error) {
      return error.rejectWithValue();
    }
  }
);

export const fetchUserFavorites = createAsyncThunk(
  'auth/favorite',
  async (userData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await userAPI.fetchFavorites(
        userData
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);