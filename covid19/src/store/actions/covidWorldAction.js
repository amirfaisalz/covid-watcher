import axios from 'axios';

export const FETCH_COVID_WORLD_REQUEST = 'FETCH_COVID_WORLD_DATA';
export const FETCH_COVID_WORLD_SUCCESS = 'FETCH_COVID_WORLD_SUCCESS';
export const FETCH_COVID_WORLD_FAILURE = 'FETCH_COVID_WORLD_FAILURE';

export const fetchCovidWorld = () => {
  return (dispatch) => {
    dispatch(fetchCovidWorldRequest());

    axios
      .get('https://covid19.mathdro.id/api')
      .then(({ data }) => {
        dispatch(
          fetchCovidWorldSuccess({
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
            lastUpdate: data.lastUpdate,
          })
        );
      })
      .catch((response) => {
        dispatch(fetchCovidWorldFailure(response));
      });
  };
};

export const fetchCovidWorldRequest = () => {
  return {
    type: FETCH_COVID_WORLD_REQUEST,
  };
};

export const fetchCovidWorldSuccess = (data) => {
  return {
    type: FETCH_COVID_WORLD_SUCCESS,
    payload: data,
  };
};

export const fetchCovidWorldFailure = (error) => {
  return {
    type: FETCH_COVID_WORLD_FAILURE,
    payload: error,
  };
};
