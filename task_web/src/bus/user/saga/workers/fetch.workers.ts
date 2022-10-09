import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {FetchCurrentAsync, types} from '../../types';
import {AxiosResponse} from 'axios';
import {User} from '../../namespace';
import {apiUser} from '../../api';
import {userActions} from '../../slice';
import {authActions} from '@/bus/auth';

export function* fetchCurrent(action: FetchCurrentAsync): SagaIterator {
  try {
    const response: AxiosResponse<User.ResFetchCurrent> = yield call(
      apiUser.fetchCurrent,
    );

    yield all([
      put(authActions.toggleLogged(true)),
      put(userActions.saveCurrent(response.data)),
    ]);
  } catch (e) {
    console.log(`error fetch current user worker ${e}`);
  } finally {
    yield put({type: types.END_FETCH_CURRENT});
  }
}
