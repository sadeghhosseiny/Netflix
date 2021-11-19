import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import MovieImage from '../../lib/movieImage/movieImage';
import { moviePage } from '../../Redux/actions/actions';
import MoviePageInfo from '../../components/moviePageInfo/MoviePageInfo';

function MoviePage() {

  const selector = useSelector(state => state?.moviePageReducer?.movies);

  return (
    <MoviePageInfo movieInfo={selector} />
  );
}

export default MoviePage;
