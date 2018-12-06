import { takeLatest, put, call, all } from 'redux-saga/effects';

import { addAssessors } from '../actions'

import { ASSESSORS_REQUEST, ASSESSORS_SUCCESS, ASSESSORS_FAIL } from '../types';

const data = [
  { id: '6', firstname: 'Lorem', lastname: "Doe", email: 'john.doe@example.local'},
  { id: '7', firstname: 'Ipsum', lastname: "333", email: 'jan13e.doe@example.local'}
];

export function* loadAssessors() {
  try {
    const assessors = yield call(() => Promise.resolve(data));
    yield put(addAssessors(assessors));
    yield put({ type: ASSESSORS_SUCCESS });
  } catch(ex) {
    yield put({ type: ASSESSORS_FAIL });
  }
}

export function* watchLoadAssessors() {
  yield takeLatest(ASSESSORS_REQUEST, loadAssessors);
}

export function* assessorsSaga() {
  yield all([
    watchLoadAssessors(),
  ]);
}


