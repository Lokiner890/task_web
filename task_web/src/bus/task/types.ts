import {Task} from './namespace';

export enum types {}

export type TaskState = {
  frontItems: Task.Item[];
  backItems: Task.Item[];
};

export type TaskActionTypes = {};
