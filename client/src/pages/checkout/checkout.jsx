import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkoutItem';
import StripeCheckoutButton from '../../components/stripeButton';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  TotalContainer,
  TestWarning
} from './checkout.styles';

const headerOptions = ['product', 'description', 'quantity', 'price', 'remove'];

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      {headerOptions.map(option => (
        <HeaderBlock key={option}>
          <span>{option}</span>
        </HeaderBlock>
      ))}
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${cartTotal}</TotalContainer>
    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </TestWarning>
    <StripeCheckoutButton price={cartTotal} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
