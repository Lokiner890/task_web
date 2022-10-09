import {AxiosPromise} from 'axios';

import axios from '@/services/axios';

import {Project} from '@/bus/project';

export const apiProject = new (class Api {
  createItem(
    project: Project.ReqCreateItem,
  ): AxiosPromise<Project.ResCreateItem> {
    return axios({
      url: '/projects',
      method: 'post',
      data: {project},
    });
  }

  fetchItems(): AxiosPromise<Project.ResFetchItems> {
    return axios({url: '/projects', method: 'get'});
  }

  fetchDetail({
    id,
  }: Project.ReqFetchDetail): AxiosPromise<Project.ResFetchItems> {
    return axios({url: `/projects/${id}`, method: 'get'});
  }
})();
