import {
  FETCH_COVID_COUNTRY_REQUEST,
  FETCH_COVID_COUNTRY_SUCCESS,
  FETCH_COVID_COUNTRY_FAILURE,
} from '../actions';

const initialState = {
  covidCountry: [],
  loading: false,
  error: '',
};

const covidCountryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_COVID_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COVID_COUNTRY_SUCCESS:
      return {
        loading: false,
        covidCountry: payload,
        error: '',
      };
    case FETCH_COVID_COUNTRY_FAILURE:
      return {
        loading: false,
        covidCountry: [],
        error: payload,
      };
    default:
      return state;
  }
};

export default covidCountryReducer;
