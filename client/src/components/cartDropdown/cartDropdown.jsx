import React from 'react';

import CustomButton from '../customButton';
import CartItem from '../cartItem';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage
} from './cartDropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const renderDropdownButton = page => (
    <CustomButton
      onClick={() => {
        history.push(`/${page}`);
        toggleCartHidden();
      }}
    >
      {`GO TO ${page.toUpperCase()}`}
    </CustomButton>
  );

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      {cartItems.length
        ? renderDropdownButton('checkout')
        : renderDropdownButton('shop')}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
