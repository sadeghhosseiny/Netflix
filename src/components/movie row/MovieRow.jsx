import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movie image/movieImage';
import { addToMyList, moviePage } from '../../Redux/actions/actions';
import axios from '../../services/axios/axios';
import MovieBlock from '../MovieBlock/MovieBlock';
import styles from './MovieRow.module.css';

function MovieRow({ item }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const req = await axios.get(item.fetchUrl);
    setMovies(req.data.results);
  };

  useEffect(() => {
    fetchData();
  }, [item.fetchUrl]);


  return (
    <div className={styles.movieContainer}>
      <h1>{item.title}</h1>
      <div className={styles.movies}>
        {movies?.map(movie => (
          movie?.poster_path &&
          <div key={movie.id} className={styles.imageAndButton}>
            <div className={styles.image}>
              <MovieBlock movie={movie} />
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default MovieRow;
