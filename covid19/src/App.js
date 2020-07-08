import React from 'react';
import CovidWorld from './components/CovidWorld';
import CovidCountry from './components/CovidCountry';
import WatchCountry from './components/WatchCountry';
import CovidCountryDetail from './components/CovidCountryDetail';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link className="link" to="/">
            World Cases
          </Link>
          <Link className="link" to="/countries">
            Countries Cases
          </Link>
          <Link className="link" to="/watch">
            Watch Cases
          </Link>
        </nav>
        <Switch>
          <Route path="/countries/:name">
            <CovidCountryDetail />
          </Route>
          <Route exact path="/">
            <CovidWorld />
          </Route>
          <Route path="/watch">
            <WatchCountry />
          </Route>
          <Route path="/countries">
            <CovidCountry />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
