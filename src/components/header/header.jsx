import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cartIcon';
import CartDropdown from '../cartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = ({ currentUser, cartHidden }) => (
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <nav className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/login'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </nav>
    {!cartHidden ? <CartDropdown /> : null}
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
