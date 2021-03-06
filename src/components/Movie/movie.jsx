import React from 'react';
import { useDispatch } from 'react-redux';
import { useWindowSize } from '../../hook/windowSize';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movieImage/movieImage';
import { removeMovieFromList } from '../../Redux/actions/actions';
import styles from './movie.module.css';

function Movie({ movie }) {
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";
  const dispatch = useDispatch();
  const [width] = useWindowSize();

  const removeMovie = () => {
    dispatch(removeMovieFromList(movie?.id));
  };

  return (
    <div className={styles.movieContainer}>
      {width >= 700 &&
        <div className={styles.description}>
          <h1>
            {movie?.name ? movie?.name : movie?.title}
          </h1>
          <p>
            {movie?.overview}
          </p>
          <br />
          <span>
            {movie?.release_date}
          </span>
          <span>
            {`Original language: ${movie?.original_language}`}
          </span>
        </div>
      }
      <div className={styles.movieImageContainer}>
        <MovieImage className={styles.movieImage} imgsrc={`${image_BaseUrl}${movie?.poster_path}`} />
        <Button className={styles.playBtn}>Play</Button>
        <Button onClick={removeMovie} className={styles.delBtn}>Delete from my list</Button>
      </div>
    </div>

  );
}

export default Movie;
