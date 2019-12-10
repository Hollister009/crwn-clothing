import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collectionItem';
import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer
} from './collectionPage.styles';

const CollectionPage = ({ collection }) => {
  if (!collection) return null;

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
