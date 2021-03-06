import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';

import CustomButton from '../customButton';
import FormInput from '../formInput';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signIn.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();

    emailSignInStart({ email, password });
  };

  const handleChange = event => {
    const { value, name } = event.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sing In </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sing In with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: bindActionCreators(googleSignInStart, dispatch),
  emailSignInStart: bindActionCreators(emailSignInStart, dispatch)
});

export default connect(null, mapDispatchToProps)(SignIn);
