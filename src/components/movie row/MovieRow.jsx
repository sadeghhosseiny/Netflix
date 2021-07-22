import React, { useEffect, useState } from 'react';
import MovieImage from '../../lib/movie image/movieImage';
import axios from '../../services/axios/axios';
import styles from './MovieRow.module.css';

function MovieRow({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);
    const image_BaseUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(fetchUrl);
            setMovies(req.data.results);
        };

        fetchData();

    }, []);

    return (
        <div className={styles.movieContainer}>
            <h1>{title}</h1>
            <div className={styles.movies}>
                {movies?.map(movie => (
                    movie?.poster_path &&
                    <MovieImage className={`${styles.movieImage}`}
                        key={movie.id} imgsrc={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} />
                ))}
            </div>
        </div>
    );
}

export default MovieRow;
