import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {FetchDetailAsync, FetchItemsAsync} from '../../types';
import {apiTeam} from '../../api';
import {AxiosResponse} from 'axios';
import {Team} from '../../namespace';
import {teamActions} from '../../slice';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'team', loading: true}));

    const response: AxiosResponse<Team.ResFetchItems> = yield call(
      apiTeam.fetchItems,
      action.payload,
    );

    if (response.data) {
      yield put(teamActions.saveItems(response.data));
    }
  } catch (e) {
    console.log(`error fetch team items worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'team', loading: false}));
  }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    yield put(uiActions.toggleLoader({name: 'team', loading: true}));

    const response: AxiosResponse<Team.ResFetchDetail> = yield call(
      apiTeam.fetchDetail,
      action.payload,
    );

    if (response.data) {
      yield put(teamActions.saveDetail(response.data));
    }
  } catch (e) {
    console.log(`error fetch team detail worker ${e}`);
  } finally {
    yield put(uiActions.toggleLoader({name: 'team', loading: false}));
  }
}
