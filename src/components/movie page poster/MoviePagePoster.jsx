import React, { useEffect } from 'react';
import MovieImage from '../../lib/movie image/movieImage';
import styles from './MoviePagePoster.module.css';

function MoviePagePoster(props) {
  // const movie = props.movieInfo;
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";
  // console.log('FROM MOVIE PAGE', movie);
  return (
    <section className={styles.pageContainer}>
      <div className={styles.posterContainer}>
        <div className={styles.poster} style={{
          // backgroundImage: `url(${image_BaseUrl}${movie.backdrop_path})`
        }} >
        </div>
      </div>
    </section>
  );
}

export default MoviePagePoster;
