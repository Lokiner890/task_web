import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => ({
  front: state.task.frontItems,
  back: state.task.backItems,
});
