import {
    FETCH_COVID_COUNTRY_DETAIL_REQUEST,
    FETCH_COVID_COUNTRY_DETAIL_SUCCESS,
    FETCH_COVID_COUNTRY_DETAIL_FAILURE,
  } from '../actions';
  
  const initialState = {
    covidCountryDetail: [],
    loading: false,
    error: '',
  };
  
  const covidCountryDetailReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_COVID_COUNTRY_DETAIL_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_COVID_COUNTRY_DETAIL_SUCCESS:
        return {
          loading: false,
          covidCountryDetail: payload,
          error: '',
        };
      case FETCH_COVID_COUNTRY_DETAIL_FAILURE:
        return {
          loading: false,
          covidCountryDetail: [],
          error: payload,
        };
      default:
        return state;
    }
  };
  
  export default covidCountryDetailReducer;
  