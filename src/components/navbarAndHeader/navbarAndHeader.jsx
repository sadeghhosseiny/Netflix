import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../lib/button/Button';
import Input from '../../lib/input/input';
import styles from './navbarAndHeader.module.css';

function NavbarAndHeader() {
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
      if (e.target.value.includes('@gmail')) {
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
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/3e5f9ac0-92d5-4f01-9378-ce9d307f20ed/SG-en-20211108-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/3e5f9ac0-92d5-4f01-9378-ce9d307f20ed/SG-en-20211108-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/3e5f9ac0-92d5-4f01-9378-ce9d307f20ed/SG-en-20211108-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/3e5f9ac0-92d5-4f01-9378-ce9d307f20ed/SG-en-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
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
    </div>
  );
}

export default NavbarAndHeader;
