import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';

function App() {
  return (
    <main className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </main>
  );
}

export default App;
