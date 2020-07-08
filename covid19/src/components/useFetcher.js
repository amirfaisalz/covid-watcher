import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function useFetcher(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [confirmed, setConfirmed] = useState({});
  const [recovered, setRecovered] = useState({});
  const [deaths, setDeaths] = useState({});
  const [lastUpdate, setLastUpdate] = useState({});
  const [countries, setCountries] = useState([]);
  const componentIsMounted = useRef(true);

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    setLoading(true);
    async function fetchData() {
      try {
        const asyncResponse = await axios({
          method: 'get',
          url,
          config: {
            cancelToken: source.token,
          },
        });
        const data = asyncResponse;
        if (data.data.confirmed) {
          setConfirmed(data.data.confirmed.value);
          setRecovered(data.data.recovered.value);
          setDeaths(data.data.deaths.value);
        }
        setCountries(data.data.countries);
        setLastUpdate(data.data.lastUpdate);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    setLoading(false);
    return () => {
      source.cancel();
    };
  }, [url]);

  return {
    loading,
    error,
    confirmed,
    recovered,
    deaths,
    lastUpdate,
    countries,
  };
}
