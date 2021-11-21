import React from 'react';
import styles from './watchEverywhere.module.css';

function WatchEverywhere() {
  return (
    <div className={styles.watchEverywhereDiv}>
      <div className={styles.contentOfWatchEverywhere}>
        <div>
          <h1>Watch everywhere.</h1>
          <h2>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</h2>
        </div>
        <div className={styles.tvAndPictureOfWatchEverywhere}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          />
          <div className={styles.videoContainer}>
            <video autoPlay playsInline muted loop __idm_id__="1251393538">
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchEverywhere;
