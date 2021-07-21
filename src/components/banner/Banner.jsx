import React from 'react';
import Button from '../../lib/button/Button';
import styles from './Banner.module.css';
import { truncate } from '../../lib/truncate/truncate';

function Banner() {

    return (
        <header
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png)`,
                backgroundPosition: "center center"
            }}
            className={styles.header}>

            <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>Movie Name</h1>
                <div className={styles.buttonsDiv}>

                    <Button className={`${styles.button}`} title={"Play"} />
                    <Button className={`${styles.button}`} title={"My List"} />
                </div>
                <div className={styles.description}>
                    {truncate(`this is the descriptionthis is the descriptionthis is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description
                    this is the description`, 150)}

                </div>
            </div>
            <div className={styles.fadeBottom} />
        </header>
    );
}

export default Banner;
