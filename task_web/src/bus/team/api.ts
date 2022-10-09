import {AxiosPromise} from 'axios';

import axios from '@/services/axios';

import {Team} from '@/bus/team';

export const apiTeam = new (class Api {
  fetchDetail({id}: Team.ReqFetchDetail): AxiosPromise<Team.ResFetchDetail> {
    return axios({
      url: `/teams/${id}`,
      method: 'get',
    });
  }

  fetchItems(params: Team.ReqFetchItems): AxiosPromise<Team.ResFetchItems> {
    return axios({
      url: '/teams',
      method: 'get',
      params,
    });
  }
})();
