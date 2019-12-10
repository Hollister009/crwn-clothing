import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem } from '../../redux/cart/cart.actions';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  AddButton,
  NameContainer,
  PriceContainer
} from './collectionItem.styles';

const CollectionItem = ({ item, addItem, ...restProps }) => {
  const { name, price, imageUrl } = item;

  const clickHandler = () => {
    addItem(item);
  };

  return (
    <CollectionItemContainer {...restProps}>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton className="add-btn" onClick={clickHandler} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: bindActionCreators(item => addItem(item), dispatch)
});

export default connect(null, mapDispatchToProps)(CollectionItem);
