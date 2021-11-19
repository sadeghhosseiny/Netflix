import React, { useEffect } from 'react';
import { useWindowSize } from '../../hook/windowSize';
import Button from '../../lib/button/Button';
import MovieImage from '../../lib/movie image/movieImage';
import { truncate } from '../../lib/truncate/truncate';
import styles from './MoviePageInfo.module.css';
import logo from '../../n1.png';
import { useHistory } from 'react-router';

function MoviePageInfo(props) {
  const movie = props.movieInfo;
  const image_BaseUrl = "https://image.tmdb.org/t/p/original";
  const history = useHistory();

  const [width, height] = useWindowSize();

  return (
    <section className={styles.pageContainer}>
      <div className={styles.navBar}>
        {
          width >= 601 ?
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              alt="netflix logo" /> :
            <img className={styles.navBarLogo} src={logo} alt="NetflixLogo" />
        }
        <div>
          <Button onClick={() => history.push('/')}>JOIN NOW</Button>
          <Button onClick={() => history.push('/logIn')} >SIGN IN</Button>
        </div>
      </div>
      <div className={styles.movieContainer}>
        <div className={styles.description}>
          <h1>
            {movie?.name ? movie?.name : movie?.title}
          </h1>
          <span>
            <span>
              {movie?.release_date?.slice(0, -6)}</span>
          </span>
          <div>
            <p>{truncate(movie?.overview, 250)}</p>
          </div>
          <span>
            <span>
              Score :&nbsp;&nbsp;
            </span>
            {movie?.vote_average}</span>
          <span>
            <span>Number of viewers :&nbsp; </span>
            {movie?.vote_count}</span>
        </div>
        <div className={styles.posterContainer}>
          <div className={styles.poster} style={width >= 601 ? {
            backgroundImage: `url(${image_BaseUrl}${movie.backdrop_path})`
          } : {
            backgroundImage: `url(${image_BaseUrl}${movie.poster_path})`
          }} >
          </div>
        </div>
        {
          width >= 601 ?
            <div className={styles.footer}>
              <div>
                <div>
                  <img className={styles.footerLogo} src={logo} alt="logo" />
                  <p>Watch all you want.</p>
                </div>
                <Button onClick={() => history.push('/')} className={styles.joinBtn}>JOIN NOW</Button>
              </div>
            </div> :
            <div className={styles.footer}>
              <div>
                <img className={styles.footerLogo} src={logo} alt="logo" />
                <div className={styles.mobileContent}>
                  <p>Watch all you want.</p>
                  <Button onClick={() => history.push('/')} className={styles.joinBtn}>JOIN NOW</Button>
                </div>
              </div>
            </div>
        }
      </div>
    </section>
  );
}

export default MoviePageInfo;
