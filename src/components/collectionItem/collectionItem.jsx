import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CustomButton from '../customButton';
import { addItem } from '../../redux/cart/cart.actions'

import './collectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const clickHandler = () => {
    addItem(item);
  }

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton onClick={clickHandler} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: bindActionCreators(item => addItem(item), dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);