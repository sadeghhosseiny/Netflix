import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movie image/movieImage';
import { addMovieToBaket, addToMyList, moviePage } from '../../Redux/actions/actions';
import axios from '../../services/axios/axios';
import styles from './MovieRow.module.css';

function MovieRow({ title, fetchUrl, LargeRow }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const moviePageDispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const selectorMovies = useSelector(state => state.userReducer.allMovies);
    const image_BaseUrl = "https://image.tmdb.org/t/p/original";

    // const fetchData = async () => {
    //     const req = await axios.get(fetchUrl);
    //     // setMovies(req.data.results);
    //     // if (selectorMovies == "") {
    //     dispatch(addMovieToBaket(req.data.results));

    //     // }
    // };

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(fetchUrl);
            // if (selectorMovies == "") {
            //setMovies(req.data.results);
            dispatch(addMovieToBaket(req.data.results));

            // }
        };
        fetchData();
        console.log("FETCHURL --> ,", fetchUrl);
        // setMovies(selectorMovies);
    }, [fetchUrl]);

    // const handleAddToList = (movieData) => {
    //     dispatch(addToMyList(movieData));
    // };

    const handleMoviePage = (movieData) => {
        moviePageDispatch(moviePage(movieData));
    };
    // const selectorMovieList = useSelector(state => state.userReducer.movieList);
    // console.log("selector", selector.length);
    // console.log("selector", selector);
    // console.log("moveis", movies);
    //console.log("selector", selectorMovies);

    return (
        <div className={styles.movieContainer}>
            <h1>{title}</h1>
            <div className={styles.movies}>
                {selectorMovies?.map(movie => (

                    movie?.poster_path &&
                    <div key={movie.id} className={styles.imageAndButton}>
                        <div className={styles.image}>
                            <Link to={`${movie?.id}`}>
                                <MovieImage onClick={() => handleMoviePage(movie)} className={`${LargeRow ? styles.largeRow : styles.movieImage}`}
                                    imgsrc={`${image_BaseUrl}${movie?.poster_path}`} />
                            </Link>
                        </div>
                        <Button className={styles.imageButton} /*onClick={() => handleAddToList(movie)}*/ title="Add to my list" />
                    </div>

                ))}
            </div>
        </div>
    );
}

export default MovieRow;
