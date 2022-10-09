import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';
import {bootstrap} from './workers';

function* watchBootstrap(): SagaIterator {
  yield takeEvery(types.BOOTSTRAP, bootstrap);
}

export function* watchApp(): SagaIterator {
  yield all([call(watchBootstrap)]);
}
