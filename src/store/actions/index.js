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
