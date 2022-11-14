import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';

import {types} from '../types';

import {fetchCurrent, updateCurrent} from './workers';

function* watchFetchCurrent(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchCurrent);
}

function* watchUpdateCurrent(): SagaIterator {
  yield takeEvery(types.UPDATE_DETAIL, updateCurrent);
}

export function* watchUser(): SagaIterator {
  yield all([call(watchFetchCurrent), call(watchUpdateCurrent)]);
}
