import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movie image/movieImage';
import { addToMyList } from '../../Redux/actions/actions';
import axios from '../../services/axios/axios';
import styles from './MovieRow.module.css';

function MovieRow({ title, fetchUrl, LargeRow }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const image_BaseUrl = "https://image.tmdb.org/t/p/original";

    const fetchData = async () => {
        const req = await axios.get(fetchUrl);
        setMovies(req.data.results);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddToList = (movieData) => {
        dispatch(addToMyList(movieData));
    };
    const selector = useSelector(state => state.userReducer.movieList);
    console.log("selector", selector.length);
    console.log("selector", selector);
    console.log(movies);

    return (
        <div className={styles.movieContainer}>
            <h1>{title}</h1>
            <div className={styles.movies}>
                {movies?.map(movie => (

                    movie?.poster_path &&
                    // <Link to={`${movie?.id}`}>
                    <div className={styles.imageAndButton}>
                        <div className={styles.image}>
                            <MovieImage className={`${LargeRow ? styles.largeRow : styles.movieImage}`}
                                key={movie.id} imgsrc={`${image_BaseUrl}${movie?.poster_path}`} />
                        </div>
                        <Button className={styles.imageButton} onClick={() => handleAddToList(movie)} title="Add to my list" />
                    </div>
                    // </Link>

                ))}
            </div>
        </div>
    );
}

export default MovieRow;
