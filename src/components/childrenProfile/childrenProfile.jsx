import React from 'react';
import styles from './childrenProfile.module.css';

function ChildrenProfile() {
  return (
    <div className={styles.childrenProfileDiv}>
      <div className={styles.cotentOfChildrenProfileDiv}>
        <div className={styles.pictureContainer}>
          <img src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="" />
        </div>
        <div>
          <div></div>
        </div>
        <div className={styles.textsOfChildrenProfileDiv}>
          <h1>Create profiles for children.</h1>
          <h2>Send children on adventures with their favourite characters in a space made just for them – free with your membership.</h2>
        </div>
      </div>
    </div>
  );
}

export default ChildrenProfile;
