import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
  const selector = useSelector(state => state?.userReducer?.movieList);
  let checkBool = false;

  const handleAddToList = (movieData) => {
    (!isAddedToList || !checkBool) && dispatch(addToMyList(movieData));
    setIsAddedToList(true);
  };

  const handleMoviePage = (movieData) => {
    dispatch(moviePage(movieData));
  };

  const checker = () => {
    selector.map(item => item.id == movie.id && (checkBool = true));
    return checkBool;
  };

  useEffect(() => {
    checker();
  }, []);

  return (
    <div>
      <Link to={`${movie?.name ? movie?.name.replaceAll(' ', '-') : movie?.title.replaceAll(' ', '-')}`}>
        <MovieImage onClick={() => handleMoviePage(movie)} className={`${movie.LargeRow ? styles.largeRow : styles.movieImage}`}
          imgsrc={`${image_BaseUrl}${movie?.poster_path}`} />
      </Link>

      <Button title={isAddedToList ? 'Added' : 'Add to my list'} isAddedToList={isAddedToList} className={styles.imageButton} setIsAddedToList={setIsAddedToList}
        onClick={(e) => { handleAddToList(movie); e.stopPropagation(); }} >
        {isAddedToList || checker() ? <i className={`${styles.checkBox} far fa-check-square`} /> : <i className={`${styles.plusBox} far fa-plus-square`} />}
      </Button>
    </div>
  );
}

export default MovieBlock;
