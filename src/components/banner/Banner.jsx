import React, { useEffect, useState } from 'react';
import Button from '../../lib/button/Button';
import styles from './Banner.module.css';
import { truncate } from '../../lib/truncate/truncate';
import axios from '../../services/axios/axios';
import requests from '../../services/requests/requests';

function Banner() {

    const [originalMovie, setOriginalMovie] = useState([]);

    const fetchData = async () => {
        const req = await axios.get(requests.fetchNetflixOriginal);
        setOriginalMovie(req.data.results[
            Math.floor(Math.random() * req.data.results.length - 1)
        ]
        );
    };

    useEffect(() => {
        //return req;
        fetchData();
    }, []);


    const DataUndefinedHandler = async () => {
        const req = await axios.get(requests.fetchNetflixOriginal);
        setOriginalMovie(req.data.results[
            Math.floor(Math.random() * req.data.results.length - 1)
        ]
        );

    };

    console.log(originalMovie);

    return (
        <header
            style={{
                backgroundImage:
                    `url(https://image.tmdb.org/t/p/original${(originalMovie === undefined || originalMovie.backdrop_path === null) ? DataUndefinedHandler() : originalMovie?.backdrop_path})`,
            }}
            className={styles.header}>

            <div className={styles.bannerContent}>
                <h1 className={styles.bannerTitle}>{originalMovie?.name}</h1>
                <div className={styles.buttonsDiv}>

                    <Button className={`${styles.button}`} title={"Play"} />
                    <Button className={`${styles.button}`} title={"My List"} />
                </div>
                <div className={styles.description}>
                    {truncate(`${originalMovie?.overview}`, 150)}

                </div>
            </div>
            <div className={styles.fadeBottom} />
        </header>
    );
}

export default Banner;
