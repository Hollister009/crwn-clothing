import React from 'react';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  AddButton,
  NameContainer,
  PriceContainer
} from './collectionItem.styles';

const useOnImageClick = (wait = 200) => {
  const [active, setActive] = React.useState(false);
  const timeout = React.useRef(null);

  React.useEffect(() => {
    timeout.current = setTimeout(() => {
      setActive(false);
    }, wait);
  }, [active, wait]);
  
  React.useEffect(() => {
    return _ => {
      clearTimeout(timeout.current);
    }
  }, []);

  return [active, setActive];
}

const CollectionItem = ({ item, addItem, ...restProps }) => {
  const [innerWidth, setInnerWidth] = React.useState(0);
  const [active, setActive] = useOnImageClick();

  React.useEffect(() => {
    setInnerWidth(window.innerWidth);

    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { name, price, imageUrl } = item;

  const clickHandler = () => {
    addItem(item);
  };

  const handleImageClick = () => {
    setActive(true);
    addItem(item);
  }

  return (
    <CollectionItemContainer {...restProps}>
      <BackgroundImage
        className={`image ${active ? 'active' : ''}`}
        imageUrl={imageUrl}
        onClick={() => {
          innerWidth <= 800 && handleImageClick();
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </CollectionFooterContainer>
      {innerWidth > 800 && (
        <AddButton className="add-btn" onClick={clickHandler} inverted>
          Add to cart
        </AddButton>
      )}
    </CollectionItemContainer>
  );
};

export default CollectionItem;
