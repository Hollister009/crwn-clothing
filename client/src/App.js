import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home';
import ShopPage from './pages/shop';
import LoginPage from './pages/login';
import CheckoutPage from './pages/checkout';

import { GlobalStyle } from './global.styles';
import Header from './components/header';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ currentUser, checkUserSession }) => {
  React.useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <main className="main">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
        />
      </Switch>
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: bindActionCreators(checkUserSession, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
