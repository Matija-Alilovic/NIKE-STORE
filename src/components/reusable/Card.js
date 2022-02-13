import styles from './Card.module.css';

import * as FaIcons from 'react-icons/fa';

import shoeImg from '../../img/Nike air max main.png';
import PrimaryButton from './PrimaryButton';

function Card(props) {
  const stars = [];

  for (let index = 0; index < props.stars; index++) {
    stars.push(
      <FaIcons.FaStar className={styles.icon} key={index}></FaIcons.FaStar>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img src={props.img} alt="" />
      </div>

      <div className={styles.right}>
        <span className={styles.name}>{props.name}</span>
        <span>{stars}</span>
        <span className={styles.price}>{props.price}</span>
        <span className={styles.shoeName}>{props.desc}</span>

        <PrimaryButton className={styles.btn}>Add to Cart</PrimaryButton>
      </div>
    </div>
  );
}

export default Card;
