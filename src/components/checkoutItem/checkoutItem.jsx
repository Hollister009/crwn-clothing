import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkoutItem.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <span className="name">{name}</span>
      <QuantityContainer className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <span className="price">{price}</span>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: bindActionCreators(item => clearItemFromCart(item), dispatch),
  addItem: bindActionCreators(item => addItem(item), dispatch),
  removeItem: bindActionCreators(item => removeItem(item), dispatch)
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
