import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collectionsOverview';
import CollectionPage from '../collection';

import { updateCollections } from '../../redux/shop/shop.actions';
import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionsRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionsRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: bindActionCreators(data => updateCollections(data), dispatch)
});

export default connect(null, mapDispatchToProps)(ShopPage);
