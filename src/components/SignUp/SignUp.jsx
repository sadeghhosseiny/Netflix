import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../../lib/button/Button';
import Input from '../../lib/input/input';
import { setUser } from '../../Redux/actions/actions';
import Login from '../Login/Login';
import styles from './SignUp.module.css';

function SignUp() {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    setIsSignIn(true);
  };

  const handleSetUser = (e) => {
    setUserEmail(e.target.value);
  };

  const handleLoginUser = () => {
    dispatch(setUser(userEmail));
    history.push('/home');
  };

  return (
    <div className={styles.main}>
      {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/aad8cd4d-f4ac-49af-8539-25a81bf459d0/US-en-20210719-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" /> */}
      <div className={styles.signupScreen}>
        <div>
          <img className={styles.signupNavbarLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" />
          <Button onClick={handleLogin} className={isSignIn ? styles.alreadyLogin : styles.signupNavbarBtn}>
            Sign In
          </Button>
        </div>
        <div className={isSignIn ? styles.signinScreen_gradient : styles.signupScreen_gradient} />

        <div className={isSignIn ? styles.signinScreen_body : styles.signupScreen_body}>
          {isSignIn ? (<Login setLogin={setIsSignIn} />) : (
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
