import React, { useState } from 'react';

import cartIcon from '../img/Cart.png';
import Modal from './reusable/Modal';
import Cart from './Cart/Cart';
import styles from './Header.module.css';
import { SiNike } from 'react-icons/si';

import { CartProvider } from '../context/CartContext';

function Header(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

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
        <span className={styles.cartNumber}>1</span>
        <img
          className={styles.CartButton}
          onClick={toggleCart}
          src={cartIcon}
          alt="Cart items"
        />
      </div>
      {cartIsShown && (
        <CartProvider>
          <Cart toggleCart={toggleCart}></Cart>
        </CartProvider>
      )}
    </div>
  );
}

export default Header;
