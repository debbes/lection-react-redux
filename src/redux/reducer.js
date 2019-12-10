import {REQUESTED_DOG_SUCCEEDED, REQUESTED_DOG, REQUESTED_DOG_FAILED} from "./types";

const initialState = {
  url: '',
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Шаг 0
    case REQUESTED_DOG_SUCCEEDED:
      return {
        ...state,
        url: action.url,
        loading: false,
        error: false,
      };
    // Шаг 1
    case REQUESTED_DOG:
      return {
        ...state,
        url: '',
        loading: true,
        error: false,
      };

    case REQUESTED_DOG_FAILED:
      return {
        ...state,
        url: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};


export default reducer
