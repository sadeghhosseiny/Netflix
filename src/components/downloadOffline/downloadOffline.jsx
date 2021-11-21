import React from 'react';
import styles from './downloadOffline.module.css';

function DownloadOffline() {
  return (
    <div className={styles.downloadMovieAnimation}>
      <div className={styles.contentOfDownloadMovieAnimation}>
        <div className={styles.picturesContainer}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
          <div>
            <div>
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
            </div>
            <div className={styles.contentOfBorder}>
              <div>
                <p>Stranger Things</p>
                <p>Downloading...</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textsOfDownloadMovies}>
          <h1>
            Download your shows to watch offline.
          </h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DownloadOffline;
