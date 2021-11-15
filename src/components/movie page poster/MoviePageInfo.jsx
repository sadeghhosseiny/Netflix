import React, { useEffect } from 'react';
import MovieImage from '../../lib/movie image/movieImage';
import { truncate } from '../../lib/truncate/truncate';
import styles from './MoviePageInfo.module.css';

function MoviePageInfo(props) {
  const movie = props.movieInfo;
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <section className={styles.pageContainer}>
      <div className={styles.posterContainer}>
        <div className={styles.poster} style={{
          backgroundImage: `url(${image_BaseUrl}${movie.backdrop_path})`
        }} >
        </div>
      </div>
      <div className={styles.description}>
        <h1>
          {movie?.name ? movie?.name : movie?.title}
        </h1>
        <div>
          <p>{truncate(movie?.overview, 250)}</p>
        </div>
        <span>{movie?.release_date}</span>
        <span>Score : {movie?.vote_average}</span>
        <span>Number of viewers : {movie?.vote_count}</span>
      </div>
    </section>
  );
}

export default MoviePageInfo;
