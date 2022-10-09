import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => state.user.items;

export const getDetail = (state: RootState) => state.user.detail;
export const getCurrent = (state: RootState) => state.user.current;
