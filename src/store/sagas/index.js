import { put, all, takeEvery } from 'redux-saga/effects';
import APIs from 'api';
import { FETCH_TAGS_REQUEST, fetchTagsSuccess, fetchTagsFailure } from '../actions';

export function* fetchTags() {
  try {
    const res = yield APIs.fetchTags();
    yield put(fetchTagsSuccess(res.data.items));
  } catch (err) {
    yield put(fetchTagsFailure(err));
  }
}

function* rootSaga() {
  yield all([takeEvery(FETCH_TAGS_REQUEST, fetchTags)]);
}

export default rootSaga;
