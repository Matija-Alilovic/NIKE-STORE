import React, { useState } from 'react';

import styles from './SideBar.module.css';
import * as FaIcons from 'react-icons/fa';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  function toggleSidebar() {
    setIsActive(!isActive);
  }

  return (
    <>
      <a>
        <FaIcons.FaStream className={styles.bars} onClick={toggleSidebar} />
      </a>
      {isActive && (
        <div className={styles.sidebar}>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Packaging</a>
            </li>
            <li>
              <a href="">Delivery</a>
            </li>
          </ul>
        </div>
      )}

      <div className={styles.social}>
        <FaIcons.FaTwitter
          onClick={() => window.open('https://twitter.com/nike', '_blank')}
          className={styles.icon}
        ></FaIcons.FaTwitter>
        <FaIcons.FaInstagram
          onClick={() =>
            window.open('https://www.instagram.com/nike/', '_blank')
          }
          className={styles.icon}
        ></FaIcons.FaInstagram>
        <FaIcons.FaFacebookSquare
          onClick={() =>
            window.open('https://www.facebook.com/nike/', '_blank')
          }
          className={styles.icon}
        ></FaIcons.FaFacebookSquare>
      </div>
    </>
  );
}

export default Sidebar;
