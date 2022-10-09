import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {AuthActionTypes, AuthState, SignInAsync, types} from './types';
import {Auth} from './namespace';

const initialState: AuthState = {
  logged: false,
};

const slice = createSlice({
  initialState,
  name: 'Auth',
  reducers: {
    toggleLogged: (state: AuthState, action: PayloadAction<boolean>) => {
      state.logged = action.payload;
    },
  },
});

export default slice.reducer;

export const authActions = {
  ...slice.actions,
  //ASYNC
  signInAsync: (payload: Auth.ReqSignIn): AuthActionTypes => ({
    type: types.SIGN_IN,
    payload,
  }),
  signUpAsync: (payload: Auth.ReqSignUp): AuthActionTypes => ({
    type: types.SIGN_UP,
    payload,
  }),
};
