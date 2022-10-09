import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {UserState, types, UserActionTypes} from './types';
import {User} from './namespace';

const initialState: UserState = {
  items: [],
  detail: null,

  current: null,
};

const slice = createSlice({
  initialState,
  name: 'User',
  reducers: {
    saveCurrent: (
      state: UserState,
      action: PayloadAction<User.ResFetchCurrent>,
    ) => {
      state.current = action.payload;
    },
    clearCurrent: (state: UserState) => {
      state.current = null;
    },
  },
});

export default slice.reducer;

export const userActions = {
  ...slice.actions,

  fetchCurrentAsync: (): UserActionTypes => ({
    type: types.FETCH_CURRENT,
    payload: {},
  }),
  updateCurrentAsync: (payload: User.ReqUpdateCurrent): UserActionTypes => ({
    type: types.UPDATE_CURRENT,
    payload,
  }),
};
