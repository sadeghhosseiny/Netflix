import React from 'react';
import MovieImage from '../../lib/movie image/movieImage';
import styles from './MoviePagePoster.module.css';

function MoviePagePoster(props) {
    const movie = props.movieInfo;
    const image_BaseUrl = "https://image.tmdb.org/t/p/original";
    return (
        <div className={styles.mainContainer} style={{
            backgroundImage: `url(${image_BaseUrl}${movie.backdrop_path})`
        }} >

        </div>
    );
}

export default MoviePagePoster;
