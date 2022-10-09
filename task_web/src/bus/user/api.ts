import {AxiosPromise} from 'axios';

import axios from '@/services/axios';

import {User} from '@/bus/user';

export const apiUser = new (class Api {
  fetchCurrent(): AxiosPromise<User.ResFetchCurrent> {
    return axios({
      url: 'users/current',
      method: 'get',
    });
  }
  updateCurrent(
    data: User.ReqUpdateCurrent,
  ): AxiosPromise<User.ResUpdateCurrent> {
    return axios({
      url: 'users/current',
      method: 'patch',
      data,
    });
  }
})();
