export const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_FAILURE = 'FETCH_TAGS_FAILURE';

export const fetchTagsRequest = (payload) => ({
  type: FETCH_TAGS_REQUEST,
  payload
});

export const fetchTagsSuccess = (payload) => ({
  type: FETCH_TAGS_SUCCESS,
  payload
});

export const fetchTagsFailure = (payload) => ({
  type: FETCH_TAGS_FAILURE,
  payload
});

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';
export const ADD_QUESTIONS = 'ADD_QUESTIONS';

export const fetchQuestionsRequest = (payload) => ({
  type: FETCH_QUESTIONS_REQUEST,
  payload
});

export const fetchQuestionsSuccess = (payload) => ({
  type: FETCH_QUESTIONS_SUCCESS,
  payload
});

export const fetchQuestionsFailure = (payload) => ({
  type: FETCH_QUESTIONS_FAILURE,
  payload
});

export const addQuestions = (payload) => ({
  type: ADD_QUESTIONS,
  payload
});
