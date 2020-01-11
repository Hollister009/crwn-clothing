import React from 'react';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collectionsOverview';
import CollectionPage from '../collection';

const ShopPage = ({ match, fetchCollectionsStart }) => {
  React.useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: bindActionCreators(fetchCollectionsStart, dispatch)
});

export default connect(null, mapDispatchToProps)(ShopPage);
