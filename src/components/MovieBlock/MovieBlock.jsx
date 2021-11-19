import React, { useEffect, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movieImage/movieImage';
import { addToMyList, moviePage } from '../../Redux/actions/actions';
import styles from './MovieBlock.module.css';


function MovieBlock({ movie }) {
  const [isAddedToList, setIsAddedToList] = useState(false);
  const dispatch = useDispatch();
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";
  const selector = useSelector(state => state?.addMovieToListReducer?.data);
  let checkBool = false;

  const checker = () => {
    selector?.map(item => item.id == movie.id && (checkBool = true));
    return checkBool;
  };

  const handleAddToList = (movieData) => {
    (!checker()) && dispatch(addToMyList(movieData));
    setIsAddedToList(true);
  };

  const handleMoviePage = (movieData) => {
    dispatch(moviePage(movieData));
  };


  useEffect(() => {
    checker();
  }, []);

  return (
    <div>
      <Link to={`${movie?.name ? movie?.name.replaceAll(' ', '-') : movie?.title.replaceAll(' ', '-')}`}>
        <MovieImage onClick={() => handleMoviePage(movie)} className={`${styles.movieImage}`}
          imgsrc={`${image_BaseUrl}${movie?.poster_path}`} />
      </Link>
      <Button title={isAddedToList ? 'Added' : 'Add to my list'} isAddedToList={isAddedToList} className={styles.imageButton} setIsAddedToList={setIsAddedToList}
        onClick={(e) => { handleAddToList(movie); e.stopPropagation(); }} >
        {isAddedToList || checker() ? <i className={`${styles.checkBox} far fa-check-square`} /> : <i className={`${styles.plusBox} far fa-plus-square`} />}
      </Button>
    </div>
  );
}

export default memo(MovieBlock);
