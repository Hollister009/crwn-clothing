import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsFetching, selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../shared/spinner';

import CollectionsOverview from './collectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
  collections: selectCollectionsForPreview
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
