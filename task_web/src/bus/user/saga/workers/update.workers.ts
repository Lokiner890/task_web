import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {UpdateCurrentAsync} from '../../types';
import {apiUser} from '../../api';

export function* updateCurrent(action: UpdateCurrentAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'user', loading: true}));

    const response = yield call(apiUser.updateCurrent, action.payload);
  } catch (e) {
    console.log(`error update current user worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'user', loading: false}));
  }
}
