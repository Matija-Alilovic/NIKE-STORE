import styles from './CartItem.module.css';
import * as FaIcons from 'react-icons/fa';

import sampleImg from '../../img/shoes/air-max-270-react-se.png';

function CartItem({ item }) {
  return (
    <div key={item.id} className={styles.cartItem}>
      <div className={styles.product}>
        <img src={item.img} alt="" />
        <span>{item.name}</span>
      </div>
      <div className={styles.size}>32</div>
      <div className={styles.quantity}>
        <FaIcons.FaMinus className={styles.quantityBtn}></FaIcons.FaMinus>
        <span>1</span>
        <FaIcons.FaPlus className={styles.quantityBtn}></FaIcons.FaPlus>
      </div>
      <div className={styles.totalPrice}>{item.price}</div>
      <FaIcons.FaTrash className={styles.exitBtn}></FaIcons.FaTrash>
    </div>
  );
}

export default CartItem;
