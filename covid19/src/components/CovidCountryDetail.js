import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { fetchCovidCountryDetail } from '../store/actions';
import { useParams } from 'react-router-dom';

export default function CovidCountryDetail() {
  const { name } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovidCountryDetail(name));
  }, [dispatch, name]);

  const covidCountryDetail = useSelector((state) => state.covidCountryDetail);

  if (covidCountryDetail.loading) return <p className="loading">Loading...</p>;
  if (covidCountryDetail.error) return <p>Error...</p>;

  const {
    covidCountryDetail: { confirmed, recovered, deaths, lastUpdate },
  } = covidCountryDetail;

  return (
    <div className="containerWorld">
      <div className="titleDetail">
        <h1 className="nameDetail">Covid-19 Cases in {name}</h1>
      </div>
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
