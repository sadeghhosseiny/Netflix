import React from 'react';
import styles from './itemsOfFooter.module.css';

function ItemsOfFooter({ item }) {
  return (
    <li className={styles.list}>
      <a>
        {item?.item}
      </a>
    </li>
  );
}

export default ItemsOfFooter;
