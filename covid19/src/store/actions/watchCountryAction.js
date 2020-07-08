export const ADD_WATCH_COUNTRY = 'ADD_WATCH_COUNTRY';
export const REMOVE_WATCH_COUNTRY = 'REMOVE_WATCH_COUNTRY';

export const addWatchCountry = (name) => {
  return {
    type: ADD_WATCH_COUNTRY,
    payload: name,
  };
};

export const removeWatchCountry = (countryName) => {
  return {
    type: REMOVE_WATCH_COUNTRY,
    payload: countryName,
  };
};
