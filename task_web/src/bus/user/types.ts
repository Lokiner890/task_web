import {App} from '../app';
import {User} from './namespace';

export enum types {
  FETCH_CURRENT = 'USER/FETCH_CURRENT',

  UPDATE_CURRENT = 'USER/UPDATE_CURRENT',

  END_FETCH_CURRENT = 'USER/END_FETCH_CURRENT',
}

export type UserState = {
  items: User.Item | [];
  detail: User.Detail | null;

  current: User.Detail | null;
};

export type FetchCurrentAsync = App.BaseAction<typeof types.FETCH_CURRENT>;
export type UpdateCurrentAsync = App.BaseAction<
  typeof types.UPDATE_CURRENT,
  User.ReqUpdateCurrent
>;

export type UserActionTypes = FetchCurrentAsync | UpdateCurrentAsync;
