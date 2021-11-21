import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../lib/button/Button';
import Input from '../../lib/input/input';
import styles from './SignUp.module.css';

function SignUp() {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [isClickedOnSingup, setIsClickedOnSingup] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    history.push('/logIn');
  };

  const handleSetUser = (e) => {
    setUserEmail(e.target.value);
    if (isClickedOnSingup) {
      if (userEmail.includes('@gmail')) {
        setIsClickedOnSingup(false);
      }
    }
  };

  const handleLoginUser = (e) => {
    e.preventDefault();
    if (!!!userEmail.includes('@gmail')) {
      setIsClickedOnSingup(true);
    }
    if (userEmail.includes('@gmail')) {
      history.push('/home');
    }
  };

  return (
    <div className={styles.wholePage}>
      <div className={styles.main}>
        <div className={styles.signupScreen}>
          <div>
            <img className={styles.signupNavbarLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
            <Button onClick={handleLogin} className={styles.signupNavbarBtn}>
              Sign In
            </Button>
          </div>
          <div className={styles.signupScreen_gradient} />
          <div className={styles.signupScreen_body}>
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className={styles.divInpt}>
                <form>
                  <Input onChange={handleSetUser} className={styles.signupInput} type="email" placeholder="Email address" />
                  <Button type="submit" onClick={handleLoginUser} className={styles.signupBtn} >
                    Get Started
                  </Button>
                </form>
                {isClickedOnSingup &&
                  <span>your email is not valid</span>
                }
              </div>
            </>
          </div>
        </div>
      </div>
      <div className={styles.enjoyTvAnimation}>
        <div className={styles.contentOfEnjoyTvAnimation}>
          <div>
            <h1>Enjoy on your TV.</h1>
            <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
          </div>
          <div className={styles.tvAndVideo}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
            <div className={styles.videoContainer}>
              <video autoPlay playsInline muted loop __idm_id__="1251393537">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.downloadMovieAnimation}>
        <div className={styles.contentOfDownloadMovieAnimation}>
          <div className={styles.picturesContainer}>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
            <div>
              <div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
              </div>
              <div className={styles.contentOfBorder}>
                <div>
                  <p>Stranger Things</p>
                  <p>Downloading...</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.textsOfDownloadMovies}>
            <h1>
              Download your shows to watch offline.
            </h1>
            <h2>
              Save your favorites easily and always have something to watch.
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.watchEverywhereDiv}>
        <div className={styles.contentOfWatchEverywhere}>
          <div>
            <h1>Watch everywhere.</h1>
            <h2>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</h2>
          </div>
          <div className={styles.tvAndPictureOfWatchEverywhere}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            />
            <div className={styles.videoContainer}>
              <video autoPlay playsInline muted loop __idm_id__="1251393538">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" alt="" />
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <h1>Create profiles for children.</h1>
            <h2>Send children on adventures with their favourite characters in a space made just for them – free with your membership.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
