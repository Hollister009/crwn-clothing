import React from 'react';

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

export default CollectionItem;
