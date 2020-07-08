import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidWorld } from '../store/actions/';

export default function CovidWorld() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidWorld());
  }, [dispatch]);

  const covidWorld = useSelector((state) => state.covidWorld);

  if (covidWorld.loading) return <p className="loading">Loading...</p>;
  if (covidWorld.error) return <p>Error...</p>;

  const {
    covidWorld: { confirmed, recovered, deaths, lastUpdate },
  } = covidWorld;

  return (
    <div className="containerWorld">
      <h1>Covid-19 Cases in the World</h1>
      <div className="cardGroup">
        <div className="card">
          <p className="title">Confirmed</p>
          <CountUp
            className="number"
            start={0}
            end={Number(confirmed)}
            duration={1.5}
            separator="."
          />
          <p>Last Update: {new Date(lastUpdate).toDateString()}</p>
        </div>
        <div className="card">
          <p className="title titleRecovered">Recovered</p>
          <CountUp
            className="number"
            start={0}
            end={Number(recovered)}
            duration={1.5}
            separator="."
          />
          <p>Last Update: {new Date(lastUpdate).toDateString()}</p>
        </div>
        <div className="card">
          <p className="title titleDeaths">Deaths</p>
          <CountUp
            className="number"
            start={0}
            end={Number(deaths)}
            duration={1.5}
            separator="."
          />
          <p>Last Update: {new Date(lastUpdate).toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
