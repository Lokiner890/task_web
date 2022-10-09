import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {UpdateItemAsync} from '../../types';

export function* updateItem(action: UpdateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'project', loading: true}));
  } catch (e) {
    console.log(`error update project item worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'project', loading: false}));
  }
}
