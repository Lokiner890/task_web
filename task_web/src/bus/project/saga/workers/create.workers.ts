import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {CreateItemAsync} from '../../types';
import {apiProject} from '../../api';

export function* createItem(action: CreateItemAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'project', loading: true}));

    const response = yield call(apiProject.createItem, action.payload);
  } catch (e) {
    console.log(`error create project item worker ${1}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'project', loading: false}));
  }
}
