import styles from './Card.module.css';

import * as FaIcons from 'react-icons/fa';

import PrimaryButton from './PrimaryButton';

function Card({ card, addItemToCart }) {
  const stars = [];

  for (let index = 0; index < card.stars; index++) {
    stars.push(
      <FaIcons.FaStar className={styles.icon} key={index}></FaIcons.FaStar>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img src={card.img} alt="" />
      </div>

      <div className={styles.right}>
        <span className={styles.name}>{card.name}</span>
        <span>{stars}</span>
        <span className={styles.price}>{card.price}</span>
        <span className={styles.shoeName}>{card.desc}</span>

        <PrimaryButton
          onClick={() => addItemToCart(card)}
          className={styles.btn}
        >
          Add to Cart
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Card;
