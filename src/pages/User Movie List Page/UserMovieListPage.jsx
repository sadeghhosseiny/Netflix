import React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../../components/Movie/movie';


function UserMovieListPage() {

  const selector = useSelector(state => ({
    movies: state?.userReducer?.movieList
  }));

  return (
    selector?.movies.map(movie => (
      <Movie key={movie.id} movie={movie} />
    ))
  );
}

export default UserMovieListPage;
