import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {TaskActionTypes, TaskState, types} from './types';
import {Task} from './namespace';

const initialState: TaskState = {
  backItems: [],
  frontItems: [],
};

const slice = createSlice({
  initialState,
  name: 'Task',
  reducers: {
    saveItems: (
      state: TaskState,
      action: PayloadAction<Task.SaveItemsPayload>,
    ) => {
      state.frontItems = action.payload.front;
      state.backItems = action.payload.back;
    },
  },
});

export default slice.reducer;

export const taskActions = {
  ...slice.actions,
};
