import {RootState} from '@/store/rootReducer';

export const getItems = (state: RootState) => state.team.items;

export const getDetail = (state: RootState) => state.team.detail;
export const getChildren = (state: RootState) => state.team.children;
