import React from 'react';

import PrimaryButton from './reusable/PrimaryButton.js';
import ShoeSelector from './ShoeSelector.js';

import styles from './ShoeShowcase.module.css';

import miniNikeLogo from '../img/mini-nike-logo.png';
import shoeImg from '../img/Nike air max main.png';
import nikeBackground from '../img/nike-background.png';

function ShoeShowcase(props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={miniNikeLogo} className={styles.logo} alt="" />
        <span className={styles.boring}>BORING</span>
        <span className={styles.shoes}>SHOES?</span>
        <span className={styles.help}>
          Let us <b>HELP</b> you fix it...
        </span>
        <PrimaryButton className={styles.btn}>EXPLORE OUR STORE</PrimaryButton>
      </div>
      <div className={styles.rightContainer}>
        <img className={styles.shoeImg} src={shoeImg} alt="" />
        <img className={styles.nikeBackground} src={nikeBackground} alt="" />
        <ShoeSelector></ShoeSelector>
      </div>
    </div>
  );
}

export default ShoeShowcase;
