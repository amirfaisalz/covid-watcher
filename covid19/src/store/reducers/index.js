import { combineReducers } from 'redux';
import covidWorldReducer from './covidWorldReducer';
import covidCountryReducer from './covidCountryReducer';
import covidCountryDetailReducer from './covidCountryDetailReducer';
import watchCountryReducer from './watchCountryReducer';

const rootReducers = combineReducers({
  covidWorld: covidWorldReducer,
  covidCountry: covidCountryReducer,
  covidCountryDetail: covidCountryDetailReducer,
  watchCountryReducer
});

export default rootReducers;
