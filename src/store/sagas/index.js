/* eslint-disable no-unused-vars */
import { put, all, takeEvery } from 'redux-saga/effects';
import APIs from 'api';
import {
  FETCH_TAGS_REQUEST, fetchTagsSuccess, fetchTagsFailure,
  FETCH_QUESTIONS_REQUEST, fetchQuestionsSuccess, fetchQuestionsFailure
} from '../actions';

export function* fetchTags() {
  try {
    const res = yield APIs.fetchTags();
    yield put(fetchTagsSuccess(res.data.items));
  } catch (err) {
    yield put(fetchTagsFailure(err));
  }
}

export function* fetchQuestions({ payload: tagged }) {
  try {
    const res = yield APIs.fetchQuestions({ tagged });
    yield put(fetchQuestionsSuccess(res.data.items));
  } catch (err) {
    yield put(fetchQuestionsFailure(err));
  }
}

function* rootSaga() {
  yield all([
    takeEvery(FETCH_TAGS_REQUEST, fetchTags),
    takeEvery(FETCH_QUESTIONS_REQUEST, fetchQuestions)
  ]);
}

export default rootSaga;
