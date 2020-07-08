import axios from 'axios';

export const FETCH_COVID_COUNTRY_REQUEST = 'FETCH_COVID_COUNTRY_REQUEST';
export const FETCH_COVID_COUNTRY_SUCCESS = 'FETCH_COVID_COUNTRY_SUCCESS';
export const FETCH_COVID_COUNTRY_FAILURE = 'FETCH_COVID_COUNTRY_FAILURE';

export const fetchCovidCountry = () => {
  return (dispatch) => {
    dispatch(fetchCovidCountryRequest());

    axios
      .get('https://covid19.mathdro.id/api/countries')
      .then(({ data }) => {
        dispatch(fetchCovidCountrySuccess(data.countries));
      })
      .catch((response) => {
        dispatch(fetchCovidCountryFailure(response));
      });
  };
};

export const fetchCovidCountryRequest = () => {
  return {
    type: FETCH_COVID_COUNTRY_REQUEST,
  };
};

export const fetchCovidCountrySuccess = (data) => {
  return {
    type: FETCH_COVID_COUNTRY_SUCCESS,
    payload: data,
  };
};

export const fetchCovidCountryFailure = (error) => {
  return {
    type: FETCH_COVID_COUNTRY_FAILURE,
    payload: error,
  };
};
