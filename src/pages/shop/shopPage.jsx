import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';

import { updateCollections } from '../../redux/shop/shop.actions';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import WithSpinner from '../../shared/spinner';

import CollectionOverview from '../../components/collectionsOverview';
import CollectionPage from '../collection';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = { loading: true };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionsRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: bindActionCreators(
    data => updateCollections(data),
    dispatch
  )
});

export default connect(null, mapDispatchToProps)(ShopPage);
