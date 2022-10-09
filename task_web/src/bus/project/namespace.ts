import {Task} from '../task';
import {User} from '../user';

export namespace Project {
  export type Item = {
    _id: string;
    deadline: string;
    title: string;
    desc: string;
    status: number;
  };

  export type Detail = Item & {};

  export type ReqFetchItems = {};
  export type ResFetchItems = {
    projects: Item[];
  };

  export type ReqFetchDetail = {
    id: string;
  };
  export type ResFetchDetail = {
    tasks: Task.SaveItemsPayload;
    project: Project.Detail;
  };

  type Field = {
    value: string;
  };

  //TODO: fix it

  export type Form<T = any, U = User.Item> = {
    title: string;
    deadline: string;
    shortDescription: string;
    desc: string;
    links: Field[];
    designLinks: Field[];
   
    lead: U | null;

    budget: string;
    comment: string;

    tasks: {
      frontend: T[];
      backend: T;
    };
  };

  export type Task = {
    name: string;
    tasks: Task[];
  };

  export type ReqCreateItem = Form<Task, string>;
  export type ResCreateItem = {};

  export type ReqUpdateItem = {
    id: string;
    project: Form;
  };
}
