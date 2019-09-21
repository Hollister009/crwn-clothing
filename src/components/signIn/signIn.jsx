import React from 'react';
import './signIn.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="">
          <input name="email" type="email"/>
          <label htmlFor="email">Email</label>
          <input name="password" type="password"/>
          <label htmlFor="password">Password</label>
          <input type="submit" value="Sing In"/>
        </form>
      </div>
    )
  }
};

export default SignIn;