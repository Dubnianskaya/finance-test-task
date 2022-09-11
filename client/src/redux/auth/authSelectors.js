export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserMail = state => state.auth?.user?.email;
export const getUserFavotite = state => state.auth?.user?.favorite;
export const getIsRefreshing = state =>
  state.auth.isRefreshing;
  export const getError = state => state.auth.isError;