import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {SignInAsync} from '../../types';
import {apiAuth} from '../../api';
import {AxiosResponse} from 'axios';
import {Auth} from '../../namespace';
import {authActions} from '../../slice';
import {userActions} from '@/bus/user';

export function* signIn(action: SignInAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: true}));

    const response: AxiosResponse<Auth.ResSignIn> = yield call(
      apiAuth.signIn,
      action.payload,
    );

    yield put(authActions.toggleLogged(true));

    // yield put(userActions.fetchDetailAsync());
  } catch (e) {
    console.log(`error sign in worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: false}));
  }
}
