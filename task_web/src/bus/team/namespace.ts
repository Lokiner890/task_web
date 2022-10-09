import {User} from '../user';

export namespace Team {
  export type Item = User.Item;
  export type Detail = Item;

  export type ReqFetchItems = {};
  export type ResFetchItems = Item[];

  export type ReqFetchDetail = {
    id: string;
  };
  export type ResFetchDetail = {
    lead: Detail;
    children: Item[];
  };
}
