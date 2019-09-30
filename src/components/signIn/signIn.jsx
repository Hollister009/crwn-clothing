import React from 'react';
import './signIn.scss';

import CustomButton from '../customButton';
import FormInput from '../formInput';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={password}
            label='Password'
            required
          />
          <CustomButton type='submit'> Sing In </CustomButton>
          <CustomButton type='submit' isGoogleSignIn>
            {' '}
            Sing In with Google{' '}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
