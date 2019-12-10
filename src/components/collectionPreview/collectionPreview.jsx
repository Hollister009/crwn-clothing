import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collectionItem';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collectionPreview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer
      onClick={() => {
        history.push(`${match.path}/${routeName}`);
      }}
    >
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((_, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
