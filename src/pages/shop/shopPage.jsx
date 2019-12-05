import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collectionsOverview';
import CollectionPage from '../collection';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
)

export default ShopPage;
