import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => state.project.items;
export const getDetail = (state: RootState) => state.project.detail;
