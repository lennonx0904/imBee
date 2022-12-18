import {
  FETCH_TAGS_REQUEST,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
  ADD_QUESTIONS,
  SET_QUESTIONS
} from '../actions';

const initState = {
  tags: [],
  questions: [],
  hasMoreQuestions: false,
  isFetching: false,
  error: ''
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TAGS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case FETCH_QUESTIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload.items,
        hasMoreQuestions: action.payload.has_more,
        isFetching: false,
        error: ''
      };
    case FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_QUESTIONS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload.items],
        hasMoreQuestions: action.payload.has_more,
        isFetching: false,
        error: ''
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        isFetching: false,
        error: ''
      };
    default:
      return { ...state };
  }
};

export default reducer;
