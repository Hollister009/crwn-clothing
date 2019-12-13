import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectCollection, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../shared/spinner';

import CollectionPage from './collectionPage';

const mapStateToProps = (state, ownProps) => ({
  isLoading: !selectIsCollectionsLoaded(state),
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer;
