import React from 'react';

import CollectionPreview from '../../components/collectionPreview';
import { CollectionOverviewContainer } from './collectionsOverview.styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </CollectionOverviewContainer>
);

export default CollectionsOverview;
