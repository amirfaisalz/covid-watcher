import { ADD_WATCH_COUNTRY, REMOVE_WATCH_COUNTRY } from '../actions';

const initialState = {
  watchCountry: [],
};

const watchCountryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_WATCH_COUNTRY:
      return {
        watchCountry: state.watchCountry.concat(payload),
      };
    case REMOVE_WATCH_COUNTRY:
      const newWatchCountry = state.watchCountry.filter((element) => {
        return element !== payload;
      });
      return {
        watchCountry: newWatchCountry,
      };
    default:
      return state;
  }
};

export default watchCountryReducer;
