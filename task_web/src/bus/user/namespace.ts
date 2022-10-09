import {App} from '../app';

export namespace User {
  export type Item = {
    _id: string;
    avatar: App.Image | null;
    fullName: string;
    email: string;
    salary: number;
    phone: string;
    accessLevel: number;
  };

  export type Detail = Item & {};

  export type ResFetchCurrent = Detail;

  export type ReqUpdateCurrent = {
    email: string;
    fullName: string;
    phone: string;
  };
  export type ResUpdateCurrent = {};
}
