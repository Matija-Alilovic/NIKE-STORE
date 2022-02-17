import React, { useContext } from 'react';

import styles from './Cart.module.css';

import { CartContext } from '../../context/CartContext';

import Modal from '../reusable/Modal.js';
import CartItem from './CartItem';
import { FaAngleLeft } from 'react-icons/fa';

function Cart(props) {
  const cartContext = useContext(CartContext);
  return (
    <Modal onClick={props.toggleCart}>
      <div className={styles.container}>
        <h2>Shopping cart.</h2>
        <div className={styles.table}>
          <header>
            <span>Product</span>
            <span>Size</span>
            <span>Quantity</span>
            <span>Total Price</span>
          </header>
          {cartContext.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <button className={styles.backBtn} onClick={props.toggleCart}>
          <FaAngleLeft></FaAngleLeft> &nbsp; Continue Shopping
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
