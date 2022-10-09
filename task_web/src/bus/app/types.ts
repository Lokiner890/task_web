import {App} from './namespace';

export enum types {
  BOOTSTRAP = 'APP/BOOTSTRAP',
}

//STATE

export type AppState = {
  initialized: boolean;
};

//ASYNC

export type BootstrapAsync = App.BaseAction<typeof types.BOOTSTRAP>;

export type AppActionTypes = BootstrapAsync;
