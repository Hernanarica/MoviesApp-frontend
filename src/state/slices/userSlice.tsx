import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: null,
	userName: null,
	email: null,
	token: null
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: () => {
		},
		register: () => {
		},
		logout: () => {
		}
	}
});

export const { login, register, logout } = userSlice.actions;