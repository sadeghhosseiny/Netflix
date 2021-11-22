import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../lib/button/Button';
import Input from '../../lib/input/input';
import styles from './Login.module.css';
import { useHistory } from 'react-router';

function Login() {

  const history = useHistory();
  const [infoOfLogin, setInfoOfLogin] = useState({});
  const [isClickedOnSignIn, setIsClickedOnSignIn] = useState({
    email: false,
    pass: false
  });

  const handleGetInfo = (e) => {
    const { name, value } = e.target;
    setInfoOfLogin({
      ...infoOfLogin, [name]: value
    });
    if (isClickedOnSignIn.email || isClickedOnSignIn.pass) {
      if (infoOfLogin?.email?.includes('@gmail')) {
        setIsClickedOnSignIn({
          ...isClickedOnSignIn, email: false
        });
      }
      if (infoOfLogin?.password?.length > 5) {
        setIsClickedOnSignIn({
          ...isClickedOnSignIn, pass: false
        });
      }
    }
  };


  const handleSignIn = (e) => {
    e.preventDefault();

    if (infoOfLogin?.password?.length < 6 || !(infoOfLogin?.password)) {
      setIsClickedOnSignIn(prev => ({
        ...prev, pass: true
      }));
    }
    if (!!!(infoOfLogin?.email?.includes('@gmail'))) {
      setIsClickedOnSignIn(prev => ({
        ...prev, email: true
      }));
    }

    if (infoOfLogin?.password?.length > 6 && infoOfLogin?.email?.includes('@gmail')) {
      history.push("/home");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.signupScreen}>
        <div className={styles.signinScreen_gradient} />
        <div className={styles.signinScreen_body}>
          <div className={styles.loginBody}>
            <form>
              <h1>Sign In</h1>
              <Input name="email" onChange={handleGetInfo} type="email" placeholder="Email" />
              {isClickedOnSignIn.email &&
                <span>
                  your email is not valid
                </span>
              }
              <Input name="password" onChange={handleGetInfo} type="password" placeholder="Password" />
              {isClickedOnSignIn.pass &&
                <span>
                  your password must greater than 6 characters
                </span>
              }
              <Button onClick={handleSignIn} type="submit" >
                Sign In
              </Button>
            </form>
            <div className={styles.login_signup_now}>
              <p>New to Netflix?&nbsp;</p>
              <Link to="/">
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;