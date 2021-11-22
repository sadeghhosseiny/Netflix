import React from 'react';
import { useSelector } from 'react-redux';
import MoviePageInfo from '../../components/moviePageInfo/MoviePageInfo';

function MoviePage() {

  const selector = useSelector(state => state?.moviePageReducer?.movies);

  return (
    <MoviePageInfo movieInfo={selector} />
  );
}

export default MoviePage;
