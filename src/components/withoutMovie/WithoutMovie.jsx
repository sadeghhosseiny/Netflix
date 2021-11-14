import React from 'react';
import styles from './WithoutMovie.module.css';

function WithoutMovie() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>
          You have no movie in your list
        </h1>
      </div>
    </div>
  );
}

export default WithoutMovie;
