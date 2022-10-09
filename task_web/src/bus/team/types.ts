import {App} from '../app';
import {Team} from './namespace';

export enum types {
  FETCH_ITEMS = 'TEAM/FETCH_ITEMS',
  FETCH_DETAIL = 'TEAM/FETCH_DETAIL',
}

export type TeamState = {
  items: Team.Item[];

  detail: Team.Detail | null;
  children: Team.Item[];
};

export type FetchItemsAsync = App.BaseAction<
  typeof types.FETCH_ITEMS,
  Team.ReqFetchItems
>;
export type FetchDetailAsync = App.BaseAction<
  typeof types.FETCH_DETAIL,
  Team.ReqFetchDetail
>;

export type TeamActionTypes = FetchDetailAsync | FetchItemsAsync;
