import React from 'react';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movie image/movieImage';
import styles from './movie.module.css';

function Movie({ movie }) {
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className={styles.movieContainer}>
      <div className={styles.description}>
        <h1>
          {movie.name ? movie?.name : movie?.title}
        </h1>
        <p>
          {movie.overview}
        </p>
        <br />
        <span>
          {movie.release_date}
        </span>
        <span>
          {`Original language: ${movie.original_language}`}
        </span>
      </div>
      <div className={styles.movieImageContainer}>
        <MovieImage className={styles.movieImage} imgsrc={`${image_BaseUrl}${movie?.poster_path}`} />
        <Button className={styles.playBtn}>Play</Button>
        <Button className={styles.delBtn}>Delete from my list</Button>
      </div>
    </div>
  );
}

export default Movie;
