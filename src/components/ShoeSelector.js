import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa';
import styles from './ShoeSelector.module.css';

import PrimaryButton from './reusable/PrimaryButton';

function ShoeSelector(props) {
  return (
    <div className={styles.container}>
      <FaAngleLeft className={styles.arrow} />
      <div className={styles.middle}>
        <h2>NIKE AIR MAX 3</h2>
        <div className={styles.starsPrice}>
          <>
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} />
            <FaStar className={styles.star} /> |
          </>
          <span className={styles.price}> $200</span>
        </div>

        <br />
        <PrimaryButton className={styles.btn}>BUY NOW</PrimaryButton>
      </div>
      <FaAngleRight className={styles.arrow} />
    </div>
  );
}

export default ShoeSelector;
