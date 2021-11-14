import React from 'react';
import { useSelector } from 'react-redux';
import Movie from '../../components/Movie/movie';
import WithoutMovie from '../../components/withoutMovie/WithoutMovie';


function UserMovieListPage() {

  const selector = useSelector(state => ({
    movies: state?.addMovieToListReducer?.data
  }));

  return (
    <>
      {console.log('UMMMM', selector?.movies)}
      {selector?.movies.length ?
        selector?.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))
        : <WithoutMovie />
      }

    </>
  );
}

export default UserMovieListPage;
