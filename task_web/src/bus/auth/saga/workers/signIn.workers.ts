import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {SignInAsync} from '../../types';
import {apiAuth} from '../../api';
import {AxiosResponse} from 'axios';
import {Auth} from '../../namespace';
import {authActions} from '../../slice';

export function* signIn(action: SignInAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'auth', loading: true}));

    const response: AxiosResponse<Auth.ResSignIn> = yield call(
      apiAuth.signIn,
      action.payload,
    );

    yield all([put(authActions.toggleLogged(true))]);

    console.log(response.data);
  } catch (e) {
    console.log(`error sign in worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'auth', loading: false}));
  }
}
