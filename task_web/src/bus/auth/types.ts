import {App} from '../app';
import {Auth} from './namespace';

export enum types {
  SIGN_IN = 'AUTH/SIGN_IN',
  SIGN_UP = 'AUTH/SIGN_UP',
}

export type AuthState = {
  logged: boolean;
};

export type SignInAsync = App.BaseAction<typeof types.SIGN_IN, Auth.ReqSignIn>;
export type SignUpAsync = App.BaseAction<typeof types.SIGN_UP, Auth.ReqSignUp>;

export type AuthActionTypes = SignInAsync | SignUpAsync;
