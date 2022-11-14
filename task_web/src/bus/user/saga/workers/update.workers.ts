import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {apiUser} from '../../api';

export function* updateCurrent(): SagaIterator {}
