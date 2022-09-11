import { createSlice } from '@reduxjs/toolkit';

import * as authOperations from './authOperations';

const initialState = {
  user: { email: null, favorite: [] },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isError: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {

    [authOperations.register.pending](state, _) {
      state.isError = null;
    },
    [authOperations.register.fulfilled](
      state,
      { payload }
    ) {
      state.user = payload;
      state.isError = null;
    },
    [authOperations.register.rejected](state, _) {
      state.isError = true;
    },

    [authOperations.logIn.pending](state, _) {
      state.isError = null;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isError = null;
    },
    [authOperations.logIn.rejected](state, _) {
      state.isError = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { email: null, favorite: [] };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](
      state,
      action
    ) {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
    [authOperations.fetchUserFavorites.pending](state, _) {
      state.isError = null;
    },
    [authOperations.fetchUserFavorites.fulfilled](state,  action) {
      state.user.favorite = action.payload.favorite;
      state.isError = null;
    },
    [authOperations.fetchUserFavorites.rejected](state, _) {
      state.isError = true;
    },
  },
});

export const auth = authSlice.reducer;