import React from 'react';

import SignIn from '../../components/signIn';
import SignUp from '../../components/signUp';
import { LoginPageContainer } from './loginPage.styles';

const LoginPage = () => (
  <LoginPageContainer>
    <SignIn />
    <SignUp />
  </LoginPageContainer>
);

export default LoginPage;
