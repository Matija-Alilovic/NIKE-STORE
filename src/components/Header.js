import React, { useState, useContext } from 'react';

import cartIcon from '../img/Cart.png';
import Cart from './Cart/Cart';
import styles from './Header.module.css';
import { SiNike } from 'react-icons/si';

import { CartContext } from '../context/CartContext';

function Header(props) {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartContext = useContext(CartContext);

  function toggleCart() {
    setCartIsShown(!cartIsShown);
  }

  return (
    <div className={styles.Header}>
      <SiNike className={styles.NikeLogo}></SiNike>
      <ul className={styles.ul}>
        <li>
          <a href="">Men</a>
        </li>
        <li>
          <a href="">Women</a>
        </li>
        <li>
          <a href="">Kids</a>
        </li>
        <li>
          <a href="">Collections</a>
        </li>
      </ul>
      <div className={styles.CartContainer}>
        <span className={styles.cartNumber}>{cartContext.items.length}</span>
        <img
          className={styles.CartButton}
          onClick={toggleCart}
          src={cartIcon}
          alt="Cart items"
        />
      </div>
      {cartIsShown && <Cart toggleCart={toggleCart}></Cart>}
    </div>
  );
}

export default Header;
