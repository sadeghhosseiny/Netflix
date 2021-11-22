import React from 'react';
import styles from './itemsOfFooter.module.css';

function ItemsOfFooter({ item }) {
  return (
    <li className={styles.listItem}>
      <a>
        <span>
          {item?.item}
        </span>
      </a>
    </li>
  );
}

export default ItemsOfFooter;
