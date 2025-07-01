import { createAsyncThunk } from '@reduxjs/toolkit';
import { authenticateUser } from '../services/authService';

export const loginUser = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const user = await authenticateUser(credentials);
    if (!user) {
      throw new Error('Credenciales inválidas');
    }
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
