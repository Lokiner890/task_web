import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {TeamState, types, TeamActionTypes} from './types';
import {Team} from './namespace';

const initialState: TeamState = {
  items: [],

  detail: null,
  children: [],
};

const slice = createSlice({
  initialState,
  name: 'Team',
  reducers: {
    saveItems: (
      state: TeamState,
      action: PayloadAction<Team.ResFetchItems>,
    ) => {
      state.items = action.payload;
    },

    saveDetail: (
      state: TeamState,
      action: PayloadAction<Team.ResFetchDetail>,
    ) => {
      state.detail = action.payload.lead;
      state.children = action.payload.children;
    },
    clearDetail: (state: TeamState) => {
      state.detail = null;
      state.children = [];
    },
  },
});

export default slice.reducer;

export const teamActions = {
  ...slice.actions,
  fetchItemsAsync: (payload: Team.ReqFetchItems): TeamActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  fetchDetailAsync: (payload: Team.ReqFetchDetail): TeamActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),
};
