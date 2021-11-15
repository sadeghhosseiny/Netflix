import React, { useEffect } from 'react';
import { useWindowSize } from '../../hook/windowSize';
import MovieImage from '../../lib/movie image/movieImage';
import { truncate } from '../../lib/truncate/truncate';
import styles from './MoviePageInfo.module.css';

function MoviePageInfo(props) {
  const movie = props.movieInfo;
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";

  const [width, height] = useWindowSize();

  return (
    <section className={styles.pageContainer}>
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
      </div>
    </section>
  );
}

export default MoviePageInfo;
