import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addItem } from '../../redux/cart/cart.actions';

import CollectionItem from './collectionItem';

const mapDispatchToProps = dispatch => ({
  addItem: bindActionCreators(item => addItem(item), dispatch)
});

const CollectionItemContainer = connect(
  null,
  mapDispatchToProps
)(CollectionItem);

export default CollectionItemContainer;
