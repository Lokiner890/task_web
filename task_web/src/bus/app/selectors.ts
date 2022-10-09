import {RootState} from 'src/store/rootReducer';

export const getInitialized = (state: RootState) => state.app.initialized;
