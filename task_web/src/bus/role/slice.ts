import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RoleState} from './types';
import {Role} from './namespace';

const initialState: RoleState = {
  detail: null,
};

const slice = createSlice({
  name: 'Role',
  initialState,
  reducers: {
    saveRole: (state: RoleState, action: PayloadAction<Role.Item>) => {
      state.detail = action.payload;
    },
    clearRole: (state: RoleState) => {
      state.detail = null;
    },
  },
});

export default slice.reducer;

export const roleActions = {
  ...slice.actions,
};
