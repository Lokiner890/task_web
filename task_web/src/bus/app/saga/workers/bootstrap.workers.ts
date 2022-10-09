// import {profileActions} from './../../../profile/slice';
import {all, put, call, take} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';

// import {types as authTypes} from 'src/bus/auth/types';
import {types as userTypes} from '@/bus/user/types';
// import {types as userTypes} from 'src/bus/user/types';

// import {userActions} from './../../../user/slice';
import {appActions} from './../../slice';
import {userActions} from '@/bus/user';
// import {authActions} from 'src/bus/auth';

export function* bootstrap(): SagaIterator {
  try {
    yield all([
      // put(authActions.fetchTokenAsync()),
      // put(profileActions.fetchSavedItemsAsync()),
      put(userActions.fetchCurrentAsync()),
    ]);
    yield all([
      //   take(authTypes.END_FETCH_TOKEN),
      //   take(profileTypes.END_FETCH_SAVED_ITEMS),
      take(userTypes.END_FETCH_CURRENT),
    ]);
  } catch (e) {
    console.log(`error bootstrap worker ${e}`);
  } finally {
    yield put(appActions.toggleInitialized(true));
  }
}
