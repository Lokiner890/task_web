import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {SignUpAsync} from '../../types';
import {AxiosResponse} from 'axios';
import {Auth} from '../../namespace';
import {apiAuth} from '../../api';

export function* signUp(action: SignUpAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'auth', loading: true}));

    const response: AxiosResponse<Auth.ResSignUp> = yield call(
      apiAuth.signUp,
      action.payload,
    );

    console.log(response.data);
  } catch (e) {
    console.log(`error sign up worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'auth', loading: false}));
  }
}
