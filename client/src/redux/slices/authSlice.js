import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (params) => {
        const { data } = await axios.post('/auth/login', params);
        return data;
    }
);

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async (params) => {
        const { data } = await axios.post('/auth/register', params);
        return data;
    }
);

const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
    extraReducers: {
        [fetchLogin.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchLogin.rejected]: (state) => {
            state.data = null;
            state.status = 'rejected';
        },
        [fetchRegister.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchRegister.rejected]: (state) => {
            state.data = null;
            state.status = 'rejected';
        },
    },
});

export const authReducer = authSlice.reducer;
export const selectIsAuth = (state) => Boolean(state.auth.data);
export const { logout } = authSlice.actions;
