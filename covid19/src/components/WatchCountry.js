import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeWatchCountry } from '../store/actions/index';

export default function WatchCountry() {
  const dispatch = useDispatch();
  let history = useHistory();

  const detailBtn = (event, name) => {
    event.preventDefault();
    history.push('/countries/' + name);
  };

  const removeCountryBtn = (event, name) => {
    event.preventDefault();
    dispatch(removeWatchCountry(name));
  };

  const watchCountry = useSelector((state) => state.watchCountryReducer.watchCountry);

  return (
    <div className="containerWorld">
      <h1>Watch Country Cases</h1>
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Country Cases</th>
            <th>Remove Country</th>
          </tr>
        </thead>
        <tbody>
          {watchCountry.map((country, i) => {
            return (
              <tr key={i}>
                <td>{country}</td>
                <td>
                  <button
                    onClick={(event) => {
                      detailBtn(event, country);
                    }}>
                    See Country Cases
                  </button>
                </td>
                <td>
                <button
                    onClick={(event) => {
                      removeCountryBtn(event, country);
                    }}>
                    Remove Country
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
