import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import CheckoutItem from './checkoutItem';

const mapDispatchToProps = dispatch => ({
  clearItem: bindActionCreators(item => clearItemFromCart(item), dispatch),
  addItem: bindActionCreators(item => addItem(item), dispatch),
  removeItem: bindActionCreators(item => removeItem(item), dispatch)
});

const CheckoutItemContainer = connect(
  null,
  mapDispatchToProps
)(CheckoutItem);

export default CheckoutItemContainer;