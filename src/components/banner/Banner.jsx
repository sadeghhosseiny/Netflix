import React, { useEffect, useState } from 'react';
import Button from '../../lib/button/Button';
import styles from './Banner.module.css';
import { truncate } from '../../lib/truncate/truncate';
import axios from '../../services/axios/axios';
import requests from '../../services/requests/requests';
import { Link } from 'react-router-dom';

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
    fetchData();
  }, []);


  const DataUndefinedHandler = async () => {
    const req = await axios.get(requests.fetchNetflixOriginal);
    setOriginalMovie(req.data.results[
      Math.floor(Math.random() * req.data.results.length - 1)
    ]
    );

  };


  return (
    <header
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original${(originalMovie === undefined || originalMovie?.backdrop_path === null) ? DataUndefinedHandler() : originalMovie?.backdrop_path})`,
      }}
      className={styles.header}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>{originalMovie ? originalMovie?.name : "Loading..."}</h1>
        <div className={styles.buttonsDiv}>
          <Button className={`${styles.button}`}>
            Play
          </Button>
          <Link to="/List">
            <Button className={`${styles.button}`}>
              My List
            </Button>
          </Link>
        </div>
        <div className={styles.description}>
          {originalMovie?.overview === undefined ? "Loading...." : truncate(`${originalMovie?.overview}`, 150)}
        </div>
      </div>
      <div className={styles.fadeBottom} />
    </header>
  );
}

export default Banner;
