import {
  FETCH_COVID_WORLD_REQUEST,
  FETCH_COVID_WORLD_SUCCESS,
  FETCH_COVID_WORLD_FAILURE,
} from '../actions';

const initialState = {
  covidWorld: [],
  loading: false,
  error: '',
};

const covidWorldReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COVID_WORLD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COVID_WORLD_SUCCESS:
      return {
        loading: false,
        covidWorld: payload,
        error: '',
      };
    case FETCH_COVID_WORLD_FAILURE:
      return {
        loading: false,
        covidWorld: [],
        error: payload,
      };
    default:
      return state;
  }
};

export default covidWorldReducer;
