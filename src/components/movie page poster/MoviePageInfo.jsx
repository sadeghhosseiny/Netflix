import React, { useEffect } from 'react';
import { useWindowSize } from '../../hook/windowSize';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movie image/movieImage';
import { truncate } from '../../lib/truncate/truncate';
import styles from './MoviePageInfo.module.css';
import logo from '../../n1.png';

function MoviePageInfo(props) {
  const movie = props.movieInfo;
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";

  const [width, height] = useWindowSize();

  return (
    <section className={styles.pageContainer}>
      <div className={styles.navBar}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="netflix logo" />
        <div>
          <Button>JOIN NOW</Button>
          <Button>SIGN IN</Button>
        </div>
      </div>
      <div className={styles.movieContainer}>
        <div className={styles.description}>
          <h1>
            {movie?.name ? movie?.name : movie?.title}
          </h1>
          <span>
            <span>
              {movie?.release_date?.slice(0, -6)}</span>
          </span>
          <div>
            <p>{truncate(movie?.overview, 250)}</p>
          </div>
          <span>
            <span>
              Score :&nbsp;&nbsp;
            </span>
            {movie?.vote_average}</span>
          <span>
            <span>Number of viewers :&nbsp; </span>
            {movie?.vote_count}</span>
        </div>
        <div className={styles.posterContainer}>
          <div className={styles.poster} style={width >= 601 ? {
            backgroundImage: `url(${image_BaseUrl}${movie.backdrop_path})`
          } : {
            backgroundImage: `url(${image_BaseUrl}${movie.poster_path})`
          }} >
          </div>
        </div>
        <div className={styles.footer}>
          <div>
            <div>
              <img src={logo} alt="logo" />
              <p>Watch all you want.</p>
            </div>
            <Button>JOIN NOW</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoviePageInfo;
