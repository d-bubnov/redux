import { all } from 'redux-saga/effects';

import { assessorsSaga } from './assessors';

export function* rootSaga() {
  yield all([
    assessorsSaga(),
  ]);
}
