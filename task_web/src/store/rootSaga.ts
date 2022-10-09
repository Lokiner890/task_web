import {all, call} from 'redux-saga/effects';

//watchers
import {watchApp} from '@/bus/app/saga/watchers';
import {watchAuth} from '@/bus/auth/saga/watchers';
import {watchUser} from '@/bus/user/saga/watchers';


function* rootSaga() {
  try {
    yield all([
      call(watchApp),
      call(watchAuth),
      call(watchUser),

    ]);
  } catch (e) {
    console.log(`⛔️ error start root saga ${e}`);
  }
}

export default rootSaga;
