import React from 'react';

import CartIcon from '../cartIcon';
import CartDropdown from '../cartDropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, cartHidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" to="/" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/login">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {!cartHidden ? <CartDropdown /> : null}
  </HeaderContainer>
);

export default Header;
