import React from 'react';
import styles from './WithoutMovie.module.css';

function WithoutMovie() {
  return (
    <div>
      <h1 className={styles.text}>
        You have no movie in your list
      </h1>
    </div>
  );
}

export default WithoutMovie;
