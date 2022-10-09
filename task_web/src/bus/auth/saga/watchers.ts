import {SagaIterator} from 'redux-saga';
import {all, call, takeEvery} from 'redux-saga/effects';
import {types} from '../types';

import {signIn, signUp} from './workers';

function* watchSignIn(): SagaIterator {
  yield takeEvery(types.SIGN_IN, signIn);
}

function* watchSignUp(): SagaIterator {
  yield takeEvery(types.SIGN_UP, signUp);
}

export function* watchAuth(): SagaIterator {
  yield all([call(watchSignIn), call(watchSignUp)]);
}
