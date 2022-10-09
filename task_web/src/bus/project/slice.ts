import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {types, ProjectState, ProjectActionTypes} from './types';
import {Project} from './namespace';

const initialState: ProjectState = {
  items: [],
  detail: null,
};

const slice = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    saveItems: (
      state: ProjectState,
      action: PayloadAction<Project.ResFetchItems>,
    ) => {
      state.items = action.payload.projects;
    },
    saveDetail: (
      state: ProjectState,
      action: PayloadAction<Project.Detail>,
    ) => {
      state.detail = action.payload;
    },
  },
});

export default slice.reducer;

export const projectActions = {
  ...slice.actions,

  fetchItemsAsync: (payload: Project.ReqFetchItems): ProjectActionTypes => ({
    type: types.FETCH_ITEMS,
    payload,
  }),
  fetchDetailAsync: (payload: Project.ReqFetchDetail): ProjectActionTypes => ({
    type: types.FETCH_DETAIL,
    payload,
  }),
  createItemAsync: (payload: Project.ReqCreateItem): ProjectActionTypes => ({
    type: types.CREATE_ITEM,
    payload,
  }),
  updateItemAsync: (payload: Project.ReqUpdateItem): ProjectActionTypes => ({
    type: types.UPDATE_ITEM,
    payload,
  }),
};
