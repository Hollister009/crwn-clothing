import React from 'react';
import './shopPage.scss';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return (
      <div>
        {this.state.collections.map(
          ({ id, ...otherProps}) => (
            <CollectionPreview key={id} {...otherProps}/>
          )
        )}
      </div>
    )
  }
}

export default ShopPage;