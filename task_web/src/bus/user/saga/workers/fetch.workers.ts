import {all, put, call} from 'redux-saga/effects';
import {uiActions} from '@/bus/ui';
import {SagaIterator} from 'redux-saga';
import {AxiosResponse} from 'axios';
import {User} from '../../namespace';
import {apiUser} from '../../api';
import {userActions} from '../../slice';
import {authActions} from '@/bus/auth';

export function* fetchCurrent(): SagaIterator {}
