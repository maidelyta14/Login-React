import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authThunks';

const savedUser = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: savedUser || null,
  isAuthenticated: !!savedUser,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('user');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error al iniciar sesión';
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
