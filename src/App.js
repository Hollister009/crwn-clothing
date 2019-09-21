import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage';

const HatsPage = () => (
  <h1>Hats Page</h1>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
