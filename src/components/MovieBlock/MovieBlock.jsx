import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movie image/movieImage';
import { addToMyList, moviePage } from '../../Redux/actions/actions';
import styles from './MovieBlock.module.css';


function MovieBlock({ movie }) {
  const [isAddedToList, setIsAddedToList] = useState(false);
  const dispatch = useDispatch();
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";

  const handleAddToList = (movieData) => {
    dispatch(addToMyList(movieData));
    setIsAddedToList(true);
  };

  const handleMoviePage = (movieData) => {
    dispatch(moviePage(movieData));
  };

  return (
    <div>
      <Link to={`${movie?.name ? movie?.name.replaceAll(' ', '-') : movie?.title.replaceAll(' ', '-')}`}>
        <MovieImage onClick={() => handleMoviePage(movie)} className={`${movie.LargeRow ? styles.largeRow : styles.movieImage}`}
          imgsrc={`${image_BaseUrl}${movie?.poster_path}`} />
      </Link>
      <Button isAddedToList={isAddedToList} className={styles.imageButton} setIsAddedToList={setIsAddedToList}
        onClick={(e) => { handleAddToList(movie); e.stopPropagation(); }} title={isAddedToList ? 'Added' : 'Add to my list'} />
    </div>
  );
}

export default MovieBlock;
