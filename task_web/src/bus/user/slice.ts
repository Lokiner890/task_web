import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {UserState, types, UserActionTypes, UpdateDetailAsync} from './types';
import {User} from './namespace';

const initialState: UserState = {
  items: [],
  detail: null,

  current: null,
};

const slice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    saveDetail: (state: UserState, action: PayloadAction<User.Detail>) => {
      state.detail = action.payload;
    },

    clearDetail: (state: UserState) => {
      state.detail = null;
    },
  },
});

export default slice.reducer;

export const userActions = {
  ...slice.actions,
  updateDetailAsync: (payload: User.ReqUpdateDetail): UpdateDetailAsync => ({
    type: types.UPDATE_DETAIL,
    payload,
  }),

  fetchDetailAsync: (): UserActionTypes => ({
    type: types.FETCH_DETAIL,
    payload: {},
  }),
};
