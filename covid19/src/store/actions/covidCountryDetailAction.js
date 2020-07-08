import axios from 'axios';

export const FETCH_COVID_COUNTRY_DETAIL_REQUEST =
  'FETCH_COVID_COUNTRY_DETAIL_REQUEST';
export const FETCH_COVID_COUNTRY_DETAIL_SUCCESS =
  'FETCH_COVID_COUNTRY_DETAIL_SUCCESS';
export const FETCH_COVID_COUNTRY_DETAIL_FAILURE =
  'FETCH_COVID_COUNTRY_DETAIL_FAILURE';

export const fetchCovidCountryDetail = (name) => {
  return (dispatch) => {
    dispatch(fetchCovidCountryDetailRequest());

    axios
      .get('https://covid19.mathdro.id/api/countries/' + name)
      .then(({ data }) => {
        dispatch(
          fetchCovidCountryDetailSuccess({
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
            lastUpdate: data.lastUpdate,
          })
        );
      })
      .catch((response) => {
        dispatch(fetchCovidCountryDetailFailure(response));
      });
  };
};

export const fetchCovidCountryDetailRequest = () => {
  return {
    type: FETCH_COVID_COUNTRY_DETAIL_REQUEST,
  };
};

export const fetchCovidCountryDetailSuccess = (data) => {
  return {
    type: FETCH_COVID_COUNTRY_DETAIL_SUCCESS,
    payload: data,
  };
};

export const fetchCovidCountryDetailFailure = (error) => {
  return {
    type: FETCH_COVID_COUNTRY_DETAIL_FAILURE,
    payload: error,
  };
};
