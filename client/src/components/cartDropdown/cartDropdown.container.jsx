import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartDropdown from './cartDropdown';


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = {
  toggleCartHidden
};

const CartDropdownContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CartDropdown);

export default CartDropdownContainer;