import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidCountry } from '../store/actions';
import { addWatchCountry } from '../store/actions/index';
import _ from 'lodash';

export default function CovidCountry() {
  let history = useHistory();

  const dispatch = useDispatch();

  // search with debounce
  const [searchCountry, setSearchCountry] = useState('');
  const changeSearchCountry = _.debounce(function (event) {
    setSearchCountry(event.target.value);
  }, 1000);
  const searchCountryName = (event) => {
    event.persist();
    changeSearchCountry(event);
  };

  useEffect(() => {
    dispatch(fetchCovidCountry());
  }, [dispatch]);

  const detailBtn = (event, name) => {
    event.preventDefault();
    history.push('/countries/' + name);
  };

  const watchBtn = (event, name) => {
    event.preventDefault();
    dispatch(addWatchCountry(name));
    history.push('/watch');
  };

  const covidCountry = useSelector((state) => state.covidCountry);

  if (covidCountry.loading) return <p className="loading">Loading...</p>;
  if (covidCountry.error) return <p>Error...</p>;

  const countries = covidCountry.covidCountry;

  const searchResult = countries.filter((element) => {
    return (
      element.name.toLowerCase().indexOf(searchCountry.toLowerCase()) !== -1
    );
  });

  return (
    <>
      <div className="searchGroup">
        <h1>List Covid-19 Cases per Country</h1>
        <input
          type="text"
          placeholder="Search Country"
          onChange={searchCountryName}
          className="searchBar"></input>
      </div>
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>See Country Cases</th>
            <th>Watch Country Cases</th>
          </tr>
        </thead>
        <tbody>
          {searchResult.map((country, i) => {
            return (
              <tr key={i}>
                <td>{country.name}</td>
                <td>
                  <button
                    onClick={(event) => {
                      detailBtn(event, country.name);
                    }}>
                    See Country Cases
                  </button>
                </td>
                <td>
                  <button
                    onClick={(event) => {
                      watchBtn(event, country.name);
                    }}
                    className="watch">
                    Watch Country Cases
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
