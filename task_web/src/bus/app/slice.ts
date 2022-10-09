import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {App} from './namespace';

import {AppActionTypes, AppState, types} from './types';

const initialState: AppState = {
  initialized: false,
};

const slice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    toggleInitialized: (state: AppState, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
  },
});

export default slice.reducer;

export const appActions = {
  ...slice.actions,
  bootstrapAsync: (): AppActionTypes => ({
    type: types.BOOTSTRAP,
    payload: {},
  }),
};
