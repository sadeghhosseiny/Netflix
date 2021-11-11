import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import MovieImage from '../../lib/movie image/movieImage';
import { moviePage } from '../../Redux/actions/actions';
import MoviePagePoster from '../../components/movie page poster/MoviePagePoster';

function MoviePage() {

  const selector = useSelector(state => state.userReducer.moviePage);

  return (
    <MoviePagePoster movieInfo={selector} />
  );
}

export default MoviePage;
