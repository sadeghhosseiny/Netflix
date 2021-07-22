import React, { useEffect, useState } from 'react';
import MovieImage from '../../lib/movie image/movieImage';
import axios from '../../services/axios/axios';
import styles from './MovieRow.module.css';

function MovieRow({ title, fetchUrl, LargeRow }) {

    const [movies, setMovies] = useState([]);
    const image_BaseUrl = "https://image.tmdb.org/t/p/original";

    const fetchData = async () => {
        const req = await axios.get(fetchUrl);
        setMovies(req.data.results);
    };

    useEffect(() => {
        fetchData();
    }, []);


    console.log("M2", movies);

    return (
        <div className={styles.movieContainer}>
            <h1>{title}</h1>
            <div className={styles.movies}>
                {movies?.map(movie => (
                    movie?.poster_path &&
                    <MovieImage className={`${LargeRow ? styles.largeRow : styles.movieImage}`}
                        key={movie.id} imgsrc={`${image_BaseUrl}${movie?.poster_path}`} />
                ))}
            </div>
        </div>
    );
}

export default MovieRow;
