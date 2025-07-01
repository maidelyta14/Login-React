export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;
export const selectIsAuthenticated = (state) => !!state.auth.user;
export const selectAuth = (state) => state.auth;
