import React from 'react';
import styles from './enjoyTv.module.css';

function EnjoyTv() {
  return (
    <div className={styles.enjoyTvAnimation}>
      <div className={styles.contentOfEnjoyTvAnimation}>
        <div className={styles.textsOfEnjoyTvAnimation}>
          <h1>Enjoy on your TV.</h1>
          <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <div className={styles.tvAndVideo}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""
          />
          <div className={styles.videoContainerOfEnjoyTv}>
            <video autoPlay playsInline muted loop __idm_id__="1251393537">
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnjoyTv;
