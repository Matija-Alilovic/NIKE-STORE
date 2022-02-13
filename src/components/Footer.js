import React, { useContext } from 'react';
import styles from './Footer.module.css';
import Card from './reusable/Card';

import { CartContext } from '../context/CartContext.js';

function Footer(props) {
  const [shoeInfo] = useContext(CartContext);

  return (
    <div className={styles.footer}>
      {shoeInfo.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          stars={card.stars}
          price={card.price}
          desc={card.desc}
          img={card.img}
        />
      ))}
    </div>
  );
}

export default Footer;
