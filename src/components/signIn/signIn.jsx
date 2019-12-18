import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';

import CustomButton from '../customButton';
import FormInput from '../formInput';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './signIn.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart({ email, password });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={password}
            label="Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sing In </CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sing In with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: bindActionCreators(googleSignInStart, dispatch),
  emailSignInStart: bindActionCreators(emailSignInStart, dispatch)
})

export default connect(null, mapDispatchToProps)(SignIn);
