import React, { useContext } from 'react';
import styles from './Footer.module.css';
import Card from './reusable/Card';

import { CartContext } from '../context/CartContext.js';

function Footer(props) {
  const cartContext = useContext(CartContext);

  function onAddCartItemHandler(item) {
    cartContext.addItem(item);
  }

  return (
    <div className={styles.footer}>
      {cartContext.shoeInfo.map((card) => (
        <Card key={card.id} card={card} addItemToCart={onAddCartItemHandler} />
      ))}
    </div>
  );
}

export default Footer;
