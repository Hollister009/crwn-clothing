import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collectionsOverview';
import CollectionPage from '../collection';

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;

    fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: bindActionCreators(
    fetchCollectionsStartAsync,
    dispatch
  )
});

export default connect(null, mapDispatchToProps)(ShopPage);
